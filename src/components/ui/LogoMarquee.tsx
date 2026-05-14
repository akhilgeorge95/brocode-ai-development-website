'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { LogoItem } from './LogoGrid';

/**
 * A slow, looping horizontal marquee of brand logos. Decorative; pauses on hover.
 * Use as a "stack at a glance" ribbon. Respects prefers-reduced-motion.
 */
export function LogoMarquee({
  items,
  tone = 'light',
  speed = 'normal',
  className
}: {
  items: LogoItem[];
  tone?: 'light' | 'dark';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}) {
  const duration = { slow: '60s', normal: '40s', fast: '24s' }[speed];

  return (
    <div
      className={cn(
        'group relative isolate overflow-hidden',
        tone === 'dark' && 'mask-fade-x-dark',
        className
      )}
      aria-label="Brocode AI technology stack"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background: `linear-gradient(to right, ${tone === 'dark' ? '#0A0E1A' : '#ffffff'} 0%, transparent 100%)`
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background: `linear-gradient(to left, ${tone === 'dark' ? '#0A0E1A' : '#ffffff'} 0%, transparent 100%)`
        }}
      />
      <div
        className="flex w-max animate-marquee gap-10 py-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none md:gap-14 md:py-8"
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="relative flex h-10 w-32 flex-none items-center justify-center md:h-12 md:w-40"
            aria-hidden={i >= items.length}
          >
            <Image
              src={`/logos/${item.id}.svg`}
              alt={i < items.length ? `${item.display} logo` : ''}
              fill
              sizes="160px"
              className={cn(
                'object-contain',
                tone === 'light' ? 'opacity-75 hover:opacity-100' : 'opacity-65 hover:opacity-100'
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
