'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type Common = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Optional tracking event id sent via data-event */
  event?: string;
};

type ButtonProps = Common & { href?: undefined; onClick?: () => void; type?: 'button' | 'submit' };
type LinkProps = Common & { href: string; target?: string; rel?: string };

const VARIANTS: Record<NonNullable<Common['variant']>, string> = {
  primary: 'bg-ink-900 text-white hover:bg-brand',
  secondary: 'bg-white text-ink-900 border border-ink-200 hover:border-ink-900',
  ghost: 'bg-transparent text-ink-900 hover:text-brand',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1faa53]'
};

const SIZES: Record<NonNullable<Common['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base'
};

function useMagnetic() {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  const transform = useTransform([sx, sy], ([vx, vy]: number[]) => `translate3d(${vx}px, ${vy}px, 0)`);

  const onMove = (e: React.MouseEvent) => {
    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    x.set(dx * 14);
    y.set(dy * 8);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { ref, transform, onMove, onLeave };
}

export function MagneticButton(props: ButtonProps | LinkProps) {
  const { children, variant = 'primary', size = 'md', className, event } = props;
  const { ref, transform, onMove, onLeave } = useMagnetic();

  const cls = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200',
    VARIANTS[variant],
    SIZES[size],
    className
  );

  if ('href' in props && props.href) {
    return (
      <motion.span
        ref={ref as React.MutableRefObject<HTMLSpanElement | null>}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transform }}
        className="inline-block will-change-transform"
      >
        <Link href={props.href} target={props.target} rel={props.rel} className={cls} data-event={event}>
          {children}
        </Link>
      </motion.span>
    );
  }
  const { onClick, type } = props as ButtonProps;
  return (
    <motion.span
      ref={ref as React.MutableRefObject<HTMLSpanElement | null>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform }}
      className="inline-block will-change-transform"
    >
      <button onClick={onClick} type={type ?? 'button'} className={cls} data-event={event}>
        {children}
      </button>
    </motion.span>
  );
}
