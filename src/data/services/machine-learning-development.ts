import type { LongPage } from '../types';

export const machineLearningDevelopment: LongPage = {
  slug: 'machine-learning-development',
  category: 'service',
  title: 'Machine Learning Development',
  seoTitle: 'Custom Machine Learning Development Services in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions designs, trains, and deploys production-grade machine learning systems for banks, government bodies, and industrial clients in Abu Dhabi, Dubai, and across the wider UAE and GCC.',
  eyebrow: 'Machine learning engineering',
  headline: 'Custom machine learning models that move from notebook to production.',
  sub: 'We design, train, and operate machine learning systems that hold up under real traffic, regulator scrutiny, and the realities of GCC data — from Arabic text to industrial telemetry.',
  heroImage: '/images/services/machine-learning-development.jpg',
  heroImageAlt: 'Abstract neural network visualisation in deep blue tones',
  heroIcon: 'neural',
  intro:
    'For most enterprises, the hardest part of machine learning is not the model. It is the data, the integration, the governance, and the long tail of operations that decide whether a model still earns its keep two years after launch. Brocode Solutions builds machine learning systems with that horizon in mind, combining experienced ML engineers, data engineers, and regulated-industry specialists out of our Abu Dhabi headquarters.',
  sections: [
    {
      heading: 'Models built for the data you actually have',
      body: 'We start from the data you have, not a textbook ideal. Our teams audit source systems, profile data quality, design feature pipelines, and select model architectures that match the volume, velocity, and noise of your environment. Whether the task is fraud detection on Emirati banking transactions, predictive maintenance on oil-and-gas assets, or churn modelling on a regional telco subscriber base, we engineer the full pipeline — ingestion, transformation, training, evaluation, and serving — so that every model in production has a clear lineage and a defensible answer for how it was built.'
    },
    {
      heading: 'Engineered for regulated and bilingual environments',
      body: 'GCC enterprises rarely have the luxury of a clean, English-only, cloud-native data estate. Our engineers are comfortable working across on-premise SQL warehouses, mainframe extracts, Arabic free-text fields, and hybrid cloud environments where data residency is non-negotiable. We bake in the controls regulators expect: data lineage, model documentation, bias and fairness assessments, change management, and human-in-the-loop checkpoints for high-stakes decisions. Where required, we deploy models inside your VPC or on-premise, with no data leaving sovereign boundaries.'
    },
    {
      heading: 'From proof of value to operating system',
      body: 'A successful model is one that survives contact with your operations. We pair every build with an MLOps backbone — versioned training data, automated retraining pipelines, model registries, canary deployments, drift detection, and clear escalation paths. That means when a model degrades, your team knows within hours rather than quarters, and there is a defined process to retrain, validate, and redeploy. The result is machine learning that compounds in value over time instead of decaying quietly in a forgotten container.'
    },
    {
      heading: 'Outcomes our clients have shipped',
      body: 'Recent engagements include a real-time anti-money-laundering scoring engine for a UAE bank, an inventory forecasting system for a national retailer that reduced stock-outs by double digits, and a defect-detection model deployed to a manufacturing line that cut manual inspection time substantially. In each case, we delivered not just a model but the surrounding system — data contracts, monitoring, runbooks, and the training to keep the team in the driving seat after handover.'
    }
  ],
  highlights: [
    { title: 'Production-grade engineering', description: 'Versioning, CI/CD for models, observability, and disaster recovery from day one.', icon: 'cogs' },
    { title: 'Arabic and bilingual ready', description: 'Native handling of Arabic text, dialects, names, and right-to-left workflows.', icon: 'chat' },
    { title: 'Regulator-friendly', description: 'Documentation, audit trails, and bias reviews that hold up under scrutiny.', icon: 'shield' },
    { title: 'Hybrid and sovereign deployments', description: 'On-premise, private cloud, or hyperscaler — your data residency, your call.', icon: 'cloud' },
    { title: 'Outcome-led delivery', description: 'We sign up to business KPIs, not just F1 scores.', icon: 'chart' },
    { title: 'Knowledge transfer built-in', description: 'Pair-programming and structured enablement so your team owns what we build.', icon: 'route' }
  ],
  whyBrocode:
    'We have built machine learning systems for some of the most demanding institutions in the UAE — central banks, sovereign-grade entities, and listed corporates — and we know the specific evidence regulators and risk committees want to see. Our teams are based in Abu Dhabi and operate under UAE labour and data law, which simplifies procurement, contracting, and on-site collaboration. We work alongside your existing IT, risk, and business teams rather than around them.',
  ourApproach:
    'Every engagement begins with a four-week discovery: we map the data, agree the target outcome, and define the success metrics with your sponsors. The build phase is delivered in two-week increments, with weekly steering check-ins. Hardening covers security review, load testing, fairness assessment, and integration with your monitoring stack. Once live, the system enters a defined run-phase where Brocode engineers stay alongside your team for an agreed support window, gradually transferring operational ownership while remaining accountable for SLAs.',
  stats: [
    { value: 60, suffix: '+', label: 'Production ML systems shipped' },
    { value: 14, label: 'GCC regulated clients served' },
    { value: 99.9, suffix: '%', label: 'Average model serving uptime' },
    { value: 8, label: 'Weeks median proof-of-value' }
  ],
  primaryCta: { label: 'Talk to an ML engineer', href: '/contact' },
  secondaryCta: { label: 'Read our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Deep Learning Solutions', href: '/services/deep-learning-solutions', description: 'Neural architectures for harder problems.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Operate models like products.' },
    { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Forecasting and decision support at scale.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Risk, fraud, and customer intelligence.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Make AI defensible end-to-end.' }
  ],
  capabilities: [
    'Supervised, unsupervised, and reinforcement learning',
    'Feature engineering and feature stores',
    'Model evaluation and statistical validation',
    'Bias, fairness, and explainability tooling',
    'Real-time and batch model serving',
    'Continuous training and retraining pipelines'
  ],
  outcomes: [
    'Production model live within 12 weeks of kickoff',
    'Documented data lineage for every prediction',
    'Drift, accuracy, and business-KPI monitoring',
    'Trained internal team able to operate the system',
    'Regulator-ready model documentation pack'
  ]
};
