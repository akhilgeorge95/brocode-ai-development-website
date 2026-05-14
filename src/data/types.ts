import type { IconKey } from '@/components/icons';

/** Shared schema for service / industry / technology / legal / resource pages. */
export type LongPage = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  category: 'service' | 'industry' | 'technology' | 'insight' | 'legal';

  eyebrow: string;
  headline: string;
  sub: string;

  heroImage: string;
  heroImageAlt: string;
  heroIcon?: IconKey;

  intro: string;

  sections: Array<{
    heading: string;
    body: string; // paragraph(s) of 100-120 words
  }>;

  highlights?: Array<{ title: string; description: string; icon?: IconKey }>;
  whyBrocode: string;
  ourApproach: string;

  stats?: Array<{ value: number; suffix?: string; prefix?: string; label: string }>;

  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };

  related: Array<{ label: string; href: string; description?: string }>;

  /** Quick-glance attributes for sidebar / glance cards. */
  capabilities?: string[];
  outcomes?: string[];
};
