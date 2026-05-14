import Image from 'next/image';
import { SubHero } from './SubHero';
import { Reveal } from './Reveal';
import { CTABlock } from './CTABlock';
import { RelatedLinks } from './RelatedLinks';
import { StatsCounter } from './StatsCounter';
import { FeatureGrid } from './FeatureGrid';
import { ICON_MAP } from './icons';
import Link from 'next/link';
import type { LongPage } from '@/data/types';

export function LongPageTemplate({
  page,
  breadcrumbs
}: {
  page: LongPage;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <>
      <SubHero
        eyebrow={page.eyebrow}
        headline={page.headline}
        sub={page.sub}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        breadcrumbs={breadcrumbs}
      />

      {/* Intro + at-a-glance */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xl leading-relaxed text-ink-700 md:text-2xl md:leading-relaxed">
                {page.intro}
              </p>
            </Reveal>
            <div className="mt-10 space-y-12">
              {page.sections.map((s, i) => (
                <Reveal key={s.heading} delay={i * 0.05}>
                  <article>
                    <h2 className="text-display-md text-ink-900">{s.heading}</h2>
                    <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-700 whitespace-pre-line">
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <div className="sticky top-24 space-y-6">
              {page.capabilities && page.capabilities.length > 0 && (
                <Reveal>
                  <div className="rounded-xl2 border border-ink-100 bg-surface-muted p-7">
                    <p className="eyebrow mb-4">Capabilities</p>
                    <ul className="space-y-2.5">
                      {page.capabilities.map((c) => (
                        <li key={c} className="flex gap-2 text-sm text-ink-700">
                          <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
              {page.outcomes && page.outcomes.length > 0 && (
                <Reveal delay={0.05}>
                  <div className="rounded-xl2 border border-ink-100 bg-white p-7 shadow-card">
                    <p className="eyebrow mb-4">Outcomes</p>
                    <ul className="space-y-3 text-sm text-ink-700">
                      {page.outcomes.map((o) => (
                        <li key={o} className="flex gap-2">
                          <span aria-hidden className="mt-1 inline-block h-4 w-4 flex-none rounded-full bg-brand/10 text-brand">
                            <svg viewBox="0 0 16 16" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m4 8 3 3 5-6" />
                            </svg>
                          </span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
              <Reveal delay={0.1}>
                <div className="rounded-xl2 border border-ink-900 bg-ink-900 p-7 text-white">
                  <p className="eyebrow mb-3 text-white/70">Talk to us</p>
                  <p className="text-lg font-semibold leading-snug">
                    Scope your next AI initiative with our engineering team.
                  </p>
                  <Link href={page.primaryCta.href} className="mt-5 inline-flex btn bg-white text-ink-900 hover:bg-brand-100">
                    {page.primaryCta.label}
                  </Link>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* Highlights / feature grid */}
      {page.highlights && page.highlights.length > 0 && (
        <section className="bg-surface-muted py-20 md:py-28">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow mb-4">What you get</p>
              <h2 className="text-display-md max-w-3xl text-ink-900">
                A delivery package designed for production, not prototypes.
              </h2>
            </Reveal>
            <div className="mt-10">
              <FeatureGrid
                items={page.highlights.map((h) => ({
                  title: h.title,
                  description: h.description,
                  icon: h.icon ? (() => {
                    const Comp = ICON_MAP[h.icon];
                    return <Comp />;
                  })() : undefined
                }))}
                columns={3}
              />
            </div>
          </div>
        </section>
      )}

      {/* Why Brocode + Approach */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl2 border border-ink-100 bg-surface-muted p-9">
              <p className="eyebrow mb-4">Why Brocode Solutions</p>
              <h2 className="text-2xl font-semibold text-ink-900">
                A UAE-headquartered partner with regional depth and global delivery rigour.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">{page.whyBrocode}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-xl2 border border-ink-100 bg-white p-9 shadow-card">
              <p className="eyebrow mb-4">Our approach</p>
              <h2 className="text-2xl font-semibold text-ink-900">
                Discovery, build, hardening, and run — one accountable team.
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">{page.ourApproach}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      {page.stats && page.stats.length > 0 && (
        <section className="bg-ink-900 py-20 text-white">
          <div className="container-site">
            <p className="eyebrow mb-4 text-white/70">Measured impact</p>
            <h2 className="text-display-md max-w-3xl text-white">
              Outcomes our clients see when AI is engineered properly.
            </h2>
            <ul className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4">
              {page.stats.map((s) => (
                <li key={s.label}>
                  <StatsCounter
                    value={s.value}
                    suffix={s.suffix}
                    prefix={s.prefix}
                    label={s.label}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABlock
        eyebrow="Get started"
        headline="Bring an engineering partner to your next AI decision."
        sub="From discovery to a live, monitored system, our team owns the outcome with you. Tell us about the problem and we'll respond within one business day."
        primaryHref={page.primaryCta.href}
        primaryLabel={page.primaryCta.label}
        secondaryHref={page.secondaryCta.href}
        secondaryLabel={page.secondaryCta.label}
      />

      <RelatedLinks items={page.related} />
    </>
  );
}
