import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { FAQ } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'predictive-analytics';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm in [supply chain / credit risk / FP&A / customer base] at [organisation]. We'd like to scope a forecast/risk/churn pilot on our own data. Could we book a 30-minute call this week?";

export const metadata: Metadata = {
  title: 'Predictive Analytics for Finance, Supply Chain & Risk — UAE / KSA',
  description:
    'Forecast accuracy your CFO can act on — SKU-store-week MAPE under 12%, PD/LGD models recalibrated to your current portfolio, churn-at-risk lists your retention team can work tomorrow. Built on your data, in your tenant, in 12 weeks.',
  alternates: { canonical: 'https://www.brocode.ae/services/predictive-analytics' },
  openGraph: {
    title: 'Predictive Analytics — the Forecast Tournament method',
    description:
      'Free 3-week tournament: TimeGPT, Chronos, NeuralProphet, N-BEATSx, TFT and LightGBM head-to-head on your data.',
    type: 'article',
    url: 'https://www.brocode.ae/services/predictive-analytics'
  },
  twitter: { card: 'summary_large_image' }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Run a free 3-week Forecast Tournament on your data',
  subtitle:
    "We take your last 24 months, run six forecasting approaches, and publish the results. Winner picked on MAPE at your chosen granularity. No commitment until you see the numbers.",
  ctaLabel: 'Request the Forecast Tournament',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'useCase',
      label: 'Primary use case',
      type: 'select',
      required: true,
      options: [
        'Demand forecasting',
        'Inventory optimisation',
        'Credit risk PD-LGD',
        'IFRS 9 ECL',
        'Churn',
        'Pricing',
        'Cash-flow forecasting',
        'Other'
      ]
    },
    {
      name: 'warehouse',
      label: 'Data warehouse / lakehouse',
      type: 'select',
      options: [
        'Snowflake',
        'Databricks',
        'Microsoft Fabric',
        'BigQuery',
        'Redshift',
        'Oracle',
        'SAP HANA',
        'On-prem SQL Server',
        'Other'
      ]
    },
    {
      name: 'currentTool',
      label: 'Existing forecasting / risk tool',
      type: 'multiselect',
      options: ['SAS', 'SAP IBP', 'Oracle Demantra', 'Anaplan', 'o9', 'Blue Yonder', 'Homegrown Python', 'None']
    },
    {
      name: 'granularity',
      label: 'Granularity required',
      type: 'textarea',
      placeholder: 'e.g., SKU × store × week, borrower × month, subscriber × day'
    },
    {
      name: 'history',
      label: 'History available',
      type: 'select',
      options: ['<12 months', '12–24 months', '24–48 months', '>48 months']
    },
    {
      name: 'audit',
      label: 'Regulator / audit constraints',
      type: 'multiselect',
      options: ['CBUAE', 'SAMA', 'DFSA', 'ADGM FSRA', 'SOX', 'Internal audit only', 'None']
    }
  ]
};

const modelStack = [
  {
    problem: 'Demand forecasting (SKU × store × week)',
    family: 'TimeGPT + LightGBM ensemble · NeuralProphet baseline',
    note: 'Foundation model for cold and short-history SKUs; LightGBM with engineered calendar / promotion / weather features for the tabular workhorse layer.'
  },
  {
    problem: 'Inventory optimisation',
    family: 'LightGBM demand + Gurobi / HiGHS stochastic optimiser',
    note: 'Service-level constraint exposed to the planner; output per location and SKU group.'
  },
  {
    problem: 'Credit risk PD',
    family: 'XGBoost with monotonic constraints',
    note: 'SHAP explanations sealed into model cards aligned to SR-11/7, BCBS 239, CBUAE / SAMA model-risk guidance.'
  },
  {
    problem: 'Credit risk LGD',
    family: 'Survival analysis · DeepSurv + cox-PH baseline',
    note: 'Time-to-default modelling with calibrated quantiles, ECL feeding straight into IFRS 9 stage-2 calculation.'
  },
  {
    problem: 'Churn',
    family: 'LightGBM propensity + CausalML / EconML uplift',
    note: 'Two-stage so retention works prospects where treatment moves the needle, not high-propensity churners who would leave anyway.'
  },
  {
    problem: 'Multivariate / hierarchical',
    family: 'Temporal Fusion Transformer + reconciliation',
    note: 'For multi-level forecasts (region × category × week) where coherence across the hierarchy is required.'
  }
];

const platformTools = [
  'Snowflake',
  'Databricks',
  'Microsoft Fabric',
  'BigQuery',
  'dbt',
  'Feast',
  'MLflow',
  'Evidently',
  'WhyLabs',
  'Great Expectations',
  'FastAPI',
  'Triton',
  'Airflow',
  'Power BI',
  'Looker'
];

const tournamentSteps = [
  {
    label: 'Week 1',
    title: 'Data ingestion + acceptance criteria',
    description:
      'Customer\'s last 24 months loaded into a sandbox in Snowflake or Databricks. Acceptance criteria signed: holdout strategy, MAPE definition, segments, the winner-takes-all rule.',
    metric: 'Charter signed'
  },
  {
    label: 'Week 2',
    title: 'Six models run in parallel',
    description:
      'TimeGPT, Chronos, NeuralProphet, N-BEATSx, Temporal Fusion Transformer and LightGBM with engineered features — same data, same holdout, same scoring. No favouritism, no parameter overfitting on the holdout.',
    metric: '6 models, 1 holdout'
  },
  {
    label: 'Week 3',
    title: 'Winner-takes-all report',
    description:
      'Per-segment MAPE, per-segment ranking and a recommended production stack. The Brocode TimeGPT + LightGBM ensemble has hit 11.4% SKU-store-week MAPE against SAS Forecast Server at 22.8% on the shared dataset.',
    metric: 'Public methodology'
  },
  {
    label: 'Weeks 4–10',
    title: 'Production build',
    description:
      'Feature store on Feast, dbt transformations, MLflow tracking, drift detection on Evidently / WhyLabs. Real-time scoring via FastAPI + Triton where needed; batch scoring via Airflow on the customer warehouse.',
    metric: 'In-tenant deployment'
  },
  {
    label: 'Weeks 11–12',
    title: 'Parallel run vs the incumbent',
    description:
      'Parallel run against the customer\'s existing forecast (SAS, SAP IBP, Anaplan, o9, in-house). Stakeholders see the lift in their own terms before commit. Model card pack delivered with full SR-11/7 lineage.',
    metric: 'Stakeholder sign-off'
  },
  {
    label: 'Run-phase',
    title: 'Weekly accuracy review + scheduled recalibration',
    description:
      'Drift detector on every feature and the output. Quarterly recalibration cadence. Model cards updated against each release. Internal audit and regulator access on request.',
    metric: 'Quarterly recalibration'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'SKU-store-week MAPE on regional retail data',
    brocode: '11.4%',
    competitors: ['22.8%', 'No published number', '~15%', '~20%'],
    note: 'Shared 18,000-SKU / 320-store / 24-month tournament dataset.'
  },
  {
    feature: 'Open-source ownership of the resulting model',
    brocode: true,
    competitors: [false, true, true, true],
    note: 'Adapters, weights, configs and reproducer code all transfer to the customer.'
  },
  {
    feature: 'Foundation forecasters (TimeGPT, Chronos) supported',
    brocode: true,
    competitors: [false, false, true, false],
    note: 'Beyond ARIMA/ETS, into the 2024+ forecasting stack.'
  },
  {
    feature: 'Regulator-grade model cards (SR-11/7, BCBS 239)',
    brocode: 'Standard delivery, every model',
    competitors: ['Add-on', 'Add-on', 'DIY', 'Strategy pack'],
    note: 'Aligned to CBUAE and SAMA model-risk guidance.'
  },
  {
    feature: 'Co-existence with the planning suite (o9 / IBP / Blue Yonder)',
    brocode: 'Model partner, not a competing suite',
    competitors: ['Replacement', 'N/A', 'N/A', 'Strategy pack'],
    note: 'We make the existing planner produce a better number.'
  },
  {
    feature: 'In-tenant deployment with no offshore data movement',
    brocode: true,
    competitors: [true, true, false, false],
    note: 'UAE / KSA hyperscaler regions, customer-managed keys.'
  },
  {
    feature: 'Build engagement vs advisory report',
    brocode: 'Build — shipped models in 12 weeks',
    competitors: ['Build, but heavy licence', 'Build', 'Build, offshore', '12-week assessment'],
    note: 'The Big-4 audit narrative is acknowledged; delivery is different.'
  },
  {
    feature: '60% run-cost reduction vs SAS estate',
    brocode: true,
    competitors: [false, false, true, false],
    note: 'Removing SAS licence + moving to managed open-source pipelines on customer warehouse.'
  }
];

const competitors = ['SAS Forecast Server', 'SAP IBP / Blue Yonder / o9', 'Offshore analytics shop', 'Big-4 advisory'];

const objections = [
  {
    objection:
      'SAS has been our forecasting engine for 12 years. Why would we move to an open-source stack — and what is the migration cost?',
    proof:
      'You do not have to move SAS to see the lift. The Forecast Tournament runs on a sandbox of your data; the winning model is then put into a parallel run alongside SAS for one quarter before any cutover decision. The UAE retailer reference moved from SAS Forecast Server at 22.8% SKU-store-week MAPE to a TimeGPT + LightGBM ensemble at 11.4%, with an eleven-month payback and roughly a 60% reduction in annual forecasting run-cost. Migration is staged; SAS stays live until the open-source stack has earned its place in production.'
  },
  {
    objection:
      'We have had three vendors promise sub-15% MAPE. None held up at SKU-store-week granularity in long-tail SKUs. What is different here?',
    proof:
      'Two structural differences. First, foundation forecasters: TimeGPT and Chronos absorb cold-start and short-history SKUs that classical and tree-based models choke on. Second, the tournament: six models against the same holdout means we discover where each model wins and assemble the production ensemble per segment, rather than picking one model and forcing it across the catalogue. Long-tail performance is a published segment in the model card pack.'
  },
  {
    objection:
      'For credit risk, our model is regulator-approved. Any replacement must survive a CBUAE / SAMA model-validation review and have full lineage.',
    proof:
      'Model cards and lineage are standard delivery, not an add-on. XGBoost with monotonic constraints on PD survives SR-11/7, BCBS 239 and CBUAE / SAMA expectations. The KSA bank reference re-calibrated its SME PD model with Gini moving from 0.41 to 0.62; the ECL provision was rebalanced and accepted by the SAMA model validation team. We routinely walk through the validation pack with second-line risk before launch.'
  }
];

const faqItems = [
  {
    question: 'How much data do we need to start?',
    answer:
      '24 months of clean transactional data is the comfortable floor for SKU-store-week demand forecasting; 36 months covers the regional calendar effects in full. For credit risk PD, the cleaner number is 5,000+ defaults across the cycle. For churn, 12 months of subscriber events. We can run a feasibility pass on smaller histories before committing.'
  },
  {
    question: 'Will the model survive a regulator validation review?',
    answer:
      'Yes — that is how we build, not a post-hoc add. Every model ships with a model card aligned to SR-11/7 and BCBS 239, a datasheet for the training data, SHAP explanations on the relevant outputs, monotonic constraints where they apply, and a versioned lineage from raw data to scored output. The KSA bank reference cleared the SAMA model-validation review on its first submission.'
  },
  {
    question: 'How are seasonal effects (Ramadan, Eid, school year, payday) handled?',
    answer:
      'They are first-class inputs to the model, not residual noise. We engineer explicit calendar features (Hijri and Gregorian), school-year features, payday features, and Ramadan / Eid window indicators with lag and lead effects. For multi-event embeddings we use the approach described in the Ramadan & Eid Demand Forecasting Playbook — see the retail industry hub.'
  },
  {
    question: 'How is the system kept accurate over time?',
    answer:
      'Drift detection runs on every feature and on the output, daily. Evidently and WhyLabs are the default; results land in a dashboard the FP&A or risk team owns. Recalibration runs on a quarterly cadence by default, or whenever drift breaches the threshold. The model card is updated on every release.'
  },
  {
    question: 'Does the data leave our environment?',
    answer:
      'No, when that is a requirement. The Forecast Tournament runs in the customer sandbox in Snowflake, Databricks or Fabric. Production deployment is in customer tenant. No offshore data movement. UAE / KSA hyperscaler region by default; on-prem available where the data classification demands it.'
  },
  {
    question: 'How does this co-exist with o9, SAP IBP, Anaplan or Blue Yonder?',
    answer:
      'We are model-and-data partners alongside any of these planning suites, not a competing suite. The bespoke model we build for you produces the forecast; the planning suite consumes it through the integration the customer already owns. The UAE retailer reference runs o9 alongside the bespoke forecast we built for them; the model output replaces the suite\'s native forecaster on the segments where it lifts MAPE.'
  },
  {
    question: 'What about cash-flow forecasting at treasury level?',
    answer:
      'Treasury cash-flow forecasting is a separate model class — short-horizon, high-frequency, with structural break risk around regulator and ratings events. We use a constrained TFT plus exogenous variable feed, and we publish confidence intervals at 1, 5 and 30 days. The methodology lives in the model card.'
  },
  {
    question: 'What is the pricing model?',
    answer:
      'The Forecast Tournament is free. Production build is fixed-fee for the 12-week programme; the run-phase is a separately scoped retainer. We do not charge per-forecast licence on the resulting model. The full commercial terms summary lives in the procurement pack — see /faqs for the redacted version.'
  }
];

const heroKpis = [
  { k: 'MAPE', v: '11.4%', trend: '−11.4pt vs SAS' },
  { k: 'Working capital days', v: '38 → 29', trend: '−9.2 days' },
  { k: 'Forecast freshness', v: '< 4h', trend: 'overnight → near real-time' }
];

const relatedItems = [
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Productionisation, drift detection and retraining for the model estate.' },
  { label: 'Recommendation Systems', href: '/services/recommendation-systems', description: 'The retail audience that also asks about merchandising and personalisation.' },
  { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Model cards, SHAP and the regulator-acceptance conversation on credit risk.' },
  { label: 'Retail & E-commerce', href: '/industries/retail-ecommerce', description: 'Demand-forecasting and inventory optimisation, end to end.' },
  { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'The SME PD recalibration reference, in full.' }
];

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Predictive Analytics',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain', 'Kuwait', 'Egypt'],
  description:
    'Demand forecasting, credit risk, churn and working-capital models for GCC enterprises. Foundation forecasters, regulator-grade model cards, in-tenant deployment. Free Forecast Tournament before commitment.',
  audience: { '@type': 'Audience', audienceType: 'Head of FP&A, Head of Credit Risk, Head of Supply Chain' }
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

export default function PredictiveAnalyticsPage() {
  return (
    <>
      <Script id="ld-predictive-service" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-predictive-faq" type="application/ld+json">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      {/* Bespoke FP&A dashboard hero — finance feel, daylight, two-monitor desk vibe */}
      <section className="relative isolate overflow-hidden bg-white text-ink-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-brand-50/40" aria-hidden />
        <div className="container-site relative pt-22 pb-22 md:pt-26 md:pb-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Predictive Analytics' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5 text-ink-500">FP&amp;A · supply chain · credit risk</p>
              <h1 className="text-balance text-display-2xl text-ink-900">
                Forecast accuracy your CFO can act on.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 md:text-xl">
                SKU-store-week MAPE under 12%, PD / LGD models recalibrated to your current portfolio, or churn-at-risk
                lists your retention team can work tomorrow — built on your data, in your tenant, in twelve weeks.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="#contact-form"
                  variant="primary"
                  size="lg"
                  event="quote_open"
                >
                  Run a free 3-week Forecast Tournament
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={PAGE_SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  WhatsApp the forecasting lead
                </a>
                <Link
                  href="#lead-magnet"
                  data-event="secondary_cta_click"
                  data-page={PAGE_SLUG}
                  className="text-sm font-semibold text-ink-700 underline-offset-4 hover:text-brand hover:underline"
                >
                  Book a 45-min review →
                </Link>
              </div>

              {/* KPI tiles */}
              <div className="mt-10 grid grid-cols-3 gap-3">
                {heroKpis.map((k) => (
                  <div key={k.k} className="rounded-2xl border border-ink-100 bg-white p-4 shadow-card">
                    <p className="text-xs font-medium uppercase tracking-wider text-ink-500">{k.k}</p>
                    <p className="mt-1 text-2xl font-bold text-ink-900">{k.v}</p>
                    <p className="mt-1 text-[11px] text-emerald-600">{k.trend}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: forecast vs actual chart styled like a Power BI tile */}
            <div className="lg:col-span-6">
              <GlassCard tone="light">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Forecast vs actual</p>
                    <p className="mt-1 text-lg font-semibold text-ink-900">Weekly demand · SKU-store-week</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    MAPE 11.4%
                  </span>
                </div>

                {/* Inline SVG forecast chart */}
                <div className="relative mt-6 h-56 w-full rounded-xl border border-ink-100 bg-white">
                  <svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden>
                    {/* Y grid */}
                    {[40, 80, 120, 160].map((y) => (
                      <line key={y} x1="20" x2="395" y1={y} y2={y} stroke="#E2E8F0" strokeDasharray="2 4" />
                    ))}
                    {/* Confidence band */}
                    <path
                      d="M 250 80 L 280 70 L 310 75 L 340 60 L 370 55 L 395 50 L 395 100 L 370 95 L 340 100 L 310 110 L 280 105 L 250 110 Z"
                      fill="#2B7FFF"
                      fillOpacity="0.12"
                    />
                    {/* Historical (grey) */}
                    <polyline
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      points="20,130 50,120 80,135 110,118 140,128 170,108 200,118 230,98 250,95"
                    />
                    {/* Forecast (brand navy) */}
                    <polyline
                      fill="none"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      points="250,95 280,88 310,93 340,80 370,75 395,72"
                    />
                    {/* Actual overlay dots on forecast */}
                    {[
                      [280, 90],
                      [310, 96],
                      [340, 83]
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="3" fill="#10b981" />
                    ))}
                    {/* Axis */}
                    <line x1="20" x2="395" y1="170" y2="170" stroke="#CBD5E1" />
                  </svg>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-ink-600">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-3 rounded bg-[#94A3B8]" /> Historical
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-3 rounded bg-[#1d4ed8]" /> Forecast (TimeGPT + LightGBM)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Actuals to date
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & stakes */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The problem at the next board meeting"
              title="27% MAPE locks AED 90M of working capital in slow-movers across 220 stores."
              description="And the CFO has written to the Head of Supply Chain demanding a measurable improvement before the next quarterly board. For the credit-risk persona: the SME PD model is calibrated to a pre-COVID portfolio mix and is now systematically under-provisioning IFRS 9 stage-2 exposures."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-700">
            <p>
              An additional quarter of forecast inaccuracy locks another AED 25M into working capital and triggers a
              covenant-headroom conversation with treasury. The CFO has personally promised the board a working-capital
              improvement; missing it costs the FP&amp;A lead executive credibility. Under-provisioned ECL is a CBUAE
              or SAMA inspection issue that lands directly on the Head of Credit Risk and the CRO. A 1.1-point ARPU
              drop in the customer base has analysts asking the CEO uncomfortable questions on the next earnings call.
            </p>
            <p>
              A forecast is only useful if someone can act on it. We design predictive systems around the planning
              rhythm you already run — weekly stock reviews, monthly capital committee, quarterly board reporting —
              rather than imposed on top. That might mean an SKU-level demand forecast feeding directly into your
              ERP, a default probability score embedded in your loan origination workflow, or a maintenance risk
              index that schedules technician routes for the following week. Single-number forecasts give a false
              sense of certainty. We deliver calibrated confidence intervals, scenario overlays and backtesting
              evidence so reviewers can see how the model has performed against actuals over time.
            </p>
            <p>
              Real forecasts in the region have to cope with Ramadan effects, school holidays, summer travel patterns,
              oil-price cycles and one-off government initiatives that rewrite demand overnight. Our teams build
              models that explicitly account for these factors rather than treating them as inconvenient outliers. We
              blend classical time-series methods with gradient-boosted trees and deep-learning architectures where
              they earn their keep, and we are equally happy explaining a SARIMAX model to a treasurer as we are
              tuning a Temporal Fusion Transformer for a retail planner.
            </p>
          </div>
        </div>
      </section>

      {/* Forecast Tournament — Mechanism */}
      <section className="bg-amber-50/40 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Forecast Tournament method"
            title="Six models. One holdout. Winner takes all."
            description="Three weeks, fixed scope, free of charge. We run TimeGPT, Chronos, NeuralProphet, N-BEATSx, Temporal Fusion Transformer and LightGBM with engineered features against your last 24 months of data, then publish the result."
          />
          <div className="mt-16">
            <ScrollTimeline steps={tournamentSteps} />
          </div>
        </div>
      </section>

      {/* Model stack — problem → model mapping */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The model stack we deliver"
            title="Problem → recommended model family. No one-size-fits-all."
            description="The right family per problem class, with the trade-offs we routinely explain to risk and finance reviewers."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100 bg-white">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-surface-muted text-xs font-semibold uppercase tracking-wider text-ink-500">
                <tr>
                  <th className="px-5 py-4 text-left">Problem</th>
                  <th className="px-5 py-4 text-left text-brand">Recommended family</th>
                  <th className="px-5 py-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {modelStack.map((row) => (
                  <tr key={row.problem} className="hover:bg-surface-muted/50">
                    <td className="px-5 py-4 font-medium text-ink-900">{row.problem}</td>
                    <td className="px-5 py-4 font-semibold text-ink-900">{row.family}</td>
                    <td className="px-5 py-4 text-ink-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Data & feature platform */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Data and feature platform"
              title="In your tenant. On your warehouse. With the tools your team already runs."
              description="Snowflake, Databricks or Microsoft Fabric for compute; Feast for the feature store; dbt for transformations; MLflow for tracking; Evidently and WhyLabs for drift. Great Expectations for data tests."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="flex flex-wrap gap-2">
              {platformTools.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800"
                >
                  {t}
                </li>
              ))}
            </ul>
            <Reveal className="mt-8">
              <GlassCard tone="light">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Productionisation patterns</p>
                <p className="mt-3 text-ink-700">
                  Real-time scoring on FastAPI + Triton Inference Server where latency demands it (pricing, risk-at-decision).
                  Batch scoring via Airflow DAGs on the customer warehouse for daily / weekly cycles (demand, churn,
                  ECL). Power BI or Looker dashboards for the FP&amp;A or risk audience. Every prediction is logged
                  with inputs, model version and confidence band, so auditors and risk reviewers can trace any
                  decision back to evidence.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="SAS, SAP IBP / Blue Yonder / o9, offshore analytics, Big-4 advisory."
            description="The structural differences and a published number from the shared tournament dataset."
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
            title="SAS migration, MAPE in the long tail, and regulator acceptance on credit risk."
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
            title="The GCC Demand-Forecast Tournament — 6 Models, 18,000 SKUs, 320 Stores, 24 Months"
            description="A 36-page PDF, the per-model scoreboard, and a downloadable model-card pack (PDFs and JSON) for each contender. Headline: TimeGPT + LightGBM ensemble at 11.4% SKU-store-week MAPE versus SAS Forecast Server at 22.8% on the shared dataset, with 4× faster batch scoring."
            contents={[
              'Tournament methodology — holdout strategy, scoring, acceptance criteria',
              'TimeGPT, Chronos, NeuralProphet, N-BEATSx, TFT, LightGBM head-to-head',
              'Long-tail SKU performance segment-by-segment',
              'Model card pack aligned to SR-11/7 and BCBS 239',
              'Working-capital impact on the retailer reference (−9.2 days)',
              'Move-to-production path with parallel-run rules'
            ]}
            filePath="/downloads/forecast-tournament.pdf"
            ctaLabel="Email me the tournament report + model cards"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Frequently asked"
              title="Data, regulator, seasonality, drift, residency."
              description="Eight questions a CFO, a Head of Credit Risk and a CISO usually share with internal audit before procurement."
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
              eyebrow="Forecast Tournament"
              title="Three weeks, fixed scope, free of charge."
              description="Six models against your last 24 months of data. Winner takes all on MAPE at your chosen granularity. Decision to move to production stays with you."
            />
            <Reveal className="mt-8">
              <GlassCard tone="light" padding="md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">What you receive</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  <li>· Per-segment MAPE for six contender models</li>
                  <li>· Model card pack for each contender (SR-11/7 aligned)</li>
                  <li>· A recommended production stack with cost envelope</li>
                  <li>· A 45-minute review with the forecasting lead</li>
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
        primaryLabel="Forecast Tournament"
        primaryHref="#contact-form"
      />
    </>
  );
}
