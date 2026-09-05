import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const imageRoot = path.join(projectRoot, 'app', 'images');
const outputPath = path.join(
  projectRoot,
  'app',
  'content',
  'archive-assets.ts',
);
const imageExtensions = new Set([
  '.avif',
  '.gif',
  '.jpeg',
  '.jpg',
  '.png',
  '.webp',
]);

function labelFromFilename(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function variableName(folder, filename, index) {
  const stem = filename.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9]+/g, ' ');
  const safeFolder = folder.replace(/[^a-zA-Z0-9]+/g, ' ');
  const camelStem = stem
    .trim()
    .split(/\s+/)
    .map((part, partIndex) =>
      partIndex === 0
        ? part.toLowerCase()
        : `${part[0]?.toUpperCase()}${part.slice(1)}`,
    )
    .join('');
  const folderPrefix = safeFolder
    .trim()
    .split(/\s+/)
    .map((part, partIndex) =>
      partIndex === 0
        ? part.toLowerCase()
        : `${part[0]?.toUpperCase()}${part.slice(1)}`,
    )
    .join('');
  return `${folderPrefix}${camelStem || 'Image'}${index}`;
}

async function collectFolder(folder) {
  const folderPath = path.join(imageRoot, folder);
  const entries = await readdir(folderPath, { withFileTypes: true });
  const files = entries
    .filter(
      (entry) =>
        entry.isFile() &&
        imageExtensions.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((first, second) =>
      first.localeCompare(second, undefined, { numeric: true }),
    );

  return await Promise.all(
    files.map(async (filename, index) => {
      const absolutePath = path.join(folderPath, filename);
      const image = await sharp(absolutePath).metadata();
      if (!image.width || !image.height) {
        throw new Error(`Could not read dimensions for ${absolutePath}`);
      }

      return {
        filename,
        importName: variableName(folder, filename, index),
        importPath: `../images/${folder}/${filename}`,
        width: image.width,
        height: image.height,
        alt: labelFromFilename(filename),
      };
    }),
  );
}

const folders = ['landing-page', 'all-work', 'archive'];
const collected = Object.fromEntries(
  await Promise.all(
    folders.map(async (folder) => [folder, await collectFolder(folder)]),
  ),
);

const imports = folders.flatMap((folder) =>
  collected[folder].map(
    (asset) => `import ${asset.importName} from '${asset.importPath}';`,
  ),
);

const renderEntries = (folder) => `[
${collected[folder]
  .map(
    (asset) =>
      `  { filename: ${JSON.stringify(asset.filename)}, src: ${asset.importName}, width: ${asset.width}, height: ${asset.height}, alt: ${JSON.stringify(asset.alt)} },`,
  )
  .join('\n')}
]`;

const output = `import type { StaticImageData } from 'next/image';

${imports.join('\n')}

export interface ArchiveAsset {
  filename: string;
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
}

export const landingPageAssets: ArchiveAsset[] = ${renderEntries('landing-page')};
export const allWorkAssets: ArchiveAsset[] = ${renderEntries('all-work')};
export const archiveAssets: ArchiveAsset[] = ${renderEntries('archive')};
`;

await writeFile(outputPath, output);
console.log(`Generated archive asset manifest for ${folders.join(' and ')}`);
