import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
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
import { AgentTranscript } from './_components/AgentTranscript';

const SLUG = 'speech-recognition-voice-ai';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I run contact-centre operations at [organisation] and I want to discuss Arabic / Khaleeji speech recognition for our agents. Our priority is [agent assist / 100 % QA coverage / IVR / voicebot]. Could we book 30 minutes with your speech lead?";

export const metadata: Metadata = {
  title: 'Arabic & Khaleeji Speech Recognition for Contact Centres | Brocode',
  description:
    'Sub-15 % WER Arabic ASR on real Khaleeji call recordings — fine-tuned for code-switching, deployed inside your Genesys / Avaya / Cisco voice estate, with a free 200-call pre-contract benchmark.',
  alternates: { canonical: `${SITE.url}/services/${SLUG}` },
  openGraph: {
    title: 'Arabic & Khaleeji Speech Recognition — Brocode',
    description:
      'Khaleeji-tuned ASR with a code-switching head, deployed in 120 days inside Genesys / Avaya / Cisco. Free 200-call WER benchmark on your own recordings.',
    url: `${SITE.url}/services/${SLUG}`,
    images: [`/images/services/${SLUG}.jpg`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic & Khaleeji Speech Recognition — Brocode',
    description: 'Sub-15 % WER Khaleeji ASR. Fine-tuned on a 14,000-hour proprietary corpus. On-premise appliance.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Request your free 200-call Khaleeji WER benchmark',
  subtitle: 'Our Arabic Speech lead reviews your recordings under NDA + DPA and replies within one business day.',
  ctaLabel: 'Request the benchmark',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'volume',
      label: 'Monthly Arabic-language call volume',
      type: 'select',
      options: ['<100K', '100K–500K', '500K–2M', '>2M'],
      required: true
    },
    {
      name: 'useCases',
      label: 'Use-case priority',
      type: 'multiselect',
      options: [
        'Real-time agent assist',
        'Post-call analytics',
        '100 % QA coverage',
        'Voicebot',
        'IVR replacement',
        'Compliance & conduct flagging'
      ]
    },
    {
      name: 'dialects',
      label: 'Dialect mix',
      type: 'multiselect',
      options: ['MSA', 'Khaleeji', 'Egyptian', 'Levantine', 'Maghrebi', 'English code-switch']
    },
    {
      name: 'platform',
      label: 'Current voice platform',
      type: 'select',
      options: [
        'Genesys Cloud CX',
        'Genesys Engage',
        'Avaya Aura',
        'Cisco UCCE',
        'NICE CXone',
        'Amazon Connect',
        'Other'
      ],
      required: true
    },
    {
      name: 'deployment',
      label: 'Target deployment',
      type: 'select',
      options: ['On-premise appliance', 'Sovereign cloud (G42, stc)', 'Hyperscaler in-country region', 'Hybrid'],
      required: true
    },
    {
      name: 'currentEngine',
      label: 'Current ASR engine being replaced or augmented',
      type: 'text',
      placeholder: 'Nuance / Azure / Google / Whisper in-house / none'
    }
  ]
};

const compareRows: CompareRow[] = [
  {
    feature: 'Khaleeji WER on real call audio',
    note: 'Customer turns, English code-switching, 8 kHz telephony channel.',
    brocode: '11.8 %',
    competitors: ['~28 %', '~31 %', '~34 %', '~37 %', '~22 %']
  },
  {
    feature: 'Dedicated Khaleeji dialect adapter',
    brocode: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: 'Arabic-English code-switching head',
    brocode: true,
    competitors: ['Partial', false, false, false, false]
  },
  {
    feature: 'Real-time agent assist < 300 ms',
    brocode: true,
    competitors: [true, 'Variable', false, false, false]
  },
  {
    feature: 'On-premise / in-country appliance',
    brocode: true,
    competitors: [false, false, false, false, true]
  },
  {
    feature: 'Native Genesys / Avaya / Cisco connectors',
    brocode: true,
    competitors: [true, false, false, false, false]
  },
  {
    feature: 'Pre-contract benchmark on your audio',
    brocode: 'Free 200-call',
    competitors: ['Paid POC', 'Paid POC', 'No', 'No', 'In-house effort']
  }
];

const faqs: FAQItem[] = [
  {
    question: 'My engineers measured Whisper-large-v3 at 38 % WER on our Khaleeji recordings. Why would yours land near 12 %?',
    answer:
      'Whisper-large-v3 out of the box has seen very little Khaleeji audio in training. Our base models — Whisper-large-v3 and NeMo Conformer-Transducer — are fine-tuned on a proprietary 14,000-hour corpus that mixes Khaleeji broadcast, agent-customer call recordings collected under DPA from regional operators, and noise-augmented synthetic data. Layered on top is a LoRA-style Khaleeji adapter and an explicit Arabic-English code-switching head. The pre-contract benchmark measures the delta on your own recordings, by dialect bucket and by code-switching rate, before any contract.'
  },
  {
    question: 'Where does the inference happen? Our call recordings cannot leave the country.',
    answer:
      'Everything runs inside your boundary. The appliance ships as a single 6U TDRA-compliant rack inside your data centre, an in-country sovereign cloud region (G42 Cloud, stc Cloud), or a hyperscaler UAE / KSA region under your residency commitments. No audio, transcript, or model weight crosses the border. We supply the DPA template and the network zoning diagrams, and we have cleared this review for tier-1 banks under CBUAE / SAMA and for federal-entity hotlines.'
  },
  {
    question: 'Our voice estate is Genesys Engage on-prem plus an Avaya legacy site. Real-time agent assist needs sub-500 ms end-to-end. How do you tap the media without re-architecting our SBCs?',
    answer:
      'Three integration paths depending on your platform. On Genesys Engage we tap via SIPREC / AudioHook into the existing recording fabric — no change at the SBC. On Avaya Aura we use a DMCC tap or a passive media-mirror. On Cisco UCCE we integrate through the Finesse media plane plus a SIPREC source. Streaming inference on Triton with chunked attention gives a first-token latency around 287 ms; the next-best-action card surfaces inside 700 ms end-to-end including network. We size the latency budget with your network team in week 2.'
  },
  {
    question: 'How does this handle Arabic-English code-switching mid-sentence?',
    answer:
      'Our code-switching head is trained explicitly on UAE and KSA bilingual call turns — the actual constructions agents and customers use, like صراحة the OTP ما وصل or sure khalas نروح next week. The decoder runs a unified vocabulary so word-boundary switches are handled within the same hypothesis rather than fragmenting into two transcripts. Azure and Google treat Arabic as a locale and break at the word boundary; our engine does not.'
  },
  {
    question: 'What does the 120-day delivery actually look like?',
    answer:
      'Weeks 1–2 cover scope and the pre-contract 200-call benchmark on your audio. Weeks 3–6 are appliance install, network and SBC integration, and Khaleeji adapter deployment. Weeks 7–12 add real-time streaming, the first agent-assist use case, and your post-call analytics integration. Weeks 13–16 are 100 % coverage QA, conduct flagging, retraining cadence handover, and TDRA / SAMA / CBUAE review. The named team — Speech lead, ML platform lead, CCaaS integration lead — is on your floor at least one day a week throughout.'
  },
  {
    question: 'How is retraining handled when dialects drift or a new product name is launched?',
    answer:
      'Two cadences. A monthly automated retraining cycle on incremental call data from your recordings, run on your appliance, with model lineage tracked in MLflow. And an event-triggered retraining cycle for known shocks — a new product launch, a regulatory change, a new branch network. Accuracy diffs by dialect, agent group, and channel quality are reported per model build before promotion; we have refused to promote upstream Whisper updates that regressed Khaleeji by more than 1.5 percentage points.'
  },
  {
    question: 'Does this work for voicebots and IVR replacement, or only for agent-side analytics?',
    answer:
      'Both. The same ASR stack drives real-time agent assist and outbound / inbound voicebots, with intent classification, entity extraction, and a conduct guardrail layered on top. Voicebot use-cases typically go live after the agent-side analytics are stable — the analytics give us the prompt distribution and the failure modes that inform the bot design. See the Conversational AI & Chatbots capability for the voicebot side.'
  },
  {
    question: 'How is pricing structured?',
    answer:
      'A fixed-fee 120-day delivery, banded by call volume and use-case scope. Hardware is your purchase, on your books, with a Brocode-provided BoM. Ongoing support is a fixed annual line that covers monthly retraining, accuracy reviews, an SLA-backed on-call rota, and the adapter library updates. There is no per-minute metering and no surprise consumption line — a structural difference vs Nuance Mix or Azure Speech.'
  }
];

const failureModes = [
  {
    title: 'Dialect lexicon gaps',
    body: 'MSA-trained ASR does not know that وايد means "very" in Gulf usage, or that ابغى is the Najdi form. Customer requests get rewritten into plausible-but-wrong MSA equivalents.',
    example: 'Example: a UAE telco where customer turns containing the word شو were transcribed as ما in 41 % of cases on the incumbent stack.'
  },
  {
    title: 'Code-switching break',
    body: 'Stock engines treat Arabic and English as separate locales. Mid-sentence English brand names — the OTP, the bundle, the Apple ID — are dropped or transliterated incorrectly.',
    example: 'Example: a tier-1 bank where the brand "Liv." was transcribed correctly in 18 % of mentions on Azure ar-AE vs 96 % on the Brocode pipeline.'
  },
  {
    title: 'Channel noise & 8 kHz telephony',
    body: 'Most Arabic ASR is benchmarked on 16 kHz broadcast. Real call audio is 8 kHz, lossy, with side-tone, agent headset distortion, and noisy customer mobile audio.',
    example: 'Example: 1,200 customer calls on a Saudi bank — Whisper-large-v3 dropped from a published 13 % WER on broadcast to 36 % WER on the live channel.'
  }
];

const useCases = [
  {
    name: 'Real-time agent assist',
    body: 'Live transcript, sentiment ribbon, and next-best-action cards surfaced to the agent inside 700 ms end-to-end. Knowledge-base lookup, intent-aware prompts, and compliance triggers fire as the call unfolds. AHT typically lands 40–60 seconds down on the first deployed queue.',
    metric: 'AHT down 47 s · NBA acceptance 38 %'
  },
  {
    name: 'Post-call analytics & 100 % QA',
    body: 'Replaces a 4 %-sample QA programme with 100 % call coverage. Searchable bilingual transcripts, sentiment trends, complaint detection, and conduct flagging across MSA, Khaleeji, English. Conduct recall typically 3–4x the sampling baseline.',
    metric: 'Conduct recall × 3.4'
  },
  {
    name: 'Voicebot / IVR replacement',
    body: 'Conversational voicebots in Khaleeji and MSA, deployed against the same ASR core, with handoff back to human agents under full context preservation. Replaces touch-tone IVRs and reduces "press 0" abandonment.',
    metric: '32 % containment on tier-1 bank IVR'
  },
  {
    name: 'Compliance & conduct flagging',
    body: 'Regulator-aligned flags for CBUAE / SAMA / TRA conduct rules — missed disclosures, mis-selling language, complaint suppression. Audit trail with timestamp, agent ID, and call recording reference; integrates with NICE Engage and Verint compliance archives.',
    metric: '100 % call coverage vs 4 % sample baseline'
  }
];

const cases = [
  {
    sector: 'UAE telco — 4.2 million calls / month',
    body: 'WER reduced from 31 % to 11.8 % on Khaleeji customer turns. AHT down 47 seconds across the inbound consumer queue. Full Genesys Cloud CX AudioHook integration, 1,400 seats, real-time agent assist live in 14 weeks.',
    metric: 'WER 31 % → 11.8 %'
  },
  {
    sector: 'KSA tier-1 bank — agent assist on 1,800 seats',
    body: 'Real-time next-best-action across complaint and retention queues. Complaint-call AHT down 22 %, Arabic-language NPS up 9 points in 6 months. CBUAE-aligned conduct flagging now visible to the audit committee weekly.',
    metric: 'Arabic NPS +9 points'
  },
  {
    sector: 'Federal-entity citizen hotline',
    body: '100 % call-coverage QA replacing a 4 % sample programme. Conduct-flagging recall 3.4x the prior baseline. Khaleeji + MSA + Egyptian dialect coverage, all on a single appliance behind the existing Avaya Aura estate.',
    metric: '100 % coverage QA · recall × 3.4'
  }
];

const integrationStack = [
  { name: 'Genesys Cloud CX', body: 'AudioHook real-time tap; conversation-context API for agent-assist; post-call analytics into the Workforce Engagement plane.' },
  { name: 'Genesys Engage (on-prem)', body: 'SIPREC tap into the existing recording fabric; CallControl events for screen pops; no change at the SBC.' },
  { name: 'Avaya Aura', body: 'DMCC media tap or passive mirror at the recorder; AES events for agent presence; analytics surfaced in Avaya Workspaces.' },
  { name: 'Cisco UCCE', body: 'Finesse gadget for real-time transcript; SIPREC source via CVP / Webex Connect; CUIC reporting plug-in.' },
  { name: 'NICE CXone / Engage', body: 'Real-time WFO connector; archive ingest of recorded calls for retraining; compliance-flag write-back into the case-management layer.' },
  { name: 'Amazon Connect', body: 'Kinesis Video Streams tap; agent-assist via Connect Tasks API; deployed inside your AWS UAE or KSA region for residency.' }
];

const proofItems = [
  { value: '11.8 %', label: 'WER on Khaleeji customer turns' },
  { value: '287 ms', label: 'First-token latency, agent-assist' },
  { value: '14,000 h', label: 'Proprietary Arabic corpus, dialect-labelled' },
  { value: '120 days', label: 'From signed SoW to live on the floor' }
];

export default function SpeechRecognitionVoiceAiPage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO — agent desktop view with live transcript                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden bg-[#0F1726] text-white">
        <GradientMesh tone="midnight" className="opacity-40" />
        <div className="container-site relative z-10 pb-20 pt-28 md:pb-28 md:pt-36">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Speech Recognition & Voice AI' }
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E2B679]">
                  Arabic ASR · Khaleeji-tuned · 120 days
                </p>
                <h1 className="mt-5 text-balance text-display-xl">
                  Khaleeji speech recognition that hears what your customers actually say.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                  Sub-15 % WER on real Khaleeji call recordings — code-switching, channel noise, and brand names
                  intact. Deployed inside your Genesys, Avaya, or Cisco estate in under 120 days, with a documented
                  WER benchmark on <strong>your</strong> recordings before contract signature.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton
                    href="#benchmark-offer"
                    variant="primary"
                    size="lg"
                    className="bg-[#E2B679] text-[#0F1726] hover:bg-[#EAC692]"
                    event="quote_open"
                  >
                    Request the 200-call WER benchmark
                  </MagneticButton>
                  <a
                    href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
                    data-event="whatsapp_hero"
                    data-page={SLUG}
                  >
                    <WhatsAppIcon /> WhatsApp our Arabic Speech lead
                  </a>
                </div>
                <p className="mt-6 text-xs text-white/55">
                  NDA + DPA · TDRA / SAMA / CBUAE-aligned · Customer-held weights
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <AgentTranscript />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-[#0B131F] py-14">
        <div className="container-site">
          <ProofBand items={proofItems} variant="dark" />
        </div>
      </section>

      {/* Problem & stakes */}
      <section className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="The operations-floor reality"
                title="Why your speech-analytics dashboard is being ignored."
                description="When the Khaleeji and code-switched transcripts are wrong half the time, agents stop trusting the dashboard. AHT stays flat. The CXO promise to move from sample QA to 100 % coverage slips. Again."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ul className="space-y-5 text-ink-700">
                <li className="rounded-2xl border-l-4 border-[#E2B679] bg-[#FBF5EC] p-6">
                  <p className="font-semibold text-ink-900">A CXO-level AHT target slipping for the second quarter.</p>
                  <p className="mt-1.5">
                    Every 10 seconds of avoidable AHT across a 2-million-call-per-month operation is a seven-figure
                    annual line. Another miss triggers a CXO review and an RFP re-issue, with reputational cost to
                    the head of operations who championed the existing stack.
                  </p>
                </li>
                <li className="rounded-2xl border-l-4 border-[#E2B679] bg-[#FBF5EC] p-6">
                  <p className="font-semibold text-ink-900">Regulator pressure for full call coverage.</p>
                  <p className="mt-1.5">
                    CBUAE, SAMA, and TRA are pushing documented call-recording analytics for conduct and complaints.
                    Partial coverage is a compliance exposure, not just an efficiency miss — and the audit committee
                    has started asking why.
                  </p>
                </li>
                <li className="rounded-2xl border-l-4 border-[#E2B679] bg-[#FBF5EC] p-6">
                  <p className="font-semibold text-ink-900">An Arabic-NPS gap visible on the CEO scorecard.</p>
                  <p className="mt-1.5">
                    Arabic callers rate the same journeys 8–12 NPS points lower than English callers. That gap shows
                    up directly on the CEO scorecard and it is now everyone's problem — not just the speech-analytics
                    team's.
                  </p>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Three failure modes */}
      <section className="bg-[#0F1726] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="Why generic Arabic ASR breaks on Khaleeji calls"
            title="Three structural reasons your current engine drops to 30 %+ WER."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {failureModes.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E2B679]">
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

      {/* Architecture / mechanism */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Brocode Arabic speech stack"
            title="Whisper-large-v3 + NeMo Conformer + a Khaleeji adapter. On Triton, in your data centre."
            description="A purpose-built ASR stack — every layer is named, every contribution is measured against the benchmark set, and every component runs inside your boundary."
          />
          <Reveal>
            <BentoGrid className="mt-12">
              <BentoCell span="xl" variant="dark">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E2B679]">
                  Pipeline
                </p>
                <h3 className="mt-3 text-2xl font-semibold">Audio tap → base model → adapter → decoder → CCaaS</h3>
                <PipelineDiagram />
              </BentoCell>
              <BentoCell span="md" variant="brand">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Base acoustic models
                </p>
                <p className="mt-2 text-xl font-semibold">NVIDIA NeMo Conformer-Transducer + Whisper-large-v3</p>
                <p className="mt-3 text-sm text-white/85">
                  Both fine-tuned on a proprietary 14,000-hour Khaleeji + MSA + Egyptian + Levantine corpus — broadcast,
                  call recordings under DPA, and noise-augmented synthetic data.
                </p>
              </BentoCell>
              <BentoCell span="md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A07A2C]">Adapter layer</p>
                <h4 className="mt-2 text-lg font-semibold text-ink-900">LoRA-style Khaleeji head</h4>
                <p className="mt-2 text-sm text-ink-700">
                  MSA, Khaleeji, Levantine, and Egyptian variants share one base and swap adapter weights at runtime.
                  Code-switching head trained on UAE / KSA bilingual call turns.
                </p>
              </BentoCell>
              <BentoCell span="md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A07A2C]">Serving</p>
                <h4 className="mt-2 text-lg font-semibold text-ink-900">NVIDIA Triton + Riva chunked attention</h4>
                <p className="mt-2 text-sm text-ink-700">
                  Streaming decoder, &lt; 300 ms first-token latency for real-time agent assist. Continuous batching for
                  cost efficiency on post-call workloads.
                </p>
              </BentoCell>
              <BentoCell span="md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A07A2C]">Retraining</p>
                <h4 className="mt-2 text-lg font-semibold text-ink-900">MLflow + appliance retraining loop</h4>
                <p className="mt-2 text-sm text-ink-700">
                  Monthly retraining on your call data, on your appliance. Lineage and rollback covered by{' '}
                  <Link href="/services/mlops-ai-infrastructure" className="text-brand underline">
                    MLOps & AI Infrastructure
                  </Link>
                  .
                </p>
              </BentoCell>
            </BentoGrid>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#FBF5EC] py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Side-by-side"
            title="Brocode vs the engines on your shortlist."
            description="Measured on a shared 50-hour Khaleeji + Egyptian call set — agent and customer turns, English code-switching, 8 kHz telephony channel."
          />
          <Reveal>
            <div className="mt-12">
              <CompareTable
                brandLabel="Brocode"
                competitors={[
                  'Nuance Mix.asr',
                  'Azure Speech (ar-AE)',
                  'Google ar-XA',
                  'AWS Transcribe',
                  'In-house Whisper'
                ]}
                rows={compareRows}
              />
            </div>
          </Reveal>
          <p className="mt-6 text-xs text-ink-500">
            Numbers from the lead-magnet benchmark (Q1 2026 refresh). All figures require confirmation on your own
            recordings during the pre-contract benchmark.
          </p>
        </div>
      </section>

      {/* Three-objection block */}
      <section className="bg-[#0F1726] py-24 text-white">
        <div className="container-site">
          <SectionHeading
            variant="dark"
            eyebrow="The three objections from your CXO sponsor"
            title="What gets asked in the steering committee, and what we answer."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                q: 'Show me real WER on Khaleeji call audio — not MSA broadcast benchmarks.',
                a: 'Free 200-call pre-contract benchmark on your own recordings, under NDA + DPA. Reported by dialect bucket, by code-switching rate, by agent vs customer turn. If our numbers do not clear your gates, we walk.'
              },
              {
                q: 'We cannot ship call recordings to a US cloud. Where exactly does inference happen?',
                a: 'Inside your boundary. On-premise 6U appliance, or in-country sovereign cloud (G42, stc), or hyperscaler UAE / KSA region under your residency commitments. No audio crosses the border. DPA template and TDRA pack included.'
              },
              {
                q: 'Real-time agent assist needs sub-500 ms. How do you tap the media without re-architecting our SBCs?',
                a: 'SIPREC / AudioHook / DMCC / Finesse — depending on the platform. No SBC change. First-token latency ~287 ms, NBA card surfaced inside 700 ms end-to-end. Latency budget sized with your network team in week 2.'
              }
            ].map((o, i) => (
              <Reveal key={o.q} delay={i * 0.07}>
                <GlassCard tone="dark" padding="md" className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E2B679]">
                    Objection {i + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{o.q}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">{o.a}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration patterns */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Integration with your voice estate"
            title="Wired into the platforms your contact centre already runs."
            description="Six platforms, six integration patterns. Each documented with a reference architecture and a latency budget — sized against your real call concurrency."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integrationStack.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 transition hover:border-[#E2B679] hover:shadow-card">
                  <h3 className="text-base font-semibold text-ink-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-ink-700">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use-case deep dives */}
      <section className="bg-[#FBF5EC] py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use-case deep dives"
            title="Where the Khaleeji ASR earns its keep on day one."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {useCases.map((u, i) => (
              <Reveal key={u.name} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-card">
                  <h3 className="text-xl font-semibold text-ink-900">{u.name}</h3>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-700">{u.body}</p>
                  <p className="mt-5 rounded-full bg-[#0F1726] px-4 py-2 text-center text-sm font-semibold text-[#E2B679]">
                    {u.metric}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink-500">
            For voicebot / IVR work, see{' '}
            <Link href="/services/conversational-ai-chatbots" className="underline">
              Conversational AI & Chatbots
            </Link>
            . For downstream Arabic NLP on the transcripts, see{' '}
            <Link href="/services/natural-language-processing" className="underline">
              Natural Language Processing
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Anonymised references"
            title="Three live deployments. Each available in full under NDA."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.sector} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl bg-[#0F1726] p-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E2B679]">
                    {c.sector}
                  </p>
                  <p className="mt-5 flex-grow text-sm leading-relaxed text-white/75">{c.body}</p>
                  <p className="mt-6 rounded-full bg-[#E2B679]/15 px-4 py-2 text-center text-sm font-semibold text-[#E2B679]">
                    {c.metric}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink-500">
            Reference logos on request under NDA. Related sector pages:{' '}
            <Link href="/industries/banking-financial-services" className="underline">
              Banking & Financial Services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Lead-magnet gate */}
      <section className="bg-white py-24">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="Khaleeji ASR Benchmark Report 2026: 6 Engines on 50 Hours of UAE & KSA Call Audio"
            description="A 28-page technical report on how six enterprise Arabic ASR engines perform on real GCC contact-centre audio. Plus an interactive WER explorer — filter by dialect, channel quality, code-switching rate, agent vs customer turn."
            contents={[
              'Benchmark setup — 50-hour Khaleeji + Egyptian corpus, telephony channel',
              'WER by dialect bucket: Nuance, Azure, Google, AWS, Whisper, Brocode',
              'Code-switching handling — where each engine breaks',
              'Latency budget for real-time agent assist (8 kHz vs 16 kHz)',
              'Free 200-call pre-contract benchmark on your own audio'
            ]}
            filePath="/downloads/khaleeji-asr-wer-benchmark.pdf"
            ctaLabel="Email me the WER benchmark"
            thumbnail="/images/services/speech-recognition-voice-ai.jpg"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#FBF5EC] py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="What CXOs and procurement leads ask first."
              description="The eight questions our speech team answers in nearly every steering committee — straight, on the record."
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="benchmark-offer" className="bg-white py-24">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brand">Pre-contract WER benchmark</p>
              <h2 className="mt-3 text-display-lg text-ink-900">
                Two hundred of your call recordings. One signed WER report. No contract.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                Six fields — volume, use cases, dialect mix, voice platform, deployment, current engine. Our Arabic
                Speech lead reviews your recordings under NDA + DPA and replies within one business day with the
                proposed benchmark plan.
              </p>
              <div className="mt-8 rounded-2xl border border-ink-100 bg-[#FBF5EC] p-6">
                <p className="text-sm font-semibold text-ink-900">Or skip the form.</p>
                <p className="mt-2 text-sm text-ink-700">
                  Message our Speech lead on WhatsApp directly. We see it within working hours.
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

      <RelatedLinks
        items={[
          {
            label: 'Natural Language Processing',
            href: '/services/natural-language-processing',
            description: 'Intent, entities, and conduct flags downstream of ASR transcripts.'
          },
          {
            label: 'Conversational AI & Chatbots',
            href: '/services/conversational-ai-chatbots',
            description: 'Voicebot and IVR replacement on the same Arabic speech core.'
          },
          {
            label: 'MLOps & AI Infrastructure',
            href: '/services/mlops-ai-infrastructure',
            description: 'Acoustic-model retraining, drift monitoring, and lineage.'
          },
          {
            label: 'Self-hosted LLM Infrastructure',
            href: '/services/self-hosted-llm-infrastructure',
            description: 'Sovereign LLM tier downstream of the transcript layer.'
          },
          {
            label: 'Banking & Financial Services',
            href: '/industries/banking-financial-services',
            description: 'Tier-1 bank agent-assist and conduct-flagging deployments.'
          }
        ]}
      />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Request the benchmark" />

      <Script
        id="ld-service-speech"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Arabic & Khaleeji Speech Recognition',
            serviceType: 'Enterprise Arabic ASR and Voice AI',
            provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
            areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
            description:
              'Arabic and Khaleeji speech recognition tuned for code-switching and real call audio, deployed inside Genesys / Avaya / Cisco voice estates, with a pre-contract WER benchmark on the customer recordings.',
            url: `${SITE.url}/services/${SLUG}`,
            offers: {
              '@type': 'Offer',
              description: 'Free 200-call pre-contract Khaleeji WER benchmark on the customer recordings.'
            }
          })
        }}
      />
      <Script
        id="ld-faq-speech"
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
    </svg>
  );
}

function PipelineDiagram() {
  const blocks = [
    { x: 18, label: 'Audio tap', sub: 'SIPREC / AudioHook' },
    { x: 115, label: 'NeMo / Whisper', sub: 'Fine-tuned base' },
    { x: 212, label: 'Khaleeji adapter', sub: 'LoRA + CS head' },
    { x: 310, label: 'Triton streaming', sub: 'Riva attention' },
    { x: 412, label: 'CCaaS connector', sub: 'Genesys / Avaya' }
  ];
  return (
    <svg viewBox="0 0 500 130" className="mt-5 h-auto w-full" role="img" aria-label="Arabic speech pipeline architecture">
      {blocks.map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={28} width={88} height={64} rx={10} fill="#0B131F" stroke="#E2B679" strokeOpacity={0.55} />
          <text x={b.x + 8} y={52} fill="white" fontSize="11" fontWeight={600}>
            {b.label}
          </text>
          <text x={b.x + 8} y={70} fill="#E2B679" fontSize="9">
            {b.sub}
          </text>
          {i < blocks.length - 1 && (
            <path
              d={`M ${b.x + 88} 60 L ${b.x + 95} 60`}
              stroke="#E2B679"
              strokeWidth={1.5}
              fill="none"
            />
          )}
        </g>
      ))}
      <text x="18" y="115" fill="#E2B679" fontSize="9" fontFamily="ui-monospace, monospace">
        ~287 ms first-token latency · &lt; 700 ms end-to-end NBA card
      </text>
    </svg>
  );
}
