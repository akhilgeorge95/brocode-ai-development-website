import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'government-public-sector';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm with [entity name] and we're scoping an AI initiative aligned to our 2031 mandate. We need a sovereign deployment and a tender-ready partner. Could we arrange a 30-minute call with your public-sector lead?";

export const metadata: Metadata = {
  title: 'AI for UAE Federal & Emirate Entities — Sovereign, Arabic-first, Tender-ready',
  description:
    'A UAE-resident AI delivery partner for federal ministries and emirate authorities. Sovereign deployment on G42 or on-premise, Arabic-first model stack, and tender response packs aligned to Vision 2031.',
  alternates: { canonical: 'https://www.brocode.ae/industries/government-public-sector' },
  openGraph: {
    title: 'AI for UAE Federal & Emirate Entities',
    description:
      'Sovereign, Arabic-first AI delivery for UAE federal ministries and emirate authorities — Vision 2031-aligned.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/government-public-sector'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for UAE Federal & Emirate Entities',
    description: 'Sovereign deployment, Arabic-first models, tender-ready documentation.'
  }
};

const faqItems: FAQItem[] = [
  {
    question: 'Do your engineers hold UAE security clearance, and can they work inside our data perimeter?',
    answer:
      'Yes. Our public-sector delivery cell is UAE-resident, with engineers cleared to work on-site inside federal and emirate entities. Where the entity operates a tiered classification regime (Public / Internal / Restricted / Confidential / Top Secret per the UAE Information Assurance taxonomy), we map roles to clearance levels in the SoW. For Restricted and Confidential workloads, all artefacts stay inside the entity\'s perimeter and our engineers operate through the entity\'s VDI or on-site workstation.'
  },
  {
    question: 'Do you sub-contract delivery? Who actually writes the code?',
    answer:
      'No offshore sub-contracting. The engineers named on the SoW are the engineers who deliver. We disclose the full delivery team, their location, and their seniority before contract signature. Where a Big-4 bid would route delivery to an offshore SI, we deliver from Abu Dhabi with a published In-Country Value contribution per engagement.'
  },
  {
    question: 'Can you respond to our RFP format and provide ICV and NESA documentation?',
    answer:
      'Yes. We ship a tender response pack within five working days of an RFP release: technical compliance matrix mapped to your evaluation criteria, ICV statement, ISO 27001 / ISO 27017 / ISO 27018 / SOC 2 Type II / CSA STAR certificates, NESA-aligned control statement, MoIAT ICV scoring evidence, and sample SoW. Our contracting templates align to FAHR / MoF procurement frameworks.'
  },
  {
    question: 'Where does inference run, and how do you satisfy a National Cybersecurity Council review?',
    answer:
      'Three reference architectures are pre-mapped to TDRA controls: an on-premise Kubernetes appliance inside the entity\'s data centre with customer-managed keys; G42 Cloud (UAE-resident) with documented data-residency evidence; and Khazna Data Centres for hybrid deployments. No telemetry leaves the appliance without explicit configuration. Each pattern ships with a control mapping document the Cybersecurity Council reviewer can read directly.'
  },
  {
    question: 'How do you handle Khaleeji dialect and Arabic-first user experience?',
    answer:
      'Our Arabic stack is fine-tuned Jais and AraBERT-v2 with a Khaleeji dialect head, plus an in-house Arabic OCR pipeline (Surya + PaddleOCR-Arabic) for archive and correspondence work. Every citizen-facing component ships in Arabic-right and English-left, validated by native Khaleeji speakers on the team. We do not bolt Arabic on at the end.'
  },
  {
    question: 'What does the five-week Discovery-to-Working-Pilot engagement deliver?',
    answer:
      'A deployable artefact running inside the entity\'s own environment, not a strategy deck. Week one is data and policy discovery; weeks two and three are model and integration build; weeks four and five are hardening, TDRA control mapping, and pilot user acceptance with named entity stakeholders. The artefact is yours to keep regardless of whether we proceed to a production engagement.'
  },
  {
    question: 'What happens after go-live? Do you stay on, or do we own it?',
    answer:
      'Both. We offer a managed-operations option with SLA-backed monitoring, retraining, and quarterly capability planning; we also offer a clean handover with pair-programming and runbook delivery so your team owns the system day one. Most entities pick a hybrid — Brocode runs months one through six while your team builds capability, then you take operational ownership with us on standby.'
  },
  {
    question: 'How do you avoid the data-residency review failure mode that has stalled other vendors?',
    answer:
      'We design for residency from the SoW, not after the technical evaluation. Every reference architecture has a documented control mapping to TDRA, NESA / Information Assurance, and the National Cybersecurity Council expectations for the data class. Our procurement playbook includes a worked-example scoring matrix for the sovereignty review — the same one tender committees use.'
  }
];

const compareRows: CompareRow[] = [
  { feature: 'UAE-resident delivery team named on SoW', brocode: true, competitors: [false, 'Partial', false, true] },
  { feature: 'Sovereign deployment (G42 / Khazna / on-prem)', brocode: true, competitors: [false, true, false, true] },
  { feature: 'Arabic-first model stack (Jais, AraBERT-v2, Khaleeji head)', brocode: true, competitors: [false, false, false, 'Partial'] },
  { feature: 'Production code, not advisory deliverable', brocode: true, competitors: [false, true, true, true] },
  { feature: 'No sub-contracting to offshore SI', brocode: true, competitors: [false, 'Partial', false, true] },
  { feature: 'Tender response pack in 5 working days', brocode: true, competitors: [false, false, false, false] },
  { feature: 'Independent of any sovereign holding group', brocode: true, competitors: [true, false, true, true] },
  { feature: 'Customer-managed keys, no telemetry egress', brocode: true, competitors: [false, 'Partial', false, true] },
  { feature: '5-week Discovery-to-Working-Pilot', brocode: true, competitors: [false, false, false, false] }
];

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a sovereign AI architecture review with our public-sector lead',
  subtitle:
    'A senior engineer who has shipped inside UAE federal and emirate entities responds within one business day with a shape, a team, and a first conversation.',
  ctaLabel: 'Request the review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'entityType',
      label: 'Entity type',
      type: 'select',
      required: true,
      options: ['Federal ministry', 'Federal authority', 'Emirate-level entity', 'Regulator', 'GCC government', 'Other']
    },
    {
      name: 'dataClassification',
      label: 'Data sensitivity classification (UAE IA taxonomy)',
      type: 'select',
      required: true,
      options: ['Public', 'Internal', 'Restricted', 'Confidential', 'Top Secret']
    },
    {
      name: 'mandateTimeline',
      label: 'Mandate timeline',
      type: 'select',
      required: true,
      options: ['< 6 months', '6–12 months', '12–24 months', '2031-aligned multi-year']
    },
    {
      name: 'deployment',
      label: 'Deployment preference',
      type: 'select',
      options: ['On-premise appliance', 'G42 Cloud', 'Khazna', 'Sovereign hybrid', 'Decision pending']
    },
    {
      name: 'procurement',
      label: 'Procurement route',
      type: 'select',
      options: ['Direct award threshold', 'Limited tender', 'Open tender', 'Framework agreement']
    },
    {
      name: 'useCase',
      label: 'Primary use case',
      type: 'multiselect',
      options: [
        'Citizen services chatbot',
        'Document & archive intelligence',
        'Fraud & risk',
        'Predictive operations',
        'Arabic generative AI',
        'Other'
      ]
    }
  ]
};

const useCases = [
  {
    title: 'Arabic correspondence intelligence',
    body: 'Classify, route, and summarise incoming letters and emails in MSA and Khaleeji. Federal reference: 1.2 M letters processed at 96.4 % field-level accuracy.',
    span: 'lg' as const,
    metric: '96.4 % accuracy'
  },
  {
    title: 'Citizen-services chatbot',
    body: 'Bilingual TAMM-style assistant deflecting tier-one queries before the contact centre. Emirate reference: 180 K monthly conversations.',
    span: 'md' as const,
    metric: '180K / month'
  },
  {
    title: 'Court & archive digitisation',
    body: 'Surya + PaddleOCR-Arabic on legacy handwritten and typed corpora, with redaction and audit trail.',
    span: 'md' as const
  },
  {
    title: 'Eligibility & routing engines',
    body: 'Pre-filled applications from authoritative federal sources (UAE Pass, Government Service Bus) with full provenance.',
    span: 'md' as const
  },
  {
    title: 'Predictive inspection routing',
    body: 'Risk-scored inspection schedules for licences, premises and food-safety teams, with calibration against historical outcomes.',
    span: 'md' as const
  },
  {
    title: 'Federal performance dashboards',
    body: 'Cabinet-grade KPI dashboards aligned to the federal performance framework, with explainability per measure.',
    span: 'md' as const
  },
  {
    title: 'Sovereign Arabic generative AI',
    body: 'Self-hosted Jais and AraBERT-v2 deployments with retrieval over your policy library — answers grounded in the entity\'s own documents.',
    span: 'md' as const
  },
  {
    title: 'Computer vision for public space',
    body: 'Plate recognition, crowd flow, and infrastructure monitoring on edge appliances; no biometric data leaves the entity.',
    span: 'md' as const
  },
  {
    title: 'Fraud and revenue assurance',
    body: 'Entity-resolution graphs and anomaly detection on licensing, fines, and benefits — calibrated against the inspector workforce.',
    span: 'md' as const
  }
];

const visionPillars = [
  { title: 'AI in education', body: 'Curriculum-aligned content generation and adaptive learning aligned to ADEK and MoE standards.' },
  { title: 'AI in government services', body: 'TAMM / Dubai Now / UAE Pass integration patterns with eligibility, routing and bilingual citizen agents.' },
  { title: 'AI in community', body: 'Predictive social-support routing and Arabic-first contact channels for residents and businesses.' },
  { title: 'AI in healthcare', body: 'Imaging triage and clinical NLP integrated with Malaffi / NABIDH where the entity is a payer or regulator.' },
  { title: 'AI in transport & logistics', body: 'Vision, scheduling and demand models for RTA, ICP, FAIC and federal customs flows.' },
  { title: 'AI in energy & resources', body: 'Sovereign forecasting and asset-health models for federal utility holdings.' }
];

const relatedItems = [
  { label: 'Document Intelligence', href: '/services/document-intelligence', description: 'The dominant first project inside federal entities — Arabic OCR on legacy correspondence and archives.' },
  { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Jais, AraBERT-v2, Khaleeji dialect handling for citizen channels.' },
  { label: 'Self-hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Sovereign LLM appliances on G42 Cloud, Khazna, or on-premise.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The long-term operating model for production AI inside a public-sector entity.' },
  { label: 'Certifications & Compliance', href: '/security-compliance', description: 'ISO 27001, SOC 2 Type II, CSA STAR, NESA control statements, ICV evidence.' }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI consulting and delivery for UAE federal and emirate entities',
  provider: {
    '@type': 'Organization',
    name: 'Brocode Solutions',
    url: 'https://www.brocode.ae'
  },
  areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Oman'],
  audience: {
    '@type': 'Audience',
    audienceType: 'Government and public-sector entities (UAE federal ministries, emirate authorities, regulators)'
  },
  description:
    'Sovereign, Arabic-first AI delivery for UAE federal ministries and emirate authorities, with tender-ready documentation aligned to Vision 2031 and the National AI Strategy.'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer }
  }))
};

export default function GovernmentPublicSectorPage() {
  return (
    <>
      <Script
        id="ld-service-government-public-sector"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="ld-faq-government-public-sector"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero — bespoke navy + gold sovereign hero */}
      <section className="relative isolate overflow-hidden bg-[#0a1429] text-white">
        <GradientMesh tone="midnight" className="opacity-60" />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/industries/government-public-sector.jpg"
            alt="UAE government district at dusk with administrative buildings under a navy sky"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1429] via-[#0a1429]/85 to-[#0a1429]" />
        </div>

        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Government & Public Sector' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-eyebrow uppercase tracking-[0.18em] text-amber-300">
                Public-sector AI · UAE federal &amp; emirate
              </p>
              <h1 className="mt-5 text-balance text-display-xl">
                A UAE-resident AI delivery partner that ships production systems inside federal and emirate entities.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                Sovereign deployment on G42 Cloud, Khazna, or an on-premise appliance. Arabic-first model stack
                fine-tuned for Khaleeji dialect. Tender response packs ready in five working days. A track record on
                Vision 2031-aligned mandates that names engineers, not sub-contractors.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#quote-form" size="lg" event="quote_open" variant="primary">
                  Request a sovereign architecture review
                </MagneticButton>
                <MagneticButton
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  size="lg"
                  variant="whatsapp"
                  event="whatsapp_hero"
                >
                  WhatsApp our public-sector lead
                </MagneticButton>
              </div>

              <p className="mt-6 text-sm text-white/55">
                Sovereign deployment. Arabic-first. Tender-ready.
              </p>
            </div>

            <div className="lg:col-span-5">
              <GlassCard tone="dark" padding="lg" className="border-white/15 bg-white/[0.04]">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Citizen services console — live
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-right" dir="rtl">
                    <p className="text-[10px] uppercase tracking-wider text-white/50">قضية جديدة</p>
                    <p className="mt-1 font-semibold text-white">طلب رخصة تجارية</p>
                    <p className="mt-2 text-[11px] text-white/60">تم التصنيف تلقائياً</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-left">
                    <p className="text-[10px] uppercase tracking-wider text-white/50">New case</p>
                    <p className="mt-1 font-semibold text-white">Trade licence renewal</p>
                    <p className="mt-2 text-[11px] text-white/60">Auto-classified</p>
                  </div>
                </div>
                <div className="mt-3 space-y-2 text-xs text-white/70">
                  <div className="flex justify-between rounded-md bg-white/[0.03] px-3 py-2">
                    <span>Received</span>
                    <span className="text-emerald-300">14:32:08</span>
                  </div>
                  <div className="flex justify-between rounded-md bg-white/[0.05] px-3 py-2">
                    <span>Auto-classified</span>
                    <span className="text-emerald-300">14:32:09</span>
                  </div>
                  <div className="flex justify-between rounded-md border border-amber-300/30 bg-amber-300/10 px-3 py-2">
                    <span className="text-amber-200">Routed to Economic Department</span>
                    <span className="text-amber-200">14:32:11</span>
                  </div>
                </div>
                <p className="mt-4 border-t border-white/10 pt-3 text-[11px] text-white/50">
                  Model: jais-13b-chat-v2 · Confidence 0.94 · Inference runs in entity DC
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-y border-ink-100 bg-white py-14">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '12+', label: 'UAE public-sector engagements' },
              { value: '1.2M', label: 'Arabic letters processed (federal reference)' },
              { value: '96.4%', label: 'Field-level accuracy on bilingual correspondence' },
              { value: '5 days', label: 'Tender response pack delivered' }
            ]}
          />
        </div>
      </section>

      {/* Problem & stakes — why public-sector AI fails */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="The painful problem"
            title="Your 2031 milestone is 14 months away. The last adviser shipped a deck."
            description="The Cabinet-approved KPI sits in the federal performance dashboard with the director's name on it. The approved supplier list has Big-4 firms that sub-contract delivery and hyperscalers whose data-residency story does not survive a National Cybersecurity Council review. Meanwhile, residents expect TAMM-grade convenience and the undersecretary has committed a public number."
          />

          <BentoGrid className="mt-12">
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Failure mode 1</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Sovereignty review</h3>
              <p className="mt-2 text-ink-600">
                62 % of failed UAE government AI tenders fail at the sovereignty review, not the technical scoring.
                Hyperscaler shared-responsibility models are routinely rejected for Restricted and Confidential data.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Failure mode 2</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Arabic accuracy gap</h3>
              <p className="mt-2 text-ink-600">
                Off-the-shelf models drop a measurable accuracy band on Khaleeji dialect and Arabic handwriting.
                Citizen-facing services rarely tolerate that gap.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Failure mode 3</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Procurement misfit</h3>
              <p className="mt-2 text-ink-600">
                Vendor scoring matrices reward production references, ICV statements and NESA conformance. Strategy
                decks do not score. A tender re-issue costs 4–6 months and triggers an internal audit.
              </p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Use cases — bento grid of nine concrete plays */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case grid"
            title="Nine concrete plays we have shipped inside UAE entities."
            description="The unglamorous ones move the needle. Arabic correspondence, eligibility routing, archive intelligence — accurate, explainable, integrated with the rails residents already trust."
          />
          <BentoGrid className="mt-12">
            {useCases.map((u) => (
              <BentoCell key={u.title} span={u.span} variant="light">
                <h3 className="text-lg font-semibold text-ink-900">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{u.body}</p>
                {u.metric && (
                  <p className="mt-4 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {u.metric}
                  </p>
                )}
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Mechanism — Arabic-first stack + sovereign architectures */}
      <section className="relative overflow-hidden bg-[#0a1429] py-22 text-white md:py-30">
        <GradientMesh tone="midnight" className="opacity-40" />
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="The unique mechanism"
              title="Sovereign by default. Arabic by default. Tender-ready by default."
              description="Three reference architectures, an Arabic-first model stack, and a tender response pack that arrives in five working days."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <GlassCard tone="dark" className="border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Architecture A</p>
                <h3 className="mt-2 text-lg font-semibold text-white">On-premise Kubernetes appliance</h3>
                <p className="mt-2 text-sm text-white/70">
                  Customer-managed keys, no telemetry egress, TDRA control mapping per module. Sized for entity DCs.
                </p>
              </GlassCard>
              <GlassCard tone="dark" className="border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Architecture B</p>
                <h3 className="mt-2 text-lg font-semibold text-white">G42 Cloud (UAE-resident)</h3>
                <p className="mt-2 text-sm text-white/70">
                  Sovereign UAE region, partner-neutral. Brocode runs on G42 without being part of the holding group.
                </p>
              </GlassCard>
              <GlassCard tone="dark" className="border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Architecture C</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Khazna hybrid</h3>
                <p className="mt-2 text-sm text-white/70">
                  Khazna Data Centres for hybrid patterns; ideal where Restricted data sits on-prem and Internal data
                  flows through a sovereign edge.
                </p>
              </GlassCard>
              <GlassCard tone="dark" className="border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Arabic stack</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Jais · AraBERT-v2 · Khaleeji head</h3>
                <p className="mt-2 text-sm text-white/70">
                  In-house OCR pipeline on Surya + PaddleOCR-Arabic. Fine-tuned for federal correspondence and
                  citizen-channel queries.
                </p>
              </GlassCard>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-300/30 bg-amber-300/[0.06] p-6 text-sm text-white/80">
              <p className="font-semibold text-amber-200">Reference architectures pre-mapped to</p>
              <p className="mt-2">
                TAMM · Dubai Now · UAE Pass · Government Service Bus · Federal Performance Framework · Cabinet
                dashboards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2031 alignment block */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Vision 2031 alignment"
            title="Mapped to the National AI Strategy pillars."
            description="Every engagement is positioned against a federal performance KPI before delivery starts. The director's milestone, not a generic strategy deck."
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visionPillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.04}>
                  <article className="card h-full">
                    <h3 className="text-base font-semibold text-ink-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-600">{p.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Regulator / standards block */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Regulator &amp; standards"
              title="Designed for the reviewers in the room."
              description="TDRA controls. NESA / Information Assurance. National Cybersecurity Council. UAE Personal Data Protection Law. We bring the documentation; the reviewer reads it without translation."
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">TDRA &amp; NCC</p>
              <p className="mt-2 text-sm text-ink-700">
                Each reference architecture ships with a TDRA control mapping. Restricted and Confidential workloads
                clear NESA review under documented appliance controls; customer-managed keys are non-negotiable.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">UAE Information Assurance</p>
              <p className="mt-2 text-sm text-ink-700">
                Engagement roles are mapped to clearance levels in the SoW. All artefacts for Restricted and
                Confidential data stay inside the entity perimeter; access is enforced through the entity VDI.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">UAE PDPL &amp; sovereign data</p>
              <p className="mt-2 text-sm text-ink-700">
                Personal data residency, consent handling, and retention align to the Personal Data Protection Law
                and any emirate-level overlay. Cross-border transfer is the exception, never the default.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">ICV &amp; MoIAT</p>
              <p className="mt-2 text-sm text-ink-700">
                Each engagement publishes its In-Country Value contribution: UAE-resident delivery, Emirati hires on
                the engagement team, and on-shore data labelling. MoIAT-aligned scoring evidence is part of the
                tender pack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study stubs */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference engagements"
            title="Two anonymised outcomes a reviewer can call."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Federal entity · Arabic correspondence</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink-900">
                  1.2 M Arabic letters classified at 96.4 % field-level accuracy
                </h3>
                <p className="mt-4 text-ink-600">
                  Three-year backlog ingested. Surya + PaddleOCR-Arabic on legacy attachments, AraBERT-v2 routing
                  head, full audit trail. Customer reachable under NDA. Replaced a Big-4 strategy programme that had
                  produced two pilots and no production system in fourteen months.
                </p>
                <p className="mt-4 text-sm text-ink-500">Sovereign deployment · On-premise appliance · NESA-aligned</p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Emirate-level entity · Citizen channel</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink-900">
                  180 K monthly conversations in MSA &amp; Khaleeji, deflection above tier-one threshold
                </h3>
                <p className="mt-4 text-ink-600">
                  Bilingual citizen-services chatbot grounded in the entity policy library. Khaleeji-dialect head
                  validated by native speakers. CSAT in the high-eighties, escalation paths to human agents preserved
                  for sensitive cases.
                </p>
                <p className="mt-4 text-sm text-ink-500">Sovereign deployment · G42 Cloud · UAE Pass integrated</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Differentiation"
            title="How Brocode compares to the four archetypes on your approved-supplier list."
            description="The lead magnet includes a worked-example scoring matrix that walks a tender committee through this comparison."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['Big-4 (EY / PwC / Deloitte / Accenture)', 'Sovereign tech holding', 'Hyperscaler public-sector', 'In-house build']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="AI Procurement Playbook for UAE Federal Entities"
            description="A 28-page tender-ready reference: the technical evaluation criteria that pass a National Cybersecurity Council review, the ICV / ESR documentation pack, the sovereign-deployment reference architecture, and a worked-example scoring matrix for evaluating five typical AI vendor archetypes. Headline figure: 62 % of failed UAE government AI tenders fail at the sovereignty review, not the technical scoring."
            contents={[
              'Tender structuring and scoring criteria templates',
              'Sovereign deployment evaluation under TDRA / NESA',
              'Vendor due-diligence checklist (Big-4 / hyperscaler / sovereign / SI / specialist)',
              'ICV / ESR documentation pack and worked example',
              'Risk and audit clauses for federal tenders',
              'Sample Statement of Work'
            ]}
            filePath="/downloads/ai-procurement-playbook-federal.pdf"
            ctaLabel="Email me the playbook"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Procurement &amp; delivery FAQ"
              title="The eight questions every tender committee asks."
              description="If yours is not here, raise it in the form below. We answer in writing before the first call."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="bg-white py-22 md:py-30" data-page={PAGE_SLUG}>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-eyebrow uppercase text-brand">Start the conversation</p>
            <h2 className="mt-4 text-display-md text-ink-900">
              Request a sovereign AI architecture review with our public-sector lead.
            </h2>
            <p className="mt-5 text-ink-600">
              Tell us the entity, the data classification, and the mandate timeline. A senior engineer responds
              within one business day with a shape, a team, and a first conversation — not a generic deck.
            </p>
            <p className="mt-6 text-sm text-ink-500">
              Prefer WhatsApp?{' '}
              <Link
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={PAGE_SLUG}
                className="font-semibold text-brand"
              >
                Message our public-sector lead directly.
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm config={formConfig} />
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Request review" primaryHref="#quote-form" />
    </>
  );
}
