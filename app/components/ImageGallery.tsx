'use client';

import Image, { type StaticImageData } from 'next/image';

interface GalleryImage {
  src: StaticImageData;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
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
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
