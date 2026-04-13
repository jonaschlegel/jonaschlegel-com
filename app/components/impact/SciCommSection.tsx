import type { FC } from 'react';
import type { DerivedStats } from '../../data/impact-utils';
import Collapsible from './Collapsible';

interface SciCommSectionProps {
  sciComm: SciCommMetricsSnapshot;
  guestAppearances: GuestAppearance[];
  platforms: SocialPlatformData[];
  derived: DerivedStats;
}

/** Science communication metrics — podcast, blog, newsletter, guest appearances. */
const SciCommSection: FC<SciCommSectionProps> = ({
  sciComm,
  guestAppearances,
  platforms,
  derived,
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
  ].filter((s) => (typeof s.value === 'number' ? s.value > 0 : true));

  const writingStats = [
    ...(sciComm.blogPosts
      ? [{ label: 'Blog Posts', value: sciComm.blogPosts }]
      : []),
    ...(sciComm.blogViews
      ? [{ label: 'Blog Views', value: sciComm.blogViews }]
      : []),
    ...(sciComm.newsletterSubscribers
      ? [
          {
            label: 'Newsletter Subscribers',
            value: sciComm.newsletterSubscribers,
          },
        ]
      : []),
    ...(sciComm.newsletterOpenRate
      ? [{ label: 'Open Rate', value: `${sciComm.newsletterOpenRate}%` }]
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
        Translating academic research for broader audiences through audio
        storytelling, long-form writing, and regular newsletters.
      </p>

      {/* Podcast */}
      {podcastStats.length > 0 && (
        <div className="mb-6 rounded-lg border border-gray-200 p-5">
          <h3 className="mb-1 text-sm font-semibold text-gray-700">
            Things We Threw Away Podcast
          </h3>
          <p className="mb-3 text-xs text-gray-500">
            An archaeology podcast about objects from the past in the present.
          </p>
          <div className="flex flex-wrap gap-6">
            {podcastStats.map((s) => (
              <div key={`pod-${s.label}`}>
                <span className="font-merriweather text-lg font-bold text-primary-green">
                  {s.value}
                </span>
                <span className="ml-1 text-xs text-gray-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Writing stats — compact row */}
      {writingStats.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-3">
          {writingStats.map((s) => (
            <div
              key={`writing-${s.label}`}
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2"
            >
              <span className="text-xs text-gray-600">{s.label}</span>
              <span className="font-merriweather text-sm font-bold text-primary-green">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Content platforms — compact link list */}
      <Collapsible title="Content Platforms" count={contentPlatforms.length}>
        <div className="space-y-2">
          {contentPlatforms.map((platform) => (
            <a
              key={`content-${platform.id}`}
              href={platform.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded px-2 py-1.5 text-sm transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-primary-green">
                  {platform.name}
                </span>
                {platform.brand && (
                  <span className="rounded bg-primary-green/10 px-1.5 py-0.5 text-xs text-primary-green">
                    {platform.brand}
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-400">{platform.handle}</span>
            </a>
          ))}
        </div>
      </Collapsible>

      {/* Guest appearances */}
      {guestAppearances.length > 0 && (
        <div className="mt-6">
          <Collapsible
            title="Guest Appearances"
            defaultOpen
            count={guestAppearances.length}
          >
            {derived.guestAppearanceViews > 0 && (
              <p className="mb-3 text-xs text-gray-500">
                Combined reach: {derived.guestAppearanceViews.toLocaleString()}{' '}
                views, {derived.guestAppearanceLikes} likes
              </p>
            )}
            <div className="space-y-3">
              {guestAppearances.map((ga) => (
                <div
                  key={`guest-${ga.id}`}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">{ga.title}</p>
                    <p className="text-xs text-gray-500">
                      {ga.show} • <span className="capitalize">{ga.type}</span>
                      {ga.views != null && ` • ${ga.views} views`}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="text-xs text-gray-400">
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
                        className="text-xs text-primary-green hover:underline"
                      >
                        Listen →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Collapsible>
        </div>
      )}
    </section>
  );
};

export default SciCommSection;
