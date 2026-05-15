import type { LongPage } from '../types';

export const llmFineTuning: LongPage = {
  slug: 'llm-fine-tuning',
  category: 'service',
  title: 'LLM Fine-Tuning',
  seoTitle: 'LLM Fine-Tuning & Adaptation Services in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions fine-tunes open-weight large language models on enterprise data for banks, government bodies, and regulated clients across Abu Dhabi, Dubai, and the wider UAE and GCC.',
  eyebrow: 'Model adaptation',
  headline: 'Fine-tuned language models that speak your domain, your dialect, and your policy.',
  sub: 'We adapt open-weight foundation models to enterprise data and bilingual operations, so that quality, cost, and sovereignty land where your CIO needs them to.',
  heroImage: '/images/services/llm-fine-tuning.jpg',
  heroImageAlt: 'Schematic of a large language model being adapted with domain-specific datasets, showing parameter-efficient training adapters layered onto a base model',
  heroIcon: 'layers',
  intro:
    'Off-the-shelf large language models are remarkable generalists and unreliable specialists. They miss regional regulatory terminology, mishandle Gulf-dialect Arabic, and produce inconsistent outputs in the structured formats your downstream systems expect. Brocode Solutions fine-tunes open-weight foundation models to close those gaps, working from our Abu Dhabi base across banks, federal entities, healthcare groups, and industrial clients. We treat fine-tuning as an engineering discipline: dataset curation, parameter-efficient training, rigorous evaluation, and operational integration that lets the resulting model earn its place in production.',
  sections: [
    {
      heading: 'Dataset curation is most of the work',
      body: 'A fine-tuning programme succeeds or fails on the quality of its dataset. We start by cataloguing the sources that capture how your business actually communicates: policy manuals, customer correspondence, agent transcripts, regulatory submissions, internal knowledge bases. We design data contracts, deduplication, redaction, and quality scoring pipelines, then assemble instruction or preference datasets with explicit coverage of the tasks the model needs to perform. Arabic and English are handled together where the use case demands bilingual fluency. Every training example is traceable to its source so the resulting model can be defended under audit.'
    },
    {
      heading: 'Parameter-efficient methods that respect your budget',
      body: 'Full-parameter fine-tuning is rarely the right tool. We use parameter-efficient methods — LoRA, QLoRA, adapter tuning, and selective layer training — that deliver the behaviour changes you need at a fraction of the compute cost, and that allow multiple specialised variants to coexist on shared base weights. For preference-aligned behaviours we apply direct preference optimisation and reinforcement-from-human-feedback techniques where they materially improve outcomes. Training runs on your sovereign GPU estate, a private cloud region, or a curated hosted environment, with reproducible artefacts and versioned datasets at every step.'
    },
    {
      heading: 'Evaluation that reflects production conditions',
      body: 'We evaluate fine-tuned models against held-out datasets drawn from your real operations, with automated scoring on factuality, format compliance, tone, and policy adherence. Bilingual evaluation covers Modern Standard Arabic, Gulf dialect, English, and code-switched inputs. Adversarial testing probes prompt-injection resistance and refusal behaviour. Where high-stakes decisions are involved, structured human review supplements automated scoring. We benchmark against the base model, the previous fine-tune, and any commercial frontier alternative under consideration, so that the business case for the adapted model is grounded in evidence rather than intuition.'
    },
    {
      heading: 'Operational integration and lifecycle',
      body: 'A fine-tuned model is only useful inside a serving stack that meets your latency, throughput, and cost targets. We deploy adapted models on vLLM, TGI, or comparable runtimes inside your VPC, sovereign cloud, or hybrid environment, with quantisation and batching tuned to the hardware. Adapters are versioned and managed alongside base-model upgrades, with canary releases and automated rollback. Drift monitoring, output-quality dashboards, and structured re-tuning cycles keep the model aligned to evolving policies and customer behaviour, rather than aging silently into irrelevance.'
    }
  ],
  highlights: [
    { title: 'Open-weight specialisation', description: 'Llama, Mistral, Qwen, Falcon, and other open-weight families adapted to your domain.', icon: 'layers' },
    { title: 'Arabic and bilingual tuning', description: 'Gulf-dialect Arabic, code-switching, and bilingual output handled as first-class objectives.', icon: 'chat' },
    { title: 'Parameter-efficient training', description: 'LoRA, QLoRA, and adapter methods that respect compute budgets and reuse base weights.', icon: 'bolt' },
    { title: 'Sovereign training', description: 'Runs on your private GPU estate or sovereign cloud, with no data leaving agreed boundaries.', icon: 'shield' },
    { title: 'Reproducible artefacts', description: 'Versioned datasets, checkpoints, and evaluation reports for every training run.', icon: 'doc' },
    { title: 'Production serving', description: 'vLLM, TGI, and quantised inference stacks tuned to your latency and cost envelope.', icon: 'cpu' }
  ],
  whyBrocode:
    'We have fine-tuned and operated open-weight models for UAE banks, federal entities, and regional groups under sovereignty constraints. Our Abu Dhabi engineers combine working knowledge of Arabic linguistics with the training-systems experience required to produce models that actually behave better than their base. We contract under UAE law, run training inside your boundaries, and remain accountable for the operational quality of the adapted model after delivery.',
  ourApproach:
    'Programmes begin with a discovery sprint that confirms fine-tuning is the right tool, the data is sufficient, and the success metrics are agreed with sponsors. Dataset curation, evaluation harness construction, and parameter-efficient training proceed in parallel, with weekly steering reviews. Each candidate model is benchmarked against the base, the previous fine-tune, and commercial alternatives before release. Post deployment, the system enters a defined run-phase with drift monitoring, scheduled re-tuning cycles, and progressive transfer of training, evaluation, and operations to your internal team.',
  stats: [
    { value: 30, suffix: '+', label: 'Fine-tuning programmes delivered' },
    { value: 12, label: 'Open-weight model families supported' },
    { value: 99.5, suffix: '%', label: 'Median serving availability' },
    { value: 70, suffix: '%', label: 'Average inference-cost reduction' }
  ],
  primaryCta: { label: 'Talk to a fine-tuning engineer', href: '/contact' },
  secondaryCta: { label: 'See self-hosted LLM infrastructure', href: '/services/self-hosted-llm-infrastructure' },
  related: [
    { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Applications built on fine-tuned and frontier models.' },
    { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Serve adapted models inside your sovereign estate.' },
    { label: 'AI Model Optimization', href: '/services/ai-model-optimization', description: 'Quantisation and distillation for affordable serving.' },
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Bilingual language intelligence foundations.' },
    { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Pipelines that produce training-ready data.' }
  ],
  capabilities: [
    'Instruction and preference dataset construction',
    'LoRA, QLoRA, and adapter-based parameter-efficient tuning',
    'Direct preference optimisation and RLHF where warranted',
    'Bilingual Arabic and English evaluation harnesses',
    'Quantisation, batching, and inference-stack optimisation',
    'Versioned training pipelines on sovereign infrastructure'
  ],
  outcomes: [
    'Adapted model live within 10 weeks of kickoff',
    'Documented uplift over base and frontier baselines',
    'Inference cost reduced versus commercial alternatives',
    'Bilingual output quality measured on real traffic',
    'Internal team trained to retune on cadence'
  ]
};
