import { MetadataRoute } from 'next';
import { services, areas, blogPosts } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/about/`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/`, lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/areas/`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/blog/`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/contact/`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/testimonials/`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/privacy-policy/`, lastModified: new Date(), priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/sitemap-page/`, lastModified: new Date(), priority: 0.3, changeFrequency: 'monthly' },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}/`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}/`,
    lastModified: new Date(),
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const comboRoutes: MetadataRoute.Sitemap = areas.flatMap((area) =>
    services.map((service) => ({
      url: `${BASE_URL}/areas/${area.slug}/${service.slug}/`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    }))
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    priority: 0.5,
    changeFrequency: 'yearly' as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...comboRoutes, ...blogRoutes];
}
