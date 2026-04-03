import type { Metadata } from 'next';

/** SEO metadata for the 404 page — excluded from search indexes. */
export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: false,
  },
};

/** Custom 404 page displayed when a route is not found. */
export default function NotFound() {
  return (
    <div className="container mx-auto py-16">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
