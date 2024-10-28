import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  experimental: {
    dynamicIO: true,
    typedRoutes: true,
    turbo: {
      loaders: {},
    },
  },

  typescript: {
    // Types are already checked in CI
    ignoreBuildErrors: true,
  },
  eslint: {
    // Linting is already checked in CI
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
