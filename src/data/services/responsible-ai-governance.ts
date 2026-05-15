import type { LongPage } from '../types';

export const responsibleAiGovernance: LongPage = {
  slug: 'responsible-ai-governance',
  category: 'service',
  title: 'Responsible AI & Governance',
  seoTitle: 'Responsible AI & Governance Services in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions designs responsible AI programmes aligned with the EU AI Act, ISO/IEC 42001, UAE AI Charter, and model risk management standards for enterprises in Abu Dhabi, Dubai, and across the wider UAE and GCC.',
  eyebrow: 'AI governance and assurance',
  headline: 'AI you can defend to the board, the regulator, and the public.',
  sub: 'We design responsible AI programmes that satisfy the EU AI Act, ISO/IEC 42001, the UAE AI Charter, and the model risk expectations of GCC central banks — without strangling the teams trying to deliver.',
  heroImage: '/images/services/responsible-ai-governance.jpg',
  heroImageAlt: 'Governance committee reviewing an AI risk register and model inventory on a meeting room display',
  heroIcon: 'gavel',
  intro:
    'Responsible AI is no longer optional. The EU AI Act now sets extraterritorial obligations for many GCC exporters, ISO/IEC 42001 has given enterprises a certifiable management system for AI, and the UAE AI Charter sets clear ethical expectations for public and private actors. Central bank circulars across the region treat models as a first-class risk discipline. Brocode Solutions designs governance programmes that meet these expectations and survive board, regulator, and public scrutiny. From Abu Dhabi we work with risk, compliance, and AI leaders to build governance that is practical, evidenced, and proportionate to the actual risk of each system.',
  sections: [
    {
      heading: 'Framework aligned to the rules that bind you',
      body: 'We design governance frameworks that map directly to the obligations applicable in your context: the EU AI Act risk tiers and prohibited practices for systems serving European users, ISO/IEC 42001 control objectives for organisations seeking certification, the UAE AI Charter principles for any system touching UAE citizens, and the model risk management expectations set by the Central Bank of the UAE, the Saudi Central Bank, and the Qatar Financial Centre Regulatory Authority. Where multiple regimes apply we build a single control set that satisfies the strictest, rather than parallel frameworks that exhaust your second-line team and confuse engineering.'
    },
    {
      heading: 'Model risk management that engineers respect',
      body: 'Model risk management often fails because it is written by risk teams who never operated a model. Our frameworks bring engineering reality into the documentation. The model inventory is generated from your MLOps registry, not a manual spreadsheet. Tiering is based on observable system attributes — autonomy, reversibility, scale of impact — rather than self-classification. Validation procedures are tied to the metrics your monitoring already captures. Independent review gates fire at the points teams already pause for. The result is a programme that the second line can audit, the first line can deliver under, and that the regulator can verify rather than just read.'
    },
    {
      heading: 'Bias, fairness, transparency, and human oversight',
      body: 'Each AI system in scope receives a structured assessment covering bias and fairness on the demographic and segment slices relevant to the use case, explainability appropriate to the decision class, transparency obligations to affected individuals, and the design of human oversight where high-stakes decisions are made. For Arabic, Emirati, and broader GCC populations we pay particular attention to representation in training data and evaluation sets, since most upstream models were trained predominantly on English content. The assessments are recorded as living artefacts that travel with the model through its life cycle, not one-off documents that age into irrelevance.'
    },
    {
      heading: 'Audit, incident response, and continuous assurance',
      body: 'Governance has to be exercised, not just documented. We design the audit cadence, internal challenge sessions, and incident response procedures that prove the programme is alive. Continuous assurance pulls signals from monitoring — drift, fairness drift, hallucination rates, refusal rates, override rates — into a quarterly committee pack that risk and audit can interrogate. AI incidents are classified, escalated, and disclosed under defined criteria, with playbooks for regulator notification where required. When the regulator or external auditor arrives, the evidence is already assembled, and the conversation moves quickly to substance rather than evidence gathering.'
    }
  ],
  highlights: [
    { title: 'EU AI Act ready', description: 'Risk-tier classification, conformity, and documentation for in-scope systems.', icon: 'gavel' },
    { title: 'ISO/IEC 42001 certifiable', description: 'A management system designed to clear external certification audits.', icon: 'shield' },
    { title: 'UAE AI Charter aligned', description: 'Principles operationalised into controls, not just published values.', icon: 'doc' },
    { title: 'Model risk discipline', description: 'Frameworks aligned to CBUAE, SAMA, and QFCRA expectations.', icon: 'chart' },
    { title: 'Bias and fairness on GCC data', description: 'Evaluation sets representative of Arabic and Emirati populations.', icon: 'compass' },
    { title: 'Continuous assurance', description: 'Live dashboards and quarterly packs rather than annual paperwork.', icon: 'cogs' }
  ],
  whyBrocode:
    'Our governance partners include former central bank supervisors and second-line risk leaders who have written the standards we now help clients meet. Combined with engineers who run real AI systems in production, that pairing gives clients a governance programme that is both defensible and deliverable. We work from Abu Dhabi under UAE law and have advised regulators and regulated entities across the GCC on responsible AI.',
  ourApproach:
    'We begin with a gap assessment against the regimes applicable to your business, producing a clear remediation backlog with owners and timelines. From there we co-design the framework, controls, and operating model, working alongside your risk, legal, compliance, and AI teams to ensure the controls are operable rather than aspirational. We then pilot the framework on two or three high-risk systems to prove it works, refine, and roll out to the broader inventory. Where you are pursuing ISO/IEC 42001 certification we run a pre-audit and walk you through the certification process with an accredited body.',
  stats: [
    { value: 25, suffix: '+', label: 'Responsible AI programmes designed' },
    { value: 6, label: 'Regulators engaged across the GCC' },
    { value: 100, suffix: '%', label: 'Pre-audit pass rate for ISO/IEC 42001' },
    { value: 4.2, label: 'Months median programme stand-up' }
  ],
  primaryCta: { label: 'Plan a governance programme', href: '/contact' },
  secondaryCta: { label: 'See our quality assurance', href: '/technology/quality-assurance' },
  related: [
    { label: 'AI Consulting & Strategy', href: '/services/ai-consulting-strategy', description: 'Strategy that incorporates governance from day one.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The control plane governance reads from.' },
    { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Lineage and quality the framework depends on.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Model risk for central bank-supervised entities.' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Public-sector AI ethics and assurance.' }
  ],
  capabilities: [
    'EU AI Act gap assessment and conformity design',
    'ISO/IEC 42001 management system implementation',
    'Model risk management framework design',
    'Bias, fairness, and explainability assessments',
    'AI incident response and disclosure playbooks',
    'Regulator engagement and external audit preparation'
  ],
  outcomes: [
    'Single integrated control set across applicable regimes',
    'Tiered, evidenced model inventory tied to MLOps registry',
    'Living bias, fairness, and transparency assessments',
    'Quarterly assurance packs ready for committee and audit',
    'Regulator and external audit conversations that move fast'
  ]
};
