import type { LongPage } from '../types';

export const termsOfService: LongPage = {
  slug: 'terms-of-service',
  category: 'legal',
  title: 'Terms of Service',
  seoTitle: 'Terms of Service — Brocode Solutions',
  seoDescription:
    'The terms governing access to and use of the Brocode Solutions website, including intellectual property, acceptable use, limitations of liability, and governing law under the UAE and ADGM.',
  eyebrow: 'Site terms',
  headline: 'The terms on which you use this website.',
  sub: 'These terms set out the basis on which Brocode Solutions makes this website and its content available to you. Please read them carefully before using the site or downloading any material.',
  heroImage: '/images/legal/terms-of-service.jpg',
  heroImageAlt: 'Signed contract document resting on a desk beside a fountain pen and reading glasses',
  heroIcon: 'gavel',
  intro:
    'These Terms of Service ("Terms") govern your access to and use of the website operated by Brocode Solutions ("Brocode", "we", "us"), a company headquartered in Abu Dhabi, United Arab Emirates. Effective date: 1 January 2026. By accessing or using this site you agree to these Terms. If you do not agree, please do not use the site. Separate contractual terms apply to any services we deliver to clients; those terms prevail over these Terms in respect of the relevant engagement. Questions about these Terms can be sent to dpo@brocode.ae.',
  sections: [
    {
      heading: '1. Use of the site and acceptable use',
      body: 'You may access this site for lawful purposes connected with learning about our services, downloading whitepapers and guides made available for that purpose, and contacting us. You agree not to use the site in any way that breaches applicable law in the UAE or your jurisdiction; that infringes the rights of any third party; that interferes with the operation of the site or any systems or networks it relies on; that attempts to gain unauthorised access to any account, system, or data; or that introduces viruses, malware, or other harmful material. We may suspend or restrict access to all or part of the site at any time, including to perform maintenance, address security issues, or respond to a suspected breach of these Terms.'
    },
    {
      heading: '2. Intellectual property and content',
      body: 'All content on this site — including text, graphics, logos, images, downloadable documents, code samples, and the structure and arrangement of the foregoing — is owned by Brocode or our licensors and is protected by UAE and international intellectual property laws. We grant you a limited, non-exclusive, non-transferable licence to access the site and to view, download, and print content for your own internal business or personal reference, provided you retain all copyright and other proprietary notices. You may not reproduce, distribute, modify, or create derivative works for commercial purposes, or remove our branding from any downloaded material, without our prior written consent. Trade marks displayed on the site remain the property of their respective owners.'
    },
    {
      heading: '3. Disclaimers and limitation of liability',
      body: 'The content on this site, including whitepapers, guides, and the glossary, is provided for general information. It is not legal, regulatory, financial, or tax advice and is not a substitute for advice tailored to your circumstances. While we take care to keep content accurate and current, we make no representation that it is complete, error-free, or suitable for any specific purpose. To the maximum extent permitted by UAE law, Brocode is not liable for any indirect, incidental, special, or consequential loss, or any loss of profit, revenue, data, or goodwill, arising out of your use of the site or reliance on its content. Our aggregate liability arising in connection with these Terms is capped at AED 1,000.'
    },
    {
      heading: '4. Governing law, jurisdiction, and changes',
      body: 'These Terms, and any non-contractual obligations arising in connection with them, are governed by the laws of the United Arab Emirates as applied in the Abu Dhabi Global Market (ADGM). The courts of the ADGM have exclusive jurisdiction over any dispute arising in connection with these Terms, save that we reserve the right to bring proceedings in any other competent court for the purpose of protecting our intellectual property or confidential information. We may update these Terms from time to time; the effective date at the top of this page will reflect the latest version. Continued use of the site after a change indicates acceptance of the updated Terms.'
    }
  ],
  highlights: [
    { title: 'Effective date 1 January 2026', description: 'The current version of these Terms.', icon: 'doc' },
    { title: 'Lawful use of the site', description: 'Access for learning, downloads, and contact under UAE law.', icon: 'shield' },
    { title: 'Limited content licence', description: 'View, download, and print for internal reference only.', icon: 'compass' },
    { title: 'Trade marks respected', description: 'Brocode and third-party marks remain with their owners.', icon: 'gavel' },
    { title: 'Liability framework', description: 'Disclaimers and a clear aggregate liability cap.', icon: 'doc' },
    { title: 'ADGM courts', description: 'Governing law and forum for any dispute.', icon: 'gavel' }
  ],
  whyBrocode:
    'We publish straightforward Terms because the people reading them are usually procurement, legal, and risk professionals who appreciate clarity. Nothing in these Terms is hidden or surprising, and the clauses match the way our wider commercial documents are written.',
  ourApproach:
    'These Terms are owned by our legal function and reviewed at least annually alongside our wider contract templates. Where a clause would otherwise be ambiguous, we take the reading that aligns with how we actually behave in practice. Substantive changes are reflected by updating the effective date at the top of this page rather than by quiet edits. For clients with active engagements, the master services agreement and statement of work signed for that engagement set out the operative terms; these site Terms apply only to general use of the website itself.',
  stats: [
    { value: 2026, label: 'Effective year of these Terms' },
    { value: 1000, prefix: 'AED ', label: 'Aggregate liability cap' },
    { value: 12, label: 'Months between scheduled reviews' },
    { value: 45, label: 'UAE PDPL Federal Decree-Law number referenced' }
  ],
  primaryCta: { label: 'Contact us with questions', href: '/contact' },
  secondaryCta: { label: 'Read our privacy policy', href: '/privacy-policy' },
  related: [
    { label: 'Privacy Policy', href: '/privacy-policy', description: 'How we handle personal data.' },
    { label: 'Cookie Policy', href: '/cookie-policy', description: 'Cookies and similar technologies on this site.' },
    { label: 'Security & Compliance', href: '/security-compliance', description: 'Our security and compliance posture.' },
    { label: 'About Brocode', href: '/about', description: 'Who we are and where we operate.' },
    { label: 'Contact', href: '/contact', description: 'Reach us for any commercial enquiry.' }
  ],
  capabilities: [
    'Acceptable use rules for visitors to the site',
    'Limited licence to view and download our content',
    'Intellectual property protection for Brocode material',
    'Trade mark recognition for third parties',
    'Liability disclaimers and an aggregate cap',
    'Governing law and forum under UAE and ADGM'
  ],
  outcomes: [
    'Clarity on what you may and may not do with our content',
    'A defined route to raise questions or concerns',
    'A clear forum for any dispute arising from the site',
    'Transparent versioning of the operative terms',
    'Consistency with our master commercial documents'
  ]
};
