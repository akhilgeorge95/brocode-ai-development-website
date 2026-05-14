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

const PAGE_SLUG = 'real-estate-proptech';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm with [developer / REIT / FM]. We're scoping AI on [valuation / leasing / smart-building / FM analytics] and would like to discuss a back-test on our inventory or portfolio. Could we arrange a call?";

export const metadata: Metadata = {
  title: 'AI for UAE Real Estate and PropTech — Valuation, Leasing, Smart Buildings',
  description:
    'Real-estate AI for UAE developers, REITs and facility managers. RERA/DLD-aware valuation, leasing pipeline conversion, smart-building analytics and FM models. Integrated with Yardi, MRI, Oracle and your BMS.',
  alternates: { canonical: 'https://www.brocode.ae/industries/real-estate-proptech' },
  openGraph: {
    title: 'AI for UAE Real Estate and PropTech — Valuation, Leasing, Smart Buildings',
    description:
      'RERA/DLD-aware valuation, leasing pipeline conversion and BMS-integrated smart-building intelligence for UAE master developers, REITs and facility managers.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/real-estate-proptech',
    images: ['/images/industries/real-estate-proptech.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for UAE Real Estate and PropTech',
    description:
      'Unit-level valuation on RERA/DLD data, integrated with Yardi and MRI. Built for UAE master developers and REITs.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a unit-level valuation back-test on your launch inventory',
  subtitle:
    'A senior real-estate engagement lead reviews your portfolio brief and responds within one business day, with an indicative back-test scope.',
  ctaLabel: 'Request the back-test',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'entityType',
      label: 'Entity type',
      type: 'select',
      required: true,
      options: [
        'Master developer',
        'REIT',
        'Facility-management operator',
        'Smart-building / BMS team',
        'Giga-project office',
        'Asset manager'
      ]
    },
    {
      name: 'portfolioScale',
      label: 'Portfolio scale',
      type: 'select',
      required: true,
      options: [
        '<500 units or <100K sqm',
        '500-5K units or 100K-1M sqm',
        '>5K units or >1M sqm',
        'Giga-project'
      ]
    },
    {
      name: 'propertyAccounting',
      label: 'Property-accounting platform',
      type: 'select',
      options: ['Yardi Voyager', 'MRI Software', 'Oracle JD Edwards', 'Oracle Property Manager', 'SAP RE-FX', 'Homegrown', 'Other']
    },
    {
      name: 'bmsStack',
      label: 'BMS / smart-building stack',
      type: 'select',
      options: ['Siemens Desigo', 'Honeywell Forge', 'Schneider EcoStruxure', 'Johnson Controls OpenBlue', 'Mixed estate', 'None']
    },
    {
      name: 'priorityUseCase',
      label: 'Priority use case',
      type: 'select',
      required: true,
      options: [
        'Off-plan valuation',
        'Leasing pipeline',
        'Smart-building energy',
        'FM analytics',
        'Digital twin',
        'Tenant experience'
      ]
    },
    {
      name: 'dataRegime',
      label: 'Data regime',
      type: 'select',
      options: ['RERA/DLD Dubai', 'ADREC Abu Dhabi', 'KSA NHC/REGA', 'Qatar', 'Mixed GCC']
    }
  ]
};

const useCases = [
  {
    title: 'Off-plan unit-level valuation',
    body: 'Hedonic plus tree-ensemble price models trained on RERA/DLD and ADREC transaction feeds. Per-unit estimate with documented confidence intervals; flags units priced outside the comp band before launch.'
  },
  {
    title: 'Standing-stock revaluation',
    body: 'Quarterly mark-to-market on standing portfolios with audit trail. Cuts the spreadsheet rebuild cycle the analyst runs each cycle and gives the board a defensible number against DLD comparables.'
  },
  {
    title: 'Leasing pipeline conversion',
    body: 'CRM-native model on Salesforce or Microsoft Dynamics with churn signals from FM tickets. Unit-level probability-of-letting and expected time-to-lease at the lease-up phase.'
  },
  {
    title: 'Smart-building energy intelligence',
    body: 'Energy-disaggregation and occupancy-forecasting models on Siemens Desigo, Honeywell Forge, Schneider EcoStruxure and Johnson Controls data. Setpoint advisory inside the BMS supplier envelope.'
  },
  {
    title: 'Predictive FM ticket routing',
    body: 'Routing and MTTR forecasting on IBM Maximo, Archibus and MRI. SLA risk scoring per asset for the FM operator desk; HVAC and lift fault prioritisation tuned to the portfolio.'
  },
  {
    title: 'Tenant-experience signal',
    body: 'NPS and aspect-level sentiment across English and Khaleeji Arabic tenant surveys, with retention propensity feeding into renewal price and concession decisions.'
  },
  {
    title: 'Construction-progress vision',
    body: 'Computer vision on site cameras and drones for floor-by-floor completion tracking; feeds an estimated practical-completion date into the launch-marketing calendar.'
  },
  {
    title: 'Digital-twin bindings for giga-projects',
    body: 'Autodesk Tandem and Bentley iTwin bindings for the giga-project office. AI-generated occupancy and energy signals attach to the twin rather than living in a separate dashboard.'
  },
  {
    title: 'Document intelligence on title and lease',
    body: 'Arabic-and-English extraction across title deeds, Oqood contracts, escrow statements and lease agreements. Cuts manual conveyancing handling on M&A and portfolio diligence.'
  }
];

const integrationStack = [
  {
    label: 'Property accounting',
    detail: 'Named connectors for Yardi Voyager, MRI Software, Oracle JD Edwards, Oracle Property Manager and SAP RE-FX.'
  },
  {
    label: 'CRM & leasing',
    detail: 'Salesforce and Microsoft Dynamics native; lease-up signals piped back into the opportunity record.'
  },
  {
    label: 'BMS & smart building',
    detail: 'Siemens Desigo CC and Building X, Honeywell Forge, Schneider EcoStruxure, Johnson Controls OpenBlue via BACnet/IP and KNX bridges.'
  },
  {
    label: 'CAFM & FM',
    detail: 'IBM Maximo, Archibus and MRI ticket routing, with predictive MTTR and SLA risk feeding the FM control room.'
  },
  {
    label: 'Digital twin',
    detail: 'Autodesk Tandem and Bentley iTwin partner-grade bindings for the giga-project office and the operations side.'
  },
  {
    label: 'Sovereign data layer',
    detail: 'RERA/DLD/ADREC ingestion runs inside a UAE-resident environment with documented data-source attribution.'
  }
];

const regulatorAnchors = [
  {
    name: 'Dubai Land Department & RERA',
    detail: 'Weekly transaction ingestion; valuation models are anchored to the DLD comparable set and reviewed against RERA index data.'
  },
  {
    name: 'Abu Dhabi Real Estate Centre (ADREC)',
    detail: 'ADREC registry ingestion for Abu Dhabi standing stock and Saadiyat/Yas off-plan, with the same provenance trail.'
  },
  {
    name: 'UAE PDPL & data residency',
    detail: 'Federal Decree-Law 45 conformance statement; tenant and buyer PII stays inside the country across model training and inference.'
  },
  {
    name: 'Net Zero 2050',
    detail: 'Energy-intensity outcomes mapped to the group sustainability report so a sukuk or green-bond cycle has a quantified narrative.'
  }
];

const caseStudies = [
  {
    quote:
      'Off-plan unit-level valuation across a 2,400-unit launch with median absolute error of 3.7 percent against actual close prices, validated by the developer\'s own valuation team.',
    label: 'UAE master developer — off-plan launch'
  },
  {
    quote:
      'Leasing pipeline conversion lift of 14 percent across a 9-month window through unit-level prioritisation; the asset manager kept the operating model and added the model on top.',
    label: 'GCC REIT — leasing pipeline'
  },
  {
    quote:
      'HVAC and lift fault routing on a 1.6 million sqm portfolio cutting MTTR by 22 percent. The FM operator owns the ticket flow; the model sits alongside Maximo.',
    label: 'UAE facility-management operator'
  },
  {
    quote:
      'Occupancy-aware HVAC setpoint optimisation on a flagship Dubai community cutting energy intensity by 11 percent over 12 months, with the BMS supplier kept in the loop.',
    label: 'Mixed-use community — smart building'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'RERA / DLD / ADREC native ingestion',
    brocode: true,
    competitors: [false, false, false]
  },
  {
    feature: 'Unit-level off-plan accuracy on UAE inventory',
    brocode: 'MAPE 3.7% (5K-unit Dubai back-test)',
    competitors: ['City median only', 'Advisory PDF', 'Vendor-bundled estimate']
  },
  {
    feature: 'Yardi / MRI / Oracle JDE / SAP RE-FX coexistence',
    brocode: true,
    competitors: ['Within own ecosystem only', 'Through advisory IP', 'Limited']
  },
  {
    feature: 'BMS-agnostic across Siemens, Honeywell, Schneider, JCI',
    brocode: true,
    competitors: ['Vendor-locked module', false, 'Own-hardware first']
  },
  {
    feature: 'Autodesk Tandem / Bentley iTwin bindings',
    brocode: true,
    competitors: [false, false, false]
  },
  {
    feature: 'UAE-resident model training & inference',
    brocode: true,
    competitors: ['Regional, not always UAE', 'Public-cloud first', 'Vendor cloud']
  },
  {
    feature: 'Running models the asset team uses weekly',
    brocode: true,
    competitors: ['Reporting only', 'Strategy decks', 'Dashboards']
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'How fresh is the RERA / DLD / ADREC data the valuation model uses?',
    answer:
      'We ingest the Dubai Land Department transaction feed weekly and the ADREC Abu Dhabi registry on the published cadence. Off-plan and ready-market comps are versioned, and the model retraining schedule is fortnightly with documented data-source attribution against every prediction. The provenance trail is what your valuation team needs to defend the number internally.'
  },
  {
    question: 'Our BMS vendor controls the API. How do you actually get to the data?',
    answer:
      'We work across Siemens Desigo CC and Building X, Honeywell Forge, Schneider EcoStruxure and Johnson Controls OpenBlue. The pattern is BACnet/IP or KNX bridge at the building, with a sanctioned read path that the BMS supplier signs off. We document the integration before procurement signs the SoW, so you do not buy a model that cannot reach the data.'
  },
  {
    question: 'We run Yardi and MRI. Are you asking us to migrate?',
    answer:
      'No. The Brocode model writes to your existing financial estate. Named connectors exist for Yardi Voyager, MRI Software, Oracle JD Edwards, Oracle Property Manager and SAP RE-FX. The leasing pipeline model writes back into Salesforce or Microsoft Dynamics opportunities. No data warehouse rip-and-replace and no migration story.'
  },
  {
    question: 'How is the off-plan model different from a property-portal AVM?',
    answer:
      'Property-portal AVMs are trained on listing data and tend to report city or community medians. The Brocode model trains on actual DLD transfer prices, uses tower-and-floor-level features, applies a hedonic plus tree-ensemble blend, and reports unit-level estimates with documented confidence intervals. The lead-magnet report covers the back-test against three public AVMs on a 5,000-unit Dubai sample.'
  },
  {
    question: 'How often does the model retrain and who owns the retraining?',
    answer:
      'Valuation models retrain fortnightly against the latest DLD/ADREC release. Leasing-pipeline models retrain monthly against the CRM opportunity outcomes. BMS energy models retrain quarterly or after a setpoint regime change. Brocode runs the retraining; the asset-management team owns the sign-off on the new model card before it goes live.'
  },
  {
    question: 'Where does the data sit, and who can see it?',
    answer:
      'Model training and inference run inside a UAE-resident environment of your choice — G42 Cloud, Khazna, an Azure UAE North tenancy or your on-premise data centre. PII on buyers and tenants is encrypted in transit and at rest, with a named Brocode DPO point of contact aligned to UAE PDPL. The architecture is described in our security pack, which procurement can request on the first call.'
  },
  {
    question: 'Can you operate alongside our digital-twin programme on Autodesk Tandem or Bentley iTwin?',
    answer:
      'Yes. Brocode is a partner-grade integrator into Autodesk Tandem and Bentley iTwin. AI-generated occupancy, energy, and asset-condition signals attach to the twin rather than living in a separate dashboard. This is the integration pattern that turns the giga-project digital twin into something the operations team actually consults.'
  }
];

const relatedLinks = [
  {
    label: 'Predictive Analytics',
    href: '/services/predictive-analytics',
    description: 'Valuation, leasing pace and demand forecasting under the hood.'
  },
  {
    label: 'Computer Vision',
    href: '/services/computer-vision',
    description: 'Construction-progress, defect detection and giga-project site monitoring.'
  },
  {
    label: 'MLOps & AI Infrastructure',
    href: '/services/mlops-ai-infrastructure',
    description: 'Retraining and the operating model for BMS, smart-building and energy data.'
  },
  {
    label: 'Recommendation Systems',
    href: '/services/recommendation-systems',
    description: 'Tenant-experience and amenity personalisation on the property app.'
  },
  {
    label: 'Certifications & Compliance',
    href: '/security-compliance',
    description: 'UAE PDPL conformance, ISO and SOC posture for procurement.'
  }
];

export default function RealEstateProptechPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI for Real Estate and PropTech',
    serviceType: 'Real-estate AI engineering',
    provider: {
      '@type': 'Organization',
      name: 'Brocode Solutions',
      url: 'https://www.brocode.ae'
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'UAE master developers, REITs, giga-project offices and facility-management operators'
    },
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Oman'],
    url: 'https://www.brocode.ae/industries/real-estate-proptech',
    description:
      'Real-estate AI for UAE developers, REITs and facility managers — off-plan valuation, leasing pipeline conversion, smart-building intelligence and FM analytics, integrated with Yardi, MRI and the BMS estate.'
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
      <Script id="ld-realestate" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Script id="ld-realestate-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO — sand + brand-blue palette, architectural model + unit valuation overlay */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(217,179,109,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(15,76,129,0.10),transparent_55%)]"
        />
        <div className="container-site pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Real Estate & PropTech' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  Industries · Real Estate & PropTech
                </p>
                <h1 className="mt-5 text-balance text-display-xl text-ink-900">
                  Real-estate AI for UAE developers and REITs.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
                  Off-plan valuation, leasing pipeline conversion, smart-building intelligence and facility
                  analytics — integrated with Yardi, MRI and your BMS, on models trained against RERA, DLD and
                  ADREC data. A measured P&amp;L outcome inside two launch cycles, not a slide pack.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton href="#quote-form" variant="primary" size="lg" event="quote_open">
                    Request a valuation back-test
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
                    className="text-sm font-semibold text-ink-700 underline decoration-ink-200 underline-offset-4 hover:text-brand"
                    data-event="secondary_cta_click"
                    data-page={PAGE_SLUG}
                  >
                    Download the off-plan accuracy report
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-8 max-w-xl text-sm text-ink-500">
                  Unit-level valuation on RERA/DLD data. Integrated with Yardi and MRI. UAE-resident model training
                  and inference.
                </p>
              </Reveal>
            </div>

            {/* Architectural-model valuation overlay */}
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <GlassCard padding="sm" className="overflow-hidden">
                  <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/industries/real-estate-proptech.jpg"
                      alt="Architectural model of a UAE residential tower with unit-level valuation pills overlaid on each floor"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1024px) 36vw, 90vw"
                    />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-xl bg-white/95 px-4 py-3 text-xs shadow-card">
                      <div>
                        <p className="font-semibold text-ink-900">Tower B · Floor 28 · Unit 2806</p>
                        <p className="mt-0.5 text-ink-500">2 BR · 1,310 sqft · SE corner</p>
                      </div>
                      <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-800">
                        Review
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-xl bg-ink-900/90 px-4 py-3 text-[11px] text-white">
                      <div>
                        <p className="opacity-60">Model price</p>
                        <p className="mt-0.5 text-sm font-semibold">AED 2.41 M</p>
                      </div>
                      <div>
                        <p className="opacity-60">DLD comp band</p>
                        <p className="mt-0.5 text-sm font-semibold">2.46-2.58 M</p>
                      </div>
                      <div>
                        <p className="opacity-60">Variance</p>
                        <p className="mt-0.5 text-sm font-semibold text-amber-300">-4.2%</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 px-1 text-xs text-ink-600">
                    Priced 4.2% below comp range — flagged for review before launch.
                  </p>
                </GlassCard>
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
              { value: '3.7%', label: 'MAPE on Dubai off-plan unit-level back-test (5K-unit sample)' },
              { value: '14 pp', label: 'Leasing-pipeline conversion uplift over a 9-month window' },
              { value: '22%', label: 'MTTR reduction on HVAC and lift faults across 1.6M sqm' },
              { value: '11%', label: 'Energy-intensity reduction on a flagship Dubai community' }
            ]}
          />
        </div>
      </section>

      {/* WHY PROPTECH UNDERDELIVERS */}
      <section className="py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The problem on the table"
            title="The board has asked, again, why the AI roadmap has not produced a P&L outcome."
            description="The off-plan pricing model is rebuilt in a spreadsheet every cycle, the leasing pipeline is unforecasted at unit level, the BMS data is collected but never connected to a tenant-experience or energy-savings story, and the previous PropTech engagement was a SaaS pilot that did not integrate with the Yardi or MRI estate."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">BMS API lock</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">The previous vendor could not get past the BMS supplier.</h3>
                <p className="mt-3 text-ink-600">
                  Siemens, Honeywell, Schneider and Johnson Controls each control their API layer. A model
                  without a sanctioned read path stalls at integration. Brocode documents the BACnet/IP or KNX
                  bridge before procurement signs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">AVM credibility</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">The valuation team distrusts AVMs for good reason.</h3>
                <p className="mt-3 text-ink-600">
                  Property-portal AVMs report city medians. Off-plan inventory needs tower-and-floor-level
                  modelling on actual DLD transfer prices with confidence intervals, not a single point estimate.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Yardi / MRI estate</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">The model has to live inside the financial estate.</h3>
                <p className="mt-3 text-ink-600">
                  No data-warehouse rebuild. Named connectors into Yardi Voyager, MRI Software, Oracle JDE,
                  Oracle Property Manager and SAP RE-FX; leasing signals write back into Salesforce or Dynamics.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* USE-CASE BENTO GRID */}
      <section className="bg-gradient-to-b from-white to-amber-50/40 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case map"
            title="Nine concrete AI use cases the asset-management team uses weekly."
            description="Each panel below is in production with a UAE master developer, REIT or facility-management operator. Numbers are anonymised and approved by the engagement lead."
          />

          <div className="mt-12">
            <BentoGrid>
              {useCases.map((u, i) => (
                <BentoCell
                  key={u.title}
                  span={i === 0 ? 'lg' : i === 1 ? 'md' : i === 4 ? 'lg' : 'md'}
                  variant={i === 0 ? 'dark' : 'light'}
                >
                  <h3 className={`text-xl font-semibold ${i === 0 ? 'text-white' : 'text-ink-900'}`}>{u.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? 'text-white/80' : 'text-ink-600'}`}>{u.body}</p>
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
              title="Built to live inside the property estate you already run."
              description="No migration story. The Brocode stack writes into your property accounting, your CRM and your BMS through named connectors. Procurement gets the integration pattern in writing before the SoW."
            />
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {integrationStack.map((p) => (
              <li key={p.label} className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.label}</p>
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
            eyebrow="Regulators & standards"
            title="Anchored to the registries and rules your valuation team already trusts."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {regulatorAnchors.map((r) => (
              <Reveal key={r.name}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{r.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{r.detail}</p>
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
            title="Four anonymised cases the asset-management board accepted."
            description="All numbers are signed off by the engagement lead and verified against the client's own internal reporting before publish."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.label} className="rounded-2xl border border-ink-100 bg-white p-7">
                <blockquote className="text-base leading-relaxed text-ink-800">&ldquo;{c.quote}&rdquo;</blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">{c.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="bg-amber-50/60 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Vs the alternatives on your shortlist"
            title="PropTech SaaS, Big-4 advisory, BMS-bundled AI or in-house BI — where Brocode sits."
            description="A senior CDO has usually been offered all four. The comparison below reflects the brief our engagement leads hear on first call."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['PropTech SaaS', 'Big-4 advisory', 'BMS-bundled AI']}
              rows={compareRows}
            />
          </div>
          <p className="mt-5 max-w-3xl text-sm text-ink-500">
            Compared with VTS / Reonomy / HqO / JLL Azara / Yardi Elevate; CBRE / JLL / Knight Frank /
            Deloitte Real Estate; Siemens Building X / Honeywell Forge / Schneider EcoStruxure.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead-magnet" className="py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Dubai Off-Plan Valuation Accuracy Report"
            description="28-page PDF with a unit-by-tower-by-community accuracy matrix on a 5,000-unit Dubai sample. Brocode model versus three publicly available AVMs and a hedonic baseline, plus the seven data-quality issues in RERA/DLD feeds that distort off-plan price models."
            contents={[
              'Unit-level MAPE: 3.7% Brocode vs 11.4% best public AVM',
              'Tower-by-tower accuracy matrix across 12 communities',
              'Hedonic baseline plus tree-ensemble blend explained',
              'Seven data-quality traps in RERA / DLD feeds',
              'ADREC overlay for Abu Dhabi off-plan inventory',
              'Sample valuation API contract for procurement'
            ]}
            filePath="/downloads/dubai-off-plan-valuation-report.pdf"
            ctaLabel="Email me the report"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="The questions a CDO asks before the second meeting."
              description="If something is missing here, raise it on WhatsApp or in the form below. The engagement lead replies within one business day."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="bg-amber-50/40 py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Talk to the engagement lead"
              title="Tell us about the inventory or portfolio you want back-tested."
              description="Six short questions, then a senior engineer responds with a scoped back-test outline. No procurement loop on the first round."
            />
            <div className="mt-7 rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Prefer to chat?</p>
              <p className="mt-2 text-sm text-ink-700">
                Most CDOs ping the team on WhatsApp first. The message is pre-filled with the use case so you do
                not have to type the brief twice.
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
