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
import { ScrollTimeline, type TimelineStep } from '@/components/ui/ScrollTimeline';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'banking-financial-services';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I lead [fraud / AML / credit / customer intelligence] at [bank]. We're CBUAE/SAMA-supervised and we'd like to discuss a back-test against our existing stack. Could we arrange a call?";

export const metadata: Metadata = {
  title: 'AI for CBUAE & SAMA-Supervised Banks — Fraud, AML, Credit, Customer Intelligence',
  description:
    'Production AI for CBUAE- and SAMA-supervised banks. Pre-contract back-tests on your alerts or your book. Model risk file aligned to CBUAE / SAMA / SR 11-7 / SS1/23, shipped with every model.',
  alternates: { canonical: 'https://www.brocode.ae/industries/banking-financial-services' },
  openGraph: {
    title: 'AI for CBUAE & SAMA-Supervised Banks',
    description:
      'Production AI for tier-1 GCC banks — fraud, AML, credit, customer intelligence — with a model risk file that survives committee review.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/banking-financial-services'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for CBUAE & SAMA-Supervised Banks',
    description: 'Pre-contract back-tests. Model risk file included.'
  }
};

const faqItems: FAQItem[] = [
  {
    question: 'Will your model risk file actually survive our MRM committee?',
    answer:
      'Yes — that is the only acceptance criterion that matters to us. Every model ships with a development document, validation plan, fair-lending and bias review, stability monitoring plan, and challenger model description. The pack maps explicitly to CBUAE expectations and to SR 11-7 / SS1/23 thinking, and the average CBUAE thematic review asks 47 model-risk questions — our template pre-answers 41 of them. We share a redacted sample on the first call under NDA.'
  },
  {
    question: 'Where does our data live, and where do the engineers work?',
    answer:
      'The bank\'s data stays in the bank\'s environment. Our engineers operate through your VDI, the model artefacts stay inside your perimeter, and named UAE-resident engineers appear on the SoW. We have shipped under VDI-only constraints for tier-1 banks in both Abu Dhabi and Dubai — that constraint is the default, not the exception.'
  },
  {
    question: 'We already pay for SAS / Actimize / Oracle FCCM / FICO Falcon. Do you replace them?',
    answer:
      'No. We sit on top. Our learning-to-rank layer prioritises alerts from your existing monitoring engine; we do not replatform. ROI is measured in false-positive reduction, not a vendor migration. For fraud, we integrate with your payment switch — AANI, UAEFTS, mada — at sub-80 ms p99 inference.'
  },
  {
    question: 'How do you handle Arabic name variants in entity resolution?',
    answer:
      'A known failure mode of off-the-shelf AML vendors. We run a Quantexa-pattern entity resolution stack with a fine-tuned in-house transformer for Arabic name variants, transliteration confusion sets (e.g. Mohamed / Mohammad / Muhammad), and Khaleeji-specific patronymics. The graph features feed the alert prioritisation model with documented match-quality metrics.'
  },
  {
    question: 'What does the pre-contract back-test actually involve?',
    answer:
      'We run a retrospective back-test on the bank\'s anonymised historical alerts (AML), historical disputes (fraud), or historical book (credit), inside the bank\'s environment, and share the lift vs the incumbent before SoW signature. No data leaves the bank. We do not ask for production access — we ask for a labelled historical sample. The bank keeps everything we produce, regardless of whether the engagement proceeds.'
  },
  {
    question: 'How do you avoid a "science project" that operations cannot run?',
    answer:
      'Production-first engineering. Models ship with a model card, a monitoring plan, a runbook, and an SLA. Retraining cadence is documented; drift detectors are deployed alongside the model; the operations team trains alongside the engineering team. Where the bank\'s data-science team wants to take over, we structure pair-programming and a clean handover by sprint end. No black boxes, no orphan models.'
  },
  {
    question: 'How do you treat fair lending and protected-attribute proxies?',
    answer:
      'Every credit model ships with a fair-lending checklist, monotone constraints on protected-attribute proxies where applicable, and a documented protected-attribute proxy testing methodology (zip-code, surname, employer-segment proxies). SHAP-based explainability is the floor, not the ceiling. The validation plan includes a holdout fairness test that the MRM committee can re-run.'
  },
  {
    question: 'What is your post-go-live SLA, and who is on the hook?',
    answer:
      'The named senior engineer who shipped the model is on the hook for performance SLAs. We offer a managed-operations model with 24x7 monitoring and quarterly model validation, or a clean handover with pair-programming and documentation. Most banks pick a hybrid — Brocode runs months one through six while the bank\'s data-science team builds capability, then the bank takes operational ownership with us on standby.'
  }
];

const compareRows: CompareRow[] = [
  { feature: 'Pre-contract back-test on your historical data', brocode: true, competitors: [false, false, false, false] },
  { feature: 'Model risk file aligned to CBUAE / SR 11-7 / SS1/23', brocode: true, competitors: ['Partial', false, false, 'Partial'] },
  { feature: 'Sits on top of incumbent (no replatform)', brocode: true, competitors: [true, false, false, true] },
  { feature: 'Arabic name variant entity resolution', brocode: true, competitors: [false, 'Partial', false, false] },
  { feature: 'UAE-resident engineers, VDI-only delivery', brocode: true, competitors: [false, false, false, 'Partial'] },
  { feature: 'Sub-80 ms p99 fraud inference on payment switch', brocode: true, competitors: ['Partial', true, 'Partial', false] },
  { feature: 'Production code, not advisory deliverable', brocode: true, competitors: [false, true, true, true] },
  { feature: 'Fair-lending checklist & monotone constraints', brocode: true, competitors: ['Partial', false, false, 'Partial'] },
  { feature: 'Named engineers, no offshore sub-contracting', brocode: true, competitors: [false, true, true, 'Partial'] }
];

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a free back-test on your alerts or your book',
  subtitle:
    'A senior engineer who has shipped inside a CBUAE-supervised bank responds within one business day. We share the back-test methodology and the lift figures from comparable engagements on the first call.',
  ctaLabel: 'Request the back-test',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'regulator',
      label: 'Regulator',
      type: 'select',
      required: true,
      options: ['CBUAE', 'SAMA', 'CBB', 'QCB', 'CBK', 'CBO', 'ADGM FSRA', 'DFSA', 'Other']
    },
    {
      name: 'sizeByAssets',
      label: 'Institution size by assets',
      type: 'select',
      required: true,
      options: ['< USD 10 bn', 'USD 10–50 bn', 'USD 50–200 bn', '> USD 200 bn']
    },
    {
      name: 'aiMaturity',
      label: 'Current AI maturity',
      type: 'select',
      options: ['No production models', '1–5 in production', '5–25', '> 25, with an MRM function']
    },
    {
      name: 'priorityUseCase',
      label: 'Priority use case',
      type: 'select',
      required: true,
      options: ['AML transaction monitoring', 'Fraud', 'Credit scoring', 'Churn & customer intelligence', 'KYC automation', 'Arabic chatbot']
    },
    {
      name: 'existingPlatform',
      label: 'Existing risk / fraud platform',
      type: 'text',
      placeholder: 'SAS / Actimize / Oracle FCCM / FICO Falcon / SymphonyAI / homegrown / other'
    },
    {
      name: 'dataEnv',
      label: 'Data environment',
      type: 'select',
      options: ['On-premise', 'Private cloud', 'Azure UAE', 'AWS Bahrain', 'OCI', 'Snowflake', 'Databricks', 'Hybrid']
    }
  ]
};

const useCases = [
  {
    title: 'AML alert prioritisation',
    body: 'Learning-to-rank layer on Actimize / SAS AML / Oracle FCCM / SymphonyAI. Tier-1 UAE bank reference: 41 % reduction in false-positive review time with no change to SAR rate.',
    span: 'lg' as const,
    metric: '41 % review-time reduction'
  },
  {
    title: 'Entity resolution & graph',
    body: 'Quantexa-pattern graph features with Arabic name-variant transformer. Resolves transliteration, patronymics, and beneficial-ownership chains across correspondent flows.',
    span: 'md' as const
  },
  {
    title: 'Real-time payment fraud',
    body: 'Sub-80 ms p99 inference integrated to UAEFTS / AANI / IPI / mada. Digital-bank reference: 32 ms p99, documented USD-equivalent losses prevented.',
    span: 'md' as const,
    metric: '32 ms p99'
  },
  {
    title: 'Credit scoring on SME book',
    body: 'KSA tier-1 bank reference: AUC lift of 0.07 vs incumbent, IFRS 9 staging stability test passed on a 24-month rolling window.',
    span: 'md' as const,
    metric: '+0.07 AUC'
  },
  {
    title: 'Early-warning & collections',
    body: 'Behavioural deterioration signals on retail and corporate books. Calibrated to your Basel III credit policy and downturn assumptions.',
    span: 'md' as const
  },
  {
    title: 'KYC document intelligence',
    body: 'Emirates ID, passport, and trade-licence parsing in seconds. Arabic OCR pipeline on Surya + PaddleOCR-Arabic.',
    span: 'md' as const
  },
  {
    title: 'Churn & next-best-action',
    body: 'CDP-agnostic feature store on Snowflake / Databricks / Teradata with SHAP-based explainability for relationship managers.',
    span: 'md' as const
  },
  {
    title: 'Arabic relationship-manager copilot',
    body: 'Self-hosted LLM grounded in your product and policy library. MSA + Khaleeji dialect handling for client briefings and call summaries.',
    span: 'md' as const
  },
  {
    title: 'Sanctions screening uplift',
    body: 'Re-rank layer on top of Bridger / Fircosoft / OFAC scanning, with fine-tuned matching for Arabic-script and transliterated names.',
    span: 'md' as const
  }
];

const integrationSteps: TimelineStep[] = [
  {
    label: 'Layer 1',
    title: 'Source systems',
    description: 'Core banking (T24, Finacle, Flexcube, in-house), card switch (UAEFTS, AANI, IPI, mada), CRM (Salesforce / homegrown), KYC and document store.'
  },
  {
    label: 'Layer 2',
    title: 'Feature store',
    description: 'Snowflake, Databricks or Teradata feature store with lineage, freshness SLAs, and protected-attribute proxy tagging.'
  },
  {
    label: 'Layer 3',
    title: 'Inference & re-ranking',
    description: 'Learning-to-rank on top of Actimize / SAS AML / Oracle FCCM / FICO Falcon / SymphonyAI. Sub-80 ms p99 on the payment switch for fraud.'
  },
  {
    label: 'Layer 4',
    title: 'MRM artefacts',
    description: 'Model card, development document, validation plan, fair-lending checklist, monitoring KPIs, challenger model. Refreshed on a documented cadence.'
  },
  {
    label: 'Layer 5',
    title: 'Operations & monitoring',
    description: 'Drift detectors, retraining schedule, alert volume guardrails, and quarterly model validation reports for the supervisor.'
  }
];

const relatedItems = [
  { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Credit, churn, fraud and early-warning modelling.' },
  { label: 'Document Intelligence', href: '/services/document-intelligence', description: 'KYC, onboarding and trade-licence parsing in Arabic and English.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Model risk management, monitoring and drift for production banking AI.' },
  { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Arabic relationship-manager copilots and customer intelligence.' },
  { label: 'Certifications & Compliance', href: '/security-compliance', description: 'ISO 27001, SOC 2 Type II, PCI DSS attestation, CBUAE Cloud Computing Regulation evidence.' }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI consulting and delivery for CBUAE- and SAMA-supervised banks',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Kuwait', 'Oman'],
  audience: {
    '@type': 'Audience',
    audienceType: 'Banks, asset managers, and CBUAE/SAMA-supervised financial institutions in the GCC'
  },
  description:
    'Production AI for fraud, AML, credit and customer intelligence inside CBUAE- and SAMA-supervised banks. Pre-contract back-tests, model risk file aligned to SR 11-7 / SS1/23 / CBUAE expectations.'
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

export default function BankingFinancialServicesPage() {
  return (
    <>
      <Script
        id="ld-service-banking"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="ld-faq-banking"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero — midnight + brand blue, AML alert queue mock */}
      <section className="relative isolate overflow-hidden bg-[#070b1c] text-white">
        <GradientMesh tone="midnight" className="opacity-50" />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/industries/banking-financial-services.jpg"
            alt="Glass skyline of the Dubai International Financial Centre at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b1c] via-[#070b1c]/85 to-[#070b1c]" />
        </div>

        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Banking &amp; Financial Services' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-eyebrow uppercase tracking-[0.18em] text-brand-300">
                Banking AI · CBUAE &amp; SAMA delivery
              </p>
              <h1 className="mt-5 text-balance text-display-xl">
                Production AI for CBUAE- and SAMA-supervised banks — shipped with a model risk file that survives committee.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                Fraud, AML, credit, customer intelligence. We run a free retrospective back-test on your historical
                alerts, disputes, or book — inside your environment — and share the lift vs your incumbent before SoW
                signature. Every model ships with the documentation pack supervisors expect to read.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#quote-form" size="lg" event="quote_open" variant="primary">
                  Request a free back-test
                </MagneticButton>
                <MagneticButton
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  size="lg"
                  variant="whatsapp"
                  event="whatsapp_hero"
                >
                  WhatsApp our banking lead
                </MagneticButton>
              </div>

              <p className="mt-6 text-sm text-white/55">
                Pre-contract back-test on your alerts. Model risk file included.
              </p>
            </div>

            {/* Hero command-centre mock */}
            <div className="lg:col-span-5">
              <GlassCard tone="dark" padding="lg" className="border-white/10 bg-white/[0.04]">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-semibold uppercase tracking-wider text-brand-300">AML alert queue · re-ranked</p>
                  <p className="text-white/40">Model v2.4 · MRM-approved</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="rounded-lg border border-brand-400/30 bg-brand-500/10 p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">Alert #AT-918341</span>
                      <span className="rounded-full bg-brand-500/40 px-2 py-0.5 text-[10px] font-semibold text-white">
                        Rank 1 · 0.94
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-white/60">Entity graph: 3 nodes · 1 flagged PEP · Arabic-variant match</p>
                  </li>
                  <li className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Alert #AT-918209</span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">Rank 2 · 0.81</span>
                    </div>
                    <p className="mt-1 text-[11px] text-white/50">Structuring pattern · 14-day window</p>
                  </li>
                  <li className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Alert #AT-918047</span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">Rank 3 · 0.78</span>
                    </div>
                    <p className="mt-1 text-[11px] text-white/50">Sanctioned-jurisdiction adjacency</p>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-[11px] text-white/60">
                  <div className="flex justify-between">
                    <span>SHAP top feature</span>
                    <span className="font-mono text-white/80">graph_degree_centrality · +0.31</span>
                  </div>
                  <div className="mt-1 flex justify-between">
                    <span>Model ID · last validated</span>
                    <span className="font-mono text-white/80">aml-rerank-v2.4 · 12 days ago</span>
                  </div>
                </div>
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
              { value: '14', label: 'GCC regulated financial clients' },
              { value: '41%', label: 'AML false-positive review-time cut (tier-1 reference)' },
              { value: '32 ms', label: 'p99 fraud inference (digital-bank reference)' },
              { value: '47 → 41', label: 'CBUAE thematic Qs pre-answered by our MRM template' }
            ]}
          />
        </div>
      </section>

      {/* Problem & stakes */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="The painful problem"
            title="18,000 alerts a month at 96 % false-positive. Themis-aligned review has flagged effectiveness."
            description="The compliance floor cannot triage inside the regulatory SLA. The in-house data-science team has spent eleven months in MRM committee. CBUAE thematic review is on the calendar. The CEO has committed a customer-intelligence number in the earnings call. None of it survives a bad audit."
          />

          <BentoGrid className="mt-12">
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Failure mode 1</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Model risk committee</h3>
              <p className="mt-2 text-ink-600">
                Internal builds reach committee without the validation plan, fair-lending evidence, or challenger
                model the chair will demand. Eleven months of review is the median, not the exception.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Failure mode 2</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Data-residency constraint</h3>
              <p className="mt-2 text-ink-600">
                Hyperscaler shared-responsibility models do not satisfy CBUAE Cloud Computing Regulation. The data
                does not leave the bank. The engineering model must respect that on day one.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Failure mode 3</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Alert volume</h3>
              <p className="mt-2 text-ink-600">
                Rules-based monitoring fires faster than the compliance floor can triage. The supervisor reads
                effectiveness, not volume. Re-ranking on top of the incumbent is the lever that moves both numbers.
              </p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Use cases bento */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case grid"
            title="Nine production plays across fraud, AML, credit and customer intelligence."
            description="Each ships with a quantified lift on the bank&apos;s own data and an MRM evidence pack the committee can read on first pass."
          />
          <BentoGrid className="mt-12">
            {useCases.map((u) => (
              <BentoCell key={u.title} span={u.span} variant="light">
                <h3 className="text-lg font-semibold text-ink-900">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{u.body}</p>
                {u.metric && (
                  <p className="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
                    {u.metric}
                  </p>
                )}
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Mechanism — integration timeline */}
      <section className="relative overflow-hidden bg-[#070b1c] py-22 text-white md:py-30">
        <GradientMesh tone="midnight" className="opacity-30" />
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="Integration mechanism"
              title="On top of the incumbent. Inside the bank perimeter."
              description="We do not rip and replace. The bank keeps SAS / Actimize / Oracle FCCM / FICO Falcon / SymphonyAI. We add a learning-to-rank layer, a feature store, and an MRM evidence pack."
            />
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-semibold text-brand-300">Entity resolution</p>
                <p className="mt-1 text-white/70">Quantexa-pattern graph features</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-semibold text-brand-300">Feature store</p>
                <p className="mt-1 text-white/70">Snowflake / Databricks / Teradata</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-semibold text-brand-300">Payment switch</p>
                <p className="mt-1 text-white/70">UAEFTS · AANI · IPI · mada</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-semibold text-brand-300">Explainability</p>
                <p className="mt-1 text-white/70">SHAP, monotone constraints</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <ScrollTimeline steps={integrationSteps} />
          </div>
        </div>
      </section>

      {/* Regulator block */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Regulator &amp; standards"
              title="Designed for the reviewers in the room."
              description="CBUAE supervisory expectations. Basel III RWA discipline. IFRS 9 staging. FATCA / CRS. AML / CFT Federal Decree-Law 20. Model risk management aligned to SR 11-7 / SS1/23. We bring the evidence; the supervisor reads it."
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">CBUAE &amp; Cloud Computing Regulation</p>
              <p className="mt-2 text-sm text-ink-700">
                Every reference architecture maps to CBUAE Cloud Computing Regulation expectations. Data-residency
                and key-management posture are documented for the supervisor before the bank signs the SoW.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Basel III &amp; IFRS 9</p>
              <p className="mt-2 text-sm text-ink-700">
                Credit models ship with IFRS 9 staging stability evidence (24-month rolling), downturn calibration,
                and an RWA inflation sensitivity. The development document is structured for IRB / SA defence.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">SR 11-7 / SS1/23 / MRM</p>
              <p className="mt-2 text-sm text-ink-700">
                Model risk file template includes development document, validation plan, fair-lending and bias
                review, monitoring KPIs, challenger model description, and a CBUAE supervisor-question response
                matrix. The same template that has cleared committee in a UAE tier-1 bank.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">PCI DSS &amp; ISO posture</p>
              <p className="mt-2 text-sm text-ink-700">
                Fraud inference appliance carries PCI DSS attestation. ISO 27001, ISO 27017, SOC 2 Type II in place.
                Sub-processor list and DPA aligned to UAE PDPL plus DIFC and ADGM data-protection regimes where the
                bank operates a regulated arm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference engagements"
            title="Three anonymised outcomes — reachable on a reference call."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">UAE tier-1 · AML</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  41 % false-positive review-time reduction
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Learning-to-rank layer on existing AML monitoring. No change to SAR rate. Full lineage to the CBUAE
                  supervisor questionnaire. Customer reachable under NDA.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">KSA tier-1 · Credit</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  +0.07 AUC lift on small-business book
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  IFRS 9 staging stability test passed at a 24-month rolling window. Fair-lending checklist signed
                  off by the bank&apos;s MRM committee. Validation pack cleared at first review.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Digital bank · Fraud</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  32 ms p99 instant-payment fraud inference
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Integrated to the payment switch. Documented USD-equivalent losses-prevented figure. Model-card and
                  PSD-style customer-impact metrics shipped on day one.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Differentiation"
            title="Brocode vs the four archetypes your evaluation team is already weighing."
            description="The lead magnet includes a CBUAE supervisor-question response matrix that walks an MRM committee through this comparison."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['Big-4 risk practice', 'SAS / Actimize / Oracle FCCM / FICO', 'Offshore SI (India / near-shore)', 'In-house build']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Model Risk File for CBUAE-Supervised Banks"
            description="A 36-page template with worked examples for fraud, AML and credit models. Development document outline, validation plan, fair-lending checklist, monitoring KPIs, challenger-model framing, and a CBUAE supervisor-question response matrix. Headline figure: the average CBUAE thematic review asks 47 model-risk questions; this template pre-answers 41 of them."
            contents={[
              'Three-lines-of-defence operating model',
              'AML / fraud / credit model evidence (worked examples)',
              'Bias and fairness test pack',
              'Model card and datasheet',
              'Periodic validation playbook',
              'CBUAE supervisor-question response matrix'
            ]}
            filePath="/downloads/model-risk-file-cbuae.pdf"
            ctaLabel="Email me the template"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="MRM &amp; delivery FAQ"
              title="The eight questions every MRM chair raises."
              description="If yours is not here, raise it in the form below. We answer in writing before the first call."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="bg-surface-muted py-22 md:py-30" data-page={PAGE_SLUG}>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-eyebrow uppercase text-brand">Start the conversation</p>
            <h2 className="mt-4 text-display-md text-ink-900">
              Request a free back-test on your alerts or your book.
            </h2>
            <p className="mt-5 text-ink-600">
              Tell us the regulator, the priority use case, and the existing platform. We come back with the
              back-test methodology and the lift figures from comparable engagements on the first call.
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
                Message our banking lead directly.
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm config={formConfig} />
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Request back-test" primaryHref="#quote-form" />
    </>
  );
}
