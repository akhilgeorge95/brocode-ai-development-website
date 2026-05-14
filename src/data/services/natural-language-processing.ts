import type { LongPage } from '../types';

export const naturalLanguageProcessing: LongPage = {
  slug: 'natural-language-processing',
  category: 'service',
  title: 'Natural Language Processing',
  seoTitle: 'Arabic and English NLP Services in the UAE',
  seoDescription:
    'Brocode Solutions builds bilingual Arabic and English natural language processing systems for banks, government entities, healthcare providers, and retailers across the UAE and GCC.',
  eyebrow: 'Language intelligence',
  headline: 'Bilingual NLP systems that understand Arabic, English, and the way your customers actually write.',
  sub: 'We design language models, classifiers, and information extraction pipelines that work on real GCC data — dialects, code-switching, transliterated names, and the documents your business actually receives.',
  heroImage: '/images/services/natural-language-processing.jpg',
  heroImageAlt: 'Stylised visualisation of Arabic and Latin script characters flowing through a language model with highlighted tokens',
  heroIcon: 'chat',
  intro:
    'Language is where most enterprise AI programmes either prove their worth or stall. Customer messages arrive in Modern Standard Arabic, Gulf dialect, English, transliterated names, and a mixture of all four within a single sentence. Documents are scanned, signed, and stamped. Brocode Solutions builds NLP systems engineered for that reality, drawing on linguists, ML engineers, and domain specialists based in Abu Dhabi. We deliver classification, extraction, search, and generation capabilities that hold up across the bilingual operating environment of the UAE and the wider GCC.',
  sections: [
    {
      heading: 'Arabic-first, not Arabic-as-an-afterthought',
      body: 'Most off-the-shelf NLP tooling is trained predominantly on English text and degrades sharply on Arabic morphology, diacritics, and dialect. Our teams maintain a curated Arabic corpus drawn from regional regulatory filings, customer communications, and public-domain sources, and we fine-tune base models against it for each programme. We handle Gulf dialect, Egyptian and Levantine variants where relevant, transliterated names across Arabic and Latin script, and the right-to-left rendering and tokenisation issues that catch out generic pipelines. The result is language understanding that matches the linguistic reality of your customers.'
    },
    {
      heading: 'Information extraction from messy real-world documents',
      body: 'GCC enterprises hold vast amounts of value locked in PDFs, scanned forms, contracts, emails, and chat logs. We build extraction pipelines that combine layout-aware document models, OCR tuned for Arabic and English script, named entity recognition for regional names and addresses, and validation layers that catch low-confidence outputs before they reach downstream systems. Each pipeline emits structured data with confidence scores and an audit trail, ready to flow into core banking, ERP, or case management systems without manual intervention on the high-confidence majority of cases.'
    },
    {
      heading: 'Search, classification, and routing at enterprise scale',
      body: 'We design semantic search, intent classification, and routing systems that move beyond keyword matching. Vector indices over your knowledge bases, hybrid retrieval combining lexical and semantic signals, and classifiers fine-tuned on your historical traffic let customers, agents, and analysts find the right answer in seconds. We integrate these systems with your existing case management, contact centre, and knowledge platforms, and we instrument them so that retrieval quality, click-through, and resolution rate are visible to the teams who own the customer experience day to day.'
    },
    {
      heading: 'Language outcomes delivered for GCC clients',
      body: 'Recent NLP engagements include a bilingual complaint classification and routing engine for a UAE bank that reduced average handle time materially, an Arabic clinical note de-identification pipeline for a healthcare group that unlocked safe analytics, and an extraction stack for a federal procurement function that automated structured capture from supplier documents. In each case we delivered the language pipeline alongside data contracts, monitoring, human-in-the-loop review interfaces, and the enablement to keep the system improving after handover.'
    }
  ],
  highlights: [
    { title: 'Arabic and English bilingual', description: 'Modern Standard Arabic, Gulf dialect, English, and code-switching handled natively in a single pipeline.', icon: 'chat' },
    { title: 'Document intelligence ready', description: 'Layout-aware extraction across scanned forms, contracts, and bilingual correspondence.', icon: 'doc' },
    { title: 'Semantic and hybrid search', description: 'Vector and lexical retrieval over your knowledge bases, emails, and case histories.', icon: 'compass' },
    { title: 'Human-in-the-loop by design', description: 'Confidence thresholds, review queues, and feedback capture wired into every workflow.', icon: 'route' },
    { title: 'Sovereign deployment', description: 'On-premise, private cloud, or UAE-hosted services that respect data residency rules.', icon: 'shield' },
    { title: 'Observability for language', description: 'Drift detection on vocabulary, intent mix, and extraction quality, not just system metrics.', icon: 'chart' }
  ],
  whyBrocode:
    'Few teams in the region combine working Arabic linguistics with production NLP engineering. Brocode Solutions does, and we have shipped bilingual systems for UAE banks, federal entities, and regional healthcare and retail groups. Our engineers contract under UAE law, work on-site with your teams when needed, and understand the regulatory expectations that apply when language models touch customer data. We bring depth in Arabic NLP without compromising on the engineering discipline a production deployment demands.',
  ourApproach:
    'Each programme opens with a discovery sprint that profiles your language data, defines the target outcomes, and agrees the success metrics with sponsors. We deliver iteratively in two-week increments, with weekly steering reviews and continuous evaluation against a held-out test set drawn from your real traffic. Hardening covers bias review, adversarial testing on dialect and code-switching, and integration with your monitoring stack. Post go-live, we operate the system under an agreed SLA while progressively transferring ownership, runbooks, and retraining capability to your internal team.',
  stats: [
    { value: 25, suffix: '+', label: 'Bilingual NLP systems shipped' },
    { value: 9, label: 'GCC clients in regulated sectors' },
    { value: 99.5, suffix: '%', label: 'Median pipeline availability' },
    { value: 40, suffix: '%', label: 'Average handle-time reduction' }
  ],
  primaryCta: { label: 'Talk to an NLP engineer', href: '/contact' },
  secondaryCta: { label: 'See our document intelligence work', href: '/services/document-intelligence' },
  related: [
    { label: 'Document Intelligence', href: '/services/document-intelligence', description: 'Extract structure from scanned forms and contracts.' },
    { label: 'Conversational AI & Chatbots', href: '/services/conversational-ai-chatbots', description: 'Bilingual virtual agents for customer operations.' },
    { label: 'LLM Fine-Tuning', href: '/services/llm-fine-tuning', description: 'Specialise base models for your domain and dialect.' },
    { label: 'Speech Recognition & Voice AI', href: '/services/speech-recognition-voice-ai', description: 'Arabic and English speech-to-text and voice agents.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'Customer language at the heart of the bank.' }
  ],
  capabilities: [
    'Arabic and English tokenisation and morphology',
    'Named entity recognition for regional names and addresses',
    'Intent classification and ticket routing',
    'Semantic search and hybrid retrieval',
    'Summarisation and structured information extraction',
    'Sentiment, topic, and language detection at scale'
  ],
  outcomes: [
    'Bilingual NLP pipeline live within 10 weeks',
    'Measurable reduction in manual triage workload',
    'Audit trail and confidence scores on every output',
    'Improved first-contact resolution and handle time',
    'Internal team able to retrain and tune in-house'
  ]
};
