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

const PAGE_SLUG = 'energy-utilities';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm with [operator]. We're scoping AI on [refining PdM / upstream / grid / emissions] and need a PI-native partner with IEC 62443-aligned delivery. Could we arrange a call?";

export const metadata: Metadata = {
  title: 'AI for Energy and Utilities — ADNOC, DEWA, TAQA and GCC Operators',
  description:
    'Refining predictive maintenance, grid forecasting, upstream optimisation and OGMP 2.0-aligned methane intelligence. PI / AVEVA native, IEC 62443 control mapping, sovereign deployment for ADNOC, DEWA, TAQA and the GCC.',
  alternates: { canonical: 'https://www.brocode.ae/industries/energy-utilities' },
  openGraph: {
    title: 'AI for Energy and Utilities — ADNOC, DEWA, TAQA and GCC Operators',
    description:
      'PI System / AVEVA-native modelling, IEC 62443-aligned delivery, Purdue L3.5 inference. Built for ADNOC, DEWA, TAQA and the wider GCC.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/energy-utilities',
    images: ['/images/industries/energy-utilities.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy & Utilities AI for ADNOC, DEWA and the GCC',
    description:
      'Models on your historian. Inference at Purdue L3.5. No data leaves the country.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a PI-native opportunity assessment on your asset data',
  subtitle:
    'A senior energy engagement lead reviews your historian estate and OT cyber posture, then replies within one business day with a scoped opportunity map.',
  ctaLabel: 'Request the assessment',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'operatorType',
      label: 'Operator type',
      type: 'select',
      required: true,
      options: [
        'NOC upstream',
        'Refining & petrochemicals',
        'Midstream & LNG',
        'Power generation',
        'Transmission & distribution',
        'Water utility',
        'Renewables'
      ]
    },
    {
      name: 'historianStack',
      label: 'Historian & process stack',
      type: 'select',
      required: true,
      options: ['OSIsoft / AVEVA PI', 'Honeywell PHD', 'Yokogawa Exaquantum', 'Emerson OSI', 'Mixed estate']
    },
    {
      name: 'upstreamTools',
      label: 'Upstream tools (if applicable)',
      type: 'multiselect',
      options: ['Petrel', 'OpenWorks', 'Techlog', 'Kingdom', 'DELFI', 'DecisionSpace', 'None']
    },
    {
      name: 'priorityUseCase',
      label: 'Priority use case',
      type: 'select',
      required: true,
      options: [
        'Rotating-equipment PdM',
        'Process & yield',
        'Drilling optimisation',
        'Load forecasting',
        'Methane & emissions',
        'EV-charging load',
        'Decarbonisation analytics'
      ]
    },
    {
      name: 'otCyberRegime',
      label: 'OT cyber regime',
      type: 'select',
      required: true,
      options: ['Full Level 2 isolation', 'DMZ inference', 'Cloud-hybrid via L3.5', 'Undecided']
    },
    {
      name: 'sustainabilityMandate',
      label: 'Sustainability mandate',
      type: 'select',
      options: ['Net Zero 2050', 'OGMP 2.0 reporting', 'Scope-3 supplier programme', 'ESG sukuk-aligned', 'None']
    }
  ]
};

const useCases = [
  {
    title: 'Rotating-equipment remaining-useful-life',
    body: 'RUL models for furnace tubes, compressor trains and large pumps, trained on PI tag histories with asset-frame context. Catches creep and bearing-fault patterns 8-12 weeks ahead of the next planned T&I window.'
  },
  {
    title: 'Process & yield optimisation',
    body: 'APC-aware setpoint advisors coexisting with AspenTech RT-Opt and Honeywell Profit Suite. Energy-intensity targets per unit, with a documented operator handoff at every recommendation.'
  },
  {
    title: 'Drilling ROP and stuck-pipe risk',
    body: 'WITSML ingestion and Petrel/OpenWorks/Techlog/Kingdom feature stores. Real-time bit-wear and stuck-pipe risk across a rig fleet, with the rig-floor decision-support pattern reviewed by the drilling supervisor.'
  },
  {
    title: 'Short-term grid load forecasting',
    body: 'Demand forecasting with NWP integration from ECMWF and NCM-UAE, DER and EV-charging load awareness. Reduces peaker dispatch on Ramadan-evening peak days where every percentage of MAPE moves dispatch cost.'
  },
  {
    title: 'OGMP 2.0 methane reconciliation',
    body: 'Computer-vision pipelines for LDAR camera networks and drone-based optical gas imaging, fused with MethaneSAT and GHGSat satellite passes. Site-level reconciliation aligned to the OGMP 2.0 Gold Standard.'
  },
  {
    title: 'Distribution-network fault localisation',
    body: 'OSI Monarch and GE GridOS integration for sub-second fault localisation on the medium-voltage network. Reduces SAIDI in densely loaded UAE feeders during summer.'
  },
  {
    title: 'EV-charging load planning',
    body: 'Forecasting of EV-charging load at substation level for utilities and shopping-mall operators, including the interaction with rooftop solar self-consumption and time-of-use tariff design.'
  },
  {
    title: 'Refinery yield blending',
    body: 'AI-augmented blend optimisation for gasoline and diesel pools, feasibility-checked against tank inventories and the planning LP. Catches off-spec blend risk before the certificate of quality is issued.'
  },
  {
    title: 'Worker-safety vision at scale',
    body: 'PPE compliance, restricted-zone intrusion and dropped-object detection across remote upstream sites and refining gates, with edge inference inside plant networks and no internet egress from Level 2.'
  }
];

const integrationStack = [
  {
    label: 'Historian & APC',
    detail: 'OSIsoft / AVEVA PI via PI Web API and PI AF templates; coexistence with AVEVA APC, AspenTech RT-Opt and Honeywell Profit Suite. Feature stores keyed to the asset frame.'
  },
  {
    label: 'Upstream geoscience',
    detail: 'Petrel, OpenWorks, Techlog and Kingdom integration; WITSML ingestion for daily drilling reports.'
  },
  {
    label: 'Process simulation',
    detail: 'AVEVA Process Simulation, AVEVA APM and Honeywell UniSim hooks for the engineering-grade model alongside the data-driven one.'
  },
  {
    label: 'Grid platforms',
    detail: 'OSI Monarch and GE GridOS for distribution; NWP ingestion from ECMWF and NCM-UAE; DER and EV load signals as first-class features.'
  },
  {
    label: 'Methane / emissions',
    detail: 'LDAR camera networks, drone OGI passes, MethaneSAT and GHGSat satellite ingestion. Reporting layer aligned to OGMP 2.0 Gold Standard.'
  },
  {
    label: 'Sovereign deployment',
    detail: 'G42 Cloud or an on-premise plant appliance. Purdue L3.5 inference pattern. No upstream or process data leaves the country.'
  }
];

const regulatorAnchors = [
  {
    name: 'IEC 62443 (OT cyber)',
    detail: 'Control mapping document shared under NDA. Purdue L3.5 inference pattern, no internet egress from Level 2.'
  },
  {
    name: 'ADNOC HSE & cyber standards',
    detail: 'Brocode delivery aligned to ADNOC group cyber and digital standards; familiar with the procurement and security review path.'
  },
  {
    name: 'OGMP 2.0 Gold Standard',
    detail: 'Methane reporting reconciliation across satellite, drone and ground LDAR with a documented evidence trail for the OGMP submission.'
  },
  {
    name: 'UAE Net Zero 2050 / NCEMA',
    detail: 'Sovereign deployment, no upstream or process data leaving the country; outcomes mapped to the group decarbonisation reporting cycle.'
  }
];

const caseStudies = [
  {
    quote:
      'Furnace-tube RUL programme caught a creep event 11 weeks ahead of the next planned T&I, protected the CDU run length and gave operations a documented OEE saving the board accepted.',
    label: 'GCC refining operator — rotating-equipment PdM'
  },
  {
    quote:
      'ROP and stuck-pipe risk model deployed across 12 rigs cut non-productive time by 6 percent. The drilling supervisor kept the decision; the model surfaced the early warning into the daily report.',
    label: 'NOC upstream — drilling optimisation'
  },
  {
    quote:
      'Short-term load forecast MAPE improved by 1.2 percentage points on peak day. Peaker dispatch fell measurably across the Ramadan-evening window without a public reliability incident.',
    label: 'UAE utility — grid forecasting'
  },
  {
    quote:
      'Site-level methane emissions reconciled across LDAR cameras, drone OGI and satellite passes. OGMP 2.0 Gold Standard reporting accepted on the first cycle, with the evidence pack ready for audit.',
    label: 'Midstream operator — methane intelligence'
  }
];

const compareRows: CompareRow[] = [
  {
    feature: 'PI System / AVEVA PI native integration (AF templates)',
    brocode: true,
    competitors: [false, 'Within own platform', 'Within own platform']
  },
  {
    feature: 'OEM-neutral across Honeywell, Yokogawa, Emerson, ABB',
    brocode: true,
    competitors: ['Upstream-focused', 'Own-DCS bias', 'Hyperscaler-agnostic but tooling-led']
  },
  {
    feature: 'Purdue L3.5 inference, no internet egress from Level 2',
    brocode: true,
    competitors: ['Cloud-first by default', 'Mixed', 'Cloud-first by default']
  },
  {
    feature: 'IEC 62443 control mapping shared at first review',
    brocode: true,
    competitors: ['Available on request', 'Available on request', 'Limited']
  },
  {
    feature: 'OGMP 2.0-aligned methane reconciliation',
    brocode: true,
    competitors: [false, false, 'Tooling, not reporting']
  },
  {
    feature: 'UAE-resident training and inference',
    brocode: 'G42 Cloud or on-prem appliance',
    competitors: ['Regional, not always UAE', 'Customer-defined', 'Public-cloud regions']
  },
  {
    feature: 'Coexistence with AspenTech RT-Opt / Profit Suite',
    brocode: true,
    competitors: [false, 'OEM-aligned', 'Limited']
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'We already pay SLB / Halliburton / Baker Hughes for an upstream stack. Why work with you?',
    answer:
      'We are not replacing DELFI, DecisionSpace or Leucipa. We integrate with Petrel, OpenWorks, Techlog and Kingdom and write operator-aligned models that sit alongside the OEM stack. The contracting pattern is documented: Brocode is engaged by the operator, not by the OEM, and the IP on the models is yours under the SoW.'
  },
  {
    question: 'Where exactly does your inference run? Our cyber team will block anything that touches the historian.',
    answer:
      'Inference runs at Purdue Level 3.5 with no internet egress from Level 2. The architecture is documented against IEC 62443 zones and conduits, and the control mapping is shared under NDA before any cable is moved. Models read from PI through PI Web API on a sanctioned read path; we do not write to the DCS without an operator-controlled supervisory loop.'
  },
  {
    question: 'Methane — show me the OGMP 2.0 alignment, not a vendor deck.',
    answer:
      'Our methane reporting blueprint reconciles ground LDAR, drone OGI passes and satellite data (MethaneSAT, GHGSat) at site level. The reporting evidence pack maps to OGMP 2.0 Gold Standard expectations. The lead-magnet field guide includes a worked example and the calibration cadence we apply across a site portfolio.'
  },
  {
    question: 'How does the model retrain, and who owns the retraining?',
    answer:
      'Process and PdM models retrain on a quarterly cycle, or on operator request after a major unit change-out or APC retune. Drilling models retrain after each well section. Grid models retrain weekly. Brocode runs the retraining inside the sovereign environment; the reliability or planning lead signs off the new model card before it is promoted.'
  },
  {
    question: 'How do you coexist with the AspenTech, Honeywell and AVEVA stack that is already running?',
    answer:
      'The Brocode model lives on the historian and the APC layer remains the system of action. We write advisory signals into a coexistence layer that the operator can ignore, accept or escalate. AspenTech RT-Opt, Honeywell Profit Suite and AVEVA APC stay as they are. We document the handover in writing before the SoW.'
  },
  {
    question: 'Can you deliver without our data leaving the country?',
    answer:
      'Yes. The default deployment is either G42 Cloud or an on-premise plant appliance. Process data, drilling data and emissions data stay in the UAE. The Brocode delivery team is UAE-resident and named on the SoW, with an OT-cyber-screened engineering bench.'
  },
  {
    question: 'What is the support model after go-live?',
    answer:
      'Brocode engineers stay alongside the reliability or planning team under a defined run-phase. Drift monitoring on process tags is automated; alerts go to the named on-shift engineer. The transition to the operator owning the system is mapped on day one and reviewed at three, six and twelve months.'
  }
];

const relatedLinks = [
  {
    label: 'Predictive Analytics',
    href: '/services/predictive-analytics',
    description: 'PdM, grid forecasting and yield models under the hood.'
  },
  {
    label: 'Computer Vision',
    href: '/services/computer-vision',
    description: 'LDAR cameras, OGI footage, refinery-edge inference and PPE compliance.'
  },
  {
    label: 'MLOps & AI Infrastructure',
    href: '/services/mlops-ai-infrastructure',
    description: 'Operating model for OT cyber constraints and edge inference at scale.'
  },
  {
    label: 'Manufacturing',
    href: '/industries/manufacturing',
    description: 'Adjacent industrial AI on heavy assets — process, vision and PdM.'
  },
  {
    label: 'Certifications & Compliance',
    href: '/security-compliance',
    description: 'IEC 62443 alignment evidence for the cyber review pack.'
  }
];

export default function EnergyUtilitiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI for Energy and Utilities',
    serviceType: 'Energy and utilities AI engineering',
    provider: {
      '@type': 'Organization',
      name: 'Brocode Solutions',
      url: 'https://www.brocode.ae'
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType:
        'ADNOC group companies, DEWA, TAQA, EWEC, ADWEC, Masdar and Saudi Aramco / SEC peer organisations'
    },
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
    url: 'https://www.brocode.ae/industries/energy-utilities',
    description:
      'Energy and utilities AI built for ADNOC, DEWA, TAQA and GCC peers — refining PdM, grid forecasting, upstream optimisation and OGMP 2.0-aligned methane intelligence.'
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
      <Script id="ld-energy" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Script id="ld-energy-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO — deep gray + industrial amber/yellow */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(15,76,129,0.30),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="container-site pt-12 pb-20 md:pt-16 md:pb-28">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Energy & Utilities' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                  Industries · Energy & Utilities
                </p>
                <h1 className="mt-5 text-balance text-display-xl text-white">
                  Energy and utilities AI built for ADNOC, DEWA, TAQA and GCC peers.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                  Refining predictive maintenance, grid forecasting, upstream optimisation and OGMP 2.0-aligned
                  methane intelligence — integrated with your PI historian, AVEVA stack and upstream geoscience
                  tools. Measured operations outcomes the COO and the Chief Sustainability Officer both accept.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton href="#quote-form" variant="secondary" size="lg" event="quote_open">
                    Request a PI-native assessment
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
                    Download the Refining &amp; Upstream Field Guide
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-8 max-w-xl text-sm text-white/60">
                  Inference at Purdue L3.5. Models on your historian. No data leaves the country.
                </p>
              </Reveal>
            </div>

            {/* Hero card: refinery + RUL + PI trend */}
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <GlassCard tone="dark" padding="sm" className="overflow-hidden">
                  <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/industries/energy-utilities.jpg"
                      alt="Refining unit silhouette at dusk with an RUL chip and a PI historian trend overlay"
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1024px) 36vw, 90vw"
                    />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-xl bg-amber-500/95 px-4 py-3 text-xs text-ink-900 shadow-card">
                      <div>
                        <p className="font-semibold">CDU furnace · pass 3 · tube 14</p>
                        <p className="mt-0.5 opacity-80">PI tag: 4FT-CDU-T14.SKIN.TEMP</p>
                      </div>
                      <span className="rounded-full bg-ink-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                        Creep risk
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-xl bg-ink-900/85 px-4 py-3 text-[11px] text-white">
                      <div>
                        <p className="opacity-60">RUL estimate</p>
                        <p className="mt-0.5 text-sm font-semibold">71 days</p>
                      </div>
                      <div>
                        <p className="opacity-60">Next T&amp;I</p>
                        <p className="mt-0.5 text-sm font-semibold">160 days</p>
                      </div>
                      <div>
                        <p className="opacity-60">Inference at</p>
                        <p className="mt-0.5 text-sm font-semibold text-amber-300">Purdue L3.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 px-1 text-xs text-white/70">
                    AVEVA PI trend rising on furnace skin temperature. Advisory raised to reliability lead 11
                    weeks ahead of the next planned shutdown.
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
              { value: '11 wks', label: 'Lead time on a major furnace-creep event ahead of planned T&I' },
              { value: '6%', label: 'NPT reduction on a 12-rig upstream programme' },
              { value: '1.2 pp', label: 'Peak-day load forecast MAPE improvement on a UAE utility' },
              { value: '100%', label: 'Process and upstream data inside UAE borders' }
            ]}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The problem on the table"
            title="The USD 30 M digital-twin programme has not yet produced a quantified operations outcome."
            description="The refinery has a fixed-interval inspection schedule that misses a furnace-tube creep pattern visible in 18 months of PI data. The peak-Ramadan-evening grid forecast is off by 6 percent so the operator spins up expensive peaking units. The methane LDAR programme is manual and the regulator's reporting cadence keeps tightening. Two of the three OEM-aligned partners on the panel cannot survive the cyber team's IEC 62443 review."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Digital-twin overpromise</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">The twin became a 3D model with no operating outcome.</h3>
                <p className="mt-3 text-ink-600">
                  Most digital-twin programmes stall at visualisation. Brocode connects the twin to a running PI
                  AF model that the reliability team uses on shift.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">OT cyber zoning</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Anything that touches the historian needs IEC 62443.</h3>
                <p className="mt-3 text-ink-600">
                  Cloud-first vendors fail the cyber review. The Brocode pattern is Purdue Level 3.5 inference,
                  with no internet egress from Level 2, documented before the SoW.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">OEM software lock-in</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">Honeywell, Yokogawa and Emerson each push their own AI.</h3>
                <p className="mt-3 text-ink-600">
                  An OEM-aligned model works inside one control estate. Brocode is OEM-neutral and writes models
                  that cross mixed control rooms.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* USE-CASE BENTO */}
      <section className="bg-gradient-to-b from-white to-amber-50/30 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case map"
            title="Nine concrete AI use cases the COO and reliability lead recognise."
            description="Across refining, upstream, midstream and grid. Each panel is in production with a GCC operator and the outcome is sign-off-ready."
          />

          <div className="mt-12">
            <BentoGrid>
              {useCases.map((u, i) => (
                <BentoCell
                  key={u.title}
                  span={i === 0 ? 'lg' : i === 4 ? 'lg' : 'md'}
                  variant={i === 0 ? 'dark' : i === 4 ? 'brand' : 'light'}
                >
                  <h3 className={`text-xl font-semibold ${i === 0 || i === 4 ? 'text-white' : 'text-ink-900'}`}>
                    {u.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      i === 0 || i === 4 ? 'text-white/85' : 'text-ink-600'
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
              title="PI-native and AVEVA-native by default."
              description="Brocode models read the asset frame, write to coexistence layers and respect the OT zone the cyber team has drawn. No data warehouse migration; no upstream data leaving the country."
            />
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {integrationStack.map((p) => (
              <li key={p.label} className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">{p.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REGULATOR / STANDARDS BLOCK */}
      <section className="bg-ink-900 py-22 text-white md:py-28">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="Standards & posture"
            title="Anchored to the cyber and emissions standards your second meeting will ask about."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {regulatorAnchors.map((r) => (
              <Reveal key={r.name}>
                <div className="rounded-2xl border border-amber-400/20 bg-white/5 p-6">
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
            title="Four anonymised cases across refining, upstream, grid and methane."
            description="All numbers are signed off by the engagement lead and verified against the operator's own reporting before publish."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.label} className="rounded-2xl border border-ink-100 bg-white p-7">
                <blockquote className="text-base leading-relaxed text-ink-800">&ldquo;{c.quote}&rdquo;</blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber-700">{c.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="bg-amber-50/40 py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Vs the alternatives on your shortlist"
            title="SLB, Halliburton, hyperscaler practices, OEM digital services — where Brocode sits."
            description="The CDO has usually been offered all four. The comparison below mirrors the question set we hear on first call."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['SLB / Halliburton / BHGE', 'OEM digital (ABB/Honeywell)', 'Hyperscaler energy']}
              rows={compareRows}
            />
          </div>
          <p className="mt-5 max-w-3xl text-sm text-ink-500">
            Compared with SLB DELFI, Halliburton DecisionSpace, Baker Hughes Leucipa; ABB / Honeywell Process
            Solutions / Emerson Impact Partners; Microsoft Energy &amp; Resources, AWS Energy, Google Cloud
            Energy &amp; Materials.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead-magnet" className="py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Refining & Upstream AI Field Guide"
            description="34-page practitioner's reference for ADNOC and GCC operators. Covers the PI / AVEVA APC integration pattern that survives an OT cyber review, an OGMP 2.0-aligned methane reporting blueprint, the eight failure modes of digital-twin programmes in refining and a worked rotating-equipment RUL example."
            contents={[
              'OSIsoft PI / AVEVA PI Web API and AF integration pattern',
              'AVEVA APC and AspenTech RT-Opt coexistence',
              'Petrel / OpenWorks / Techlog upstream workflow',
              'Methane reconciliation across LDAR, drone OGI and satellite',
              'Refinery yield optimisation worked example',
              'Sample IEC 62443-aligned field deployment runbook'
            ]}
            filePath="/downloads/refining-upstream-ai-field-guide.pdf"
            ctaLabel="Email me the field guide"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="The questions a Director of Digital asks before the cyber review."
              description="If something is missing here, message us on WhatsApp or send it via the form below."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form" className="bg-amber-50/30 py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Talk to the engagement lead"
              title="Tell us about your historian estate and OT cyber posture."
              description="Six short questions, then a senior energy engineer responds within one business day with a scoped opportunity map and an IEC 62443-aligned delivery sketch."
            />
            <div className="mt-7 rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Prefer to chat?</p>
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
        primaryLabel="Request assessment"
        primaryHref="#quote-form"
      />
    </>
  );
}
