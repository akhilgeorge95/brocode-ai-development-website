import Link from 'next/link';
import { cn } from '@/lib/cn';

export function ServiceCard({
  title,
  summary,
  href,
  icon,
  className
}: {
  title: string;
  summary: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn('card group flex h-full flex-col', className)}>
      {icon && (
        <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold leading-snug text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{summary}</p>
      <span className="link-arrow mt-5 inline-flex text-sm font-semibold text-brand">
        Learn more
      </span>
    </Link>
  );
}
