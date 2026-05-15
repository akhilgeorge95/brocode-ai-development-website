import type { LongPage } from '../types';

export const deepLearningSolutions: LongPage = {
  slug: 'deep-learning-solutions',
  category: 'service',
  title: 'Deep Learning Solutions',
  seoTitle: 'Enterprise Deep Learning Solutions in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions designs and operates deep learning systems for vision, language, signal, and tabular problems across banks, government bodies, and industrial clients in Abu Dhabi, Dubai, and the wider UAE.',
  eyebrow: 'Deep learning engineering',
  headline: 'Neural architectures engineered for the hardest problems in your data.',
  sub: 'When classical models stall, our deep learning teams design custom neural systems that hold up in production, under regulatory scrutiny, and across bilingual Arabic and English workloads.',
  heroImage: '/images/services/deep-learning-solutions.jpg',
  heroImageAlt: 'Layered neural network architecture diagram rendered in cool blue and teal gradients on a dark technical canvas',
  heroIcon: 'neural',
  intro:
    'Deep learning earns its place when patterns are too subtle, too large, or too multimodal for linear models to capture. Brocode Solutions builds and operates neural systems for clients across the UAE and the wider GCC, with engineering teams in Abu Dhabi who understand both the mathematics and the operational discipline required to keep these systems trustworthy. We focus on problems where the lift is measurable: catching fraud rings classical models miss, reading damaged Arabic forms, predicting equipment failure days earlier, or extracting structured intelligence from years of unstructured archives.',
  sections: [
    {
      heading: 'Architectures matched to the problem, not the trend',
      body: 'Our engineers select architectures based on the shape of your data and the latency, accuracy, and cost envelope of the deployment. Transformers for sequence and document tasks, convolutional and vision-transformer hybrids for imagery, graph neural networks for relational fraud and supply-chain problems, and recurrent or temporal-convolutional models for sensor telemetry. We avoid over-engineering: where a smaller model with disciplined feature work will do, we say so. Where genuine depth is warranted, we design the training regime, regularisation strategy, and evaluation harness so that the resulting system generalises to live traffic rather than benchmark folds.'
    },
    {
      heading: 'Training pipelines built for your reality',
      body: 'Most GCC enterprises hold sensitive data that cannot move to a public hyperscaler without explicit clearance. We design training pipelines that respect those boundaries: distributed training on your private GPU estate, federated approaches where datasets cannot be consolidated, and curated sovereign cloud environments where appropriate. Every pipeline produces reproducible artefacts — versioned datasets, checkpoints, evaluation reports, and bias assessments — so that any model decision can be traced back to the data, code, and configuration that produced it. Audit-ready by construction, not as an afterthought.'
    },
    {
      heading: 'Inference that survives production',
      body: 'A trained model is only the start. We engineer serving layers that meet your real latency and throughput needs, applying quantisation, distillation, pruning, and hardware-aware compilation where they help. Models are deployed behind feature flags, with shadow scoring, canary releases, and automated rollback if drift or accuracy regressions exceed agreed thresholds. We instrument every prediction path with structured telemetry so your operations team can answer the questions that matter when something goes wrong, not just when the dashboards look green.'
    },
    {
      heading: 'Deep learning outcomes for regulated industries',
      body: 'Recent deep learning engagements include a fraud-ring detection graph network for a UAE retail bank that surfaced organised activity classical scoring missed, an Arabic-Latin document understanding stack for a federal entity that automated decades of archived correspondence, and a vibration-based predictive maintenance model on industrial pumps that extended mean time between failures. In every case we delivered the model alongside the supporting data contracts, monitoring, fairness review, and a structured enablement programme so the in-house team could take operational ownership confidently.'
    }
  ],
  highlights: [
    { title: 'Custom neural architectures', description: 'CNNs, transformers, GNNs, and hybrid designs matched to your data and latency budget.', icon: 'neural' },
    { title: 'Private GPU training', description: 'Distributed training on your sovereign infrastructure or curated private cloud environments.', icon: 'cpu' },
    { title: 'Arabic-aware modelling', description: 'Right-to-left text, dialect variation, and Arabic-English code-switching handled natively.', icon: 'chat' },
    { title: 'Optimised inference', description: 'Quantisation, distillation, and hardware-aware compilation for cost-effective serving.', icon: 'bolt' },
    { title: 'Auditable training runs', description: 'Versioned data, code, and checkpoints so every prediction has a defensible lineage.', icon: 'shield' },
    { title: 'Drift and fairness monitoring', description: 'Live observability for accuracy, distribution shift, and disparate impact in production.', icon: 'chart' }
  ],
  whyBrocode:
    'Our deep learning practice is led by engineers who have built and operated neural systems inside UAE banks, federal entities, and listed industrial groups. We understand the assurance evidence local regulators expect, the constraints of sovereign data residency, and the realities of bilingual operations. Teams are based in Abu Dhabi, contract under UAE law, and collaborate on-site when programmes require it. We bring depth in research alongside the engineering discipline to ship.',
  ourApproach:
    'We begin with a structured discovery to confirm whether deep learning is the right tool, the data is sufficient, and the business case is sound. If it is, we deliver in two-week increments against a clear success metric, with weekly steering reviews. Training, validation, fairness assessment, and adversarial testing happen in parallel rather than at the end. Once live, models enter a defined run-phase where Brocode engineers remain accountable for SLAs while progressively transferring operational ownership, runbooks, and on-call coverage to your internal team.',
  stats: [
    { value: 35, suffix: '+', label: 'Neural systems deployed to production' },
    { value: 12, label: 'GCC regulated programmes delivered' },
    { value: 99.5, suffix: '%', label: 'Median inference availability' },
    { value: 6, label: 'Weeks median proof-of-value' }
  ],
  primaryCta: { label: 'Talk to a deep learning engineer', href: '/contact' },
  secondaryCta: { label: 'Explore our technology stack', href: '/technology/stack' },
  related: [
    { label: 'Machine Learning Development', href: '/services/machine-learning-development', description: 'Production ML across classical and modern stacks.' },
    { label: 'Computer Vision', href: '/services/computer-vision', description: 'Visual intelligence on imagery and video.' },
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Arabic and English language understanding.' },
    { label: 'AI Model Optimization', href: '/services/ai-model-optimization', description: 'Make large models fast and affordable.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Operate neural systems like products.' }
  ],
  capabilities: [
    'Transformer, CNN, RNN, and graph neural network design',
    'Distributed and mixed-precision GPU training',
    'Transfer learning and self-supervised pre-training',
    'Quantisation, distillation, and pruning for inference',
    'Adversarial robustness and uncertainty estimation',
    'Multimodal fusion across text, image, and signal'
  ],
  outcomes: [
    'Neural model live within 14 weeks of kickoff',
    'Documented training lineage for every release',
    'Latency and accuracy SLAs met in production',
    'Internal team trained to retrain and redeploy',
    'Fairness and robustness review for each model'
  ]
};
