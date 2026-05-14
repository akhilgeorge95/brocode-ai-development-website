'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

/**
 * Ticks from 0.0 % to `target` % over ~1.5 s when scrolled into view.
 * Renders a fixed-width meter with a precision-feel monospace counter.
 */
export function AccuracyMeter({ target = 99.2 }: { target?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0.25, 1, 0.5, 1],
      onUpdate(v) {
        setValue(v);
      }
    });
    return () => controls.stop();
  }, [inView, target]);

  const pct = Math.min(100, (value / 100) * 100);

  return (
    <div ref={ref} className="mt-4">
      <div className="flex items-end justify-between">
        <p className="font-mono text-4xl font-bold text-white">
          {value.toFixed(1)}
          <span className="ml-1 text-2xl text-[#D4B86A]">%</span>
        </p>
        <p className="text-xs text-white/55">Target: 99.2 % field-level</p>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#D4B86A] to-[#E6CE89]"
        />
      </div>
    </div>
  );
}
