import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LenisProvider } from '@/components/LenisProvider';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SITE } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} | Abu Dhabi-headquartered AI engineering`,
    template: `%s | ${SITE.shortName}`
  },
  description:
    'Brocode Solutions builds enterprise-grade artificial intelligence software for government, banking, healthcare, and industry across the GCC. UAE-headquartered AI engineering, MLOps, and applied research.',
  keywords: [
    'AI development UAE',
    'machine learning Abu Dhabi',
    'generative AI Dubai',
    'enterprise AI GCC',
    'MLOps Middle East',
    'Arabic NLP',
    'AI consulting UAE'
  ],
  authors: [{ name: SITE.brand }],
  creator: SITE.brand,
  publisher: SITE.brand,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.brand,
    title: `${SITE.brand}`,
    description:
      'Enterprise AI software engineering from Abu Dhabi. Machine learning, generative AI, computer vision, and MLOps for regulated industries.',
    url: SITE.url,
    locale: 'en_AE',
    images: [
      {
        url: '/images/general/og-default.jpg',
        width: 1200,
        height: 630,
        alt: SITE.brand
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.brand,
    description:
      'Enterprise AI software engineering from Abu Dhabi for the GCC and beyond.',
    images: ['/images/general/og-default.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.brand,
  url: SITE.url,
  logo: `${SITE.url}/images/general/logo.svg`,
  description:
    'Enterprise AI software engineering company headquartered in Abu Dhabi, UAE.',
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.hq.line1}, ${SITE.hq.line2}`,
    addressLocality: SITE.hq.city,
    addressCountry: 'AE'
  },
  sameAs: Object.values(SITE.social)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-ink-900 antialiased">
        {/* Google Tag Manager placeholder */}
        <Script id="gtm-placeholder" strategy="afterInteractive">
          {`/* GTM container placeholder – inject GTM-XXXX here */`}
        </Script>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <LenisProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LenisProvider>
      </body>
    </html>
  );
}
