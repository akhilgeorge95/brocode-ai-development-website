'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ParallaxProps = {
  children?: ReactNode;
  speed?: number; // 0.3 = slower than scroll, 1 = matches scroll
  className?: string;
};

export function Parallax({ children, speed = 0.4, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const yShift = (1 - speed) * 160;
  const y = useTransform(scrollYProgress, [0, 1], [yShift, -yShift]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
      // Disable on mobile via CSS rather than JS
    >
      {children}
    </motion.div>
  );
}
