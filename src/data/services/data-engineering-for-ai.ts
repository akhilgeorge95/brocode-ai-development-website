import type { LongPage } from '../types';

export const dataEngineeringForAi: LongPage = {
  slug: 'data-engineering-for-ai',
  category: 'service',
  title: 'Data Engineering for AI',
  seoTitle: 'Data Engineering Services for AI in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions builds the data foundations AI depends on — lakehouses, feature stores, streaming pipelines, and governance — for UAE enterprises in Abu Dhabi, Dubai, and the wider GCC.',
  eyebrow: 'Data foundations for AI',
  headline: 'Engineering the data that AI models actually need.',
  sub: 'Lakehouses, feature stores, streaming pipelines, and governed catalogues built for AI workloads — designed around the data residency, latency, and quality realities of GCC enterprises.',
  heroImage: '/images/services/data-engineering-for-ai.jpg',
  heroImageAlt: 'Data engineer reviewing a streaming pipeline architecture diagram on a wall-mounted screen in Abu Dhabi',
  heroIcon: 'database',
  intro:
    'Every credible AI engagement eventually hits the same wall: the data is not where it needs to be, in the shape it needs to be, with the quality it needs to be. Brocode Solutions builds the data foundations that turn aspirational AI roadmaps into production systems. From our Abu Dhabi base our data engineers design and operate the lakehouses, streaming pipelines, feature stores, and governed catalogues that GCC banks, insurers, ministries, retailers, and energy companies depend on, working within sovereign data boundaries and the integration constraints of core platforms that were never designed with AI in mind.',
  sections: [
    {
      heading: 'Lakehouses tuned for AI workloads',
      body: 'We design lakehouses using Delta Lake, Apache Iceberg, or Apache Hudi, picking the table format that fits your query, streaming, and governance needs rather than the one a vendor is selling that quarter. The platform handles structured transactional data, semi-structured logs, free-text Arabic and English documents, and the binary assets vision and speech models depend on. Bronze, silver, and gold layers carry clear contracts, with schema enforcement and quality checks at every transition. Compute is separated from storage so training, batch scoring, and analytics can scale independently without disrupting each other, and so cost is allocated to the workload that drives it.'
    },
    {
      heading: 'Streaming pipelines for real-time intelligence',
      body: 'Real-time fraud scoring, dynamic pricing, predictive maintenance, and operational risk monitoring all depend on streaming. We build event-driven pipelines on Kafka, Kinesis, or Event Hubs with stream processing in Flink, Spark Structured Streaming, or ksqlDB depending on the workload profile. Exactly-once semantics, watermarking, and replayability are designed in, not retrofitted. We pay particular attention to schema evolution and contract testing because most streaming outages in regulated environments come from a quiet schema change upstream rather than a platform failure. The result is event flows your AI services can rely on under transaction-day load.'
    },
    {
      heading: 'Feature stores and training datasets you can trust',
      body: 'Models are only as good as their features and the discipline around them. We stand up feature stores using Feast, Tecton, Databricks Feature Store, or native cloud offerings, depending on the surrounding platform choices. Features are defined once, versioned, and reused across teams, with point-in-time correctness guaranteed for training and online retrieval. Training datasets are reproducible from source, with lineage from raw event to feature to model. That lineage matters in regulated environments because when a regulator or auditor asks how a specific decision was made, the answer must be defensible from data to deployment.'
    },
    {
      heading: 'Governance, residency, and quality woven through',
      body: 'Data foundations only earn trust when governance is built in. We integrate the lakehouse with cataloguing tools such as Unity Catalog, Collibra, or Atlan, applying role-based access, attribute-level masking, and tokenisation where needed. Data quality is monitored continuously with tools such as Great Expectations or Soda, with thresholds tied to downstream model SLAs. Where UAE data residency rules apply, we keep regulated datasets inside sovereign boundaries and design federated patterns for cross-jurisdictional analytics. The result is a data estate where AI teams move quickly because the controls protect them, rather than slowing them down.'
    }
  ],
  highlights: [
    { title: 'Lakehouse done right', description: 'Delta, Iceberg, or Hudi chosen on merit, not vendor pressure.', icon: 'layers' },
    { title: 'Streaming with guarantees', description: 'Exactly-once, replayable pipelines on Kafka, Kinesis, Event Hubs.', icon: 'bolt' },
    { title: 'Feature stores that scale', description: 'Reusable, versioned features with point-in-time correctness.', icon: 'database' },
    { title: 'Continuous quality', description: 'Data tests tied to downstream model SLAs, not afterthoughts.', icon: 'shield' },
    { title: 'Sovereign-ready', description: 'Designs that respect UAE data residency and cross-border rules.', icon: 'cloud' },
    { title: 'Catalogued and governed', description: 'Unity Catalog, Collibra, Atlan — pick what your governance team owns.', icon: 'doc' }
  ],
  whyBrocode:
    'We have built data platforms inside UAE banks, sovereign entities, and large industrial groups, so we know what it takes to clear architectural review, security review, and the data privacy office in a single quarter. Our engineers hold deep certifications across Databricks, Snowflake, Azure, AWS, and Google Cloud, and we are based in Abu Dhabi under UAE law, which makes contracting, on-site work, and sovereign-cloud collaboration straightforward.',
  ourApproach:
    'We open with a four-week discovery focused on use cases, data sources, residency constraints, and platform choices. From there we deliver in two-week sprints, building the first end-to-end slice — one source, one pipeline, one feature set, one model consumer — to validate the architecture before scaling. Hardening covers cataloguing, access controls, observability, and disaster recovery. After go-live we operate the platform alongside your data engineering team under an agreed support window, transferring runbook ownership while staying accountable for performance and reliability through the agreed handover.',
  stats: [
    { value: 50, suffix: '+', label: 'Data platforms delivered for AI workloads' },
    { value: 11, label: 'GCC regulated clients served' },
    { value: 99.9, suffix: '%', label: 'Pipeline freshness SLA achieved' },
    { value: 6, label: 'Weeks median first-slice delivery' }
  ],
  primaryCta: { label: 'Plan your data foundations', href: '/contact' },
  secondaryCta: { label: 'See our technology stack', href: '/technology/stack' },
  related: [
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Operate the models the platform feeds.' },
    { label: 'Machine Learning Development', href: '/services/machine-learning-development', description: 'The downstream consumer of clean data.' },
    { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Forecasting that depends on solid features.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Data governance that holds up at audit.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Risk, fraud, and customer data foundations.' }
  ],
  capabilities: [
    'Lakehouse architecture on Delta, Iceberg, or Hudi',
    'Streaming pipelines on Kafka, Kinesis, Event Hubs',
    'Feature store design and operation',
    'Data cataloguing and governance integration',
    'Data quality monitoring and contracts',
    'Sovereign and hybrid-cloud data residency design'
  ],
  outcomes: [
    'Curated bronze, silver, gold layers with clear contracts',
    'Reusable features versioned and discoverable across teams',
    'Real-time event flows with replay and exactly-once semantics',
    'Catalogued, access-controlled, audit-ready datasets',
    'Documented lineage from raw event to model decision'
  ]
};
