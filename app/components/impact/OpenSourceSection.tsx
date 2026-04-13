import type { FC } from 'react';

interface OpenSourceSectionProps {
  openSource: OpenSourceMetricsSnapshot;
  platform: SocialPlatformData | undefined;
}

/** Open source and GitHub metrics — hides zero-value stats. */
const OpenSourceSection: FC<OpenSourceSectionProps> = ({
  openSource,
  platform,
}) => {
  const stats = [
    openSource.publicRepos > 0 && {
      label: 'Public Repos',
      value: openSource.publicRepos,
    },
    openSource.stars > 0 && {
      label: 'Stars',
      value: openSource.stars,
    },
    openSource.contributions > 0 && {
      label: 'Contributions',
      value: openSource.contributions,
    },
    openSource.forks > 0 && {
      label: 'Forks',
      value: openSource.forks,
    },
  ].filter(Boolean) as { label: string; value: number }[];

  if (stats.length === 0 && !platform) return null;

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Open Source & Tech
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        GitHub & Code
      </h2>
      <p className="mb-6 max-w-2xl text-gray-600">
        Building tools, platforms, and open source projects for archaeology and
        heritage research.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2"
          >
            <span className="text-xs text-gray-600">{s.label}</span>
            <span className="font-merriweather text-sm font-bold text-primary-green">
              {s.value}
            </span>
          </div>
        ))}

        {platform && (
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-primary-green transition-colors hover:border-primary-green"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </section>
  );
};

export default OpenSourceSection;
