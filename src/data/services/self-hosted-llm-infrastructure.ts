import type { LongPage } from '../types';

export const selfHostedLlmInfrastructure: LongPage = {
  slug: 'self-hosted-llm-infrastructure',
  category: 'service',
  title: 'Self-hosted LLM Infrastructure',
  seoTitle: 'Self-hosted & Sovereign LLM Infrastructure in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions deploys self-hosted large language models on-premise, in private cloud, and within ADGM and DIFC tenants for regulated enterprises in Abu Dhabi, Dubai, and across the wider UAE and GCC.',
  eyebrow: 'Sovereign generative AI',
  headline: 'Self-hosted large language models that never leave your boundary.',
  sub: 'We design, deploy, and operate private LLM stacks on-premise, in your VPC, or inside ADGM- and DIFC-resident tenants — for organisations that cannot send data to a public API.',
  heroImage: '/images/services/self-hosted-llm-infrastructure.jpg',
  heroImageAlt: 'Rack of GPU servers hosting private language model workloads inside a secure data centre with cool lighting',
  heroIcon: 'cpu',
  intro:
    'For many regulated GCC enterprises, public LLM APIs are not an option. Banking secrecy rules, health data protections, government classifications, and sovereign data policies require that sensitive content never leaves a defined boundary. Brocode Solutions builds self-hosted LLM infrastructure that brings the productivity of generative AI inside that boundary — on-premise, in private cloud, or within an ADGM or DIFC-resident tenant, fully governed and operated by teams under UAE jurisdiction.',
  sections: [
    {
      heading: 'Sovereign deployment from the ground up',
      body: 'We design LLM stacks that respect data residency as a hard constraint, not an afterthought. Models, vector stores, retrieval pipelines, evaluation tooling, and monitoring all run inside the boundary you specify — your on-premise data centre, your private cloud tenancy, or a UAE-resident hyperscaler region under ADGM or DIFC commercial law. No prompts, completions, embeddings, or telemetry traverse public endpoints unless you explicitly permit it. Network isolation, private endpoints, and key management are configured so security and risk teams can sign off without compromise, and we produce the documentation pack auditors will request.'
    },
    {
      heading: 'The right model for the workload',
      body: 'A single frontier model is rarely the right answer. We select and host open-weight models — Llama, Qwen, Mistral, Falcon, DeepSeek, and other UAE-developed models where appropriate — sized to the job. A coding assistant, a customer-service summariser, an Arabic legal-clause extractor, and a research copilot each have different latency, accuracy, and cost profiles. We benchmark candidate models on your real prompts and evaluation sets, recommend the right mix, and host them behind a unified gateway so applications can call the most appropriate model per task without coupling to any single vendor.'
    },
    {
      heading: 'Retrieval, evaluation, and guardrails',
      body: 'A hosted model on its own is rarely enough. Most enterprise use cases require retrieval-augmented generation over your own documents, with bilingual Arabic and English support, access controls that respect document-level permissions, and citation back to the source. We build the retrieval pipeline, the vector store, the evaluation harness, and the safety guardrails — prompt injection defences, output filters, PII redaction, and topic restrictions — alongside the hosting layer. Evaluation runs continuously against a curated set of prompts so regressions are caught before they reach users, with bias and fairness reviews built into the release cycle.'
    },
    {
      heading: 'Operated like production, not like a lab',
      body: 'Self-hosted LLMs only earn their place if they run reliably. We engineer the serving layer for predictable latency under concurrent load using vLLM, TGI, or TensorRT-LLM, with autoscaling, request batching, and quota management per business unit. GPU capacity is monitored and sized against forecast demand; cost is reported per use case so finance can see where value is being created. Observability covers latency, throughput, error rates, evaluation scores, safety triggers, and per-team usage, with on-call runbooks and SLAs that match your other tier-one systems.'
    }
  ],
  highlights: [
    { title: 'Data never leaves the boundary', description: 'On-premise, private cloud, or ADGM- and DIFC-resident tenancy by design.', icon: 'shield' },
    { title: 'Open-weight model choice', description: 'Llama, Qwen, Mistral, Falcon, DeepSeek, and regional models behind one gateway.', icon: 'brain' },
    { title: 'Bilingual retrieval', description: 'Arabic and English RAG with document-level access controls and citations.', icon: 'chat' },
    { title: 'Continuous evaluation', description: 'Curated prompt sets and automated checks catch regressions before users do.', icon: 'chart' },
    { title: 'Production-grade serving', description: 'vLLM, TGI, or TensorRT-LLM with autoscaling, batching, and quotas.', icon: 'bolt' },
    { title: 'Guardrails by default', description: 'Prompt injection defences, PII redaction, and topic restrictions on every call.', icon: 'gavel' }
  ],
  whyBrocode:
    'We operate self-hosted LLM stacks for UAE banks, government bodies, and sovereign-grade entities, including air-gapped deployments. Our engineers run private GPU estates today and know what breaks at scale — from driver versions to context-length blow-ups. Teams are Abu Dhabi based, contract under UAE law, and routinely work alongside your security, network, and data protection officers to clear the architecture for production.',
  ourApproach:
    'We begin with a residency and use-case workshop that maps the data classifications, the workloads, and the regulatory boundary the deployment must respect. A reference architecture is agreed with your security, network, and risk teams before a single GPU is provisioned. Build phases stand up the serving layer, retrieval pipeline, evaluation harness, and observability stack in two-week sprints, with shadow traffic flowing as soon as the gateway is live. Hardening covers penetration testing, prompt-injection review, and red-team exercises. Post-launch, we operate jointly with your team under agreed SLAs until ownership transfers.',
  stats: [
    { value: 100, suffix: '%', label: 'Workloads inside the client boundary' },
    { value: 15, suffix: '+', label: 'Sovereign LLM stacks operated' },
    { value: 40, suffix: '%', label: 'Average cost saving vs commercial APIs at scale' },
    { value: 10, label: 'Weeks median to first production workload' }
  ],
  primaryCta: { label: 'Talk to a sovereign AI lead', href: '/contact' },
  secondaryCta: { label: 'Explore our stack', href: '/technology/stack' },
  related: [
    { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Applications built on top of private LLM stacks.' },
    { label: 'LLM Fine-tuning', href: '/services/llm-fine-tuning', description: 'Adapt open-weight models to your domain and language.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The platform backbone behind every model.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Policies, guardrails, and audit evidence.' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Sovereign generative AI for citizen services.' }
  ],
  capabilities: [
    'On-premise, private cloud, and tenant-resident deployment',
    'Open-weight model selection and hosting',
    'High-throughput serving with vLLM, TGI, or TensorRT-LLM',
    'Bilingual retrieval-augmented generation',
    'Continuous evaluation and red-team tooling',
    'Prompt-injection defences, PII redaction, and topic guardrails'
  ],
  outcomes: [
    'Generative AI workloads running entirely inside your boundary',
    'Predictable latency and cost under real concurrency',
    'Documented residency posture for regulators and auditors',
    'Bilingual RAG across your own document estate',
    'Internal team able to operate the stack after handover'
  ]
};
