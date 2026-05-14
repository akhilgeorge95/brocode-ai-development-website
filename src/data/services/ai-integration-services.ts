import type { LongPage } from '../types';

export const aiIntegrationServices: LongPage = {
  slug: 'ai-integration-services',
  category: 'service',
  title: 'AI Integration Services',
  seoTitle: 'AI Integration Services for Enterprise Systems in the UAE',
  seoDescription:
    'Brocode Solutions integrates AI models and copilots into core banking, ERP, CRM, claims, and government systems across the UAE and GCC, with security and data residency in mind.',
  eyebrow: 'Enterprise AI integration',
  headline: 'Integrate AI into the systems your business already runs on.',
  sub: 'We connect AI models, copilots, and agents into core banking, ERP, CRM, claims, and government platforms so the intelligence reaches the people doing the work, not a separate dashboard nobody opens.',
  heroImage: '/images/services/ai-integration-services.jpg',
  heroImageAlt: 'Engineer connecting an AI service into a core banking platform through an API gateway dashboard',
  heroIcon: 'link',
  intro:
    'A model that lives in a notebook earns nothing. The value of AI shows up when a relationship manager sees a propensity score inside the CRM, a claims handler gets a fraud signal inside their workbench, or a citizen-services officer sees a translated case summary inside the existing service portal. Brocode Solutions specialises in this connective tissue. From our Abu Dhabi base we integrate AI services into the enterprise systems GCC organisations actually run — Temenos, SAP, Oracle, Salesforce, Dynamics, ServiceNow, Guidewire, and the bespoke platforms that quietly hold critical processes together.',
  sections: [
    {
      heading: 'Integration that respects the systems of record',
      body: 'Core platforms are the heart of regulated organisations and they tolerate no half-measures. Our integration engineers design every connection with system-of-record discipline: idempotent calls, transactional boundaries, full audit logging, and clear rollback paths. We work through the integration patterns each platform expects — Temenos extensibility framework, SAP BTP, Salesforce APEX and Platform Events, ServiceNow scoped apps — rather than bolting on brittle screen-scraping. The result is AI that behaves like a first-class citizen of your estate, passing the same compliance, change-management, and disaster-recovery tests as any other production component touching customer data.'
    },
    {
      heading: 'Copilots and assistants inside the tools your teams use',
      body: 'We embed AI copilots directly into the screens employees already live in. For a regional bank that meant a relationship manager copilot inside Salesforce, drafting client emails in Arabic and English with the latest portfolio context attached. For a hospital group it meant a clinical summarisation panel inside the EMR, pulling structured notes from free text. We design the prompts, retrieval pipelines, guardrails, and the small UI components that make the assistant feel native. Adoption follows because the AI shows up where the work happens, not in a parallel tab that competes for attention.'
    },
    {
      heading: 'Event-driven AI across hybrid estates',
      body: 'GCC enterprises rarely run on a single cloud. We design AI integration patterns that span on-premise mainframes, private cloud, and hyperscaler estates, using event-driven backbones — Kafka, Azure Service Bus, AWS EventBridge, MuleSoft, MQ — to keep latency low and dependencies loose. Models are exposed as versioned services with circuit breakers, rate limits, and graceful degradation so a model outage never takes down a transaction flow. Where data residency matters, the AI service stays inside sovereign boundaries and only metadata flows to centralised observability, an architecture our regulator-facing clients have found defensible.'
    },
    {
      heading: 'Security, identity, and observability from day one',
      body: 'Every integration is wired into your existing identity provider so AI features inherit the same entitlements as the underlying record. Calls are signed, logged, and rate-limited at the gateway. We integrate with your SIEM, your DLP, and your data-loss controls so prompts and responses are scanned for sensitive content before they leave the perimeter. Observability covers latency, error rates, hallucination flags, and cost per call, surfaced in the same dashboards your platform team already watches. When something misbehaves, your operations team sees it in their existing tooling rather than a vendor portal nobody is paged on.'
    }
  ],
  highlights: [
    { title: 'Core platform fluency', description: 'Hands-on with Temenos, SAP, Oracle, Salesforce, Dynamics, ServiceNow, Guidewire.', icon: 'cogs' },
    { title: 'Embedded copilots', description: 'AI assistants inside the screens your teams already use every day.', icon: 'chat' },
    { title: 'Event-driven backbone', description: 'Kafka, Service Bus, MQ, and API gateways tuned for low latency.', icon: 'workflow' },
    { title: 'Identity and SIEM aware', description: 'Inherits your entitlements, logging, and security operations tooling.', icon: 'shield' },
    { title: 'Hybrid and sovereign', description: 'On-premise, private cloud, hyperscaler — pick what your data needs.', icon: 'cloud' },
    { title: 'Graceful degradation', description: 'Circuit breakers and fallbacks so AI never takes down a transaction.', icon: 'route' }
  ],
  whyBrocode:
    'Integration is where most AI programmes quietly die. Our engineers have spent years inside the same core platforms GCC banks, insurers, utilities, and ministries depend on, so they speak the language of your platform teams from day one. We work under UAE contracting and labour law from Abu Dhabi, which simplifies on-site collaboration with your integration, security, and change-advisory boards. We integrate AI services, we do not resell them.',
  ourApproach:
    'We begin with a two- to three-week integration discovery: target platforms, identity model, data flows, change-management process, and non-functional requirements. We then build a thin end-to-end slice — one real use case, one real screen, one real data path — to validate the patterns end-to-end before scaling. Hardening covers security review, penetration testing, load testing, and disaster-recovery rehearsals. Once live, we operate alongside your team under an agreed SLA, gradually transferring runbook ownership while remaining accountable for incident response and performance through the agreed support window.',
  stats: [
    { value: 70, suffix: '+', label: 'Enterprise integrations delivered' },
    { value: 9, label: 'Core platforms supported' },
    { value: 99.95, suffix: '%', label: 'Integration availability target' },
    { value: 6, label: 'Weeks to first production slice' }
  ],
  primaryCta: { label: 'Plan an integration', href: '/contact' },
  secondaryCta: { label: 'See our technology stack', href: '/technology/stack' },
  related: [
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The platform layer integrations call into.' },
    { label: 'AI Agents & Agentic Workflows', href: '/services/ai-agents-agentic-workflows', description: 'Multi-step AI work across systems.' },
    { label: 'Conversational AI & Chatbots', href: '/services/conversational-ai-chatbots', description: 'Front-end channels for integrated AI.' },
    { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Run models inside sovereign boundaries.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Integration patterns proven in core banking.' }
  ],
  capabilities: [
    'API gateway and event-bus integration design',
    'Copilot and assistant embedding in enterprise UIs',
    'Identity federation, OAuth, and entitlement reuse',
    'Hybrid and on-premise model serving patterns',
    'SIEM, DLP, and observability instrumentation',
    'Performance, load, and chaos testing for AI services'
  ],
  outcomes: [
    'AI features live inside core systems, not side dashboards',
    'Auditable, signed, and rate-limited model calls',
    'Inheritance of existing identity and entitlement model',
    'Observability inside the same tooling your team already watches',
    'Documented runbooks and disaster-recovery procedures'
  ]
};
