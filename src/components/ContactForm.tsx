'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this hidden field
    if ((data.get('company_url') as string)?.length) {
      setStatus('success');
      return;
    }

    const payload = {
      name: (data.get('name') as string)?.trim(),
      email: (data.get('email') as string)?.trim(),
      organisation: (data.get('organisation') as string)?.trim(),
      country: data.get('country'),
      inquiry: data.get('inquiry'),
      message: (data.get('message') as string)?.trim(),
      consent: data.get('consent') === 'on'
    };

    if (!payload.name || !payload.email || !payload.message || !payload.consent) {
      setError('Please complete the required fields and consent to be contacted.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError('Please enter a valid business email.');
      setStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      form.reset();
    } catch (err) {
      setError('We could not submit the form. Please try again or email hello@brocode.ae.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl2 border border-brand-200 bg-brand-50 p-8">
        <p className="text-eyebrow uppercase text-brand">Thank you</p>
        <h3 className="mt-3 text-2xl font-semibold text-ink-900">Your inquiry is on its way.</h3>
        <p className="mt-3 text-ink-700">
          A senior member of our team will respond within one business day. If your matter is urgent,
          please call <a href="tel:+97125550100" className="text-brand underline">+971 2 555 0100</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {/* Honeypot */}
      <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <Field label="Full name" name="name" required />
      <Field label="Business email" name="email" type="email" required />
      <Field label="Organisation" name="organisation" />
      <SelectField label="Country" name="country" options={['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Other']} />

      <div className="md:col-span-2">
        <SelectField
          label="Type of inquiry"
          name="inquiry"
          options={[
            'New AI engagement',
            'Strategy & advisory',
            'Existing project support',
            'Partnership',
            'Careers',
            'Media',
            'Other'
          ]}
        />
      </div>

      <div className="md:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-ink-700" htmlFor="message">
          How can we help? <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          placeholder="Briefly describe the problem you'd like to solve, timelines, and any constraints."
        />
      </div>

      <div className="md:col-span-2 flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-ink-300 text-brand focus:ring-brand"
        />
        <label htmlFor="consent" className="text-sm text-ink-700">
          I agree to be contacted by Brocode Solutions about my inquiry, in line with the{' '}
          <a href="/privacy-policy" className="text-brand underline">privacy policy</a>.
        </label>
      </div>

      {error && (
        <p className="md:col-span-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-xs text-ink-500">Protected by reCAPTCHA. Average response time: 4 business hours.</p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={cn('btn-primary', status === 'submitting' && 'opacity-70')}
        >
          {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-700" htmlFor={name}>
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-700" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
