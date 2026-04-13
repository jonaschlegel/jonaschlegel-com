import type { FC } from 'react';

interface CreativeSectionProps {
  creative: CreativeMetricsSnapshot;
  platforms: SocialPlatformData[];
}

/** Creative and commercial metrics — Ko-fi, Redbubble, Etsy, Behance. */
const CreativeSection: FC<CreativeSectionProps> = ({ creative, platforms }) => {
  const commercePlatforms = platforms.filter((p) => p.category === 'commerce');

  const stats = [
    {
      label: 'Products Listed',
      value: creative.productsListed,
      description:
        'Prints, zines, digital downloads, and merchandise across shops.',
    },
    {
      label: 'Supporters',
      value: creative.supporters,
      description: 'Paying supporters and customers.',
    },
    {
      label: 'Projects',
      value: creative.projects,
      description: 'Creative portfolio projects on Behance and similar.',
    },
  ];

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

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
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

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {commercePlatforms.map((platform) => (
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
            <p className="mt-1 text-xs leading-relaxed text-gray-500">
              {platform.purpose}
            </p>
            {platform.contentTypes.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {platform.contentTypes.map((ct) => (
                  <span
                    key={ct}
                    className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500"
                  >
                    {ct}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default CreativeSection;
