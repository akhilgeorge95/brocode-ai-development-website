import Image from 'next/image';
import { Breadcrumbs } from './Breadcrumbs';
import { cn } from '@/lib/cn';

export function SubHero({
  eyebrow,
  headline,
  sub,
  image,
  imageAlt,
  breadcrumbs,
  className
}: {
  eyebrow?: string;
  headline: string;
  sub?: string;
  image: string;
  imageAlt: string;
  breadcrumbs: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-ink-900 text-white',
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/80 to-ink-900" />
      </div>
      <div className="container-site relative z-10 pt-22 pb-20 md:pt-30 md:pb-24">
        <Breadcrumbs items={breadcrumbs} variant="dark" />
        <div className="mt-8 max-w-3xl">
          {eyebrow && <p className="eyebrow mb-4 text-white/70">{eyebrow}</p>}
          <h1 className="text-balance text-display-xl">{headline}</h1>
          {sub && <p className="mt-6 max-w-2xl text-lg text-white/75">{sub}</p>}
        </div>
      </div>
    </section>
  );
}
