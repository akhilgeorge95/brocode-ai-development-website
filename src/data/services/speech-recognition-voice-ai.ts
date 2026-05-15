import type { LongPage } from '../types';

export const speechRecognitionVoiceAi: LongPage = {
  slug: 'speech-recognition-voice-ai',
  category: 'service',
  title: 'Speech Recognition & Voice AI',
  seoTitle: 'Arabic Speech Recognition & Voice AI Services in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions builds Arabic and bilingual speech recognition, voice biometrics, and conversational voice systems for banks, government, and contact centres in Abu Dhabi, Dubai, and across the wider UAE and GCC.',
  eyebrow: 'Arabic and bilingual voice systems',
  headline: 'Voice AI that understands Gulf Arabic, MSA, and the way people actually speak.',
  sub: 'We engineer speech recognition, voice biometrics, and conversational voice systems tuned for Khaleeji and Levantine dialects, code-switching, and the realities of regional contact centres.',
  heroImage: '/images/services/speech-recognition-voice-ai.jpg',
  heroImageAlt: 'Contact centre agent wearing a headset reviewing a bilingual call transcript on a dual-monitor workstation',
  heroIcon: 'mic',
  intro:
    'Most off-the-shelf speech models trip over the realities of the GCC: Khaleeji and Levantine dialects, fluent code-switching between Arabic and English mid-sentence, Emirati and Saudi place names, and Arabic numerals read in English. Brocode Solutions builds and tunes voice systems that handle this from the start — speech-to-text, text-to-speech, voice biometrics, and conversational voice agents — for banks, government bodies, healthcare providers, and contact centres across the region.',
  sections: [
    {
      heading: 'Recognition tuned for Gulf Arabic dialects',
      body: 'A model trained mainly on Modern Standard Arabic will struggle the moment a customer says something natural like a Khaleeji greeting, a code-switched product name, or an Emirati landmark. We fine-tune open-source acoustic models on dialect-specific audio collected and labelled under our supervision, covering Gulf, Levantine, and Egyptian Arabic alongside English. The output is a speech-to-text system that handles Arabic-English code-switching within a single utterance, transcribes Arabic numerals and English digits consistently, and resolves regional named entities — bank brands, government departments, neighbourhoods — that generic models routinely garble.'
    },
    {
      heading: 'Voice systems built for the contact centre floor',
      body: 'Contact centres in the GCC operate bilingually, with agents switching languages by call and customers switching mid-sentence. Our voice systems plug into Genesys, Avaya, Cisco, Five9, and Amazon Connect, providing real-time transcription, agent assist, sentiment tracking, and quality monitoring across Arabic and English calls. Supervisors get bilingual searchable transcripts, automated call summaries written in the language of the call, and dashboards that flag complaints, regulatory triggers, and coaching opportunities — without forcing agents to change how they handle customers.'
    },
    {
      heading: 'Voice biometrics and conversational agents',
      body: 'Where identity matters, we deploy voice biometrics for passive caller verification, cutting average handling time on authentication and reducing fraud exposure. For self-service, we build conversational voice agents that hold natural dialogue in Arabic and English, integrate with core banking, ERP, or government service back-ends, and escalate to a human agent with full context preserved. Every voice agent ships with bias review, fairness testing across genders and dialects, and a documented escalation policy so customers are never trapped in a loop.'
    },
    {
      heading: 'Deployable on-premise or in your tenant',
      body: 'Voice data is sensitive: call recordings often contain personal data, financial information, and protected health information. We can deploy the entire stack — acoustic models, language models, biometric engines, and agent-assist services — inside your VPC, on-premise, or within an ADGM- or DIFC-resident tenant, with no audio leaving your boundary. Where you prefer managed services, we integrate with hyperscaler offerings under the appropriate residency commitments and document exactly which data flows where for your compliance teams.'
    }
  ],
  highlights: [
    { title: 'Gulf Arabic and MSA fluent', description: 'Models tuned for Khaleeji, Levantine, and Egyptian Arabic alongside English.', icon: 'mic' },
    { title: 'Code-switching by default', description: 'Handles Arabic-English mixing within a single utterance without breaking.', icon: 'chat' },
    { title: 'Real-time agent assist', description: 'Live transcription, prompts, and summaries while the call is still in progress.', icon: 'bolt' },
    { title: 'Voice biometrics', description: 'Passive verification that reduces handling time and fraud exposure.', icon: 'shield' },
    { title: 'Contact-centre integrations', description: 'Pre-built connectors for Genesys, Avaya, Cisco, Five9, and Amazon Connect.', icon: 'link' },
    { title: 'Sovereign deployment', description: 'On-premise or tenant-resident options so audio never leaves your boundary.', icon: 'cloud' }
  ],
  whyBrocode:
    'We have built Arabic speech systems for UAE banks, government contact centres, and regional healthcare providers, with a labelled audio corpus covering Khaleeji, Levantine, and Egyptian dialects. Our engineers know how to evaluate word error rate on real customer calls, not curated benchmarks, and how to keep performance steady as accents and topics drift. Teams are Abu Dhabi based and contract under UAE law.',
  ourApproach:
    'We start with an audit of your call audio, agent workflows, and existing transcription quality if any. A pilot model is trained on a representative slice of your traffic and benchmarked against your current solution on metrics that matter — word error rate, named-entity accuracy, code-switching handling. Build phases add agent-assist, summarisation, and biometrics in two-week sprints. Before live deployment, we run a shadow period alongside your existing flow so supervisors can compare outputs side by side. Post-launch, we retrain on a defined cadence as new data accumulates.',
  stats: [
    { value: 92, suffix: '%', label: 'Word accuracy on Gulf Arabic calls' },
    { value: 30, suffix: '+', label: 'Hours of labelled dialect audio per project' },
    { value: 50, suffix: '%', label: 'Average reduction in after-call work' },
    { value: 8, label: 'Weeks median pilot duration' }
  ],
  primaryCta: { label: 'Talk to a voice AI engineer', href: '/contact' },
  secondaryCta: { label: 'See our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Arabic and English text understanding behind voice transcripts.' },
    { label: 'Conversational AI & Chatbots', href: '/services/conversational-ai-chatbots', description: 'Bilingual chat agents that share intent libraries with voice.' },
    { label: 'Deep Learning Solutions', href: '/services/deep-learning-solutions', description: 'Acoustic and language model architectures.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Voice biometrics and contact-centre automation.' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Citizen voice services in Arabic and English.' }
  ],
  capabilities: [
    'Arabic and bilingual speech-to-text',
    'Text-to-speech with regional voices',
    'Voice biometrics and passive verification',
    'Real-time agent assist and summarisation',
    'Conversational voice agent design',
    'Sentiment, intent, and compliance analytics'
  ],
  outcomes: [
    'Lower word error rate on real customer audio',
    'Reduced after-call work for agents',
    'Bilingual searchable call archive',
    'Faster, fraud-resistant caller authentication',
    'Compliance and coaching insight from every call'
  ]
};
