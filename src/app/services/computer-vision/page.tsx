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
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { CompareTable } from '@/components/ui/CompareTable';
import { FAQ } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';

const SLUG = 'computer-vision';
const WHATSAPP_MESSAGE =
  "Hi Brocode - we run a [packaging/pharma/metals/F&B] line in [city] and our existing vision rig is missing defects. I'd like to send a sample image set for benchmarking. Are you free for a 30-minute call this week?";

export const metadata: Metadata = {
  title: 'Industrial Computer Vision UAE | Edge AI Defect Detection | Brocode',
  description:
    'Detect what your Cognex or Keyence rig can\'t. YOLOv9 + SAM2 + EfficientAD on a 24V edge appliance, PROFINET to PLC, deployed in 60 days. Pre-contract benchmark on 2,000 of your reject images.',
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: 'Industrial Computer Vision - Brocode Solutions',
    description:
      'Edge defect detection on Jetson AGX Orin, integrated with Siemens, Rockwell, and Beckhoff PLCs across UAE and KSA plants.',
    url: `https://www.brocode.ae/services/${SLUG}`,
    images: [{ url: `/images/services/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Computer Vision - Brocode Solutions',
    description: 'Catch the defects your rule-based rig misses. 60-day deployment.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Send us 2,000 of your reject images - we come back with a detection-rate benchmark',
  subtitle:
    'A senior vision engineer reviews your sample, runs the Brocode stack against it, and shares the per-defect-class benchmark within 10 business days. Under NDA.',
  ctaLabel: 'Send the reject sample',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'throughput',
      label: 'Line throughput',
      type: 'select',
      required: true,
      options: ['<60 ppm', '60-180 ppm', '180-400 ppm', '>400 ppm']
    },
    {
      name: 'defects',
      label: 'Defect types you need detected',
      type: 'multiselect',
      options: [
        'Surface scratch / dent',
        'Contamination',
        'Colour or print variation',
        'Assembly orientation',
        'Fill level',
        'Barcode / label mismatch',
        'Other'
      ]
    },
    {
      name: 'hardware',
      label: 'Existing vision hardware',
      type: 'multiselect',
      options: ['Cognex In-Sight', 'Keyence CV-X', 'Datalogic', 'Basler + custom', 'None - greenfield']
    },
    {
      name: 'plc',
      label: 'PLC / MES environment',
      type: 'select',
      options: ['Siemens S7 + SAP', 'Rockwell + Oracle', 'Beckhoff', 'Mixed', 'Unsure']
    },
    {
      name: 'siteConstraints',
      label: 'Site constraints',
      type: 'multiselect',
      options: [
        'No cloud allowed',
        'Customer-managed keys required',
        'IP54+ enclosure',
        'Hazardous area',
        'ATEX'
      ]
    },
    {
      name: 'goLive',
      label: 'Target go-live and number of lines',
      type: 'text',
      placeholder: 'e.g. Q3 2026, two lines at ICAD plant'
    }
  ]
};

const detectionTimeline = [
  {
    label: 'Camera',
    title: 'Industrial machine-vision camera',
    description:
      'Basler ace2, IDS, or Hikrobot at 1280x720 to 4K at 60-150 fps depending on line takt. GenICam over GigE Vision; PoE+ where applicable. Lighting and lens calculated against the defect class set.',
    metric: '~3 ms shutter to frame buffer'
  },
  {
    label: 'Edge',
    title: 'NVIDIA Jetson AGX Orin 64GB',
    description:
      'In a fan-less IP54 enclosure, mounted in the line panel. For higher-throughput lines, an NVIDIA IGX Orin appliance. PROFINET / EtherNet/IP / Modbus TCP interfaces; PTP time sync with the PLC.',
    metric: '<8 ms model dispatch'
  },
  {
    label: 'Model',
    title: 'YOLOv9-c + SAM2 + EfficientAD, TensorRT distilled',
    description:
      'YOLOv9-c for primary defect classification, SAM2 for pixel-accurate contour, EfficientAD for unsupervised anomaly on rare classes. All three distilled into a single TensorRT-optimised model.',
    metric: '<22 ms inference at 320 ppm'
  },
  {
    label: 'PLC',
    title: 'Reject event to Siemens / Rockwell / Beckhoff',
    description:
      'REJECT_BIT and slot index written to a tagged PLC variable; the rejector arm fires before the part leaves the inspection window. Defect event also written to SAP S/4HANA QM or Oracle EBS Quality via the OPC UA bridge.',
    metric: '<7 ms PLC write'
  },
  {
    label: 'Loop',
    title: 'Inspector Loop annotation tool',
    description:
      'Quality engineer reviews a sample of rejections; mislabelled cases feed the retraining DAG. A new model version is staged, canary-tested on a shadow camera, and promoted when the defect class beats the previous version.',
    metric: 'New defect class without a change order'
  }
];

const objections = [
  {
    objection:
      'Our line runs at 320 parts per minute - your model needs to make a decision in under 40 ms. Can it actually do that on an edge box?',
    response:
      'Yes, and we will prove it on your line. The TensorRT-distilled model dispatches in under 22 ms on Jetson AGX Orin 64GB at 4K input, leaving margin to write the reject event to the PLC inside the line\'s takt. Higher throughputs (>400 ppm) move to NVIDIA IGX Orin or a multi-Jetson load-balancer. We publish the latency budget by layer and we measure it on your hardware during commissioning.',
    proof: 'Proof: anonymised UAE packaging-plant reference - 12 defect classes, 99.1% detection rate on the historical reject library, <22 ms inference latency at 320 ppm sustained.'
  },
  {
    objection:
      'Every time we add a new SKU, the Cognex integrator wants three days and a change order. How does your system retrain, and who pays for it?',
    response:
      'New SKU and new defect classes are added through the Inspector Loop annotation tool, operated by your quality engineer - not an integrator visit. A new version is trained on the operator-labelled samples, canary-validated on a shadow camera, and promoted when the validation set is beaten. Retraining is part of the run-phase SLA; no change order needed unless the line geometry physically changes.',
    proof: 'Proof: anonymised KSA pharma blister-pack reference - contamination detection lifted from 91.2% to 99.7%, with three new pack variants added by the in-house quality team in the first six months. No integrator visit required.'
  },
  {
    objection:
      'We have already paid for Cognex and Keyence sensors. You can\'t expect us to rip them out. How do you co-exist with the rig we own?',
    response:
      'We do not rip anything out. The appliance we install for you reads the existing Cognex or Keyence pass/fail signal, adds a learned layer on top, and writes its own reject event downstream. The two systems run in parallel during commissioning; you see the per-defect-class delta on the same dashboard before flipping the rejector authority. If the Brocode layer underperforms, the rejector authority stays with the rule-based rig.',
    proof: 'Proof: anonymised regional retail reference - shrink reduction from 1.6% to 0.74% across 84 stores in 11 months, running alongside the existing Tyco Sensormatic EAS without modification.'
  }
];

const compareRows = [
  {
    feature: 'Subtle surface-defect detection rate',
    brocode: '+12.4 pp on benchmark vs best alternative',
    competitors: ['Rule-based, plateaus on subtle defects', 'Rule-based, similar plateau', 'Limited to taught defect classes', 'Variable, build-dependent'],
    note: 'See benchmark below.'
  },
  {
    feature: 'New defect class without integrator visit',
    brocode: 'Inspector Loop - operator-labelled',
    competitors: ['Vendor visit + change order', 'Vendor visit + change order', 'Cloud-side annotation, latency hit', 'DIY pipeline you build']
  },
  {
    feature: 'Sub-40 ms latency at 320 ppm',
    brocode: '<22 ms on Jetson AGX Orin',
    competitors: ['~30 ms typical', '~25-35 ms typical', 'Cloud round-trip - rarely meets takt', 'Depends on the build']
  },
  {
    feature: 'On-premise / edge deployment',
    brocode: true,
    competitors: [true, true, 'Cloud-only - no edge mode', true]
  },
  {
    feature: 'PROFINET / EtherNet/IP / Modbus to PLC',
    brocode: 'Siemens, Rockwell, Beckhoff supported',
    competitors: [true, true, false, 'You wire it']
  },
  {
    feature: 'IP54 fan-less enclosure',
    brocode: 'Default, IEC 62443 awareness',
    competitors: [true, true, 'N/A - cloud', 'Source and certify yourself']
  },
  {
    feature: 'Co-exists with existing vision rig',
    brocode: 'Reads Cognex / Keyence output, adds learned layer',
    competitors: [false, false, 'Cloud only', 'Variable']
  },
  {
    feature: 'Pre-contract benchmark on 2K of your reject images',
    brocode: 'Free, under NDA, within 10 business days',
    competitors: [false, false, 'PoC charged', false]
  },
  {
    feature: 'Egress / per-image cost on continuous video',
    brocode: 'None - edge inference',
    competitors: ['None', 'None', 'Per-image egress + inference', 'None']
  }
];

const faqItems = [
  ...objections.map((o) => ({ question: o.objection, answer: `${o.response}\n\n${o.proof}` })),
  {
    question: 'What is the typical latency budget you publish for a 320 ppm line?',
    answer:
      'Camera frame buffer ~3 ms, edge dispatch <8 ms, model inference <22 ms, PLC write <7 ms - total ~40 ms allocated, with a typical realised <35 ms. We measure this on your hardware during commissioning and publish it in the acceptance test pack. If the realised latency cannot meet your line takt, the appliance is upgraded (IGX Orin or multi-Jetson) before go-live.'
  },
  {
    question: 'Can the appliance run in hazardous-area zones (ATEX, Zone 1, Zone 2)?',
    answer:
      'The default IP54 fan-less enclosure is suitable for general industrial zones. For ATEX Zone 1 or Zone 2 we co-engineer with a certified panel-builder partner; the GPU appliance is housed in a purged or pressurised enclosure with cabling per IEC 60079. We have shipped this configuration on downstream packaging at a Bahraini Bapco-adjacent client and at a UAE F&B plant.'
  },
  {
    question: 'How do you handle privacy and consent for retail loss-prevention deployments?',
    answer:
      'Re-ID, footfall, and queue analytics run on the camera feed with face blurring applied before any frame leaves the edge box, and with retention controls aligned to UAE PDPL and the retailer\'s consent posture. Minor detection is suppressed. The DPA we sign covers retention, redaction, and incident response in line with UAE PDPL and the retailer\'s privacy notice.'
  },
  {
    question: 'How does the model improve over time? Who labels new samples?',
    answer:
      'The Inspector Loop is an annotation tool that runs inside your plant network. The quality engineer reviews a sample of high-uncertainty cases (selected by active learning), corrects the labels, and the corrections feed the retraining DAG. A new model version is staged, canary-tested on a shadow camera, and promoted when it beats the prior version on the validation set. Retraining frequency is configurable; typical cadence is fortnightly for the first three months, then monthly.'
  },
  {
    question: 'Can the same appliance also predict when a defect spike is about to happen?',
    answer:
      'Yes - the same defect-event stream feeds a Predictive Analytics model (see related capabilities) that flags when defect rate per SKU is trending toward a process control limit. We typically deliver this as a phase 2 outcome after the inspection system has six to eight weeks of clean data flowing.'
  }
];

const proofItems = [
  { value: '+12.4 pp', label: 'Defect-detection delta vs rule-based vision on subtle surfaces' },
  { value: '99.1%', label: 'Detection rate on UAE packaging-plant historical reject library' },
  { value: '<22 ms', label: 'Inference latency at 320 ppm on Jetson AGX Orin' },
  { value: '0.74%', label: 'Shrink rate after deployment - regional retailer, 84 stores' }
];

const relatedItems = [
  {
    label: 'MLOps & AI Infrastructure',
    href: '/services/mlops-ai-infrastructure',
    description: 'Retraining, drift monitoring, and model registry across the line.'
  },
  {
    label: 'AI Agents & Agentic Workflows',
    href: '/services/ai-agents-agentic-workflows',
    description: 'Downstream defect to root-cause to CAPA loop with the quality team.'
  },
  {
    label: 'Manufacturing',
    href: '/industries/manufacturing',
    description: 'Inspection, safety, and yield improvement on UAE and KSA plant floors.'
  },
  {
    label: 'Retail & E-commerce',
    href: '/industries/retail-ecommerce',
    description: 'Loss-prevention, footfall, and queue analytics for regional retailers.'
  },
  {
    label: 'Predictive Analytics',
    href: '/services/predictive-analytics',
    description: 'Forecast when a defect spike is about to happen.'
  }
];

export default function ComputerVisionPage() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial Computer Vision',
    serviceType: 'Edge AI defect detection, loss prevention, and facility security',
    provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
    areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Oman', 'Qatar', 'Bahrain', 'Kuwait', 'Egypt', 'Jordan'],
    description:
      'Edge defect detection, retail loss-prevention, and facility security on NVIDIA Jetson with PROFINET / EtherNet/IP integration to Siemens, Rockwell, and Beckhoff PLCs, deployed in 60 days.',
    url: `https://www.brocode.ae/services/${SLUG}`
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
      <Script id="service-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceLd)}
      </Script>
      <Script id="faq-ld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO - Conveyor with bounding boxes + PLC event ticker */}
      <section className="relative isolate overflow-hidden bg-[#0c1117] text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-500/20 to-transparent" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Computer Vision' }
            ]}
            variant="dark"
          />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4 text-amber-300/80">Industrial QA, edge AI</p>
              <h1 className="text-balance text-display-2xl">
                Detect what your <span className="text-amber-300">rule-based vision can&apos;t.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Subtle surface defects, new SKU variants, contamination - on a 24V edge appliance that talks to your PLC over PROFINET. Deployed in 60 days, with a documented detection-rate benchmark on your rejected-units library before contract signature.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" event="quote_open">
                  Send 2,000 reject images
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                  data-event="whatsapp_hero"
                  data-page={SLUG}
                >
                  WhatsApp the vision lead
                </a>
              </div>
            </div>

            {/* Hero visual - conveyor simulation */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a2030] to-[#0c1117] aspect-[16/10]">
                {/* Conveyor belt */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2/5 bg-gradient-to-b from-[#2a3142] via-[#1f2533] to-[#181c28]">
                  {/* belt slats */}
                  <div className="absolute inset-0 flex">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="flex-1 border-r border-white/5" />
                    ))}
                  </div>
                </div>

                {/* Sheet metal parts */}
                <div className="absolute left-[55%] top-1/2 -translate-y-1/2 h-20 w-32 bg-gradient-to-br from-slate-300 to-slate-500 rounded-sm shadow-lg">
                  {/* Bounding box on defect */}
                  <div className="absolute left-[60%] top-[30%] h-8 w-10 border-2 border-emerald-400 rounded-sm">
                    <span className="absolute -top-5 left-0 whitespace-nowrap rounded-sm bg-emerald-400 px-1 py-0.5 text-[9px] font-bold text-black">98.2%</span>
                  </div>
                </div>
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 h-20 w-32 bg-gradient-to-br from-slate-300 to-slate-500 rounded-sm opacity-80" />
                <div className="absolute left-[85%] top-1/2 -translate-y-1/2 h-20 w-32 bg-gradient-to-br from-slate-300 to-slate-500 rounded-sm opacity-60" />

                {/* Camera marker */}
                <div className="absolute right-[44%] top-3 flex flex-col items-center text-[9px] text-amber-300">
                  <div className="grid h-7 w-7 place-items-center rounded-md border border-amber-300/40 bg-black/40">
                    <div className="h-3 w-3 rounded-full border-2 border-amber-300" />
                  </div>
                  <p className="mt-1">Basler ace2</p>
                  <div className="mt-0.5 h-12 w-px bg-gradient-to-b from-amber-300/60 to-transparent" />
                </div>

                {/* HUD overlay top-right */}
                <div className="absolute top-3 right-3 rounded-lg border border-white/10 bg-black/50 backdrop-blur px-3 py-2 font-mono text-[10px]">
                  <p className="text-amber-300">JETSON AGX ORIN</p>
                  <p className="mt-0.5 text-white/80">YOLOv9 + SAM2 + EfficientAD</p>
                  <p className="text-white/60">320 ppm | 17.8 ms</p>
                </div>

                {/* PROFINET ticker */}
                <div className="absolute inset-x-3 bottom-3 rounded-lg border-l-2 border-red-500 bg-red-500/10 backdrop-blur px-3 py-2 font-mono text-xs">
                  <p className="text-red-300">[14:22:08.412] REJECT - PLC #4, slot 12, class: surface_scratch_0.4mm</p>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-white/50">
                A 0.4 mm surface scratch caught on a sheet-metal stamping line. The same loop runs on retail Re-ID and perimeter ANPR scenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* Where rule-based vision breaks */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Where rule-based vision breaks"
            title="Three real failure modes that drive the customer-rejection P&L line."
            description="Each one has a before-and-after image in the lead-magnet benchmark, drawn from anonymised UAE and KSA plant data."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Subtle surface defects',
                body: 'A 0.4 mm scratch on brushed aluminium with directional light is invisible to a thresholded edge detector. A deep model trained on your reject corpus catches it. The benchmark shows +12.4 pp on subtle-surface classes.'
              },
              {
                title: 'Novel SKU variants',
                body: 'A new pack format introduces lighting, shape, and label changes the rule-based recipe was never tuned for. The Inspector Loop adds the new SKU from operator-labelled samples in days, not weeks.'
              },
              {
                title: 'Lighting drift over a shift',
                body: 'A panel-mounted vision rig calibrated to morning ambient becomes a false-positive generator by 16:00. The bespoke model we build for you is robust to seasonal and shift-time lighting variation by design - the corpus is balanced for it.'
              }
            ].map((g) => (
              <Reveal key={g.title}>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-semibold text-ink-900">{g.title}</h3>
                  <p className="mt-3 text-sm text-ink-700">{g.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Brocode detection stack - ScrollTimeline */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Brocode detection stack"
            title="From camera frame to PLC reject event - the latency budget, layer by layer."
            description="Measured on your hardware during commissioning. Acceptance test pack includes the realised latency by layer."
          />
          <div className="mt-14">
            <ScrollTimeline steps={detectionTimeline} />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Benchmark vs the alternatives"
            title="Cognex VisionPro, Keyence CV-X, AWS Lookout for Vision, or DIY - the honest read."
            description="The full 14,000-image benchmark across six defect categories is the lead magnet below."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['Cognex VisionPro', 'Keyence CV-X', 'AWS Lookout for Vision', 'In-house DIY']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="What plant directors push back on"
            title="Three objections, three honest answers from the vision lead."
          />
          <div className="mt-12 space-y-6">
            {objections.map((o, i) => (
              <Reveal key={i}>
                <article className="grid grid-cols-1 gap-6 rounded-2xl border border-ink-100 bg-surface-muted p-7 md:grid-cols-12 md:p-9">
                  <div className="md:col-span-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Objection {String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-3 text-lg font-semibold italic text-ink-900">&ldquo;{o.objection}&rdquo;</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-ink-700">{o.response}</p>
                    <p className="mt-4 rounded-xl border-l-2 border-brand bg-white px-4 py-3 text-sm text-ink-700">{o.proof}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Edge appliance + integration - bento */}
      <section className="bg-ink-900 py-22 text-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Edge appliance & integration"
            title="The hardware spec sheet, the protocols, and the systems we write into."
            variant="dark"
          />
          <BentoGrid className="mt-12">
            <BentoCell span="lg" variant="dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Appliance</p>
              <h3 className="mt-3 text-2xl font-semibold">Jetson AGX Orin 64GB - IP54 fan-less enclosure</h3>
              <p className="mt-4 text-white/70">
                For higher-throughput lines, NVIDIA IGX Orin. Power draw 30-60 W. MTBF &gt;100k hours. PoE+ for the camera, 24 VDC for the appliance, dual-NIC for line and OT.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                <li>- IEC 62443 awareness statement</li>
                <li>- IP54 default; IP65 / ATEX on request</li>
                <li>- Customer-managed keys on every artefact</li>
              </ul>
            </BentoCell>
            <BentoCell span="md" variant="brand">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">PLC integration</p>
              <h3 className="mt-3 text-xl font-semibold">PROFINET, EtherNet/IP, Modbus TCP</h3>
              <p className="mt-3 text-white/85">Siemens S7, Allen-Bradley ControlLogix, Beckhoff TwinCAT. PTP time sync.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">MES / SCADA</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">OPC UA</h3>
              <p className="mt-3 text-sm text-ink-700">To AVEVA, Siemens MindSphere, Honeywell Forge. Quality events to SAP S/4HANA QM and Oracle EBS Quality.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Retail loss-prevention</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Re-ID on AXIS / Hanwha</h3>
              <p className="mt-3 text-sm text-ink-700">Fine-tuned OSNet backbone; ties into Tyco Sensormatic EAS and Genetec Security Center event streams.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Facility security</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">ANPR on Hailo-8</h3>
              <p className="mt-3 text-sm text-ink-700">Pole-mounted enclosures, integrated with MoI vehicle databases via TDRA-approved sovereign brokers.</p>
            </BentoCell>
            <BentoCell span="md">
              <p className="eyebrow">Inspector Loop</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Operator-labelled retraining</h3>
              <p className="mt-3 text-sm text-ink-700">New SKU or defect class added without an integrator visit. Canary on a shadow camera before promotion.</p>
            </BentoCell>
          </BentoGrid>
        </div>
      </section>

      {/* Image break / case studies */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <div className="absolute inset-0 opacity-50">
          <Image
            src={`/images/services/${SLUG}.jpg`}
            alt="Conveyor camera capturing a stamped sheet metal part with overlaid bounding box and PLC reject event"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
        </div>
        <div className="container-site relative z-10 py-22 text-white">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/70">Case studies</p>
            <h2 className="mt-3 text-display-md">Four references, one phone call away.</h2>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">UAE packaging plant</p>
                <p className="mt-2 text-white/90">12 defect classes, 99.1% detection rate on the historical reject library, &lt;22 ms latency at 320 ppm. Customer rejections fell 86% inside six months.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">KSA pharma blister-pack</p>
                <p className="mt-2 text-white/90">Contamination detection lifted from 91.2% to 99.7%. FDA-grade audit log. Three new pack variants added by the in-house quality team in six months.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">Regional retail loss-prevention</p>
                <p className="mt-2 text-white/90">Shrink reduction from 1.6% to 0.74% across 84 stores in 11 months. Re-ID on AXIS cameras alongside the existing EAS estate.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">UAE federal facility ANPR</p>
                <p className="mt-2 text-white/90">98.7% plate read accuracy in mixed Arabic-English-Latin scripts. Hailo-8 pole-mounted, TDRA-approved sovereign broker for vehicle database lookups.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The Industrial Vision Benchmark - Cognex vs Keyence vs AWS vs YOLOv9"
            description="A 28-page PDF and an interactive defect-class explorer. 14,000 images, 6 defect categories, full per-class detection rate, inference latency, and false-positive comparison."
            contents={[
              'Benchmark setup and protocol',
              'mAP, recall, false-positive comparison per class',
              'Edge inference latency on Jetson AGX Orin',
              'PROFINET and OPC UA integration patterns',
              '<60-day deployment evidence',
              'Pre-contract free benchmark offer on 2,000 of your reject images'
            ]}
            filePath="/downloads/detection-benchmark-report.pdf"
            ctaLabel="Email me the benchmark"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions from plant and quality leads</p>
            <h2 className="mt-3 text-display-md text-ink-900">Frequently asked.</h2>
            <p className="mt-4 text-ink-600">
              Every answer below comes from a real SOW we have signed on a UAE or KSA plant floor.
            </p>
            <Link href="/contact" className="link-arrow mt-6 inline-flex text-sm font-semibold text-brand" data-event="secondary_cta_click" data-page={SLUG}>
              Ask a different question
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="contact-form" className="relative isolate overflow-hidden bg-ink-900 py-22 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-32 top-0 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-amber-500/40 to-transparent blur-3xl" />
        </div>
        <div className="container-site relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-amber-300/80">Pre-contract benchmark</p>
            <h2 className="mt-3 text-display-lg">Send 2,000 reject images. Receive a benchmark in 10 business days.</h2>
            <p className="mt-5 max-w-lg text-white/80">
              No SOW required. Sign an NDA, send the reject corpus, receive a per-defect-class detection-rate report. If the delta is not worth the project, you keep the report.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/75">
              <p><strong className="text-white">Direct WhatsApp:</strong> +971 50 761 2213</p>
              <p><strong className="text-white">Email:</strong> hello@brocode.ae</p>
              <p><strong className="text-white">HQ:</strong> Al Maryah Island, ADGM, Abu Dhabi</p>
              <p><strong className="text-white">Dummy line demo:</strong> bookable at our Abu Dhabi office</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 text-ink-900 md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Send reject images" primaryHref="#contact-form" />
    </>
  );
}
