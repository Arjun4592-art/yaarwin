import type { MetadataRoute } from 'next'
import { blogs } from '@/components/data/blogs'

const SITE_URL = 'https://yaarwiner.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-06-26'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: new Date('2026-06-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/responsible-gaming`,
      lastModified: new Date('2026-06-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: new Date('2026-06-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date('2026-06-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: new Date('2026-06-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: new Date('2026-06-26'),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
  ]

  // Dynamic blog pages — auto update jab bhi naya blog add ho
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date('2026-06-26'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
