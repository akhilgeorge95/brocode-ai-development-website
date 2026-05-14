'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Split-screen hero visual: a tilted handwritten Arabic letter on the left,
 * a JSON extraction panel on the right populating line-by-line via stagger.
 *
 * The Arabic letter content is a generic, polite government correspondence
 * placeholder — no real entity names, no garbled glyphs. To be reviewed by a
 * native Arabic speaker before publish (see brief production notes).
 */
export function ScanToJsonPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const lines = [
    { key: 'document_type', value: '"official_correspondence"' },
    { key: 'recipient', value: '"Director, Digital Transformation Office"' },
    { key: 'sender', value: '"Federal Authority — Operations"' },
    { key: 'date', value: '"2026-05-12"' },
    { key: 'reference', value: '"REF / 2026 / 04421"' },
    { key: 'intent', value: '"request_for_action"' },
    { key: 'action_items', value: '[ "submit Q3 readiness report", "schedule review" ]' },
    { key: 'confidence', value: '0.992' }
  ];

  return (
    <div ref={ref} className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
        {/* Left: scanned Arabic letter */}
        <motion.div
          initial={{ opacity: 0, y: 12, rotate: -3 }}
          animate={inView ? { opacity: 1, y: 0, rotate: -2.5 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="relative sm:col-span-2"
        >
          <div className="aspect-[3/4] rounded-xl bg-[#F4ECDB] p-5 shadow-2xl ring-1 ring-black/10">
            <div className="flex items-center justify-between border-b border-[#D4B86A]/40 pb-2">
              <div className="h-2 w-12 rounded-full bg-[#D4B86A]/60" />
              <div className="text-[8px] font-semibold tracking-widest text-[#9C7E32]">
                FEDERAL AUTHORITY
              </div>
            </div>
            <div className="mt-4 space-y-3" dir="rtl" lang="ar">
              <div className="h-1.5 w-3/5 rounded bg-[#0B1A30]/70" />
              <div className="h-1.5 w-4/5 rounded bg-[#0B1A30]/70" />
              <div className="h-1.5 w-2/3 rounded bg-[#0B1A30]/70" />
              <p className="text-right font-serif text-[11px] leading-snug text-[#0B1A30]/85">
                المحترم مدير مكتب التحول الرقمي
                <br />
                تحية طيبة وبعد،
                <br />
                نرفق طيه التقرير المطلوب…
              </p>
              <div className="h-1.5 w-5/6 rounded bg-[#0B1A30]/70" />
              <div className="h-1.5 w-3/4 rounded bg-[#0B1A30]/70" />
              <div className="h-1.5 w-2/3 rounded bg-[#0B1A30]/70" />
              <div className="h-1.5 w-4/5 rounded bg-[#0B1A30]/70" />
              <div className="mt-6 flex items-end justify-between">
                <div className="h-8 w-16 rounded border-2 border-[#D4B86A]/70 bg-[#D4B86A]/10" />
                <div className="h-1.5 w-1/3 rounded bg-[#0B1A30]/70" />
              </div>
            </div>
          </div>
          <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-white/40">
            Scanned · 300 DPI
          </p>
        </motion.div>

        {/* Right: JSON panel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative sm:col-span-3"
        >
          <div className="overflow-hidden rounded-xl border border-[#D4B86A]/30 bg-[#06101E] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                <span className="h-2 w-2 rounded-full bg-[#28C840]" />
              </div>
              <span className="font-mono text-[10px] text-white/40">
                extracted.json
              </span>
            </div>
            <div className="px-4 py-4 font-mono text-[11px] leading-relaxed text-white/80 sm:text-xs">
              <span className="text-white/40">{'{'}</span>
              <div className="pl-4">
                {lines.map((l, i) => (
                  <motion.div
                    key={l.key}
                    initial={{ opacity: 0, x: -4 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.25,
                      delay: 0.4 + i * 0.12,
                      ease: 'easeOut'
                    }}
                    className="flex flex-wrap items-baseline gap-x-2"
                  >
                    <span className="text-[#D4B86A]">"{l.key}"</span>
                    <span className="text-white/40">:</span>
                    <span className="text-[#9DD7B6]">{l.value}</span>
                    {i < lines.length - 1 && <span className="text-white/40">,</span>}
                  </motion.div>
                ))}
              </div>
              <span className="text-white/40">{'}'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
