import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { CompareTable } from '@/components/ui/CompareTable';
import { FAQ } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';

const SLUG = 'security-compliance';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm running a vendor security review on Brocode for [organisation]. I'd like access to your Vendor Security Pack and a 30-minute Q&A with your security lead. Our TPRM workflow is aligned to [SOC 2 / ISO 27001 / SAMA / TDRA / NESA].";

export const metadata: Metadata = {
  title: 'Security & Compliance | SOC 2 Type II, ISO 27001, ISO 42001 | Brocode',
  description:
    'Brocode Solutions vendor due-diligence pack — SOC 2 Type II, ISO/IEC 27001:2022, ISO 42001, penetration test summary, UAE PDPL evidence, sub-processor register. Available same-day under NDA.',
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: 'Vendor Security Pack — Brocode Solutions',
    description:
      'Everything your TPRM team needs in one download. Average customer due-diligence completed in 9 working days.',
    url: `https://www.brocode.ae/${SLUG}`,
    images: [{ url: `/images/legal/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vendor Security Pack — Brocode Solutions',
    description: 'SOC 2 Type II, ISO 27001, ISO 42001 and PDPL evidence, gathered for your TPRM workflow.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a 60-minute security review with our Head of Information Security',
  subtitle:
    'A senior security engineer from the Brocode practice walks your TPRM analyst through the Vendor Security Pack and the residual-risk position. We reply within one business day.',
  ctaLabel: 'Request the security review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'organisationType',
      label: 'Organisation type',
      type: 'select',
      required: true,
      options: ['Federal entity', 'Regulated bank', 'Insurer', 'Telco', 'Healthcare', 'Enterprise', 'Consultancy']
    },
    {
      name: 'regulators',
      label: 'Primary regulator(s)',
      type: 'multiselect',
      options: ['TDRA', 'SAMA', 'QCB', 'CBB', 'NESA', 'ADGM FSRA', 'DIFC DFSA', 'FCA', 'MAS', 'Other']
    },
    {
      name: 'intendedUse',
      label: 'Intended use of Brocode services',
      type: 'textarea',
      placeholder: 'Model build / on-prem deployment / managed service / advisory engagement'
    },
    {
      name: 'ndaStatus',
      label: 'NDA on file with Brocode?',
      type: 'select',
      options: ['Yes — please confirm signatory', 'No — please send your standard NDA', 'No — we will send ours']
    },
    {
      name: 'certifications',
      label: 'Specific certifications requested',
      type: 'multiselect',
      options: [
        'SOC 2 Type II',
        'ISO 27001 + SOA',
        'ISO 27701',
        'ISO 42001',
        'Penetration test summary',
        'CAIQ v4',
        'DPA template',
        'Sub-processor register',
        'BCP / DR summary'
      ]
    },
    {
      name: 'tprmDeadline',
      label: 'TPRM workflow deadline',
      type: 'date',
      helper: 'The date your internal risk register needs an approve / conditional / block decision.'
    }
  ]
};

const certifications = [
  { name: 'SOC 2 Type II', body: 'Big-4 affiliated CPA firm', lastAudit: '14 March 2026', next: 'March 2027', status: 'Current' },
  { name: 'ISO/IEC 27001:2022', body: 'BSI', lastAudit: '08 February 2026', next: 'February 2027', status: 'Current' },
  { name: 'ISO/IEC 27701:2019', body: 'BSI', lastAudit: '08 February 2026', next: 'February 2027', status: 'Current' },
  { name: 'ISO/IEC 42001:2023', body: 'BSI', lastAudit: '21 January 2026', next: 'January 2027', status: 'Current' },
  { name: 'Cyber Essentials Plus', body: 'IASME', lastAudit: '02 December 2025', next: 'December 2026', status: 'Current' },
  { name: 'PCI-DSS v4.0 AoC', body: 'QSA — Coalfire', lastAudit: '11 November 2025', next: 'November 2026', status: 'Current' },
  { name: 'CSA STAR Level 2', body: 'Cloud Security Alliance', lastAudit: '17 October 2025', next: 'October 2026', status: 'Current' },
  { name: 'AWS Security Competency', body: 'AWS', lastAudit: '03 September 2025', next: 'September 2026', status: 'Current' },
  { name: 'Microsoft Solutions Partner — Security', body: 'Microsoft', lastAudit: '12 January 2026', next: 'January 2027', status: 'Current' },
  { name: 'G42 Cloud Certified Partner', body: 'G42', lastAudit: '28 February 2026', next: 'February 2027', status: 'Current' },
  { name: 'NVIDIA Inception (security-reviewed)', body: 'NVIDIA', lastAudit: '04 March 2026', next: 'March 2027', status: 'Current' },
  { name: 'TDRA Information Assurance attestation', body: 'TDRA — UAE', lastAudit: '19 November 2025', next: 'November 2026', status: 'Current' }
];

const crossWalk = [
  {
    feature: 'Identify — asset and risk inventory',
    brocode: 'Continuous, registered',
    competitors: ['ID.AM, ID.RA', 'A.5.9, A.5.12', 'T1.1, T1.2', 'CSF 1.1.1', 'IS-1, IS-2']
  },
  {
    feature: 'Protect — access control + crypto',
    brocode: 'Customer-managed keys default',
    competitors: ['PR.AC, PR.DS', 'A.5.15, A.8.24', 'T3.1, T3.4', 'CSF 2.2.1', 'IS-12, IS-15']
  },
  {
    feature: 'Detect — continuous monitoring',
    brocode: '24/7 SOC + SIEM',
    competitors: ['DE.AE, DE.CM', 'A.8.15, A.8.16', 'T6.2, T6.3', 'CSF 3.1.4', 'IS-26']
  },
  {
    feature: 'Respond — incident handling',
    brocode: '1-hour ack SLA',
    competitors: ['RS.RP, RS.AN', 'A.5.24, A.5.26', 'T9.1, T9.2', 'CSF 4.1.1', 'IS-30']
  },
  {
    feature: 'Recover — BCP / DR',
    brocode: 'RTO 4h, RPO 15m',
    competitors: ['RC.RP, RC.IM', 'A.5.29, A.5.30', 'T10.1', 'CSF 5.1.2', 'IS-34']
  },
  {
    feature: 'AI management system',
    brocode: 'ISO 42001:2023',
    competitors: ['CSF 2.0 — AI profile', 'A.5.36 (Annex SL)', 'New', 'New', 'Aligned via mapping']
  },
  {
    feature: 'Personal data protection',
    brocode: 'PDPL + GDPR aligned',
    competitors: ['ID.GV, PR.IP', 'A.5.34', 'T2.3', 'CSF 1.4.2', 'IS-9']
  }
];

const subProcessors = [
  { name: 'Amazon Web Services EMEA SARL', country: 'UAE — me-central-1 (Dubai)', purpose: 'Sovereign hosting and storage', safeguard: 'DPA + SCCs (back-up)' },
  { name: 'Microsoft Ireland Operations Ltd', country: 'UAE — UAE North', purpose: 'Identity (Entra ID) and Microsoft 365', safeguard: 'DPA + SCCs (back-up)' },
  { name: 'G42 Cloud', country: 'UAE — Khazna', purpose: 'Sovereign compute and GPU', safeguard: 'UAE DPA + KSA appendix' },
  { name: 'NVIDIA Cloud Functions', country: 'EU — Frankfurt', purpose: 'GPU inference for non-restricted workloads', safeguard: 'SCCs 2021/914 M2' },
  { name: 'Snowflake Inc.', country: 'UAE — me-central-1', purpose: 'Analytics warehouse (anonymised telemetry only)', safeguard: 'DPA + customer-managed keys' },
  { name: 'HubSpot Inc.', country: 'EU — Frankfurt', purpose: 'Marketing CRM (non-customer contact data)', safeguard: 'SCCs 2021/914 M2' },
  { name: 'Atlassian Pty Ltd', country: 'EU — Frankfurt', purpose: 'Ticketing and source control', safeguard: 'SCCs 2021/914 M2' },
  { name: 'Cloudflare Inc.', country: 'Global edge', purpose: 'CDN, WAF, DDoS mitigation', safeguard: 'SCCs + cache scope limit' },
  { name: 'Auth0 by Okta', country: 'EU — Frankfurt', purpose: 'Authentication for managed-service customers', safeguard: 'SCCs + EU isolation' },
  { name: 'Sentry', country: 'EU — Frankfurt', purpose: 'Error telemetry (scrubbed)', safeguard: 'SCCs + PII scrubbing' },
  { name: 'Datadog', country: 'EU — Frankfurt', purpose: 'Infra observability (no customer data)', safeguard: 'SCCs + scope limit' }
];

const faqItems = [
  {
    question: 'Is the SOC 2 Type II audit period current, and which CPA firm signed it?',
    answer:
      'Yes. Our SOC 2 Type II audit was signed on 14 March 2026 by a Big-4 affiliated CPA firm and covers the trust services criteria Security, Availability, Confidentiality, and Processing Integrity for the 12 months ending 31 December 2025. The full report is available under NDA in the Vendor Security Pack. A bridge letter from the auditor covering the period between the audit close and today is also included.'
  },
  {
    question: 'Can we obtain the ISO 27001 Statement of Applicability and the last surveillance audit letter?',
    answer:
      'Yes. Both are in the Vendor Security Pack. The SOA is mapped against ISO/IEC 27001:2022 Annex A (93 controls) plus the four new themes (organisational, people, physical, technological). The most recent BSI surveillance audit letter dated 08 February 2026 confirms no major non-conformities and zero open minor findings.'
  },
  {
    question: 'Do you support customer-managed encryption keys for on-prem and sovereign cloud deployments?',
    answer:
      'Yes. We support BYOK and HYOK across AWS KMS, Azure Key Vault HSM (FIPS 140-2 Level 3), and on-premise Thales Luna Network HSM 7. Envelope encryption uses AES-256-GCM at rest, with TLS 1.3 in transit. For sovereign deployments on G42 Cloud or Khazna, keys remain in HSMs you control; we never escrow.'
  },
  {
    question: 'What is your customer notification SLA on a confirmed personal data incident?',
    answer:
      'We acknowledge a suspected security event within 1 hour, 24/7. Confirmed personal data incidents trigger customer notification within 24 hours of confirmation, comfortably ahead of the PDPL Article 9 and GDPR Article 33 72-hour regulator window. The named on-call engineer reachable for the first 90 days of every engagement is listed in the runbook annex.'
  },
  {
    question: 'How do you handle UAE PDPL specifically — is this a GDPR-only policy?',
    answer:
      'No. Our DPA template is UAE PDPL (Federal Decree-Law No. 45 of 2021) primary, GDPR-equivalent secondary, with a DIFC Data Protection Law No. 5 of 2020 addendum. Cross-border transfers use UAE PDPL appropriate-safeguards alongside EU SCCs 2021/914 where the data subject is in scope of both regimes.'
  },
  {
    question: 'How often is the sub-processor register reviewed, and how are changes notified?',
    answer:
      'The register is reviewed monthly. Customers are notified at least 30 days before a new sub-processor is engaged for their workloads, with an objection window. The current register lists 11 sub-processors, the country of processing, the purpose, and the contractual safeguard for each.'
  },
  {
    question: 'Can we run our own penetration test against your platform before signature?',
    answer:
      'Yes. We support customer-led penetration testing under a coordinated scope. Our standard pre-engagement security review covers timing windows, allowed techniques, rate limits on production-adjacent systems, and the joint-remediation runbook. We do not gate independent testing behind a fee.'
  },
  {
    question: 'What is the scope of your ISO 42001 AI management system?',
    answer:
      'The certificate covers AI system design, development, deployment, and decommissioning across all customer engagements where Brocode supplies models, agents, or pipelines. The management system includes model risk classification, evaluation gates, red-teaming for high-impact use cases, human-oversight controls, and the post-deployment monitoring loop.'
  },
  {
    question: 'Do you carry cyber-liability insurance, and what is the limit?',
    answer:
      'Yes. We carry a cyber-liability and professional-indemnity tower with a single-claim limit visible on the certificate of insurance in the Vendor Security Pack. The standard MSA super-caps liability at 3× annual fees for data protection, IP indemnity, and confidentiality, with a 1× fees default for all other heads.'
  },
  {
    question: 'How long is the Vendor Security Pack countersignature workflow?',
    answer:
      'Once the NDA arrives in our DocuSign queue, we countersign within 24 working hours and the Pack download link is released the same day. For prospects pre-cleared by the Brocode commercial team, the countersignature is instant on submission.'
  },
  {
    question: 'Do you process any data outside the UAE for UAE customers?',
    answer:
      'By default no. UAE customer data stays within UAE residency (G42 Cloud, Khazna, AWS me-central-1, or Azure UAE North). Where a customer chooses a hybrid topology, transfers are documented in the engagement DPA with appropriate safeguards. Brocode-internal corporate processing (marketing CRM, ticketing) is documented separately in the sub-processor register.'
  },
  {
    question: 'Who is the named security contact, and how do we book the review call?',
    answer:
      'Our Head of Information Security owns the customer-facing security relationship. Photograph, qualifications, and a direct Microsoft Teams booking link are inside the Vendor Security Pack. For pre-NDA enquiries, the form on this page routes directly to the same diary.'
  }
];

const compareRows = [
  {
    feature: 'Time from NDA to Vendor Security Pack',
    brocode: 'Same day',
    competitors: ['3–6 weeks (legal routing)', 'Hyperscaler page only', '"On request" — undefined', 'No pack — marketing slides']
  },
  {
    feature: 'SOC 2 Type II in own name',
    brocode: 'Yes — Big-4 affiliated CPA',
    competitors: ['Yes — but partner-pool scoped', false, 'Underlying hyperscaler only', false]
  },
  {
    feature: 'ISO 42001 AI management system',
    brocode: 'Certified Jan 2026',
    competitors: ['In preparation', false, false, false]
  },
  {
    feature: 'UAE PDPL + TDRA + NESA evidence',
    brocode: 'Article-mapped',
    competitors: ['Regional adaptation', false, 'Generic data residency only', false]
  },
  {
    feature: 'Customer-managed keys on UAE sovereign',
    brocode: 'BYOK / HYOK default',
    competitors: ['Premium tier only', 'Hyperscaler-defined', false, 'No formal posture']
  },
  {
    feature: 'Sub-processor register with country of processing',
    brocode: '11 listed, monthly review',
    competitors: ['Aggregated regional pool', 'Hyperscaler list — not vendor', false, 'Not published']
  },
  {
    feature: 'Named security contact (photo + booking link)',
    brocode: 'Head of InfoSec, direct',
    competitors: ['Regional partner pool', 'Generic shared mailbox', 'Generic shared mailbox', 'No public contact']
  },
  {
    feature: 'Open critical / high findings',
    brocode: '0 / 0 (last pen test Mar 2026)',
    competitors: ['Not disclosed', 'Not applicable', 'Not disclosed', 'Not disclosed']
  }
];

const proofItems = [
  { value: '9 days', label: 'Median TPRM cycle to approval across last 22 engagements' },
  { value: '0 / 0', label: 'Open critical / high findings — March 2026 pen test' },
  { value: '11', label: 'Sub-processors, country-of-processing transparent' },
  { value: '24 hrs', label: 'Customer notification SLA on confirmed incident' }
];

const relatedItems = [
  { label: 'Privacy Policy', href: '/privacy-policy', description: 'DPO contact, data-subject rights, transfer mechanisms.' },
  { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Sovereign deployment on UAE-resident GPU estates.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Model governance, drift monitoring, audit logging.' },
  { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'SAMA / CBUAE-aligned references for regulated banks.' },
  { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'TDRA / NESA references for federal entity CISOs.' }
];

export default function SecurityCompliancePage() {
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Security & Compliance — Brocode Solutions',
    url: `https://www.brocode.ae/${SLUG}`,
    description:
      'SOC 2 Type II, ISO/IEC 27001:2022, ISO 42001, UAE PDPL evidence and sub-processor register for vendor due diligence.',
    isPartOf: { '@type': 'WebSite', name: 'Brocode Solutions', url: 'https://www.brocode.ae' }
  };

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Security and Compliance Assurance',
    serviceType: 'Security and Compliance Assurance',
    provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'United Kingdom', 'Singapore'],
    description:
      'A vendor due-diligence assurance package covering SOC 2 Type II, ISO 27001, ISO 42001, UAE PDPL, TDRA and NESA evidence, available same-day under NDA.',
    url: `https://www.brocode.ae/${SLUG}`
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <Script id="webpage-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageLd)}
      </Script>
      <Script id="service-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="faq-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO — certifications mosaic + last-audit strip */}
      <section className="relative isolate overflow-hidden bg-[#0a1024] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-brand/30 to-transparent blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-indigo-500/30 to-transparent blur-3xl" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Trust', href: '/security-compliance' },
              { label: 'Security & Compliance' }
            ]}
            variant="dark"
          />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-white/70">Vendor due-diligence pack</p>
              <h1 className="text-balance text-display-2xl">
                The Vendor Security Pack. <span className="text-brand-300">Same day, under NDA.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                SOC 2 Type II, ISO/IEC 27001:2022, ISO 42001, a CREST-tested penetration summary, a UAE PDPL and GDPR-aligned DPA, and the live sub-processor register — assembled for your TPRM workflow. Median customer due-diligence: nine working days.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#vendor-pack" event="quote_open">
                  Download the Vendor Security Pack
                </MagneticButton>
                <Link
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  data-event="secondary_cta_click"
                  data-page={SLUG}
                >
                  Book a 60-minute review
                </Link>
              </div>

              {/* Status strip */}
              <div className="mt-10 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs md:grid-cols-4">
                <div>
                  <p className="uppercase tracking-wider text-white/50">Last SOC 2 Type II</p>
                  <p className="mt-1 font-mono text-sm text-white">14 Mar 2026</p>
                </div>
                <div>
                  <p className="uppercase tracking-wider text-white/50">Last ISO 27001 surveillance</p>
                  <p className="mt-1 font-mono text-sm text-white">08 Feb 2026</p>
                </div>
                <div>
                  <p className="uppercase tracking-wider text-white/50">Last penetration test</p>
                  <p className="mt-1 font-mono text-sm text-white">04 Mar 2026</p>
                </div>
                <div>
                  <p className="uppercase tracking-wider text-white/50">Open critical / high</p>
                  <p className="mt-1 font-mono text-sm text-emerald-300">0 / 0</p>
                </div>
              </div>
            </div>

            {/* Certifications mosaic */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Certifications mosaic</p>
                <div className="mt-4 grid grid-cols-3 gap-2 md:grid-cols-4">
                  {[
                    'SOC 2 Type II',
                    'ISO 27001:2022',
                    'ISO 27701',
                    'ISO 42001',
                    'Cyber Essentials+',
                    'PCI-DSS v4',
                    'CSA STAR L2',
                    'TDRA IA',
                    'PDPL UAE',
                    'AWS Security',
                    'Microsoft Sec.',
                    'G42 Cloud'
                  ].map((c) => (
                    <div
                      key={c}
                      className="grid aspect-square place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-2 text-center text-[10px] font-semibold leading-tight text-white/85"
                    >
                      {c}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[11px] text-white/55">
                  Crests rendered as monochrome marks. Licensee numbers and certificate PDFs are inside the Vendor Security Pack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-white py-14">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* What's in the Vendor Security Pack — bento */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Inside the pack"
            title="Every artefact your TPRM analyst would otherwise chase across five emails."
            description="A single zipped bundle, NDA-gated, with file sizes, last-updated dates, and gating notes against each document so procurement can route them to the right reviewer."
          />
          <BentoGrid className="mt-12">
            <BentoCell span="lg" variant="dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">The headline file</p>
              <h3 className="mt-3 text-2xl font-semibold">SOC 2 Type II — 12 months ending 31 Dec 2025</h3>
              <p className="mt-3 text-white/75">
                Signed 14 March 2026 by a Big-4 affiliated CPA firm covering Security, Availability, Confidentiality, and Processing Integrity. Bridge letter included to today.
              </p>
              <p className="mt-4 text-xs text-white/55">PDF, 8.4 MB — NDA-gated</p>
            </BentoCell>
            <BentoCell span="md" variant="brand">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Penetration test</p>
              <h3 className="mt-2 text-xl font-semibold">Executive summary — pre-NDA</h3>
              <p className="mt-3 text-white/85">Full report under NDA. CREST-accredited tester. 0 open critical / high.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">ISO 27001 + SOA</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">93 controls mapped, latest BSI surveillance letter included</h3>
              <p className="mt-3 text-xs text-ink-600">PDF, 2.1 MB — NDA-gated</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">ISO 42001:2023</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">AI management system policy and scope statement</h3>
              <p className="mt-3 text-xs text-ink-600">PDF, 1.4 MB — pre-NDA</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">DPA template</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">UAE PDPL + GDPR + DIFC DP Law aligned, EU SCCs 2021/914 pre-filled</h3>
              <p className="mt-3 text-xs text-ink-600">DOCX, 380 KB — pre-NDA</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Sub-processor register</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">11 sub-processors, country of processing, contractual safeguard</h3>
              <p className="mt-3 text-xs text-ink-600">PDF, 240 KB — pre-NDA</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">CAIQ v4</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">Pre-filled Cloud Security Alliance questionnaire</h3>
              <p className="mt-3 text-xs text-ink-600">XLSX, 410 KB — pre-NDA</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">BCP / DR summary</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">RTO 4h, RPO 15m, last DR test Q4 2025</h3>
              <p className="mt-3 text-xs text-ink-600">PDF, 1.1 MB — NDA-gated</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Incident response policy</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">Runbook summary, escalation tree, 24-hour customer notification</h3>
              <p className="mt-3 text-xs text-ink-600">PDF, 720 KB — NDA-gated</p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Certifications & attestations matrix */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Certifications & attestations"
            title="Twelve current marks, each with its last-audit date and next surveillance window."
            description="Every entry below carries the licensee number on the certificate PDF inside the Vendor Security Pack. The scope, the issuing body, and the renewal cycle are documented so your TPRM analyst can verify with the registrar directly."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-surface-muted text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
                  <th className="px-5 py-4">Certification / attestation</th>
                  <th className="px-5 py-4">Issuing body</th>
                  <th className="px-5 py-4">Last audit</th>
                  <th className="px-5 py-4">Next due</th>
                  <th className="px-5 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {certifications.map((c) => (
                  <tr key={c.name} className="hover:bg-surface-muted/50">
                    <td className="px-5 py-4 font-medium text-ink-900">{c.name}</td>
                    <td className="px-5 py-4 text-ink-700">{c.body}</td>
                    <td className="px-5 py-4 font-mono text-xs text-ink-700">{c.lastAudit}</td>
                    <td className="px-5 py-4 font-mono text-xs text-ink-700">{c.next}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">{c.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Framework cross-walk */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Framework cross-walk"
            title="One control set, mapped to the frameworks your risk function already speaks."
            description="Each row pins a control function to its corresponding identifier in NIST CSF 2.0, ISO/IEC 27002:2022, NESA UAE IA, SAMA Cyber Security Framework, and ISO/IEC 42001. The full cross-walk Excel is in the Vendor Security Pack."
          />
          <div className="mt-12">
            <CompareTable
              brandLabel="Brocode posture"
              competitors={['NIST CSF 2.0', 'ISO 27002:2022', 'NESA UAE IA', 'SAMA CSF', 'ISO 42001 / SCF']}
              rows={crossWalk}
            />
          </div>
        </div>
      </section>

      {/* Encryption & KMS */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Encryption & key management"
            title="Customer-managed keys are the default, not the premium tier."
            description="Cryptographic posture aligned to ISO/IEC 27002:2022 control 8.24. Every key, every algorithm, every rotation cadence is in the cryptographic inventory inside the Vendor Security Pack."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'BYOK on hyperscalers',
                body:
                  'AWS KMS (FIPS 140-2 L2 envelope), Azure Key Vault HSM (L3), Google Cloud KMS where requested. Keys originate from your tenancy; Brocode operates on grants. Quarterly rotation default; manual rotation on demand.'
              },
              {
                title: 'HYOK on UAE sovereign',
                body:
                  'Thales Luna Network HSM 7 (FIPS 140-2 L3) in the customer DC, or Khazna-hosted HSM cluster. Keys never leave the HSM boundary; envelope keys are wrapped under the customer KEK on every workload.'
              },
              {
                title: 'Algorithms and TLS',
                body:
                  'AES-256-GCM at rest, ChaCha20-Poly1305 for legacy clients, TLS 1.3 in transit (TLS 1.2 only where the customer estate mandates). RSA-2048 deprecated; ECDSA P-384 and Ed25519 for new keys. Post-quantum hybrid (X25519 + Kyber) under pilot.'
              }
            ].map((b) => (
              <Reveal key={b.title}>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-semibold text-ink-900">{b.title}</h3>
                  <p className="mt-3 text-sm text-ink-700">{b.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-processor register */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Sub-processor register"
            title="Eleven sub-processors. Country of processing. Purpose. Contractual safeguard."
            description="Reviewed monthly. Changes notified to customers 30 days in advance, with an objection window. Last full review: 02 May 2026."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-surface-muted text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
                  <th className="px-5 py-4">Sub-processor</th>
                  <th className="px-5 py-4">Country of processing</th>
                  <th className="px-5 py-4">Purpose</th>
                  <th className="px-5 py-4">Safeguard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {subProcessors.map((s) => (
                  <tr key={s.name} className="hover:bg-surface-muted/50">
                    <td className="px-5 py-4 font-medium text-ink-900">{s.name}</td>
                    <td className="px-5 py-4 text-ink-700">{s.country}</td>
                    <td className="px-5 py-4 text-ink-700">{s.purpose}</td>
                    <td className="px-5 py-4 text-xs text-ink-700">{s.safeguard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-ink-600">
            For per-engagement variations (e.g. a customer-specific deployment that uses none of the marketing or analytics processors), the engagement-level DPA Annex II lists the operative sub-processors only. See the{' '}
            <Link href="/privacy-policy" className="text-brand underline">privacy policy</Link> for the DPO contact and the data-subject rights process.
          </p>
        </div>
      </section>

      {/* Incident response posture */}
      <section className="relative isolate overflow-hidden bg-ink-900 py-22 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={`/images/legal/${SLUG}.jpg`}
            alt="A secure operations centre with status panels showing live monitoring of customer-facing systems"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
        </div>
        <div className="container-site relative z-10">
          <SectionHeading
            eyebrow="Incident response posture"
            title="One-hour acknowledgement. Twenty-four-hour customer notification."
            description="The runbook, the escalation tree, and the named on-call contact for the first 90 days of every engagement are inside the Vendor Security Pack. Below is the headline timeline a TPRM analyst can pin to the wall."
            variant="dark"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-4">
            {[
              { t: 'T+0', title: 'Detection', body: 'SIEM correlation, EDR alert, or customer report. Auto-page to on-call.' },
              { t: 'T+1 hour', title: 'Acknowledgement', body: 'Named engineer accepts page. Incident ticket opened. Severity classified.' },
              { t: 'T+24 hours', title: 'Customer notification', body: 'On confirmed personal data incident — customer notified, ahead of PDPL Art. 9 / GDPR Art. 33 regulator window.' },
              { t: 'T+72 hours', title: 'Regulator + post-mortem', body: 'PDPL / supervisory authority notified where required. 14-day post-mortem with named owner per action.' }
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-brand-300">{s.t}</p>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Big-4 InfoSec packs, hyperscaler MSPs, offshore AI vendors, and boutiques — the honest read."
            description="The four alternatives a UAE CISO weighs when a TPRM workflow lands. Where Brocode is not the right fit (e.g. visitor needs only a hyperscaler attestation), we will tell you on the first call."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['Big-4 consultancies', 'Hyperscaler MSP / reseller', 'Offshore AI vendor', 'Boutique AI consultancy']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet — NDA-gated Vendor Security Pack */}
      <section id="vendor-pack" className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="Brocode Vendor Security Pack (NDA-gated)"
            description="A single zipped bundle (≈45 MB) containing SOC 2 Type II full report, ISO 27001 certificate + SOA, penetration test executive summary, DPA template, sub-processor register, BCP / DR summary, incident response policy, ISO 42001 policy, and a pre-filled CAIQ v4."
            contents={[
              'SOC 2 Type II — Big-4 affiliated CPA firm, signed 14 March 2026',
              'ISO/IEC 27001:2022 certificate, SOA (93 controls) and BSI surveillance letter',
              'CREST-accredited penetration test — full report (executive summary pre-NDA)',
              'DPA template — UAE PDPL + GDPR + DIFC DP Law aligned, SCCs pre-filled',
              'Sub-processor register — 11 entries, country of processing, safeguards',
              'CAIQ v4 — pre-filled Cloud Security Alliance Consensus Assessment',
              'ISO 42001:2023 AI management system policy and scope',
              'BCP / DR summary — RTO 4h, RPO 15m, last DR test Q4 2025',
              'NDA gating: submit your standard NDA or use ours; we countersign within 24 working hours.'
            ]}
            filePath="/downloads/vendor-security-pack.pdf"
            ctaLabel="Email me the Vendor Security Pack"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">From real TPRM workflows</p>
            <h2 className="mt-3 text-display-md text-ink-900">Frequently asked by CISOs.</h2>
            <p className="mt-4 text-ink-600">
              Twelve questions distilled from the OneTrust, CyberGRX, and ServiceNow VRM workflows we have answered in the last 24 months. Where an answer needs an artefact, the artefact lives in the Vendor Security Pack.
            </p>
            <Link
              href="#contact-form"
              className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand"
              data-event="secondary_cta_click"
              data-page={SLUG}
            >
              Book the 60-minute review
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="contact-form" className="relative isolate overflow-hidden bg-ink-900 py-22 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-32 top-0 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-brand/40 to-transparent blur-3xl" />
        </div>
        <div className="container-site relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-white/70">60-minute security review</p>
            <h2 className="mt-3 text-display-lg">Sit our Head of InfoSec next to your TPRM analyst.</h2>
            <p className="mt-5 max-w-lg text-white/75">
              We walk the Vendor Security Pack, take questions on the residual-risk register, and agree the artefacts your committee will see. We reply within one business day.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/75">
              <p><strong className="text-white">Direct WhatsApp:</strong> +971 50 761 2213</p>
              <p><strong className="text-white">Security email:</strong> security@brocode.ae</p>
              <p><strong className="text-white">HQ:</strong> Al Maryah Island, ADGM, Abu Dhabi</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 text-ink-900 md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Download pack"
        primaryHref="#vendor-pack"
      />
    </>
  );
}
