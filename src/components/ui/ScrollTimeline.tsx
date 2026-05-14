'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/cn';

export type TimelineStep = {
  label: string;
  title: string;
  description: string;
  metric?: string;
};

export function ScrollTimeline({
  steps,
  className
}: {
  steps: TimelineStep[];
  className?: string;
}) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%']
  });
  const barScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <ol ref={ref} className={cn('relative isolate space-y-12 pl-10 md:pl-14', className)}>
      <div
        className="pointer-events-none absolute left-3 top-2 bottom-2 w-px bg-ink-100 md:left-5"
        aria-hidden
      />
      <motion.div
        style={{ scaleY: barScaleY, transformOrigin: 'top' }}
        className="pointer-events-none absolute left-3 top-2 bottom-2 w-px bg-brand md:left-5"
        aria-hidden
      />
      {steps.map((s, i) => (
        <motion.li
          key={s.label}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: i * 0.05 }}
          className="relative"
        >
          <span
            aria-hidden
            className="absolute -left-10 top-1 grid h-6 w-6 place-items-center rounded-full bg-white ring-4 ring-brand md:-left-12 md:h-8 md:w-8"
          >
            <span className="text-[11px] font-bold text-brand md:text-xs">{String(i + 1).padStart(2, '0')}</span>
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">{s.label}</p>
          <h3 className="mt-1.5 text-xl font-semibold text-ink-900">{s.title}</h3>
          <p className="mt-2 max-w-2xl text-ink-600">{s.description}</p>
          {s.metric && (
            <p className="mt-3 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
              {s.metric}
            </p>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
