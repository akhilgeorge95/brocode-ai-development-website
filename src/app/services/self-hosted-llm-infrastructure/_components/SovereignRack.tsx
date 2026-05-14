'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Hero visual — a stylised "single rack" render in a server room:
 *  - Matte-black 6U rack with rows of NVIDIA H100 GPUs.
 *  - NVIDIA-green LEDs pulse softly.
 *  - Translucent overlay labels the logical components.
 *  - A subtle "Owned by [Customer]" tag.
 *  - A UAE map outline on the glass wall behind the rack with a single
 *    in-country pin.
 *  - 0 bytes egressed / 100 % customer-held keys ticker.
 *
 * Low-key, technical, security-product feel — not a SaaS hero.
 */
export function SovereignRack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#080B12] shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
        {/* Glass-wall UAE map outline */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full opacity-[0.18]"
          aria-hidden
        >
          {/* Simplified UAE outline */}
          <path
            d="M 80 180 Q 120 155 170 158 L 210 145 Q 250 135 285 145 L 305 175 Q 320 200 305 225 L 290 250 Q 260 275 220 270 L 175 280 Q 130 275 95 255 Q 75 220 80 180 Z"
            fill="none"
            stroke="#76B900"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <circle cx="245" cy="195" r="6" fill="#76B900">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="255" y="200" fill="#76B900" fontSize="9" fontFamily="ui-monospace, monospace">
            customer DC · in-country
          </text>
        </svg>

        {/* Rack body */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] w-[200px] rounded-md border border-white/10 bg-gradient-to-b from-[#0E1117] via-[#0B0E14] to-[#080B12] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Door bracket */}
            <div className="absolute inset-x-3 top-3 flex items-center justify-between rounded-sm border border-white/5 px-2 py-1">
              <span className="font-mono text-[8px] uppercase tracking-widest text-white/40">
                rack · 6U
              </span>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#76B900]" />
            </div>

            {/* "Owned by Customer" badge */}
            <div className="absolute -right-1 top-12 rotate-90 rounded-sm bg-[#76B900]/15 px-2 py-1">
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#76B900]">
                owned by customer
              </span>
            </div>

            {/* GPU rows */}
            <div className="absolute inset-x-3 top-12 space-y-2.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-center justify-between rounded-sm border border-white/5 bg-[#04070D] px-2 py-1.5"
                >
                  <span className="font-mono text-[8px] uppercase tracking-widest text-white/50">
                    H100 · {String(i).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 4 }).map((_, d) => (
                      <motion.span
                        key={d}
                        className="h-1 w-1 rounded-full bg-[#76B900]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.1 + d * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* NVLink fabric */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="absolute inset-x-3 bottom-24 rounded-sm border border-[#76B900]/30 bg-[#76B900]/5 px-2 py-1.5"
            >
              <p className="font-mono text-[8px] uppercase tracking-widest text-[#76B900]">
                NVLink fabric
              </p>
            </motion.div>

            {/* HSM/KMS at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="absolute inset-x-3 bottom-10 rounded-sm border border-[#E6CE89]/40 bg-[#E6CE89]/5 px-2 py-1.5"
            >
              <p className="font-mono text-[8px] uppercase tracking-widest text-[#E6CE89]">
                HSM · Thales Luna
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="absolute inset-x-3 bottom-3 rounded-sm border border-[#E6CE89]/40 bg-[#E6CE89]/5 px-2 py-1.5"
            >
              <p className="font-mono text-[8px] uppercase tracking-widest text-[#E6CE89]">
                vLLM cluster
              </p>
            </motion.div>
          </motion.div>

          {/* Floating labels */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="absolute -right-44 top-12 hidden w-40 rounded-md border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl lg:block"
          >
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#76B900]">8x H100</p>
            <p className="mt-0.5 text-[10px] text-white/70">NVLink-connected · FP8 path</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="absolute -left-44 bottom-12 hidden w-40 rounded-md border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl lg:block"
          >
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#E6CE89]">customer HSM</p>
            <p className="mt-0.5 text-[10px] text-white/70">FIPS 140-3 Level 3</p>
          </motion.div>
        </div>

        {/* Bottom egress ticker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-md border border-[#76B900]/30 bg-black/50 px-3 py-2 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#76B900]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
              0 bytes egressed
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#76B900]">
            100 % customer-held keys
          </span>
        </motion.div>
      </div>
    </div>
  );
}
