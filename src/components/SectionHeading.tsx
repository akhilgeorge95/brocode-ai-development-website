import { cn } from '@/lib/cn';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'light',
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const isDark = variant === 'dark';
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className={cn('eyebrow mb-4', isDark && 'text-white/70')}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          'text-balance text-display-lg',
          isDark ? 'text-white' : 'text-ink-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            isDark ? 'text-white/75' : 'text-ink-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
