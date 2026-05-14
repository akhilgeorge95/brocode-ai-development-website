import Link from 'next/link';
import { cn } from '@/lib/cn';

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Brocode Solutions — home"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span
        className={cn(
          'relative grid h-8 w-8 place-items-center rounded-md transition-colors',
          inverted ? 'bg-white text-ink-900' : 'bg-ink-900 text-white group-hover:bg-brand'
        )}
      >
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden width="18" height="18">
          <path
            d="M4 5h7a4 4 0 0 1 0 8H4V5Zm0 8h8a4 4 0 0 1 0 8H4v-8Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className={cn('flex flex-col leading-none', inverted ? 'text-white' : 'text-ink-900')}>
        <span className="text-[15px] font-semibold tracking-tight">Brocode Solutions</span>
        <span className={cn('mt-0.5 text-[11px] font-medium tracking-wide', inverted ? 'text-white/60' : 'text-ink-500')}>
          AI Software Development
        </span>
      </span>
    </Link>
  );
}
