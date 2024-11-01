import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';
import type { ProjectType } from '../../../types/global';
import { projectsData } from '../../data/content';

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams(): Array<{ slug: string }> {
  return projectsData.projectsList.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project: ProjectType | undefined = projectsData.projectsList.find(
    (proj) => proj.slug === params.slug,
  );

  if (!project) {
    notFound();
    return null;
  }

  // Load MDX content dynamically
  const MDXContent = (
    (await import(`../../data/projects/${project.slug}.mdx`)) as {
      default: (props: {
        readonly components?: MDXComponents | undefined;
      }) => JSX.Element;
    }
  ).default;

  return (
    <div className="container mx-auto py-16">
      <div className="relative mb-4 aspect-[2/1] overflow-hidden rounded-[2.5rem]">
        <Image
          src={project.image}
          alt={project.name}
          width={2000}
          height={1000}
          className="object-cover"
        />
      </div>
      <div className="md:px-10 lg:px-[140px]">
        <h1>{project.name}</h1>
        <MDXContent />
      </div>
    </div>
  );
}
