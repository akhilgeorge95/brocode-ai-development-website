import type { LongPage } from '../types';

export const conversationalAiChatbots: LongPage = {
  slug: 'conversational-ai-chatbots',
  category: 'service',
  title: 'Conversational AI & Chatbots',
  seoTitle: 'Conversational AI and Chatbot Development in the UAE',
  seoDescription:
    'Brocode Solutions designs and operates bilingual Arabic and English conversational AI assistants and chatbots for banks, government services, healthcare, retail, and utilities in the UAE and GCC.',
  eyebrow: 'Conversational AI',
  headline: 'Bilingual virtual agents that handle real customer conversations, not scripted demos.',
  sub: 'We build conversational assistants that understand Gulf-dialect Arabic, hold context across channels, and escalate gracefully when a human is the right answer.',
  heroImage: '/images/services/conversational-ai-chatbots.jpg',
  heroImageAlt: 'Stylised conversation interface showing a bilingual exchange between a customer and a virtual assistant with context cards and escalation indicators',
  heroIcon: 'chat',
  intro:
    'Conversational AI is a customer-facing surface, and the bar is high. A virtual agent that mishandles Gulf-dialect Arabic, loses context between turns, or fails to escalate at the right moment will erode trust faster than it builds efficiency. Brocode Solutions designs conversational systems with that exposure in mind, from our Abu Dhabi base, for banks, government services, healthcare providers, retailers, and utilities across the UAE and the GCC. We combine bilingual NLU, retrieval-grounded generation, and disciplined integration with your core systems so that the assistant actually resolves tasks rather than performing them.',
  sections: [
    {
      heading: 'Designed around the customer journey, not the bot',
      body: 'We start from the journeys your customers actually take: opening an account, raising a complaint, booking an appointment, requesting a service, checking a claim status. For each journey we map the intents, the data the assistant needs from your core systems, and the points at which a human handover is the right answer. The conversational design is reviewed by service-design and operations teams alongside engineering, so that the resulting flows match the way your business actually operates rather than a generic template. The bot is in service of the journey, not the other way around.'
    },
    {
      heading: 'Bilingual understanding that respects dialect',
      body: 'Our conversational stack handles Modern Standard Arabic, Gulf-dialect Arabic, English, and the code-switching customers actually use in WhatsApp, web chat, and voice. We fine-tune intent classification and entity extraction on traffic drawn from your channels, and we operate continuous evaluation against held-out conversations so that quality is measured rather than assumed. Where generative responses are used, they are grounded in your policies and knowledge bases with citation back to the source. The assistant sounds like your brand in both languages, because the tone and terminology are tuned, not borrowed.'
    },
    {
      heading: 'Integrated with the systems that hold the answers',
      body: 'A virtual agent that can only quote FAQs is a search box in disguise. We integrate conversational systems with your core banking, ERP, case management, scheduling, and identity platforms so that the assistant can actually complete transactions: update a profile, raise a service request, retrieve a balance, schedule a visit, verify a customer. Integration is engineered with the same security discipline as any other channel — strong authentication, audit logging, data-residency controls, and consent capture. The assistant earns its keep by reducing handle time and shifting volume away from agents, not by deflecting it.'
    },
    {
      heading: 'Conversational outcomes shipped in the region',
      body: 'Recent engagements include a bilingual digital assistant for a UAE retail bank that handles servicing requests on web and WhatsApp with measurable container-rate improvements, a citizen-services assistant for a federal entity supporting Arabic and English enquiries on residency processes, and a clinical-administration assistant for a healthcare group that automates appointment management. Each programme shipped with monitoring of intent accuracy, container rate, escalation quality, and customer satisfaction, plus the enablement to keep the conversational design improving after handover.'
    }
  ],
  highlights: [
    { title: 'Gulf-dialect Arabic', description: 'Native handling of dialect, code-switching, and transliteration on every channel.', icon: 'chat' },
    { title: 'Omnichannel deployment', description: 'Web chat, WhatsApp, mobile app, voice, and contact-centre desktops covered consistently.', icon: 'link' },
    { title: 'Grounded generation', description: 'Generative responses tied to your policies and knowledge with citation back to source.', icon: 'compass' },
    { title: 'Core-system integration', description: 'Real transactions completed against banking, ERP, case, and identity platforms.', icon: 'workflow' },
    { title: 'Graceful escalation', description: 'Context-rich handover to human agents when complexity, risk, or sentiment demand it.', icon: 'route' },
    { title: 'Conversation analytics', description: 'Intent accuracy, container rate, deflection, and CSAT visible to the operations team.', icon: 'chart' }
  ],
  whyBrocode:
    'We have shipped bilingual conversational systems for UAE banks, federal services, and regional groups, and we know what separates a useful assistant from a frustrating one. Our Abu Dhabi engineers combine Arabic linguistics, conversational design, and core-system integration experience. We contract under UAE law, work on-site with your service-operations and IT teams, and stay accountable for the conversation-quality metrics after launch — not just the build milestones leading up to it.',
  ourApproach:
    'Each programme opens with a journey-mapping sprint that defines the use cases, integration points, and success metrics with your service-operations sponsor. Build proceeds in two-week increments, with continuous evaluation on real conversation samples and weekly steering reviews. Hardening covers security, data residency, accessibility, and adversarial testing in both languages. Post launch, the system enters a defined run-phase with conversation-quality SLAs, structured tuning cycles, and progressive transfer of design, content, and operations to your in-house conversational team.',
  stats: [
    { value: 22, suffix: '+', label: 'Conversational systems shipped' },
    { value: 11, label: 'GCC client programmes operated' },
    { value: 99.5, suffix: '%', label: 'Median platform availability' },
    { value: 45, suffix: '%', label: 'Average call-deflection rate achieved' }
  ],
  primaryCta: { label: 'Talk to a conversational AI lead', href: '/contact' },
  secondaryCta: { label: 'Explore voice and speech AI', href: '/services/speech-recognition-voice-ai' },
  related: [
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Bilingual language intelligence foundations.' },
    { label: 'Speech Recognition & Voice AI', href: '/services/speech-recognition-voice-ai', description: 'Arabic and English voice channels.' },
    { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Grounded generative assistants for the enterprise.' },
    { label: 'AI Integration Services', href: '/services/ai-integration-services', description: 'Connect AI safely into your core systems.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Customer servicing and digital banking.' }
  ],
  capabilities: [
    'Intent and entity modelling for Arabic and English',
    'Dialogue management and context tracking across turns',
    'Retrieval-grounded generative response composition',
    'Omnichannel deployment across web, WhatsApp, and voice',
    'Authentication, consent capture, and audit logging',
    'Live analytics on container rate, deflection, and CSAT'
  ],
  outcomes: [
    'Assistant live across primary channels within 12 weeks',
    'Measured deflection and handle-time improvements',
    'Bilingual conversation quality tracked on real traffic',
    'Graceful escalation maintaining customer satisfaction',
    'Internal team able to manage flows and content'
  ]
};
