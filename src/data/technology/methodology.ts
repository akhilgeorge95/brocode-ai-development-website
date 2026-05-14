import type { LongPage } from '../types';

export const methodology: LongPage = {
  slug: 'methodology',
  category: 'technology',
  title: 'Our Methodology',
  seoTitle: 'AI Delivery Methodology — Discovery, Build, Hardening, Run | Brocode Solutions',
  seoDescription:
    'Brocode Solutions delivers AI engagements through a structured Discovery, Build, Hardening, and Run methodology with four-week sprints, KPI tracking, and clear handover gates.',
  eyebrow: 'Delivery methodology',
  headline: 'Discovery, Build, Hardening, Run — the way AI work survives contact with reality.',
  sub: 'A method is not a deck. It is the discipline that keeps an AI programme honest from the procurement workshop to the third year of operation. Ours has been refined across more than a hundred GCC engagements.',
  heroImage: '/images/technology/methodology.jpg',
  heroImageAlt: 'Linear delivery flow diagram showing four phases from discovery through to ongoing operations with steering gates.',
  heroIcon: 'route',
  intro:
    'AI programmes fail in predictable places. The discovery phase rushes past the data work and locks in commitments the team cannot keep. The build phase ships a prototype rather than a product. The hardening phase is skipped because the model already demos well. The run phase has no owner. Brocode Solutions has built its methodology to fail elsewhere — somewhere genuinely new — by being deliberately rigid about the phase gates, the artefacts, and the named accountabilities. Inside each phase there is plenty of room for craft, but the structure itself is non-negotiable.',
  sections: [
    {
      heading: 'Discovery: the four weeks that decide the next twelve months',
      body: 'Discovery runs for four weeks. It is led by a senior consultant, a principal engineer, and a data engineer working alongside your business sponsor and IT lead. The output is a written engagement brief that names the target outcome, the measurable KPIs, the data sources and their owners, the regulatory constraints, the build phases, the budget envelope, and the success criteria for each phase gate. We refuse to skip discovery — even on engagements where the client believes the problem is well understood. The cost of a misframed AI build is paid for years afterwards in the form of an unused model and a sceptical board.'
    },
    {
      heading: 'Build: four-week sprints, weekly steering, working software always',
      body: 'The build phase runs in four-week sprints. Each sprint opens with a written plan, runs to a demonstrable increment of working software, and closes with a steering review attended by sponsors. Weekly check-ins keep the work transparent in between. We refuse to build for more than one sprint without a usable artefact in front of business users — even an unfinished pipeline scoring last month\'s data on a dashboard tells you more than three months of silent engineering. Build sprints are deliberately short so that a misstep costs four weeks of effort to correct rather than a quarter.'
    },
    {
      heading: 'Hardening: the phase that distinguishes a prototype from a product',
      body: 'Hardening is its own phase, not an afterthought. It covers security review against the client\'s standard and any sectoral overlays (CBUAE, DHA, ADGM, NESA), load testing against realistic concurrency, fairness and bias assessment against the populations the model serves, fail-over testing, runbook drafting, and integration with the client\'s monitoring and incident-management stack. Most consultancies bundle hardening into build, which is why most consultancy-led AI projects are difficult to operate. We separate it explicitly, give it its own steering gate, and refuse to declare a system production-ready until the hardening checklist is complete and signed.'
    },
    {
      heading: 'Run: a defined operating phase, not an indefinite warranty',
      body: 'The run phase begins on go-live and is contractually scoped to a defined window — typically six to twelve months. Brocode engineers remain on the engagement under a service-level agreement that covers monitoring, drift response, retraining, and incident management. Crucially, the run phase has a defined operational handover plan, with monthly knowledge-transfer milestones, paired on-call rotations, and a final exit review. By the end of the run phase, your team owns the system. We exit cleanly, with documentation that survives staff turnover and a written invitation to call us back for the next problem rather than the same one.'
    }
  ],
  highlights: [
    { title: 'Four-week discovery', description: 'A written engagement brief with KPIs, data owners, constraints, and phase gates.', icon: 'compass' },
    { title: 'Four-week build sprints', description: 'Working software at every sprint end, steering review attached.', icon: 'workflow' },
    { title: 'Hardening as its own phase', description: 'Security, fairness, load, and operational readiness with a dedicated gate.', icon: 'shield' },
    { title: 'Run phase with an exit plan', description: 'Defined operating window, monthly handover milestones, clean exit review.', icon: 'route' },
    { title: 'Weekly steering', description: 'No quarterly surprises — sponsors see progress every week.', icon: 'chart' },
    { title: 'Written artefacts at every gate', description: 'Briefs, runbooks, and decision logs that survive the team that wrote them.', icon: 'doc' }
  ],
  whyBrocode:
    'Our methodology is not a slide-ware framework. It has been refined across more than a hundred GCC engagements, and every artefact in it exists because something once went wrong without it. Clients tell us repeatedly that the rigour around discovery and hardening is what separates a working programme from an expensive science project — and that the clarity on the run phase is what makes their boards comfortable with the next investment.',
  ourApproach:
    'Each engagement is delivered by a named lead engineer and a delivery manager who stay assigned across all four phases. Steering committees are kept small — sponsor, business owner, IT lead, Brocode lead — to keep decisions fast. Artefacts are kept in the client\'s document system, not ours, so there is no handover scramble at exit. Where a client already runs an internal SDLC or AI-governance framework, we adapt our phases to plug into it rather than imposing parallel ceremonies that nobody attends.',
  stats: [
    { value: 4, label: 'Weeks per discovery and per build sprint' },
    { value: 100, suffix: '+', label: 'GCC engagements delivered to method' },
    { value: 90, suffix: '%', label: 'Programmes still operating after year two' },
    { value: 12, label: 'Months typical run phase before clean exit' }
  ],
  primaryCta: { label: 'Plan a discovery sprint', href: '/contact' },
  secondaryCta: { label: 'See our stack', href: '/technology/stack' },
  related: [
    { label: 'AI Consulting & Strategy', href: '/services/ai-consulting-strategy', description: 'The advisory work that often precedes a discovery sprint.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The operating backbone the run phase relies on.' },
    { label: 'Quality Assurance', href: '/technology/quality-assurance', description: 'The discipline behind the hardening phase.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Governance gates integrated into every phase.' },
    { label: 'AI Integration Services', href: '/services/ai-integration-services', description: 'Wiring AI into existing enterprise systems.' }
  ],
  capabilities: [
    'Discovery sprints with KPI definition and data audit',
    'Four-week build sprints with weekly steering reviews',
    'Hardening against security, fairness, load, and operations',
    'Run-phase support with defined SLAs and exit plans',
    'Adapting to client SDLC and governance frameworks',
    'Written artefacts at every phase gate'
  ],
  outcomes: [
    'A signed engagement brief before any code is written',
    'Working software within four weeks of build kickoff',
    'Production-ready systems that pass independent hardening review',
    'A run phase with monthly knowledge transfer milestones',
    'Clean exits with documentation that outlives the engagement'
  ]
};
