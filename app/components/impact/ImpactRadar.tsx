'use client';

import { type FC, useState } from 'react';

interface RadarProps {
  scores: DimensionScore[];
}

const RADIUS = 120;
const CENTER_X = 200;
const CENTER_Y = 180;

/** Convert a score (0-10) and axis index to SVG coordinates. */
function polarToCartesian(
  score: number,
  index: number,
  total: number,
): { x: number; y: number } {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const r = (score / 10) * RADIUS;
  return {
    x: CENTER_X + r * Math.cos(angle),
    y: CENTER_Y + r * Math.sin(angle),
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

/** Get text-anchor for a label based on its position around the radar. */
function getLabelAnchor(
  index: number,
  total: number,
): 'start' | 'middle' | 'end' {
  const angle = (360 * index) / total - 90; // degrees, -90 = top
  const norm = ((angle % 360) + 360) % 360;
  if (norm > 30 && norm < 150) return 'start'; // right side
  if (norm > 210 && norm < 330) return 'end'; // left side
  return 'middle'; // top / bottom
}

/** SVG radar/spider chart showing 6 impact dimensions. */
const ImpactRadar: FC<RadarProps> = ({ scores }) => {
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
          viewBox="0 0 400 370"
          className="w-full"
          role="img"
          aria-label="Radar chart showing impact scores across 6 dimensions"
        >
          {/* Grid lines */}
          {gridLevels.map((level) => (
            <polygon
              key={`grid-${level}`}
              points={[...Array(total).keys()]
                .map((i) => {
                  const { x, y } = polarToCartesian(level, i, total);
                  return `${x},${y}`;
                })
                .join(' ')}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
            />
          ))}

          {/* Axis lines */}
          {scores.map((s, i) => {
            const { x, y } = polarToCartesian(10, i, total);
            return (
              <line
                key={`axis-${s.dimension}`}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={x}
                y2={y}
                stroke="#d1d5db"
                strokeWidth="0.5"
              />
            );
          })}

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
            const labelPos = polarToCartesian(11.8, i, total);
            const isHovered = hoveredIndex === i;
            const anchor = getLabelAnchor(i, total);

            return (
              <g
                key={`dim-${s.dimension}`}
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
                  textAnchor={anchor}
                  dominantBaseline="middle"
                  className="fill-gray-700 text-[9px] font-medium"
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
      </div>
    </section>
  );
};

export default ImpactRadar;
