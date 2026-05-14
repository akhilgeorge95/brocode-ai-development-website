import type { LongPage } from '../types';

export const cloudInfrastructurePartners: LongPage = {
  slug: 'cloud-infrastructure-partners',
  category: 'technology',
  title: 'Cloud Infrastructure Partners',
  seoTitle: 'Cloud Infrastructure Partners — AWS, Azure, GCP, Oracle, G42 | Brocode',
  seoDescription:
    'Brocode Solutions deploys AI systems across AWS, Microsoft Azure, Google Cloud, Oracle Cloud UAE, G42 Cloud, and Khazna data centres for clients with sovereign data requirements.',
  eyebrow: 'Cloud and sovereign hosting',
  headline: 'Cloud choices that respect where your data is allowed to live.',
  sub: 'GCC enterprises have richer hosting options than the headline hyperscalers — and choosing between them is a regulatory question as much as a technical one. We deploy across all of them.',
  heroImage: '/images/technology/cloud-infrastructure-partners.jpg',
  heroImageAlt: 'Geographic visualisation of data centre regions across the UAE and GCC connected by sovereign network paths.',
  heroIcon: 'cloud',
  intro:
    'Data residency, sovereignty, and the precise legal status of a workload sit at the centre of every AI conversation we have with UAE and GCC clients. The right cloud is rarely the cheapest cloud or the most fashionable cloud. It is the one that lets your legal team sign the data-processing addendum without redactions, places latency near your users, and aligns with your sectoral regulator. Brocode Solutions has built and operated AI workloads on every major hyperscaler with a UAE region, as well as the regional sovereign-cloud providers that increasingly matter for government and critical-infrastructure clients.',
  sections: [
    {
      heading: 'AWS, Azure, and Google Cloud in the UAE',
      body: 'AWS Middle East (UAE) in Abu Dhabi, Microsoft Azure UAE North and Central, and Google Cloud Dammam and Doha give our clients three credible hyperscaler options within easy latency of GCC users. We have shipped production AI workloads on each. Our certified engineers know the specific service combinations that matter for AI — SageMaker, Bedrock, Azure ML, Azure OpenAI Service, Vertex AI, and the underlying networking, IAM, and key management primitives that compliance teams will scrutinise. Where a client has a multi-cloud mandate, we design for it deliberately rather than as an accident of acquisitions.'
    },
    {
      heading: 'Oracle Cloud and the regulated workload niche',
      body: 'Oracle Cloud Infrastructure has carved out a meaningful position for regulated workloads in the UAE — particularly in banking, government, and clients with deep Oracle database estates. The Abu Dhabi and Dubai regions, combined with sovereign options and the EU Sovereign Cloud architecture, make OCI a credible choice we deploy on for several financial-services clients. We work with Oracle Cloud GPU and AI services where the commercial fit works, and we are honest about the trade-offs against the larger hyperscalers when ecosystem maturity matters more than commercial alignment.'
    },
    {
      heading: 'Regional sovereign clouds: G42, Khazna, and beyond',
      body: 'For government, defence-adjacent, and certain critical-infrastructure workloads, the regional sovereign-cloud providers are not optional. G42 Cloud, Khazna data centres, and du and Etisalat hosting options handle workloads that genuinely cannot leave UAE borders, with operational controls and personnel-clearance regimes that the hyperscalers cannot match. We have direct working experience with these providers, including the partnership constructs where G42 and Microsoft jointly serve regulated clients. Selecting between sovereign and hyperscaler is a decision we walk clients through carefully — it shapes everything downstream from the model choice to the operating cost.'
    },
    {
      heading: 'Hybrid, on-premise, and the realistic middle ground',
      body: 'Many of our clients land on a hybrid model: training and experimentation in a hyperscaler, sensitive inference on sovereign or on-premise infrastructure. We design for that pattern routinely, using Kubernetes, Terraform, and well-chosen service abstractions to make workloads portable. We have deployed self-hosted LLMs on bare-metal GPU clusters inside client data centres, and we have built data planes that synchronise carefully across cloud boundaries while respecting residency. The architecture costs more to engineer initially, but it lets clients with strict sovereignty obligations still capture the productivity and tooling advantages of the hyperscalers.'
    }
  ],
  highlights: [
    { title: 'AWS UAE region', description: 'SageMaker, Bedrock, and production AI workloads in the Abu Dhabi region.', icon: 'cloud' },
    { title: 'Microsoft Azure UAE', description: 'Azure ML, Azure OpenAI Service, and the G42 joint sovereign offerings.', icon: 'cloud' },
    { title: 'Google Cloud GCC', description: 'Vertex AI deployments via Dammam and Doha regions.', icon: 'cloud' },
    { title: 'Oracle Cloud Abu Dhabi and Dubai', description: 'Sovereign options for banking and government with deep Oracle estates.', icon: 'cloud' },
    { title: 'G42 Cloud and Khazna', description: 'Sovereign hosting for workloads that cannot leave UAE borders.', icon: 'shield' },
    { title: 'Hybrid and on-premise', description: 'Bare-metal GPU and edge deployments where residency demands it.', icon: 'cpu' }
  ],
  whyBrocode:
    'Based in Abu Dhabi, we work daily with the cloud providers that matter most to GCC clients — including the regional sovereign options that consultancies parachuting in from London or Singapore have rarely operated. We have certified architects across the major platforms and operating experience on the regional ones, which means our cloud recommendations reflect the real procurement, residency, and operations landscape.',
  ourApproach:
    'A cloud recommendation begins with a residency-and-regulation workshop: which data classifications apply, what your sector regulator expects, and which workloads are negotiable on residency. From there we map workloads to providers, model the three-year cost envelope including egress and GPU allocation, and produce a written recommendation that names the primary and secondary provider. We handle the procurement support, account setup, landing-zone build, and the security baseline. Each landing zone is delivered as Terraform with environment parity from the first day.',
  stats: [
    { value: 6, label: 'Cloud providers operated in production' },
    { value: 30, suffix: '+', label: 'Landing zones delivered' },
    { value: 100, suffix: '%', label: 'Infrastructure as code on every build' },
    { value: 3, label: 'Sovereign-cloud clients in active operation' }
  ],
  primaryCta: { label: 'Plan a cloud and residency workshop', href: '/contact' },
  secondaryCta: { label: 'Read our methodology', href: '/technology/methodology' },
  related: [
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Operating models reliably on whichever cloud you choose.' },
    { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'When sovereignty rules out hosted APIs.' },
    { label: 'AI Platform Partners', href: '/technology/ai-platform-partners', description: 'The model providers we deploy on top of these clouds.' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Where sovereign-cloud choices are non-negotiable.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Regulator-aware cloud architectures for FS clients.' }
  ],
  capabilities: [
    'AWS, Azure, Google Cloud, Oracle Cloud landing zones',
    'G42 Cloud and Khazna sovereign hosting',
    'Hybrid and multi-cloud reference architectures',
    'GPU sourcing and capacity planning across providers',
    'Terraform-based landing zone delivery',
    'On-premise and bare-metal AI infrastructure'
  ],
  outcomes: [
    'A residency-compliant primary and fallback cloud strategy',
    'Three-year cost envelope including egress and GPU',
    'Landing zone delivered as code with environment parity',
    'Documented data flows mapped to regulatory classifications',
    'A procurement pack the legal team can sign without redaction'
  ]
};
