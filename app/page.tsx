import type { Metadata } from 'next';
import Banner from './components/Banner';
import BlogPreview from './components/BlogPreview';
import ClientLogos from './components/ClientLogos';
import FAQSection from './components/FAQSection';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import IllustrationBand from './components/IllustrationBand';
import ServicePillars from './components/ServicePillars';
import Testimonials from './components/Testimonials';
import { defaultFAQs } from './data/faqs';
import { generateSEOMetadata } from './lib/seo';

/** SEO metadata for the home page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'Jona Schlegel – Freelance landscape archaeologist specialising in archaeological illustration, drawing & sketching, visual science communication, archaeology web development, digital heritage platforms, and brand identity for archaeology.',
  canonical: 'https://jonaschlegel.com',
  keywords: [
    'archaeological illustration',
    'archaeological drawing',
    'archaeological sketching',
    'archaeology journaling',
    'archaeology ink drawing',
    'visual science communication',
    'visual science communication archaeology',
    'landscape archaeology',
    'archaeology web development',
    'archaeology web design',
    'archaeology website development',
    'freelance archaeological illustrator',
    'archaeology fullstack developer',
    'archaeology painting',
    'archaeology cover art',
    'archaeology brand identity',
    'digital heritage web development',
    'CIDOC CRM data modelling',
  ],
  ogType: 'website',
});

/** Home page component displaying hero, projects, testimonials, and media sections. */
export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Jona Schlegel - Archaeological Illustration, Archaeology Web Development & Visual Science Communication',
    description:
      'Selected work in archaeological illustration, visual science communication, and full-stack digital heritage platforms',
    url: 'https://jonaschlegel.com',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://jonaschlegel.com/#jona',
      name: 'Jona Schlegel',
      jobTitle: 'Archaeological Illustrator & Archaeology Web Developer',
      description:
        'Archaeologist, illustrator, and web developer creating clear visual communication and full-stack digital products for heritage research',
      url: 'https://jonaschlegel.com',
      knowsAbout: [
        'Archaeological Illustration',
        'Visual Science Communication',
        'Data Modelling',
        'CIDOC CRM',
        'Archaeology Web Development',
        'Full-stack Web Design for Heritage',
        'Digital Heritage Platforms',
        'Scientific Illustration',
        'React & Next.js',
        'QGIS & GIS Data Visualization',
      ],
    },
  };

  return (
    <>
      <div>
        <Hero />
        <ClientLogos />
        <ServicePillars />
        <FeaturedProjects />
        <IllustrationBand seed={1} />
        <Banner />
        <Testimonials />
        <BlogPreview />
        <FAQSection faqs={defaultFAQs} />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
