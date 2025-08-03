import fs from 'node:fs/promises';
import path from 'node:path';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://jonaschlegel.com';

  // Get all project files dynamically
  const projectsDir = path.join(process.cwd(), 'app/data/projects');
  let projectFiles: string[] = [];

  try {
    const files = await fs.readdir(projectsDir);
    projectFiles = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace('.mdx', ''));
  } catch (error) {
    console.warn('Could not read projects directory:', error);
    // Fallback to known projects
    projectFiles = [
      'exploring-archaeological-disciplines',
      'urban-chameleon',
      'adventuress-cover',
      'trowel-journal-blog',
      'archaeo-zine',
      'roman-burial',
    ];
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectFiles.map((project) => ({
    url: `${baseUrl}/projects/${project}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
