import type { LongPage } from '../types';

export const cookiePolicy: LongPage = {
  slug: 'cookie-policy',
  category: 'legal',
  title: 'Cookie Policy',
  seoTitle: 'Cookie Policy — Brocode Solutions',
  seoDescription:
    'How Brocode Solutions uses cookies and similar technologies on its website, the categories in use, third parties involved, and how to manage your preferences under UAE PDPL and GDPR.',
  eyebrow: 'Policy',
  headline: 'How we use cookies on this website.',
  sub: 'This page explains what cookies and similar technologies we use, why we use them, who else can read them, and how you can manage your preferences at any time.',
  heroImage: '/images/legal/cookie-policy.jpg',
  heroImageAlt: 'Laptop screen showing a cookie preferences banner with toggle controls for each category',
  heroIcon: 'doc',
  intro:
    'This Cookie Policy is part of the wider privacy framework operated by Brocode Solutions ("Brocode", "we", "us"). Effective date: 1 January 2026. It applies to all pages on this website and should be read alongside our Privacy Policy. Where the use of cookies involves personal data, we process that data in line with UAE Federal Decree-Law No. 45 of 2021 (PDPL) and, where applicable, the EU and UK GDPR. You can contact our Data Protection Officer at dpo@brocode.ae with any question about this policy or about a specific cookie set by this site.',
  sections: [
    {
      heading: '1. What cookies and similar technologies are',
      body: 'Cookies are small text files that a website places on your device to store information between visits. We also use similar technologies — local storage, session storage, and small image tags — which work in comparable ways and are covered by this policy. Cookies may be set by us directly (first-party cookies) or by services we embed on the site, such as analytics or video providers (third-party cookies). Cookies can be session-based, in which case they are removed when you close your browser, or persistent, in which case they remain for a defined period. The duration and purpose of each cookie used on this site is summarised in the categories described below.'
    },
    {
      heading: '2. Categories of cookies we use',
      body: 'Strictly necessary cookies make the site work — they keep you logged in to authenticated areas, remember preferences such as language, and help us defend against fraud and abuse. These cannot be switched off because the site would not function without them. Performance and analytics cookies, set by us and by privacy-respecting analytics providers, help us understand how visitors use the site so we can improve it; we receive aggregated reports rather than personal profiles. Functionality cookies remember choices you have made, such as the region or preferred reading width. Marketing cookies, where we use them, support measurement of campaigns and are only set with your consent through the preferences banner.'
    },
    {
      heading: '3. Third parties and cross-border transfers',
      body: 'A small number of trusted third parties may set cookies through this site under our instructions. Typical examples include analytics providers, video and content delivery platforms used to embed demonstrations, and customer support tools used for live chat where enabled. We choose providers that publish their own privacy and cookie practices and that support the lawful bases we rely on under PDPL and GDPR. Where a provider processes personal data outside the UAE, we put in place the safeguards required by applicable law, including standard contractual clauses and, where appropriate, supplementary measures. A current list of third-party cookies and their durations is available from dpo@brocode.ae on request.'
    },
    {
      heading: '4. Managing your preferences and changes',
      body: 'You can manage your cookie preferences at any time through the banner shown on your first visit and through the "Cookie preferences" link in the site footer. You can also control cookies through your browser settings, including blocking all cookies, blocking third-party cookies only, or deleting cookies that have already been set; instructions for each major browser are published by the browser vendor. Please note that restricting strictly necessary cookies may affect the operation of parts of the site. We review this policy at least annually and whenever we change the cookies in use. The effective date at the top of this page will reflect the latest version, and material changes will be highlighted on first visit.'
    }
  ],
  highlights: [
    { title: 'Effective date 1 January 2026', description: 'The current version of this Cookie Policy.', icon: 'doc' },
    { title: 'Strictly necessary cookies', description: 'Keep the site working, authenticated, and protected.', icon: 'shield' },
    { title: 'Analytics with care', description: 'Aggregated insights, not personal profiles, to improve the site.', icon: 'chart' },
    { title: 'Functionality preferences', description: 'Remember your language and reading choices.', icon: 'compass' },
    { title: 'Marketing only with consent', description: 'Campaign measurement when you opt in.', icon: 'gavel' },
    { title: 'Manage preferences any time', description: 'Through the banner, the footer link, or your browser.', icon: 'cogs' }
  ],
  whyBrocode:
    'We try to keep cookie use on this site to what is needed and clearly useful. The preferences banner offers a genuine choice rather than a single accept-all button, and the third parties we work with are chosen with the same care we apply to client engagements. Your decisions are remembered between visits so you do not need to repeat them.',
  ourApproach:
    'Our Data Protection Officer reviews the cookies in use on this site at least annually and whenever the site is materially redesigned. New cookies require a documented purpose, lawful basis, retention period, and — where appropriate — a consent gate before release. We test the preferences banner on the major browsers and assistive technologies to ensure it is usable. Where a third party changes how it uses cookies on our pages, we update this policy and the preferences banner promptly. Questions and requests for the current cookie inventory are answered within the same timelines as other data subject requests.',
  stats: [
    { value: 2026, label: 'Effective year of this policy' },
    { value: 4, label: 'Categories of cookies in use' },
    { value: 12, label: 'Months between scheduled reviews' },
    { value: 30, label: 'Days to respond to cookie-related requests' }
  ],
  primaryCta: { label: 'Manage preferences', href: '/contact' },
  secondaryCta: { label: 'Read our privacy policy', href: '/privacy-policy' },
  related: [
    { label: 'Privacy Policy', href: '/privacy-policy', description: 'How we handle personal data more broadly.' },
    { label: 'Terms of Service', href: '/terms-of-service', description: 'The terms governing use of this site.' },
    { label: 'Security & Compliance', href: '/security-compliance', description: 'Our wider security posture.' },
    { label: 'Contact', href: '/contact', description: 'Reach our DPO with any cookie question.' },
    { label: 'About Brocode', href: '/about', description: 'Who we are and where we operate.' }
  ],
  capabilities: [
    'First-party cookies set by Brocode',
    'Third-party cookies under controlled agreements',
    'Strictly necessary cookies for site operation',
    'Performance and analytics with aggregated reports',
    'Functionality cookies for user preferences',
    'Optional marketing cookies behind consent'
  ],
  outcomes: [
    'Genuine choice through a clear preferences banner',
    'Preferences remembered across visits',
    'Easy access to manage settings from any page',
    'Transparency on third parties and their purposes',
    'A documented review cycle for every cookie in use'
  ]
};
