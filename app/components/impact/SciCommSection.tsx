import type { FC } from 'react';

interface SciCommSectionProps {
  sciComm: SciCommMetricsSnapshot;
  guestAppearances: GuestAppearance[];
  platforms: SocialPlatformData[];
}

/** Science communication metrics — podcast, blog, newsletter, guest appearances. */
const SciCommSection: FC<SciCommSectionProps> = ({
  sciComm,
  guestAppearances,
  platforms,
}) => {
  const contentPlatforms = platforms.filter((p) => p.category === 'content');

  const podcastStats = [
    { label: 'Episodes', value: sciComm.podcastEpisodes },
    ...(sciComm.podcastSubscribers
      ? [{ label: 'Subscribers', value: sciComm.podcastSubscribers }]
      : []),
    ...(sciComm.podcastDownloads
      ? [{ label: 'Downloads', value: sciComm.podcastDownloads }]
      : []),
  ];

  const writingStats = [
    { label: 'Blog Posts', value: sciComm.blogPosts },
    ...(sciComm.blogViews
      ? [{ label: 'Blog Views', value: sciComm.blogViews }]
      : []),
    { label: 'Newsletter Subscribers', value: sciComm.newsletterSubscribers },
    ...(sciComm.newsletterOpenRate
      ? [
          {
            label: 'Open Rate',
            value: `${sciComm.newsletterOpenRate}%`,
          },
        ]
      : []),
  ];

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Science Communication
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        Podcast, Blog & Newsletter
      </h2>
      <p className="mb-8 max-w-2xl text-gray-600">
        Translating academic research for broader audiences through long-form
        content, audio storytelling, and regular newsletters.
      </p>

      {/* Podcast */}
      <div className="mb-8 rounded-lg border border-gray-200 p-6">
        <h3 className="mb-1 text-lg font-semibold">
          Things We Threw Away Podcast
        </h3>
        <p className="mb-4 text-sm text-gray-600">
          An archaeology podcast about objects from the past in the present,
          co-hosted with Stefanie Ulrich.
        </p>
        <div className="flex flex-wrap gap-6">
          {podcastStats.map((s) => (
            <div key={s.label}>
              <span className="font-merriweather text-xl font-bold text-primary-green">
                {s.value}
              </span>
              <span className="ml-1 text-sm text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Writing */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {writingStats.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
          >
            <span className="text-sm text-gray-700">{s.label}</span>
            <span className="font-merriweather text-xl font-bold text-primary-green">
              {s.value}
            </span>
          </div>
        ))}
      </div>

      {/* Content platforms */}
      <h3 className="mb-4 text-lg font-semibold">Content Platforms</h3>
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {contentPlatforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.url || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-green"
          >
            <div className="mb-1 flex items-center gap-2">
              <h4 className="font-semibold group-hover:text-primary-green">
                {platform.name}
              </h4>
              {platform.brand && (
                <span className="rounded bg-primary-green/10 px-2 py-0.5 text-xs text-primary-green">
                  {platform.brand}
                </span>
              )}
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              {platform.purpose}
            </p>
          </a>
        ))}
      </div>

      {/* Guest appearances */}
      <h3 className="mb-4 text-lg font-semibold">
        Guest Appearances ({sciComm.guestAppearances})
      </h3>
      <p className="mb-4 text-sm text-gray-600">
        Invitations to speak on other podcasts, panels, and events — a signal of
        external recognition and expertise.
      </p>
      {guestAppearances.length > 0 && (
        <div className="space-y-3">
          {guestAppearances.map((ga) => (
            <div
              key={ga.id}
              className="flex items-start justify-between rounded-lg border border-gray-200 p-4"
            >
              <div>
                <h4 className="font-semibold">{ga.title}</h4>
                <p className="text-sm text-gray-500">
                  {ga.show} • <span className="capitalize">{ga.type}</span>
                </p>
                {ga.description && (
                  <p className="mt-1 text-xs text-gray-500">{ga.description}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-sm text-gray-400">
                  {new Date(ga.date).toLocaleDateString('en-GB', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                {ga.url && (
                  <a
                    href={ga.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-green hover:underline"
                  >
                    Listen →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SciCommSection;
