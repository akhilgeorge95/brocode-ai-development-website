import Link from 'next/link';
import { cn } from '@/lib/cn';

export function Breadcrumbs({
  items,
  variant = 'light'
}: {
  items: { label: string; href?: string }[];
  variant?: 'light' | 'dark';
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn('flex flex-wrap items-center gap-1.5 text-xs', variant === 'dark' ? 'text-white/60' : 'text-ink-500')}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className={cn('hover:underline', variant === 'dark' ? 'hover:text-white' : 'hover:text-ink-900')}>
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast ? (variant === 'dark' ? 'text-white' : 'text-ink-900') : '')}>
                  {item.label}
                </span>
              )}
              {!isLast && <span aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
