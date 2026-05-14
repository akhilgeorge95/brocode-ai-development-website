import { cn } from '@/lib/cn';

export type CompareRow = {
  feature: string;
  brocode: string | boolean;
  competitors: (string | boolean)[];
  note?: string;
};

export function CompareTable({
  competitors,
  rows,
  className,
  brandLabel = 'Brocode'
}: {
  competitors: string[];
  rows: CompareRow[];
  brandLabel?: string;
  className?: string;
}) {
  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-ink-100 bg-white', className)}>
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="bg-surface-muted text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
            <th className="px-5 py-4">Capability</th>
            <th className="px-5 py-4 text-brand">{brandLabel}</th>
            {competitors.map((c) => (
              <th key={c} className="px-5 py-4">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-100">
          {rows.map((row) => (
            <tr key={row.feature} className="hover:bg-surface-muted/50">
              <td className="px-5 py-4 font-medium text-ink-900">
                {row.feature}
                {row.note && <p className="mt-1 text-xs font-normal text-ink-500">{row.note}</p>}
              </td>
              <td className="px-5 py-4 font-semibold text-ink-900">{formatCell(row.brocode, true)}</td>
              {row.competitors.map((c, i) => (
                <td key={i} className="px-5 py-4 text-ink-700">{formatCell(c, false)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatCell(v: string | boolean, brand: boolean) {
  if (v === true) return <CheckIcon brand={brand} />;
  if (v === false) return <DashIcon />;
  return <span>{v}</span>;
}

function CheckIcon({ brand }: { brand: boolean }) {
  return (
    <span aria-label="Yes" className={cn('inline-grid h-6 w-6 place-items-center rounded-full', brand ? 'bg-brand-50 text-brand' : 'bg-ink-100 text-ink-700')}>
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 8 3 3 5-6" />
      </svg>
    </span>
  );
}

function DashIcon() {
  return (
    <span aria-label="No" className="inline-grid h-6 w-6 place-items-center rounded-full bg-ink-100 text-ink-400">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M4 8h8" />
      </svg>
    </span>
  );
}
