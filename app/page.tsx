import type { Metadata } from 'next';
import Banner from './components/Banner';
import CurrentRoleBanner from './components/CurrentRoleBanner';
import Hero from './components/Hero';
import InstagramGrid from './components/InstagramGrid';
import MediaSection from './components/MediaSection';
import PastForwardHubSection from './components/PastForwardHubSection';
import PodcastSection from './components/PodcastSection';
import RecentActivity from './components/RecentActivity';
import Testimonials from './components/Testimonials';
import { generateSEOMetadata } from './lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description:
    "Welcome to Jona Schlegel's professional portfolio. Specializing in archaeological science communication, knowledge management, and public engagement. Explore innovative approaches to sharing archaeological insights with academic rigor and creative presentation.",
  canonical: 'https://jonaschlegel.com',
  keywords: [
    'archaeology portfolio',
    'science communication specialist',
    'archaeological research',
    'public engagement archaeology',
    'knowledge management',
    'archaeological illustration',
    'heritage studies',
    'digital archaeology',
    'academic communication',
    'research portfolio',
  ],
  ogType: 'website',
});

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
        <RecentActivity />
        <Banner />
        <PodcastSection />
        <MediaSection />
        <InstagramGrid />
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
    </>
  );
}
