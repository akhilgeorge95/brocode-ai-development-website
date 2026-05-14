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
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { CompareTable } from '@/components/ui/CompareTable';
import { FAQ } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';

const SLUG = 'machine-learning-development';
const WHATSAPP_MESSAGE =
  "Hi Brocode - we have data scientists but our models are stuck in notebooks. I'd like to talk about a production ML engagement for [organisation]. The first use case is [fraud / churn / pricing / other]. When could a senior ML engineer take a 30-minute call?";

export const metadata: Metadata = {
  title: 'Machine Learning Development Company UAE | Production ML in 12 Weeks | Brocode',
  description:
    'Named UAE-resident ML engineers ship production models in 12 weeks, monitored, retrainable, and auditable against CBUAE and DFSA model-risk standards. Fixed-price option available.',
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: 'Production ML in 12 weeks - Brocode Solutions',
    description:
      'A fixed-shape ML Delivery Pod takes your models from Jupyter to a regulator-ready production environment in three months.',
    url: `https://www.brocode.ae/services/${SLUG}`,
    images: [{ url: `/images/services/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Production ML in 12 weeks - Brocode Solutions',
    description: 'Notebook to production, monitored and audit-ready, by a named UAE-resident pod.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a 45-minute production-readiness review with a senior ML engineer',
  subtitle:
    'A senior MLE on the Brocode pod reviews your current pipeline, names the blockers, and replies within one business day.',
  ctaLabel: 'Book the production-readiness review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'currentState',
      label: 'Current state of ML at your organisation',
      type: 'select',
      required: true,
      options: [
        'No models yet',
        'Models in notebooks only',
        '1-2 in production',
        '3+ in production but unmonitored',
        'Mature MLOps'
      ]
    },
    {
      name: 'useCase',
      label: 'Primary use case',
      type: 'multiselect',
      options: [
        'Fraud',
        'Credit risk',
        'Churn',
        'Pricing',
        'Demand forecasting',
        'Recommendation',
        'Computer vision',
        'NLP',
        'Other'
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
        'No constraint'
      ]
    },
    {
      name: 'stack',
      label: 'Existing data and ML stack',
      type: 'text',
      placeholder: 'Snowflake / Databricks / SageMaker / Azure ML / on-prem / homegrown'
    },
    {
      name: 'regulators',
      label: 'Regulator(s) in scope',
      type: 'multiselect',
      options: ['CBUAE', 'DFSA', 'VARA', 'FSRA', 'SAMA', 'None']
    },
    {
      name: 'goLive',
      label: 'Target first model in production date',
      type: 'date',
      helper: 'Use today\'s date if "as soon as possible".'
    }
  ]
};

const pipelineNodes = [
  { id: 'feature', label: 'Feature Store', tool: 'Feast', detail: 'Versioned offline + online features.' },
  { id: 'training', label: 'Training', tool: 'MLflow', detail: 'Tracked runs, signed lineage.' },
  { id: 'registry', label: 'Registry', tool: 'MLflow Models', detail: 'Stage promotion + approvals.' },
  { id: 'serving', label: 'Serving', tool: 'BentoML / Triton', detail: 'Canary + shadow scoring.' },
  { id: 'monitoring', label: 'Monitoring', tool: 'Evidently + Prometheus', detail: 'Drift alerts into Splunk / Datadog.' }
];

const timelineSteps = [
  {
    label: 'Weeks 1-2',
    title: 'Discovery and production-readiness baseline',
    description:
      'On-site discovery with your data team. We score your current pipeline against the 47-point readiness audit, agree the first use case, and lock the success metric with the sponsor and the model-risk owner.',
    metric: 'Deliverable: signed scoping document + readiness scorecard'
  },
  {
    label: 'Weeks 3-6',
    title: 'Prototype on your real data',
    description:
      'The pod stands up Feast, MLflow, and an Airflow DAG inside your VPC or G42 tenancy. We re-implement the candidate model with a documented training run, a held-out validation set drawn from your live traffic, and a challenger model for benchmark.',
    metric: 'Deliverable: tracked experiments + challenger comparison'
  },
  {
    label: 'Weeks 7-10',
    title: 'Production hardening with paired retraining',
    description:
      'BentoML or NVIDIA Triton serves the model behind a canary. Evidently AI and Prometheus stream drift, latency, and accuracy into your Splunk or Datadog. A paired retraining DAG runs on the same data contract so the second cycle is the team\'s, not ours.',
    metric: 'Deliverable: first production deployment + paired retrain'
  },
  {
    label: 'Weeks 11-12',
    title: 'Regulator-ready handover',
    description:
      'We produce the Model Risk Pack aligned to CBUAE Model Risk Management Standards and DFSA SEMC: data lineage, validation evidence, challenger results, fairness review, and the ongoing monitoring plan. Internal audit walks the artefacts before signature.',
    metric: 'Deliverable: Model Risk Pack + audit walkthrough'
  }
];

const objections = [
  {
    objection:
      'We have been burned by consultancies that send a partner to kickoff and then we never see them again. Show me the actual engineers and their CVs.',
    response:
      'Every proposal is accompanied by a named-engineer CV pack with public GitHub, LinkedIn, conference talks, and certifications for the exact people who will be on your engagement. The same names appear on the contract. The same names show up in your standups. If a person rotates, that is a contract amendment, not a quiet body-shop swap.',
    proof: 'Proof: anonymised UAE Tier-1 bank reference - fraud model shipped in 11 weeks, AED 14M recovered in the first six months, passed internal audit on first review with the same four engineers on the page from week one.'
  },
  {
    objection:
      'Our data cannot leave the country. Can your team work entirely inside our VPC, on our SageMaker tenancy, or on G42 Cloud without ever extracting data?',
    response:
      'Yes. The pod is UAE-resident, contracted under UAE law, and the entire delivery rhythm assumes your data does not move. We commission MLflow, Feast, and the retraining DAGs inside your tenancy. No customer record, no aggregate, no embedding, ever lands on a Brocode-controlled bucket. The MSA and DPA we sign say so in writing.',
    proof: 'Proof: anonymised GCC family-office reference - portfolio risk model running on G42 Cloud with full data residency, quarterly retraining, and customer-managed keys on every Feast feature.'
  },
  {
    objection:
      'Our internal data science team will resist this. How do you knowledge-transfer instead of locking us into a multi-year retainer?',
    response:
      'The pod pairs with your team from day one. The MLOps engineer and data engineer sit beside your senior data scientists; the second retraining cycle is run by them, not us, while we observe. The Model Risk Pack template, the Feast feature definitions, and the Airflow DAGs all live in your repos. Our exit clause is one month, not twelve.',
    proof: 'Proof: anonymised regional logistics-tech reference - the pricing pod handed over fully after 14 weeks; the in-house team has run the last 11 retrains without us, lifting gross margin 4.1 percentage points in five months.'
  }
];

const compareRows = [
  {
    feature: 'Named senior engineers on the contract',
    brocode: 'Yes - CVs sent with proposal',
    competitors: ['Partner + offshore subcontractors', 'Rotating body-shop', 'Rotating PSO consultants', 'You hire them']
  },
  {
    feature: 'Fixed 12-week path to production',
    brocode: true,
    competitors: ['6-month diagnostic typical', 'Time and materials', 'T&M, scope drift', '9-14 months to hire team']
  },
  {
    feature: 'CBUAE / DFSA Model Risk Pack template',
    brocode: 'Included in every engagement',
    competitors: [false, false, 'On request, extra fee', false]
  },
  {
    feature: 'On-premise / G42 Cloud delivery',
    brocode: true,
    competitors: ['Hyperscaler-first', 'Hyperscaler-first', 'Cloud-vendor lock-in', 'Depends on hire']
  },
  {
    feature: 'UAE-resident delivery pod',
    brocode: '100% of pod under UAE labour law',
    competitors: ['UAE partner + offshore build', 'Karachi / Bangalore', 'UAE-region cloud, US-billed team', 'UAE hires only']
  },
  {
    feature: 'Reference calls without an NDA gate',
    brocode: 'Three customers reachable by phone',
    competitors: ['NDA-gated case studies', 'Sanitised slide-ware', 'Vendor logos only', 'N/A']
  },
  {
    feature: 'Engineering-hour blended rate',
    brocode: '45-55% of Big-4 published GCC rates',
    competitors: ['Big-4 standard rates', 'Lowest, no audit trail', 'US-billed, premium', '~AED 7-10M / year fully loaded']
  },
  {
    feature: 'Knowledge transfer commitment',
    brocode: 'One-month exit, repos with you',
    competitors: ['Multi-year retainer pull', 'Code in offshore repos', 'Cloud-managed services lock-in', 'Internal-only IP']
  }
];

const faqItems = [
  ...objections.map((o) => ({ question: o.objection, answer: `${o.response}\n\n${o.proof}` })),
  {
    question: 'How is the ML Delivery Pod sized, and can I pay for less?',
    answer:
      'The default pod is one ML lead, two senior MLEs, one MLOps engineer, one data engineer, and one solution architect. For lighter scopes (a single tabular model with mature data plumbing) we will run a three-person variant. The fixed-price 12-week path assumes the full pod; the leaner variant is time-and-materials with weekly burn caps.'
  },
  {
    question: 'Who owns the intellectual property of the model and the pipelines?',
    answer:
      'You do. The MSA assigns all model artefacts, code, Feast feature definitions, Airflow DAGs, and MLflow logs to your organisation. Brocode retains ownership only of generic reference templates and internal tooling that is not specific to your data or domain. No client data, derived embeddings, or model weights are reused on other engagements.'
  },
  {
    question: 'What does ongoing retraining cost after handover?',
    answer:
      'The default expectation is that your internal team runs retraining cycles after handover. We size and document the compute envelope of the retrain DAG so finance can budget it. If you prefer a managed-retraining contract, that is a separate run-phase SLA: typically AED 25-65k per model per quarter depending on data volume and how active the drift signal is.'
  },
  {
    question: 'Can you start before our procurement signs the MSA?',
    answer:
      'We can mobilise on a four-week paid pilot under a short-form services order while the MSA is in legal review. The pilot covers the discovery and the readiness scorecard. If you decide not to proceed, the work product (the scorecard and the scoped backlog) is yours to keep.'
  },
  {
    question: 'What happens when the model degrades or the regulator opens a query?',
    answer:
      'Every model ships with a runbook covering drift thresholds, escalation contacts, and the named on-call engineer for the first 90 days. If a regulator query lands, we have a 48-hour response SLA on the Model Risk Pack: we attend the query meeting alongside your model risk officer and produce the supporting evidence pack.'
  }
];

const proofItems = [
  { value: 'AED 14M', label: 'Fraud recovered in six months - UAE Tier-1 bank reference' },
  { value: '4.1 pp', label: 'Gross-margin uplift - regional logistics-tech pricing model' },
  { value: '11 weeks', label: 'Notebook-to-production median across last 18 engagements' },
  { value: '18/47', label: 'Median readiness score - 22 UAE enterprises benchmarked' }
];

const relatedItems = [
  {
    label: 'MLOps & AI Infrastructure',
    href: '/services/mlops-ai-infrastructure',
    description: 'The platform layer underneath every production ML pod.'
  },
  {
    label: 'Deep Learning Solutions',
    href: '/services/deep-learning-solutions',
    description: 'When the use case is computer vision or sequence modelling.'
  },
  {
    label: 'Natural Language Processing',
    href: '/services/natural-language-processing',
    description: 'For bank-fraud text and customer-feedback workloads.'
  },
  {
    label: 'Banking & Financial Services',
    href: '/industries/banking-financial-services',
    description: 'Risk, fraud, and customer intelligence in regulated banks.'
  },
  {
    label: 'Why Brocode',
    href: '/why-brocode',
    description: 'The differentiation pack for shortlist-stage procurement.'
  }
];

export default function MachineLearningDevelopmentPage() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Machine Learning Development',
    serviceType: 'Production machine learning engineering',
    provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain', 'Egypt', 'Jordan'],
    description:
      'A fixed 12-week production ML engagement delivered by a named UAE-resident pod, aligned to CBUAE Model Risk Management Standards and DFSA SEMC guidance.',
    url: `https://www.brocode.ae/services/${SLUG}`
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
      <Script id="service-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="faq-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO - notebook to dashboard pipeline */}
      <section className="relative isolate overflow-hidden bg-[#070d1c] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-brand/30 to-transparent blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-accent/30 to-transparent blur-3xl" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Machine Learning Development' }
            ]}
            variant="dark"
          />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4 text-white/70">Production ML, UAE-resident pod</p>
              <h1 className="text-balance text-display-2xl">
                Notebook to production. <span className="text-brand-300">Twelve weeks.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                A named pod of senior ML engineers takes the model your team built and ships it - monitored, retrainable, and audit-ready against CBUAE and DFSA model-risk standards.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" event="quote_open">
                  Book the 45-minute review
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                  data-event="whatsapp_hero"
                  data-page={SLUG}
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Hero visual: notebook --> pipeline --> dashboard */}
            <div className="lg:col-span-6">
              <div className="relative grid grid-cols-12 gap-3">
                {/* Notebook card */}
                <div className="col-span-12 sm:col-span-5">
                  <div className="rounded-2xl border border-white/10 bg-[#0d1428] p-5 opacity-70">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/40">
                      <span>fraud_v3.ipynb</span>
                      <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[9px] font-semibold text-red-300">experiment</span>
                    </div>
                    <div className="mt-3 space-y-1.5 font-mono text-[10px] text-white/60">
                      <p><span className="text-purple-300">import</span> sklearn</p>
                      <p><span className="text-purple-300">from</span> xgboost <span className="text-purple-300">import</span> XGBClassifier</p>
                      <p>model = XGBClassifier(...)</p>
                      <p>model.fit(X_train, y_train)</p>
                      <p className="text-yellow-300"># TODO: serve this somehow</p>
                      <p className="text-yellow-300"># TODO: retrain? monitoring?</p>
                    </div>
                  </div>
                </div>

                {/* Arrow + pipeline */}
                <div className="col-span-12 sm:col-span-2 flex items-center justify-center">
                  <div className="hidden sm:block h-px w-full bg-gradient-to-r from-white/10 via-brand to-white/10" />
                  <div className="block sm:hidden w-px h-12 bg-gradient-to-b from-white/10 via-brand to-white/10" />
                </div>

                {/* Dashboard card */}
                <div className="col-span-12 sm:col-span-5">
                  <div className="rounded-2xl border border-brand/40 bg-gradient-to-br from-[#0d1428] to-[#0a1b30] p-5 shadow-[0_0_60px_-15px_rgba(255,107,53,0.4)]">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-brand-300">
                      <span>fraud_v3 - prod</span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">live</span>
                    </div>
                    <dl className="mt-3 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <dt className="text-white/50">Requests / min</dt>
                        <dd className="font-mono text-lg text-white">1,247</dd>
                      </div>
                      <div>
                        <dt className="text-white/50">p95 latency</dt>
                        <dd className="font-mono text-lg text-white">42<span className="text-xs text-white/60">ms</span></dd>
                      </div>
                      <div>
                        <dt className="text-white/50">Drift score</dt>
                        <dd className="font-mono text-lg text-emerald-300">0.03</dd>
                      </div>
                      <div>
                        <dt className="text-white/50">Last retrain</dt>
                        <dd className="font-mono text-lg text-white">4d ago</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Pipeline node row */}
                <div className="col-span-12 mt-2 grid grid-cols-5 gap-2">
                  {pipelineNodes.map((n) => (
                    <div key={n.id} className="rounded-xl border border-white/10 bg-white/5 p-2 text-center">
                      <p className="text-[9px] uppercase tracking-wider text-brand-300">{n.label}</p>
                      <p className="mt-0.5 font-mono text-[10px] text-white/80">{n.tool}</p>
                    </div>
                  ))}
                </div>
                <p className="col-span-12 mt-2 text-center text-xs text-white/50">
                  Notebook -&gt; Production. 12 weeks.
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

      {/* The notebook-to-production gap */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="The gap"
            title="Nine prototypes. One production model. The audit committee wants to know why."
            description="Three failure modes account for almost every stuck ML programme we audit in UAE enterprises. Each one maps directly to an article in the regulator's most recent circular."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'No retraining pipeline',
                body:
                  'A model trained once on a Q1 snapshot is a model that silently rots. CBUAE Model Risk Management Standards expect a documented retraining cadence and trigger conditions; without that, the model is an audit finding waiting to be written up.'
              },
              {
                title: 'No monitoring',
                body:
                  'Notebook-grade scoring has no latency SLO, no drift detector, and no link to your Splunk or Datadog. DFSA SEMC guidance on algorithmic systems requires operational telemetry that an internal auditor can reproduce on demand.'
              },
              {
                title: 'No audit trail',
                body:
                  'Without a feature store, an experiment tracker, and a model registry, the lineage from a single decision back to the training data is reconstructed by hand if at all. That answer cannot be produced inside the regulator\'s response window.'
              }
            ].map((g) => (
              <Reveal key={g.title}>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-semibold text-ink-900">{g.title}</h3>
                  <p className="mt-3 text-sm text-ink-700">{g.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The ML Delivery Pod - bento */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="The pod"
            title="A fixed-shape ML Delivery Pod, named engineers on the contract."
            description="Six seats. UAE-resident or relocatable. One engagement contract. No partner-to-offshore handoff."
          />
          <BentoGrid className="mt-12">
            <BentoCell span="lg" variant="dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Pod composition</p>
              <h3 className="mt-3 text-2xl font-semibold">1 ML lead + 2 senior MLEs + 1 MLOps + 1 data engineer + 1 solution architect</h3>
              <p className="mt-4 text-white/70">
                Every name in the proposal appears in the standup, the commit log, and the regulator handover. We send full CVs with public GitHub, conference talks, and certifications before contract signature.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="brand">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Engagement</p>
              <h3 className="mt-3 text-3xl font-semibold">Fixed-price</h3>
              <p className="mt-3 text-white/85">12 weeks, fixed scope. Optional run-phase SLA after handover.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Location</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">UAE-resident</h3>
              <p className="mt-3 text-sm text-ink-700">On-site Dubai or Abu Dhabi, four days a week minimum during build phase.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Stack</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Feast + MLflow + Airflow + BentoML + Evidently</h3>
              <p className="mt-3 text-sm text-ink-700">Open-source spine. Portable. No hyperscaler lock-in.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Partners</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">NVIDIA Inception, AWS Advanced, Databricks, G42 Cloud, Snowflake</h3>
              <p className="mt-3 text-sm text-ink-700">Same engineers, certifications across all four ecosystems.</p>
            </BentoCell>
            <BentoCell span="wide">
              <p className="eyebrow">The contract</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink-900">One signing. Six names. Zero subcontractors.</h3>
              <p className="mt-3 text-ink-700">
                The MSA assigns model artefacts, code, Feast features, and MLflow logs to your organisation on creation. The DPA is UAE PDPL and GDPR aligned, with EU SCCs pre-filled if any data ever crosses borders. Customer-managed keys are the default, not a premium tier.
              </p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* 12-week Production Path - ScrollTimeline */}
      <section className="bg-ink-900 py-22 text-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="The 12-Week Production Path"
            title="Four phases. Named deliverables. Regulator artefacts at every gate."
            description="The default rhythm for any production ML engagement. Fixed-price option available; pilot-and-roll variants on request."
            variant="dark"
          />
          <div className="mt-14">
            <ScrollTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="What buyers usually push back on"
            title="Three objections we expect on the first call, and how we answer them."
          />
          <div className="mt-12 space-y-6">
            {objections.map((o, i) => (
              <Reveal key={i}>
                <article className="grid grid-cols-1 gap-6 rounded-2xl border border-ink-100 bg-surface-muted p-7 md:grid-cols-12 md:p-9">
                  <div className="md:col-span-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Objection {String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-3 text-lg font-semibold italic text-ink-900">&ldquo;{o.objection}&rdquo;</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-ink-700">{o.response}</p>
                    <p className="mt-4 rounded-xl border-l-2 border-brand bg-white px-4 py-3 text-sm text-ink-700">{o.proof}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reference architecture - bento */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference architecture"
            title="The Brocode Production-Ready Reference Architecture."
            description="The same five-layer spine on every engagement. Each layer is portable across AWS UAE North, Azure UAE North, G42 Cloud, or on-premise NVIDIA estates."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100 bg-white">
            <div className="grid grid-cols-1 divide-y divide-ink-100 md:grid-cols-5 md:divide-x md:divide-y-0">
              {pipelineNodes.map((n, i) => (
                <div key={n.id} className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">Layer {i + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900">{n.label}</h3>
                  <p className="mt-1 font-mono text-xs text-ink-600">{n.tool}</p>
                  <p className="mt-3 text-sm text-ink-700">{n.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-600">
            Drift signals flow from Evidently and Prometheus into your existing Splunk or Datadog so on-call routes through the team that already knows the pager.
          </p>
        </div>
      </section>

      {/* Image break */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={`/images/services/${SLUG}.jpg`}
            alt="Engineers reviewing an MLflow run tracker and feature-store dashboard inside a UAE bank's secure workspace"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent" />
        </div>
        <div className="container-site relative z-10 py-22 text-white">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/70">Case studies</p>
            <h2 className="mt-3 text-display-md">Three references the prospect can phone.</h2>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">UAE Tier-1 bank</p>
                <p className="mt-2 text-white/90">Real-time fraud-scoring engine shipped in 11 weeks. AED 14M recovered in the first six months. Passed internal audit on first review. Pod size: 5.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">Regional logistics-tech</p>
                <p className="mt-2 text-white/90">Dynamic-pricing model lifted gross margin 4.1 percentage points in five months. Internal team now owns the retraining cadence. Pod size: 4.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">GCC family-office holding</p>
                <p className="mt-2 text-white/90">Portfolio risk model running on G42 Cloud with full data residency. Retraining quarterly. Customer-managed keys throughout. Pod size: 4.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Big-4 partners, offshore body-shops, hyperscaler PSO, or hiring in - the honest read."
            description="The four routes a CDO actually weighs when this budget is on the table. Where we are not the right fit, we say so."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['Big-4 (Accenture, Deloitte, KPMG, EY)', 'Offshore dev shop', 'Hyperscaler PSO', 'DIY hiring']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="From Notebook to Production: the 47-Point Readiness Audit"
            description="A 28-page PDF and an Excel scoring template, built around CBUAE Model Risk Management Standards and DFSA SEMC guidance. The median UAE data science team scores 18 of 47."
            contents={[
              'Data foundation readiness',
              'Modelling discipline',
              'MLOps backbone',
              'Risk and governance',
              'Operational support',
              'Scoring rubric and benchmarks - median 18/47 across 22 UAE enterprises'
            ]}
            filePath="/downloads/production-ml-readiness-audit.pdf"
            ctaLabel="Email me the 47-point audit"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions we get on the first call</p>
            <h2 className="mt-3 text-display-md text-ink-900">Frequently asked.</h2>
            <p className="mt-4 text-ink-600">
              Everything below is what we already say in writing on the SOW. If the answer changes for your engagement, we redline it before signature.
            </p>
            <Link href="/contact" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand" data-event="secondary_cta_click" data-page={SLUG}>
              Ask a different question
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
            <p className="eyebrow text-white/70">Talk to the pod</p>
            <h2 className="mt-3 text-display-lg">A senior ML engineer replies within one business day.</h2>
            <p className="mt-5 max-w-lg text-white/75">
              Tell us the use case, the regulator, and the residency constraint. We come back with named engineers, a draft 12-week plan, and three references you can phone.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/75">
              <p><strong className="text-white">Direct WhatsApp:</strong> +971 50 761 2213</p>
              <p><strong className="text-white">Email:</strong> hello@brocode.ae</p>
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

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Book the review" primaryHref="#contact-form" />
    </>
  );
}
