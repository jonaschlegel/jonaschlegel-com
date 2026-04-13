'use client';

import type { FC } from 'react';
import Collapsible from './Collapsible';

interface ThresholdRow {
  dimension: string;
  metric: string;
  max: number;
  weight: number;
}

interface HeadlineStat {
  name: string;
  formula: string;
  source: string;
}

interface MethodologySectionProps {
  thresholds: Record<
    string,
    { metric: string; min: number; max: number; weight: number }[]
  >;
  lastUpdated: string;
}

const dimensionLabels: Record<string, string> = {
  academic: 'Academic Research',
  sciComm: 'Science Communication',
  digitalPresence: 'Digital Presence',
  community: 'Community Building',
  creative: 'Creative & Commercial',
  openSource: 'Open Source & Tech',
};

const HEADLINE_STATS: HeadlineStat[] = [
  {
    name: 'h-index',
    formula: 'Highest h where ≥h papers have ≥h citations',
    source:
      'Google Scholar (primary); also tracked on Scopus, Web of Science, Semantic Scholar',
  },
  {
    name: 'Citations / Paper',
    formula: 'totalCitations ÷ totalPublications',
    source: 'Google Scholar total citations and publication count',
  },
  {
    name: 'Total Followers',
    formula: 'Sum of followers across all social platforms',
    source: 'Instagram + Bluesky + Twitter + LinkedIn + Mastodon + Behance',
  },
  {
    name: 'Web Impressions',
    formula: 'Sum of "Total impressions (last 12 months)" across all websites',
    source:
      'Google Search Console for archaeoink.com, jonaschlegel.com, pastforwardhub.com',
  },
  {
    name: 'Open Access %',
    formula: 'Percentage of publications available open access',
    source: 'ImpactStory / Unpaywall',
  },
  {
    name: 'Research Outputs',
    formula: 'Count of all entries in publications.json',
    source:
      'Derived at build time from the CV publications list — includes journal articles, conference papers, presentations, podcast episodes, theses, and other outputs',
  },
];

const MethodologySection: FC<MethodologySectionProps> = ({
  thresholds,
  lastUpdated,
}) => {
  const thresholdRows: ThresholdRow[] = [];
  for (const [dim, metrics] of Object.entries(thresholds)) {
    for (const m of metrics) {
      thresholdRows.push({
        dimension: dimensionLabels[dim] || dim,
        metric: m.metric,
        max: m.max,
        weight: m.weight,
      });
    }
  }

  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="mb-6 font-merriweather text-2xl font-semibold">
        Methodology & Transparency
      </h2>

      <div className="space-y-4">
        {/* Data collection */}
        <div className="rounded-lg border border-gray-200 p-5">
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            Data Collection
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Platform metrics (followers, citations, views) are manually
            collected quarterly and recorded in a JSON file. No APIs or
            automated scrapers are used — every number is verified by hand.
            Publication counts (podcast episodes, conference presentations,
            total research outputs) are derived automatically from the CV
            publications list at build time, so they stay in sync whenever a new
            publication is added. Last updated{' '}
            <time dateTime={lastUpdated} className="font-medium">
              {new Date(lastUpdated).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            .
          </p>
        </div>

        {/* Headline stats breakdown */}
        <Collapsible
          title="Headline Stats — Sources & Formulas"
          defaultOpen
          count={HEADLINE_STATS.length}
        >
          <p className="mb-3 text-xs text-gray-500">
            Each headline stat at the top of the page is derived as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-700">
                    Stat
                  </th>
                  <th className="px-4 py-2 font-semibold text-gray-700">
                    Formula
                  </th>
                  <th className="py-2 pl-4 font-semibold text-gray-700">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {HEADLINE_STATS.map((s) => (
                  <tr
                    key={`stat-${s.name}`}
                    className="border-b border-gray-100"
                  >
                    <td className="py-2 pr-4 font-medium text-gray-700">
                      {s.name}
                    </td>
                    <td className="px-4 py-2 text-gray-600">{s.formula}</td>
                    <td className="py-2 pl-4 text-xs text-gray-500">
                      {s.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Collapsible>

        {/* Radar scoring methodology */}
        <Collapsible title="Radar Chart Scoring" count={thresholdRows.length}>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              Each of the 6 impact dimensions receives a normalised 0–10 score.
              Within each dimension, individual metrics are:
            </p>
            <ol className="ml-4 list-decimal space-y-1">
              <li>
                Clamped between{' '}
                <code className="rounded bg-gray-100 px-1 text-xs">min</code>{' '}
                (usually 0) and{' '}
                <code className="rounded bg-gray-100 px-1 text-xs">max</code>{' '}
                thresholds
              </li>
              <li>
                Linearly interpolated to a 0–10 scale:{' '}
                <code className="rounded bg-gray-100 px-1 text-xs">
                  score = ((value − min) / (max − min)) × 10
                </code>
              </li>
              <li>
                Multiplied by the metric&apos;s{' '}
                <code className="rounded bg-gray-100 px-1 text-xs">weight</code>{' '}
                (weights sum to 1.0 within each dimension)
              </li>
              <li>Summed to produce the dimension&apos;s final score</li>
            </ol>
            <p>
              The <code className="rounded bg-gray-100 px-1 text-xs">max</code>{' '}
              value represents &ldquo;what would be excellent for someone at
              this career stage&rdquo; — not an absolute ceiling. Thresholds are
              tuned for early-to-mid career researchers in archaeology and
              digital humanities.
            </p>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-3 font-semibold text-gray-700">
                    Dimension
                  </th>
                  <th className="px-3 py-2 font-semibold text-gray-700">
                    Metric
                  </th>
                  <th className="px-3 py-2 text-right font-semibold text-gray-700">
                    Max (→10)
                  </th>
                  <th className="py-2 pl-3 text-right font-semibold text-gray-700">
                    Weight
                  </th>
                </tr>
              </thead>
              <tbody>
                {thresholdRows.map((r) => (
                  <tr
                    key={`${r.dimension}-${r.metric}`}
                    className="border-b border-gray-100"
                  >
                    <td className="py-1.5 pr-3 text-gray-700">{r.dimension}</td>
                    <td className="px-3 py-1.5 font-medium">{r.metric}</td>
                    <td className="px-3 py-1.5 text-right">
                      {r.max.toLocaleString()}
                    </td>
                    <td className="py-1.5 pl-3 text-right">
                      {(r.weight * 100).toFixed(0)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Collapsible>

        {/* Field context */}
        <Collapsible title="Field Context & DORA">
          <div className="space-y-2 text-sm leading-relaxed text-gray-600">
            <p>
              Citation metrics are field-dependent — archaeology and humanities
              typically have significantly lower counts than STEM fields. An
              h-index of 5 in archaeology represents a different level of impact
              than an h-index of 5 in physics or medicine.
            </p>
            <p>
              This dashboard follows the spirit of the{' '}
              <a
                href="https://sfdora.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-green hover:underline"
              >
                San Francisco Declaration on Research Assessment (DORA)
              </a>
              , which recommends against relying on journal-level metrics and
              advocates for considering the value and impact of all research
              outputs — from peer-reviewed articles to community-building
              platforms, from podcast episodes to open source code.
            </p>
          </div>
        </Collapsible>
      </div>
    </section>
  );
};

export default MethodologySection;
