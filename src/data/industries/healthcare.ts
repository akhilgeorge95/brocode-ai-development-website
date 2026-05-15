import type { LongPage } from '../types';

export const healthcare: LongPage = {
  slug: 'healthcare',
  category: 'industry',
  title: 'Healthcare',
  seoTitle: 'AI for Healthcare Providers & Payers in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions builds clinical and operational AI for hospitals, payers, and health authorities in Abu Dhabi, Dubai, and across the UAE — aligned with DOH, MOHAP, SEHA, DHA, and JCI standards.',
  eyebrow: 'Healthcare AI',
  headline: 'Clinical and operational AI for UAE providers, payers, and authorities.',
  sub: 'We build medical imaging, clinical decision support, EMR intelligence, and operational AI for UAE hospitals and payers — engineered around DOH, MOHAP, SEHA, and JCI expectations.',
  heroImage: '/images/industries/healthcare.jpg',
  heroImageAlt: 'Radiologist reviewing chest imaging on a high-resolution monitor inside a modern UAE hospital reading room.',
  heroIcon: 'eye',
  intro:
    'Healthcare in the UAE is among the most ambitious systems in the region — JCI accreditation is the norm, electronic medical records are pervasive, and authorities expect data to move safely between providers, payers, and federal registries. The clinical and operational pressures are nevertheless real: clinician time is scarce, claims volumes are climbing, and patients expect digital convenience. Brocode Solutions builds AI for hospitals, clinic networks, payers, and health authorities from our Abu Dhabi headquarters, with delivery teams familiar with the DOH, MOHAP, and SEHA standards that shape every implementation.',
  sections: [
    {
      heading: 'The pressure on UAE healthcare is rising',
      body: 'Population growth, medical tourism, and an ageing resident base are increasing demand on UAE providers at the same time as clinical labour markets tighten across the GCC. Payers face rising claims volumes and stricter scrutiny on coding, while providers carry the cost of JCI accreditation, mandatory reporting to authorities such as DOH and MOHAP, and integration with platforms like Malaffi and Riayati. Clinicians spend a disproportionate share of their day on documentation rather than care. AI offers a practical lever — automating documentation, surfacing risk earlier, accelerating image reads, and routing administrative work — without crossing the clinical safety perimeter.'
    },
    {
      heading: 'Where AI moves the needle in healthcare',
      body: 'The most valuable healthcare AI in the UAE rarely tries to replace clinicians. It augments them. Medical imaging models flag candidate findings on chest, mammography, and musculoskeletal studies for radiologist review. Clinical decision support nudges prescribers when risk scores cross thresholds. Ambient documentation captures the consultation and drafts the note for the clinician to sign. Document intelligence reads referral letters and prior records, in Arabic and English. On the payer side, AI improves claims adjudication, fraud and abuse detection, and provider network analytics. Operationally, predictive models manage bed flow, theatre utilisation, and outpatient no-shows across multi-site networks.'
    },
    {
      heading: 'Regulator and clinical safety reality',
      body: 'Healthcare AI in the UAE operates under the gaze of the Department of Health Abu Dhabi, the Ministry of Health and Prevention, the Dubai Health Authority, SEHA, and JCI surveyors. Patient data is governed by federal and emirate-level health data laws, including residency requirements that often rule out generic public cloud AI. We design every system to be defensible: clinical validation against a held-out dataset, bias review across demographic cohorts, model cards reviewed by clinical informatics, and human-in-the-loop checkpoints for any decision touching diagnosis or treatment. Deployment respects data residency, role-based access, and integration with Malaffi, Riayati, and the provider\'s EMR.'
    },
    {
      heading: 'Outcomes UAE healthcare clients have shipped',
      body: 'Recent engagements include a chest imaging triage model for a UAE hospital group that materially reduced time-to-report on urgent studies, an Arabic and English referral-letter intelligence pipeline that cut manual data entry for a payer, and a clinical decision support layer on an EMR that improved adherence to sepsis protocols. In every case, Brocode delivered the clinical validation pack, the integration with EMR and PACS, and the change management — training clinicians, designing alert thresholds with informatics teams, and making sure the system was something staff wanted to use rather than work around.'
    }
  ],
  highlights: [
    { title: 'Clinical validation built in', description: 'Held-out evaluation, cohort analysis, and clinician review before go-live.', icon: 'shield' },
    { title: 'EMR and PACS integration', description: 'Native integration with Cerner, Epic, InterSystems, and major PACS vendors.', icon: 'link' },
    { title: 'Malaffi and Riayati aware', description: 'Designed around UAE health information exchange architecture.', icon: 'database' },
    { title: 'Bilingual clinical content', description: 'Arabic and English clinical NLP and ambient documentation.', icon: 'chat' },
    { title: 'Imaging-ready', description: 'Computer vision for radiology, pathology, dermatology, and ophthalmology.', icon: 'eye' },
    { title: 'Audit-ready for JCI and DOH', description: 'Documentation and controls aligned with accreditation expectations.', icon: 'gavel' }
  ],
  whyBrocode:
    'We work alongside clinical informatics, biomedical, and IT teams inside UAE providers and payers, with delivery staff used to working in JCI-accredited environments and under DOH and MOHAP oversight. Our engineers handle PHI carefully, deploy inside the hospital perimeter when required, and produce the validation evidence that medical directors and quality committees expect to see before a model is allowed near a patient.',
  ourApproach:
    'We start with a clinical and operational discovery, mapping the workflow, data sources, and accreditation context with the medical director, informatics lead, and IT. Build is delivered in two-week increments with clinicians involved in user testing throughout. Hardening includes clinical validation against a held-out dataset, bias and cohort review, integration with EMR and PACS, security review, and change management for the clinical teams. Post go-live, Brocode engineers stay alongside informatics under a defined run-phase, monitoring drift and clinical outcomes while transferring operational ownership.',
  stats: [
    { value: 9, label: 'UAE healthcare clients served' },
    { value: 35, suffix: '%', label: 'Average reduction in report turnaround' },
    { value: 100, suffix: '%', label: 'PHI workloads inside UAE borders' },
    { value: 10, label: 'Weeks median model-to-clinical-pilot' }
  ],
  primaryCta: { label: 'Brief our healthcare team', href: '/contact' },
  secondaryCta: { label: 'Read our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Computer Vision', href: '/services/computer-vision', description: 'Medical imaging triage and decision support.' },
    { label: 'Natural Language Processing', href: '/services/natural-language-processing', description: 'Clinical NLP in Arabic and English.' },
    { label: 'Document Intelligence', href: '/services/document-intelligence', description: 'Referrals, claims, and prior records parsing.' },
    { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Bed flow, no-shows, and operational forecasting.' },
    { label: 'Responsible AI & Governance', href: '/services/responsible-ai-governance', description: 'Clinical validation and model risk artefacts.' }
  ],
  capabilities: [
    'Medical imaging triage and decision support',
    'Clinical NLP for notes, referrals, and discharge summaries',
    'Ambient documentation and clinician copilots',
    'Claims adjudication, coding, and fraud and abuse detection',
    'Operational forecasting for beds, theatres, and outpatient flow',
    'Integration with EMR, PACS, Malaffi, and Riayati'
  ],
  outcomes: [
    'Faster report turnaround on urgent imaging studies',
    'Reduced clinician documentation burden',
    'Improved adherence to clinical protocols',
    'Lower claims leakage and improved coding accuracy',
    'Validation evidence accepted by quality committees'
  ]
};
