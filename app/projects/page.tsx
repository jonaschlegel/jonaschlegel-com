import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import { projectsData } from '../data/content';
import { generateSEOMetadata } from '../lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Projects',
  description:
    'Explore all projects by Jona Schlegel, showcasing expertise in archaeological research, science communication, and digital heritage work. View detailed portfolio of academic and professional work.',
  canonical: 'https://jonaschlegel.com/projects',
  keywords: [
    'archaeology projects',
    'science communication portfolio',
    'archaeological research',
    'digital heritage projects',
    'knowledge management',
    'archaeological illustration',
    'heritage studies',
    'portfolio gallery',
    'academic projects',
    'professional portfolio',
  ],
  ogType: 'website',
});

export default function ProjectsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects Portfolio - Jona Schlegel',
    description:
      'Complete portfolio of archaeological and science communication projects',
    url: 'https://jonaschlegel.com/projects',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: projectsData.projectsList.length,
      itemListElement: projectsData.projectsList.map((project, index) => ({
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
          {projectsData.projectsList.map((project) => (
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
