import type { Metadata } from 'next';
import { SubHero } from '@/components/SubHero';
import { IndustryCard } from '@/components/IndustryCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABlock } from '@/components/CTABlock';
import { INDUSTRY_PAGES } from '@/data';

export const metadata: Metadata = {
  title: 'AI Solutions by Industry — Dubai, Abu Dhabi & the UAE | Brocode',
  description:
    'Industry-specific AI for UAE enterprises in Abu Dhabi, Dubai and across the GCC: government, banking, healthcare, retail, manufacturing, energy, real estate, logistics, education, and hospitality.',
  alternates: { canonical: 'https://www.brocode.ae/industries' }
};

export default function IndustriesIndexPage() {
  const items = Object.entries(INDUSTRY_PAGES);

  return (
    <>
      <SubHero
        eyebrow="Industries"
        headline="Sector depth that shortens every conversation."
        sub="From central banks to refineries, we ship AI into the most regulated and operational environments in the GCC. We arrive knowing the constraints — and the levers."
        image="/images/hero/industries-poster.jpg"
        imageAlt="Aerial view of a modern Gulf port at sunrise"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading
            eyebrow="Ten sectors"
            title="A sector lens on the AI work that moves the needle."
            description="Each industry page is written for the executives accountable for that sector — outcomes first, regulatory reality always, AI capability second."
          />
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map(([slug, page], i) => (
              <li key={slug} className="min-h-[300px]">
                <Reveal delay={i * 0.04}>
                  <IndustryCard
                    title={page.title}
                    summary={page.seoDescription.split('.').slice(0, 1).join('.') + '.'}
                    href={`/industries/${slug}`}
                    image={page.heroImage}
                    imageAlt={page.heroImageAlt}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABlock
        eyebrow="Talk to a sector specialist"
        headline="Tell us about your sector and the outcome you need."
        primaryHref="/contact"
        primaryLabel="Talk to a specialist"
        secondaryHref="/why-brocode"
        secondaryLabel="Why Brocode"
      />
    </>
  );
}
