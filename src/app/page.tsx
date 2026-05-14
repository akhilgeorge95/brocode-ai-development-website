import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Parallax } from '@/components/parallax/Parallax';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink, SITE } from '@/lib/site';

const PAGE_SLUG = 'home';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm exploring AI delivery partners for [organisation]. The first area we want to discuss is [document intelligence / NLP / chatbot / ML / deep learning / MLOps / generative AI / not sure yet]. Could we schedule a 30-minute call?";

export const metadata: Metadata = {
  title: 'AI Company UAE — Enterprise AI Engineering | Brocode',
  description:
    'Production AI for UAE enterprises. Named UAE-resident engineers, a 12-week production path, sovereign deployment, and Arabic engineering depth across six service lines.',
  alternates: { canonical: 'https://www.brocode.ae/' },
  openGraph: {
    title: 'AI Company UAE — Production Enterprise AI from Abu Dhabi',
    description:
      'UAE-headquartered AI engineering firm. Named engineers, sovereign deployment, Arabic NLP depth, 12-week production path. ISO 27001 + SOC 2 Type II.',
    url: 'https://www.brocode.ae/',
    images: ['/images/general/og-default.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Company UAE — Brocode Solutions',
    description: 'Production AI for UAE enterprises. Engineers, not slideware.',
    images: ['/images/general/og-default.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Talk to an expert',
  subtitle:
    'One short qualification form. A senior engineer — not an SDR — responds within one business day with a named contact and a shape for the engagement.',
  ctaLabel: 'Talk to an expert',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'primaryArea',
      label: 'Primary area of interest',
      type: 'multiselect',
      options: [
        'Document intelligence',
        'NLP and Arabic',
        'Conversational AI',
        'Machine learning',
        'Deep learning',
        'MLOps and infrastructure',
        'Self-hosted LLM',
        'Not sure yet — recommend'
      ]
    },
    {
      name: 'organisationType',
      label: 'Organisation type',
      type: 'select',
      options: [
        'Bank or financial services',
        'Telecom',
        'Government or public sector',
        'Energy or utilities',
        'Healthcare',
        'Retail or consumer',
        'Logistics',
        'Family office or holding',
        'Other'
      ],
      required: true
    },
    {
      name: 'engagementHorizon',
      label: 'Engagement horizon',
      type: 'select',
      options: [
        'Scoping in the next 30 days',
        'Next 90 days',
        'Next 6 months',
        'Exploratory only'
      ],
      required: true
    },
    {
      name: 'budgetBand',
      label: 'Approximate budget band',
      type: 'select',
      options: [
        '<AED 500K',
        'AED 500K to 2M',
        'AED 2M to 5M',
        'AED 5M to 15M',
        '>AED 15M',
        'Not yet defined'
      ]
    },
    {
      name: 'dataResidency',
      label: 'Data residency requirement',
      type: 'select',
      options: [
        'Must stay in UAE',
        'GCC acceptable',
        'Global cloud acceptable',
        'Not yet defined'
      ]
    },
    {
      name: 'referralSource',
      label: 'How did you hear about Brocode?',
      type: 'text',
      placeholder: 'Referral / Google / LinkedIn / analyst / event'
    }
  ]
};

const proofItems = [
  { value: '120+', label: 'AI systems shipped to production' },
  { value: '32', label: 'Regulated GCC enterprises served' },
  { value: '4.1m', label: 'Months median time-to-first-production-system' },
  { value: '99.95%', label: 'Average model-serving uptime' }
];

const serviceTiles = [
  {
    title: 'Document intelligence',
    href: '/services/document-intelligence',
    angle: 'Arabic OCR, KYC, and contract extraction at enterprise scale.',
    result: 'Pre-contract free 500-document benchmark on your data.'
  },
  {
    title: 'NLP and Arabic',
    href: '/services/natural-language-processing',
    angle: 'Khaleeji and MSA NLP with AraBERT-v2, CAMeLBERT and Jais.',
    result: 'Open benchmark on eight models published quarterly.'
  },
  {
    title: 'Conversational AI',
    href: '/services/conversational-ai-chatbots',
    angle: 'Contact-centre assistants that survive Khaleeji-dialect calls.',
    result: 'Contractual containment SLAs, not lab demos.'
  },
  {
    title: 'Machine learning development',
    href: '/services/machine-learning-development',
    angle: 'Models that pass the regulator and stay in production.',
    result: '12-week production path with named gates.'
  },
  {
    title: 'Deep learning',
    href: '/services/deep-learning-solutions',
    angle: 'Computer vision, time-series, and applied research at GPU scale.',
    result: 'On-premise DGX and H100 access.'
  },
  {
    title: 'MLOps and infrastructure',
    href: '/services/mlops-ai-infrastructure',
    angle: 'The operating backbone that keeps models earning their keep.',
    result: 'Reference architectures for AWS, Azure, sovereign, hybrid.'
  },
  {
    title: 'Self-hosted LLM',
    href: '/services/self-hosted-llm-infrastructure',
    angle: 'Customer-owned LLM appliances with HSM-backed keys.',
    result: '36-month TCO pack and hardware BoM included.'
  },
  {
    title: 'Responsible AI and governance',
    href: '/services/responsible-ai-governance',
    angle: 'Regulator-grade evidence files for CBUAE, FSRA, ISO 42001.',
    result: 'Model cards, datasheets, bias packs as standard.'
  }
];

const industries = [
  { name: 'Banking and financial services', href: '/industries/banking-financial-services' },
  { name: 'Government and public sector', href: '/industries/government-public-sector' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Energy and utilities', href: '/industries/energy-utilities' },
  { name: 'Manufacturing', href: '/industries/manufacturing' }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Named UAE-resident engineers on every engagement',
    brocode: true,
    competitors: ['Partners visible, engineers not', 'Offshore bench, no UAE residency', 'Global PSO bench, US-billed']
  },
  {
    feature: 'Time-to-first-production-system (median, UAE)',
    brocode: '4.1 months',
    competitors: ['9.7 months', '7.3 months', '6.9 months'],
    note: 'Source: 27-enterprise UAE shortlist benchmark, 2024-2025.'
  },
  {
    feature: 'AED billing and UAE-signed MSA',
    brocode: true,
    competitors: [true, 'Often UAE-signed via reseller', 'US or Ireland entity']
  },
  {
    feature: 'On-premise and sovereign-cloud delivery',
    brocode: 'Default',
    competitors: ['Available, often costed-up', 'Limited', 'Single-cloud only']
  },
  {
    feature: 'Arabic engineering depth (Khaleeji + MSA)',
    brocode: 'In-region linguists, fine-tuned models',
    competitors: ['Limited regional NLP team', 'Some MSA, little Khaleeji', 'Generic models only']
  },
  {
    feature: 'Rate vs Big-4 published GCC card',
    brocode: '45-55%',
    competitors: ['100% (baseline)', '30-45%', '70-90%']
  },
  {
    feature: 'ISO 27001 + SOC 2 Type II + ISO 42001',
    brocode: true,
    competitors: [true, 'Partial', 'Partial']
  }
];

const faqItems: FAQItem[] = [
  {
    question: "I've never heard of Brocode. Have you delivered for a UAE enterprise of our profile?",
    answer:
      'We have shipped production systems for Tier-1 UAE banks, federal entities, a GCC telco, and ADNOC-tier energy operators. Client names sit under written consent only. We will share three reference contacts on the first call so you can verify the work, the rhythm, and the rate against your own peers.'
  },
  {
    question: 'Show me your engineers, not your partners. Can I see CVs?',
    answer:
      'Every senior engineer at Brocode has a public profile on our team page with photo, role, publications, GitHub or Hugging Face links, and certifications. We share named CVs and LinkedIn profiles for the specific pod proposed for your engagement before contract signature, not after.'
  },
  {
    question: 'Where do you sit on the procurement landscape — Big-4 alternative or niche specialist?',
    answer:
      'We are a regional specialist with depth across six service lines, audited to ISO 27001 and SOC 2 Type II, and priced at 45 to 55 percent of Big-4 published GCC rate cards. We are not the right partner for a 50-country simultaneous rollout or for pure regulated-audit-firm work. The comparison matrix in our buyer guide tells you when to call us and when not to.'
  },
  {
    question: 'What does a typical engagement look like and how long does it take?',
    answer:
      'A discovery is four weeks, fixed-scope and fixed-price. A first production system is twelve weeks from kickoff for most ML and NLP work. A regulator-aligned handover pack is part of the standard deliverable, not a separate workstream. We publish the full delivery rhythm in our buyer guide so you can map it onto your own steering committee cadence.'
  },
  {
    question: 'Are you happy to sit on-premise or in UAE-sovereign cloud?',
    answer:
      'Yes. Sovereign deployment is our default — G42 Cloud, Khazna, AWS UAE North, Azure UAE North, OCI Abu Dhabi, du Cloud and e& Cloud are all in our deployment library. Customer-managed keys via Thales or Entrust HSM is standard. We will publish the deployment pattern for your environment in the discovery phase.'
  }
];

const relatedLinks = [
  { label: 'Document intelligence', href: '/services/document-intelligence', description: 'Arabic OCR and contract extraction with a pre-contract benchmark on your data.' },
  { label: 'NLP and Arabic', href: '/services/natural-language-processing', description: 'Khaleeji and MSA NLP with AraBERT, CAMeLBERT, and Jais.' },
  { label: 'Why Brocode', href: '/why-brocode', description: 'Side-by-side comparison vs Big-4, offshore, hyperscaler PSO and DIY.' },
  { label: 'About Brocode', href: '/about', description: 'Founders, certifications, legal entity and corporate structure.' },
  { label: 'Banking and financial services', href: '/industries/banking-financial-services', description: 'CBUAE-supervised model risk files and fraud, AML, credit AI.' }
];

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-org-website"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/images/general/og-default.jpg`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: SITE.hq.line1,
                addressLocality: SITE.hq.city,
                addressCountry: 'AE'
              },
              sameAs: [SITE.social.linkedin, SITE.social.github, SITE.social.twitter]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: SITE.brand,
              url: SITE.url,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${SITE.url}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
              }
            }
          ])
        }}
      />

      {/* Bespoke bento-hero with GradientMesh */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <GradientMesh tone="midnight" />
        <div className="container-site relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5 text-white/70">AI engineering, headquartered in Abu Dhabi</p>
              <h1 className="text-balance text-display-2xl">
                Production AI for UAE enterprises.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                We build the AI systems that UAE banks, ministries, telcos, energy majors and large
                retailers actually put into production — staffed by named engineers in the UAE,
                priced in AED, and aligned to the regulators in the room.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Talk to an expert
                </MagneticButton>
                <MagneticButton href="#buyers-guide" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the buyer guide
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={PAGE_SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
                >
                  WhatsApp us
                </a>
              </div>
              <p className="mt-6 text-sm text-white/60">
                ISO 27001 · SOC 2 Type II · ISO 42001 · NVIDIA Inception Premier · AWS Advanced Tier · G42 Cloud Partner
              </p>
            </div>

            <div className="lg:col-span-6">
              <BentoGrid>
                <BentoCell span="lg" variant="brand">
                  <Link href="/services/document-intelligence" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Document intelligence</p>
                    <h2 className="mt-2 text-2xl font-semibold">Arabic OCR. 7-engine benchmark.</h2>
                    <p className="mt-3 text-sm text-white/85">
                      Field-level accuracy across ABBYY, Microsoft, Google, AWS — and us. Pre-contract free 500-document benchmark on your data.
                    </p>
                    <span className="link-arrow mt-4 inline-flex text-sm font-semibold text-white">Explore</span>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="dark">
                  <Link href="/services/natural-language-processing" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">NLP and Arabic</p>
                    <h2 className="mt-2 text-xl font-semibold">Khaleeji. Not just MSA.</h2>
                    <p className="mt-3 text-sm text-white/80">
                      AraBERT-v2, CAMeLBERT and Jais — fine-tuned on a Gulf-dialect annotation lab.
                    </p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="light">
                  <Link href="/services/deep-learning-solutions" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Deep learning</p>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900">DGX-scale.</h2>
                    <p className="mt-3 text-sm text-ink-700">
                      Seismic, medical imaging, defect detection — on-premise H100 access.
                    </p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="glass">
                  <Link href="/services/mlops-ai-infrastructure" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">MLOps</p>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900">1,247 req/min.</h2>
                    <p className="mt-3 text-sm text-ink-700">
                      Live serving with vLLM, Triton, Ray and MLflow. Reference architectures included.
                    </p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="dark">
                  <Link href="/services/self-hosted-llm-infrastructure" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Sovereign LLM</p>
                    <h2 className="mt-2 text-xl font-semibold">On-prem. HSM keys.</h2>
                    <p className="mt-3 text-sm text-white/80">
                      Customer-owned LLM appliance. 8 x H100 SXM5. 36-month TCO pack.
                    </p>
                  </Link>
                </BentoCell>
              </BentoGrid>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-y border-ink-100 bg-white py-16">
        <div className="container-site">
          <p className="eyebrow mb-8 text-center">A live view of what we ship</p>
          <ProofBand items={proofItems} />
          <p className="mt-10 text-center text-xs text-ink-500">
            Numbers refreshed quarterly with delivery-lead sign-off. Buyer-guide source benchmark: 38-enterprise UAE re-tender sample, 2024-2025.
          </p>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4">A different kind of AI partner</p>
              <h2 className="text-display-lg text-balance text-ink-900">
                Engineers, not slideware.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-600">
                Every engagement runs as a fixed-shape pod with named UAE-resident engineers, a
                written 12-week production path, and a regulator-aligned handover pack. The
                people you meet at the first call are the people who write your code.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="text-xl leading-relaxed text-ink-700 md:text-2xl md:leading-relaxed">
                Brocode Solutions is the UAE-headquartered AI software development firm that the
                region's enterprises call when the board mandate is real and the deadline is
                short. We sit in Abu Dhabi and Dubai, contract under UAE law, bill in AED, and
                deploy to whichever sovereign cloud, on-premise rack or hyperscaler tenancy your
                data residency posture requires. The partners you meet on the first call are
                principal engineers, not pre-sales — and they stay on the engagement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service bento routing */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Capability map"
            title="Eight service lines. One accountable engineering org."
            description="Each tile routes to a service page with the named engineers, the reference architecture, a pre-contract benchmark offer and the AED rate band."
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceTiles.map((s, i) => (
              <li key={s.href}>
                <Reveal delay={i * 0.03}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                  >
                    <h3 className="text-lg font-semibold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink-600">{s.angle}</p>
                    <p className="mt-4 text-xs font-semibold text-brand">{s.result}</p>
                    <span className="link-arrow mt-auto pt-5 text-sm font-semibold text-brand">See service</span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery model */}
      <section className="relative overflow-hidden bg-ink-900 py-22 text-white md:py-30">
        <Parallax speed={0.3} className="absolute inset-0 -z-10">
          <Image src="/images/general/datacenter.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/85 to-ink-900" />
        </Parallax>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="The Brocode delivery model"
              title="A fixed-shape pod. A 12-week path. A regulator-ready handover."
              description="Same model, same gates, same evidence — whether the work is Arabic OCR for a federal authority, a fraud model for a Tier-1 bank, or a deep-learning programme on the plant floor."
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              { n: '01', t: 'Weeks 1-4 · Discovery', d: 'Data feasibility, KPI sign-off, reference architecture, risk and compliance review. Fixed scope, fixed price, Go/No-Go gate at week four.' },
              { n: '02', t: 'Weeks 5-8 · Hardened build', d: 'Production engineering on day one. Two-week increments. Pair-programming with two of your engineers in the pod. No notebooks shipped.' },
              { n: '03', t: 'Weeks 9-12 · Regulator-ready evidence', d: 'Model card, datasheet, bias and fairness pack, security review, runbook and handover. Mapped to CBUAE, ISO 42001 or your specific controls framework.' },
              { n: '04', t: 'Run phase', d: 'Optional managed-operations agreement with SLAs, retraining cadence and a quarterly model-risk review. Your team in the driving seat from day one of week thirteen.' }
            ].map((p) => (
              <Reveal key={p.n}>
                <div className="flex items-start gap-6 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <span className="text-display-md text-brand">{p.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{p.t}</h3>
                    <p className="mt-2 text-white/80">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Sector depth that shortens every first conversation."
            description="We arrive knowing the constraints — the regulator, the source systems, the calendar, the language posture — and we structure the engagement around them."
          />
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind) => (
              <li key={ind.href}>
                <Link
                  href={ind.href}
                  className="flex h-full flex-col rounded-2xl border border-ink-100 bg-surface-muted p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                >
                  <h3 className="text-base font-semibold text-ink-900">{ind.name}</h3>
                  <span className="link-arrow mt-auto pt-5 text-sm font-semibold text-brand">Explore</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we compare */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Brocode vs Big-4, offshore and hyperscaler PSO."
            description="The procurement-committee version of the comparison — sourced cells, honest concessions, and a printable matrix in the buyer guide."
          />
          <div className="mt-10">
            <CompareTable
              brandLabel="Brocode"
              competitors={['Big-4 consultancy', 'Offshore dev shop', 'Hyperscaler PSO']}
              rows={compareRows}
            />
          </div>
          <p className="mt-6 text-sm text-ink-500">
            See the side-by-side on six axes including DIY on{' '}
            <Link href="/why-brocode" className="text-brand underline">/why-brocode</Link>.
          </p>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="buyers-guide" className="bg-white py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="The UAE Enterprise AI Buyer's Guide 2026"
            description="44 pages on how to choose between Big-4 consultancies, offshore dev shops, hyperscaler PSO and regional specialists — written by Brocode but vendor-agnostic in tone. Headline figure: the median cost of a vendor swap inside 24 months is AED 4.1M and 7.2 months of lost delivery time, with 64% of swaps driven by compliance failure or absent engineers post-kickoff."
            filePath="/downloads/uae-enterprise-ai-buyers-guide.pdf"
            ctaLabel="Email me the buyer guide"
            contents={[
              'Procurement reality in the GCC',
              'Sovereign deployment options',
              'Model risk and governance',
              '46-question vendor checklist',
              'Six-month implementation rhythm',
              'Reference architectures'
            ]}
          />
        </div>
      </section>

      {/* Client signal strip */}
      <section className="border-y border-ink-100 bg-surface-muted py-14">
        <div className="container-site">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
            Production AI delivered for
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4 text-center text-sm font-medium text-ink-600 md:grid-cols-3 lg:grid-cols-6">
            {['Tier-1 UAE bank', 'UAE federal entity', 'GCC telco', 'ADNOC-tier energy major', 'JCI-accredited hospital group', 'Family-office holding'].map((c) => (
              <li key={c} className="rounded-md border border-ink-100 bg-white px-4 py-3">
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-ink-500">
            Client names are published only under written consent. Reference contacts available on the first call.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Questions we hear on the first call"
              title="The procurement-committee version of the FAQ."
              description="These are the five questions our delivery leads field most often from CIO offices and procurement reviewers."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Talk to an expert"
              title="One short form. A senior engineer on the reply."
              description="No SDR triage layer. The form below routes to a delivery principal who responds within one business day with a named contact and a proposed shape of the engagement."
            />
            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <p><strong className="text-ink-900">Direct:</strong> <a href={`mailto:${SITE.email}`} className="text-brand underline">{SITE.email}</a></p>
              <p><strong className="text-ink-900">Phone:</strong> {SITE.phone}</p>
              <p><strong className="text-ink-900">Office:</strong> {SITE.hq.line1}, {SITE.hq.line2}</p>
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

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Talk to an expert" primaryHref="#contact-form" />
    </>
  );
}
