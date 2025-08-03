import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../data/content';

export const metadata: Metadata = {
  title: 'Projects - Jona Schlegel Portfolio',
  description:
    'Explore all projects by Jona Schlegel, showcasing expertise in archaeological research, science communication, and digital heritage work.',
  keywords: [
    'archaeology projects',
    'science communication portfolio',
    'archaeological research',
    'digital heritage projects',
    'knowledge management',
    'archaeological illustration',
    'heritage studies',
    'portfolio gallery',
  ],
  openGraph: {
    title: 'Projects - Jona Schlegel Portfolio',
    description:
      'Explore all projects by Jona Schlegel, showcasing expertise in archaeological research, science communication, and digital heritage work.',
    images: [
      {
        url: '/api/og?title=Projects%20Portfolio&subtitle=Archaeological%20Science%20Communication%20%26%20Digital%20Heritage',
        width: 1200,
        height: 630,
        alt: 'Jona Schlegel - Projects Portfolio',
      },
    ],
  },
  alternates: {
    canonical: 'https://jonaschlegel.com/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4">Projects</h1>
        <p className="mx-auto max-w-2xl text-lg">
          A collection of archaeological research, science communication, and
          digital heritage projects demonstrating expertise across multiple
          disciplines.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projectsList.map((project) => (
          <Link
            key={`project-${project.id}`}
            href={`/projects/${project.slug}`}
            className="group block overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 bg-primary-cream"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={450}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 ">
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
        ))}
      </div>
    </div>
  );
}
