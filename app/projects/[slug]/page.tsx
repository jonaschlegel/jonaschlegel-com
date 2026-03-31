import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { ProjectType } from '../../../types/global';
import Breadcrumbs from '../../components/Breadcrumbs';
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

/** Generates dynamic SEO metadata for an individual project page. */
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

/** Individual project page displaying details, images, and MDX content. */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = (await params).slug;
  const project: ProjectType | undefined = projectsData.projectsList.find(
    (proj) => proj.slug === slug,
  );

  if (!project) {
    notFound();
    return null;
  }

  const infoItems: { label: string; value: string }[] = [
    ...(project.institution
      ? [{ label: 'Institution', value: project.institution }]
      : []),
    { label: 'Role', value: project.role },
    ...(project.duration
      ? [{ label: 'Duration', value: project.duration }]
      : []),
    { label: 'Tools', value: project.tools.join(', ') },
    { label: 'Year', value: project.year },
    ...(project.location
      ? [{ label: 'Location', value: project.location }]
      : []),
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      {/* Header */}
      <header className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-green">
          {project.services[0]}
        </p>
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">{project.name}</h1>
        <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* Image + Info table */}
      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={500}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <dl className="divide-y divide-neutral-200">
            {infoItems.map((item) => (
              <div
                key={`info-${item.label}`}
                className="flex gap-6 py-3 first:pt-0 last:pb-0"
              >
                <dt className="w-28 shrink-0 text-sm text-neutral-500">
                  {item.label}
                </dt>
                <dd className="text-sm text-neutral-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Objective */}
      <section className="mb-10 max-w-3xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-green">
          Objective
        </h2>
        <p className="text-neutral-700 leading-relaxed">{project.objective}</p>
      </section>

      {/* Challenges + Target Group */}
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {project.challenges && project.challenges.length > 0 && (
          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-green">
              Challenges
            </h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge) => (
                <li
                  key={`challenge-${challenge.slice(0, 30).replace(/\s+/g, '-')}`}
                  className="flex gap-2 text-sm text-neutral-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green" />
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        )}
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-green">
            Target Group
          </h2>
          <ul className="space-y-2">
            {project.targetGroup.map((group) => (
              <li
                key={`target-${group.slice(0, 30).replace(/\s+/g, '-')}`}
                className="flex gap-2 text-sm text-neutral-700"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green" />
                {group}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Outcome */}
      <section className="mb-12 border-l-2 border-primary-green pl-6 max-w-3xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-green">
          Outcome
        </h2>
        <p className="text-neutral-700 leading-relaxed">{project.outcome}</p>
      </section>
    </div>
  );
}
