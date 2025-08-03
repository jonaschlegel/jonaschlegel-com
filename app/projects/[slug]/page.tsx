import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { ProjectType } from '../../../types/global';
import { projectsData } from '../../data/content';
import { generateProjectOGImageUrl } from '../../lib/og-utils';

interface ProjectPageProps {
  params: Promise<Params>;
}

interface Params {
  slug: string;
}

// Temporarily disable static generation to resolve build issues
export const dynamic = 'force-dynamic';

// export function generateStaticParams(): Array<{ slug: string }> {
//   return projectsData.projectsList.map((project) => ({
//     slug: project.slug,
//   }));
// }

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const project: ProjectType | undefined = projectsData.projectsList.find(
    (proj) => proj.slug === slug,
  );

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const projectTitle = `${project.name} - Project Portfolio`;
  const projectDescription =
    project.description ||
    `Explore ${project.name}, a project by Jona Schlegel showcasing expertise in archaeological research, science communication, and knowledge management.`;

  // Create OG image URL with project data
  const ogImageUrl = generateProjectOGImageUrl({
    title: project.name,
    description: project.description,
    services: project.services,
  });

  return {
    title: projectTitle,
    description: projectDescription,
    keywords: [
      'archaeology project',
      'science communication',
      project.name.toLowerCase(),
      'archaeological research',
      'portfolio project',
      'knowledge management',
      'public engagement',
      'archaeological illustration',
    ],
    openGraph: {
      title: projectTitle,
      description: projectDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.name} - Archaeological Project by Jona Schlegel`,
        },
      ],
      type: 'article',
      authors: ['Jona Schlegel'],
      section: 'Projects',
    },
    twitter: {
      card: 'summary_large_image',
      title: projectTitle,
      description: projectDescription,
      images: [ogImageUrl],
      creator: '@jonaschlegel',
    },
    alternates: {
      canonical: `https://jonaschlegel.com/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = (await params).slug;
  const project: ProjectType | undefined = projectsData.projectsList.find(
    (proj) => proj.slug === slug,
  );

  if (!project) {
    notFound();
    return null;
  }

  return (
    <div className="container mx-auto py-16">
      <div className="relative mb-4 aspect-[2/1] overflow-hidden rounded-[2.5rem]">
        <Image
          src={project.image}
          alt={project.name}
          width={2000}
          height={1000}
          className="object-cover"
          priority
        />
      </div>
      <article className="md:px-10 lg:px-[140px]">
        <header>
          <h1>{project.name}</h1>
        </header>
        <div>
          <h2>About this project</h2>
          <p>{project.description}</p>
          <p>Services: {project.services.join(', ')}</p>
          <p>
            <em>Full project content coming soon...</em>
          </p>
        </div>
      </article>
    </div>
  );
}
