import type { FC } from 'react';

interface AcademicSectionProps {
  academic: AcademicMetricsSnapshot;
  platforms: SocialPlatformData[];
}

/** Academic research metrics and profile links. */
const AcademicSection: FC<AcademicSectionProps> = ({ academic, platforms }) => {
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

      {/* Academic profiles */}
      <h3 className="mb-4 text-lg font-semibold">Academic Profiles</h3>
      <p className="mb-4 text-sm text-gray-600">
        Maintaining profiles across multiple databases ensures discoverability
        and accurate attribution. Each platform has different coverage and
        audience.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {academicPlatforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.url || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-green"
          >
            <div className="flex-1">
              <h4 className="font-semibold group-hover:text-primary-green">
                {platform.name}
              </h4>
              <p className="text-xs text-gray-500">{platform.handle}</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                {platform.purpose}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AcademicSection;
