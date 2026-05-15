export const SITE = {
  name: 'Brocode Solutions',
  brand: 'Brocode Solutions — AI Software Development',
  shortName: 'Brocode AI',
  tagline: 'Enterprise AI engineering for the UAE — Abu Dhabi, Dubai, and the GCC.',
  url: 'https://www.brocode.ae',
  email: 'hello@brocode.ae',
  phone: '+971 50 761 2213',
  whatsapp: {
    /** Phone number in international format without spaces or symbols for wa.me links. */
    number: '971507612213',
    /** Pretty display format. */
    display: '+971 50 761 2213'
  },
  hq: {
    line1: 'Al Maryah Island',
    line2: 'Abu Dhabi Global Market (ADGM)',
    city: 'Abu Dhabi',
    region: 'Abu Dhabi',
    postalCode: '00000',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    latitude: 24.5006,
    longitude: 54.3814
  },
  dubai: {
    city: 'Dubai',
    region: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    latitude: 25.2048,
    longitude: 55.2708
  },
  /** Cities and emirates the firm actively serves on the ground. */
  serviceAreas: [
    'Abu Dhabi',
    'Dubai',
    'Sharjah',
    'Ajman',
    'Ras Al Khaimah',
    'Fujairah',
    'Umm Al Quwain'
  ] as const,
  /** Countries served beyond the UAE — used for Service / Organization JSON-LD areaServed. */
  countriesServed: [
    'United Arab Emirates',
    'Saudi Arabia',
    'Qatar',
    'Oman',
    'Bahrain',
    'Kuwait',
    'Egypt',
    'Jordan'
  ] as const,
  openingHours: 'Mo-Fr 09:00-18:00',
  foundingDate: '2019',
  priceRange: 'AED 500K - AED 15M+',
  social: {
    linkedin: 'https://www.linkedin.com/company/brocode-ai',
    twitter: 'https://x.com/brocodeai',
    youtube: 'https://www.youtube.com/@brocodeai',
    github: 'https://github.com/brocode-ai'
  }
} as const;

/**
 * Build a WhatsApp deep-link with a page-specific pre-filled message.
 * Every page passes its own message (from its conversion brief field 15).
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
