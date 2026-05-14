import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { RelatedLinks } from '@/components/RelatedLinks';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'blog';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I'd like to be notified when the engineering blog is open. Could you add me to the early-access list?";

export const metadata: Metadata = {
  title: 'Engineering Blog — Brocode Solutions',
  description:
    'Short technical posts from the Brocode AI engineering floor. Opening shortly — join the early-access list to be notified.',
  alternates: { canonical: '/insights/blog' },
  openGraph: {
    title: 'Brocode Engineering Blog — opening shortly',
    description:
      'Field-tested posts from the engineers shipping production AI for the GCC. Four to eight a month.',
    url: 'https://www.brocode.ae/insights/blog',
    images: ['/images/insights/insights-hub.jpg']
  },
  twitter: { card: 'summary_large_image', title: 'Brocode Engineering Blog' }
};

const TOPICS = [
  'Arabic NLP at production scale',
  'Sovereign-cloud MLOps reference architectures',
  'GenAI guardrails — what survives the regulator',
  'Khaleeji dialect handling for ASR and TTS',
  'Vector retrieval at GCC enterprise scale',
  'Edge inference on Jetson and Snapdragon',
  'Model risk files that pass CBUAE review',
  'Cost-per-inference economics for self-hosted LLMs'
];

const relatedItems = [
  { label: 'Practitioner guides', href: '/insights/guides', description: 'Twelve long-form PDFs by named engineers.' },
  { label: 'AI glossary', href: '/insights/glossary', description: 'A curated 240-term reference.' },
  { label: 'Whitepapers', href: '/insights/whitepapers', description: 'Co-authored research, anchored on the 2026 GCC AI Benchmark.' },
  { label: 'Commercial FAQs', href: '/insights/faqs', description: '40 written answers on pricing, IP, residency, hand-over.' },
  { label: 'Contact', href: '/contact', description: 'Talk to a named human about an engagement.' }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Brocode AI Engineering Blog',
  url: 'https://www.brocode.ae/insights/blog',
  publisher: { '@type': 'Organization', name: 'Brocode Solutions' }
};

export default function BlogPage() {
  return (
    <>
      <Script id="blog-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <GradientMesh tone="midnight" className="opacity-60" />
        <div className="container-site relative z-10 py-24 md:py-30">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Insights', href: '/insights' },
              { label: 'Engineering Blog' }
            ]}
          />
          <div className="mt-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Opening shortly</p>
            <h1 className="mt-4 text-balance text-display-xl font-semibold leading-[1.05]">
              The engineering blog opens with our first cohort of posts in Q1 2026.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              We have been deliberate about not publishing a blog until the engineering team had a
              full calendar of posts they actually wanted to write. That moment is close. Drop your
              email below and we will notify you the day the first piece goes live — and send you
              the first three posts directly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="#notify">Notify me on launch</MagneticButton>
              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_inline"
                data-page={SLUG}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Or message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-22 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="What is coming"
            title="The first eight topics on the calendar."
            description="Each piece is written by the engineer who shipped the system it describes."
          />
          <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
            {TOPICS.map((t, i) => (
              <li key={t}>
                <Reveal delay={i * 0.04}>
                  <div className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-5">
                    <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-brand" aria-hidden />
                    <span className="text-sm text-ink-800">{t}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="notify" className="bg-surface-muted py-22">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="Be the first to read the engineering blog"
            description="Drop your email — we will send you the first three posts directly when the blog opens. No filler, no marketing emails."
            contents={[
              'First post: Arabic NLP at production scale',
              'Second post: Sovereign-cloud MLOps reference architectures',
              'Third post: GenAI guardrails that survive the regulator'
            ]}
            filePath="/downloads/insights-sampler.pdf"
            ctaLabel="Notify me on launch"
          />
        </div>
      </section>

      <RelatedLinks items={relatedItems} />
    </>
  );
}
