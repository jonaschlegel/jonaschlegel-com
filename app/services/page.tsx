import type { Metadata } from 'next';
import { generateSEOMetadata } from '../lib/seo';
import ServicesContent from './ServicesContent';

/** SEO metadata for the Services page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Archaeological Illustration & Archaeology Web Development Services',
  description:
    'Freelance archaeological illustration, archaeology web development & design, and visual science communication services. Fullstack web applications, archaeological drawing, digital painting, brand identity, and heritage platforms by Jona Schlegel.',
  canonical: 'https://jonaschlegel.com/services',
  keywords: [
    'archaeological illustration',
    'archaeology web development',
    'archaeology web design',
    'archaeology website',
    'archaeology fullstack developer',
    'visual science communication archaeology',
    'archaeological drawing',
    'archaeology painting',
    'freelance archaeological illustrator',
    'heritage web development',
    'digital archaeology platforms',
    'archaeology brand identity',
    'archaeological illustration freelance',
    'science communication archaeology',
    'reconstruction drawing',
    'photogrammetry archaeology',
  ],
  ogType: 'website',
});

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'archaeoINK – Archaeological Illustration & Archaeology Web Development',
  url: 'https://jonaschlegel.com/services',
  description:
    'Freelance archaeological illustration, archaeology web development & design, visual science communication, and fullstack heritage platforms. Archaeological drawing, digital painting, and brand identity for archaeology.',
  provider: {
    '@type': 'Person',
    name: 'Jona Schlegel',
    url: 'https://jonaschlegel.com',
    jobTitle: 'Archaeological Illustrator & Archaeology Web Developer',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Archaeological Illustration',
    'Archaeology Web Development',
    'Archaeology Web Design',
    'Visual Science Communication',
    'Fullstack Web Development for Archaeology',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Archaeological Illustration & Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Archaeological Illustration & Visual Science Communication',
          description:
            'Freelance archaeological illustration: archaeological drawing, digital painting, reconstruction scenes, conceptual illustrations, cover art, comics, and zines. Visual science communication for archaeology publications, outreach, and education.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '3D Modelling & Archaeological Documentation',
          description:
            'Digital 3D documentation and modelling of archaeological artefacts using photogrammetry, Feather 3D, and Nomad Sculpt for research and public engagement.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Archaeology Web Development & Design',
          description:
            'Fullstack archaeology web development and web design: research platforms, interactive databases, data visualisation tools, and digital heritage infrastructure. Built with Next.js, TypeScript, and modern web technologies.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Archaeology Brand Identity & Publication Design',
          description:
            'Brand identity, publication design, and visual systems for heritage organisations, archaeological research projects, and academic publishers.',
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
