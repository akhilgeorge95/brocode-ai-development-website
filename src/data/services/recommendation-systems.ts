import type { LongPage } from '../types';

export const recommendationSystems: LongPage = {
  slug: 'recommendation-systems',
  category: 'service',
  title: 'Recommendation Systems',
  seoTitle: 'Recommendation Systems & Personalisation in the UAE',
  seoDescription:
    'Brocode Solutions builds personalisation and recommendation engines for retailers, banks, media operators, and digital services across the UAE and GCC.',
  eyebrow: 'Personalisation engineering',
  headline: 'Recommendation engines that lift revenue without alienating customers.',
  sub: 'We design personalisation systems that respect privacy, work in Arabic and English, and produce recommendations your merchandisers, bankers, and marketers can defend.',
  heroImage: '/images/services/recommendation-systems.jpg',
  heroImageAlt: 'Customer browsing a personalised product feed on a mobile device with related items displayed alongside',
  heroIcon: 'route',
  intro:
    'Personalisation is one of the highest-return uses of machine learning in any consumer-facing business, but only when the recommendations are relevant, timely, and explainable. Brocode Solutions builds recommendation engines for retailers, banks, telcos, media operators, and digital services across the GCC — engineered for bilingual catalogues, privacy obligations, and the seasonal rhythms of the region.',
  sections: [
    {
      heading: 'Recommendations for bilingual, regional catalogues',
      body: 'Catalogues in the UAE rarely sit cleanly in one language. Product names mix Arabic and English, brand spellings vary, and customer reviews land in both languages along with Romanised Arabic. Our recommendation pipelines treat this as the default rather than an edge case. We build unified product representations that combine Arabic and English text, image embeddings, attribute metadata, and behavioural signals, so a customer browsing in Arabic gets the same quality of recommendation as one browsing in English, and the same item is consistently understood across both surfaces.'
    },
    {
      heading: 'A mix of collaborative, content, and contextual signals',
      body: 'We rarely rely on a single approach. Production systems combine collaborative filtering for breadth, content-based models for cold-start and long-tail coverage, sequence models for session intent, and contextual bandits for exploration. The blend is chosen to match the catalogue, the customer base, and the surface — homepage, search, cart, app push, or email. We pay particular attention to cold-start: new customers, new products, and new categories all get sensible recommendations from day one rather than waiting weeks for behavioural data to accumulate.'
    },
    {
      heading: 'Privacy, consent, and regional regulation',
      body: 'UAE and GCC data protection regimes are tightening, and customer expectations around privacy continue to rise. We build recommendation systems that operate on minimal personal data, honour consent flags by default, and keep audit trails of which signals were used for which recommendation. Where required, we deploy models inside your tenant with no behavioural data leaving sovereign boundaries. Sensitive attributes — nationality, religion, health — are excluded from features unless there is a clear, lawful, and documented basis for inclusion.'
    },
    {
      heading: 'Measured against business outcomes, not click rates',
      body: 'Click-through rates are easy to optimise and easy to game. We instrument recommendation systems against the metrics that actually matter to the business — incremental revenue, basket size, repeat purchase rate, retention, or product-level margin — using proper A/B testing with statistical guardrails. Merchandisers, bankers, and content editors get tooling to inspect why a recommendation was made, override it when needed, and pin or suppress specific items for commercial or compliance reasons.'
    }
  ],
  highlights: [
    { title: 'Bilingual product understanding', description: 'Unified Arabic and English representations across catalogue and behaviour.', icon: 'chat' },
    { title: 'Cold-start handled by design', description: 'New users, new products, and new categories get sensible recommendations from day one.', icon: 'bolt' },
    { title: 'Contextual bandits for exploration', description: 'Balanced exploration so the system keeps learning rather than over-fitting to history.', icon: 'brain' },
    { title: 'Merchandiser controls', description: 'Pin, suppress, and explain recommendations through an operator console.', icon: 'cogs' },
    { title: 'Privacy-first architecture', description: 'Consent-aware features, minimal personal data, and sovereign deployment options.', icon: 'shield' },
    { title: 'Outcome-based experimentation', description: 'A/B testing tied to revenue, retention, and margin rather than vanity clicks.', icon: 'chart' }
  ],
  whyBrocode:
    'We have built recommendation systems for regional retailers, banks cross-selling to retail customers, and media operators across the GCC. Our engineers understand the catalogue messiness, the bilingual reality, and the privacy expectations specific to the region. Teams are Abu Dhabi based, contract under UAE law, and work alongside your merchandising, marketing, and engineering functions rather than handing over a black box.',
  ourApproach:
    'We begin with a discovery sprint that maps catalogue structure, behavioural data sources, current personalisation surfaces, and the commercial metrics that matter. A baseline model goes live within the first phase to set a measurement floor. From there, we iterate through richer architectures — sequence models, multi-objective ranking, contextual bandits — guided by experiment results rather than appetite. Throughout, we provide merchandiser tooling, monitoring dashboards, and clear documentation so your teams can operate, audit, and evolve the system after handover.',
  stats: [
    { value: 18, suffix: '%', label: 'Average lift in conversion observed' },
    { value: 25, suffix: '+', label: 'Personalisation systems shipped' },
    { value: 2, suffix: 'x', label: 'Typical uplift in items per session' },
    { value: 10, label: 'Weeks median to first A/B test' }
  ],
  primaryCta: { label: 'Talk to a personalisation lead', href: '/contact' },
  secondaryCta: { label: 'See our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Machine Learning Development', href: '/services/machine-learning-development', description: 'The engineering backbone behind ranking models.' },
    { label: 'Deep Learning Solutions', href: '/services/deep-learning-solutions', description: 'Sequence and embedding models for richer signals.' },
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Bilingual understanding of catalogue and reviews.' },
    { label: 'Retail & E-commerce', href: '/industries/retail-ecommerce', description: 'Personalisation across browse, search, and email.' },
    { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Clean behavioural data is the foundation.' }
  ],
  capabilities: [
    'Collaborative filtering and matrix factorisation',
    'Content-based and embedding models',
    'Sequence and session-based ranking',
    'Contextual bandits and reinforcement learning',
    'Multi-objective ranking with business rules',
    'Real-time feature stores and serving'
  ],
  outcomes: [
    'Measurable lift in revenue per session through controlled A/B tests',
    'Bilingual recommendations across web, app, and email surfaces',
    'Operator console for merchandisers and content editors',
    'Consent-aware feature pipelines and audit trails',
    'Internal team trained to run and extend the platform'
  ]
};
