import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Reveal } from '@/components/Reveal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'quality-assurance';
const PAGE_URL = '/technology/quality-assurance';

export const metadata: Metadata = {
  title: 'Quality Assurance for AI — Eval, Bias, Red-Team, Drift | Brocode',
  description:
    'The full test suite we apply to every AI system we deliver for a client — eval harness, regression, bias and fairness (Fairlearn + AIF360), drift (Evidently), LLM red-teaming (garak), adversarial robustness (ART), guardrails (NeMo + Llama Guard 3). Audit-evidence bundle mapped to CBUAE, FSRA, NCA and ISO 42001.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '2026 Audit-Evidence Bundle for AI — Brocode',
    description:
      'Seven test categories. One audit-evidence bundle. Mapped to CBUAE, FSRA, NCA and ISO 42001.',
    url: PAGE_URL,
    type: 'article',
    images: ['/images/technology/quality-assurance.jpg']
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Book a 60-minute audit-evidence review',
  subtitle:
    'A senior Brocode AI Risk & QA lead walks the sample bundle on screen with your second or third line of defence.',
  ctaLabel: 'Book a technical review',
  whatsappMessage:
    "Hi Brocode — our risk function at [organisation] needs to see your AI evaluation, bias, red-teaming and drift evidence ahead of a [CBUAE / FSRA / NCA / internal-audit] submission. I'd like to book the 60-minute audit-evidence review and receive the sample bundle.",
  fields: [
    {
      name: 'lineOfDefence',
      label: 'Your line of defence',
      type: 'select',
      options: ['First', 'Second', 'Third', 'Independent reviewer'],
      required: true
    },
    {
      name: 'regulator',
      label: 'Regulator overlay',
      type: 'multiselect',
      options: ['CBUAE', 'FSRA-ADGM', 'DFSA-DIFC', 'SAMA', 'NCA-KSA', 'DHA', 'SEHA', 'Internal-audit only']
    },
    {
      name: 'modelType',
      label: 'Model type in scope',
      type: 'multiselect',
      options: ['Classical ML', 'Deep learning', 'LLM in RAG', 'LLM agent', 'Computer vision', 'Forecasting']
    },
    {
      name: 'evidenceNeed',
      label: 'What you most need evidence for',
      type: 'multiselect',
      options: ['Model evaluation', 'Bias and fairness', 'Red-teaming', 'Drift monitoring', 'Adversarial robustness', 'Lineage and reproducibility']
    },
    { name: 'auditDeadline', label: 'Audit submission deadline', type: 'date' },
    {
      name: 'existingTooling',
      label: 'Existing tooling in place',
      type: 'text',
      placeholder: 'MLflow / SageMaker Model Monitor / Azure ML / homegrown / none'
    }
  ]
};

type Category = {
  id: string;
  name: string;
  frameworks: string[];
  thresholds: string;
  description: string;
};

const CATEGORIES: Category[] = [
  {
    id: 'eval',
    name: 'Model-evaluation harness',
    frameworks: ['lm-evaluation-harness', 'OpenAI Evals', 'DeepEval', 'Promptfoo', 'MLflow'],
    thresholds: 'CI-blocking on accuracy, F1, calibration; LLM faithfulness and answer-relevance via RAGAS',
    description: 'An in-house extension of lm-evaluation-harness for classical ML and a custom LLM eval framework on top of OpenAI Evals + DeepEval + Promptfoo. Every evaluation run is versioned in MLflow and re-runnable on demand by the client risk team.'
  },
  {
    id: 'regression',
    name: 'Regression suite',
    frameworks: ['Golden datasets', 'RAGAS', 'MLflow'],
    thresholds: 'No metric may regress by more than 0.5% absolute or 1.5% relative without sign-off',
    description: 'Golden-dataset regression for every model release. Candidate-vs-incumbent comparison across the full evaluation pack — not just headline metrics — to catch silent regressions that average accuracy hides.'
  },
  {
    id: 'bias',
    name: 'Bias and fairness pack',
    frameworks: ['Fairlearn', 'AIF360', 'Brocode UAE-context schema'],
    thresholds: 'Demographic parity, equalised odds, equal opportunity, predictive parity — thresholds set per use case with the second line of defence',
    description: 'Demographic-parity, equalised-odds, equal-opportunity and predictive-parity tests using Fairlearn and AIF360, with a UAE-context demographic schema (nationality bands, language preference, residency status) — never US Census categories.'
  },
  {
    id: 'drift',
    name: 'Drift detectors',
    frameworks: ['Evidently AI', 'Brocode PSI pack'],
    thresholds: 'Severity-tiered alerts on covariate, concept and prediction drift; SLA: drift-alert response within 24 hours',
    description: 'Evidently AI plus a custom Brocode population-stability-index pack, with alerting wired to the client ticketing system. Covariate drift, concept drift and prediction drift are monitored independently.'
  },
  {
    id: 'redteam',
    name: 'LLM red-teaming',
    frameworks: ['garak', 'Brocode UAE adversarial pack'],
    thresholds: 'Weekly automated red-team; manual passes before every production release; zero unmitigated category-1 findings at G3',
    description: 'Weekly automated red-team using garak plus a Brocode-curated UAE adversarial prompt pack (Arabic jailbreaks, dialect-coded harm prompts, regulator-sensitive topic probes). Manual red-team passes by a named in-house team before every production release.'
  },
  {
    id: 'adversarial',
    name: 'Adversarial robustness',
    frameworks: ['Adversarial Robustness Toolbox (ART)'],
    thresholds: 'Evasion and poisoning tests on tabular and vision models; degradation bounds agreed at G2',
    description: 'Adversarial Robustness Toolbox (ART) evasion and poisoning tests on tabular and vision models. Findings flow into the regression suite so robustness becomes a CI-blocking criterion, not a pre-launch tickbox.'
  },
  {
    id: 'guardrails',
    name: 'Guardrails plane in production',
    frameworks: ['NeMo Guardrails', 'Llama Guard 3', 'Bespoke Arabic policy classifier (we train inside your engagement repo)'],
    thresholds: 'WORM logging of every prompt and response; latency budget for the guardrails chain agreed at G2',
    description: 'NVIDIA NeMo Guardrails plus Llama Guard 3 plus an Arabic policy classifier, with prompt and response logging to a tamper-evident WORM store for the audit trail. Composition order documented in the relevant ADR.'
  }
];

// Mapping to controls — CompareTable across regulators
const CONTROL_ROWS: CompareRow[] = [
  {
    feature: 'Model-evaluation harness',
    brocode: 'lm-evaluation-harness + OpenAI Evals + DeepEval + Promptfoo + MLflow',
    competitors: ['Model Risk principle: documented validation pre-release', 'AI Principle: testing fitness for purpose', 'ECC AI-SP-01 testing controls', 'ISO 42001 §8.3 model performance']
  },
  {
    feature: 'Regression suite',
    brocode: 'Golden-dataset + CI-blocking thresholds',
    competitors: ['Periodic validation triggers', 'Continuous monitoring principle', 'ECC change-management controls', 'ISO 42001 §8.4 change control']
  },
  {
    feature: 'Bias and fairness pack',
    brocode: 'Fairlearn + AIF360 + UAE-context schema',
    competitors: ['Fair-treatment expectations', 'Fairness principle (named)', 'NCA AI ethics framework alignment', 'ISO 42001 §6.1.4 fairness']
  },
  {
    feature: 'Drift detection',
    brocode: 'Evidently + Brocode PSI pack',
    competitors: ['Continuous monitoring principle', 'Operational monitoring principle', 'ECC operational monitoring', 'ISO 42001 §9.1 monitoring']
  },
  {
    feature: 'LLM red-teaming',
    brocode: 'garak + UAE adversarial pack',
    competitors: ['Model-risk adversarial testing expectation', 'Adoption risk testing', 'ECC AI-SP-02 robustness testing', 'ISO 42001 §6.1.5 robustness']
  },
  {
    feature: 'Adversarial robustness',
    brocode: 'ART evasion + poisoning',
    competitors: ['Security testing expectation', 'AI security principle', 'ECC AI security control', 'ISO 42001 §8.5 information security']
  },
  {
    feature: 'Guardrails + WORM audit trail',
    brocode: 'NeMo + Llama Guard 3 + Arabic classifier; WORM log',
    competitors: ['Audit-trail expectation', 'Audit trail principle', 'ECC logging controls', 'ISO 42001 §7.5 documented information']
  }
];

const COMPARE_ROWS: CompareRow[] = [
  {
    feature: 'Model-evaluation harness (not a slide)',
    brocode: 'Live, versioned, re-runnable in MLflow',
    competitors: ['Functional tests only', 'Methodology overview', 'Pre-launch checklist']
  },
  {
    feature: 'Bias testing with a UAE-context demographic schema',
    brocode: true,
    competitors: [false, 'US-Census categories by default', false]
  },
  {
    feature: 'LLM red-teaming with a curated UAE adversarial pack',
    brocode: 'garak + Arabic / Khaleeji adversarial pack',
    competitors: ['No', 'Methodology only', 'No']
  },
  {
    feature: 'Drift detection wired to client ticketing',
    brocode: true,
    competitors: [false, 'Reporting only', 'In SLA-only']
  },
  {
    feature: 'Audit-evidence bundle pre-mapped to CBUAE / FSRA / NCA / ISO 42001',
    brocode: true,
    competitors: [false, 'Per-engagement build', 'Internal-only']
  },
  {
    feature: 'Approval cycle for an AI use case',
    brocode: '11 days (for three UAE tier-1 banks)',
    competitors: ['9 weeks', '7–12 weeks', '4–9 weeks']
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Can we see the eval-harness output, not a slide about it?',
    answer:
      'Yes — the sample bundle in the lead magnet contains a redacted full evaluation report from a real engagement, including the per-segment metrics, calibration curves, faithfulness scores for RAG outputs, and the CI-blocking thresholds that flipped on the candidate model. Under NDA we share live MLflow access during the review so your risk team can re-run the evaluation on a new dataset.'
  },
  {
    question: 'Why do you reject US-Census categories for bias testing?',
    answer:
      'Because they map poorly to the UAE customer base. The relevant axes here are nationality bands (Emirati, GCC, Arab expatriate, South Asian expatriate, Western expatriate, other), language preference (MSA, Khaleeji dialect, English), and residency status (citizen, golden visa, employment visa, family visa). The UAE-context demographic schema is documented in the bundle; we will adapt it to the segmentation your second line of defence has already agreed with the regulator.'
  },
  {
    question: 'How does the LLM red-team actually work?',
    answer:
      "Weekly automated red-team using garak with a Brocode-curated UAE adversarial prompt pack — categories include Arabic jailbreaks, dialect-coded harm prompts, regulator-sensitive topic probes, prompt injection from retrieved corpora, and code-switching attacks. Manual passes by a named in-house red-team before every production release. We do not preview specific prompts publicly — they are harmful by design — but we share the categories and the pass/fail thresholds in the bundle."
  },
  {
    question: 'Will the bundle survive a CBUAE / FSRA / NCA review?',
    answer:
      'The bundle is pre-mapped to CBUAE Model Risk guidance, FSRA Principles for Adoption of AI, NCA AI ethics framework, and ISO 42001 clauses. Three UAE tier-1 banks have used the bundle inside CBUAE model-risk submissions and reduced approval-cycle time from 9 weeks to 11 days. Each control-mapping section is editable so your risk team can extend it to additional regulators (DHA, SEHA, DFSA-DIFC) where needed.'
  },
  {
    question: 'How is the guardrails chain composed and why?',
    answer:
      'The composition order is: NeMo Guardrails (policy and topic enforcement) → Llama Guard 3 (content classifier on input and output) → a bespoke Arabic policy classifier we train inside your engagement repository on your own taxonomy and labelled data. There is no Brocode-branded classifier sold or licensed externally; the classifier you go live with belongs to you. The order is documented in ADR-028 of the engagement repo, with the reasoning and the latency budget. Every prompt and response is logged to a WORM store for the audit trail; the retention period is set per the relevant regulator.'
  },
  {
    question: 'Does this replace our existing model-risk function?',
    answer:
      'No — it supports it. The audit-evidence bundle is built to be attached to your existing model-risk submission, not to replace your model-risk function. We work alongside your second and third lines of defence, document our thresholds with them, and hand the bundle over for sign-off. The bundle template is in the lead magnet so your team can adopt it as a default for any model in your estate, whether it came from us or not.'
  }
];

const PROOF_ITEMS = [
  { value: '7', label: 'Test categories on every model we deliver' },
  { value: '11d', label: 'Average approval cycle (was 9 weeks)' },
  { value: '4', label: 'Regulators mapped (CBUAE / FSRA / NCA / ISO 42001)' },
  { value: '0', label: 'Unmitigated category-1 red-team findings at G3' }
];

const RELATED = [
  { label: 'Delivery Methodology', href: '/technology/methodology', description: 'The Harden phase produces the Audit-Evidence Bundle.' },
  { label: 'Technology Stack', href: '/technology/stack', description: 'The QA stack is part of the published stack.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Where drift monitoring lives in production.' },
  { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'The control-mapping work routes here.' },
  { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'The dominant industry for QA-driven procurement.' }
];

export default function QualityAssurancePage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '2026 Audit-Evidence Bundle for AI — Brocode',
    description:
      'The full test suite behind every model we ship for a client, packaged as an audit-evidence bundle for CBUAE, FSRA, NCA and ISO 42001.',
    url: `https://brocode.ae${PAGE_URL}`,
    image: 'https://brocode.ae/images/technology/quality-assurance.jpg',
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

      {/* Hero — clinical dashboard with seven test category chips */}
      <section className="relative isolate overflow-hidden bg-[#0c1322] text-white" data-page={PAGE_SLUG}>
        <GradientMesh tone="midnight" className="opacity-50" />
        <Image
          src="/images/technology/quality-assurance.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-15"
        />
        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            variant="dark"
            items={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }, { label: 'Quality assurance' }]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">eval-harness.run</p>
              <h1 className="mt-5 text-balance text-display-xl font-semibold leading-[1.05]">
                The test suite behind every model in production.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                Evaluation, regression, bias and fairness, drift, red-teaming, adversarial
                robustness and guardrails — packaged as an audit-evidence bundle your second
                and third lines of defence can attach to the regulator submission.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Book a 60-minute audit-evidence review
                </MagneticButton>
                <MagneticButton href="#lead-magnet" variant="secondary" size="lg" event="secondary_cta_click">
                  Download the 2026 Audit-Evidence Bundle
                </MagneticButton>
              </div>
            </div>

            {/* Dashboard mock */}
            <div className="lg:col-span-5">
              <GlassCard tone="dark" padding="md" className="border-white/10 bg-white/5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300">model.eval.run #4129</p>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                    PASS
                  </span>
                </div>
                <ul className="mt-4 space-y-2 font-mono text-xs">
                  {[
                    { name: 'accuracy', value: '0.913', state: 'pass' },
                    { name: 'calibration', value: 'ECE 0.041', state: 'pass' },
                    { name: 'robustness', value: 'ART evasion', state: 'pass' },
                    { name: 'fairness', value: 'EO gap 0.018', state: 'pass' },
                    { name: 'faithfulness', value: 'RAGAS 0.86', state: 'pass' },
                    { name: 'drift', value: 'PSI 0.07', state: 'pass' },
                    { name: 'red-team', value: 'garak weekly', state: 'pass' }
                  ].map((row) => (
                    <li key={row.name} className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
                      <span className="text-white/70">{row.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-white/85">{row.value}</span>
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold uppercase text-emerald-300">
                          {row.state}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300">artefacts emitted</p>
                  <ul className="mt-2 grid grid-cols-2 gap-1.5 font-mono text-[11px] text-white/65">
                    {[
                      'Evaluation Report',
                      'Bias Report',
                      'Red-Team Report',
                      'Drift Baseline',
                      'Regression Diff',
                      'Control Mapping'
                    ].map((a) => (
                      <li key={a}>
                        <span className="text-cyan-300">✓</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Why generic QA fails */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why generic QA fails at AI"
              title="Functional testing without an eval harness is not AI QA."
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-7">
            <Reveal>
              <p>
                A model can pass every traditional software test and still fail catastrophically
                in production. There are no fixed outputs; failure modes are statistical; the
                system can degrade silently for months. Traditional QA shops are strong on
                functional testing and have nothing for evaluation, bias, red-teaming or drift.
                Big-4 risk-assurance practices ship methodology overviews and seldom an actual
                eval-harness run.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Brocode treats AI quality as a continuous engineering discipline — seven test
                categories on every model, every release, every retrain. Each category names
                the framework (Fairlearn, AIF360, garak, Evidently, ART, NeMo Guardrails,
                Llama Guard 3) and emits an artefact that ends up in the audit-evidence bundle.
                The bundle is what your second and third lines of defence attach to the regulator
                submission.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Seven test categories — BentoGrid */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Seven test categories on every model"
            title="Eval harness, regression, bias, drift, red-team, robustness, guardrails."
            description="Each category names the frameworks, the thresholds, and the artefact it emits to the audit-evidence bundle."
          />
          <div className="mt-12">
            <BentoGrid>
              {CATEGORIES.map((c, i) => (
                <BentoCell
                  key={c.id}
                  span={i === 0 ? 'xl' : i === 4 ? 'lg' : 'md'}
                  variant={i === 0 ? 'dark' : 'light'}
                >
                  <p className={`font-mono text-[11px] uppercase tracking-wider ${i === 0 ? 'text-cyan-300' : 'text-brand'}`}>
                    category.{String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`mt-3 text-xl font-semibold ${i === 0 ? 'text-white' : 'text-ink-900'}`}>
                    {c.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.frameworks.map((f) => (
                      <span
                        key={f}
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[10.5px] ${
                          i === 0
                            ? 'border border-cyan-400/30 bg-cyan-400/10 text-cyan-200'
                            : 'border border-ink-200 bg-white text-ink-700'
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${i === 0 ? 'text-white/75' : 'text-ink-600'}`}>
                    {c.description}
                  </p>
                  <p className={`mt-4 text-[11px] font-semibold uppercase tracking-wider ${i === 0 ? 'text-white/55' : 'text-ink-400'}`}>
                    Thresholds
                  </p>
                  <p className={`mt-1 text-sm ${i === 0 ? 'text-white/85' : 'text-ink-700'}`}>
                    {c.thresholds}
                  </p>
                </BentoCell>
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="container-site">
          <ProofBand items={PROOF_ITEMS} variant="dark" />
        </div>
      </section>

      {/* Bias / UAE-context schema */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Bias and fairness with a UAE-context schema"
              title="Nationality bands, language preference, residency status — not US Census categories."
              description="The schema is documented in the bundle, agreed with your second line of defence, and reviewed against the most recent regulator guidance."
            />
            <Link href="/services/responsible-ai-governance" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand">
              See responsible AI & governance
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">UAE-context demographic schema</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Nationality bands</p>
                  <p className="mt-1 text-ink-900">Emirati / GCC / Arab expatriate / South Asian expatriate / Western expatriate / Other</p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Language preference</p>
                  <p className="mt-1 text-ink-900">MSA / Khaleeji dialect / English / Other Arabic dialect</p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Residency status</p>
                  <p className="mt-1 text-ink-900">Citizen / Golden visa / Employment visa / Family visa / Visit visa</p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Fairness metrics</p>
                  <p className="mt-1 text-ink-900">Demographic parity, equalised odds, equal opportunity, predictive parity</p>
                </li>
              </ul>
              <p className="mt-6 text-sm text-ink-500">
                Schema is editable per use case; thresholds are agreed with the second line of defence, never imposed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapping to controls CompareTable */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Mapping to controls"
            title="Each QA category mapped to CBUAE, FSRA, NCA and ISO 42001."
            description="The bundle ships with an editable annex per regulator. Below is the structural map."
          />
          <div className="mt-12">
            <CompareTable
              brandLabel="Brocode artefact"
              competitors={['CBUAE Model Risk', 'FSRA AI Principles', 'NCA AI Ethics + ECC', 'ISO 42001']}
              rows={CONTROL_ROWS}
            />
          </div>
        </div>
      </section>

      {/* Case study band */}
      <section className="bg-ink-900 py-22 text-white md:py-28">
        <GradientMesh tone="midnight" className="opacity-30" />
        <div className="container-site relative grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="Case study"
              title="Three UAE tier-1 banks: 9 weeks to 11 days."
              description="After adopting the audit-evidence bundle, the model-risk function reduced AI use-case approval cycle time from 9 weeks to 11 days — without dropping a single regulator control."
            />
          </div>
          <div className="lg:col-span-7">
            <GlassCard tone="dark" className="border-white/10 bg-white/5" padding="md">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Second-line head of model risk, anonymised UAE tier-1 bank</p>
              <p className="mt-4 text-xl font-medium leading-relaxed text-white">
                &quot;First vendor that gave us audit evidence before audit asked. The bundle
                arrived ready-mapped to CBUAE controls — we extended it for our DFSA workload
                in a week, not a quarter.&quot;
              </p>
              <p className="mt-5 text-sm text-white/55">Audit-evidence review, Q4 2025</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CompareTable vs alternatives */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Versus the alternatives"
            title="Traditional QA, Big-4 risk assurance, in-house, model-vendor evals."
          />
          <div className="mt-12">
            <CompareTable
              brandLabel="Brocode"
              competitors={['Traditional QA shop', 'Big-4 risk assurance', 'In-house QA team']}
              rows={COMPARE_ROWS}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="lead-magnet" className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="2026 Audit-Evidence Bundle for AI"
            description="A 64-page PDF combining one redacted full evidence bundle, a control-mapping appendix (CBUAE Model Risk, FSRA AI Principles, NCA AI Ethics, ISO 42001), and a fill-in template your risk team can adopt as a default."
            contents={[
              'Evaluation harness — sample report with thresholds and pass/fail',
              'Regression suite — golden-dataset pattern and CI integration',
              'Bias and fairness pack — Fairlearn + AIF360 + UAE-context schema',
              'Drift detector pattern — Evidently + Brocode PSI pack',
              'Red-team and adversarial — garak + ART, by category',
              'Guardrails plane — NeMo + Llama Guard 3 + Arabic classifier',
              'Mapping to controls — CBUAE / FSRA / NCA / ISO 42001'
            ]}
            filePath="/downloads/audit-evidence-bundle.pdf"
            ctaLabel="Email me the Audit-Evidence Bundle"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Risk-function questions"
              title="What the second and third lines of defence ask first."
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
              eyebrow="Book the audit-evidence review"
              title="The Head of AI Risk & QA walks the sample bundle with your team."
              description="A senior AI Risk & QA lead responds within one business day. If your audit submission is inside two weeks, tell us in the form and we will prioritise."
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
        primaryLabel="Book a QA review"
        primaryHref="#contact-form"
      />
    </>
  );
}
