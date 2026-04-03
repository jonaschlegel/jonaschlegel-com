import type { Metadata } from 'next';
import { generateSEOMetadata } from '../lib/seo';
import ServicesContent from './ServicesContent';

/** SEO metadata for the Services page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Services',
  description:
    'Visual science communication services: archaeological illustration, 3D modelling, web development, and brand design. From reconstruction drawings to research platforms.',
  canonical: 'https://jonaschlegel.com/services',
  keywords: [
    'archaeological illustration',
    'science communication',
    '3D modelling archaeology',
    'photogrammetry',
    'web development archaeology',
    'brand design heritage',
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
    'Visual science communication services specialising in archaeology: illustration, 3D modelling, web development, and brand design.',
  provider: {
    '@type': 'Person',
    name: 'Jona Schlegel',
    url: 'https://jonaschlegel.com',
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Science Communication Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Illustration & Visual Storytelling',
          description:
            'Scientifically accurate illustrations for publications, outreach, and education. Reconstruction drawings, cover art, comics, and zines.',
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
          name: 'Web Development & Digital Platforms',
          description:
            'Fullstack web development for archaeological research projects. Database-driven platforms, interactive visualisation tools, and digital research infrastructure.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Brand & Publication Design',
          description:
            'Visual identity and publication design for heritage organisations, research projects, and academic publishers.',
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
