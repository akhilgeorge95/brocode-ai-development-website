import type { LongPage } from '../types';

export const predictiveAnalytics: LongPage = {
  slug: 'predictive-analytics',
  category: 'service',
  title: 'Predictive Analytics',
  seoTitle: 'Predictive Analytics Services in the UAE & GCC',
  seoDescription:
    'Brocode Solutions builds forecasting, risk, and decision-support systems for banks, government bodies, and industrial operators across the UAE and wider GCC.',
  eyebrow: 'Forecasting and decision intelligence',
  headline: 'Predictive analytics that decision-makers actually use.',
  sub: 'We build forecasting and risk-scoring systems that connect cleanly to your planning cycles, your operational tooling, and the calls your leaders make every week.',
  heroImage: '/images/services/predictive-analytics.jpg',
  heroImageAlt: 'Analyst reviewing a layered forecasting dashboard with confidence bands and trend lines on a wide monitor',
  heroIcon: 'chart',
  intro:
    'A forecast is only useful if someone can act on it. Brocode Solutions designs predictive analytics systems that produce numbers leaders trust, with the context, confidence intervals, and operational hooks needed to drive real decisions. Our work spans demand planning, credit and fraud scoring, asset failure prediction, customer lifetime value, and workforce planning, delivered out of our Abu Dhabi headquarters for clients across the GCC.',
  sections: [
    {
      heading: 'Forecasts tied to the way you plan',
      body: 'Every business already has a planning rhythm — weekly stock reviews, monthly capital committee meetings, quarterly board reporting. Our predictive systems are designed around those cycles rather than imposed on top of them. We work with your finance, operations, and commercial teams to agree what is being predicted, at what horizon, with what tolerance for error, and where the output lands. That might mean a SKU-level demand forecast feeding directly into your ERP, a default probability score embedded in your loan origination workflow, or a maintenance risk index that schedules technician routes for the following week.'
    },
    {
      heading: 'Handling the noise in GCC data',
      body: 'Real forecasts in the region have to cope with Ramadan effects, school holidays, summer travel patterns, oil price cycles, and one-off government initiatives that rewrite demand overnight. Our teams build models that explicitly account for these factors rather than treating them as inconvenient outliers. We blend classical time-series methods with gradient-boosted trees and deep-learning architectures where they earn their keep, and we are equally happy explaining a SARIMAX model to a treasurer as we are tuning a temporal fusion transformer for a retail planner.'
    },
    {
      heading: 'Confidence intervals, not just point estimates',
      body: 'Single-number forecasts give a false sense of certainty and often get blamed when reality diverges. We deliver predictions with calibrated confidence intervals, scenario overlays, and clear backtesting evidence so reviewers can see how the model has performed against actuals over time. Where decisions carry material risk — capital allocation, hedging, large procurement orders — we add scenario simulation and sensitivity analysis so your team can stress-test the forecast under alternative assumptions before committing.'
    },
    {
      heading: 'Operational integration from the first sprint',
      body: 'A forecast that lives in a notebook helps nobody. We integrate predictions into the systems your teams already use — Power BI, Tableau, Oracle, SAP, custom planning tools, or a dedicated decision workspace we build for you. Every prediction is logged with its inputs, model version, and confidence band, so auditors and risk reviewers can trace any decision back to the evidence behind it. The result is analytics that move from a quarterly slide deck into the weekly operating routine of the organisation.'
    }
  ],
  highlights: [
    { title: 'Calibrated probabilistic forecasts', description: 'Confidence intervals and scenario overlays, not just point estimates.', icon: 'chart' },
    { title: 'Seasonality the region understands', description: 'Ramadan, school holidays, weather, and policy shocks treated as first-class inputs.', icon: 'compass' },
    { title: 'Decision-workflow integration', description: 'Forecasts land in the planning tools your teams already operate.', icon: 'workflow' },
    { title: 'Backtested and auditable', description: 'Every model ships with historical accuracy evidence and full lineage.', icon: 'shield' },
    { title: 'Explainable for risk reviewers', description: 'Feature contributions and what-if analysis for every prediction.', icon: 'brain' },
    { title: 'Operates at SKU and account level', description: 'Granular forecasts across thousands of series without bespoke effort.', icon: 'database' }
  ],
  whyBrocode:
    'We have delivered forecasting and risk-scoring systems for GCC banks, national retailers, energy operators, and government planning bodies. Our analysts understand UAE accounting cycles, Hijri calendar effects, and the way regional supply chains actually move. Teams are based in Abu Dhabi, contract under UAE law, and work shoulder-to-shoulder with your finance, planning, and risk functions rather than presenting from a distance.',
  ourApproach:
    'Discovery begins with a structured review of historical data, current forecasting practice, and the decisions the new system needs to support. We agree accuracy targets and economic value per percentage point of improvement up front. Build phases run in two-week sprints with shared backtesting dashboards visible to your team throughout. Before go-live, we run a parallel-run period against your existing forecast so stakeholders see the lift in their own terms. Post-launch, we monitor accuracy weekly and recalibrate models on a defined cadence.',
  stats: [
    { value: 35, suffix: '%', label: 'Average forecast error reduction' },
    { value: 40, suffix: '+', label: 'Predictive systems in production' },
    { value: 12, label: 'GCC enterprise clients served' },
    { value: 6, label: 'Weeks median to first live forecast' }
  ],
  primaryCta: { label: 'Speak to a forecasting lead', href: '/contact' },
  secondaryCta: { label: 'See our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Machine Learning Development', href: '/services/machine-learning-development', description: 'The engineering backbone for production forecasts.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Keep predictions accurate as the world changes.' },
    { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Clean, timely data is half the forecasting battle.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Credit, fraud, and treasury forecasting.' },
    { label: 'Retail & E-commerce', href: '/industries/retail-ecommerce', description: 'Demand planning and customer analytics.' }
  ],
  capabilities: [
    'Time-series forecasting with classical and deep models',
    'Credit, fraud, and propensity scoring',
    'Hierarchical and reconciled forecasts',
    'Scenario simulation and sensitivity analysis',
    'Calibrated probabilistic outputs',
    'Drift detection and automated recalibration'
  ],
  outcomes: [
    'Forecast accuracy improvements measured against your baseline',
    'Predictions embedded in existing planning tools',
    'Documented backtesting and audit evidence',
    'Trained planners and analysts who own the system',
    'Quarterly accuracy reviews built into operations'
  ]
};
