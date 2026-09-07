import type { MetadataRoute } from 'next';

const automatedTrainingCrawlers = [
  'GPTBot',
  'Google-Extended',
  'ClaudeBot',
  'CCBot',
  'Bytespider',
  'Google-CloudVertexBot',
  'Meta-ExternalAgent',
  'Applebot-Extended',
  'Amazonbot',
];

/** Returns the robots.txt configuration for search engine crawlers. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: automatedTrainingCrawlers,
        disallow: '/',
      },
    ],
    sitemap: 'https://jonaschlegel.com/sitemap.xml',
  };
}
