import Link from 'next/link';

const pillars = [
  {
    number: '01',
    title: 'Visual research communication',
    description:
      'Rigorous illustrations and visual systems that make archaeological evidence understandable without flattening its complexity.',
    capabilities: [
      'Scientific and reconstruction illustration',
      'Publication and editorial design',
      'Visual narratives, workshops, and outreach',
    ],
    href: '/services#illustration',
  },
  {
    number: '02',
    title: 'Digital heritage products',
    description:
      'Accessible research platforms that connect collections, maps, linked data, and the people who need to use them.',
    capabilities: [
      'Research platforms and databases',
      'Interactive maps and data visualisation',
      'Full-stack development and interface design',
    ],
    href: '/services#web-development',
  },
] as const;

/** Two clear entry points into the studio's service offering. */
export default function ServicePillars() {
  return (
    <section
      className="container mx-auto py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">How I can help</p>
        <h2 id="services-heading" className="mt-3 text-3xl md:text-5xl">
          One research partner, two complementary practices.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-700">
          Work with someone who understands both the archaeological context and
          the visual or technical decisions needed to communicate it well.
        </p>
      </div>

      <div className="grid border-y border-primary-dark/20 lg:grid-cols-2 lg:divide-x lg:divide-primary-dark/20">
        {pillars.map((pillar) => (
          <article
            key={`service-pillar-${pillar.number}`}
            className="border-b border-primary-dark/20 py-8 last:border-b-0 lg:border-b-0 lg:px-10 lg:first:pl-0 lg:last:pr-0"
          >
            <p className="my-0 text-sm font-semibold text-primary-green">
              {pillar.number}
            </p>
            <h3 className="mt-3 font-merriweather text-2xl font-semibold text-primary-dark md:text-3xl">
              {pillar.title}
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-gray-700">
              {pillar.description}
            </p>
            <ul className="plain-list mt-6 space-y-2 text-sm text-gray-700">
              {pillar.capabilities.map((capability) => (
                <li key={`capability-${capability}`} className="flex gap-3">
                  <span aria-hidden="true" className="text-primary-green">
                    →
                  </span>
                  {capability}
                </li>
              ))}
            </ul>
            <Link
              href={pillar.href}
              className="mt-7 inline-flex min-h-11 items-center border-b border-primary-green font-semibold text-primary-green transition-colors hover:border-primary-dark hover:text-primary-dark"
            >
              Explore this service
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
