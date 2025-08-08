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
      <Breadcrumbs />

      <header className="mb-12 text-center py-8">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Projects Portfolio
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
          A comprehensive collection of archaeological research, science
          communication, and digital heritage projects demonstrating expertise
          across multiple disciplines. Each project showcases innovative
          approaches to knowledge sharing and public engagement in archaeology.
        </p>
      </header>

      <section className="mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Featured Work</h2>
          <p className="text-neutral-400">
            Highlighting {projectsData.projectsList.length} projects spanning
            archaeological research, science communication, and digital
            innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.projectsList.map((project) => (
            <article
              key={`project-${project.id}`}
              className="group block overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 bg-primary-cream"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} - Archaeological project showcase`}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-primary-teal transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={`service-${project.id}-${service.replace(/\s+/g, '-').toLowerCase()}`}
                        className="rounded-full px-3 py-1 text-xs transition-colors duration-200"
                        style={{
                          backgroundColor: '#009D6F',
                          color: '#1C1F23',
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}
