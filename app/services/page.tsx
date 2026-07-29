import type { Metadata } from 'next';
import { generateSEOMetadata } from '../lib/seo';
import ServicesContent from './ServicesContent';

/** SEO metadata for the Services page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Services for Archaeology & Digital Heritage',
  description:
    'Archaeological illustration, visual communication, and full-stack digital heritage services for researchers, publishers, and heritage organisations.',
  canonical: 'https://jonaschlegel.com/services',
  keywords: [
    'archaeological illustration',
    'archaeological drawing',
    'archaeological sketching',
    'archaeology journaling',
    'archaeology ink drawing',
    'archaeology web development',
    'archaeology web design',
    'visual science communication',
    'archaeology website',
    'archaeology fullstack developer',
    'visual science communication archaeology',
    'archaeology painting',
    'freelance archaeological illustrator',
    'heritage web development',
    'digital archaeology platforms',
    'landscape archaeology data visualisation',
    'CIDOC CRM data modelling',
    'reconstruction drawing',
    'photogrammetry archaeology',
    'archaeology brand identity',
    'archaeological illustration freelance',
    'science communication archaeology',
  ],
  ogType: 'website',
});

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'archaeoINK – Archaeological Illustration & Archaeology Web Development',
  url: 'https://jonaschlegel.com/services',
  description:
    'Archaeological illustration, visual science communication, and full-stack digital heritage platforms by Jona Schlegel.',
  provider: {
    '@type': 'Person',
    name: 'Jona Schlegel',
    url: 'https://jonaschlegel.com',
    jobTitle: 'Archaeological Illustrator & Archaeology Web Developer',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Visual Communication for Archaeology',
    'Digital Heritage Product Design and Development',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Visual Communication & Digital Heritage Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Visual Communication',
          description:
            'Research-led reconstruction, scientific and editorial illustration, publication artwork, and visual narratives for archaeology.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Heritage Products',
          description:
            'Research platforms, digital collections, interactive maps, linked-data interfaces, and full-stack development for heritage organisations.',
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
