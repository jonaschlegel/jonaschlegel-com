import type { FC } from 'react';

interface CreativeSectionProps {
  creative: CreativeMetricsSnapshot;
  platforms: SocialPlatformData[];
}

/** Creative and commercial metrics — only renders non-zero stats. */
const CreativeSection: FC<CreativeSectionProps> = ({ creative, platforms }) => {
  const commercePlatforms = platforms.filter((p) => p.category === 'commerce');

  const stats = [
    creative.productsListed > 0 && {
      label: 'Products Listed',
      value: creative.productsListed,
    },
    creative.supporters > 0 && {
      label: 'Supporters',
      value: creative.supporters,
    },
    creative.projects > 0 && {
      label: 'Projects',
      value: creative.projects,
    },
  ].filter(Boolean) as { label: string; value: number }[];

  if (stats.length === 0 && commercePlatforms.length === 0) return null;

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Creative & Commercial
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        Shops & Creative Platforms
      </h2>
      <p className="mb-8 max-w-2xl text-gray-600">
        Archaeology-themed illustration merchandise and creative products,
        primarily under the archaeoINK brand.
      </p>

      {stats.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-3">
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
        </div>
      )}

      <div className="space-y-2">
        {commercePlatforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.url || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 transition-colors hover:border-primary-green"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-primary-green">
                {platform.name}
              </span>
              {platform.brand && (
                <span className="rounded bg-primary-green/10 px-1.5 py-0.5 text-xs text-primary-green">
                  {platform.brand}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-400">
              {platform.contentTypes.slice(0, 3).join(' · ')}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CreativeSection;
