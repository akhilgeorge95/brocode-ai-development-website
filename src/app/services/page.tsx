import type { Metadata } from 'next';
import { SubHero } from '@/components/SubHero';
import { ServiceCard } from '@/components/ServiceCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABlock } from '@/components/CTABlock';
import { SERVICE_PAGES } from '@/data';
import { ICON_MAP } from '@/components/icons';

export const metadata: Metadata = {
  title: 'AI Services in Dubai, Abu Dhabi & the UAE — 20 Service Lines | Brocode',
  description:
    'Twenty enterprise AI services from Brocode Solutions delivered across Abu Dhabi, Dubai and the wider UAE/GCC — machine learning, generative AI, computer vision, Arabic NLP, MLOps, governance, and more.',
  alternates: { canonical: 'https://www.brocode.ae/services' }
};

const groups = [
  { heading: 'Core AI engineering', slugs: ['machine-learning-development', 'deep-learning-solutions', 'natural-language-processing', 'computer-vision', 'generative-ai-development', 'llm-fine-tuning', 'conversational-ai-chatbots'] },
  { heading: 'Applied & agentic systems', slugs: ['ai-agents-agentic-workflows', 'predictive-analytics', 'recommendation-systems', 'speech-recognition-voice-ai', 'document-intelligence', 'mlops-ai-infrastructure', 'self-hosted-llm-infrastructure'] },
  { heading: 'Strategy & platform', slugs: ['ai-consulting-strategy', 'ai-integration-services', 'intelligent-process-automation', 'data-engineering-for-ai', 'ai-model-optimization', 'responsible-ai-governance'] }
];

export default function ServicesIndexPage() {
  return (
    <>
      <SubHero
        eyebrow="Services"
        headline="Twenty enterprise AI services. One accountable engineering team."
        sub="From applied research to production MLOps, every layer of an enterprise AI programme — delivered by senior practitioners based in the UAE."
        image="/images/hero/services-poster.jpg"
        imageAlt="Engineers reviewing AI architecture diagrams on a large display"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {groups.map((g) => (
        <section key={g.heading} className="bg-white py-20 even:bg-surface-muted">
          <div className="container-site">
            <SectionHeading eyebrow={g.heading} title={`${g.heading} — what we deliver.`} />
            <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {g.slugs.map((slug, i) => {
                const page = SERVICE_PAGES[slug];
                if (!page) return null;
                const Icon = page.heroIcon ? ICON_MAP[page.heroIcon] : undefined;
                return (
                  <li key={slug}>
                    <Reveal delay={i * 0.04}>
                      <ServiceCard
                        title={page.title}
                        summary={page.seoDescription.split('.').slice(0, 1).join('.') + '.'}
                        href={`/services/${slug}`}
                        icon={Icon ? <Icon /> : undefined}
                      />
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <CTABlock
        eyebrow="Start the conversation"
        headline="Scope your next AI engagement with our engineering team."
        primaryHref="/contact"
        primaryLabel="Talk to an AI expert"
        secondaryHref="/technology/methodology"
        secondaryLabel="See our methodology"
      />
    </>
  );
}
