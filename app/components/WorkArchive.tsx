'use client';

import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';
import type {
  ArchiveCategory,
  ArchiveGridItem,
  SketchfabGridItem,
} from '../content/archive-grid';
import SketchfabTile from './SketchfabTile';

type ArchiveFilter = 'all' | ArchiveCategory;

interface WorkArchiveProps {
  items: ArchiveGridItem[];
  sketchfabItems: SketchfabGridItem[];
}

interface ImageRecord {
  kind: 'image';
  key: string;
  title: string;
  items: ArchiveGridItem[];
}

interface ModelRecord {
  kind: 'model';
  key: string;
  title: string;
  item: SketchfabGridItem;
  order: number;
}

type ArchiveRecord = ImageRecord | ModelRecord;

const filters: { value: ArchiveFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'illustration', label: 'Illustration' },
  { value: 'maps', label: 'Maps' },
  { value: '3d', label: '3D' },
  { value: 'web-interfaces', label: 'Web and interfaces' },
  { value: 'brand-graphic-design', label: 'Brand and graphic design' },
];

const categoryLabels: Record<ArchiveCategory, string> = {
  illustration: 'Illustration',
  maps: 'Maps',
  '3d': '3D',
  'web-interfaces': 'Web and interfaces',
  'brand-graphic-design': 'Brand and graphic design',
};

function itemSort(first: ArchiveGridItem, second: ArchiveGridItem) {
  const orderDifference = (first.order ?? 10_000) - (second.order ?? 10_000);
  if (orderDifference !== 0) return orderDifference;
  return first.title.localeCompare(second.title);
}

function groupItems(items: ArchiveGridItem[]): ImageRecord[] {
  const records = new Map<string, ImageRecord>();

  for (const item of [...items].sort(itemSort)) {
    const key = item.seriesId
      ? `series-${item.seriesId}`
      : `image-${item.filename}`;
    const existing = records.get(key);

    if (existing) {
      existing.items.push(item);
      if (item.href && !existing.items[0]?.href) {
        existing.items.sort(
          (first, second) =>
            Number(Boolean(second.href)) - Number(Boolean(first.href)),
        );
      }
      continue;
    }

    records.set(key, {
      kind: 'image',
      key,
      title: item.seriesTitle ?? item.title,
      items: [item],
    });
  }

  return [...records.values()].map((record) =>
    record.items.length === 1
      ? { ...record, title: record.items[0]!.title }
      : record,
  );
}

function cardStyle(item: ArchiveGridItem): CSSProperties {
  const ratio = item.src.width / item.src.height;

  return {
    flexBasis: `${ratio * 15}rem`,
    flexGrow: ratio,
  };
}

function recordImageCount(record: ArchiveRecord) {
  return record.kind === 'image' ? record.items.length : 1;
}

function WorkLightbox({
  record,
  onClose,
}: {
  record: ImageRecord;
  onClose: () => void;
}) {
  const primary = record.items[0]!;
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLElement>(null);

  useEffect(() => {
    closeButton.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = dialog.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled])',
      );
      if (!focusable?.length) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="work-lightbox">
      <button
        type="button"
        className="work-lightbox__backdrop"
        onClick={onClose}
        aria-label="Close work view"
      />
      <section
        ref={dialog}
        className="work-lightbox__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-lightbox-title"
      >
        <header className="work-lightbox__header">
          <div>
            <p className="archive-eyebrow">
              {categoryLabels[primary.category]}
              {primary.year ? ` · ${primary.year}` : ''}
            </p>
            <h2 id="work-lightbox-title">{record.title}</h2>
          </div>
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            aria-label="Close work view"
          >
            Close
          </button>
        </header>

        <div className="work-lightbox__body">
          <div className="work-lightbox__images">
            {record.items.map((item) => (
              <figure key={`lightbox-${item.filename}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 800px) 100vw, 70vw"
                />
                {record.items.length > 1 ? (
                  <figcaption>{item.title}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>

          <aside className="work-lightbox__facts">
            <dl>
              {primary.year ? (
                <div>
                  <dt>Year</dt>
                  <dd>{primary.year}</dd>
                </div>
              ) : null}
              <div>
                <dt>Practice</dt>
                <dd>
                  {primary.primaryPractice ?? categoryLabels[primary.category]}
                </dd>
              </div>
              {record.items.length > 1 ? (
                <div>
                  <dt>Form</dt>
                  <dd>Image series · {record.items.length} works</dd>
                </div>
              ) : primary.form ? (
                <div>
                  <dt>Form</dt>
                  <dd>{primary.form}</dd>
                </div>
              ) : null}
              {primary.tools?.length ? (
                <div>
                  <dt>Tools</dt>
                  <dd>{primary.tools.join(', ')}</dd>
                </div>
              ) : null}
              {primary.context ? (
                <div>
                  <dt>Project / context</dt>
                  <dd>{primary.context}</dd>
                </div>
              ) : null}
              {primary.credits || primary.creditLine ? (
                <div>
                  <dt>Credits</dt>
                  <dd>
                    {[primary.credits, primary.creditLine]
                      .filter(Boolean)
                      .join(' · ')}
                  </dd>
                </div>
              ) : null}
            </dl>
            {primary.href ? (
              <Link href={primary.href as Route}>Open the full record</Link>
            ) : null}
          </aside>
        </div>
      </section>
    </div>
  );
}

/** Filterable, metadata-led visual archive. */
export default function WorkArchive({
  items,
  sketchfabItems,
}: WorkArchiveProps) {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<ImageRecord>();
  const returnFocus = useRef<HTMLButtonElement | null>(null);

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredImages = useMemo(
    () =>
      items.filter((item) => {
        if (!item.visible) return false;
        const matchesCategory =
          activeFilter === 'all'
            ? item.collection === 'main'
            : item.category === activeFilter;
        const matchesQuery =
          !normalizedQuery ||
          item.title.toLocaleLowerCase().includes(normalizedQuery);
        return matchesCategory && matchesQuery;
      }),
    [activeFilter, items, normalizedQuery],
  );
  const filteredModels = useMemo(
    () =>
      sketchfabItems.filter(
        (item) =>
          item.visible &&
          (activeFilter === 'all' || activeFilter === '3d') &&
          (!normalizedQuery ||
            item.title.toLocaleLowerCase().includes(normalizedQuery)),
      ),
    [activeFilter, normalizedQuery, sketchfabItems],
  );
  const records: ArchiveRecord[] = [
    ...groupItems(filteredImages),
    ...filteredModels.map((item) => ({
      kind: 'model' as const,
      key: `model-${item.id}`,
      title: item.title,
      item,
      order: item.order,
    })),
  ].sort((first, second) => {
    const firstOrder =
      first.kind === 'image' ? (first.items[0]?.order ?? 10_000) : first.order;
    const secondOrder =
      second.kind === 'image'
        ? (second.items[0]?.order ?? 10_000)
        : second.order;
    return firstOrder - secondOrder;
  });
  const imageCount = records.reduce(
    (total, record) => total + recordImageCount(record),
    0,
  );

  const openRecord = (record: ImageRecord, trigger: HTMLButtonElement) => {
    returnFocus.current = trigger;
    setSelected(record);
  };
  const closeRecord = () => {
    setSelected(undefined);
    window.setTimeout(() => returnFocus.current?.focus(), 0);
  };

  return (
    <section className="work-archive" aria-labelledby="work-archive-heading">
      <h2 id="work-archive-heading" className="sr-only">
        Browse the visual archive
      </h2>
      <div className="work-archive__controls">
        <div
          className="work-archive__filters"
          aria-label="Filter work by practice"
        >
          {filters.map((filter) => (
            <button
              key={`archive-filter-${filter.value}`}
              type="button"
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <label className="work-archive__search">
          <span className="sr-only">Search work by title</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title"
          />
        </label>
      </div>

      <div className="work-archive__status" aria-live="polite">
        <span>
          {records.length} {records.length === 1 ? 'record' : 'records'}
          {imageCount !== records.length ? ` · ${imageCount} works` : ''}
        </span>
        {activeFilter === 'all' ? (
          <span>
            All shows the main collection. Illustration also includes archInk
            and studies.
          </span>
        ) : null}
      </div>

      {records.length ? (
        <div className="work-archive__grid">
          {records.map((record, index) => {
            if (record.kind === 'model') {
              return (
                <div
                  className="work-archive__model"
                  key={`archive-${record.key}`}
                >
                  <SketchfabTile item={record.item} />
                </div>
              );
            }

            const primary = record.items[0]!;
            return (
              <button
                type="button"
                className="archive-tile work-archive__card"
                style={cardStyle(primary)}
                key={`archive-${record.key}`}
                onClick={(event) => openRecord(record, event.currentTarget)}
                aria-label={`View ${record.title}`}
              >
                <span className="work-archive__media">
                  <Image
                    src={primary.src}
                    alt={primary.alt}
                    className="archive-tile__image"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    sizes="(max-width: 520px) 100vw, (max-width: 800px) 50vw, 33vw"
                  />
                  {record.items.length > 1 ? (
                    <span className="work-archive__series-count">
                      {record.items.length} images
                    </span>
                  ) : null}
                </span>
                <span className="archive-tile__label">
                  <span className="archive-tile__label-copy">
                    <span>{record.title}</span>
                  </span>
                  <small>
                    {categoryLabels[primary.category]}
                    {primary.year ? ` · ${primary.year}` : ''}
                  </small>
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <p className="work-archive__empty">
          No work matches this title and filter.
        </p>
      )}

      {selected ? (
        <WorkLightbox record={selected} onClose={closeRecord} />
      ) : null}
    </section>
  );
}
