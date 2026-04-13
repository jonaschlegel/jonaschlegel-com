'use client';

import { type FC, useState } from 'react';

interface GrowthTimelineProps {
  history: ImpactSnapshot[];
  current: ImpactSnapshot;
}

type MetricOption = {
  key: string;
  label: string;
  getValue: (s: ImpactSnapshot) => number;
};

const METRIC_OPTIONS: MetricOption[] = [
  {
    key: 'publications',
    label: 'Publications',
    getValue: (s) => s.academic.totalPublications,
  },
  {
    key: 'citations',
    label: 'Citations',
    getValue: (s) => s.academic.totalCitations,
  },
  {
    key: 'hIndex',
    label: 'h-index',
    getValue: (s) => s.academic.hIndex,
  },
  {
    key: 'podcastEpisodes',
    label: 'Podcast Episodes',
    getValue: (s) => s.sciComm.podcastEpisodes,
  },
  {
    key: 'totalFollowers',
    label: 'Total Followers',
    getValue: (s) => s.digitalPresence.totalFollowers,
  },
  {
    key: 'communityMembers',
    label: 'Community Members',
    getValue: (s) => s.community.communityMembers,
  },
];

const CHART_WIDTH = 600;
const CHART_HEIGHT = 200;
const PADDING = { top: 20, right: 40, bottom: 40, left: 50 };

/** SVG line chart showing growth of a selected metric over time. */
const GrowthTimeline: FC<GrowthTimelineProps> = ({ history, current }) => {
  const [selectedMetric, setSelectedMetric] = useState<string>('publications');

  const option = METRIC_OPTIONS.find((o) => o.key === selectedMetric)!;
  const allSnapshots = [...history, current].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const values = allSnapshots.map((s) => option.getValue(s));
  const dates = allSnapshots.map((s) => new Date(s.date));

  const maxValue = Math.max(...values, 1);
  const minDate = dates[0].getTime();
  const maxDate = dates[dates.length - 1].getTime();
  const dateRange = maxDate - minDate || 1;

  const plotWidth = CHART_WIDTH - PADDING.left - PADDING.right;
  const plotHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;

  const points = values.map((v, i) => {
    const x =
      PADDING.left + ((dates[i].getTime() - minDate) / dateRange) * plotWidth;
    const y = PADDING.top + plotHeight - (v / maxValue) * plotHeight;
    return { x, y, value: v, date: dates[i] };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${PADDING.top + plotHeight} L ${points[0].x} ${PADDING.top + plotHeight} Z`;

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Growth Over Time
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        Timeline
      </h2>
      <p className="mb-6 max-w-2xl text-gray-600">
        Track how key metrics evolve over quarterly snapshots. Select a metric
        to see its growth trajectory.
      </p>

      {/* Metric selector */}
      <div className="mb-6 flex flex-wrap gap-2">
        {METRIC_OPTIONS.map((o) => (
          <button
            key={o.key}
            type="button"
            onClick={() => setSelectedMetric(o.key)}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
              selectedMetric === o.key
                ? 'bg-primary-green text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      {allSnapshots.length >= 2 ? (
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white p-4">
          <svg
            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
            className="w-full"
            role="img"
            aria-label={`Line chart showing ${option.label} over time`}
          >
            {/* Y-axis grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
              const y = PADDING.top + plotHeight - frac * plotHeight;
              const label = Math.round(frac * maxValue);
              return (
                <g key={frac}>
                  <line
                    x1={PADDING.left}
                    y1={y}
                    x2={PADDING.left + plotWidth}
                    y2={y}
                    stroke="#f3f4f6"
                    strokeWidth="1"
                  />
                  <text
                    x={PADDING.left - 8}
                    y={y + 3}
                    textAnchor="end"
                    className="fill-gray-400 text-[10px]"
                  >
                    {label}
                  </text>
                </g>
              );
            })}

            {/* Area fill */}
            <path d={areaPath} fill="rgba(0, 157, 111, 0.08)" />

            {/* Line */}
            <path
              d={linePath}
              fill="none"
              stroke="#009D6F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points */}
            {points.map((p, i) => (
              <g key={allSnapshots[i].date}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill="#009D6F"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Value label */}
                <text
                  x={p.x}
                  y={p.y - 10}
                  textAnchor="middle"
                  className="fill-primary-green text-[10px] font-semibold"
                >
                  {p.value}
                </text>
                {/* Date label */}
                <text
                  x={p.x}
                  y={PADDING.top + plotHeight + 16}
                  textAnchor="middle"
                  className="fill-gray-400 text-[9px]"
                >
                  {p.date.toLocaleDateString('en-GB', {
                    month: 'short',
                    year: '2-digit',
                  })}
                </text>
              </g>
            ))}
          </svg>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          Add more quarterly snapshots to the history array in{' '}
          <code className="rounded bg-gray-100 px-1.5 py-0.5">impact.json</code>{' '}
          to see growth trends here.
        </div>
      )}
    </section>
  );
};

export default GrowthTimeline;
