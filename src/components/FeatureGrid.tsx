import { Reveal } from './Reveal';
import { cn } from '@/lib/cn';

export function FeatureGrid({
  items,
  columns = 3,
  className
}: {
  items: { title: string; description: string; icon?: React.ReactNode }[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const cols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <ul className={cn('grid grid-cols-1 gap-5', cols, className)}>
      {items.map((item, i) => (
        <li key={item.title}>
          <Reveal delay={i * 0.05}>
            <div className="card h-full">
              {item.icon && (
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand">
                  {item.icon}
                </div>
              )}
              <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
