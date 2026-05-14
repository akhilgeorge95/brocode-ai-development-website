import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SERVICES, INDUSTRIES, TECHNOLOGY, INSIGHTS, ABOUT } from '@/lib/nav';

// Fixed effective date for the site. Bump when the canonical content is revised.
const LAST_MODIFIED = new Date('2026-01-01');

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

type RouteSpec = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const LEGAL_ROUTES: RouteSpec[] = [
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 }
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url.replace(/\/$/, '');

  const routes: RouteSpec[] = [
    // Homepage
    { path: '/', changeFrequency: 'monthly', priority: 1.0 },

    // Core / about routes (from ABOUT) — /security-compliance is included here as core.
    ...ABOUT.map((link) => ({
      path: link.href,
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.8
    })),

    // Contact lives outside ABOUT in nav.ts.
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },

    // Service pages
    ...SERVICES.map((link) => ({
      path: link.href,
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.8
    })),

    // Industry pages
    ...INDUSTRIES.map((link) => ({
      path: link.href,
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.8
    })),

    // Technology pages
    ...TECHNOLOGY.map((link) => ({
      path: link.href,
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.6
    })),

    // Insights hub + sub-pages
    ...INSIGHTS.map((link) => ({
      path: link.href,
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: 0.6
    })),

    // Legal pages
    ...LEGAL_ROUTES
  ];

  // Deduplicate by path while preserving the first occurrence.
  const seen = new Set<string>();
  const unique = routes.filter((r) => {
    if (seen.has(r.path)) return false;
    seen.add(r.path);
    return true;
  });

  return unique.map((r) => ({
    url: `${base}${r.path === '/' ? '' : r.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }));
}
