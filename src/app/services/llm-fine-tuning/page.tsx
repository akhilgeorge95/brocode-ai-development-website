import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { FAQ } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { ProofBand } from '@/components/ui/ProofBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'llm-fine-tuning';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I lead AI at [organisation]. We're working on an Arabic/Khaleeji LLM fine-tune and want to compare notes on eval methodology and base-model selection. Could your principal scientist join a 60-minute call?";

export const metadata: Metadata = {
  title: 'LLM Fine-Tuning Services for AI-Mature Teams in the Middle East',
  description:
    'A fine-tuned open-weights LLM on your GPUs, in your VPC, with documented GulfBench gains on your dialect, refusal policy and safety classifier — delivered in 8 weeks under a co-build agreement.',
  alternates: { canonical: 'https://www.brocode.ae/services/llm-fine-tuning' },
  openGraph: {
    title: 'LLM Fine-Tuning — GulfBench-graded, customer-owned',
    description:
      'Co-build an open-weights fine-tune on your H100/H200 estate with a Joint Eval Charter signed in week one.',
    type: 'article',
    url: 'https://www.brocode.ae/services/llm-fine-tuning'
  },
  twitter: { card: 'summary_large_image' }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Co-write a Joint Eval Charter with our principal scientist',
  subtitle:
    '90 minutes, no commitment. Bring your base model, your dialect, your refusal policy — leave with a signed eval methodology.',
  ctaLabel: 'Request the Joint Eval Charter call',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'baseModel',
      label: 'Current base model',
      type: 'select',
      required: true,
      options: ['Llama 3.x', 'Mistral', 'Qwen', 'Falcon', 'Jais', 'Gemma', 'Closed API', 'Not selected yet']
    },
    {
      name: 'adaptationMethod',
      label: 'Adaptation method you are considering',
      type: 'multiselect',
      options: ['LoRA / QLoRA', 'Full SFT', 'DPO / ORPO', 'Continued pre-training', 'RLHF', 'Unsure']
    },
    {
      name: 'gpuCapacity',
      label: 'Available GPU capacity',
      type: 'select',
      options: ['<8 H100', '8–32 H100', '>32 H100', 'Hyperscaler reserved', 'None yet']
    },
    {
      name: 'domainLanguage',
      label: 'Primary domain and language',
      type: 'multiselect',
      options: [
        'Telco care',
        'Banking',
        'Insurance',
        'Government policy',
        'Legal',
        'Healthcare',
        'MSA',
        'Khaleeji',
        'Levantine',
        'English',
        'French'
      ]
    },
    {
      name: 'evalStatus',
      label: 'Eval harness status',
      type: 'select',
      options: ['Production-grade', 'Partial', 'None yet', 'Using public benchmarks only']
    },
    {
      name: 'constraints',
      label: 'Constraints',
      type: 'multiselect',
      options: [
        'Must remain open-weights',
        'Customer-managed keys',
        'On-prem',
        'No data leaves country',
        'Safety review required'
      ]
    }
  ]
};

const baseModels = [
  {
    name: 'Llama 3.3 70B',
    strengths: 'Strong English baseline, broad community tooling, clean QLoRA path on 8× H100.',
    trade: 'Khaleeji-weak out of the box; needs continued pre-training on Arabic corpus before SFT.'
  },
  {
    name: 'Llama 3.1 405B (quantised)',
    strengths: 'Frontier-grade reasoning when AWQ-INT4 is acceptable; survives multi-step policy QA.',
    trade: 'Serving cost; requires Marlin kernels and EAGLE-2 speculative decoding to be economic.'
  },
  {
    name: 'Mistral-Large-2',
    strengths: 'Disciplined instruction-following and structured-output behaviour for compliance Q&A.',
    trade: 'Apache-2 weights but smaller open community than Llama; fewer ready-made Arabic recipes.'
  },
  {
    name: 'Qwen 2.5 72B',
    strengths: 'Excellent multilingual baseline, handles Arabic-English code-switching cleanly.',
    trade: 'Tokeniser packs Arabic less efficiently than Jais; latency at long context is harder.'
  },
  {
    name: 'Falcon Mamba 7B (TII)',
    strengths: 'State-space backbone, low memory at long context; UAE-origin lineage matters to some buyers.',
    trade: 'Capacity ceiling on complex reasoning tasks; treat as a fast first-tier classifier.'
  },
  {
    name: 'Jais 70B (Inception / G42)',
    strengths: 'Native Khaleeji and MSA pre-training; smallest gap to close on dialect.',
    trade: 'Licensing terms require careful review; English performance trails Llama on STEM tasks.'
  },
  {
    name: 'Gemma 3 27B',
    strengths: 'Tight latency profile, friendly licence for hosted inference, strong on safety classifiers.',
    trade: 'Capacity below 70B class; choose only when the task is narrow and latency dominates.'
  }
];

const trainingStack = [
  { tool: 'Axolotl + DeepSpeed ZeRO-3', use: 'Primary training driver — config-driven, reproducible, multi-node ready.' },
  { tool: 'FlashAttention-3', use: 'Memory and throughput wins on H100/H200; required for 128K context tuning.' },
  { tool: 'Megatron-Core', use: 'Multi-node 405B SFT and continued pre-training when ZeRO-3 hits the wall.' },
  { tool: 'Unsloth', use: 'Fast LoRA iteration on 7–13B bases for hypothesis testing before a 70B commit.' },
  { tool: 'Argilla', use: 'Khaleeji annotator workflow — native reviewers, audit trail, preference set quality control.' },
  { tool: 'vLLM + EAGLE-2 + AWQ-INT4', use: 'Production serving with speculative decoding, quantisation and Marlin kernels.' }
];

const timelineSteps = [
  {
    label: 'Week 1',
    title: 'Joint Eval Charter signed',
    description:
      'Customer and Brocode co-write the eval — task set, judge ensemble, contamination controls, success thresholds. No GPU is provisioned until both sides have signed off on the metrics that define a passing model.',
    metric: 'Signed by Head of AI + Principal Scientist'
  },
  {
    label: 'Weeks 2–3',
    title: 'Base-model bake-off',
    description:
      'Three candidate bases scored against the Charter on a 5K-example dry-run. The customer sees the trade-off matrix in their own terms before committing GPU time to a 70B-class run.',
    metric: 'Trade-off matrix delivered'
  },
  {
    label: 'Weeks 3–5',
    title: 'Data pipeline + first SFT pass',
    description:
      'Khaleeji corpus assembled from customer transcripts plus Brocode\'s 2.3M-utterance care set; AraDPO preference set prepared in Argilla; QLoRA rank 64–128 on the chosen base.',
    metric: 'GulfBench v0 reported'
  },
  {
    label: 'Weeks 5–6',
    title: 'Preference alignment',
    description:
      'DPO or ORPO on the customer\'s refusal-policy preference set. Llama Guard 3 and ALERT regression suites run on every checkpoint; pairwise judge ensembles triangulate against a fine-tuned in-house judge.',
    metric: 'Safety violations ≤ 1% target'
  },
  {
    label: 'Weeks 6–7',
    title: 'Serving readiness',
    description:
      'AWQ-INT4 quantisation, Marlin kernels, EAGLE-2 speculative decoding. Run-rate calculator handed to the FinOps lead — per-million-token cost on vLLM versus the closed API baseline.',
    metric: 'Run-rate delta documented'
  },
  {
    label: 'Week 8',
    title: 'Production handover',
    description:
      'Adapters, eval harness, training configs and reproducer code transferred under the co-build agreement. The customer\'s MLOps team operates the model from day one; Brocode stays on for a run-phase but never owns the artefacts.',
    metric: 'All artefacts customer-owned'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Open-weights ownership of the resulting model',
    brocode: true,
    competitors: [false, false, true, false],
    note: 'Adapters and base weights stay portable to vLLM, TGI, Triton, sovereign clouds.'
  },
  {
    feature: 'Khaleeji Arabic data pipeline',
    brocode: 'Native, 2.3M-utterance corpus + Argilla annotators',
    competitors: ['Not provided', 'Not provided', 'DIY', 'Research-stage'],
    note: 'The brief field-7 problem (3.1 Khaleeji care score) is closed by data, not just method.'
  },
  {
    feature: 'GulfBench v2 evaluation harness',
    brocode: 'Open, reproducible, 18 dialect+domain tasks',
    competitors: ['Closed metric', 'Closed metric', 'DIY', 'Research benchmarks'],
    note: 'Contamination controls and pairwise judge ensemble triangulation.'
  },
  {
    feature: 'In-region inference (UAE / KSA)',
    brocode: 'Customer VPC, H100/H200 or sovereign cloud',
    competitors: ['UAE region with constraints', 'Bahrain region (data residency limits)', 'Customer choice', 'Research collab terms'],
    note: 'No cross-border data movement when the customer requires it.'
  },
  {
    feature: 'Time to a production-cleared model',
    brocode: '8 weeks under co-build agreement',
    competitors: ['8–12 weeks', '8–12 weeks', '6–9 months without partner', '12–24 months'],
    note: 'Includes safety regression and run-rate optimisation.'
  },
  {
    feature: 'Per-token inference cost vs closed baseline',
    brocode: '~1/12× via vLLM + EAGLE-2 + AWQ-INT4',
    competitors: ['Closed API pricing', 'Closed API pricing', 'DIY depends on stack', 'Not commercial'],
    note: '38% inference-cost reduction observed on the telco reference.'
  },
  {
    feature: 'Joint Eval Charter signed before training starts',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'No GPU spend until the customer has signed off on the success metric.'
  },
  {
    feature: 'Customer team trained to retune',
    brocode: true,
    competitors: [false, false, true, false],
    note: 'Reproducible configs and a co-build agreement that ends with the customer running the model.'
  }
];

const competitors = ['Azure OpenAI fine-tune', 'AWS Bedrock custom', 'DIY on bare-metal', 'MBZUAI / TII research'];

const objections = [
  {
    objection:
      'Azure already gives us managed fine-tuning on GPT-4o-mini and o4-mini. Why bring in an open-weights specialist?',
    proof:
      'Open-weights ownership is the answer to a vendor-lock question your CISO will eventually ask. Our anonymised telco reference moved from Azure GPT-4o-mini at managed cost to a Llama 3.3 70B fine-tune on their own H100s, with 38% lower per-token inference cost and a GulfBench delta of +21.6 points on Khaleeji care intents. The model is portable to vLLM, TGI, or any sovereign-cloud runtime the customer chooses next.'
  },
  {
    objection:
      'Our team can do this — we have a Llama run on bare-metal. What specifically are you bringing that we don\'t have?',
    proof:
      'Three concrete artefacts: GulfBench v2 (an open, reproducible Khaleeji-aware eval suite with contamination controls), a 2.3M-utterance Khaleeji care corpus with annotation workflow in Argilla, and a productionisation toolchain — vLLM + EAGLE-2 speculative decoding + AWQ-INT4 with Marlin kernels — that DIY teams typically rebuild over 6–9 months. We co-build, then leave; the customer owns every artefact.'
  },
  {
    objection:
      'How do you prove the lift is real and not eval contamination? Our risk committee will tear apart any single-benchmark number.',
    proof:
      'The Joint Eval Charter is the structural answer. We co-author the held-out task set in week 1, lock it before any training begins, and triangulate with a pairwise judge ensemble that combines Claude Sonnet 4.5, GPT-5 and a fine-tuned in-house judge. The methodology is published in the GulfBench v2 lead magnet with full reproducer code on GitHub — a risk committee can audit the design before it sees a number.'
  }
];

const faqItems = [
  {
    question: 'Who owns the model and the training artefacts at the end of an engagement?',
    answer:
      'The customer owns the adapters, the merged checkpoints, the training configs, the eval harness and the reproducer code. The co-build agreement is explicit on this point. Brocode retains no rights to redeploy artefacts elsewhere, and the customer can fork the model and continue with another partner or in-house at any time.'
  },
  {
    question: 'Does the data leave our country during training or evaluation?',
    answer:
      'No, when that is a requirement. Training runs inside the customer VPC or sovereign cloud (G42, Khazna, AWS UAE North, Azure UAE North, OCI Abu Dhabi). Evaluation is executed in the same boundary. Khaleeji annotators are based in Abu Dhabi and access data through a customer-controlled audit log. Cross-region transfers happen only with explicit written approval.'
  },
  {
    question: 'How do you defend the resulting model against base-model deprecation?',
    answer:
      'Open-weights bases (Llama, Mistral, Qwen, Falcon, Jais, Gemma) do not deprecate on a vendor calendar. We document an exit and migration plan in the run-phase: the adapters, the data pipeline and the eval harness are reusable on the next-generation base when it ships, and the trade-off matrix in this page is rerun before any migration commits.'
  },
  {
    question: 'What about contamination of the eval set by the base model\'s pre-training data?',
    answer:
      'GulfBench v2 includes a contamination probe: every task has a held-back twin generated under licensed conditions in 2025, plus a paraphrase-resistant scoring rubric. We also rotate the held-out slice quarterly and never publish raw task strings — only the methodology and the reproducer.'
  },
  {
    question: 'How does this co-exist with our existing MLOps platform?',
    answer:
      'The training pipeline runs on Axolotl + DeepSpeed and emits artefacts your MLflow / Weights & Biases / Comet estate can absorb. Serving runs on vLLM or Triton inside your inference platform. If you have a stricter MLOps regime, see our /services/mlops-ai-infrastructure page — we frequently deliver the two together.'
  },
  {
    question: 'Can we bring our own preference data and refusal policy?',
    answer:
      'Yes — that is the preferred mode. Customer preference sets are usually 1.5K–8K examples, curated in Argilla with native-speaker reviewers. We add the Brocode AraDPO set as a seed where the customer set is thin. The refusal policy is encoded as a constitution and tested against ALERT and Llama Guard 3 on every checkpoint.'
  },
  {
    question: 'What does production serving cost on this stack?',
    answer:
      'The run-rate calculator is delivered with the model. On a representative Khaleeji care workload, the telco reference is running at roughly one-twelfth the per-token inference cost of an Azure-hosted GPT-4o-mini fine-tune, using vLLM with EAGLE-2 speculative decoding and AWQ-INT4 Marlin kernels on 8× H100 SXM5.'
  },
  {
    question: 'How is the engagement priced?',
    answer:
      'Fixed-fee co-build for the 8-week programme, with a separately scoped run-phase. We do not charge per-seat licence on the resulting model. The full commercial terms summary lives in the procurement pack — see /faqs for the redacted version.'
  }
];

const stats = [
  { value: '+21.6', label: 'GulfBench points vs GPT-4o-mini fine-tune' },
  { value: '−38%', label: 'Inference cost on vLLM + AWQ-INT4' },
  { value: '8 weeks', label: 'To production-cleared model' },
  { value: '0.4%', label: 'Llama Guard 3 violation rate, telco ref' }
];

const relatedItems = [
  { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Bring the inference appliance home: H100 SXM5, vLLM, Triton, TensorRT-LLM.' },
  { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'The broader GenAI programme that wraps the fine-tune into a product.' },
  { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Refusal policy, red-team and the safety regression that risk committees expect.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Continuous training, drift detection and re-tune cadence on customer infrastructure.' },
  { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Tier-1 bank fine-tunes on Arabic compliance circulars — case studies in the Charter call.' }
];

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'LLM Fine-Tuning',
  provider: {
    '@type': 'Organization',
    name: 'Brocode Solutions',
    url: 'https://www.brocode.ae'
  },
  areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Egypt'],
  description:
    'Open-weights LLM fine-tuning for AI-mature teams. Khaleeji Arabic data pipeline, GulfBench v2 evaluation, vLLM serving, customer-owned artefacts. Delivered in 8 weeks under a co-build agreement.',
  audience: { '@type': 'Audience', audienceType: 'Head of AI, VP Applied AI, Principal ML Engineer' }
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer }
  }))
};

export default function LLMFineTuningPage() {
  return (
    <>
      <Script id="ld-llm-finetuning-service" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-llm-finetuning-faq" type="application/ld+json">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      {/* Bespoke ML-platform hero: H100 rack imagery + live HUD + tokeniser inset */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <GradientMesh tone="midnight" />
        <div className="absolute inset-0">
          <Image
            src="/images/services/llm-fine-tuning.jpg"
            alt="Close-up of an H100 SXM5 GPU rack with NVLink switch visible, captured at the Brocode lab"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/85 to-ink-900" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-24 md:pt-30 md:pb-28">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'LLM Fine-Tuning' }]}
            variant="dark"
          />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5 text-white/70">Model adaptation · for AI-mature teams</p>
              <h1 className="text-balance text-display-2xl">
                A fine-tuned open-weights LLM, on your GPUs, in your VPC.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Documented gains on your evaluation harness, your dialect, your refusal policy and your safety classifier
                — delivered in eight weeks under a co-build agreement that leaves your team owning every artefact.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="#contact-form"
                  variant="primary"
                  size="lg"
                  event="quote_open"
                  className="bg-white text-ink-900 hover:bg-brand hover:text-white"
                >
                  Co-write a Joint Eval Charter — 90 min, no commitment
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={PAGE_SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  Message a principal scientist on WhatsApp
                </a>
                <Link
                  href="#lead-magnet"
                  data-event="secondary_cta_click"
                  data-page={PAGE_SLUG}
                  className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  Download GulfBench v2 + the reproducer →
                </Link>
              </div>
            </div>

            {/* Training HUD + tokeniser inset */}
            <div className="lg:col-span-5">
              <GlassCard tone="dark" padding="md" className="font-mono text-sm">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">live training run · h100 sxm5 × 8</p>
                <div className="mt-4 space-y-1.5 text-white/90">
                  <Row k="run" v="llama-3.3-70b-qlora-r128-khaleeji-care-007" />
                  <Row k="step" v="14,200 / 32,000" />
                  <Row k="loss" v="0.412" />
                  <Row k="eval/gulfbench" v="7.8  (+4.7 vs base)" highlight />
                  <Row k="dpo_margin" v="0.31" />
                  <Row k="grad_norm" v="0.84" />
                  <Row k="tokens/sec" v="11,840" />
                  <Row k="vram" v="74.2 / 80 GiB" />
                </div>
                <div className="mt-5 rounded-lg border border-white/10 bg-black/40 p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">tokeniser · khaleeji sample</p>
                  <p className="mt-2 text-right text-base text-white" dir="rtl" lang="ar">
                    وين قسط السيارة الجديد؟
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['وين', 'قسط', 'السيارة', 'الجديد', '؟'].map((t, i) => (
                      <span
                        key={t + i}
                        className={`rounded-md px-2 py-0.5 text-[11px] ${
                          ['bg-brand/30', 'bg-fuchsia-500/30', 'bg-amber-400/25', 'bg-emerald-400/25', 'bg-white/15'][i]
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stat ribbon */}
      <section className="bg-ink-900 py-10 text-white">
        <div className="container-site">
          <ProofBand items={stats} variant="dark" />
        </div>
      </section>

      {/* Problem & stakes — quoted from brief fields 7 & 8 */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The problem at the staging gate"
              title="Your fine-tune scores 8.4 in English and 3.1 in Khaleeji."
              description="And Llama Guard flags 4.7% of generations as unsafe. The risk committee has frozen the launch. We have seen this exact failure mode in three GCC programmes this year."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 text-ink-700">
              <p>
                The 1.4 million-subscriber contact-centre pilot was promised by next quarter. A second delay forces a
                re-baselining, a write-off of GPU spend already committed, and an answer to the CIO about whether the
                in-house team can deliver alone. A peer sovereign-tech holding is already shipping a fine-tuned Arabic
                model in production. Falling behind has political weight.
              </p>
              <p>
                The technical work is a known shape: an open-weights base, a Khaleeji corpus large enough to move the
                eval needle, a preference set that codifies the refusal policy, a safety regression that survives
                Llama Guard 3 and ALERT, and a serving stack that makes per-token economics defensible to the CFO. The
                missing piece is usually evaluation discipline — a single benchmark number that a risk committee can
                tear apart. The Joint Eval Charter is the structural answer.
              </p>
              <p>
                Off-the-shelf large language models are remarkable generalists and unreliable specialists. They miss
                regional regulatory terminology, mishandle Gulf-dialect Arabic, and produce inconsistent outputs in
                the structured formats your downstream systems expect. We close those gaps with dataset curation,
                parameter-efficient training, rigorous evaluation, and operational integration that lets the resulting
                model earn its place in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Joint Eval Charter — Mechanism via ScrollTimeline */}
      <section className="relative bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="The 8-week co-build"
                title="The Joint Eval Charter signs in week one. GPUs spin up in week two."
                description="No fine-tuning starts until both sides have signed off on the metrics, the held-out task set, the judge ensemble, and the contamination controls. The eval is what the model is being shaped against; it cannot be reverse-engineered after the fact."
              />
            </div>
            <div className="lg:col-span-5">
              <GlassCard tone="light" padding="sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Charter signatories</p>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                  <li>· Customer Head of AI</li>
                  <li>· Customer Principal Scientist</li>
                  <li>· Brocode Principal Scientist</li>
                  <li>· Customer Risk / Compliance representative</li>
                  <li>· Brocode Programme Lead</li>
                </ul>
                <p className="mt-4 text-xs text-ink-500">
                  The Charter is reversible. Any signatory can pause the programme between gates with no commercial
                  penalty.
                </p>
              </GlassCard>
            </div>
          </div>
          <div className="mt-16">
            <ScrollTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      {/* Base-model selection bento */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Section 3 · Base-model trade-offs"
            title="Seven bases we routinely fine-tune. None of them is the right answer to every customer."
            description="The bake-off in weeks two and three is the cheapest insurance you can buy against the wrong base. We score the candidates against your Charter on a 5K-example dry-run before committing GPU time to a 70B-class run."
          />
          <BentoGrid className="mt-14">
            {baseModels.map((m, i) => (
              <BentoCell key={m.name} span={i === 0 ? 'lg' : 'md'} variant={i === 0 ? 'dark' : 'light'}>
                <p className={`text-xs font-semibold uppercase tracking-wider ${i === 0 ? 'text-white/60' : 'text-brand'}`}>
                  Base · {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className={`mt-2 text-2xl font-semibold ${i === 0 ? 'text-white' : 'text-ink-900'}`}>{m.name}</h3>
                <p className={`mt-4 text-sm ${i === 0 ? 'text-white/85' : 'text-ink-700'}`}>{m.strengths}</p>
                <p className={`mt-3 text-sm ${i === 0 ? 'text-white/60' : 'text-ink-500'}`}>
                  <span className="font-semibold">Trade-off:</span> {m.trade}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Mechanism: training stack as bento */}
      <section className="bg-ink-900 py-22 text-white md:py-28">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The training stack"
            title="Axolotl, DeepSpeed ZeRO-3, FlashAttention-3 — and Argilla for the annotators."
            description="The same stack we run in the Brocode lab, named tool by tool, so your principal scientist can challenge any choice on the call."
          />
          <BentoGrid className="mt-14">
            {trainingStack.map((s, i) => (
              <BentoCell key={s.tool} span={i % 3 === 0 ? 'lg' : 'md'} variant="glass" className="bg-white/5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Tool · {String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{s.tool}</h3>
                <p className="mt-3 text-sm text-white/80">{s.use}</p>
              </BentoCell>
            ))}
          </BentoGrid>
          <Reveal className="mt-12">
            <GlassCard tone="dark" padding="md">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">GulfBench v2 — judge ensemble</p>
              <p className="mt-3 text-white/85">
                Every checkpoint is scored by three judges in pairwise comparison: Claude Sonnet 4.5, GPT-5, and a
                fine-tuned in-house judge trained on customer-reviewed preferences. Disagreement between judges is
                logged as a quality signal, not averaged away. Contamination probes run on every Charter task.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Comparison band */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Azure managed, AWS Bedrock, DIY, or the MBZUAI / TII collab — and where each one ends."
            description="The structural differences that survive a procurement-committee read. The full per-task scorecard is in the GulfBench v2 lead magnet below."
          />
          <div className="mt-12">
            <CompareTable competitors={competitors} rows={compareRows} brandLabel="Brocode" />
          </div>
        </div>
      </section>

      {/* Three-objection block */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Three objections worth airing"
            title="The questions your team will ask in the second meeting."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {objections.map((o, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">Objection {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">&ldquo;{o.objection}&rdquo;</h3>
                  <p className="mt-4 text-sm text-ink-700">{o.proof}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead-magnet gate */}
      <section id="lead-magnet" className="bg-white py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="GulfBench v2 — A Khaleeji-Aware LLM Evaluation Harness"
            description="A 38-page technical report, a downloadable JSONL of held-out tasks (200 examples redacted, full set under NDA), and a Python reproducer on GitHub. Includes 14 open and closed models scored on telco, banking and government tasks."
            contents={[
              'Benchmark methodology and contamination controls',
              'Base model comparison: Mistral, Llama 3.x, Qwen 2.5, Jais, Falcon Mamba, Gemma 3',
              'Fine-tuning recipes: QLoRA, DPO, ORPO with config files',
              'Cost and latency on H100 SXM5 and H200 with vLLM + EAGLE-2 + AWQ-INT4',
              'Headline figure: Llama 3.3 70B fine-tune outscores GPT-4o-mini fine-tune by 21.6 GulfBench points at ~1/12× inference cost',
              'Public reproducer on GitHub with seed data and eval harness'
            ]}
            filePath="/downloads/gulfbench-v2-eval-pack.pdf"
            ctaLabel="Email me GulfBench v2 + the reproducer"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Frequently asked"
              title="Ownership, sovereignty, contamination, deprecation."
              description="Eight questions a Head of AI and a CISO usually ask in the first sixty minutes. Longer answers live in the procurement pack."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="contact-form" className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Joint Eval Charter call"
              title="Ninety minutes with a principal scientist. No commitment."
              description="Bring your current base, your dialect coverage, your refusal policy and the metric your risk committee will eventually defend. Leave with a signed Charter draft you can take to your CIO."
            />
            <Reveal className="mt-8">
              <GlassCard tone="light" padding="md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">What you walk away with</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  <li>· A Charter draft: tasks, judges, contamination controls, success thresholds</li>
                  <li>· A base-model trade-off matrix for your specific intents</li>
                  <li>· A run-rate envelope on vLLM + AWQ-INT4 against your closed-API baseline</li>
                  <li>· A pointer to the right reference (telco, bank, or sovereign holding)</li>
                </ul>
              </GlassCard>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card md:p-9">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks heading="Related capabilities" items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Joint Eval Charter" primaryHref="#contact-form" />
    </>
  );
}

function Row({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-1.5">
      <span className="text-[11px] uppercase tracking-wider text-white/45">{k}</span>
      <span className={highlight ? 'text-brand-200 font-semibold' : ''}>{v}</span>
    </div>
  );
}
