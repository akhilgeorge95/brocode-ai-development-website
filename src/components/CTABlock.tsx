'use client';

import Link from 'next/link';
import { VideoBackground } from './VideoBackground';
import { cn } from '@/lib/cn';

export function CTABlock({
  eyebrow = 'Ready to build?',
  headline,
  sub,
  primaryHref = '/contact',
  primaryLabel = 'Talk to an AI expert',
  secondaryHref,
  secondaryLabel,
  video,
  poster,
  className
}: {
  eyebrow?: string;
  headline: string;
  sub?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  video?: string;
  poster?: string;
  className?: string;
}) {
  return (
    <section className={cn('relative isolate overflow-hidden bg-ink-900 text-white', className)}>
      {video && poster ? (
        <VideoBackground src={video} poster={poster} />
      ) : (
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-brand-700" />
      )}
      <div className="container-site relative z-10 py-22 md:py-30">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 text-white/70">{eyebrow}</p>
          <h2 className="text-balance text-display-lg">{headline}</h2>
          {sub && <p className="mt-5 max-w-2xl text-lg text-white/80">{sub}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryHref} className="btn bg-white text-ink-900 hover:bg-brand-100">
              {primaryLabel}
            </Link>
            {secondaryHref && (
              <Link href={secondaryHref} className="btn border border-white/30 text-white hover:bg-white/10">
                {secondaryLabel ?? 'Learn more'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
