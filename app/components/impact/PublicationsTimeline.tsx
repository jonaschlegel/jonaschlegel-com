'use client';

import { type FC, useState } from 'react';
import type { PublicationTimelineData } from '../../data/impact-utils';

interface PublicationsTimelineProps {
  timeline: PublicationTimelineData;
}

interface ActiveSegment {
  year: number;
  type: string;
  count: number;
  color: string;
}

/** Responsive stacked bar chart showing research outputs by year and type. */
const PublicationsTimeline: FC<PublicationsTimelineProps> = ({ timeline }) => {
  const [activeSegment, setActiveSegment] = useState<ActiveSegment | null>(
    null,
  );

  return (
    <section className="mb-16">
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
          Research Output Timeline
        </p>
        <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
          Publications Over The Years
        </h2>
        <p className="text-gray-600">
          A year-by-year view of the CV publication list. Each bar stacks exact
          output types, so you can see when journal articles, talks, posters,
          podcast episodes, and other formats cluster together.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-5">
        <div className="mb-6 flex min-h-[3.5rem] items-center rounded-md border border-primary-teal/20 bg-primary-cream px-4 py-3 text-sm text-gray-600">
          {activeSegment ? (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-sm border border-black/5"
                  style={{ backgroundColor: activeSegment.color }}
                />
                <span className="font-medium text-gray-700">
                  {activeSegment.type}
                </span>
              </div>
              <span>{activeSegment.count} output(s)</span>
              <span className="text-gray-500">in {activeSegment.year}</span>
            </div>
          ) : (
            <p className="my-0 text-sm text-gray-600">
              Hover a stacked section to see the exact output type and count for
              that year.
            </p>
          )}
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max items-end gap-5 border-t border-gray-200 pt-6">
            {timeline.years.map((year) => {
              const barHeight = `${(year.total / timeline.maxTotal) * 100}%`;

              return (
                <figure
                  key={`timeline-year-${year.year}`}
                  className="flex min-w-[4.75rem] flex-col items-center gap-2.5"
                >
                  <div className="flex h-64 w-14 items-end justify-center">
                    <div className="relative flex h-full w-full items-end border border-gray-200 bg-primary-cream/70 p-1">
                      <div
                        role="img"
                        aria-label={`${year.year}: ${year.total} total outputs. ${year.segments
                          .map((segment) => `${segment.count} ${segment.type}`)
                          .join(', ')}.`}
                        className="flex w-full flex-col justify-end overflow-hidden"
                        style={{ height: barHeight }}
                      >
                        {year.segments.map((segment) => (
                          <button
                            key={`timeline-segment-${year.year}-${segment.type}`}
                            title={`${year.year}: ${segment.count} ${segment.type}`}
                            type="button"
                            onMouseEnter={() =>
                              setActiveSegment({
                                year: year.year,
                                type: segment.type,
                                count: segment.count,
                                color: segment.color,
                              })
                            }
                            onFocus={() =>
                              setActiveSegment({
                                year: year.year,
                                type: segment.type,
                                count: segment.count,
                                color: segment.color,
                              })
                            }
                            className="block w-full border-t border-white/30 first:border-t-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-inset"
                            style={{
                              height: `${(segment.count / year.total) * 100}%`,
                              backgroundColor: segment.color,
                            }}
                            aria-label={`${year.year}: ${segment.count} ${segment.type}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <figcaption className="text-center">
                    <div className="font-merriweather text-base font-semibold text-gray-900">
                      {year.total}
                    </div>
                    <div className="text-xs text-gray-600">{year.year}</div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        <ul className="sr-only">
          {timeline.years.map((year) => (
            <li key={`timeline-summary-${year.year}`}>
              {year.year}: {year.total} total outputs.{' '}
              {year.segments
                .map((segment) => `${segment.count} ${segment.type}`)
                .join(', ')}
              .
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PublicationsTimeline;
