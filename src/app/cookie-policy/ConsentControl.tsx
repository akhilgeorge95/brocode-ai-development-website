'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

export type CookieRow = {
  name: string;
  provider: string;
  party: 'First' | 'Third';
  category: 'Strictly necessary' | 'Functional' | 'Analytics' | 'Marketing' | 'Personalisation';
  purpose: string;
  duration: string;
};

export type Category = {
  key: 'necessary' | 'functional' | 'analytics' | 'marketing' | 'personalisation';
  label: string;
  description: string;
  count: number;
  locked: boolean;
  defaultOn: boolean;
  breaks: string;
};

type CategoryKey = Category['key'];

export function ConsentControl({
  categories,
  slug
}: {
  categories: Category[];
  slug: string;
}) {
  const initialState = Object.fromEntries(categories.map((c) => [c.key, c.defaultOn])) as Record<CategoryKey, boolean>;
  const [prefs, setPrefs] = useState<Record<CategoryKey, boolean>>(initialState);

  function toggle(k: CategoryKey) {
    setPrefs((p) => ({ ...p, [k]: !p[k] }));
  }
  function acceptAll() {
    setPrefs(Object.fromEntries(categories.map((c) => [c.key, true])) as Record<CategoryKey, boolean>);
  }
  function rejectAll() {
    setPrefs(Object.fromEntries(categories.map((c) => [c.key, c.locked])) as Record<CategoryKey, boolean>);
  }

  return (
    <div className="rounded-3xl border border-ink-200 bg-white p-5 shadow-card md:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Your cookie preferences</p>
          <p className="mt-1 text-sm text-ink-600">Changes take effect immediately. No page reload required.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold text-white hover:bg-brand"
            data-event="consent_accept_all"
            data-page={slug}
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="rounded-full border border-ink-300 px-4 py-2 text-xs font-semibold text-ink-900 hover:border-ink-900"
            data-event="consent_reject_all"
            data-page={slug}
          >
            Reject all (except strictly necessary)
          </button>
        </div>
      </div>

      <ul className="mt-5 divide-y divide-ink-100">
        {categories.map((cat) => {
          const checked = prefs[cat.key];
          return (
            <li key={cat.key} className="flex items-start justify-between gap-4 py-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-ink-900">{cat.label}</p>
                  <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[10px] font-mono text-ink-600">{cat.count} cookies</span>
                  {cat.locked && <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Always on</span>}
                </div>
                <p className="mt-1 text-xs text-ink-600">{cat.description}</p>
                <p className="mt-1 text-[11px] text-ink-500"><strong>If off:</strong> {cat.breaks}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={checked}
                aria-label={`Toggle ${cat.label}`}
                disabled={cat.locked}
                onClick={() => !cat.locked && toggle(cat.key)}
                className={cn(
                  'relative mt-1 inline-flex h-6 w-11 flex-none items-center rounded-full transition-colors',
                  checked ? 'bg-brand' : 'bg-ink-200',
                  cat.locked && 'cursor-not-allowed opacity-70'
                )}
              >
                <span
                  className={cn(
                    'inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform',
                    checked ? 'translate-x-5' : 'translate-x-0.5'
                  )}
                  aria-hidden
                />
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-ink-100 pt-4">
        <p className="text-xs text-ink-500">Consent timestamp is recorded on save and exportable on request under GDPR Art. 7(1).</p>
        <button
          type="button"
          className="rounded-full bg-ink-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand"
          data-event="consent_save"
          data-page={slug}
        >
          Save my current selection
        </button>
      </div>

      <div className="mt-3 flex gap-2 sm:hidden">
        <button type="button" onClick={acceptAll} className="flex-1 rounded-full bg-ink-900 px-3 py-2 text-xs font-semibold text-white">Accept all</button>
        <button type="button" onClick={rejectAll} className="flex-1 rounded-full border border-ink-300 px-3 py-2 text-xs font-semibold text-ink-900">Reject all</button>
      </div>
    </div>
  );
}

export function CookieRegister({
  cookies,
  count
}: {
  cookies: CookieRow[];
  count: number;
}) {
  const [filter, setFilter] = useState<'All' | CookieRow['category']>('All');
  const filteredCookies = filter === 'All' ? cookies : cookies.filter((c) => c.category === filter);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2 text-xs">
        {(['All', 'Strictly necessary', 'Functional', 'Analytics', 'Marketing', 'Personalisation'] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 font-semibold transition',
              filter === c
                ? 'border-ink-900 bg-ink-900 text-white'
                : 'border-ink-200 bg-white text-ink-700 hover:border-ink-900'
            )}
          >
            {c}
            {c !== 'All' && (
              <span className="ml-1.5 font-mono text-[10px] opacity-70">
                {cookies.filter((x) => x.category === c).length}
              </span>
            )}
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-ink-500">Showing {filteredCookies.length} of {count} cookies.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-100">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="bg-surface-muted text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Provider</th>
              <th className="px-4 py-3">Party</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Purpose</th>
              <th className="px-4 py-3">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 text-ink-700">
            {filteredCookies.map((r) => (
              <tr key={r.name + r.provider} className="hover:bg-surface-muted/40">
                <td className="px-4 py-3 font-mono text-xs text-ink-900">{r.name}</td>
                <td className="px-4 py-3 text-xs">{r.provider}</td>
                <td className="px-4 py-3 text-xs">{r.party}</td>
                <td className="px-4 py-3 text-xs">{r.category}</td>
                <td className="px-4 py-3 text-xs">{r.purpose}</td>
                <td className="px-4 py-3 font-mono text-xs">{r.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
