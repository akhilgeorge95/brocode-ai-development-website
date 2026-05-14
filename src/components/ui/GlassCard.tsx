import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

export function GlassCard({
  children,
  className,
  tone = 'light',
  border = true,
  padding = 'lg'
}: {
  children: ReactNode;
  className?: string;
  tone?: 'light' | 'dark';
  border?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}) {
  const pad = { sm: 'p-5', md: 'p-7', lg: 'p-9' }[padding];
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl backdrop-blur-xl',
        tone === 'light'
          ? 'bg-white/70 text-ink-900'
          : 'bg-white/5 text-white',
        border &&
          (tone === 'light'
            ? 'border border-ink-100 shadow-card'
            : 'border border-white/10'),
        pad,
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-transparent to-transparent" aria-hidden />
      {children}
    </div>
  );
}
