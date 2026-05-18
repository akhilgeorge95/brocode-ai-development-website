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

const PAGE_SLUG = 'oman-ai-development';
const PAGE_PATH = '/oman/ai-development-in-oman';
const PAGE_URL = `${SITE.url}${PAGE_PATH}`;

const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm exploring AI delivery partners for [organisation] in Oman. The first area we want to discuss is [document intelligence / Arabic NLP / chatbot / ML / deep learning / MLOps / generative AI / not sure yet]. Could we schedule a 30-minute call?";

export const metadata: Metadata = {
  title: 'AI Development Company in Oman | Brocode',
  description:
    "Brocode is a GCC AI development company delivering production AI for Omani enterprises — banks under CBO supervision, ministries aligned to the National AI Strategy and Vision 2040, PDO-ecosystem energy operators, healthcare and Duqm/Sohar/Salalah logistics programmes. Named engineers, PDPL-aligned sovereign deployment in-country, Arabic NLP depth in MSA and Omani dialect, OMR billing and a 12-week production path.",
  keywords: [
    'AI development company Oman',
    'AI development Oman',
    'artificial intelligence company Oman',
    'machine learning company Oman',
    'generative AI Oman',
    'AI consulting Oman',
    'enterprise AI Oman',
    'MLOps Oman',
    'Arabic NLP company Oman',
    'sovereign AI Oman',
    'PDPL compliant AI Oman',
    'Oman PDPL Royal Decree 6/2022 AI',
    'CBO model risk AI',
    'Oman cybersecurity AI',
    'MTCIT aligned AI Oman',
    'Vision 2040 AI Oman',
    'AI development partner Oman',
    'AI software development Oman',
    'deep learning company Oman',
    'LLM development Oman',
    'computer vision company Oman',
    'AI governance Oman',
    'AI partner Big-4 alternative Oman',
    'Oman National AI Strategy partner',
    'AI for PDO ecosystem',
    'AI for Duqm SEZ',
    'AI for Sohar Port',
    'AI for Salalah'
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-OM': PAGE_URL,
      'en-AE': PAGE_URL,
      'en-GB': PAGE_URL,
      'ar-OM': PAGE_URL,
      'x-default': PAGE_URL
    }
  },
  openGraph: {
    title: 'AI Development Company in Oman | Brocode',
    description:
      'GCC AI engineering firm delivering production AI to Omani enterprises. Named engineers, PDPL-aligned sovereign deployment in-country, Arabic NLP depth (MSA + Omani dialect), 12-week production path, ISO 27001 + SOC 2 Type II + ISO 42001.',
    url: PAGE_URL,
    locale: 'en_OM',
    alternateLocale: ['en_AE', 'en_GB', 'ar_OM'],
    images: ['/images/general/og-default.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Development Company in Oman | Brocode',
    description:
      'Production AI for Omani enterprises. Engineering depth on the ground in the Sultanate, not slideware.',
    images: ['/images/general/og-default.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Talk to an expert — Oman desk',
  subtitle:
    'One short qualification form. A senior engineer on our Oman delivery desk — not an SDR — responds within one business day with a named contact and a proposed shape for the engagement.',
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
        'Bank or financial services (CBO-supervised)',
        'Capital markets (CMA-supervised)',
        'Telecom (TRA / MTCIT-supervised)',
        'Government or public sector (MTCIT / National AI Strategy aligned)',
        'Energy or utilities (PDO / OQ / Energy Development Oman)',
        'Healthcare (MoH-supervised)',
        'Retail or consumer',
        'Logistics or ports (Duqm / Sohar / Salalah)',
        'Mining or fisheries',
        'Vision 2040 programme or government holding',
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
        '<OMR 50K',
        'OMR 50K to 200K',
        'OMR 200K to 500K',
        'OMR 500K to 1.5M',
        '>OMR 1.5M',
        'Not yet defined'
      ]
    },
    {
      name: 'dataResidency',
      label: 'Data residency requirement',
      type: 'select',
      options: [
        'Must stay in Oman (PDPL Royal Decree 6/2022)',
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
  { value: '120+', label: 'AI systems shipped to production across the GCC' },
  { value: '32', label: 'Regulated GCC enterprises served — incl. Omani banks, ministries, energy' },
  { value: '4.1m', label: 'Months median time-to-first-production-system' },
  { value: '99.95%', label: 'Average model-serving uptime' }
];

const serviceTiles = [
  {
    title: 'Document intelligence',
    href: '/services/document-intelligence',
    angle: 'Arabic OCR, KYC and contract extraction at Omani enterprise scale.',
    result: 'Pre-contract free 500-document benchmark on your data.'
  },
  {
    title: 'NLP and Arabic',
    href: '/services/natural-language-processing',
    angle: 'MSA and Omani-dialect NLP with AraBERT-v2, CAMeLBERT, Jais and ALLaM.',
    result: 'Open benchmark on eight models published quarterly.'
  },
  {
    title: 'Conversational AI',
    href: '/services/conversational-ai-chatbots',
    angle: 'Contact-centre assistants that survive Omani-dialect calls.',
    result: 'Contractual containment SLAs, not lab demos.'
  },
  {
    title: 'Machine learning development',
    href: '/services/machine-learning-development',
    angle: 'Models that pass CBO and MTCIT review and stay in production.',
    result: '12-week production path with named gates.'
  },
  {
    title: 'Deep learning',
    href: '/services/deep-learning-solutions',
    angle: 'Computer vision, time-series, and applied research at GPU scale.',
    result: 'On-premise DGX and H100 access in-country.'
  },
  {
    title: 'MLOps and infrastructure',
    href: '/services/mlops-ai-infrastructure',
    angle: 'The operating backbone that keeps Omani models earning their keep.',
    result: 'Reference architectures for Omantel, Ooredoo and in-country sovereign / hyperscaler regions.'
  },
  {
    title: 'Self-hosted LLM',
    href: '/services/self-hosted-llm-infrastructure',
    angle: 'Customer-owned LLM appliances with HSM-backed keys, hosted in Oman.',
    result: '36-month TCO pack and hardware BoM included.'
  },
  {
    title: 'Responsible AI and governance',
    href: '/services/responsible-ai-governance',
    angle: 'Regulator-grade evidence files for CBO, MTCIT, ISO 42001 and Oman PDPL.',
    result: 'Model cards, datasheets, bias packs and PDPL DPIA as standard.'
  }
];

const industries = [
  { name: 'Banking and financial services', href: '/industries/banking-financial-services' },
  { name: 'Government and public sector', href: '/industries/government-public-sector' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Energy and utilities', href: '/industries/energy-utilities' },
  { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain' }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Named engineers on every Oman engagement',
    brocode: true,
    competitors: ['Partners visible, engineers not', 'Offshore bench, no in-region residency', 'Global PSO bench, US-billed']
  },
  {
    feature: 'Time-to-first-production-system (median, Oman)',
    brocode: '4.1 months',
    competitors: ['9.7 months', '7.3 months', '6.9 months'],
    note: 'Source: 27-enterprise GCC shortlist benchmark, 2024-2025 (Oman sub-sample of 5).'
  },
  {
    feature: 'OMR billing and Oman-compatible agreement option',
    brocode: true,
    competitors: [true, 'Often signed via reseller', 'US or Ireland entity']
  },
  {
    feature: 'In-country and PDPL-aligned sovereign-cloud delivery',
    brocode: 'Default',
    competitors: ['Available, often costed-up', 'Limited', 'Single-cloud only']
  },
  {
    feature: 'Arabic engineering depth (MSA + Omani dialect)',
    brocode: 'In-region linguists, fine-tuned models, ALLaM-ready',
    competitors: ['Limited regional NLP team', 'Some MSA, little dialect', 'Generic models only']
  },
  {
    feature: 'Rate vs Big-4 published GCC card',
    brocode: '45-55%',
    competitors: ['100% (baseline)', '30-45%', '70-90%']
  },
  {
    feature: 'ISO 27001 + SOC 2 Type II + ISO 42001 + PDPL alignment',
    brocode: true,
    competitors: [true, 'Partial', 'Partial']
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'Do you sell any AI products, SaaS, or licensed models?',
    answer:
      'No. Brocode Solutions is a services firm. We do not sell a Brocode platform, a Brocode-branded model, an API subscription, or a SaaS tenancy. Every system we build for you uses open-source frameworks and portable commercial software you license directly from the vendor. The code, the models, the weights, and the infrastructure belong to you on creation — and the engineered handover to your team is part of the standard deliverable, not a separate workstream. If you ever need to walk away from us, the system keeps working.'
  },
  {
    question: 'Have you delivered for an Omani enterprise of our profile?',
    answer:
      'Yes. We have shipped production systems for CBO-supervised banks, ministerial-tier Omani entities, a PDO-ecosystem operator, and a Tier-1 Omani healthcare group. Client names sit under written consent only — common across the GCC. We share three reference contacts on the first call so you can verify the work, the rhythm, and the rate against your own peers.'
  },
  {
    question: 'Are your engineers on the ground in Oman when delivering in the Sultanate?',
    answer:
      'Every engagement has named senior engineers with public profiles — photo, role, publications, GitHub or Hugging Face links, and certifications. For Omani delivery we mobilise senior engineers into Muscat on rotation, supported from our Abu Dhabi HQ and Dubai delivery pod. Where a sponsor or regulator requires permanent in-country presence, we co-deliver with a vetted Oman-registered partner under a transparent flow-down. We share named CVs and LinkedIn profiles for the specific pod proposed for your engagement before contract signature, not after.'
  },
  {
    question: 'How do you handle Oman PDPL (Royal Decree 6/2022), CBO model risk and MTCIT alignment?',
    answer:
      'Sovereign deployment inside the Sultanate is our default — Omantel Cloud, Ooredoo Cloud and the in-country hyperscaler regions where available are all in our deployment library. Customer-managed keys via Thales or Entrust HSM is standard. Every engagement ships a PDPL Data Protection Impact Assessment aligned to Royal Decree 6/2022, a CBO-style model risk file where the entity is CBO-supervised, an Oman cybersecurity-framework controls mapping, and an MTCIT / National AI Strategy alignment cross-walk. We publish the deployment pattern for your environment in the discovery phase.'
  },
  {
    question: 'Where do you sit on the procurement landscape — Big-4 alternative or niche specialist?',
    answer:
      'We are a regional specialist with depth across eight service lines, audited to ISO 27001 and SOC 2 Type II, and priced at 45 to 55 percent of Big-4 published GCC rate cards. We are not the right partner for a 50-country simultaneous rollout or for pure regulated-audit-firm work. The comparison matrix in our buyer guide tells you when to call us and when not to.'
  },
  {
    question: 'What does a typical Omani engagement look like and how long does it take?',
    answer:
      'A discovery is four weeks, fixed-scope and fixed-price. A first production system is twelve weeks from kickoff for most ML and NLP work. A regulator-aligned handover pack — PDPL DPIA against Royal Decree 6/2022, model card, datasheet, Oman cybersecurity-framework mapping, CBO-style model risk file when applicable — is part of the standard deliverable, not a separate workstream. We publish the full delivery rhythm in our buyer guide so you can map it onto your own steering committee cadence.'
  }
];

const relatedLinks = [
  { label: 'Document intelligence', href: '/services/document-intelligence', description: 'Arabic OCR and contract extraction with a pre-contract benchmark on your data — Oman-deployable.' },
  { label: 'NLP and Arabic', href: '/services/natural-language-processing', description: 'MSA and Omani-dialect NLP with AraBERT, CAMeLBERT, Jais and ALLaM-ready stacks.' },
  { label: 'Why Brocode', href: '/why-brocode', description: 'Side-by-side comparison vs Big-4, offshore, hyperscaler PSO and DIY.' },
  { label: 'About Brocode', href: '/about', description: 'Founders, certifications, legal entity and corporate structure across the GCC.' },
  { label: 'Banking and financial services', href: '/industries/banking-financial-services', description: 'CBO model risk, AML, fraud and credit AI for Omani banks.' }
];

export default function OmanAIDevelopmentPage() {
  return (
    <>
      <Script
        id="ld-oman-page"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': ['Organization', 'ProfessionalService'],
              '@id': `${SITE.url}/#organization`,
              name: SITE.name,
              alternateName: ['Brocode AI', 'Brocode AI Development'],
              url: SITE.url,
              logo: `${SITE.url}/images/general/og-default.jpg`,
              image: `${SITE.url}/images/general/og-default.jpg`,
              email: SITE.email,
              telephone: SITE.phone,
              priceRange: 'OMR 50K - OMR 1.5M+',
              foundingDate: SITE.foundingDate,
              openingHours: SITE.openingHours,
              description:
                'AI development company serving Oman — production AI for CBO-supervised banks, MTCIT-aligned government entities, PDO-ecosystem energy operators, Omani healthcare and Vision 2040 programmes including Duqm, Sohar and Salalah. Named engineers, PDPL-aligned data residency, MSA and Omani-dialect Arabic NLP depth, OMR billing, 12-week production path.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: `${SITE.hq.line1}, ${SITE.hq.line2}`,
                addressLocality: SITE.hq.city,
                addressRegion: SITE.hq.region,
                addressCountry: SITE.hq.countryCode
              },
              areaServed: [
                { '@type': 'Country', name: 'Oman', identifier: 'OM' },
                { '@type': 'Country', name: 'United Arab Emirates', identifier: 'AE' }
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'sales',
                  telephone: SITE.phone,
                  email: SITE.email,
                  areaServed: ['OM', 'AE', 'SA', 'QA', 'BH', 'KW'],
                  availableLanguage: ['English', 'Arabic']
                }
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Brocode AI Services — Oman',
                itemListElement: [
                  'Machine Learning Development',
                  'Deep Learning Solutions',
                  'Natural Language Processing',
                  'Computer Vision',
                  'Generative AI Development',
                  'LLM Fine-Tuning',
                  'Conversational AI & Chatbots',
                  'AI Agents & Agentic Workflows',
                  'Predictive Analytics',
                  'Recommendation Systems',
                  'Speech Recognition & Voice AI',
                  'Document Intelligence',
                  'MLOps & AI Infrastructure',
                  'Self-Hosted LLM Infrastructure',
                  'AI Consulting & Strategy',
                  'AI Integration Services',
                  'Intelligent Process Automation',
                  'Data Engineering for AI',
                  'AI Model Optimization',
                  'Responsible AI & Governance'
                ].map((name, i) => ({
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name, areaServed: 'Oman' },
                  position: i + 1
                }))
              },
              sameAs: [SITE.social.linkedin, SITE.social.github, SITE.social.twitter, SITE.social.youtube]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': `${PAGE_URL}#webpage`,
              url: PAGE_URL,
              name: 'AI Development Company in Oman | Brocode',
              inLanguage: ['en-OM', 'en-AE', 'ar-OM'],
              isPartOf: { '@id': `${SITE.url}/#website` },
              about: {
                '@type': 'Thing',
                name: 'AI development services for Oman enterprises'
              },
              primaryImageOfPage: `${SITE.url}/images/general/og-default.jpg`
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'AI Development',
              name: 'AI Development in Oman',
              provider: { '@id': `${SITE.url}/#organization` },
              areaServed: {
                '@type': 'Country',
                name: 'Oman',
                identifier: 'OM'
              },
              audience: {
                '@type': 'BusinessAudience',
                name: 'Omani enterprises — banking, government, healthcare, energy, logistics and Vision 2040 programmes'
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'OMR',
                priceRange: 'OMR 50K - OMR 1.5M+',
                availability: 'https://schema.org/InStock'
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
                { '@type': 'ListItem', position: 2, name: 'Oman', item: `${SITE.url}/oman` },
                { '@type': 'ListItem', position: 3, name: 'AI Development in Oman', item: PAGE_URL }
              ]
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

      {/* Bespoke bento-hero with GradientMesh */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <GradientMesh tone="midnight" />
        <div className="container-site relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5 text-white/70">AI engineering for the Sultanate of Oman</p>
              <h1 className="text-balance text-display-2xl">
                Production AI for Oman.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                We build the AI systems that Omani banks, ministries, telecom operators, PDO-ecosystem
                energy majors, healthcare groups and Vision 2040 programmes actually put into
                production — staffed by named senior engineers, priced in OMR, and aligned to CBO,
                MTCIT, the National AI Strategy and Oman PDPL (Royal Decree 6/2022) from day one.
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
                ISO 27001 · SOC 2 Type II · ISO 42001 · Oman PDPL-aligned · NVIDIA Inception Premier · AWS Advanced Tier · Microsoft AI Partner
              </p>
            </div>

            <div className="lg:col-span-6">
              <BentoGrid>
                <BentoCell span="lg" variant="brand">
                  <Link href="/services/document-intelligence" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Document intelligence</p>
                    <h2 className="mt-2 text-2xl font-semibold">Arabic OCR. 7-engine benchmark.</h2>
                    <p className="mt-3 text-sm text-white/85">
                      Field-level accuracy across ABBYY, Microsoft, Google, AWS — and us. Pre-contract free
                      500-document benchmark on your data, run inside Oman.
                    </p>
                    <span className="link-arrow mt-4 inline-flex text-sm font-semibold text-white">Explore</span>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="dark">
                  <Link href="/services/natural-language-processing" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">NLP and Arabic</p>
                    <h2 className="mt-2 text-xl font-semibold">MSA and Omani dialect.</h2>
                    <p className="mt-3 text-sm text-white/80">
                      AraBERT-v2, CAMeLBERT, Jais and ALLaM — fine-tuned on an Omani-dialect annotation lab.
                    </p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="light">
                  <Link href="/services/deep-learning-solutions" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Deep learning</p>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900">DGX-scale.</h2>
                    <p className="mt-3 text-sm text-ink-700">
                      Seismic, medical imaging, defect detection — H100 access in-country.
                    </p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="glass">
                  <Link href="/services/mlops-ai-infrastructure" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">MLOps</p>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900">1,247 req/min.</h2>
                    <p className="mt-3 text-sm text-ink-700">
                      Live serving with vLLM, Triton, Ray and MLflow on Omantel, Ooredoo and in-country hyperscaler regions.
                    </p>
                  </Link>
                </BentoCell>
                <BentoCell span="md" variant="dark">
                  <Link href="/services/self-hosted-llm-infrastructure" className="block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Sovereign LLM</p>
                    <h2 className="mt-2 text-xl font-semibold">In-Oman. HSM keys.</h2>
                    <p className="mt-3 text-sm text-white/80">
                      Customer-owned LLM appliance. 8 x H100 SXM5. PDPL-aligned. 36-month TCO pack.
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
            Numbers refreshed quarterly with delivery-lead sign-off. Buyer-guide source benchmark: 38-enterprise GCC re-tender sample, 2024-2025 (Oman sub-sample of 7).
          </p>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4">A different kind of AI partner for the Sultanate</p>
              <h2 className="text-display-lg text-balance text-ink-900">
                A services firm, not a product company.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-600">
                We do not sell AI products, SaaS, licensed models, or branded platforms. We sell senior
                engineering time. Every engagement in Oman runs as a fixed-shape pod with named engineers,
                a written 12-week production path, and a PDPL- and CBO-aligned handover pack — and at
                the end, the system belongs to you.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="text-xl leading-relaxed text-ink-700 md:text-2xl md:leading-relaxed">
                Brocode Solutions is the GCC-headquartered AI software development firm that Omani
                enterprises call when the board mandate is real and the deadline is short. We mobilise
                named senior engineers into the Sultanate, sign under an Oman-compatible agreement where
                required, bill in OMR, and deploy to whichever in-country sovereign cloud, on-premise
                rack or hyperscaler in-country region your data residency posture requires. The partners
                you meet on the first call are principal engineers, not pre-sales — and the artefact at
                the end of every engagement is a running system you own outright, not a subscription to
                a Brocode service.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { t: 'We build', d: 'Bespoke AI systems for your data, your stack, your regulator.' },
                  { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation.' },
                  { t: 'We hand over', d: 'Engineered transition to your Omani team. No vendor lock-in.' }
                ].map((card) => (
                  <li key={card.t} className="rounded-2xl border border-ink-100 bg-surface-muted p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{card.t}</p>
                    <p className="mt-2 text-sm text-ink-700">{card.d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service bento routing */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Capability map"
            title="Eight service lines. One accountable engineering org — delivering across Oman."
            description="Each tile routes to a service page with the named engineers, the reference architecture, a pre-contract benchmark offer, and the OMR rate band for Omani delivery."
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
              eyebrow="The Brocode delivery model in Oman"
              title="A fixed-shape pod. A 12-week path. A PDPL- and CBO-ready handover."
              description="Same model, same gates, same evidence — whether the work is Arabic OCR for an Omani ministry, a fraud model for a CBO-supervised bank, or a deep-learning programme on a PDO-ecosystem asset."
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              { n: '01', t: 'Weeks 1-4 · Discovery', d: 'Data feasibility, KPI sign-off, reference architecture, PDPL DPIA aligned to Royal Decree 6/2022, Oman cybersecurity-framework mapping and CBO / MTCIT review. Fixed scope, fixed price, Go/No-Go gate at week four.' },
              { n: '02', t: 'Weeks 5-8 · Hardened build', d: 'Production engineering on day one. Two-week increments. Pair-programming with two of your engineers in the pod. No notebooks shipped.' },
              { n: '03', t: 'Weeks 9-12 · Regulator-ready evidence', d: 'PDPL DPIA, model card, datasheet, bias and fairness pack, security review, Oman cybersecurity-framework control mapping, CBO-style model risk file when applicable, runbook and handover.' },
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
            eyebrow="Omani sectors we serve"
            title="Sector depth that shortens every first conversation."
            description="We arrive knowing the constraints — the regulator (CBO, CMA, TRA, MTCIT, MoH), the source systems, the calendar, the Vision 2040 alignment and the Arabic-language posture — and we structure the engagement around them."
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
            eyebrow="How we compare in Oman"
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
            title="The GCC Enterprise AI Buyer's Guide 2026 — Oman edition"
            description="44 pages on how to choose between Big-4 consultancies, offshore dev shops, hyperscaler PSO and regional specialists for Omani delivery — written by Brocode but vendor-agnostic in tone. Headline figure: the median cost of a vendor swap inside 24 months is OMR 430K and 7.2 months of lost delivery time, with 64% of swaps driven by compliance failure or absent engineers post-kickoff."
            filePath="/downloads/uae-enterprise-ai-buyers-guide.pdf"
            ctaLabel="Email me the buyer guide"
            contents={[
              'Procurement reality in Oman',
              'In-country and PDPL-aligned deployment options',
              'CBO, MTCIT and Oman cybersecurity-framework model risk and governance',
              '46-question vendor checklist',
              'Six-month implementation rhythm',
              'Reference architectures for Omantel, Ooredoo and in-country hyperscaler regions'
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
            {['CBO-supervised Omani bank', 'Omani ministerial entity', 'Omani telecom operator', 'PDO-ecosystem operator', 'Tier-1 Omani hospital group', 'Family-office holding'].map((c) => (
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
              eyebrow="Questions we hear from Omani buyers"
              title="The procurement-committee version of the FAQ."
              description="These are the six questions our delivery leads field most often from Omani CIO offices, CBO-regulated risk teams, and Omani procurement reviewers."
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
              eyebrow="Talk to an expert — Oman desk"
              title="One short form. A senior engineer on the reply."
              description="No SDR triage layer. The form below routes to the delivery principal covering Omani accounts, who responds within one business day with a named contact and a proposed shape of the engagement."
            />
            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <p><strong className="text-ink-900">Direct:</strong> <a href={`mailto:${SITE.email}`} className="text-brand underline">{SITE.email}</a></p>
              <p><strong className="text-ink-900">Phone:</strong> {SITE.phone}</p>
              <p><strong className="text-ink-900">GCC HQ:</strong> {SITE.hq.line1}, {SITE.hq.line2}, {SITE.hq.city}</p>
              <p><strong className="text-ink-900">Oman delivery:</strong> On-rotation engineering pods into the Sultanate</p>
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
