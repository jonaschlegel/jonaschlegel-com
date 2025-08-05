/**
 * Utility functions for generating Open Graph image URLs
 */

export interface OGImageParams {
  title?: string;
  subtitle?: string;
  type?: string;
}

export interface ProjectOGImageParams {
  title: string;
  description: string;
  services?: string[];
}

/**
 * Generate OG image URL for general pages
 */
export function generateOGImageUrl(params: OGImageParams = {}): string {
  const searchParams = new URLSearchParams();

  if (params.title) {
    searchParams.set('title', params.title);
  }

  if (params.subtitle) {
    searchParams.set('subtitle', params.subtitle);
  }

  if (params.type) {
    searchParams.set('type', params.type);
  }

  return `/api/og?${searchParams.toString()}`;
}

/**
 * Generate OG image URL for project pages
 */
export function generateProjectOGImageUrl(
  params: ProjectOGImageParams,
): string {
  const searchParams = new URLSearchParams();

  searchParams.set('title', params.title);
  searchParams.set('description', params.description);

  if (params.services && params.services.length > 0) {
    searchParams.set('services', params.services.join(', '));
  }

  return `/api/og/project?${searchParams.toString()}`;
}

/**
 * Generate OG image URL for CV page
 */
export function generateCVOGImageUrl(): string {
  return '/api/og/cv';
}

/**
 * Generate OG image URL for legal pages
 */
export function generateLegalOGImageUrl(pageTitle: string): string {
  return generateOGImageUrl({
    title: pageTitle,
    subtitle: 'Legal Information',
    type: 'legal',
  });
}
