import type { StaticImageData } from 'next/image';
import archiveCatalog from '../data/archive-catalog.json';
import type { ArchiveAsset } from './archive-assets';
import type { VisualWork } from './works';

export type ArchiveCategory =
  'illustration' | 'maps' | '3d' | 'web-interfaces' | 'brand-graphic-design';

export type ArchiveCollection = 'main' | 'studies';

interface ArchiveCatalogEntry {
  sourceFolder: 'landing-page' | 'all-work' | 'archive';
  title: string;
  alt: string;
  category: ArchiveCategory;
  collection: ArchiveCollection;
  visible: boolean;
  order: number;
  year?: string;
  practice: string;
  form: string;
  tools?: string[];
  context?: string;
  credits?: string;
  creditLine?: string;
  series?: {
    id: string;
    title: string;
  };
}

export interface ArchiveGridItem {
  filename: string;
  src: StaticImageData;
  alt: string;
  href?: string;
  title: string;
  category: ArchiveCategory;
  collection: ArchiveCollection;
  visible: boolean;
  primaryPractice?: string;
  year?: string;
  form?: string;
  tools?: string[];
  context?: string;
  credits?: string;
  creditLine?: string;
  order?: number;
  seriesId?: string;
  seriesTitle?: string;
}

export interface SketchfabGridItem {
  id: string;
  title: string;
  alt: string;
  primaryPractice?: string;
  visible: boolean;
  order: number;
}

const catalogueWorks = archiveCatalog.works as Record<
  string,
  ArchiveCatalogEntry
>;

function filenameFromSource(source: string) {
  return source.split('/').pop();
}

function fallbackCategory(practice = '', form = ''): ArchiveCategory {
  const value = `${practice} ${form}`.toLowerCase();
  if (/web|interface|website|research platform/.test(value)) {
    return 'web-interfaces';
  }
  if (/brand|identity|logo|graphic design/.test(value)) {
    return 'brand-graphic-design';
  }
  if (/3d|three-dimensional|digital interpretation|model/.test(value)) {
    return '3d';
  }
  if (/map|mapping|cartograph|spatial|geophysical|plan/.test(value)) {
    return 'maps';
  }
  return 'illustration';
}

/** Joins generated image imports to the single editable archive catalogue. */
export function toArchiveGridItems(
  assets: ArchiveAsset[],
  works: VisualWork[],
): ArchiveGridItem[] {
  return assets.map((asset) => {
    const catalogue = catalogueWorks[asset.filename];
    const work = works.find(
      (candidate) =>
        filenameFromSource(candidate.images.primary.src) === asset.filename,
    );
    const context = work?.credits
      ? [
          work.credits.project,
          work.credits.client,
          work.credits.institution,
          work.credits.context,
        ]
          .filter(Boolean)
          .join(' · ')
      : undefined;

    return {
      filename: asset.filename,
      src: asset.src,
      alt: catalogue?.alt ?? work?.images.primary.alt ?? asset.alt,
      href: work ? `/work/${work.slug}` : undefined,
      title: catalogue?.title ?? work?.title ?? asset.alt,
      category:
        catalogue?.category ??
        fallbackCategory(
          work?.classification.primaryPractice,
          work?.classification.form,
        ),
      collection: catalogue?.collection ?? 'main',
      visible: catalogue?.visible ?? true,
      primaryPractice:
        catalogue?.practice ?? work?.classification.primaryPractice,
      year: catalogue?.year ?? work?.creation?.dateLabel,
      form: catalogue?.form ?? work?.classification.form,
      tools: catalogue?.tools ?? work?.creation?.tools,
      context: catalogue?.context ?? context,
      credits: catalogue?.credits ?? work?.credits?.roles?.join(', '),
      creditLine: catalogue?.creditLine,
      order: catalogue?.order ?? work?.display.order,
      seriesId: catalogue?.series?.id,
      seriesTitle: catalogue?.series?.title,
    };
  });
}

export function getSketchfabGridItems(): SketchfabGridItem[] {
  return archiveCatalog.models.map((model) => ({
    id: model.id,
    title: model.title,
    alt: model.alt,
    primaryPractice: model.practice,
    visible: model.visible,
    order: model.order,
  }));
}

/** Selects and orders the homepage collection from the editable catalogue. */
export function getFeaturedArchiveItems(
  items: ArchiveGridItem[],
): ArchiveGridItem[] {
  const itemsByFilename = new Map(
    items.filter((item) => item.visible).map((item) => [item.filename, item]),
  );

  return archiveCatalog.featured.flatMap((filename) => {
    const item = itemsByFilename.get(filename);
    return item ? [item] : [];
  });
}
