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
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'intelligent-process-automation';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I am COO / Head of Shared Services at [organisation]. Our RPA estate has plateaued and I want to talk about AI-augmented back-office automation (invoicing, claims, KYC, exceptions). Could we book an hour with your operations lead to walk through our top three processes?";

export const metadata: Metadata = {
  title: 'Intelligent Process Automation — RPA + AI for Back-Office Operations',
  description:
    'Augment your UiPath, Blue Prism or Automation Anywhere estate with Arabic-strong AI. Eight hardened back-office processes with cost-per-transaction economics. Six-week process sprints.',
  alternates: { canonical: 'https://www.brocode.ae/services/intelligent-process-automation' },
  openGraph: {
    title: 'Intelligent Process Automation — Brocode Solutions',
    description:
      'An AI-augmented operations layer that runs alongside your RPA estate. First-pass yield over 85 percent. Cost-per-transaction down 71 percent median.',
    url: 'https://www.brocode.ae/services/intelligent-process-automation',
    images: ['/images/services/intelligent-process-automation.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligent Process Automation — Brocode',
    description: 'RPA + AI co-existence for UAE and KSA back-office operations. Six-week process sprints.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a 60-minute back-office economics review',
  subtitle:
    'A Brocode operations lead walks through your top three processes and returns a costed plan with cost-per-transaction targets.',
  ctaLabel: 'Request the economics review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'topProcesses',
      label: 'Top 3 processes you would automate first',
      type: 'multiselect',
      required: true,
      options: [
        'AP invoicing',
        'Claims adjudication',
        'KYC & onboarding',
        'Order-to-cash exceptions',
        'Payroll exceptions',
        'Procurement',
        'Regulatory reporting',
        'Customer email triage',
        'Reconciliations',
        'Other'
      ]
    },
    {
      name: 'rpaEstate',
      label: 'Existing RPA estate',
      type: 'select',
      required: true,
      options: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Microsoft Power Automate', 'Mixed', 'None yet']
    },
    {
      name: 'annualVolume',
      label: 'Annual transaction volume across the top 3 processes',
      type: 'select',
      options: ['<100K', '100K–1M', '1M–10M', '>10M']
    },
    {
      name: 'documentMix',
      label: 'Document mix',
      type: 'multiselect',
      options: [
        'Printed Arabic',
        'Handwritten Arabic',
        'Mixed Arabic-English',
        'Structured PDFs',
        'Excel files',
        'Emails',
        'EDI',
        'Scanned forms'
      ]
    },
    {
      name: 'processMining',
      label: 'Existing process-mining tool in use',
      type: 'select',
      options: ['Celonis', 'UiPath Process Mining', 'Apromore', 'Power BI process insights', 'None']
    },
    {
      name: 'regulators',
      label: 'Regulator(s) in scope',
      type: 'multiselect',
      options: [
        'CBUAE',
        'SAMA',
        'DFSA',
        'FSRA',
        'ADGM FSRA',
        'Takaful supervisor',
        'SOX',
        'IFRS 17',
        'VAT',
        'ICV',
        'None'
      ]
    },
    {
      name: 'coeSize',
      label: 'Current RPA Centre of Excellence size',
      type: 'select',
      options: ['0', '1–5', '6–20', '21–50', '>50 FTE']
    }
  ]
};

const processes: {
  title: string;
  before: string;
  after: string;
  services: string;
}[] = [
  {
    title: 'AP invoicing',
    before: 'AED 18 per invoice',
    after: 'AED 3.40 per invoice',
    services: 'Arabic + English OCR · LayoutLMv3 · 3-way match · UiPath SAP post'
  },
  {
    title: 'Claims adjudication',
    before: '4.2 days first decision',
    after: '9 hours first decision',
    services: 'Donut FNOL extraction · XGBoost triage · SHAP audit row'
  },
  {
    title: 'KYC & onboarding',
    before: '11 days to onboard',
    after: '36 hours to onboard',
    services: 'Beneficial-ownership extraction · sanctions screen · Power Automate'
  },
  {
    title: 'Procurement exceptions',
    before: '38% manual rework',
    after: '7% manual rework',
    services: 'Supplier email classification · policy decisioning · Boomi flow'
  },
  {
    title: 'Payroll exceptions',
    before: '14% queue spillover',
    after: '2% queue spillover',
    services: 'Tabular exception scoring · SHAP explanations · Workday post'
  },
  {
    title: 'Reconciliations',
    before: '5 days month-end close',
    after: '1.5 days month-end close',
    services: 'OpenSearch case similarity · variance classification · ledger post'
  },
  {
    title: 'Customer email triage',
    before: '42% misrouted',
    after: '6% misrouted',
    services: 'AraBERT-v2 + mDeBERTa-v3 · VIP routing rules · generative draft'
  },
  {
    title: 'Regulatory reporting',
    before: '11 analyst-days monthly',
    after: '3 analyst-days monthly',
    services: 'Document extraction · rule-based validation · audit-row generation'
  }
];

const plateauReasons: { title: string; body: string }[] = [
  {
    title: 'Unstructured documents',
    body: 'The bot reads the supplier PDF that was structured last quarter; the supplier changes layout; the bot stalls. Pure RPA cannot read Arabic invoices in the wild, and document understanding is where most of the cost-per-transaction sits.'
  },
  {
    title: 'Judgement exceptions',
    body: 'The exception queue is the cost centre. Routine deterministic steps automate cleanly; the 40 percent that needs a judgement call — credit risk, fraud signal, claim disposition — is exactly where the bot escalates to a human every time.'
  },
  {
    title: 'Arabic-language inbound',
    body: 'Customer emails in Khaleeji dialect, handwritten claim notes, Arabic-script supplier names — the global RPA AI tier is weak here. This is where the cycle time stretches and the auditors find their findings.'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Arabic-strong document understanding',
    brocode: 'Surya + PaddleOCR-Arabic + AraBERT-v2',
    competitors: ['Weak on Khaleeji', 'Weak on Arabic', 'Weak on Arabic', 'Subcontracted']
  },
  {
    feature: 'Generative drafting under guardrails',
    brocode: 'Llama-3.1-70B / Mistral-Large-2 + Llama Guard 3 + NeMo',
    competitors: ['Limited', 'Limited', 'Copilot Studio (Azure-locked)', 'Subcontracted']
  },
  {
    feature: 'SHAP-explained decision audit rows',
    brocode: true,
    competitors: [false, false, false, 'Sometimes']
  },
  {
    feature: 'Cost-per-transaction commitment in SoW',
    brocode: true,
    competitors: [false, false, false, false]
  },
  {
    feature: 'Plugs into customer orchestrator',
    brocode: 'UiPath, Blue Prism, AA, Power Automate',
    competitors: ['UiPath-only', 'AA-only', 'Microsoft-only', 'Whatever the customer owns']
  },
  {
    feature: 'Fixed-fee six-week process sprint',
    brocode: true,
    competitors: ['Licence-led pricing', 'Licence-led pricing', 'Licence-led pricing', 'T&M, partner-led'],
    note: 'Three processes in parallel per pod.'
  },
  {
    feature: 'RPA CoE coexistence pledge',
    brocode: 'Published commitment',
    competitors: [false, false, false, 'Implicit'],
    note: 'CoE remains the orchestration owner.'
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'How is this different from buying more UiPath Document Understanding licences?',
    answer:
      'UiPath Document Understanding handles structured documents inside the UiPath stack well. It is weak on Khaleeji Arabic, weak on generative drafting, and pricing follows UiPath metering. Brocode plugs into your UiPath Orchestrator as a stronger AI tier where Arabic accuracy and generative use cases matter. For pure deterministic English extraction we will tell you UiPath alone is enough.'
  },
  {
    question: 'What happens to the RPA Centre of Excellence?',
    answer:
      'The CoE remains the orchestration owner. That is a written pledge in the SoW. In most engagements the CoE ends the programme larger and more senior than it started: Brocode AI engineers transfer skills into the CoE during hypercare, and the CoE picks up the AI service operating model at handover. We have never displaced a CoE.'
  },
  {
    question: 'How do you commit to cost-per-transaction before you see our volume?',
    answer:
      'We do not. The cost-per-transaction figure is sized during the four-week discovery sprint from your real volume, document mix, exception rate and Arabic share. The SoW then carries the target as a delivery commitment. The economics pack lead magnet walks through the methodology so finance can challenge the assumptions before signature.'
  },
  {
    question: 'Will any FTEs lose their jobs?',
    answer:
      'In most engagements no — the cost-per-transaction reduction comes from raising first-pass yield and removing rework, not from displacing humans. We have run programmes that took seventeen processes live with zero displacement and the operations bench grew. Some engagements do involve role redesign; the SoW carries an explicit re-skilling commitment where that applies.'
  },
  {
    question: 'How is the SHAP-explained decision audit row defensible to a CBUAE or SAMA examiner?',
    answer:
      'Every decision above the configurable threshold routes to a human reviewer; below threshold the row carries the inputs, the model version, the feature contributions (SHAP values), the confidence score, and the post-decision ledger reference. The row is queryable from your existing audit store. We rehearse the examiner conversation with a former central-bank examiner before the first regulator-visible go-live.'
  },
  {
    question: 'How often does the AI model need updating?',
    answer:
      'Document understanding models are retrained quarterly on new supplier and claim samples; classification models update monthly during the first six months and then quarterly. Drift detection fires alerts before retraining is needed. Updates roll through your existing change-management process; nothing goes near production without your CoE signing off.'
  },
  {
    question: 'How do you handle handwritten Arabic claims forms?',
    answer:
      'A specialist pipeline that combines Surya for handwritten line detection with Donut for structured field extraction and an Arabic-tuned LayoutLMv3 head for layout-aware classification. Confidence below a tunable threshold defers to the human reviewer with the field highlighted. We have run this pipeline on takaful claims at over ninety percent field-level accuracy on Khaleeji handwriting.'
  }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Intelligent Process Automation',
  name: 'Intelligent Process Automation — RPA + AI for Back-Office Operations',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
  description:
    'An AI-augmented operations layer that runs alongside UiPath, Blue Prism, Automation Anywhere or Microsoft Power Automate. Eight hardened back-office processes with cost-per-transaction economics.',
  url: 'https://www.brocode.ae/services/intelligent-process-automation'
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

export default function IntelligentProcessAutomationPage() {
  return (
    <>
      <Script id="ld-service-ipa" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="ld-faq-ipa" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO — before / after operations floor */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/intelligent-process-automation.jpg"
            alt="Operations team reviewing an AI-augmented back-office exception queue with cost-per-transaction telemetry on a wall display"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/90 to-ink-900" />
          <GradientMesh tone="sand" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-28 md:pb-24">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Intelligent Process Automation' }
            ]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-white/70">RPA + AI for back-office operations</p>
              <h1 className="text-balance text-display-xl">
                AI-augmented operations alongside your RPA estate. First-pass yield over 85%.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/75">
                Document understanding, classification, decisioning, and generative drafting plugged into your UiPath,
                Blue Prism, Automation Anywhere or Power Automate orchestrator. Six-week process sprints. Three
                processes in parallel per pod. No open-ended T&amp;M.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Book a 60-minute economics review
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
                  Message our operations lead
                </a>
              </div>
            </div>

            {/* BEFORE / AFTER ticker */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Before</p>
                  <p className="mt-3 font-mono text-2xl font-bold text-white/90">AED 18</p>
                  <p className="font-mono text-[10px] text-white/50">per invoice</p>
                  <p className="mt-4 font-mono text-xl font-bold text-white/90">41%</p>
                  <p className="font-mono text-[10px] text-white/50">first-pass yield</p>
                  <p className="mt-3 text-xs text-white/60">Bot stalls on Arabic invoice. Human re-keys.</p>
                </div>
                <div className="rounded-2xl border border-emerald-300/30 bg-emerald-500/10 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-200">After</p>
                  <p className="mt-3 font-mono text-2xl font-bold text-white">AED 3.40</p>
                  <p className="font-mono text-[10px] text-emerald-200/80">per invoice</p>
                  <p className="mt-4 font-mono text-xl font-bold text-white">88%</p>
                  <p className="font-mono text-[10px] text-emerald-200/80">first-pass yield</p>
                  <p className="mt-3 text-xs text-white/80">AI agent extracts, decides, posts. Human reviews exceptions.</p>
                </div>
              </div>
              <div className="mt-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-center font-mono text-[11px] uppercase tracking-wider text-white/70">
                6-week process sprint →
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
              { value: '50+', label: 'Back-office automations delivered' },
              { value: '71%', label: 'Median cost-per-transaction reduction' },
              { value: '47→86%', label: 'Median first-pass-yield uplift' },
              { value: '6 wk', label: 'Process sprint, fixed fee' }
            ]}
          />
        </div>
      </section>

      {/* PLATEAU */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why RPA estates plateau"
            title="Your RPA CoE has automated the deterministic 60%. The remaining 40% is where the cost sits."
            description="The exceptions, the unstructured documents, the judgement calls, the email triage — exactly where the cycle time and the unit cost live, and exactly where pure RPA bots fall over the moment a supplier changes invoice layout or a customer writes the request in Arabic."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {plateauReasons.map((r) => (
              <Reveal key={r.title}>
                <div className="rounded-2xl border border-ink-100 bg-white p-7">
                  <h3 className="text-lg font-semibold text-ink-900">{r.title}</h3>
                  <p className="mt-3 text-ink-700">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MECHANISM — 8 back-office processes (BentoGrid) */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Eight hardened processes"
            title="Cost-per-transaction economics, before and after."
            description="Drawn from over fifty delivered back-office automations across UAE and KSA banks, insurers, telcos and shared-services centres. Each tile shows the deterministic baseline, the post-engagement target, and the AI services that close the gap."
          />
          <BentoGrid className="mt-12">
            {processes.map((p, i) => (
              <BentoCell key={p.title} span="md" variant={i % 3 === 0 ? 'brand' : i % 3 === 1 ? 'light' : 'glass'}>
                <h3 className={`text-lg font-semibold ${i % 3 === 0 ? 'text-white' : 'text-ink-900'}`}>{p.title}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className={`font-mono text-[10px] uppercase tracking-wider ${i % 3 === 0 ? 'text-white/60' : 'text-ink-500'}`}>Before</p>
                    <p className={`mt-1 font-mono text-sm ${i % 3 === 0 ? 'text-white/80' : 'text-ink-700'}`}>{p.before}</p>
                  </div>
                  <div>
                    <p className={`font-mono text-[10px] uppercase tracking-wider ${i % 3 === 0 ? 'text-white/60' : 'text-brand'}`}>After</p>
                    <p className={`mt-1 font-mono text-sm font-semibold ${i % 3 === 0 ? 'text-white' : 'text-ink-900'}`}>{p.after}</p>
                  </div>
                </div>
                <p className={`mt-4 font-mono text-[11px] ${i % 3 === 0 ? 'text-white/70' : 'text-ink-500'}`}>{p.services}</p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* CO-EXISTENCE ARCHITECTURE */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The co-existence architecture"
                title="RPA bot lane. AI service lane. One orchestrator boundary."
                description="The bot does what bots do well: deterministic steps, screen scrapes, posting. The AI service does document understanding, classification, decisioning, drafting. The customer orchestrator (UiPath, Blue Prism, AA, Power Automate) is the boundary. The audit row lives in the customer audit store, not ours."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <div className="space-y-3">
                  <div className="rounded-xl border border-ink-100 bg-surface-muted p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-500">RPA bot lane</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Screen scrape', 'SAP post', 'Workday update', 'Email send'].map((t) => (
                        <span key={t} className="rounded-md border border-ink-100 bg-white px-2 py-1 font-mono text-[10px] text-ink-700">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 text-center">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-brand">Orchestrator boundary · REST + queue</p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-700">AI service lane</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Surya OCR', 'AraBERT classify', 'XGBoost decide', 'Llama-3 draft', 'SHAP explain'].map((t) => (
                        <span key={t} className="rounded-md border border-emerald-200 bg-white px-2 py-1 font-mono text-[10px] text-emerald-900">{t}</span>
                      ))}
                    </div>
                  </div>
                  <p className="font-mono text-[10px] text-ink-400">
                    audit row → customer audit store (SHAP-explained · regulator-defensible)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES — three objections answered */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Objections answered with evidence"
            title="Three things every COO asks. Three production references."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">CoE will see this as a threat</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  Anonymised GBS group, 17 processes in 14 months.
                </h3>
                <p className="mt-3 text-ink-700">
                  AED 14M annualised cost-out. Zero displacement. The customer RPA CoE ended the programme larger and
                  more senior than it started, with the joint operating model documented and the AI service ownership
                  transferred at handover.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">UiPath already has AI</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  Anonymised UAE tier-1 bank: AP invoicing.
                </h3>
                <p className="mt-3 text-ink-700">
                  Arabic and English invoice extraction with three-way match and UiPath posting to SAP. Cost per invoice
                  from AED 18 to AED 3.40. First-pass yield from 41% to 88%. Full SAMA and CBUAE control trace. UiPath
                  Document Understanding could not match accuracy on Khaleeji handwriting in the bake-off.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Big-4 IPA experience</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  Anonymised regional takaful insurer: claims triage.
                </h3>
                <p className="mt-3 text-ink-700">
                  Document extraction, decisioning, and UiPath posting into the claims system. Mean time to first
                  decision from 4.2 days to 9 hours. Claims-handler productivity up 2.3x. Six-week fixed-fee sprint per
                  process; no partner-plus-pyramid; named senior pod in the SoW.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="UiPath, Blue Prism, AA, Microsoft and Big-4 — honestly."
            description="The big RPA vendors all say they have AI now. They do, inside their own estates and pricing. Brocode is the AI augmentation layer that unlocks Arabic-strong and generative use cases where the native AI tier reaches its limit."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['UiPath Document Understanding', 'Automation Anywhere IQ Bot', 'Power Automate + AI Builder', 'Big-4 IPA practice']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="bg-white py-20">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The Intelligent Automation Economics Pack — 8 Back-Office Processes"
            description="Forty-four pages plus the editable cost-per-transaction Excel model and a sample SHAP-explained decision audit row. Drawn from over fifty delivered automations. Median cost-per-transaction reduction of 71 percent. Median first-pass-yield uplift from 47 to 86 percent."
            filePath="/downloads/rpa-ai-economics-pack.pdf"
            ctaLabel="Email me the economics pack"
            contents={[
              'Invoice processing — AP economics, three-way match, Arabic OCR',
              'KYC refresh — beneficial ownership, sanctions screening',
              'Claims triage — FNOL extraction, decisioning, SHAP audit',
              'Procurement onboarding — supplier email classification',
              'HR exception handling',
              'Payroll exception handling',
              'Expense audit',
              'Customer onboarding',
              'Editable Excel cost-per-transaction model'
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Frequently asked"
            title="What COOs and Heads of Shared Services actually want to know."
          />
          <div className="mt-10 max-w-3xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="contact-form" className="bg-white py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Talk to an operations lead</p>
              <h2 className="text-display-md text-ink-900">
                Walk us through your top three processes. We will return a costed plan with cost-per-transaction targets.
              </h2>
              <p className="mt-4 text-ink-600">
                A Brocode operations lead and an automation architect review your submission and reply within one
                business day. The first conversation is a 60-minute back-office economics review, not a sales call.
              </p>
              <p className="mt-6 rounded-xl border border-ink-100 bg-surface-muted p-5 text-sm text-ink-700">
                Bring your last quarterly RPA estate report and a sample of your most painful invoices, claims or KYC
                packs. We will tell you which processes are six-week wins and which need redesign first.
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
            label: 'Document Intelligence',
            href: '/services/document-intelligence',
            description: 'The document understanding layer in every IPA automation.'
          },
          {
            label: 'AI Integration Services',
            href: '/services/ai-integration-services',
            description: 'The integration plane between bot, AI service and SoR.'
          },
          {
            label: 'Conversational AI & Chatbots',
            href: '/services/conversational-ai-chatbots',
            description: 'For extending IPA into customer-facing email and chat triage.'
          },
          {
            label: 'AI Consulting & Strategy',
            href: '/services/ai-consulting-strategy',
            description: 'For COOs who need a portfolio view across processes.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'KYC, claims, AP — the dominant industry for this page.'
          }
        ]}
      />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Book economics review"
        primaryHref="#contact-form"
      />
    </>
  );
}
