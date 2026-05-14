import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { FAQ } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { ProofBand } from '@/components/ui/ProofBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'ai-agents-agentic-workflows';
const WHATSAPP_MESSAGE =
  'Hi Brocode — I run operations at [organisation]. We have a backlog of RPA exceptions that humans still process and want to scope an AI-agent pilot. Could we schedule an on-site discovery session?';

export const metadata: Metadata = {
  title: 'AI Agents for Enterprise Operations in UAE & KSA',
  description:
    'Production-grade AI agents that close the RPA exception gap — claims, KYC, procurement, expense, credit — running inside your security perimeter with three live workflows in 90 days.',
  alternates: { canonical: 'https://www.brocode.ae/services/ai-agents-agentic-workflows' },
  openGraph: {
    title: 'AI Agents & Agentic Workflows — exception closure for regulated enterprises',
    description:
      'Agents that close 53% of RPA exceptions with a regulator-ready audit trail, a supervisor pattern, and an on-site Exception-Closure Audit.',
    type: 'article',
    url: 'https://www.brocode.ae/services/ai-agents-agentic-workflows'
  },
  twitter: { card: 'summary_large_image' }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Book an on-site Exception-Closure Audit',
  subtitle:
    'A free 30-day on-site discovery sprint. We take your last 90 days of RPA exceptions, cluster them by closure pattern, and produce a quantified estimate of which an agent can close — before any contract is signed.',
  ctaLabel: 'Request the Exception-Closure Audit',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'process',
      label: 'Process(es) in scope',
      type: 'multiselect',
      required: true,
      options: [
        'Claims FNOL',
        'Claims adjudication',
        'KYC onboarding',
        'Supplier KYC',
        'Procurement P2P',
        'Expense audit',
        'Credit decisioning',
        'Customer complaints',
        'Loan origination',
        'Other'
      ]
    },
    {
      name: 'rpaEstate',
      label: 'Current automation estate',
      type: 'multiselect',
      options: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Pega', 'Homegrown scripts', 'No RPA yet']
    },
    {
      name: 'coreSystems',
      label: 'Core system(s) of record',
      type: 'multiselect',
      options: [
        'SAP S/4HANA',
        'Oracle Fusion',
        'Workday',
        'Salesforce',
        'Guidewire',
        'Duck Creek',
        'Pega',
        'Temenos',
        'Finacle',
        'FLEXCUBE',
        'Coupa',
        'Ariba',
        'Other'
      ]
    },
    {
      name: 'caseVolume',
      label: 'Daily case volume on the target process',
      type: 'select',
      options: ['<100', '100–1,000', '1,000–10,000', '>10,000']
    },
    {
      name: 'regulatory',
      label: 'Regulatory regime',
      type: 'multiselect',
      options: ['CBUAE', 'Insurance Authority', 'SAMA', 'DFSA', 'ADGM FSRA', 'SCA', 'DHA', 'DoH', 'Not regulated']
    },
    {
      name: 'decisionThreshold',
      label: 'Decision authority threshold required',
      type: 'textarea',
      placeholder: 'e.g., agent may auto-close claims up to AED 25,000; supervisor required above'
    }
  ]
};

const useCases = [
  {
    name: 'Motor claims FNOL — Guidewire ClaimCenter',
    workflow:
      'Parse the FNOL narrative, fraud-check against historical patterns, look up policy coverage, run reserve estimation, decide on coverage and notify the customer. Supervisor gate at coverage decisions above AED 25,000.',
    metric: '47% auto-close within SLA · UAE insurer ref'
  },
  {
    name: 'Supplier-onboarding KYC — UAE PASS + Nafath',
    workflow:
      'Pull entity records, run worldwide sanctions screening, reconcile two slightly-different supplier rows, request missing documents, and assemble a clean audit pack for compliance review.',
    metric: '14 days → 3 days · tier-1 bank ref'
  },
  {
    name: 'P2P invoice matching — SAP S/4HANA + Coupa',
    workflow:
      'Three-way match PO, goods-receipt and invoice; resolve currency and tax variance within tolerance; raise structured exception only on policy breach. Human-in-the-loop on price-tolerance breaches above 3%.',
    metric: '88% three-way match auto-closure · retail conglomerate ref'
  },
  {
    name: 'Expense audit — Workday + Concur',
    workflow:
      'Read receipts (Arabic and English), match them to expense lines, apply policy thresholds, and flag the genuine outliers rather than emailing finance every entry. Reviewer sees what was checked and why.',
    metric: '60% touchless approval'
  },
  {
    name: 'Credit memo drafting — core banking + LOS',
    workflow:
      'Assemble borrower financials, run covenant compliance, draft the memo with citations, and stop at the credit-committee gate. The agent never approves — it prepares the pack the committee actually wants to read.',
    metric: '70% memo cycle-time reduction'
  },
  {
    name: 'Customer complaints triage — ServiceNow + CRM',
    workflow:
      'Read the complaint (Arabic and English), classify against the regulator taxonomy, route to the right team with a recommended response, and escalate to ombudsman-track when sentiment + regulator-keyword thresholds breach.',
    metric: 'Complaint AHT −38%'
  }
];

const timelineSteps = [
  {
    label: 'Week 0',
    title: 'Exception-Closure Audit (free)',
    description:
      '30-day on-site discovery. We cluster the last 90 days of RPA exceptions, score each cluster against closure feasibility, and deliver a quantified estimate of which exceptions an agent can close before any contract is signed.',
    metric: 'No commercial commitment'
  },
  {
    label: 'Weeks 1–2',
    title: 'Job design + scope',
    description:
      'Operations, risk and IT sponsors co-author the job: inputs, systems read and written, decision points, policies that must hold. Capability list is explicit; step, cost and time budgets are agreed.',
    metric: 'Signed job brief'
  },
  {
    label: 'Weeks 3–6',
    title: 'Build under the supervisor pattern',
    description:
      'LangGraph for stateful agent graphs, CrewAI for multi-role teams where appropriate, Temporal for durable execution. Every agent action checked against a policy graph before commit. PII redacted in traces.',
    metric: 'Replayable traces from day one'
  },
  {
    label: 'Weeks 7–10',
    title: '4-week shadow run',
    description:
      'Agent runs alongside human processors on real cases without committing. Side-by-side disagreement report is produced daily. Calibration happens before the agent earns autonomy on any case class.',
    metric: 'Daily disagreement report'
  },
  {
    label: 'Weeks 11–12',
    title: 'Graduated rollout',
    description:
      'Auto-close authority extended one case class at a time. Human-in-the-loop gates retained on monetary, regulatory or customer-impact thresholds. Governance review attests each scope extension.',
    metric: 'Risk + ops + IT sign-off'
  },
  {
    label: 'Day 90+',
    title: 'Run-phase ownership',
    description:
      'Customer\'s operations team owns prompt management and case-class extension. Brocode stays on for retraining, model swaps and edge-case calibration. Audit-grade exports available on request to internal audit and the regulator.',
    metric: 'Customer-owned playbook'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Closes RPA exceptions vs requires structured input',
    brocode: '53% of exceptions auto-closed',
    competitors: ['Deterministic only', 'Deterministic only', 'Demo-grade', 'Strategy slides'],
    note: '11 regional engagements average — figure verified in the lead magnet.'
  },
  {
    feature: 'Supervisor-Agent policy graph',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'Every action checked against a declared policy graph before commit.'
  },
  {
    feature: 'Replayable execution trace (plan + tool calls + outcomes)',
    brocode: 'Langfuse + Arize Phoenix with PII redaction',
    competitors: ['Logs only', 'Logs only', 'Partial', 'N/A'],
    note: 'Exportable in PDF and JSON for regulator inspection.'
  },
  {
    feature: 'Human-in-the-loop on monetary / regulatory thresholds',
    brocode: true,
    competitors: [true, true, false, false],
    note: 'Mandatory gates declared in the job brief, not optional.'
  },
  {
    feature: 'Co-existence with existing RPA estate (no rip-and-replace)',
    brocode: 'UiPath Services Partner — we close exceptions, we do not replace bots',
    competitors: ['N/A', 'N/A', 'N/A', 'Replacement narrative'],
    note: 'Agents orchestrate alongside UiPath / AA / Blue Prism.'
  },
  {
    feature: 'Named regional production references',
    brocode: 'UAE insurer · tier-1 bank · retail conglomerate',
    competitors: ['Region-resident', 'Region-resident', 'Demo only', 'Strategy slides'],
    note: 'All three reference calls available on the second meeting.'
  },
  {
    feature: 'Regulator-ready audit trail (CBUAE / SAMA / IA)',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'Trace + policy attestation + model card per release.'
  },
  {
    feature: 'Fixed-fee delivery commitment',
    brocode: '90-day fixed scope with three live workflows',
    competitors: ['Per-bot licence', 'Per-bot licence', 'Time-and-materials', '26-week assessment'],
    note: 'No 18-month strategy programme.'
  }
];

const competitors = ['UiPath / AA / Blue Prism', 'Pega', 'AutoGPT / Operator demos', 'Big-3 consultancy'];

const objections = [
  {
    objection:
      'RPA already failed to handle our exceptions reliably. Why will an LLM-based agent be different — won\'t it just hallucinate a decision?',
    proof:
      'RPA failed because rule-driven bots cannot read a free-text claim narrative or compare two slightly-different supplier records. Agents pass that judgement layer through an LLM under explicit constraints — a policy-graph supervisor, mandatory tool calls into systems of record, and a deterministic policy check before any commit. The UAE insurer reference auto-closes 47% of FNOL cases with a false-decision rate of 0.7%; the same workload on rule-driven RPA was 14% deflection with no audit trail anyone could defend.'
  },
  {
    objection:
      'Our regulator (CBUAE / Insurance Authority / SAMA / SCA) will not accept a black-box decision on a claim. How do we explain a denial to a customer or a regulator?',
    proof:
      'Every agent action emits a replayable trace: the plan, the tool calls, the policy checks, the inputs read, the outputs written, and the supervisor verdict. The trace exports in PDF and JSON. The customer-facing denial cites the policy clause and the evidence; the regulator-facing pack adds the model card, the policy graph and the audit log. We routinely walk through the trace with second-line risk before launch — it is engineered to survive that meeting, not just the demo.'
  },
  {
    objection:
      'We already have UiPath / Automation Anywhere licences and a CoE. We are not throwing that away — how do you co-exist?',
    proof:
      'We are a UiPath Services Partner. The agent orchestrates alongside existing bots; the deterministic part of a claim or invoice still runs on UiPath, and the agent picks up where the bot drops the exception. Your CoE keeps the platform investment and inherits a new layer of judgement-capable workflows it previously could not deliver. The retail-conglomerate reference is exactly this co-existence pattern on SAP S/4HANA + UiPath + Coupa.'
  }
];

const faqItems = [
  {
    question: 'How do you stop the agent hallucinating a decision on a complex case?',
    answer:
      'Three structural mitigations. The agent must call a tool against a system of record for every fact it claims (no free-floating reasoning on customer or policy data). The supervisor checks every proposed action against a declared policy graph before commit. The human-in-the-loop gate is mandatory on monetary, regulatory or customer-impact thresholds — the job brief makes these explicit, not implicit. We measure false-decision rate as a first-class metric and report it weekly.'
  },
  {
    question: 'What does the regulator-ready audit trail actually contain?',
    answer:
      'For every case the agent touched: the plan it produced, the tools it called and the parameters it sent, the outputs it received, the policy checks the supervisor ran and their verdicts, the human-in-the-loop reviewer (if any), and the final action committed to the system of record. PII is redacted in the trace but the lineage is preserved. Exports are in PDF and JSON. The trace can be replayed deterministically against the same inputs.'
  },
  {
    question: 'How is the model deprecation problem handled — what if Claude or GPT changes behaviour?',
    answer:
      'The model router we configure picks per step from Claude Sonnet 4.5, GPT-5 reasoning, Llama 3.3 70B fine-tunes and Mistral-Large-2. A weekly regression suite scores each candidate on the customer\'s golden scenarios; a step-level model change requires a new release through the same governance gates. For workloads with sovereignty constraints, the Llama 3.3 fine-tune runs in customer VPC and is the default.'
  },
  {
    question: 'How do you measure ROI without inflating the number?',
    answer:
      'ROI is calculated against the customer\'s own pre-agent baseline on the same case class, not against an industry average. We measure cycle time, FTE-hour displacement, false-decision rate (and remediation cost), and customer complaint rate. The methodology is documented in the run-phase report and signed off by Finance before publication. Numbers like "47% auto-close" or "AED 6.4M annualised saving" are baseline-anchored, not synthetic.'
  },
  {
    question: 'What happens during the 4-week shadow run?',
    answer:
      'The agent processes real cases in parallel with the human processor but does not commit any action. Every disagreement is logged and reviewed daily; the agent\'s prompt, policy graph and tool configuration are calibrated against the disagreements. By the end of week 4 we have a per-case-class confidence map and the operations team has seen the agent\'s reasoning on enough cases to sign off on graduated rollout.'
  },
  {
    question: 'Can the agent operate in Arabic and English at the same time?',
    answer:
      'Yes. Free-text inputs (claim narratives, complaints, expense receipts) routinely arrive in Khaleeji, MSA and English. The understanding step runs on AraBERT-v2 and Llama 3.3 70B fine-tunes for Arabic; reasoning is grounded in retrieved policy text in the original language. Customer-facing replies are generated in the customer\'s language. All of this is logged in the trace.'
  },
  {
    question: 'How do you handle change management with the operations team?',
    answer:
      'The Supervisor pattern preserves human authority on the cases that matter. Processors move from doing every case to reviewing the ones the agent flagged for review and calibrating the agent on edge cases. We run a defined enablement programme — playbook, classroom, side-by-side coaching — across the shadow run. Headcount conversations are owned by the customer; our brief is to make those conversations evidence-based.'
  },
  {
    question: 'What is the pricing model?',
    answer:
      'Fixed fee for the 90-day delivery with three workflows live. The Exception-Closure Audit at week 0 is free and unconditional. The run-phase is a separately scoped retainer that scales with case volume and number of active workflows. We do not charge per-bot licence on the resulting agent estate.'
  }
];

const stats = [
  { value: '53%', label: 'RPA exceptions closed by agents (11-engagement average)' },
  { value: '4% → 1%', label: 'False-decision rate after first 8-week feedback cycle' },
  { value: '14d → 3d', label: 'Supplier KYC cycle, tier-1 bank ref' },
  { value: '88%', label: 'Three-way match auto-closure, retail conglomerate ref' }
];

const relatedItems = [
  { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'The broader GenAI programme that wraps the agent estate.' },
  { label: 'Document Intelligence', href: '/services/document-intelligence', description: 'The Arabic OCR layer that feeds claims and KYC agents.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Eval, drift detection and observability for production agents.' },
  { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Model cards, policy graphs, regulator-ready evidence packs.' },
  { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'The bank operations and insurer back-office references in full.' }
];

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Agents and Agentic Workflows',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Kuwait'],
  description:
    'Production AI agents that close RPA exceptions for claims, KYC, procurement, expense and credit. Supervisor pattern, replayable traces, regulator-ready audit trail. Three live workflows in 90 days.',
  audience: { '@type': 'Audience', audienceType: 'Chief Operating Officer, Head of Operations, Head of Shared Services' }
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer }
  }))
};

export default function AIAgentsAgenticWorkflowsPage() {
  return (
    <>
      <Script id="ld-agents-service" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-agents-faq" type="application/ld+json">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      {/* Bespoke ops-console hero with workflow diagram (supervisor agent + tool calls) */}
      <section className="relative isolate overflow-hidden bg-[#0e1424] text-white">
        <GradientMesh tone="midnight" />
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/services/ai-agents-agentic-workflows.jpg"
            alt="Operations floor with a Guidewire ClaimCenter case being worked alongside a LangGraph agent trace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-[#0e1424]/85 to-[#0e1424]" />
        </div>

        <div className="container-site relative z-10 pt-22 pb-22 md:pt-28 md:pb-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AI Agents & Agentic Workflows' }
            ]}
            variant="dark"
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5 text-white/70">Operations automation · agentic systems</p>
              <h1 className="text-balance text-display-2xl">
                AI agents that close the RPA exception gap.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                Production-grade agents for claims, KYC, procurement, expense and credit — running inside your security
                perimeter, with three live workflows and a verified productivity number in ninety days.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="#contact-form"
                  variant="primary"
                  size="lg"
                  event="quote_open"
                  className="bg-white text-ink-900 hover:bg-brand hover:text-white"
                >
                  Book an on-site Exception-Closure Audit
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={PAGE_SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  WhatsApp the agentic-ops lead
                </a>
                <Link
                  href="#lead-magnet"
                  data-event="secondary_cta_click"
                  data-page={PAGE_SLUG}
                  className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  Download the Exception-Closure Scoring Sheet →
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3 text-xs text-white/70">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-bold text-brand-200">412</p>
                  <p className="mt-1">cases auto-closed today</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-bold text-emerald-300">1.9d</p>
                  <p className="mt-1">average handling time</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-bold text-white">0.7%</p>
                  <p className="mt-1">false-decision rate</p>
                </div>
              </div>
            </div>

            {/* Workflow diagram — supervisor agent + tool calls */}
            <div className="lg:col-span-6">
              <GlassCard tone="dark" padding="md">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                  trace · case CL-2026-04822 · motor FNOL
                </p>
                <ul className="mt-4 space-y-2 font-mono text-[12px] text-white/85">
                  <TraceNode i={1} node="parse_fnol" tool="LangGraph · Claude Sonnet 4.5" verdict="ok" />
                  <TraceNode i={2} node="fraud_check" tool="tool: claims_history.search" verdict="ok" />
                  <TraceNode i={3} node="policy_lookup" tool="tool: guidewire.policy.get" verdict="ok" />
                  <TraceNode i={4} node="supervisor_check" tool="policy_graph: coverage_within_authority" verdict="pass" highlight />
                  <TraceNode i={5} node="coverage_decide" tool="tool: guidewire.case.update" verdict="ok" />
                  <TraceNode i={6} node="reserve_set" tool="tool: guidewire.reserve.write" verdict="ok" />
                  <TraceNode i={7} node="notify_customer" tool="tool: comms.whatsapp.send" verdict="ok" />
                </ul>
                <div className="mt-4 flex items-center justify-between rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2">
                  <span className="text-xs text-emerald-200">case status</span>
                  <span className="font-mono text-xs font-semibold text-emerald-200">
                    Pending — human review → Closed — agent
                  </span>
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">
                  langgraph · langfuse trace · pii redacted · exportable pdf/json
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stat ribbon */}
      <section className="border-b border-ink-100 bg-white py-10">
        <div className="container-site">
          <ProofBand items={stats} />
        </div>
      </section>

      {/* Problem & stakes */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why 64% of cases still hit a human"
              title="Your RPA estate handles the deterministic part. The exceptions land on a human queue."
              description="Bots cannot read a free-text claim narrative, compare two slightly-different supplier records, or decide whether a receipt actually matches an expense policy. The judgement layer is what agents replace."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-700">
            <p>
              Shared-services FTE budgets are frozen. Average claim handling time has slipped from 4.2 days to 5.7
              days over four quarters, threatening regulator SLAs and pushing complaints to the Insurance Authority
              and CBUAE. The Group CEO is presenting an &ldquo;AI productivity&rdquo; number to the board in two quarters; the
              persona on this page is the person who has to put a real figure next to that line.
            </p>
            <p>
              Three exception patterns recur across the eleven regional engagements we run today. Free-text adjudication
              — a claim narrative or complaint paragraph that no rule can deterministically classify. Entity
              reconciliation — two supplier records, two customer records, two PO lines that are nearly-but-not-quite
              the same. Policy interpretation — an expense receipt that breaches one of forty-three policy clauses,
              which a human reads in eight seconds and a rule engine cannot encode.
            </p>
            <p>
              Agents close that gap when they are built as constrained instruments, not as autonomous explorers. The
              job is explicit. The capability list is explicit. The supervisor checks every action against a declared
              policy graph. Human-in-the-loop gates fire on monetary, regulatory and customer-impact thresholds.
              Replayable traces export to PDF and JSON for the regulator. The closure rate is measured against the
              customer baseline; false-decision rate is reported weekly.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture — stack as bento */}
      <section className="bg-ink-900 py-22 text-white md:py-28">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="What an agent actually is here"
            title="LangGraph + Supervisor + Tool layer + Memory. The model router picks per step."
            description="No one-platform-fits-all. We pick the orchestrator per workflow and the model per step, then we wrap the result in a policy-graph supervisor that survives a second-line review."
          />
          <BentoGrid className="mt-14">
            <BentoCell span="lg" variant="brand">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Orchestration · per workflow</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">LangGraph · CrewAI · Temporal · AutoGen</h3>
              <p className="mt-4 text-sm text-white/85">
                LangGraph for stateful branching agent graphs. CrewAI for multi-role teams where the workflow needs
                planner + executor + reviewer roles. Temporal for durable workflow execution that survives a
                Kubernetes restart. AutoGen for pair-agent patterns. The right tool for the right shape — not a
                one-platform pitch.
              </p>
            </BentoCell>
            <BentoCell variant="glass" className="bg-white/5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Model router · per step</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Claude Sonnet 4.5 · GPT-5 · Llama 3.3 70B · Mistral-Large-2</h3>
              <p className="mt-3 text-sm text-white/80">
                Long-context reasoning on Claude; complex adjudication on GPT-5 reasoning; sovereign workloads on a
                Llama 3.3 fine-tune in customer VPC; cost-tier fallback on Mistral-Large-2.
              </p>
            </BentoCell>
            <BentoCell variant="glass" className="bg-white/5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Tool layer · least-privilege</p>
              <h3 className="mt-2 text-xl font-semibold text-white">SAP, Oracle, Guidewire, Duck Creek, Coupa, ServiceNow</h3>
              <p className="mt-3 text-sm text-white/80">
                Service accounts with scoped permissions. Step-up approvals on sensitive operations. UAE PASS and
                Nafath identity rails for KYC.
              </p>
            </BentoCell>
            <BentoCell span="lg" variant="glass" className="bg-white/5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Supervisor pattern</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Every action checked against a declared policy graph before commit</h3>
              <p className="mt-3 text-sm text-white/80">
                The policy graph is co-authored with the customer second-line risk team and version-controlled
                alongside the agent prompt. Threshold breaches, irreversible actions, and low-confidence outcomes
                route to a human review queue with full context. The supervisor is the difference between an agent
                that closes work and an agent that the regulator will accept.
              </p>
            </BentoCell>
            <BentoCell variant="glass" className="bg-white/5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Memory & retrieval</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Qdrant + Mem0</h3>
              <p className="mt-3 text-sm text-white/80">
                Case-history retrieval scoped per customer tenant. Long-term memory respects retention policy and
                supports right-to-be-forgotten on customer record.
              </p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Use-case catalogue */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case catalogue"
            title="Six agents we have already shipped in the region."
            description="Each is a constrained instrument with explicit scope, capability list, supervisor policy graph and human-in-the-loop gates."
          />
          <ul className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {useCases.map((u, i) => (
              <li key={u.name}>
                <Reveal delay={i * 0.04}>
                  <article className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Workflow {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-3 text-lg font-semibold text-ink-900">{u.name}</h3>
                    <p className="mt-3 text-sm text-ink-700">{u.workflow}</p>
                    <p className="mt-5 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
                      {u.metric}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 90-day timeline + shadow run */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="From discovery to autonomy"
            title="The 4-week shadow run is where trust is built — before the agent commits any action."
            description="The agent runs alongside the human processor on real cases. Disagreements are reviewed daily, calibration happens in the open, autonomy is earned one case class at a time."
          />
          <div className="mt-16">
            <ScrollTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="UiPath / Automation Anywhere, Pega, AutoGPT-style frameworks, and Big-3 consultancies."
            description="The differences that survive a procurement-committee read. The Exception-Closure Audit makes them concrete on your data, not ours."
          />
          <div className="mt-12">
            <CompareTable competitors={competitors} rows={compareRows} brandLabel="Brocode" />
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Three objections worth airing"
            title="Hallucination, audit trail, and co-existence with the RPA estate."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {objections.map((o, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">Objection {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">&ldquo;{o.objection}&rdquo;</h3>
                  <p className="mt-4 text-sm text-ink-700">{o.proof}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead-magnet gate */}
      <section id="lead-magnet" className="bg-white py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="The RPA Exception-Closure Audit Playbook"
            description="A 34-page PDF and a downloadable Exception-Closure Scoring Sheet (Excel) for an operations team to apply to its own backlog. The methodology behind the 53% closure figure across eleven regional engagements."
            contents={[
              'Audit methodology — 30 days, on-site, no commercial commitment',
              'Top 8 exception classes by cost across regional engagements',
              'Agentic resolution patterns per class',
              'The Supervisor-Agent pattern (LangGraph + Temporal)',
              'Side-by-side scoring: UiPath, AutoGPT-style, Brocode LangGraph stack on 1,000 cases',
              'Sample Exception-Closure SLA (the fee-back model)'
            ]}
            filePath="/downloads/exception-closure-audit.pdf"
            ctaLabel="Email me the playbook + the scoring sheet"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Frequently asked"
              title="Hallucination, audit, deprecation, ROI methodology."
              description="Eight questions risk, operations and IT raise in the first session."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="contact-form" className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Exception-Closure Audit"
              title="A free 30-day on-site discovery. No commercial commitment."
              description="We take your last 90 days of RPA exceptions, cluster them by closure pattern, and produce a quantified estimate of which an agent can close — before any contract is signed."
            />
            <Reveal className="mt-8">
              <GlassCard tone="light" padding="md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">What you receive</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  <li>· An on-site exception-cluster map with cost per class</li>
                  <li>· A quantified closure estimate per cluster</li>
                  <li>· A draft job brief for the top-three workflows</li>
                  <li>· A 90-day fixed-fee proposal anchored to your baseline</li>
                </ul>
              </GlassCard>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card md:p-9">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks heading="Related capabilities" items={relatedItems} />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Audit my exceptions"
        primaryHref="#contact-form"
      />
    </>
  );
}

function TraceNode({
  i,
  node,
  tool,
  verdict,
  highlight
}: {
  i: number;
  node: string;
  tool: string;
  verdict: string;
  highlight?: boolean;
}) {
  return (
    <li
      className={`flex items-center gap-3 rounded-md px-3 py-2 ${
        highlight ? 'border border-amber-400/30 bg-amber-500/10' : 'border border-white/5 bg-white/5'
      }`}
    >
      <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-brand text-[10px] font-bold text-white">
        {String(i).padStart(2, '0')}
      </span>
      <span className="flex-1 truncate">
        <span className={`font-semibold ${highlight ? 'text-amber-200' : 'text-white'}`}>{node}</span>
        <span className="ml-2 text-white/55">{tool}</span>
      </span>
      <span
        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
          highlight ? 'bg-amber-400/20 text-amber-200' : 'bg-emerald-400/15 text-emerald-300'
        }`}
      >
        {verdict}
      </span>
    </li>
  );
}
