import type { LongPage } from '../types';

export const qualityAssurance: LongPage = {
  slug: 'quality-assurance',
  category: 'technology',
  title: 'Quality Assurance for AI',
  seoTitle: 'AI Quality Assurance — Model Evaluation, Bias Testing, Red-Teaming | Brocode',
  seoDescription:
    'Brocode Solutions applies AI-specific quality assurance — model evaluation, bias testing, red-teaming, drift detection, and regression suites — to every system we put into production.',
  eyebrow: 'Quality assurance for AI',
  headline: 'AI quality is not unit tests. It is a discipline of its own.',
  sub: 'A model can pass every traditional software test and still fail catastrophically in production. We apply evaluation, red-teaming, fairness testing, and drift detection as a continuous engineering practice — not a launch checklist.',
  heroImage: '/images/technology/quality-assurance.jpg',
  heroImageAlt: 'Dashboard view combining model evaluation metrics, drift charts, fairness breakdowns, and red-team finding summaries.',
  heroIcon: 'shield',
  intro:
    'A machine learning system that ships without serious quality assurance is a liability waiting for a regulator. AI quality work is fundamentally different from traditional software testing — there are no fixed outputs, the failure modes are statistical, and the system can degrade silently in production without anyone noticing. Brocode Solutions has built a quality discipline around that reality, drawing on practice we have developed across regulated GCC engagements. It runs continuously from the first training run through every retrain in production, with artefacts that hold up under regulator review.',
  sections: [
    {
      heading: 'Evaluation: not a single number on a leaderboard',
      body: 'Model evaluation begins with the realisation that a single accuracy or F1 score tells you almost nothing about whether a system will work in your context. We build evaluation suites that test against the specific populations, dialects, edge cases, and adversarial inputs your system will face. For Arabic-language work this means dialect breakdowns, code-switching tests, and right-to-left rendering checks. For risk modelling it means population stratification by branch, segment, and historical cohort. Each evaluation suite is versioned alongside the model, runs in CI on every change, and produces a written report that the steering committee actually reads.'
    },
    {
      heading: 'Bias and fairness testing: documented and defensible',
      body: 'Bias testing is not optional in the regulated environments we operate in. Our engineers run fairness assessments against the protected groups and operational segments relevant to each client — nationality, age, gender, customer segment, branch, and sectoral classifications that local regulators care about. We use a combination of statistical parity, equal opportunity, and calibration metrics, document the trade-offs honestly, and present the results in a format risk committees can interpret. Where mitigations are required, we apply them deliberately rather than reflexively, with the impact on overall performance quantified rather than asserted.'
    },
    {
      heading: 'Red-teaming and adversarial testing',
      body: 'For generative AI systems and any AI making consequential decisions, red-teaming is part of the launch sign-off. Our red-team engineers attempt to elicit harmful outputs, jailbreak guardrails, leak training data, and induce the system to make decisions outside its scope. For Arabic-capable systems this includes dialect-specific prompt injection, transliteration attacks, and abuse cases drawn from regional context. Findings are tracked as defects through the same process as any other engineering work — triaged, prioritised, fixed, and re-tested — with a written red-team report attached to the production readiness review.'
    },
    {
      heading: 'Drift detection and regression suites in production',
      body: 'Quality assurance does not end at go-live. We instrument every production model with drift detectors that monitor input distributions, output distributions, and the relationship between predictions and ground-truth outcomes where labels are available. Regression suites run on every retrain, comparing the candidate model against the incumbent across the full evaluation pack — not just headline metrics — to catch the silent regressions that average accuracy hides. Drift alerts feed into an incident-response process with defined severity levels and escalation paths, so a degrading model triggers action within hours rather than quarters.'
    }
  ],
  highlights: [
    { title: 'Versioned evaluation suites', description: 'Stratified tests that run in CI on every model change and ship a written report.', icon: 'doc' },
    { title: 'Fairness testing for the GCC context', description: 'Nationality, segment, branch, and gender breakdowns documented honestly.', icon: 'shield' },
    { title: 'Red-team sign-off', description: 'Adversarial testing, prompt injection, and abuse-case review before launch.', icon: 'gavel' },
    { title: 'Drift detection live', description: 'Input, output, and label-relationship monitoring with severity-tiered alerts.', icon: 'chart' },
    { title: 'Regression suites on retrain', description: 'Full pack comparison against the incumbent, not just headline metrics.', icon: 'cogs' },
    { title: 'Arabic-aware testing', description: 'Dialect coverage, code-switching, transliteration, and RTL rendering tests.', icon: 'chat' }
  ],
  whyBrocode:
    'Most consultancies treat AI quality as a checklist filled in at launch. We treat it as a continuous engineering practice, with dedicated quality engineers on every regulated engagement, and evaluation packs that pass independent review by the client\'s risk function. Our quality artefacts have stood up in conversations with CBUAE, DHA, and ADGM — which is the bar that matters in the markets we serve.',
  ourApproach:
    'Quality engineering joins the team during the build phase, not at hardening. Evaluation packs are co-designed with the business sponsor so the metrics reflect operational value, not just statistical convenience. Red-teaming runs as a dedicated workstream in the hardening phase, with engineers from outside the build team to avoid familiarity blindness. In the run phase, quality is owned jointly with the client\'s team, with quarterly reviews that look at drift, regression, and fairness trends together rather than as separate dashboards.',
  stats: [
    { value: 100, suffix: '%', label: 'Production models with evaluation suites' },
    { value: 50, suffix: '+', label: 'Red-team engagements completed' },
    { value: 4, label: 'Quarterly quality reviews per client' },
    { value: 24, label: 'Hours typical drift-alert response time' }
  ],
  primaryCta: { label: 'Plan a quality review', href: '/contact' },
  secondaryCta: { label: 'Read our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'The governance frame that quality artefacts sit inside.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The operating backbone for continuous quality monitoring.' },
    { label: 'AI Model Optimization', href: '/services/ai-model-optimization', description: 'Optimisation work that quality assurance keeps honest.' },
    { label: 'Methodology', href: '/technology/methodology', description: 'Where quality work plugs into the delivery phases.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Where regulator-grade quality artefacts are non-negotiable.' }
  ],
  capabilities: [
    'Stratified evaluation suite design and maintenance',
    'Fairness, bias, and explainability testing',
    'Red-teaming and adversarial test design',
    'Drift detection across inputs, outputs, and labels',
    'Regression suites for safe model retraining',
    'Arabic-aware and bilingual quality testing'
  ],
  outcomes: [
    'A versioned evaluation pack that survives team turnover',
    'Fairness reports that risk committees can interpret',
    'Red-team findings tracked and resolved before launch',
    'Drift alerts wired into the client incident process',
    'Quarterly quality reviews that catch slow regressions early'
  ]
};
