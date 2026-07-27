'use client';

import type { StaticImageData } from 'next/dist/shared/lib/image-external';
import Image from 'next/image';

interface GalleryImage {
  src: StaticImageData;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const galleryClasses =
    images.length === 1
      ? 'columns-1 max-w-4xl'
      : images.length === 2
        ? 'columns-1 gap-4 sm:columns-2'
        : 'columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4';
  const imageSizes =
    images.length === 1
      ? '(max-width: 896px) 100vw, 896px'
      : images.length === 2
        ? '(max-width: 640px) 100vw, 50vw'
        : '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw';

  return (
    <div className={galleryClasses}>
      {images.map((image) => (
        <div
          key={`gallery-${image.src.src}`}
          className="mb-4 break-inside-avoid"
        >
          <Image
            src={image.src}
            alt={image.caption ?? 'Gallery image'}
            width={600}
            height={600}
            sizes={imageSizes}
            className="h-auto w-full rounded-lg"
          />
          {image.caption && (
            <p className="mt-1 text-center text-xs text-neutral-500">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
