import type { MetadataRoute } from 'next';
import { projectsData } from './data/content';

/** Generates the sitemap.xml entries for all public pages and projects. */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jonaschlegel.com';

  // Get visible projects from content data
  const visibleProjects = projectsData.projectsList.filter((p) => !p.hidden);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cv`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impact`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/imprint`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = visibleProjects.map(
    (project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
