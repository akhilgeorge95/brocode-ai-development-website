'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div'
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'li' | 'article';
}) {
  const Comp: any = motion[as as keyof typeof motion] ?? motion.div;
  return (
    <Comp
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}
