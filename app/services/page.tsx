import type { Metadata } from 'next';
import { generateSEOMetadata } from '../lib/seo';
import ServicesContent from './ServicesContent';

/** SEO metadata for the Services page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Services',
  description:
    'Archaeological illustration, drawing, digital painting, sketching, conceptual illustration, and cover art. Plus archaeology web development, brand identity for heritage organisations, and 3D modelling.',
  canonical: 'https://jonaschlegel.com/services',
  keywords: [
    'archaeological illustration',
    'archaeology drawing',
    'archaeology painting',
    'archaeology sketching',
    'archaeology conceptual illustration',
    'archaeology cover art',
    'archaeology web development',
    'archaeology brand identity',
    'archaeology journaling',
    'science communication',
    '3D modelling archaeology',
    'photogrammetry',
    'visual storytelling',
    'reconstruction drawing',
  ],
  ogType: 'website',
});

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'archaeoINK – Jona Schlegel',
  url: 'https://jonaschlegel.com/services',
  description:
    'Archaeological illustration, drawing, digital painting, sketching, conceptual illustration, cover art, web development, and brand identity services for archaeology and heritage.',
  provider: {
    '@type': 'Person',
    name: 'Jona Schlegel',
    url: 'https://jonaschlegel.com',
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Archaeological Science Communication Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Archaeological Illustration & Visual Storytelling',
          description:
            'Archaeological drawing, digital painting, sketching, and conceptual illustration for publications, outreach, and education. Cover art, reconstruction scenes, comics, and zines.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '3D Modelling & Documentation',
          description:
            'Digital 3D documentation and modelling of archaeological artefacts using photogrammetry, Feather 3D, and Nomad Sculpt.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Archaeology Web Development & Digital Platforms',
          description:
            'Web development for archaeological research projects. Database-driven platforms, interactive visualisation tools, and digital research infrastructure.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Archaeology Brand Identity & Publication Design',
          description:
            'Brand identity and publication design for heritage organisations, archaeological research projects, and academic publishers.',
        },
      },
    ],
  },
};

/** Services page component. */
export default function ServicesPage() {
  return (
    <>
      <ServicesContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />
    </>
  );
}
