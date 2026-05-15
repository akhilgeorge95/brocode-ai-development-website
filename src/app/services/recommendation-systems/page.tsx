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
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FAQ } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'recommendation-systems';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I run [personalisation / e-commerce / product / streaming] at [organisation]. Our recommender isn't moving the KPI. Could we schedule a 30-minute call to discuss a Lift Pilot on our data?";

export const metadata: Metadata = {
  title: 'Recommendation Systems — Cold-Start-Aware, Arabic-Catalogue-Native',
  description:
    'A ranking stack for regional catalogues — Arabic-aware, cold-start-aware, Ramadan-aware — that lifts CTR, AOV, retention or watch-time in 90 days, with an A/B holdout your CDO can defend.',
  alternates: { canonical: 'https://www.brocode.ae/services/recommendation-systems' },
  openGraph: {
    title: 'Recommendation Systems — HR@10 0.41 on cold-start Arabic catalogues',
    description:
      'Two-tower + DeepFM + contextual bandits + multilingual CLIP. Free Lift Pilot on your event logs.',
    type: 'article',
    url: 'https://www.brocode.ae/services/recommendation-systems'
  },
  twitter: { card: 'summary_large_image' }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Start a free 6-week Lift Pilot on your event logs',
  subtitle:
    'Send us anonymised event logs. We will return an offline replay lift estimate, a recommended ranking-stack architecture, and a board-format CDO summary — before any contract.',
  ctaLabel: 'Request the Lift Pilot',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'businessModel',
      label: 'Business model',
      type: 'select',
      required: true,
      options: [
        'E-commerce — physical goods',
        'E-commerce — digital goods',
        'Streaming or media',
        'Super-app — multi-vertical',
        'Fintech',
        'Marketplace',
        'Other'
      ]
    },
    {
      name: 'catalogueSize',
      label: 'Catalogue size',
      type: 'select',
      options: ['<5K', '5K–50K', '50K–500K', '>500K items']
    },
    {
      name: 'languages',
      label: 'Languages in catalogue',
      type: 'multiselect',
      options: ['Arabic — MSA', 'Arabic — dialectal', 'English', 'French', 'Urdu', 'Hindi', 'Turkish', 'Other']
    },
    {
      name: 'kpi',
      label: 'Primary KPI to lift',
      type: 'select',
      options: [
        'CTR on personalised row',
        'AOV',
        '7-day retention',
        '30-day retention',
        'Watch-time',
        'Cross-sell attach-rate',
        'Subscription churn'
      ]
    },
    {
      name: 'currentStack',
      label: 'Current stack',
      type: 'multiselect',
      options: [
        'AWS Personalize',
        'Algolia AI Recommend',
        'Coveo',
        'Bloomreach',
        'Dynamic Yield',
        'Homegrown',
        'Elasticsearch only',
        'None'
      ]
    },
    {
      name: 'eventVolume',
      label: 'Event volume per day',
      type: 'select',
      options: ['<100K', '100K–1M', '1M–10M', '>10M']
    }
  ]
};

const failureModes = [
  {
    name: 'Arabic brand-spelling variants',
    example: 'Adidas / أديداس / addidas / addidas store',
    fix: 'Arabic title canonicaliser + bge-m3 multilingual text embeddings collapse spelling variants into a single item embedding.'
  },
  {
    name: 'Cold-start on Ramadan launches',
    example: 'New Ramadan-themed SKUs with three days of history.',
    fix: 'CLIP item embeddings (multimodal) + LinUCB / Thompson Sampling contextual bandit head give a sensible first ranking on day one.'
  },
  {
    name: 'Long-tail catalogue collapse',
    example: 'Top-100 titles consume 92% of impressions; the other 240,000 SKUs disappear.',
    fix: 'Two-tower neural retrieval on Vespa or Milvus, with diversity rerank — surface long-tail without dropping top-line CTR.'
  }
];

const stackLayers = [
  {
    layer: 'Retrieval',
    tool: 'Two-tower (TensorFlow Recommenders) + ANN on Vespa / Milvus',
    detail: 'Optional fall-through to Elasticsearch lexical for cold inventory. For media: multimodal item tower using CLIP and Whisper-generated transcripts.'
  },
  {
    layer: 'Ranking',
    tool: 'DeepFM · DIN · DCN-v2 · BST',
    detail: 'Chosen per use case. CatBoost as a strong tabular fallback for thin-data segments. Learn-to-rank with multi-objective loss.'
  },
  {
    layer: 'Cold-start',
    tool: 'CLIP + bge-m3 + Arabic canonicaliser + LinUCB / Thompson Sampling',
    detail: 'Item-content embeddings, multilingual text embeddings, brand-name canonicaliser, contextual-bandit head for new users and new items.'
  },
  {
    layer: 'Session',
    tool: 'GRU4Rec + event-cycle embeddings',
    detail: 'Ramadan / Eid / Back-to-School / White Friday boost embeddings learned from prior-cycle behaviour.'
  },
  {
    layer: 'Business rules',
    tool: 'YAML-declared overlay + uplift modelling',
    detail: 'Stock-out, margin floor, exclusivity declared in YAML, enforced before render. CausalML uplift so the system pushes items where treatment actually moves the user.'
  },
  {
    layer: 'Serving',
    tool: 'Triton + ONNX · Feast + Redis',
    detail: '< 40 ms p99 latency on the personalised row. Feature store on Feast with Redis online layer; offline store on Snowflake or BigQuery.'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Cold-start HR@10 on Arabic-heavy 240K-SKU catalogue',
    brocode: '0.41',
    competitors: ['0.18', '0.22', '~0.20', '0.30'],
    note: 'Net-new users, no history — published on the shared replay set in the lead magnet.'
  },
  {
    feature: 'Arabic brand-spelling canonicaliser',
    brocode: true,
    competitors: [false, false, false, true],
    note: 'Adidas / أديداس / addidas collapsed into one item embedding.'
  },
  {
    feature: 'Ramadan / Eid / White Friday event-cycle embeddings',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'Learned from prior-cycle behaviour, not a static feature flag.'
  },
  {
    feature: 'Recommender-first vs search-first architecture',
    brocode: 'Recommender-first',
    competitors: ['Search-first, personalisation bolted on', 'Search-first, personalisation bolted on', 'Recommender-first', 'Recommender-first'],
    note: 'Algolia / Coveo stay for search; Brocode inserts for the personalised row.'
  },
  {
    feature: 'Customer keeps trained embeddings + eval harness',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'No vendor-managed model black-box.'
  },
  {
    feature: '< 40 ms p99 latency on personalised row',
    brocode: true,
    competitors: [true, true, true, true],
    note: 'Triton + ONNX-exported models; everyone hits the latency target, the lift comes from elsewhere.'
  },
  {
    feature: 'In-tenant deployment (UAE / KSA hyperscaler)',
    brocode: true,
    competitors: [false, false, true, true],
    note: 'AWS UAE North, Azure UAE North, OCI Abu Dhabi by default.'
  },
  {
    feature: 'Public A/B holdout methodology the CDO can defend',
    brocode: 'GrowthBook / LaunchDarkly harness · counterfactual offline replay',
    competitors: ['Vendor-reported', 'Vendor-reported', 'Vendor-reported', 'Vendor-reported'],
    note: 'Uplift dashboard owned by the customer.'
  }
];

const competitors = ['Algolia AI Recommend', 'Coveo', 'AWS Personalize', 'Bloomreach / Dynamic Yield'];

const objections = [
  {
    objection:
      'Algolia / Coveo already rank our catalogue. Why do we need a separate recommender — won\'t this duplicate effort?',
    proof:
      'Algolia and Coveo are search-first products with personalisation bolted on. The integration we recommend keeps them for search and slots Brocode in for the personalised row, the "you may also like" rail, and the email / push surfaces. Same catalogue, two specialist systems. On the shared cold-start replay set published in the lead magnet, Brocode\'s stack delivers HR@10 of 0.41 versus Algolia AI Recommend at 0.22.'
  },
  {
    objection:
      'Our catalogue has thousands of brand-name spelling variants and a long Arabic-only tail. AWS Personalize couldn\'t handle it. Can you?',
    proof:
      'Yes. The cold-start stack — CLIP item embeddings, bge-m3 multilingual text embeddings, an Arabic title canonicaliser that collapses Adidas / أديداس / addidas into one embedding, and a contextual-bandit head — is built specifically for that catalogue. The benchmark replay set in the lead magnet uses a 240K-SKU regional catalogue with the same spelling-variant problem; Brocode delivers HR@10 0.41 versus AWS Personalize at 0.18 on net-new users.'
  },
  {
    objection:
      'We need to ship in a quarter. We do not have 18 months to build a feature store and a ranking platform from scratch.',
    proof:
      'The Lift Pilot is six weeks. The production-build path is twelve weeks to first A/B test on a single surface — typically the homepage personalised row — running on Triton + ONNX with feature store on Feast + Redis. The UAE retailer reference went from 2.1% to 6.4% CTR on the personalised row in 14 weeks on a 50/50 A/B holdout. The full multi-surface estate (homepage, search, cart, push, email) lands inside 90 days.'
  }
];

const faqItems = [
  {
    question: 'What does the cold-start handling actually look like for a brand-new user?',
    answer:
      'A new user gets a sensible first ranking from session 1, not session 20. The contextual-bandit head selects from CLIP-derived item candidates conditioned on context — country, city, time of day, prior-cycle behaviour at the segment level (e.g., Ramadan iftar window in Riyadh). As behaviour accumulates, the system shifts from bandit exploration to two-tower retrieval. The transition is gradual; the customer never sees a popularity-only fallback.'
  },
  {
    question: 'How does the system handle multilingual catalogues — Arabic, English and mixed?',
    answer:
      'Item representations are built from bge-m3 multilingual text embeddings on titles and reviews, CLIP image embeddings on imagery, and attribute metadata. The Arabic canonicaliser collapses brand-name spelling variants into a single item embedding. A customer browsing in Arabic and one browsing in English see the same recommended item, ranked from the same underlying representation.'
  },
  {
    question: 'What is the latency profile on the personalised row?',
    answer:
      'p50 around 14 ms, p99 below 40 ms on Triton + ONNX-exported models, with the feature store on Feast + Redis. The retrieval layer (two-tower ANN on Vespa or Milvus) returns 200 candidates in single-digit milliseconds; the ranker scores them in 10–15 ms. Network and rendering remain the dominant tail above that.'
  },
  {
    question: 'How is A/B testing methodology defended to the board?',
    answer:
      'GrowthBook or LaunchDarkly as the experimentation harness. 50/50 holdout with stratified randomisation, declared minimum detectable effect, declared analysis window, and counterfactual offline replay as a parallel evidence stream. The uplift dashboard exposes per-segment lift, statistical significance and a regression suite that flags peeking. The CDO can defend the number in front of the board because the methodology is closed before the experiment starts.'
  },
  {
    question: 'What happens to our trained embeddings and event data if we leave?',
    answer:
      'The customer owns the trained embeddings, the model artefacts, the eval harness, the feature definitions, and the event-data feature store. Nothing is locked behind a vendor licence. The model runs on Triton, which the customer can host elsewhere; the embeddings export as standard tensors. The data-exit clause is written into the MSA and we sign it on the first call.'
  },
  {
    question: 'How does Ramadan or White Friday seasonality get encoded?',
    answer:
      'As a learned embedding, not a feature flag. The session encoder ingests "event-cycle phase" as one of its inputs — Ramadan window, Eid window, Back-to-School, White Friday, Dubai Shopping Festival — and learns the per-cycle distributional shift from prior-year behaviour. New cycles are added through a defined release. The embedding is reusable across surfaces: homepage, search, push, email.'
  },
  {
    question: 'How do you avoid optimising click-through at the cost of revenue or margin?',
    answer:
      'Multi-objective ranking with a declared objective vector — CTR, conversion, basket size, margin, retention — and YAML-declared business-rule overlays (stock-out, margin floor, exclusivity). Uplift modelling decides which users actually need the treatment. The metric that matters to the board is the one the experimentation harness reports; click-rate is a diagnostic, not the goal.'
  },
  {
    question: 'How is the system retrained and refreshed?',
    answer:
      'Daily incremental updates on the contextual-bandit head, weekly retraining on the ranker, monthly on the two-tower retrieval. Drift detection on item embedding distance and per-segment CTR; alerts route to the personalisation engineering team. The feature store keeps online/offline parity so a feature change is reproducible against historical events.'
  }
];

const heroBoards = [
  { title: 'Treatment CTR', value: '6.4%', delta: '+4.3pt' },
  { title: 'Control CTR', value: '2.1%', delta: 'baseline' },
  { title: 'AOV uplift', value: '+9.8%', delta: 'p < 0.001' }
];

const relatedItems = [
  { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'For the retailer audience that also needs demand forecasting alongside personalisation.' },
  { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'LLM-powered explanation, semantic search, and merchandiser copilots.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Feature store, training-loop, drift detection for the recommender estate.' },
  { label: 'Retail & E-commerce', href: '/industries/retail-ecommerce', description: 'The UAE retailer reference and the wider personalisation playbook.' },
  { label: 'Hospitality & Tourism', href: '/industries/hospitality-tourism', description: 'Streaming, super-app, travel and dining recommenders.' }
];

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Recommendation Systems',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Egypt', 'Kuwait', 'Bahrain'],
  description:
    'Two-tower retrieval, learn-to-rank, contextual bandits and multilingual CLIP for regional Arabic-heavy catalogues. Cold-start, Ramadan-aware, in-tenant deployment with an A/B holdout the CDO can defend.',
  audience: { '@type': 'Audience', audienceType: 'Head of Digital Product, Head of Personalisation, VP Growth' }
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

export default function RecommendationSystemsPage() {
  return (
    <>
      <Script id="ld-recsys-service" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-recsys-faq" type="application/ld+json">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      {/* Bespoke consumer-product hero: phone with "For You" row + A/B uplift bar */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-fuchsia-700 text-white">
        <GradientMesh tone="brand" />
        <div className="container-site relative z-10 pt-22 pb-22 md:pt-28 md:pb-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Recommendation Systems' }
            ]}
            variant="dark"
          />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5 text-white/70">Personalisation engineering · GCC</p>
              <h1 className="text-balance text-display-2xl">
                A ranking stack tuned for the catalogue you actually have.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
                Arabic-aware, cold-start-aware, event-cycle-aware — lifts measurable CTR, AOV, retention or watch-time
                in the first 90 days, with a public A/B holdout your CDO can defend at the board.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="#contact-form"
                  variant="primary"
                  size="lg"
                  event="quote_open"
                  className="bg-white text-ink-900 hover:bg-fuchsia-100"
                >
                  Start a free 6-week Lift Pilot
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={PAGE_SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  WhatsApp the personalisation lead
                </a>
                <Link
                  href="#lead-magnet"
                  data-event="secondary_cta_click"
                  data-page={PAGE_SLUG}
                  className="text-sm font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline"
                >
                  Book a 45-min personalisation roadmap →
                </Link>
              </div>

              {/* A/B uplift bar */}
              <div className="mt-10 grid grid-cols-3 gap-3">
                {heroBoards.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-wider text-white/70">{b.title}</p>
                    <p className="mt-1 text-2xl font-bold text-white">{b.value}</p>
                    <p className="mt-1 text-[11px] text-emerald-200">{b.delta}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: phone frame with "For You" row */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-[300px]">
                {/* Context label */}
                <div className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] text-white/80 backdrop-blur-md">
                  personalised for: returning · session 2 · Riyadh · iftar window
                </div>

                {/* Phone */}
                <div className="rounded-[2.5rem] border-[10px] border-ink-900 bg-white text-ink-900 shadow-2xl">
                  <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-ink-900" />
                  <div className="p-3">
                    <div className="flex items-center justify-between rounded-lg bg-surface-muted px-3 py-2 text-[11px]">
                      <span className="font-semibold">noon.</span>
                      <span className="text-ink-500">For You</span>
                    </div>
                    <p className="mt-4 px-1 text-xs font-semibold uppercase tracking-wider text-brand">
                      For You · ranked
                    </p>
                    <ul className="mt-3 grid grid-cols-2 gap-2">
                      {[
                        { name: 'تمر مدجول', sub: 'AED 89', score: '0.94', color: 'from-amber-200 to-amber-300' },
                        { name: 'iftar set', sub: 'AED 145', score: '0.91', color: 'from-rose-200 to-rose-300' },
                        { name: 'عبايا — Eid', sub: 'AED 320', score: '0.88', color: 'from-fuchsia-200 to-fuchsia-300' },
                        { name: 'AirPods Pro 2', sub: 'AED 869', score: '0.84', color: 'from-sky-200 to-sky-300' }
                      ].map((t) => (
                        <li key={t.name} className="overflow-hidden rounded-lg border border-ink-100">
                          <div className={`h-16 w-full bg-gradient-to-br ${t.color}`} />
                          <div className="px-2 py-1.5">
                            <p className="truncate text-[11px] font-semibold text-ink-900" dir={t.name.match(/[؀-ۿ]/) ? 'rtl' : 'ltr'}>
                              {t.name}
                            </p>
                            <div className="mt-0.5 flex items-center justify-between">
                              <span className="text-[10px] text-ink-500">{t.sub}</span>
                              <span className="rounded-full bg-brand-50 px-1.5 py-0.5 text-[9px] font-bold text-brand">
                                {t.score}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mx-auto mt-4 mb-2 h-1 w-20 rounded-full bg-ink-200" />
                  </div>
                </div>

                {/* A/B label */}
                <div className="mt-4 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-center text-[11px] text-white/85 backdrop-blur-md">
                  Treatment CTR <span className="font-bold text-emerald-200">6.4%</span> · Control CTR <span className="font-bold">2.1%</span> · <span className="text-emerald-200">p &lt; 0.001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & stakes — different ordering: failures first, then quote, then stakes */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Where regional recommenders fail"
            title="Three failure modes that kill AOV on Arabic catalogues."
            description="Each is solved by a specific piece of the stack — not by tuning a generic recommender harder. The Lift Pilot proves the impact on your data."
          />
          <BentoGrid className="mt-14">
            {failureModes.map((f, i) => (
              <BentoCell key={f.name} span={i === 0 ? 'lg' : 'md'} variant={i === 0 ? 'brand' : 'light'}>
                <p className={`text-xs font-semibold uppercase tracking-wider ${i === 0 ? 'text-white/70' : 'text-brand'}`}>
                  Failure mode · {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className={`mt-3 text-xl font-semibold ${i === 0 ? 'text-white' : 'text-ink-900'}`}>{f.name}</h3>
                <p className={`mt-3 text-sm ${i === 0 ? 'text-white/85' : 'text-ink-600'}`}>
                  <span className="font-semibold">Example:</span> {f.example}
                </p>
                <p className={`mt-3 text-sm ${i === 0 ? 'text-white/85' : 'text-ink-700'}`}>
                  <span className="font-semibold">Fix:</span> {f.fix}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Problem prose */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The CDO mandate"
              title="2.1% CTR on the personalised row. Six-month deadline."
              description="Homepage carousel ranks by store popularity, not by user. Algolia / Coveo do relevance but not personalisation. AWS Personalize collapsed on Arabic-only customers and short-history sessions."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-700">
            <p>
              The board approved a year-long growth plan that assumes personalisation contributes a measurable AOV or
              retention lift. Missing it forces the CDO to re-baseline the whole roadmap. Two regional competitors
              have publicly demonstrated personalisation features — a peer retailer&apos;s &ldquo;For You&rdquo; tab,
              a peer streaming service&apos;s continue-watching strip — and analyst reviews are starting to compare.
              A failed POC has burned cloud spend and engineering goodwill; another visible failure costs the
              personalisation programme its independent budget. For streaming, licensing economics depend on watch-time
              on long-tail catalogues — a recommender that only surfaces top 100 titles is a renewal-negotiation problem.
            </p>
            <p>
              Personalisation is one of the highest-return uses of machine learning in any consumer-facing business,
              but only when the recommendations are relevant, timely, and explainable. We build for bilingual
              catalogues, privacy obligations, and the seasonal rhythms of the region as first-class concerns rather
              than afterthoughts. Catalogues in the UAE rarely sit cleanly in one language. Product names mix Arabic
              and English, brand spellings vary, and customer reviews land in both languages along with Romanised
              Arabic. Our recommendation pipelines treat this as the default rather than an edge case.
            </p>
            <p>
              UAE and GCC data-protection regimes are tightening and customer expectations around privacy continue to
              rise. We build systems that operate on minimal personal data, honour consent flags by default, and keep
              audit trails of which signals were used for which recommendation. Sensitive attributes — nationality,
              religion, health — are excluded from features unless there is a clear, lawful and documented basis for
              inclusion. Click-through rates are easy to optimise and easy to game; we instrument the system against
              the metrics that actually matter to the business — incremental revenue, basket size, repeat purchase
              rate, retention, or product-level margin — using proper A/B testing with statistical guardrails.
            </p>
          </div>
        </div>
      </section>

      {/* The Brocode ranking stack — bento with layers */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Brocode ranking stack"
            title="Six layers, named tool by tool, chosen for the catalogue you actually have."
            description="No black-box vendor service. The customer keeps the trained embeddings, the eval harness, and the feature definitions."
          />
          <BentoGrid className="mt-14">
            {stackLayers.map((s, i) => (
              <BentoCell
                key={s.layer}
                span={i === 0 || i === 2 ? 'lg' : 'md'}
                variant={i === 0 ? 'dark' : i === 2 ? 'brand' : 'light'}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    i === 0 || i === 2 ? 'text-white/70' : 'text-brand'
                  }`}
                >
                  Layer · {s.layer}
                </p>
                <h3
                  className={`mt-3 text-xl font-semibold ${i === 0 || i === 2 ? 'text-white' : 'text-ink-900'}`}
                >
                  {s.tool}
                </h3>
                <p
                  className={`mt-3 text-sm ${i === 0 || i === 2 ? 'text-white/85' : 'text-ink-600'}`}
                >
                  {s.detail}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Eval & A/B */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Eval and A/B"
              title="The uplift dashboard the CDO can defend at the board."
              description="Offline replay with counterfactual estimation. Online holdout on GrowthBook or LaunchDarkly. Per-segment lift, statistical significance, peeking guardrails — exposed to the customer’s team from day one."
            />
            <Reveal className="mt-8">
              <ul className="space-y-3 text-sm text-ink-700">
                <li>· 50/50 stratified holdout with declared MDE before launch</li>
                <li>· Counterfactual offline replay as a parallel evidence stream</li>
                <li>· Per-segment lift (cold-start, returning, long-tail, top-100)</li>
                <li>· Regression suite that flags peeking and stratification breaks</li>
                <li>· Uplift dashboard owned by the personalisation team, not the vendor</li>
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <GlassCard tone="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Public holdout — UAE retailer ref</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink-900">
                Homepage &ldquo;For You&rdquo; row CTR: 2.1% → 6.4%
              </h3>
              <p className="mt-3 text-ink-700">
                14-week 50/50 A/B holdout across all returning users. AOV up 9.8% versus control. Long-tail SKU
                impressions up 41%. Top-100 SKU revenue held flat — the lift was incremental, not cannibalised. The
                methodology is published; the customer can defend the number on its own merits.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <Tile label="CTR" value="6.4%" />
                <Tile label="AOV" value="+9.8%" />
                <Tile label="Long-tail" value="+41%" />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Algolia, Coveo, AWS Personalize, Bloomreach / Dynamic Yield — on the same cold-start replay set."
            description="The shared 240,000-SKU Arabic-heavy catalogue. Numbers below are from the lead-magnet methodology, reproducible."
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
            title="Search duplication, Arabic spelling-variants, and the 18-month build fear."
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
            title="The GCC Cold-Start Benchmark — AWS Personalize vs Algolia AI Recommend vs Coveo vs Brocode"
            description="A 32-page PDF, a downloadable replay dataset (anonymised), and a one-page CDO board-format summary. On net-new users with no history, Brocode’s two-tower + bandit stack delivers HR@10 of 0.41 versus AWS Personalize at 0.18 and Algolia AI Recommend at 0.22 on the shared replay set."
            contents={[
              'Test catalogue and baseline: 240K-SKU Arabic-heavy regional catalogue',
              'Two-tower vs DeepFM vs DCN-v2 head-to-head',
              'Multilingual CLIP + bge-m3 cold-start scoring',
              'Ramadan / Eid context embeddings — how seasonality is learned',
              'Triton + Vespa serving cost at GCC volumes',
              'CDO board-format one-pager (printable)'
            ]}
            filePath="/downloads/cold-start-recsys-benchmark.pdf"
            ctaLabel="Email me the benchmark + the replay set"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Frequently asked"
              title="Cold-start, latency, A/B method, data exit."
              description="Eight questions a CDO and a Head of Engineering share with their CISO before procurement."
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
              eyebrow="Lift Pilot"
              title="Six weeks, free, on your event logs."
              description="An offline replay lift estimate, a recommended ranking-stack architecture, and a board-format CDO summary — before any contract is signed."
            />
            <Reveal className="mt-8">
              <GlassCard tone="light" padding="md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">What you receive</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  <li>· Offline replay lift estimate on your event logs</li>
                  <li>· Per-segment cold-start vs warm-start scoring</li>
                  <li>· Recommended ranking-stack architecture and serving plan</li>
                  <li>· CDO board-format one-pager you can defend</li>
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
        primaryLabel="Start the Lift Pilot"
        primaryHref="#contact-form"
      />
    </>
  );
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-3">
      <p className="text-[11px] uppercase tracking-wider text-ink-500">{label}</p>
      <p className="mt-1 text-xl font-bold text-ink-900">{value}</p>
    </div>
  );
}
