import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { FAQ } from '@/components/ui/FAQ';
import type { FAQItem } from '@/components/ui/FAQ';
import { CompareTable } from '@/components/ui/CompareTable';
import type { CompareRow } from '@/components/ui/CompareTable';
import { ProofBand } from '@/components/ui/ProofBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { RelatedLinks } from '@/components/RelatedLinks';
import { buildWhatsAppLink, SITE } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';
import { LensRadar } from './_components/LensRadar';

const SLUG = 'ai-consulting-strategy';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I am a CXO at [organisation] and we have a board ask for an AI strategy. I would like to understand your 8-week strategy sprint and meet your partner before we shortlist. Could you arrange a confidential call?";

export const metadata: Metadata = {
  title: 'AI Strategy Sprint — 8-Week Board-Grade Roadmap | Brocode',
  description:
    'Partner-led 8-week AI strategy sprint for UAE and KSA boards. Five-lens diagnostic, value-pool model, regulator-mapped roadmap, named senior pod — with a builder behind every page.',
  alternates: { canonical: `${SITE.url}/services/${SLUG}` },
  openGraph: {
    title: 'AI Strategy Sprint — 8 Weeks. Partner-led. Builder-backed.',
    description:
      'A board-grade AI strategy in 8 weeks. 5-lens diagnostic, NPV-sized value pools, regulator-mapped roadmap, fixed-fee, no junior pyramid.',
    url: `${SITE.url}/services/${SLUG}`,
    images: [`/images/services/${SLUG}.jpg`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Strategy Sprint — Brocode',
    description: '8 weeks vs Big-4 16. Named senior pod. Builder behind every page. 62 % of clients move a workstream into delivery within 90 days.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a strategy framing call with our partner',
  subtitle: 'Forty-five minutes with our partner — confidential, no slideware. We come prepared on your sector and your peer cohort.',
  ctaLabel: 'Book the framing call',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'trigger',
      label: 'Trigger for this conversation',
      type: 'select',
      options: [
        'Board AI committee ask',
        'New CEO mandate',
        'Regulator inquiry',
        'Competitor announcement',
        'Post-Big-4 second opinion',
        'Other'
      ],
      required: true
    },
    {
      name: 'maturity',
      label: 'Current AI maturity (self-rated)',
      type: 'select',
      options: [
        'No AI',
        'Pilots, no production',
        '1–5 models in production',
        '5+ models, no platform',
        'Mature but unfocused'
      ],
      required: true
    },
    {
      name: 'sponsor',
      label: 'Sponsor role',
      type: 'select',
      options: ['CEO', 'CIO', 'COO', 'CSO', 'Chief Data & AI Officer', 'Board member', 'Other'],
      required: true
    },
    {
      name: 'scope',
      label: 'Entity scope of the strategy',
      type: 'select',
      options: ['Single OpCo', 'Multi-OpCo group', 'Federal entity', 'Sovereign holding portfolio'],
      required: true
    },
    {
      name: 'regulators',
      label: 'Regulator(s) in scope',
      type: 'multiselect',
      options: ['CBUAE', 'SAMA', 'DFSA', 'ADGM FSRA', 'TDRA', 'NESA', 'EU AI Act', 'None']
    },
    {
      name: 'boardDate',
      label: 'Target board / ExCo date for the roadmap',
      type: 'date'
    },
    {
      name: 'onsite',
      label: 'Willingness to engage on-site weekly with our partner',
      type: 'select',
      options: ['Yes', 'No', 'Undecided']
    }
  ]
};

const compareRows: CompareRow[] = [
  {
    feature: 'Partner present every week (not just kickoff / readout)',
    brocode: true,
    competitors: [false, false, true, false]
  },
  {
    feature: 'Engagement length',
    brocode: '8 weeks',
    competitors: ['16+ weeks', '12–16 weeks', '6–10 weeks', 'Open-ended'],
  },
  {
    feature: 'Junior pyramid',
    brocode: 'No',
    competitors: ['Yes', 'Heavy', 'Limited', 'N/A'],
  },
  {
    feature: 'Builder behind every workstream',
    brocode: true,
    competitors: [false, false, false, true]
  },
  {
    feature: 'Regulator-mapped governance (SAMA / CBUAE / EU AI Act)',
    brocode: 'Built-in',
    competitors: ['Add-on', 'Partial', 'Variable', 'Manual'],
  },
  {
    feature: 'Sample redacted board deck in lead-magnet',
    brocode: true,
    competitors: [false, false, false, false]
  },
  {
    feature: 'CVs of named pod published before contract',
    brocode: true,
    competitors: [false, false, false, true]
  },
  {
    feature: 'Fixed-fee, banded by entity size',
    brocode: true,
    competitors: ['Premium fixed', 'Variable', 'Variable', 'T&M']
  }
];

const faqs: FAQItem[] = [
  {
    question: 'We have already paid one of the Big-4 for an AI strategy and ended up with a slide deck nobody can execute. Why is this different?',
    answer:
      'Three structural differences. First, the pod is partner-led with named senior engineers — no junior pyramid, no rotating bench. Second, every workstream in the roadmap has a named Brocode engineer or architect attached, so the customer can move directly from strategy to delivery without a second procurement. Third, the value-pool model is built bottom-up from your P&L lines, not transplanted from a global benchmark. The Big-4 deliverable is excellent thinking that hands off into a delivery vacuum; ours is a roadmap with a delivery team standing behind every page.'
  },
  {
    question: 'Brocode is a builder — does that mean every recommendation conveniently lands on a Brocode build?',
    answer:
      "No. The sprint deliverable includes an explicit build-or-buy decision per use-case, supported by a reference library of 60+ delivered builds. We have, on the record, recommended customers buy rather than build for use-cases where the commercial offering is mature — typical ones include customer email scoring, computer-vision in retail loss-prevention, and large-scale forecasting where Databricks or Azure ML are the right answer out-of-the-box. We have also walked away from engagements where the diagnostic concluded the customer was not yet data-ready and recommended a 9-month foundations programme before any AI use-case. That credibility line is the entire reason this advisory motion works."
  },
  {
    question: 'Eight weeks is fast. Our internal stakeholder map has 40+ executives. Can a real diagnostic actually be done in that window?',
    answer:
      'Yes — but only because the pod is senior. Week 1 is intense: partner-led interviews with the top 12 executives, structured workshops with the next 30, a data-room audit, and an existing-system inventory review. Weeks 2–3 are evidence triangulation; weeks 4–5 are the value-pool model; weeks 6–7 are the roadmap; week 8 is the board readout. The optional on-site executive working-group cadence — a weekly half-day with the CXO sponsor on your premises for the full 8 weeks — is the structural reason we can compress this without losing depth.'
  },
  {
    question: 'How do you handle the regulator dimension?',
    answer:
      'The Governance lens maps each workstream against CBUAE / SAMA / DFSA / FSRA / ADGM AI-governance and model-risk expectations, plus EU AI Act high-risk articles where the entity operates in the EU. The output is not a separate compliance addendum — it is woven into each workstream\'s sequencing and resourcing. For regulated buyers, this dimension is what separates a roadmap that survives the audit committee from one that does not.'
  },
  {
    question: 'What does the pod look like?',
    answer:
      'Five named people — 1 partner, 1 strategy director, 1 principal engineer, 1 data architect, 1 governance / regulatory lead. CVs are published to you before contract signature; you can swap any pod member during the diligence phase if you have a reservation. Every one of the five has shipped production AI at enterprise scale — not just advised on it. This is the section our customers screenshot and email to their CEO.'
  },
  {
    question: 'How much does it cost?',
    answer:
      'Fixed-fee, banded by entity size and scope: single OpCo, multi-OpCo group, federal entity, or sovereign-holding portfolio. The fee is published to you on the first call — no scoping phase to be quoted separately. The fee is a fraction of the comparable USD 4–8 million Big-4 / strategy-house quote, and the only commercial commitment that follows the sprint is, optionally, a separately-scoped delivery contract for the workstreams the board prioritises.'
  },
  {
    question: 'What happens after the board sign-off?',
    answer:
      "Two paths, customer choice. Path A: Brocode picks up one or more workstreams as a separately-scoped delivery engagement — typically MLOps platform, sovereign LLM appliance, or document-intelligence build. Path B: the customer takes the roadmap to a different system integrator or builds in-house with the named owners we identified. We commit on the record to support Path B with a hand-over briefing to the chosen partner. 62 % of our strategy customers move at least one workstream into delivery within 90 days of board sign-off."
  },
  {
    question: 'Can we co-lead the sprint with our internal strategy office?',
    answer:
      'Yes. Many of our best engagements are co-led with the customer\'s corporate-strategy function. The Brocode pod brings AI-platform depth, the regulator-mapped governance library, and the build-side reference data; the internal team brings the institutional context, the executive relationships, and the budget cycle knowledge. We do not displace internal strategy — we plug in beside it for the AI-specific scope.'
  }
];

const triggers = [
  {
    title: 'Board AI committee ask',
    body: 'The board has formed an AI committee or the CEO has been asked in a pre-read: "what is our AI position?" The executive needs the plan before the next quarterly meeting.'
  },
  {
    title: 'New CEO mandate',
    body: 'A new CEO has been onboarded and AI is one of three explicit transformation pillars. The CEO wants the AI roadmap signed off within the first 100 days.'
  },
  {
    title: 'Regulator inquiry',
    body: 'CBUAE / SAMA / DFSA has published an AI-governance expectation and the entity\'s model inventory is not in shape. The audit committee wants a roadmap that withstands supervisory review.'
  },
  {
    title: 'Big-4 second opinion',
    body: 'The strategy house has quoted USD 4–8 million for a 16-week engagement with a junior-heavy team that does not build anything afterwards. The CXO wants a partner-led second opinion before signing.'
  }
];

const lenses = [
  {
    name: 'Value',
    body: 'Use-case economics built bottom-up from your P&L lines. Each candidate use-case carries an NPV / payback / risk triple — challengeable by your CFO. Sequenced by dependency and data-readiness, not by hype.',
    example: 'Example finding: 23 candidate use-cases compressed to 9 prioritised, USD 180M 3-year NPV envelope, 6 movable into delivery within 90 days.'
  },
  {
    name: 'Data',
    body: 'Foundations & lineage. Where the data sits, how it flows, who owns it, what the gaps are. Mapped to the use-case priorities so foundational work is sequenced as a precondition, not a wishlist.',
    example: 'Example finding: customer 360 model blocked by a 14-month CDP rebuild — re-sequenced behind two lower-data-bar use-cases that fund the rebuild.'
  },
  {
    name: 'Tech',
    body: 'Platform readiness. MLOps maturity, infrastructure posture, hyperscaler relationships, and the LLM / sovereign-AI questions. The lens that surfaces the foundational platform workstream that every roadmap needs.',
    example: 'Example finding: notebook-only production estate prioritises an MLOps platform as the foundational workstream — see MLOps & AI Infrastructure.'
  },
  {
    name: 'People',
    body: 'Skills & operating model. AI talent depth, partner ecosystem, vendor stance, FinOps maturity for GPU spend. The lens that decides whether the roadmap is realistic at all.',
    example: 'Example finding: 3 senior ML engineers vs 18-month roadmap — central platform + federated product teams operating model, partner staffing for the first 9 months.'
  },
  {
    name: 'Governance',
    body: 'Regulator & risk. Model-risk frameworks, EU AI Act mapping, internal audit posture, board reporting cadence. The lens that determines whether the strategy survives the audit committee.',
    example: 'Example finding: SAMA model-risk update lands mid-roadmap — pre-emptive governance workstream sequenced ahead of credit-decisioning rollout.'
  }
];

const sprintWeeks = [
  {
    label: 'Weeks 1–2',
    title: 'Diagnose',
    description:
      'Partner-led interviews with the top 12 executives. Structured workshops with the next 30. Data-room audit. Existing-system inventory. 5-lens diagnostic scoring — Value, Data, Tech, People, Governance — with named, observable evidence per score.',
    metric: '12 partner-led interviews · 30 workshops'
  },
  {
    label: 'Weeks 3–5',
    title: 'Value pools',
    description:
      'Bottom-up value-pool model from your P&L lines. NPV / payback / risk per candidate use-case. Build-or-buy decision per item, supported by our reference library of 60+ builds. Sequencing by dependency and data-readiness.',
    metric: 'Bottom-up NPV envelope · build-or-buy per use-case'
  },
  {
    label: 'Weeks 6–7',
    title: 'Roadmap',
    description:
      'Sequenced 24-month roadmap. Workstream by workstream. Named owner per workstream — Brocode engineer or architect, CV-visible. Regulator-mapped governance design woven into every workstream. Capex envelope, talent plan, operating model.',
    metric: '24-month roadmap · named owners · regulator-mapped'
  },
  {
    label: 'Week 8',
    title: 'Board sign-off',
    description:
      'Board-grade deck. Partner-led readout. Defensible against audit-committee challenge. Optional: Brocode partner attends the board meeting as an independent voice for the readout, then steps back.',
    metric: 'Board deck signed · readout delivered'
  }
];

const podRoles = [
  {
    role: 'Partner',
    body: 'Engagement-level accountability. Present every week. Attends the board readout. CV-visible. Background typically combines 15+ years across strategy consulting, platform engineering, and regulator-side experience.'
  },
  {
    role: 'Strategy Director',
    body: 'Owns the diagnostic and the value-pool model. Runs the executive interviews and the workshops. Authors the deliverable. Typically a former strategy-house principal with sector depth in banking, telco, or sovereign holdings.'
  },
  {
    role: 'Principal Engineer',
    body: 'Owns the Tech lens. Authors the platform reference architecture. Translates "AI roadmap" language into specific platform, infrastructure, and model choices. Has shipped production AI at enterprise scale.'
  },
  {
    role: 'Data Architect',
    body: 'Owns the Data lens. Maps your data estate, lineage, ownership, and gaps. Sequences foundational data work into the roadmap. Background in tier-1 bank or telco data engineering.'
  },
  {
    role: 'Governance Lead',
    body: 'Owns the Governance lens. Maps CBUAE / SAMA / DFSA / FSRA / EU AI Act expectations against each workstream. Authors the board-deck governance section. Background typically combines regulator-side and model-risk-management experience.'
  }
];

const cases = [
  {
    sector: 'UAE tier-1 bank',
    body: 'Full strategy sprint delivered in 9 weeks (one-week extension agreed with the customer). 14 prioritised use-cases, USD 180M 3-year NPV envelope. 6 use-cases moved to delivery within 90 days of board sign-off. CBUAE-aligned governance pack delivered alongside the roadmap.',
    metric: 'USD 180M NPV envelope · 6 in delivery in 90 days'
  },
  {
    sector: 'Regional telco — operating model',
    body: 'AI operating model redesign. Central platform + federated product teams. Central FinOps function reduced GPU spend 31 % within 6 months of adoption. Three product squads stood up against the prioritised use-cases.',
    metric: 'GPU spend −31 % · 3 product squads stood up'
  },
  {
    sector: 'Sovereign holding portfolio',
    body: 'Portfolio-level AI maturity diagnostic across 8 operating companies. Cross-portfolio prioritisation defensible at the board IT-committee level. 4 OpCos identified as not data-ready, 9-month foundations programme proposed — and accepted.',
    metric: '8 OpCo diagnostic · 4 deferred to foundations'
  }
];

const buyNotBuild = [
  'Mass-market customer email scoring — Salesforce Einstein / HubSpot are mature; we have recommended customers buy.',
  'Standard computer-vision in retail loss-prevention — incumbents like Everseen and Veesion are the right answer.',
  'Industry-standard demand forecasting — Databricks AutoML or Azure ML often beats a custom build at scale.',
  'Generic call-centre WFM analytics — NICE and Verint cover the standard reporting layer well.',
  'CRM-side sales-stage scoring — your CRM vendor\'s native scoring lands the use-case within weeks.'
];

const proofItems = [
  { value: '8 weeks', label: 'Fixed-fee strategy sprint' },
  { value: '5 lenses', label: 'Value · Data · Tech · People · Governance' },
  { value: '62 %', label: 'Clients move a workstream into delivery in 90 days' },
  { value: '0 juniors', label: 'Senior pod, no pyramid, named CVs' }
];

export default function AiConsultingPage() {
  return (
    <>
      {/* HERO — 5-lens radar + 8-week timeline */}
      <section className="relative isolate overflow-hidden bg-[#F4EFE3] text-[#0E2A4E]">
        <Backdrop />
        <div className="container-site relative z-10 pb-20 pt-28 md:pb-28 md:pt-36">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AI Consulting & Strategy' }
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5E2C]">
                  AI strategy sprint · 8 weeks · partner-led
                </p>
                <h1 className="mt-5 text-balance text-display-xl text-[#0E2A4E]">
                  A board-grade AI strategy in 8 weeks. With a builder behind every page.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#0E2A4E]/85">
                  A partner-led pod — 1 partner, 1 strategy director, 1 principal engineer, 1 data architect, 1
                  governance lead. Five-lens diagnostic. Bottom-up value-pool model. Regulator-mapped roadmap.
                  Named owners on every workstream. CVs in the room before contract.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton
                    href="#contact-form"
                    variant="primary"
                    size="lg"
                    className="bg-[#0E2A4E] text-white hover:bg-[#173E6E]"
                    event="quote_open"
                  >
                    Book the partner framing call
                  </MagneticButton>
                  <a
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
                    data-event="whatsapp_hero"
                    data-page={SLUG}
                  >
                    <WhatsAppIcon /> Confidential WhatsApp
                  </a>
                </div>
                <div className="mt-7 rounded-2xl border border-[#0E2A4E]/15 bg-white/60 p-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5E2C]">
                    Named partner. Named director. CVs in the room before contract.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <LensRadar />
                <ol className="mt-6 grid grid-cols-2 gap-3 text-center md:grid-cols-4">
                  {[
                    { w: 'Week 1–2', l: 'Diagnose' },
                    { w: 'Week 3–5', l: 'Value pools' },
                    { w: 'Week 6–7', l: 'Roadmap' },
                    { w: 'Week 8', l: 'Board sign-off' }
                  ].map((s) => (
                    <li key={s.l} className="rounded-xl bg-white/70 px-3 py-3 backdrop-blur-sm">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#8B5E2C]">{s.w}</p>
                      <p className="mt-1 text-sm font-semibold text-[#0E2A4E]">{s.l}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* The trigger this page is built for */}
      <section className="bg-[#F4EFE3] py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The trigger this page is built for"
            title="One of four executive moments. Pick the one that matches today."
            description="The conversations that bring CXOs to this page tend to land in one of four shapes. The 8-week sprint is built for each of them — the entry workshop is shaped by which trigger applies."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {triggers.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-[#0E2A4E]/10 bg-white p-7">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#8B5E2C]">Trigger 0{i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-[#0E2A4E]">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The 5-lens diagnostic */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The 5-lens diagnostic"
            title="One framework. Five lenses. Named, observable evidence per score."
            description="A 1–5 maturity grid per lens, scored against observable evidence drawn from your data room, your platform reality, your interviews, and your governance committee minutes — not a survey."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-5">
            {lenses.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-[#0E2A4E]/10 bg-[#F4EFE3] p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0E2A4E] text-base font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-[#0E2A4E]">{l.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700">{l.body}</p>
                  <p className="mt-5 rounded-lg bg-white p-3 text-xs italic text-ink-600">{l.example}</p>
                  {/* Cross-link */}
                  {l.name === 'Tech' && (
                    <p className="mt-3 text-xs">
                      Cross-link:{' '}
                      <Link href="/services/mlops-ai-infrastructure" className="font-semibold text-[#0E2A4E] underline">
                        MLOps platform
                      </Link>{' '}
                      ·{' '}
                      <Link href="/services/self-hosted-llm-infrastructure" className="font-semibold text-[#0E2A4E] underline">
                        Sovereign LLM
                      </Link>
                    </p>
                  )}
                  {l.name === 'Data' && (
                    <p className="mt-3 text-xs">
                      Cross-link:{' '}
                      <Link href="/services/data-engineering-for-ai" className="font-semibold text-[#0E2A4E] underline">
                        Data Engineering for AI
                      </Link>
                    </p>
                  )}
                  {l.name === 'Governance' && (
                    <p className="mt-3 text-xs">
                      Cross-link:{' '}
                      <Link href="/services/responsible-ai-governance" className="font-semibold text-[#0E2A4E] underline">
                        Responsible AI & Governance
                      </Link>
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8-week sprint */}
      <section className="bg-[#0E2A4E] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The 8-week sprint"
            title="Week by week. Partner present every week. On-site optional."
            description="The cadence that compresses a 16-week Big-4 engagement into 8 weeks without losing depth — because the pod is senior all the way through."
          />
          <Reveal>
            <ScrollTimeline steps={sprintWeeks} className="mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Pod */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The pod that works on your engagement"
            title="Five named people. CVs published before contract."
            description="The section our customers screenshot and email to their CEO. You see the pod before you sign — and you can swap any member during diligence if you have a reservation."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {podRoles.map((p, i) => (
              <Reveal key={p.role} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-[#0E2A4E]/10 bg-[#F4EFE3] p-7">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#8B5E2C]">Pod role</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#0E2A4E]">{p.role}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={podRoles.length * 0.06}>
              <div className="flex h-full flex-col rounded-2xl bg-[#0E2A4E] p-7 text-white">
                <p className="text-xs font-mono uppercase tracking-widest text-[#E2B679]">Visibility</p>
                <h3 className="mt-2 text-xl font-semibold">CVs before contract.</h3>
                <p className="mt-3 flex-grow text-sm text-white/75">
                  Every named pod member has a published CV with prior delivered engagements. No anonymous
                  "consultants will be assigned." If a pod member is on extended leave we say so and substitute
                  before the sprint starts.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#F4EFE3] py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Side-by-side"
            title="Brocode vs McKinsey, Big-4, sovereign advisory, and boutique strategy."
            description="What each option actually delivers on the things a CXO sponsor cares about — partner presence, builder coupling, regulator depth, and commercial certainty."
          />
          <Reveal>
            <div className="mt-12">
              <CompareTable
                brandLabel="Brocode"
                competitors={[
                  'McKinsey / BCG / Bain',
                  'Big-4 (Accenture / Deloitte / KPMG)',
                  'Boutique AI strategy',
                  'In-house strategy office'
                ]}
                rows={compareRows}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Build-or-buy honesty */}
      <section className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-[#8B5E2C]">Build-or-buy honesty</p>
              <h2 className="mt-3 text-display-md text-[#0E2A4E]">
                Use-cases we have recommended customers buy, not build.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                A credibility marker. Brocode is a builder. The credibility of the strategy depends on the strategy
                being prepared to point customers at someone else when buying is the right answer. Here are five
                current examples — re-checked quarterly.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {buyNotBuild.map((b, i) => (
                  <li key={b} className="flex items-start gap-4 rounded-2xl border border-[#0E2A4E]/10 bg-[#F4EFE3] p-5">
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-[#0E2A4E] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-700">{b}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Three objections */}
      <section className="bg-[#0E2A4E] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The three objections we hear in every framing call"
            title="What CXO sponsors push on first."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                q: 'We already paid Big-4 for a strategy nobody could execute. Why is this different?',
                a: 'Partner-led, no juniors, named builder behind every workstream, fixed-fee 8 weeks. Big-4 delivers excellent thinking that hands off into a delivery vacuum. We deliver a roadmap with a delivery team standing behind every page.'
              },
              {
                q: 'Brocode is a builder — do all recommendations land on a Brocode build?',
                a: 'No. Explicit build-or-buy decision per use-case, supported by our 60+-build reference library and a published list of use-cases we have recommended customers buy. We have walked away from data-not-ready engagements on the record.'
              },
              {
                q: 'Eight weeks is fast. Our stakeholder map alone has 40+ executives.',
                a: 'Partner-led week-1 intensity: 12 executive interviews, 30 workshops, data-room audit, system inventory. Optional on-site CXO working group every week. The compression is possible because the pod is senior all the way through.'
              }
            ].map((o, i) => (
              <Reveal key={o.q} delay={i * 0.07}>
                <GlassCard tone="dark" padding="md" className="h-full">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#E2B679]">Objection {i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{o.q}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">{o.a}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Anonymised references"
            title="Three sprints. Each available in full under NDA."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.sector} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl bg-[#F4EFE3] p-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#8B5E2C]">{c.sector}</p>
                  <p className="mt-5 flex-grow text-sm leading-relaxed text-ink-700">{c.body}</p>
                  <p className="mt-6 rounded-full bg-[#0E2A4E] px-4 py-2 text-center text-sm font-semibold text-[#E2B679]">
                    {c.metric}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink-500">
            Sector-specific cases on{' '}
            <Link href="/industries/banking-financial-services" className="underline">
              Banking & Financial Services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Lead-magnet */}
      <section className="bg-[#F4EFE3] py-24">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The CXO's AI Strategy Playbook — Method, Sample Board Deck, 5-Lens Grid"
            description="A 40-page CXO playbook covering the 8-week sprint method, plus the actual 5-lens scoring spreadsheet (Excel) and a redacted 24-slide sample board deck from a real bank engagement."
            contents={[
              'The 8-week sprint method — week-by-week deliverable list',
              'The 5-lens diagnostic — maturity grid with observable evidence per score',
              'Value-pool model — bottom-up NPV / payback / risk methodology',
              'Sample redacted board deck (24 slides) from a real bank engagement',
              'The fixed-fee 8-week sprint contract template — banded by entity size'
            ]}
            filePath="/downloads/cxo-ai-playbook.pdf"
            ctaLabel="Email me the playbook"
            thumbnail="/images/services/ai-consulting-strategy.jpg"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="What CXOs and board sponsors ask first."
              description="The eight questions our partner answers in nearly every framing call. Direct, on the record, no marketing softening."
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote form — sprint scoping, not technical scoping */}
      <section id="contact-form" className="bg-[#F4EFE3] py-24">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-[#8B5E2C]">Partner framing call</p>
              <h2 className="mt-3 text-display-lg text-[#0E2A4E]">
                Forty-five minutes with our partner. Confidential. No slideware.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                Seven sprint-scoping fields — trigger, maturity, sponsor, entity scope, regulators, target board date,
                on-site cadence. We arrive at the call with a pod proposal and a draft sprint sequencing for your
                sector.
              </p>
              <div className="mt-8 rounded-2xl border border-[#0E2A4E]/10 bg-white p-6">
                <p className="text-sm font-semibold text-[#0E2A4E]">Or skip the form.</p>
                <p className="mt-2 text-sm text-ink-700">
                  Message our partner directly on WhatsApp for a confidential conversation.
                </p>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_inline"
                  data-page={SLUG}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  <WhatsAppIcon /> Message on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-[#0E2A4E]/10 bg-white p-8 shadow-card md:p-10">
                <QuoteForm config={formConfig} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            label: 'MLOps & AI Infrastructure',
            href: '/services/mlops-ai-infrastructure',
            description: 'The platform layer almost every roadmap lands.'
          },
          {
            label: 'Self-hosted LLM Infrastructure',
            href: '/services/self-hosted-llm-infrastructure',
            description: 'Sovereign GenAI workstreams for federal / banking buyers.'
          },
          {
            label: 'Data Engineering for AI',
            href: '/services/data-engineering-for-ai',
            description: 'The Data-lens foundational workstream.'
          },
          {
            label: 'Responsible AI & Governance',
            href: '/services/responsible-ai-governance',
            description: 'Directly downstream of the Governance lens.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'The dominant industry for the strategy sprint.'
          }
        ]}
      />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Book the framing call" />

      <Script
        id="ld-service-consulting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Consulting & Strategy Sprint',
            serviceType: '8-week partner-led AI strategy and roadmap engagement',
            provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
            areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Oman', 'Kuwait'],
            description:
              'A partner-led 8-week AI strategy sprint delivering a board-grade 24-month roadmap — five-lens diagnostic, bottom-up value-pool model, regulator-mapped workstreams, named senior pod, with a builder behind every page.',
            url: `${SITE.url}/services/${SLUG}`
          })
        }}
      />
      <Script
        id="ld-faq-consulting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer }
            }))
          })
        }}
      />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
    </svg>
  );
}

function Backdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-30"
      viewBox="0 0 1200 800"
      aria-hidden
    >
      <defs>
        <pattern id="paper-grain" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="0.7" fill="#0E2A4E" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#paper-grain)" />
    </svg>
  );
}
