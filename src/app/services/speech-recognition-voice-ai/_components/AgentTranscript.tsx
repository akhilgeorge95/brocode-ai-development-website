'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/**
 * Hero visual — "agent desktop" view:
 *  - Left two-thirds: live Arabic/English code-switched transcript with KHJ
 *    dialect tags and English underlines, building word-by-word on viewport entry.
 *  - Right third: agent-assist panel with NBA card and sentiment ribbon.
 *  - Top-right: monospace latency badge ticking at 287 ms.
 *
 * Per the brief, real Khaleeji transcript content must be reviewed by a
 * native speaker before publish. The placeholder turns below are polite,
 * generic, and grammatically reasonable.
 */
type Token = { text: string; lang: 'ar' | 'en' | 'punct'; dialect?: 'KHJ' };

const TURNS: { speaker: 'Customer' | 'Agent'; tokens: Token[] }[] = [
  {
    speaker: 'Customer',
    tokens: [
      { text: 'السلام', lang: 'ar' },
      { text: 'عليكم،', lang: 'ar', dialect: 'KHJ' },
      { text: 'صراحة', lang: 'ar', dialect: 'KHJ' },
      { text: 'the', lang: 'en' },
      { text: 'OTP', lang: 'en' },
      { text: 'ما', lang: 'ar', dialect: 'KHJ' },
      { text: 'وصل', lang: 'ar', dialect: 'KHJ' }
    ]
  },
  {
    speaker: 'Agent',
    tokens: [
      { text: 'وعليكم', lang: 'ar' },
      { text: 'السلام،', lang: 'ar' },
      { text: 'دقيقة', lang: 'ar' },
      { text: 'I', lang: 'en' },
      { text: 'check', lang: 'en' },
      { text: 'your', lang: 'en' },
      { text: 'account.', lang: 'en' }
    ]
  }
];

export function AgentTranscript() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [latency, setLatency] = useState(287);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      setLatency(() => 280 + Math.floor(Math.random() * 18));
    }, 1200);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      {/* Transcript pane */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#06101E] shadow-2xl lg:col-span-3">
        <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#FF4D4D]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/55">Live transcript</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-white/55">
            <span className="rounded bg-[#E2B679]/20 px-2 py-0.5 text-[#E2B679]">{latency} ms</span>
            <span>first-token</span>
          </div>
        </div>
        <div className="space-y-4 p-5">
          {TURNS.map((turn, ti) => (
            <div key={ti}>
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-white/40">
                {turn.speaker}
              </p>
              <p
                dir="rtl"
                lang="ar"
                className="flex flex-wrap-reverse items-baseline gap-x-2 gap-y-1.5 text-base leading-loose text-white"
              >
                {turn.tokens.map((t, i) => (
                  <motion.span
                    key={`${ti}-${i}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.25, delay: 0.4 + ti * 1.4 + i * 0.18 }}
                    className="relative"
                  >
                    {t.lang === 'en' ? (
                      <span className="font-sans text-[#9DC4FF] underline decoration-[#3B92F4] decoration-2 underline-offset-4">
                        {t.text}
                      </span>
                    ) : (
                      <span className={t.dialect === 'KHJ' ? 'font-semibold text-white' : 'text-white/85'}>
                        {t.text}
                      </span>
                    )}
                    {t.dialect && (
                      <span className="ml-0.5 align-super text-[8px] font-bold text-[#E2B679]">
                        {t.dialect}
                      </span>
                    )}
                  </motion.span>
                ))}
              </p>
            </div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 3.6 }}
            className="flex items-center gap-1 pt-2"
            aria-label="Listening"
          >
            <span className="h-2 w-1 animate-pulse rounded-sm bg-[#E2B679]" />
            <span className="h-3 w-1 animate-pulse rounded-sm bg-[#E2B679]" style={{ animationDelay: '0.1s' }} />
            <span className="h-4 w-1 animate-pulse rounded-sm bg-[#E2B679]" style={{ animationDelay: '0.2s' }} />
            <span className="h-2 w-1 animate-pulse rounded-sm bg-[#E2B679]" style={{ animationDelay: '0.3s' }} />
            <span className="ml-2 font-mono text-[10px] text-white/40">listening…</span>
          </motion.div>
        </div>
      </div>

      {/* Agent-assist panel */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl lg:col-span-2">
        <div className="border-b border-white/5 px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/55">Agent assist</p>
        </div>
        <div className="space-y-4 p-5">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.0 }}
            className="rounded-xl border border-[#E2B679]/40 bg-[#E2B679]/10 p-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E2B679]">Next best action</p>
            <p className="mt-1.5 text-sm font-semibold text-white">Re-send OTP via SMS</p>
            <p className="mt-1 text-xs text-white/65">Customer eligible. KB article #2841.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.5 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">Sentiment</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: '20%' }}
                  animate={inView ? { width: '74%' } : {}}
                  transition={{ delay: 2.6, duration: 1.4 }}
                  className="h-2 bg-gradient-to-r from-[#FFB454] via-[#FFE08A] to-[#7BE0AC]"
                />
              </div>
              <span className="font-mono text-[10px] text-white/55">+0.42</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 3.0 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">Detected intent</p>
            <ul className="mt-2 space-y-1 text-xs text-white/80">
              <li className="flex items-center justify-between">
                <span>OTP not received</span>
                <span className="font-mono text-[10px] text-white/55">0.94</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Login issue</span>
                <span className="font-mono text-[10px] text-white/55">0.18</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
