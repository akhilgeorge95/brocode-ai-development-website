'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export type LeadMagnetGateProps = {
  /** Slug of the page (used for tracking + filename hint). */
  pageSlug: string;
  /** Display title of the asset. */
  title: string;
  /** One-line description / what's inside. */
  description: string;
  /** Bullet contents of the asset. */
  contents?: string[];
  /** Path to the gated PDF in /public — e.g. /downloads/document-intelligence.pdf */
  filePath: string;
  /** Pre-fill industry options if relevant. */
  industries?: string[];
  /** Customise button label. */
  ctaLabel?: string;
  /** Optional thumbnail image path for the asset. */
  thumbnail?: string;
  className?: string;
};

export function LeadMagnetGate({
  pageSlug,
  title,
  description,
  contents,
  filePath,
  industries,
  ctaLabel = 'Email me the report',
  thumbnail,
  className
}: LeadMagnetGateProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    if ((data.get('company_url') as string)?.length) {
      setStatus('success');
      return;
    }
    const payload = {
      type: 'lead_magnet',
      pageSlug,
      asset: title,
      filePath,
      name: data.get('name'),
      email: data.get('email'),
      organisation: data.get('organisation'),
      industry: data.get('industry'),
      role: data.get('role'),
      consent: data.get('consent') === 'on'
    };
    if (!payload.email || !payload.consent) {
      setError('Please enter your email and consent to be contacted.');
      setStatus('error');
      return;
    }
    // Static export: no server endpoint. We log the inquiry, fire the
    // tracking event, and trigger the download directly. The next iteration
    // wires this to a real CRM / mail processor.
    try {
      // eslint-disable-next-line no-console
      console.info('[lead_magnet_download]', payload);
      if (typeof window !== 'undefined') {
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: 'lead_magnet_download', page: pageSlug, asset: title });
      }
      setStatus('success');
      // Trigger download. Prefix the path with basePath when running on GitHub Pages.
      const base = (process.env.NEXT_PUBLIC_BASE_PATH as string | undefined) ?? '';
      const link = document.createElement('a');
      link.href = `${base}${filePath}`;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      setError('We could not process your request. Please try again or contact us directly.');
      setStatus('error');
    }
  }

  return (
    <section
      className={cn(
        'relative isolate overflow-hidden rounded-2xl border border-ink-100 bg-gradient-to-br from-surface-muted to-white p-8 md:p-12',
        className
      )}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Free download</p>
          <h2 className="mt-2 text-display-md text-ink-900">{title}</h2>
          <p className="mt-3 text-ink-600 md:text-lg">{description}</p>
          {contents && contents.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {contents.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-ink-700">
                  <span aria-hidden className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-50 text-brand">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m4 8 3 3 5-6" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="md:col-span-5">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-brand-200 bg-brand-50 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Download started</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">Check your downloads — and your inbox.</h3>
              <p className="mt-2 text-sm text-ink-700">
                We have started the download. We will also email you a copy and the related materials within 5 minutes.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-3 rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
              <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              {thumbnail && (
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid h-12 w-9 place-items-center rounded-md bg-ink-900 text-[10px] font-bold text-white">PDF</div>
                  <p className="text-xs text-ink-500">{title}</p>
                </div>
              )}
              <Field name="name" label="Full name" required placeholder="Your name" />
              <Field name="email" type="email" label="Work email" required placeholder="you@yourorg.ae" />
              <Field name="organisation" label="Organisation" required placeholder="Your organisation" />
              {industries && industries.length > 0 ? (
                <SelectField name="industry" label="Industry" options={industries} />
              ) : (
                <Field name="role" label="Your role" placeholder="Head of AI" />
              )}
              <label className="flex items-start gap-3 pt-1">
                <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-ink-300 text-brand focus:ring-brand" />
                <span className="text-xs text-ink-700">
                  I agree to be contacted by Brocode Solutions about this download and related materials.
                </span>
              </label>
              {error && (
                <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={cn('mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand', status === 'submitting' && 'opacity-70')}
                data-event="lead_magnet_submit"
                data-page={pageSlug}
              >
                {status === 'submitting' ? 'Preparing…' : ctaLabel}
              </button>
              <p className="text-center text-[11px] text-ink-500">Instant download. No spam. Unsubscribe any time.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required,
  placeholder
}: {
  name: string;
  label: string;
  type?: 'text' | 'email';
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs font-medium text-ink-700">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs font-medium text-ink-700">{label}</label>
      <select id={name} name={name} className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
