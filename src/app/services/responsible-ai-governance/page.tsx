import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'responsible-ai-governance';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I lead [risk / compliance / governance] at [organisation]. We need to demonstrate AI governance to [the UAE Central Bank / DoH / SAMA / EU AI Act / our audit committee] by [date]. Could we book a 90-minute maturity review with your head of AI risk?";

export const metadata: Metadata = {
  title: 'Responsible AI Governance — Regulator-Grade Evidence and Operating Model',
  description:
    'AI inventory, risk-tiering, bias and explainability evidence, ISO/IEC 42001 conformity, EU AI Act and UAE AI Charter alignment — stood up across your AI estate in 120 days with the risk team owning it at handover.',
  alternates: { canonical: 'https://www.brocode.ae/services/responsible-ai-governance' },
  openGraph: {
    title: 'Responsible AI Governance — Brocode Solutions',
    description:
      'The AI Risk File as a load-bearing artefact: model card, datasheet, bias test pack, explainability, controls mapping to ISO 42001, NIST, EU AI Act, UAE Charter, SAMA, SR 11-7.',
    url: 'https://www.brocode.ae/services/responsible-ai-governance',
    images: ['/images/services/responsible-ai-governance.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Responsible AI Governance — Brocode',
    description: 'Regulator-grade AI evidence packs, operating model, and rehearsal — across the GCC.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Request a 90-minute AI Governance Maturity Review',
  subtitle:
    'A Brocode head of AI risk — with named regulator-side or second-line background — reviews your inventory, your deadlines and your existing tooling, and replies within one business day.',
  ctaLabel: 'Request the maturity review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'regulator',
      label: 'Sector / regulator',
      type: 'select',
      required: true,
      options: [
        'UAE Central Bank',
        'SAMA',
        'DFSA',
        'ADGM',
        'DoH Abu Dhabi',
        'DHA',
        'MOHAP',
        'EU AI Act exposure',
        'Other'
      ]
    },
    {
      name: 'inventorySize',
      label: 'Approximate number of AI systems in production or pilot',
      type: 'select',
      required: true,
      options: ['1–5', '6–15', '16–50', '50+', 'Not yet inventoried']
    },
    {
      name: 'highestRisk',
      label: 'Highest-risk use case in scope',
      type: 'multiselect',
      options: [
        'Credit decisioning',
        'Fraud',
        'AML transaction monitoring',
        'Claims',
        'Clinical diagnostic or triage',
        'HR',
        'GenAI customer assistant',
        'Surveillance',
        'Other'
      ]
    },
    {
      name: 'frameworks',
      label: 'Frameworks you need to demonstrate against',
      type: 'multiselect',
      options: ['ISO/IEC 42001', 'NIST AI RMF', 'EU AI Act', 'UAE AI Charter', 'SAMA', 'SR 11-7', 'PRA SS1/23', 'Dubai AI Ethics']
    },
    {
      name: 'existingTooling',
      label: 'Existing tooling already in place',
      type: 'multiselect',
      options: ['Credo AI', 'Fiddler', 'IBM watsonx.governance', 'Holistic AI', 'Collibra', 'Atlan', 'None']
    },
    { name: 'deadline', label: 'Mandated regulator or board deadline', type: 'date' }
  ]
};

const riskFileTabs: { label: string; body: string }[] = [
  {
    label: 'Model card',
    body: 'Owner, version, intended use, scope, training data summary, evaluation results, known limitations, sign-offs. The card travels with the model through MLOps; updates are tracked events.'
  },
  {
    label: 'Datasheet for the dataset',
    body: 'Datasheets for Datasets format. Collection, composition, labelling, consent, sensitive attributes, refresh cadence. Critical for bias and EU AI Act technical documentation.'
  },
  {
    label: 'Bias test pack',
    body: 'Demographic parity, equal opportunity, equalised odds, calibration by group. Generated with Fairlearn, Aequitas, and IBM AI Fairness 360. Slices relevant to UAE / KSA demographics.'
  },
  {
    label: 'Explainability suite',
    body: 'SHAP, LIME, Captum integrated gradients, Anchors for tabular; Grad-CAM for vision. Choice driven by audience: model risk needs SHAP, customer notice needs Anchors.'
  },
  {
    label: 'Adversarial robustness',
    body: 'ART — Adversarial Robustness Toolbox. Evasion, poisoning, model extraction. Quantified, not narrated. Specific attention to GenAI prompt injection and RAG provenance.'
  },
  {
    label: 'Controls mapping',
    body: 'One Risk File. Five-to-eight frameworks evidenced. Map once, reuse everywhere. The mapping appendix is regenerated from a single source of truth, so framework drift surfaces immediately.'
  }
];

const controlsMatrix: { control: string; iso: string; nist: string; euAct: string; uaeCharter: string; sama: string; sr117: string }[] = [
  {
    control: 'AI inventory',
    iso: '42001 §8.1',
    nist: 'GOVERN 1.5',
    euAct: 'Annex IV (1)',
    uaeCharter: 'Principle 1',
    sama: 'AI Annex 3.1',
    sr117: '§II.A'
  },
  {
    control: 'Risk tiering',
    iso: '42001 §6.1',
    nist: 'MAP 1.1',
    euAct: 'Art. 6',
    uaeCharter: 'Principle 4',
    sama: 'AI Annex 4.2',
    sr117: '§II.B'
  },
  {
    control: 'Bias testing',
    iso: '42001 §8.4',
    nist: 'MEASURE 2.11',
    euAct: 'Art. 10(2)(f)',
    uaeCharter: 'Principle 5',
    sama: 'AI Annex 5.1',
    sr117: '§IV.B'
  },
  {
    control: 'Explainability',
    iso: '42001 §8.5',
    nist: 'MEASURE 2.9',
    euAct: 'Art. 13',
    uaeCharter: 'Principle 6',
    sama: 'AI Annex 5.2',
    sr117: '§V.A'
  },
  {
    control: 'Human oversight',
    iso: '42001 §8.6',
    nist: 'MANAGE 1.3',
    euAct: 'Art. 14',
    uaeCharter: 'Principle 7',
    sama: 'AI Annex 6.1',
    sr117: '§III.B'
  },
  {
    control: 'Robustness & security',
    iso: '42001 §8.7',
    nist: 'MANAGE 4.2',
    euAct: 'Art. 15',
    uaeCharter: 'Principle 8',
    sama: 'AI Annex 7.1',
    sr117: '§V.C'
  },
  {
    control: 'Post-market monitoring',
    iso: '42001 §9.1',
    nist: 'MEASURE 4.3',
    euAct: 'Art. 17',
    uaeCharter: 'Principle 9',
    sama: 'AI Annex 8.1',
    sr117: '§VI.A'
  },
  {
    control: 'Incident reporting',
    iso: '42001 §10.2',
    nist: 'MANAGE 4.3',
    euAct: 'Art. 62',
    uaeCharter: 'Principle 10',
    sama: 'AI Annex 9.1',
    sr117: '§VI.B'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Named senior advisers with regulator-side backgrounds',
    brocode: 'Ex-Central Bank examiner, ex-DoH inspector, ex-FCA AI policy lead',
    competitors: ['Partner-plus-pyramid', 'Product not service', 'Product not service', 'Single new hire']
  },
  {
    feature: 'Produces the regulator-grade evidence narrative',
    brocode: true,
    competitors: [false, false, false, 'Eventually']
  },
  {
    feature: 'Plugs into existing governance SaaS',
    brocode: 'Credo AI / Fiddler / watsonx / Holistic AI',
    competitors: ['Slides separately', 'Their platform only', 'Their platform only', 'Builds from scratch']
  },
  {
    feature: 'Half-day Regulator Rehearsal',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'Former examiner stress-tests the evidence pack.'
  },
  {
    feature: 'Independence vs implementation separation',
    brocode: 'Type-II assurance posture',
    competitors: ['Same firm sells implementation', 'Vendor', 'Vendor', 'No separation']
  },
  {
    feature: 'Operating model and three-lines RACI',
    brocode: true,
    competitors: ['Templates', 'Not delivered', 'Not delivered', 'Eventually']
  },
  {
    feature: 'Time from regulator request to evidence pack',
    brocode: '6 days median (n=18)',
    competitors: ['Weeks', 'Tool not pack', 'Tool not pack', '11 weeks typical']
  }
];

const timelineSteps = [
  {
    label: 'Week 0–3',
    title: 'Inventory and risk-tiering',
    description:
      'AI system inventory pulled from MLOps registry plus stakeholder interviews. Risk tiering on observable attributes (autonomy, reversibility, scale of impact). Output: a tiered register signed by first and second line.',
    metric: 'Inventory closed'
  },
  {
    label: 'Week 4–10',
    title: 'AI Risk Files on high-risk systems',
    description:
      'Model card, datasheet, bias test pack, explainability suite, adversarial robustness summary, controls mapping. Produced for every high-risk system. Each file maps to five or more frameworks simultaneously.',
    metric: 'Files defensible'
  },
  {
    label: 'Week 11–14',
    title: 'Governance Operating Model',
    description:
      'Three-lines-of-defence RACI. Committee charters: AI Risk Committee, AI Ethics Board. Escalation thresholds. Inventory tool stood up in Atlan or Collibra, integrated with Credo AI or Fiddler where the customer already owns those.',
    metric: 'Function live'
  },
  {
    label: 'Week 15–17',
    title: 'Regulator Rehearsal and handover',
    description:
      'Half-day rehearsal with former examiner and former federal IT auditor stress-testing the evidence pack until gaps close. Then handover to the risk team — Brocode steps back into advisory.',
    metric: '120-day stand-up'
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'We already run SR 11-7 / IFRS 9 model risk. What does an AI-specific programme actually add?',
    answer:
      'Existing MRM understands credit models in PD/LGD/EAD form: stable, parametric, validated annually. AI/ML adds data lineage you cannot inspect by hand, bias dimensions that PD/LGD never had to cover, drift on a weekly cadence not annual, GenAI hallucination as a new failure mode, and explainability beyond a regression coefficient. We extend the existing MRM function rather than replace it. In banks where MRM is mature, the engagement focuses on AI-specific extensions: bias test packs, GenAI guardrails, the AI Risk File template, and the model-card-from-MLOps automation.'
  },
  {
    question: 'Why pay you instead of buying Credo AI, Fiddler, IBM watsonx.governance or Holistic AI?',
    answer:
      'Those platforms automate parts of the evidence layer — model cards, fairness metrics, drift monitoring — and they do that well. None of them produce the regulator-grade narrative, the operating model, the framework mapping, or the rehearsal. We integrate with whichever platform the customer owns and provide the human governance work the platforms cannot. We are platform-agnostic; the SaaS vendors are not.'
  },
  {
    question: 'Won\'t the regulator trust the Big-4 name more on the cover page?',
    answer:
      'In the GCC the regulator increasingly cares about the substance of the file rather than the firm on the cover. Big-4 AI governance practices deliver predominantly slide-ware and outsource the technical bias testing — often to us. The Risk File goes in under whichever name the customer chooses. Three of our engagements have run under the customer name with no consultancy on the cover page; the regulator accepted the pack on first submission in all three.'
  },
  {
    question: 'How do you handle independence vs implementation conflict?',
    answer:
      'Brocode signs as a Type-II AI assurance provider under ISO/IEC 42006 where applicable. We explicitly avoid selling implementation in the same engagement that biases the assurance opinion. When customers want both, we declare and ring-fence: separate pods, separate workstreams, separate partners. When the customer wants strictly assurance only, we will refuse implementation work for that AI system for a defined cooling-off period.'
  },
  {
    question: 'How does this work for GenAI specifically?',
    answer:
      'GenAI adds three governance dimensions to the standard Risk File. Hallucination measurement: a structured eval harness with reference answers and judged responses, run on a release cadence. Prompt injection and jailbreak testing: red-team prompts tracked over time with a regression suite. RAG provenance: every generation linked to retrieved documents with citation accuracy measured. We use Llama Guard 3, NeMo Guardrails and Lakera Guard as the runtime layer, and an internal eval harness for the offline measurement.'
  },
  {
    question: 'What triggers retraining or revalidation?',
    answer:
      'Defined in the operating model. Quantitative triggers: drift over threshold, fairness drift over threshold, accuracy decay over threshold, post-deployment incident classification. Qualitative triggers: regulatory change, customer complaint pattern, material change in upstream data. Triggers fire alerts to first line; second line decides whether retraining, recalibration, or decommissioning is the answer. The decision row is captured in the AI Risk Committee minutes.'
  },
  {
    question: 'How do you handle ISO/IEC 42001 certification specifically?',
    answer:
      'We deliver the implementation, the internal audit pre-readiness, and the surveillance audit support. The external certification audit is done by an accredited certification body (BSI, DNV, TÜV Süd) — we do not certify ourselves to preserve the independence posture. To date our pre-audit pass rate at customers is high; we publish the exact number in the Specimen AI Risk File lead magnet, regenerated quarterly.'
  }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Responsible AI Governance',
  name: 'Responsible AI Governance — Regulator-Grade Evidence and Operating Model',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain', 'United Kingdom', 'European Union'],
  description:
    'An operating AI governance function — inventory, risk-tiering, bias and explainability evidence, ISO/IEC 42001 conformity, EU AI Act and UAE AI Charter alignment — stood up in 120 days. Independence-preserving Type-II assurance posture.',
  url: 'https://www.brocode.ae/services/responsible-ai-governance'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer }
  }))
};

export default function ResponsibleAIGovernancePage() {
  return (
    <>
      <Script id="ld-service-gov" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="ld-faq-gov" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO — evidence binder, regulator-grade */}
      <section className="relative isolate overflow-hidden bg-[#0d1322] text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/services/responsible-ai-governance.jpg"
            alt="Governance committee reviewing an AI risk file with framework watermarks for ISO 42001, NIST, EU AI Act and UAE AI Charter"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1322]/80 via-[#0d1322]/90 to-[#0d1322]" />
        </div>

        {/* Framework watermark grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-3 gap-12 p-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/[0.06] md:grid-cols-5 md:gap-20">
            {[
              'ISO/IEC 42001',
              'NIST AI RMF',
              'EU AI ACT',
              'UAE AI CHARTER',
              'SAMA',
              'SR 11-7',
              'PRA SS1/23',
              'ISO 23894',
              'CSA AI CONTROLS',
              'DUBAI AI ETHICS'
            ].map((f) => (
              <span key={f} className="self-center text-center">{f}</span>
            ))}
          </div>
        </div>

        <div className="container-site relative z-10 pt-22 pb-20 md:pt-28 md:pb-24">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Responsible AI Governance' }
            ]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-amber-300/70">AI Risk · Model Risk · Assurance</p>
              <h1 className="text-balance text-display-xl">
                Regulator-grade AI governance, stood up across your AI estate in 120 days.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/75">
                An operating governance function — inventory, risk-tiering, AI Risk Files, three-lines operating model
                — aligned to ISO/IEC 42001, NIST AI RMF, the EU AI Act, the UAE AI Charter, SAMA and SR 11-7. The risk
                team owns it at handover.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Request a 90-minute maturity review
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={SLUG}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Message the Head of AI Risk
                </a>
              </div>
            </div>

            {/* Risk File binder */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-400/20 bg-[#0a0f1c]/80 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-amber-400/20 pb-3">
                  <p className="font-serif text-sm tracking-wide text-amber-300/90">AI Risk File</p>
                  <span className="rounded-full border border-amber-400/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300/80">
                    Regulator-grade
                  </span>
                </div>
                <p className="mt-3 font-serif text-xl text-white">System #14 — Credit Decisioning</p>
                <p className="font-mono text-[11px] text-white/50">Tier: High · Owner: 1LoD · Version 3.2</p>

                <ul className="mt-5 divide-y divide-white/5 rounded-lg border border-white/5 bg-white/[0.02]">
                  {[
                    'Model card',
                    'Datasheet for the dataset',
                    'Bias test pack (Fairlearn · Aequitas · AIF360)',
                    'Explainability (SHAP · Anchors · Grad-CAM)',
                    'Adversarial robustness (ART)',
                    'Controls mapping appendix'
                  ].map((t, i) => (
                    <li
                      key={t}
                      className="flex items-center justify-between px-3 py-2 font-mono text-[11px] text-white/80"
                    >
                      <span>{String(i + 1).padStart(2, '0')} · {t}</span>
                      <span className="text-emerald-300/80">signed</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-amber-400/20 pt-3 font-mono text-[10px] uppercase tracking-wider text-amber-300/70">
                  <span>Maps to · ISO 42001 · NIST · EU AI Act</span>
                  <span>· UAE Charter · SR 11-7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white py-12">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '41', label: 'Systems risk-tiered at one UAE tier-1 bank' },
              { value: '0', label: 'Major non-conformities at ISO 42001 pre-audit' },
              { value: '6 days', label: 'Median request-to-evidence-pack (n=18)' },
              { value: '120 days', label: 'Stand-up to handover' }
            ]}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why your existing model risk framework is not enough"
            title="SR 11-7 was written for credit models. Not for a GenAI assistant or a deep CV system."
            description="Existing model risk management understands credit models in PD/LGD/EAD form. AI/ML adds data lineage you cannot inspect by hand, bias dimensions PD/LGD never had to cover, drift on a weekly cadence, GenAI hallucination as a new failure mode, and explainability beyond a regression coefficient. We extend your MRM function rather than replace it."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: 'Inventory pulled from MLOps',
                body: 'Not a manual spreadsheet that decays. The inventory updates when a new model is registered, and tiering is generated from observable attributes.'
              },
              {
                title: 'Bias and explainability built in',
                body: 'Fairlearn, Aequitas, AIF360 for bias. SHAP, LIME, Captum, Anchors, Grad-CAM for explanation. The evidence is generated by the model owner, reviewed by second line, available to internal audit on demand.'
              },
              {
                title: 'Drift and hallucination as first-class signals',
                body: 'Continuous assurance pulls signals from monitoring — drift, fairness drift, hallucination, refusal rate, override rate — into the quarterly committee pack. The conversation moves to substance fast.'
              }
            ].map((p) => (
              <Reveal key={p.title}>
                <div className="rounded-2xl border border-ink-100 bg-white p-7">
                  <h3 className="text-lg font-semibold text-ink-900">{p.title}</h3>
                  <p className="mt-3 text-ink-700">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE AI RISK FILE — load-bearing artefact */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="The load-bearing artefact"
            title="The AI Risk File. Six tabs. Five frameworks evidenced at once."
            description="Every AI system in scope receives a defensible evidence pack. Map once, satisfy ISO/IEC 42001, NIST AI RMF, EU AI Act Annex IV, the UAE AI Charter, SAMA, SR 11-7 and Dubai AI Ethics — from a single source of truth."
          />
          <BentoGrid className="mt-12">
            {riskFileTabs.map((t, i) => (
              <BentoCell key={t.label} span="md" variant={i % 2 === 0 ? 'light' : 'glass'}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-brand">{`Tab ${String(i + 1).padStart(2, '0')}`}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">{t.label}</h3>
                <p className="mt-3 text-sm text-ink-700">{t.body}</p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* CONTROLS MAPPING GRID — special section */}
      <section className="bg-[#0d1322] py-20 text-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Controls mapping done once, reused everywhere"
            title="One control. Mapped to six frameworks simultaneously."
            description="The mapping appendix is regenerated from a single source of truth. Framework drift surfaces immediately. Eight illustrative controls below; the full matrix covers forty-seven control objectives across ISO 42001, NIST, EU AI Act, UAE Charter, SAMA, SR 11-7, PRA SS1/23 and Dubai AI Ethics."
            variant="dark"
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-[#0a0f1c]">
            <table className="w-full min-w-[760px] font-mono text-[11px]">
              <thead>
                <tr className="bg-white/[0.04] text-left uppercase tracking-wider text-white/50">
                  <th className="px-4 py-3">Control</th>
                  <th className="px-4 py-3 text-amber-300">ISO 42001</th>
                  <th className="px-4 py-3">NIST AI RMF</th>
                  <th className="px-4 py-3">EU AI Act</th>
                  <th className="px-4 py-3">UAE Charter</th>
                  <th className="px-4 py-3">SAMA</th>
                  <th className="px-4 py-3">SR 11-7</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {controlsMatrix.map((row) => (
                  <tr key={row.control} className="hover:bg-white/[0.02]">
                    <td className="px-4 py-3 font-sans text-sm font-semibold text-white">{row.control}</td>
                    <td className="px-4 py-3 text-amber-200/90">{row.iso}</td>
                    <td className="px-4 py-3 text-white/70">{row.nist}</td>
                    <td className="px-4 py-3 text-white/70">{row.euAct}</td>
                    <td className="px-4 py-3 text-white/70">{row.uaeCharter}</td>
                    <td className="px-4 py-3 text-white/70">{row.sama}</td>
                    <td className="px-4 py-3 text-white/70">{row.sr117}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-mono text-[11px] text-white/40">
            * Mapping is illustrative and refreshed quarterly. Full matrix shipped under NDA with engagement scoping.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="The 120-day stand-up"
            title="Inventory → tiering → Risk Files → operating model → handover."
            description="Named senior pod in the SoW: a Brocode head of AI risk, a former regulator-side adviser, two senior AI risk engineers, and a delivery lead. Roles and CVs are visible before contract signature."
          />
          <div className="mt-12 max-w-3xl">
            <ScrollTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      {/* REGULATOR REHEARSAL */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="The Regulator Rehearsal"
                title="A former examiner sits across the table and stress-tests the evidence pack."
                description="Before any real regulator engagement, a Brocode panel — including a former central-bank examiner and a former UAE federal IT auditor — runs a half-day rehearsal. The risk team answers the questions that will actually be asked. Gaps close before the regulator sees them."
              />
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-brand">Named senior advisers</p>
                <ul className="mt-4 space-y-3 text-sm text-ink-700">
                  <li className="flex gap-3"><span className="font-mono text-ink-400">01</span>Ex-Central Bank examiner (GCC)</li>
                  <li className="flex gap-3"><span className="font-mono text-ink-400">02</span>Ex-DoH inspector</li>
                  <li className="flex gap-3"><span className="font-mono text-ink-400">03</span>Ex-FCA AI policy lead</li>
                  <li className="flex gap-3"><span className="font-mono text-ink-400">04</span>Fellow of the Royal Statistical Society</li>
                  <li className="flex gap-3"><span className="font-mono text-ink-400">05</span>ISO/IEC 42001 lead implementers</li>
                </ul>
                <p className="mt-5 text-xs text-ink-500">CVs and current credentials shared under NDA before SoW.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES — three objections answered */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Objections answered with evidence"
            title="Three things every CRO asks. Three production references."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">SR 11-7 already covers us</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">UAE tier-1 bank, 41 systems risk-tiered.</h3>
                <p className="mt-3 text-ink-700">
                  Full AI Risk Files produced for 9 high-risk systems. ISO/IEC 42001 readiness assessment closed with
                  zero major non-conformities. End-to-end in 134 days. SR 11-7 framework extended, not replaced.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">We could buy a SaaS</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">UAE healthcare provider, clinical AI triage.</h3>
                <p className="mt-3 text-ink-700">
                  Risk-assessed and explainability-documented to DoH satisfaction. Evidence pack accepted on first
                  submission. Integrated with the customer Holistic AI deployment rather than competing with it.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Big-4 is safer on cover</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">GCC sovereign entity, 12 internal AI systems.</h3>
                <p className="mt-3 text-ink-700">
                  UAE AI Charter alignment assessment. Public-facing transparency notice produced. Pack went under the
                  customer name, not ours. Accepted on first submission to the parent ministry.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Big-4, governance SaaS, single internal hire — honestly."
            description="Big-4 ships slides and outsources the technical work. Governance SaaS automates parts of the evidence layer but cannot produce the narrative, the operating model or the rehearsal. A single internal hire takes 6–9 months and then needs a team. We deliver in 120 days and transfer the operating model so the internal hire inherits a working function."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['Big-4 risk practice', 'Credo AI / Fiddler', 'IBM watsonx.governance', 'Single internal hire']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="bg-white py-20">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="Specimen Regulator-Grade AI Risk File"
            description="A sixty-four page redacted PDF based on a real engagement — model card, datasheet, bias test pack, explainability suite, robustness, and the controls mapping appendix to ISO/IEC 42001, EU AI Act, UAE AI Charter and NIST AI RMF. Plus a one-pager: 21 questions a UAE or KSA regulator will ask about your AI in 2026."
            filePath="/downloads/specimen-ai-risk-file.pdf"
            ctaLabel="Email me the specimen Risk File"
            contents={[
              'Specimen model card (redacted)',
              'Datasheet for the dataset (Datasheets for Datasets format)',
              'Bias test pack — demographic parity, equal opportunity, equalised odds, calibration',
              'Explainability suite — SHAP, LIME, Captum, Anchors, Grad-CAM',
              'Adversarial robustness summary — ART evasion + poisoning + extraction',
              'Controls mapping — ISO 42001, NIST AI RMF, EU AI Act, UAE Charter',
              '21 questions a UAE / KSA regulator will ask about your AI in 2026'
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Frequently asked"
            title="What CROs and Heads of Model Risk actually want to know."
          />
          <div className="mt-10 max-w-3xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="contact-form" className="bg-white py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Talk to the Head of AI Risk</p>
              <h2 className="text-display-md text-ink-900">
                A 90-minute maturity review. Senior adviser on the call, not a sales lead.
              </h2>
              <p className="mt-4 text-ink-600">
                Tell us the regulator letter date, the inventory size, and the frameworks you need to evidence. We will
                tell you which parts of the standard 120-day stand-up apply, where your existing tooling already does
                the work, and where the operating-model gaps will surface in the next audit.
              </p>
              <p className="mt-6 rounded-xl border border-ink-100 bg-surface-muted p-5 text-sm text-ink-700">
                The maturity review is independent. If you also need implementation we will declare the conflict and
                ring-fence the workstreams; if you want pure assurance we will refuse the implementation work for that
                AI system.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
                <QuoteForm config={formConfig} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            label: 'AI Consulting & Strategy',
            href: '/services/ai-consulting-strategy',
            description: 'Many governance conversations start as strategy conversations.'
          },
          {
            label: 'MLOps & AI Infrastructure',
            href: '/services/mlops-ai-infrastructure',
            description: 'Drift monitoring, retraining triggers and evidence pipelines live here.'
          },
          {
            label: 'Generative AI Development',
            href: '/services/generative-ai-development',
            description: 'GenAI-specific governance — hallucination, prompt injection, RAG provenance.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'The dominant industry. SR 11-7 plus CBUAE plus SAMA model risk extensions.'
          },
          {
            label: 'Healthcare',
            href: '/industries/healthcare',
            description: 'DoH, MOHAP, DHA clinical AI governance and approvals.'
          }
        ]}
      />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Book maturity review"
        primaryHref="#contact-form"
      />
    </>
  );
}
