import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  experimental: {
    dynamicIO: true,
    typedRoutes: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);