import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';

const PAGE_SLUG = 'hospitality-tourism';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm with [hospitality group / authority]. We're scoping AI on [dynamic pricing / traveller intelligence / multilingual concierge / F&B / destination ROI] and would like a back-test on our pace or campaign data. Could we arrange a call?";

export const metadata: Metadata = {
  title: 'AI for Hospitality and Tourism — GCC Dynamic Pricing, Multilingual Concierge',
  description:
    'Hospitality and tourism AI for GCC operators. Dynamic pricing, traveller intelligence, multilingual concierge (Khaleeji, Russian, Hindi, Mandarin) and F&B analytics. Ramadan, Hajj and DSF calendar-aware.',
  alternates: { canonical: 'https://www.brocode.ae/industries/hospitality-tourism' },
  openGraph: {
    title: 'AI for Hospitality and Tourism — GCC Dynamic Pricing, Multilingual Concierge',
    description:
      'Arabic. Russian. Hindi. Mandarin. Priced for the GCC calendar. Built for Jumeirah, Rotana, Emaar Hospitality, Address, Atlantis, Habtoor, FIVE and the global flag MEA HQs.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/hospitality-tourism',
    images: ['/images/industries/hospitality-tourism.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCC Hospitality & Tourism AI',
    description:
      'Calendar-aware demand on Ramadan, Hajj and DSF. Multilingual concierge across four languages. Integrated with Opera Cloud, Mews, IDeaS and Duetto.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a pricing back-test on your booking pace data',
  subtitle:
    'A senior hospitality engagement lead reviews your PMS, RMS and source-market mix, then replies within one business day with a back-test outline across one or two booking cycles.',
  ctaLabel: 'Request the back-test',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'operatorType',
      label: 'Operator type',
      type: 'select',
      required: true,
      options: [
        'Single luxury property',
        'Regional hospitality group',
        'Global flag MEA HQ',
        'Tourism authority',
        'F&B group',
        'DMC',
        'OTA'
      ]
    },
    {
      name: 'portfolioScale',
      label: 'Portfolio scale',
      type: 'select',
      required: true,
      options: ['<500 keys', '500-2,500 keys', '>2,500 keys', 'Multi-country GCC', 'Destination-wide']
    },
    {
      name: 'pmsCrsRms',
      label: 'PMS / CRS / RMS',
      type: 'text',
      placeholder: 'Opera Cloud / Mews / Cloudbeds / SynXis / TravelClick / IDeaS / Duetto / Cendyn'
    },
    {
      name: 'priorityUseCase',
      label: 'Priority use case',
      type: 'select',
      required: true,
      options: [
        'Dynamic pricing & RM',
        'Traveller intelligence',
        'Multilingual concierge',
        'F&B analytics',
        'Guest-review NLP',
        'Destination-ROI attribution'
      ]
    },
    {
      name: 'sourceMarkets',
      label: 'Source-market focus',
      type: 'multiselect',
      options: ['GCC domestic', 'Russia', 'India', 'China', 'UK', 'Germany', 'KSA inbound', 'Other']
    },
    {
      name: 'bookingWindow',
      label: 'Target booking window',
      type: 'select',
      options: ['Pre-Eid', 'Pre-DSF / DSS', 'Pre-Hajj season', 'Pre-Q4 holiday', 'No fixed event']
    }
  ]
};

const useCases = [
  {
    title: 'Dynamic pricing & revenue management',
    body: 'Bayesian price-elasticity models per room category, segment and channel. Pace-aware booking-curve modelling tuned to Ramadan, Eid, Hajj and DSF. Coexists with IDeaS, Duetto and Cendyn Rev or replaces them where the licence cannot be justified.'
  },
  {
    title: 'Traveller intelligence & source-market mix',
    body: 'Source-market segmentation with named GCC inbound flows (Saudi domestic, GCC cross-border, Russia, India, China, UK, Germany). Visa-policy and flight-capacity signals via OAG and ForwardKeys.'
  },
  {
    title: 'Multilingual concierge AI',
    body: 'Jais + AraBERT-v2 + mE5 stack handling Arabic (MSA and Khaleeji), Russian, Hindi, Urdu, Mandarin and English. Deployed on WhatsApp Business, in-room tablet (Mitel, SuitePad, Crave) and the property app.'
  },
  {
    title: 'Guest-review NLP across languages',
    body: 'Arabic, Russian, Chinese and English review-mining on TripAdvisor, Booking.com, Google Reviews, Medallia and Reputation corpora. Aspect-level sentiment tied to the property\'s operational KPIs.'
  },
  {
    title: 'F&B menu engineering',
    body: 'Menu-engineering, recipe-cost-margin and dish-popularity models on Oracle Micros Simphony and Toast POS data. Outlet-level mix optimisation across signature restaurants.'
  },
  {
    title: 'Destination-ROI attribution',
    body: 'For tourism authorities — STR market data plus visa arrivals plus authority campaign spend, with cohort-level traveller-LTV modelling for the repeat-visit programme.'
  },
  {
    title: 'Pace-aware demand forecasting',
    body: 'Hierarchical demand models keyed to the GCC calendar (Hijri-Gregorian Ramadan, Eid Al Fitr, Eid Al Adha, Hajj, DSF, DSS, Diwali, Chinese New Year). Outperforms the standard RM model on the four weeks around each event.'
  },
  {
    title: 'Loyalty intelligence',
    body: 'Repeat-visit propensity models, churn modelling and segment-based offer design. Sits alongside Revinate, Cendyn eInsight and Salesforce Hospitality, writing back into the CRM segment store.'
  },
  {
    title: 'In-stay personalisation',
    body: 'Pre-arrival, in-stay and post-stay personalisation across the booking-to-checkout journey. Multilingual preference matching at concierge desk and in-room tablet.'
  }
];

const integrationStack = [
  {
    label: 'PMS estate',
    detail: 'Oracle Opera Cloud, Mews, Cloudbeds and Protel via named connectors. The PMS remains the system of record.'
  },
  {
    label: 'CRS & RMS',
    detail: 'SynXis, TravelClick / Sabre CRS, IDeaS, Duetto and Cendyn Rev. Coexistence patterns documented at SoW time.'
  },
  {
    label: 'CRM & loyalty',
    detail: 'Salesforce Hospitality, Cendyn eInsight, Revinate. Multilingual concierge writes to the guest profile.'
  },
  {
    label: 'POS & F&B',
    detail: 'Oracle Micros Simphony and Toast for menu engineering. Recipe-cost-margin and dish-popularity at outlet level.'
  },
  {
    label: 'Guest feedback',
    detail: 'Medallia, Reputation, TripAdvisor, Booking.com and Google Reviews ingestion. Aspect-level sentiment in four languages.'
  },
  {
    label: 'Travel intelligence',
    detail: 'OAG flight-capacity feeds, ForwardKeys search and booking signals, STR market data, visa-policy and arrivals data.'
  }
];

const regulatorAnchors = [
  {
    name: 'UAE PDPL & guest data residency',
    detail: 'Guest PII stays inside the country across model training and inference. Named DPO point of contact aligned to UAE Federal Decree-Law 45.'
  },
  {
    name: 'GDPR for inbound EU and UK guests',
    detail: 'Cross-border source markets handled under GDPR, with explicit consent management and audit trail on personalisation decisions.'
  },
  {
    name: 'PCI DSS for payment paths',
    detail: 'No PAN data inside the AI environment. Payment paths kept inside the PMS / PSP perimeter; concierge AI does not handle card data.'
  },
  {
    name: 'Hijri-Gregorian calendar awareness',
    detail: 'Models calibrated annually against the latest Hijri-Gregorian Ramadan-Eid-Hajj cycle. The lead-magnet playbook is regenerated each year.'
  }
];

const caseStudies = [
  {
    quote:
      'Dynamic-pricing programme on leisure-segment rooms delivered an ADR uplift of 6.4 percent over a 9-month window with no measurable loss on occupancy. The RM team kept ownership; the model retrained weekly.',
    label: 'UAE flagship property — dynamic pricing'
  },
  {
    quote:
      'Multilingual concierge handled 32 percent of guest enquiries in Khaleeji Arabic and 11 percent in Russian with response-time and CSAT outcomes measured against the human-only baseline.',
    label: 'Regional hospitality group — multilingual concierge'
  },
  {
    quote:
      'Menu-engineering programme across three signature restaurants lifted outlet-level GOP by 8.1 percent over six months. The F&B director signed off every menu change before launch.',
    label: 'UAE F&B group — menu engineering'
  },
  {
    quote:
      'Tourism authority destination-ROI moved from a directional dashboard to a cohort-level traveller-LTV view, with campaign-level attribution reviewed at the federal budget cycle.',
    label: 'GCC tourism authority — destination ROI'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Khaleeji Arabic + Russian + Mandarin concierge at production quality',
    brocode: true,
    competitors: ['Limited Khaleeji', 'Generic LLM', 'English-first']
  },
  {
    feature: 'Calendar-aware demand (Ramadan / Eid / Hajj / DSF)',
    brocode: true,
    competitors: ['Generic seasonality', 'Limited', 'Tooling, not models']
  },
  {
    feature: 'Coexistence with IDeaS / Duetto / Cendyn Rev',
    brocode: true,
    competitors: ['Replacement only', 'Locked to PMS', 'Replacement only']
  },
  {
    feature: 'Portable across Opera Cloud / Mews / Cloudbeds',
    brocode: true,
    competitors: ['Within own PMS', 'Within own RM stack', 'Customer-defined']
  },
  {
    feature: 'Guest data stays in UAE',
    brocode: true,
    competitors: ['Customer-defined', 'Customer-defined', 'Public-cloud first']
  },
  {
    feature: 'Aspect-level review NLP in four languages',
    brocode: true,
    competitors: ['English-first', 'Limited', 'Tooling, not models']
  },
  {
    feature: 'Destination-ROI cohort attribution for authorities',
    brocode: true,
    competitors: [false, false, 'Tooling, not attribution']
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'Our RM team uses IDeaS / Duetto. We will not replace them. How do you coexist?',
    answer:
      'The Brocode dynamic-pricing model is built to coexist with IDeaS, Duetto and Cendyn Rev. The pattern is advisory signals written into the RM analyst\'s board — a calendar-aware pace overlay and a segment-and-channel elasticity layer. The RM system stays the system of action; the model surfaces what the RM analyst wants to see on a Monday morning before they accept or override.'
  },
  {
    question: 'Show me Arabic and Russian concierge transcripts from a real GCC property.',
    answer:
      'We supply benchmark transcripts under NDA across Khaleeji Arabic, Russian, Hindi and Mandarin from existing GCC deployments, with response-time and CSAT outcomes against the human-only baseline. The lead-magnet playbook includes a transcript-quality benchmark and the calibration cadence we apply per source market.'
  },
  {
    question: 'Ramadan, Hajj and DSF break our forecast every year. Show me the back-test.',
    answer:
      'We run a back-test on your last two booking cycles against the Brocode calendar-aware pace model. The median GCC flagship property\'s RM system mis-prices peak Eid weekends by around 12 percent at unit level; deployments using calendar-aware pace models reduce it to 3 percent. The back-test report walks through the deltas day by day on your pace.'
  },
  {
    question: 'How does the multilingual concierge handle code-switching?',
    answer:
      'The model is trained on transcripts that contain Khaleeji-English and MSA-English code-switching at production rates. Russian-English mixing inside one message is handled at the same level as monolingual Russian. The post-trained Jais + AraBERT-v2 + mE5 stack handles the common GCC patterns; we expose a confidence chip when the message hits an ambiguous turn.'
  },
  {
    question: 'Where does the guest data sit, and what about GDPR for our inbound EU and UK guests?',
    answer:
      'Guest PII stays inside a UAE-resident environment. Cross-border source markets (UK, Germany, Russia, KSA-EU corridors) are handled under GDPR-aligned consent management with audit trail. The architecture is described in the vendor security pack; procurement gets it on the first call.'
  },
  {
    question: 'How often does the pricing model retrain?',
    answer:
      'Pricing models retrain weekly on the latest pace and segment outcomes. Calendar models recalibrate annually against the latest Hijri-Gregorian Ramadan-Eid-Hajj cycle. The RM team owns the sign-off on each new model card before promotion; the kill switch is in their hands.'
  },
  {
    question: 'What is the support model after go-live?',
    answer:
      'Brocode engineers stay alongside the RM team and the guest-services team under a defined run-phase. Drift monitoring on pace, ADR and concierge quality is automated; alerts go to the named on-shift manager. Transition to operator ownership is mapped on day one and reviewed at three, six and twelve months.'
  }
];

const relatedLinks = [
  {
    label: 'Predictive Analytics',
    href: '/services/predictive-analytics',
    description: 'Dynamic-pricing and calendar-aware demand forecasting.'
  },
  {
    label: 'Natural Language Processing',
    href: '/services/natural-language-processing',
    description: 'Multilingual concierge and guest-review NLP across four languages.'
  },
  {
    label: 'Recommendation Systems',
    href: '/services/recommendation-systems',
    description: 'Traveller intelligence and in-stay personalisation.'
  },
  {
    label: 'MLOps & AI Infrastructure',
    href: '/services/mlops-ai-infrastructure',
    description: 'PMS-coexistence operating model and retraining cadence.'
  },
  {
    label: 'Certifications & Compliance',
    href: '/security-compliance',
    description: 'Guest-data residency, UAE PDPL and GDPR posture.'
  }
];

export default function HospitalityTourismPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI for Hospitality and Tourism',
    serviceType: 'Hospitality and tourism AI engineering',
    provider: {
      '@type': 'Organization',
      name: 'Brocode Solutions',
      url: 'https://www.brocode.ae'
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType:
        'GCC hospitality groups, global flag MEA HQs, tourism authorities, F&B groups, DMCs and OTAs'
    },
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Oman', 'Kuwait'],
    url: 'https://www.brocode.ae/industries/hospitality-tourism',
    description:
      'Hospitality and tourism AI built for GCC operators — dynamic pricing, traveller intelligence, multilingual concierge and F&B analytics. Calendar-aware demand on Ramadan, Hajj and DSF.'
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <Script id="ld-hospitality" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Script id="ld-hospitality-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO — warm beige + brand teal */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7efe2] via-white to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(13,148,136,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(217,179,109,0.22),transparent_55%)]"
        />
        <div className="container-site pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Hospitality & Tourism' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <GlassCard padding="sm" className="overflow-hidden">
                  <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/industries/hospitality-tourism.jpg"
                      alt="Concierge desk tablet showing a bilingual Khaleeji and Russian chat thread, with an RM pace board overlay"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1024px) 36vw, 90vw"
                    />
                    <div className="absolute inset-x-4 top-4 grid grid-cols-2 gap-2 rounded-xl bg-white/95 p-3 text-[11px] text-ink-900 shadow-card">
                      <div>
                        <p className="font-semibold">Concierge · Khaleeji</p>
                        <p className="mt-0.5 text-ink-500">"شو في عشاء ليلة الإثنين؟"</p>
                      </div>
                      <div className="rounded-md bg-teal-50 p-2">
                        <p className="font-semibold text-teal-800">Concierge · Russian</p>
                        <p className="mt-0.5 text-teal-700">"Можно столик на 8 вечера?"</p>
                      </div>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-xl bg-ink-900/85 px-4 py-3 text-[11px] text-white">
                      <div>
                        <p className="opacity-60">Eid weekend</p>
                        <p className="mt-0.5 text-sm font-semibold text-amber-300">+18% pace</p>
                      </div>
                      <div>
                        <p className="opacity-60">Re-price</p>
                        <p className="mt-0.5 text-sm font-semibold">Accept</p>
                      </div>
                      <div>
                        <p className="opacity-60">Languages</p>
                        <p className="mt-0.5 text-sm font-semibold">6</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 px-1 text-xs text-ink-600">
                    Bilingual concierge thread with a guest-preference match. Pace board lifts the Eid weekend
                    off a flat band; the RM analyst accepts the re-price.
                  </p>
                </GlassCard>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Industries · Hospitality & Tourism
                </p>
                <h1 className="mt-5 text-balance text-display-xl text-ink-900">
                  Hospitality and tourism AI built for GCC operators.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
                  Dynamic pricing, traveller intelligence, multilingual concierge and F&amp;B analytics —
                  integrated with your PMS, CRS and CRM. Ramadan, Hajj and DSF-aware demand patterns and a
                  measured RevPAR or destination-ROI outcome in two booking cycles.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton href="#quote-form" variant="primary" size="lg" event="quote_open">
                    Request a pricing back-test
                  </MagneticButton>
                  <MagneticButton
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    variant="whatsapp"
                    size="lg"
                    event="whatsapp_hero"
                  >
                    WhatsApp the team
                  </MagneticButton>
                  <Link
                    href="#lead-magnet"
                    className="text-sm font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-800"
                    data-event="secondary_cta_click"
                    data-page={PAGE_SLUG}
                  >
                    Download the GCC Hospitality Demand Playbook
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-8 max-w-xl text-sm text-ink-500">
                  Arabic. Russian. Hindi. Mandarin. Priced for the GCC calendar.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      <section className="border-y border-ink-100 bg-white py-12">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '6.4%', label: 'ADR uplift on a UAE flagship property over a 9-month window' },
              { value: '32%', label: 'Concierge share handled in Khaleeji Arabic at a regional group' },
              { value: '8.1%', label: 'Outlet-level GOP uplift across three signature F&B venues' },
              { value: '12% → 3%', label: 'Peak-Eid weekend pricing-error reduction with the calendar model' }
            ]}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The problem on the table"
            title="The RevPAR index is trailing the compset by four points."
            description="The RM system prices a Friday-Saturday weekend the same as a Monday-Tuesday. The demand model misses the Hajj pre-season inbound wave from Indonesia and Egypt. The multilingual concierge bot handles English but fails on Arabic Khaleeji and Russian. The F&amp;B outlet at the flagship cannot tell the F&amp;B director which menu items are killing the cover margin."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">PMS lock-in</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">The Opera or Mews-bundled AI module is locked to the PMS.</h3>
                <p className="mt-3 text-ink-600">
                  PMS-bundled modules tie you to the parent platform and lack Khaleeji, Russian and Mandarin
                  coverage at production quality. Brocode is portable across mixed PMS estates.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Multilingual gap</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Guests do not tolerate a chatbot that almost speaks their language.</h3>
                <p className="mt-3 text-ink-600">
                  Generic LLM concierge fails on Khaleeji code-switching and Russian formality registers. The
                  Brocode Jais + AraBERT-v2 + mE5 stack is benchmarked against human-only baselines.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Calendar volatility</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Ramadan, Hajj and DSF break the standard RM model.</h3>
                <p className="mt-3 text-ink-600">
                  Generic seasonality misses Hijri-calendar effects, inbound waves and DSF/DSS interactions.
                  Calendar-aware pace models reduce peak-Eid pricing error from 12 percent to 3 percent.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* USE-CASE BENTO */}
      <section className="bg-gradient-to-b from-white to-[#f7efe2]/60 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case map"
            title="Nine concrete AI use cases the CCO and Director of Revenue Management recognise."
            description="Each panel is in production with a GCC hospitality group, F&B operator or tourism authority. Numbers are anonymised and approved by the engagement lead."
          />

          <div className="mt-12">
            <BentoGrid>
              {useCases.map((u, i) => (
                <BentoCell
                  key={u.title}
                  span={i === 0 || i === 2 ? 'lg' : 'md'}
                  variant={i === 0 ? 'dark' : i === 2 ? 'brand' : 'light'}
                >
                  <h3 className={`text-xl font-semibold ${i === 0 || i === 2 ? 'text-white' : 'text-ink-900'}`}>
                    {u.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      i === 0 || i === 2 ? 'text-white/85' : 'text-ink-600'
                    }`}
                  >
                    {u.body}
                  </p>
                </BentoCell>
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* INTEGRATION STACK */}
      <section className="py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Integration mechanism"
              title="Built to live inside the hospitality estate you already run."
              description="The PMS stays the system of record. The RMS stays the system of action. Brocode writes coexistence layers into Opera Cloud, Mews, IDeaS, Duetto and the major CRMs."
            />
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {integrationStack.map((p) => (
              <li key={p.label} className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{p.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REGULATORS / STANDARDS */}
      <section className="bg-ink-900 py-22 text-white md:py-28">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="Standards & posture"
            title="Anchored to UAE PDPL, GDPR and the Hijri-Gregorian calendar your forecasts live by."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {regulatorAnchors.map((r) => (
              <Reveal key={r.name}>
                <div className="rounded-2xl border border-teal-300/20 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-teal-200">{r.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{r.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference engagements"
            title="Four anonymised cases across property, group, F&B and tourism authority."
            description="All numbers are signed off by the engagement lead and verified against the operator's own reporting before publish."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.label} className="rounded-2xl border border-ink-100 bg-white p-7">
                <blockquote className="text-base leading-relaxed text-ink-800">&ldquo;{c.quote}&rdquo;</blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-teal-700">{c.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="bg-[#f7efe2]/60 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Vs the alternatives on your shortlist"
            title="PMS-bundled AI, hyperscaler stacks, RM point vendors or offshore SI."
            description="A senior CCO has usually been offered all four. The comparison reflects the first-call brief our engagement leads hear."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['PMS-bundled AI', 'Hyperscaler hospitality', 'RM point vendor']}
              rows={compareRows}
            />
          </div>
          <p className="mt-5 max-w-3xl text-sm text-ink-500">
            Compared with Oracle Opera Cloud AI, Mews Open API AI add-ons; Microsoft Hospitality, AWS
            Hospitality, Google Hospitality; IDeaS, Duetto and Cendyn Rev.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead-magnet" className="py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="GCC Hospitality Demand Playbook"
            description="28-page reference on Ramadan, Hajj, DSF and the inbound waves that break standard RM models. Covers the 11 calendar effects that distort GCC hospitality demand modelling, the Opera Cloud / Mews / Cloudbeds integration pattern, a multilingual concierge transcript benchmark across four languages and a worked example for a flagship Dubai resort across two booking cycles."
            contents={[
              '11 calendar effects in the GCC hospitality demand model',
              'Opera Cloud / Mews / Cloudbeds integration pattern',
              'IDeaS / Duetto coexistence at the RM analyst desk',
              'Multilingual concierge transcript benchmark (Khaleeji, Russian, Hindi, Mandarin)',
              'F&B menu-engineering worked example',
              'Loyalty intelligence and traveller-LTV pattern'
            ]}
            filePath="/downloads/gcc-hospitality-demand-playbook.pdf"
            ctaLabel="Email me the playbook"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="The questions a CCO or Director of Revenue Management asks before the second meeting."
              description="If something is missing here, message us on WhatsApp or send it via the form below."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="bg-[#f7efe2]/40 py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Talk to the engagement lead"
              title="Tell us about your PMS, RMS and source-market mix."
              description="Six short questions, then a senior hospitality engineer responds within one business day with a scoped pricing or concierge back-test outline."
            />
            <div className="mt-7 rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Prefer to chat?</p>
              <p className="mt-2 text-sm text-ink-700">
                Many CCOs ping the team on WhatsApp first. The message is pre-filled with the use case so you do
                not type the brief twice.
              </p>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={PAGE_SLUG}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
              >
                Continue on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 md:p-9">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedLinks} />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Request back-test"
        primaryHref="#quote-form"
      />
    </>
  );
}
