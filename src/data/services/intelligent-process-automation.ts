import type { LongPage } from '../types';

export const intelligentProcessAutomation: LongPage = {
  slug: 'intelligent-process-automation',
  category: 'service',
  title: 'Intelligent Process Automation',
  seoTitle: 'Intelligent Process Automation Services in the UAE',
  seoDescription:
    'Brocode Solutions combines RPA, AI, and decision intelligence to automate claims, KYC, procurement, and back-office workflows for UAE banks, insurers, and government bodies.',
  eyebrow: 'RPA meets AI',
  headline: 'Automate the decisions, not just the clicks.',
  sub: 'We combine RPA, machine learning, document intelligence, and decision engines to automate the judgement-heavy workflows that traditional automation cannot reach — KYC, claims, procurement, and case handling.',
  heroImage: '/images/services/intelligent-process-automation.jpg',
  heroImageAlt: 'Operations team reviewing an automated claims workflow with AI decisioning steps on a wall display',
  heroIcon: 'workflow',
  intro:
    'Traditional RPA hit a ceiling because most enterprise work is not deterministic. Claims need adjudication, KYC files need judgement, procurement requests need policy interpretation, and supplier emails arrive as unstructured text. Intelligent process automation closes that gap by combining classical RPA with machine learning, large language models, document intelligence, and decision engines. Brocode Solutions designs and operates these blended workflows for UAE and GCC clients, working from Abu Dhabi alongside operations, risk, and compliance teams who need automation that is both efficient and defensible at the next audit.',
  sections: [
    {
      heading: 'Beyond screen scraping into decisioning',
      body: 'Our intelligent automations rarely start with a bot. They start with a process map and a decision audit: where do humans actually exercise judgement, what rules guide them, what data do they look at, and which decisions are routine enough to model. We then assemble the right components — RPA for legacy UI work, APIs where they exist, document intelligence for forms and PDFs, ML models for classification and prediction, and a decision engine that holds the business rules in one auditable place. The bot becomes the orchestrator, not the brain, which makes the entire workflow easier to change and easier to defend.'
    },
    {
      heading: 'Claims, KYC, and procurement, end to end',
      body: 'We have shipped automations across the workflows that consume the most operational capacity in GCC enterprises. For an insurer, a claims triage automation reads first notice of loss documents in Arabic and English, pulls policy data, scores fraud risk, and routes the file to the correct adjuster queue with a recommended action. For a bank, a KYC refresh workflow pulls source documents, extracts beneficial ownership, screens against sanctions, and compiles the analyst pack. For a sovereign procurement function, supplier responses are normalised, scored against criteria, and tabled for committee with a full decision trail.'
    },
    {
      heading: 'Auditable, explainable, human-in-the-loop',
      body: 'Regulators and internal audit want to see every decision an automation made and why. Our workflows record the inputs, the rule that fired, the model score, the confidence, and the human reviewer where one was required. We design clear thresholds for human-in-the-loop intervention so high-stakes or low-confidence cases are routed to expert review rather than auto-decided. The decision engine sits in version control with formal release procedures, so changing a rule is a tracked event, not a quiet edit. This makes intelligent automation defensible to risk committees and central bank inspections alike.'
    },
    {
      heading: 'Operating model that holds after launch',
      body: 'The hardest part of automation is not building bots but running them. We help establish the centre of excellence, the bot-ops team, the queue management discipline, and the exception handling that keep automations healthy across quarters of regulatory and business change. Our engineers integrate the automation estate with your existing service-management tooling so failures raise tickets in the right queues, and we coach internal sponsors on how to govern a portfolio of automations across business owners. Automation becomes a managed product, not a collection of fragile scripts maintained by whoever built them.'
    }
  ],
  highlights: [
    { title: 'RPA plus AI, not RPA alone', description: 'Decision-heavy work automated through blended pipelines.', icon: 'cogs' },
    { title: 'Document intelligence built-in', description: 'Arabic and English forms, PDFs, and scans parsed reliably.', icon: 'doc' },
    { title: 'Decision engines, not buried rules', description: 'Business logic lives in one auditable, version-controlled place.', icon: 'gavel' },
    { title: 'Human-in-the-loop by design', description: 'Confidence thresholds and reviewer queues for high-stakes cases.', icon: 'shield' },
    { title: 'Service-management aware', description: 'Failures raise tickets in your existing operations tooling.', icon: 'workflow' },
    { title: 'COE enablement', description: 'We help stand up the team that will run automations long-term.', icon: 'route' }
  ],
  whyBrocode:
    'We have built intelligent automation programmes inside UAE banks, insurers, and government entities, so we know the procurement, risk, and audit conversations that come with them. Our engineers are fluent in UiPath, Microsoft Power Automate, Automation Anywhere, and the document intelligence stacks that GCC operations teams already use, and our Abu Dhabi presence makes on-site collaboration with operations and compliance teams straightforward under UAE law.',
  ourApproach:
    'We start with a discovery sprint focused on process selection: volumes, exception rates, decision complexity, and the realistic ROI of automating versus redesigning. We then build a first automation end-to-end, including the decision engine, document parsing, RPA, and human-review queues, in eight to ten weeks. Hardening covers exception handling, audit logging, and integration with your service management. After launch we operate the automation alongside your team under an agreed SLA while transferring ownership to your centre of excellence, with formal change-management processes from day one.',
  stats: [
    { value: 120, suffix: '+', label: 'Intelligent automations in production' },
    { value: 4.2, suffix: 'x', label: 'Average throughput uplift per workflow' },
    { value: 65, suffix: '%', label: 'Median handling-time reduction' },
    { value: 10, label: 'Weeks median first-workflow delivery' }
  ],
  primaryCta: { label: 'Plan an automation', href: '/contact' },
  secondaryCta: { label: 'Read our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Document Intelligence', href: '/services/document-intelligence', description: 'Parse forms, contracts, and scans accurately.' },
    { label: 'AI Agents & Agentic Workflows', href: '/services/ai-agents-agentic-workflows', description: 'Multi-step AI work across systems.' },
    { label: 'AI Integration Services', href: '/services/ai-integration-services', description: 'Connect automations into core platforms.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'KYC, claims, and back-office automation.' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Case handling and citizen-services automation.' }
  ],
  capabilities: [
    'Process discovery, mining, and selection',
    'RPA development on UiPath, Power Automate, Automation Anywhere',
    'Document intelligence for Arabic and English content',
    'Decision engine design and rules management',
    'Human-in-the-loop and exception-handling design',
    'Centre of excellence enablement and bot operations'
  ],
  outcomes: [
    'Decision-heavy workflows automated end-to-end',
    'Full audit trail of inputs, rules, and model scores',
    'Documented human-in-the-loop thresholds',
    'Operations team trained to govern the bot estate',
    'Measurable reduction in handling time and exception rates'
  ]
};
