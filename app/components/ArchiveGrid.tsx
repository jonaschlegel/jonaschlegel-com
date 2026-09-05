import Image from 'next/image';
import Link from 'next/link';
import type { VisualWork } from '../content/works';

interface ArchiveGridProps {
  works: VisualWork[];
  showLabels?: boolean;
}

/** Dense, image-led index of visual work. */
export default function ArchiveGrid({
  works,
  showLabels = true,
}: ArchiveGridProps) {
  return (
    <div className="archive-grid">
      {works.map((work, index) => (
        <Link
          key={`work-${work.slug}`}
          href={`/work/${work.slug}`}
          className="archive-tile"
          aria-label={`Open ${work.title}`}
          style={{
            flexBasis: `${
              (work.images.primary.src.width / work.images.primary.src.height) *
              15
            }rem`,
            flexGrow:
              work.images.primary.src.width / work.images.primary.src.height,
          }}
        >
          <Image
            src={work.images.primary.src}
            alt={work.images.primary.alt}
            className="archive-tile__image"
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="(max-width: 520px) 100vw, (max-width: 800px) 50vw, 33vw"
          />
          {showLabels ? (
            <span className="archive-tile__label">
              <span>{work.title}</span>
              <small>
                {String(index + 1).padStart(2, '0')} ·{' '}
                {work.classification.primaryPractice}
              </small>
            </span>
          ) : null}
        </Link>
      ))}
    </div>
  );
}
