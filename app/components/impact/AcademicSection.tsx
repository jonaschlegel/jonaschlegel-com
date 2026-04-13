import type { FC } from 'react';
import type {
  AcademicPlatformMetric,
  DerivedStats,
} from '../../data/impact-utils';
import Collapsible from './Collapsible';

interface AcademicSectionProps {
  academic: AcademicMetricsSnapshot;
  platforms: SocialPlatformData[];
  platformComparison: AcademicPlatformMetric[];
  derived: DerivedStats;
}

/** Academic research metrics, cross-platform comparison, and profile links. */
const AcademicSection: FC<AcademicSectionProps> = ({
  academic,
  platforms,
  platformComparison,
  derived,
}) => {
  const academicPlatforms = platforms.filter((p) => p.category === 'academic');

  const metrics = [
    {
      label: 'h-index',
      value: academic.hIndex,
      source: academic.hIndexSource,
      explanation:
        'Maximum value h where you have ≥h papers with ≥h citations each.',
    },
    {
      label: 'i10-index',
      value: academic.i10Index,
      explanation: 'Number of publications with at least 10 citations.',
    },
    {
      label: 'Total Citations',
      value: academic.totalCitations,
      explanation: 'Total times your work has been cited by other researchers.',
    },
    {
      label: 'Citations / Paper',
      value: derived.citationsPerPublication,
      explanation: 'Average citations per publication.',
    },
    {
      label: 'Publications',
      value: academic.totalPublications,
      explanation: 'Peer-reviewed articles, conference papers, book chapters.',
    },
    {
      label: 'Conference Presentations',
      value: academic.conferencesPresentations,
      explanation: 'Talks, posters, and panels at academic conferences.',
    },
    {
      label: 'Co-authors',
      value: academic.collaborators,
      explanation:
        'Co-author network size across academic platforms (Academia.edu).',
    },
  ].filter((m) => m.value > 0);

  // Derived insights — only show non-zero
  const insights = [
    derived.openAccessPercent != null && {
      label: 'Open Access',
      value: `${derived.openAccessPercent}%`,
    },
    derived.totalAcademicViews > 0 && {
      label: 'Profile Views',
      value: derived.totalAcademicViews.toLocaleString(),
    },
  ].filter(Boolean) as { label: string; value: string }[];

  // Platforms with h-index or citation data for the comparison table
  const comparablePlatforms = platformComparison.filter(
    (p) => p.hIndex != null || p.citations != null,
  );

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Academic Research
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        Publications & Citations
      </h2>
      <p className="mb-8 max-w-2xl text-gray-600">
        Bibliometric indicators tracked across {academicPlatforms.length}{' '}
        academic databases. Citation metrics are field-dependent — archaeology
        and digital humanities typically have lower counts than STEM fields.
      </p>

      {/* Key metrics — compact two-column layout */}
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={`metric-${m.label}`}
            className="flex items-baseline justify-between rounded-lg border border-gray-200 px-4 py-3"
          >
            <div>
              <span className="text-sm font-medium text-gray-700">
                {m.label}
              </span>
              {m.source && (
                <span className="ml-1 text-xs text-gray-400">({m.source})</span>
              )}
            </div>
            <span className="font-merriweather text-xl font-bold text-primary-green">
              {m.value}
            </span>
          </div>
        ))}
      </div>

      {/* Derived insights row */}
      {insights.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-3">
          {insights.map((ins) => (
            <div
              key={`insight-${ins.label}`}
              className="flex items-center gap-2 rounded-full border border-primary-teal/20 bg-primary-teal/5 px-4 py-2"
            >
              <span className="text-xs text-gray-600">{ins.label}</span>
              <span className="font-merriweather text-sm font-bold text-primary-teal">
                {ins.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Cross-platform comparison table */}
      {comparablePlatforms.length > 1 && (
        <div className="mb-8">
          <Collapsible
            title="Cross-Platform Comparison"
            defaultOpen
            count={comparablePlatforms.length}
          >
            <p className="mb-3 text-xs text-gray-500">
              Different databases index different journals — comparing across
              platforms gives a fuller picture.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 pr-4 font-semibold text-gray-700">
                      Platform
                    </th>
                    <th className="px-4 py-2 text-right font-semibold text-gray-700">
                      h-index
                    </th>
                    <th className="px-4 py-2 text-right font-semibold text-gray-700">
                      Citations
                    </th>
                    <th className="px-4 py-2 text-right font-semibold text-gray-700">
                      Pubs
                    </th>
                    <th className="py-2 pl-4 font-semibold text-gray-700">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparablePlatforms.map((p) => (
                    <tr
                      key={`cmp-${p.platformId}`}
                      className="border-b border-gray-100"
                    >
                      <td className="py-2 pr-4">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-green hover:underline"
                        >
                          {p.platformName}
                        </a>
                      </td>
                      <td className="px-4 py-2 text-right font-medium">
                        {p.hIndex ?? '–'}
                      </td>
                      <td className="px-4 py-2 text-right font-medium">
                        {p.citations ?? '–'}
                      </td>
                      <td className="px-4 py-2 text-right font-medium">
                        {p.publications ?? '–'}
                      </td>
                      <td className="py-2 pl-4 text-xs text-gray-500">
                        {p.extraMetrics
                          .slice(0, 2)
                          .map((e) => `${e.label}: ${e.value}`)
                          .join(' · ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Collapsible>
        </div>
      )}

      {/* Academic profiles — compact link list */}
      <Collapsible title="Academic Profiles" count={academicPlatforms.length}>
        <div className="space-y-2">
          {academicPlatforms.map((platform) => {
            const comparison = platformComparison.find(
              (c) => c.platformId === platform.id,
            );
            return (
              <a
                key={`acad-${platform.id}`}
                href={platform.url || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded px-2 py-1.5 text-sm transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-primary-green">
                    {platform.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {platform.handle}
                  </span>
                </div>
                {comparison && comparison.extraMetrics.length > 0 && (
                  <span className="text-xs text-gray-500">
                    {comparison.extraMetrics
                      .slice(0, 2)
                      .map((m) => `${m.label}: ${m.value}`)
                      .join(' · ')}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </Collapsible>
    </section>
  );
};

export default AcademicSection;
