'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Hand-drawn-feel 5-lens radar chart (Value, Data, Tech, People, Governance).
 * Matte ink-blue on warm paper. Two layers:
 *  - Current state — filled in soft sand tone.
 *  - Target state — deep navy outline.
 *
 * Visual language: Harvard Business Review article opener, not SaaS dashboard.
 */

const AXES = ['Value', 'Data', 'Tech', 'People', 'Governance'];
const CURRENT = [3.0, 2.2, 2.6, 2.0, 1.8]; // example client's "current state"
const TARGET = [4.6, 4.4, 4.5, 4.2, 4.5];

const CX = 200;
const CY = 200;
const R = 150;

function polarToXY(angle: number, magnitude: number) {
  const m = (magnitude / 5) * R;
  // Start at top (12 o'clock), go clockwise.
  const radians = -Math.PI / 2 + angle;
  return { x: CX + m * Math.cos(radians), y: CY + m * Math.sin(radians) };
}

function pathForValues(values: number[]) {
  return values
    .map((v, i) => {
      const angle = (i * 2 * Math.PI) / values.length;
      const p = polarToXY(angle, v);
      return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    })
    .join(' ') + ' Z';
}

export function LensRadar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const ringMagnitudes = [1, 2, 3, 4, 5];

  return (
    <div ref={ref} className="relative rounded-2xl bg-[#FBF8EE] p-6 shadow-card ring-1 ring-[#0E2A4E]/10">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-mono uppercase tracking-widest text-[#8B5E2C]">
          5-lens diagnostic · sample client
        </p>
        <div className="flex items-center gap-3 text-[9px] font-mono uppercase tracking-widest text-[#8B5E2C]">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-3 rounded-sm bg-[#E2B679]/70" /> current
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-3 rounded-sm border-2 border-[#0E2A4E]" /> target
          </span>
        </div>
      </div>

      <svg viewBox="0 0 400 400" className="mt-3 h-auto w-full" role="img" aria-label="5-lens maturity radar — Value, Data, Tech, People, Governance">
        {/* Concentric rings */}
        {ringMagnitudes.map((m) => (
          <polygon
            key={`ring-${m}`}
            points={AXES.map((_, i) => {
              const angle = (i * 2 * Math.PI) / AXES.length;
              const p = polarToXY(angle, m);
              return `${p.x},${p.y}`;
            }).join(' ')}
            fill="none"
            stroke="#0E2A4E"
            strokeOpacity={0.08}
            strokeWidth={1}
          />
        ))}

        {/* Axes */}
        {AXES.map((_, i) => {
          const angle = (i * 2 * Math.PI) / AXES.length;
          const p = polarToXY(angle, 5);
          return (
            <line
              key={`axis-${i}`}
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="#0E2A4E"
              strokeOpacity={0.15}
              strokeWidth={1}
            />
          );
        })}

        {/* Target state — drawn first so current sits on top */}
        <motion.path
          d={pathForValues(TARGET)}
          fill="none"
          stroke="#0E2A4E"
          strokeWidth={2.2}
          strokeDasharray="5 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* Current state — sand fill */}
        <motion.path
          d={pathForValues(CURRENT)}
          fill="#E2B679"
          fillOpacity={0.4}
          stroke="#8B5E2C"
          strokeWidth={1.5}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* Axis labels */}
        {AXES.map((label, i) => {
          const angle = (i * 2 * Math.PI) / AXES.length;
          const p = polarToXY(angle, 5.5);
          return (
            <text
              key={label}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#0E2A4E"
              fontSize="13"
              fontWeight={600}
            >
              {label}
            </text>
          );
        })}

        {/* Score markers on current */}
        {CURRENT.map((v, i) => {
          const angle = (i * 2 * Math.PI) / AXES.length;
          const p = polarToXY(angle, v);
          return <circle key={`curr-${i}`} cx={p.x} cy={p.y} r={4} fill="#8B5E2C" />;
        })}
      </svg>

      <div className="mt-2 flex items-center justify-between border-t border-[#0E2A4E]/10 pt-3 text-xs text-[#0E2A4E]/70">
        <span>Scoring: 1 = ad-hoc · 5 = optimised</span>
        <span>Evidence-based · not survey-based</span>
      </div>
    </div>
  );
}
