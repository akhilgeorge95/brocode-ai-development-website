import type { LongPage } from '../types';

export const documentIntelligence: LongPage = {
  slug: 'document-intelligence',
  category: 'service',
  title: 'Document Intelligence',
  seoTitle: 'Arabic Document Intelligence & OCR Services in the UAE',
  seoDescription:
    'Brocode Solutions builds Arabic OCR, bilingual document extraction, and intelligent document processing for banks, government, legal, and healthcare clients across the UAE.',
  eyebrow: 'Arabic and bilingual document processing',
  headline: 'Document intelligence engineered for Arabic, English, and the paperwork in between.',
  sub: 'We build OCR, extraction, and intelligent document processing pipelines that read Arabic and English with equal care — handwritten, stamped, scanned, or scrolled.',
  heroImage: '/images/services/document-intelligence.jpg',
  heroImageAlt: 'Stack of bilingual official documents being scanned through a high-volume scanner connected to a processing workstation',
  heroIcon: 'doc',
  intro:
    'Regional enterprises run on bilingual paper: trade licences, Emirates IDs, court judgments, medical reports, lease agreements, customs declarations, invoices stamped in two languages, and handwritten Arabic forms. Brocode Solutions builds document intelligence pipelines tuned for exactly this reality — Arabic OCR, layout understanding, structured extraction, and human-in-the-loop review — out of our Abu Dhabi headquarters, for banks, government bodies, law firms, hospitals, and trading houses across the GCC.',
  sections: [
    {
      heading: 'Arabic OCR that holds up on real paperwork',
      body: 'Generic OCR engines fall over on Arabic script the moment they meet ligatures, diacritics, kashida elongation, mixed right-to-left and left-to-right content, or a poorly scanned trade licence. Our pipelines combine fine-tuned Arabic-aware OCR models with classical pre-processing — deskewing, dewarping, denoising, and resolution enhancement — to lift accuracy on the kinds of documents enterprises actually have, not the clean samples in academic benchmarks. We measure accuracy at the character, word, and field level, and report it back to you per document type so you know exactly where the pipeline is strong and where human review still adds value.'
    },
    {
      heading: 'Bilingual extraction with field-level confidence',
      body: 'Reading text is the easy half. The harder problem is turning a stamped, handwritten, or mixed-language document into structured data your systems can consume. Our extraction pipelines combine layout-aware models, key-value detection, and large language models to pull named fields — Emirates ID number, IBAN, ICD-10 code, contract clauses, customs HS codes — with explicit confidence scores. Low-confidence fields are routed to human reviewers through a purpose-built console, and every correction is fed back into the training loop, so the system gets measurably more accurate with each batch processed.'
    },
    {
      heading: 'Workflows for trade, KYC, claims, and case files',
      body: 'A document pipeline only earns its keep when it slots into the operational workflow it is meant to serve. We build end-to-end processing flows for KYC and onboarding, trade finance documentation, insurance claims, medical records, court filings, and tender submissions. Documents flow from intake — email, portal upload, scanner, mobile camera — through classification, extraction, validation against external registries, and into your core systems. Audit trails capture every transformation, reviewer action, and model version, giving compliance and risk teams the evidence they require.'
    },
    {
      heading: 'Sovereign deployment for sensitive content',
      body: 'Identity documents, medical records, and legal filings cannot leave the jurisdiction without serious thought. We deploy document intelligence pipelines on-premise, inside your private cloud, or within an ADGM- or DIFC-resident tenant, with no document content traversing public endpoints. Where you prefer hyperscaler services, we configure them under appropriate residency commitments and document exactly which fields are processed where. Sensitive identifiers can be redacted or tokenised before downstream processing, and access is logged at the field level for compliance review.'
    }
  ],
  highlights: [
    { title: 'Arabic-first OCR', description: 'Tuned for ligatures, diacritics, handwriting, and bilingual layouts.', icon: 'doc' },
    { title: 'Layout-aware extraction', description: 'Key-value, tables, and clauses pulled with field-level confidence.', icon: 'layers' },
    { title: 'Human-in-the-loop review', description: 'Low-confidence fields routed to a reviewer console that feeds the training loop.', icon: 'workflow' },
    { title: 'Registry validation', description: 'Cross-checks against Emirates ID, trade licence, and other authoritative sources.', icon: 'link' },
    { title: 'End-to-end auditability', description: 'Every transformation, reviewer action, and model version is logged.', icon: 'shield' },
    { title: 'On-premise and sovereign deployment', description: 'Documents stay inside your boundary when regulation demands it.', icon: 'cloud' }
  ],
  whyBrocode:
    'We have built Arabic document pipelines for UAE banks, government departments, hospitals, and law firms, with an internal corpus of bilingual document types curated under expert review. Our engineers know how to evaluate OCR on real-world scans rather than clean test sets, and how to build the human-review tooling regulators expect. Teams are Abu Dhabi based and contract under UAE law.',
  ourApproach:
    'Discovery begins with a sample of your real documents — not curated examples — to establish a baseline accuracy by document type and field. We then build extraction models for the highest-volume types first, wire in human review for low-confidence outputs, and integrate with the downstream systems that consume the data. Build runs in two-week sprints with reviewer feedback flowing back into model training each cycle. Pre-launch hardening covers volume testing, edge-case review, and compliance sign-off. Post-launch, accuracy is monitored continuously and models retrained on a defined cadence.',
  stats: [
    { value: 98, suffix: '%', label: 'Average field accuracy after tuning' },
    { value: 70, suffix: '%', label: 'Reduction in manual data entry' },
    { value: 100, suffix: '+', label: 'Document types handled across projects' },
    { value: 6, label: 'Weeks median to first live pipeline' }
  ],
  primaryCta: { label: 'Talk to a document AI engineer', href: '/contact' },
  secondaryCta: { label: 'See our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Computer Vision', href: '/services/computer-vision', description: 'Visual understanding under the hood of OCR pipelines.' },
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Arabic and English text understanding after extraction.' },
    { label: 'Intelligent Process Automation', href: '/services/intelligent-process-automation', description: 'End-to-end workflows around the documents.' },
    { label: 'Banking & Financial Services', href: '/industries/banking-financial-services', description: 'KYC, trade finance, and onboarding automation.' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Bilingual case-file and form processing.' }
  ],
  capabilities: [
    'Arabic and bilingual OCR with pre-processing',
    'Layout-aware extraction and table parsing',
    'Handwriting recognition for Arabic and English',
    'Classification and routing of mixed document streams',
    'Human-in-the-loop review consoles',
    'Validation against external registries and rule sets'
  ],
  outcomes: [
    'Field-level accuracy measured and reported per document type',
    'Manual entry effort reduced across high-volume processes',
    'Audit-ready trail for every document processed',
    'Reviewer tooling that improves the model over time',
    'Integration with core banking, ERP, or case-management systems'
  ]
};
