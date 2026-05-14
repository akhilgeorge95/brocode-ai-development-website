import { cn } from '@/lib/cn';

/**
 * A decorative animated mesh-gradient background, used as a hero / section backdrop.
 * Pure CSS, no scripting. Respects prefers-reduced-motion.
 */
export function GradientMesh({
  className,
  tone = 'brand'
}: {
  className?: string;
  tone?: 'brand' | 'sand' | 'midnight';
}) {
  const palette = {
    brand: ['from-brand-500/40', 'from-accent/30', 'from-brand-700/30'],
    sand: ['from-amber-300/30', 'from-rose-300/20', 'from-brand-500/20'],
    midnight: ['from-indigo-500/30', 'from-brand-700/40', 'from-fuchsia-500/20']
  }[tone];

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      <div className={cn('absolute -left-1/4 top-0 h-[55rem] w-[55rem] rounded-full bg-gradient-to-br', palette[0], 'to-transparent blur-3xl animate-mesh-1')} />
      <div className={cn('absolute right-0 top-1/3 h-[45rem] w-[45rem] rounded-full bg-gradient-to-br', palette[1], 'to-transparent blur-3xl animate-mesh-2')} />
      <div className={cn('absolute left-1/3 bottom-0 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br', palette[2], 'to-transparent blur-3xl animate-mesh-3')} />
    </div>
  );
}
