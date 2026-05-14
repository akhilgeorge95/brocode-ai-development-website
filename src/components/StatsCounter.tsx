'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function StatsCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 1600
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) requestAnimationFrame(tick);
      else setN(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  const display = Number.isInteger(value)
    ? Math.round(n).toLocaleString()
    : n.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      <p className="text-display-lg text-white">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </motion.div>
  );
}
