import type { LongPage } from '../types';

export const generativeAiDevelopment: LongPage = {
  slug: 'generative-ai-development',
  category: 'service',
  title: 'Generative AI Development',
  seoTitle: 'Generative AI Development Services in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions designs, builds, and operates generative AI applications and platforms for enterprises across banking, government, healthcare, retail, and energy in Abu Dhabi, Dubai, and the wider UAE and GCC.',
  eyebrow: 'Generative AI engineering',
  headline: 'Generative AI applications engineered for enterprise reality, not demo-day theatre.',
  sub: 'We build retrieval, generation, and orchestration systems that produce trustworthy answers, hold up to audit, and respect the sovereignty and bilingual demands of GCC enterprises.',
  heroImage: '/images/services/generative-ai-development.jpg',
  heroImageAlt: 'Architectural visualisation of a retrieval-augmented generation system with knowledge stores, embedding layers, and a guarded response surface',
  heroIcon: 'brain',
  intro:
    'Generative AI changes what enterprise software can credibly do, but only if the underlying systems are engineered carefully. A model that confidently hallucinates a regulatory citation, or that quietly sends customer data to an offshore endpoint, will create more risk than value. Brocode Solutions builds generative applications for UAE and GCC enterprises with that risk asymmetry in mind. We combine retrieval-augmented generation, evaluation harnesses, guardrails, and operational discipline so that the systems we ship can be trusted by frontline staff, sponsors, regulators, and customers.',
  sections: [
    {
      heading: 'Retrieval-augmented generation done properly',
      body: 'Most enterprise generative use cases need grounding in your own data, not generic web knowledge. We design retrieval pipelines that index your policies, contracts, product manuals, regulatory filings, and case histories with attention to chunking, embedding choice, and bilingual handling. Hybrid retrieval combines lexical and semantic signals; reranking sharpens the top results; and generation is constrained to cite the retrieved sources. Every response includes the underlying evidence, so reviewers can verify rather than trust blindly. The architecture is auditable end to end, from ingestion through to the final generated answer.'
    },
    {
      heading: 'Evaluation, guardrails, and red-team testing',
      body: 'Generative systems cannot be evaluated like classical models. We build evaluation harnesses with golden datasets drawn from your domain, automated scoring on factuality, relevance, tone, and policy compliance, and structured human review for edge cases. Guardrails include prompt injection defences, PII detection and redaction, sensitive-topic routing, and refusal handling tuned to your policies. Before release we run adversarial testing against the system in Arabic and English, including dialect and code-switching attacks, so that failure modes are understood and documented before customers ever see them.'
    },
    {
      heading: 'Sovereign deployment and model choice',
      body: 'For many GCC clients, public hyperscaler endpoints are not an option for sensitive data. We design generative platforms that can run against self-hosted open-weight models inside your VPC, sovereign cloud regions, or hybrid configurations with explicit data-flow boundaries. Where commercial frontier models are appropriate, we engineer the integration with strict prompt and response governance, logging, and tenant isolation. Model choice is decoupled from application code, so you can swap providers, upgrade to newer models, or shift to fully self-hosted infrastructure as policy and performance demands evolve.'
    },
    {
      heading: 'Use cases shipped for GCC enterprises',
      body: 'Recent generative engagements include a policy-grounded assistant for a UAE bank that answers compliance officers in Arabic and English with cited sources, a contract analysis platform for a federal procurement function that summarises and flags clauses against standard templates, and a customer service co-pilot for a regional retailer that drafts bilingual responses for human review. Each programme shipped with retrieval, evaluation, guardrails, monitoring, and the operational runbooks required for the in-house team to own the system after our engagement ends.',
    }
  ],
  highlights: [
    { title: 'Grounded retrieval', description: 'Hybrid lexical and semantic retrieval with reranking and source citation on every answer.', icon: 'compass' },
    { title: 'Bilingual generation', description: 'Arabic and English output tuned to enterprise tone, terminology, and regulatory phrasing.', icon: 'chat' },
    { title: 'Sovereign-capable', description: 'Self-hosted open-weight models inside your VPC or sovereign cloud regions.', icon: 'shield' },
    { title: 'Evaluation harnesses', description: 'Golden datasets and automated scoring on factuality, tone, and policy compliance.', icon: 'chart' },
    { title: 'Guardrails by default', description: 'Prompt-injection defences, PII redaction, and refusal handling tuned to your policies.', icon: 'gavel' },
    { title: 'Model-agnostic architecture', description: 'Swap providers or shift to self-hosted models without rewriting your application layer.', icon: 'layers' }
  ],
  whyBrocode:
    'We have built generative applications for UAE banks, federal entities, and regional groups, and we know what separates a demo from a system that survives operations. Our Abu Dhabi engineering teams combine generative depth with the assurance disciplines regulators expect: documented evaluations, lineage, and human oversight. We contract under UAE law, deploy under your sovereignty constraints, and stay accountable for the operational quality of what we build long after the launch event.',
  ourApproach:
    'Each programme begins with a discovery sprint that confirms the use case is suitable for generative AI, the data is available, and the policy boundaries are clear. We deliver in two-week increments against business metrics agreed with sponsors, with weekly steering check-ins. Evaluation, red-team testing, and guardrail tuning happen alongside feature development rather than at the end. Once live, the system enters a defined run-phase with SLAs, drift monitoring, and progressive handover of operational ownership, prompt management, and retraining to your internal team.',
  stats: [
    { value: 20, suffix: '+', label: 'Generative applications shipped' },
    { value: 8, label: 'Sovereign deployments delivered' },
    { value: 99.5, suffix: '%', label: 'Median application availability' },
    { value: 6, label: 'Weeks median first release' }
  ],
  primaryCta: { label: 'Talk to a generative AI engineer', href: '/contact' },
  secondaryCta: { label: 'Explore self-hosted LLM infrastructure', href: '/services/self-hosted-llm-infrastructure' },
  related: [
    { label: 'LLM Fine-Tuning', href: '/services/llm-fine-tuning', description: 'Specialise base models for your domain and dialect.' },
    { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Run open-weight models inside your sovereign estate.' },
    { label: 'Conversational AI & Chatbots', href: '/services/conversational-ai-chatbots', description: 'Customer-facing generative assistants.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Defensible generative AI for regulated industries.' },
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Bilingual language intelligence at the foundation.' }
  ],
  capabilities: [
    'Retrieval-augmented generation with citation grounding',
    'Prompt engineering and structured prompting frameworks',
    'Open-weight model self-hosting and serving',
    'Evaluation harnesses and automated quality scoring',
    'Guardrails, redaction, and policy-aware refusal handling',
    'Bilingual Arabic and English generation tuning'
  ],
  outcomes: [
    'Generative application live within 8 weeks',
    'Documented evaluation results before each release',
    'Cited sources and audit trail on every response',
    'Measurable productivity gains for end users',
    'Internal team enabled to manage prompts and content'
  ]
};
