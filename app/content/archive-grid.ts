import type { StaticImageData } from 'next/image';
import type { ArchiveAsset } from './archive-assets';
import type { VisualWork } from './works';

export interface ArchiveGridItem {
  src: StaticImageData;
  alt: string;
  href?: string;
  title?: string;
  primaryPractice?: string;
}

function filenameFromSource(source: string) {
  return source.split('/').pop();
}

/** Combines folder-discovered images with authored metadata when available. */
export function toArchiveGridItems(
  assets: ArchiveAsset[],
  works: VisualWork[],
): ArchiveGridItem[] {
  return assets.map((asset) => {
    const work = works.find(
      (candidate) =>
        filenameFromSource(candidate.images.primary.src) === asset.filename,
    );

    return {
      src: asset.src,
      alt: work?.images.primary.alt ?? asset.alt,
      href: work ? `/work/${work.slug}` : undefined,
      title: work?.title ?? asset.alt,
      primaryPractice: work?.classification.primaryPractice,
    };
  });
}
