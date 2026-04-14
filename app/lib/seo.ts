import type { Metadata } from 'next';

interface SEOPageProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

/** Generates a complete Next.js Metadata object with SEO, Open Graph, and Twitter card configuration. */
export function generateSEOMetadata({
  title,
  description,
  canonical,
  keywords = [],
  ogImage,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author = 'Jona Schlegel',
  section,
}: SEOPageProps): Metadata {
  const baseUrl = 'https://jonaschlegel.com';
  const fullTitle =
    title === 'Home'
      ? 'Jona Schlegel \u2013 Landscape Archaeologist, Knowledge Management, Visual Science Communicator, Illustrator & Web Developer'
      : `${title} | Jona Schlegel`;

  const canonicalUrl = canonical || baseUrl;
  const imageUrl =
    ogImage ||
    `/api/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent('Archaeological Illustration, Drawing & Visual Science Communication')}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      'archaeology',
      'archaeological illustration',
      'archaeological drawing',
      'archaeological sketching',
      'visual science communication',
      'landscape archaeology',
      'archaeology web development',
      'archaeology journaling',
      'science communication',
      'knowledge management',
      'archaeological research',
      'public engagement',
      ...keywords,
    ],
    authors: [{ name: author, url: baseUrl }],
    creator: author,
    publisher: author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      siteName: 'Jona Schlegel',
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Jona Schlegel`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@jonaschlegel',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };

  return metadata;
}

/** Creates JSON-LD structured data for a creative work / portfolio project page. */
export function generateCreativeWorkStructuredData({
  title,
  description,
  author = 'Jona Schlegel',
  publishedTime,
  modifiedTime,
  imageUrl,
  url,
  keywords = [],
}: {
  title: string;
  description: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  imageUrl?: string;
  url: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://jonaschlegel.com',
    },
    url,
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/** Creates JSON-LD structured data for breadcrumb navigation. */
export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url?: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

/** Creates JSON-LD structured data for a FAQ page. */
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
