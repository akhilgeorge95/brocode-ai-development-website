import type { LongPage } from '../types';

export const securityCompliance: LongPage = {
  slug: 'security-compliance',
  category: 'legal',
  title: 'Security & Compliance',
  seoTitle: 'Security and Compliance at Brocode Solutions',
  seoDescription:
    'How Brocode Solutions protects client data and meets ISO 27001, SOC 2 Type II, GDPR, and UAE PDPL obligations across engineering, delivery, and operations.',
  eyebrow: 'Security posture',
  headline: 'Security and compliance, built into how we deliver.',
  sub: 'Our controls are designed for the regulated UAE and GCC enterprises we serve — evidenced, audited, and aligned with the frameworks your risk function already speaks.',
  heroImage: '/images/legal/security-compliance.jpg',
  heroImageAlt: 'Locked server cabinet inside a data centre with status indicators glowing softly',
  heroIcon: 'shield',
  intro:
    'Brocode Solutions builds AI systems for banks, government bodies, and listed corporates whose risk tolerance is low and whose audit obligations are continuous. Our security and compliance posture is designed to meet those expectations as a starting point, not an afterthought. We run an information security management system aligned to ISO/IEC 27001, complete an annual SOC 2 Type II examination across the controls relevant to our engagements, and operate under UAE Federal Decree-Law No. 45 of 2021 — the Personal Data Protection Law (PDPL) — and the EU General Data Protection Regulation where client data brings them into scope.',
  sections: [
    {
      heading: 'Certifications and frameworks',
      body: 'We maintain ISO/IEC 27001 certification across our Abu Dhabi practice, covering our offices, engineering platforms, and delivery operations. Our SOC 2 Type II report is renewed annually and made available under non-disclosure to clients and prospective clients. We map our controls to the UAE Information Assurance Regulation, the NESA / TDRA standards relevant to critical sectors, and the ADGM Data Protection Regulations where applicable. For European personal data, our controls and contracts are aligned with the GDPR, including the standard contractual clauses and the supplementary measures regulators expect for cross-border transfers. Certification reports, statements of applicability, and bridge letters are shared with clients on request.'
    },
    {
      heading: 'Data protection and encryption',
      body: 'Client data is encrypted in transit using TLS 1.2 or higher and at rest using AES-256 or equivalent. Cryptographic keys are managed through hardware-backed key management services, with separation of duties between custodians and operators and a documented key rotation schedule. We default to in-country data residency for UAE engagements and will only move data outside national boundaries with the documented authorisation of the client and a recorded lawful basis. Personal data is handled in line with PDPL and, where in scope, GDPR — including data subject rights, breach notification timelines, and the maintenance of records of processing activities for our engagements.'
    },
    {
      heading: 'Secure development lifecycle',
      body: 'Our secure development lifecycle covers every engagement from discovery to handover. It includes threat modelling at design, mandatory code review by a second engineer, automated static and dynamic application security testing, dependency scanning with documented patch SLAs, and secrets scanning across all repositories. Infrastructure is provisioned as code with policy-as-code guardrails, and changes flow through environments with progressive promotion gates. For AI-specific work we add model risk reviews, evaluation against bias and harm criteria, and red-team exercises for high-impact use cases. Findings are tracked centrally with owners, severities, and target remediation dates that align to client expectations.'
    },
    {
      heading: 'Penetration testing and assurance',
      body: 'Independent penetration tests are conducted at least annually against our internal platforms and on each major client-facing system before go-live, by CREST-accredited or equivalent providers. Reports are reviewed by our information security committee, remediation is tracked to closure, and re-testing is performed for high and critical findings. We support client-led penetration tests against systems we deliver, including pre-engagement scoping, secure coordination during execution, and joint remediation planning. Continuous monitoring includes vulnerability scanning, log aggregation with anomaly detection, and an incident response process exercised through regular tabletop simulations covering both classical security and AI-specific incidents.'
    }
  ],
  highlights: [
    { title: 'ISO/IEC 27001 certified', description: 'Information security management system across the Abu Dhabi practice.', icon: 'shield' },
    { title: 'SOC 2 Type II reported', description: 'Annual independent examination of operating effectiveness.', icon: 'doc' },
    { title: 'UAE PDPL aligned', description: 'Federal Decree-Law No. 45 of 2021 embedded in how we handle data.', icon: 'gavel' },
    { title: 'GDPR ready', description: 'Standard clauses, supplementary measures, and data subject support.', icon: 'gavel' },
    { title: 'Strong encryption by default', description: 'TLS 1.2+ in transit and AES-256 at rest with managed keys.', icon: 'cpu' },
    { title: 'Independent penetration testing', description: 'Annual third-party tests with tracked remediation to closure.', icon: 'eye' }
  ],
  whyBrocode:
    'Our clients sit in front of regulators and boards who do not accept "trust us" as an answer. We are organised around producing evidence — control narratives, test results, audit reports — that withstands review by central banks, federal entities, and external assurance providers. Security is part of how the firm operates, not a function bolted onto delivery.',
  ourApproach:
    'A named information security committee owns the control framework and meets monthly. Risks are recorded in a single register with owners and review dates, and material changes are escalated to the partner group. We treat client-specific obligations as additive: where a client requires controls beyond our baseline, we accept them in writing and verify them in our internal audit programme. Each engagement has a designated security and data protection lead responsible for the controls applicable to that work and for the evidence package shared with the client at closure.',
  stats: [
    { value: 27001, label: 'ISO/IEC certification standard' },
    { value: 2, label: 'SOC 2 Type II report renewed yearly' },
    { value: 2021, label: 'UAE PDPL year of enactment' },
    { value: 12, label: 'Months between independent penetration tests' }
  ],
  primaryCta: { label: 'Request our security pack', href: '/contact' },
  secondaryCta: { label: 'Read our privacy policy', href: '/privacy-policy' },
  related: [
    { label: 'Privacy Policy', href: '/privacy-policy', description: 'How we handle personal data under PDPL and GDPR.' },
    { label: 'Terms of Service', href: '/terms-of-service', description: 'The contract terms governing use of this site.' },
    { label: 'Cookie Policy', href: '/cookie-policy', description: 'How we use cookies and similar technologies.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'AI-specific controls and oversight.' },
    { label: 'Quality assurance', href: '/technology/quality-assurance', description: 'Testing and verification across delivery.' }
  ],
  capabilities: [
    'ISO/IEC 27001 information security management',
    'SOC 2 Type II controls and reporting',
    'UAE PDPL and GDPR data protection alignment',
    'Encryption, key management, and secret handling',
    'Secure SDLC with mandatory review and scanning',
    'Independent penetration testing and remediation'
  ],
  outcomes: [
    'Evidence packs ready for client and regulator review',
    'Data residency aligned with UAE expectations by default',
    'Faster procurement through pre-cleared security artefacts',
    'Joint incident response procedures with named contacts',
    'Continuous monitoring with documented escalation paths'
  ]
};
