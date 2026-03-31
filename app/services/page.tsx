import type { Metadata } from 'next';
import { generateSEOMetadata } from '../lib/seo';
import ServicesContent from './ServicesContent';

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

export default function ServicesPage() {
  return <ServicesContent />;
}
