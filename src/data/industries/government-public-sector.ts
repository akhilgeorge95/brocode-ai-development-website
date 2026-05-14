import type { LongPage } from '../types';

export const governmentPublicSector: LongPage = {
  slug: 'government-public-sector',
  category: 'industry',
  title: 'Government & Public Sector',
  seoTitle: 'AI for Government and Public Sector in the UAE',
  seoDescription:
    'Brocode Solutions builds AI systems for UAE federal entities, emirate-level authorities, and public service providers — bilingual, sovereign, and audit-ready.',
  eyebrow: 'Public sector AI',
  headline: 'AI that serves residents, respects sovereignty, and stands up to scrutiny.',
  sub: 'We help federal ministries, emirate authorities, and public service providers translate UAE Vision 2031 and the National AI Strategy into systems that improve citizen experience without compromising data residency or accountability.',
  heroImage: '/images/industries/government-public-sector.jpg',
  heroImageAlt: 'Aerial view of a UAE government district with the national flag and modern administrative buildings at dusk.',
  heroIcon: 'shield',
  intro:
    'Public sector AI in the UAE sits at the intersection of ambitious national policy and exacting operational reality. Citizens expect TAMM-grade convenience, regulators expect documented control, and ministries expect everything to work in Arabic and English on day one. Brocode Solutions delivers AI systems for government clients out of our Abu Dhabi headquarters, with experience working inside sovereign data perimeters and under federal procurement rules.',
  sections: [
    {
      heading: 'The pressure on UAE government services is rising',
      body: 'Residents and businesses in the Emirates now judge public services against the smoothest digital experiences they meet anywhere — from neobanks to e-commerce platforms. National programmes such as UAE Vision 2031, the UAE Centennial 2071 plan, and the federal AI strategy push entities to consolidate channels, anticipate needs, and shift from form-filling to outcome delivery. At the same time, population growth, federal-emirate coordination, and a widening service catalogue make manual operating models harder to sustain. AI is no longer an optional modernisation lever for public bodies in the UAE — it is the mechanism that lets a leaner workforce serve a larger, more demanding constituency without service quality slipping.'
    },
    {
      heading: 'Where AI moves the needle for public bodies',
      body: 'The highest-value plays in the UAE public sector are usually unglamorous: Arabic document intelligence that reads thousands of legacy attachments, conversational agents on TAMM-style portals that resolve queries before they reach a contact centre, eligibility engines that pre-fill applications from authoritative sources, and predictive models that route inspections, licences, or social support to the right team. Computer vision quietly handles plate recognition, crowd flow, and infrastructure monitoring. None of these need to be flashy. They need to be accurate, explainable, and integrated with the federal identity, payment, and notification rails that residents already trust.'
    },
    {
      heading: 'Regulator and sovereignty reality',
      body: 'Government workloads in the UAE rarely tolerate the default settings of public cloud AI. We design for data residency inside UAE borders, alignment with the Personal Data Protection Law, NESA-style information assurance controls, and the documentation patterns federal audit teams expect. Where the policy or sensitivity demands it, we deploy self-hosted large language models and machine learning systems on G42, Etisalat, or on-premise infrastructure, with full logging, role-based access, and human-in-the-loop checkpoints for any decision that affects a citizen. Every model ships with a model card, a bias review, and a clear escalation path.'
    },
    {
      heading: 'Outcomes UAE public sector clients have seen',
      body: 'Recent engagements include an Arabic-first virtual assistant for a federal entity that resolved a large share of tier-one queries without human handoff, a document-intelligence pipeline that cut licence application processing time from days to hours, and a predictive routing engine for inspection teams that improved coverage of high-risk premises. In every case, Brocode delivered not only the model but the surrounding governance — data-sharing agreements, audit trails, Arabic content validation, and capability transfer to the entity\'s own digital team — so that the system continues to serve residents well beyond the original engagement.'
    }
  ],
  highlights: [
    { title: 'Arabic-first by default', description: 'Native Arabic and bilingual interfaces, dialect handling, and right-to-left workflows.', icon: 'chat' },
    { title: 'Sovereign deployment ready', description: 'On-premise, G42, or local cloud — data stays inside UAE borders.', icon: 'cloud' },
    { title: 'Aligned with federal strategy', description: 'Built around UAE Vision 2031, the National AI Strategy, and emirate digital agendas.', icon: 'compass' },
    { title: 'Audit-grade documentation', description: 'Model cards, lineage, and bias reviews ready for federal audit teams.', icon: 'shield' },
    { title: 'TAMM and Smart Dubai friendly', description: 'Integration patterns for federal identity, payments, and notification rails.', icon: 'link' },
    { title: 'Citizen-centred design', description: 'Service journeys shaped around the resident, not the org chart.', icon: 'route' }
  ],
  whyBrocode:
    'We are an Abu Dhabi-headquartered firm that operates under UAE labour, data, and procurement law, with delivery teams cleared to work on-site inside federal and emirate entities. We have shipped AI inside sovereign data perimeters, integrated with national identity and payment rails, and supported clients through internal audit, information assurance review, and ministerial reporting cycles.',
  ourApproach:
    'We begin with a structured discovery against the entity\'s service catalogue and strategic KPIs, identifying two or three use cases where AI will move measurable outcomes within a budget cycle. Build is delivered in two-week increments with bilingual stakeholders in the room. Hardening covers information assurance review, Arabic linguistic validation, accessibility checks, and integration testing with federal platforms. Post go-live, Brocode engineers remain alongside the entity\'s digital team under an agreed run-phase, transferring operational ownership while remaining accountable for service levels.',
  stats: [
    { value: 12, label: 'UAE public sector engagements' },
    { value: 70, suffix: '%', label: 'Average tier-one query deflection' },
    { value: 100, suffix: '%', label: 'Workloads inside UAE data borders' },
    { value: 9, label: 'Weeks median pilot-to-production' }
  ],
  primaryCta: { label: 'Brief our public sector team', href: '/contact' },
  secondaryCta: { label: 'Review our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Conversational AI & Chatbots', href: '/services/conversational-ai-chatbots', description: 'Arabic-first virtual assistants for citizen channels.' },
    { label: 'Document Intelligence', href: '/services/document-intelligence', description: 'Read, classify, and extract from legacy public records.' },
    { label: 'Self-hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Sovereign large language model deployments.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Audit-ready controls for public sector AI.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Related work with regulated institutions.' }
  ],
  capabilities: [
    'Arabic and bilingual conversational AI for citizen portals',
    'Document intelligence on legacy public records',
    'Eligibility and routing engines for licences and permits',
    'Computer vision for inspections and infrastructure monitoring',
    'Predictive analytics on service demand and workforce planning',
    'Sovereign large language model deployment and fine-tuning'
  ],
  outcomes: [
    'Higher tier-one resolution on digital channels',
    'Faster processing of applications and permits',
    'Documented compliance with UAE data protection law',
    'Bilingual service journeys validated by linguists',
    'Internal team trained to operate and extend the system'
  ]
};
