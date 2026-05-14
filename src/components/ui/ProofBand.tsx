import { cn } from '@/lib/cn';

export function ProofBand({
  items,
  variant = 'light',
  className
}: {
  items: { value: string; label: string }[];
  variant?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <ul
      className={cn(
        'grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4',
        variant === 'dark' ? 'text-white' : 'text-ink-900',
        className
      )}
    >
      {items.map((it) => (
        <li key={it.label}>
          <p className={cn('text-3xl font-bold leading-none md:text-4xl', variant === 'dark' ? 'text-white' : 'text-brand')}>
            {it.value}
          </p>
          <p className={cn('mt-2 text-sm', variant === 'dark' ? 'text-white/70' : 'text-ink-600')}>{it.label}</p>
        </li>
      ))}
    </ul>
  );
}
