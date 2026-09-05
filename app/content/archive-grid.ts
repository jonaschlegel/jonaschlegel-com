import type { StaticImageData } from 'next/image';
import type { ArchiveAsset } from './archive-assets';
import type { VisualWork } from './works';
import imageMetadata from '../data/image-metadata.json';

export interface ArchiveGridItem {
  src: StaticImageData;
  alt: string;
  href?: string;
  title?: string;
  primaryPractice?: string;
}

export interface SketchfabGridItem {
  id: string;
  title: string;
  alt: string;
  primaryPractice?: string;
}

type ImageMetadata = {
  title?: string;
  alt?: string;
  practice?: string;
};

function filenameFromSource(source: string) {
  return source.split('/').pop();
}

/** Combines folder-discovered images with authored metadata when available. */
export function toArchiveGridItems(
  assets: ArchiveAsset[],
  works: VisualWork[],
): ArchiveGridItem[] {
  return assets.map((asset) => {
    const metadata = (imageMetadata.metadata as Record<string, ImageMetadata>)[
      asset.filename
    ];
    const work = works.find(
      (candidate) =>
        filenameFromSource(candidate.images.primary.src) === asset.filename,
    );

    return {
      src: asset.src,
      alt: metadata?.alt ?? work?.images.primary.alt ?? asset.alt,
      href: work ? `/work/${work.slug}` : undefined,
      title: metadata?.title ?? work?.title ?? asset.alt,
      primaryPractice:
        metadata?.practice ?? work?.classification.primaryPractice,
    };
  });
}

export function getSketchfabGridItems(): SketchfabGridItem[] {
  return imageMetadata.metadata.sketchfab;
}
