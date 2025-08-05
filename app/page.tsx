import type { Metadata } from 'next';
import Banner from './components/Banner';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export const metadata: Metadata = {
  title: 'Home',
  description:
    "Welcome to Jona Schlegel's professional portfolio. Specializing in archaeological science communication, knowledge management, and public engagement. Explore innovative approaches to sharing archaeological insights.",
  keywords: [
    'archaeology portfolio',
    'science communication specialist',
    'archaeological research',
    'public engagement archaeology',
    'knowledge management',
    'archaeological illustration',
    'heritage studies',
    'digital archaeology',
  ],
  openGraph: {
    title:
      'Jona Schlegel – Archaeological Science Communication & Knowledge Management',
    description:
      "Welcome to Jona Schlegel's professional portfolio. Specializing in archaeological science communication, knowledge management, and public engagement.",
    images: [
      {
        url: '/api/og?title=Welcome%20to%20my%20Portfolio&subtitle=Archaeological%20Science%20Communication%20%26%20Knowledge%20Management',
        width: 1200,
        height: 630,
        alt: 'Jona Schlegel - Archaeology & Science Communication Portfolio',
      },
    ],
  },
  alternates: {
    canonical: 'https://jonaschlegel.com',
  },
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Banner />
      <FeaturedProjects />
      <Services />
      <Testimonials />
    </div>
  );
}
