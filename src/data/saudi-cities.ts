/**
 * Per-city SEO and content data for the /saudi-arabia/ai-development-in-[city] pages.
 *
 * Each entry drives a fully SEO-optimised landing page for a Saudi city. The page
 * template lives at src/app/saudi-arabia/[slug]/page.tsx and is rendered statically
 * via generateStaticParams.
 */

export type SaudiCity = {
  /** URL slug — final segment, e.g. "ai-development-in-riyadh" */
  slug: string;
  /** English city name as commonly written in tenders, e.g. "Riyadh" */
  name: string;
  /** Possessive-friendly form used in copy, e.g. "Riyadh's" */
  possessive: string;
  /** Administrative region / province name */
  region: string;
  /** One-line economic / sector positioning for the city */
  economicSnapshot: string;
  /** Lead H1 strapline — used in the hero */
  heroH1: string;
  /** Hero supporting paragraph (≤ 60 words) */
  heroLead: string;
  /** Eyebrow above the H1 */
  heroEyebrow: string;
  /** Meta description (≤ 320 chars) */
  metaDescription: string;
  /** Search keywords array */
  keywords: string[];
  /** Sectors most relevant for this city — drives the industries section copy and order */
  sectorAngles: { name: string; href: string; angle: string }[];
  /** A short, city-specific positioning paragraph used in the "Positioning" section */
  positioningCopy: string;
  /** Three city-specific bullet points for the "We build / You own / We hand over" block */
  ownershipBullets: { t: string; d: string }[];
  /** City-specific FAQ — replaces a couple of the generic ones */
  cityFaq: { question: string; answer: string }[];
  /** Three related Saudi cities for internal linking (slugs only) */
  relatedCitySlugs: string[];
};

const sharedNlpKeywords = (city: string) => [
  `AI development company ${city}`,
  `AI development ${city}`,
  `artificial intelligence company ${city}`,
  `machine learning company ${city}`,
  `generative AI ${city}`,
  `AI consulting ${city}`,
  `enterprise AI ${city}`,
  `MLOps ${city}`,
  `Arabic NLP company ${city}`,
  `LLM development ${city}`,
  `deep learning company ${city}`,
  `computer vision company ${city}`,
  `AI software development ${city}`,
  `AI integration services ${city}`,
  `AI governance ${city}`
];

export const SAUDI_CITIES: SaudiCity[] = [
  {
    slug: 'ai-development-in-riyadh',
    name: 'Riyadh',
    possessive: "Riyadh's",
    region: 'Riyadh Province',
    economicSnapshot:
      "Saudi Arabia's capital and the regulatory, financial and government centre of the Kingdom — home to SAMA, the Capital Market Authority, the Public Investment Fund and the Vision 2030 programme management office.",
    heroEyebrow: 'AI engineering for Riyadh',
    heroH1: 'Production AI for Riyadh.',
    heroLead:
      "We build the AI systems that Riyadh's regulators, banks, ministries, capital-markets institutions and PIF-portfolio companies actually put into production — staffed by named senior engineers, priced in SAR, and aligned to SAMA, SDAIA, NCA and PDPL from day one.",
    metaDescription:
      'AI development company in Riyadh — production AI for SAMA-supervised banks, Saudi ministries, capital-markets institutions and PIF-portfolio companies. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth, SAR billing and a 12-week production path. ISO 27001, SOC 2 Type II, ISO 42001.',
    keywords: [
      ...sharedNlpKeywords('Riyadh'),
      'AI development company Saudi Arabia capital',
      'Riyadh AI services',
      'SAMA model risk AI Riyadh',
      'SDAIA aligned AI Riyadh',
      'PDPL AI Riyadh',
      'Vision 2030 AI Riyadh',
      'KAFD AI development',
      'PIF AI partner Riyadh',
      'Tadawul AI'
    ],
    sectorAngles: [
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'SAMA model risk files, AML, fraud and credit AI for Riyadh-headquartered Saudi banks.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'SDAIA-aligned and NCA-ECC-mapped AI for federal ministries and authorities in Riyadh.' },
      { name: 'Capital markets', href: '/industries/banking-financial-services', angle: 'CMA-aligned surveillance, NLP and analytics for Tadawul-listed issuers and asset managers.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Forecasting, demand-side ML and asset-performance AI for utilities serving the Riyadh region.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Valuation, leasing and tenant analytics for ROSHN-tier developers and giga-project sponsors.' }
    ],
    positioningCopy:
      'Riyadh is where the procurement-committee bar is highest in the Kingdom — and where SAMA, SDAIA and NCA expectations land first. We arrive with the evidence pack already drafted: PDPL DPIA, SAMA-style model risk file, NCA Essential Cybersecurity Controls mapping, and a written 12-week production path that fits inside the steering-committee cadence Riyadh boards run on.',
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Riyadh banks, ministries and PIF-portfolio companies.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Riyadh team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you deliver inside SAMA, SDAIA and NCA expectations for a Riyadh-headquartered entity?',
        answer:
          'Yes. Every Riyadh engagement ships a PDPL Data Protection Impact Assessment, a SAMA-style model risk file where the entity is SAMA-supervised, NCA Essential Cybersecurity Controls (ECC-1) mapping, and an SDAIA AI Ethics Principles cross-walk. We draft the evidence pack alongside the build — not as a separate workstream after the fact.'
      },
      {
        question: 'Do you co-deliver with a Saudi-registered partner when a Riyadh sponsor requires one?',
        answer:
          'Yes. Where a Riyadh procurement office requires a Saudi-registered counterparty (common for federal entities and SAMA-supervised banks), we co-deliver with a vetted KSA-resident partner under a transparent flow-down agreement. Brocode engineers remain named on the work; the local partner provides the contracting entity and any required in-Kingdom personnel commitments.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-jeddah', 'ai-development-in-dammam', 'ai-development-in-dhahran']
  },
  {
    slug: 'ai-development-in-jeddah',
    name: 'Jeddah',
    possessive: "Jeddah's",
    region: 'Makkah Province',
    economicSnapshot:
      "Saudi Arabia's commercial capital and Red Sea gateway — home to Jeddah Islamic Port (the Kingdom's busiest container port), King Abdulaziz International Airport, large retail and hospitality groups, and the western-region healthcare ecosystem.",
    heroEyebrow: 'AI engineering for Jeddah',
    heroH1: 'Production AI for Jeddah.',
    heroLead:
      "We build the AI systems that Jeddah's logistics operators, port and shipping companies, retail groups, healthcare networks and hospitality majors actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator from day one.",
    metaDescription:
      'AI development company in Jeddah — production AI for logistics and port operators, retail groups, healthcare networks and hospitality majors across the Makkah Province and western region. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Jeddah'),
      'AI for logistics Jeddah',
      'AI for ports Jeddah Islamic Port',
      'AI for retail Jeddah',
      'AI for healthcare Jeddah',
      'AI for hospitality western Saudi Arabia',
      'PDPL AI Jeddah'
    ],
    sectorAngles: [
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Container-yard CV, ETA prediction, and customs document intelligence for Jeddah Islamic Port operators and 3PLs.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Personalisation, demand forecasting and Arabic conversational AI for Jeddah-headquartered retail groups.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Clinical NLP, imaging triage and operational AI for western-region hospital networks and insurers.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Revenue management, multilingual guest NLP and demand AI for Jeddah hotel and Red Sea destination operators.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Retail-banking fraud, AML and credit AI for Jeddah-branched Saudi banks.' }
    ],
    positioningCopy:
      'Jeddah moves on a different rhythm to Riyadh — the bar is operational, not regulatory. Ports, retail, hospitality and hospital groups want AI that earns its keep in the next quarter, with an evidence file that holds up to PDPL and the relevant sector regulator. We arrive with the operational KPI sign-off shape already drafted and the regulator pack baked into the 12-week path.',
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Jeddah logistics, retail, healthcare and hospitality operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Jeddah team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Have you delivered AI at Jeddah Islamic Port or a comparable Saudi port environment?',
        answer:
          'Our port-environment work covers container-yard computer vision, gate-system OCR and ETA prediction across several GCC port operators. We treat each engagement as bespoke — we will share the reference architecture for your specific terminal operating system (Navis N4, CTOS, or in-house) on the first technical session, and ship a sample inference pipeline against your own video feeds during discovery.'
      },
      {
        question: "How do you handle Jeddah's bilingual customer base in conversational AI?",
        answer:
          'Every conversational AI we build for Jeddah retail, hospitality and healthcare clients runs MSA Arabic, Saudi-dialect Arabic and English as first-class languages — with switching mid-utterance handled at the intent layer. We benchmark against AraBERT-v2, CAMeLBERT, Jais and ALLaM and publish containment SLAs in the contract, not lab demo numbers.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-riyadh', 'ai-development-in-mecca', 'ai-development-in-yanbu']
  },
  {
    slug: 'ai-development-in-mecca',
    name: 'Mecca',
    possessive: "Mecca's",
    region: 'Makkah Province',
    economicSnapshot:
      'The holiest city in Islam and the destination for Hajj and Umrah — a year-round operational environment where multilingual crowd analytics, hospitality, and large-scale logistics decisions move at the scale of millions of pilgrims annually.',
    heroEyebrow: 'AI engineering for Mecca',
    heroH1: 'Production AI for Mecca.',
    heroLead:
      'We build the AI systems that authorities, hospitality groups and large-scale service operators in Mecca rely on to run Hajj, Umrah and year-round operations — crowd analytics, multilingual NLP across pilgrim languages, hospitality demand AI, and operational forecasting — staffed by named engineers, priced in SAR, and aligned to PDPL and NCA-ECC.',
    metaDescription:
      'AI development company in Mecca — crowd analytics, multilingual Arabic NLP, hospitality demand AI, and operational forecasting for Hajj, Umrah and year-round operations. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Mecca'),
      'AI for Hajj operations',
      'AI for Umrah operations',
      'crowd analytics Mecca',
      'multilingual NLP Mecca',
      'hospitality AI Mecca',
      'Masjid al-Haram AI operations',
      'pilgrim experience AI'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Revenue, demand and multilingual guest AI for hotel groups around Masjid al-Haram and the Holy Sites.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Crowd-density CV, queue analytics and operational forecasting for Hajj and Umrah authorities.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Pilgrim transport optimisation, baggage handling AI and seasonal-surge planning models.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Triage NLP and seasonal healthcare-load forecasting for the Hajj and Umrah health system.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Multilingual retail conversational AI for pilgrim-facing commerce.' }
    ],
    positioningCopy:
      "Mecca is one of the most operationally complex environments in the world — multilingual, multi-cultural, peak-loaded and scrutinised. Crowd analytics, hospitality demand AI and multilingual NLP have to be production-grade on day one. We arrive with seasonal-surge models, multilingual NLP benchmarks across Urdu, Indonesian, Turkish, Hausa, Bengali and Malay alongside MSA and Saudi-dialect Arabic, and a delivery cadence that respects Mecca's operational calendar.",
    ownershipBullets: [
      { t: 'We build', d: 'Crowd analytics, multilingual NLP and operational AI for Mecca operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Mecca operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with the multilingual NLP requirements of Hajj and Umrah operations?',
        answer:
          'Our pilgrim-facing NLP work covers MSA Arabic, Saudi-dialect Arabic, English, Urdu, Indonesian, Turkish, Hausa, Bengali and Malay as first-class languages, benchmarked quarterly against AraBERT, CAMeLBERT, Jais, ALLaM and XLM-R baselines. For every Mecca engagement we publish per-language intent-recognition and entity-extraction accuracy in the discovery pack — not generic claims.'
      },
      {
        question: 'How do you handle the seasonal load profile of Hajj and Umrah in MLOps and infrastructure?',
        answer:
          "Mecca infrastructure has to absorb a 30-to-50x surge during peak Hajj days while running cost-efficiently year-round. Our reference architectures use auto-scaling inference clusters, pre-warmed GPU pools and seasonal capacity-planning models calibrated on your last three years of pilgrim throughput. We publish the surge-cost model and the steady-state cost model side-by-side in the discovery deliverable."
      }
    ],
    relatedCitySlugs: ['ai-development-in-medina', 'ai-development-in-jeddah', 'ai-development-in-taif']
  },
  {
    slug: 'ai-development-in-medina',
    name: 'Medina',
    possessive: "Medina's",
    region: 'Madinah Province',
    economicSnapshot:
      "The second-holiest city in Islam and a year-round pilgrimage and religious-tourism centre — built around Al-Masjid an-Nabawi, with significant hospitality, logistics and healthcare infrastructure serving millions of annual visitors.",
    heroEyebrow: 'AI engineering for Medina',
    heroH1: 'Production AI for Medina.',
    heroLead:
      "We build the AI systems that authorities, hospitality groups and service operators in Medina rely on to run year-round pilgrimage operations — multilingual NLP across visitor languages, crowd and queue analytics around Al-Masjid an-Nabawi, hospitality demand AI, and operational forecasting — staffed by named engineers and aligned to PDPL and NCA-ECC.",
    metaDescription:
      'AI development company in Medina — multilingual Arabic NLP, crowd and queue analytics, hospitality demand AI and operational forecasting for year-round pilgrim operations and the Al-Masjid an-Nabawi catchment. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II.',
    keywords: [
      ...sharedNlpKeywords('Medina'),
      'AI for pilgrimage Medina',
      'crowd analytics Medina',
      'multilingual NLP Medina',
      'hospitality AI Medina',
      'Al-Masjid an-Nabawi operations AI'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Revenue, demand and multilingual guest AI for hotel groups around Al-Masjid an-Nabawi.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Crowd-density CV and operational forecasting for Medina pilgrimage authorities.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Visitor transport, baggage and last-mile AI for Medina operations.' },
      { name: 'Healthcare', href: '/industries/healthcare', angle: 'Seasonal healthcare-load forecasting and triage NLP for the Medina health system.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Multilingual retail conversational AI for visitor-facing commerce in Medina.' }
    ],
    positioningCopy:
      "Medina runs a year-round pilgrim load that goes hand-in-hand with Mecca. The data residency and PDPL posture is identical, the operational rhythm slightly less peaked. Our Medina engagements typically extend a hospitality, crowd-analytics or multilingual-NLP system already running in Mecca — or stand up a fresh Medina-native deployment with the same evidence pack and the same 12-week production path.",
    ownershipBullets: [
      { t: 'We build', d: 'Crowd, multilingual NLP and operational AI for Medina pilgrim operations.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Medina operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you run a single AI programme spanning both Mecca and Medina operations?',
        answer:
          'Yes. Most of our pilgrim-facing engagements are dual-city by design — the multilingual NLP model, the crowd-analytics model and the hospitality demand model are deployed against shared data layers with city-specific overlays. We deliver a single architecture review for both sites and per-city evidence packs aligned to PDPL and the relevant authority.'
      },
      {
        question: 'How do you handle the cultural sensitivity layer around pilgrimage operations AI?',
        answer:
          'Every Medina engagement is reviewed by senior in-region engineers and includes an explicit cultural-sensitivity checkpoint in the discovery phase — particularly for any system that produces visitor-facing outputs. We document the review trail as part of the AI ethics evidence pack and align it to the SDAIA AI Ethics Principles.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-mecca', 'ai-development-in-jeddah', 'ai-development-in-taif']
  },
  {
    slug: 'ai-development-in-dammam',
    name: 'Dammam',
    possessive: "Dammam's",
    region: 'Eastern Province',
    economicSnapshot:
      "The capital of the Eastern Province and the operational heart of Saudi Arabia's energy, petrochemicals and heavy industry — connected to Aramco's headquarters in nearby Dhahran, the Jubail and Ras Tanura industrial complexes, and King Fahd International Airport.",
    heroEyebrow: 'AI engineering for Dammam',
    heroH1: 'Production AI for Dammam.',
    heroLead:
      "We build the AI systems that Dammam's energy operators, petrochemicals plants, heavy-industrial manufacturers, family-office holdings and Eastern-Province financial institutions actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      "AI development company in Dammam — production AI for Eastern Province energy operators, petrochemicals plants, heavy industry, family offices and Saudi banks. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.",
    keywords: [
      ...sharedNlpKeywords('Dammam'),
      'AI for energy Dammam',
      'AI for petrochemicals Eastern Province',
      'AI for manufacturing Dammam',
      'AI for family office Dammam',
      'Eastern Province AI development'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Forecasting, asset-performance and predictive-maintenance AI for Eastern-Province energy operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, process optimisation and OEE uplift for heavy-industrial plants in Dammam.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Industrial logistics, port and rail AI for the Eastern-Province corridor.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Corporate and commercial AI for Dammam-branched Saudi banks and family-office treasury.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Asset analytics and yield AI for Dammam family-office real-estate portfolios.' }
    ],
    positioningCopy:
      "Dammam is where the work is industrial — and where the buyer wants production AI, not a slideware demo. Plants run 24/7. Asset uptime moves the P&L by the millions. We arrive with the OEE-uplift evidence pack already drafted: bench-marked computer-vision defect-detection accuracy, predictive-maintenance recall curves on your own historian data, and a 12-week production path that integrates with the SCADA, MES and historian stack you already run.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Dammam energy, petrochemicals and manufacturing operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Dammam plant and corporate teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and SCADA stack typical of a Dammam petrochemicals plant?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI, AVEVA PI System, Honeywell PHD, Aspen IP.21, Wonderware/AVEVA Historian and the major SCADA stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer, not an afterthought, and ship a reference pipeline against your specific environment in the discovery phase.'
      },
      {
        question: 'How do you handle the safety and operational-risk side of AI in an Eastern-Province industrial setting?',
        answer:
          'Every industrial AI we build for Dammam clients ships with a safety review — failure-mode and effects analysis on the AI decision boundary, fallback to operator control on confidence drops, full audit trail for the model output stream, and an alignment to your existing functional-safety (IEC 61511 / IEC 61508) regime. We integrate the AI evidence pack into your existing HAZOP and management-of-change process, not next to it.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-dhahran', 'ai-development-in-khobar', 'ai-development-in-jubail']
  },
  {
    slug: 'ai-development-in-dhahran',
    name: 'Dhahran',
    possessive: "Dhahran's",
    region: 'Eastern Province',
    economicSnapshot:
      "Headquarters of Saudi Aramco and home to King Fahd University of Petroleum and Minerals (KFUPM) — the technical and R&D centre of Saudi Arabia's energy economy and the densest concentration of upstream, downstream and oilfield-services engineering talent in the Gulf.",
    heroEyebrow: 'AI engineering for Dhahran',
    heroH1: 'Production AI for Dhahran.',
    heroLead:
      "We build the AI systems that Dhahran's energy R&D centres, upstream operators, downstream refiners and oilfield-services companies actually put into production — seismic and reservoir ML, deep-learning vision on the asset, generative AI on operational knowledge bases — staffed by named senior engineers, priced in SAR, and aligned to PDPL and NCA-ECC.",
    metaDescription:
      'AI development company in Dhahran — production AI for energy R&D, upstream and downstream operators, oilfield services and KFUPM-ecosystem research labs. Seismic ML, asset-performance AI, generative AI on operational knowledge. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II.',
    keywords: [
      ...sharedNlpKeywords('Dhahran'),
      'AI for Aramco ecosystem',
      'AI for oilfield services Dhahran',
      'seismic ML Saudi Arabia',
      'AI for KFUPM research',
      'upstream AI Dhahran',
      'downstream AI Dhahran',
      'generative AI oil and gas Saudi Arabia'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Seismic interpretation, reservoir ML, predictive maintenance and well-performance AI for the Dhahran upstream and downstream ecosystem.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Refinery defect detection, throughput and reliability AI for Dhahran-served downstream operations.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Applied research AI for KFUPM-ecosystem and Eastern-Province public-sector partners.' },
      { name: 'Education', href: '/industries/education', angle: 'Research-grade ML, generative AI and LLM fine-tuning infrastructure for KFUPM-tier institutions.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Drilling and oilfield-services supply-chain AI across the Eastern Province.' }
    ],
    positioningCopy:
      "Dhahran is the most technically demanding buyer in Saudi Arabia. The R&D bar is high, the engineering talent in-house is deep, and the procurement office expects an external partner to lift the work without lifting the IP. We arrive with senior ML engineers, on-premise H100 access, and a 12-week production path that respects the IP, the data residency and the technical depth of the team on the other side of the table.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Dhahran energy, R&D and oilfield-services teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Dhahran engineering and research teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you work alongside an in-house ML team in Dhahran without overlapping the work?',
        answer:
          'Yes — and most of our Dhahran engagements are exactly that shape. We propose the work as a pod that supplements the in-house team rather than replacing it: senior engineers on specific delivery responsibilities, a clear scope split documented in the SOW, and a written rule for IP, publications and HuggingFace contributions. We expect a pair-programming rhythm with two of your engineers in the pod from day one.'
      },
      {
        question: 'How do you handle on-premise GPU deployment for seismic and reservoir ML in the Eastern Province?',
        answer:
          'Our on-premise GPU reference architectures cover NVIDIA DGX H100 and HGX H100 racks, NetApp ONTAP and Pure Storage FlashBlade for data, NVIDIA Run:ai or Slurm for orchestration, and a security-hardened boundary that maps to NCA Essential Cybersecurity Controls. We have shipped this pattern at Aramco-ecosystem scale and will publish the BoM and 36-month TCO in your discovery deliverable.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-dammam', 'ai-development-in-khobar', 'ai-development-in-jubail']
  },
  {
    slug: 'ai-development-in-khobar',
    name: 'Khobar',
    possessive: "Khobar's",
    region: 'Eastern Province',
    economicSnapshot:
      "Eastern Province coastal city and the operational base for much of Saudi Arabia's oilfield-services and engineering-services industry — home to the regional offices of Schlumberger, Halliburton, Baker Hughes, Weatherford and a deep ecosystem of Saudi engineering subcontractors.",
    heroEyebrow: 'AI engineering for Khobar',
    heroH1: 'Production AI for Khobar.',
    heroLead:
      "We build the AI systems that Khobar's oilfield-services majors, engineering-services contractors, petrochemicals supply chains and Eastern-Province family-office holdings actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      'AI development company in Khobar — production AI for oilfield-services majors, engineering contractors, petrochemicals supply chains and Eastern-Province holdings. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Khobar'),
      'AI for oilfield services Khobar',
      'AI for engineering services Eastern Province',
      'AI for petrochemicals supply chain Saudi Arabia',
      'AI for Schlumberger ecosystem',
      'AI for Halliburton ecosystem'
    ],
    sectorAngles: [
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Field-services scheduling, well-data analytics and predictive-maintenance AI for the Khobar oilfield-services ecosystem.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Engineering-services workflow AI and supply-chain optimisation for Khobar-headquartered contractors.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Rig-mobilisation logistics, supply-chain demand AI and inventory analytics across the Eastern Province.' },
      { name: 'Banking and financial services', href: '/industries/banking-financial-services', angle: 'Working-capital, invoice-finance and trade-finance AI for Khobar engineering contractors.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Commercial real-estate analytics for Eastern-Province asset portfolios.' }
    ],
    positioningCopy:
      "Khobar buyers want pragmatic AI that lifts margin on the next field campaign — not a research paper. Schedules slip, mobilisation costs run high, working capital is tight. We arrive with a small-pod, two-week-increment delivery rhythm, the financial-uplift model written upfront, and a 12-week production path that integrates with the field-services management software and ERP stacks you already run.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Khobar oilfield-services and engineering-contractor teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Khobar operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you tie AI uplift to a specific financial KPI for a Khobar engineering contractor?',
        answer:
          'Yes. Every Khobar engagement starts with a one-page financial-uplift hypothesis — typically tied to mobilisation cycle time, fleet utilisation, invoice cycle time, or claims-leakage. We bake the KPI into the discovery gate, and the model is contractually expected to move it. If it does not, the engagement does not proceed past the week-four Go/No-Go.'
      },
      {
        question: 'Do you integrate with the field-services management software typically run in Khobar?',
        answer:
          'Yes. Our reference integrations cover ServiceMax, IFS Field Service Management, Salesforce Field Service, Oracle Field Service Cloud and several in-house Saudi-built field-services platforms. We document the integration surface as part of the discovery deliverable and ship a working end-to-end sample against your sandbox environment before contract sign on the build phase.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-dhahran', 'ai-development-in-dammam', 'ai-development-in-jubail']
  },
  {
    slug: 'ai-development-in-taif',
    name: 'Taif',
    possessive: "Taif's",
    region: 'Makkah Province',
    economicSnapshot:
      'A highland city in the Makkah Province known for summer government activity, rose and agricultural production, and a growing tourism economy — historically the summer capital of Saudi Arabia and an emerging hub for highland tourism and agri-tech.',
    heroEyebrow: 'AI engineering for Taif',
    heroH1: 'Production AI for Taif.',
    heroLead:
      "We build the AI systems that Taif's agricultural cooperatives, tourism operators, public-sector summer-operations teams and hospitality groups actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      'AI development company in Taif — production AI for agriculture, highland tourism, hospitality and public-sector summer operations in the Makkah Province highlands. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Taif'),
      'agri-tech AI Taif',
      'AI for tourism Taif',
      'AI for hospitality Taif',
      'highland tourism AI Saudi Arabia',
      'AI for agriculture Makkah Province'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Revenue and demand AI for Taif hotel, eco-tourism and highland-resort operators.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agri-tech, yield-prediction and supply-chain AI for Taif rose, fruit and vegetable producers.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Summer-government operational AI and tourism-authority analytics for the Makkah Province.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Multilingual retail conversational AI for Taif tourism and consumer brands.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain and produce-logistics AI from Taif farms to Saudi and GCC retail.' }
    ],
    positioningCopy:
      "Taif is one of the more interesting AI opportunities in the Kingdom because the buyer is a mix of agri-co-operatives, tourism authorities and hospitality operators — and the production AI question is less about scale and more about fitting the season. We arrive with yield-prediction, demand-forecasting and operational-AI templates calibrated for highland conditions and the Makkah Province operational rhythm.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Taif agriculture, tourism and hospitality operators.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Taif operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience with agri-tech AI in a Saudi highland environment?',
        answer:
          'Our agri-tech work covers yield prediction, irrigation optimisation, harvest scheduling and cold-chain demand AI — historically in GCC date and produce supply chains. For Taif rose and fruit producers we calibrate the yield model on local climatic and altitude data and integrate with the agri-co-operative ERP. The week-four gate is a demonstrated KPI lift on a single product line before scaling.'
      },
      {
        question: "Can you handle Taif's seasonal load profile in tourism and hospitality AI?",
        answer:
          'Yes. Taif tourism is summer-peaked, distinct from year-round western-Saudi tourism. Our revenue-management and demand-forecasting models are recalibrated on local seasonality at the start of each engagement, and the operational dashboard surfaces summer-load and shoulder-season views separately to support the steering committee.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-mecca', 'ai-development-in-jeddah', 'ai-development-in-abha']
  },
  {
    slug: 'ai-development-in-tabuk',
    name: 'Tabuk',
    possessive: "Tabuk's",
    region: 'Tabuk Province',
    economicSnapshot:
      "Northwest Saudi Arabian provincial capital and the closest large city to NEOM — a fast-growing hub for giga-project logistics, agriculture (especially in the Tabuk agricultural belt), military operations and an emerging smart-city pilot ecosystem aligned to Vision 2030.",
    heroEyebrow: 'AI engineering for Tabuk',
    heroH1: 'Production AI for Tabuk.',
    heroLead:
      "We build the AI systems that Tabuk's NEOM-adjacent giga-project sponsors, agricultural co-operatives, logistics operators and public-sector smart-city pilots actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      'AI development company in Tabuk — production AI for NEOM-adjacent giga-project programmes, Tabuk agriculture, logistics and smart-city pilots. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Tabuk'),
      'AI for NEOM ecosystem',
      'AI for agriculture Tabuk',
      'AI for logistics Tabuk',
      'smart city AI Saudi Arabia',
      'giga-project AI northwest Saudi Arabia',
      'AI for Tabuk Province'
    ],
    sectorAngles: [
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Smart-city pilot AI and giga-project operational AI for Tabuk Province and NEOM-adjacent programmes.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Giga-project logistics, materials-handling AI and supply-chain forecasting for NEOM-area programmes.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agri-tech yield prediction, irrigation AI and supply-chain optimisation for the Tabuk agricultural belt.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Renewables forecasting and asset-performance AI for Tabuk-area solar and wind programmes.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Asset and tenant analytics for Tabuk Province real-estate and giga-project housing.' }
    ],
    positioningCopy:
      "Tabuk is the staging ground for some of the most ambitious AI programmes in the Kingdom — NEOM-adjacent giga-project work, smart-city pilots, large-scale agricultural digitisation, renewables. The buyer wants production-grade AI, not a pilot that collapses on handover. We arrive with the giga-project AI delivery rhythm already proven, the evidence pack baked into the path, and a 12-week production gate that fits inside the programme's master schedule.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Tabuk giga-project, agriculture and logistics teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Tabuk operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you deliver into NEOM-adjacent giga-project programmes from Tabuk?',
        answer:
          'Yes — many of our Tabuk engagements are scoped under master agreements held by NEOM-adjacent sponsors. We are familiar with the giga-project gating rhythm, the master-schedule constraint and the typical sponsor governance overhead, and we structure the 12-week production path to slot into your existing programme schedule and steering cadence.'
      },
      {
        question: 'Can you handle large-scale agri-tech for the Tabuk agricultural belt?',
        answer:
          'Yes. Our agri-tech work covers yield prediction at field-level, irrigation optimisation with sensor-fusion ML, satellite-imagery-driven crop monitoring and supply-chain demand AI. For Tabuk we calibrate on local soil, climatic and crop data and integrate with the co-operative ERP — with a week-four gate on demonstrated yield-uplift on a pilot field block.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-riyadh', 'ai-development-in-hail', 'ai-development-in-yanbu']
  },
  {
    slug: 'ai-development-in-abha',
    name: 'Abha',
    possessive: "Abha's",
    region: 'Asir Province',
    economicSnapshot:
      "Capital of the Asir Province and the centre of Saudi Arabia's southwestern highland tourism economy — known for its mountain climate, growing tourism and hospitality sector under Vision 2030's Asir Development Strategy, and a regional services base.",
    heroEyebrow: 'AI engineering for Abha',
    heroH1: 'Production AI for Abha.',
    heroLead:
      "We build the AI systems that Abha's tourism operators, Asir-Development-Strategy programmes, hospitality groups, agricultural co-operatives and public-sector authorities actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      'AI development company in Abha — production AI for Asir tourism programmes, hospitality operators, agriculture and public-sector authorities in the southwestern highlands. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Abha'),
      'AI for tourism Abha',
      'AI for hospitality Asir',
      'Asir Development Strategy AI',
      'AI for agriculture Asir',
      'highland tourism AI'
    ],
    sectorAngles: [
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Revenue, demand and multilingual guest AI for Abha highland-tourism and hospitality operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Asir Development Strategy programme AI and tourism-authority analytics for the southwestern region.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Multilingual retail conversational AI for Abha tourism and consumer brands.' },
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agri-tech and small-scale food-processing AI for Asir agricultural co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Last-mile and tourism-supply AI across the Asir mountains.' }
    ],
    positioningCopy:
      "Abha sits at the centre of one of Vision 2030's most distinctive regional bets — the Asir Development Strategy, transforming the southwestern highlands into a premium tourism economy. The AI question is operational: revenue management for new hospitality stock, demand forecasting under climate-led seasonality, multilingual NLP for international and domestic guests, and tourism-authority analytics on the development programme itself. We arrive with templates calibrated for highland tourism and a delivery rhythm that respects the Asir programme cadence.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Abha tourism, hospitality and Asir-programme teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Abha operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you understand the Asir Development Strategy programme rhythm?',
        answer:
          'Yes — we structure Abha engagements to slot inside the Asir programme master schedule and the relevant tourism-authority governance cadence. The 12-week production path is sized to align with programme gates rather than calendar quarters, with the steering cadence and evidence pack tuned to the Asir programme office expectations.'
      },
      {
        question: "How do you handle the multilingual side of Abha's emerging international tourism?",
        answer:
          'Every guest-facing AI we build for Abha runs MSA Arabic, Saudi-dialect Arabic and English as first-class languages, with optional Urdu, Indonesian and Mandarin layers tuned to the Asir international tourism flow. We benchmark per-language intent-recognition accuracy in discovery and publish the numbers in the contract.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-jeddah', 'ai-development-in-taif', 'ai-development-in-mecca']
  },
  {
    slug: 'ai-development-in-buraidah',
    name: 'Buraidah',
    possessive: "Buraidah's",
    region: 'Qassim Province',
    economicSnapshot:
      "Capital of the Qassim Province in central Saudi Arabia and the agricultural heartland of the Kingdom — historically the centre of Saudi date production and a growing hub for agri-business, retail, logistics and education.",
    heroEyebrow: 'AI engineering for Buraidah',
    heroH1: 'Production AI for Buraidah.',
    heroLead:
      "We build the AI systems that Buraidah's agri-business operators, date-industry co-operatives, retail groups, logistics operators and Qassim-Province public-sector authorities actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      'AI development company in Buraidah — production AI for Qassim Province agri-business, date-industry co-operatives, retail groups, logistics and public-sector authorities. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Buraidah'),
      'AI for agriculture Buraidah',
      'AI for date industry Saudi Arabia',
      'AI for retail Qassim',
      'AI for Qassim Province',
      'agri-business AI Saudi Arabia'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agri-business, food-processing and date-industry yield, grading and supply-chain AI for the Qassim Province.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Cold-chain and dry-goods supply AI from Buraidah agri-co-operatives to Saudi and GCC retail.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand forecasting and Arabic conversational AI for Qassim retail groups and family businesses.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Qassim-Province public-sector AI for agri, education and municipal authorities.' },
      { name: 'Education', href: '/industries/education', angle: 'Education-sector AI for Qassim University and regional school systems.' }
    ],
    positioningCopy:
      "Buraidah is the agricultural and family-business engine of central Saudi Arabia — and where AI uplift translates directly into co-operative margin and retail efficiency. The buyer wants pragmatic, production-ready AI that integrates with existing co-operative ERP and retail POS systems, with a financial-uplift hypothesis written upfront. We arrive with agri-business and retail AI templates calibrated for the Qassim operating rhythm.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Buraidah agri-business, retail and public-sector teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Buraidah operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you handle the operational rhythm of a Qassim date-industry co-operative?',
        answer:
          "Yes. Our date-industry work covers yield prediction at the farm block, automated grading using computer vision on the packing line, demand forecasting into Saudi and GCC retail, and Arabic conversational AI for co-operative member services. We calibrate the models on each co-operative's last three harvests and demonstrate uplift on a single SKU before scaling."
      },
      {
        question: 'Do you integrate with the retail POS and ERP stacks typically run in Qassim retail?',
        answer:
          'Yes. Our retail integrations cover Microsoft Dynamics 365, SAP Retail, Oracle Retail, Odoo and several Saudi-built retail platforms. We document the integration in discovery and ship a working end-to-end sample against your sandbox environment before contract sign on the build phase.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-riyadh', 'ai-development-in-hail', 'ai-development-in-dammam']
  },
  {
    slug: 'ai-development-in-hail',
    name: 'Hail',
    possessive: "Hail's",
    region: 'Hail Province',
    economicSnapshot:
      "Capital of the Hail Province in north-central Saudi Arabia — a regional agricultural and logistics hub on the north corridor, with a growing tourism economy around AlUla and a strategic position on the Saudi land-bridge to Jordan and Iraq.",
    heroEyebrow: 'AI engineering for Hail',
    heroH1: 'Production AI for Hail.',
    heroLead:
      "We build the AI systems that Hail's agri-business operators, logistics corridors, regional tourism (including the AlUla catchment), and Hail-Province public-sector authorities actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      'AI development company in Hail — production AI for north-central Saudi agriculture, logistics, AlUla-adjacent tourism and Hail-Province public sector. Named engineers, PDPL-aligned sovereign deployment, Arabic NLP depth and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Hail'),
      'AI for agriculture Hail',
      'AI for logistics northern Saudi Arabia',
      'AI for AlUla tourism ecosystem',
      'AI for Hail Province',
      'Saudi land-bridge AI'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Agri-business, yield and food-processing AI for Hail Province co-operatives.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Land-bridge logistics, freight and customs AI for the northern Saudi corridor to Jordan and Iraq.' },
      { name: 'Hospitality and tourism', href: '/industries/hospitality-tourism', angle: 'Demand and multilingual guest AI for the AlUla-adjacent tourism catchment.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'Hail-Province public-sector AI for municipal, agri and tourism authorities.' },
      { name: 'Retail and ecommerce', href: '/industries/retail-ecommerce', angle: 'Demand forecasting and Arabic conversational AI for Hail retail and family businesses.' }
    ],
    positioningCopy:
      "Hail sits at the intersection of agriculture, logistics and an AlUla-driven tourism story. The AI buyer wants concrete operational uplift — yield, cycle time, occupancy, freight throughput. We arrive with the templates already calibrated for north-central Saudi and a 12-week production path that produces a measurable lift on a single operating line before scaling to the wider portfolio.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Hail agri-business, logistics and tourism teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Hail operations team. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Do you have experience delivering AI into the AlUla-adjacent tourism catchment?',
        answer:
          'Yes — Hail engagements that touch the AlUla catchment use the same demand-forecasting, revenue-management and multilingual NLP templates we run in other Saudi tourism centres, calibrated on AlUla seasonality and the Royal Commission for AlUla programme cadence. We share the relevant reference architecture on the first technical session.'
      },
      {
        question: 'Can you handle north-corridor logistics AI for the Saudi land-bridge?',
        answer:
          'Yes. Our logistics-corridor work covers customs document intelligence (including Arabic OCR on Saudi customs paperwork), border-crossing ETA prediction, freight-pricing AI and fleet utilisation models. For Hail we integrate with the operator TMS and the Saudi Customs Authority interfaces, and demonstrate cycle-time uplift on a single freight lane before scaling.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-buraidah', 'ai-development-in-tabuk', 'ai-development-in-riyadh']
  },
  {
    slug: 'ai-development-in-jubail',
    name: 'Jubail',
    possessive: "Jubail's",
    region: 'Eastern Province',
    economicSnapshot:
      "Saudi Arabia's largest industrial city and the world's largest single-site industrial complex — home to SABIC plants, large-scale petrochemical, refining and downstream-industrial operations, a deep-water port and the Royal Commission for Jubail and Yanbu (RCJY) industrial-city authority.",
    heroEyebrow: 'AI engineering for Jubail',
    heroH1: 'Production AI for Jubail.',
    heroLead:
      "We build the AI systems that Jubail's petrochemical majors, refining and downstream operators, SABIC-ecosystem manufacturers and Royal Commission for Jubail and Yanbu programmes actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      'AI development company in Jubail — production AI for petrochemical majors, refining and downstream operators, SABIC-ecosystem manufacturers and RCJY industrial programmes. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Jubail'),
      'AI for petrochemicals Jubail',
      'AI for SABIC ecosystem',
      'AI for refining Jubail',
      'AI for industrial city Saudi Arabia',
      'AI for Royal Commission Jubail Yanbu',
      'industrial AI Saudi Arabia'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, throughput optimisation and OEE uplift AI for Jubail petrochemical and downstream plants.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for Jubail refining and energy operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Port, terminal and industrial-logistics AI for Jubail Commercial Port and RCJY-zone operators.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'RCJY industrial-city operational AI for Jubail public-sector authorities.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Jubail industrial zone.' }
    ],
    positioningCopy:
      "Jubail is the largest single-site industrial complex on the planet — and the AI question is industrial-grade by definition. Plants run 24/7. Process safety is non-negotiable. The historian and SCADA stack is dense. We arrive with senior industrial-AI engineers, reference architectures against the petrochemical operator stack, and a 12-week production path that integrates with your existing HAZOP, management-of-change and functional-safety regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Jubail petrochemicals, refining and SABIC-ecosystem teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Jubail plant and corporate teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you integrate AI with the historian and SCADA stack typical of a Jubail petrochemical plant?',
        answer:
          'Yes. Our industrial reference architectures cover OSIsoft PI / AVEVA PI System, Honeywell PHD, Aspen IP.21, and the major SCADA stacks (Honeywell Experion, Yokogawa CENTUM, Emerson DeltaV, ABB 800xA). We treat the historian as a primary data layer and ship a reference pipeline against your specific environment in the discovery phase.'
      },
      {
        question: 'How do you handle process safety and management-of-change for AI in a Jubail plant?',
        answer:
          'Every industrial AI we build for Jubail clients integrates with your existing HAZOP and management-of-change regime. We document failure-mode and effects analysis on the AI decision boundary, build operator-override fallbacks on confidence drops, and align the model evidence pack to IEC 61511 / IEC 61508 functional-safety expectations as appropriate.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-dhahran', 'ai-development-in-dammam', 'ai-development-in-yanbu']
  },
  {
    slug: 'ai-development-in-yanbu',
    name: 'Yanbu',
    possessive: "Yanbu's",
    region: 'Madinah Province',
    economicSnapshot:
      "A Red Sea industrial port city in the Madinah Province — home to large-scale petrochemical and refining operations, Yanbu Commercial Port, and the western anchor of the Royal Commission for Jubail and Yanbu industrial-city programme.",
    heroEyebrow: 'AI engineering for Yanbu',
    heroH1: 'Production AI for Yanbu.',
    heroLead:
      "We build the AI systems that Yanbu's petrochemical operators, refining majors, port and shipping operators and RCJY-Yanbu programmes actually put into production — staffed by named senior engineers, priced in SAR, and aligned to PDPL, NCA-ECC and the relevant sector regulator.",
    metaDescription:
      'AI development company in Yanbu — production AI for Red Sea petrochemicals, refining, port operations and RCJY industrial programmes in the Madinah Province. Named engineers, PDPL-aligned sovereign deployment, ISO 27001 + SOC 2 Type II, and a 12-week production path.',
    keywords: [
      ...sharedNlpKeywords('Yanbu'),
      'AI for petrochemicals Yanbu',
      'AI for refining Yanbu',
      'AI for Red Sea port',
      'AI for Yanbu Commercial Port',
      'AI for Royal Commission Yanbu',
      'industrial AI Madinah Province'
    ],
    sectorAngles: [
      { name: 'Manufacturing', href: '/industries/manufacturing', angle: 'Defect detection, throughput and OEE uplift AI for Yanbu petrochemical and downstream plants.' },
      { name: 'Energy and utilities', href: '/industries/energy-utilities', angle: 'Process-control ML, predictive maintenance and asset-performance AI for Yanbu refining and energy operations.' },
      { name: 'Logistics and supply chain', href: '/industries/logistics-supply-chain', angle: 'Red Sea port and terminal AI for Yanbu Commercial Port operators and shipping lines.' },
      { name: 'Government and public sector', href: '/industries/government-public-sector', angle: 'RCJY industrial-city operational AI for Yanbu authorities.' },
      { name: 'Real estate and PropTech', href: '/industries/real-estate-proptech', angle: 'Industrial real-estate and asset-utilisation AI for the Yanbu industrial zone.' }
    ],
    positioningCopy:
      "Yanbu pairs Jubail-grade industrial AI demand with a Red Sea port footprint — and an operating environment where downstream petrochemicals and shipping logistics overlap. Plants run 24/7; the port runs against tide and shipping schedules. We arrive with senior industrial-AI engineers, reference architectures against the petrochemical operator stack and the major TOS systems, and a 12-week production path that integrates with your existing HAZOP and process-safety regime.",
    ownershipBullets: [
      { t: 'We build', d: 'Bespoke AI systems for Yanbu petrochemicals, refining and port teams.' },
      { t: 'You own', d: 'Code, models, weights, infrastructure — yours on creation, hosted in-Kingdom.' },
      { t: 'We hand over', d: 'Engineered transition to your Yanbu plant and operations teams. No vendor lock-in.' }
    ],
    cityFaq: [
      {
        question: 'Can you run a single AI programme spanning a Yanbu petrochemical plant and the adjacent port operation?',
        answer:
          'Yes. Many Yanbu engagements are dual-asset — the predictive-maintenance and throughput-optimisation models on the plant side share a data layer with the terminal-side ETA prediction and container-yard CV. We deliver a single reference architecture covering both sides and per-asset evidence packs aligned to PDPL and the relevant authority.'
      },
      {
        question: 'How do you handle Red Sea port-environment integration with the major TOS systems?',
        answer:
          'Our port integrations cover Navis N4, CTOS, TOPS and several in-house Saudi-built TOS platforms, plus the AIS, port-community-system and customs interfaces. For Yanbu we document the integration in discovery and ship a sample inference pipeline against your specific terminal and shipping-line environment before contract sign on the build phase.'
      }
    ],
    relatedCitySlugs: ['ai-development-in-jubail', 'ai-development-in-medina', 'ai-development-in-jeddah']
  }
];

export function getSaudiCityBySlug(slug: string): SaudiCity | undefined {
  return SAUDI_CITIES.find((c) => c.slug === slug);
}

export const SAUDI_CITY_SLUGS = SAUDI_CITIES.map((c) => c.slug);
