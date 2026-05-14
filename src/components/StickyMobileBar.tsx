'use client';

import Link from 'next/link';
import { buildWhatsAppLink } from '@/lib/site';
import { cn } from '@/lib/cn';

export function StickyMobileBar({
  whatsappMessage,
  primaryLabel = 'Get a quote',
  primaryHref = '#contact-form',
  className
}: {
  whatsappMessage: string;
  primaryLabel?: string;
  primaryHref?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-ink-100 bg-white/95 p-2 shadow-card backdrop-blur-xl md:hidden',
        className
      )}
      role="region"
      aria-label="Primary conversion actions"
    >
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-ink-900 px-3 py-3 text-sm font-semibold text-white"
      >
        {primaryLabel}
      </Link>
      <a
        href={buildWhatsAppLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        data-event="whatsapp_mobilebar"
        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-3 text-sm font-semibold text-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
