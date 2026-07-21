'use client';

import type { Route } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ProjectCategory = 'Digital' | 'Visual' | 'Research';

export interface ProjectOverview {
  id: string;
  name: string;
  slug: string;
  image: StaticImageData;
  description: string;
  role: string;
  year: string;
  category: ProjectCategory;
}

const filters = ['All', 'Digital', 'Visual', 'Research'] as const;
type ProjectFilter = (typeof filters)[number];

const featuredSlugs = [
  'suriname-tijdmachine',
  'roman-burial',
  'adventuress-cover',
];

const storyCopy: Record<string, string> = {
  'suriname-tijdmachine':
    'One interface for exploring archival records, historical maps, people, and places across Suriname’s past.',
  'roman-burial':
    'A scientifically grounded reconstruction giving a Roman mother and daughter a visible presence again.',
  'adventuress-cover':
    'A publication cover connecting generations of women who have shaped archaeological practice.',
};

/** Three lead stories followed by a compact, filterable project archive. */
export default function ProjectsGrid({
  projects,
}: {
  projects: ProjectOverview[];
}) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const featuredProjects = featuredSlugs.flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);
    return project ? [project] : [];
  });
  const archiveProjects = projects.filter(
    (project) => !featuredSlugs.includes(project.slug),
  );
  const visibleProjects = archiveProjects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter,
  );

  return (
    <>
      <section className="mb-24 md:mb-32" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="sr-only">
          Featured case studies
        </h2>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {featuredProjects.map((project, index) => (
            <Link
              key={`featured-project-${project.id}`}
              href={`/projects/${project.slug}` as Route}
              className={`group block ${
                index === 0
                  ? 'lg:col-span-12'
                  : index === 1
                    ? 'lg:col-span-7'
                    : 'lg:col-span-5 lg:mt-24'
              }`}
            >
              <div
                className={`relative overflow-hidden bg-gray-100 ${
                  index === 0 ? 'aspect-[5/3] md:aspect-[2/1]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.015] motion-reduce:group-hover:scale-100"
                  sizes={index === 0 ? '100vw' : '(max-width: 1024px) 100vw, 58vw'}
                />
              </div>
              <div
                className={
                  index === 0
                    ? 'grid gap-3 border-b border-primary-dark/20 py-6 md:grid-cols-2 md:gap-12'
                    : 'pt-5'
                }
              >
                <div>
                  <p className="eyebrow">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="mt-2 font-merriweather text-2xl font-semibold transition-colors group-hover:text-primary-green md:text-3xl">
                    {project.name}
                  </h3>
                </div>
                <p className="my-0 mt-2 max-w-xl text-base leading-relaxed text-gray-700">
                  {storyCopy[project.slug] ?? project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-24" aria-labelledby="archive-heading">
        <div className="mb-10 border-b border-primary-dark pb-6 md:flex md:items-end md:justify-between">
          <div>
            <p className="eyebrow">More work</p>
            <h2 id="archive-heading" className="mt-2 text-3xl md:text-4xl">
              Project archive
            </h2>
          </div>
          <div
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 md:mt-0"
            role="group"
            aria-label="Filter the project archive"
          >
            {filters.map((filter) => (
              <button
                key={`archive-filter-${filter}`}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className="min-h-11 border-b border-transparent text-sm font-semibold text-gray-600 transition-colors hover:text-primary-green aria-pressed:border-primary-green aria-pressed:text-primary-green"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visibleProjects.length} projects.
        </p>

        <div className="grid gap-x-10 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <Link
              key={`archive-project-${project.id}`}
              href={`/projects/${project.slug}` as Route}
              className="group grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-primary-dark/20 py-5 md:grid-cols-[7rem_minmax(0,1fr)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover transition-opacity group-hover:opacity-80"
                  sizes="112px"
                />
              </div>
              <div className="min-w-0 self-center">
                <p className="my-0 text-xs font-semibold uppercase tracking-wider text-primary-green">
                  {project.category} · {project.year}
                </p>
                <h3 className="mt-1.5 font-merriweather text-lg font-semibold leading-snug transition-colors group-hover:text-primary-green md:text-xl">
                  {project.name}
                </h3>
                <p className="my-0 mt-1 text-sm text-gray-600">
                  {project.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
