'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VideoBackground } from './VideoBackground';
import { cn } from '@/lib/cn';

export function ParallaxHero({
  video,
  poster,
  eyebrow,
  headline,
  sub,
  children,
  className
}: {
  video: string;
  poster: string;
  eyebrow?: string;
  headline: string;
  sub?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const yMid = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section
      ref={ref}
      className={cn(
        'relative isolate flex min-h-[88vh] items-end overflow-hidden bg-ink-900 text-white',
        className
      )}
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0 will-change-transform">
        <VideoBackground src={video} poster={poster} />
      </motion.div>

      {/* Decorative gradient blob midground */}
      <motion.div
        aria-hidden
        style={{ y: yMid }}
        className="pointer-events-none absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-brand/40 via-brand/10 to-transparent blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: yMid }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-accent/30 via-accent/5 to-transparent blur-3xl"
      />

      <motion.div style={{ opacity }} className="container-site relative z-10 pb-22 pt-30 md:pb-30">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-5 text-white/80">{eyebrow}</p>}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-balance text-display-2xl"
          >
            {headline}
          </motion.h1>
          {sub && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              {sub}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {children}
            </motion.div>
          )}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-white/0" />
    </section>
  );
}
