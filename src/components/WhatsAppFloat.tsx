'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildWhatsAppLink } from '@/lib/site';
import { cn } from '@/lib/cn';

const DEFAULT_MESSAGE =
  "Hi Brocode — I'd like to talk to an AI engineer about an enterprise project. Could you share availability?";

export function WhatsAppFloat({
  message = DEFAULT_MESSAGE,
  context,
  className
}: {
  /** Pre-filled message body when the button is tapped. Per-page. */
  message?: string;
  /** Small label shown above the button (e.g., the page topic). */
  context?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className={cn(
            'fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-7 md:right-7',
            className
          )}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-xs rounded-xl2 border border-ink-100 bg-white p-5 shadow-card"
                role="dialog"
                aria-label="WhatsApp chat"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#25D366]">
                  WhatsApp · Brocode AI
                </p>
                <p className="mt-2 text-sm font-semibold text-ink-900">
                  Chat with an engineer now
                </p>
                {context && (
                  <p className="mt-1 text-xs text-ink-500">Topic: {context}</p>
                )}
                <p className="mt-3 text-sm text-ink-600">{message}</p>
                <a
                  href={buildWhatsAppLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
                  data-event="whatsapp_open"
                  data-context={context ?? 'site'}
                >
                  Open in WhatsApp
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 17 17 7M17 7H8m9 0v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-2 w-full text-center text-xs text-ink-500 hover:text-ink-900"
                  type="button"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close WhatsApp chat' : 'Chat on WhatsApp'}
            aria-expanded={open}
            className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-card-hover transition hover:bg-[#1faa53]"
            type="button"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Zm5.51 13.39c-.23.65-1.35 1.24-1.88 1.32-.48.08-1.1.11-1.77-.11-.41-.13-.94-.31-1.61-.6-2.83-1.22-4.68-4.07-4.82-4.25-.14-.18-1.15-1.53-1.15-2.91 0-1.39.73-2.07.99-2.36.26-.28.57-.35.76-.35.19 0 .38 0 .55 0 .18 0 .42-.07.65.5.24.6.81 2.07.88 2.22.07.14.12.31.02.5-.09.18-.14.29-.28.45-.14.16-.3.36-.43.48-.14.14-.29.29-.13.57.16.28.73 1.2 1.56 1.95 1.07.96 1.97 1.26 2.25 1.4.28.14.45.12.61-.07.16-.19.7-.81.89-1.09.18-.28.36-.23.6-.14.24.09 1.54.73 1.81.86.26.13.44.2.5.31.07.11.07.65-.17 1.31Z" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
