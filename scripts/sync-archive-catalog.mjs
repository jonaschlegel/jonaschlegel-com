import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const catalogPath = path.join(
  projectRoot,
  'app',
  'data',
  'archive-catalog.json',
);
const imageRoot = path.join(projectRoot, 'app', 'images');
const imageExtensions = new Set([
  '.avif',
  '.gif',
  '.jpeg',
  '.jpg',
  '.png',
  '.webp',
]);
const extraArchiveFilenames = new Set([
  'necessary-reunions.png',
  'pastforwardhub-2.webp',
  'suriname-tijdmachine-1.webp',
]);
const defaultFeaturedFilenames = [
  'archInk-2021-PC.jpg',
  'archInk-2021-WhatThisAwlMeans.jpg',
  'archInk-2024-2.jpg',
  'illustration-bell-beaker.jpg',
  'illustration-bias-eurocentism copy.jpg',
  'illustration-burial-dog-human.jpg',
  'illustration-fueled-by-coffee.jpg',
  'illustration-funnel-beaker-cluster.jpg',
  'illustration-gender-bias.jpg',
  'illustration-kore-reconstruction.jpg',
  'illustration-ochre.jpg',
  'illustration-torso-statue.jpg',
  'Babylon-map.jpg',
  'europe-graffiti-history-spray-can.jpg',
  'trier-roman-economy-geology-and-raw-materials-map.webp',
  'trier-roman-pottery-workshop-reconstruction-close.webp',
  'archaeological-multi-tool.jpg',
  'digital-elevation-model.jpg',
  'bell-beaker-map.jpg',
  'archaeological-stratigraphy.png',
  'pastrace-brand-identity.webp',
  'suriname-tijdmachine-1.webp',
  'necessary-reunions.png',
];
const allowedCategories = new Set([
  'illustration',
  'maps',
  '3d',
  'web-interfaces',
  'brand-graphic-design',
]);
const allowedCollections = new Set(['main', 'studies']);
const allowedSourceFolders = new Set(['landing-page', 'all-work', 'archive']);

const presentationOverrides = {
  'suriname-tijdmachine-1.webp': {
    title: 'Suriname Tijdmachine',
    category: 'web-interfaces',
    practice: 'Web and interfaces',
    year: '2025–2026',
    form: 'Project plate',
    tools: ['Figma', 'TypeScript', 'React', 'Leaflet', 'Linked data'],
    context: 'Huygens Institute and project partners',
    credits: 'Interface design and front-end development',
    order: 5,
  },
  'necessary-reunions.png': {
    title: 'Necessary Reunions',
    category: 'web-interfaces',
    practice: 'Web and interfaces',
    year: '2025',
    form: 'Project plate',
    tools: ['Figma', 'React', 'IIIF', 'Georeferencing'],
    context: 'Huygens Institute and University of Amsterdam',
    credits: 'Research, interface design and user experience',
    order: 16,
  },
  'pastforwardhub-2.webp': {
    title: 'PastForwardHub',
    category: 'web-interfaces',
    practice: 'Web and interfaces',
    year: '2025–present',
    form: 'Project plate',
    tools: ['Figma', 'Next.js', 'TypeScript'],
    context: 'PastForwardHub',
    credits: 'Co-founder, design and web development',
    order: 17,
  },
  'pastrace-brand-identity.webp': {
    title: 'PasTrace',
    category: 'brand-graphic-design',
    practice: 'Brand and graphic design',
    year: '2023',
    form: 'Brand identity plate',
    tools: ['Procreate', 'Vector design'],
    context: 'PasTrace',
    credits: 'Logo design and brand identity development',
    order: 18,
  },
};

const defaultModels = [
  {
    id: '7ed014e9988c4bf196faa32400f52982',
    title: 'Lengyel culture pottery',
    alt: 'Interactive 3D model of Lengyel culture pottery',
    practice: '3D documentation',
  },
  {
    id: '652efe34670f48aca9cd5226fb8e24bc',
    title: 'Statue',
    alt: 'Interactive 3D model of a statue',
    practice: '3D documentation',
  },
  {
    id: 'c9db9791d7f8470da5c6bc40d6903529',
    title: 'Gravestone from Rheinsberg (Germany)',
    alt: 'Interactive 3D model of a gravestone from Rheinsberg, Germany',
    practice: '3D documentation',
  },
  {
    id: 'd4ad1c489d474befb5fb51ca05921e6a',
    title: 'Trowel',
    alt: 'Interactive 3D model of an archaeological trowel',
    practice: '3D documentation',
  },
  {
    id: '5552540138ca4182b790555436358380',
    title: 'Coat-of-arms relief',
    alt: 'Interactive 3D model of a coat-of-arms relief',
    practice: '3D documentation',
  },
];

const archInkYears = new Map(
  Object.entries({
    2021: [
      'All-The-Best-Rubbish.webp',
      'Archaeological-Illustration.jpg',
      'Cache.jpg',
      'Raven.webp',
      'Research-Design.jpg',
      'The-Archaeology-Of-Hearts.jpg',
      'The-Cosmonaut-Recipe.jpg',
      'The-Languages-Of-Archaeology.webp',
      'The-Social-Life-Of-Things.jpg',
    ],
    2022: [
      'The-Line-Between.jpg',
      'Deer-Bone-Tools.jpg',
      'Bones.jpg',
      'Classify.jpg',
      'Exchange-Benin.jpg',
      'Fragile.jpg',
      'Gragoyle-Decoration.jpg',
      'Inscription.jpg',
      'Objectivity.jpg',
      'Circle-Of-A-Posthole.jpg',
      'Recreate.jpg',
      'Scraper.jpg',
    ],
    2023: [
      'Cow-Animal-Bones.jpg',
      'Annotate.jpg',
      'Generative.jpg',
      'Solidarity.jpg',
      'Technology.jpg',
      'Workers.jpg',
    ],
    2024: [
      'Backpack.jpg',
      'Discovery-Media.jpg',
      'Excotic.jpg',
      'Nomadic-Burial.jpg',
      'Roam-Ancient-Sites.jpg',
      'Stonehenge.jpg',
      'Uncharted-Video-Game.jpg',
    ],
    2025: [
      'Ancient-Shell-Tools.jpg',
      'Bronze.jpg',
      'Embodiment.jpg',
      'Exclusion.jpg',
      'Flint-Collage.jpg',
      'Provenance.jpg',
      'Residue.jpg',
      'Stratigraphy.jpg',
      'Visibility.jpg',
    ],
  }).flatMap(([year, filenames]) =>
    filenames.map((filename) => [filename.toLowerCase(), year]),
  ),
);

const tokenCorrections = {
  '3d': '3D',
  amarna: 'Amarna',
  babylon: 'Babylon',
  benin: 'Benin',
  cati: 'Cacti',
  charmeleon: 'Chameleon',
  cidoc: 'CIDOC',
  comparisson: 'Comparison',
  eurocentism: 'Eurocentrism',
  excotic: 'Exotic',
  figureine: 'Figurine',
  gpr: 'GPR',
  gragoyle: 'Gargoyle',
  ipad: 'iPad',
  lengyell: 'Lengyel',
  maya: 'Maya',
  pergamon: 'Pergamon',
  phd: 'PhD',
  rader: 'Radar',
  recontruction: 'Reconstruction',
  reconstructon: 'Reconstruction',
  situtation: 'Situation',
  startigraphy: 'Stratigraphy',
  tak: 'TAK',
  trier: 'Trier',
  troy: 'Troy',
  vienna: 'Vienna',
  willendorf: 'Willendorf',
};
const smallTitleWords = new Set([
  'a',
  'an',
  'and',
  'as',
  'at',
  'by',
  'for',
  'from',
  'in',
  'of',
  'on',
  'the',
  'to',
  'with',
]);

function titleFromFilename(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/^illustration-/i, '')
    .replace(/[_-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (tokenCorrections[lower]) return tokenCorrections[lower];
      if (index > 0 && smallTitleWords.has(lower)) return lower;
      return `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`;
    })
    .join(' ')
    .replace(/Archink/gi, 'archInk');
}

function seriesFor(filename) {
  const value = filename.toLowerCase();
  if (value.includes('bell-beaker')) {
    return ['bell-beaker', 'Bell Beaker studies'];
  }
  if (value.startsWith('venus')) {
    return ['venus', 'Venus figurine studies'];
  }
  if (value.includes('torso')) {
    return ['torso', 'Torso studies'];
  }
  if (value.includes('trowel')) {
    return ['trowel', 'Trowel studies'];
  }
  if (/(stratigraph|startigraph)/.test(value)) {
    return ['stratigraphy', 'Stratigraphy studies'];
  }
  if (value.startsWith('rocher-des-aures')) {
    return ['rocher-des-aures', 'Rocher des Aures excavation plans'];
  }
  if (value.startsWith('trier-roman-pottery-workshop')) {
    return ['trier-pottery-workshop', 'Trier pottery workshop reconstruction'];
  }
  if (value.includes('digital-colour-study')) {
    return ['digital-colour', 'Digital colour studies'];
  }
  return undefined;
}

function categoryFor(filename, practice = '', form = '') {
  const authoredClassification = `${practice} ${form}`.toLowerCase();
  if (/web|interface|website|research platform/.test(authoredClassification)) {
    return 'web-interfaces';
  }
  if (/brand|identity|logo|graphic design/.test(authoredClassification)) {
    return 'brand-graphic-design';
  }
  if (
    /3d|three-dimensional|digital interpretation|model/.test(
      authoredClassification,
    )
  ) {
    return '3d';
  }
  if (
    /map|mapping|cartograph|spatial|geophysical|excavation documentation|orthophoto|hillshade|phase plan|cross-section|cross section|prospection|elevation model|radar|magnetic interpretation/.test(
      authoredClassification,
    )
  ) {
    return 'maps';
  }
  if (authoredClassification.trim()) {
    return 'illustration';
  }

  const filenameWithoutExtension = filename.replace(/\.[^.]+$/, '');
  const value = `${filenameWithoutExtension} ${practice} ${form}`.toLowerCase();
  if (/web|interface|website|research platform/.test(value)) {
    return 'web-interfaces';
  }
  if (/brand|identity|logo|graphic design/.test(value)) {
    return 'brand-graphic-design';
  }
  if (/3d|three-dimensional|digital interpretation|model/.test(value)) {
    return '3d';
  }
  if (
    /map|mapping|cartograph|spatial|geophysical|excavation documentation|orthophoto|hillshade|phase plan|cross-section|cross section|prospection|elevation model|radar|magnetic interpretation/.test(
      value,
    )
  ) {
    return 'maps';
  }
  return 'illustration';
}

function isStudy(filename, practice = '', form = '') {
  const value = `${filename} ${practice} ${form}`.toLowerCase();
  return (
    archInkYears.has(filename.toLowerCase()) ||
    /archink|prompt|scribble|sketch|paper-cut|paper cut|still-life|still life|stippled|blended|colour study|ideas|cluster/.test(
      value,
    ) ||
    /^(a|h|l|o|r)\.[a-z]+$/.test(filename.toLowerCase())
  );
}

function inferredForm(category, collection) {
  if (collection === 'studies') return 'Study or sketch';
  if (category === 'maps') return 'Research map or technical figure';
  if (category === '3d') return '3D reconstruction or digital study';
  if (category === 'web-interfaces') return 'Project plate';
  if (category === 'brand-graphic-design') return 'Brand identity plate';
  return 'Illustration';
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw error;
  }
}

async function imageFiles(folder) {
  const entries = await readdir(path.join(imageRoot, folder), {
    withFileTypes: true,
  });
  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        imageExtensions.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((first, second) =>
      first.localeCompare(second, undefined, { numeric: true }),
    );
}

function validateRecord(filename, record) {
  const prefix = `Invalid archive record ${filename}:`;
  if (!allowedSourceFolders.has(record.sourceFolder)) {
    throw new Error(
      `${prefix} sourceFolder must name an archive image folder.`,
    );
  }
  if (!record.title?.trim() || !record.alt?.trim()) {
    throw new Error(`${prefix} title and alt must both contain text.`);
  }
  if (!allowedCategories.has(record.category)) {
    throw new Error(`${prefix} category is not one of the supported filters.`);
  }
  if (!allowedCollections.has(record.collection)) {
    throw new Error(`${prefix} collection must be "main" or "studies".`);
  }
  if (typeof record.visible !== 'boolean' || !Number.isFinite(record.order)) {
    throw new Error(
      `${prefix} visible must be boolean and order must be a number.`,
    );
  }
  if (
    record.series &&
    (!record.series.id?.trim() || !record.series.title?.trim())
  ) {
    throw new Error(`${prefix} series requires both an id and title.`);
  }
}

const existing = await readJson(catalogPath, { works: {}, models: [] });
const worksModuleUrl = pathToFileURL(
  path.join(projectRoot, 'app', 'content', 'works.ts'),
);
const { visualWorks } = await import(worksModuleUrl.href);
const authoredByFilename = new Map(
  visualWorks.map((work) => [work.images.primary.src.split('/').pop(), work]),
);
const allWorkFilenames = await imageFiles('all-work');
const landingPageFilenames = await imageFiles('landing-page');
const archiveFilenames = (await imageFiles('archive')).filter((filename) =>
  extraArchiveFilenames.has(filename),
);
const discovered = [
  ...landingPageFilenames.map((filename) => ({
    filename,
    sourceFolder: 'landing-page',
  })),
  ...allWorkFilenames.map((filename) => ({
    filename,
    sourceFolder: 'all-work',
  })),
  ...archiveFilenames.map((filename) => ({
    filename,
    sourceFolder: 'archive',
  })),
];

let added = 0;
const records = { ...existing.works };

for (const [index, asset] of discovered.entries()) {
  if (records[asset.filename]) continue;

  const authored = authoredByFilename.get(asset.filename);
  const override = presentationOverrides[asset.filename] ?? {};
  const practice =
    override.practice ?? authored?.classification.primaryPractice;
  const category =
    override.category ??
    categoryFor(asset.filename, practice, authored?.classification.form);
  const collection = isStudy(
    asset.filename,
    practice,
    authored?.classification.form,
  )
    ? 'studies'
    : 'main';
  const title =
    override.title ?? authored?.title ?? titleFromFilename(asset.filename);
  const context = authored?.credits
    ? [
        authored.credits.project,
        authored.credits.client,
        authored.credits.institution,
        authored.credits.context,
      ]
        .filter(Boolean)
        .join(' · ')
    : undefined;
  const series = seriesFor(asset.filename);
  const year =
    override.year ??
    authored?.creation?.dateLabel ??
    archInkYears.get(asset.filename.toLowerCase()) ??
    asset.filename.match(/(?:19|20)\d{2}/)?.[0];

  records[asset.filename] = {
    sourceFolder: asset.sourceFolder,
    title,
    alt: authored?.images.primary.alt ?? title,
    category,
    collection,
    visible: true,
    order: override.order ?? authored?.display.order ?? 1000 + index * 10,
    ...(year ? { year } : {}),
    practice: practice ?? (category === 'maps' ? 'Maps' : 'Illustration'),
    form:
      override.form ??
      authored?.classification.form ??
      inferredForm(category, collection),
    ...((override.tools ?? authored?.creation?.tools)
      ? { tools: override.tools ?? authored.creation.tools }
      : {}),
    ...((override.context ?? context)
      ? { context: override.context ?? context }
      : {}),
    ...((override.credits ?? authored?.credits?.roles?.join(', '))
      ? { credits: override.credits ?? authored.credits.roles.join(', ') }
      : {}),
    ...(series ? { series: { id: series[0], title: series[1] } } : {}),
  };
  added += 1;
}

const sortedRecords = Object.fromEntries(
  Object.entries(records).sort(([, first], [, second]) => {
    const orderDifference = (first.order ?? 10_000) - (second.order ?? 10_000);
    if (orderDifference !== 0) return orderDifference;
    return first.title.localeCompare(second.title);
  }),
);
const models = existing.models.length
  ? existing.models
  : defaultModels.map((model, index) => ({
      ...model,
      visible: true,
      order: 5000 + index * 10,
    }));
const featured = existing.featured ?? defaultFeaturedFilenames;

for (const [filename, record] of Object.entries(sortedRecords)) {
  validateRecord(filename, record);
}
for (const model of models) {
  if (
    !model.id?.trim() ||
    !model.title?.trim() ||
    !model.alt?.trim() ||
    typeof model.visible !== 'boolean' ||
    !Number.isFinite(model.order)
  ) {
    throw new Error(
      `Invalid interactive model record: ${model.id || 'missing id'}.`,
    );
  }
}
if (
  new Set(featured).size !== featured.length ||
  featured.some((filename) => !sortedRecords[filename])
) {
  throw new Error(
    'Invalid featured list: filenames must be unique and present in works.',
  );
}

const output = {
  $schema: './archive-catalog.schema.json',
  description:
    'Editable catalogue for the homepage selection and All work archive. Filename keys must match the image files; all other fields may be edited.',
  featured,
  works: sortedRecords,
  models,
};

await writeFile(catalogPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(
  `Archive catalogue contains ${Object.keys(sortedRecords).length} images and ${models.length} models (${added} added, existing entries preserved).`,
);
