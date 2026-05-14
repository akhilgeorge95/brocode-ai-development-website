import type { LongPage } from '../types';

export const whitepapers: LongPage = {
  slug: 'whitepapers',
  category: 'insight',
  title: 'Whitepapers',
  seoTitle: 'Enterprise AI Whitepapers from Brocode Solutions',
  seoDescription:
    'Download in-depth whitepapers from Brocode Solutions on sovereign generative AI, Arabic NLP, MLOps, AI governance, and regulated-industry deployments across the UAE and GCC.',
  eyebrow: 'Long-form research',
  headline: 'Whitepapers for teams building real AI inside regulated enterprises.',
  sub: 'Our whitepapers are written by the same engineers and architects who deliver our client work — practical, evidence-led, and grounded in what actually ships in the GCC.',
  heroImage: '/images/insights/whitepapers.jpg',
  heroImageAlt: 'Bound research documents arranged on a desk beside a tablet displaying analytical charts',
  heroIcon: 'doc',
  intro:
    'Most AI whitepapers are written to sell software. Ours are written to settle arguments inside steering committees. Each title is produced by the Brocode engineering and advisory teams who have implemented similar systems for UAE banks, government bodies, and industrial clients, and each is peer-reviewed before publication. The library is designed to give technology leaders, risk officers, and operating executives the evidence they need to make defensible decisions about AI investment, sourcing, and architecture — without the marketing varnish that surrounds the field.',
  sections: [
    {
      heading: 'Sovereign generative AI in the GCC',
      body: 'Our flagship paper, "Sovereign GenAI in the GCC", examines the architectural and operational choices facing organisations that cannot send sensitive data to public model endpoints. It compares self-hosted open-weight stacks, sovereign hyperscaler regions, and hybrid topologies against criteria that matter to UAE boards: data residency under PDPL, latency profiles for Arabic workloads, total cost of ownership over five years, and the engineering maturity required to operate each option safely. The paper draws on three live deployments and includes reference network diagrams, sample procurement clauses, and an honest discussion of where sovereign approaches still trail the hosted alternatives.'
    },
    {
      heading: 'Arabic NLP at production scale',
      body: '"Arabic NLP at Production Scale" addresses the gap between published benchmarks and the messy reality of Arabic text in enterprise systems. We cover dialectal variation across Gulf, Levantine, and North African Arabic, code-switching with English, handling of diacritics and orthographic noise, named-entity recognition for Emirati and wider Arab names, and the calibration of retrieval pipelines for mixed Arabic-English knowledge bases. The paper presents evaluation methodology our team uses on client projects, including custom test sets for banking and government use cases, and shares lessons from tuning open-weight models for Modern Standard Arabic without losing English performance.'
    },
    {
      heading: 'MLOps for regulated industries',
      body: '"MLOps for Regulated Industries" sets out the operating model required to run machine learning safely inside banks, insurers, and public-sector bodies. It maps the controls expected by UAE and GCC regulators — model risk management, change control, data lineage, fairness review, incident response — to concrete engineering practices and tooling choices. Companion papers in the series include "Responsible AI Governance: A Practitioner Playbook", which translates principles into committee structures, RACI charts, and review templates, and "Evaluating LLMs for Enterprise Use", which provides a structured methodology for choosing between hosted and self-hosted language models.'
    },
    {
      heading: 'How to use the library',
      body: 'Whitepapers are released as downloadable PDFs with accompanying executive summaries. Each title lists the authoring team, the publication date, and the version history, so readers can see when content has been refreshed. We update papers when material new evidence emerges — for example, when a regulator issues fresh guidance or when a reference architecture proves itself across enough engagements to be worth recommending broadly. If you would like a private briefing on any paper, our authors are available to walk your team through the findings and adapt the recommendations to your context.'
    }
  ],
  highlights: [
    { title: 'Sovereign GenAI in the GCC', description: 'Architectural choices for keeping generative AI inside national boundaries.', icon: 'shield' },
    { title: 'Arabic NLP at production scale', description: 'Engineering Arabic-first language systems that hold up in the wild.', icon: 'chat' },
    { title: 'MLOps for regulated industries', description: 'The operating model behind models that survive audit.', icon: 'cogs' },
    { title: 'Responsible AI playbook', description: 'Principles translated into committees, controls, and templates.', icon: 'gavel' },
    { title: 'Evaluating LLMs for enterprise', description: 'A structured way to compare hosted and self-hosted options.', icon: 'brain' },
    { title: 'Vector search reference designs', description: 'Patterns for retrieval-augmented systems on private data.', icon: 'database' }
  ],
  whyBrocode:
    'We publish what we have built. Every whitepaper is anchored in client engagements delivered out of our Abu Dhabi practice and reviewed by senior engineers who carry production responsibility. We do not commission ghostwriters and we do not recycle vendor decks. When a paper recommends an approach, it is because we have implemented it, watched it operate under load, and seen it pass internal audit.',
  ourApproach:
    'Each paper begins with a working hypothesis drawn from client work, followed by structured research: literature review, benchmark testing, and validation against live systems where data-sharing arrangements permit. Drafts are reviewed by an internal panel covering engineering, governance, and industry domain expertise, and then by an external reader from the relevant sector before release. We version papers openly, retire material that no longer reflects practice, and publish errata when readers identify issues. The library is meant to be useful five years out, not just current at the launch event.',
  stats: [
    { value: 12, suffix: '+', label: 'Whitepapers published to date' },
    { value: 4, label: 'Sector-specific paper series' },
    { value: 18, label: 'Average pages per title' },
    { value: 6, label: 'Languages summaries available in' }
  ],
  primaryCta: { label: 'Request the latest paper', href: '/contact' },
  secondaryCta: { label: 'Browse all insights', href: '/insights' },
  related: [
    { label: 'Guides & tutorials', href: '/insights/guides', description: 'Shorter, hands-on practitioner content.' },
    { label: 'AI glossary', href: '/insights/glossary', description: 'Plain-language definitions for enterprise readers.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Translate the papers into operating reality.' },
    { label: 'Self-hosted LLM infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Build the sovereign stack the papers describe.' },
    { label: 'AI Consulting & Strategy', href: '/services/ai-consulting-strategy', description: 'Private briefings on any title.' }
  ],
  capabilities: [
    'Architectural reference designs and diagrams',
    'Procurement and contracting clause libraries',
    'Benchmark methodology for Arabic and bilingual models',
    'Regulator-mapped control frameworks',
    'Total-cost-of-ownership models for AI platforms',
    'Vendor evaluation rubrics for hosted and self-hosted AI'
  ],
  outcomes: [
    'Defensible board papers on AI strategy and sourcing',
    'Shorter procurement cycles backed by reference clauses',
    'Internal alignment on architecture and governance choices',
    'Sharper risk conversations with audit and compliance',
    'A reusable evidence base for future AI investments'
  ]
};
