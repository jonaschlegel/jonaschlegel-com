import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../data/content';

const selectedWork = [
  {
    slug: 'suriname-tijdmachine',
    summary:
      'Bringing dispersed Surinamese archives together in one public, map-based research platform.',
  },
  {
    slug: 'roman-burial',
    summary:
      'Turning bioarchaeological evidence into a reconstruction for peer-reviewed publication.',
  },
  {
    slug: 'adventuress-cover',
    summary:
      'An illustrated cover celebrating women across archaeology’s past, present, and future.',
  },
] as const;

/** A deliberately small, editorial selection of portfolio stories. */
const FeaturedProjects = () => {
  const projects = selectedWork.flatMap((selection) => {
    const project = projectsData.projectsList.find(
      (item) => item.slug === selection.slug,
    );
    return project ? [{ ...project, summary: selection.summary }] : [];
  });

  const [leadProject, ...supportingProjects] = projects;

  return (
    <section
      className="container mx-auto py-20 md:py-32"
      id="selected-work"
      aria-labelledby="selected-work-heading"
    >
      <div className="mb-12 flex items-end justify-between gap-8 md:mb-16">
        <div>
          <p className="eyebrow">Selected projects</p>
          <h2
            id="selected-work-heading"
            className="mt-3 max-w-2xl text-3xl md:text-5xl"
          >
            A few stories worth looking into.
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden shrink-0 border-b border-primary-dark pb-1 text-sm font-semibold text-primary-dark transition-colors hover:border-primary-green hover:text-primary-green sm:block"
        >
          See the full archive&nbsp; ↗
        </Link>
      </div>

      {leadProject && (
        <Link
          href={`/projects/${leadProject.slug}` as Route}
          className="group mb-14 block md:mb-20"
        >
          <div className="relative aspect-[5/3] overflow-hidden bg-gray-100 md:aspect-[2/1]">
            <Image
              src={leadProject.image}
              alt=""
              fill
              priority={false}
              className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.015] motion-reduce:group-hover:scale-100"
              sizes="100vw"
            />
          </div>
          <div className="grid gap-3 border-b border-primary-dark/20 py-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] md:items-start md:gap-12 md:py-7">
            <h3 className="font-merriweather text-2xl font-semibold transition-colors group-hover:text-primary-green md:text-4xl">
              {leadProject.name}
            </h3>
            <p className="my-0 text-base leading-relaxed text-gray-700 md:text-lg">
              {leadProject.summary}
            </p>
          </div>
        </Link>
      )}

      <div className="grid gap-12 md:grid-cols-2 md:gap-8">
        {supportingProjects.map((project, index) => (
          <Link
            key={`supporting-project-${project.slug}`}
            href={`/projects/${project.slug}` as Route}
            className={`group block ${index === 1 ? 'md:mt-20' : ''}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="pt-5">
              <h3 className="font-merriweather text-2xl font-semibold transition-colors group-hover:text-primary-green md:text-3xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-700">
                {project.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-12 inline-block border-b border-primary-dark pb-1 text-sm font-semibold text-primary-dark sm:hidden"
      >
        See the full archive&nbsp; ↗
      </Link>
    </section>
  );
};

export default FeaturedProjects;
