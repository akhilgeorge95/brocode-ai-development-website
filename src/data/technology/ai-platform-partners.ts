import type { LongPage } from '../types';

export const aiPlatformPartners: LongPage = {
  slug: 'ai-platform-partners',
  category: 'technology',
  title: 'AI Platform Partners',
  seoTitle: 'AI Platform Partners — OpenAI, Anthropic, Cohere, Falcon | Brocode Solutions',
  seoDescription:
    'Brocode Solutions partners with OpenAI, Anthropic, Cohere, Hugging Face, Mistral, Databricks, NVIDIA, and the MBZUAI Falcon ecosystem to deliver AI systems across the GCC.',
  eyebrow: 'Model and platform partners',
  headline: 'The model providers and platform vendors we deploy across the GCC.',
  sub: 'We are deliberately multi-vendor. The right model for a Sharia-compliant credit memo is not the right model for an Arabic call-centre summariser — and our clients should not be locked into the wrong choice.',
  heroImage: '/images/technology/ai-platform-partners.jpg',
  heroImageAlt: 'Network of interconnected model provider nodes showing the routing of workloads across multiple AI platforms.',
  heroIcon: 'link',
  intro:
    'Every serious enterprise AI programme today rests on a portfolio of model providers and platforms, not a single brand. Brocode Solutions maintains active working relationships with the providers our clients rely on — from frontier API houses such as OpenAI and Anthropic, to open-weight ecosystems around Mistral, Llama, and the MBZUAI Falcon family, to platform vendors like Databricks and NVIDIA. We help GCC enterprises navigate those choices with eyes open: pricing, data handling, regional availability, and the small print that procurement and security teams will eventually read.',
  sections: [
    {
      heading: 'Frontier providers: OpenAI, Anthropic, Google, Cohere',
      body: 'For workloads where peak reasoning quality matters — complex contract analysis, multi-step agents, deep document understanding — we deploy against OpenAI, Anthropic, Google, and Cohere. We hold operating familiarity with each of their enterprise tiers: data-handling commitments, regional endpoints, fine-tuning availability, and the specific guarantees relevant to regulated UAE clients. Cohere in particular has earned a place in our portfolio for Arabic-aware enterprise search and on-premise deployment options. We treat these providers as substitutable where possible, abstracting the application layer so that a model change is a configuration switch rather than a rewrite.'
    },
    {
      heading: 'Open weights and regional sovereignty: Mistral, Llama, Falcon',
      body: 'A significant share of our GCC work runs on open-weight models — Mistral, Llama, Qwen, and the Falcon family from the MBZUAI ecosystem in Abu Dhabi. These models matter for two reasons: data sovereignty for clients who cannot send sensitive content to a third-party API, and unit economics for high-volume inference where API pricing becomes prohibitive. We are comfortable fine-tuning, quantising, and serving these models on client infrastructure — and the Falcon ecosystem in particular gives our regional clients a credible Arabic-capable option developed within the UAE.'
    },
    {
      heading: 'Platforms and tooling: Hugging Face, Databricks, NVIDIA',
      body: 'Beyond the model providers, three platform partners feature heavily in our work. Hugging Face is our default registry for open models and datasets, including the private and enterprise hub variants for clients with sensitive artefacts. Databricks anchors many of our data-and-AI estates where lakehouse architectures and Unity Catalog governance matter. NVIDIA partnership covers GPU sourcing, NIM microservices, Triton inference, and the optimisation work needed to fit large models within realistic VRAM budgets — particularly relevant as GPU allocation in the region remains tight relative to demand.'
    },
    {
      heading: 'Choosing, not collecting',
      body: 'Partnership badges are easy to collect and almost meaningless on their own. What matters is whether the consultancy has shipped production work on each platform, knows the failure modes, and can negotiate sensible commercial terms. Our engineers carry hands-on certifications where they exist, but more importantly, every partner relationship is tied to live client engagements. We will not recommend a platform we have not operated. Where two providers are roughly equivalent, we will tell you so and let pricing, regional presence, or strategic considerations decide — rather than steering you toward whichever vendor pays the largest referral.'
    }
  ],
  highlights: [
    { title: 'OpenAI, Anthropic, Google, Cohere', description: 'Frontier-tier providers for the hardest reasoning and language workloads.', icon: 'brain' },
    { title: 'Mistral, Llama, Qwen, Falcon', description: 'Open-weight families for sovereign deployment and high-volume inference.', icon: 'cpu' },
    { title: 'Hugging Face enterprise hub', description: 'Private model and dataset hosting for regulated client artefacts.', icon: 'database' },
    { title: 'Databricks lakehouse', description: 'Unity Catalog governance for clients standardising on lakehouse architecture.', icon: 'layers' },
    { title: 'NVIDIA partnership', description: 'GPU sourcing, NIM, Triton, and optimisation against real VRAM budgets.', icon: 'bolt' },
    { title: 'MBZUAI Falcon ecosystem', description: 'A credible Arabic-capable open-weight family developed within the UAE.', icon: 'chat' }
  ],
  whyBrocode:
    'Brocode Solutions is headquartered in Abu Dhabi, which puts us inside the geography where the Falcon ecosystem, G42, and regional sovereign-cloud providers operate. We move easily between frontier APIs and open-weight self-hosting, and we have actually deployed production systems on every platform we recommend. That gives our advice the weight that comes from operating scars, not vendor slides.',
  ourApproach:
    'We begin every engagement with a platform fit assessment: workload characteristics, data sensitivity, regulatory constraints, latency budgets, and cost envelopes. The output is a recommendation that names a primary provider and a fallback, with the application architecture designed so swapping is realistic. We negotiate enterprise terms on our clients\' behalf where helpful, and we monitor provider changes — new models, pricing shifts, regional rollouts — feeding material updates back into ongoing engagements through a quarterly platform review.',
  stats: [
    { value: 8, label: 'Active model provider partnerships' },
    { value: 40, suffix: '+', label: 'Production deployments across providers' },
    { value: 4, label: 'Quarterly platform reviews per client' },
    { value: 100, suffix: '%', label: 'Recommendations backed by live experience' }
  ],
  primaryCta: { label: 'Plan a platform fit review', href: '/contact' },
  secondaryCta: { label: 'See our stack', href: '/technology/stack' },
  related: [
    { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Building applications on top of frontier and open-weight models.' },
    { label: 'LLM Fine-Tuning', href: '/services/llm-fine-tuning', description: 'Adapting open-weight models to your domain.' },
    { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Running open-weight models on your own infrastructure.' },
    { label: 'Cloud Infrastructure Partners', href: '/technology/cloud-infrastructure-partners', description: 'The cloud platforms we deploy on across the region.' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Where sovereignty and Falcon ecosystem alignment matter.' }
  ],
  capabilities: [
    'OpenAI, Anthropic, Google, Cohere enterprise integrations',
    'Mistral, Llama, Qwen, Falcon fine-tuning and serving',
    'Hugging Face enterprise hub and private model hosting',
    'Databricks lakehouse and Unity Catalog implementation',
    'NVIDIA NIM, Triton, and TensorRT optimisation',
    'Provider abstraction layers for portability between APIs'
  ],
  outcomes: [
    'A documented primary and fallback provider strategy',
    'Negotiated enterprise terms across multiple platforms',
    'Architecture that swaps providers without rewrites',
    'Quarterly written reviews of the platform landscape',
    'Cost-per-thousand-requests visibility across the portfolio'
  ]
};
