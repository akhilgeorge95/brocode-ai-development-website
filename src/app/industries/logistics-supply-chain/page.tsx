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

const PAGE_SLUG = 'logistics-supply-chain';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm with [operator]. We're scoping AI on [last-mile / network planning / customs / port yard / cold chain] and would like a back-test on our lane or fleet data. Could we arrange a call?";

export const metadata: Metadata = {
  title: 'AI for Logistics and Supply Chain — UAE, GCC, Cross-Border',
  description:
    'Last-mile optimisation, customs risk scoring, demand forecasting and port-yard AI for DP World, AD Ports, Aramex, Bahri and GCC operators. Mirsal 2 / FASAH / Bayan integrated. Navis N4 coexistence.',
  alternates: { canonical: 'https://www.brocode.ae/industries/logistics-supply-chain' },
  openGraph: {
    title: 'AI for Logistics and Supply Chain — UAE, GCC, Cross-Border',
    description:
      'Cross-border. Multi-modal. Integrated with your TMS, WMS, customs declaration system and port operating system.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/logistics-supply-chain',
    images: ['/images/industries/logistics-supply-chain.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCC Logistics AI — Port, Customs, Last-Mile',
    description:
      'Mirsal 2 / FASAH / Bayan integrated. Navis N4 coexistence. UAE-resident delivery team.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a network-planning back-test on your lane data',
  subtitle:
    'A senior logistics engagement lead reviews your TMS, customs estate and lane mix, and replies within one business day with a back-test outline.',
  ctaLabel: 'Request the back-test',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'operatorType',
      label: 'Operator type',
      type: 'select',
      required: true,
      options: [
        'Port operator',
        'Customs authority',
        '3PL / 4PL',
        'Express & last-mile',
        'Freight forwarder',
        'Shipper',
        'Cold-chain specialist'
      ]
    },
    {
      name: 'scale',
      label: 'Scale',
      type: 'select',
      required: true,
      options: [
        '<500 vehicles or <1M TEU',
        '500-2,500 vehicles or 1-4M TEU',
        '>2,500 vehicles or >4M TEU',
        'Multi-country GCC network'
      ]
    },
    {
      name: 'tmsWmsPos',
      label: 'TMS / WMS / POS',
      type: 'text',
      placeholder: 'Blue Yonder / SAP TM / Manhattan / Navis N4 / Oracle TMS / Korber / homegrown / mixed'
    },
    {
      name: 'customsSystems',
      label: 'Customs systems',
      type: 'multiselect',
      options: ['Mirsal 2', 'FASAH', 'Bayan', 'Asyad eClearance', 'Bahrain ofoq', 'Hukoomi customs', 'None']
    },
    {
      name: 'priorityUseCase',
      label: 'Priority use case',
      type: 'select',
      required: true,
      options: [
        'Last-mile routing',
        'Network & flow planning',
        'Customs risk',
        'Port-yard',
        'Cold-chain visibility',
        'Demand forecasting'
      ]
    },
    {
      name: 'lanes',
      label: 'Lanes of focus',
      type: 'multiselect',
      options: [
        'UAE domestic',
        'UAE-KSA',
        'UAE-Oman',
        'UAE-Qatar',
        'Red Sea',
        'East Africa',
        'South Asia',
        'EU-GCC'
      ]
    }
  ]
};

const useCases = [
  {
    title: 'Last-mile vehicle routing',
    body: 'Time-window, capacity, driver-shift and Friday-prayer constraints encoded into the solver. Real-time re-routing on HERE, Google Maps or Mapbox; connectors to Onfleet, Bringg and Locus. Live ETA models tuned to UAE traffic by emirate.'
  },
  {
    title: 'Demand & network planning',
    body: 'Hierarchical demand models keyed to Ramadan, Eid, Hajj, DSF/DSS and school terms, with cross-border lane awareness for UAE-KSA, UAE-Oman, UAE-Qatar and GCC Customs Union flows. The planner uses it every Sunday morning.'
  },
  {
    title: 'Customs risk scoring',
    body: 'Entity-and-shipment risk models on Mirsal 2 (Dubai), FASAH and Bayan (KSA). WCO SAFE-aligned, AEO-aware. Cuts red-channel false positives while preserving the SAR-equivalent compliance signal.'
  },
  {
    title: 'Port yard & berth sequencing',
    body: 'Navis N4 and CATOS coexistence via the TOS Adapter layer. Berth-and-yard sequence models, equipment-pool deployment, with a documented sub-second latency target for live decisions.'
  },
  {
    title: 'Cold-chain exception models',
    body: 'IoT-fused exception detection on Roambee, Tive and Sensitech telemetry; regulator-aware temperature deviation reporting for pharma, fresh and dairy lanes.'
  },
  {
    title: 'Container damage & gate OCR',
    body: 'Computer vision at the gate for container number OCR, IMO seal recognition and damage classification. Reduces manual gate-in / gate-out paperwork on Jebel Ali and Khalifa Port flows.'
  },
  {
    title: 'Document intelligence on customs',
    body: 'Bilingual Arabic-English extraction across bills of lading, commercial invoices, certificates of origin and PEL declarations. Cuts manual rekey across Mirsal 2 and the FTA reporting layer.'
  },
  {
    title: 'Driver and equipment dispatch',
    body: 'Driver-and-tractor pairing optimisation across the yard and the over-the-road network. Considers HSE windows, training currency and the maintenance cycle.'
  },
  {
    title: 'Customer-service shipment copilot',
    body: 'Multilingual shipment status summarisation across TMS, WMS and POS for the call-centre desk. Reduces inbound queries on tracking and ETA without retraining the agent.'
  }
];

const integrationStack = [
  {
    label: 'TMS / WMS',
    detail: 'Named connectors for Blue Yonder TMS & WMS, SAP TM, SAP EWM, Manhattan Active, Oracle TMS and Korber WMS. Coexistence with the supplier\'s AI modules where they are already paid for.'
  },
  {
    label: 'Port operating systems',
    detail: 'Navis N4 and CATOS via the TOS Adapter pattern. Berth, yard and equipment-pool signals on a documented latency budget.'
  },
  {
    label: 'Customs estate',
    detail: 'Mirsal 2 (Dubai), FASAH and Bayan (KSA), Asyad eClearance (Oman), Bahrain ofoq, Hukoomi customs (Qatar). AEO and WCO SAFE-aware risk treatment.'
  },
  {
    label: 'Routing & maps',
    detail: 'HERE Maps, Google Maps Platform and Mapbox; live ETA models tuned to UAE traffic patterns by emirate and time-of-day.'
  },
  {
    label: 'IoT & telemetry',
    detail: 'Roambee, Tive and Sensitech for cold-chain; vehicle telematics from major fleets; container reefer-status feeds.'
  },
  {
    label: 'GCC trade-corridor data',
    detail: 'Unified feature store covering UAE, KSA, Oman, Qatar, Bahrain and Kuwait trade calendars and customs documentation differences.'
  }
];

const regulatorAnchors = [
  {
    name: 'Dubai Customs & Mirsal 2',
    detail: 'Direct integration into Mirsal 2 declarations with documented data-handling for trade-sensitive fields and an audit trail customs can inspect.'
  },
  {
    name: 'KSA — FASAH, Bayan, ZATCA',
    detail: 'FASAH manifest, Bayan declaration and ZATCA invoice fields handled. AEO-aware risk treatment that respects Saudi Customs operating practice.'
  },
  {
    name: 'WCO SAFE & AEO',
    detail: 'Risk-scoring models built to the WCO SAFE framework with explicit handling for Authorised Economic Operator status across the GCC.'
  },
  {
    name: 'UAE PDPL & data residency',
    detail: 'Trade and customer data stays inside the country. Named DPO point of contact aligned to UAE Federal Decree-Law 45.'
  }
];

const caseStudies = [
  {
    quote:
      'Last-mile fleet of 1,600 vehicles. Cost-per-drop down 11 percent. On-time-in-full up 4 percentage points. The dispatcher kept the desk; the routing model retrained weekly.',
    label: 'UAE express operator — last-mile'
  },
  {
    quote:
      'Cross-border UAE-KSA demand-plan MAPE improved by 14 percentage points on the Ramadan-Eid window. The planner kept Sunday morning; the model handles the lane mix.',
    label: 'Regional integrator — cross-border demand'
  },
  {
    quote:
      'Customs risk-scoring reduced red-channel false positives by 38 percent with no measurable drop on confirmed non-compliance, validated by the authority\'s own audit team.',
    label: 'GCC customs authority — risk scoring'
  },
  {
    quote:
      'Navis N4-integrated yard sequence model on a flagship UAE container terminal cut equipment moves by 7 percent. The TOS supplier was kept in the loop on the integration pattern.',
    label: 'UAE port operator — Navis N4 yard'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'Mirsal 2 / FASAH / Bayan native integration',
    brocode: true,
    competitors: [false, false, 'Within own platform']
  },
  {
    feature: 'Navis N4 coexistence via TOS Adapter',
    brocode: true,
    competitors: [false, 'OEM-locked', 'Limited']
  },
  {
    feature: 'Portable across mixed TMS / WMS estates',
    brocode: true,
    competitors: ['Platform-locked', 'Locked to TMS supplier', 'Customer-defined']
  },
  {
    feature: 'GCC calendar-aware demand (Ramadan / Eid / Hajj / DSF)',
    brocode: true,
    competitors: ['Generic seasonal', 'Generic seasonal', 'Generic seasonal']
  },
  {
    feature: 'AEO-aware customs risk treatment',
    brocode: true,
    competitors: [false, false, 'Limited']
  },
  {
    feature: 'UAE-resident engineers named on the SoW',
    brocode: true,
    competitors: ['Mixed', 'Mixed', 'Offshore-led']
  },
  {
    feature: 'Running models the planner uses every Sunday',
    brocode: true,
    competitors: ['Dashboards', 'Platform output', 'Network-design study']
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'Our Blue Yonder / SAP / Manhattan licence already includes AI modules. Why work with you?',
    answer:
      'The vendor-bundled AI is locked to the parent platform and tuned to a global pattern. Brocode is portable across mixed TMS, WMS and POS estates and writes models that account for GCC calendar effects (Ramadan, Eid, Hajj, DSF) and the specific customs systems your shipments hit. We coexist with the vendor module rather than duplicating it, and we document the coexistence pattern in writing.'
  },
  {
    question: 'How do you validate a customs risk model without increasing dwell time?',
    answer:
      'The model is back-tested against historical declaration outcomes, with the customs authority\'s own audit team reviewing red-channel and green-channel outcomes side by side. We measure red-channel false-positive rate, confirmed-non-compliance catch rate and average dwell time. The model goes live behind a shadow-mode period before any decision is automated.'
  },
  {
    question: 'Cross-border GCC data is messy. Can your team handle the corridor, not just the UAE?',
    answer:
      'Yes. Brocode runs a unified feature store covering UAE, KSA, Oman, Qatar, Bahrain and Kuwait trade calendars, with named integration into Mirsal 2, FASAH, Bayan, Asyad eClearance, Bahrain ofoq and Hukoomi customs. The lead-magnet playbook covers the documentation differences across the corridor and the AEO-aware risk pattern that survives all five jurisdictions.'
  },
  {
    question: 'What is the latency target for a port-yard decision on Navis N4?',
    answer:
      'Sub-second for berth sequence and equipment-pool moves; sub-minute for the longer-horizon yard plan. The pattern is a TOS Adapter sitting alongside N4, with the model reading the event stream and writing advisory signals into the planner\'s board. Navis remains the system of record.'
  },
  {
    question: 'How often does the routing engine retrain?',
    answer:
      'Last-mile routing models retrain weekly against the latest week\'s on-the-road outcomes. Demand-plan models retrain monthly with seasonal recalibration ahead of Ramadan, Hajj and DSF. The dispatcher keeps a kill switch and a manual override; the model card moves through review before each promotion.'
  },
  {
    question: 'Where does the data sit, and what does your security pack include?',
    answer:
      'UAE-resident environments are the default — G42 Cloud, Khazna, Azure UAE North or an on-premise data centre. Trade-sensitive data does not leave the country. The security pack includes ISO 27001 SOA, SOC 2 Type II, an UAE PDPL conformance statement and the sub-processor register. Procurement gets it on the first call.'
  },
  {
    question: 'Who is named on the SoW?',
    answer:
      'The UAE-resident engineering lead, the customs or last-mile domain lead and the named DPO. Bench depth is published. Brocode does not deliver through an undisclosed offshore team.'
  }
];

const relatedLinks = [
  {
    label: 'Predictive Analytics',
    href: '/services/predictive-analytics',
    description: 'Demand and lane forecasting under the hood.'
  },
  {
    label: 'Computer Vision',
    href: '/services/computer-vision',
    description: 'Terminal-gate OCR, container damage and yard-camera detection.'
  },
  {
    label: 'Document Intelligence',
    href: '/services/document-intelligence',
    description: 'Customs declarations, bills of lading and certificate-of-origin extraction.'
  },
  {
    label: 'MLOps & AI Infrastructure',
    href: '/services/mlops-ai-infrastructure',
    description: 'Live-decision latency and retraining operating model.'
  },
  {
    label: 'Certifications & Compliance',
    href: '/security-compliance',
    description: 'Data-sharing posture with customs authorities and shippers.'
  }
];

export default function LogisticsSupplyChainPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI for Logistics and Supply Chain',
    serviceType: 'Logistics and supply-chain AI engineering',
    provider: {
      '@type': 'Organization',
      name: 'Brocode Solutions',
      url: 'https://www.brocode.ae'
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType:
        'UAE and GCC port operators, customs authorities, 3PL/4PL operators, last-mile and freight integrators'
    },
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Oman', 'Qatar', 'Bahrain', 'Kuwait'],
    url: 'https://www.brocode.ae/industries/logistics-supply-chain',
    description:
      'Logistics and supply-chain AI built for UAE and GCC operators — last-mile, network planning, customs-risk scoring, port-yard and cold-chain. Integrated with TMS, WMS, POS and customs declaration systems.'
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
      <Script id="ld-logistics" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Script id="ld-logistics-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO — maritime blue + amber */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0c1b2e] via-[#0f4c81] to-[#0c1b2e] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.20),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(15,76,129,0.40),transparent_55%)]"
        />
        <div className="container-site pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Logistics & Supply Chain' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                  Industries · Logistics & Supply Chain
                </p>
                <h1 className="mt-5 text-balance text-display-xl text-white">
                  Logistics AI built for UAE and GCC operators.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                  Last-mile, network planning, customs-risk scoring, demand forecasting and port-yard optimisation
                  — integrated with your TMS, WMS, POS and customs declaration systems. Measured cost-to-serve
                  and dwell-time reductions inside one operating quarter.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton href="#quote-form" variant="secondary" size="lg" event="quote_open">
                    Request a lane back-test
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
                    className="text-sm font-semibold text-amber-300 underline decoration-amber-400/40 underline-offset-4 hover:text-amber-200"
                    data-event="secondary_cta_click"
                    data-page={PAGE_SLUG}
                  >
                    Download the GCC Cross-Border Playbook
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-8 max-w-xl text-sm text-white/60">
                  Cross-border. Multi-modal. Integrated with your TMS, WMS and customs system.
                </p>
              </Reveal>
            </div>

            {/* Corridor map card */}
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <GlassCard tone="dark" padding="sm" className="overflow-hidden">
                  <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/industries/logistics-supply-chain.jpg"
                      alt="GCC trade corridor map with last-mile and port-yard overlays for UAE to KSA flows"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1024px) 36vw, 90vw"
                    />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-xl bg-white/95 px-4 py-3 text-xs text-ink-900 shadow-card">
                      <div>
                        <p className="font-semibold">Lane · UAE-KSA · Saih Shuaib → Batha</p>
                        <p className="mt-0.5 text-ink-500">3 vehicles · ETA tightened</p>
                      </div>
                      <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-800">
                        Live
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-xl bg-ink-900/85 px-4 py-3 text-[11px] text-white">
                      <div>
                        <p className="opacity-60">Berth seq.</p>
                        <p className="mt-0.5 text-sm font-semibold">Updated</p>
                      </div>
                      <div>
                        <p className="opacity-60">Eid forecast</p>
                        <p className="mt-0.5 text-sm font-semibold">Band ±5%</p>
                      </div>
                      <div>
                        <p className="opacity-60">Customs</p>
                        <p className="mt-0.5 text-sm font-semibold text-amber-300">Green</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 px-1 text-xs text-white/70">
                    Last-mile re-routed on E11 / E311 / E611 toward Saih Shuaib. Berth-sequence advisory accepted
                    by the yard planner. Eid demand band tightened.
                  </p>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      <section className="border-b border-ink-100 bg-white py-12">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '11%', label: 'Cost-per-drop reduction across a 1,600-vehicle last-mile fleet' },
              { value: '14 pp', label: 'Cross-border UAE-KSA demand-plan MAPE improvement on Ramadan-Eid' },
              { value: '38%', label: 'Red-channel false-positive reduction at a GCC customs authority' },
              { value: '7%', label: 'Equipment-move reduction on a Navis N4-integrated yard sequence' }
            ]}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The problem on the table"
            title="The routing engine has not been retrained in 14 months."
            description="The demand plan for the cross-border KSA lane keeps missing the Eid spike. The customs risk-scoring model produces too many red-channel diversions that block legitimate trade. The new yard-optimisation pilot at the port still has not connected to Navis N4 in production. The CFO is watching cost-per-shipment quarter on quarter."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0f4c81]">Cross-border data</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Every customs authority has a different API.</h3>
                <p className="mt-3 text-ink-600">
                  Mirsal 2, FASAH, Bayan, Asyad eClearance, Bahrain ofoq and Hukoomi customs each speak their own
                  language. Without a unified corridor data layer the model dies in the integration phase.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0f4c81]">TMS lock-in</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Vendor-bundled AI is locked to the parent platform.</h3>
                <p className="mt-3 text-ink-600">
                  Operators with mixed TMS, WMS and POS inheritance cannot rely on a single supplier&apos;s AI.
                  Brocode is portable across Blue Yonder, SAP TM, Manhattan, Oracle TMS, Korber and Navis.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0f4c81]">Peak-season volatility</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Ramadan, Eid and Hajj break standard demand models.</h3>
                <p className="mt-3 text-ink-600">
                  Generic seasonality does not capture Hijri-calendar effects, payday cycles or the cross-border
                  pre-Hajj wave. The Brocode demand stack is built for it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* USE-CASE BENTO */}
      <section className="bg-gradient-to-b from-white to-[#f4f8fb] py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case map"
            title="Nine concrete AI use cases the operations COO recognises."
            description="Across last-mile, network planning, customs, port-yard and cold-chain. Each panel is in production with a GCC operator."
          />

          <div className="mt-12">
            <BentoGrid>
              {useCases.map((u, i) => (
                <BentoCell
                  key={u.title}
                  span={i === 0 || i === 5 ? 'lg' : 'md'}
                  variant={i === 0 ? 'dark' : i === 5 ? 'brand' : 'light'}
                >
                  <h3 className={`text-xl font-semibold ${i === 0 || i === 5 ? 'text-white' : 'text-ink-900'}`}>
                    {u.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      i === 0 || i === 5 ? 'text-white/85' : 'text-ink-600'
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
              title="Built to live inside the logistics estate you already run."
              description="Named connectors across the TMS, WMS, POS and customs systems. The TOS Adapter pattern for Navis N4. A unified GCC trade-corridor feature store. Procurement gets the integration map on the first call."
            />
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {integrationStack.map((p) => (
              <li key={p.label} className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0f4c81]">{p.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REGULATORS / STANDARDS */}
      <section className="bg-[#0c1b2e] py-22 text-white md:py-28">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="Customs & standards"
            title="Anchored to the customs authorities and trade frameworks that decide your dwell time."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {regulatorAnchors.map((r) => (
              <Reveal key={r.name}>
                <div className="rounded-2xl border border-amber-300/20 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-amber-300">{r.name}</h3>
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
            title="Four anonymised cases across last-mile, customs, network plan and port."
            description="All numbers are signed off by the engagement lead and verified against the operator's own reporting before publish."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.label} className="rounded-2xl border border-ink-100 bg-white p-7">
                <blockquote className="text-base leading-relaxed text-ink-800">&ldquo;{c.quote}&rdquo;</blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#0f4c81]">{c.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="bg-[#f4f8fb] py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Vs the alternatives on your shortlist"
            title="Platform plays, TMS-bundled AI, Big-4 supply-chain practices or in-house build."
            description="A senior COO has usually been offered all four. The comparison reflects the first-call brief our engagement leads hear."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['Platform plays (Maersk / Flexport)', 'Vendor-bundled (Blue Yonder / SAP)', 'Big-4 supply-chain']}
              rows={compareRows}
            />
          </div>
          <p className="mt-5 max-w-3xl text-sm text-ink-500">
            Compared with Maersk Flow / Flexport-style platforms; Blue Yonder, SAP IBP, Manhattan Active AI
            modules; Accenture SCM, Deloitte SCO, EY SC, KPMG.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead-magnet" className="py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="GCC Cross-Border Logistics AI Playbook"
            description="30-page reference covering the UAE-KSA-Oman-Qatar trade corridors, the Ramadan/Eid/Hajj demand cycles, customs-authority API and documentation differences (Mirsal 2, FASAH, Bayan, Asyad eClearance, Bahrain ofoq) and the AEO-aware risk-scoring pattern."
            contents={[
              'Ramadan / Eid / Hajj demand-cycle calibration',
              'Mirsal 2 / FASAH / Bayan / Asyad eClearance API mapping',
              'AEO-aware customs risk-scoring pattern',
              'Navis N4 TOS Adapter coexistence pattern',
              'Worked example: tier-1 3PL across three GCC lanes',
              'Sample tender response and SoW template'
            ]}
            filePath="/downloads/gcc-cross-border-logistics-playbook.pdf"
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
              title="The questions a COO asks before the second meeting."
              description="If something is missing here, message us on WhatsApp or send it via the form below."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="bg-[#f4f8fb] py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Talk to the engagement lead"
              title="Tell us about the lane, the fleet or the terminal you want back-tested."
              description="Six short questions, then a senior logistics engineer responds within one business day with a scoped back-test outline."
            />
            <div className="mt-7 rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0f4c81]">Prefer to chat?</p>
              <p className="mt-2 text-sm text-ink-700">
                Many operators ping the team on WhatsApp first. The message is pre-filled with the use case so
                you do not type the brief twice.
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
