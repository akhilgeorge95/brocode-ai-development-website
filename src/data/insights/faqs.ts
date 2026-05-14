import type { LongPage } from '../types';

export const faqs: LongPage = {
  slug: 'faqs',
  category: 'insight',
  title: 'Frequently Asked Questions',
  seoTitle: 'Frequently Asked Questions about Brocode Solutions',
  seoDescription:
    'Answers to the questions enterprise clients in the UAE and GCC most often ask Brocode Solutions about AI delivery, governance, sovereignty, pricing, and operating models.',
  eyebrow: 'Common questions',
  headline: 'The questions clients ask most often, answered honestly.',
  sub: 'A consolidated view of how we work, what we charge for, how we handle data, and what to expect when an engagement starts — written in the same language we use in client meetings.',
  heroImage: '/images/insights/faqs.jpg',
  heroImageAlt: 'Group of professionals reviewing a document together in a meeting room',
  heroIcon: 'compass',
  intro:
    'Over the course of a typical engagement, the same questions surface again and again — in procurement meetings, in steering committees, and in informal conversations after demos. We have collected the most common ones into a single, browsable reference so clients can find clear answers before, during, and after working with us. The library covers commercial questions, delivery questions, technical and architectural questions, and the governance and data-handling questions that UAE risk and audit teams reliably ask. The entries are written by the partners and senior engineers who answer the same questions in person.',
  sections: [
    {
      heading: 'Commercial and engagement questions',
      body: 'This section covers how we price work, what is included in a typical statement of work, how change requests are handled, and how we structure success measures. It explains our preference for fixed-scope discovery phases followed by time-and-materials delivery against agreed milestones, why we usually advise against pure outcome-based pricing on the first engagement, and how we handle intellectual property, source code escrow, and exit assistance. It also covers our standard contracting vehicles for UAE federal entities, free-zone companies, and ADGM-incorporated clients, and the typical timelines to move from first conversation to signed engagement under each route.'
    },
    {
      heading: 'Delivery and operating model questions',
      body: 'Here we answer the questions clients ask about how engagements actually run day-to-day. Topics include the composition of a typical Brocode team, the balance between on-site presence in Abu Dhabi and Dubai and remote delivery from our wider practice, how we work alongside in-house engineering and data teams without crowding them out, and how knowledge transfer is structured at the end of an engagement. It covers our ceremonies — discovery workshops, fortnightly steering, monthly executive reviews — and the artefacts clients receive at each stage, including run-books, architecture records, and the documentation needed for internal audit sign-off.'
    },
    {
      heading: 'Technical and architectural questions',
      body: 'The technical section addresses the questions engineers and architects raise in scoping conversations. It covers our default reference architectures for retrieval-augmented systems, classical machine learning pipelines, and MLOps platforms; the trade-offs between hosted and self-hosted language models for UAE workloads; how we approach Arabic and bilingual processing; and how we integrate with the SAP, Oracle, mainframe, and core-banking systems still common across the region. It also explains how we choose between open-weight and closed model providers, and the criteria we apply when recommending one cloud region over another for a given workload.'
    },
    {
      heading: 'Governance, data, and security questions',
      body: 'The final section addresses the questions risk, compliance, and audit functions raise once an engagement reaches contract. It covers how we handle personal and confidential data during discovery and delivery, our default position on data residency under UAE PDPL, the certifications we hold and how they are evidenced, and how we support clients through their own regulator-facing reviews. It includes our standard response to data processing agreement requests, our approach to penetration testing, and the way we structure access for our consultants inside client environments. Where a question has a different answer for different sectors, we say so explicitly.'
    }
  ],
  highlights: [
    { title: 'How we price work', description: 'Fixed-scope discovery followed by milestone-based delivery.', icon: 'doc' },
    { title: 'How teams are staffed', description: 'Senior practitioners in lead roles, supported by specialists.', icon: 'cogs' },
    { title: 'Where data lives', description: 'Default to in-country residency unless agreed otherwise.', icon: 'shield' },
    { title: 'How we handle IP', description: 'Client owns the work product; we keep our reusable patterns.', icon: 'gavel' },
    { title: 'How we work with regulators', description: 'Documentation and evidence built in from day one.', icon: 'chart' },
    { title: 'How engagements end', description: 'Structured handover, training, and an agreed support tail.', icon: 'route' }
  ],
  whyBrocode:
    'We publish these answers because the same questions deserve the same answers regardless of who is asking. Procurement officers, security reviewers, and engineering leads should not have to triangulate from different conversations to understand how we work. The FAQ library is reviewed alongside our standard contracts and policies so that what we say here matches what we sign for in writing.',
  ourApproach:
    'Each answer is drafted by the partner or principal who would normally respond in a client conversation, reviewed by our legal and risk function where the question touches contract, data, or regulation, and then read by a member of our delivery team to make sure the language matches what actually happens on engagements. We update entries whenever a policy or practice changes, and we publish a short change log alongside the library so readers can see what has shifted. If a question is not covered, the contact form routes directly to a partner who will answer in writing within two working days.',
  stats: [
    { value: 60, suffix: '+', label: 'Questions covered in the library' },
    { value: 4, label: 'Topic areas grouped for browsing' },
    { value: 2, label: 'Working days to answer new questions' },
    { value: 4, label: 'Reviews per entry before publication' }
  ],
  primaryCta: { label: 'Ask a question', href: '/contact' },
  secondaryCta: { label: 'Browse all insights', href: '/insights' },
  related: [
    { label: 'Whitepapers', href: '/insights/whitepapers', description: 'Longer-form answers to harder questions.' },
    { label: 'Guides & tutorials', href: '/insights/guides', description: 'How-to content for practitioners.' },
    { label: 'AI glossary', href: '/insights/glossary', description: 'Plain-language definitions for shared vocabulary.' },
    { label: 'Methodology', href: '/technology/methodology', description: 'The delivery model behind our answers.' },
    { label: 'About Brocode', href: '/about', description: 'Who we are and how we work.' }
  ],
  capabilities: [
    'Commercial and contracting clarifications',
    'Delivery model and team composition answers',
    'Architecture and integration guidance',
    'Data residency and sovereignty responses',
    'Governance, audit, and certification evidence',
    'Sector-specific notes for banking and public sector'
  ],
  outcomes: [
    'Fewer round-trips during procurement and scoping',
    'Faster sign-off from risk and audit functions',
    'Shared expectations between client and delivery teams',
    'Clearer hand-offs at the end of an engagement',
    'A consistent reference across every conversation we have'
  ]
};
