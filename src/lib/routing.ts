import type { Metadata } from 'next';
import { SITE } from './site';
import type { LongPage } from '@/data/types';

export function buildMetadata(page: LongPage, basePath: string): Metadata {
  const path = `${basePath}/${page.slug}`.replace(/\/+$/, '');
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${SITE.url}${path}`,
      images: [{ url: page.heroImage, width: 1600, height: 900, alt: page.heroImageAlt }],
      type: 'website',
      siteName: SITE.brand,
      locale: 'en_AE'
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seoTitle,
      description: page.seoDescription,
      images: [page.heroImage]
    }
  };
}

export function buildBreadcrumbs(parentLabel: string, parentHref: string, page: LongPage) {
  return [
    { label: 'Home', href: '/' },
    { label: parentLabel, href: parentHref },
    { label: page.title }
  ];
}
