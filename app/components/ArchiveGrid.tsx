'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Route } from 'next';
import type {
  ArchiveGridItem,
  SketchfabGridItem,
} from '../content/archive-grid';
import SketchfabTile from './SketchfabTile';

interface ArchiveGridProps {
  items: ArchiveGridItem[];
  sketchfabItems?: SketchfabGridItem[];
  showLabels?: boolean;
  randomize?: boolean;
}

function shuffled<T>(values: T[]) {
  return [...values].sort(() => Math.random() - 0.5);
}

type ArchiveTile =
  | { kind: 'image'; item: ArchiveGridItem }
  | { kind: 'sketchfab'; item: SketchfabGridItem };

/** Dense, image-led index of visual work. */
export default function ArchiveGrid({
  items,
  sketchfabItems = [],
  showLabels = true,
  randomize = false,
}: ArchiveGridProps) {
  const [orderedTiles, setOrderedTiles] = useState<ArchiveTile[]>([
    ...items.map((item) => ({ kind: 'image' as const, item })),
    ...sketchfabItems.map((item) => ({ kind: 'sketchfab' as const, item })),
  ]);

  useEffect(() => {
    if (!randomize) return;

    const shuffleTimer = window.setTimeout(() => {
      setOrderedTiles(
        shuffled([
          ...items.map((item) => ({ kind: 'image' as const, item })),
          ...sketchfabItems.map((item) => ({
            kind: 'sketchfab' as const,
            item,
          })),
        ]),
      );
    }, 0);

    return () => window.clearTimeout(shuffleTimer);
  }, [items, randomize, sketchfabItems]);

  return (
    <div className="archive-grid">
      {orderedTiles.map((tile, index) => {
        if (tile.kind === 'sketchfab') {
          return (
            <SketchfabTile key={`sketchfab-${tile.item.id}`} item={tile.item} />
          );
        }

        const item = tile.item;
        const content = (
          <Image
            src={item.src}
            alt={item.alt}
            className="archive-tile__image"
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="(max-width: 520px) 100vw, (max-width: 800px) 50vw, 33vw"
          />
        );
        const label = showLabels ? (
          <span className="archive-tile__label">
            <span>{item.title}</span>
            {item.primaryPractice && <small>{item.primaryPractice}</small>}
          </span>
        ) : null;
        const tileProps = {
          className: 'archive-tile',
          style: {
            flexBasis: `${(item.src.width / item.src.height) * 15}rem`,
            flexGrow: item.src.width / item.src.height,
          },
        };

        return item.href ? (
          <Link
            key={`work-${item.href}`}
            href={item.href as Route}
            {...tileProps}
            aria-label={`Open ${item.title}`}
          >
            {content}
            {label}
          </Link>
        ) : (
          <div key={`asset-${item.src.src}`} {...tileProps}>
            {content}
            {label}
          </div>
        );
      })}
    </div>
  );
}
