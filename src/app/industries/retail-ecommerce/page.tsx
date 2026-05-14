import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'retail-ecommerce';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I lead [digital / e-commerce / merchandising] at [retail group]. We're scoping AI for [personalisation / forecasting / pricing] across our GCC footprint and would like to discuss a 30-day assessment. Could we set up a call?";

export const metadata: Metadata = {
  title: 'Retail AI for Multi-Banner GCC Retailers — Personalisation, Ramadan Forecasting, Pricing',
  description:
    'Retail AI for multi-banner, multi-country GCC retailers. Arabic-aware personalisation, Ramadan and Eid demand forecasting, dynamic pricing, and store-ops intelligence on your existing Salesforce / SAP / Oracle stack.',
  alternates: { canonical: 'https://www.brocode.ae/industries/retail-ecommerce' },
  openGraph: {
    title: 'Retail AI for Multi-Banner GCC Retailers',
    description:
      'Personalisation, forecasting, pricing, store ops — measured through incrementality, not vanity CTR.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/retail-ecommerce'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail AI for Multi-Banner GCC Retailers',
    description: 'Built for Arabic search. Built for Ramadan.'
  }
};

const faqItems: FAQItem[] = [
  {
    question: 'How do you measure incrementality, not just CTR?',
    answer:
      'Every personalisation engagement ships with a controlled A/B holdout, sized for statistical power on the retailer\'s daily traffic. We measure revenue-per-session, units-per-basket, and gross-margin per shopper for the holdout vs the treated group, and publish a p-value on the primary metric. CTR is a diagnostic; it never appears as a headline number on our scorecard. A retail marketplace reference saw incrementality uplift at p<0.05 over a 6-week window.'
  },
  {
    question: 'We are locked into Salesforce / Adobe / Oracle. Will you replace them?',
    answer:
      'No. We are platform-agnostic. We sit on top of Salesforce Commerce Cloud, Adobe Commerce / Magento, SAP Commerce, Oracle Retail, VTEX or Shopify Plus, and on top of Algolia / Coveo for search. The retailer keeps a portable model layer — the merchandiser and the marketer continue to work inside their existing tools, and the models follow the catalogue rather than the commerce vendor.'
  },
  {
    question: 'Ramadan is six months away. Can you ship something in time?',
    answer:
      'Yes. The 30-day personalisation incrementality assessment runs on your historical data inside your environment; the production deployment of the demand-forecasting model typically follows on a six-to-eight-week cadence. For Ramadan specifically, we have a calendar-aware feature store keyed to the Hijri-to-Gregorian shift, payday cycles (UAE 25th, KSA 1st), school terms by emirate, and weather — the playbook covers all 14 calendar effects that break standard forecasting models in the GCC.'
  },
  {
    question: 'How do you handle Khaleeji dialect and code-switching in product search?',
    answer:
      'A fine-tuned AraBERT-v2 + multilingual mE5 embedding stack on the catalogue. Khaleeji-dialect queries, Arabic-English code-switching, and the abbreviations Khaleeji shoppers actually type are all in the evaluation corpus. A UAE retail-group reference saw a 27 % NDCG@10 uplift vs an Algolia baseline and 9.4 % revenue-per-search uplift. The benchmark is shared in the lead magnet so your team can re-run it on a sample of your queries.'
  },
  {
    question: 'How do you handle store-ops CCTV without breaching shopper privacy?',
    answer:
      'CCTV inference runs on NVIDIA Jetson edge devices in-store. We do not store face data. The detection pipeline emits queue-length, shelf-availability and zone-density signals; no biometric identification is performed and no images leave the store. Compliance with UAE PDPL and consumer-protection regulations is reviewed with the retailer\'s legal team before any camera is connected.'
  },
  {
    question: 'How does retraining work, and who owns the model after handover?',
    answer:
      'The retailer owns the model. Retraining cadence is documented in the SoW (weekly for personalisation, daily for dynamic pricing, on event for forecasting). The merchandiser and the marketer get an in-tool console for guardrail tuning. Brocode operates the system for the first three to six months under an SLA, and we structure a clean handover with pair-programming and runbook delivery to the retailer\'s engineering team.'
  },
  {
    question: 'How do you avoid over-personalisation that the merchandiser cannot control?',
    answer:
      'Every recommender and pricing model ships with merchandiser guardrails: must-include and must-exclude rules, category-level minimum and maximum exposure, MRP / MAP enforcement, and regulator-sensitive category overrides (pharma, baby formula in KSA, ADAFSA-monitored items). The merchandiser tunes these through a console, not a ticket.'
  },
  {
    question: 'Do you integrate with marketplaces of record like Noon and Amazon?',
    answer:
      'Yes. We integrate with marketplace APIs for stock-availability, listing-quality and demand signals, and we have shipped buy-box and listing-health intelligence on Noon and Amazon.sa. The recommender and forecasting layers treat marketplace channels as first-class, not as a side-quest. Forecasting hierarchies include marketplace-stocking-location as a dimension.'
  }
];

const compareRows: CompareRow[] = [
  { feature: 'Arabic-aware product discovery (AraBERT-v2 + mE5)', brocode: true, competitors: [false, false, 'Partial', false] },
  { feature: 'Ramadan / Eid calendar-aware forecasting', brocode: true, competitors: [false, false, false, false] },
  { feature: 'Platform-agnostic (Salesforce / Adobe / SAP / Oracle / VTEX)', brocode: true, competitors: [false, true, false, true] },
  { feature: 'Search + recommender + forecasting + pricing in one stack', brocode: true, competitors: [false, false, false, false] },
  { feature: 'Incrementality A/B holdout (not CTR)', brocode: true, competitors: ['Partial', false, false, false] },
  { feature: 'Store-ops CCTV on Jetson (no face data)', brocode: true, competitors: [false, false, false, 'Partial'] },
  { feature: 'Merchandiser guardrails on every model', brocode: true, competitors: [true, 'Partial', 'Partial', false] },
  { feature: 'Published Arabic search benchmark', brocode: true, competitors: [false, false, false, false] },
  { feature: 'UAE-resident engineering team', brocode: true, competitors: [false, false, false, false] }
];

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a 30-day personalisation incrementality assessment on your store',
  subtitle:
    'A senior retail-AI engineer responds within one business day with the assessment shape, the team, and the benchmark from comparable engagements on the first call.',
  ctaLabel: 'Request the assessment',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'retailFormat',
      label: 'Retail format',
      type: 'multiselect',
      options: [
        'Hypermarket',
        'Supermarket',
        'Fashion',
        'Beauty',
        'Electronics',
        'Department store',
        'Pure-play marketplace',
        'Brand-owned DTC'
      ]
    },
    {
      name: 'gmvBand',
      label: 'Annual GMV band',
      type: 'select',
      required: true,
      options: ['< USD 100 M', 'USD 100 M–500 M', 'USD 500 M–2 bn', 'USD 2 bn–10 bn', '> USD 10 bn']
    },
    {
      name: 'countries',
      label: 'Countries operated',
      type: 'multiselect',
      options: ['UAE', 'KSA', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Egypt', 'Jordan', 'Pakistan', 'India', 'Other']
    },
    {
      name: 'platform',
      label: 'Commerce platform',
      type: 'select',
      options: [
        'Salesforce Commerce Cloud',
        'Adobe Commerce',
        'Oracle Retail',
        'SAP Commerce',
        'VTEX',
        'Shopify Plus',
        'Homegrown',
        'Other'
      ]
    },
    {
      name: 'useCase',
      label: 'Priority use case',
      type: 'select',
      required: true,
      options: [
        'Search & discovery',
        'Personalisation',
        'Demand forecasting',
        'Dynamic pricing',
        'RFM & CDP activation',
        'Store ops',
        'Fraud'
      ]
    },
    {
      name: 'goLive',
      label: 'Target go-live window',
      type: 'select',
      options: ['Pre-Ramadan', 'Pre-Eid', 'Pre-DSF / DSS', 'Pre-Q4 holiday', 'No fixed event']
    }
  ]
};

const useCases = [
  {
    title: 'Arabic-aware search & discovery',
    body: 'AraBERT-v2 + mE5 embeddings on the catalogue. UAE retail-group reference: 27 % NDCG@10 uplift vs Algolia, 9.4 % revenue-per-search.',
    span: 'lg' as const,
    metric: '+27 % NDCG@10'
  },
  {
    title: 'Bilingual personalisation',
    body: 'Recommenders on app and web with Arabic and English embeddings. Marketplace reference: incrementality uplift at p<0.05 over 6 weeks.',
    span: 'md' as const
  },
  {
    title: 'Ramadan & Eid forecasting',
    body: 'Temporal fusion transformers with a calendar-aware feature store keyed to Hijri-to-Gregorian shift, payday cycles, school terms and tourism.',
    span: 'md' as const,
    metric: '−11 pp Ramadan MAPE'
  },
  {
    title: 'Dynamic pricing',
    body: 'Bayesian price-elasticity per SKU-store-day. Brand-house reference: 3.1 % gross-margin uplift across a 1,200-SKU range without volume erosion.',
    span: 'md' as const,
    metric: '+3.1 % margin'
  },
  {
    title: 'RFM & customer intelligence',
    body: 'CDP-agnostic feature store on Snowflake / Databricks / BigQuery with churn-and-CLV models that handle the long retail tail.',
    span: 'md' as const
  },
  {
    title: 'Store-ops CCTV',
    body: 'Queue and shelf-availability detection on Jetson edge devices. No face data; privacy-preserving inference pattern.',
    span: 'md' as const
  },
  {
    title: 'Catalogue content generation',
    body: 'Arabic and English titles, descriptions and attributes from supplier data at catalogue scale. Style-tone matched to the retailer brand.',
    span: 'md' as const
  },
  {
    title: 'Marketplace buy-box intelligence',
    body: 'Listing-quality and stock-availability signals for Noon, Amazon.sa and regional aggregators. Forecasting hierarchies treat marketplace as a first-class channel.',
    span: 'md' as const
  },
  {
    title: 'E-commerce fraud detection',
    body: 'Card-not-present fraud scoring at sub-100 ms on the checkout path. Behavioural and graph features tuned to GCC payment patterns.',
    span: 'md' as const
  }
];

const relatedItems = [
  { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Demand forecasting with Ramadan, Eid and DSF calendar features.' },
  { label: 'Recommendation Systems', href: '/services/recommendation-systems', description: 'Bilingual personalisation across app, web and store.' },
  { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Arabic and Khaleeji product search and discovery.' },
  { label: 'Computer Vision', href: '/services/computer-vision', description: 'Store-ops CCTV on Jetson — queue, shelf, and zone-density detection.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'The operating model the merchandiser and the marketer use day-to-day.' }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Retail and e-commerce AI delivery for GCC retailers and marketplaces',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Egypt'],
  audience: {
    '@type': 'Audience',
    audienceType: 'Multi-banner GCC retail groups, brand houses, and digital marketplaces'
  },
  description:
    'Retail AI for multi-banner, multi-country GCC retailers — Arabic-aware personalisation, Ramadan and Eid demand forecasting, dynamic pricing, and store-ops intelligence on the retailer\'s existing commerce stack.'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer }
  }))
};

export default function RetailEcommercePage() {
  return (
    <>
      <Script
        id="ld-service-retail"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="ld-faq-retail"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero — warmer sand + brand teal omnichannel */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fdf6ec] via-white to-white">
        <GradientMesh tone="sand" className="opacity-70" />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/industries/retail-ecommerce.jpg"
            alt="Customer scanning a product with a mobile app inside a UAE mall flagship store"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.12]"
          />
        </div>

        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Retail &amp; E-commerce' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-eyebrow uppercase tracking-[0.18em] text-rose-700">
                Retail AI · GCC personalisation, forecasting &amp; pricing
              </p>
              <h1 className="mt-5 text-balance text-display-xl text-ink-900">
                Retail AI built for multi-banner, multi-country GCC retail — Arabic-aware, Ramadan-ready, measured through incrementality.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
                Personalisation that respects Khaleeji search behaviour. Demand forecasting that handles Ramadan,
                Eid, school terms and payday cycles. Dynamic pricing with merchandiser guardrails. Store-ops CCTV
                with no face data. Shipped on top of your existing Salesforce / SAP / Oracle / Adobe stack with a
                measured uplift in 90 days.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#quote-form" size="lg" event="quote_open" variant="primary">
                  Request a 30-day incrementality assessment
                </MagneticButton>
                <MagneticButton
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  size="lg"
                  variant="whatsapp"
                  event="whatsapp_hero"
                >
                  WhatsApp our retail lead
                </MagneticButton>
              </div>

              <p className="mt-6 text-sm text-ink-500">Built for Arabic search. Built for Ramadan.</p>
            </div>

            {/* Bilingual phone + Ramadan forecast mock */}
            <div className="lg:col-span-5 space-y-4">
              <GlassCard tone="light" padding="md" className="border-amber-200/60 bg-white/80">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg border border-ink-100 bg-surface-muted p-3 text-right" dir="rtl">
                    <p className="text-[10px] uppercase tracking-wider text-rose-700">بحث</p>
                    <p className="mt-1 text-sm font-semibold text-ink-900">شو في عبايات جديدة لرمضان</p>
                    <div className="mt-3 space-y-1.5">
                      <div className="rounded bg-white p-2 text-[11px] text-ink-700">عباية رمضانية — لون رملي</div>
                      <div className="rounded bg-white p-2 text-[11px] text-ink-700">عباية تطريز ذهبي</div>
                      <div className="rounded bg-white p-2 text-[11px] text-ink-700">عباية كاجوال أنيقة</div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-ink-100 bg-surface-muted p-3 text-left">
                    <p className="text-[10px] uppercase tracking-wider text-rose-700">Search</p>
                    <p className="mt-1 text-sm font-semibold text-ink-900">Ramadan kaftan SS line</p>
                    <div className="mt-3 space-y-1.5">
                      <div className="rounded bg-white p-2 text-[11px] text-ink-700">Sand-tone embroidered kaftan</div>
                      <div className="rounded bg-white p-2 text-[11px] text-ink-700">Gold-thread Ramadan abaya</div>
                      <div className="rounded bg-white p-2 text-[11px] text-ink-700">Casual modest dress</div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 border-t border-ink-100 pt-3 text-[11px] text-ink-500">
                  Embedding stack: AraBERT-v2 + mE5 · Khaleeji-dialect head
                </p>
              </GlassCard>

              <GlassCard tone="light" padding="md" className="border-rose-200/60 bg-white/80">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-semibold uppercase tracking-wider text-rose-700">Ramadan demand · SKU 4-week forecast</p>
                  <p className="text-ink-500">Tightening band</p>
                </div>
                <div className="mt-3 h-16 rounded-md bg-gradient-to-r from-rose-100 via-amber-100 to-rose-50 p-2">
                  <div className="flex h-full items-end gap-1">
                    {[28, 36, 42, 51, 64, 71, 78, 82, 76, 70, 64, 58].map((v, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-rose-500/70"
                        style={{ height: `${v}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex justify-between text-[11px] text-ink-600">
                  <span>MAPE: 6.4 %</span>
                  <span>Lift vs incumbent: +11 pp</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="border-y border-ink-100 bg-white py-14">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '11', label: 'GCC retail & marketplace clients' },
              { value: '+27%', label: 'Arabic search NDCG@10 vs Algolia baseline' },
              { value: '−11 pp', label: 'Ramadan SKU-level forecast MAPE' },
              { value: '+3.1%', label: 'Gross-margin uplift on 1,200 SKUs (brand house)' }
            ]}
          />
        </div>
      </section>

      {/* Problem & stakes */}
      <section className="bg-[#fdf6ec] py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="The painful problem"
            title="The CDP segments 14 M shoppers into ten lookalike tiers that all buy the same Ramadan SKUs."
            description="The recommender shows the same three category banners to every visitor. Demand forecasting overstocks the UAE warehouse and stocks-out KSA every Eid. The merchandising team is rebuilding the buy plan in Excel by hand. The CDO has committed a personalisation revenue number at the investor day."
          />

          <BentoGrid className="mt-12">
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Failure mode 1</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Arabic search</h3>
              <p className="mt-2 text-ink-600">
                Off-the-shelf engines drop a measurable relevance band on Khaleeji-dialect queries and
                Arabic-English code-switching. Conversion follows. The shopper switches to Noon or Amazon.sa.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Failure mode 2</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Ramadan calendar</h3>
              <p className="mt-2 text-ink-600">
                Standard forecasting models miss the Hijri-to-Gregorian shift, the payday-pre-Eid lift, the
                school-term overlay and the tourism flow. A missed Ramadan buy costs 6–9 % of full-price sell-through.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Failure mode 3</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Multi-country buy plan</h3>
              <p className="mt-2 text-ink-600">
                UAE 25th payday and KSA 1st payday are different curves. ADAFSA-monitored items in Abu Dhabi and
                baby-formula regulation in KSA are different guardrails. The buy plan needs both.
              </p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Use cases bento */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case grid"
            title="Nine production plays across discovery, forecasting, pricing and store ops."
            description="Each ships with merchandiser guardrails, an A/B holdout for incrementality, and the integration patterns the marketer and the merchandiser keep using long after handover."
          />
          <BentoGrid className="mt-12">
            {useCases.map((u) => (
              <BentoCell key={u.title} span={u.span} variant="light">
                <h3 className="text-lg font-semibold text-ink-900">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{u.body}</p>
                {u.metric && (
                  <p className="mt-4 inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                    {u.metric}
                  </p>
                )}
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Mechanism — commerce integrations */}
      <section className="relative overflow-hidden bg-[#1c1410] py-22 text-white md:py-30">
        <GradientMesh tone="sand" className="opacity-25" />
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="Commerce-stack integrations"
              title="Platform-agnostic. Catalogue-native. Merchandiser-controlled."
              description="We sit on top of the commerce platform you already run. The merchandiser and the marketer keep working in their existing tools; the model layer is portable across platforms."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <GlassCard tone="dark" className="border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300">Commerce platforms</p>
                <p className="mt-2 text-sm text-white/80">
                  Salesforce Commerce Cloud · Adobe Commerce / Magento · SAP Commerce · Oracle Retail · VTEX · Shopify Plus
                </p>
              </GlassCard>
              <GlassCard tone="dark" className="border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300">Search &amp; CDP</p>
                <p className="mt-2 text-sm text-white/80">
                  Algolia · Coveo · Bloomreach · Snowflake · Databricks · BigQuery · in-house CDPs
                </p>
              </GlassCard>
              <GlassCard tone="dark" className="border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300">Forecasting features</p>
                <p className="mt-2 text-sm text-white/80">
                  Hijri-to-Gregorian calendar · Payday cycles (UAE 25th, KSA 1st) · School terms · Tourism (DET / DCT) · Weather · Promo windows
                </p>
              </GlassCard>
              <GlassCard tone="dark" className="border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300">Store-ops edge</p>
                <p className="mt-2 text-sm text-white/80">
                  NVIDIA Jetson AGX · DeepStream · privacy-preserving inference · no face data
                </p>
              </GlassCard>
            </div>
            <div className="mt-6 rounded-2xl border border-rose-300/30 bg-rose-300/[0.06] p-6 text-sm text-white/80">
              <p className="font-semibold text-rose-200">Marketplace channels treated as first-class</p>
              <p className="mt-2">
                Noon · Amazon.sa · Talabat (q-commerce) · regional aggregators. Forecasting hierarchies include
                marketplace stocking-location as a dimension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulator block */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Regulator &amp; standards"
              title="Designed for the consumer-protection and data-protection reviewers."
              description="UAE PDPL. Saudi PDPL. Consumer-protection law and regulator-sensitive category overrides for pharma, baby formula and ADAFSA-monitored items. Bias and fairness review on every pricing model."
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">UAE &amp; KSA PDPL</p>
              <p className="mt-2 text-sm text-ink-700">
                Consumer data is processed under explicit consent. Cross-border transfer between UAE and KSA
                respects both regimes. Marketing exclusion lists, opt-out flows and right-to-erasure paths are
                wired into the personalisation layer.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Consumer protection</p>
              <p className="mt-2 text-sm text-ink-700">
                Dynamic pricing models enforce MRP / MAP and never breach regulator-sensitive category overrides
                (pharma, baby formula, ADAFSA-monitored items). The price-elasticity guardrails are part of the
                model, not a post-hoc filter.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Store-ops privacy</p>
              <p className="mt-2 text-sm text-ink-700">
                No face data stored. Inference at the edge on Jetson devices. Compliance with UAE PDPL reviewed
                with the retailer&apos;s legal team before any camera is connected.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Fair pricing &amp; explainability</p>
              <p className="mt-2 text-sm text-ink-700">
                Every pricing model includes a bias-review test pack and explainability via SHAP. The merchandiser
                sees why a price moved, not just that it moved. ISO 27001, SOC 2 Type II in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-[#fdf6ec] py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference engagements"
            title="Four anonymised retail outcomes."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">UAE retail group · Search</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  +27 % NDCG@10 vs Algolia, +9.4 % revenue-per-search
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Arabic-aware embedding stack on the catalogue. Khaleeji-dialect head validated by native speakers.
                  Benchmark methodology published in the lead magnet.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Regional hypermarket · Forecasting</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  −11 pp Ramadan SKU-level MAPE across fresh &amp; ambient
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Hierarchical model with calendar-aware features. The buy plan adjusted automatically; the
                  merchandiser tuned the override layer through a console.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Marketplace · Recommender</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  Incrementality uplift at p&lt;0.05 over a 6-week holdout
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Two-tower retrieval with bilingual embeddings. Revenue-per-session and units-per-basket measured
                  on the treated cohort against a clean holdout.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.15}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Brand house · Pricing</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  +3.1 % gross margin across 1,200 SKUs, no volume erosion
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Bayesian elasticity per SKU-store-day. Merchandiser guardrails on MRP / MAP and
                  regulator-sensitive categories.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Differentiation"
            title="Brocode vs the four archetypes on your shortlist."
            description="A platform suite locked to one commerce vendor. A search-only specialist. An offshore SI building a custom recommender. A Big-4 customer-analytics programme. Where each fits — and where Brocode is the right shape."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['Salesforce Einstein / Adobe Sensei', 'Algolia / Coveo / Bloomreach', 'Offshore SI (custom recommender)', 'Big-4 customer analytics']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-[#fdf6ec] py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Ramadan &amp; Eid Demand Forecasting Playbook for GCC Retail"
            description="A 24-page field guide with a reference calendar — covers the 14 calendar effects that break standard forecasting models in the GCC, a worked SKU-level example across fresh and ambient categories, a hierarchical forecasting blueprint, and a buy-plan adjustment template. Headline figure: the average GCC retailer over-forecasts non-fresh Ramadan demand by 18 % and under-forecasts fresh by 22 %."
            contents={[
              'Ramadan and Eid effects on demand',
              'Multi-event embeddings',
              'School-year, payday, weather and tourism features',
              'Promo-aware uplift modelling',
              'Inventory optimiser sizing',
              'A/B testing in seasonal windows'
            ]}
            filePath="/downloads/ramadan-eid-forecasting-playbook.pdf"
            ctaLabel="Email me the playbook"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Retail AI FAQ"
              title="The eight questions every CDO asks."
              description="If yours is not here, raise it in the form below. We answer in writing before the first call."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="bg-[#fdf6ec] py-22 md:py-30" data-page={PAGE_SLUG}>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-eyebrow uppercase text-rose-700">Start the conversation</p>
            <h2 className="mt-4 text-display-md text-ink-900">
              Request a 30-day personalisation incrementality assessment on your store.
            </h2>
            <p className="mt-5 text-ink-600">
              Tell us the retail format, the countries, the platform, and the priority use case. We come back within
              one business day with the assessment shape and the benchmark from comparable engagements.
            </p>
            <p className="mt-6 text-sm text-ink-500">
              Prefer WhatsApp?{' '}
              <Link
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={PAGE_SLUG}
                className="font-semibold text-rose-700"
              >
                Message our retail lead directly.
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm config={formConfig} />
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Request assessment" primaryHref="#quote-form" />
    </>
  );
}
