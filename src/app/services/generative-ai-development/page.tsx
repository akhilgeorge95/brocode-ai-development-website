import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { CompareTable } from '@/components/ui/CompareTable';
import { FAQ } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';

const SLUG = 'generative-ai-development';
const WHATSAPP_MESSAGE =
  "Hi Brocode - I sponsor the GenAI taskforce at [organisation]. We have prototypes but no production. Could we set up a confidential principal-to-principal call in the next 10 days?";

export const metadata: Metadata = {
  title: 'Enterprise Generative AI Consulting UAE | Pilot to Production in 120 Days | Brocode',
  description:
    'Move your GenAI taskforce from prototype to production behind your firewall. Sovereign infrastructure, your data, your guardrails, three boardable use cases live in 120 days under fixed fee.',
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: 'Enterprise GenAI to Production - Brocode Solutions',
    description:
      'A 12-week production path for board-sponsored GenAI taskforces in GCC banks, federal entities, and conglomerates. Sovereign deployment, risk-committee-grade governance.',
    url: `https://www.brocode.ae/services/${SLUG}`,
    images: [{ url: `/images/services/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise GenAI to Production - Brocode',
    description: 'From 23 pilots to 6 production deployments. The 12-week path.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a confidential 60-minute GenAI taskforce review with our principal',
  subtitle:
    'A Brocode principal reads your taskforce brief, replies under NDA, and books a confidential call within five business days. No salesperson on the call.',
  ctaLabel: 'Request the taskforce review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'sponsorRole',
      label: 'Sponsor\'s role',
      type: 'select',
      required: true,
      options: ['CEO', 'CIO', 'Chief Innovation Officer', 'CDO', 'CRO', 'Other C-suite']
    },
    {
      name: 'pilotsCompleted',
      label: 'Number of GenAI pilots completed to date',
      type: 'select',
      options: ['0-2', '3-10', '11-25', '>25']
    },
    {
      name: 'useCase',
      label: 'Top-of-mind use case',
      type: 'multiselect',
      options: [
        'Internal copilot',
        'Customer-facing assistant',
        'RAG over corpora',
        'Agentic workflows',
        'Code copilot',
        'Contact-centre',
        'Risk and compliance',
        'Other'
      ]
    },
    {
      name: 'residency',
      label: 'Data-residency constraint',
      type: 'select',
      options: [
        'Must stay on-prem',
        'Sovereign cloud only',
        'UAE / KSA hyperscaler region acceptable',
        'No constraint'
      ]
    },
    {
      name: 'budget',
      label: 'Approved budget envelope for the next 12 months (USD)',
      type: 'select',
      options: ['<500k', '500k-2M', '2M-10M', '>10M', 'Not yet allocated']
    },
    {
      name: 'deadline',
      label: 'Board-level deadline',
      type: 'text',
      placeholder: 'e.g. Q4 2026 - three boardable use cases live'
    }
  ]
};

const productionPath = [
  {
    label: 'Weeks 1-4',
    title: 'Discovery and design',
    description:
      'Principal-to-principal scoping with the board GenAI committee. We agree the three use cases, the sovereignty model, and the governance posture. Output: a signed design book and risk-committee pre-read.',
    metric: 'Gate G0 - design book approved by sponsor'
  },
  {
    label: 'Weeks 5-8',
    title: 'Hardened build',
    description:
      'Pod builds the retrieval, generation, and orchestration stack inside the sovereign perimeter. Evaluation harnesses, guardrails, and red-team tests run alongside feature development.',
    metric: 'Gate G1 - eval baseline beats internal hurdle rate'
  },
  {
    label: 'Weeks 9-12',
    title: 'Regulator-ready evidence',
    description:
      'Risk committee evidence pack assembled: red-team results, hallucination dashboards, model-deprecation exit plan, NIST AI RMF and UAE AI Charter alignment. Internal audit walkthrough before sign-off.',
    metric: 'Gate G2 - risk-committee sign-off in writing'
  },
  {
    label: 'Week 13 onward',
    title: 'Production sign-off and run',
    description:
      'Three use cases live behind the firewall. Run-phase SLA covers eval drift, model deprecation triggers, and a defined principal contact for any board-level question.',
    metric: 'Three boardable use cases live; quarterly board update template attached'
  }
];

const objections = [
  {
    objection:
      'OpenAI Enterprise already has our data in a private tenant. Why should we duplicate infrastructure with you?',
    response:
      'Because a tenant is not a capability. The OpenAI Enterprise tenant is a model endpoint - it does not give you a retrieval layer, an eval pipeline, a Khaleeji safety classifier, a model-choice strategy, or a sovereign-deployment posture. Brocode delivers the capability layer that wraps that tenant (and any other model provider) and turns it into something your risk committee will sign. Many of our clients run both: OpenAI for global English workloads, the Brocode stack for sovereign and Arabic workloads.',
    proof: 'Proof: anonymised tier-1 UAE bank reference - an internal RAG assistant over 4.2 million policy and product documents, sitting in front of Azure OpenAI UAE North for the English flows and a self-hosted Llama 3.3 70B for the Arabic flows. 87% first-contact resolution lift in the corporate-banking back-office.'
  },
  {
    objection:
      'The Big-3 consultancies will give us a CxO-flavoured roadmap. Can a regional engineering firm actually own the build through to production?',
    response:
      'Yes - and we will commit to it on a fixed-fee, fixed-scope contract that the strategy houses will not. The 12-Week Production Path is the same methodology we have run for tier-1 GCC banks, federal entities, and KSA conglomerates. Engineering depth shows up in the eval harness, the red-team test pack, the model-choice abstraction layer, and the named senior engineers who are on the contract and the standup. The strategy deck arrives as a by-product of the build, not as the deliverable.',
    proof: 'Proof: anonymised KSA conglomerate reference - a finance-and-procurement copilot saving 18 FTE-equivalent across shared services within seven months, with the original 12-week build paid as a fixed fee and the run-phase SLA on a separate per-quarter pricing band.'
  },
  {
    objection:
      'Our risk committee will not approve any deployment without documented red-team results, hallucination rates per use case, and an exit strategy if the underlying model is deprecated.',
    response:
      'All three are in the standard governance pack. Red-team results follow a documented adversarial test plan (prompt injection, jailbreak, Khaleeji and English safety classifiers). Hallucination rates per use case are measured on a domain-specific golden set using Giskard and DeepEval in CI, refreshed monthly. The model-deprecation exit strategy is the model-choice abstraction layer: the application code does not depend on a specific model provider, so any provider can be swapped on a documented playbook with no application-layer rewrite.',
    proof: 'Proof: anonymised federal entity reference - a sovereign LLM gateway serving 14,000 employees, fully on Khazna, with a board-approved governance pack mapped to NIST AI RMF and the UAE AI Charter. Two model swaps (one base model deprecated, one upgraded) executed inside the run-phase SLA with zero application rewrite.'
  }
];

const compareRows = [
  {
    feature: 'Deliverable shape',
    brocode: 'Working capability, fixed fee, 12 weeks',
    competitors: ['Tenant access', 'Strategy roadmap + advisory burn', 'Integration glue'],
    note: 'Three honestly different shapes.'
  },
  {
    feature: 'Sovereign / on-prem deployment',
    brocode: 'Khazna, G42, Mobily, ADGM, DIFC patterns',
    competitors: ['Microsoft / OpenAI tenancy', 'Cloud-agnostic but offshore-billed', 'Hyperscaler typical']
  },
  {
    feature: 'Risk-committee evidence pack',
    brocode: 'Red-team, hallucination, exit, NIST AI RMF / UAE AI Charter',
    competitors: ['Provider documentation only', 'Available, charged separately', false]
  },
  {
    feature: 'Khaleeji + English safety classifier',
    brocode: 'Brocode fine-tune + Llama Guard 3',
    competitors: [false, false, false]
  },
  {
    feature: 'Model-choice abstraction (swap providers)',
    brocode: 'LiteLLM + Brocode policy plane',
    competitors: ['One provider', 'Cloud-bound', 'Provider lock-in typical']
  },
  {
    feature: 'Eval harness in CI',
    brocode: 'Giskard + DeepEval, golden sets refreshed monthly',
    competitors: [false, 'On request', false]
  },
  {
    feature: 'Named senior engineers on contract',
    brocode: 'Yes - CVs at proposal',
    competitors: ['N/A', 'Partner + offshore subcontractors', 'Rotating body-shop']
  },
  {
    feature: 'UAE-billed in AED',
    brocode: true,
    competitors: [false, 'Often US-billed', 'Often offshore-billed']
  },
  {
    feature: 'Time to first production use case',
    brocode: '12 weeks fixed',
    competitors: ['Immediate tenant; capability layer separate', '6-month diagnostic typical', 'Months, scope-variable']
  }
];

const useCases = [
  { name: 'Back-office RAG assistant', outcome: 'Internal staff find policy answers with citations; FCR lift typical 60-90%.' },
  { name: 'Customer assistant (cited)', outcome: 'Public-facing assistant with cited sources and refusal handling. WhatsApp and web.' },
  { name: 'Finance and procurement copilot', outcome: 'Shared services productivity - FTE-equivalent savings 10-20 typical.' },
  { name: 'Contract analysis', outcome: 'Clause extraction and flagging against standard templates - federal procurement reference.' },
  { name: 'Risk and compliance', outcome: 'Regulatory horizon scanning + obligation mapping with cited circular paragraphs.' },
  { name: 'Code copilot - sovereign', outcome: 'Self-hosted code assistant for restricted-source codebases - no code leaves the perimeter.' },
  { name: 'Contact-centre agent assist', outcome: 'Khaleeji-aware draft suggestions with the bilingual NLP stack underneath.' },
  { name: 'Knowledge graph + RAG', outcome: 'Hybrid retrieval over a curated KG for complex multi-hop questions.' }
];

const faqItems = [
  ...objections.map((o) => ({ question: o.objection, answer: `${o.response}\n\n${o.proof}` })),
  {
    question: 'Where exactly does the sovereign-deployment workload run?',
    answer:
      'Default options: a Kubernetes-on-bare-metal reference appliance hosted at Khazna, G42 Cloud, Mobily Tier IV, or on-premise inside the client perimeter. Alternative deployments inside ADGM or DIFC free zones for legal-entity isolation. For workloads where a UAE-region hyperscaler is acceptable, Azure UAE North or Bedrock Bahrain are wired through the same LLM gateway. The deployment pattern is selected during week one of the discovery phase based on the residency decision tree in the design book.'
  },
  {
    question: 'How do you evaluate the system before each release?',
    answer:
      'Every use case has a golden dataset of 200-500 examples drawn from real domain conversations, scored automatically on factuality, relevance, tone, policy compliance, and citation correctness. The harness runs in CI on every change; the eval pack also runs nightly against the production traffic sample. Regression on any axis above a documented threshold blocks deployment. The harness is documented in the engagement\'s evaluation manual and signed off by the model-risk function before go-live.'
  },
  {
    question: 'What happens if the underlying model is deprecated by the provider?',
    answer:
      'The application code does not depend on a specific model. LiteLLM and the Brocode policy plane abstract the model choice; the application sees a stable interface. When a provider deprecates a model, the run-phase SLA covers the swap: we re-evaluate the next-best model against the golden sets, run the regression suite, and promote the new model with no application-layer rewrite. Two such swaps have been executed for a single federal client inside the run-phase SLA without incident.'
  },
  {
    question: 'What is the exit strategy if we decide to in-source after the engagement?',
    answer:
      'Everything is yours on creation: the retrieval layer, the eval harness, the guardrails, the policy plane, and all configuration. The MSA assigns it. The MSA also covers a 12-week handover programme with shadow operation by your team, runbooks, and on-call rotations. There is no licence retainer, no per-call royalty, and no proprietary component that locks the system to Brocode after handover.'
  },
  {
    question: 'How do you handle Arabic and Khaleeji-specific risk in the safety stack?',
    answer:
      'We ship a Brocode fine-tuned Khaleeji safety classifier alongside Llama Guard 3 and Lakera Guard. Red-team plans include Arabic-script prompt injection, dialect-specific jailbreaks, and Arabic-English code-switch attacks. PII detection covers Emirates ID, Saudi National ID, GCC IBANs, and Arabic-script personal names. The safety pack is reviewed quarterly against new attack categories observed in the wider GenAI ecosystem.'
  }
];

const proofItems = [
  { value: '74%', label: 'GCC GenAI pilots that stall in UAT - benchmark across 23 pilots' },
  { value: '87%', label: 'First-contact resolution lift - UAE bank back-office RAG' },
  { value: '14,000', label: 'Employees on the federal sovereign LLM gateway' },
  { value: '18', label: 'FTE-equivalent saved - KSA conglomerate finance copilot' }
];

const relatedItems = [
  {
    label: 'LLM Fine-Tuning',
    href: '/services/llm-fine-tuning',
    description: 'For taskforces that want their own tuned model, not just RAG.'
  },
  {
    label: 'Self-Hosted LLM Infrastructure',
    href: '/services/self-hosted-llm-infrastructure',
    description: 'The sovereign-appliance audience: Khazna, G42, Mobily, on-prem.'
  },
  {
    label: 'AI Agents & Agentic Workflows',
    href: '/services/ai-agents-agentic-workflows',
    description: 'The natural progression from RAG to action against systems of record.'
  },
  {
    label: 'Responsible AI & Governance',
    href: '/services/responsible-ai-governance',
    description: 'The risk-committee narrative and the regulator-grade evidence pack.'
  },
  {
    label: 'Banking & Financial Services',
    href: '/industries/banking-financial-services',
    description: 'The primary industry hub for GenAI taskforce engagements.'
  }
];

export default function GenerativeAiDevelopmentPage() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Generative AI Development',
    serviceType: 'Enterprise GenAI capability build with sovereign deployment and risk-committee governance',
    provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
    areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Egypt', 'Pakistan'],
    description:
      'A 12-week production path that takes a board-sponsored GenAI taskforce from prototype to three boardable use cases live behind the firewall, with sovereign deployment and a risk-committee-grade governance pack.',
    url: `https://www.brocode.ae/services/${SLUG}`
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <Script id="service-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="faq-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO - boardroom after-hours */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#080d18] via-[#0c1322] to-[#0a0f1c] text-white">
        {/* Warm desk-lamp pool */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute right-1/4 top-1/3 h-[40rem] w-[40rem] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(254, 240, 138, 0.15), rgba(245, 158, 11, 0.05), transparent)' }}
          />
          <div
            className="absolute left-1/4 bottom-0 h-[30rem] w-[30rem] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(254, 243, 199, 0.06), transparent)' }}
          />
        </div>

        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Generative AI Development' }
            ]}
            variant="dark"
          />
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4 text-amber-200/70">Enterprise GenAI taskforce</p>
              <h1 className="text-balance text-display-2xl">
                From prototype to <span className="text-amber-200">production behind the firewall.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Sovereign infrastructure. Your data. Your guardrails. Three boardable use cases live in 120 days under a fixed-fee delivery model. Built for the GenAI taskforce that has shipped 18 prototypes and zero production wins.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" event="quote_open">
                  Book the principal review
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                  data-event="whatsapp_hero"
                  data-page={SLUG}
                >
                  WhatsApp the principal
                </a>
              </div>
            </div>

            {/* Hero visual - laptop on boardroom table */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Boardroom table reflection */}
                <div className="absolute -inset-x-8 -bottom-8 h-32 bg-gradient-to-t from-amber-200/5 to-transparent blur-2xl" />
                {/* Laptop chassis */}
                <div className="relative rounded-t-2xl border-x border-t border-white/10 bg-gradient-to-b from-[#1a2235] to-[#0d1424] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                  {/* Terminal */}
                  <div className="rounded-lg border border-white/5 bg-[#0a0f1c] p-5 font-mono text-xs">
                    <div className="flex items-center gap-1.5 border-b border-white/5 pb-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                      <span className="ml-3 text-[10px] text-white/40">brocode-genai - principal terminal</span>
                    </div>
                    <div className="mt-4 space-y-2 text-white/85">
                      <p><span className="text-amber-200">$</span> query rag.govregs --lang ar</p>
                      <p className="pl-2 text-white/60">- retrieving from cbuae-circulars (4,238 docs)</p>
                      <p className="pl-2 text-white/60">- bge-m3 + bm25 hybrid, k=12, rrf</p>
                      <p className="pl-2 text-white/60">- reranking via cohere-rerank-v3</p>
                      <p className="mt-2 text-amber-100">{'>'} ما هي متطلبات الإبلاغ عن المخاطر التشغيلية؟</p>
                      <p className="mt-2 text-emerald-300">- 3 cited sources resolved -</p>
                    </div>
                  </div>

                  {/* Citation side panel */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      { src: 'CBUAE-OP-RISK-2024-03', para: '4.2.1' },
                      { src: 'CBUAE-OP-RISK-2024-03', para: '4.3.7' },
                      { src: 'ADGM-FSRA-PRU-7', para: '11.4' }
                    ].map((c) => (
                      <div key={c.src + c.para} className="rounded-md border border-amber-200/20 bg-amber-200/5 p-2 text-[10px]">
                        <p className="font-semibold text-amber-200">{c.src}</p>
                        <p className="text-white/60">para {c.para}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Laptop hinge */}
                <div className="relative h-2 rounded-b-3xl bg-gradient-to-b from-[#0d1424] via-[#080d18] to-[#050810]" />
                <p className="mt-6 text-center text-xs text-white/40">
                  RAG over Arabic regulatory circulars - cited sources resolved in real time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* Why most pilots stall - seven failure modes */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why most GenAI pilots stall in UAT"
            title="Seven failure modes account for nearly every GCC pilot that does not cross the line."
            description="Each one is named in the lead-magnet report with the corresponding counter and the typical owner inside a taskforce."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { n: '01', f: 'Data residency', c: 'Sovereign deployment patterns at Khazna, G42, Mobily, or on-prem.' },
              { n: '02', f: 'Hallucination', c: 'Eval harness with domain golden sets, Giskard / DeepEval in CI.' },
              { n: '03', f: 'Integration', c: 'Adapters to core banking, ERP, and ITSM stacks (SAP, Oracle, T24).' },
              { n: '04', f: 'Evaluation', c: 'Documented validation per use case, signed before promotion.' },
              { n: '05', f: 'Governance', c: 'Risk-committee evidence pack aligned to NIST AI RMF and UAE AI Charter.' },
              { n: '06', f: 'Change management', c: 'Frontline adoption tracking and progressive rollout protocol.' },
              { n: '07', f: 'Run-cost', c: 'TCO model per use case, model-choice strategy with crossover thresholds.' }
            ].map((g) => (
              <Reveal key={g.f}>
                <article className="h-full rounded-2xl border border-ink-100 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">Failure {g.n}</p>
                  <h3 className="mt-2 text-base font-semibold text-ink-900">{g.f}</h3>
                  <p className="mt-3 text-sm text-ink-700">{g.c}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12-Week Production Path */}
      <section className="bg-ink-900 py-22 text-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="The 12-Week Production Path"
            title="Four phases. Three gates. Fixed fee, fixed scope."
            description="The default operating rhythm. The strategy houses run open-ended advisory; we run a contract with named exits."
            variant="dark"
          />
          <div className="mt-14">
            <ScrollTimeline steps={productionPath} />
          </div>
        </div>
      </section>

      {/* Reference architecture - bento */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference architecture"
            title="Five layers. Each model-agnostic. Each portable across sovereign estates."
            description="The same architecture has shipped at a tier-1 UAE bank, a federal entity, and a KSA conglomerate. The model choice changes per use case; the architecture does not."
          />
          <BentoGrid className="mt-12">
            <BentoCell span="lg" variant="dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Retrieval</p>
              <h3 className="mt-3 text-2xl font-semibold">LlamaIndex + LangGraph + Qdrant / Weaviate</h3>
              <p className="mt-4 text-white/70">
                bge-m3 and Cohere Embed v4 for multilingual (Arabic + English) embedding. Hybrid BM25 + dense with reciprocal-rank fusion. Arabic-tuned chunking for legal and regulatory corpora.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="brand">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Generation</p>
              <h3 className="mt-3 text-xl font-semibold">Mistral-Large, Llama 3.3 70B, Qwen 2.5, DeepSeek V3</h3>
              <p className="mt-3 text-white/85">Self-hosted. Plus Claude Sonnet 4.5 / GPT-5 via Azure OpenAI UAE North or Bedrock Bahrain for hyperscaler-resident flows.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Gateway</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">LiteLLM + Brocode policy plane</h3>
              <p className="mt-3 text-sm text-ink-700">One gateway. Model abstraction. Tenant isolation. Rate-limiting. Cost reporting per use case.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Safety</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Llama Guard 3 + Khaleeji classifier + Lakera Guard</h3>
              <p className="mt-3 text-sm text-ink-700">Prompt-injection detection, dialect-aware safety, PII redaction with Microsoft Presidio + Emirati ID detectors.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Evaluation</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Giskard + DeepEval in CI</h3>
              <p className="mt-3 text-sm text-ink-700">Domain golden sets per use case. Regression suite. Documented hallucination rates.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Sovereign deployment</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">K8s on bare metal - Khazna / G42 / Mobily</h3>
              <p className="mt-3 text-sm text-ink-700">Customer-managed keys, air-gapped retrieval. Alternative ADGM / DIFC zone patterns available.</p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Use case catalogue */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case catalogue"
            title="Eight boardable use cases. Pick three for the first 120 days."
            description="The catalogue we walk through in the principal review. Each has a documented outcome benchmark drawn from real engagements."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <Reveal key={u.name}>
                <article className="h-full rounded-2xl border border-ink-100 bg-white p-6">
                  <h3 className="text-base font-semibold text-ink-900">{u.name}</h3>
                  <p className="mt-3 text-sm text-ink-700">{u.outcome}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign deployment options */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Sovereign deployment options"
            title="The residency decision tree at week one of discovery."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { d: 'Khazna Data Centres', f: 'UAE-resident Tier IV, multi-tenant or dedicated. Default for federal-entity workloads.' },
              { d: 'G42 Cloud', f: 'Sovereign cloud with H100-class GPU bare-metal tenancies. Khaleeji-relevant ecosystem partner.' },
              { d: 'Mobily Tier IV', f: 'For KSA-resident workloads under SAMA scope. Customer-managed keys default.' },
              { d: 'Azure UAE North', f: 'For hyperscaler-resident workloads where UAE region is acceptable. Azure OpenAI tenancy in-region.' },
              { d: 'AWS Bedrock Bahrain', f: 'For Bedrock-resident workloads where AWS UAE / KSA / Bahrain coverage is acceptable.' },
              { d: 'On-premise inside client perimeter', f: 'For workloads that cannot leave the client perimeter. K8s on bare metal, customer-managed everything.' }
            ].map((opt) => (
              <Reveal key={opt.d}>
                <GlassCard className="h-full">
                  <h3 className="text-lg font-semibold text-ink-900">{opt.d}</h3>
                  <p className="mt-3 text-sm text-ink-700">{opt.f}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="bg-ink-900 py-22 text-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="What sponsors push back on"
            title="Three objections. Three honest answers."
            variant="dark"
          />
          <div className="mt-12 space-y-6">
            {objections.map((o, i) => (
              <Reveal key={i}>
                <article className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur md:grid-cols-12 md:p-9">
                  <div className="md:col-span-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Objection {String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-3 text-lg font-semibold italic text-white">&ldquo;{o.objection}&rdquo;</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-white/80">{o.response}</p>
                    <p className="mt-4 rounded-xl border-l-2 border-amber-300 bg-white/5 px-4 py-3 text-sm text-white/80">{o.proof}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image break + case studies */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={`/images/services/${SLUG}.jpg`}
            alt="A senior principal reviewing a sovereign GenAI deployment console with cited Arabic regulatory sources"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-transparent" />
        </div>
        <div className="container-site relative z-10 py-22 text-white">
          <div className="max-w-2xl">
            <p className="eyebrow text-amber-200/70">Case studies</p>
            <h2 className="mt-3 text-display-md">Three references the board can phone before signature.</h2>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">Tier-1 UAE bank</p>
                <p className="mt-2 text-white/90">Internal RAG assistant over 4.2 million policy and product documents. 87% first-contact resolution lift in the corporate-banking back-office.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">Federal entity</p>
                <p className="mt-2 text-white/90">Sovereign LLM gateway serving 14,000 employees, fully on Khazna, with a board-approved governance pack mapped to NIST AI RMF and the UAE AI Charter.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">KSA conglomerate</p>
                <p className="mt-2 text-white/90">Finance-and-procurement copilot saving 18 FTE-equivalent across shared services within seven months. Fixed-fee build, run-phase SLA on quarterly pricing.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="OpenAI Enterprise tenant, McKinsey QuantumBlack / BCG X, or offshore integration shop?"
            description="Three honestly different shapes. Many enterprises run all three in parallel. Brocode is the build-through-to-production middle layer."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['OpenAI / Microsoft Copilot tenant', 'McKinsey QuantumBlack / BCG X', 'Offshore integration shop']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="From 23 Pilots to 6 Production GenAI Deployments - What Actually Crosses the Risk-Committee Line in GCC Enterprises"
            description="A 44-page board-readable report with a one-page boardroom summary. The seven failure modes, the seven counters, and a hallucination-rate table by use-case archetype."
            contents={[
              'Weeks 1-4: discovery and design',
              'Weeks 5-8: hardened build',
              'Weeks 9-12: regulator-ready evidence',
              'Gates and exit criteria',
              'Reference team composition and cost band',
              'Headline: 74% of GCC GenAI pilots stall in UAT - the seven failure modes named and countered'
            ]}
            filePath="/downloads/pilot-to-production-tracker.pdf"
            ctaLabel="Email me the 44-page report"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions from board GenAI committees</p>
            <h2 className="mt-3 text-display-md text-ink-900">Frequently asked.</h2>
            <p className="mt-4 text-ink-600">
              Every answer below comes from the standard governance pack we share with the risk-committee pre-read.
            </p>
            <Link href="/contact" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand" data-event="secondary_cta_click" data-page={SLUG}>
              Ask a different question
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="contact-form" className="relative isolate overflow-hidden bg-gradient-to-b from-[#080d18] to-[#0c1322] py-22 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 top-0 h-[40rem] w-[40rem] rounded-full bg-amber-200/5 blur-3xl" />
        </div>
        <div className="container-site relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-amber-200/70">Principal-to-principal review</p>
            <h2 className="mt-3 text-display-lg">A 60-minute confidential call. Under NDA from message one.</h2>
            <p className="mt-5 max-w-lg text-white/80">
              Tell us the sponsor, the residency posture, and the board deadline. A Brocode principal reads it, replies under NDA, and books the call within five business days.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/75">
              <p><strong className="text-white">Direct WhatsApp:</strong> +971 50 761 2213</p>
              <p><strong className="text-white">Email:</strong> hello@brocode.ae</p>
              <p><strong className="text-white">HQ:</strong> Al Maryah Island, ADGM, Abu Dhabi</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 text-ink-900 md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Principal review" primaryHref="#contact-form" />
    </>
  );
}
