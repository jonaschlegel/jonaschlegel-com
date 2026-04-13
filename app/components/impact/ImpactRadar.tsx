'use client';

import { type FC, useState } from 'react';

interface RadarProps {
  scores: DimensionScore[];
  previousScores?: DimensionScore[];
}

const RADIUS = 120;
const CENTER = 150;

/** Convert a score (0-10) and axis index to SVG coordinates. */
function polarToCartesian(
  score: number,
  index: number,
  total: number,
): { x: number; y: number } {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const r = (score / 10) * RADIUS;
  return {
    x: CENTER + r * Math.cos(angle),
    y: CENTER + r * Math.sin(angle),
  };
}

/** Build an SVG polygon points string from scores. */
function buildPolygon(scores: DimensionScore[], total: number): string {
  return scores
    .map((s, i) => {
      const { x, y } = polarToCartesian(s.score, i, total);
      return `${x},${y}`;
    })
    .join(' ');
}

/** SVG radar/spider chart showing 6 impact dimensions. */
const ImpactRadar: FC<RadarProps> = ({ scores, previousScores }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const total = scores.length;

  const gridLevels = [2, 4, 6, 8, 10];

  return (
    <section className="mb-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
          Impact Profile
        </p>
        <h2 className="mb-8 font-merriweather text-2xl font-semibold md:text-3xl">
          Multi-Dimensional Impact
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Rather than a single score, this radar chart shows the shape of impact
          across six dimensions. Each axis is normalised 0–10 based on
          configurable thresholds.
        </p>
      </div>

      <div className="mx-auto max-w-lg">
        <svg
          viewBox="0 0 300 300"
          className="w-full"
          role="img"
          aria-label="Radar chart showing impact scores across 6 dimensions"
        >
          {/* Grid lines */}
          {gridLevels.map((level) => (
            <polygon
              key={level}
              points={Array.from({ length: total }, (_, i) => {
                const { x, y } = polarToCartesian(level, i, total);
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
            />
          ))}

          {/* Axis lines */}
          {scores.map((_, i) => {
            const { x, y } = polarToCartesian(10, i, total);
            return (
              <line
                key={`axis-${scores[i].dimension}`}
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                stroke="#d1d5db"
                strokeWidth="0.5"
              />
            );
          })}

          {/* Previous period polygon */}
          {previousScores && (
            <polygon
              points={buildPolygon(previousScores, total)}
              fill="rgba(66, 203, 179, 0.1)"
              stroke="#42CBB3"
              strokeWidth="1"
              strokeDasharray="4 2"
            />
          )}

          {/* Current polygon */}
          <polygon
            points={buildPolygon(scores, total)}
            fill="rgba(0, 157, 111, 0.15)"
            stroke="#009D6F"
            strokeWidth="2"
          />

          {/* Data points and labels */}
          {scores.map((s, i) => {
            const { x, y } = polarToCartesian(s.score, i, total);
            const labelPos = polarToCartesian(11.5, i, total);
            const isHovered = hoveredIndex === i;

            return (
              <g
                key={s.dimension}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 5 : 3.5}
                  fill="#009D6F"
                  stroke="white"
                  strokeWidth="1.5"
                  className="transition-all duration-150"
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-gray-700 text-[8px] font-medium"
                >
                  {s.label}
                </text>
                {isHovered && (
                  <text
                    x={x}
                    y={y - 12}
                    textAnchor="middle"
                    className="fill-primary-green text-[9px] font-bold"
                  >
                    {s.score}/10
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-4 bg-primary-green" />
            Current
          </span>
          {previousScores && (
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-0.5 w-4 border-t border-dashed border-primary-teal" />
              Previous
            </span>
          )}
        </div>
      </div>

      {/* Dimension breakdown */}
      <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scores.map((s) => (
          <div
            key={s.dimension}
            className="rounded-lg border border-gray-200 p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold">{s.label}</h3>
              <span className="font-merriweather text-lg font-bold text-primary-green">
                {s.score}
              </span>
            </div>
            {/* Score bar */}
            <div className="mb-2 h-1.5 w-full rounded-full bg-gray-100">
              <div
                className="h-1.5 rounded-full bg-primary-green transition-all duration-500"
                style={{ width: `${(s.score / 10) * 100}%` }}
              />
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactRadar;
