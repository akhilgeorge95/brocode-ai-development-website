import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'ai-integration-services';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I lead enterprise architecture at [organisation]. We want to embed AI into our SAP / Oracle / core-banking / mainframe estate without touching the systems of record. Could we book an hour with your principal architect to walk through our landscape?";

export const metadata: Metadata = {
  title: 'AI Integration Services for SAP, Oracle, Mainframe and Core Banking',
  description:
    'Brocode embeds AI inside SAP, Oracle, mainframe, Temenos, Finacle and Murex flows without modifying the systems of record. Twelve hardened integration patterns, full audit lineage, SOD-compliant.',
  alternates: { canonical: 'https://www.brocode.ae/services/ai-integration-services' },
  openGraph: {
    title: 'AI Integration Services — Brocode Solutions',
    description:
      'Embed AI inside SAP, Oracle, mainframe and core-banking flows without touching the systems of record. Twelve patterns, eleven-week median go-live.',
    url: 'https://www.brocode.ae/services/ai-integration-services',
    images: ['/images/services/ai-integration-services.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Integration Services — Brocode',
    description: 'AI embedded alongside SAP, Oracle, mainframe and core banking — without modifying the systems of record.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a 60-minute integration architecture review',
  subtitle:
    'A Brocode principal enterprise architect with documented SAP, Oracle, and mainframe credentials reviews your landscape and replies within one business day.',
  ctaLabel: 'Request the architecture review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'systemsOfRecord',
      label: 'Primary systems of record in scope',
      type: 'multiselect',
      required: true,
      options: [
        'SAP ECC',
        'SAP S/4HANA',
        'Oracle EBS',
        'Oracle Fusion',
        'IBM i / AS400',
        'z/OS mainframe',
        'Temenos T24',
        'Finacle',
        'Flexcube',
        'Murex',
        'Calypso',
        'Salesforce',
        'Other'
      ]
    },
    {
      name: 'ipaas',
      label: 'Existing iPaaS / integration platform',
      type: 'multiselect',
      options: [
        'MuleSoft Anypoint',
        'Boomi',
        'webMethods',
        'Apigee',
        'SAP Integration Suite',
        'Oracle Integration Cloud',
        'Azure Integration Services',
        'Kafka',
        'Solace',
        'IBM MQ',
        'None'
      ]
    },
    {
      name: 'useCase',
      label: 'AI use-case to integrate',
      type: 'select',
      required: true,
      options: [
        'Document extraction',
        'Decisioning model',
        'Generative summarisation',
        'Agent copilot',
        'Event-driven routing',
        'Predictive maintenance',
        'Other'
      ]
    },
    {
      name: 'changeControl',
      label: 'Change control posture',
      type: 'select',
      options: [
        'Full CAB & SOD review required',
        'Lightweight CAB',
        'Dev-test-prod with quarterly window',
        'Continuous deployment'
      ]
    },
    { name: 'goLive', label: 'Target go-live window', type: 'date' },
    {
      name: 'migrationStatus',
      label: 'Status of any in-flight S/4HANA / Fusion / core-banking migration',
      type: 'select',
      options: ['Not started', 'Mid-flight', 'Recently completed', 'Not applicable']
    },
    {
      name: 'regulators',
      label: 'Regulator(s) in scope',
      type: 'multiselect',
      options: ['CBUAE', 'SAMA', 'DFSA', 'FSRA', 'ADGM FSRA', 'SOX', 'IFRS 17', 'VAT', 'ICV', 'None']
    }
  ]
};

const patternLibrary: { id: string; sor: string; surface: string; pattern: string }[] = [
  { id: '01', sor: 'SAP ECC', surface: 'BAPI + RFC over SAP JCo', pattern: 'Synchronous decisioning for posting workflows' },
  { id: '02', sor: 'SAP S/4HANA', surface: 'CDS views + OData via SAP Integration Suite', pattern: 'Read-side feature extraction' },
  { id: '03', sor: 'SAP (any)', surface: 'IDoc via Kafka Connect + Debezium', pattern: 'Event-driven document handoff' },
  { id: '04', sor: 'SAP S/4HANA', surface: 'SAP Event Mesh + AEM', pattern: 'Real-time AI scoring on transactional events' },
  { id: '05', sor: 'Oracle EBS', surface: 'Concurrent Programs + OAF over OIC', pattern: 'Batch enrichment without form mods' },
  { id: '06', sor: 'Oracle Fusion', surface: 'Fusion REST + OIC orchestration', pattern: 'Agent copilot embedded in Fusion UX' },
  { id: '07', sor: 'IBM i / AS400', surface: 'Db2 for i + IBM MQ via Boomi', pattern: 'CDC to AI services with replay safety' },
  { id: '08', sor: 'z/OS mainframe', surface: 'z/OS Connect EE + MQ', pattern: 'CICS-mediated decisioning, no mainframe code change' },
  { id: '09', sor: 'Temenos T24', surface: 'T24 IRIS + Kafka', pattern: 'Pre-posting fraud scoring on account opening' },
  { id: '10', sor: 'Finacle', surface: 'Finacle FI/EI + MuleSoft', pattern: 'Arabic OCR into corporate KYC flow' },
  { id: '11', sor: 'Murex', surface: 'Datamart + event publication', pattern: 'Post-trade anomaly detection alongside the book' },
  { id: '12', sor: 'Salesforce', surface: 'Platform Events + REST', pattern: 'Cross-system orchestration with SAP / mainframe' }
];

const failureModes: { title: string; body: string }[] = [
  {
    title: 'Change Advisory Board friction',
    body: 'Most AI vendors treat CAB approval as a paperwork exercise. In a regulated estate the CAB is the load-bearing control: change-impact assessments, SOD sign-off, regression evidence, batch-window analysis. AI POCs that have not produced any of these documents die at the gate.'
  },
  {
    title: 'Segregation of duties',
    body: 'A model that can post a journal, raise a payment, or transition a claim status crosses SOD boundaries instantly. Without an explicit human-in-the-loop pattern above defined thresholds, the audit team will (correctly) block the production cutover.'
  },
  {
    title: 'Batch window collision',
    body: 'Year-end close, month-end accruals, and overnight settlement runs leave a fragile two- to three-hour window for any new integration. An AI service that adds end-to-end latency or back-pressure into the SoR is one outage away from being switched off.'
  },
  {
    title: 'Audit lineage gaps',
    body: 'For every AI-mediated transaction the audit team needs to reconstruct: which inputs, which model version, which threshold fired, which human reviewed the deferral. Most AI stacks do not capture this; we treat the audit row as a first-class output of every inference.'
  }
];

const timelineSteps = [
  {
    label: 'Week 0–2',
    title: 'Discovery and reference architecture',
    description:
      'Brocode principal architect maps the SoR landscape, iPaaS estate, CAB cadence, and SOD constraints. Output: a one-page reference architecture and a documented control-trace pattern signed off by the customer architect.',
    metric: 'Named senior pod'
  },
  {
    label: 'Week 3–6',
    title: 'Thin end-to-end slice',
    description:
      'One real use case, one real screen, one real data path — built on the customer iPaaS (MuleSoft / Boomi / SAP IS / OIC) with the AI service exposed via REST or events. Full audit lineage from day one.',
    metric: 'Live in dev'
  },
  {
    label: 'Week 7–9',
    title: 'Hardening and CAB',
    description:
      'Penetration test, performance test, disaster-recovery rehearsal, SOD walkthrough with second-line. CAB submission with change-impact, rollback, and batch-window analysis attached.',
    metric: 'CAB-ready evidence'
  },
  {
    label: 'Week 10–11',
    title: 'Cutover and hypercare',
    description:
      'Canary cutover during an agreed change window, then hypercare alongside the customer ops team. Brocode owns incident response through the agreed support window before runbook handover.',
    metric: '11-week median go-live'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Works alongside (not inside) SAP and Oracle',
    brocode: true,
    competitors: [false, false, false, true]
  },
  {
    feature: 'Zero code modification on the SoR',
    brocode: 'Documented policy',
    competitors: ['ABAP enhancements typical', 'OAF / Form changes typical', 'Apex / triggers typical', 'Varies by partner'],
    note: 'Brocode publishes a zero-mod commitment with documented edge cases.'
  },
  {
    feature: 'Plugs into your existing iPaaS',
    brocode: 'MuleSoft, Boomi, OIC, SAP IS, Azure IS, Kafka',
    competitors: ['BTP-first', 'OIC-first', 'MuleSoft-first within Salesforce', 'Whatever the customer owns']
  },
  {
    feature: 'Open-source and best-of-breed models',
    brocode: true,
    competitors: [false, false, false, 'Subcontracted']
  },
  {
    feature: 'Named senior architect on contract',
    brocode: true,
    competitors: [false, false, false, 'Partner-plus-pyramid'],
    note: 'Brocode publishes the architect CV before SoW signature.'
  },
  {
    feature: 'Regulator-mapped control trace (CBUAE / SAMA / SOX)',
    brocode: true,
    competitors: [false, false, false, 'Sometimes'],
    note: 'Document, posting, and journal-level audit reconstruction by design.'
  },
  {
    feature: 'Median time to first production slice',
    brocode: '11 weeks',
    competitors: ['Bound to SAP release', 'Bound to Oracle release', 'Bound to Salesforce release', '6–9 months typical']
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'How do you protect the SAP / Oracle batch window during cutover?',
    answer:
      'Every integration is staged through the customer iPaaS rather than calling the SoR directly. Cutover is canary by design: a percentage of traffic moves to the AI-mediated path while the legacy path stays live and reconcilable. Brocode runs a load-and-back-pressure simulation against your real batch profile before the change goes near production, and CAB sees the simulation evidence.'
  },
  {
    question: 'What is the CAB submission pack you actually produce?',
    answer:
      'A change-impact statement signed by the principal architect, the SOD review covering every new role and posting authority, a regression evidence appendix tied to the customer test pack, the batch-window analysis, the rollback procedure, the disaster-recovery rehearsal output, and the audit-row specification. The pack is shaped to your CAB template, not ours.'
  },
  {
    question: 'How is the audit trail reconstructed for an AI-mediated transaction?',
    answer:
      'For every inference we capture: the input payload hash, the model version, the feature snapshot, the threshold that fired, the confidence score, the decision taken, and either the auto-post reference or the reviewing human. Those rows live in the customer audit store, joined to the SoR document / posting / journal IDs. We do not store inference rows in any Brocode-side system unless the customer explicitly asks.'
  },
  {
    question: 'What if our iPaaS changes mid-engagement (MuleSoft to Boomi, for example)?',
    answer:
      'The AI services are exposed as platform-agnostic REST and event interfaces. Changing iPaaS means rebuilding the flow definitions; the AI side does not move. We have lived through one full MuleSoft-to-Boomi migration mid-engagement on a regional retailer and the AI integration shipped on the new iPaaS with two weeks of additional work.'
  },
  {
    question: 'How does this coexist with our in-flight S/4HANA migration?',
    answer:
      'We integrate at the BAPI / IDoc / OData surface that is stable across ECC and S/4HANA, and where Event Mesh is available we use it. When the customer migrates we re-bind the integration to the S/4 endpoints during a planned window rather than rebuild it. We have done this on three engagements that started on ECC and crossed the S/4HANA cutover with the AI integration intact.'
  },
  {
    question: 'Do you respect the existing iPaaS team, or do you parallel them?',
    answer:
      'We build inside the customer iPaaS with the customer iPaaS team. Our flow definitions, naming conventions, error handling, and observability instrumentation are aligned to the customer standards on day one. The iPaaS team owns the flows at handover; Brocode operates them only during hypercare.'
  },
  {
    question: 'Is the zero-modifications policy genuinely zero?',
    answer:
      'Across more than forty enterprise integrations the SoR has been modified in two cases, both Murex Datamart configurations where the customer architect requested an explicit change. The published policy is: we do not modify the SoR unless the customer architect requests it in writing, and the change is then owned by the customer team.'
  }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Integration Services',
  name: 'AI Integration Services for SAP, Oracle, Mainframe and Core Banking',
  provider: {
    '@type': 'Organization',
    name: 'Brocode Solutions',
    url: 'https://www.brocode.ae'
  },
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
  description:
    'Embeds AI inside SAP, Oracle, mainframe, IBM i, Temenos, Finacle, Flexcube, Murex, Calypso and Salesforce transactional flows without modifying the systems of record.',
  url: 'https://www.brocode.ae/services/ai-integration-services'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer }
  }))
};

export default function AIIntegrationServicesPage() {
  return (
    <>
      <Script
        id="ld-service-ai-integration"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="ld-faq-ai-integration"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO — architectural swim-lane diagram */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/ai-integration-services.jpg"
            alt="Enterprise architecture blueprint showing AI services integrated alongside SAP, Oracle and mainframe systems via Kafka and MuleSoft"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/90 to-ink-900" />
          <GradientMesh tone="midnight" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-28 md:pb-24">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AI Integration Services' }
            ]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-white/70">Enterprise AI integration</p>
              <h1 className="text-balance text-display-xl">
                AI inside SAP, Oracle, mainframe and core banking — with zero modifications to the systems of record.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/75">
                Production-grade integration, full lineage, SOD-compliant. We embed AI capability alongside the systems
                you already run, mediated through your existing iPaaS — MuleSoft, Boomi, SAP Integration Suite, Oracle
                Integration Cloud — never directly against the SoR.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="#contact-form"
                  variant="primary"
                  size="lg"
                  event="quote_open"
                >
                  Book a 60-minute architecture review
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
                  </svg>
                  Chat to a principal architect
                </a>
              </div>
            </div>

            {/* Three swim-lane architecture diagram */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-wider text-white/50">Reference architecture</p>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Systems of record</p>
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {['SAP', 'Oracle', 'z/OS', 'Finacle'].map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-white/10 bg-ink-900 px-2 py-1.5 text-center font-mono text-[10px] text-white/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 inline-flex rounded-full border border-dashed border-white/30 px-2.5 py-0.5 text-[10px] font-medium text-white/70">
                      Zero modifications
                    </p>
                  </div>

                  <div className="rounded-xl border border-brand-300/30 bg-brand-500/10 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-brand-100">Integration plane</p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {['Kafka', 'MuleSoft', 'MQ'].map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-brand-300/40 bg-brand-700/30 px-2 py-1.5 text-center font-mono text-[10px] text-white"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-300/30 bg-emerald-500/10 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-200">AI services</p>
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {['Extract', 'Decide', 'Summarise', 'Route'].map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-emerald-300/30 bg-emerald-700/20 px-2 py-1.5 text-center font-mono text-[10px] text-white"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-mono text-[10px] text-white/40">
                    SAP → Kafka → AI service → MuleSoft → SAP &nbsp; (audit lineage captured at each hop)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white py-12">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '40+', label: 'Enterprise integrations delivered' },
              { value: '0', label: 'SoR code modifications across the estate' },
              { value: '11 wk', label: 'Median time to first production slice' },
              { value: '99.95%', label: 'Integration availability target' }
            ]}
          />
        </div>
      </section>

      {/* PROBLEM & STAKES — why AI POCs die at the integration boundary */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="The integration boundary"
            title="Every AI proof-of-concept the team has run has died at the same place."
            description="The model works on the notebook. Landing it inside the SAP, Oracle or mainframe transactional flow without breaking the system of record, the audit trail, the SOD controls, and the batch window is a nine-month integration project no AI vendor has actually scoped or budgeted for. The architect's risk appetite for 'let's just put an AI in front of SAP' is correctly low."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {failureModes.map((f) => (
              <Reveal key={f.title}>
                <div className="rounded-2xl border border-ink-100 bg-white p-7">
                  <h3 className="text-lg font-semibold text-ink-900">{f.title}</h3>
                  <p className="mt-3 text-ink-700">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 rounded-2xl border border-ink-900 bg-ink-900 p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Architectural principle</p>
              <p className="mt-3 text-xl font-semibold">
                Alongside, not inside. AI services run on the customer MLOps platform, exposed via Kafka or REST, and
                integrated into the SoR through the customer iPaaS with full lineage. The SoR is never directly called
                by a model.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MECHANISM — 12-pattern integration library */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Integration pattern library"
            title="Twelve hardened patterns, by system of record."
            description="Every pattern in this library has shipped in production at a UAE or KSA enterprise. Each one carries a documented control trace and a sample iPaaS flow definition. The downloadable library expands each pattern into a full architecture diagram with Lucidchart, draw.io and Visio source files."
          />
          <BentoGrid className="mt-12">
            {patternLibrary.slice(0, 4).map((p) => (
              <BentoCell key={p.id} span="md" variant="light">
                <p className="font-mono text-[11px] uppercase tracking-wider text-brand">Pattern {p.id}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">{p.sor}</h3>
                <p className="mt-1 font-mono text-xs text-ink-500">{p.surface}</p>
                <p className="mt-3 text-sm text-ink-700">{p.pattern}</p>
              </BentoCell>
            ))}
            {patternLibrary.slice(4, 8).map((p) => (
              <BentoCell key={p.id} span="md" variant="glass">
                <p className="font-mono text-[11px] uppercase tracking-wider text-brand">Pattern {p.id}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">{p.sor}</h3>
                <p className="mt-1 font-mono text-xs text-ink-500">{p.surface}</p>
                <p className="mt-3 text-sm text-ink-700">{p.pattern}</p>
              </BentoCell>
            ))}
            {patternLibrary.slice(8, 12).map((p) => (
              <BentoCell key={p.id} span="md" variant="dark">
                <p className="font-mono text-[11px] uppercase tracking-wider text-brand-200">Pattern {p.id}</p>
                <h3 className="mt-2 text-lg font-semibold">{p.sor}</h3>
                <p className="mt-1 font-mono text-xs text-white/60">{p.surface}</p>
                <p className="mt-3 text-sm text-white/80">{p.pattern}</p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* iPaaS coexistence */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="iPaaS coexistence"
                title="We plug into yours. We do not replace it."
                description="The integration plane is your decision and your standard. Brocode delivers AI services as platform-agnostic REST and event interfaces; the flow definitions are built inside your iPaaS, in your conventions, by a pod that works alongside your iPaaS team."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  'MuleSoft Anypoint',
                  'Boomi',
                  'webMethods',
                  'Apigee',
                  'SAP Integration Suite',
                  'Oracle Integration Cloud',
                  'Azure Integration Services',
                  'Confluent Kafka',
                  'Solace PubSub+',
                  'IBM MQ',
                  'Debezium / Qlik / IIDR',
                  'SAP Event Mesh'
                ].map((tool) => (
                  <li
                    key={tool}
                    className="rounded-xl border border-ink-100 bg-white p-4 text-sm font-medium text-ink-900"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY TIMELINE */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Delivery method"
            title="Eleven-week median time to first production slice."
            description="Discovery, reference architecture, thin slice, hardening, CAB, cutover, hypercare. The pod is named in the SoW: a Brocode principal enterprise architect, an MLOps lead, and an integration lead. CVs are visible before contract signature."
          />
          <div className="mt-12 max-w-3xl">
            <ScrollTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="The honest table."
            description="Vendor-locked AI add-ons are credible inside their own estates and fragment the moment a non-vendor model is needed. Big-4 SI work is credible on the integration plane and weak on the AI side. Brocode owns both halves of the build with named senior people."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['SAP Joule / BTP AI', 'Oracle Fusion AI', 'Salesforce Einstein', 'Big-4 SI']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES — three objections answered */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Objections answered with evidence"
            title="Three things every enterprise architect asks. Three production references."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Change control</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  Touching SAP / Oracle in production needs CAB, change windows and SOD sign-off.
                </h3>
                <p className="mt-3 text-ink-700">
                  Anonymised UAE tier-1 bank: Arabic OCR and extraction model embedded into the Finacle posting flow via
                  Kafka and MuleSoft. Three point four million account-opening documents per year. Zero ABAP or Finacle
                  code change. Full audit lineage. CBUAE-reviewed.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Existing iPaaS</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  Are you going to insist on a parallel integration plane?
                </h3>
                <p className="mt-3 text-ink-700">
                  Anonymised regional utility: predictive maintenance model integrated into SAP IS-U work-order creation
                  via SAP Event Mesh and BAPI orchestration. Built inside the customer SAP Integration Suite, not a
                  parallel plane. Twenty-seven percent reduction in unplanned outages.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Mainframe protection</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  How do you integrate without disrupting the batch window?
                </h3>
                <p className="mt-3 text-ink-700">
                  Anonymised insurer: claims-triage model integrated into a mainframe-based policy admin system via z/OS
                  Connect EE and MQ. No mainframe code change. Forty-one percent faster first decision. Brocode worked
                  inside the existing change window owned by the mainframe team.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET — 12 patterns */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="AI Integration Pattern Library — 12 Production Blueprints"
            description="Fifty-six pages of architecture diagrams, sample iPaaS flow definitions, and the control-trace pattern for SOX, IFRS, CBUAE and SAMA reviews. Drawn from forty-plus enterprise engagements with zero SoR code modifications."
            filePath="/downloads/integration-pattern-library.pdf"
            ctaLabel="Email me the pattern library"
            contents={[
              'Pattern 1 — SAP via SAP Integration Suite + Kafka',
              'Pattern 2 — Oracle via OIC',
              'Pattern 3 — IBM i / AS400 via Boomi',
              'Pattern 4 — Mainframe z/OS via MQ',
              'Patterns 5 to 12 — Temenos, Finacle, Flexcube, Murex, Salesforce',
              'Sample MuleSoft, Boomi and SAP IS flow definitions',
              'Control-trace exhibit for SOX / IFRS / CBUAE / SAMA'
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Frequently asked"
            title="What enterprise architects actually want to know."
          />
          <div className="mt-10 max-w-3xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="contact-form" className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Talk to a principal architect</p>
              <h2 className="text-display-md text-ink-900">
                A senior architect reviews your landscape and replies within one business day.
              </h2>
              <p className="mt-4 text-ink-600">
                The architect on your call holds documented SAP / Oracle / mainframe credentials and has shipped at
                least four enterprise AI integrations into regulated estates in the GCC. CVs are shared before contract
                signature, never after.
              </p>
              <p className="mt-6 rounded-xl border border-ink-100 bg-white p-5 text-sm text-ink-700">
                Prefer WhatsApp? Message us with your landscape and we will read it before the call.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
                <QuoteForm config={formConfig} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            label: 'MLOps & AI Infrastructure',
            href: '/services/mlops-ai-infrastructure',
            description: 'The platform layer the AI services in the bottom swim-lane run on.'
          },
          {
            label: 'Document Intelligence',
            href: '/services/document-intelligence',
            description: 'The most common first AI integration: Arabic OCR into SAP and Finacle.'
          },
          {
            label: 'Intelligent Process Automation',
            href: '/services/intelligent-process-automation',
            description: 'For integration-led buyers who also want a process-automation overlay.'
          },
          {
            label: 'Data Engineering for AI',
            href: '/services/data-engineering-for-ai',
            description: 'CDC, Debezium and Kafka Connect — the deeper data-side read.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'Integration patterns proven inside Finacle, Flexcube and Temenos estates.'
          }
        ]}
      />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Book architecture review"
        primaryHref="#contact-form"
      />
    </>
  );
}
