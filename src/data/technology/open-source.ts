import type { LongPage } from '../types';

export const openSource: LongPage = {
  slug: 'open-source',
  category: 'technology',
  title: 'Open Source Contributions',
  seoTitle: 'Open Source Contributions — Arabic NLP and AI Tools | Brocode Solutions',
  seoDescription:
    'Brocode Solutions contributes to open-source projects in Arabic NLP, MLOps tooling, evaluation frameworks, and the wider AI ecosystem — sharing what we have learned building production AI in the GCC.',
  eyebrow: 'Open source and community',
  headline: 'What we have learned, given back where it helps the field.',
  sub: 'Building AI for Arabic-first markets surfaces problems the global open-source ecosystem has not yet solved. Where it is sensible, we publish what we build — datasets, tools, evaluation suites, and the small libraries that make our own work easier.',
  heroImage: '/images/technology/open-source.jpg',
  heroImageAlt: 'Abstract collage of code repositories, dataset cards, and dialect map overlays representing open contributions.',
  heroIcon: 'code',
  intro:
    'Open source is not a marketing exercise. It is how a serious engineering practice keeps itself honest — code that runs in public gets reviewed by people without commercial interest in agreeing with you. Brocode Solutions contributes selectively, focusing where our GCC client work produces something genuinely useful: Arabic-language tooling, evaluation harnesses suited to bilingual workloads, and the unglamorous utilities around MLOps and data engineering that smooth daily life for AI teams. We balance openness with the legitimate confidentiality our clients require — nothing leaves a client engagement without explicit permission.',
  sections: [
    {
      heading: 'Arabic NLP datasets and evaluation suites',
      body: 'A large share of our published work centres on Arabic natural language processing — an area where the global ecosystem still trails English by years. We have contributed cleaned, deduplicated Arabic text corpora, dialect-tagged datasets covering Gulf, Egyptian, and Levantine variants, and named-entity datasets that handle the realities of Emirati names and transliterations. Our evaluation harnesses test models against the specific failure modes we see in production: Arabic-English code-switching, right-to-left rendering bugs, and dialect mismatches. These artefacts are published with documentation cards, licences chosen for genuine reuse, and contribution guidelines that we actually answer.'
    },
    {
      heading: 'Internal tooling we have made public',
      body: 'A handful of internal libraries have grown useful enough that they belong in the open. These cover the unglamorous middle of an AI stack: lightweight evaluation runners that wrap model providers behind a consistent interface, Airflow operators for common GCC data sources, prompt-management utilities, and a small library for Hijri-Gregorian date handling that is more reliable than the alternatives we surveyed. None of it is novel research. All of it is the kind of code that takes a couple of weeks to build from scratch and that we would rather not see every team in the region build independently.'
    },
    {
      heading: 'Contributions to upstream projects',
      body: 'Beyond our own repositories, our engineers contribute patches and improvements to the projects we depend on — Hugging Face Transformers and Datasets, LangChain, LlamaIndex, MLflow, dbt, and a handful of smaller libraries. Many of our contributions sit in the documentation and tutorials, which is often where the open-source ecosystem is weakest. We track upstream contributions as a part of engineering performance reviews, on the principle that someone who has had a patch merged into a major framework has a deeper understanding of how that framework actually behaves than someone who has only read its README.'
    },
    {
      heading: 'How we balance openness with client confidentiality',
      body: 'Open-source contributions never leak client data, models, or anything resembling a proprietary process. Every artefact goes through a review that checks for training-data leakage, identifying details in test cases, and any architectural disclosure that a competitor or attacker might find useful. Where a client wants to co-publish, we work alongside their legal and communications teams to do it properly — credited, licensed correctly, and with a release that survives later scrutiny. Where they do not, the work stays private and we look for the same underlying problem in a different engagement before publishing.'
    }
  ],
  highlights: [
    { title: 'Arabic dialect datasets', description: 'Gulf, Egyptian, and Levantine variant coverage with proper documentation cards.', icon: 'chat' },
    { title: 'Bilingual evaluation harnesses', description: 'Tests for code-switching, right-to-left rendering, and dialect mismatches.', icon: 'doc' },
    { title: 'MLOps utilities', description: 'Airflow operators, evaluation runners, and prompt-management tooling.', icon: 'cogs' },
    { title: 'Hijri date library', description: 'A small but reliable library for calendar handling in regional applications.', icon: 'code' },
    { title: 'Upstream patches', description: 'Contributions to Transformers, LangChain, MLflow, dbt, and similar projects.', icon: 'workflow' },
    { title: 'Co-publication support', description: 'We help clients release joint work properly when the project allows it.', icon: 'link' }
  ],
  whyBrocode:
    'Our engineers contribute under their own names, on engineering time, with their work reviewed publicly. That visibility forces a level of craft that is hard to fake. It also means our hiring bar is testable — we can point to commits rather than CVs — and our clients benefit from a team that has its work scrutinised by the wider field, not just by an internal QA function.',
  ourApproach:
    'We maintain an internal triage of work that could plausibly be opened: every quarter, a small committee reviews candidate libraries, datasets, and patches against three tests — is it genuinely useful, is it client-safe, and will we still maintain it in eighteen months. Items that pass all three are scheduled for release with documentation, tests, and a maintenance owner. The committee also reviews retired projects honestly — if something is no longer maintained, we mark it so and signpost alternatives rather than letting orphaned repositories accumulate.',
  stats: [
    { value: 35, suffix: '+', label: 'Public repositories maintained' },
    { value: 12, label: 'Arabic NLP datasets released' },
    { value: 200, suffix: '+', label: 'Upstream patches merged' },
    { value: 4, label: 'Quarterly open-source review cycles' }
  ],
  primaryCta: { label: 'Talk to our engineering team', href: '/contact' },
  secondaryCta: { label: 'See our stack', href: '/technology/stack' },
  related: [
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Where most of our Arabic open-source work originates.' },
    { label: 'LLM Fine-Tuning', href: '/services/llm-fine-tuning', description: 'Adapting open-weight models for Arabic and bilingual workloads.' },
    { label: 'Speech Recognition & Voice AI', href: '/services/speech-recognition-voice-ai', description: 'Voice work where dialect coverage matters.' },
    { label: 'Quality Assurance', href: '/technology/quality-assurance', description: 'The evaluation discipline behind our open evaluation suites.' },
    { label: 'AI Platform Partners', href: '/technology/ai-platform-partners', description: 'The model providers our open tooling integrates with.' }
  ],
  capabilities: [
    'Arabic and bilingual dataset curation and release',
    'Model evaluation harness design and maintenance',
    'Airflow operators and pipeline utilities',
    'Prompt management and experiment tooling',
    'Upstream contributions to major AI frameworks',
    'Co-publication support for client research outputs'
  ],
  outcomes: [
    'A reusable library of Arabic NLP artefacts for the region',
    'Engineering visibility into commits and patches under real names',
    'Tooling clients can keep using even after engagements end',
    'Maintained repositories with clear owners and roadmaps',
    'Faster onboarding through shared internal-to-public utilities'
  ]
};
