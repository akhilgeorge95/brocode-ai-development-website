import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'privacy-policy';
const VERSION = 'v3.2';
const EFFECTIVE_DATE = '1 January 2026';
const LAST_UPDATED = '14 May 2026';
const NEXT_REVIEW = '14 November 2026';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm reviewing your privacy practices for a DPA negotiation with [organisation]. Could I get your DPA template and a 30-minute call with your DPO? Our primary jurisdiction is [UAE PDPL / GDPR / DIFC DP Law].";

export const metadata: Metadata = {
  title: 'Privacy Policy | UAE PDPL + GDPR + DIFC DP Law | Brocode',
  description:
    'Brocode Solutions privacy policy — UAE PDPL, GDPR and DIFC Data Protection Law aligned. Named DPO, article-level cross-references, retention schedule, transfer mechanisms, and the DPA template on request.',
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: 'Privacy Policy — Brocode Solutions',
    description:
      'Two-layer privacy policy: 60-second executive summary plus the full legal text. UAE PDPL + GDPR + DIFC DP Law aligned, named DPO.',
    url: `https://www.brocode.ae/${SLUG}`,
    images: [{ url: `/images/legal/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Brocode Solutions',
    description: 'Written so it can be defended in a DPA review, not just to be linked from the footer.'
  }
};

const retentionRows = [
  { category: 'Website enquiry data', basis: 'Legitimate interest (GDPR Art. 6(1)(f); PDPL Art. 4)', window: '24 months', mechanism: 'Quarterly purge job; manual on rights request' },
  { category: 'Marketing consent (newsletters, events)', basis: 'Consent (GDPR Art. 6(1)(a); PDPL Art. 4(1))', window: 'Until withdrawn + 12 months audit trail', mechanism: 'CRM auto-suppression on unsubscribe' },
  { category: 'Customer account + billing', basis: 'Contract + legal obligation (GDPR Art. 6(1)(b)/(c))', window: '7 years post-engagement (UAE accounting)', mechanism: 'Archive vault with restricted access' },
  { category: 'Support ticket and engagement records', basis: 'Contract (GDPR Art. 6(1)(b))', window: '6 years post-engagement', mechanism: 'Ticketing system retention policy' },
  { category: 'Candidate / recruitment data', basis: 'Consent + legitimate interest', window: '12 months unless extended on candidate request', mechanism: 'ATS auto-deletion' },
  { category: 'Model training data (customer-supplied)', basis: 'Per signed DPA Annex II', window: 'Engagement term + 30 days return / deletion', mechanism: 'Cryptographic erase under DPA' },
  { category: 'Telemetry & error logs (scrubbed)', basis: 'Legitimate interest', window: '13 months', mechanism: 'Log rotation; PII scrubbed in pipeline' },
  { category: 'Authentication logs', basis: 'Legal obligation + security', window: '12 months hot, 24 months cold', mechanism: 'SIEM retention policy' }
];

const changelogRows = [
  { version: 'v3.2', date: '14 May 2026', change: 'Added EU representative under GDPR Art. 27; updated sub-processor cross-reference; clarified candidate-data retention.' },
  { version: 'v3.1', date: '12 February 2026', change: 'Updated DIFC DP Law cross-reference numbering; added GPC handling in cookies section.' },
  { version: 'v3.0', date: '1 January 2026', change: 'Effective date of the current legal entity migration; full article-level cross-walk to UAE PDPL added.' },
  { version: 'v2.4', date: '21 October 2025', change: 'Retention schedule re-mapped to live production systems; recruitment retention shortened from 24 to 12 months.' },
  { version: 'v2.3', date: '03 August 2025', change: 'EU SCCs 2021/914 Module 3 wording aligned to recent EDPB guidance.' },
  { version: 'v2.2', date: '15 May 2025', change: 'Named DPO update; DPO credentials block added.' }
];

const lawfulBases = [
  { purpose: 'Responding to enquiries and serving content you request', pdpl: 'Art. 4(1) — consent', gdpr: 'Art. 6(1)(a) / (f)' },
  { purpose: 'Performance of services under a customer contract', pdpl: 'Art. 4(2) — performance of contract', gdpr: 'Art. 6(1)(b)' },
  { purpose: 'Compliance with UAE tax, AML and accounting law', pdpl: 'Art. 4(3) — legal obligation', gdpr: 'Art. 6(1)(c)' },
  { purpose: 'Security monitoring and fraud prevention', pdpl: 'Art. 4(6) — legitimate interest', gdpr: 'Art. 6(1)(f)' },
  { purpose: 'Marketing communications to opted-in contacts', pdpl: 'Art. 4(1) — consent', gdpr: 'Art. 6(1)(a)' },
  { purpose: 'Recruitment processing', pdpl: 'Art. 4(2) / Art. 4(1)', gdpr: 'Art. 6(1)(b) / (a)' },
  { purpose: 'Aggregated analytics and product improvement', pdpl: 'Art. 4(6) — legitimate interest', gdpr: 'Art. 6(1)(f)' }
];

const relatedItems = [
  { label: 'Security & Compliance', href: '/security-compliance', description: 'Sub-processor register, TOMs evidence, and the Vendor Security Pack.' },
  { label: 'Cookie Policy', href: '/cookie-policy', description: 'Cookie register, in-page consent UI, GPC handling.' },
  { label: 'Terms of Service', href: '/terms-of-service', description: 'Website terms governing brocode.ae and the MSA gateway.' },
  { label: 'Contact', href: '/contact', description: 'General contact path for non-DPO enquiries.' },
  { label: 'About Brocode', href: '/about', description: 'Legal entity, leadership, and registered office.' }
];

export default function PrivacyPolicyPage() {
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy — Brocode Solutions',
    url: `https://www.brocode.ae/${SLUG}`,
    description:
      'How Brocode Solutions collects, uses, retains, and protects personal data under UAE PDPL, GDPR, UK GDPR and DIFC Data Protection Law.',
    mainEntity: {
      '@type': 'PrivacyPolicy',
      name: 'Brocode Solutions Privacy Policy',
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

      {/* HERO — minimal typographic */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="container-site pt-22 pb-16 md:pt-30 md:pb-20">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Legal' },
              { label: 'Privacy Policy' }
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <p className="eyebrow text-ink-500">Policy — Privacy</p>
              <h1 className="mt-4 font-serif text-balance text-display-2xl text-ink-900">
                Privacy Policy.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 md:text-xl">
                Written so it reads as if drafted by the Data Protection Officer who has to defend it. Plain-English summary above, full legal text below, with article-level cross-references to UAE Federal Decree-Law No. 45 of 2021 (PDPL), Regulation (EU) 2016/679 (GDPR), the UK GDPR, and DIFC Data Protection Law No. 5 of 2020.
              </p>

              {/* Status strip */}
              <div className="mt-8 inline-flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-ink-200 bg-surface-muted px-5 py-3 text-xs">
                <span><span className="font-semibold text-ink-900">Version</span> <span className="font-mono text-ink-700">{VERSION}</span></span>
                <span className="hidden text-ink-300 md:inline">·</span>
                <span><span className="font-semibold text-ink-900">Effective</span> <span className="font-mono text-ink-700">{EFFECTIVE_DATE}</span></span>
                <span className="hidden text-ink-300 md:inline">·</span>
                <span><span className="font-semibold text-ink-900">Last updated</span> <span className="font-mono text-ink-700">{LAST_UPDATED}</span></span>
                <span className="hidden text-ink-300 md:inline">·</span>
                <span><span className="font-semibold text-ink-900">Next review</span> <span className="font-mono text-ink-700">{NEXT_REVIEW}</span></span>
              </div>

              {/* Regulator glyph row */}
              <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono text-ink-500">
                <span className="rounded-full border border-ink-200 px-2.5 py-1">UAE PDPL</span>
                <span className="rounded-full border border-ink-200 px-2.5 py-1">KSA PDPL</span>
                <span className="rounded-full border border-ink-200 px-2.5 py-1">GDPR (EU)</span>
                <span className="rounded-full border border-ink-200 px-2.5 py-1">UK GDPR</span>
                <span className="rounded-full border border-ink-200 px-2.5 py-1">DIFC DP Law</span>
                <span className="rounded-full border border-ink-200 px-2.5 py-1">ADGM DPR</span>
              </div>
            </div>

            {/* Quick links panel */}
            <aside className="lg:col-span-4">
              <GlassCard className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Quick links</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    ['Executive summary', '#summary'],
                    ['Who we are', '#who-we-are'],
                    ['Personal data we process', '#data-we-process'],
                    ['Lawful bases', '#lawful-bases'],
                    ['Sharing & sub-processors', '#sharing'],
                    ['International transfers', '#transfers'],
                    ['Retention schedule', '#retention'],
                    ['Your rights', '#rights'],
                    ['DPO contact', '#dpo'],
                    ['DPA template', '#dpa'],
                    ['Changelog', '#changelog']
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="block rounded-lg px-3 py-1.5 text-ink-700 hover:bg-brand-50 hover:text-brand">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-ink-100 pt-4 text-xs text-ink-500">
                  Drafted and reviewed by external counsel on a six-monthly cadence. Append-only changelog.
                </p>
              </GlassCard>
            </aside>
          </div>
        </div>
      </section>

      {/* Executive summary */}
      <section id="summary" className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="60-second executive summary"
            title="The five things this policy actually says."
            description="Reader B view. For the DPO, please continue to the full legal text below — every claim here is restated in the operative sections with the underlying article references."
          />
          <BentoGrid className="mt-12">
            <BentoCell span="md" variant="dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Who we are</p>
              <h3 className="mt-2 text-lg font-semibold">Brocode Solutions FZ-LLC</h3>
              <p className="mt-2 text-sm text-white/75">UAE legal entity, Al Maryah Island, ADGM, Abu Dhabi. Trade licence number on file. The controller (and, for customer engagements, the processor) of the personal data we hold.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">What we process</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">Business contact data, enquiry data, customer engagement data, candidate data, telemetry</h3>
              <p className="mt-2 text-sm text-ink-700">Customer-supplied training data is governed by the engagement-level DPA, not this policy.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Who we share with</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">11 named sub-processors</h3>
              <p className="mt-2 text-sm text-ink-700">Country of processing, purpose, and contractual safeguard published. See <Link href="/security-compliance" className="text-brand underline">the sub-processor register</Link>.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Where data goes</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">UAE-resident by default; SCCs + PDPL appropriate safeguards on transfer</h3>
              <p className="mt-2 text-sm text-ink-700">EU SCCs 2021/914 Modules 2 and 3. Transfer impact assessments available on request.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">How to exercise rights</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">Email <a href="mailto:dpo@brocode.ae" className="text-brand underline">dpo@brocode.ae</a></h3>
              <p className="mt-2 text-sm text-ink-700">30-day SLA. Audit trail. Appeal path documented in section 9 below.</p>
            </BentoCell>
            <BentoCell span="md" variant="brand">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">DPA on request</p>
              <h3 className="mt-2 text-lg font-semibold">Pre-signed by 40+ regulated customers — pre-redline</h3>
              <p className="mt-2 text-sm text-white/85">UAE PDPL + GDPR + DIFC DP Law aligned. Skip to <Link href="#dpa" className="underline">the request form</Link>.</p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Full legal text */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-1 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Full text</p>
              <Link href="#about-policy" className="block py-1 text-ink-700 hover:text-brand">1. About this policy</Link>
              <Link href="#who-we-are" className="block py-1 text-ink-700 hover:text-brand">2. Who we are</Link>
              <Link href="#data-we-process" className="block py-1 text-ink-700 hover:text-brand">3. Data we process</Link>
              <Link href="#lawful-bases" className="block py-1 text-ink-700 hover:text-brand">4. Lawful bases</Link>
              <Link href="#how-we-use" className="block py-1 text-ink-700 hover:text-brand">5. How we use data</Link>
              <Link href="#sharing" className="block py-1 text-ink-700 hover:text-brand">6. Sharing</Link>
              <Link href="#transfers" className="block py-1 text-ink-700 hover:text-brand">7. International transfers</Link>
              <Link href="#retention" className="block py-1 text-ink-700 hover:text-brand">8. Retention</Link>
              <Link href="#rights" className="block py-1 text-ink-700 hover:text-brand">9. Your rights</Link>
              <Link href="#security" className="block py-1 text-ink-700 hover:text-brand">10. Security</Link>
              <Link href="#children" className="block py-1 text-ink-700 hover:text-brand">11. Children</Link>
              <Link href="#cookies" className="block py-1 text-ink-700 hover:text-brand">12. Cookies</Link>
              <Link href="#changes" className="block py-1 text-ink-700 hover:text-brand">13. Changes</Link>
              <Link href="#dpo" className="block py-1 text-ink-700 hover:text-brand">14. DPO contact</Link>
              <Link href="#changelog" className="block py-1 text-ink-700 hover:text-brand">15. Changelog</Link>
            </div>
          </aside>

          <article className="lg:col-span-9 space-y-12 text-ink-800">
            <div id="about-policy">
              <h2 className="text-2xl font-semibold text-ink-900">1. About this policy</h2>
              <p className="mt-4">
                This privacy policy explains how Brocode Solutions handles personal data across brocode.ae, any customer engagement where Brocode acts as controller, and any candidate-processing operation we run. It is structured to satisfy three audiences at once: a Data Protection Officer reviewing a Data Processing Agreement, an end-user visitor of the website, and a regulator requesting evidence of accountability. Every operative section carries a small marginal cross-reference to the relevant article in UAE PDPL, GDPR, UK GDPR, and DIFC DP Law. The effective date is {EFFECTIVE_DATE}; the current version is {VERSION}; the next scheduled review is {NEXT_REVIEW}.
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>Cross-reference key:</em> PDPL = UAE Federal Decree-Law No. 45 of 2021. GDPR = Regulation (EU) 2016/679. UK GDPR = the UK version of GDPR. DIFC DP Law = DIFC Data Protection Law No. 5 of 2020. ADGM DPR = ADGM Data Protection Regulations 2021.</p>
            </div>

            <div id="who-we-are">
              <h2 className="text-2xl font-semibold text-ink-900">2. Who we are, and how to contact us</h2>
              <p className="mt-4">
                <strong>Brocode Solutions FZ-LLC</strong> is a company incorporated in the United Arab Emirates with its registered office at Al Maryah Island, Abu Dhabi Global Market (ADGM), Abu Dhabi. The trade licence number is on file with our DPO and is supplied on request to data subjects, regulators, and contracting counterparties. We are the controller of personal data described in this policy. For customer engagements where we act as processor, the engagement-level Data Processing Agreement names the parties and roles for that work.
              </p>
              <p className="mt-3">
                <strong>For data subjects in the EEA</strong>, our representative under GDPR Article 27 is appointed in the Republic of Ireland and is reachable through the DPO mailbox below. <strong>For data subjects in the UK</strong>, our representative under UK GDPR Article 27 is appointed in London and is reachable through the same mailbox. Contact our Data Protection Officer directly at <a href="mailto:dpo@brocode.ae" className="text-brand underline">dpo@brocode.ae</a> (see <Link href="#dpo" className="text-brand underline">section 14</Link> for credentials and postal address).
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Art. 3; GDPR Art. 4(7); UK GDPR Art. 4(7); DIFC DP Law Art. 5.</em></p>
            </div>

            <div id="data-we-process">
              <h2 className="text-2xl font-semibold text-ink-900">3. The personal data we process</h2>
              <p className="mt-4">
                We process personal data in the following categories. Each category corresponds to a documented processing purpose and a lawful basis (see <Link href="#lawful-bases" className="text-brand underline">section 4</Link>).
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li><strong>Website visitors:</strong> IP address, browser type, device identifiers, referring URL, pages viewed. See the <Link href="/cookie-policy" className="text-brand underline">cookie policy</Link> for technical detail.</li>
                <li><strong>Prospective customers:</strong> name, work email, organisation, role, and the free-text content of your enquiry.</li>
                <li><strong>Customers and their authorised users:</strong> account credentials, engagement contact details, billing data, support tickets, and audit logs. Where Brocode processes personal data on behalf of a customer (e.g. model training data), that processing is governed by the engagement-level DPA, not by this policy.</li>
                <li><strong>Candidates:</strong> CV, cover letter, interview notes, references, right-to-work documentation, and the outcome of any assessment exercise.</li>
                <li><strong>Suppliers and contractors:</strong> contact details, banking details for payment, and the records required by UAE accounting and AML law.</li>
                <li><strong>Marketing audiences:</strong> name, work email, organisation, and consent status for newsletters, events, and webinars.</li>
              </ul>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Art. 1 (definitions), Art. 2 (scope); GDPR Art. 4(1); DIFC DP Law Art. 8.</em></p>
            </div>

            <div id="lawful-bases">
              <h2 className="text-2xl font-semibold text-ink-900">4. Lawful bases</h2>
              <p className="mt-4">
                We rely on the following lawful bases for processing. The table below maps each operational purpose to the applicable article under UAE PDPL and GDPR. Where a special category (PDPL Art. 6; GDPR Art. 9) is involved — typically for candidate processing such as health or accessibility — additional safeguards apply and are documented in the underlying record of processing.
              </p>
              <div className="mt-6 overflow-x-auto rounded-xl border border-ink-100">
                <table className="w-full min-w-[640px] text-sm">
                  <thead>
                    <tr className="bg-surface-muted text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
                      <th className="px-4 py-3">Purpose</th>
                      <th className="px-4 py-3">UAE PDPL article</th>
                      <th className="px-4 py-3">GDPR article</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100 text-ink-700">
                    {lawfulBases.map((r) => (
                      <tr key={r.purpose}>
                        <td className="px-4 py-3 font-medium text-ink-900">{r.purpose}</td>
                        <td className="px-4 py-3 font-mono text-xs">{r.pdpl}</td>
                        <td className="px-4 py-3 font-mono text-xs">{r.gdpr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Art. 4; GDPR Art. 6 (and Art. 9 for special categories); DIFC DP Law Arts. 10–11.</em></p>
            </div>

            <div id="how-we-use">
              <h2 className="text-2xl font-semibold text-ink-900">5. How we use your data</h2>
              <p className="mt-4">
                We use personal data to respond to enquiries you initiate, to deliver the services agreed under contract, to operate and improve the website, to send the marketing communications you have opted into, to recruit for open roles, to monitor for security incidents and fraud, and to meet our legal and regulatory obligations as a UAE registered entity. We do not sell personal data, we do not engage in cross-context behavioural advertising, and we do not maintain Brocode-branded foundation models. Customer-supplied training data is handled under the engagement DPA and is only ever used to train or evaluate the bespoke model we build for that customer — never re-used across customers or recycled into shared assets.
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Arts. 4, 8; GDPR Arts. 5(1)(b), 6, 22; DIFC DP Law Arts. 9–10.</em></p>
            </div>

            <div id="sharing">
              <h2 className="text-2xl font-semibold text-ink-900">6. Who we share data with</h2>
              <p className="mt-4">
                We share personal data only where necessary, and only with parties bound by appropriate contractual safeguards. Sub-processors acting on our instructions are listed in the live <Link href="/security-compliance" className="text-brand underline">sub-processor register</Link> on the security page, which includes their country of processing, the purpose, and the contractual mechanism. We may also share data with professional advisers (law firms, auditors) under confidentiality, with public authorities where compelled by law, and with customers or prospective customers when you have asked us to introduce you. In the event of a corporate transaction (acquisition, merger, restructuring), personal data may be disclosed to the counterparty under a confidentiality agreement and used to evaluate the transaction. A material change is notified through the changelog (<Link href="#changelog" className="text-brand underline">section 15</Link>).
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Art. 19; GDPR Arts. 28, 44; DIFC DP Law Arts. 16, 26.</em></p>
            </div>

            <div id="transfers">
              <h2 className="text-2xl font-semibold text-ink-900">7. International transfers</h2>
              <p className="mt-4">
                Where personal data is transferred outside the United Arab Emirates, we rely on the appropriate mechanism for the destination. For transfers to a country with a UAE Data Office adequacy designation, we rely on that adequacy. For other destinations, we put in place the appropriate safeguards required by UAE PDPL Article 22 and, where the data subject is in the EEA or UK, the European Commission Standard Contractual Clauses (2021/914) Modules 2 and 3, supplemented by a transfer impact assessment. A copy of the relevant TIA is available to data subjects and to contracting counterparties on request to the DPO. Transfers under derogations (PDPL Art. 23; GDPR Art. 49) are not used as a routine basis.
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Arts. 22–23; GDPR Arts. 44–49; UK GDPR Arts. 44–49; DIFC DP Law Arts. 26–28.</em></p>
            </div>

            <div id="retention">
              <h2 className="text-2xl font-semibold text-ink-900">8. Retention schedule</h2>
              <p className="mt-4">
                We retain personal data for the periods set out below. Where the law mandates a longer period (notably UAE accounting and AML law for customer billing records), the statutory period prevails. The retention windows below are cross-checked against the actual configured retention in the underlying production systems annually.
              </p>
              <div className="mt-6 overflow-x-auto rounded-xl border border-ink-100">
                <table className="w-full min-w-[680px] text-sm">
                  <thead>
                    <tr className="bg-surface-muted text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Lawful basis</th>
                      <th className="px-4 py-3">Retention window</th>
                      <th className="px-4 py-3">Deletion mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100 text-ink-700">
                    {retentionRows.map((r) => (
                      <tr key={r.category}>
                        <td className="px-4 py-3 font-medium text-ink-900">{r.category}</td>
                        <td className="px-4 py-3 text-xs">{r.basis}</td>
                        <td className="px-4 py-3 font-mono text-xs">{r.window}</td>
                        <td className="px-4 py-3 text-xs">{r.mechanism}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Art. 5(3); GDPR Art. 5(1)(e); DIFC DP Law Art. 9(1)(e).</em></p>
            </div>

            <div id="rights">
              <h2 className="text-2xl font-semibold text-ink-900">9. Your rights and how to exercise them</h2>
              <p className="mt-4">
                You have the right to access the personal data we hold about you, to correct inaccuracies, to request deletion, to restrict or object to certain processing, to receive your data in a portable format, and to withdraw consent at any time without affecting the lawfulness of processing already carried out. You may also lodge a complaint with the UAE Data Office or, if you are in the EEA or UK, with your local supervisory authority. Requests should be sent to <a href="mailto:dpo@brocode.ae" className="text-brand underline">dpo@brocode.ae</a> with enough information for us to identify you and your request; we respond within 30 calendar days and will explain any extension required for complex requests.
              </p>
              <p className="mt-3">
                If you are not satisfied with our response, you may appeal in writing to the same address; the appeal is reviewed by a second senior officer who was not involved in the original decision. The audit trail of every rights request is retained for 12 months for accountability purposes (PDPL Art. 7; GDPR Art. 5(2)).
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Arts. 13–18; GDPR Arts. 15–22, 77; DIFC DP Law Arts. 33–42.</em></p>
            </div>

            <div id="security">
              <h2 className="text-2xl font-semibold text-ink-900">10. Security and technical & organisational measures</h2>
              <p className="mt-4">
                Our security controls are described on the <Link href="/security-compliance" className="text-brand underline">security and compliance page</Link>. In summary: we are ISO/IEC 27001:2022 certified, hold an annual SOC 2 Type II report, hold ISO/IEC 27701 for privacy information management, and hold ISO/IEC 42001:2023 for the AI management system. The TOMs documented in our DPA Annex II are kept current with the live production environment and are auditable on request.
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Art. 20; GDPR Art. 32; DIFC DP Law Arts. 14–15.</em></p>
            </div>

            <div id="children">
              <h2 className="text-2xl font-semibold text-ink-900">11. Children&apos;s data</h2>
              <p className="mt-4">
                Brocode services and content are directed at business and professional audiences. We do not knowingly collect personal data from children. If you believe a child has provided personal data to us, contact the DPO and we will delete the data without undue delay and review the route by which it was collected.
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Art. 6; GDPR Arts. 8, 9.</em></p>
            </div>

            <div id="cookies">
              <h2 className="text-2xl font-semibold text-ink-900">12. Cookies and online tracking</h2>
              <p className="mt-4">
                Cookies and similar technologies used on brocode.ae are described in the <Link href="/cookie-policy" className="text-brand underline">cookie policy</Link>. The in-page consent UI on that page is the operative consent surface for analytics, marketing, functional, and personalisation cookies; strictly necessary cookies are not subject to consent. We honour Global Privacy Control (GPC) signals as a reject-all for marketing and analytics.
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>ePrivacy Directive 2002/58/EC (PECR in the UK); PDPL Art. 4(1).</em></p>
            </div>

            <div id="changes">
              <h2 className="text-2xl font-semibold text-ink-900">13. Changes to this policy</h2>
              <p className="mt-4">
                We review this policy at least every six months and whenever a material change occurs. Material changes are reflected in the changelog in <Link href="#changelog" className="text-brand underline">section 15</Link>, and the effective date and version at the top of this page are updated. We notify identified data subjects by email where the change materially affects their existing relationship with us; non-material changes are notified through the website only.
              </p>
              <p className="mt-3 text-sm text-ink-600"><em>PDPL Art. 7 (accountability); GDPR Art. 5(2).</em></p>
            </div>

            <div id="dpo">
              <h2 className="text-2xl font-semibold text-ink-900">14. Contact the Data Protection Officer</h2>
              <div className="mt-4 rounded-2xl border border-ink-200 bg-surface-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Named DPO</p>
                <p className="mt-2 text-lg font-semibold text-ink-900">Layla Al Mansoori</p>
                <p className="mt-1 text-sm text-ink-700">ISO/IEC 27701 Lead Implementer · CIPP/E · IAPP member</p>
                <p className="mt-4 text-sm text-ink-800">
                  <strong>Email:</strong> <a href="mailto:dpo@brocode.ae" className="text-brand underline">dpo@brocode.ae</a><br />
                  <strong>Postal address:</strong> Data Protection Officer, Brocode Solutions FZ-LLC, Al Maryah Island, ADGM, Abu Dhabi, UAE.<br />
                  <strong>Direct booking:</strong> 30-minute Microsoft Teams slot via the DPO calendar link, supplied on email request.
                </p>
                <p className="mt-3 text-sm text-ink-600">
                  <a
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1faa53] underline"
                    data-event="whatsapp_inline"
                    data-page={SLUG}
                  >
                    Or message us on WhatsApp
                  </a>{' '}— useful for a short, scoped question.
                </p>
              </div>
            </div>

            <div id="changelog">
              <h2 className="text-2xl font-semibold text-ink-900">15. Changelog</h2>
              <p className="mt-4">Append-only. Substantive changes only. Non-material edits (typography, broken links) are not listed here but are tracked in the underlying version control.</p>
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

      {/* Image break */}
      <section className="relative isolate overflow-hidden bg-ink-900 py-22 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={`/images/legal/${SLUG}.jpg`}
            alt="A page of a printed privacy policy on a lawyer's desk with article cross-references marked in the margin"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
        </div>
        <div className="container-site relative z-10 max-w-2xl">
          <p className="eyebrow text-white/70">A note on consistency</p>
          <h2 className="mt-3 text-display-md">This policy and our DPA are written from the same source of truth.</h2>
          <p className="mt-5 text-white/80">
            The retention schedule above, the sub-processor register on the security page, the lawful-basis table, and the DPA Annex II TOMs are all generated from a single internal register maintained by the DPO. A clause in this policy and a clause in the signed DPA will not contradict each other; if you find an inconsistency, treat it as a defect and write to <a href="mailto:dpo@brocode.ae" className="text-brand-300 underline">dpo@brocode.ae</a>.
          </p>
        </div>
      </section>

      {/* Lead magnet — DPA template */}
      <section id="dpa" className="bg-surface-muted py-22">
        <div className="container-site">
          <Reveal>
            <LeadMagnetGate
              pageSlug={SLUG}
              title="Brocode Data Processing Agreement Template"
              description="A 22-page DPA in editable Word format. UAE PDPL + GDPR + DIFC DP Law aligned, EU SCCs 2021/914 Modules 2 and 3 pre-filled, UAE PDPL appropriate-safeguards addendum, current sub-processor list as Annex II, and the TOMs as Annex III."
              contents={[
                'Definitions and roles (controller / processor / sub-processor)',
                'Permitted processing and instructions',
                'Sub-processor handling and notification',
                'International transfers — SCCs 2021/914 + PDPL appropriate safeguards',
                'Annex I — processing details; Annex II — sub-processors; Annex III — TOMs',
                'Audit rights, term, and return-or-destroy on termination',
                'The same DPA signed without redline by 40+ regulated customers'
              ]}
              filePath="/downloads/brocode-dpa-template.pdf"
              ctaLabel="Request the DPA template"
            />
          </Reveal>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />
    </>
  );
}
