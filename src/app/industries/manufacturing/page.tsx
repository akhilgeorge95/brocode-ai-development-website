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
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { ScrollTimeline, type TimelineStep } from '@/components/ui/ScrollTimeline';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'manufacturing';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'm with [manufacturer]. We're scoping AI on [predictive maintenance / vision-quality / yield / OEE] across our plant and want a historian-native partner with MoIAT ICV credentials. Could we arrange a call?";

export const metadata: Metadata = {
  title: 'Plant-Floor AI for UAE & KSA Manufacturers — Historian-Native, ICV-Aligned',
  description:
    'Plant-floor AI for UAE and KSA manufacturers — predictive maintenance, computer-vision quality, yield optimisation and OEE — integrated with OSIsoft PI, AVEVA APC, GE Proficy and SAP PM / Maximo. MoIAT ICV-aligned delivery.',
  alternates: { canonical: 'https://www.brocode.ae/industries/manufacturing' },
  openGraph: {
    title: 'Plant-Floor AI for UAE & KSA Manufacturers',
    description:
      'Historian-native modelling, edge inference on Jetson, MoIAT ICV-aligned delivery. Scales line by line, not deck by deck.',
    type: 'website',
    url: 'https://www.brocode.ae/industries/manufacturing'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plant-Floor AI for UAE & KSA Manufacturers',
    description: 'Inference at the edge. Models on your historian. Scales line by line.'
  }
};

const faqItems: FAQItem[] = [
  {
    question: 'How do you make a single-line pilot scale across asset classes and lines?',
    answer:
      'A campaign-by-campaign rollout plan is part of the SoW from day one — not a hopeful afterthought. The median GCC manufacturing AI pilot reaches 1.2 lines at 18 months; our deployments reach 7. We do this by separating the asset model (per-asset-class survival / RUL) from the data integration layer (OPC UA + historian) so a new line is a configuration exercise, not a re-build. Asset-frame templates and tag-hierarchy mapping are reusable across lines and plants.'
  },
  {
    question: 'Our cyber team will not let AI touch the PLC layer. Where does inference run?',
    answer:
      'Inference runs at the edge, on NVIDIA Jetson AGX or a Purdue Level 3 inference appliance, never on the PLC layer. The OT/IT zoning pattern is published in the playbook: data flows up through the historian and the unidirectional gateway, models score in Level 3 or Level 3.5, and any control-action feedback goes through operator approval, never directly to the PLC. IEC 62443 alignment is documented.'
  },
  {
    question: 'We already pay Siemens MindSphere / GE Digital / Honeywell Forge / Yokogawa. Do you duplicate?',
    answer:
      'No. We sit alongside the OEM digital platform and write to the same historian. The OEM keeps the control-system relationship; we own the model layer. The manufacturer ends up with a portable model layer that does not require a control-stack migration — and the OEM does not get a strategic veto over the AI roadmap.'
  },
  {
    question: 'What is the historian integration pattern? Does it work with mixed estates?',
    answer:
      'Direct integration with OSIsoft PI System / AVEVA PI, GE Proficy Historian, and Wonderware InTouch via OPC UA and the PI Web API. The feature store is keyed to PI tag hierarchies and asset-frame templates, so a mixed estate becomes a mapping exercise rather than a re-platform. For metals and petrochemical, AVEVA APC and Aspen Plus integration are available for process and yield models.'
  },
  {
    question: 'How does this contribute to our MoIAT ICV scorecard?',
    answer:
      'Every engagement publishes its In-Country Value contribution in the SoW: UAE-resident delivery team, named Emirati hires on the engagement, on-shore data labelling centre. The MoIAT ICV scoring evidence is part of the procurement pack, with a worked example that mirrors the latest scoring rules. Operation 300bn-aligned reporting is a default deliverable, not an extra cost.'
  },
  {
    question: 'How do you handle operating-mode switching in predictive maintenance?',
    answer:
      'A known failure mode of generic PdM products. Our survival-analysis and remaining-useful-life models include operating-mode as an explicit feature; the residual-failure-risk and the maintenance-window recommendation are conditional on mode. The validation pack documents performance per-mode, not just the aggregate ROC. Sensitivity to mode-switching is part of the model card.'
  },
  {
    question: 'How does this integrate with our CMMS so the maintenance team actually uses it?',
    answer:
      'Named connectors for SAP PM, IBM Maximo, GE iFIX, AVEVA MES and Rockwell FactoryTalk. The model emits a maintenance recommendation with an explainable feature contribution and a maintenance-window suggestion; the planner receives it inside the CMMS they already use. We avoid a separate dashboard — the planner does not change tools.'
  },
  {
    question: 'What is your stance on Cognex / Keyence vision-inspection cameras?',
    answer:
      'We integrate upstream of them where they are the right sensor, and we replace them where a plant-wide CV platform on Jetson is the right fit. The decision is per-line, not a vendor war. NVIDIA Metropolis + DeepStream gives a plant-wide platform; the labelling pipeline produces an inspection-grade dataset in four weeks. Our CV-based defect detection has been integrated upstream of Cognex on one line and rolled to four lines in nine months.'
  }
];

const compareRows: CompareRow[] = [
  { feature: 'Historian-native modelling (OSIsoft PI / AVEVA / GE Proficy)', brocode: true, competitors: [true, false, 'Partial', 'Partial'] },
  { feature: 'Sits alongside Siemens / GE / Honeywell / Yokogawa', brocode: true, competitors: [false, false, true, 'Partial'] },
  { feature: 'Plant-wide CV platform (not point sensor)', brocode: true, competitors: [false, false, 'Partial', false] },
  { feature: 'Operating-mode aware PdM models', brocode: true, competitors: ['Partial', false, false, 'Partial'] },
  { feature: 'OT/IT zoning aligned to IEC 62443', brocode: true, competitors: ['Partial', false, true, 'Partial'] },
  { feature: 'MoIAT ICV contribution published in SoW', brocode: true, competitors: [false, false, false, false] },
  { feature: 'Production code, not advisory deliverable', brocode: true, competitors: [true, false, true, true] },
  { feature: 'CMMS connectors (SAP PM / Maximo)', brocode: true, competitors: ['Partial', false, 'Partial', false] },
  { feature: 'Campaign-by-campaign scaling plan', brocode: true, competitors: [false, false, false, false] }
];

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Request a historian-native opportunity assessment on your plant data',
  subtitle:
    'A senior industrial-AI engineer responds within one business day. We share the historian integration pattern and the asset-class shortlist from comparable engagements on the first call.',
  ctaLabel: 'Request the assessment',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'sector',
      label: 'Sector',
      type: 'select',
      required: true,
      options: [
        'Metals',
        'Petrochemical & polymers',
        'Pharma',
        'Food & beverage',
        'Composites & defence',
        'Heavy engineering',
        'Cement',
        'Other'
      ]
    },
    {
      name: 'plants',
      label: 'Plant count and geography',
      type: 'select',
      required: true,
      options: ['1 UAE plant', '2–5 GCC plants', '> 5 GCC plants', 'Global with GCC hub']
    },
    {
      name: 'historian',
      label: 'Historian / control stack',
      type: 'select',
      options: ['OSIsoft', 'AVEVA PI', 'GE Proficy', 'Wonderware', 'Siemens', 'Honeywell', 'Yokogawa', 'Mixed']
    },
    {
      name: 'useCase',
      label: 'Priority use case',
      type: 'select',
      required: true,
      options: [
        'Predictive maintenance',
        'CV quality inspection',
        'Yield & process',
        'OEE & micro-stops',
        'Energy & sustainability'
      ]
    },
    {
      name: 'zoning',
      label: 'OT cyber zoning constraint',
      type: 'select',
      options: [
        'Full OT isolation',
        'DMZ inference allowed',
        'Cloud-hybrid via Purdue Level 3.5',
        'Undecided'
      ]
    },
    {
      name: 'icv',
      label: 'MoIAT ICV requirement',
      type: 'select',
      options: ['Required & weighted in tender', 'Preferred', 'Not a factor']
    }
  ]
};

const useCases = [
  {
    title: 'Predictive maintenance on rolling-mill bearings',
    body: 'Survival analysis with operating-mode features. UAE metals reference: 73 % recall on critical failures at 14-day horizon, four unplanned trips saved in the first campaign.',
    span: 'lg' as const,
    metric: '73 % recall · 4 trips saved'
  },
  {
    title: 'CV-based defect detection',
    body: 'NVIDIA Metropolis + DeepStream on Jetson. KSA composites reference: 98.6 % recall on target defect class, integrated upstream of Cognex on one line, rolled to four lines in 9 months.',
    span: 'md' as const,
    metric: '98.6 % recall'
  },
  {
    title: 'Polymerisation reactor yield',
    body: 'Bayesian process control with AVEVA APC integration. UAE petrochem reference: 1.4 % yield uplift, validated on a 90-day shadow run.',
    span: 'md' as const,
    metric: '+1.4 % yield'
  },
  {
    title: 'OEE & micro-stoppage analytics',
    body: 'Historian-native micro-stop detection. Packaging reference: 6 percentage point OEE uplift.',
    span: 'md' as const,
    metric: '+6 pp OEE'
  },
  {
    title: 'Electrolyser energy intensity',
    body: 'Energy-intensity models for aluminium electrolysers and metals furnaces. Sensitivity to mode-switching documented.',
    span: 'md' as const
  },
  {
    title: 'Worker safety vision',
    body: 'PPE and unsafe-positioning detection on Jetson edge. Privacy-preserving inference, no face data stored.',
    span: 'md' as const
  },
  {
    title: 'Reactor sensor anomaly',
    body: 'Multivariate anomaly detection on PI tags. Catches failure modes the rules-based historian alerts miss.',
    span: 'md' as const
  },
  {
    title: 'Energy & sustainability',
    body: 'Utility consumption optimisation on heavy assets — kiln, furnace, compressor train — calibrated against the safety envelope.',
    span: 'md' as const
  },
  {
    title: 'Quality escape root-cause',
    body: 'Genealogy graph through MES on SAP MII / AVEVA MES / iFIX. Trace a customer-incoming-goods failure back to the originating shift, batch and parameter.',
    span: 'md' as const
  }
];

const rolloutSteps: TimelineStep[] = [
  {
    label: 'Campaign 1',
    title: 'Single line, single asset class',
    description: 'Historian-native opportunity assessment, OPC UA / PI Web API integration, baseline model on one asset class. Edge inference on a Jetson appliance. ICV contribution published.'
  },
  {
    label: 'Campaign 2',
    title: 'Asset class to plant',
    description: 'Reuse the asset-frame template across the plant. Add CMMS write-back via SAP PM / Maximo. Operator training and shift-supervisor walk-throughs on every line.'
  },
  {
    label: 'Campaign 3',
    title: 'Plant to plant network',
    description: 'Cross-plant feature-store reuse. Plant-specific calibration where the asset is configured differently. Centralised drift monitoring per plant.'
  },
  {
    label: 'Campaign 4',
    title: 'New asset class, same plant network',
    description: 'CV quality, energy intensity, or yield model on top of the same historian integration. The marginal cost of the next use case is the model build, not the integration.'
  },
  {
    label: 'Ongoing',
    title: 'Plant-team handover',
    description: 'Reliability and operations leads own the system. Brocode operates under SLA where required, or stands by under quarterly review.'
  }
];

const relatedItems = [
  { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Survival / RUL models for plant-floor assets with mode-switching.' },
  { label: 'Computer Vision', href: '/services/computer-vision', description: 'NVIDIA Metropolis + DeepStream plant-wide CV platform on Jetson.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Edge model operations on the plant network with IEC 62443-aligned zoning.' },
  { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'OPC UA, PI Web API and asset-frame templating across mixed historian estates.' },
  { label: 'Certifications & Compliance', href: '/security-compliance', description: 'ICV / MoIAT scoring evidence, IEC 62443 alignment, ISO 27001, SOC 2 Type II.' }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Industrial AI delivery for UAE and KSA manufacturers',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Bahrain', 'Oman', 'Qatar'],
  audience: {
    '@type': 'Audience',
    audienceType: 'UAE and KSA manufacturers in metals, petrochemicals, pharma, food & beverage, composites, cement and heavy engineering'
  },
  description:
    'Plant-floor AI for UAE and KSA manufacturers — predictive maintenance, computer-vision quality, yield and OEE — integrated with the historian, MES and CMMS, with MoIAT ICV-aligned delivery and IEC 62443-aligned zoning.'
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

export default function ManufacturingPage() {
  return (
    <>
      <Script
        id="ld-service-manufacturing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="ld-faq-manufacturing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero — charcoal + industrial yellow plant floor */}
      <section className="relative isolate overflow-hidden bg-[#181a1f] text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/industries/manufacturing.jpg"
            alt="UAE manufacturing plant floor with industrial assets under warm light"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181a1f]/85 via-[#181a1f]/90 to-[#181a1f]" />
        </div>

        <div className="container-site relative py-20 md:py-28">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Manufacturing' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-eyebrow uppercase tracking-[0.18em] text-amber-400">
                Industrial AI · UAE &amp; KSA plant floor
              </p>
              <h1 className="mt-5 text-balance text-display-xl">
                Plant-floor AI built for UAE and KSA manufacturers — integrated with your historian, your MES, your CMMS.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                Predictive maintenance, computer-vision quality, yield and OEE. Historian-native modelling on OSIsoft
                PI / AVEVA / GE Proficy. Edge inference on Jetson with IEC 62443-aligned OT/IT zoning. MoIAT
                ICV-aligned delivery with the contribution published in the SoW. Scales line by line, not deck by
                deck.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#quote-form" size="lg" event="quote_open" variant="primary">
                  Request a historian-native assessment
                </MagneticButton>
                <MagneticButton
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  size="lg"
                  variant="whatsapp"
                  event="whatsapp_hero"
                >
                  WhatsApp our industrial lead
                </MagneticButton>
              </div>

              <p className="mt-6 text-sm text-white/55">
                Inference at the edge. Models on your historian. Scales line by line.
              </p>
            </div>

            {/* Plant-floor mock — bearing RUL + PI trend */}
            <div className="lg:col-span-5 space-y-4">
              <GlassCard tone="dark" padding="md" className="border-amber-400/30 bg-white/[0.04]">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-semibold uppercase tracking-wider text-amber-400">Bearing RUL · Line 3 / DE</p>
                  <p className="text-white/50">Asset BR-3104</p>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-2 text-center">
                    <p className="text-[10px] uppercase text-white/50">RUL</p>
                    <p className="mt-1 text-lg font-semibold text-amber-400">11 d</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-2 text-center">
                    <p className="text-[10px] uppercase text-white/50">Conf</p>
                    <p className="mt-1 text-lg font-semibold text-white">0.89</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-2 text-center">
                    <p className="text-[10px] uppercase text-white/50">Mode</p>
                    <p className="mt-1 text-lg font-semibold text-white">High-run</p>
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-white/60">
                  Recommendation: schedule replacement in maintenance window starting day 9. CMMS work-order
                  pre-drafted in SAP PM.
                </p>
              </GlassCard>

              <GlassCard tone="dark" padding="md" className="border-white/10 bg-white/[0.04]">
                <div className="flex items-center justify-between text-xs">
                  <p className="font-semibold uppercase tracking-wider text-amber-400">PI trend · stand vibration RMS</p>
                  <p className="text-white/50">7d window</p>
                </div>
                <div className="mt-3 h-20 rounded-md bg-white/[0.03] p-2">
                  <div className="flex h-full items-end gap-0.5">
                    {[18, 20, 22, 21, 24, 28, 31, 30, 35, 38, 42, 47, 52, 58, 63, 67, 72].map((v, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-amber-400/70"
                        style={{ height: `${v}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex justify-between text-[11px] text-white/60">
                  <span>Bayesian band tightening</span>
                  <span className="text-amber-400">Anomaly · sig 3.1σ</span>
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
              { value: '8+', label: 'UAE and GCC industrial deployments' },
              { value: '73%', label: 'Critical-failure recall on rolling-mill bearings' },
              { value: '+1.4%', label: 'Yield uplift on polymerisation reactor (90-day shadow)' },
              { value: '1.2 → 7', label: 'Lines reached by median pilot using our scaling playbook' }
            ]}
          />
        </div>
      </section>

      {/* Problem & stakes */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="The painful problem"
            title="The CMMS fires on a fixed calendar. Half the assets are over-serviced; the other half fail unscheduled."
            description="Three years of PI tags sit unmodelled in the historian. The last vision-inspection pilot from a control-system OEM cost USD 1.2 M for a single line and never scaled. An unplanned trip on the polymerisation reactor costs USD 2 M and breaks the OEE target. The MoIAT ICV scorecard is due."
          />

          <BentoGrid className="mt-12">
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Failure mode 1</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">One-line pilot trap</h3>
              <p className="mt-2 text-ink-600">
                The median GCC manufacturing AI pilot reaches 1.2 lines at 18 months. Without a campaign-by-campaign
                rollout plan, the asset model is bespoke to one line and cannot reuse the historian integration.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Failure mode 2</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">OT cyber zoning</h3>
              <p className="mt-2 text-ink-600">
                The control engineers will not let inference touch the PLC layer. The cyber team has a list of OT
                zones with no internet. Inference placement and zoning have to be designed before any model is built.
              </p>
            </BentoCell>
            <BentoCell span="md" variant="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Failure mode 3</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">OEM lock-in</h3>
              <p className="mt-2 text-ink-600">
                Siemens / GE / Honeywell / Yokogawa digital platforms come with a control-stack tax. A portable model
                layer that writes to the historian — not the OEM cloud — keeps the plant&apos;s options open.
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
            title="Nine production plays across PdM, CV quality, yield and OEE."
            description="Each historian-native, each integrated with the CMMS the maintenance planner already uses, each with a documented sensitivity to operating-mode."
          />
          <BentoGrid className="mt-12">
            {useCases.map((u) => (
              <BentoCell key={u.title} span={u.span} variant="light">
                <h3 className="text-lg font-semibold text-ink-900">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{u.body}</p>
                {u.metric && (
                  <p className="mt-4 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {u.metric}
                  </p>
                )}
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Mechanism — campaign rollout timeline */}
      <section className="relative overflow-hidden bg-[#181a1f] py-22 text-white md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="Campaign-by-campaign rollout"
              title="From one line to a plant network. Not a slide deck."
              description="The marginal cost of the next use case is the model build, not the integration. Asset-frame templates and tag-hierarchy mapping are reusable across lines and plants."
            />
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-semibold text-amber-400">Historian</p>
                <p className="mt-1 text-white/70">OSIsoft PI · AVEVA · GE Proficy · Wonderware</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-semibold text-amber-400">Process</p>
                <p className="mt-1 text-white/70">AVEVA APC · Aspen Plus</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-semibold text-amber-400">CMMS</p>
                <p className="mt-1 text-white/70">SAP PM · IBM Maximo · GE iFIX · AVEVA MES · Rockwell FactoryTalk</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-semibold text-amber-400">Edge</p>
                <p className="mt-1 text-white/70">NVIDIA Jetson AGX · DeepStream · Metropolis</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <ScrollTimeline steps={rolloutSteps} />
          </div>
        </div>
      </section>

      {/* Regulator / standards block */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Standards &amp; ICV"
              title="Designed for the cyber-OT reviewer and the procurement scorecard."
              description="IEC 62443 for OT cyber posture. Purdue model for inference placement. MoIAT ICV for the procurement preference. ICV evidence is published per engagement; cyber-zoning evidence is the default deliverable."
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">IEC 62443 &amp; Purdue</p>
              <p className="mt-2 text-sm text-ink-700">
                Inference runs in Purdue Level 3 or Level 3.5. Data flows up through the historian and a
                unidirectional gateway. Any control-action feedback routes through operator approval, not directly
                to the PLC. IEC 62443 alignment statement is part of the procurement pack.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">MoIAT ICV &amp; Operation 300bn</p>
              <p className="mt-2 text-sm text-ink-700">
                UAE-resident delivery team. Named Emirati hires on the engagement. On-shore data labelling centre.
                ICV contribution published per engagement in the SoW. Worked example mirrors the latest MoIAT
                scoring rules.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">ADNOC / EGA / Tawazun</p>
              <p className="mt-2 text-sm text-ink-700">
                Procurement preference rules for ADNOC, EGA and Tawazun supplier relationships are part of the
                tender response. Where the operator falls under group standards, we work to those specifications
                rather than expecting them to bend to ours.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Cyber, ISO &amp; partnerships</p>
              <p className="mt-2 text-sm text-ink-700">
                ISO 27001, SOC 2 Type II, OT cyber posture documented to IEC 62443. Partnerships: NVIDIA Inception,
                AVEVA partner, Snowflake Manufacturing, Microsoft for Manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Reference engagements"
            title="Four anonymised plant-floor outcomes."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">UAE metals · PdM</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  73 % recall on critical bearing failures, four trips saved
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  14-day horizon. Operating-mode aware survival model. Historian-native on PI. CMMS write-back via
                  SAP PM. Rolled to two lines in the first campaign.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">UAE petrochem · Yield</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  +1.4 % polymerisation reactor yield, 90-day shadow validated
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Bayesian process control with AVEVA APC integration. Reactor-conversion uplift held under
                  safety-envelope constraints. Sign-off by the process-engineering committee.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">KSA composites · CV</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  98.6 % recall on target defect; 1 line to 4 in 9 months
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  NVIDIA Metropolis + DeepStream on Jetson. Integrated upstream of Cognex on the pilot line.
                  Labelling pipeline produced an inspection-grade dataset in four weeks.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.15}>
              <article className="card h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Packaging · OEE</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  +6 percentage point OEE through micro-stoppage analytics
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  Historian-native micro-stop detection with shift-supervisor walkthrough. Root-cause categories
                  identified in week one of the campaign.
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
            description="OEM digital platform, OT-integrator AI bundle, point CV product, or your in-house OT team. Where each fits — and where Brocode is the right shape."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['Siemens MindSphere / GE Digital / Honeywell Forge', 'Cognex / Keyence point product', 'OT integrator (Yokogawa / Emerson / ABB)', 'In-house OT team']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-surface-muted py-22 md:py-30">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Plant-Floor AI Scaling Playbook for UAE &amp; KSA Manufacturers"
            description="A 26-page field guide covering the seven failure modes of one-line-pilot AI in heavy industry, the OPC UA / PI integration pattern that satisfies a cyber-OT zoning review, an MoIAT ICV scoring worked example, and a campaign-by-campaign rollout plan. Headline figure: the median GCC manufacturing AI pilot reaches 1.2 lines at 18 months; deployments using this playbook reach 7."
            contents={[
              'Edge-to-cloud architecture',
              'OPC UA / PROFINET / Ethernet/IP integration patterns',
              'CV-QA scaling patterns',
              'Predictive maintenance economics',
              'OT security posture (IEC 62443)',
              'MoIAT ICV worked example'
            ]}
            filePath="/downloads/plant-floor-ai-scaling-playbook.pdf"
            ctaLabel="Email me the playbook"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-30">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="OT, scaling &amp; ICV FAQ"
              title="The eight questions every plant director raises."
              description="If yours is not here, raise it in the form below. We answer in writing before the first call."
            />
          </div>
          <div className="lg:col-span-7">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote-form" className="bg-surface-muted py-22 md:py-30" data-page={PAGE_SLUG}>
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-eyebrow uppercase text-amber-700">Start the conversation</p>
            <h2 className="mt-4 text-display-md text-ink-900">
              Request a historian-native opportunity assessment on your plant data.
            </h2>
            <p className="mt-5 text-ink-600">
              Tell us the sector, the plant count, the historian, and the priority use case. We come back within one
              business day with the integration pattern and the asset-class shortlist from comparable engagements.
            </p>
            <p className="mt-6 text-sm text-ink-500">
              Prefer WhatsApp?{' '}
              <Link
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={PAGE_SLUG}
                className="font-semibold text-amber-700"
              >
                Message our industrial lead directly.
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
