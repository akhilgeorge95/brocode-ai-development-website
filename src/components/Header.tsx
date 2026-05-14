'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { NAV_SECTIONS } from '@/lib/nav';
import { buildWhatsAppLink } from '@/lib/site';
import { cn } from '@/lib/cn';

const HEADER_WA = "Hi Brocode — I'd like to talk to an AI engineer about an enterprise project.";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobile]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'border-b border-ink-100 bg-white/85 backdrop-blur-xl' : 'bg-white'
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-site flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.label}
              onMouseEnter={() => setOpen(section.label)}
              onFocus={() => setOpen(section.label)}
              onClick={() => setOpen(open === section.label ? null : section.label)}
              aria-expanded={open === section.label}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-ink-900',
                open === section.label && 'text-ink-900'
              )}
            >
              {section.label}
              <span className="ml-1 text-ink-400" aria-hidden>
                ▾
              </span>
            </button>
          ))}
          <Link
            href="/contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={buildWhatsAppLink(HEADER_WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-ink-700 transition hover:bg-[#25D366]/10 hover:text-[#1faa53]"
            data-event="whatsapp_header"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
            </svg>
            WhatsApp
          </a>
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 text-ink-900"
          aria-label="Open menu"
          aria-expanded={mobile}
          onClick={() => setMobile((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            {mobile ? <path d="M6 6 18 18 M18 6 6 18" /> : <path d="M4 7h16 M4 12h16 M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-x-0 top-full hidden border-b border-ink-100 bg-white shadow-card lg:block"
            onMouseEnter={() => setOpen(open)}
          >
            <div className="container-site grid grid-cols-1 gap-8 py-10 md:grid-cols-12">
              {(() => {
                const section = NAV_SECTIONS.find((s) => s.label === open);
                if (!section) return null;
                return (
                  <>
                    <div className="md:col-span-4">
                      <p className="eyebrow mb-4">{section.label}</p>
                      <h2 className="text-display-md text-ink-900">
                        {section.label === 'Services' && 'Engineer AI into the heart of your business.'}
                        {section.label === 'Industries' && 'Sector-specific AI solutions for regulated markets.'}
                        {section.label === 'Technology' && 'A modern AI stack, hardened for production.'}
                        {section.label === 'Insights' && 'Field-tested perspectives on applied AI.'}
                        {section.label === 'About' && 'A UAE-headquartered engineering partner.'}
                      </h2>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                      {section.groups.map((group) => (
                        <div key={group.heading}>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-500">
                            {group.heading}
                          </p>
                          <ul className="space-y-2">
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="group block rounded-md px-2 py-1.5 text-sm text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand"
                                  onClick={() => setOpen(null)}
                                >
                                  <span className="font-medium">{link.label}</span>
                                  {link.description && (
                                    <span className="mt-0.5 block text-xs text-ink-500 group-hover:text-brand-600">
                                      {link.description}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-white"
          >
            <div className="container-site py-6">
              {NAV_SECTIONS.map((section) => (
                <details key={section.label} className="group border-b border-ink-100 py-3">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-ink-900">
                    {section.label}
                    <span className="text-ink-400 transition-transform group-open:rotate-180" aria-hidden>
                      ▾
                    </span>
                  </summary>
                  <div className="mt-3 space-y-4">
                    {section.groups.map((g) => (
                      <div key={g.heading}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
                          {g.heading}
                        </p>
                        <ul className="space-y-1">
                          {g.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={() => setMobile(false)}
                                className="block py-1.5 text-sm text-ink-700"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="btn-primary" onClick={() => setMobile(false)}>
                  Get a Quote
                </Link>
                <Link href="/insights/faqs" className="btn-secondary" onClick={() => setMobile(false)}>
                  Support
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
