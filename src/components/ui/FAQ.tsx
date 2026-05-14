'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';

export type FAQItem = { question: string; answer: string };

export function FAQ({ items, className }: { items: FAQItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className={cn('divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.question}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-surface-muted"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink-900">{item.question}</span>
              <span className={cn('text-ink-400 transition-transform', isOpen && 'rotate-45')} aria-hidden>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <p className="whitespace-pre-line px-6 pb-6 text-ink-700">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
