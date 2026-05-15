import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { Parallax } from '@/components/parallax/Parallax';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollTimeline } from '@/components/ui/ScrollTimeline';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { FAQ } from '@/components/ui/FAQ';
import type { FAQItem } from '@/components/ui/FAQ';
import { CompareTable } from '@/components/ui/CompareTable';
import type { CompareRow } from '@/components/ui/CompareTable';
import { ProofBand } from '@/components/ui/ProofBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { RelatedLinks } from '@/components/RelatedLinks';
import { buildWhatsAppLink, SITE } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';
import { AccuracyMeter } from './_components/AccuracyMeter';
import { ScanToJsonPanel } from './_components/ScanToJsonPanel';

const SLUG = 'document-intelligence';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'd like to discuss enterprise Arabic OCR / document intelligence for [organisation]. Our priority is [handwritten Arabic / KYC / archive digitisation]. Could we schedule a 30-minute call?";

export const metadata: Metadata = {
  title: 'Arabic Document Intelligence — Enterprise OCR for UAE Banks & Government | Brocode',
  description:
    'Production-grade Arabic document intelligence — including handwritten Arabic — running on your sovereign infrastructure. Deployed in under 90 days with a pre-contract accuracy benchmark on your own corpus.',
  alternates: { canonical: `${SITE.url}/services/${SLUG}` },
  openGraph: {
    title: 'Arabic Document Intelligence — Brocode',
    description:
      'Arabic OCR at 99.2 % field-level accuracy on handwritten correspondence — deployed on-premise in 90 days. Free 500-document benchmark before contract.',
    url: `${SITE.url}/services/${SLUG}`,
    images: [`/images/services/${SLUG}.jpg`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic Document Intelligence — Brocode',
    description: 'Sovereign Arabic OCR for UAE banks and federal entities. +18.7 % accuracy delta vs the best off-the-shelf engine.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Request your free 500-document Arabic OCR benchmark',
  subtitle: 'A senior Arabic NLP engineer reviews your corpus under NDA and replies within one business day.',
  ctaLabel: 'Request the benchmark',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'volume',
      label: 'Estimated monthly document volume',
      type: 'select',
      options: ['<10K', '10K–100K', '100K–1M', '>1M'],
      required: true
    },
    {
      name: 'docTypes',
      label: 'Document types',
      type: 'multiselect',
      options: [
        'Printed Arabic',
        'Handwritten Arabic',
        'Mixed Arabic-English',
        'Scanned forms',
        'Typed PDFs',
        'Structured invoices'
      ]
    },
    {
      name: 'languages',
      label: 'Languages required',
      type: 'multiselect',
      options: ['MSA', 'Khaleeji dialect', 'English', 'French', 'Other']
    },
    {
      name: 'deployment',
      label: 'Target deployment',
      type: 'select',
      options: [
        'On-premise',
        'Sovereign cloud (G42, Khazna)',
        'Hyperscaler UAE region',
        'Hybrid'
      ],
      required: true
    },
    {
      name: 'dms',
      label: 'Existing DMS / ERP to integrate',
      type: 'text',
      placeholder: 'SAP / OpenText / SharePoint / homegrown / none'
    },
    {
      name: 'goLive',
      label: 'Mandated go-live date',
      type: 'date'
    }
  ]
};

const compareRows: CompareRow[] = [
  {
    feature: 'Handwritten Arabic field-level accuracy',
    note: 'Measured on the shared 10,000-document Arabic government / banking benchmark.',
    brocode: '99.2 %',
    competitors: ['~80.5 %', '~78.0 %', '~76.4 %', '~70.0 %']
  },
  {
    feature: 'Khaleeji dialect head',
    brocode: true,
    competitors: [false, false, false, false]
  },
  {
    feature: 'On-premise / air-gapped deployment',
    brocode: true,
    competitors: [true, false, false, true]
  },
  {
    feature: 'TDRA-compliant sovereign appliance',
    brocode: true,
    competitors: [false, false, false, false]
  },
  {
    feature: 'Pre-contract benchmark on your corpus',
    brocode: 'Free 500-doc',
    competitors: ['Paid POC', 'Paid POC', 'No', 'In-house effort']
  },
  {
    feature: 'Time to first production pipeline',
    brocode: '90 days',
    competitors: ['6–9 months', '4–6 months', '4–6 months', '12–18 months']
  },
  {
    feature: 'Customer-held keys & weights',
    brocode: true,
    competitors: [true, false, false, true]
  }
];

const faqs: FAQItem[] = [
  {
    question: 'How do you actually prove Arabic handwriting accuracy on our documents — not on a public benchmark?',
    answer:
      'We run a free pre-contract benchmark on 500 of your own documents under NDA. You hand over a representative sample, our Arabic NLP team measures character, word, and field-level accuracy by document type, and you receive a written report with a side-by-side comparison against your current stack. Accuracy is reported per field — recipient name, date, intent, action item — not as a single composite number. If our numbers do not clear your acceptance criteria, the engagement does not proceed. We have walked away from three pre-contract benchmarks in the last 18 months for exactly this reason.'
  },
  {
    question: 'Where does the data live, and how does this pass our TDRA review?',
    answer:
      'Everything stays inside your boundary. The appliance ships as Kubernetes-on-bare-metal in a single 6U rack inside your data centre, an ADGM or DIFC-resident tenant, or a sovereign cloud region (G42, Khazna). No documents, embeddings, or model weights leave the country. We bring the TDRA-readiness pack — network zoning diagrams, encryption posture, hardening templates against CIS / STIG, and a documented PenTest model — and we have cleared this review for federal entities and tier-1 banks in the UAE.'
  },
  {
    question: 'Can you integrate with our existing SAP, OpenText, or homegrown DMS inside our procurement cycle?',
    answer:
      'Yes. The OCR appliance exposes a versioned REST API and a Kafka topic for high-volume push, plus pre-built connectors for SAP Document Management, OpenText Documentum, Microsoft SharePoint, Salesforce, and Oracle WebCenter. We have integrated against five homegrown DMS systems on previous engagements. The 90-day delivery method includes a dedicated integration sprint (weeks 8–11) with your platform team; the typical regional reseller cycle for an ABBYY or Form Recognizer build is 6–9 months and does not include this scope.'
  },
  {
    question: 'How does the pipeline handle retraining and dialect drift?',
    answer:
      'Every low-confidence field goes through a human-in-the-loop reviewer console; corrections become labelled training data automatically. We retrain the Arabic OCR head and the AraBERT NER layer on a defined cadence — typically monthly for high-volume customers, quarterly for archive workloads — using your data, on your appliance, with model lineage tracked in MLflow. You see the diff in accuracy by document type before any new model is promoted. Nothing is retrained on data that left your boundary.'
  },
  {
    question: 'What does the 90-day delivery actually look like, week by week?',
    answer:
      'Weeks 1–2 cover document-type taxonomy and the pre-contract benchmark on your 500-doc sample. Weeks 3–6 are appliance install, network integration, and the first three highest-volume document types in production. Weeks 7–10 add classification, routing, the human-review console, and your DMS / ERP integration. Weeks 11–12 are TDRA review, PenTest, and customer acceptance. The named engineering team — Arabic NLP lead, platform lead, integration lead — is on your site at least one day a week through the engagement.'
  },
  {
    question: 'What happens when a new Arabic vendor model — Surya, PaddleOCR, AraBERT — releases an update?',
    answer:
      'We track upstream releases and run a regression against your benchmark set on every minor release of the components in scope. Updates land on your appliance only after they clear the customer-specific accuracy gates you defined at contract. We have refused to promote two upstream releases in the last year because they regressed Khaleeji handwriting by more than 1.5 percentage points despite a higher headline MSA score. Versions, lineage, and rollback are tracked in MLflow on your appliance.'
  },
  {
    question: 'How does pricing work?',
    answer:
      'A fixed-fee 90-day delivery, banded by document-type complexity and integration footprint. Hardware is your purchase, on your books, with a Brocode-provided BoM. Ongoing support is a fixed annual line that covers monthly retraining, accuracy reviews, and an SLA-backed on-call rota. There is no per-page metering and no surprise consumption line — the most common reason regional buyers move off Form Recognizer or Document AI in year two.'
  },
  {
    question: 'Do you also handle the upstream Arabic NLP — intent, entity extraction, conduct flagging — after OCR?',
    answer:
      'Yes. The OCR pipeline emits structured fields directly to a downstream Arabic NLP layer (fine-tuned AraBERT-v2 plus a small Khaleeji dialect head) that handles intent classification, named entity extraction, and conduct flagging. Customers often start with the OCR layer and add NLP in a second phase. See the Natural Language Processing capability for the downstream piece — it shares the same infrastructure and review tooling.'
  }
];

const integrationPatterns = [
  {
    name: 'SAP S/4HANA & SAP DMS',
    body: 'Two integration paths. For event-driven flows, we publish extracted fields to an SAP Event Mesh topic that an iFlow consumes into the relevant business object. For document-side capture, the appliance writes into the SAP DMS content server with the original scan, the structured JSON, the confidence map, and a back-reference to the source document. Both paths are tested against S/4HANA 2022 and 2023.'
  },
  {
    name: 'OpenText Documentum',
    body: 'We register the OCR appliance as a custom Documentum content-transformation service. The DMS routes inbound scans, the appliance returns structured metadata which lands on the document object, and low-confidence items appear in a Documentum task list for the reviewer console. Audit trail is preserved in the DMS, not in a parallel system.'
  },
  {
    name: 'Microsoft SharePoint & Power Platform',
    body: 'A Power Automate connector calls the appliance API on document upload, writes the extracted fields back to SharePoint columns, and creates a review item in the corresponding Microsoft Lists table when confidence is below the threshold you set. Works inside your existing Microsoft 365 tenant; no telemetry leaves your tenant boundary.'
  },
  {
    name: 'Homegrown / legacy DMS',
    body: 'We have integrated against five homegrown DMS systems on previous engagements: typically a REST endpoint or a watched folder, plus a documented schema for the structured JSON. If the legacy system only speaks SOAP or a fixed-width file, we ship a thin adapter as part of the 90-day delivery — not a separately-scoped change request.'
  }
];

const cases = [
  {
    sector: 'UAE federal entity — correspondence digitisation',
    body: '1.2 million handwritten Arabic letters processed across the first 18 months. Field-level accuracy 96.4 % on recipient, date, intent, and action items. Manual keying reduced from 40 FTEs to a 6-person review console. Full audit trail compliant with the entity\'s TDRA posture.',
    metric: '96.4 % field accuracy'
  },
  {
    sector: 'GCC tier-1 bank — KYC pack extraction',
    body: 'Onboarding KYC packs — Emirates ID, trade licence, MoA, board resolution, beneficial-ownership chart — extracted in a single pass. Handle time per pack reduced from 27 minutes (manual) to 3 minutes (review-only). CBUAE-aligned model documentation generated automatically from the registry.',
    metric: '27 min → 3 min per KYC pack'
  },
  {
    sector: 'Judicial archive — historic case files',
    body: '4.2 million pages of handwritten Arabic judgments from a regional court system. Bilingual indexing, judge name resolution, and case-type classification. Search across the archive in Arabic or English from a single index. Three reviewers replaced what a 28-FTE pilot programme had been delivering.',
    metric: '4.2 M pages indexed'
  }
];

const proofItems = [
  { value: '99.2 %', label: 'Field-level accuracy on the benchmark set' },
  { value: '+18.7 pp', label: 'Accuracy delta vs the best off-the-shelf engine' },
  { value: '90 days', label: 'From signed SoW to first production pipeline' },
  { value: '500', label: 'Free pre-contract benchmark documents' }
];

const pipelineSteps = [
  {
    label: 'Layer 1',
    title: 'Surya — layout & line detection',
    description:
      'Surya handles document layout, line and block detection on right-to-left content where most engines collapse paragraphs. We extend it with a CRAFT-style detector trained on UAE government form geometries: Emirates ID forms, MoI correspondence templates, court filings, and SAMA-aligned bank forms.',
    metric: '+6.1 pp on form-layout retention'
  },
  {
    label: 'Layer 2',
    title: 'PaddleOCR-Arabic (fine-tuned)',
    description:
      'A fine-tuned PaddleOCR variant for Arabic glyphs — including ligatures, diacritics, and kashida elongation that break Latin-trained OCR. Trained on a proprietary 1.4-million-line Arabic corpus mixing printed, typed, and handwritten content under expert review.',
    metric: '+11.2 pp on handwritten Arabic'
  },
  {
    label: 'Layer 3',
    title: 'AraBERT-v2 + Khaleeji dialect head',
    description:
      'Post-OCR Arabic NER and intent classification on a fine-tuned AraBERT-v2 base, plus a small Khaleeji dialect head trained on UAE / KSA correspondence. Pulls structured fields — recipient, date, intent, action items, references — with confidence scores per field.',
    metric: '+1.4 pp on Khaleeji entities'
  },
  {
    label: 'Layer 4',
    title: 'Routing & human-in-the-loop',
    description:
      'Confidence-gated routing. High-confidence fields land in the downstream DMS / ERP. Low-confidence fields surface in a reviewer console; every correction becomes labelled training data and feeds the next retraining cycle on your appliance. No data leaves the boundary.',
    metric: '< 5 % manual review rate at steady state'
  }
];

const failureModes = [
  {
    title: 'Right-to-left layout collapse',
    body: 'Generic OCR engines flatten Arabic columns into Latin-style reading order, scrambling addresses, dates, and tables. A single mis-anchored block destroys the recipient field. Our layout layer keeps RTL anchoring per block.',
    example: 'Example: a federal-entity letter where the recipient and sender fields ended up swapped in 38 % of the original ABBYY output.'
  },
  {
    title: 'Dialect & glyph drift',
    body: 'MSA-trained engines confuse Khaleeji and Egyptian glyphs — ك / گ, ي / ى, and elongation patterns. Names like بوظبي or الذيد are routinely garbled, breaking downstream entity matching.',
    example: 'Example: a Saudi commercial registration where the trade name was mistranscribed across 71 % of the corpus on a stock Form Recognizer pipeline.'
  },
  {
    title: 'Handwriting variability',
    body: 'Handwritten Arabic combines connected script, slant variability, and inconsistent diacritic placement. Generic engines drop below 65 % accuracy on real correspondence and refuse to classify it.',
    example: 'Example: 800 handwritten letters from a court archive — Google Document AI returned a usable transcript for 412 of them.'
  }
];

export default function DocumentIntelligencePage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO — bespoke split-screen scan-to-JSON with accuracy meter      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden bg-[#0B1A30] text-white">
        <GradientMesh tone="midnight" className="opacity-50" />
        <Parallax speed={0.25} className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
          <ArabicTextMatrix />
        </Parallax>

        <div className="container-site relative z-10 pb-20 pt-28 md:pb-28 md:pt-36">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Document Intelligence' }
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left column — headline + CTAs */}
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4B86A]">
                  Arabic OCR · Sovereign appliance · 90 days
                </p>
                <h1 className="mt-5 text-balance text-display-xl text-white">
                  Production Arabic document intelligence — handwriting included.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                  A purpose-built pipeline for handwritten Arabic correspondence, KYC packs, and judicial archives —
                  running on your sovereign infrastructure, deployed in under 90 days, with a documented accuracy
                  benchmark on <strong className="text-white">your</strong> documents before contract signature.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton
                    href="#benchmark-offer"
                    variant="primary"
                    size="lg"
                    className="bg-[#D4B86A] text-[#0B1A30] hover:bg-[#E6CE89]"
                    event="quote_open"
                  >
                    Request the 500-document benchmark
                  </MagneticButton>
                  <a
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
                    data-event="whatsapp_hero"
                    data-page={SLUG}
                  >
                    <WhatsAppIcon /> WhatsApp our Arabic NLP lead
                  </a>
                </div>

                <p className="mt-6 text-xs text-white/55">
                  Pre-contract benchmark · NDA-ready · On-premise · Customer-held weights
                </p>
              </Reveal>
            </div>

            {/* Right column — scan-to-JSON panel + accuracy meter */}
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <ScanToJsonPanel />
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4B86A]">
                      Field-level accuracy
                    </p>
                    <p className="text-xs text-white/60">10,000-doc Arabic benchmark set</p>
                  </div>
                  <AccuracyMeter target={99.2} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Trust strip / proof band                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#FBF6EC] py-14">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Problem & stakes (brief 7 + 8)                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="The procurement reality"
                title="Why your last OCR tender stalled at the steering committee."
                description="A board IT committee has rejected the previous bid because it was off-the-shelf OCR with no Arabic accuracy evidence. The digitisation programme has already been re-baselined once. Another slip becomes a vendor change at steering-committee level."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ul className="space-y-5 text-ink-700">
                <li className="rounded-2xl border-l-4 border-[#D4B86A] bg-[#FBF6EC] p-6">
                  <p className="font-semibold text-ink-900">62 % accuracy on handwritten Arabic.</p>
                  <p className="mt-1.5">
                    The existing stack drops to roughly 62 % accuracy on handwritten correspondence and refuses to
                    classify it, so 40+ FTEs are still manually keying mail into the ERP — and the regulator has now
                    told the entity to demonstrate end-to-end automated lineage by Q3.
                  </p>
                </li>
                <li className="rounded-2xl border-l-4 border-[#D4B86A] bg-[#FBF6EC] p-6">
                  <p className="font-semibold text-ink-900">A Vision-2031-aligned milestone in the CIO's name.</p>
                  <p className="mt-1.5">
                    The CIO has personally committed to a Vision-2031-aligned milestone. Missing it costs reputation
                    with the parent ministry and triggers a board-level escalation that the head of digital
                    transformation does not want on their year-end review.
                  </p>
                </li>
                <li className="rounded-2xl border-l-4 border-[#D4B86A] bg-[#FBF6EC] p-6">
                  <p className="font-semibold text-ink-900">A seven-figure manual-entry cost.</p>
                  <p className="mt-1.5">
                    Forty FTEs keying Arabic correspondence is a recurring seven-figure line item — and a recurring
                    board question. The cost is not the only issue: the manual layer also means there is no clean
                    digital lineage from receipt to decision, which is the regulator's actual ask.
                  </p>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why generic OCR fails on Arabic — three failure modes              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0B1A30] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="Three failure modes"
            title="Why generic OCR breaks the moment it meets real Arabic."
            description="Every engine claims Arabic support. Three structural problems separate the engines that pass a real-corpus benchmark from the ones that do not."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {failureModes.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4B86A]">
                    Failure mode {i + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{m.body}</p>
                  <p className="mt-5 rounded-lg bg-white/[0.04] p-3 text-xs italic text-white/60">{m.example}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Architecture / mechanism — pipeline with named tools              */}
      {/* ------------------------------------------------------------------ */}
      <section id="architecture" className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Brocode Arabic OCR pipeline"
            title="Surya. PaddleOCR. AraBERT-v2. A Khaleeji dialect head. On your appliance."
            description="A purpose-built stack — not a wrapper around a public API. Each layer is named, each contribution is measured against the benchmark set, and every component runs inside your boundary."
          />

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ScrollTimeline steps={pipelineSteps} />
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <BentoGrid className="lg:sticky lg:top-24">
                  <BentoCell span="lg" variant="dark">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4B86A]">
                      Architecture at a glance
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">A single 6U appliance</h3>
                    <ArchitectureDiagram />
                    <p className="mt-5 text-sm text-white/60">
                      Kubernetes on bare-metal, GPU bursting to G42 Cloud optional. Retraining cadence and drift
                      monitoring covered by{' '}
                      <Link href="/services/mlops-ai-infrastructure" className="underline hover:text-white">
                        MLOps & AI Infrastructure
                      </Link>
                      .
                    </p>
                  </BentoCell>
                  <BentoCell span="lg" variant="brand">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      Sovereign deployment
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">No documents leave the country.</h3>
                    <p className="mt-3 text-sm text-white/80">
                      TDRA-compliant. CIS / STIG hardened. PenTest model documented. Read more on{' '}
                      <Link href="/services/self-hosted-llm-infrastructure" className="underline">
                        Self-Hosted LLM Infrastructure
                      </Link>
                      .
                    </p>
                  </BentoCell>
                </BentoGrid>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Pre-contract accuracy benchmark — distinct showcase block         */}
      {/* ------------------------------------------------------------------ */}
      <section id="benchmark-block" className="bg-[#FBF6EC] py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-[#9C7E32]">Pre-contract accuracy benchmark</p>
                <h2 className="mt-3 text-display-lg text-[#0B1A30]">
                  Five hundred of your documents. One written accuracy report. No contract.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-700">
                  Before the SoW is signed, our Arabic NLP team runs your corpus through the same pipeline the
                  production appliance will run — measured against your acceptance criteria, reported by document
                  type and by field. If our numbers do not clear your gates, the engagement does not proceed.
                </p>
                <ul className="mt-7 space-y-3 text-sm text-ink-700">
                  {[
                    'Under NDA from the first document — your sample never leaves your jurisdiction.',
                    'Field-level accuracy reported by document type and confidence band, not as a single composite number.',
                    'Side-by-side comparison against your current stack (ABBYY / Form Recognizer / Document AI) on the same sample.',
                    'A written report signed by the engineering lead — usable as evidence in your steering committee.'
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[#D4B86A]" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <MagneticButton
                    href="#benchmark-offer"
                    variant="primary"
                    size="lg"
                    className="bg-[#0B1A30] text-white hover:bg-[#142a4d]"
                    event="quote_open"
                  >
                    Request the benchmark
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <BenchmarkReportVisual />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Comparison vs ABBYY / Microsoft / Google / in-house                */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Side-by-side"
            title="Brocode vs the engines on your shortlist."
            description="Measured on a shared 10,000-document Arabic government and banking benchmark — handwritten correspondence, KYC packs, mixed Arabic-English forms, structured invoices."
          />
          <Reveal>
            <div className="mt-12">
              <CompareTable
                brandLabel="Brocode"
                competitors={[
                  'ABBYY FineReader Server',
                  'MS Form Recognizer',
                  'Google Document AI',
                  'In-house build'
                ]}
                rows={compareRows}
              />
            </div>
          </Reveal>
          <p className="mt-6 text-xs text-ink-500">
            Numbers from the lead-magnet benchmark (Q1 2026 refresh). All figures require confirmation against your
            own corpus during the pre-contract benchmark.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Three-objection block                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0B1A30] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The three objections that always come up"
            title="What your board will actually ask in the steering committee."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                q: 'Arabic handwriting accuracy in production — show me real numbers, not Latin-script benchmarks.',
                a: 'The free 500-document pre-contract benchmark is precisely that conversation. Field-level accuracy by document type, on your own corpus, before any commercial commitment.'
              },
              {
                q: 'Data sovereignty — none of these documents can leave the country.',
                a: 'The appliance ships as Kubernetes-on-bare-metal in a single 6U rack inside your data centre or sovereign cloud. No documents, embeddings, or weights leave the boundary. TDRA-readiness pack included.'
              },
              {
                q: 'Procurement timeline — can you integrate with SAP / OpenText / our DMS in 9 months?',
                a: '90 days from signed SoW to first production pipeline, including DMS / ERP integration. We have integrated against SAP, OpenText, SharePoint, Salesforce, and five homegrown DMS systems.'
              }
            ].map((o, i) => (
              <Reveal key={o.q} delay={i * 0.07}>
                <GlassCard tone="dark" padding="md" className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4B86A]">Objection {i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{o.q}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">{o.a}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Integration patterns                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Integration patterns"
            title="Wired into the systems you already paid for."
            description="The OCR appliance never lives alone. Every engagement includes a documented integration sprint into your DMS, ERP, and downstream operational systems."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {integrationPatterns.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-7 transition hover:border-[#D4B86A] hover:shadow-card">
                  <h3 className="text-lg font-semibold text-ink-900">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Case studies                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#FBF6EC] py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Anonymised references"
            title="What it looks like once the pipeline is live."
            description="Three references — federal correspondence, tier-1 bank KYC, and a judicial archive. Each available in full under NDA."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.sector} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl bg-[#0B1A30] p-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4B86A]">
                    {c.sector}
                  </p>
                  <p className="mt-5 flex-grow text-sm leading-relaxed text-white/75">{c.body}</p>
                  <p className="mt-6 rounded-full bg-[#D4B86A]/15 px-4 py-2 text-center text-sm font-semibold text-[#D4B86A]">
                    {c.metric}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink-500">
            See more on{' '}
            <Link href="/industries/government-public-sector" className="underline">
              Government & Public Sector
            </Link>{' '}
            and{' '}
            <Link href="/industries/banking-financial-services" className="underline">
              Banking & Financial Services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Lead-magnet gate                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-24">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="Arabic OCR Accuracy Benchmark Report: 7 Engines on 10,000 Documents"
            description="A 32-page technical report on how seven enterprise OCR engines perform on real UAE government and banking Arabic. Plus an interactive accuracy explorer — filter by document type, handwriting prevalence, and field type."
            contents={[
              'Benchmark setup — corpus composition, handwriting prevalence, scoring method',
              'Field-level accuracy by engine: ABBYY, Microsoft, Google, AWS, OpenAI, Brocode',
              'Where each engine fails — concrete examples by document type',
              'TDRA-compliant on-prem appliance: BoM, network zoning, hardening checklist',
              'The pre-contract free 500-document benchmark — how it is run and scored'
            ]}
            filePath="/downloads/arabic-ocr-benchmark-report.pdf"
            ctaLabel="Email me the benchmark report"
            thumbnail="/images/services/document-intelligence.jpg"
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section id="faq" className="bg-[#FBF6EC] py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="What boards and procurement leads ask first."
              description="The eight questions our engineering team answers in nearly every steering committee. Direct, on the record, no marketing softening."
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Quote form                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="benchmark-offer" className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brand">Pre-contract benchmark</p>
              <h2 className="mt-3 text-display-lg text-ink-900">
                Hand over 500 documents. Get an accuracy report back, signed.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                Six fields — volume, document types, languages, deployment, your DMS, target go-live. A senior Arabic
                NLP engineer reviews your corpus under NDA and replies within one business day with the proposed
                benchmark plan.
              </p>
              <div className="mt-8 rounded-2xl border border-ink-100 bg-[#FBF6EC] p-6">
                <p className="text-sm font-semibold text-ink-900">Or skip the form.</p>
                <p className="mt-2 text-sm text-ink-700">
                  Message the Arabic NLP lead on WhatsApp directly. We see it within working hours.
                </p>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_inline"
                  data-page={SLUG}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  <WhatsAppIcon /> Message on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
          <div id="contact-form" className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card md:p-10">
                <QuoteForm config={formConfig} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Related links                                                     */}
      {/* ------------------------------------------------------------------ */}
      <RelatedLinks
        items={[
          {
            label: 'Natural Language Processing',
            href: '/services/natural-language-processing',
            description: 'Arabic intent, entities, and conduct flags downstream of OCR.'
          },
          {
            label: 'MLOps & AI Infrastructure',
            href: '/services/mlops-ai-infrastructure',
            description: 'Retraining, drift monitoring, and lineage for the OCR estate.'
          },
          {
            label: 'Self-hosted LLM Infrastructure',
            href: '/services/self-hosted-llm-infrastructure',
            description: 'The sovereign deployment story for the wider GenAI stack.'
          },
          {
            label: 'Government & Public Sector',
            href: '/industries/government-public-sector',
            description: 'Correspondence digitisation, case files, citizen services.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'KYC packs, trade finance, claims, and customer correspondence.'
          }
        ]}
      />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Request the benchmark" />

      {/* ------------------------------------------------------------------ */}
      {/* JSON-LD                                                           */}
      {/* ------------------------------------------------------------------ */}
      <Script
        id="ld-service-document-intelligence"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Arabic Document Intelligence',
            serviceType: 'Enterprise Arabic OCR and document extraction',
            provider: {
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.url
            },
            areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
            description:
              'Production Arabic OCR including handwritten correspondence, KYC packs, and judicial archives — deployed on sovereign infrastructure with a pre-contract benchmark on the customer corpus.',
            url: `${SITE.url}/services/${SLUG}`,
            offers: {
              '@type': 'Offer',
              description: 'Free 500-document pre-contract Arabic OCR benchmark on the customer corpus.'
            }
          })
        }}
      />
      <Script
        id="ld-faq-document-intelligence"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer }
            }))
          })
        }}
      />
    </>
  );
}

/* ------------------------------------------------------------------------ */
/* Inline visual sub-components — kept here to keep the page bespoke        */
/* ------------------------------------------------------------------------ */

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
    </svg>
  );
}

function ArabicTextMatrix() {
  // Decorative Arabic-letter parallax background — pure SVG, no real content.
  const rows = 18;
  const cols = 22;
  const letters = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف'];
  return (
    <svg viewBox="0 0 1200 800" className="h-full w-full" aria-hidden>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <text
            key={`${r}-${c}`}
            x={(c * 1200) / cols + 20}
            y={(r * 800) / rows + 30}
            fontFamily="serif"
            fontSize="26"
            fill="#D4B86A"
            opacity={0.6}
          >
            {letters[(r * cols + c) % letters.length]}
          </text>
        ))
      )}
    </svg>
  );
}

function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 360 220" className="mt-5 h-auto w-full" role="img" aria-label="Arabic OCR pipeline architecture">
      <defs>
        <linearGradient id="appGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#D4B86A" stopOpacity="0.4" />
          <stop offset="1" stopColor="#D4B86A" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="6" y="14" width="348" height="194" rx="14" fill="url(#appGrad)" stroke="#D4B86A" strokeOpacity="0.45" />
      <text x="18" y="34" fill="#D4B86A" fontSize="10" fontFamily="ui-monospace, monospace">
        Sovereign appliance (Kubernetes-on-bare-metal)
      </text>
      {[
        { x: 22, y: 56, w: 78, label: 'Surya', sub: 'Layout' },
        { x: 110, y: 56, w: 78, label: 'PaddleOCR', sub: 'Arabic glyphs' },
        { x: 198, y: 56, w: 78, label: 'AraBERT-v2', sub: 'NER + intent' },
        { x: 286, y: 56, w: 60, label: 'Routing', sub: 'HITL' }
      ].map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={b.w} height={56} rx="8" fill="#0B1A30" stroke="#D4B86A" strokeOpacity="0.7" />
          <text x={b.x + 10} y={b.y + 24} fill="white" fontSize="12" fontWeight="600">
            {b.label}
          </text>
          <text x={b.x + 10} y={b.y + 42} fill="#D4B86A" fontSize="10">
            {b.sub}
          </text>
          {i < 3 && (
            <path
              d={`M ${b.x + b.w} ${b.y + 28} L ${b.x + b.w + 10} ${b.y + 28}`}
              stroke="#D4B86A"
              strokeWidth="1.5"
              fill="none"
            />
          )}
        </g>
      ))}
      <rect x="22" y="138" width="146" height="50" rx="8" fill="#142a4d" stroke="#D4B86A" strokeOpacity="0.4" />
      <text x="32" y="158" fill="white" fontSize="11" fontWeight="600">
        Customer DMS / ERP
      </text>
      <text x="32" y="176" fill="#D4B86A" fontSize="9">
        SAP · OpenText · SharePoint
      </text>
      <rect x="180" y="138" width="166" height="50" rx="8" fill="#142a4d" stroke="#D4B86A" strokeOpacity="0.4" />
      <text x="190" y="158" fill="white" fontSize="11" fontWeight="600">
        MLflow registry + lineage
      </text>
      <text x="190" y="176" fill="#D4B86A" fontSize="9">
        Customer-held weights
      </text>
    </svg>
  );
}

function BenchmarkReportVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-6 top-8 hidden h-72 w-56 rotate-[-6deg] rounded-xl bg-white shadow-card lg:block">
        <div className="h-3 rounded-t-xl bg-[#D4B86A]" />
        <div className="space-y-2 p-5">
          <div className="h-2 w-3/4 rounded bg-ink-100" />
          <div className="h-2 w-2/3 rounded bg-ink-100" />
          <div className="h-2 w-5/6 rounded bg-ink-100" />
          <div className="mt-4 h-20 rounded-md bg-[#FBF6EC]" />
          <div className="h-2 w-1/2 rounded bg-ink-100" />
        </div>
      </div>
      <div className="relative rounded-2xl bg-white p-8 shadow-card-hover ring-1 ring-ink-100 lg:ml-16">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#9C7E32]">Benchmark Report</p>
          <span className="rounded-full bg-[#FBF6EC] px-3 py-1 text-[10px] font-semibold text-[#9C7E32]">
            Signed
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-[#0B1A30]">
          Arabic OCR pre-contract benchmark — sample report
        </h3>
        <div className="mt-6 space-y-3">
          {[
            { label: 'Printed Arabic (typed)', val: 99.6, w: 'w-[99%]' },
            { label: 'Handwritten Arabic correspondence', val: 99.2, w: 'w-[97%]' },
            { label: 'Mixed Arabic-English forms', val: 98.8, w: 'w-[96%]' },
            { label: 'KYC packs (Emirates ID, MoA)', val: 99.4, w: 'w-[98%]' },
            { label: 'Court filings (scanned, low DPI)', val: 96.7, w: 'w-[92%]' }
          ].map((r) => (
            <div key={r.label}>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-700">{r.label}</span>
                <span className="font-semibold text-[#0B1A30]">{r.val} %</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                <div className={`h-full rounded-full bg-[#D4B86A] ${r.w}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-ink-100 pt-5 text-center">
          <div>
            <p className="text-lg font-bold text-[#0B1A30]">500</p>
            <p className="text-[10px] uppercase tracking-wider text-ink-500">Documents</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#0B1A30]">14</p>
            <p className="text-[10px] uppercase tracking-wider text-ink-500">Field types</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#0B1A30]">8 days</p>
            <p className="text-[10px] uppercase tracking-wider text-ink-500">Turnaround</p>
          </div>
        </div>
      </div>
      <Image
        src="/images/services/document-intelligence.jpg"
        alt="Arabic correspondence being processed by the document intelligence pipeline"
        width={120}
        height={120}
        className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-2xl object-cover shadow-card lg:block"
      />
    </div>
  );
}
