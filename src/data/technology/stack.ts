import type { LongPage } from '../types';

export const stack: LongPage = {
  slug: 'stack',
  category: 'technology',
  title: 'Our Technology Stack',
  seoTitle: 'AI Technology Stack — Brocode Solutions UAE',
  seoDescription:
    'The frameworks, platforms, and tooling Brocode Solutions uses to build production AI systems for GCC banks, government bodies, healthcare, and industrial clients.',
  eyebrow: 'Technology choices',
  headline: 'A deliberate stack, picked for what actually ships in production.',
  sub: 'We do not chase the framework of the month. The tools listed here are the ones we have used to take AI systems through procurement, security review, regulator scrutiny, and years of live operation.',
  heroImage: '/images/technology/stack.jpg',
  heroImageAlt: 'Layered abstract diagram of interconnected data pipelines, model registries, and serving infrastructure components.',
  heroIcon: 'layers',
  intro:
    'A technology stack is not a logo wall. It is a set of decisions about reliability, hiring, vendor risk, and what the team will still be able to debug at three in the morning when an alert fires. The choices below reflect the way we build at Brocode Solutions: opinionated where it matters, pragmatic where it does not, and always anchored to what the operations team can actually run after handover. We re-evaluate every choice annually against client outcomes, not against industry hype cycles.',
  sections: [
    {
      heading: 'Modelling and training: Python, PyTorch, JAX where it earns its keep',
      body: 'Python remains the centre of gravity for our modelling work. We standardise on PyTorch for most deep learning, with TensorFlow reserved for clients with an existing investment and JAX for research-heavy work where we need the compilation gains. For tabular and classical machine learning, scikit-learn and XGBoost still outperform fancier alternatives on the kind of structured banking and operational data that dominates GCC use cases. We track experiments through Weights and Biases or MLflow depending on the client environment, and we treat training code as production software — typed, tested, reviewed, and packaged for reproducibility from the first commit.'
    },
    {
      heading: 'LLMs, retrieval, and agents: LangChain, LlamaIndex, vLLM',
      body: 'For generative AI, we use LangChain and LlamaIndex selectively — they accelerate the first cut of an agent or retrieval pipeline, but we are equally willing to write the orchestration ourselves when a client needs tighter control. Inference is served through vLLM or NVIDIA Triton, sized against the workload rather than over-provisioned by reflex. For embeddings and vector retrieval, we deploy pgvector on Postgres when the volume allows, and Weaviate or Pinecone when the workload pushes past it. Fine-tuning and adapter training run on Ray clusters where the throughput justifies the operational overhead.'
    },
    {
      heading: 'Data, pipelines, and warehousing: Airflow, dbt, Snowflake, Postgres',
      body: 'Models live or die on the pipelines that feed them. We use Airflow for orchestration when teams want full control, and managed alternatives such as Prefect or cloud-native schedulers where the operating model fits. Transformations are written in dbt against Snowflake, BigQuery, or Postgres depending on the client estate. We are comfortable with on-premise SQL warehouses, mainframe extracts, and the messy reality of regional data — and we apply the same engineering discipline (version control, CI, lineage, contracts) regardless of whether the warehouse is hosted in Abu Dhabi, Dublin, or a client basement in Sharjah.'
    },
    {
      heading: 'Applications, infrastructure, and the operating layer',
      body: 'Model-backed APIs are built on FastAPI, containerised, and deployed to Kubernetes — usually managed (EKS, AKS, GKE) but occasionally bare-metal where sovereignty requires it. Front-ends are Next.js and React; mobile work uses React Native. Infrastructure is described in Terraform with environment parity enforced through code. Observability is layered: Prometheus and Grafana for system metrics, structured logging through OpenTelemetry, and bespoke model-monitoring dashboards on top. The stack is chosen so that a competent platform engineer can take ownership without exotic knowledge — which matters more than any individual tool choice.'
    }
  ],
  highlights: [
    { title: 'Python first, polyglot where needed', description: 'PyTorch, JAX, scikit-learn, and XGBoost as the modelling spine, with Rust or Go where latency demands it.', icon: 'code' },
    { title: 'Two retrieval tiers', description: 'pgvector for most workloads, Weaviate or Pinecone when scale and recall demand more.', icon: 'database' },
    { title: 'Serving sized to load', description: 'vLLM and Triton tuned to actual traffic — not blanket GPU over-provisioning.', icon: 'bolt' },
    { title: 'Pipelines as code', description: 'Airflow and dbt with full lineage, contracts, and CI on every transformation.', icon: 'workflow' },
    { title: 'Kubernetes-native delivery', description: 'Terraform-managed clusters with sovereign-cloud options for regulated workloads.', icon: 'cloud' },
    { title: 'Observability by default', description: 'Prometheus, Grafana, OpenTelemetry, and model-drift dashboards from day one.', icon: 'chart' }
  ],
  whyBrocode:
    'Most consultancies will recommend whatever their cloud partner subsidises. We choose tooling against three tests: can your team operate it after we leave, will it pass a procurement and security review in the UAE, and is the vendor likely to still be funded in three years. Our engineers have lived with these tools through audits, incidents, and renewals, so the recommendations come from operational scars rather than vendor decks.',
  ourApproach:
    'Stack decisions are made jointly with your platform, security, and finance leads in the first two weeks of an engagement. We map the existing estate, identify the constraints (data residency, hiring pool, licence costs), and produce a written architecture brief that names every component, its alternative, and the reason for the choice. The brief is revisited at each phase gate. Where a client already operates on a fixed stack, we adapt rather than impose — the framework matters less than the discipline applied to it.',
  stats: [
    { value: 25, suffix: '+', label: 'Production frameworks operated' },
    { value: 99.95, suffix: '%', label: 'Median platform availability' },
    { value: 18, label: 'Months average tool review cycle' },
    { value: 100, suffix: '%', label: 'Infrastructure as code coverage' }
  ],
  primaryCta: { label: 'Discuss a stack review', href: '/contact' },
  secondaryCta: { label: 'Read our methodology', href: '/technology/methodology' },
  related: [
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Operate models like products, not science projects.' },
    { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'When sovereignty rules out hosted APIs.' },
    { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'The pipelines that decide whether a model earns its keep.' },
    { label: 'Cloud Infrastructure Partners', href: '/technology/cloud-infrastructure-partners', description: 'The platforms we deploy on across the region.' },
    { label: 'AI Platform Partners', href: '/technology/ai-platform-partners', description: 'Model providers and platform vendors we work with.' }
  ],
  capabilities: [
    'PyTorch, TensorFlow, JAX, scikit-learn, XGBoost',
    'LangChain, LlamaIndex, vLLM, NVIDIA Triton, Ray',
    'Airflow, dbt, Snowflake, BigQuery, Postgres, pgvector',
    'Weaviate, Pinecone, Elasticsearch, OpenSearch',
    'Kubernetes, Terraform, FastAPI, Next.js, React Native',
    'MLflow, Weights and Biases, Prometheus, Grafana, OpenTelemetry'
  ],
  outcomes: [
    'Architecture brief that survives security and procurement review',
    'Reproducible builds across dev, staging, and production',
    'Predictable inference cost per thousand requests',
    'Platform engineers able to operate the stack post-handover',
    'A tool inventory mapped to business risk and renewal dates'
  ]
};
