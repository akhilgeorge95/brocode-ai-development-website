'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { FormField, PageFormConfig } from './types';
import { buildWhatsAppLink } from '@/lib/site';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const BASE_FIELDS: FormField[] = [
  { name: 'name', label: 'Full name', type: 'text', required: true, placeholder: 'Aisha Al Hosani' },
  { name: 'email', label: 'Business email', type: 'email', required: true, placeholder: 'aisha@yourorg.ae' },
  { name: 'organisation', label: 'Organisation', type: 'text', required: true, placeholder: 'Federal Authority…' },
  { name: 'role', label: 'Your role', type: 'text', placeholder: 'Head of Digital Transformation' }
];

export function QuoteForm({ config }: { config: PageFormConfig }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  const stepFields: FormField[][] = [BASE_FIELDS, config.fields, []]; // step 2 = consent + submit

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if ((data.get('company_url') as string)?.length) {
      setStatus('success');
      return;
    }

    const payload: Record<string, unknown> = { pageSlug: config.pageSlug };
    for (const [k, v] of data.entries()) {
      if (k.endsWith('[]')) {
        const key = k.slice(0, -2);
        payload[key] = (payload[key] as string[] | undefined ?? []).concat(String(v));
      } else if (k !== 'company_url') {
        payload[k] = v;
      }
    }
    if (!payload.consent) {
      setError('Please confirm consent before submitting.');
      setStatus('error');
      return;
    }

    // The site ships as a static export (no server endpoint).
    // We acknowledge the inquiry locally and surface the WhatsApp deep-link
    // as the primary continuation. The next iteration wires this to a real CRM.
    try {
      // Log the payload so it surfaces in browser devtools during demo reviews.
      // eslint-disable-next-line no-console
      console.info('[quote_submit]', payload);
      if (typeof window !== 'undefined') {
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: 'quote_submit', page: config.pageSlug, payload });
      }
      setStatus('success');
      form.reset();
    } catch {
      setError('We could not submit the form. Please try again or use WhatsApp.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Thank you</p>
        <h3 className="mt-3 text-2xl font-semibold text-ink-900">Your inquiry is on its way.</h3>
        <p className="mt-3 text-ink-700">
          A senior engineer from the {config.pageSlug.replace(/[-/]/g, ' ').trim()} team responds within one business day.
          If your matter is urgent, message us on WhatsApp.
        </p>
        {config.whatsappMessage && (
          <a
            href={buildWhatsAppLink(config.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1faa53]"
          >
            Continue on WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Quote request</p>
          <h3 className="mt-1 text-2xl font-semibold text-ink-900">{config.title}</h3>
          {config.subtitle && <p className="mt-2 text-sm text-ink-600">{config.subtitle}</p>}
        </div>
        <ol className="hidden gap-1.5 sm:flex" aria-label="Form progress">
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              className={cn(
                'h-1.5 w-8 rounded-full transition-colors',
                i <= step ? 'bg-brand' : 'bg-ink-100'
              )}
              aria-current={i === step ? 'step' : undefined}
            />
          ))}
        </ol>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {step < 2 ? (
          stepFields[step].map((f) => (
            <Field key={f.name} field={f} className={f.type === 'textarea' ? 'md:col-span-2' : ''} />
          ))
        ) : (
          <div className="md:col-span-2 space-y-4">
            <label className="flex items-start gap-3">
              <input
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-ink-300 text-brand focus:ring-brand"
              />
              <span className="text-sm text-ink-700">
                I agree to be contacted by Brocode Solutions about my inquiry, in line with the{' '}
                <a href="/privacy-policy" className="text-brand underline">privacy policy</a>.
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                name="newsletter"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-ink-300 text-brand focus:ring-brand"
              />
              <span className="text-sm text-ink-700">
                Send me the quarterly engineering notes. One short email every three months.
              </span>
            </label>
          </div>
        )}
      </motion.div>

      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      )}

      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0 || status === 'submitting'}
          className="text-sm font-medium text-ink-500 hover:text-ink-900 disabled:opacity-40"
        >
          ← Back
        </button>
        {step < 2 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(2, s + 1))}
            className="inline-flex rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={cn('inline-flex rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand', status === 'submitting' && 'opacity-70')}
          >
            {status === 'submitting' ? 'Sending…' : config.ctaLabel}
          </button>
        )}
      </div>

      {config.whatsappMessage && (
        <p className="border-t border-ink-100 pt-4 text-xs text-ink-500">
          Prefer chat?{' '}
          <a
            href={buildWhatsAppLink(config.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#1faa53] underline"
            data-event="whatsapp_inline"
            data-page={config.pageSlug}
          >
            Message us on WhatsApp
          </a>{' '}
          — we'll see it within working hours.
        </p>
      )}
    </form>
  );
}

function Field({ field, className }: { field: FormField; className?: string }) {
  const common = 'w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';
  return (
    <div className={className}>
      <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-ink-700">
        {field.label} {field.required && <span className="text-brand">*</span>}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          id={field.name}
          name={field.name}
          required={field.required}
          rows={4}
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          className={common}
        />
      ) : field.type === 'select' ? (
        <select id={field.name} name={field.name} required={field.required} defaultValue={field.defaultValue ?? ''} className={common}>
          <option value="">Select…</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : field.type === 'multiselect' ? (
        <div className="grid grid-cols-1 gap-1.5 rounded-lg border border-ink-200 bg-white p-3">
          {field.options?.map((o) => (
            <label key={o} className="inline-flex items-center gap-2 text-sm text-ink-700">
              <input type="checkbox" name={`${field.name}[]`} value={o} className="h-4 w-4 rounded border-ink-300 text-brand focus:ring-brand" />
              {o}
            </label>
          ))}
        </div>
      ) : (
        <input
          id={field.name}
          name={field.name}
          type={field.type}
          required={field.required}
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          className={common}
        />
      )}
      {field.helper && <p className="mt-1.5 text-xs text-ink-500">{field.helper}</p>}
    </div>
  );
}
