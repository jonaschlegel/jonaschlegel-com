import type { StaticImageData } from 'next/dist/shared/lib/image-external';
import type { JSX } from 'react';

type ProjectType = {
  id: string;
  name: string;
  slug: string;
  image: StaticImageData;
  description: string;
  services: string[];
  isFeatured: boolean;
  hidden?: boolean;
  year: string;
  location?: string;
  institution?: string;
  role: string;
  duration?: string;
  tools: string[];
  objective: string;
  targetGroup: string[];
  challenges?: string[];
  outcome: string;
  impact?: string[];
  publications?: { title: string; venue: string; url?: string }[];
  externalUrl?: string;
  galleryImages?: { src: StaticImageData; caption?: string }[];
};

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module '*.css';

// Global window extensions for tracking scripts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
