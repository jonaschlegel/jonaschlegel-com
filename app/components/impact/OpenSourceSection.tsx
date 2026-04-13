import type { FC } from 'react';

interface OpenSourceSectionProps {
  openSource: OpenSourceMetricsSnapshot;
  platform: SocialPlatformData | undefined;
}

/** Open source and GitHub metrics. */
const OpenSourceSection: FC<OpenSourceSectionProps> = ({
  openSource,
  platform,
}) => {
  const stats = [
    {
      label: 'Public Repositories',
      value: openSource.publicRepos,
      description: 'Open source projects and tools.',
    },
    {
      label: 'Stars',
      value: openSource.stars,
      description: 'Community appreciation and bookmarks.',
    },
    {
      label: 'Contributions',
      value: openSource.contributions,
      description: 'Commits, PRs, issues, and reviews.',
    },
    {
      label: 'Forks',
      value: openSource.forks,
      description: 'Times others have copied repos to build on your work.',
    },
  ];

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Open Source & Tech
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        GitHub & Code
      </h2>
      <p className="mb-8 max-w-2xl text-gray-600">
        Building tools, platforms, and open source projects for archaeology and
        heritage research. Code contributions as a form of academic impact.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-gray-200 p-5">
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-sm text-gray-700">{s.label}</span>
              <span className="font-merriweather text-2xl font-bold text-primary-green">
                {s.value}
              </span>
            </div>
            <p className="text-xs text-gray-500">{s.description}</p>
          </div>
        ))}
      </div>

      {platform && (
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary-green hover:text-primary-green"
        >
          View on GitHub →
        </a>
      )}
    </section>
  );
};

export default OpenSourceSection;
