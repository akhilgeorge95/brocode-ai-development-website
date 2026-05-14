import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LogoGrid, type LogoItem } from '@/components/ui/LogoGrid';
import { LogoMarquee } from '@/components/ui/LogoMarquee';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

/** Grouped logo manifest for the Stack page. Each id maps to /public/logos/<id>.svg */
const LOGO_PLANES: { name: string; description: string; items: LogoItem[] }[] = [
  {
    name: 'Languages & frameworks',
    description: 'The runtimes, frameworks, and inference engines we build on.',
    items: [
      { id: 'python', display: 'Python', version: '3.11' },
      { id: 'typescript', display: 'TypeScript', version: '5' },
      { id: 'go', display: 'Go', version: '1.22' },
      { id: 'pytorch', display: 'PyTorch', version: '2.4' },
      { id: 'tensorflow', display: 'TensorFlow', version: '2.16' },
      { id: 'huggingface', display: 'Hugging Face', version: 'Transformers 4.45' },
      { id: 'langchain', display: 'LangGraph', version: '0.2' },
      { id: 'nvidia', display: 'NVIDIA · TensorRT-LLM', version: '0.13' }
    ]
  },
  {
    name: 'Data & feature plane',
    description: 'Where data is ingested, modelled, and served to models.',
    items: [
      { id: 'apacheairflow', display: 'Apache Airflow', version: '2.9' },
      { id: 'dbt', display: 'dbt-core', version: '1.8' },
      { id: 'apachekafka', display: 'Apache Kafka', version: '3.7' },
      { id: 'snowflake', display: 'Snowflake' },
      { id: 'databricks', display: 'Databricks' },
      { id: 'postgresql', display: 'Postgres · pgvector', version: '16 · 0.7' }
    ]
  },
  {
    name: 'ML platform plane',
    description: 'Distributed training, experiment tracking, drift, and bias.',
    items: [
      { id: 'mlflow', display: 'MLflow', version: '2.16' },
      { id: 'dvc', display: 'DVC', version: '3.55' },
      { id: 'weightsandbiases', display: 'Weights & Biases', version: 'Enterprise' },
      { id: 'huggingface', display: 'HF Hub', version: 'Private' }
    ]
  },
  {
    name: 'Serving & infrastructure',
    description: 'Where models live, how they ship, how they are observed.',
    items: [
      { id: 'kubernetes', display: 'Kubernetes', version: '1.30' },
      { id: 'docker', display: 'Docker' },
      { id: 'helm', display: 'Helm' },
      { id: 'istio', display: 'Istio', version: '1.23' },
      { id: 'argo', display: 'Argo CD', version: '2.12' },
      { id: 'terraform', display: 'Terraform', version: '1.9' },
      { id: 'vault', display: 'HashiCorp Vault', version: '1.17' },
      { id: 'opentelemetry', display: 'OpenTelemetry', version: '1.31' },
      { id: 'prometheus', display: 'Prometheus' },
      { id: 'grafana', display: 'Grafana' }
    ]
  },
  {
    name: 'Vector & retrieval',
    description: 'Where embeddings, retrieval indexes, and operational data live.',
    items: [
      { id: 'postgresql', display: 'pgvector', version: '0.7' },
      { id: 'elasticsearch', display: 'Elasticsearch', version: '8' },
      { id: 'redis', display: 'Redis' }
    ]
  },
  {
    name: 'AI platform partners',
    description: 'Foundation-model and tooling partners we deploy with.',
    items: [
      { id: 'openai', display: 'OpenAI' },
      { id: 'anthropic', display: 'Anthropic' },
      { id: 'meta', display: 'Meta · Llama' },
      { id: 'ollama', display: 'Ollama' },
      { id: 'nvidia', display: 'NVIDIA Inception' }
    ]
  },
  {
    name: 'Cloud & sovereign hosts',
    description: 'Portable across UAE-resident estates and global hyperscalers.',
    items: [
      { id: 'amazonwebservices', display: 'AWS UAE North' },
      { id: 'microsoftazure', display: 'Azure UAE North' },
      { id: 'googlecloud', display: 'Google Cloud' },
      { id: 'oracle', display: 'OCI Abu Dhabi' }
    ]
  }
];

const MARQUEE_LOGOS: LogoItem[] = [
  { id: 'python', display: 'Python' },
  { id: 'pytorch', display: 'PyTorch' },
  { id: 'tensorflow', display: 'TensorFlow' },
  { id: 'huggingface', display: 'Hugging Face' },
  { id: 'nvidia', display: 'NVIDIA' },
  { id: 'kubernetes', display: 'Kubernetes' },
  { id: 'docker', display: 'Docker' },
  { id: 'terraform', display: 'Terraform' },
  { id: 'apacheairflow', display: 'Airflow' },
  { id: 'apachekafka', display: 'Kafka' },
  { id: 'snowflake', display: 'Snowflake' },
  { id: 'databricks', display: 'Databricks' },
  { id: 'mlflow', display: 'MLflow' },
  { id: 'postgresql', display: 'Postgres' },
  { id: 'elasticsearch', display: 'Elasticsearch' },
  { id: 'amazonwebservices', display: 'AWS' },
  { id: 'microsoftazure', display: 'Azure' },
  { id: 'googlecloud', display: 'Google Cloud' },
  { id: 'oracle', display: 'Oracle' },
  { id: 'openai', display: 'OpenAI' },
  { id: 'anthropic', display: 'Anthropic' },
  { id: 'meta', display: 'Meta' }
];

const PAGE_SLUG = 'stack';
const PAGE_URL = '/technology/stack';

export const metadata: Metadata = {
  title: 'AI Technology Stack — Pinned Versions, ADRs, Reference Architectures | Brocode',
  description:
    'The version-pinned production stack Brocode runs for every UAE and GCC engagement — Python 3.11, PyTorch 2.4, vLLM 0.6, Ray 2.30, Kubernetes 1.30, Terraform 1.9. Portable to AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud and Khazna.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The Brocode Production Stack — 2026 Reference Architecture',
    description:
      'Six planes, pinned versions, three reference architectures and a one-hour walk-through with the engineer who owns it.',
    url: PAGE_URL,
    type: 'article',
    images: ['/images/technology/stack.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Brocode Production Stack — 2026 Reference Architecture',
    description:
      'Version-pinned, opinionated, portable across UAE clouds. No proprietary lock-in.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Book a one-hour stack walk-through',
  subtitle:
    'Our principal platform engineer reads the live ADR repository with your architecture team. No slides — just the repo.',
  ctaLabel: 'Book a technical review',
  whatsappMessage:
    "Hi Brocode — I'm doing technical due diligence on a shortlisted vendor for [organisation]. I'd like to book the one-hour stack walk-through with your principal platform engineer. Our environment is [AWS UAE / Azure UAE North / G42 / on-prem].",
  fields: [
    {
      name: 'role',
      label: 'Your role',
      type: 'select',
      options: ['Chief Architect', 'Head of Platform', 'Principal MLOps', 'Other'],
      required: true
    },
    {
      name: 'targetEnv',
      label: 'Target deployment environment',
      type: 'multiselect',
      options: ['AWS UAE North', 'Azure UAE North', 'OCI Abu Dhabi', 'G42 Cloud', 'Khazna on-prem', 'Hybrid']
    },
    {
      name: 'workloadProfile',
      label: 'Workload profile',
      type: 'multiselect',
      options: ['LLM inference', 'Classical ML training', 'Streaming', 'Batch ETL', 'Agentic systems', 'Vector search at scale']
    },
    {
      name: 'stackConstraints',
      label: 'Stack constraints we should know about',
      type: 'textarea',
      placeholder: 'Existing IaC tool, mandated registry, banned vendors, regulator overlay'
    },
    {
      name: 'arbDate',
      label: 'Architecture review board date',
      type: 'date'
    },
    {
      name: 'walkthroughDepth',
      label: 'Preferred walk-through depth',
      type: 'select',
      options: ['30-minute overview', '60-minute deep-dive', '2-hour ADR-by-ADR']
    }
  ]
};

const STACK_PLANES: { name: string; versions: { tool: string; version: string }[]; note: string }[] = [
  {
    name: 'Languages & frameworks',
    versions: [
      { tool: 'Python', version: '3.11' },
      { tool: 'TypeScript', version: '5' },
      { tool: 'Go', version: '1.22' },
      { tool: 'PyTorch', version: '2.4' },
      { tool: 'Transformers', version: '4.45' },
      { tool: 'vLLM', version: '0.6' },
      { tool: 'TensorRT-LLM', version: '0.13' },
      { tool: 'LangGraph', version: '0.2' }
    ],
    note: 'PyTorch for training, vLLM and TensorRT-LLM for inference, LangGraph for agentic orchestration. We do not adopt a framework until it has shipped two stable minor releases.'
  },
  {
    name: 'Data & feature plane',
    versions: [
      { tool: 'Airflow', version: '2.9' },
      { tool: 'dbt-core', version: '1.8' },
      { tool: 'Iceberg', version: '1.6' },
      { tool: 'Trino', version: '455' },
      { tool: 'Feast', version: '0.40' },
      { tool: 'Kafka', version: '3.7' }
    ],
    note: 'Airflow for orchestration, dbt for transformation, Iceberg on S3-compatible object storage, Trino for federated query. Feast holds the feature store; Kafka carries event streams.'
  },
  {
    name: 'ML platform plane',
    versions: [
      { tool: 'Ray', version: '2.30' },
      { tool: 'MLflow', version: '2.16' },
      { tool: 'DVC', version: '3.55' },
      { tool: 'Weights & Biases', version: 'enterprise' },
      { tool: 'Evidently AI', version: '0.4' },
      { tool: 'Argilla', version: '2.2' }
    ],
    note: 'Ray for distributed training, MLflow as the experiment store and model registry, DVC for dataset versioning. Evidently covers drift and bias; Argilla supports the human-in-the-loop evaluation we run with your team for every release.'
  },
  {
    name: 'Serving & infrastructure plane',
    versions: [
      { tool: 'Kubernetes', version: '1.30' },
      { tool: 'Istio', version: '1.23' },
      { tool: 'KServe', version: '0.13' },
      { tool: 'Argo CD', version: '2.12' },
      { tool: 'Terraform', version: '1.9' },
      { tool: 'Terragrunt', version: '0.66' },
      { tool: 'Vault', version: '1.17' },
      { tool: 'OpenTelemetry', version: '1.31' }
    ],
    note: 'Kubernetes 1.30 on EKS, AKS, OKE or G42 K8s. Argo CD for GitOps, Terraform plus Terragrunt for IaC, Vault for secrets. Prometheus, Grafana and Loki layered through OpenTelemetry.'
  },
  {
    name: 'Vector & retrieval plane',
    versions: [
      { tool: 'pgvector', version: '0.7' },
      { tool: 'Postgres', version: '16' },
      { tool: 'Qdrant', version: '1.11' },
      { tool: 'Weaviate', version: '1.26' },
      { tool: 'Elasticsearch', version: '8' }
    ],
    note: 'pgvector on Postgres is the default. Qdrant and Weaviate enter the design when cardinality demands them. Elastic 8 handles hybrid lexical-plus-vector workloads.'
  },
  {
    name: 'Guardrails plane',
    versions: [
      { tool: 'NeMo Guardrails', version: '0.10' },
      { tool: 'Llama Guard 3', version: '8B' },
      { tool: 'WORM audit store', version: 'client-hosted' }
    ],
    note: 'NeMo Guardrails and Llama Guard 3 sit on the request-and-response path; where Arabic policy classification is needed, we train a bespoke classifier inside your engagement repository on your taxonomy. Prompt and response logging is written to a tamper-evident store you own.'
  }
];

const COMPARE_ROWS: CompareRow[] = [
  {
    feature: 'Published, version-pinned stack',
    brocode: 'Yes — STACK.md in a public repo',
    competitors: ['No — slide-only', 'No — bespoke per engagement', "Whatever the client's enterprise architecture mandates"]
  },
  {
    feature: 'Architecture Decision Records',
    brocode: 'Public ADR catalogue, walked through line by line',
    competitors: ['Word documents inside engagement folders', 'None published', 'Embedded in deck appendices']
  },
  {
    feature: 'Portable across UAE clouds',
    brocode: 'Runs unmodified on AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud, Khazna',
    competitors: ['Locked to one hyperscaler', 'Locked to one hyperscaler', 'Locked to a sovereign-only estate']
  },
  {
    feature: 'Proprietary runtime required',
    brocode: false,
    competitors: ['Often', 'Often', 'Sometimes']
  },
  {
    feature: 'Reference architectures with Terraform skeleton',
    brocode: 'Three downloadable — federal RAG, retail bank fraud, energy major predictive maintenance',
    competitors: ['Diagrams only', 'On request', 'Sovereign-locked example']
  },
  {
    feature: 'Quarterly stack review by CTO',
    brocode: true,
    competitors: ['Annual at best', 'Ad hoc', 'Whenever the sovereign ecosystem moves']
  }
];

const NOT_USED: { tool: string; reason: string }[] = [
  { tool: 'n8n / Streamlit in production paths', reason: 'Pleasant for prototypes; not built for the auth, scaling and audit demands of a regulated enterprise.' },
  { tool: 'Single-vendor managed AI platforms with proprietary file formats', reason: 'Migrating off them is a year of work. We will not put that risk on a client balance sheet.' },
  { tool: 'Closed-weight-only model strategies', reason: 'Sovereignty and unit economics fail for high-volume Arabic workloads. Open-weight options stay in the architecture.' },
  { tool: 'CI providers without a self-hosted runner option', reason: 'Regulated estates routinely block public cloud runners. Self-hosted runners are non-negotiable.' },
  { tool: 'Bespoke orchestration languages', reason: 'Anything that needs a new DSL to operate the platform fails the post-handover test on day one.' }
];

const ADRS: { id: string; title: string }[] = [
  { id: 'ADR-007', title: 'Default vector store: pgvector over Qdrant for sub-50M vector workloads' },
  { id: 'ADR-014', title: 'vLLM versus Triton: routing decision matrix per workload class' },
  { id: 'ADR-019', title: 'Sovereign deployment topology for the G42 Cloud control plane' },
  { id: 'ADR-022', title: 'Terraform module structure for cross-cloud landing zones (AWS/Azure/OCI/G42)' },
  { id: 'ADR-028', title: 'Guardrails composition: NeMo + Llama Guard 3 + Arabic policy classifier ordering' }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do you decide when to upgrade a pinned version?',
    answer:
      "We re-evaluate every pin quarterly against four criteria: security patches landed upstream, breaking-change blast radius across our reference architectures, ecosystem readiness (libraries, drivers, deployment manifests), and whether a current client is asking for a feature only the new version provides. Upgrades are batched into a single quarterly stack release with a written migration note and a re-run of the evaluation suite we maintain as a methodology."
  },
  {
    question: 'Is this stack portable to our environment, or do we end up on a Brocode-only runtime?',
    answer:
      "Portable. Every component listed is either open source or available from a commercial vendor with portable artefacts. There is no Brocode-managed runtime, no proprietary file format, no licence held by Brocode that you cannot replicate. Our Terraform module skeleton works against AWS UAE North, Azure UAE North, OCI Abu Dhabi and G42 Cloud out of the box, and against Khazna on-prem with one variable changed."
  },
  {
    question: 'Who owns the IP for code, models and ADRs generated during an engagement?',
    answer:
      'You do. Default contracting language assigns all engagement-generated IP — code, fine-tuned model weights, ADRs, infrastructure manifests — to the client at delivery. Brocode retains the right to use anonymised patterns for our own template library, never raw artefacts. The licensing clause is in our standard MSA and is open to negotiation only on the direction of being more, not less, client-favourable.'
  },
  {
    question: 'How do you handle deprecations in the stack — for instance if Ray loses momentum?',
    answer:
      'Each plane has a documented "if this component disappears" fallback. For Ray, the fallback is Kubernetes-native distributed training via Kubeflow Trainer. We do not switch out a plane component on a hype cycle — only after two quarters of negative ecosystem signal (commit slowdown, contributor exodus, no major release in twelve months, security issue density). Clients running an end-of-life component are notified in writing and given a costed migration plan.'
  },
  {
    question: 'Do you certify your engineers on this stack?',
    answer:
      'Every Brocode engineer on a client engagement has shipped to production on at least three of the six planes. Internal certification covers all six. External certifications we hold across the team include AWS ML Specialty, Azure AI Engineer Associate, OCI AI Foundations Associate, NVIDIA-Certified Associate, and the relevant Databricks and HashiCorp credentials. We publish the certification ledger as part of the lead-magnet pack.'
  },
  {
    question: 'Can we see the actual ADR repository before signing?',
    answer:
      'Yes, under a mutual NDA. We share read-only access to a redacted ADR repository covering the five reference engagements anonymised in this page. Architects routinely spend the first 30 minutes of the walk-through reading the repo with us. If your team prefers, we will export it as a single PDF — but most architects prefer the repo view.'
  }
];

const PROOF_ITEMS = [
  { value: '174', label: 'Production deployments on this stack' },
  { value: '6', label: 'Planes, six versioned pin lists' },
  { value: '5', label: 'UAE estates the stack runs on unmodified' },
  { value: '0', label: 'Proprietary lock-in components' }
];

const RELATED = [
  { label: 'AI Platform Partners', href: '/technology/ai-platform-partners', description: 'The badges that back this stack up — at Premier, Advanced and Solution Provider tier.' },
  { label: 'Cloud Infrastructure Partners', href: '/technology/cloud-infrastructure-partners', description: 'Seven UAE cloud estates this stack ships into.' },
  { label: 'Open-Source Contributions', href: '/technology/open-source', description: 'Where our engineers actually commit upstream — vLLM, tokenizers, pgvector.' },
  { label: 'Delivery Methodology', href: '/technology/methodology', description: 'How the stack is delivered: Discover, Build, Harden, Run.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The service that operates the stack inside your estate.' }
];

const STACK_UPDATED = '2026-05-01';
const STACK_SHA = 'a7c41f3';

export default function StackPage() {
  const techArticleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'The Brocode Production Stack — 2026 Reference Architecture',
    description:
      'Version-pinned, opinionated stack for AI engagements across UAE and GCC. Published with ADRs and reference architectures.',
    url: `https://brocode.ae${PAGE_URL}`,
    image: 'https://brocode.ae/images/technology/stack.jpg',
    author: { '@type': 'Organization', name: 'Brocode Solutions' },
    publisher: { '@type': 'Organization', name: 'Brocode Solutions' },
    dateModified: STACK_UPDATED,
    proficiencyLevel: 'Expert'
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <Script id="ld-techarticle" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero — IDE-style typographic stack with pinned versions */}
      <section className="relative isolate overflow-hidden bg-[#0b1020] text-white" data-page={PAGE_SLUG}>
        <GradientMesh tone="midnight" className="opacity-60" />
        <Image
          src="/images/technology/stack.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-15"
        />
        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            variant="dark"
            items={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }, { label: 'Stack' }]}
          />
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">{'// STACK.md'}</p>
              <h1 className="mt-5 text-balance text-display-xl font-semibold leading-[1.05] text-white">
                The version-pinned stack we run in production today.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                Six planes. Pinned versions on every component. Three reference architectures.
                Walked through line by line with the principal platform engineer who owns it.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Book a one-hour stack walk-through
                </MagneticButton>
                <MagneticButton href="#reference-architecture" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the 2026 reference architecture
                </MagneticButton>
              </div>
              <p className="mt-6 font-mono text-xs text-white/55">
                STACK.md &nbsp;&middot;&nbsp; last updated {STACK_UPDATED} &nbsp;&middot;&nbsp; commit {STACK_SHA}
              </p>
            </div>

            {/* Pinned version strip */}
            <div className="lg:col-span-6">
              <GlassCard tone="dark" padding="md" className="border-white/10 bg-white/5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">$ cat stack.versions</p>
                <ul className="mt-4 grid grid-cols-1 gap-1.5 font-mono text-sm text-white/85 sm:grid-cols-2">
                  {[
                    'python==3.11',
                    'pytorch==2.4',
                    'transformers==4.45',
                    'vllm==0.6',
                    'ray==2.30',
                    'mlflow==2.16',
                    'kubernetes==1.30',
                    'istio==1.23',
                    'argocd==2.12',
                    'terraform==1.9',
                    'pgvector==0.7',
                    'postgres==16',
                    'airflow==2.9',
                    'dbt-core==1.8',
                    'iceberg==1.6',
                    'nemo-guardrails==0.10'
                  ].map((line) => (
                    <li key={line} className="truncate">
                      <span className="text-cyan-300">▸</span> {line}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stack-at-a-glance marquee — runs full-bleed under the hero */}
      <section className="border-y border-ink-100 bg-white" aria-label="Brocode AI technology stack at a glance">
        <div className="container-site py-4">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            The production stack we run today
          </p>
        </div>
        <LogoMarquee items={MARQUEE_LOGOS} tone="light" speed="slow" />
      </section>

      {/* Why we publish */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why we publish the stack"
              title="Architect to architect, not vendor to procurement."
              description="If you cannot read it, you cannot evaluate it. So we publish the pins, the ADRs, and the boundaries between what is portable and what is opinionated."
            />
            <Link href="/technology/open-source" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand">
              See the open-source ledger
            </Link>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-7">
            <Reveal>
              <p>
                A stack page that survives an architecture review board is one written by the
                engineer who has run the pager rotation, not the marketer who collected the badges.
                Brocode publishes its production stack with pinned versions because architects we
                respect have told us the difference between a serious partner and a slide deck is
                whether the version numbers are real. They are real here, reviewed quarterly by our
                CTO, and reflected in the ADR repository we walk you through under NDA in the
                first hour of an engagement.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Every component is opinionated for a reason. Every alternative we considered is
                documented. Every plane has a fallback we have actually rehearsed.{' '}
                <strong className="text-ink-900">Brocode is a services firm — we do not sell
                a Brocode platform, a Brocode runtime, or a Brocode-branded model.</strong>{' '}
                Every component on this page is open source or a portable commercial product
                that you license directly from its vendor. If you walk away from the engagement
                six years from now and run this stack inside your own organisation with your own
                engineers, it will keep working — and that is the only acceptable test for a
                serious enterprise architecture.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The six planes — BentoGrid */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The six planes"
            title="Every plane, every tool, every pin."
            description="Click into the lead-magnet pack for the full pin lists, dependency graphs and Terraform module skeleton."
          />
          <div className="mt-12">
            <BentoGrid>
              {STACK_PLANES.map((plane, idx) => (
                <BentoCell key={plane.name} span={idx % 3 === 0 ? 'lg' : 'md'} variant="light">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                    plane.{String(idx + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink-900">{plane.name}</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 font-mono text-[12.5px] text-ink-700">
                    {plane.versions.map((v) => (
                      <li key={v.tool} className="truncate">
                        <span className="text-ink-400">{v.tool}</span>{' '}
                        <span className="font-semibold text-ink-900">{v.version}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-ink-600">{plane.note}</p>
                </BentoCell>
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Logo library — grouped by plane, each card showing the brand + pinned version */}
      <section className="bg-white py-22 md:py-28" aria-label="Technology logo library">
        <div className="container-site">
          <SectionHeading
            eyebrow="The logo library"
            title="Every tool, in its own colour, with the pin we ship."
            description="No category logo walls. Each cell shows the brand, the version, and the plane it sits in. We swap a logo only when we swap the underlying tool — and write an ADR explaining why."
          />
          <div className="mt-12 space-y-12">
            {LOGO_PLANES.map((plane) => (
              <div key={plane.name}>
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-ink-900">{plane.name}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-ink-600">{plane.description}</p>
                  </div>
                  <p className="font-mono text-xs text-ink-400">{plane.items.length} components</p>
                </div>
                <LogoGrid items={plane.items} tone="light" columns={6} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="container-site">
          <ProofBand items={PROOF_ITEMS} variant="dark" />
        </div>
      </section>

      {/* What we use vs what we do not */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Default versus rejected"
            title="What we default to — and what we deliberately do not use."
            description="Choosing what to leave out of a stack is as important as choosing what is in it."
          />
          <div className="mt-12">
            <CompareTable
              brandLabel="Brocode default"
              competitors={['Offshore SI delivery centres', 'Big-4 AI practice', 'Sovereign-only integrator']}
              rows={COMPARE_ROWS}
            />
          </div>

          <Reveal>
            <div className="mt-14 rounded-2xl border border-ink-100 bg-surface-muted p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Stack rejections</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink-900">Tools we will not put into your estate, and why.</h3>
              <ul className="mt-6 divide-y divide-ink-100">
                {NOT_USED.map((item) => (
                  <li key={item.tool} className="grid grid-cols-1 gap-3 py-5 md:grid-cols-12 md:gap-6">
                    <p className="font-semibold text-ink-900 md:col-span-4">{item.tool}</p>
                    <p className="text-ink-600 md:col-span-8">{item.reason}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reference architectures */}
      <section id="reference-architecture" className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Three reference architectures"
            title="Federal RAG. Retail bank fraud. Energy major predictive maintenance."
            description="Each is a one-click downloadable PDF with Mermaid sources, Terraform module skeleton, and the same component names you have just read."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: 'Federal RAG over Arabic correspondence',
                detail: 'Azure UAE North + G42 Cloud, pgvector on Postgres 16, Llama Guard 3 + Arabic classifier, full audit trail to a WORM store.',
                tag: 'Federal entity'
              },
              {
                title: 'Retail bank fraud platform',
                detail: 'AWS UAE North, Iceberg on S3-compatible storage, Ray for distributed training, drift monitoring through Evidently and the Brocode pack.',
                tag: 'Tier-1 bank'
              },
              {
                title: 'Energy major predictive maintenance',
                detail: 'OCI Abu Dhabi + Khazna on-prem appliance, KServe for inference, Trino federated query across plant historians and the lakehouse.',
                tag: 'ADNOC ecosystem'
              }
            ].map((ref) => (
              <article key={ref.title} className="card flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{ref.tag}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">{ref.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{ref.detail}</p>
                <Link
                  href="#lead-magnet"
                  className="link-arrow mt-auto pt-5 text-sm font-semibold text-brand"
                  data-event="secondary_cta_click"
                  data-page={PAGE_SLUG}
                >
                  Download the architecture
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portability promise + ADRs */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Portability promise"
              title="Portable. Optional. Replaceable. Named."
              description="We separate what the stack mandates from what is a default convenience. No surprises after the SoW is signed."
            />
            <ul className="mt-8 space-y-4 text-ink-700">
              <li>
                <p className="font-semibold text-ink-900">Portable</p>
                <p className="mt-1">Every plane runs on AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud and Khazna on-prem. One Terraform variable changes the cloud target.</p>
              </li>
              <li>
                <p className="font-semibold text-ink-900">Optional</p>
                <p className="mt-1">Weights &amp; Biases, Qdrant, Weaviate, Elastic. We pull these in only where the workload demands them. pgvector is the default; the others are replacements, not additions.</p>
              </li>
              <li>
                <p className="font-semibold text-ink-900">Replaceable</p>
                <p className="mt-1">Every component has a documented fallback. We will not push back on a client mandate to use ClickHouse over Iceberg or Dagster over Airflow. The fallback ADR lists the trade-off.</p>
              </li>
            </ul>
            <Link href="/technology/cloud-infrastructure-partners" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand">
              See the cloud-by-cloud landing zones
            </Link>
          </div>

          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Five ADRs we have published"
              title="The decisions, with the reasoning attached."
            />
            <ol className="mt-8 space-y-3">
              {ADRS.map((adr) => (
                <li key={adr.id}>
                  <article className="card flex items-start gap-5">
                    <span className="rounded-md bg-ink-900 px-2.5 py-1 font-mono text-[11px] font-semibold text-white">
                      {adr.id}
                    </span>
                    <p className="text-ink-900">{adr.title}</p>
                  </article>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-ink-500">
              The full ADR repository is shared under mutual NDA before the walk-through.
            </p>
          </div>
        </div>
      </section>

      {/* The walk-through */}
      <section className="bg-ink-900 py-22 text-white md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="The Stack Walk-Through"
              title="One hour. No slides. The repository on screen."
            />
            <p className="mt-5 text-white/75">
              Every engagement opens with the assigned principal engineer reading the live ADR
              repository with your architecture team. The agenda is set by your questions, not
              ours.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-3">
              {[
                { n: '00:00', t: 'Repository tour', d: 'Live view of STACK.md, the ADR index, the Terraform module skeleton, and a recent evaluation-suite CI run on a representative client engagement.' },
                { n: '00:15', t: 'Your environment, our pins', d: 'How each plane lands in AWS UAE North / Azure UAE North / OCI Abu Dhabi / G42 / Khazna — with the variable changes called out.' },
                { n: '00:30', t: 'The ADRs you flag', d: 'You pick three ADRs to read in detail. We open the repo and walk the reasoning.' },
                { n: '00:50', t: 'Q&A and exit', d: 'You leave with the ADR titles you read, a follow-up note within 24 hours, and the reference architecture pack.' }
              ].map((p, i) => (
                <li key={p.n}>
                  <Reveal delay={i * 0.05}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                      <p className="font-mono text-xs text-cyan-300">{p.n}</p>
                      <h3 className="mt-1 text-xl font-semibold">{p.t}</h3>
                      <p className="mt-2 text-white/75">{p.d}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="lead-magnet" className="bg-white py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="2026 Reference Architecture Pack"
            description="The 48-page PDF, the Terraform module skeleton and the Mermaid-source architecture diagrams for federal RAG, retail bank fraud and energy major predictive maintenance — all pinned to the versions on this page."
            contents={[
              'Core ML: Python 3.11, PyTorch 2.4, vLLM 0.6, Ray 2.30',
              'Platform: K8s 1.30, Terraform 1.9, Argo CD',
              'Data: dbt, Airflow / Dagster, Iceberg, pgvector',
              'Observability: MLflow 2.16, Arize, OpenLineage',
              'Guardrails: NeMo Guardrails, Lakera Guard',
              'Why we picked each (and what we rejected)'
            ]}
            filePath="/downloads/stack-2026-reference-architecture.pdf"
            ctaLabel="Email me the reference architecture pack"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Architect questions"
              title="What architects ask before the walk-through."
              description="Send us the question we did not answer here and we will route it to the principal engineer who owns that plane."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="contact-form" className="relative isolate overflow-hidden bg-white py-22 md:py-28" data-page={PAGE_SLUG}>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Book the walk-through"
              title="One hour with the engineer who owns the stack."
              description="A senior platform engineer responds within one business day. If your architecture review board sits inside two weeks, tell us — we will prioritise."
            />
            <p className="mt-6 text-sm text-ink-600">
              Prefer chat?{' '}
              <a
                href={buildWhatsAppLink(formConfig.whatsappMessage ?? '')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1faa53] underline"
                data-event="whatsapp_hero"
                data-page={PAGE_SLUG}
              >
                Message us on WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={RELATED} />

      <StickyMobileBar
        whatsappMessage={formConfig.whatsappMessage ?? ''}
        primaryLabel="Book a stack walk-through"
        primaryHref="#contact-form"
      />
    </>
  );
}
