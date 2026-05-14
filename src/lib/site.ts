export const SITE = {
  name: 'Brocode Solutions',
  brand: 'Brocode Solutions — AI Software Development',
  shortName: 'Brocode AI',
  tagline: 'Enterprise AI engineering for the GCC and beyond.',
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
    country: 'United Arab Emirates'
  },
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
