import type { LongPage } from '../types';

export const aiAgentsAgenticWorkflows: LongPage = {
  slug: 'ai-agents-agentic-workflows',
  category: 'service',
  title: 'AI Agents & Agentic Workflows',
  seoTitle: 'AI Agents and Agentic Workflow Development in the UAE',
  seoDescription:
    'Brocode Solutions designs and operates production AI agents and agentic workflows for banks, government bodies, and enterprises across the UAE and GCC, with strict governance and human oversight.',
  eyebrow: 'Agentic systems',
  headline: 'AI agents that complete real work under real controls, not autonomous experiments.',
  sub: 'We design multi-step agentic workflows that act inside your systems with the authentication, audit, and human checkpoints regulated enterprises require.',
  heroImage: '/images/services/ai-agents-agentic-workflows.jpg',
  heroImageAlt: 'Workflow diagram of an AI agent orchestrating multiple tools and human approval steps across enterprise systems with audit checkpoints highlighted',
  heroIcon: 'workflow',
  intro:
    'Agentic AI moves the conversation from generating text to taking action. An agent that drafts a credit memo, reconciles invoices, files a regulatory return, or triages a service queue creates measurable value, but only if it operates inside the same controls that govern your human staff. Brocode Solutions designs and operates agentic systems with that discipline from our Abu Dhabi base. Authentication, authorisation, audit, human-in-the-loop checkpoints, and clear rollback are part of the architecture from day one. The result is automation that earns the trust of risk, compliance, and operations leaders.',
  sections: [
    {
      heading: 'Agents designed around real work, not demos',
      body: 'We start from a specific job: closing the books, processing a claim, onboarding a customer, responding to a procurement query, monitoring a regulatory feed. For each job we map the inputs, the systems the agent must read from and write to, the decision points, and the policies that must hold throughout. The resulting agent is a constrained instrument with explicit scope, not a free-roaming exploration. Capabilities are added incrementally, each one passing acceptance criteria with operations, risk, and IT sponsors before the agent is permitted to use it in production.'
    },
    {
      heading: 'Tools, authentication, and audit by construction',
      body: 'Every tool an agent uses is a privileged action. We integrate agents with your core systems through the same authentication, authorisation, and logging surfaces a human user would touch — service accounts with least-privilege scopes, step-up approvals for sensitive operations, and structured audit logs capturing prompt, plan, tool calls, and outcomes. Sensitive payloads are redacted in logs without losing the trail needed for investigation. Where agents operate on customer data, residency, retention, and consent rules are enforced at the integration layer, not left to the model to remember.'
    },
    {
      heading: 'Planning, evaluation, and human checkpoints',
      body: 'Agentic systems fail in different ways from chatbots. We engineer planning loops with explicit budgets on steps, cost, and time, structured reflection between tool calls, and deterministic guardrails on the actions the agent can take. Evaluation runs on golden scenarios drawn from your real operations, including adversarial cases and partial-failure conditions. Human-in-the-loop checkpoints are placed where the cost of an error exceeds the cost of review — typically at irreversible actions, threshold breaches, or low-confidence outcomes. The agent earns autonomy on routine cases by demonstrating reliability on supervised ones first.'
    },
    {
      heading: 'Agentic outcomes shipped for GCC enterprises',
      body: 'Recent engagements include a procurement-triage agent for a UAE federal entity that classifies, summarises, and routes supplier submissions with auditable evidence, a reconciliation agent for a financial-services client that resolves a defined class of breaks before they reach human investigators, and a back-office service agent for a regional retailer that handles refunds and returns within strict policy limits. Each agent shipped with operational dashboards, replayable execution traces, governance reviews, and the enablement to extend scope safely after handover.'
    }
  ],
  highlights: [
    { title: 'Scope-constrained agents', description: 'Explicit job definitions, capability lists, and step budgets rather than open-ended autonomy.', icon: 'workflow' },
    { title: 'Tool integration with least privilege', description: 'Service accounts, scoped permissions, and step-up approvals on sensitive operations.', icon: 'shield' },
    { title: 'Replayable execution traces', description: 'Every plan, tool call, and outcome captured for investigation and replay.', icon: 'doc' },
    { title: 'Human-in-the-loop checkpoints', description: 'Review queues placed where error cost exceeds review cost, tuned on real data.', icon: 'route' },
    { title: 'Bilingual operation', description: 'Agents reason and respond in Arabic and English, matching your customer and staff base.', icon: 'chat' },
    { title: 'Governance reviews built in', description: 'Risk, compliance, and operations sign-off as a structured part of every release.', icon: 'gavel' }
  ],
  whyBrocode:
    'We have built agentic systems for UAE banks, federal entities, and regional groups under the assurance regimes those institutions operate. Our Abu Dhabi engineers combine agent-design depth with the discipline required to integrate against core systems safely. We contract under UAE law, run agents inside your sovereignty constraints, and remain accountable for the operational and risk performance of the agent after launch — including the joint reviews your second line will expect.',
  ourApproach:
    'Each programme opens with a job-design sprint that defines the agent scope, integration surface, and success metrics with operations, risk, and IT sponsors. We deliver in two-week increments, with weekly steering reviews and progressive capability expansion. Evaluation, adversarial testing, and human-in-the-loop calibration happen alongside development rather than at the end. Once live, agents enter a defined run-phase with execution-trace monitoring, governance review cadence, and structured handover of operations, prompt management, and scope expansion to your internal team.',
  stats: [
    { value: 15, suffix: '+', label: 'Production agents in operation' },
    { value: 7, label: 'GCC regulated programmes delivered' },
    { value: 99.5, suffix: '%', label: 'Median agent runtime availability' },
    { value: 50, suffix: '%', label: 'Average back-office cycle-time reduction' }
  ],
  primaryCta: { label: 'Talk to an agentic AI lead', href: '/contact' },
  secondaryCta: { label: 'See intelligent process automation', href: '/services/intelligent-process-automation' },
  related: [
    { label: 'Intelligent Process Automation', href: '/services/intelligent-process-automation', description: 'Automate end-to-end processes with AI in the loop.' },
    { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Grounded generation underpinning agent reasoning.' },
    { label: 'AI Integration Services', href: '/services/ai-integration-services', description: 'Safe integration with core enterprise systems.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Defensible AI for regulated industries.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Operate agents like products with full observability.' }
  ],
  capabilities: [
    'Agent scoping, planning, and tool-use design',
    'Least-privilege integration with core enterprise systems',
    'Structured audit logging and replayable execution traces',
    'Human-in-the-loop review queue design and calibration',
    'Bilingual Arabic and English agent reasoning',
    'Governance reviews aligned to UAE regulatory expectations'
  ],
  outcomes: [
    'Production agent live within 12 weeks of kickoff',
    'Documented reduction in back-office cycle time',
    'Audit trail covering every agent action end to end',
    'Risk and compliance sign-off on each release',
    'Internal team able to extend agent scope safely'
  ]
};
