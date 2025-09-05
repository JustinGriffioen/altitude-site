import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cms/', '/api/'],
    },
    sitemap: 'https://altitude-intelligence.com/sitemap.xml',
  }
}
