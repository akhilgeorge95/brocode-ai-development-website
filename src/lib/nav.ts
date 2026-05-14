export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { heading: string; links: NavLink[] };
export type NavSection = { label: string; href?: string; groups: NavGroup[] };

export const SERVICES: NavLink[] = [
  { label: 'Machine Learning Development', href: '/services/machine-learning-development', description: 'Custom ML models built for production.' },
  { label: 'Deep Learning Solutions', href: '/services/deep-learning-solutions', description: 'Neural architectures for complex problems.' },
  { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Arabic and English language understanding.' },
  { label: 'Computer Vision', href: '/services/computer-vision', description: 'Visual intelligence at scale.' },
  { label: 'Generative AI Development', href: '/services/generative-ai-development', description: 'Production GenAI systems.' },
  { label: 'LLM Fine-Tuning', href: '/services/llm-fine-tuning', description: 'Domain-adapted language models.' },
  { label: 'Conversational AI & Chatbots', href: '/services/conversational-ai-chatbots', description: 'Bilingual virtual assistants.' },
  { label: 'AI Agents & Agentic Workflows', href: '/services/ai-agents-agentic-workflows', description: 'Autonomous task execution.' },
  { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Forecasting and decision support.' },
  { label: 'Recommendation Systems', href: '/services/recommendation-systems', description: 'Personalisation at scale.' },
  { label: 'Speech Recognition & Voice AI', href: '/services/speech-recognition-voice-ai', description: 'Arabic dialect-aware speech.' },
  { label: 'Document Intelligence', href: '/services/document-intelligence', description: 'Arabic OCR and extraction.' },
  { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Reliable model operations.' },
  { label: 'Self-Hosted LLM Infrastructure', href: '/services/self-hosted-llm-infrastructure', description: 'Private GenAI deployments.' },
  { label: 'AI Consulting & Strategy', href: '/services/ai-consulting-strategy', description: 'Roadmaps and assessments.' },
  { label: 'AI Integration Services', href: '/services/ai-integration-services', description: 'Embed AI into existing systems.' },
  { label: 'Intelligent Process Automation', href: '/services/intelligent-process-automation', description: 'RPA enhanced with AI.' },
  { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Pipelines that feed models.' },
  { label: 'AI Model Optimization', href: '/services/ai-model-optimization', description: 'Faster, smaller, cheaper inference.' },
  { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Compliance, safety, fairness.' }
];

export const INDUSTRIES: NavLink[] = [
  { label: 'Government & Public Sector', href: '/industries/government-public-sector' },
  { label: 'Banking & Financial Services', href: '/industries/banking-financial-services' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Retail & E-commerce', href: '/industries/retail-ecommerce' },
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Real Estate & PropTech', href: '/industries/real-estate-proptech' },
  { label: 'Energy & Utilities', href: '/industries/energy-utilities' },
  { label: 'Logistics & Supply Chain', href: '/industries/logistics-supply-chain' },
  { label: 'Education', href: '/industries/education' },
  { label: 'Hospitality & Tourism', href: '/industries/hospitality-tourism' }
];

export const TECHNOLOGY: NavLink[] = [
  { label: 'Our Technology Stack', href: '/technology/stack' },
  { label: 'AI Platform Partners', href: '/technology/ai-platform-partners' },
  { label: 'Cloud & Infrastructure Partners', href: '/technology/cloud-infrastructure-partners' },
  { label: 'Open Source Contributions', href: '/technology/open-source' },
  { label: 'Development Methodology', href: '/technology/methodology' },
  { label: 'Quality Assurance for AI', href: '/technology/quality-assurance' }
];

export const INSIGHTS: NavLink[] = [
  { label: 'Insights Hub', href: '/insights' },
  { label: 'Whitepapers', href: '/insights/whitepapers' },
  { label: 'Guides & Tutorials', href: '/insights/guides' },
  { label: 'AI Glossary', href: '/insights/glossary' },
  { label: 'FAQs', href: '/insights/faqs' }
];

export const ABOUT: NavLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Why Brocode AI', href: '/why-brocode' },
  { label: 'Careers', href: '/careers' },
  { label: 'Security & Compliance', href: '/security-compliance' }
];

export const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Services',
    groups: [
      {
        heading: 'Core AI Engineering',
        links: SERVICES.slice(0, 7)
      },
      {
        heading: 'Applied & Agentic',
        links: SERVICES.slice(7, 14)
      },
      {
        heading: 'Strategy & Platform',
        links: SERVICES.slice(14, 20)
      }
    ]
  },
  {
    label: 'Industries',
    groups: [
      { heading: 'Public sector & finance', links: INDUSTRIES.slice(0, 3) },
      { heading: 'Commerce & industry', links: INDUSTRIES.slice(3, 7) },
      { heading: 'Services', links: INDUSTRIES.slice(7, 10) }
    ]
  },
  {
    label: 'Technology',
    groups: [{ heading: 'How we build', links: TECHNOLOGY }]
  },
  {
    label: 'Insights',
    groups: [{ heading: 'Knowledge hub', links: INSIGHTS }]
  },
  {
    label: 'About',
    groups: [{ heading: 'Our company', links: ABOUT }]
  }
];
