'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/**
 * Hero visual — isometric-feel platform topology with three lanes:
 *   Build → Deploy → Observe
 * Tiny animated packets travel along each lane. A "Mean time-to-production:
 * 6 days" card pulses in the lower-right.
 *
 * Charcoal background, single NVIDIA-green accent for the GPU lane.
 */
export function PlatformTopology() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [days, setDays] = useState(6.0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      setDays(() => 5.7 + Math.random() * 0.6);
    }, 1400);
    return () => window.clearInterval(id);
  }, [inView]);

  const lanes = [
    {
      label: 'Build',
      color: '#76B900',
      stages: ['GitLab CI', 'MLflow', 'BentoML build']
    },
    {
      label: 'Deploy',
      color: '#3B92F4',
      stages: ['Argo CD', 'Ray Shadow', 'Canary', 'Full rollout']
    },
    {
      label: 'Observe',
      color: '#E6CE89',
      stages: ['Arize drift', 'Prometheus', 'Auto-rollback']
    }
  ];

  return (
    <div ref={ref} className="relative">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E1014] p-6 shadow-2xl md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
              cluster · kubernetes
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#76B900]">
              · gpu pool (nvidia)
            </span>
          </div>
          <span className="rounded-full bg-white/5 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-white/55">
            v1.6.2
          </span>
        </div>

        <div className="space-y-5">
          {lanes.map((lane, li) => (
            <motion.div
              key={lane.label}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + li * 0.15 }}
              className="relative"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: lane.color }}>
                  {lane.label}
                </p>
                <span className="font-mono text-[9px] text-white/40">lane {li + 1}</span>
              </div>
              <div className="relative">
                <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
                <div className="relative flex items-center justify-between">
                  {lane.stages.map((stage, si) => (
                    <div key={stage} className="flex flex-col items-center">
                      <div
                        className="grid h-9 w-9 place-items-center rounded-lg border bg-[#13161B]"
                        style={{ borderColor: `${lane.color}66` }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: lane.color }} />
                      </div>
                      <span className="mt-1.5 max-w-[80px] truncate text-center text-[10px] text-white/60">
                        {stage}
                      </span>
                      {/* Animated packet */}
                      {si < lane.stages.length - 1 && (
                        <motion.span
                          initial={{ x: 0, opacity: 0 }}
                          animate={inView ? { x: 80, opacity: [0, 1, 0] } : {}}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            delay: li * 0.4 + si * 0.2,
                            ease: 'linear'
                          }}
                          className="pointer-events-none absolute -ml-9 mt-4 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: lane.color, boxShadow: `0 0 10px ${lane.color}` }}
                          aria-hidden
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Auto-rollback loop arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-end gap-2 pt-2 font-mono text-[10px] text-white/40"
          >
            <svg viewBox="0 0 60 16" className="h-3 w-12" fill="none" aria-hidden>
              <path d="M2 14 Q 30 -2 58 14" stroke="#E6CE89" strokeWidth="1.4" />
              <path d="M58 14 l-4 -4 m4 4 l-4 4" stroke="#E6CE89" strokeWidth="1.4" />
            </svg>
            <span>auto-rollback → build</span>
          </motion.div>
        </div>
      </div>

      {/* Pulsing metric card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute -bottom-4 -right-4 rounded-2xl border border-[#76B900]/40 bg-[#0E1014] p-5 shadow-2xl"
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-[#76B900]">
          Mean time-to-production
        </p>
        <p className="mt-1.5 font-mono text-3xl font-bold text-white">
          {days.toFixed(1)}
          <span className="ml-1 text-base font-normal text-white/55">days</span>
        </p>
        <p className="mt-1 text-[10px] text-white/50">across 14 deployments</p>
        <motion.div
          className="absolute -inset-px rounded-2xl"
          animate={{ boxShadow: ['0 0 0 0 #76B90033', '0 0 0 8px #76B90000'] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden
        />
      </motion.div>
    </div>
  );
}
