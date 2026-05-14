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
import { MagneticButton } from '@/components/ui/MagneticButton';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'terms-of-service';
const VERSION = 'v4.1';
const EFFECTIVE_DATE = '1 January 2026';
const LAST_UPDATED = '14 May 2026';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm in procurement / legal at [organisation] and I'd like to pre-clear your contracting position before we issue an NDA. Could I get your MSA template and commercial-terms summary, and a 30-minute call with your General Counsel?";

export const metadata: Metadata = {
  title: 'Terms of Service & MSA Template | DIFC / ADGM Governed | Brocode',
  description:
    'Brocode Solutions website Terms of Service plus a same-day MSA template, commercial-terms summary, SoW, SLA, and Acceptable Use Policy under DIFC, ADGM, or English law.',
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: 'Terms of Service — Brocode Solutions',
    description:
      'Website Terms plus an MSA template signed without redline by 12 of the last 18 customers. Average MSA execution: 14 working days.',
    url: `https://www.brocode.ae/${SLUG}`,
    images: [{ url: `/images/legal/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — Brocode Solutions',
    description: 'Plain-English website terms with a same-day MSA and one-page commercial-terms summary.'
  }
};

const commercialSummary = [
  { label: 'Liability cap', value: '1x fees', detail: '3x super-cap for data protection, IP indemnity, and confidentiality' },
  { label: 'IP position', value: 'Customer owns deliverables', detail: 'Brocode retains pre-existing IP + non-exclusive licence to general know-how' },
  { label: 'Governing law', value: 'ADGM Courts (default)', detail: 'DIFC, UAE federal, or English law variants available' },
  { label: 'Term', value: 'Convenience: 60 days', detail: 'For cause: 30 days cure. Warranty: 90 days re-performance.' }
];

const changelogRows = [
  { version: 'v4.1', date: '14 May 2026', change: 'Added explicit prohibition on scraping content for third-party AI training without a written licence; consolidated dispute-resolution language.' },
  { version: 'v4.0', date: '1 January 2026', change: 'Default forum updated to ADGM Courts (was DIFC); English-law variant retained on request.' },
  { version: 'v3.3', date: '18 October 2025', change: 'Acceptable use clarified for authenticated portal areas; suspension triggers listed.' },
  { version: 'v3.2', date: '04 July 2025', change: 'IP and licensing rewritten to mirror MSA Schedule 3; trade-mark notices updated.' },
  { version: 'v3.1', date: '12 March 2025', change: 'Liability cap on website use distinguished from MSA-level caps; AED 1,000 ceiling restated.' },
  { version: 'v3.0', date: '04 January 2025', change: 'Full re-issue alongside the v3 MSA; commercial-terms summary referenced for the first time.' }
];

const relatedItems = [
  { label: 'Privacy Policy', href: '/privacy-policy', description: 'Personal data, lawful bases, and the DPA template.' },
  { label: 'Security & Compliance', href: '/security-compliance', description: 'Vendor Security Pack and TPRM artefacts.' },
  { label: 'Cookie Policy', href: '/cookie-policy', description: 'Cookies on brocode.ae, consent control, and GPC handling.' },
  { label: 'Contact', href: '/contact', description: 'Commercial enquiries beyond the General Counsel.' },
  { label: 'Services', href: '/services', description: 'The full services portfolio commercial terms apply to.' }
];

export default function TermsOfServicePage() {
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service — Brocode Solutions',
    url: `https://www.brocode.ae/${SLUG}`,
    description:
      'Website Terms of Service for brocode.ae plus a same-day MSA template and commercial-terms summary under DIFC / ADGM / English law.',
    mainEntity: {
      '@type': 'TermsAndConditions',
      name: 'Brocode Solutions Website Terms of Service',
      datePublished: '2026-01-01',
      dateModified: '2026-05-14',
      version: VERSION
    },
    isPartOf: { '@type': 'WebSite', name: 'Brocode Solutions', url: 'https://www.brocode.ae' }
  };

  return (
    <>
      <Script id="webpage-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageLd)}
      </Script>

      {/* HERO — Commercial Terms Summary mock */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="container-site pt-22 pb-16 md:pt-30 md:pb-20">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Legal' },
              { label: 'Terms of Service' }
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="eyebrow text-ink-500">Site terms & commercial contracting</p>
              <h1 className="mt-4 font-serif text-balance text-display-2xl text-ink-900">
                Terms of Service.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 md:text-xl">
                Two documents in one place. The visible <strong>Website Terms of Service</strong> govern your use of brocode.ae. The <strong>Master Services Agreement</strong> and one-page <strong>Commercial Terms Summary</strong> below govern any engagement we deliver — available under NDA same day, signed without redline by 12 of the last 18 customers.
              </p>

              <div className="mt-8 inline-flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-ink-200 bg-surface-muted px-5 py-3 text-xs">
                <span><span className="font-semibold text-ink-900">Version</span> <span className="font-mono text-ink-700">{VERSION}</span></span>
                <span className="hidden text-ink-300 md:inline">·</span>
                <span><span className="font-semibold text-ink-900">Effective</span> <span className="font-mono text-ink-700">{EFFECTIVE_DATE}</span></span>
                <span className="hidden text-ink-300 md:inline">·</span>
                <span><span className="font-semibold text-ink-900">Last updated</span> <span className="font-mono text-ink-700">{LAST_UPDATED}</span></span>
                <span className="hidden text-ink-300 md:inline">·</span>
                <span><span className="font-semibold text-ink-900">Governing law</span> <span className="font-mono text-ink-700">ADGM Courts (default)</span></span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="#msa-pack" event="quote_open">
                  Request the MSA template
                </MagneticButton>
                <Link
                  href="#tos-clauses"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-300 px-6 py-3 text-sm font-semibold text-ink-900 hover:border-ink-900"
                >
                  Skip to Website Terms
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 text-[11px] font-mono text-ink-500">
                <span className="rounded-full border border-ink-200 px-2.5 py-1 text-center">Website Terms of Service</span>
                <span className="rounded-full border border-ink-200 px-2.5 py-1 text-center">Master Services Agreement</span>
                <span className="rounded-full border border-ink-200 px-2.5 py-1 text-center">Commercial Terms Summary</span>
              </div>
            </div>

            {/* Commercial Terms Summary visual mock */}
            <aside className="lg:col-span-5">
              <GlassCard className="lg:sticky lg:top-24" padding="md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Commercial Terms Summary</p>
                    <p className="mt-1 text-sm font-medium text-ink-900">One page. Four headline figures.</p>
                  </div>
                  <span className="grid h-12 w-9 place-items-center rounded-md bg-ink-900 text-[10px] font-bold text-white">PDF</span>
                </div>
                <dl className="mt-5 divide-y divide-ink-100 border-t border-ink-100">
                  {commercialSummary.map((c) => (
                    <div key={c.label} className="py-3">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">{c.label}</dt>
                      <dd className="mt-1 text-base font-semibold text-ink-900">{c.value}</dd>
                      <dd className="mt-0.5 text-xs text-ink-600">{c.detail}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="#msa-pack"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand"
                  data-event="secondary_cta_click"
                  data-page={SLUG}
                >
                  Get the full pack →
                </Link>
                <p className="mt-3 text-[11px] text-ink-500">
                  Drafted with Bird & Bird (Middle East) and reviewed annually.
                </p>
              </GlassCard>
            </aside>
          </div>
        </div>
      </section>

      {/* What this page is, what it isn't */}
      <section className="bg-surface-muted py-22">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">This page covers</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink-900">Website Terms of Service — clauses 1 through 9.</h2>
              <p className="mt-4 text-ink-700">
                These Terms govern your use of brocode.ae: browsing, downloading the gated and ungated assets, account areas, and the demo / sandbox environments we publish from time to time. The headline liability cap on website use is AED 1,000 (clause 6) — deliberately scoped to website use, because the operative numbers for any commercial engagement are in the MSA.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal>
            <GlassCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">This page does not cover</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink-900">Engagement-level terms — those live in the MSA.</h2>
              <p className="mt-4 text-ink-700">
                Liability caps, IP ownership of deliverables, warranties, the SLA, the AUP for managed services, and the SoW shape live in the Master Services Agreement and its schedules. If you are pre-clearing the Brocode commercial position, the MSA pack in section 9 below is the document you want — not these site Terms.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Numbered clauses */}
      <section id="tos-clauses" className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-1 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Clauses</p>
              <Link href="#c1" className="block py-1 text-ink-700 hover:text-brand">1. Definitions</Link>
              <Link href="#c2" className="block py-1 text-ink-700 hover:text-brand">2. Use of the website</Link>
              <Link href="#c3" className="block py-1 text-ink-700 hover:text-brand">3. Engagement terms (MSA)</Link>
              <Link href="#c4" className="block py-1 text-ink-700 hover:text-brand">4. IP and licensing</Link>
              <Link href="#c5" className="block py-1 text-ink-700 hover:text-brand">5. Acceptable use</Link>
              <Link href="#c6" className="block py-1 text-ink-700 hover:text-brand">6. Liability and warranties</Link>
              <Link href="#c7" className="block py-1 text-ink-700 hover:text-brand">7. Termination</Link>
              <Link href="#c8" className="block py-1 text-ink-700 hover:text-brand">8. Governing law</Link>
              <Link href="#c9" className="block py-1 text-ink-700 hover:text-brand">9. Contact &amp; changes</Link>
              <Link href="#changelog" className="block py-1 text-ink-700 hover:text-brand">Changelog</Link>
            </div>
          </aside>

          <article className="lg:col-span-9 space-y-12 text-ink-800">
            <div id="c1">
              <h2 className="text-2xl font-semibold text-ink-900">1. Definitions and scope</h2>
              <p className="mt-4">
                In these Terms, &ldquo;<strong>Brocode</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo; and &ldquo;<strong>us</strong>&rdquo; mean Brocode Solutions FZ-LLC, a company incorporated in the United Arab Emirates with its registered office at Al Maryah Island, Abu Dhabi Global Market, Abu Dhabi. &ldquo;<strong>Site</strong>&rdquo; means brocode.ae and any sub-domain we operate from time to time. &ldquo;<strong>Content</strong>&rdquo; means any text, image, video, downloadable document, code sample or other material made available on the Site. &ldquo;<strong>You</strong>&rdquo; means the natural or legal person accessing the Site. &ldquo;<strong>MSA</strong>&rdquo; means the Brocode Master Services Agreement made available under NDA and signed by you and us before any engagement begins. These Terms apply to your access to and use of the Site only; the MSA and its schedules apply to any commercial engagement we deliver.
              </p>
            </div>

            <div id="c2">
              <h2 className="text-2xl font-semibold text-ink-900">2. Use of the website</h2>
              <p className="mt-4">
                You may use the Site for lawful purposes connected with learning about our services, downloading the assets we make available, contacting us, and participating in any authenticated portal or demo we publish. You must not (a) use the Site in any way that breaches applicable law in the UAE or your jurisdiction; (b) infringe the rights of any third party; (c) interfere with the operation of the Site or any systems or networks it relies on; (d) attempt to gain unauthorised access to any account, system, or data; (e) introduce viruses, malware, or other harmful material; or (f) use automated means to extract, scrape, or harvest Content for the purpose of training a third-party machine-learning model, building a competing product or service, or republishing Content commercially, in each case without our prior written licence. We may suspend or restrict access to all or part of the Site at any time, including to perform maintenance, address security issues, or respond to a suspected breach of these Terms. See also our <Link href="/cookie-policy" className="text-brand underline">cookie policy</Link> for technical detail on cookies set during your visit.
              </p>
            </div>

            <div id="c3">
              <h2 className="text-2xl font-semibold text-ink-900">3. Engagement terms — the MSA gateway</h2>
              <p className="mt-4">
                Nothing on the Site constitutes an offer to provide services. Any engagement between you and Brocode is governed by a signed MSA, the operative Statement of Work, and the schedules that frame the SLA, the Acceptable Use Policy for managed services, and the DPA where personal data is in scope. We make the MSA template and a one-page Commercial Terms Summary available under NDA on request (<Link href="#msa-pack" className="text-brand underline">section 9</Link>). Where the MSA and these Terms diverge in respect of an engagement, the MSA prevails. The default governing law for the MSA is ADGM; DIFC, UAE federal, and English-law variants are available on request and identified in the operative SoW.
              </p>
            </div>

            <div id="c4">
              <h2 className="text-2xl font-semibold text-ink-900">4. Intellectual property and content licence</h2>
              <p className="mt-4">
                All Content on the Site — including text, graphics, logos, images, downloadable documents, code samples, and the structure and arrangement of the foregoing — is owned by Brocode or our licensors and is protected by UAE and international intellectual property laws. We grant you a limited, non-exclusive, non-transferable licence to access the Site and to view, download, and print Content for your own internal business or personal reference, provided you retain all copyright and other proprietary notices. You may not reproduce, distribute, modify, or create derivative works of Content for commercial purposes, or remove our branding from any downloaded material, without our prior written consent. Trade marks displayed on the Site remain the property of their respective owners. The IP position for engagement deliverables is governed by the MSA: by default, the customer owns deliverables on creation, and Brocode retains its pre-existing IP and a non-exclusive licence to its general know-how.
              </p>
            </div>

            <div id="c5">
              <h2 className="text-2xl font-semibold text-ink-900">5. Acceptable use</h2>
              <p className="mt-4">
                In addition to clause 2, you may not (a) impersonate any person or misrepresent your affiliation; (b) submit data through the Site that infringes a third party&apos;s rights or is unlawful; (c) attempt to reverse-engineer any authenticated portal, demo environment, or downloadable code sample; (d) probe, scan, or test the vulnerability of any system or network connected to the Site without our prior written permission (responsible-disclosure submissions to <a href="mailto:security@brocode.ae" className="text-brand underline">security@brocode.ae</a> are welcome under our coordinated-disclosure policy); or (e) use the Site to send unsolicited commercial communications. The Acceptable Use Policy for managed services we deliver under engagement is part of the MSA pack and is distinct from this clause.
              </p>
            </div>

            <div id="c6">
              <h2 className="text-2xl font-semibold text-ink-900">6. Disclaimers, warranties and limitation of liability</h2>
              <p className="mt-4">
                Content on the Site, including whitepapers, guides, benchmarks, and the glossary, is provided for general information. It is not legal, regulatory, financial, or tax advice and is not a substitute for advice tailored to your circumstances. While we take care to keep Content accurate and current, we make no representation that it is complete, error-free, or suitable for any specific purpose. To the maximum extent permitted by applicable UAE law, Brocode is not liable for any indirect, incidental, special, or consequential loss, or any loss of profit, revenue, data, or goodwill, arising out of your use of the Site or reliance on Content. Our aggregate liability arising in connection with these Terms is capped at AED 1,000.
              </p>
              <p className="mt-3">
                <strong>Engagement-level caps are different.</strong> Under the MSA, the standard liability cap is one times the fees paid or payable in the prior twelve months, with a super-cap of three times that figure for data protection, IP indemnity, and confidentiality breaches. These caps and the warranty regime (90 days re-performance for professional services; 99.5 % monthly uptime for managed services) are set out in full in the MSA and Commercial Terms Summary, not in these Terms.
              </p>
            </div>

            <div id="c7">
              <h2 className="text-2xl font-semibold text-ink-900">7. Suspension and termination</h2>
              <p className="mt-4">
                We may suspend or terminate your access to the Site or any account area at any time, with or without notice, in particular if we reasonably believe that (a) you have breached these Terms; (b) suspension is necessary to protect the security of the Site or its users; or (c) continued provision would breach applicable law. Termination of access does not affect any accrued rights or liabilities. Engagement-level termination — both for convenience (60 days&apos; notice) and for cause (30 days&apos; cure) — is governed by the MSA.
              </p>
            </div>

            <div id="c8">
              <h2 className="text-2xl font-semibold text-ink-900">8. Governing law and jurisdiction</h2>
              <p className="mt-4">
                These Terms, and any non-contractual obligations arising in connection with them, are governed by the laws of the United Arab Emirates as applied in the Abu Dhabi Global Market (ADGM). The courts of the ADGM have exclusive jurisdiction over any dispute arising in connection with these Terms, save that we reserve the right to bring proceedings in any other competent court for the purpose of protecting our intellectual property or confidential information. For engagements, the parties may elect DIFC law, UAE federal law, or English law in the MSA; the elected forum is identified in the MSA execution version.
              </p>
            </div>

            <div id="c9">
              <h2 className="text-2xl font-semibold text-ink-900">9. Contact, changes, and the MSA pack</h2>
              <p className="mt-4">
                Questions about these Terms or about commercial contracting should be sent to our General Counsel. We may update these Terms from time to time; the effective date and version at the top of this page will reflect the latest version, and substantive changes will be recorded in the changelog below. Continued use of the Site after a change indicates acceptance of the updated Terms.
              </p>
              <div className="mt-6 rounded-2xl border border-ink-200 bg-surface-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Named General Counsel</p>
                <p className="mt-2 text-lg font-semibold text-ink-900">Hassan Al Falasi</p>
                <p className="mt-1 text-sm text-ink-700">LLB (King&apos;s College London) · LLM (NYU) · Admitted in England &amp; Wales and ADGM</p>
                <p className="mt-4 text-sm text-ink-800">
                  <strong>Email:</strong> <a href="mailto:legal@brocode.ae" className="text-brand underline">legal@brocode.ae</a><br />
                  <strong>Postal address:</strong> Office of the General Counsel, Brocode Solutions FZ-LLC, Al Maryah Island, ADGM, Abu Dhabi, UAE.<br />
                  <strong>Direct booking:</strong> 45-minute Microsoft Teams MSA pre-read, available within five working days of NDA countersignature.
                </p>
                <p className="mt-4 text-sm">
                  <Link href="#msa-pack" className="font-semibold text-brand underline" data-event="secondary_cta_click" data-page={SLUG}>Request the MSA template &rarr;</Link>
                  <span className="mx-2 text-ink-400">·</span>
                  <a
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1faa53] underline"
                    data-event="whatsapp_inline"
                    data-page={SLUG}
                  >Message us on WhatsApp</a>
                </p>
              </div>
            </div>

            <div id="changelog">
              <h2 className="text-2xl font-semibold text-ink-900">Changelog</h2>
              <p className="mt-4">The last six substantive versions of these Terms. Material changes only. Earlier versions are available from the General Counsel on request.</p>
              <div className="mt-6 overflow-x-auto rounded-xl border border-ink-100">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="bg-surface-muted text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
                      <th className="px-4 py-3">Version</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Substantive change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100 text-ink-700">
                    {changelogRows.map((r) => (
                      <tr key={r.version}>
                        <td className="px-4 py-3 font-mono text-xs text-ink-900">{r.version}</td>
                        <td className="px-4 py-3 font-mono text-xs">{r.date}</td>
                        <td className="px-4 py-3 text-sm">{r.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Image break — image as bookend before MSA section */}
      <section className="relative isolate overflow-hidden bg-ink-900 py-22 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={`/images/legal/${SLUG}.jpg`}
            alt="An executed commercial contract on the desk of a general counsel with the cover page visible"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
        </div>
        <div className="container-site relative z-10 max-w-2xl">
          <p className="eyebrow text-white/70">Procurement notes</p>
          <h2 className="mt-3 text-display-md">Signed without redline by 12 of the last 18 customers.</h2>
          <p className="mt-5 text-white/80">
            Average MSA execution: 14 working days from NDA. The track-changes history of the MSA template is appended to the pack so your in-house counsel can see what has and has not been negotiable in recent engagements. Where you require a structural variation (DIFC versus English law, super-cap quantum, IP escrow), our General Counsel will walk it before signature on the 45-minute pre-read call.
          </p>
        </div>
      </section>

      {/* MSA + Commercial Terms Summary lead magnet */}
      <section id="msa-pack" className="bg-surface-muted py-22">
        <div className="container-site">
          <Reveal>
            <LeadMagnetGate
              pageSlug={SLUG}
              title="Brocode MSA Template + Commercial Terms Summary"
              description="NDA-gated bundle: 28-page MSA (English law and DIFC law variants), the one-page Commercial Terms Summary, the Statement of Work template, the SLA schedule, the Acceptable Use Policy, and the cross-referenced DPA. Signed without redline by 12 of the last 18 customers."
              contents={[
                'Master Services Agreement — 28 pages, English law + DIFC law variants',
                'Commercial Terms Summary — one page, four headline figures',
                'Statement of Work template — milestone schedule + change-control clause',
                'Service Level Agreement schedule — 99.5 % managed services + service-credit mechanism',
                'Acceptable Use Policy for managed services',
                'DPA cross-reference — UAE PDPL + GDPR + DIFC DP Law aligned',
                'Average MSA execution: 14 working days from NDA'
              ]}
              filePath="/downloads/brocode-msa-template.pdf"
              ctaLabel="Request the MSA pack"
            />
          </Reveal>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-600">
            For the security artefacts paired with most procurement reviews — SOC 2 Type II, ISO 27001, the sub-processor register and the CAIQ — see the{' '}
            <Link href="/security-compliance" className="text-brand underline">security and compliance page</Link>.
          </p>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />
    </>
  );
}
