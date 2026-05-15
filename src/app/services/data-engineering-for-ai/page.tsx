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
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'data-engineering-for-ai';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I lead data platform at [organisation] and we're trying to make our estate AI-ready. Our current stack includes [Snowflake / Databricks / on-prem]. Could we book a 60-minute architecture review with your principal data architect?";

export const metadata: Metadata = {
  title: 'Data Engineering for AI — Lakehouse, Feature Store, Lineage for the GCC',
  description:
    'A production-grade AI-ready data foundation — lakehouse, feature store, contracts, lineage — stood up on your Databricks or Snowflake estate in 90 days for the first use case.',
  alternates: { canonical: 'https://www.brocode.ae/services/data-engineering-for-ai' },
  openGraph: {
    title: 'Data Engineering for AI — Brocode Solutions',
    description:
      'dbt, Iceberg, Feast and the SAP / Oracle / mainframe patterns most consultancies skip. Median feature lead time 14 weeks → 9 days.',
    url: 'https://www.brocode.ae/services/data-engineering-for-ai',
    images: ['/images/services/data-engineering-for-ai.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Engineering for AI — Brocode',
    description: 'An AI-ready lakehouse and feature store stood up on your Databricks or Snowflake estate in 90 days.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a 60-minute Data Estate Review',
  subtitle:
    'A Brocode principal data architect reviews your estate, your roadmap and your sovereignty constraints, and replies within one business day.',
  ctaLabel: 'Request the data estate review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'platform',
      label: 'Current data platform',
      type: 'multiselect',
      required: true,
      options: [
        'Databricks',
        'Snowflake',
        'Microsoft Fabric',
        'On-prem Hadoop',
        'Oracle Exadata',
        'SAP BW',
        'Teradata',
        'None yet'
      ]
    },
    {
      name: 'sources',
      label: 'Primary source systems to integrate',
      type: 'multiselect',
      required: true,
      options: [
        'SAP S/4HANA',
        'SAP ECC',
        'Oracle EBS',
        'IBM mainframe',
        'Salesforce',
        'Homegrown core banking',
        'SCADA-historian',
        'Other'
      ]
    },
    {
      name: 'useCases',
      label: 'AI use cases targeted in next 12 months',
      type: 'multiselect',
      options: [
        'Credit risk',
        'Fraud',
        'Customer 360',
        'Predictive maintenance',
        'Demand forecasting',
        'GenAI knowledge assistant',
        'Other'
      ]
    },
    {
      name: 'volume',
      label: 'Approximate active data volume',
      type: 'select',
      options: ['<10 TB', '10–100 TB', '100 TB–1 PB', '>1 PB']
    },
    {
      name: 'deployment',
      label: 'Deployment constraint',
      type: 'select',
      options: ['Hyperscaler-any', 'UAE/KSA region only', 'Sovereign cloud only', 'On-premise only', 'Hybrid']
    },
    { name: 'milestone', label: 'Mandated first production milestone', type: 'date' }
  ]
};

const compareRows: CompareRow[] = [
  {
    feature: 'Platform-agnostic (Iceberg / Delta / Snowpark on merit)',
    brocode: true,
    competitors: ['Delta + Unity only', 'Snowpark only', 'Whatever sells', 'Whatever was bought']
  },
  {
    feature: 'SAP ODP + Debezium extraction (licence-safe)',
    brocode: 'Reusable pattern, counsel-reviewed',
    competitors: ['Limited', 'Limited', 'Often unsafe', 'Unsafe by default']
  },
  {
    feature: 'Mainframe CDC (Precisely / IIDR)',
    brocode: true,
    competitors: [false, false, false, 'Ignored']
  },
  {
    feature: 'Feature store with point-in-time correctness',
    brocode: 'Feast or Tecton',
    competitors: ['Databricks Feature Store only', 'Limited', 'Pipeline files, no store', 'Not delivered']
  },
  {
    feature: 'Named senior engineers in SoW',
    brocode: true,
    competitors: [false, false, false, 'Partner-plus-pyramid'],
    note: 'CVs visible before contract signature.'
  },
  {
    feature: 'Stays after go-live',
    brocode: 'Hypercare + handover deliverable',
    competitors: ['Rotates off in 12 weeks', 'Rotates off in 12 weeks', 'Sometimes', 'Rotates off']
  },
  {
    feature: 'First production AI use case live',
    brocode: '90 days',
    competitors: ['Vendor-locked roadmap', 'Vendor-locked roadmap', '6–12 months', 'Slides, not code']
  }
];

const stackComponents: { tool: string; role: string }[] = [
  { tool: 'dbt Core + Cloud', role: 'Transformation' },
  { tool: 'Apache Airflow / Dagster', role: 'Orchestration' },
  { tool: 'Apache Iceberg on S3 / ADLS', role: 'Open table format' },
  { tool: 'Great Expectations + Soda Core', role: 'Quality gates' },
  { tool: 'OpenLineage + Marquez', role: 'Lineage' },
  { tool: 'DataHub / Unity Catalog', role: 'Catalogue & governance' },
  { tool: 'Feast or Tecton', role: 'Feature store' },
  { tool: 'Debezium + Kafka', role: 'CDC from SAP / Oracle' },
  { tool: 'Apache Spark / Snowpark', role: 'Heavy compute' },
  { tool: 'Precisely Connect / IBM IIDR', role: 'Mainframe CDC' }
];

const timelineSteps = [
  {
    label: 'Week 0–2',
    title: 'Discovery and architecture',
    description:
      'Source inventory, residency mapping, contract catalogue, target use case. Output: a one-page reference architecture aligned to your Databricks or Snowflake estate.',
    metric: 'Use case scoped'
  },
  {
    label: 'Week 3–6',
    title: 'Bronze, silver, gold layers',
    description:
      'Iceberg tables on your storage. dbt models with contract tests. Great Expectations gates at every layer transition. Lineage captured from raw source to feature.',
    metric: 'Pipeline live'
  },
  {
    label: 'Week 7–10',
    title: 'Feature store and serving',
    description:
      'Feature definitions registered in Feast. Point-in-time correctness for training. Online retrieval wired into the consuming model. Lineage extends from feature to prediction.',
    metric: 'Feature lead time → days'
  },
  {
    label: 'Week 11–13',
    title: 'First production use case',
    description:
      'One named AI use case live on the new foundation with monitoring, freshness SLAs and a runbook. The remaining roadmap has a working template to repeat.',
    metric: '90-day milestone'
  }
];

const failurePatterns: { title: string; body: string }[] = [
  {
    title: 'Fourteen disconnected systems',
    body: 'SAP S/4HANA, Oracle EBS, an IBM mainframe, three S3 buckets nobody documents, half a dozen Salesforce orgs, Excel exports. No two teams agree what "active customer" means. The first AI model is stuck because the data definition is stuck.'
  },
  {
    title: 'No contracts, no lineage',
    body: 'The data swamp the previous CDO built is queryable but not trustable. A schema change upstream breaks five downstream pipelines on a Tuesday morning. The data engineering team spends 70 percent of its time on one-off pipelines, not platform work.'
  },
  {
    title: 'Vendor-pro-services bias',
    body: 'Databricks PS architects everything into Delta and Unity. Snowflake PS architects everything into Snowpark. Neither is incentivised to stay platform-pragmatic, and the mainframe layer is quietly ignored. Twelve weeks later the team rotates off and the gap reopens.'
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'Why Brocode instead of Databricks or Snowflake professional services?',
    answer:
      'Databricks PS will architect everything into Delta and Unity. Snowflake PS will architect everything into Snowpark. Both are loyal to their platform; neither is incentivised to integrate mainframe and SAP properly, and both rotate off in 12 weeks. Brocode is platform-pragmatic — Iceberg, Delta or Snowpark per use case — and stays through hypercare. The handover is a deliverable, not a hope.'
  },
  {
    question: 'How do you handle SAP licence safety on extraction?',
    answer:
      'SAP extraction-licence terms are a live legal area. We use SAP-supported interfaces: ODP for full and delta, BAPI / IDoc where ODP is not present, and Debezium against CDS views or replicated change tables where it is. Our patterns are reviewed by commercial counsel and we hand the customer the licence-position memo at SoW signature. We have closed three SAP licence reviews without findings on engagements where the customer arrived with an unsafe extraction pattern.'
  },
  {
    question: 'Can you deliver this without a hyperscaler?',
    answer:
      'Yes. We have delivered the stack on G42 Cloud, Khazna, and on-prem OpenShift. The reference architecture pins Iceberg on the customer object store, dbt and Airflow on Kubernetes, and Feast on Postgres with Redis for online. Some components (Unity Catalog, native Snowflake) are platform-bound; we substitute open-source equivalents (DataHub, Marquez) where the customer is fully sovereign.'
  },
  {
    question: 'How is the data team integrated, not displaced?',
    answer:
      'Engagements run as a joint pod: customer data engineers work alongside Brocode engineers in the same backlog, same standup, same code review. Our patterns are documented as the customer team works on them. By week eight the customer team is leading sprints; by handover the platform is owned by the customer team with Brocode in advisory hypercare.'
  },
  {
    question: 'What does the 90-day foundation sprint actually deliver?',
    answer:
      'One production AI use case end-to-end: source extraction with contracts, certified bronze and silver tables in Iceberg, gold marts on dbt, features registered in Feast, lineage from raw source to model output, quality gates with Great Expectations, and monitoring with freshness SLAs. The remaining roadmap has a working template to replicate for use case two onwards.'
  },
  {
    question: 'What is the typical FinOps story?',
    answer:
      'Compute is separated from storage. Training, batch scoring and analytics scale independently. Iceberg lets us right-size compute per workload rather than buying a Databricks all-purpose cluster sized for the largest job. On Snowflake we tune warehouse sizes per workload and move ad-hoc analytics to smaller warehouses. Median Databricks or Snowflake spend reduction across the first eight engagements: 22 percent at six months.'
  },
  {
    question: 'How do you handle the mainframe layer most consultancies ignore?',
    answer:
      'We use Precisely Connect or IBM IIDR for change data capture from IBM Z and iSeries cores, replicating to Iceberg or directly into Kafka where the use case is event-driven. Where neither is licensed, we work with the mainframe team on a scheduled VSAM or Db2 z/OS extract through z/OS Connect EE. We never pretend the mainframe does not exist.'
  }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Data Engineering for AI',
  name: 'Data Engineering for AI — Lakehouse, Feature Store, Lineage',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
  description:
    'A production-grade AI-ready data foundation — lakehouse, feature store, contracts, lineage, quality — stood up on Databricks or Snowflake in 90 days. dbt, Iceberg, Feast, OpenLineage, Debezium.',
  url: 'https://www.brocode.ae/services/data-engineering-for-ai'
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

export default function DataEngineeringForAIPage() {
  return (
    <>
      <Script id="ld-service-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="ld-faq-de" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO — source-to-feature-store animation */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/data-engineering-for-ai.jpg"
            alt="Data engineer reviewing a source-to-feature-store architecture with dbt, Iceberg and Feast on a wall-mounted screen"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/90 to-ink-900" />
          <GradientMesh tone="midnight" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-28 md:pb-24">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Data Engineering for AI' }
            ]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-white/70">Data foundations for AI</p>
              <h1 className="text-balance text-display-xl">
                An AI-ready data foundation on your Databricks or Snowflake estate in 90 days.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/75">
                Lakehouse, feature store, lineage, contracts, quality gates — stood up around your first production AI
                use case with measurable feature-availability SLAs and a documented path off the swamp.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Book a 60-minute data estate review
                </MagneticButton>
                <a
                  href="#diagnostic"
                  data-event="secondary_cta_click"
                  data-page={SLUG}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Take the 47-point AI-Ready Data Estate Diagnostic
                </a>
              </div>
              <p className="mt-5 text-xs text-white/60">
                Median GCC enterprise scores 41/100. The gap to a 75 (production-AI ready) is 6–9 months of focused
                engineering, not 24.
              </p>
            </div>

            {/* Source → feature store animation flow */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Source → feature store</p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="space-y-2 opacity-70">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Sources</p>
                    {['SAP S/4HANA', 'Oracle EBS', 'IBM mainframe', 'Excel exports'].map((s) => (
                      <div key={s} className="rounded-md border border-white/10 bg-ink-900 px-2 py-1.5 font-mono text-[10px] text-white/70">
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-200">Features</p>
                    {[
                      'customer_30d_avg_balance',
                      'branch_footfall_p90',
                      'equipment_vibration_rms',
                      'claim_riskscore_v3'
                    ].map((s) => (
                      <div
                        key={s}
                        className="rounded-md border border-emerald-300/20 bg-emerald-700/10 px-2 py-1.5 font-mono text-[10px] text-emerald-100"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-md border border-brand-300/30 bg-brand-700/20 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-wider text-brand-100">
                  dbt → Iceberg → Feast
                </div>

                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Feature lead time</p>
                  <p className="mt-1 font-mono text-2xl font-bold text-white">14 wk → 9 days</p>
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
              { value: '14→9d', label: 'Feature lead time at a tier-1 GCC bank' },
              { value: '41/100', label: 'Median GCC data estate score (n=80)' },
              { value: '11', label: 'Source systems unified in one engagement' },
              { value: '90 days', label: 'To first production AI use case' }
            ]}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why your AI roadmap is stuck at the data layer"
            title="The models are designed. The scientists are hired. The data is the problem."
            description="Three failure patterns we have seen across more than fifty data platforms in the GCC. The roadmap is approved. The Databricks or Snowflake spend is already AED 6–18M per year. The board is asking, in writing, what business value the platform has actually produced."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {failurePatterns.map((p) => (
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

      {/* MECHANISM — the AI-ready data stack */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Brocode AI-Ready Data Stack"
            title="The components we pin and what each one does."
            description="Platform-pragmatic, not platform-loyal. Iceberg, Delta or Snowpark chosen per use case. Open-source equivalents substituted where the customer is fully sovereign. Nothing chosen because a vendor pays us to choose it."
          />
          <BentoGrid className="mt-12">
            {stackComponents.map((c, i) => (
              <BentoCell key={c.tool} span="md" variant={i % 4 === 0 ? 'brand' : i % 4 === 2 ? 'dark' : 'light'}>
                <h3 className={`text-lg font-semibold ${i % 4 === 0 || i % 4 === 2 ? 'text-white' : 'text-ink-900'}`}>
                  {c.tool}
                </h3>
                <p className={`mt-2 text-sm ${i % 4 === 0 || i % 4 === 2 ? 'text-white/70' : 'text-ink-600'}`}>
                  {c.role}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* SAP / Oracle / mainframe — the parts most consultancies skip */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The parts most consultancies skip"
                title="SAP ODP. Oracle GoldenGate alternatives. Mainframe CDC."
                description="The cost-per-row of replicating SAP, Oracle and mainframe data sits inside three nuances: licence-safe extraction patterns, schema-evolution tolerance, and the change window your operations team will actually grant. We have built reusable extraction modules for all three."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                <li className="rounded-xl border border-ink-100 bg-white p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand">SAP S/4HANA + ECC</p>
                  <p className="mt-2 text-ink-900 font-semibold">ODP + Debezium against CDS views</p>
                  <p className="mt-1 text-sm text-ink-600">
                    Licence-safe. Counsel-reviewed. We hand the customer the licence-position memo at SoW signature.
                  </p>
                </li>
                <li className="rounded-xl border border-ink-100 bg-white p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand">Oracle EBS / Fusion</p>
                  <p className="mt-2 text-ink-900 font-semibold">Concurrent Programs → OIC → Kafka, or Debezium against replicated CDC tables</p>
                  <p className="mt-1 text-sm text-ink-600">GoldenGate alternative where licence is not in place.</p>
                </li>
                <li className="rounded-xl border border-ink-100 bg-white p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand">IBM Z / iSeries mainframe</p>
                  <p className="mt-2 text-ink-900 font-semibold">Precisely Connect or IBM IIDR for CDC</p>
                  <p className="mt-1 text-sm text-ink-600">
                    No mainframe code change. Replicates to Iceberg or Kafka inside the customer change window owned by the mainframe team.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 90-DAY TIMELINE */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="The 90-day foundation sprint"
            title="One use case end-to-end. The rest of the roadmap inherits a working template."
            description="Fixed scope. Named pod in the SoW: a Brocode principal data architect, two senior data engineers, and a delivery lead. CVs are visible before contract signature."
          />
          <div className="mt-12 max-w-3xl">
            <ScrollTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Databricks PS, Snowflake PS, Big-4 and offshore ETL — honestly."
            description="Vendor pro-services do good work inside their own platform and rotate off at week 12. Big-4 fields partner-plus-pyramid and ships slides. Offshore ETL shops move data but do not feed models. We are platform-pragmatic, senior-heavy, and ship in code."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['Databricks PS', 'Snowflake PS', 'Big-4 data practice', 'Offshore ETL shop']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Production references"
            title="Two engagements. Two quantified outcomes."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Tier-1 GCC bank</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  Eleven source systems unified. Feature lead time 14 weeks to 9 days.
                </h3>
                <p className="mt-3 text-ink-700">
                  AED 4.2M annualised saving on duplicated ETL effort. Iceberg-on-S3 lakehouse, Feast for serving, dbt
                  for transformation, OpenLineage end-to-end. The first AI use case (credit decisioning) live on the
                  foundation in 90 days; six follow-on use cases live in the next twelve months on the same pattern.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">UAE energy major</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  SAP S/4HANA + plant historian + maintenance system unified.
                </h3>
                <p className="mt-3 text-ink-700">
                  Azure UAE North region, sovereign-aligned. Predictive-maintenance model live on the lakehouse with a
                  documented uplift on unplanned downtime. SAP ODP extraction pattern reviewed by SAP licence counsel
                  before go-live.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET — 47-point diagnostic (prominent) */}
      <section id="diagnostic" className="relative isolate overflow-hidden bg-ink-900 py-20 text-white">
        <GradientMesh tone="midnight" />
        <div className="container-site relative z-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">The diagnostic</p>
            <h2 className="mt-3 text-display-md text-white">
              The 47-point AI-Ready Data Estate Diagnostic.
            </h2>
            <p className="mt-4 text-white/80">
              An interactive self-assessment plus a 24-page PDF generated for your answers. Covers source coverage,
              contract maturity, lineage completeness, feature-store readiness, governance, FinOps and team capacity.
              Median GCC enterprise scores 41/100. The gap to a 75 is 6–9 months of focused engineering.
            </p>
          </div>
          <LeadMagnetGate
            pageSlug={SLUG}
            title="AI-Ready Data Estate Diagnostic — 47 Points"
            description="A self-score against what an AI programme actually needs. Includes the scoring rubric and the median GCC benchmark by sector."
            filePath="/downloads/ai-ready-data-estate-diagnostic.pdf"
            ctaLabel="Email me the diagnostic"
            contents={[
              'Source and ingestion coverage (12 points)',
              'Modelling and transformation (8 points)',
              'Quality and contracts (8 points)',
              'Lineage and governance (7 points)',
              'Serving and feature stores (6 points)',
              'FinOps and team capacity (6 points)',
              'Scoring rubric — median GCC org 41/100',
              'Benchmark by sector (banking, energy, government, telco)'
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Frequently asked"
            title="What Heads of Data Platform actually want to know."
          />
          <div className="mt-10 max-w-3xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="contact-form" className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Talk to a principal data architect</p>
              <h2 className="text-display-md text-ink-900">
                A senior architect reviews your estate and your sovereignty constraints, and replies within one business day.
              </h2>
              <p className="mt-4 text-ink-600">
                We will tell you which of your roadmap use cases are 90-day plays on your current platform, which are 12
                months, and which are stuck because the underlying source still needs CDC, contracts, or a feature
                definition the rest of the business agrees with.
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
            label: 'MLOps & AI Infrastructure',
            href: '/services/mlops-ai-infrastructure',
            description: 'The downstream conversation: once data is ready, MLOps is the next purchase.'
          },
          {
            label: 'AI Consulting & Strategy',
            href: '/services/ai-consulting-strategy',
            description: 'For visitors who arrive earlier than they should and need a strategy frame.'
          },
          {
            label: 'Self-Hosted LLM Infrastructure',
            href: '/services/self-hosted-llm-infrastructure',
            description: 'For clients building GenAI on their own data — foundation prerequisite.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'The dominant industry for this page. The tier-1 bank case study lives here.'
          },
          {
            label: 'Energy & Utilities',
            href: '/industries/energy-utilities',
            description: 'Plant-historian + SAP unification. The UAE energy-major case study.'
          }
        ]}
      />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Book data estate review"
        primaryHref="#contact-form"
      />
    </>
  );
}
