import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../data/content';
import { generateSEOMetadata } from '../lib/seo';

/** SEO metadata for the Projects page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Projects – Archaeological Illustration & Web Development Portfolio',
  description:
    'Portfolio of archaeological illustration, archaeology web development & design, visual science communication, and heritage platform projects by Jona Schlegel. Case studies in fullstack archaeology web applications and archaeological drawing.',
  canonical: 'https://jonaschlegel.com/projects',
  keywords: [
    'archaeological illustration projects',
    'archaeology web development portfolio',
    'archaeology web design portfolio',
    'visual science communication portfolio',
    'archaeological drawing portfolio',
    'archaeology fullstack projects',
    'heritage web development',
    'digital archaeology platforms',
    'archaeological research projects',
    'archaeology website examples',
  ],
  ogType: 'website',
});

/** Projects listing page showing all portfolio items with structured data. */
export default function ProjectsPage() {
  const visibleProjects = projectsData.projectsList.filter((p) => !p.hidden);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Archaeological Illustration & Web Development Portfolio - Jona Schlegel',
    description:
      'Portfolio of archaeological illustration, archaeology web development, and visual science communication projects',
    url: 'https://jonaschlegel.com/projects',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: visibleProjects.length,
      itemListElement: visibleProjects.map((project, index) => ({
        '@type': 'CreativeWork',
        position: index + 1,
        name: project.name,
        description: project.description,
        url: `https://jonaschlegel.com/projects/${project.slug}`,
        image:
          typeof project.image === 'object' && 'src' in project.image
            ? `https://jonaschlegel.com${(project.image as { src: string }).src}`
            : `https://jonaschlegel.com${String(project.image)}`,
      })),
    },
  };

  return (
    <div className="container mx-auto px-4">
      <header className="mb-12 py-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-green">
          Portfolio
        </p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Projects</h1>
        <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed">
          Archaeological research, science communication, and digital heritage
          work.
        </p>
      </header>

      <section className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <Link
              key={`project-${project.id}`}
              href={`/projects/${project.slug}` as any}
              className="group block overflow-hidden bg-primary-cream transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center justify-between">
                  <h2 className="text-base font-semibold text-neutral-800 group-hover:text-primary-green transition-colors">
                    {project.name}
                  </h2>
                  <span className="shrink-0 text-xs text-neutral-500">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 line-clamp-1">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}
