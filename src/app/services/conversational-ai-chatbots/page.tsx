import type { Metadata } from 'next';
import Image from 'next/image';
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
import { ProofBand } from '@/components/ui/ProofBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const PAGE_SLUG = 'conversational-ai-chatbots';
const WHATSAPP_MESSAGE =
  'Hi Brocode — I run [contact-centre / CX] at [organisation]. The board has set us a 30% deflection target this year. Could we schedule a 30-minute call to discuss a Khaleeji voice and chat assistant?';

export const metadata: Metadata = {
  title: 'Khaleeji Conversational AI for UAE & KSA Contact Centres',
  description:
    'A bilingual Arabic-English Khaleeji-native assistant that deflects 30%+ of contact-centre volume in 90 days — WhatsApp, in-app, voice — wired into Genesys, NICE CXone, Temenos and Finacle, with a CSAT guarantee.',
  alternates: { canonical: 'https://www.brocode.ae/services/conversational-ai-chatbots' },
  openGraph: {
    title: 'Conversational AI — Khaleeji-native contact-centre deflection',
    description:
      'WER 9.4% on Khaleeji versus next-best 17.8%. A contractual Deflection SLA, not a flow-builder.',
    type: 'article',
    url: 'https://www.brocode.ae/services/conversational-ai-chatbots'
  },
  twitter: { card: 'summary_large_image' }
};

const formConfig: PageFormConfig = {
  pageSlug: PAGE_SLUG,
  title: 'Run your top 20 intents through our Khaleeji ASR — get a benchmark report in 7 days',
  subtitle:
    'Send us your top-20 intent transcripts. We will return a Khaleeji ASR and intent-accuracy benchmark report against your current platform within one working week.',
  ctaLabel: 'Request the 7-day benchmark',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'channels',
      label: 'Channels in scope',
      type: 'multiselect',
      required: true,
      options: ['WhatsApp', 'Voice IVR', 'In-app', 'Web', 'Apple Business Chat', 'RCS', 'SMS']
    },
    {
      name: 'languages',
      label: 'Languages required',
      type: 'multiselect',
      options: ['MSA', 'Khaleeji', 'Egyptian', 'Levantine', 'English', 'Urdu', 'Tagalog', 'Hindi', 'French']
    },
    {
      name: 'ccaas',
      label: 'Contact-centre platform',
      type: 'select',
      options: [
        'Genesys Cloud',
        'Genesys PureConnect',
        'NICE CXone',
        'Avaya',
        'Cisco',
        'Five9',
        'Amazon Connect',
        'Homegrown',
        'Mixed'
      ]
    },
    {
      name: 'coreSystem',
      label: 'Core system to integrate',
      type: 'multiselect',
      options: [
        'Temenos T24',
        'Finacle',
        'FLEXCUBE',
        'ICS BANKS',
        'SAP',
        'Salesforce',
        'ServiceNow',
        'Magento',
        'Shopify',
        'Ericsson BSS',
        'Huawei BSS',
        'Custom'
      ]
    },
    {
      name: 'volume',
      label: 'Current monthly contact volume',
      type: 'select',
      options: ['<50K', '50K–250K', '250K–1M', '>1M']
    },
    {
      name: 'deflectionTarget',
      label: 'Board-set deflection target and deadline',
      type: 'textarea',
      placeholder: 'e.g., 30% by end of FY26, with CSAT not below 4.2/5'
    }
  ]
};

const stack = [
  { layer: 'ASR', tool: 'Whisper-Large-v3 turbo + Brocode Khaleeji acoustic adapter (1,800 hrs)', metric: 'WER 9.4%' },
  { layer: 'NLU intent', tool: 'AraBERT-v2 fine-tuned on customer transcripts', metric: '94.2% intent accuracy' },
  { layer: 'NLU slots', tool: 'XLM-RoBERTa Khaleeji slot-filler', metric: 'F1 0.89 on banking entities' },
  { layer: 'Generation', tool: 'Llama 3.3 70B (controlled), grounded by retrieval', metric: 'Deterministic on transactional steps' },
  { layer: 'TTS', tool: 'ElevenLabs Multilingual v2 + Azure Neural Voice Hala', metric: 'Endpointing tuned for MENA telco' },
  { layer: 'Containment eval', tool: 'Weekly Looker dashboard wired to live traffic', metric: 'Intent-level deflection visible to ops' }
];

const channels = [
  { name: 'WhatsApp Business Platform', detail: 'Official Meta BSP partner. Sub-second message delivery, list templates, structured cards, in-conversation payments.' },
  { name: 'Voice — Genesys Cloud Audiohook', detail: 'In-stream barge-in, endpointing tuned for Gulf calling patterns and MENA telco call-setup delay.' },
  { name: 'Voice — NICE CXone Voice Integration', detail: 'Native CXone routing co-existence; the assistant joins the existing flow rather than replacing it.' },
  { name: 'In-app SDK', detail: 'iOS, Android, Flutter, React Native — same Khaleeji NLU surface as web and WhatsApp.' },
  { name: 'Apple Business Chat & RCS', detail: 'Rich cards and quick replies for premium retail and government services use cases.' },
  { name: 'SMS — Twilio & Unifonic', detail: 'Fallback channel for low-bandwidth and citizen-service deployments.' }
];

const connectors = [
  'Temenos T24',
  'Finacle',
  'ICS BANKS',
  'Oracle FLEXCUBE',
  'SAP S/4HANA',
  'Salesforce Service Cloud',
  'ServiceNow CSM',
  'Magento',
  'Shopify',
  'Ericsson BSS',
  'Huawei BSS',
  'UAE PASS',
  'Nafath'
];

const compareRows: CompareRow[] = [
  {
    feature: 'Khaleeji ASR WER on Gulf-dialect banking calls',
    brocode: '9.4%',
    competitors: ['17.8%', '19.1%', '21.2%', '24.0%'],
    note: 'Brocode Khaleeji adapter on Whisper-Large-v3 turbo, held-out 4,200-utterance set.'
  },
  {
    feature: 'Intent accuracy on Khaleeji banking queries',
    brocode: '94.2%',
    competitors: ['81.6%', '79.0%', '76.4%', '70.1%'],
    note: 'AraBERT-v2 fine-tuned on customer transcripts plus XLM-RoBERTa slot-filler.'
  },
  {
    feature: 'Multi-CCaaS support (Genesys + NICE in parallel)',
    brocode: true,
    competitors: [true, false, true, false],
    note: 'Most platforms force a single CCaaS estate. We integrate against both at once.'
  },
  {
    feature: 'WhatsApp Business Platform BSP relationship',
    brocode: 'Meta BSP partner, MENA region',
    competitors: ['Reseller', 'Reseller', 'Direct', 'Direct'],
    note: 'Sub-second message delivery is a BSP-tier capability, not a flow-builder feature.'
  },
  {
    feature: 'Region-resident deployment (UAE / KSA hyperscaler)',
    brocode: true,
    competitors: [false, false, true, true],
    note: 'EU-region tenants are the default on Cognigy and Yellow.ai contracts.'
  },
  {
    feature: 'Pre-built core-banking connectors',
    brocode: 'Temenos, Finacle, FLEXCUBE, ICS BANKS',
    competitors: ['Partial', 'Partial', 'None', 'None'],
    note: 'Cuts the integration sprint from 8–10 weeks to 2–3 weeks.'
  },
  {
    feature: 'Deflection SLA with fee-back mechanism',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'Contractually guaranteed deflection floor per channel.'
  },
  {
    feature: 'Public Khaleeji ASR demo on the vendor site',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'Live mic, opt-in, no retention — the most direct way to verify the WER claim.'
  }
];

const competitors = ['Cognigy', 'Yellow.ai', 'Kore.ai', 'Dialogflow CX / Amazon Lex'];

const objections = [
  {
    objection:
      'Cognigy and Yellow.ai already say they support Arabic. What does "Khaleeji-native" actually mean in production?',
    proof:
      'It means a Whisper-Large-v3 turbo ASR fine-tuned on 1,800 hours of cleared Gulf-dialect call recordings, an AraBERT-v2 intent classifier retrained on the customer\'s own transcripts, and an XLM-RoBERTa Khaleeji slot-filler — measured on a held-out 4,200-utterance set. Our published WER on Khaleeji is 9.4% versus next-best 17.8% on the same set. The benchmark methodology and the test pack are in the lead magnet below; we will run your top 20 intents in 7 days at no cost.'
  },
  {
    objection:
      'Our contact centre runs Genesys Cloud and NICE CXone in parallel. Any bot must integrate with both — not just one — and not break existing routing.',
    proof:
      'We are Genesys AppFoundry and NICE Developer Partner, and we routinely run the same assistant across both estates with parallel Audiohook and CXone Voice Integration. The assistant joins existing flows rather than replacing them; warm transfers carry intent, history and entities to the live agent screen. The KSA telco reference runs exactly this dual-CCaaS pattern.'
  },
  {
    objection:
      'We have been promised deflection before. Numbers always look good in pilot and collapse at production volume. What is different?',
    proof:
      'The Deflection SLA. Brocode contractually commits to a deflection floor per channel; if the floor is missed for two consecutive months at production volume, a fee-back applies. The UAE retail-bank reference hit 41% chat-channel deflection within five months, with CSAT up 3.1 points. The KSA telco reference hit 58% voice containment on the top 12 self-service intents. The numbers are in the lead magnet and on a verifiable reference call.'
  }
];

const faqItems = [
  {
    question: 'How does escalation to a live agent work, and does the agent see the conversation history?',
    answer:
      'Escalation is a structured handover. The assistant captures intent, entities, sentiment, identity, and the last twenty turns of conversation, then attaches all of that to the Genesys or NICE CXone interaction so the agent sees the full context on their screen before they answer the call or accept the chat. Confidence thresholds and policy triggers decide when to escalate; the customer controls the rules.'
  },
  {
    question: 'Can the assistant verify a customer over voice using biometrics?',
    answer:
      'Yes, where the customer already has a voice-biometrics estate (Nuance Gatekeeper, Pindrop, Auraya). We integrate as an authentication step rather than running our own biometric. For text channels, UAE PASS and Nafath rails are the standard identity step; for retail we use a one-time code over WhatsApp or in-app.'
  },
  {
    question: 'How do you handle the compliance side — call recording, consent, data residency?',
    answer:
      'Every interaction is recorded against the customer\'s existing retention policy. Consent is captured per channel with explicit opt-in flows and stored alongside the transcript. Production deployment runs in customer VPC inside UAE or KSA hyperscaler regions; no traffic leaves the country when the customer requires sovereignty. The platform is ISO 27001 and SOC 2 Type II covered.'
  },
  {
    question: 'How wide is the Khaleeji coverage — Emirati, Saudi, Kuwaiti, Qatari, Omani?',
    answer:
      'The acoustic adapter is trained on Emirati, Saudi Najdi, Saudi Hijazi, Kuwaiti, Qatari and Omani audio, with smaller slices of Bahraini and Yemeni. NLU adds Egyptian and Levantine via XLM-RoBERTa where the customer base requires it. The published WER number is on a UAE/KSA-weighted held-out set; per-dialect performance is in the lead magnet.'
  },
  {
    question: 'What happens to the assistant if the underlying LLM provider changes or is deprecated?',
    answer:
      'Free-form generation is intentionally a small surface — paraphrase and explanation only, never the money-moving step. The understanding layer (Whisper + AraBERT-v2 + XLM-RoBERTa) is open-weights and customer-owned. Replacing the generation model is a one-week swap, not a rebuild; we routinely run Llama 3.3 70B and Mistral-Large-2 side by side and switch per workload.'
  },
  {
    question: 'How is the system tested before it sees production traffic?',
    answer:
      'A four-stage release: shadow run (assistant listens but does not respond), supervised pilot (10% of traffic with live coaching), graduated rollout (channel-by-channel ramp), and full production. Containment, CSAT and escalation reasons are tracked through every stage in a Looker dashboard the operations team owns from day one.'
  },
  {
    question: 'What does the integration with our core banking system actually look like?',
    answer:
      'Pre-built connectors for Temenos T24, Finacle, ICS BANKS and FLEXCUBE expose a defined surface — balance enquiries, recent transactions, card status, instalment view, dispute initiation — over the customer\'s ESB or middleware (TIBCO, MuleSoft, OpenIDM, custom). Transactional intents are deterministic flows; generation does not touch the money-moving step.'
  },
  {
    question: 'How long until we see the first deflection number?',
    answer:
      'Top-20-intent benchmark in 7 days from your transcripts. First channel live in 8–10 weeks for a focused scope. Full multi-channel programme reaches the 30% board target in 90 days for a typical UAE bank or telco footprint, with the Deflection SLA active from month two of production.'
  }
];

const stats = [
  { value: '9.4%', label: 'Khaleeji ASR WER vs next-best 17.8%' },
  { value: '94.2%', label: 'Intent accuracy on banking queries' },
  { value: '41%', label: 'Chat deflection — UAE retail bank ref' },
  { value: '+3.1', label: 'CSAT points on the deflected channel' }
];

const relatedItems = [
  { label: 'LLM Fine-Tuning', href: '/services/llm-fine-tuning', description: 'Bring your own dialect-tuned base; we run the generation layer on it.' },
  { label: 'AI Agents & Agentic Workflows', href: '/services/ai-agents-agentic-workflows', description: 'When the assistant needs to act — raise a ticket, reschedule a delivery, freeze a card.' },
  { label: 'Speech Recognition & Voice AI', href: '/services/speech-recognition-voice-ai', description: 'The Whisper Khaleeji adapter, latency profile, and standalone voice deployments.' },
  { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'The UAE retail-bank deflection reference, end to end.' },
  { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Federal citizen-service assistants on WhatsApp + UAE PASS.' }
];

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Conversational AI and Chatbot Development',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Egypt'],
  description:
    'Khaleeji-native conversational AI and chatbots for UAE and KSA contact centres. Integrates with Genesys Cloud, NICE CXone, Temenos, Finacle, FLEXCUBE, UAE PASS. Deflection SLA included.',
  audience: { '@type': 'Audience', audienceType: 'Director of CX, Head of Contact Centre' }
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

export default function ConversationalAIChatbotsPage() {
  return (
    <>
      <Script id="ld-convai-service" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-convai-faq" type="application/ld+json">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      {/* Bespoke hero: contact-centre dashboard feel — split WhatsApp + voice waveform */}
      <section className="relative isolate overflow-hidden bg-[#0a0e1a] text-white">
        <GradientMesh tone="brand" />
        <div className="container-site relative z-10 pt-22 pb-22 md:pt-28 md:pb-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Conversational AI & Chatbots' }
            ]}
            variant="dark"
          />
          {/* Top "dashboard" bar */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              live containment dashboard · this week
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/80">
                <span className="text-2xl font-bold text-brand-200">37.4%</span> deflection
              </span>
              <span className="text-white/80">
                AHT <span className="font-semibold">−22%</span>
              </span>
              <span className="text-white/80">
                CSAT <span className="font-semibold text-emerald-300">4.41</span>
              </span>
              <span className="hidden text-white/60 md:inline">UAE retail-bank pilot · week 14</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5 text-white/70">Contact-centre deflection · UAE / KSA</p>
              <h1 className="text-balance text-display-2xl">
                A Khaleeji-native assistant that deflects 30%+ in 90 days.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                Bilingual Arabic-English on WhatsApp, in-app and voice — wired into Genesys, NICE CXone and your core
                banking or BSS. CSAT guarantee and a Deflection SLA written into the Statement of Work.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="#contact-form"
                  variant="primary"
                  size="lg"
                  event="quote_open"
                  className="bg-white text-ink-900 hover:bg-brand hover:text-white"
                >
                  Run your top 20 intents through our Khaleeji ASR
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={PAGE_SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1faa53]"
                >
                  WhatsApp the deflection lead
                </a>
                <Link
                  href="#lead-magnet"
                  data-event="secondary_cta_click"
                  data-page={PAGE_SLUG}
                  className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  Book a 45-min deflection-strategy review →
                </Link>
              </div>
            </div>

            {/* Right: split WhatsApp + voice waveform */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {/* WhatsApp chat */}
                <GlassCard tone="dark" padding="sm" className="bg-[#075E54]/30">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">WhatsApp · Khaleeji</p>
                  <div className="mt-3 space-y-2">
                    <ChatBubble side="right" text="وين قسط السيارة الجديد؟" rtl />
                    <ChatBubble
                      side="left"
                      text="القسط الجديد ٢٬٨٤٠ درهم — مدفوع في ١٢ مايو. تبا تشوف الفاتورة؟"
                      rtl
                    />
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {['نعم الفاتورة', 'كشف حساب', 'تكلم وكيل'].map((c) => (
                        <span key={c} className="rounded-md border border-white/15 px-2 py-0.5 text-[11px] text-white/80" dir="rtl">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
                {/* Voice waveform */}
                <GlassCard tone="dark" padding="sm" className="bg-ink-900/60">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">voice · genesys audiohook</p>
                  <div className="mt-3 flex h-16 items-end gap-[3px]">
                    {[6, 14, 9, 18, 11, 22, 16, 28, 19, 24, 12, 20, 14, 26, 17, 21, 9, 15, 8, 13, 18, 23, 14, 11, 7, 19].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-sm bg-brand-200/80"
                        style={{ height: `${h * 3}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 space-y-1 text-[11px] font-mono text-white/75">
                    <p><span className="text-white/45">caller:</span> &ldquo;أبي أعرف رصيد حسابي&rdquo;</p>
                    <p><span className="text-white/45">intent:</span> balance_enquiry · 0.97</p>
                    <p><span className="text-white/45">slot:</span> account_type=savings</p>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> containment achieved
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat band — light variant for "operations dashboard" feel */}
      <section className="border-b border-ink-100 bg-white py-10">
        <div className="container-site">
          <ProofBand items={stats} />
        </div>
      </section>

      {/* Problem & stakes — brief 7 + 8 */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The 30% deflection problem"
              title="78% of callers reach a human in under 40 seconds."
              description="Because the IVR cannot understand Khaleeji well enough to self-serve a balance enquiry, a bill-shock complaint or a missed-delivery query."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-700">
            <p>
              The CCO has publicly committed a 30% deflection number to the board. Missing it eliminates a year-end
              bonus pool. The BPO contract is up for renewal; failure to deflect locks in a higher per-seat rate for
              another three years. Two competitors have publicised their AI-deflection results in the press, and
              analyst notes are now asking whether this entity is behind. CSAT has been pressured for two consecutive
              quarters, so any programme that drops it further triggers an executive escalation.
            </p>
            <p>
              Three production-failure patterns recur. First, Arabic ASR that was tuned on MSA collapses on Gulf-dialect
              audio — we measure WER deltas of 12 to 18 points on the same caller. Second, intent classifiers trained
              on FAQ trees do not survive customer phrasing once volume climbs above 50K conversations per month.
              Third, generative replies on transactional steps create compliance exposure that the second-line risk
              team will not sign off on.
            </p>
            <p>
              We treat each of those as separate problems. Khaleeji ASR is solved with an acoustic adapter on Whisper
              fine-tuned on 1,800 hours of cleared Gulf-dialect call recordings. Intent and slot-filling run on
              customer-fine-tuned AraBERT-v2 and XLM-RoBERTa heads. Generation is constrained to paraphrase and
              explanation, never the money-moving step. Containment, CSAT and escalation reasons land in a Looker
              dashboard the operations team owns from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism — Brocode Khaleeji stack as bento */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Brocode Khaleeji stack"
            title="ASR, NLU, controlled generation, flow execution — named tool by tool."
            description="Free-form generation is a small surface — paraphrase and explanation only. Money-moving steps run on deterministic flows against pre-built core-banking connectors."
          />
          <BentoGrid className="mt-14">
            {stack.map((s, i) => (
              <BentoCell
                key={s.layer}
                span={i === 0 ? 'lg' : i === 3 ? 'lg' : 'md'}
                variant={i === 0 || i === 3 ? 'dark' : 'light'}
              >
                <p className={`text-xs font-semibold uppercase tracking-wider ${i === 0 || i === 3 ? 'text-brand-200' : 'text-brand'}`}>
                  Layer · {s.layer}
                </p>
                <h3 className={`mt-3 text-xl font-semibold ${i === 0 || i === 3 ? 'text-white' : 'text-ink-900'}`}>{s.tool}</h3>
                <p className={`mt-4 text-sm ${i === 0 || i === 3 ? 'text-white/80' : 'text-ink-600'}`}>
                  {s.metric}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Channel coverage */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Channel coverage"
            title="WhatsApp, voice, in-app, web — same Khaleeji NLU surface across all six."
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {channels.map((c, i) => (
              <li key={c.name}>
                <Reveal delay={i * 0.04}>
                  <article className="h-full rounded-2xl border border-ink-100 bg-white p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      Channel {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-ink-900">{c.name}</h3>
                    <p className="mt-3 text-sm text-ink-700">{c.detail}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Backend integration — connector grid */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Backend integration"
            title="Pre-built connectors to the systems that actually hold the answer."
            description="Temenos, Finacle, FLEXCUBE, ICS BANKS, SAP, Salesforce, ServiceNow, Magento, Shopify, Ericsson and Huawei BSS, plus the UAE PASS and Nafath identity rails."
          />
          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-7">
            {connectors.map((c) => (
              <li
                key={c}
                className="rounded-xl border border-ink-100 bg-surface-muted px-4 py-3 text-center text-sm font-medium text-ink-800"
              >
                {c}
              </li>
            ))}
          </ul>
          <Reveal className="mt-12">
            <GlassCard tone="light">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">The Deflection SLA</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink-900">
                A contractual deflection floor per channel, with a fee-back if the floor is missed.
              </h3>
              <p className="mt-4 max-w-3xl text-ink-700">
                Brocode commits to a per-channel deflection floor in the Statement of Work — sized to your top-20
                intents and your historical volume. If the floor is missed for two consecutive months at production
                volume, a fee-back applies. CSAT and escalation quality are monitored alongside containment so
                deflection is not bought at the cost of customer experience.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Cognigy, Yellow.ai, Kore.ai, Dialogflow CX / Amazon Lex — on Khaleeji production traffic."
            description="The held-out 4,200-utterance set is publicly described in the lead magnet. Numbers below are from that set on Gulf-dialect banking queries."
          />
          <div className="mt-12">
            <CompareTable competitors={competitors} rows={compareRows} brandLabel="Brocode" />
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Three objections worth airing"
            title="Questions a CX director and a CIO usually raise in the first hour."
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
      <section id="lead-magnet" className="bg-surface-muted py-22 md:py-28">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={PAGE_SLUG}
            title="Khaleeji Voice & Chat Containment Benchmark — 6 Platforms, 4,200 Utterances"
            description="A 30-page PDF, a downloadable test-utterance pack, and a Looker-embedded interactive dashboard. Six platforms scored on twelve banking and telco intents in Gulf-dialect Arabic."
            contents={[
              'Test setup: 200 calls and 1,000 chats from cleared Gulf-dialect sources',
              'Containment, AHT and CSAT per platform and per intent',
              'Khaleeji ASR WER 9.4% vs next-best 17.8% on the same set',
              'Khaleeji versus MSA performance gaps quantified per intent',
              'Genesys, NICE CXone and Avaya integration patterns',
              'Contractual deflection SLA template (the fee-back model)'
            ]}
            filePath="/downloads/khaleeji-containment-benchmark.pdf"
            ctaLabel="Email me the benchmark + the dashboard"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Frequently asked"
              title="Escalation, biometrics, residency, dialect coverage."
              description="Eight questions a Director of CX and a CIO usually share with their CISO before the procurement step."
            />
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="contact-form" className="bg-surface-muted py-22 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Top-20-intents benchmark"
              title="Send us your transcripts. We will return a benchmark report in 7 days."
              description="ASR WER, intent accuracy, slot-filling F1, and a projected deflection envelope for each of your top-20 intents. Free, no commitment, your data stays in your tenant if you require it."
            />
            <Reveal className="mt-8">
              <GlassCard tone="light" padding="md">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">What you receive</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  <li>· Per-intent WER, intent accuracy and slot F1 against your current platform</li>
                  <li>· A projected deflection envelope per channel</li>
                  <li>· The Deflection SLA template scoped to your top-20 intents</li>
                  <li>· A 45-minute review call with the deflection lead</li>
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
        primaryLabel="Get a 7-day benchmark"
        primaryHref="#contact-form"
      />
    </>
  );
}

function ChatBubble({ side, text, rtl }: { side: 'left' | 'right'; text: string; rtl?: boolean }) {
  const isLeft = side === 'left';
  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <span
        dir={rtl ? 'rtl' : undefined}
        className={`max-w-[85%] rounded-2xl px-3 py-1.5 text-sm ${
          isLeft ? 'rounded-bl-sm bg-white/10 text-white' : 'rounded-br-sm bg-[#25D366]/80 text-white'
        }`}
      >
        {text}
      </span>
    </div>
  );
}
