/**
 * GitHub Pages serves this site at /<repo-name>/, so we set basePath + assetPrefix
 * from an env var during CI. Locally and on Vercel they stay empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const isStaticExport = process.env.NEXT_OUTPUT === 'export';

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // GitHub Pages serves static files only — the Next.js image optimiser
    // is not available, so we ship the originals as-is.
    unoptimized: true,
    formats: ['image/avif', 'image/webp']
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  ...(isStaticExport ? { output: 'export' } : {}),
  ...(!isStaticExport
    ? {
        async headers() {
          return [{ source: '/(.*)', headers: securityHeaders }];
        }
      }
    : {})
};

module.exports = nextConfig;
