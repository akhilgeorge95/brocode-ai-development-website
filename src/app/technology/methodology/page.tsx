import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollTimeline, type TimelineStep } from '@/components/ui/ScrollTimeline';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'methodology';
const PAGE_URL = '/technology/methodology';

export const metadata: Metadata = {
  title: 'AI Delivery Methodology — Discover, Build, Harden, Run | Brocode',
  description:
    'A four-phase methodology with named G0–G3 stage gates, fortnightly steerings, RACI templates and a regulator-evidence pack produced at every gate. 96% on-time at go-live since 2023.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'PMO Pack — Discover. Build. Harden. Run.',
    description:
      'Four phases. Four gates. One regulator-evidence pack at every gate.',
    url: PAGE_URL,
    type: 'article',
    images: ['/images/technology/methodology.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Book a methodology walk-through',
  subtitle:
    'A 60-minute call with the Head of Delivery. Bring your PMO. We open the SoW template, the RACI starter and the regulator-evidence pack on screen.',
  ctaLabel: 'Book a technical review',
  whatsappMessage:
    "Hi Brocode — our PMO is evaluating AI delivery methodologies for [organisation]. I'd like to book the 60-minute methodology walk-through with your Head of Delivery, and receive the PMO-Pack ahead of the call.",
  fields: [
    {
      name: 'role',
      label: 'Your role',
      type: 'select',
      options: ['PMO Director', 'Procurement Category Manager', 'Delivery Lead', 'Head of AI', 'Other'],
      required: true
    },
    {
      name: 'engagementType',
      label: 'Engagement type planned',
      type: 'select',
      options: ['Discovery only', 'Discovery + Build', 'Build + Run', 'Managed service', 'Fixed-price programme', 'Time-and-materials augmentation']
    },
    {
      name: 'programmeSize',
      label: 'Programme size',
      type: 'select',
      options: ['1 use case', '2–5 use cases', 'Portfolio', 'Platform programme']
    },
    {
      name: 'pmoMethodology',
      label: 'PMO methodology mandated by your organisation',
      type: 'select',
      options: ['PRINCE2', 'PMI PMBOK', 'SAFe', 'In-house hybrid', 'None']
    },
    {
      name: 'regulator',
      label: 'Regulator overlay required',
      type: 'multiselect',
      options: ['TDRA', 'CBUAE', 'FSRA-ADGM', 'DFSA-DIFC', 'NCA-KSA', 'Internal-audit only']
    },
    {
      name: 'goLive',
      label: 'Target go-live window',
      type: 'select',
      options: ['<3 months', '3–6 months', '6–9 months', '9–12 months', '>12 months']
    }
  ]
};

const PHASES: { phase: string; duration: string; tag: string; summary: string; deliverables: string[] }[] = [
  {
    phase: 'Phase 1 — Discover',
    duration: '4 weeks (fixed)',
    tag: 'G0 → G1',
    summary:
      'Week 1: stakeholder map and use-case scoring against the Brocode value-risk matrix. Week 2: data-readiness audit and model-feasibility spike. Week 3: reference architecture and SoW drafting. Week 4: stage-gate review with the client steering committee.',
    deliverables: ['Feasibility memo', 'Target architecture', 'RACI', 'SoW with fixed scope', 'Unit-priced change-control framework']
  },
  {
    phase: 'Phase 2 — Build',
    duration: '12–26 weeks, 2-week sprints',
    tag: 'G1 → G2',
    summary:
      'Product-owner pair (Brocode delivery lead + client product owner), sprint demo every second Tuesday, RAID review every second Thursday, monthly steering. Sprint-zero stands up dev environment, CI/CD, MLflow registry, eval harness and regulator-evidence template.',
    deliverables: ['Sprint-zero environment', 'CI/CD on every commit', 'MLflow registry', 'Eval harness baseline', 'Mid-Build production-readiness review']
  },
  {
    phase: 'Phase 3 — Harden',
    duration: '4–6 weeks',
    tag: 'G2 → G3',
    summary:
      'Dedicated UAT, model-evaluation report, bias and fairness pack, security and penetration test, performance and load test, regulator dry-run, hand-over rehearsal.',
    deliverables: ['UAT report', 'Model-evaluation report', 'Bias + fairness pack', 'Pen-test report', 'Regulator dry-run minutes', 'Hand-over rehearsal']
  },
  {
    phase: 'Phase 4 — Run',
    duration: 'Continuous, 90-day hyper-care',
    tag: 'Post-G3',
    summary:
      'Managed-service ramp with a fixed 90-day hyper-care, named SRE on-call rota, model-drift alerts wired to the client ticketing system, quarterly model-review board.',
    deliverables: ['Hyper-care exit criteria', 'On-call rota', 'Drift alert routing', 'Quarterly model-review board']
  }
];

const GATES: { code: string; title: string; evidence: string }[] = [
  {
    code: 'G0',
    title: 'Kick-off gate',
    evidence: 'Engagement charter signed, sponsor confirmed, PMO-Pack handed over (22 templates), data-access provisional approvals lodged with the second line of defence.'
  },
  {
    code: 'G1',
    title: 'End of Discover gate',
    evidence: 'Feasibility memo + target architecture + SoW + RACI signed off by steering. Regulator-evidence pack v1 — initial control mapping. Go / No-Go committed in writing.'
  },
  {
    code: 'G2',
    title: 'Mid-Build production-readiness review',
    evidence: 'Eval harness baseline + first regression suite + initial bias report + observability plane live. Regulator-evidence pack v2 — interim audit-ready evidence. Internal-audit dry review optional at the client\'s request.'
  },
  {
    code: 'G3',
    title: 'End of Harden / go-live approval',
    evidence: 'UAT sign-off + final model-evaluation + bias + pen-test + regulator dry-run minutes + hand-over rehearsal complete. Regulator-evidence pack v3 — final, attached to the regulator submission.'
  }
];

const TIMELINE: TimelineStep[] = [
  {
    label: 'Phase 1',
    title: 'Discover — 4 weeks, fixed',
    description: 'Stakeholder map, use-case scoring, data-readiness audit, model-feasibility spike, reference architecture, SoW drafting, G1 stage-gate review.',
    metric: 'Closes at G1 — feasibility memo signed'
  },
  {
    label: 'Phase 2',
    title: 'Build — 12–26 weeks in 2-week sprints',
    description: 'Sprint-zero (CI/CD, registry, eval harness), iterative build, demo every second Tuesday, RAID every second Thursday, monthly steering. Mid-build production-readiness review at G2.',
    metric: 'G2 production-readiness mid-Build'
  },
  {
    label: 'Phase 3',
    title: 'Harden — 4–6 weeks',
    description: 'UAT, evaluation report, bias and fairness pack, pen-test, load test, regulator dry-run, hand-over rehearsal. Closes at G3 — go-live approval.',
    metric: 'G3 — regulator dry-run cleared'
  },
  {
    label: 'Phase 4',
    title: 'Run — continuous with 90-day hyper-care',
    description: 'Hyper-care SRE rota, drift alerting, monthly knowledge-transfer milestones, quarterly model-review board. Exit criteria committed at G3.',
    metric: '90-day hyper-care, then named on-call'
  }
];

const SPRINT_PLAN: { week: string; demo: string; raid: string; steering: string }[] = [
  { week: 'Sprint-zero', demo: 'Dev environment + CI/CD + registry + eval harness', raid: 'Initial risk log; data-access blockers flagged', steering: 'Sprint-zero exit review' },
  { week: 'Sprint 1', demo: 'First end-to-end vertical slice on a hold-out sample', raid: 'Model-feasibility risks updated', steering: '—' },
  { week: 'Sprint 2', demo: 'Eval suite + baseline metrics on the use-case KPI', raid: 'Bias-class hypotheses logged', steering: 'Monthly — sponsor present' },
  { week: 'Sprint 3', demo: 'Inference path + observability + drift baseline', raid: 'Production-readiness checklist opened', steering: '—' },
  { week: 'Sprint 4', demo: 'Integration with client system-of-record + UAT-readiness', raid: 'Pen-test scope confirmed', steering: 'G2 mid-Build production-readiness review' }
];

const RACI_PATTERNS: { name: string; for: string }[] = [
  { name: 'Greenfield model', for: 'Net-new use case with no existing ML in scope; product owner + delivery lead pair from day one.' },
  { name: 'Model migration', for: 'Replacing an incumbent model; parallel-run RACI with safe-cut-over playbook.' },
  { name: 'RAG platform', for: 'Retrieval-augmented platform with a corpus owner, a vector-store owner and a guardrails owner explicitly named.' },
  { name: 'Agentic system', for: 'Multi-tool agentic workflow with a tool-owner matrix and a separation-of-duties model for action authorisation.' },
  { name: 'AI control-plane rollout', for: 'MLOps control plane (registry, eval, drift, lineage) deployed across multiple model teams.' }
];

const COMPARE_ROWS: CompareRow[] = [
  {
    feature: 'Published, named stage gates (G0–G3) with deliverables',
    brocode: true,
    competitors: ['No', 'Internal only', 'In bespoke decks']
  },
  {
    feature: 'Fixed-price option out of fixed 4-week Discover',
    brocode: true,
    competitors: ['Rare', 'T&M only', 'T&M by default']
  },
  {
    feature: 'PMO-ready RACI starters (5 patterns)',
    brocode: true,
    competitors: [false, 'On request, weeks later', false]
  },
  {
    feature: 'Regulator-evidence pack at every gate',
    brocode: 'TDRA / CBUAE / FSRA / NCA pre-mapped',
    competitors: ['Built per engagement', 'Built per engagement', 'TDRA only']
  },
  {
    feature: 'On-time at go-live since 2023',
    brocode: '96%',
    competitors: ['~38% industry baseline', '~45% industry baseline', '~50% industry baseline']
  },
  {
    feature: 'Named Head of Delivery on every engagement',
    brocode: true,
    competitors: ['Pool of project managers', 'Partner-led, rare in delivery', 'Senior on kick-off only']
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is this real Agile or waterfall in two-week sleeves?',
    answer:
      'Real Agile inside a phase, with phase-level gates that procurement and internal audit can recognise. Inside Build, sprints are 2 weeks with a demo every second Tuesday, a RAID review every second Thursday and a monthly steering. Scope change is handled through a unit-priced change-control framework agreed at G1, not by re-baselining the whole programme. Hardening is a separate phase, not a tail of Build — which is the most common mistake we see in failed AI programmes.'
  },
  {
    question: 'Can you really deliver fixed-price with this methodology?',
    answer:
      'Yes — for use cases that pass Discover. The fixed-price commitment is made at G1, after the data-readiness audit and the feasibility spike. We will not offer a fixed price before Discover; consultancies that do are pricing the unknown into the contingency, which means clients overpay on the easy cases and Brocode (or the client) absorbs the shortfall on the hard ones. The change-control framework prices scope additions through unit rates agreed at G1.'
  },
  {
    question: 'Will the regulator-evidence pack survive a CBUAE / FSRA / NCA review?',
    answer:
      'The pack is versioned at each gate (v1 at G1, v2 at G2, v3 at G3). Each version is mapped to the relevant controls — CBUAE Model Risk guidance, FSRA Principles for Adoption of AI, NCA ECC, TDRA hosting and residency controls, ADGM Data Protection, ISO 42001. Three CBUAE-supervised banks have used our pack inside their model-risk submissions; two TDRA submissions cleared at first review.'
  },
  {
    question: 'How small or large can engagements be?',
    answer:
      'Smallest: a single Discover sprint (4 weeks, fixed) for one use case. Largest: a portfolio programme with multiple parallel Build streams sharing a single AI control-plane rollout — typically 9–18 months end to end with 8–16 engineers at peak. We do not run open-ended T&M augmentation as a default; if a client needs that, we map it onto a defined programme shape with a written exit ramp.'
  },
  {
    question: 'How do you handle our PMO methodology if it is PRINCE2 or SAFe?',
    answer:
      'We adapt our phases to plug into your existing ceremonies rather than imposing parallel ones. PRINCE2 stage boundaries map cleanly onto G0–G3. SAFe PI planning maps onto our quarterly steering rhythm; SAFe IP iterations fit inside Harden. We provide the mapping document in the PMO-Pack so your PMO can review the integration before kick-off.'
  },
  {
    question: 'What happens at the end of the Run phase?',
    answer:
      'The Run phase has a defined operating window — typically 6 to 12 months — followed by a clean exit. By the end of Run, your team owns the system: documentation transferred, on-call rota internalised, model-review board chaired by your second line of defence. We exit cleanly with a written invitation to call us back for the next problem rather than the same one.'
  }
];

const PROOF_ITEMS = [
  { value: '96%', label: 'On-time at go-live since 2023' },
  { value: '4', label: 'Named gates: G0, G1, G2, G3' },
  { value: '22', label: 'PMO-Pack templates handed over at G0' },
  { value: '4w', label: 'Fixed Discover phase' }
];

const RELATED = [
  { label: 'Quality Assurance for AI', href: '/technology/quality-assurance', description: 'The discipline behind the Harden phase.' },
  { label: 'Technology Stack', href: '/technology/stack', description: 'The pinned stack the Build phase delivers on.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The operating backbone for the Run phase.' },
  { label: 'About / Team', href: '/about', description: 'The named Head of Delivery and senior leads.' },
  { label: 'FAQs', href: '/insights/faqs', description: 'Pricing and timeline objections answered.' }
];

export default function MethodologyPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'AI Delivery Methodology — Discover, Build, Harden, Run',
    description:
      'Four-phase methodology with G0–G3 stage gates, fortnightly steerings, RACI templates, and a regulator-evidence pack at every gate.',
    url: `https://brocode.ae${PAGE_URL}`,
    image: 'https://brocode.ae/images/technology/methodology.jpg',
    author: { '@type': 'Organization', name: 'Brocode Solutions' }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <Script id="ld-techarticle" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero — 4-phase Gantt strip */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100" data-page={PAGE_SLUG}>
        <Image
          src="/images/technology/methodology.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-10"
        />
        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }, { label: 'Methodology' }]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Delivery methodology</p>
              <h1 className="mt-5 text-balance text-display-xl font-semibold leading-[1.05] text-ink-900">
                Four phases. Four gates. One regulator-evidence pack at every gate.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink-700">
                Discover (4w) → Build (12–26w, 2-week sprints) → Harden (4–6w) → Run. The
                methodology is named, written, gated and audited — designed to survive a
                PMO audit and a TDRA / CBUAE / FSRA review.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Book a methodology walk-through
                </MagneticButton>
                <MagneticButton href="#lead-magnet" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the PMO-Pack (22 templates)
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Gantt-style phase strip */}
          <div className="mt-14 overflow-x-auto">
            <div className="min-w-[820px]">
              <div className="grid grid-cols-12 gap-1.5">
                <div className="col-span-2 rounded-l-2xl bg-ink-900 px-4 py-5 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-300">Discover</p>
                  <p className="mt-1 font-mono text-sm">4 weeks</p>
                </div>
                <div className="col-span-5 bg-brand px-4 py-5 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/70">Build</p>
                  <p className="mt-1 font-mono text-sm">12–26 weeks · 2-week sprints</p>
                </div>
                <div className="col-span-2 bg-amber-500 px-4 py-5 text-ink-900">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink-900/70">Harden</p>
                  <p className="mt-1 font-mono text-sm">4–6 weeks</p>
                </div>
                <div className="col-span-3 rounded-r-2xl bg-emerald-700 px-4 py-5 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-100">Run</p>
                  <p className="mt-1 font-mono text-sm">90-day hyper-care · continuous</p>
                </div>
              </div>
              {/* Gate diamonds */}
              <div className="relative mt-3 h-10">
                <Gate label="G0" left="0%" />
                <Gate label="G1" left="16.66%" />
                <Gate label="G2" left="58.33%" />
                <Gate label="G3" left="75%" />
              </div>
              <div className="mt-2 grid grid-cols-12 gap-1.5 text-[11px] text-ink-600">
                <p className="col-span-2">Kick-off</p>
                <p className="col-span-5">Production-readiness mid-Build</p>
                <p className="col-span-2">Go-live approval</p>
                <p className="col-span-3 text-right">Hyper-care exit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What this methodology refuses to do"
              title="No 14-month strategy. No Agile theatre. No open-ended T&M."
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-7">
            <Reveal>
              <p>
                Most AI programmes fail at the methodology level long before they fail at the
                model level. A 14-month strategy phase produces two decks and zero shipped
                models. An Agile sticker on a waterfall plan produces governance theatre. An
                open-ended T&amp;M arrangement produces an unbounded burn-rate that the PMO
                eventually has to explain to the audit committee.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                We will not run a strategy phase longer than four weeks. We will not call a
                ceremony Agile if it is not. We will not contract T&amp;M without a written
                exit ramp. And we will not declare a system production-ready without a signed
                regulator-evidence pack at G3. The methodology below is what we will commit
                to in writing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ScrollTimeline — 4 phases */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Four phases, in order"
            title="Discover. Build. Harden. Run."
            description="Each phase ends in a named gate. Each gate produces a regulator-evidence pack version."
          />
          <div className="mt-12">
            <ScrollTimeline steps={TIMELINE} />
          </div>
        </div>
      </section>

      {/* Detailed phases */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Phase deep-dives"
            title="The deliverables, written down."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {PHASES.map((p, i) => (
              <Reveal key={p.phase} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-ink-900">{p.phase}</h3>
                      <p className="mt-1 text-sm font-medium text-brand">{p.duration}</p>
                    </div>
                    <span className="rounded-md bg-ink-900 px-2.5 py-1 font-mono text-[11px] font-semibold text-white">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-ink-600">{p.summary}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-400">Deliverables</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gate definitions G0–G3 */}
      <section className="bg-ink-900 py-22 text-white md:py-28">
        <GradientMesh tone="midnight" className="opacity-30" />
        <div className="container-site relative">
          <SectionHeading
            variant="dark"
            eyebrow="The four stage gates"
            title="G0, G1, G2, G3 — what each produces."
            description="Every gate review is minuted, signed, and attached to the regulator-evidence pack version."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {GATES.map((g, i) => (
              <Reveal key={g.code} delay={i * 0.05}>
                <GlassCard tone="dark" className="border-white/10 bg-white/5" padding="md">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-brand font-mono text-base font-bold text-white">
                      {g.code}
                    </span>
                    <h3 className="text-lg font-semibold">{g.title}</h3>
                  </div>
                  <p className="mt-5 text-sm text-white/75">{g.evidence}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-white py-16">
        <div className="container-site">
          <ProofBand items={PROOF_ITEMS} variant="light" />
        </div>
      </section>

      {/* Sample sprint plan */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Sample sprint plan"
              title="The first five sprints of a typical Build phase."
              description="Sprint demo cadence, RAID rhythm, monthly steering, and the G2 mid-Build production-readiness review."
            />
          </div>
          <div className="lg:col-span-8">
            <div className="overflow-x-auto rounded-2xl border border-ink-100 bg-white">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="bg-ink-900 text-left text-xs font-semibold uppercase tracking-wider text-white">
                    <th className="px-4 py-3">Sprint</th>
                    <th className="px-4 py-3">Demo</th>
                    <th className="px-4 py-3">RAID</th>
                    <th className="px-4 py-3">Steering</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {SPRINT_PLAN.map((s) => (
                    <tr key={s.week} className="hover:bg-surface-muted/50">
                      <td className="px-4 py-3 font-mono text-sm font-semibold text-ink-900">{s.week}</td>
                      <td className="px-4 py-3 text-ink-700">{s.demo}</td>
                      <td className="px-4 py-3 text-ink-700">{s.raid}</td>
                      <td className="px-4 py-3 text-ink-700">{s.steering}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* RACI patterns */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Five delivery patterns"
            title="Pre-built RACI starters in the PMO-Pack."
            description="Each starter is editable on day one and pre-mapped to the G0–G3 gate evidence."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RACI_PATTERNS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.04}>
                <article className="card h-full">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">Pattern</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900">{r.name}</h3>
                  <p className="mt-3 text-sm text-ink-600">{r.for}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CompareTable */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Versus the alternatives"
            title="What the PMO actually compares us against."
          />
          <div className="mt-12">
            <CompareTable
              brandLabel="Brocode"
              competitors={['Big-4 AI practice', 'Offshore consultancy', 'Boutique Agile shop']}
              rows={COMPARE_ROWS}
            />
          </div>
        </div>
      </section>

      {/* Tooling backbone */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Tooling backbone"
              title="The PMO-side and engineering-side tools, named."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {[
                { area: 'Sprint board', tool: 'Jira or Linear' },
                { area: 'ADRs', tool: 'Confluence or Notion' },
                { area: 'Engineering work', tool: 'GitHub Projects' },
                { area: 'Model lineage', tool: 'MLflow 2.16' },
                { area: 'Architecture', tool: 'Lucid or Mermaid' },
                { area: 'PMO-side view', tool: 'Asana or MS Project' }
              ].map((t) => (
                <li key={t.area} className="card flex items-start gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{t.area}</p>
                    <p className="mt-1 font-mono text-base font-semibold text-ink-900">{t.tool}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="lead-magnet" className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="PMO Pack — 22 Templates for AI Delivery"
            description="A downloadable ZIP with the SoW template, change-control template, RAID register, stage-gate checklist (G0–G3), regulator-evidence template, hand-over checklist and 16 more — all in Microsoft Office and Confluence-compatible formats."
            contents={[
              'G0–G3 gate definitions and checklists',
              'Sprint plan templates (sprint-zero through hand-over)',
              'Model risk register',
              'Regulator-evidence pack template (TDRA / CBUAE / FSRA / NCA)',
              'Sample steering deck',
              'Sample retrospective format',
              'Five RACI starters for the named delivery patterns',
              'Hyper-care exit criteria'
            ]}
            filePath="/downloads/pmo-pack.pdf"
            ctaLabel="Email me the PMO-Pack"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="PMO questions"
              title="What category managers ask before recommending a vendor."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="contact-form" className="bg-surface-muted py-22 md:py-28" data-page={PAGE_SLUG}>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Book the walk-through"
              title="An hour with the Head of Delivery, your PMO in the room."
              description="We open the templates on screen, walk a real sample evidence pack (redacted), and answer the questions internal audit is going to ask you."
            />
            <p className="mt-6 text-sm text-ink-600">
              Prefer chat?{' '}
              <a
                href={buildWhatsAppLink(formConfig.whatsappMessage ?? '')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1faa53] underline"
                data-event="whatsapp_hero"
                data-page={PAGE_SLUG}
              >
                Message us on WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={RELATED} />

      <StickyMobileBar
        whatsappMessage={formConfig.whatsappMessage ?? ''}
        primaryLabel="Book the walk-through"
        primaryHref="#contact-form"
      />
    </>
  );
}

function Gate({ label, left }: { label: string; left: string }) {
  return (
    <div
      className="absolute -translate-x-1/2"
      style={{ left }}
      aria-label={`Stage gate ${label}`}
    >
      <span className="block h-6 w-6 rotate-45 rounded-sm bg-ink-900 ring-2 ring-white" />
      <p className="mt-1 -translate-x-1/2 font-mono text-[11px] font-semibold text-ink-900" style={{ marginLeft: '50%' }}>
        {label}
      </p>
    </div>
  );
}
