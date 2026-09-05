import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const SUBSTACK_URL = 'https://archaeoink.substack.com';

// Preserve stable jonaschlegel.com URLs for writing that has moved to Substack.
const migratedPostRedirects = [
  ['100-days-of-drawing', '100-days-of-drawing'],
  [
    'history-of-archaeological-illustration',
    'history-of-archaeological-illustration',
  ],
  ['learn-in-public', 'learn-in-public'],
  ['public-archaeology', 'public-archaeology'],
  [
    'reevaluating-skin-colour-representation-in-archaeological-illustrations',
    'reevaluating-skin-colour-representation-in-archaeological-illustrations',
  ],
  ['stippling', 'stippling'],
  ['switching-gears-from-archink-to-inktober', 'inktober-2024'],
] as const;

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  typedRoutes: true,

  turbopack: {
    rules: {},
  },

  // SEO and performance optimizations
  poweredByHeader: false,

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Optimize bundle
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Security headers
  headers() {
    return Promise.resolve([
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' client.crisp.chat settings.crisp.chat widget.crisp.chat storage.crisp.chat cdn-cookieyes.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' client.crisp.chat; font-src 'self' data: client.crisp.chat; img-src 'self' data: blob: *.google-analytics.com client.crisp.chat image.crisp.chat cdn-cookieyes.com *.basemaps.cartocdn.com *.tile.openstreetmap.org cdnjs.cloudflare.com; connect-src 'self' client.crisp.chat settings.crisp.chat wss://client.crisp.chat wss://client.relay.crisp.chat *.google-analytics.com *.analytics.google.com api.crisp.chat client.relay.crisp.chat cdn-cookieyes.com log.cookieyes.com api.resend.com; frame-src 'self' sketchfab.com;",
          },
        ],
      },
    ]);
  },

  // Redirects for SEO
  redirects() {
    return Promise.resolve([
      ...migratedPostRedirects.map(([oldSlug, substackSlug]) => ({
        source: `/blog/${oldSlug}`,
        destination: `${SUBSTACK_URL}/p/${substackSlug}`,
        permanent: true,
      })),
      {
        source: '/blog',
        destination: `${SUBSTACK_URL}/archive`,
        permanent: true,
      },
      {
        source: '/newsletter',
        destination: `${SUBSTACK_URL}/subscribe`,
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]);
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
