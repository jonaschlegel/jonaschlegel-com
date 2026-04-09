import type { Metadata } from 'next';
import Banner from './components/Banner';
import BlogPreview from './components/BlogPreview';
import ClientLogos from './components/ClientLogos';
import CurrentRoleBanner from './components/CurrentRoleBanner';
import FAQSection, { defaultFAQs } from './components/FAQSection';
import Hero from './components/Hero';
import IllustrationBand from './components/IllustrationBand';
import InstagramGrid from './components/InstagramGrid';
import MediaSection from './components/MediaSection';
import PastForwardHubSection from './components/PastForwardHubSection';
import PodcastSection, {
  podcastStructuredData,
} from './components/PodcastSection';
import RecentActivity from './components/RecentActivity';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { generateSEOMetadata } from './lib/seo';

/** SEO metadata for the home page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'Jona Schlegel – Freelance archaeological illustrator and archaeology web developer. Specialising in archaeological drawing, visual science communication, archaeology web development & design, fullstack heritage platforms, and brand identity for archaeology.',
  canonical: 'https://jonaschlegel.com',
  keywords: [
    'archaeological illustration',
    'archaeology web development',
    'archaeology web design',
    'archaeology website development',
    'visual science communication archaeology',
    'freelance archaeological illustrator',
    'archaeology fullstack developer',
    'archaeological drawing',
    'archaeology painting',
    'archaeology cover art',
    'archaeology brand identity',
    'digital heritage web development',
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
      'Professional portfolio: archaeological illustration, archaeology web development & design, visual science communication, and fullstack heritage platforms',
    url: 'https://jonaschlegel.com',
    mainEntity: {
      '@type': 'Person',
      name: 'Jona Schlegel',
      jobTitle: 'Archaeological Illustrator & Archaeology Web Developer',
      description:
        'Freelance archaeological illustrator and archaeology web developer specialising in archaeological drawing, visual science communication, fullstack web development for heritage research, and archaeology web design',
      url: 'https://jonaschlegel.com',
      knowsAbout: [
        'Archaeological Illustration',
        'Visual Science Communication',
        'Data Modelling',
        'CIDOC CRM',
        'Archaeology Web Development',
        'Fullstack Web Design for Heritage',
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
        <div className="container mx-auto px-4">
          <CurrentRoleBanner />
        </div>
        <IllustrationBand seed={1} />
        <ClientLogos />
        <Services />

        <RecentActivity />
        <BlogPreview />
        <Banner />
        <PodcastSection />
        <MediaSection />
        <InstagramGrid />
        <FAQSection faqs={defaultFAQs} />
        <Testimonials />
        <PastForwardHubSection />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        id="podcast-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(podcastStructuredData),
        }}
      />
    </>
  );
}
