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
    default: `${SITE.brand} | AI Development Company in UAE — Abu Dhabi & Dubai`,
    template: `%s | ${SITE.shortName}`
  },
  description:
    'Brocode Solutions is a UAE-based AI development company headquartered in Abu Dhabi with delivery teams across Dubai. We build enterprise-grade artificial intelligence software — machine learning, generative AI, computer vision, Arabic NLP, and MLOps — for government, banking, healthcare, energy, and industry across the UAE and the wider GCC.',
  keywords: [
    'AI development company UAE',
    'AI development company Dubai',
    'AI development company Abu Dhabi',
    'artificial intelligence company UAE',
    'machine learning company Dubai',
    'machine learning Abu Dhabi',
    'generative AI Dubai',
    'generative AI Abu Dhabi',
    'enterprise AI UAE',
    'enterprise AI GCC',
    'AI consulting Dubai',
    'AI consulting Abu Dhabi',
    'AI consulting UAE',
    'MLOps UAE',
    'MLOps Middle East',
    'Arabic NLP UAE',
    'computer vision Dubai',
    'chatbot development UAE',
    'LLM development UAE',
    'data science company UAE',
    'AI services Dubai',
    'AI services Abu Dhabi',
    'sovereign AI UAE',
    'G42 Cloud partner',
    'CBUAE AI compliance'
  ],
  authors: [{ name: SITE.brand }],
  creator: SITE.brand,
  publisher: SITE.brand,
  alternates: {
    canonical: '/',
    languages: {
      'en-AE': '/',
      'en-GB': '/',
      'x-default': '/'
    }
  },
  other: {
    'geo.region': 'AE-AZ',
    'geo.placename': 'Abu Dhabi, Dubai, United Arab Emirates',
    'geo.position': `${SITE.hq.latitude};${SITE.hq.longitude}`,
    'ICBM': `${SITE.hq.latitude}, ${SITE.hq.longitude}`
  },
  openGraph: {
    type: 'website',
    siteName: SITE.brand,
    title: `${SITE.brand} | AI Development Company in UAE — Abu Dhabi & Dubai`,
    description:
      'Enterprise AI software engineering headquartered in Abu Dhabi with delivery across Dubai and the wider UAE. Machine learning, generative AI, Arabic NLP, computer vision, and MLOps for regulated industries.',
    url: SITE.url,
    locale: 'en_AE',
    alternateLocale: ['en_GB', 'en_US', 'ar_AE'],
    images: [
      {
        url: '/images/general/og-default.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE.brand} — AI development company in the UAE (Abu Dhabi & Dubai)`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brocodeai',
    creator: '@brocodeai',
    title: `${SITE.brand} | AI Development in UAE — Abu Dhabi & Dubai`,
    description:
      'Enterprise AI engineering from Abu Dhabi and Dubai for the UAE and the wider GCC.',
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
  '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.brand,
  alternateName: [SITE.name, SITE.shortName, 'Brocode AI Development'],
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}/images/general/og-default.jpg`,
    width: 1200,
    height: 630
  },
  image: `${SITE.url}/images/general/og-default.jpg`,
  description:
    'Enterprise AI software development company headquartered in Abu Dhabi, UAE, with delivery teams in Dubai. Machine learning, generative AI, Arabic NLP, computer vision, and MLOps for the UAE and the wider GCC.',
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: SITE.foundingDate,
  priceRange: SITE.priceRange,
  openingHours: SITE.openingHours,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.hq.line1}, ${SITE.hq.line2}`,
    addressLocality: SITE.hq.city,
    addressRegion: SITE.hq.region,
    postalCode: SITE.hq.postalCode,
    addressCountry: SITE.hq.countryCode
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.hq.latitude,
    longitude: SITE.hq.longitude
  },
  hasMap: `https://www.google.com/maps?q=${SITE.hq.latitude},${SITE.hq.longitude}`,
  areaServed: [
    {
      '@type': 'Country',
      name: 'United Arab Emirates',
      identifier: 'AE'
    },
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'City', name: 'Sharjah' },
    { '@type': 'AdministrativeArea', name: 'Gulf Cooperation Council' },
    ...SITE.countriesServed
      .filter((c) => c !== 'United Arab Emirates')
      .map((c) => ({ '@type': 'Country', name: c }))
  ],
  serviceArea: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE.hq.latitude,
        longitude: SITE.hq.longitude
      },
      geoRadius: '500000'
    },
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE.dubai.latitude,
        longitude: SITE.dubai.longitude
      },
      geoRadius: '120000'
    }
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: SITE.phone,
      email: SITE.email,
      areaServed: ['AE', 'SA', 'QA', 'OM', 'BH', 'KW'],
      availableLanguage: ['English', 'Arabic']
    }
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'Large Language Models',
    'Arabic Natural Language Processing',
    'Computer Vision',
    'MLOps',
    'AI Strategy and Consulting',
    'Sovereign AI Deployment'
  ],
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
