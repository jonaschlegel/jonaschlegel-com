import Image from 'next/image';
import Link from 'next/link';
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
}

/** Dense, image-led index of visual work. */
export default function ArchiveGrid({
  items,
  sketchfabItems = [],
  showLabels = true,
}: ArchiveGridProps) {
  return (
    <div className="archive-grid">
      {items.map((item, index) => {
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
      {sketchfabItems.map((item) => (
        <SketchfabTile key={`sketchfab-${item.id}`} item={item} />
      ))}
    </div>
  );
}
