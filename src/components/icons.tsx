type IconProps = { className?: string };

const base = 'h-5 w-5';

export const IconBrain = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 4.5A2.5 2.5 0 0 1 11.5 7v10A2.5 2.5 0 0 1 9 19.5 2.5 2.5 0 0 1 6.5 17M9 4.5A2.5 2.5 0 0 0 6.5 7 2.5 2.5 0 0 0 4 9.5C4 11 5 12 6.5 12M15 4.5A2.5 2.5 0 0 0 12.5 7v10a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5M15 4.5A2.5 2.5 0 0 1 17.5 7 2.5 2.5 0 0 1 20 9.5C20 11 19 12 17.5 12" />
  </svg>
);

export const IconNeural = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="4" cy="6" r="1.5" /><circle cx="4" cy="12" r="1.5" /><circle cx="4" cy="18" r="1.5" />
    <circle cx="12" cy="9" r="1.5" /><circle cx="12" cy="15" r="1.5" />
    <circle cx="20" cy="12" r="1.5" />
    <path d="M5.5 6 10.5 9M5.5 12 10.5 9M5.5 12l5 3M5.5 18l5-3M13.5 9 18.5 12M13.5 15 18.5 12" />
  </svg>
);

export const IconChat = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a8 8 0 0 1-11.4 7.3L4 21l1.7-5.6A8 8 0 1 1 21 12Z" />
  </svg>
);

export const IconEye = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconCpu = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);

export const IconBolt = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="currentColor">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const IconShield = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <path d="M12 3 4 6v6c0 5 3.4 8.7 8 9 4.6-.3 8-4 8-9V6l-8-3Z" />
  </svg>
);

export const IconChart = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20V4M4 20h16M8 16V10M12 16V6M16 16V13" />
  </svg>
);

export const IconRoute = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" />
    <path d="M6 9v3a4 4 0 0 0 4 4h2a4 4 0 0 1 4 4" />
  </svg>
);

export const IconCloud = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <path d="M7 18a4 4 0 0 1-.4-7.9 6 6 0 0 1 11.6 1.4A4.5 4.5 0 0 1 17 18H7Z" />
  </svg>
);

export const IconLayers = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 18l9 5 9-5" />
  </svg>
);

export const IconGavel = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="m14 5 5 5M11 8l5 5M4 20h12M8 14l-4 4 2 2 4-4" />
  </svg>
);

export const IconDoc = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M8 13h8M8 17h5" />
  </svg>
);

export const IconCode = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16" />
  </svg>
);

export const IconMic = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);

export const IconCogs = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

export const IconCompass = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-2 6-4 1 2-6 4-1Z" />
  </svg>
);

export const IconLink = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 15a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7L11 7" />
    <path d="M15 9a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7L13 17" />
  </svg>
);

export const IconWorkflow = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="9" width="6" height="6" rx="1" />
    <rect x="3" y="15" width="6" height="6" rx="1" />
    <path d="M9 6h3a3 3 0 0 1 3 3v0M9 18h3a3 3 0 0 0 3-3v0" />
  </svg>
);

export const IconDatabase = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

export const ICON_MAP = {
  brain: IconBrain,
  neural: IconNeural,
  chat: IconChat,
  eye: IconEye,
  cpu: IconCpu,
  bolt: IconBolt,
  shield: IconShield,
  chart: IconChart,
  route: IconRoute,
  cloud: IconCloud,
  layers: IconLayers,
  gavel: IconGavel,
  doc: IconDoc,
  code: IconCode,
  mic: IconMic,
  cogs: IconCogs,
  compass: IconCompass,
  link: IconLink,
  workflow: IconWorkflow,
  database: IconDatabase
} as const;

export type IconKey = keyof typeof ICON_MAP;
