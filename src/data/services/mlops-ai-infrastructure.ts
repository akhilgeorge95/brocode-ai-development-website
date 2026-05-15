import type { LongPage } from '../types';

export const mlopsAiInfrastructure: LongPage = {
  slug: 'mlops-ai-infrastructure',
  category: 'service',
  title: 'MLOps & AI Infrastructure',
  seoTitle: 'MLOps & AI Infrastructure Services in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions designs and operates MLOps platforms and AI infrastructure for enterprises in Abu Dhabi, Dubai, and across the wider UAE/GCC — with sovereign and hybrid deployment options.',
  eyebrow: 'Platform engineering for AI',
  headline: 'MLOps platforms that turn one-off models into a dependable production estate.',
  sub: 'We design and run the infrastructure, pipelines, and operating model that let your AI systems ship safely, monitor themselves, and improve over time.',
  heroImage: '/images/services/mlops-ai-infrastructure.jpg',
  heroImageAlt: 'Engineer monitoring model deployment pipelines and inference dashboards across multiple wall-mounted displays in an operations room',
  heroIcon: 'cogs',
  intro:
    'Most enterprises do not have a model problem — they have an operating problem. The first model goes live, then the second, then the fifth, and nobody can say with confidence which versions are in production, what they were trained on, or how they are performing this week. Brocode Solutions builds MLOps platforms and AI infrastructure that bring discipline to the entire model lifecycle, from data ingestion through training, deployment, monitoring, and retirement.',
  sections: [
    {
      heading: 'A platform shaped by your environment',
      body: 'There is no single right MLOps stack. The right one depends on whether you sit on AWS, Azure, OCI, or on-premise; whether your data scientists work in notebooks, IDEs, or vendor platforms; and whether your regulators allow workloads to leave the country. We design MLOps platforms that fit your environment — using managed services where they earn their keep, open-source components such as MLflow, Kubeflow, Airflow, Feast, Ray, and Seldon where flexibility matters, and bespoke glue only when nothing else fits. The goal is a platform your team can operate and extend rather than a stack that depends on us.'
    },
    {
      heading: 'Pipelines from data to decision',
      body: 'A working MLOps platform covers the whole journey, not just deployment. We build versioned feature pipelines, reproducible training jobs, model registries with promotion gates, CI/CD that runs evaluation and bias checks before any release, canary and shadow deployments, and inference services that scale predictably under load. Inference requests are captured with the feature payload, the serving model build, and the confidence score returned, so engineering and audit teams can reconstruct exactly why a given output was produced. Batch and real-time serving share the same governance backbone rather than living in separate worlds.'
    },
    {
      heading: 'Monitoring, drift, and the long tail of operations',
      body: 'Most model failures are quiet. Accuracy slips, distributions shift, an upstream system changes a field, and nobody notices for a quarter. Our platforms monitor data quality, feature distributions, prediction distributions, business KPIs, and infrastructure metrics, with alerts tuned to your operational tempo. Drift detection triggers retraining workflows automatically where appropriate, or routes alerts to on-call engineers where human judgement is required. Runbooks, post-incident reviews, and SLA dashboards make AI operations look and feel like any other production capability your team already runs.'
    },
    {
      heading: 'Governance, security, and sovereign options',
      body: 'AI infrastructure in regulated industries has to satisfy security, risk, audit, and data residency teams before it satisfies data scientists. We bake in role-based access control, secrets management, network isolation, encryption at rest and in transit, model and dataset access logging, and tamper-evident audit trails. Where data residency demands it, the entire platform runs on-premise or inside an ADGM- or DIFC-resident tenant. We also produce the documentation pack regulators and internal audit will ask for, covering model inventory, change history, fairness evidence, and incident logs.'
    }
  ],
  highlights: [
    { title: 'Cloud, hybrid, or on-premise', description: 'Reference architectures for AWS, Azure, OCI, and air-gapped environments.', icon: 'cloud' },
    { title: 'Open-source where it counts', description: 'MLflow, Kubeflow, Airflow, Feast, Ray, and Seldon used pragmatically.', icon: 'layers' },
    { title: 'CI/CD for models', description: 'Promotion gates, automated evaluation, and bias checks before any release.', icon: 'workflow' },
    { title: 'Drift and quality monitoring', description: 'Data, feature, prediction, and KPI monitoring with tuned alerts.', icon: 'chart' },
    { title: 'Feature stores done right', description: 'Consistent features across training and serving, batch and real-time.', icon: 'database' },
    { title: 'Audit-ready governance', description: 'Model inventory, change history, and access logs for every decision.', icon: 'shield' }
  ],
  whyBrocode:
    'We have built MLOps platforms for UAE banks, government bodies, energy operators, and listed industrial groups, including air-gapped and sovereign environments. Our platform engineers, SREs, and data engineers run live AI estates today, so the practices we recommend are the ones we operate. Teams are Abu Dhabi based, contract under UAE law, and work alongside your platform, security, and data teams from day one.',
  ourApproach:
    'We begin with a maturity assessment covering your current model estate, tooling, data foundations, and operating model. From there we agree a target architecture and a sequencing plan that delivers value within the first quarter — usually a model registry, a CI/CD pipeline, and monitoring on the highest-risk model. Subsequent phases extend coverage to feature stores, automated retraining, and full governance tooling. Throughout, we pair with your engineers to transfer knowledge, and we leave behind documentation, runbooks, and the training they need to operate the platform without us.',
  stats: [
    { value: 200, suffix: '+', label: 'Models under management across clients' },
    { value: 99.9, suffix: '%', label: 'Inference uptime maintained' },
    { value: 70, suffix: '%', label: 'Average reduction in release cycle time' },
    { value: 12, label: 'Weeks median to platform v1' }
  ],
  primaryCta: { label: 'Talk to a platform engineer', href: '/contact' },
  secondaryCta: { label: 'Explore our stack', href: '/technology/stack' },
  related: [
    { label: 'Machine Learning Development', href: '/services/machine-learning-development', description: 'Models that earn their way onto the platform.' },
    { label: 'Self-hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Sovereign generative AI inside the same backbone.' },
    { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Clean, governed data feeding every model.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Policies and controls the platform enforces.' },
    { label: 'AI Model Optimization', href: '/services/ai-model-optimization', description: 'Squeeze more from the infrastructure you already pay for.' }
  ],
  capabilities: [
    'Reference architectures for cloud, hybrid, and air-gapped',
    'Model registries and CI/CD for ML',
    'Feature stores for batch and real-time serving',
    'Drift, quality, and KPI monitoring',
    'Automated retraining and canary deployment',
    'Access control, audit trails, and governance tooling'
  ],
  outcomes: [
    'Single, governed inventory of every production model',
    'Faster, safer release cycles for new models',
    'Earlier detection of accuracy and data drift',
    'Documentation pack ready for audit and regulator review',
    'Internal team able to operate and extend the platform'
  ]
};
