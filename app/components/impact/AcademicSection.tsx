import type { FC } from 'react';
import type {
  AcademicPlatformMetric,
  DerivedStats,
} from '../../data/impact-utils';

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
        'Maximum value h where you have ≥h papers with ≥h citations each. Field-dependent — in archaeology/digital humanities, an h-index of 5+ is solid for early-career.',
    },
    {
      label: 'i10-index',
      value: academic.i10Index,
      explanation:
        'Number of publications with at least 10 citations. A simpler alternative to h-index, used by Google Scholar.',
    },
    {
      label: 'Total Citations',
      value: academic.totalCitations,
      explanation:
        'Total times your work has been cited by other researchers. Citations accumulate over years — a lag is normal, especially in humanities.',
    },
    {
      label: 'Citations / Paper',
      value: derived.citationsPerPublication,
      explanation:
        'Average number of citations per publication. Shows the average reach of each individual work.',
    },
    {
      label: 'Publications',
      value: academic.totalPublications,
      explanation:
        'Peer-reviewed articles, conference papers, book chapters, and other formal academic outputs.',
    },
    {
      label: 'Conference Presentations',
      value: academic.conferencesPresentations,
      explanation:
        'Talks, posters, and panels at academic conferences. Shows active participation in the scholarly community.',
    },
  ];

  // Platforms that have h-index or citation data for the comparison table
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
        Traditional bibliometric indicators tracked across multiple academic
        databases. Note that citation metrics are field-dependent — archaeology
        and digital humanities typically have lower counts than STEM fields.
      </p>

      {/* Key metrics */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-gray-200 p-5">
            <div className="mb-1 flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-gray-700">{m.label}</h3>
              <span className="font-merriweather text-2xl font-bold text-primary-green">
                {m.value}
              </span>
            </div>
            {m.source && (
              <p className="mb-2 text-xs text-primary-teal">
                Source: {m.source}
              </p>
            )}
            <p className="text-xs leading-relaxed text-gray-500">
              {m.explanation}
            </p>
          </div>
        ))}
      </div>

      {/* Derived insights row */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        {derived.openAccessPercent != null && (
          <div className="flex items-center justify-between rounded-lg border border-primary-teal/20 bg-primary-teal/5 p-4">
            <span className="text-sm text-gray-700">Open Access</span>
            <span className="font-merriweather text-xl font-bold text-primary-teal">
              {derived.openAccessPercent}%
            </span>
          </div>
        )}
        <div className="flex items-center justify-between rounded-lg border border-primary-teal/20 bg-primary-teal/5 p-4">
          <span className="text-sm text-gray-700">Academic Profile Views</span>
          <span className="font-merriweather text-xl font-bold text-primary-teal">
            {derived.totalAcademicViews.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-primary-teal/20 bg-primary-teal/5 p-4">
          <span className="text-sm text-gray-700">Co-author Network</span>
          <span className="font-merriweather text-xl font-bold text-primary-teal">
            {derived.coAuthorNetworkSize}
          </span>
        </div>
      </div>

      {/* Cross-platform comparison table */}
      {comparablePlatforms.length > 1 && (
        <div className="mb-10">
          <h3 className="mb-2 text-lg font-semibold">
            Cross-Platform Comparison
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Different databases index different journals and have varying
            coverage. Comparing across platforms gives a fuller picture.
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
                    Publications
                  </th>
                  <th className="py-2 pl-4 font-semibold text-gray-700">
                    Extra
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparablePlatforms.map((p) => (
                  <tr key={p.platformId} className="border-b border-gray-100">
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
                      {p.extraMetrics.map((e) => (
                        <span key={e.label} className="mr-3">
                          {e.label}: <strong>{e.value}</strong>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* All academic platforms with per-platform metrics */}
      <h3 className="mb-4 text-lg font-semibold">Academic Profiles</h3>
      <p className="mb-4 text-sm text-gray-600">
        Maintaining profiles across {academicPlatforms.length} academic
        databases ensures discoverability and accurate attribution.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {academicPlatforms.map((platform) => {
          const comparison = platformComparison.find(
            (c) => c.platformId === platform.id,
          );
          return (
            <a
              key={platform.id}
              href={platform.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-green"
            >
              <div>
                <h4 className="font-semibold group-hover:text-primary-green">
                  {platform.name}
                </h4>
                <p className="text-xs text-gray-500">{platform.handle}</p>
              </div>
              {comparison && comparison.extraMetrics.length > 0 && (
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {comparison.extraMetrics.map((m) => (
                    <span key={m.label} className="text-xs text-gray-500">
                      {m.label}:{' '}
                      <span className="font-semibold text-gray-700">
                        {m.value}
                      </span>
                    </span>
                  ))}
                </div>
              )}
              <p className="text-xs leading-relaxed text-gray-500">
                {platform.purpose}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default AcademicSection;
