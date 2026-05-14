import Image from 'next/image';
import { cn } from '@/lib/cn';

export type LogoItem = {
  id: string;
  display: string;
  version?: string;
};

/**
 * A clean, restrained grid of brand logos sourced from /public/logos/.
 * Aesthetic intent: equal-sized cells, generous white space, subtle hover
 * lift, optional version chip in the corner. Use `tone="dark"` on dark sections.
 */
export function LogoGrid({
  items,
  tone = 'light',
  columns = 4,
  className,
  showVersion = true
}: {
  items: LogoItem[];
  tone?: 'light' | 'dark';
  columns?: 3 | 4 | 5 | 6;
  className?: string;
  showVersion?: boolean;
}) {
  const cols = {
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6'
  }[columns];

  return (
    <ul
      className={cn(
        'grid gap-3 md:gap-4',
        cols,
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className={cn(
            'group relative flex aspect-[5/3] flex-col items-center justify-center rounded-2xl border p-5 transition-all duration-300 ease-out hover:-translate-y-0.5',
            tone === 'light'
              ? 'border-ink-100 bg-white hover:border-ink-200 hover:shadow-card'
              : 'border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]'
          )}
        >
          {item.version && showVersion && (
            <span
              className={cn(
                'absolute right-3 top-3 rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold tabular-nums',
                tone === 'light' ? 'bg-ink-100 text-ink-600' : 'bg-white/10 text-white/70'
              )}
            >
              {item.version}
            </span>
          )}
          <div className="relative flex h-9 w-full items-center justify-center md:h-10">
            <Image
              src={`/logos/${item.id}.svg`}
              alt={`${item.display} logo`}
              fill
              sizes="120px"
              className={cn(
                'object-contain transition-opacity duration-300',
                tone === 'light' ? 'opacity-80 group-hover:opacity-100' : 'opacity-75 group-hover:opacity-100'
              )}
            />
          </div>
          <p
            className={cn(
              'mt-3 text-center text-xs font-medium leading-tight',
              tone === 'light' ? 'text-ink-700' : 'text-white/70'
            )}
          >
            {item.display}
          </p>
        </li>
      ))}
    </ul>
  );
}
