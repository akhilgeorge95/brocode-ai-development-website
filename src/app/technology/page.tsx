import type { Metadata } from 'next';
import Link from 'next/link';
import { SubHero } from '@/components/SubHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABlock } from '@/components/CTABlock';
import { TECHNOLOGY_PAGES } from '@/data';
import { ICON_MAP } from '@/components/icons';

export const metadata: Metadata = {
  title: 'AI Technology Stack & Partners — UAE (Dubai & Abu Dhabi) | Brocode',
  description:
    'How Brocode Solutions builds AI for UAE enterprises in Abu Dhabi and Dubai: technology stack, AI platform partners, cloud and sovereign infrastructure (G42 Cloud, Khazna, AWS UAE, Azure UAE), open-source contributions, methodology, and QA.',
  alternates: { canonical: 'https://www.brocode.ae/technology' }
};

export default function TechnologyIndexPage() {
  const items = Object.entries(TECHNOLOGY_PAGES);
  return (
    <>
      <SubHero
        eyebrow="Technology"
        headline="A modern AI stack, hardened for production."
        sub="The tools we standardise on, the partners we depend on, the methodology we follow, and the QA discipline that keeps AI systems honest in production."
        image="/images/technology/stack.jpg"
        imageAlt="Server racks in a modern data centre lit by blue indicator LEDs"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Technology' }]}
      />

      <section className="bg-white py-22 md:py-30">
        <div className="container-site">
          <SectionHeading eyebrow="Six pages" title="How we build, and what we build with." />
          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map(([slug, page], i) => {
              const Icon = page.heroIcon ? ICON_MAP[page.heroIcon] : undefined;
              return (
                <li key={slug}>
                  <Reveal delay={i * 0.04}>
                    <Link href={`/technology/${slug}`} className="card group flex h-full flex-col">
                      {Icon && (
                        <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand">
                          <Icon />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-ink-900">{page.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {page.seoDescription.split('.').slice(0, 1).join('.') + '.'}
                      </p>
                      <span className="link-arrow mt-5 inline-flex text-sm font-semibold text-brand">
                        Learn more
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTABlock
        eyebrow="Engage our engineers"
        headline="Bring our technology team to your toughest AI question."
        primaryHref="/contact"
        primaryLabel="Talk to an engineer"
        secondaryHref="/technology/methodology"
        secondaryLabel="See methodology"
      />
    </>
  );
}
