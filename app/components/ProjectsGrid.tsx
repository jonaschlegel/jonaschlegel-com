import type { Route } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectCollection =
  | 'illustrated-archaeology'
  | 'editorial-identity'
  | 'digital-heritage'
  | 'maps-research';

export interface ProjectOverview {
  id: string;
  name: string;
  slug: string;
  image: StaticImageData;
  description: string;
  role: string;
  year: string;
  collection: ProjectCollection;
}

const collectionDetails: Record<
  ProjectCollection,
  { number: string; title: string; description: string }
> = {
  'illustrated-archaeology': {
    number: 'Drawer 01',
    title: 'Illustrated archaeology',
    description:
      'Reconstructions, educational images, and the growing archInk drawing collection.',
  },
  'editorial-identity': {
    number: 'Drawer 02',
    title: 'Covers, publications & identity',
    description:
      'Visual worlds made for journals, cultural heritage projects, and printed things.',
  },
  'digital-heritage': {
    number: 'Drawer 03',
    title: 'Digital heritage & interfaces',
    description:
      'Websites, digital collections, and tools for exploring archaeological knowledge.',
  },
  'maps-research': {
    number: 'Drawer 04',
    title: 'Maps, geophysics & research systems',
    description:
      'Field evidence, spatial data, and the structures that make research legible.',
  },
};

const collectionOrder: ProjectCollection[] = [
  'illustrated-archaeology',
  'editorial-identity',
  'digital-heritage',
  'maps-research',
];

/** Work arranged by medium and practice rather than project administration. */
export default function ProjectsGrid({
  projects,
}: {
  projects: ProjectOverview[];
}) {
  return (
    <>
      <nav
        aria-label="Browse portfolio collections"
        className="collection-index mb-16 flex flex-wrap gap-x-5 gap-y-3 border-y border-primary-brown/30 py-4 text-sm md:mb-24"
      >
        {collectionOrder.map((collection) => (
          <a
            key={`collection-index-${collection}`}
            href={`#${collection}`}
            className="font-semibold text-primary-green hover:text-primary-dark"
          >
            {collectionDetails[collection].title}
          </a>
        ))}
      </nav>

      {collectionOrder.map((collection) => {
        const collectionProjects = projects.filter(
          (project) => project.collection === collection,
        );
        const details = collectionDetails[collection];

        return (
          <section
            key={`portfolio-collection-${collection}`}
            id={collection}
            className="catalogue-collection mb-24 scroll-mt-24 md:mb-32"
            aria-labelledby={`${collection}-heading`}
          >
            <header className="mb-10 grid gap-4 border-b border-primary-brown/30 pb-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
              <p className="my-0 font-merriweather text-sm italic text-primary-brown">
                {details.number}
              </p>
              <div>
                <h2
                  id={`${collection}-heading`}
                  className="text-3xl md:text-5xl"
                >
                  {details.title}
                </h2>
                <p className="mb-0 mt-3 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
                  {details.description}
                </p>
              </div>
            </header>

            <div className="catalogue-grid grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-16">
              {collectionProjects.map((project) => (
                <Link
                  key={`collection-project-${project.id}`}
                  href={`/projects/${project.slug}` as Route}
                  className="catalogue-card group block"
                >
                  <div className="cabinet-image-frame relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="min-w-0 pt-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="my-0 text-xs font-semibold uppercase tracking-wider text-primary-green">
                        {project.year}
                      </p>
                      <span className="font-merriweather text-xs italic text-primary-brown">
                        {project.id}
                      </span>
                    </div>
                    <h3 className="mt-2 font-merriweather text-xl font-semibold leading-snug transition-colors group-hover:text-primary-green">
                      {project.name}
                    </h3>
                    <p className="my-0 mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                      {project.role}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
