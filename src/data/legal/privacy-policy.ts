import type { LongPage } from '../types';

export const privacyPolicy: LongPage = {
  slug: 'privacy-policy',
  category: 'legal',
  title: 'Privacy Policy',
  seoTitle: 'Privacy Policy — Brocode Solutions',
  seoDescription:
    'How Brocode Solutions collects, uses, retains, and protects personal data under UAE Federal Decree-Law No. 45 of 2021 (PDPL) and the EU GDPR, and how to exercise your rights.',
  eyebrow: 'Policy',
  headline: 'How we handle personal data, in plain language.',
  sub: 'This policy explains what personal information we collect through our website and engagements, why we collect it, how long we keep it, and the rights you can exercise under UAE and European data protection law.',
  heroImage: '/images/legal/privacy-policy.jpg',
  heroImageAlt: 'Open notebook with privacy notice text beside a closed padlock on a wooden desk',
  heroIcon: 'shield',
  intro:
    'Brocode Solutions ("Brocode", "we", "us") is the controller of the personal data described in this policy. Effective date: 1 January 2026. We are headquartered in Abu Dhabi, United Arab Emirates, and operate under UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL). Where we process personal data of individuals in the European Economic Area or the United Kingdom, we act in line with the EU and UK General Data Protection Regulation (GDPR). Questions about this policy or any personal data we hold should be sent to our Data Protection Officer at dpo@brocode.ae.',
  sections: [
    {
      heading: '1. What personal data we collect',
      body: 'We collect personal data that you provide directly — for example, when you complete the contact form, request a whitepaper, attend an event, apply for a role, or correspond with us by email. This typically includes name, job title, employer, business contact details, and any information you choose to include in the body of your message. We also collect technical data when you visit our website, such as IP address, browser type, device identifiers, referring URL, and pages viewed; details of these technical data points and the cookies involved are set out in our Cookie Policy. Where we deliver services, we may process personal data on behalf of our clients under a separate data processing agreement.'
    },
    {
      heading: '2. How we use personal data and our lawful basis',
      body: 'We use personal data to respond to your enquiry, deliver the services or content you request, manage our business relationship with you and your organisation, recruit for open roles, send you material you have asked to receive, secure our systems, and meet our legal and regulatory obligations. Under PDPL and GDPR, we rely on the following lawful bases as applicable: your consent for marketing communications and certain cookies; the necessity of processing to perform a contract with you or your organisation; our legitimate interests in running and improving the business, subject to a balancing test; and compliance with legal obligations, including tax, accounting, and anti-money-laundering requirements applicable in the UAE.'
    },
    {
      heading: '3. Sharing, retention, and security',
      body: 'We share personal data only where necessary: with carefully selected service providers acting on our instructions (for example, hosting, email, analytics, and recruitment platforms), with professional advisors under confidentiality, with public authorities where required by law, and with our clients or prospective clients where you have asked us to introduce you. We do not sell personal data. Data is retained for as long as needed for the purposes described, after which it is deleted or anonymised. Indicative retention periods are: contact form enquiries — 24 months; recruitment candidate data — up to 12 months unless you ask us to keep it longer; engagement records — for the period required by UAE law. Our security measures are described in our Security & Compliance page.'
    },
    {
      heading: '4. Your rights and how to contact us',
      body: 'Under PDPL and, where applicable, GDPR, you have rights to access the personal data we hold about you, to correct inaccurate data, to request deletion, to restrict or object to certain processing, to receive your data in a portable format, and to withdraw consent at any time without affecting the lawfulness of prior processing. You can also lodge a complaint with the UAE Data Office or your local supervisory authority. To exercise any of these rights, write to dpo@brocode.ae with enough information for us to identify you and your request. We will respond within the timelines set out in the applicable law, ordinarily within 30 days. We may update this policy from time to time; the effective date at the top of this page will reflect the latest version.'
    }
  ],
  highlights: [
    { title: 'Effective date 1 January 2026', description: 'The current version of this policy in force today.', icon: 'doc' },
    { title: 'Controller in the UAE', description: 'Brocode Solutions, headquartered in Abu Dhabi.', icon: 'shield' },
    { title: 'Aligned with UAE PDPL', description: 'Federal Decree-Law No. 45 of 2021 on personal data protection.', icon: 'gavel' },
    { title: 'GDPR-ready where applicable', description: 'For visitors and contacts in the EEA and the UK.', icon: 'gavel' },
    { title: 'Clear lawful bases', description: 'Consent, contract, legitimate interests, and legal obligation.', icon: 'compass' },
    { title: 'Rights you can exercise', description: 'Access, correction, deletion, restriction, objection, portability.', icon: 'eye' }
  ],
  whyBrocode:
    'We work with banks, government bodies, and listed corporates whose own clients trust them to handle data carefully. Our privacy posture is built to meet that standard. The same controls and disciplines we apply to client engagements apply to the personal data we collect through our own marketing, recruitment, and operations.',
  ourApproach:
    'Our Data Protection Officer owns this policy and the underlying register of processing activities. New marketing campaigns, recruitment processes, and supplier engagements that involve personal data are reviewed before they go live, with a record kept of the lawful basis and retention period. We exercise data subject rights through a single intake at dpo@brocode.ae, and we publish material changes to this policy on this page rather than only by email. Where we engage processors, they are bound by written data processing agreements aligned with PDPL and, where relevant, GDPR.',
  stats: [
    { value: 2026, label: 'Effective year of this policy' },
    { value: 30, label: 'Days to respond to rights requests' },
    { value: 12, label: 'Months between policy reviews' },
    { value: 45, label: 'UAE PDPL Federal Decree-Law number' }
  ],
  primaryCta: { label: 'Contact our DPO', href: '/contact' },
  secondaryCta: { label: 'View our security posture', href: '/security-compliance' },
  related: [
    { label: 'Security & Compliance', href: '/security-compliance', description: 'How we protect the data we hold.' },
    { label: 'Cookie Policy', href: '/cookie-policy', description: 'Cookies and similar technologies on this site.' },
    { label: 'Terms of Service', href: '/terms-of-service', description: 'The terms governing use of this site.' },
    { label: 'Contact', href: '/contact', description: 'Reach the team for any data question.' },
    { label: 'About Brocode', href: '/about', description: 'Who we are and where we operate.' }
  ],
  capabilities: [
    'Personal data categories we collect on this site',
    'Lawful bases under UAE PDPL and EU/UK GDPR',
    'Retention schedules for enquiries and recruitment',
    'Sharing with processors under written agreements',
    'Security controls aligned with ISO/IEC 27001',
    'Single intake for data subject rights requests'
  ],
  outcomes: [
    'Right of access to the data we hold about you',
    'Right to correct or update inaccurate information',
    'Right to request deletion where the law allows',
    'Right to restrict or object to certain processing',
    'Right to withdraw consent and lodge a complaint'
  ]
};
