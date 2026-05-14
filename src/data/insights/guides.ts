import type { LongPage } from '../types';

export const guides: LongPage = {
  slug: 'guides',
  category: 'insight',
  title: 'Guides & Tutorials',
  seoTitle: 'Practitioner Guides for Enterprise AI Teams',
  seoDescription:
    'Step-by-step guides and tutorials from Brocode Solutions covering AI architecture, MLOps, governance, Arabic NLP, and retrieval-augmented systems for enterprise teams in the UAE and GCC.',
  eyebrow: 'Practitioner content',
  headline: 'Guides written by engineers, for engineers and the leaders who fund them.',
  sub: 'Short, structured walkthroughs that take you from a real problem to a working pattern — drawn from the same playbooks we use on client engagements.',
  heroImage: '/images/insights/guides.jpg',
  heroImageAlt: 'Engineer working through a technical walkthrough on a laptop with notes in the margin',
  heroIcon: 'route',
  intro:
    'Our guides are the middle ground between a blog post and a whitepaper. Each one focuses on a single, well-scoped problem — choosing a vector store, structuring an evaluation harness, instrumenting a retrieval pipeline, drafting a model card — and walks through it with the level of detail an engineering or governance team can act on the same week. The library is curated for technical practitioners and the product, risk, and operations leaders working alongside them, with an emphasis on patterns that survive contact with regulated enterprise environments.',
  sections: [
    {
      heading: 'Architecture and platform guides',
      body: 'These walkthroughs cover the foundational choices behind a working AI platform: reference architectures for retrieval-augmented generation on private corpora, patterns for hybrid on-premise and cloud inference, network and identity designs for sovereign deployments, and the operational layers — model registry, feature store, observability — that turn a collection of notebooks into a managed platform. Each guide includes annotated diagrams, configuration snippets, and a checklist of common pitfalls. We deliberately avoid recommending a single vendor; instead, the guides describe the capabilities required and let teams map them to whatever stack already exists inside the business.'
    },
    {
      heading: 'Engineering and modelling guides',
      body: 'The engineering set is closer to the metal. Topics include fine-tuning open-weight models on Arabic and bilingual corpora, building evaluation harnesses that go beyond accuracy to capture drift and harm, instrumenting feature pipelines for reproducibility, structuring inference services for low-latency multilingual workloads, and writing tests for non-deterministic systems. These guides assume readers are comfortable with Python and modern ML tooling, and they include working code patterns rather than pseudocode. Where a guide references an external library or model, we note the version it was validated against and the date the guide was last reviewed.'
    },
    {
      heading: 'Governance and operations guides',
      body: 'The governance set is written for the people who carry accountability when something goes wrong: heads of risk, compliance officers, model risk managers, and the engineering leads who interface with them. These guides cover writing a model card that satisfies an audit, structuring a fairness review, drafting an incident-response playbook for an AI system, mapping a use case against UAE PDPL and emerging AI regulation, and running a pre-deployment gating committee. The content is procedural rather than philosophical — templates, checklists, and decision trees you can lift into your own quality system.'
    },
    {
      heading: 'How the library is organised',
      body: 'Guides are tagged by audience (engineer, architect, risk, product) and by topic so teams can put together a learning path for new joiners or for a specific initiative. Each title shows the authors, the publication date, the last review date, and an estimated reading time. We add roughly two guides a month and retire content that no longer reflects current practice. Readers can subscribe to a low-volume update list, request a private workshop on any topic, or suggest a guide they would like to see written. The library is meant to compound: useful on its own, more useful as a coherent body of practice.'
    }
  ],
  highlights: [
    { title: 'Retrieval-augmented generation', description: 'Patterns for grounding LLMs in your private knowledge base.', icon: 'database' },
    { title: 'Arabic and bilingual NLP', description: 'Fine-tuning, evaluation, and serving for Arabic-first systems.', icon: 'chat' },
    { title: 'Model evaluation harnesses', description: 'Going beyond accuracy to drift, harm, and business KPIs.', icon: 'chart' },
    { title: 'Sovereign deployment patterns', description: 'Network, identity, and operations for in-country AI.', icon: 'shield' },
    { title: 'Model risk management', description: 'Cards, reviews, and gating that hold up under audit.', icon: 'gavel' },
    { title: 'Incident response for AI', description: 'Detection, triage, and rollback when models misbehave.', icon: 'bolt' }
  ],
  whyBrocode:
    'Our guides are written by engineers who still ship. Each author is part of a delivery team, which keeps the content honest about what works, what does not, and what has changed since the last release. We do not pretend a single guide solves a hard problem, but we do make sure each one moves a competent team meaningfully closer to a working answer without wasting a week on dead ends.',
  ourApproach:
    'Topics come from patterns we see recurring across client engagements. A draft is written by the practitioner closest to the problem, reviewed by a second engineer for technical accuracy, and then read by a non-specialist to catch jargon and missing context. Where a guide includes code or configuration, we run it against the stated versions before publication and tag the guide with a review date. Updates are versioned openly, and we publish errata when readers report issues. The standard we hold ourselves to is whether a competent team could use the guide unaided.',
  stats: [
    { value: 40, suffix: '+', label: 'Guides currently in the library' },
    { value: 2, label: 'New guides published per month' },
    { value: 15, label: 'Average reading time in minutes' },
    { value: 4, label: 'Audience tracks covered' }
  ],
  primaryCta: { label: 'Suggest a guide topic', href: '/contact' },
  secondaryCta: { label: 'Browse all insights', href: '/insights' },
  related: [
    { label: 'Whitepapers', href: '/insights/whitepapers', description: 'Longer-form research from the same teams.' },
    { label: 'AI glossary', href: '/insights/glossary', description: 'Plain-language definitions for shared vocabulary.' },
    { label: 'Methodology', href: '/technology/methodology', description: 'How we run engagements end to end.' },
    { label: 'Technology stack', href: '/technology/stack', description: 'The tools the guides reference in practice.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Put the platform guides into production.' }
  ],
  capabilities: [
    'Annotated reference architectures and diagrams',
    'Working code patterns with pinned versions',
    'Evaluation harness templates and test sets',
    'Model card and governance document templates',
    'Checklists for pre-deployment and incident response',
    'Curated learning paths for new joiners'
  ],
  outcomes: [
    'Faster onboarding for new engineers and analysts',
    'Shared vocabulary across engineering, risk, and product',
    'Fewer dead ends on common architecture decisions',
    'Audit-ready documentation drafted in days, not weeks',
    'A consistent house style across AI delivery teams'
  ]
};
