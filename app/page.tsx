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
import Testimonials from './components/Testimonials';
import { generateSEOMetadata } from './lib/seo';

/** SEO metadata for the home page. */
export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'Jona Schlegel – Freelance archaeological science communicator and illustrator based in Vienna. Portfolio showcasing archaeological illustration, 3D modelling, web development, and knowledge management for research and public engagement.',
  canonical: 'https://jonaschlegel.com',
  keywords: [
    'archaeology portfolio',
    'freelance archaeological illustrator',
    'science communication specialist',
    'archaeological research',
    'public engagement archaeology',
    'knowledge management',
    'archaeological illustration',
    'heritage studies',
    'digital archaeology',
    'Vienna archaeologist',
  ],
  ogType: 'website',
});

/** Home page component displaying hero, projects, testimonials, and media sections. */
export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Jona Schlegel - Archaeological Science Communication & Knowledge Management',
    description:
      'Professional portfolio showcasing expertise in archaeological research, science communication, and knowledge management',
    url: 'https://jonaschlegel.com',
    mainEntity: {
      '@type': 'Person',
      name: 'Jona Schlegel',
      jobTitle: 'Archaeological Science Communication Specialist',
      description:
        'Expert in archaeological research, science communication, and knowledge management',
      url: 'https://jonaschlegel.com',
      knowsAbout: [
        'Archaeology',
        'Science Communication',
        'Knowledge Management',
        'Public Engagement',
        'Digital Heritage',
        'Academic Research',
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(podcastStructuredData),
        }}
      />
    </>
  );
}
