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
import { CompareTable } from '@/components/ui/CompareTable';
import { FAQ } from '@/components/ui/FAQ';
import { ProofBand } from '@/components/ui/ProofBand';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';
import type { PageFormConfig } from '@/components/forms/types';

const SLUG = 'natural-language-processing';
const WHATSAPP_MESSAGE =
  "Hi Brocode - we need to improve Arabic NLP performance at [organisation], specifically [chatbot / IVR / contact-centre analytics / content moderation / other]. Khaleeji dialect handling is the main gap. Could a senior Arabic NLP engineer take a 30-minute call?";

export const metadata: Metadata = {
  title: 'Arabic NLP Company UAE | Khaleeji Dialect & Bilingual Stack | Brocode',
  description:
    'Arabic NLP that actually works on Khaleeji - voice and text, MSA and English, on your stack. Pre-contract benchmark on your own conversations. +23.4pp intent accuracy delta vs hyperscaler APIs.',
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: 'Arabic NLP for the GCC - Brocode Solutions',
    description:
      'Fine-tuned AraBERT, CAMeLBERT, whisper-large-v3, and Jais on a 4.2M Khaleeji utterance corpus. On-premise or G42 Cloud.',
    url: `https://www.brocode.ae/services/${SLUG}`,
    images: [{ url: `/images/services/${SLUG}.jpg` }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic NLP - Brocode Solutions',
    description: 'Khaleeji-first NLP, benchmarked on your data before signature.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Request a free 5,000-utterance Arabic NLP benchmark on your conversations',
  subtitle:
    'A senior Arabic NLP engineer reviews your sample, runs the Brocode stack against it, and shares the accuracy report under NDA within five business days.',
  ctaLabel: 'Request the free Arabic benchmark',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'useCase',
      label: 'Primary use case',
      type: 'multiselect',
      options: [
        'Chatbot intent',
        'Sentiment',
        'IVR speech',
        'Call-centre QA',
        'Content moderation',
        'Search & retrieval',
        'Summarisation',
        'Translation',
        'Generative responses'
      ]
    },
    {
      name: 'channels',
      label: 'Channels in scope',
      type: 'multiselect',
      options: [
        'WhatsApp',
        'Web chat',
        'IVR voice',
        'Call recordings',
        'Email',
        'Social media',
        'SMS',
        'Branch transcripts'
      ]
    },
    {
      name: 'dialects',
      label: 'Dialects expected',
      type: 'multiselect',
      options: [
        'Emirati',
        'Saudi',
        'Kuwaiti',
        'Levantine',
        'Egyptian',
        'Iraqi',
        'Khaleeji-mixed',
        'MSA only'
      ]
    },
    {
      name: 'volume',
      label: 'Monthly conversation volume',
      type: 'select',
      options: ['<10K', '10K-100K', '100K-1M', '1M-10M', '>10M']
    },
    {
      name: 'deployment',
      label: 'Deployment target',
      type: 'select',
      options: ['On-premise', 'G42 Cloud', 'Sovereign cloud', 'Hyperscaler UAE region', 'Hybrid']
    },
    {
      name: 'currentStack',
      label: 'Current NLP stack',
      type: 'text',
      placeholder: 'Genesys / Avaya / NICE / Salesforce / Kore.ai / homegrown / none'
    }
  ]
};

const stackLayers = [
  { id: 'class', name: 'Classification & NER', model: 'AraBERT-v2 + CAMeLBERT', use: 'Intent, sentiment, named entity, complaint routing.' },
  { id: 'asr', name: 'Speech-to-text', model: 'whisper-large-v3 fine-tuned Khaleeji', use: 'IVR, call recordings, branch transcripts.' },
  { id: 'gen', name: 'Generative', model: 'Jais-30B / AceGPT (fine-tuned)', use: 'Agent assist, response drafting, summarisation.' },
  { id: 'switch', name: 'Code-switch detector', model: 'Brocode router head', use: 'Arabic-English routing with dialect tag.' },
  { id: 'redact', name: 'PII redaction', model: 'Presidio + Emirati ID detectors', use: 'On-prem PII removal before model call.' }
];

const objections = [
  {
    objection:
      'Show me the Khaleeji dialect accuracy - not MSA, not Egyptian. We have been burned by Arabic-supporting vendors who only handle Modern Standard.',
    response:
      'The Pre-Contract Arabic NLP Benchmark exists to answer exactly this. Send us 5,000 anonymised utterances from your real conversation logs; we run the Brocode stack against them and share the accuracy report - broken out by dialect (Emirati, Saudi, Kuwaiti, Levantine, Egyptian), by channel, and by code-switch density. The Khaleeji dialect head is trained on a proprietary 4.2M-utterance corpus collected by UAE-resident Emirati, Saudi, and Kuwaiti annotators.',
    proof: 'Proof: anonymised UAE telco reference - Khaleeji intent classification lifted from 64% to 91%, contact-centre Arabic deflection increased from 18% to 46% within four months.'
  },
  {
    objection:
      'Our customer data cannot leave the country. Your stack must run on-premise or on G42 Cloud, and the annotation pipeline must be UAE-resident.',
    response:
      'The entire Arabic Language Stack runs without sending a single customer utterance to a US-billed API. Default deployment targets are on-premise, G42 Cloud, or AWS / Azure UAE North - chosen with your security team. The Khaleeji Dialect Annotation Lab is staffed by UAE and Egypt-resident annotators under ISO 27001 controls, with full audit trail on every labelled sample. PII redaction happens on your perimeter before any model call.',
    proof: 'Proof: anonymised UAE bank reference - Arabic complaint-routing accuracy at 94%, full PII-redaction pipeline, audit-trail signed off by the bank\'s Model Risk Officer, all on-premise.'
  },
  {
    objection:
      'We already pay an LLM API provider. Why would we run our own model instead of just prompt-engineering GPT-4 with Arabic instructions?',
    response:
      'Three honest reasons. Dialect: frontier APIs ship MSA-flavoured Arabic with degradation on Khaleeji - we ship a Khaleeji dialect head trained on Gulf-resident annotators. Data residency: their inference runs outside the UAE, ours does not. Economics: their Arabic tokens are 2-3x English tokens by tokenizer, so per-call cost crosses over a self-hosted Brocode stack around 4-6M calls per month for most clients. We will show you the crossover analysis for your volume in writing.',
    proof: 'Proof: anonymised federal entity reference - Khaleeji voice-note transcription Word Error Rate of 11.2% vs ~31% on hyperscaler defaults, on-premise, with per-call cost ~70% lower at the client\'s monthly volume.'
  }
];

const compareRows = [
  {
    feature: 'Khaleeji dialect intent accuracy',
    brocode: '+23.4 pp delta on 10K Khaleeji utterance benchmark',
    competitors: ['MSA-focused, drops on dialect', 'MSA-focused, drops on dialect', 'MSA-focused', 'MSA + light dialect'],
    note: 'See lead-magnet benchmark.'
  },
  {
    feature: 'Voice-note Word Error Rate on Khaleeji',
    brocode: '~11% WER',
    competitors: ['~31% WER', '~28% WER', '~33% WER', '~22% WER']
  },
  {
    feature: 'On-premise / G42 Cloud deployment',
    brocode: 'Default - no data leaves UAE',
    competitors: [false, false, false, 'Azure UAE North only']
  },
  {
    feature: 'UAE-resident Khaleeji annotation lab',
    brocode: 'Emirati, Saudi, Kuwaiti native speakers',
    competitors: ['No', 'No', 'No', 'No']
  },
  {
    feature: 'Code-switch handling (Ar-En in one utterance)',
    brocode: 'Dedicated detector + router',
    competitors: ['Fails silently', 'Fails silently', 'Fails silently', 'Routes through English by default']
  },
  {
    feature: 'Per-call economics at 5M Arabic calls / month',
    brocode: 'Flat, self-hosted',
    competitors: ['Per-call API charge', 'Per-call API charge', 'Per-call API charge', 'Per-call tokens 2-3x English']
  },
  {
    feature: 'IP ownership of fine-tuned weights',
    brocode: 'Yours',
    competitors: [false, false, false, false]
  },
  {
    feature: 'Pre-contract free benchmark on your data',
    brocode: '5,000-utterance accuracy report',
    competitors: [false, false, false, false]
  }
];

const faqItems = [
  ...objections.map((o) => ({ question: o.objection, answer: `${o.response}\n\n${o.proof}` })),
  {
    question: 'Which Arabic dialects do you support out of the box?',
    answer:
      'Modern Standard Arabic, Emirati, Saudi (Najdi and Hijazi), Kuwaiti, and Iraqi are covered by the default Khaleeji dialect head. Levantine (Lebanese, Jordanian, Palestinian, Syrian) and Egyptian are covered by additional heads trained on the relevant subsets of the corpus. If your traffic includes a dialect not on this list (Sudanese, Moroccan, Algerian), we will profile a sample and confirm coverage before the engagement.'
  },
  {
    question: 'How often do you retrain the dialect head, and who pays for that?',
    answer:
      'The base dialect head is refreshed quarterly with new annotated samples from the Khaleeji corpus. Client-specific fine-tunes are retrained on a cadence agreed in the engagement contract - typically monthly for high-volume contact centres and quarterly for steady-state classification systems. Retraining is part of the run-phase SLA, not a separate change order.'
  },
  {
    question: 'How do you control hallucinations on the generative side (Jais, AceGPT)?',
    answer:
      'For generative use cases we use a constrained prompt format with retrieval grounding, structured output schemas where possible, and a hallucination evaluator (Giskard, DeepEval) wired into CI. For contact-centre agent-assist scenarios we add a refusal head that surfaces a fallback message rather than an unverified answer. All of this is documented in the engagement\'s evaluation harness.'
  },
  {
    question: 'How does PII redaction work for Arabic names, Emirates IDs, and IBANs?',
    answer:
      'PII redaction runs on your perimeter, before any model call. We use Microsoft Presidio with custom detectors for Emirates ID, Saudi National ID, GCC IBANs, and Arabic-script personal names (which standard detectors miss). The redaction pipeline is logged and audit-able; redaction patterns are reviewed quarterly against new ID formats and updated through a change-controlled process.'
  },
  {
    question: 'How do you integrate with our existing contact-centre platform (Genesys, NICE, Avaya)?',
    answer:
      'We provide adapters for Genesys Cloud, NICE CXone, and Avaya OneCloud (the three we see most often in the GCC). The adapter handles utterance ingestion, intent and sentiment scoring, and writes results back through the platform\'s webhook or AAEP integration. For Kore.ai and homegrown stacks the integration is bespoke; we have shipped both. Existing IVR menus and voice prompts are preserved during rollout.'
  }
];

const proofItems = [
  { value: '+23.4 pp', label: 'Khaleeji intent accuracy delta vs best hyperscaler API' },
  { value: '11.2%', label: 'Khaleeji voice-note WER on federal entity benchmark' },
  { value: '4.2M', label: 'Utterances in the proprietary Khaleeji corpus' },
  { value: '46%', label: 'Arabic contact-centre deflection - UAE telco reference' }
];

const relatedItems = [
  {
    label: 'Document Intelligence',
    href: '/services/document-intelligence',
    description: 'The upstream sibling capability - Arabic OCR for forms and scanned documents.'
  },
  {
    label: 'Conversational AI & Chatbots',
    href: '/services/conversational-ai-chatbots',
    description: 'The customer-facing chatbot product anchored on the same Arabic stack.'
  },
  {
    label: 'Self-Hosted LLM Infrastructure',
    href: '/services/self-hosted-llm-infrastructure',
    description: 'For Jais and AceGPT deployment inside your sovereign estate.'
  },
  {
    label: 'Government & Public Sector',
    href: '/industries/government-public-sector',
    description: 'Federal entity case studies and bilingual citizen-service deployments.'
  },
  {
    label: 'Banking & Financial Services',
    href: '/industries/banking-financial-services',
    description: 'Arabic complaint routing, sentiment, and contact-centre intelligence.'
  }
];

export default function NaturalLanguageProcessingPage() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Arabic and English Natural Language Processing',
    serviceType: 'Bilingual Arabic NLP engineering with Khaleeji dialect coverage',
    provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Egypt', 'Jordan'],
    description:
      'Production Arabic NLP on Khaleeji dialect and MSA, voice and text, with a pre-contract benchmark on your real conversations. Fine-tuned AraBERT, CAMeLBERT, Jais, and whisper-large-v3 on a UAE-resident annotation lab.',
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

      {/* HERO - Arabic chat to structured-data */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fef7ed] via-[#fde8d4] to-white">
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Natural Language Processing' }
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Bilingual Arabic-English NLP</p>
              <h1 className="text-balance text-display-2xl text-ink-900">
                Arabic NLP that <span className="text-brand">works on Khaleeji.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 md:text-xl">
                Voice and text. MSA and English. Emirati, Saudi, and Kuwaiti dialect handled natively. On your stack. With a documented accuracy benchmark on your own conversations - before contract signature.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" event="quote_open">
                  Request the free benchmark
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                  data-event="whatsapp_hero"
                  data-page={SLUG}
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Hero visual - Arabic chat & structured panel side-by-side */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Arabic chat */}
                <div className="rounded-3xl border border-ink-100 bg-white p-5 shadow-card">
                  <div className="flex items-center justify-between border-b border-ink-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand to-accent" />
                      <div>
                        <p className="text-xs font-semibold text-ink-900">+971 50 ...</p>
                        <p className="text-[10px] text-ink-500">online</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">live</span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <div dir="rtl" className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand/10 px-3 py-2 text-sm text-ink-900">
                      السلام عليكم، شخباركم؟
                    </div>
                    <div dir="rtl" className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand/10 px-3 py-2 text-sm text-ink-900">
                      ابغى افعّل sim card ماله شغال من امس
                    </div>
                    <div dir="rtl" className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand/10 px-3 py-2 text-sm text-ink-900">
                      رقمي 050... و الـ ID جاهز
                    </div>
                  </div>
                </div>

                {/* Structured panel */}
                <div className="rounded-3xl border border-ink-900/10 bg-ink-900 p-5 text-white shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Detected output</p>
                  <dl className="mt-4 space-y-3 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <dt className="text-white/60">intent</dt>
                      <dd className="font-semibold text-white">SIM_activation</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-white/60">confidence</dt>
                      <dd className="font-semibold text-emerald-300">0.97</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-white/60">sentiment</dt>
                      <dd className="font-semibold text-rose-300">negative (0.82)</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-white/60">language mix</dt>
                      <dd className="text-white">AR 78% / EN 22%</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-white/60">dialect</dt>
                      <dd className="font-semibold text-amber-300">Emirati</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-white/60">route</dt>
                      <dd className="text-white">- agent_sim_queue</dd>
                    </div>
                  </dl>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/50">Khaleeji accuracy</p>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="text-3xl font-bold text-white">94.3%</span>
                      <div className="h-1.5 w-2/3 rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand to-emerald-400" style={{ width: '94.3%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-site">
          <ProofBand items={proofItems} />
        </div>
      </section>

      {/* Why generic NLP fails on Khaleeji */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why generic NLP fails on Khaleeji"
            title="Three reasons hyperscaler Arabic NLP collapses on real GCC conversations."
            description="Each one is documented in the lead-magnet benchmark with a sampled real failure case from anonymised customer logs."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Dialect divergence from MSA',
                body: 'Khaleeji vocabulary, morphology, and discourse markers diverge sharply from MSA. Off-the-shelf models, trained predominantly on MSA news corpora and Egyptian dialect, regress 18-25 percentage points on Emirati intent classification before any fine-tuning.',
                sample: 'shakhbarkum vs kayf halukum - same intent, three of four hyperscaler APIs mis-classify the first'
              },
              {
                title: 'Voice-note compression artifacts',
                body: 'WhatsApp voice notes are heavily compressed (OPUS, 8kHz effective). Hyperscaler ASR models trained on broadcast Arabic audio fail on those artifacts at the rate of one error every fourth word.',
                sample: 'Reference 50-hour Khaleeji voice-note corpus: WER 31% baseline, 11.2% on the Brocode whisper-large-v3 fine-tune'
              },
              {
                title: 'Arabic-English code-switching',
                body: 'Real Gulf customer language is heavily code-switched. A single utterance can carry an Arabic verb, an English noun, and a transliterated brand name. Generic pipelines route the whole utterance through one language, losing structure in either direction.',
                sample: 'ابغى افعل sim card - dedicated detector tags the embedded English token and preserves it through inference'
              }
            ].map((g) => (
              <Reveal key={g.title}>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-semibold text-ink-900">{g.title}</h3>
                  <p className="mt-3 text-sm text-ink-700">{g.body}</p>
                  <p className="mt-4 rounded-lg bg-surface-muted px-3 py-2 text-xs text-ink-600 italic">{g.sample}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Brocode Arabic Language Stack */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Brocode Arabic Language Stack"
            title="A purpose-built bilingual stack. No off-the-shelf API in the critical path."
            description="Every layer is portable across on-premise estates, G42 Cloud, AWS UAE North, or Azure UAE North - no customer utterance leaves the country."
          />
          <BentoGrid className="mt-12">
            {stackLayers.map((l, i) => (
              <BentoCell
                key={l.id}
                span={i === 0 ? 'lg' : i === 2 ? 'lg' : 'md'}
                variant={i === 1 ? 'brand' : i === 4 ? 'dark' : 'light'}
              >
                <p className={`text-xs font-semibold uppercase tracking-wider ${i === 1 ? 'text-white/80' : i === 4 ? 'text-brand-300' : 'text-brand'}`}>
                  Layer {i + 1}
                </p>
                <h3 className={`mt-2 text-xl font-semibold ${i === 1 || i === 4 ? 'text-white' : 'text-ink-900'}`}>
                  {l.name}
                </h3>
                <p className={`mt-2 font-mono text-xs ${i === 1 || i === 4 ? 'text-white/70' : 'text-ink-600'}`}>{l.model}</p>
                <p className={`mt-3 text-sm ${i === 1 || i === 4 ? 'text-white/80' : 'text-ink-700'}`}>{l.use}</p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Khaleeji Dialect Annotation Lab */}
      <section className="bg-ink-900 py-22 text-white">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow text-white/70">The Khaleeji Dialect Annotation Lab</p>
            <h2 className="mt-3 text-display-md">The dataset is the moat.</h2>
            <p className="mt-5 text-white/80">
              A 4.2M-utterance proprietary corpus, collected by UAE and Egypt-resident annotators. Emirati, Saudi (Najdi and Hijazi), Kuwaiti, Iraqi, and Levantine native speakers. ISO 27001 controls. Full audit trail on every sample.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {[
                { v: '4.2M', l: 'Annotated utterances' },
                { v: '38', l: 'Native-speaker annotators' },
                { v: '5', l: 'Dialect heads in production' },
                { v: 'ISO 27001', l: 'Labelling pipeline controls' },
                { v: '100%', l: 'UAE / Egypt resident annotators' },
                { v: 'Quarterly', l: 'Corpus refresh cadence' }
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-bold text-brand-300">{s.v}</p>
                  <p className="mt-2 text-xs text-white/70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark / comparison */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Benchmark vs the alternatives"
            title="On the same 10,000 Khaleeji utterances - how each engine actually performs."
            description="The full benchmark report is the lead magnet below. Numbers shown here are from the 2026 edition; the benchmark is regenerated quarterly."
          />
          <div className="mt-12">
            <CompareTable
              competitors={['AWS Comprehend', 'Azure Language', 'Google Cloud NL', 'OpenAI GPT-4 / GPT-5']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we hear on every first call"
            title="Three objections - answered with evidence, not slides."
          />
          <div className="mt-12 space-y-6">
            {objections.map((o, i) => (
              <Reveal key={i}>
                <article className="grid grid-cols-1 gap-6 rounded-2xl border border-ink-100 bg-white p-7 md:grid-cols-12 md:p-9">
                  <div className="md:col-span-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Objection {String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-3 text-lg font-semibold italic text-ink-900">&ldquo;{o.objection}&rdquo;</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-ink-700">{o.response}</p>
                    <p className="mt-4 rounded-xl border-l-2 border-brand bg-surface-muted px-4 py-3 text-sm text-ink-700">{o.proof}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image break + case studies */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={`/images/services/${SLUG}.jpg`}
            alt="Bilingual Arabic-English NLP system rendered with token highlights on a structured dashboard inside a UAE contact centre"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
        </div>
        <div className="container-site relative z-10 py-22 text-white">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/70">Case studies</p>
            <h2 className="mt-3 text-display-md">Three Arabic NLP programmes in production today.</h2>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">UAE telco</p>
                <p className="mt-2 text-white/90">Khaleeji intent classification lifted from 64% to 91%. Arabic contact-centre deflection increased from 18% to 46%. Full PII-redaction pipeline on-premise.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">UAE bank</p>
                <p className="mt-2 text-white/90">Arabic complaint-routing accuracy at 94% across web chat, branch transcripts, and call recordings. Audit-trail signed off by the bank&apos;s Model Risk Officer.</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">Federal entity</p>
                <p className="mt-2 text-white/90">Khaleeji voice-note transcription WER 11.2% (vs ~31% on hyperscaler defaults). Full on-premise deployment with customer-managed keys.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why fine-tune over GPT-4 prompting */}
      <section className="bg-white py-22">
        <div className="container-site">
          <SectionHeading
            eyebrow="Self-hosted vs frontier API"
            title="An honest read of when to run your own Arabic model."
            description="Four axes that decide the right architecture. We will share the crossover analysis for your specific volume in writing."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              { axis: 'Dialect handling', selfHost: 'Khaleeji head trained on Gulf-resident annotators.', api: 'MSA-flavoured Arabic with measurable Khaleeji regression.' },
              { axis: 'Data residency', selfHost: 'Inference inside UAE. No utterance leaves the country.', api: 'Inference in US or EU regions for most providers; UAE region is limited to certain models.' },
              { axis: 'Per-call economics at 5M Ar calls / month', selfHost: 'Flat. Hardware cost predictable, AED.', api: 'Per-token billed; Arabic tokens are 2-3x English by tokenizer.' },
              { axis: 'IP and weights', selfHost: 'Yours. Continue to fine-tune indefinitely.', api: 'API access only. No weights, no offline mode, vendor lock.' }
            ].map((row) => (
              <Reveal key={row.axis}>
                <article className="rounded-2xl border border-ink-100 bg-surface-muted p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{row.axis}</p>
                  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-3">
                      <p className="text-xs font-semibold text-ink-900">Self-hosted Brocode stack</p>
                      <p className="mt-1 text-sm text-ink-700">{row.selfHost}</p>
                    </div>
                    <div className="rounded-lg bg-white p-3">
                      <p className="text-xs font-semibold text-ink-900">Frontier API (GPT-4/5, Claude)</p>
                      <p className="mt-1 text-sm text-ink-700">{row.api}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The Khaleeji Arabic NLP Benchmark - 9 Engines on 10,000 Real UAE Conversations"
            description="A 36-page PDF with an interactive accuracy explorer. Filter by dialect, channel, intent type, and code-switch density. Methodology and reproducer included."
            contents={[
              'Dataset and corpus methodology',
              'Model comparison: AraBERT-v2, CAMeLBERT, Jais, AceGPT vs AWS, Azure, Google, OpenAI',
              'Khaleeji vs MSA performance gaps',
              'Code-switch density analysis',
              'Cost per million Arabic tokens',
              'Reproducer on GitHub'
            ]}
            filePath="/downloads/khaleeji-arabic-nlp-benchmark.pdf"
            ctaLabel="Email me the benchmark"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions from CX and digital leads</p>
            <h2 className="mt-3 text-display-md text-ink-900">Frequently asked.</h2>
            <p className="mt-4 text-ink-600">
              Every answer below is taken directly from the SOW templates we sign with UAE telcos, banks, and federal entities.
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
      <section id="contact-form" className="relative isolate overflow-hidden bg-gradient-to-br from-[#fef7ed] via-white to-[#fde8d4] py-22">
        <div className="container-site relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Free pre-contract benchmark</p>
            <h2 className="mt-3 text-display-lg text-ink-900">Send us 5,000 anonymised utterances. We will come back with an accuracy report.</h2>
            <p className="mt-5 max-w-lg text-ink-700">
              No SOW required to get the benchmark. Sign an NDA, send the sample, receive the report within five business days. If the numbers do not justify a project, you keep the report.
            </p>
            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <p><strong className="text-ink-900">Direct WhatsApp:</strong> +971 50 761 2213</p>
              <p><strong className="text-ink-900">Email:</strong> hello@brocode.ae</p>
              <p><strong className="text-ink-900">HQ:</strong> Al Maryah Island, ADGM, Abu Dhabi</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 shadow-card md:p-10">
              <QuoteForm config={formConfig} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <StickyMobileBar whatsappMessage={WHATSAPP_MESSAGE} primaryLabel="Request benchmark" primaryHref="#contact-form" />
    </>
  );
}
