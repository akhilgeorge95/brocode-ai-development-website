import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0E1A',
          900: '#0A0E1A',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F9FAFB'
        },
        brand: {
          DEFAULT: '#0070F2',
          700: '#0040A1',
          600: '#0058C7',
          500: '#0070F2',
          400: '#3B92F4',
          300: '#7DB7F7',
          200: '#B9D7FB',
          100: '#E6F0FE',
          50: '#F2F7FE'
        },
        accent: {
          DEFAULT: '#00D1B7',
          dark: '#00A893'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F6F8FB',
          deep: '#06070C'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 6vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-xl': ['clamp(2.75rem, 4.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-lg': ['clamp(2.25rem, 3.5vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.75rem, 2.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'eyebrow': ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.12em', fontWeight: '600' }]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem'
      },
      maxWidth: {
        'site': '1280px',
        'prose-wide': '72ch'
      },
      borderRadius: {
        'xl2': '1.25rem'
      },
      boxShadow: {
        'card': '0 1px 2px 0 rgba(10, 14, 26, 0.04), 0 8px 24px -8px rgba(10, 14, 26, 0.08)',
        'card-hover': '0 1px 2px 0 rgba(10, 14, 26, 0.06), 0 16px 40px -12px rgba(10, 14, 26, 0.18)'
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)'
      }
    }
  },
  plugins: []
};

export default config;
