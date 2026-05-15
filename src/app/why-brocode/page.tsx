import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Parallax } from '@/components/parallax/Parallax';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { ProofBand } from '@/components/ui/ProofBand';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink, SITE } from '@/lib/site';

const PAGE_SLUG = 'why-brocode';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm at shortlist stage for an AI partner at [organisation], evaluating Brocode against [Big-4 / offshore / hyperscaler / other]. Could you walk me through the comparison on a 30-minute call?";

export const metadata: Metadata = {
  title: 'Why Brocode — AI Partner Comparison for UAE (Dubai & Abu Dhabi)',
  description:
    'A procurement-grade comparison of Brocode vs Big-4, offshore dev shops, hyperscaler PSO and DIY for UAE enterprises in Abu Dhabi, Dubai and the wider GCC. Six axes, sourced cells, honest concessions.',
  alternates: { canonical: 'https://www.brocode.ae/why-brocode' },
  openGraph: {
    title: 'Why Brocode — UAE AI Partner Comparison',
    description:
      'Six-axis comparison of Brocode vs Big-4, offshore, hyperscaler PSO and DIY. Procurement-committee-ready matrix with sourced cells and honest concessions.',
    url: 'https://www.brocode.ae/why-brocode',
    images: ['/images/general/why-hero.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Brocode — Procurement comparison',
    description: 'Brocode vs Big-4 vs offshore vs hyperscaler vs DIY. Sourced cells.',
    images: ['/images/general/why-hero.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Book a 30-minute working session',
  subtitle:
    "Send us your shortlist. A principal walks you through the comparison on a 30-minute call — including the axes where Brocode is not the right answer.",
  ctaLabel: 'Book the working session',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'shortlist',
      label: 'Who else is on your shortlist?',
      type: 'multiselect',
      options: [
        'Accenture',
        'Deloitte',
        'KPMG',
        'EY',
        'IBM',
        'Cognizant',
        'TCS',
        'Infosys',
        'Wipro',
        'AWS ProServe',
        'Azure CXP',
        'Google PSO',
        'Regional boutique',
        'In-house build',
        'Prefer not to say'
      ]
    },
    {
      name: 'primaryAxis',
      label: 'Primary axis of decision',
      type: 'select',
      options: [
        'Cost',
        'Timeline',
        'Data residency',
        'Engineering depth',
        'Regulator alignment',
        'Scale',
        'Not yet ranked'
      ],
      required: true
    },
    {
      name: 'committeeDate',
      label: 'Procurement committee date',
      type: 'date'
    },
    {
      name: 'engagementScope',
      label: 'Engagement scope',
      type: 'multiselect',
      options: [
        'Document intelligence',
        'NLP',
        'Chatbot',
        'ML',
        'Deep learning',
        'MLOps',
        'Strategic advisory'
      ]
    },
    {
      name: 'engagementSize',
      label: 'Approximate engagement size',
      type: 'select',
      options: [
        '<AED 500K',
        'AED 500K to 2M',
        'AED 2M to 5M',
        'AED 5M to 15M',
        '>AED 15M'
      ]
    },
    {
      name: 'preferredNext',
      label: 'Preferred next step',
      type: 'select',
      options: [
        'Send the PDF and slide',
        'Book a comparison working session',
        'Send a written response to our RFP'
      ],
      required: true
    }
  ]
};

const sixAxes = [
  {
    title: '1 · Named engineering depth',
    body: 'Are the engineers who will write your code visible by name before contract signature, with public profiles, publications and GitHub or Hugging Face links? Source: vendor public team pages and procurement reference calls.'
  },
  {
    title: '2 · UAE residency and regulator alignment',
    body: 'Is the legal entity UAE-resident, audited locally, and signed-up to CBUAE, DFSA, ADGM, TDRA and SAMA evidence packs as standard? Source: vendor trade licence and regulator submission history.'
  },
  {
    title: '3 · Time-to-first-production-system',
    body: 'Median months from kickoff to the first system serving real traffic in production. Source: 27-enterprise UAE shortlist benchmark, 2024-2025, full methodology in the matrix PDF.'
  },
  {
    title: '4 · Data residency and sovereign deployment',
    body: 'On-premise, G42 Cloud, Khazna, AWS UAE North, Azure UAE North, OCI Abu Dhabi, du Cloud, e& Cloud — and the HSM-backed key custody pattern. Source: vendor public deployment library.'
  },
  {
    title: '5 · Commercial model and AED rate transparency',
    body: 'Published AED rate bands by role and seniority. UAE-signed MSA. AED billing. Source: vendor public rate card or RFP response history.'
  },
  {
    title: '6 · Post-engagement knowledge transfer and exit',
    body: 'Pair-programming during build, a regulator-aligned handover pack, and contractual exit terms that put the customer in the driving seat by week thirteen. Source: vendor standard MSA exit clauses.'
  }
];

const proofItems = [
  { value: '4.1m', label: 'Median time-to-first-production-system (Brocode)' },
  { value: '9.7m', label: 'Big-4 median' },
  { value: '7.3m', label: 'Offshore median' },
  { value: '16.4m', label: 'DIY internal build median' }
];

const big4Rows: CompareRow[] = [
  { feature: 'Named engineers visible before signature', brocode: true, competitors: ['Partners visible, engineers not'], note: 'Source: vendor team pages.' },
  { feature: 'Median time-to-first-production-system', brocode: '4.1 months', competitors: ['9.7 months'], note: 'Source: 27-enterprise UAE shortlist benchmark.' },
  { feature: 'AED-billed under UAE-signed MSA', brocode: true, competitors: ['Often AED via UAE arm, USD ladder above'] },
  { feature: 'Rate band vs Big-4 published GCC card', brocode: '45-55%', competitors: ['100% (baseline)'] },
  { feature: 'Arabic engineering depth (Khaleeji)', brocode: 'In-region annotation lab', competitors: ['Limited regional NLP team'] },
  { feature: 'Exit and handover engineered into build', brocode: 'Pair-programming + handover pack', competitors: ['Add-on workstream'] }
];
const big4Wins =
  'Big-4 wins on multi-country simultaneous rollout, regulated-audit-firm work, global change-management at scale and integrated ERP / SAP implementation programmes.';

const offshoreRows: CompareRow[] = [
  { feature: 'UAE-signed DPA passes CBUAE and DFSA scrutiny', brocode: true, competitors: ['Often layered via UAE reseller'] },
  { feature: 'ISO 27001 + SOC 2 Type II + ISO 42001', brocode: true, competitors: ['Partial — varies by shop'] },
  { feature: 'Median time-to-first-production-system', brocode: '4.1 months', competitors: ['7.3 months'] },
  { feature: 'Sovereign-cloud and on-premise depth', brocode: 'Default', competitors: ['Limited; usually single-cloud'] },
  { feature: 'Body-shop rotation risk', brocode: 'Named pod, no rotation', competitors: ['Engineer turnover common'] },
  { feature: 'AED rate vs Brocode', brocode: '100% (Brocode baseline)', competitors: ['30-45%'] }
];
const offshoreWins =
  'Offshore wins on pure throughput-and-cost work where data residency and regulator alignment are genuinely not constraints — large repetitive build-outs in non-regulated domains.';

const hyperscalerRows: CompareRow[] = [
  { feature: 'Vendor-neutral architecture choices', brocode: true, competitors: ['Locked to one cloud'] },
  { feature: 'UAE-resident counterparty', brocode: true, competitors: ['US or Ireland entity in most cases'] },
  { feature: 'AED billing on UAE-signed MSA', brocode: true, competitors: ['USD-billed, layered via reseller for AED'] },
  { feature: 'On-premise and sovereign deployment', brocode: 'Default', competitors: ['Single-cloud only'] },
  { feature: 'Median time-to-first-production-system', brocode: '4.1 months', competitors: ['6.9 months'] },
  { feature: 'Arabic engineering depth in-region', brocode: 'In-region linguists', competitors: ['Generic models, limited Khaleeji'] }
];
const hyperscalerWins =
  'Hyperscaler PSO wins when the engagement is single-cloud, US-billed, deeply integrated with a specific managed service, and the customer accepts the vendor-lock-in trade.';

const diyRows: CompareRow[] = [
  { feature: 'Median time-to-first-production-system', brocode: '4.1 months', competitors: ['16.4 months'], note: 'Source: 27-enterprise UAE shortlist benchmark — includes hiring time.' },
  { feature: 'Hiring-and-attrition risk in UAE talent market', brocode: 'Pod is staffed at week one', competitors: ['6-12 months to staff a senior ML team'] },
  { feature: 'External benchmarking and second opinion', brocode: 'Built-in', competitors: ['Internal echo chamber risk'] },
  { feature: 'Regulator-evidence package experience', brocode: 'Standard deliverable', competitors: ['First-time learning curve'] },
  { feature: 'Long-run TCO at maturity', brocode: 'Premium', competitors: ['Lower at steady state'] },
  { feature: 'Open-ended scope and learning culture', brocode: 'Bounded engagement', competitors: ['Wins for in-house exploration'] }
];
const diyWins =
  'DIY wins when the organisation has a mature AI engineering function and a 24-month horizon. We recommend MLOps and infrastructure engagements (rather than full delivery) to those teams.';

const honestNotFit = [
  {
    title: '50-country simultaneous rollout',
    body: 'If the engagement is a single AI capability deployed across 30+ countries in parallel with full change-management, a Big-4 firm is usually the cleaner answer. Brocode is built for UAE and GCC depth, not 50-country breadth. Recommended alternative: Accenture or Deloitte global delivery, with Brocode as a UAE-region specialist sub-contractor.'
  },
  {
    title: 'Pure regulated-audit-firm work',
    body: 'If a regulator (CBUAE, FSRA, DFSA) requires the engagement to sit with a licensed audit firm — for example a SR 11-7 third-party model validation — Brocode is not the right counterparty. Recommended alternative: a Tier-1 audit firm with Brocode as the engineering build partner alongside.'
  },
  {
    title: 'Pure ERP-and-SAP-implementation programme',
    body: 'If the actual work is an SAP S/4HANA or Oracle EBS implementation with an AI sidecar, the system integrator should lead. Brocode is an AI engineering firm, not an ERP integrator. Recommended alternative: an SI prime, with Brocode embedded for the AI components only.'
  }
];

const cioQuotes = [
  { side: 'Chose Brocode over a Big-4', q: 'The Brocode pod arrived knowing my regulator before I briefed them. The Big-4 wanted six weeks to write a diagnostic before they would name an engineer.', a: 'CIO, Tier-1 UAE bank' },
  { side: 'Chose Brocode over a Big-4', q: 'Same controls posture as the Big-4, half the rate card, and an actual production system at week twelve. The procurement committee approved it on the first pass.', a: 'CDO, Federal authority' },
  { side: 'Chose Brocode over offshore', q: 'We tried the offshore route for two pilots before. Neither survived the compliance review. Brocode passed the CBUAE evidence pack at the first attempt.', a: 'Head of Data, GCC telco' },
  { side: 'Chose a Big-4 over Brocode', q: 'We needed a 27-country rollout with synchronised change-management. Brocode were honest that we needed the Big-4 for the breadth, and they joined as the AI sub.', a: 'Group CIO, Multinational FMCG' },
  { side: 'Chose hyperscaler PSO over Brocode', q: 'We were already deep into one cloud and the workload was a single managed-service. Brocode pointed us to the hyperscaler PSO and stepped out of the bid.', a: 'CTO, Regional retail group' },
  { side: 'Chose DIY over Brocode', q: 'We had a mature ML team and a 30-month horizon. Brocode walked us through the build-vs-buy honestly and we self-built. We brought them in later for the MLOps backbone.', a: 'Head of AI, Family-office tech arm' }
];

const faqItems: FAQItem[] = [
  {
    question: 'This is a marketing page on your own site — why should I trust your comparison?',
    answer:
      'Every cell on this page carries a source citation. We publish the comparison methodology as a one-page note alongside the matrix PDF so your procurement committee can re-run any cell. Where a competitor wins on an axis, we say so by name — and we recommend the competitor in the "not the right fit" section.'
  },
  {
    question: "You're smaller than Accenture. What's our continuity story if you fall over mid-engagement?",
    answer:
      'Three named founders, 85+ engineers, and a documented key-person continuity policy with a deputy named for each founder. Professional indemnity and cyber insurance with a Tier-1 GCC carrier, cover amount in the procurement pack. A bank-issued financial standing letter is available on request. The standard MSA includes a 90-day handover-to-customer-or-alternative-vendor clause without penalty.'
  },
  {
    question: 'Where are you honestly not the best choice?',
    answer:
      'Three specific scenarios — and the recommended alternative for each — are named on this page in the "Where we are not the right fit" section. We re-validate that list quarterly. If our capability has expanded into one of those scenarios since the last review, this page is updated.'
  },
  {
    question: 'What does your standard exit and handover clause look like?',
    answer:
      'A 90-day customer-led transition window, with a written handover pack including model cards, datasheets, runbooks, control mappings, source code in a customer-owned repository, and a paid two-week pair-programming window with the receiving team. No exit fees on a no-fault termination. Sample exit clause is in the MSA template inside the due-diligence pack.'
  },
  {
    question: 'Can you sub-contract part of the work, and how is that flowed down?',
    answer:
      'Roughly 15% of delivery hours are performed by named sub-processors. The list is in the due-diligence pack, refreshed quarterly. Every sub-processor sits under a back-to-back DPA aligned to the prime contract, inside the ISO 27001 Statement of Applicability, and (where in scope) on the SOC 2 Type II audit.'
  },
  {
    question: 'How do you handle off-cycle scope changes mid-engagement?',
    answer:
      'A documented change-request process with a 48-hour written response and a 5-business-day decision SLA. Scope changes are priced against the published AED rate card with no premium. The principal engineer on your engagement is empowered to approve up to 10% scope variation without a separate change order.'
  }
];

const relatedLinks = [
  { label: 'About Brocode', href: '/about', description: 'Founders, certifications, legal entity and continuity policy.' },
  { label: 'Machine learning development', href: '/services/machine-learning-development', description: 'The dominant comparison topic for ML shortlists.' },
  { label: 'Document intelligence', href: '/services/document-intelligence', description: 'The dominant topic for Arabic and OCR shortlists.' },
  { label: 'Contact a principal', href: '/contact', description: 'Direct line for written RFP responses.' },
  { label: 'Insights and benchmarks', href: '/insights', description: 'The deeper buyer guide and primary research base.' }
];

export default function WhyBrocodePage() {
  return (
    <>
      <Script
        id="ld-why"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Why Brocode — AI Partner Comparison',
              url: `${SITE.url}/why-brocode`,
              description:
                'Procurement-grade comparison of Brocode vs Big-4, offshore, hyperscaler PSO and DIY internal build.'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer }
              }))
            }
          ])
        }}
      />

      {/* Bespoke hero — six-axis bento */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <GradientMesh tone="midnight" />
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-24">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Why Brocode' }]} variant="dark" />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5 text-white/70">Why Brocode</p>
              <h1 className="text-balance text-display-2xl">
                Six axes. Sourced cells. Honest concessions.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                A side-by-side, honestly-disclosed comparison of Brocode against the four kinds of
                AI partner you are also evaluating — Big-4 consultancies, offshore dev shops,
                hyperscaler PSO and DIY internal build — on the six axes that decide enterprise
                AI engagements in the UAE.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#matrix-download" variant="primary" size="lg" event="secondary_cta_click">
                  Download the matrix
                </MagneticButton>
                <MagneticButton href="#contact-form" variant="secondary" size="lg" event="quote_open">
                  Book a working session
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={PAGE_SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
                >
                  WhatsApp the principal
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BentoGrid>
                {sixAxes.map((axis, i) => (
                  <BentoCell key={axis.title} span={i === 0 ? 'lg' : 'md'} variant={i % 3 === 0 ? 'brand' : i % 3 === 1 ? 'dark' : 'glass'}>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Axis {i + 1}</p>
                    <h2 className={`mt-2 text-lg font-semibold ${i % 3 === 2 ? 'text-ink-900' : 'text-white'}`}>{axis.title.replace(/^\d+ · /, '')}</h2>
                    <p className={`mt-2 text-xs leading-relaxed ${i % 3 === 2 ? 'text-ink-700' : 'text-white/80'}`}>{axis.body}</p>
                  </BentoCell>
                ))}
              </BentoGrid>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band — the four numbers */}
      <section className="border-y border-ink-100 bg-white py-16">
        <div className="container-site">
          <p className="eyebrow mb-8 text-center">Median time-to-first-production-system, by partner type</p>
          <ProofBand items={proofItems} />
          <p className="mt-8 text-center text-xs text-ink-500">
            Source: Brocode 27-enterprise UAE shortlist benchmark, 2024-2025. Hyperscaler PSO median: 6.9 months. Methodology in the matrix PDF.
          </p>
        </div>
      </section>

      {/* Services-only positioning */}
      <section className="bg-surface-muted py-16">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Before you read the matrix
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-snug text-ink-900">
              We compete on the services axis only. No Brocode product is on offer.
            </h3>
            <p className="mt-4 text-ink-700">
              The comparison below is a partner-vs-partner comparison: who does the engineering
              work. None of the partners on the matrix sell you a Brocode SaaS, a Brocode-licensed
              model, or a Brocode-managed platform — including us. Every system we build for you
              uses open-source frameworks and portable commercial software that you license
              directly from the vendor. The artefact at the end of every engagement is a working
              system you own outright, not a subscription you continue to pay us for.
            </p>
          </div>
        </div>
      </section>

      {/* Why this page exists */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">Why this page exists</p>
            <h2 className="text-display-lg text-balance text-ink-900">
              This is a procurement-committee tool, not a sales pitch.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">
              You are at shortlist stage. You have two or three vendors in front of you — most
              often one Big-4, one offshore option, and one regional or hyperscaler PSO option.
              Each vendor's marketing site uses the same words: "production-ready", "regional
              expertise", "industry-leading". Your procurement committee meets in eleven days and
              expects a defensible recommendation. This page is the side-by-side you can take into
              the committee — sourced cells, honest concessions, and a printable matrix at the
              end.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              Every comparison cell on this page cites a source — a Big-4 published rate card, a
              public ProServe statement, a hyperscaler tenancy doc, or a named internal Brocode
              benchmark. Every alternative-vendor section ends with an "honest concession" — the
              axis where the other vendor wins. The "Where we are not the right fit" section
              names three specific scenarios and recommends a specific alternative partner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Six axes explained */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="The framework"
            title="The six axes, defined and sourced."
            description="Every comparison further down the page runs on these axes. The matrix PDF in the lead magnet expands each axis into a one-page methodology note."
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sixAxes.map((axis, i) => (
              <li key={axis.title}>
                <Reveal delay={i * 0.04}>
                  <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Axis {i + 1}</p>
                    <h3 className="mt-2 text-lg font-semibold text-ink-900">{axis.title.replace(/^\d+ · /, '')}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">{axis.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Big-4 comparison */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="vs Big-4 consultancies"
            title="Brocode vs Accenture, Deloitte, KPMG, EY, IBM."
            description="Same six axes. Sourced cells. The honest concession appears below the matrix."
          />
          <div className="mt-10">
            <CompareTable brandLabel="Brocode" competitors={['Big-4 consultancy']} rows={big4Rows} />
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-brand bg-brand-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Where Big-4 wins</p>
            <p className="mt-2 text-ink-800">{big4Wins}</p>
          </div>
        </div>
      </section>

      {/* Offshore comparison */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="vs offshore dev shops"
            title="Brocode vs Bangalore, Pune, Karachi development firms."
            description="The procurement-relevant differences sit on residency, compliance posture and rotation risk."
          />
          <div className="mt-10">
            <CompareTable brandLabel="Brocode" competitors={['Offshore dev shop']} rows={offshoreRows} />
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-brand bg-brand-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Where offshore wins</p>
            <p className="mt-2 text-ink-800">{offshoreWins}</p>
          </div>
        </div>
      </section>

      {/* Hyperscaler comparison */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="vs hyperscaler PSO"
            title="Brocode vs AWS ProServe, Azure CXP, Google PSO."
            description="The procurement-relevant differences sit on vendor-neutrality, counterparty residency, and on-premise depth."
          />
          <div className="mt-10">
            <CompareTable brandLabel="Brocode" competitors={['Hyperscaler PSO']} rows={hyperscalerRows} />
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-brand bg-brand-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Where hyperscaler PSO wins</p>
            <p className="mt-2 text-ink-800">{hyperscalerWins}</p>
          </div>
        </div>
      </section>

      {/* DIY comparison */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="vs DIY internal build"
            title="Brocode vs hiring and building in-house."
            description="The procurement-relevant differences sit on time-to-first-system and hiring-and-attrition risk in the UAE talent market."
          />
          <div className="mt-10">
            <CompareTable brandLabel="Brocode" competitors={['DIY internal build']} rows={diyRows} />
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-brand bg-brand-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Where DIY wins</p>
            <p className="mt-2 text-ink-800">{diyWins}</p>
          </div>
        </div>
      </section>

      {/* Where we are NOT the right fit */}
      <section className="relative overflow-hidden bg-ink-900 py-22 text-white md:py-30">
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <Image src="/images/general/why-hero.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/85 to-ink-900" />
        </Parallax>
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="Where we are not the right fit"
            title="Three scenarios where we recommend a different partner."
            description="The procurement-committee test of credibility is whether a vendor can name the scenarios where they are not the right answer — and recommend the alternative. Here are ours."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {honestNotFit.map((nf, i) => (
              <li key={nf.title}>
                <Reveal delay={i * 0.05}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Honest concession {i + 1}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{nf.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">{nf.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CIO reference quotes — both directions */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="CIO reference quotes"
            title="Three CIOs who chose us. Three who chose someone else."
            description="Both directions visible on the page. Reference contacts are available on the first call — with written consent from each speaker."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cioQuotes.map((q, i) => (
              <li key={i}>
                <Reveal delay={i * 0.04}>
                  <figure className={`flex h-full flex-col rounded-2xl border p-7 ${q.side.includes('Brocode over') ? 'border-brand-200 bg-brand-50' : 'border-ink-100 bg-surface-muted'}`}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{q.side}</p>
                    <blockquote className="mt-4 text-base leading-relaxed text-ink-800">"{q.q}"</blockquote>
                    <figcaption className="mt-6 text-sm font-medium text-ink-600">— {q.a}</figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lead magnet — matrix download */}
      <section id="matrix-download" className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="The UAE Enterprise AI Partner Comparison Matrix"
            description="A one-page printable PDF plus an editable PowerPoint slide, ready to drop into your procurement committee pack. Covers Brocode, Big-4 (Accenture / Deloitte / KPMG / EY), offshore dev shop, hyperscaler PSO and DIY internal build — on the six axes. Headline figure: median time-to-first-production-system across a 27-enterprise UAE shortlist sample — 4.1 months for Brocode-class partners, 9.7 months for Big-4, 7.3 months for offshore, 6.9 months for hyperscaler PSO, 16.4 months for DIY."
            filePath="/downloads/why-brocode-comparison-matrix.pdf"
            ctaLabel="Email me the matrix"
            contents={[
              'Six-axis comparison framework',
              'Where we are the right fit',
              'Where we explicitly are not',
              'Engagement models and pricing bands',
              'Three-customer reference call programme'
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Continuity and contracting"
              title="The six FAQs procurement reviewers send next."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Working session form */}
      <section id="contact-form" className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Talk to the principal"
              title="Send us your shortlist. We walk you through the matrix."
              description="A 30-minute working session with a named founder. We bring the comparison to your environment — and to the axis you actually rank on first."
            />
            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <p><strong className="text-ink-900">Direct:</strong> <a href={`mailto:${SITE.email}`} className="text-brand underline">{SITE.email}</a></p>
              <p><strong className="text-ink-900">Founder WhatsApp:</strong> {SITE.whatsapp.display}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedLinks} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Book a session" primaryHref="#contact-form" />
    </>
  );
}
