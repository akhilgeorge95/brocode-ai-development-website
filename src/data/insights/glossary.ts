import type { LongPage } from '../types';

export const glossary: LongPage = {
  slug: 'glossary',
  category: 'insight',
  title: 'AI Glossary',
  seoTitle: 'AI Glossary for Enterprise Readers',
  seoDescription:
    'A curated AI glossary from Brocode Solutions: plain-language definitions of the terms enterprise teams, regulators, and boards need to talk about artificial intelligence with precision.',
  eyebrow: 'Shared vocabulary',
  headline: 'A working glossary of AI terms for enterprise readers.',
  sub: 'Definitions written for boards, regulators, and delivery teams who need the same words to mean the same things across a programme.',
  heroImage: '/images/insights/glossary.jpg',
  heroImageAlt: 'Open dictionary on a desk with annotated terms and a pen resting on the page',
  heroIcon: 'compass',
  intro:
    'The single biggest cause of avoidable disagreement in enterprise AI programmes is vocabulary. A "model" means something different to a data scientist, a procurement officer, and an internal auditor. "Fine-tuning" can describe four distinct techniques. "Hallucination" is a metaphor that quietly carries a technical definition. Our glossary is an attempt to give enterprise teams a shared, written vocabulary that is precise enough to be useful in contracts and review boards, while remaining readable for executives and non-technical reviewers who need to engage with AI work without becoming specialists.',
  sections: [
    {
      heading: 'What the glossary covers',
      body: 'The library spans foundational machine learning concepts, modern language and vision model terminology, MLOps and platform vocabulary, and the governance and regulatory language now appearing in UAE and international frameworks. Each entry includes a short definition, an expanded explanation with context, common confusions to avoid, and links to related terms. We cover both the technical interior — embeddings, attention, retrieval, evaluation metrics — and the language used in board papers and procurement: model risk, explainability, data residency, sovereign AI, responsible AI. The aim is to let a single document be useful to an engineer, a lawyer, and a chief risk officer reading the same paragraph.'
    },
    {
      heading: 'Why we maintain it',
      body: 'A glossary is only useful if it is current. The field moves quickly and definitions drift, especially around generative AI, where vendors have an incentive to redefine terms in their favour. We treat the glossary as a living document maintained by the same engineers and advisors who produce our whitepapers and guides. When a term is contested in the industry, we say so and explain the competing views rather than picking one and pretending the others do not exist. The goal is to give readers enough context to choose the definition that fits their situation, not to impose a single house view.'
    },
    {
      heading: 'How it is structured',
      body: 'Entries are organised alphabetically and cross-referenced by topic: foundational ML, deep learning, language models, retrieval and search, evaluation, MLOps, infrastructure, governance, and regulation. Each entry shows the author, the publication date, and the last review date. Where a term has a specific meaning under a UAE or GCC regulation — for example, "personal data" under PDPL, or "controller" and "processor" under GDPR — we surface the legal definition alongside the technical one and link to the relevant source. Definitions are written to be quotable: short enough to lift into a board paper, precise enough to survive a legal review.'
    },
    {
      heading: 'Using the glossary in your programme',
      body: 'Several clients have adopted the glossary as the reference document for their internal AI policy and training materials. We are happy for teams to do so under the terms set out in our licensing notice. If a definition does not match the language used inside your organisation, the better path is usually to align the internal language to a clear external standard rather than maintain a private vocabulary. Where a term is missing or where you would like a definition expanded for a particular sector, our authors take suggestions through the contact form and review them on a regular cadence.'
    }
  ],
  highlights: [
    { title: 'Foundational ML terms', description: 'Supervision, features, loss, overfitting, and the rest of the basics.', icon: 'brain' },
    { title: 'Language model vocabulary', description: 'Tokens, embeddings, attention, context windows, and beyond.', icon: 'chat' },
    { title: 'Retrieval and search', description: 'Vector search, RAG, chunking, and grounding explained plainly.', icon: 'database' },
    { title: 'Evaluation language', description: 'Metrics, benchmarks, drift, and what each one really tells you.', icon: 'chart' },
    { title: 'Governance and regulation', description: 'PDPL, GDPR, model risk, explainability, and responsible AI.', icon: 'gavel' },
    { title: 'Infrastructure terms', description: 'Inference, quantisation, sovereign deployment, and platform parts.', icon: 'cpu' }
  ],
  whyBrocode:
    'We maintain the glossary because our own engagements depend on it. When a UAE bank, a federal entity, and a delivery team all need to agree what "fine-tuning" means inside a contract, an ambiguous definition costs weeks. Our authors carry that experience into every entry, and the glossary is reviewed alongside our whitepapers so the language stays consistent across the library.',
  ourApproach:
    'Each entry is drafted by a practitioner, peer-reviewed by a second specialist, and then read by a non-technical reviewer to ensure the definition is approachable. Where a term has legal weight, we ask a qualified reviewer to check the alignment with UAE and GCC law. The glossary is versioned, and the change log is published so readers can see how definitions have evolved. We deliberately keep the entries short — most fit comfortably on a single screen — and link generously to related terms, guides, and whitepapers when readers want to go deeper without losing the thread.',
  stats: [
    { value: 220, suffix: '+', label: 'Defined terms in the library' },
    { value: 9, label: 'Topic clusters covered' },
    { value: 4, label: 'Reviews per entry before publication' },
    { value: 2, label: 'Quarterly refreshes per year' }
  ],
  primaryCta: { label: 'Suggest a term', href: '/contact' },
  secondaryCta: { label: 'Browse all insights', href: '/insights' },
  related: [
    { label: 'Whitepapers', href: '/insights/whitepapers', description: 'Where the glossary terms are applied in depth.' },
    { label: 'Guides & tutorials', href: '/insights/guides', description: 'Hands-on walkthroughs using the same vocabulary.' },
    { label: 'FAQs', href: '/insights/faqs', description: 'Common questions about our work and the field.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Governance terms in practice.' },
    { label: 'Methodology', href: '/technology/methodology', description: 'How the language shapes our delivery.' }
  ],
  capabilities: [
    'Cross-referenced alphabetical entries',
    'Legal definitions alongside technical ones',
    'Topic clusters for guided reading',
    'Change log and review dates per entry',
    'Sector-specific notes for banking and government',
    'Reusable definitions for internal policy documents'
  ],
  outcomes: [
    'Faster alignment between technical and non-technical staff',
    'Cleaner procurement and contract language',
    'Reduced ambiguity in audit and review meetings',
    'A reliable reference for internal training programmes',
    'A shared baseline for cross-functional AI committees'
  ]
};
