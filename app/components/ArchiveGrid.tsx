import Image from 'next/image';
import Link from 'next/link';
import type { VisualWork, WorkShape } from '../data/work';

const shapeClasses: Record<WorkShape, string> = {
  feature: 'archive-tile--feature',
  wide: 'archive-tile--wide',
  square: 'archive-tile--square',
  tall: 'archive-tile--tall',
};

interface ArchiveGridProps {
  works: VisualWork[];
}

/** Dense, image-led index of visual work. */
export default function ArchiveGrid({ works }: ArchiveGridProps) {
  return (
    <div className="archive-grid">
      {works.map((work, index) => (
        <Link
          key={`work-${work.slug}`}
          href={`/work/${work.slug}`}
          className={`archive-tile ${shapeClasses[work.shape]}`}
          aria-label={`Open ${work.title}`}
        >
          <Image
            src={work.image}
            alt={work.alt}
            fill
            className="archive-tile__image"
            sizes="(max-width: 520px) 50vw, (max-width: 800px) 33vw, 25vw"
          />
          <span className="archive-tile__label">
            <span>{work.title}</span>
            <small>
              {String(index + 1).padStart(2, '0')} · {work.practice}
            </small>
          </span>
        </Link>
      ))}
    </div>
  );
}
