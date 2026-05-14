'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

export function VideoBackground({
  src,
  poster,
  className,
  overlay = 'linear-gradient(180deg, rgba(10,14,26,0.55) 0%, rgba(10,14,26,0.85) 100%)'
}: {
  src: string;
  poster: string;
  className?: string;
  overlay?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      el.play().catch(() => {
        /* autoplay blocked – the poster image stays */
      });
    }
  }, []);

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)} aria-hidden>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: overlay }} />
    </div>
  );
}
