import type { Metadata } from 'next';
import ProjectsGrid, {
  type ProjectCollection,
  type ProjectOverview,
} from '../components/ProjectsGrid';
import { projectsData } from '../data/content';
import { generateSEOMetadata } from '../lib/seo';

/** SEO metadata for the Projects page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Selected Projects',
  description:
    'Selected case studies in archaeological illustration, digital heritage platforms, visual science communication, and research-led design by Jona Schlegel.',
  canonical: 'https://jonaschlegel.com/projects',
  keywords: [
    'archaeological illustration portfolio',
    'archaeological illustration projects',
    'archaeological cover art projects',
    'archaeological drawing portfolio',
    'archaeological sketching portfolio',
    'archaeology journaling portfolio',
    'archaeology ink drawing portfolio',
    'archaeology web design portfolio',
    'archaeology web design projects',
    'archaeology knowledge management projects',
    'archaeology web development portfolio',
    'visual science communication portfolio',
    'landscape archaeology projects',
    'digital heritage web development',
    'CIDOC CRM data model',
    'digital archaeology platforms',
    'archaeological research projects',
    'archaeology website examples',
  ],
  ogType: 'website',
});

/** Projects listing page showing all portfolio items with structured data. */
export default function ProjectsPage() {
  const visibleProjects = projectsData.projectsList.filter((p) => !p.hidden);
  const collectionBySlug: Record<string, ProjectCollection> = {
    'archink-2025': 'illustrated-archaeology',
    'roman-burial': 'illustrated-archaeology',
    'archink-2024': 'illustrated-archaeology',
    'archink-2023': 'illustrated-archaeology',
    'exploring-archaeological-disciplines': 'illustrated-archaeology',
    'archink-2022': 'illustrated-archaeology',
    'archink-2021': 'illustrated-archaeology',
    'adventuress-cover': 'editorial-identity',
    pastrace: 'editorial-identity',
    'archaeo-zine': 'editorial-identity',
    'suriname-tijdmachine': 'digital-heritage',
    pastforwardhub: 'digital-heritage',
    'necessary-reunions': 'digital-heritage',
    'dh-benelux': 'digital-heritage',
    archeomatch: 'digital-heritage',
    'archaeology-of-bias': 'digital-heritage',
    'archaeology-journaling': 'digital-heritage',
    'dutch-learning-platform': 'digital-heritage',
    'urban-chameleon': 'digital-heritage',
    'trowel-journal-blog': 'digital-heritage',
    'archink-stratigraphic-profile': 'maps-research',
    'geophysical-prospection-study': 'maps-research',
  };
  const projectOverviews: ProjectOverview[] = visibleProjects.map((project) => {
    return {
      id: project.id,
      name: project.name,
      slug: project.slug,
      image: project.image,
      description: project.description,
      role: project.role,
      year: project.year,
      collection: collectionBySlug[project.slug] ?? 'maps-research',
    };
  });

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
    <div className="catalogue-page container mx-auto px-4">
      <header className="max-w-4xl pb-16 pt-12 md:pb-24 md:pt-20">
        <p className="eyebrow">Cabinet catalogue · collection 01</p>
        <h1 className="mt-4">The collected work.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
          Illustrated evidence, digital heritage, maps, and experiments — all
          shaped by archaeological questions.
        </p>
      </header>

      <ProjectsGrid projects={projectOverviews} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}
