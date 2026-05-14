'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

type BentoCellProps = {
  span?: 'sm' | 'md' | 'lg' | 'xl' | 'wide' | 'tall';
  variant?: 'light' | 'dark' | 'brand' | 'glass';
  children: ReactNode;
  className?: string;
};

const SPAN_CLASSES: Record<NonNullable<BentoCellProps['span']>, string> = {
  sm: 'col-span-12 sm:col-span-6 lg:col-span-3',
  md: 'col-span-12 sm:col-span-6 lg:col-span-4',
  lg: 'col-span-12 lg:col-span-6',
  xl: 'col-span-12 lg:col-span-8',
  wide: 'col-span-12 lg:col-span-9',
  tall: 'col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2'
};

const VARIANT_CLASSES: Record<NonNullable<BentoCellProps['variant']>, string> = {
  light: 'bg-white border border-ink-100 text-ink-900',
  dark: 'bg-ink-900 border border-ink-800 text-white',
  brand: 'bg-gradient-to-br from-brand-600 to-brand-700 border border-brand-600 text-white',
  glass: 'bg-white/80 backdrop-blur-xl border border-ink-100 text-ink-900'
};

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('grid auto-rows-[minmax(180px,auto)] grid-cols-12 gap-4 md:gap-5', className)}>
      {children}
    </div>
  );
}

export function BentoCell({
  span = 'md',
  variant = 'light',
  children,
  className
}: BentoCellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className={cn(
        'relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover',
        SPAN_CLASSES[span],
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
