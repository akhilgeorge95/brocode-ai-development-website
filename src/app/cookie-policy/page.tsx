import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { GlassCard } from '@/components/ui/GlassCard';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import { ConsentControl, CookieRegister, type CookieRow, type Category } from './ConsentControl';

const SLUG = 'cookie-policy';
const LAST_SCANNED = '14 May 2026';
const COOKIE_COUNT = 23;
const VERSION = 'v2.6';
const EFFECTIVE_DATE = '1 January 2026';
const WHATSAPP_MESSAGE =
  'Hi Brocode — I have a question about the cookies on brocode.ae or about your consent management. Could someone from your privacy team get back to me?';

export const metadata: Metadata = {
  title: 'Cookie Policy | In-Page Consent + Live Register | Brocode',
  description:
    'Every cookie set by brocode.ae, with provider, purpose, duration, and a granular in-page consent control. Quarterly automated scans. GPC honoured. UAE PDPL + GDPR aligned.',
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: 'Cookie Policy — Brocode Solutions',
    description:
      'A real cookie register, an in-page consent UI, GPC honoured. 23 cookies registered. Audited quarterly.',
    url: `https://www.brocode.ae/${SLUG}`,
    images: [{ url: `/images/legal/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy — Brocode Solutions',
    description: 'In-page consent UI plus a live, scanner-populated cookie register.'
  }
};

const cookies: CookieRow[] = [
  { name: '__brcd_session', provider: 'brocode.ae', party: 'First', category: 'Strictly necessary', purpose: 'Session identifier for authenticated portal areas', duration: 'Session' },
  { name: '__brcd_csrf', provider: 'brocode.ae', party: 'First', category: 'Strictly necessary', purpose: 'CSRF token; protects form submissions', duration: 'Session' },
  { name: '__brcd_consent', provider: 'brocode.ae', party: 'First', category: 'Strictly necessary', purpose: 'Records your cookie preferences and the consent timestamp', duration: '12 months' },
  { name: '__brcd_lb', provider: 'brocode.ae', party: 'First', category: 'Strictly necessary', purpose: 'Load-balancer stickiness for portal sessions', duration: 'Session' },
  { name: '__cf_bm', provider: 'Cloudflare', party: 'Third', category: 'Strictly necessary', purpose: 'Bot management and rate limiting', duration: '30 minutes' },
  { name: 'cf_clearance', provider: 'Cloudflare', party: 'Third', category: 'Strictly necessary', purpose: 'Browser challenge clearance for security', duration: '30 days' },
  { name: '__brcd_lang', provider: 'brocode.ae', party: 'First', category: 'Functional', purpose: 'Remembers your language preference (en / ar)', duration: '12 months' },
  { name: '__brcd_theme', provider: 'brocode.ae', party: 'First', category: 'Functional', purpose: 'Light / dark / system theme preference', duration: '12 months' },
  { name: '__brcd_region', provider: 'brocode.ae', party: 'First', category: 'Functional', purpose: 'Regional content variant (UAE / KSA / EU)', duration: '6 months' },
  { name: '_ga', provider: 'Google Analytics 4', party: 'Third', category: 'Analytics', purpose: 'Distinguishes unique visitors (IP-truncated, EU region)', duration: '13 months' },
  { name: '_ga_<CONTAINER>', provider: 'Google Analytics 4', party: 'Third', category: 'Analytics', purpose: 'Session state for GA4 property', duration: '13 months' },
  { name: '_clck', provider: 'Microsoft Clarity', party: 'Third', category: 'Analytics', purpose: 'Aggregate session heatmaps; PII masked by default', duration: '12 months' },
  { name: '_clsk', provider: 'Microsoft Clarity', party: 'Third', category: 'Analytics', purpose: 'Session replay sampling (PII auto-masked)', duration: '24 hours' },
  { name: 'hubspotutk', provider: 'HubSpot', party: 'Third', category: 'Marketing', purpose: 'Marketing CRM contact identification on form submission', duration: '13 months' },
  { name: '__hssc', provider: 'HubSpot', party: 'Third', category: 'Marketing', purpose: 'Tracks sessions on the marketing site', duration: '30 minutes' },
  { name: '__hssrc', provider: 'HubSpot', party: 'Third', category: 'Marketing', purpose: 'Detects whether the visitor restarted the browser', duration: 'Session' },
  { name: 'li_oatml', provider: 'LinkedIn Insight Tag', party: 'Third', category: 'Marketing', purpose: 'Campaign measurement and conversion tracking', duration: '30 days' },
  { name: 'bcookie', provider: 'LinkedIn Insight Tag', party: 'Third', category: 'Marketing', purpose: 'Browser identifier for LinkedIn campaign measurement', duration: '12 months' },
  { name: 'lidc', provider: 'LinkedIn Insight Tag', party: 'Third', category: 'Marketing', purpose: 'Routing for LinkedIn campaign tracking', duration: '24 hours' },
  { name: '__brcd_persona', provider: 'brocode.ae', party: 'First', category: 'Personalisation', purpose: 'Content variant by inferred persona (CIO / CDO / Procurement / Engineer)', duration: '6 months' },
  { name: '__brcd_intent', provider: 'brocode.ae', party: 'First', category: 'Personalisation', purpose: 'Tracks which lead magnets you viewed for relevance scoring', duration: '6 months' },
  { name: 'YSC', provider: 'YouTube (embedded video)', party: 'Third', category: 'Marketing', purpose: 'Tracks video views on embedded demonstrations', duration: 'Session' },
  { name: 'VISITOR_INFO1_LIVE', provider: 'YouTube (embedded video)', party: 'Third', category: 'Marketing', purpose: 'YouTube player bandwidth estimation', duration: '6 months' }
];

const categories: Category[] = [
  {
    key: 'necessary',
    label: 'Strictly necessary',
    description: 'Make the site work, keep you logged in, defend against fraud and abuse.',
    count: cookies.filter((c) => c.category === 'Strictly necessary').length,
    locked: true,
    defaultOn: true,
    breaks: 'Authenticated portal areas, form submissions, and bot-protection challenges would not function.'
  },
  {
    key: 'functional',
    label: 'Functional',
    description: 'Remember your language, theme, and regional content choices between visits.',
    count: cookies.filter((c) => c.category === 'Functional').length,
    locked: false,
    defaultOn: true,
    breaks: 'You would be reset to defaults (English, light theme, UAE region) on every visit.'
  },
  {
    key: 'analytics',
    label: 'Analytics',
    description: 'Help us understand which pages get read so we can improve them. Aggregated, IP-truncated.',
    count: cookies.filter((c) => c.category === 'Analytics').length,
    locked: false,
    defaultOn: false,
    breaks: 'We lose visibility on which content reaches you; nothing on the site stops working.'
  },
  {
    key: 'marketing',
    label: 'Marketing',
    description: 'Measure campaign reach on LinkedIn and HubSpot. No third-party ad targeting on this site.',
    count: cookies.filter((c) => c.category === 'Marketing').length,
    locked: false,
    defaultOn: false,
    breaks: 'We will not be able to measure whether a LinkedIn campaign brought you here.'
  },
  {
    key: 'personalisation',
    label: 'Personalisation',
    description: 'Tailor which case studies and lead magnets we surface based on your browsing pattern.',
    count: cookies.filter((c) => c.category === 'Personalisation').length,
    locked: false,
    defaultOn: false,
    breaks: 'You see the default content set for every visitor; nothing else changes.'
  }
];

const thirdPartyProviders = [
  { name: 'Google Analytics 4', purpose: 'Aggregated, IP-truncated analytics (EU region property)', link: 'https://policies.google.com/privacy' },
  { name: 'Microsoft Clarity', purpose: 'Session heatmaps and replay (PII auto-masked)', link: 'https://privacy.microsoft.com/privacystatement' },
  { name: 'HubSpot', purpose: 'Marketing CRM and form analytics', link: 'https://legal.hubspot.com/privacy-policy' },
  { name: 'LinkedIn Insight Tag', purpose: 'LinkedIn campaign measurement', link: 'https://www.linkedin.com/legal/privacy-policy' },
  { name: 'Cloudflare', purpose: 'Edge CDN, WAF, DDoS mitigation, bot management', link: 'https://www.cloudflare.com/privacypolicy/' },
  { name: 'YouTube (Google)', purpose: 'Embedded demonstration videos', link: 'https://policies.google.com/privacy' }
];

const changelog = [
  { date: '14 May 2026', change: 'Removed two Facebook Pixel cookies after retiring the Meta campaign; added two HubSpot session cookies after enabling chat.' },
  { date: '21 March 2026', change: 'Added __brcd_persona and __brcd_intent personalisation cookies; documented the 6-month retention.' },
  { date: '11 February 2026', change: 'Quarterly scan completed; no new undisclosed cookies detected.' },
  { date: '04 December 2025', change: 'Microsoft Clarity enabled with PII auto-masking; default state set to off.' },
  { date: '15 October 2025', change: 'Switched GA4 property to EU region; IP truncation enforced server-side.' },
  { date: '22 August 2025', change: 'Quarterly scan completed; no new undisclosed cookies detected.' },
  { date: '02 June 2025', change: 'Added LinkedIn Insight Tag; consent banner reworded; re-consent triggered.' },
  { date: '14 April 2025', change: 'Removed Hotjar after vendor consolidation onto Microsoft Clarity.' },
  { date: '20 February 2025', change: 'Quarterly scan; one stale third-party cookie removed from CDN configuration.' },
  { date: '03 January 2025', change: 'Annual review; consent UI redesigned for WCAG 2.2 AA conformance.' },
  { date: '15 November 2024', change: 'Added regional content variant cookie; documented under Functional.' },
  { date: '28 August 2024', change: 'Initial deployment of in-page consent UI replacing modal banner.' }
];

const relatedItems = [
  { label: 'Privacy Policy', href: '/privacy-policy', description: 'How personal data is processed across the wider site.' },
  { label: 'Security & Compliance', href: '/security-compliance', description: 'Sub-processor register that overlaps with cookie providers.' },
  { label: 'Terms of Service', href: '/terms-of-service', description: 'The Terms governing the underlying use of the website.' },
  { label: 'Contact', href: '/contact', description: 'General contact for cookie or privacy questions.' },
  { label: 'About Brocode', href: '/about', description: 'The corporate context behind the policies.' }
];

export default function CookiePolicyPage() {
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cookie Policy — Brocode Solutions',
    url: `https://www.brocode.ae/${SLUG}`,
    description:
      'Brocode Solutions cookie policy with in-page consent UI, full cookie register, third-party providers, GPC handling, and a 12-month changelog.',
    isPartOf: { '@type': 'WebSite', name: 'Brocode Solutions', url: 'https://www.brocode.ae' }
  };

  return (
    <>
      <Script id="webpage-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageLd)}
      </Script>

      {/* HERO — consent UI is the hero */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="container-site pt-22 pb-12 md:pt-30 md:pb-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Legal' },
              { label: 'Cookie Policy' }
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow text-ink-500">Cookies, consent, and you</p>
              <h1 className="mt-4 font-serif text-balance text-display-2xl text-ink-900">Cookie Policy.</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">
                Every cookie set by brocode.ae is named below. Toggle a category and the change takes effect immediately — there is no separate widget to hunt for. We honour Global Privacy Control (GPC) signals as a reject-all for marketing and analytics. Effective date {EFFECTIVE_DATE}; version {VERSION}.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-surface-muted px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Last automated scan <span className="font-mono">{LAST_SCANNED}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-surface-muted px-3 py-1.5">
                  <span className="font-mono font-semibold text-ink-900">{COOKIE_COUNT}</span> cookies registered
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-surface-muted px-3 py-1.5">
                  <span className="font-mono font-semibold text-emerald-700">0</span> undisclosed since last scan
                </span>
              </div>
            </div>

            {/* In-page consent UI */}
            <div className="lg:col-span-7">
              <ConsentControl categories={categories} slug={SLUG} />
            </div>
          </div>
        </div>
      </section>

      {/* What cookies are */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="A 90-second explainer"
            title="What cookies are, and why brocode.ae uses them."
            description="If you already know what a cookie is, skip to the register below. If you do not, the next few paragraphs cover what we need you to know in plain English."
          />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <GlassCard className="h-full">
                <h3 className="text-xl font-semibold text-ink-900">What they are</h3>
                <p className="mt-3 text-ink-700">
                  Cookies are small text files that brocode.ae places on your device to store information between visits. We also use closely related technologies — local storage, session storage, and small image tags — which we treat in this policy the same way as cookies. Cookies can be first-party (set directly by brocode.ae) or third-party (set by services we embed, such as Cloudflare for security or LinkedIn for campaign measurement). Cookies can be session-based, which disappear when you close your browser, or persistent, which live for a defined period that we publish in the register below.
                </p>
              </GlassCard>
            </Reveal>
            <Reveal>
              <GlassCard className="h-full">
                <h3 className="text-xl font-semibold text-ink-900">Why we use them</h3>
                <p className="mt-3 text-ink-700">
                  Some cookies are required for the site to function at all (keeping you logged in to a portal, defending against bot traffic). Others are optional and only set with your consent through the control above — they help us understand which content reaches the right reader, measure campaigns, and tailor what we surface to you. We do not sell personal data, we do not use cross-context behavioural advertising on this site, and where a third party would otherwise read more than we are comfortable with, we restrict the scope at the provider level (for example, GA4 runs in an EU region property with IP truncation).
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cookie register table */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Cookie register"
            title={`All ${COOKIE_COUNT} cookies currently set by brocode.ae.`}
            description={`Populated from the consent management platform. Last automated scan ${LAST_SCANNED}. Filter by category using the chips below.`}
          />
          <CookieRegister cookies={cookies} count={COOKIE_COUNT} />
        </div>
      </section>

      {/* Third parties */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Third parties"
            title="Six providers may set a cookie through this site under our instructions."
            description="Each is bound by a written agreement and listed in the sub-processor register on the security page. Click through to each provider's own privacy notice for their detail."
          />
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thirdPartyProviders.map((p) => (
              <li key={p.name} className="rounded-2xl border border-ink-100 bg-white p-6">
                <h3 className="text-base font-semibold text-ink-900">{p.name}</h3>
                <p className="mt-2 text-sm text-ink-700">{p.purpose}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-4 inline-flex text-xs font-semibold text-brand"
                >
                  Provider privacy notice
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-600">
            For the full sub-processor view (including providers that do not set cookies on this site), see the{' '}
            <Link href="/security-compliance" className="text-brand underline">sub-processor register on the security page</Link>.
          </p>
        </div>
      </section>

      {/* Consent UX + GPC */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Reveal>
            <GlassCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Consent UX</p>
              <h3 className="mt-3 text-xl font-semibold text-ink-900">Granular by default. No dark patterns.</h3>
              <p className="mt-3 text-sm text-ink-700">
                The control above is the single source of truth for consent on brocode.ae. There is no &ldquo;accept-all only&rdquo; banner, no pre-ticked optional categories, and the visual weight of accept and reject is identical. The CMP records every choice with a timestamp and an audit trail, exportable on request under GDPR Art. 7(1).
              </p>
            </GlassCard>
          </Reveal>
          <Reveal>
            <GlassCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">GPC handling</p>
              <h3 className="mt-3 text-xl font-semibold text-ink-900">We honour Global Privacy Control.</h3>
              <p className="mt-3 text-sm text-ink-700">
                If your browser sends the GPC header, we treat it as a reject-all for marketing and analytics and we do not load the optional providers. You can still opt back in through the toggles above; the GPC signal is the default state, not a hard veto. The implementation is documented in the security page&apos;s controls section.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal>
            <GlassCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Re-consent</p>
              <h3 className="mt-3 text-xl font-semibold text-ink-900">Asked again every 12 months — or sooner.</h3>
              <p className="mt-3 text-sm text-ink-700">
                Your stored preference is valid for 12 months. We re-prompt before that anniversary, and whenever we add a new cookie in a category you previously consented to. New categories never auto-inherit your existing consent state.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Browser controls + DPO */}
      <section className="relative isolate overflow-hidden bg-ink-900 py-22 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={`/images/legal/${SLUG}.jpg`}
            alt="A keyboard close-up with a developer's hand resting on a trackpad while a cookie preferences panel is visible in the background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
        </div>
        <div className="container-site relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-white/70">Browser-level control</p>
            <h2 className="mt-3 text-display-md">Want deeper control than the toggles above?</h2>
            <p className="mt-5 max-w-lg text-white/80">
              Every major browser exposes cookie controls in its settings: block all, block third-party only, or delete cookies already set. The browser vendor maintains current instructions on their support site — search for &ldquo;cookies&rdquo; in the help of your specific browser. Restricting strictly necessary cookies may affect site operation.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
              {[
                ['Chrome', 'https://support.google.com/chrome/answer/95647'],
                ['Safari', 'https://support.apple.com/en-gb/guide/safari/sfri11471/mac'],
                ['Edge', 'https://support.microsoft.com/en-us/microsoft-edge'],
                ['Firefox', 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer']
              ].map(([name, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow text-white/85 hover:text-white">
                    {name} cookie settings
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-white/70">Cookie questions</p>
            <h2 className="mt-3 text-display-md">Contact our DPO about cookies.</h2>
            <p className="mt-5 text-white/80">
              For a free-text query that the toggles above cannot answer — for example, a request to export your consent audit trail or to remove a specific identifier — write to the DPO. The DPO contact block lives in section 14 of the privacy policy.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/85">
              <p><strong className="text-white">DPO email:</strong> <a href="mailto:dpo@brocode.ae" className="underline">dpo@brocode.ae</a></p>
              <p>
                <Link href="/privacy-policy#dpo" className="font-semibold underline text-brand-300" data-event="secondary_cta_click" data-page={SLUG}>
                  Open the DPO section in the privacy policy &rarr;
                </Link>
              </p>
              <p>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#25D366] underline"
                  data-event="whatsapp_inline"
                  data-page={SLUG}
                >
                  Or message us on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet — ungated, light gate */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <Reveal>
            <LeadMagnetGate
              pageSlug={SLUG}
              title="Brocode Website Cookie Audit Report"
              description="A 4-page PDF generated from the most recent automated scan, listing every cookie set on brocode.ae with its provider, category, purpose, retention, and the consent rate (proportion of EU / UK visitors who consent to each category). Audited quarterly. Zero undisclosed cookies in the last four scans. This is a transparency signal, not a sales magnet — the form is intentionally light."
              contents={[
                `${COOKIE_COUNT} cookies registered as of ${LAST_SCANNED}`,
                'Consent rate per category for EU / UK visitors over the last quarter',
                'Third-party providers and the data they read',
                'GPC handling implementation notes',
                'Quarterly scan history and changelog',
                'Refreshed after every quarterly scan; previous version archived'
              ]}
              filePath="/downloads/cookie-audit-report.pdf"
              ctaLabel="Email me the audit report"
            />
          </Reveal>
        </div>
      </section>

      {/* 12-month changelog */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="12-month changelog"
            title="What was added, removed, or changed on the cookie register in the last year."
            description="Every quarterly scan and every material configuration change is listed here. Earlier history is available on request from the DPO."
          />
          <ol className="mt-12 space-y-4">
            {changelog.map((c) => (
              <li key={c.date} className="grid grid-cols-12 gap-4 rounded-xl border border-ink-100 bg-surface-muted/40 p-4">
                <div className="col-span-12 font-mono text-xs text-ink-700 md:col-span-3">{c.date}</div>
                <div className="col-span-12 text-sm text-ink-800 md:col-span-9">{c.change}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />
    </>
  );
}
