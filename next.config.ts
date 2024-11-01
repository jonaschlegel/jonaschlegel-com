import createMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  experimental: {
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
