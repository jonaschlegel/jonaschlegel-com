import type { FC } from 'react';

interface SocialGridProps {
  platforms: SocialPlatformData[];
  metrics: PlatformMetrics[];
}

/** Format a number with k/M suffixes for compact display. */
function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

/** Grid of social media platform cards — only platforms with followers or posts shown. */
const SocialGrid: FC<SocialGridProps> = ({ platforms, metrics }) => {
  const socialPlatforms = platforms.filter((p) => p.category === 'social');

  // Only show platforms that have meaningful metrics
  const platformsWithData = socialPlatforms
    .map((platform) => {
      const m = metrics.find((pm) => pm.platformId === platform.id);
      const hasData =
        m &&
        ((m.followers ?? 0) > 0 || (m.posts ?? 0) > 0 || (m.views ?? 0) > 0);
      return { platform, metrics: hasData ? m : undefined };
    })
    .filter((p) => p.metrics);

  // Platforms without data — show as a compact list
  const platformsWithoutData = socialPlatforms.filter(
    (p) => !platformsWithData.some((pwd) => pwd.platform.id === p.id),
  );

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Digital Presence
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        Social Media
      </h2>
      <p className="mb-8 max-w-2xl text-gray-600">
        Active across {socialPlatforms.length} platforms to reach different
        audiences — from academic peers to the broader public.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platformsWithData.map(({ platform, metrics: m }) => (
          <a
            key={`social-${platform.id}`}
            href={platform.url || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-lg border p-4 transition-all duration-200 ${
              platform.active
                ? 'border-gray-200 hover:border-primary-green'
                : 'border-gray-100 opacity-60'
            }`}
          >
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">{platform.name}</h3>
                <p className="text-xs text-gray-400">{platform.handle}</p>
              </div>
              {!platform.active && (
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                  Less active
                </span>
              )}
            </div>

            {m && (
              <div className="flex gap-4 text-sm">
                {m.followers != null && m.followers > 0 && (
                  <div>
                    <span className="font-semibold text-primary-green">
                      {formatNumber(m.followers)}
                    </span>{' '}
                    <span className="text-xs text-gray-500">followers</span>
                  </div>
                )}
                {m.posts != null && m.posts > 0 && (
                  <div>
                    <span className="font-semibold">
                      {formatNumber(m.posts)}
                    </span>{' '}
                    <span className="text-xs text-gray-500">posts</span>
                  </div>
                )}
                {m.views != null && m.views > 0 && (
                  <div>
                    <span className="font-semibold">
                      {formatNumber(m.views)}
                    </span>{' '}
                    <span className="text-xs text-gray-500">views</span>
                  </div>
                )}
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Other platforms without data — compact list */}
      {platformsWithoutData.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {platformsWithoutData.map((p) => (
            <a
              key={`other-${p.id}`}
              href={p.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500 transition-colors hover:border-primary-green hover:text-primary-green"
            >
              {p.name}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default SocialGrid;
