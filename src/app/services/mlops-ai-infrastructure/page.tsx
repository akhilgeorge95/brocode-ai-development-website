import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { FAQ } from '@/components/ui/FAQ';
import type { FAQItem } from '@/components/ui/FAQ';
import { CompareTable } from '@/components/ui/CompareTable';
import type { CompareRow } from '@/components/ui/CompareTable';
import { ProofBand } from '@/components/ui/ProofBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { RelatedLinks } from '@/components/RelatedLinks';
import { buildWhatsAppLink, SITE } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';
import { PlatformTopology } from './_components/PlatformTopology';

const SLUG = 'mlops-ai-infrastructure';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I lead platform engineering at [organisation]. We have [N] models in some form of production and need to stand up a proper MLOps platform (registry, retraining, drift, canary). Could we get an hour with your principal platform engineer to walk through our current estate?";

export const metadata: Metadata = {
  title: 'MLOps & AI Infrastructure — Vendor-Neutral Platform Build in 16 Weeks | Brocode',
  description:
    'A production-grade ML platform on your Kubernetes — MLflow, BentoML, Ray Serve, Arize, Argo CD. Registry, retraining, drift, canary, governance. Fixed-fee 16-week delivery for UAE & KSA enterprises.',
  alternates: { canonical: `${SITE.url}/services/${SLUG}` },
  openGraph: {
    title: 'MLOps & AI Infrastructure — Brocode',
    description:
      'Vendor-neutral MLOps platform, fixed-fee 16-week build. Median time-to-production reduced from 11 weeks to 6 days across 14 deployments.',
    url: `${SITE.url}/services/${SLUG}`,
    images: [`/images/services/${SLUG}.jpg`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLOps & AI Infrastructure — Brocode',
    description: 'MLOps platform build. 16 weeks. Your Kubernetes, any cloud, on-prem, or sovereign. Senior engineers, fixed fee.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a platform architecture review',
  subtitle: 'Sixty minutes with our principal ML platform engineer. We come prepared on your current estate.',
  ctaLabel: 'Book the architecture review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'modelsInProd',
      label: 'Models currently in production (any definition)',
      type: 'select',
      options: ['1–5', '6–15', '16–30', '>30'],
      required: true
    },
    {
      name: 'tooling',
      label: 'Current orchestration & tooling',
      type: 'multiselect',
      options: [
        'Airflow',
        'Prefect',
        'Kubeflow',
        'SageMaker',
        'Databricks Workflows',
        'MLflow',
        'Homegrown',
        'None'
      ]
    },
    {
      name: 'hosting',
      label: 'Target hosting',
      type: 'select',
      options: [
        'AWS',
        'Azure',
        'GCP',
        'OCI',
        'G42 Core42',
        'On-prem OpenShift',
        'Vanilla Kubernetes',
        'Hybrid'
      ],
      required: true
    },
    {
      name: 'topPain',
      label: 'Top pain right now',
      type: 'select',
      options: [
        'No registry',
        'No retraining',
        'No drift monitoring',
        'No rollback',
        'Model governance',
        'GPU cost'
      ],
      required: true
    },
    {
      name: 'regulators',
      label: 'Regulator(s) in scope',
      type: 'multiselect',
      options: ['CBUAE', 'SAMA', 'DFSA', 'FSRA', 'ADGM FSRA', 'EU AI Act', 'None']
    },
    {
      name: 'teamSize',
      label: "Team size we'd be enabling",
      type: 'select',
      options: ['1–3', '4–10', '11–25', '>25 platform & ML engineers'],
      required: true
    }
  ]
};

const compareRows: CompareRow[] = [
  {
    feature: 'Runs on any Kubernetes (cloud, on-prem, sovereign)',
    brocode: true,
    competitors: ['Databricks only', 'AWS only', 'Component only', 'Slideware'],
  },
  {
    feature: 'Model registry, retraining, drift, canary — all in one platform',
    brocode: true,
    competitors: ['Inside Databricks', 'Inside SageMaker', false, false]
  },
  {
    feature: 'Auto-rollback on KPI drift',
    note: 'Our proprietary Canary Deployer pattern.',
    brocode: true,
    competitors: [false, false, false, false]
  },
  {
    feature: 'EU AI Act / SAMA / CBUAE model card generation',
    brocode: 'Auto-generated',
    competitors: ['Manual', 'Manual', false, 'Manual']
  },
  {
    feature: 'Customer owns and operates the platform on day one',
    brocode: true,
    competitors: ['Vendor-managed', 'Vendor-managed', true, 'Staff-aug forever']
  },
  {
    feature: 'Fixed-fee delivery',
    brocode: '16 weeks',
    competitors: ['T&M', 'T&M', 'Tool licence', 'T&M / open-ended'],
  },
  {
    feature: 'Senior engineers named on the SoW',
    brocode: true,
    competitors: ['Variable', 'Variable', 'Vendor SE', 'Junior-heavy']
  }
];

const faqs: FAQItem[] = [
  {
    question: 'We have a Databricks contract / a SageMaker estate already. We cannot rip and replace.',
    answer:
      'Nothing gets ripped. Our platform treats Databricks and SageMaker as model sources — your data scientists keep training there if that is what works. The registry, the canary deployer, the drift monitoring, the governance plane sits on your Kubernetes and ingests model artefacts from both. Most of our 14 deployments are coexistence builds. You stop being locked-in to either vendor for the operational plane; if you ever leave Databricks, the platform keeps running.'
  },
  {
    question: 'We tried this before. A previous consultancy sold us a Kubeflow build that nobody could operate. How is this different?',
    answer:
      'Three structural differences. First, we use a deliberately small, mainstream stack — MLflow, BentoML, Ray Serve, Arize, Argo CD — not Kubeflow as the centre. Second, the engagement is fixed-fee, 16 weeks, with named senior engineers on the SoW; we do not staff junior. Third, weeks 15–16 are dedicated enablement and a documented run-book audit signed off by your SRE lead. If the SRE lead refuses to sign off, the engagement does not end.'
  },
  {
    question: 'Show me the run-cost. Our finance team will not approve a platform whose TCO is opaque.',
    answer:
      'The lead-magnet pack includes the actual TCO calculator we use with customers. Across 14 deployments, the per-model run-cost band is AED 380–1,200 per month depending on traffic class (real-time vs batch), GPU class, and request volume. The platform itself sits in your existing Kubernetes — no new licence SKU, no per-prediction metering. We publish the exact node sizing and the runbook for downscaling unused models before contract.'
  },
  {
    question: 'Will my SRE team be able to patch this stack?',
    answer:
      'Every component is open source with a public release cadence. MLflow, BentoML, Ray, Arize OSS, Evidently, Argo CD, OPA — your SREs patch them the same way they patch the rest of the cluster. We deliver a documented patching runbook for each component, plus a quarterly compatibility matrix so upgrades are known-safe. There is no Brocode-proprietary component in the critical path of any model serving.'
  },
  {
    question: 'How does the 16-week MLOps platform build actually run?',
    answer:
      'Weeks 1–4 are discovery and landing-zone: existing estate review, target architecture, network and IAM design, environment provisioning. Weeks 5–10 are platform install plus three reference models migrated end-to-end through the canary pattern. Weeks 11–14 are production hardening — SLOs, on-call runbooks, DR plan, governance pack. Weeks 15–16 are enablement: your engineers shadow ours, then we shadow them, then we sign off and leave.'
  },
  {
    question: 'What does the auto-generated governance pack actually look like?',
    answer:
      'A per-model "Model Card + Lineage Sheet" generated automatically from the registry on every promotion. It captures the training dataset hash, the feature view, the eval metrics, the bias / fairness checks run, the canary KPIs, the approver, the date, and the rollback record. The template aligns with EU AI Act high-risk Article 11 / 12 documentation and the SAMA / CBUAE model-risk-management circulars. We have walked entities through CBUAE supervision reviews using this pack as the evidence base.'
  },
  {
    question: 'How does retraining actually get triggered?',
    answer:
      'Three triggers, each configurable per model. A scheduled trigger (cron); a data-drift trigger from Arize / Evidently when distribution shift breaches a threshold; and a KPI trigger from the canary deployer when a business metric (calibration error, false-negative rate, conversion delta) breaches a configured window. Retraining runs through the same canary flow as a manual promotion — shadow, percentage canary, full rollout — with auto-rollback if KPIs regress.'
  },
  {
    question: 'Can we keep our current Weights & Biases experiment tracking?',
    answer:
      'Yes. W&B / Comet / Neptune are excellent for the experimentation phase. We integrate them as the tracking layer when the customer already has a healthy adoption pattern, and we keep MLflow as the registry / serving plane. The platform is built to be component-pluggable: experiment tracking, feature store, monitoring vendor — each layer can be swapped if your standards change.'
  }
];

const symptoms = [
  {
    title: 'No registry',
    body: 'Nobody can list every production model with a single SQL query, who owns it, what it was trained on, or what version was promoted last Tuesday. Production becomes folklore.'
  },
  {
    title: 'No retraining',
    body: 'Every retrain is a Jira ticket and a hero engineer. Models age. Calibration drifts. The first time you find out is when the business calls.'
  },
  {
    title: 'No drift signal',
    body: 'Data quality, feature distributions, prediction distributions, business KPIs — none are monitored in one place with thresholds that mean anything. The dashboard is decorative.'
  },
  {
    title: 'No rollback',
    body: 'A bad model promotion takes the team 6 hours to undo. There is no shadow-mode, no percentage canary, no auto-rollback. Every promotion is an act of courage.'
  },
  {
    title: 'No governance pack',
    body: 'When the regulator asks for the model card, lineage, eval evidence, and incident history — the team spends two weeks rebuilding it from Jira tickets and Slack threads.'
  }
];

const deliveryWeeks = [
  {
    label: 'Weeks 1–4',
    title: 'Discovery & landing zone',
    description:
      'Existing estate audit. Target architecture agreed with your platform, security, and data teams. Landing-zone provisioned on your chosen Kubernetes — EKS, AKS, GKE, OKE, OpenShift, G42 Core42, or vanilla kubeadm.',
    metric: 'Architecture signed by your CTO & CISO'
  },
  {
    label: 'Weeks 5–10',
    title: 'Platform install + 3 reference models migrated',
    description:
      'MLflow registry, BentoML + Ray Serve, Feast, Airflow / Prefect, Arize / Evidently, Great Expectations, Argo CD, OPA, Prometheus / Grafana / Loki. Three of your existing models migrated end-to-end through the canary pattern.',
    metric: '3 models in registry, serving on canary'
  },
  {
    label: 'Weeks 11–14',
    title: 'Production hardening + runbooks',
    description:
      'SLOs, on-call rotation design, disaster-recovery plan, governance pack templates, auto-rollback gates configured per model, EU AI Act / SAMA / CBUAE evidence templates wired into the registry.',
    metric: 'Governance pack reviewed by Risk'
  },
  {
    label: 'Weeks 15–16',
    title: 'Enablement & SRE handover',
    description:
      'Your engineers shadow our team, then run the platform under our watch, then we sign off. The engagement does not close until your SRE lead countersigns the runbook audit.',
    metric: 'Customer team operates on day 113'
  }
];

const stack = [
  { name: 'MLflow', role: 'Model registry, experiment tracking, model lineage' },
  { name: 'BentoML', role: 'Model packaging & serving with auto-batching' },
  { name: 'Ray Serve', role: 'Autoscaling, multi-model routing, GPU sharing' },
  { name: 'Feast', role: 'Feature store — batch + online, point-in-time correctness' },
  { name: 'Airflow / Prefect', role: 'Orchestration for retraining and feature jobs' },
  { name: 'Arize / Evidently', role: 'Drift, quality, and KPI monitoring with thresholds' },
  { name: 'Great Expectations', role: 'Data-quality contracts gating training + serving' },
  { name: 'DVC + LakeFS', role: 'Dataset versioning and reproducible training inputs' },
  { name: 'Argo CD + GitLab CI', role: 'GitOps deployment for models and infra' },
  { name: 'Kyverno + OPA Gatekeeper', role: 'Policy as code — admission control and governance' },
  { name: 'Prometheus + Grafana + Loki', role: 'Platform observability across the cluster' }
];

const cases = [
  {
    sector: 'UAE tier-1 bank',
    body: '23 models migrated from notebooks and one-off containers to a registry-driven platform in 14 weeks. Mean-time-to-production reduced from 11 weeks to 6 days. CBUAE-aligned model-governance pack auto-generated for every promotion. The platform team owns it on day one.',
    metric: '11 weeks → 6 days TTPM'
  },
  {
    sector: 'Regional insurer',
    body: 'Claims-fraud model retrained weekly via Airflow + MLflow + Arize. False-negative drift detected in 3 days (prior baseline: 6 weeks). Two annual SAMA-aligned model reviews now generated from the registry rather than rebuilt from tickets.',
    metric: 'Drift detection × 14 faster'
  },
  {
    sector: 'Energy major',
    body: 'Predictive-maintenance estate — 47 models across 6 production assets — consolidated on a single Ray Serve cluster. GPU cost down 38 %. Eight engineers reallocated from model-firefighting to new use cases.',
    metric: 'GPU spend −38 %'
  }
];

const proofItems = [
  { value: '11 → 6', label: 'Weeks → days median time-to-production' },
  { value: '14', label: 'Hardened deployments across UAE / KSA' },
  { value: '16 weeks', label: 'Fixed-fee MLOps platform build delivery' },
  { value: '113', label: 'Days until your team operates without us' }
];

export default function MlopsPage() {
  return (
    <>
      {/* HERO — platform topology */}
      <section className="relative isolate overflow-hidden bg-[#13161B] text-white">
        <div className="container-site relative z-10 pb-20 pt-28 md:pb-28 md:pt-36">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'MLOps & AI Infrastructure' }
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#76B900]">
                  MLOps platform build · 16 weeks · Any Kubernetes
                </p>
                <h1 className="mt-5 text-balance text-display-xl">
                  A vendor-neutral ML platform on your Kubernetes. Operated by your team on day one.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                  Model registry, automated retraining, drift monitoring, canary deployment, auto-rollback, full
                  lineage, regulator-grade governance — stood up on any cloud or on-prem in 16 weeks. Fixed fee. No
                  staff-aug tail.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton
                    href="#contact-form"
                    variant="primary"
                    size="lg"
                    className="bg-[#76B900] text-[#13161B] hover:bg-[#8FD216]"
                    event="quote_open"
                  >
                    Book the architecture review
                  </MagneticButton>
                  <a
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
                    data-event="whatsapp_hero"
                    data-page={SLUG}
                  >
                    <WhatsAppIcon /> WhatsApp our principal engineer
                  </a>
                </div>
                <p className="mt-6 text-xs text-white/55">
                  CNCF Certified · ISO 27001 · SOC 2 Type II · Databricks Partner · Azure AI/ML Specialisation
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <PlatformTopology />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0E1014] py-14">
        <div className="container-site">
          <ProofBand items={proofItems} variant="dark" />
        </div>
      </section>

      {/* Five symptoms */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The five symptoms of an MLOps estate that has stalled"
            title="Pick the ones you recognise. We have built the runbook for all five."
            description="Most enterprises do not have a model problem — they have an operating problem. Here is the diagnostic our principal platform engineer runs in the first 30 minutes of every architecture review."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-ink-100 bg-[#F6F8FB] p-7 transition hover:border-brand hover:shadow-card">
                  <p className="text-xs font-mono uppercase tracking-widest text-brand">Symptom 0{i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{s.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={symptoms.length * 0.06}>
              <div className="flex h-full flex-col rounded-2xl bg-ink-900 p-7 text-white">
                <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">If you recognise three or more</p>
                <h3 className="mt-3 text-lg font-semibold">Book the architecture review</h3>
                <p className="mt-3 flex-grow text-sm text-white/70">
                  Sixty minutes with the principal platform engineer. We come prepared on your stack — bring your
                  current architecture diagram and your three biggest production headaches.
                </p>
                <Link
                  href="#contact-form"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#76B900]"
                  data-event="secondary_cta_click"
                  data-page={SLUG}
                >
                  Book the review →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Brocode reference platform */}
      <section className="bg-[#13161B] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The Brocode reference platform"
            title="Eleven components. Boring on purpose. Hardened across 14 deployments."
            description="A deliberately mainstream stack. Each component is an industry default with an active OSS community. There is no Brocode-proprietary critical-path component — your SRE team can patch every layer."
          />
          <Reveal>
            <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <ul className="divide-y divide-white/5">
                {stack.map((s, i) => (
                  <li key={s.name} className="grid grid-cols-12 items-center gap-4 px-6 py-5 transition hover:bg-white/[0.03]">
                    <span className="col-span-1 font-mono text-[10px] text-white/40">L{(i + 1).toString().padStart(2, '0')}</span>
                    <span className="col-span-4 text-base font-semibold text-white md:col-span-3">{s.name}</span>
                    <span className="col-span-7 text-sm text-white/65 md:col-span-8">{s.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Canary Deployer pattern */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Canary Deployer pattern"
            title="Shadow → percentage canary → full rollout — with auto-rollback gated on KPI."
            description="The pattern that neither Databricks nor SageMaker ship by default. Every model promotion runs the same lifecycle, every rollback is automatic, every KPI window is configurable per model."
          />
          <Reveal>
            <BentoGrid className="mt-12">
              <BentoCell span="md" variant="dark">
                <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">Stage 1 · Shadow</p>
                <h3 className="mt-3 text-xl font-semibold">New model receives mirrored traffic</h3>
                <p className="mt-3 text-sm text-white/70">
                  Mirrored request stream. New model predictions logged. Zero customer impact. Run for 24–72 hours
                  depending on traffic class. Calibration delta against incumbent published in the registry.
                </p>
              </BentoCell>
              <BentoCell span="md" variant="dark">
                <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">Stage 2 · Canary</p>
                <h3 className="mt-3 text-xl font-semibold">5 % → 25 % → 50 % live traffic</h3>
                <p className="mt-3 text-sm text-white/70">
                  Gradual traffic split. Each step gated on KPI window: calibration error, false-negative rate,
                  conversion delta — chosen per model. Argo Rollouts + Arize gates the next step or rolls back.
                </p>
              </BentoCell>
              <BentoCell span="md" variant="dark">
                <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">Stage 3 · Auto-rollback</p>
                <h3 className="mt-3 text-xl font-semibold">Revert if the gate breaches</h3>
                <p className="mt-3 text-sm text-white/70">
                  If the 7-day calibration drift or any configured KPI window breaches, the rollout reverts to the
                  prior model — automatically, with a registry entry and an incident draft. No 3 AM pager required.
                </p>
              </BentoCell>
            </BentoGrid>
          </Reveal>
        </div>
      </section>

      {/* 16-week delivery */}
      <section className="bg-[#F6F8FB] py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="16-week MLOps platform build"
            title="Week-by-week. Fixed fee. Named senior engineers on the SoW."
            description="The plan we have run 14 times. Adjusted to your existing estate but never re-scoped halfway through — the SoW is the contract, not a starting position."
          />
          <Reveal>
            <ScrollTimeline steps={deliveryWeeks} className="mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Side-by-side"
            title="Brocode vs Databricks, SageMaker, W&B, and Big-4 MLOps practices."
            description="What each option actually delivers. Not a marketing maturity matrix — operational delta on the things your platform team cares about."
          />
          <Reveal>
            <div className="mt-12">
              <CompareTable
                brandLabel="Brocode"
                competitors={['Databricks', 'AWS SageMaker', 'Weights & Biases', 'Big-4 MLOps']}
                rows={compareRows}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three objections */}
      <section className="bg-[#13161B] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The three objections from your platform lead"
            title="What gets raised in week one of every architecture review."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                q: 'We have a Databricks / SageMaker estate already. We cannot rip and replace.',
                a: 'We do not rip. The Brocode platform treats Databricks and SageMaker as model sources — your data scientists keep training there. The registry, canary, drift, and governance plane sits on your Kubernetes alongside, not on top.'
              },
              {
                q: 'We have tried this before. The Kubeflow build died after six months.',
                a: 'Mainstream stack only, named senior engineers on the SoW, fixed fee, and a dedicated 2-week handover where your SRE lead has to countersign the runbook. If they refuse, the engagement does not close.'
              },
              {
                q: 'Show me the run-cost. Our finance team will not approve opaque TCO.',
                a: 'Per-model run-cost lands in the AED 380–1,200 / month band across 14 deployments. The lead-magnet pack includes the actual TCO calculator and the node-sizing runbook we use with customers.'
              }
            ].map((o, i) => (
              <Reveal key={o.q} delay={i * 0.07}>
                <GlassCard tone="dark" padding="md" className="h-full">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">Objection {i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{o.q}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">{o.a}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Anonymised references"
            title="Three live platforms. Each available in full under NDA."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.sector} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl bg-[#13161B] p-8 text-white">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#76B900]">{c.sector}</p>
                  <p className="mt-5 flex-grow text-sm leading-relaxed text-white/75">{c.body}</p>
                  <p className="mt-6 rounded-full bg-[#76B900]/15 px-4 py-2 text-center text-sm font-semibold text-[#76B900]">
                    {c.metric}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink-500">
            Bank deployments cover{' '}
            <Link href="/industries/banking-financial-services" className="underline">
              Banking & Financial Services
            </Link>
            . For data-foundation work, see{' '}
            <Link href="/services/data-engineering-for-ai" className="underline">
              Data Engineering for AI
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Lead-magnet */}
      <section className="bg-white py-24">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The MLOps Reference Architecture Pack — 4 Blueprints, Cost Models, Runbooks"
            description="A 60-page technical pack covering AWS EKS, Azure AKS, on-prem OpenShift, and G42 Core42 reference architectures — plus Terraform / Helm references and a TCO calculator (Google Sheet)."
            contents={[
              'Reference architecture 1 — AWS EKS with managed services',
              'Reference architecture 2 — Azure AKS baseline',
              'Reference architecture 3 — On-prem OpenShift / vanilla Kubernetes',
              'Reference architecture 4 — Sovereign / hybrid (G42 Core42)',
              'TCO calculator: per-model run-cost, GPU sizing, request volume'
            ]}
            filePath="/downloads/mlops-reference-architectures.pdf"
            ctaLabel="Email me the architecture pack"
            thumbnail="/images/services/mlops-ai-infrastructure.jpg"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F6F8FB] py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="What platform leads and CIOs ask first."
              description="Eight questions our principal engineers answer in nearly every architecture review."
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="contact-form" className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brand">Architecture review</p>
              <h2 className="mt-3 text-display-lg text-ink-900">
                Sixty minutes with our principal ML platform engineer.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                Six fields — models in production, current tooling, target hosting, top pain, regulators in scope,
                team size. We arrive at the call with a draft reference architecture for your stack and three named
                models we would migrate first.
              </p>
              <div className="mt-8 rounded-2xl border border-ink-100 bg-[#F6F8FB] p-6">
                <p className="text-sm font-semibold text-ink-900">Or skip the form.</p>
                <p className="mt-2 text-sm text-ink-700">
                  Message our principal platform engineer directly on WhatsApp.
                </p>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_inline"
                  data-page={SLUG}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  <WhatsAppIcon /> Message on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card md:p-10">
                <QuoteForm config={formConfig} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            label: 'Data Engineering for AI',
            href: '/services/data-engineering-for-ai',
            description: 'Feature pipelines and data-quality contracts under the platform.'
          },
          {
            label: 'Self-hosted LLM Infrastructure',
            href: '/services/self-hosted-llm-infrastructure',
            description: 'The platform extended to host sovereign LLMs.'
          },
          {
            label: 'AI Consulting & Strategy',
            href: '/services/ai-consulting-strategy',
            description: 'Roadmap-led MLOps work for AI committee mandates.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'Tier-1 bank platform builds with SAMA / CBUAE governance.'
          },
          {
            label: 'Document Intelligence',
            href: '/services/document-intelligence',
            description: 'The OCR estate running on the platform backbone.'
          }
        ]}
      />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Book architecture review" />

      <Script
        id="ld-service-mlops"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'MLOps & AI Infrastructure',
            serviceType: 'Vendor-neutral MLOps platform build',
            provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
            areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Oman'],
            description:
              'A production-grade ML platform — registry, retraining, drift, canary, auto-rollback, governance — delivered in 16 weeks on the customer Kubernetes, on any cloud or on-prem.',
            url: `${SITE.url}/services/${SLUG}`
          })
        }}
      />
      <Script
        id="ld-faq-mlops"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer }
            }))
          })
        }}
      />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
    </svg>
  );
}
