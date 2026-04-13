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

/** Grid of social media platform cards showing activity and purpose. */
const SocialGrid: FC<SocialGridProps> = ({ platforms, metrics }) => {
  const socialPlatforms = platforms.filter((p) => p.category === 'social');

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Digital Presence
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        Social Media & Platforms
      </h2>
      <p className="mb-8 max-w-2xl text-gray-600">
        Active across multiple platforms to reach different audiences — from
        academic peers to the broader public interested in archaeology and
        heritage.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {socialPlatforms.map((platform) => {
          const m = metrics.find((pm) => pm.platformId === platform.id);

          return (
            <a
              key={platform.id}
              href={platform.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-lg border p-5 transition-all duration-200 ${
                platform.active
                  ? 'border-gray-200 hover:border-primary-green hover:shadow-sm'
                  : 'border-gray-100 opacity-60'
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{platform.name}</h3>
                  <p className="text-sm text-gray-500">{platform.handle}</p>
                </div>
                {!platform.active && (
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                    Less active
                  </span>
                )}
                {platform.brand && (
                  <span className="rounded bg-primary-green/10 px-2 py-0.5 text-xs text-primary-green">
                    {platform.brand}
                  </span>
                )}
              </div>

              {/* Metrics row */}
              {m && (
                <div className="mb-3 flex gap-4 text-sm">
                  {m.followers != null && m.followers > 0 && (
                    <div>
                      <span className="font-semibold text-primary-green">
                        {formatNumber(m.followers)}
                      </span>{' '}
                      <span className="text-gray-500">followers</span>
                    </div>
                  )}
                  {m.posts != null && m.posts > 0 && (
                    <div>
                      <span className="font-semibold">
                        {formatNumber(m.posts)}
                      </span>{' '}
                      <span className="text-gray-500">posts</span>
                    </div>
                  )}
                  {m.views != null && m.views > 0 && (
                    <div>
                      <span className="font-semibold">
                        {formatNumber(m.views)}
                      </span>{' '}
                      <span className="text-gray-500">views</span>
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs leading-relaxed text-gray-500">
                {platform.purpose}
              </p>

              {platform.contentTypes.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {platform.contentTypes.map((ct) => (
                    <span
                      key={ct}
                      className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                    >
                      {ct}
                    </span>
                  ))}
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default SocialGrid;
