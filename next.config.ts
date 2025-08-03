import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  experimental: {
    typedRoutes: true,
  },

  turbopack: {
    rules: {},
  },

  typescript: {
    // Types are already checked in CI
    ignoreBuildErrors: true,
  },
  eslint: {
    // Linting is already checked in CI
    ignoreDuringBuilds: true,
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
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' assets.calendly.com client.crisp.chat settings.crisp.chat widget.crisp.chat storage.crisp.chat; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' client.crisp.chat settings.crisp.chat wss://client.crisp.chat; frame-src 'self' calendly.com;",
          },
        ],
      },
    ]);
  },

  // Redirects for SEO
  redirects() {
    return Promise.resolve([
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
