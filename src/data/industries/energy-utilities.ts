import type { LongPage } from '../types';

export const energyUtilities: LongPage = {
  slug: 'energy-utilities',
  category: 'industry',
  title: 'Energy & Utilities',
  seoTitle: 'AI for Energy & Utilities in Abu Dhabi, Dubai & the UAE',
  seoDescription:
    'Brocode Solutions builds industrial AI for energy and utility operators across Abu Dhabi, Dubai, and the UAE — oil and gas downstream, grid forecasting, sustainability, and the ADNOC, TAQA, and DEWA ecosystems.',
  eyebrow: 'Energy AI',
  headline: 'AI for the operators who run the UAE\'s energy backbone.',
  sub: 'We build predictive, optimisation, and sustainability AI for UAE oil and gas, power, and water operators — engineered around ADNOC-grade safety expectations, grid economics, and Net Zero 2050 targets.',
  heroImage: '/images/industries/energy-utilities.jpg',
  heroImageAlt: 'Engineer monitoring control screens in an operations centre beside a UAE refinery and adjacent solar installation.',
  heroIcon: 'bolt',
  intro:
    'Energy and utilities in the UAE sit at the centre of the country\'s economic story and its sustainability commitments. Oil and gas downstream, gas processing, petrochemicals, conventional and renewable power, and water desalination all operate at a scale where small efficiency gains translate to large absolute returns — and where any safety lapse is unacceptable. Brocode Solutions builds industrial AI for energy and utility operators from our Abu Dhabi headquarters, working alongside reliability, operations, and digital teams in some of the country\'s most demanding plants and networks.',
  sections: [
    {
      heading: 'The pressure on UAE energy and utilities is reshaping the sector',
      body: 'The UAE Net Zero 2050 commitment, the strategic build-out of nuclear at Barakah, solar at scale, and hydrogen pilots are reshaping the energy mix at the same time as demand growth from industry, data centres, and population continues. ADNOC, ENEC, EWEC, DEWA, SEWA, and FEWA all operate under tightening reliability, efficiency, and emissions expectations, while ADNOC\'s digital and AI ambitions raise the bar for partners across the ecosystem. Plant operators are managing assets that mix decades-old hardware with brand-new control systems. AI is the practical tool for squeezing more from existing assets while keeping safety and emissions inside the agreed envelopes.'
    },
    {
      heading: 'Where AI moves the needle in energy and utilities',
      body: 'The most valuable energy AI in the UAE focuses on a few mature plays: predictive maintenance on rotating equipment such as compressors, pumps, and turbines using vibration and process telemetry; process optimisation that lifts yield in refining, gas processing, and petrochemicals within validated safety envelopes; load and generation forecasting that supports grid economics for utilities running a mix of thermal, nuclear, and renewable sources; leak detection and emissions intelligence on pipelines and process plants; and customer analytics for utilities managing residential and commercial tariffs. Computer vision is increasingly deployed for flare monitoring, PPE compliance, and intruder detection across remote sites.'
    },
    {
      heading: 'Operating and safety reality',
      body: 'Industrial AI in UAE energy operates under unforgiving safety, security, and regulatory standards. We deploy edge inference inside plant networks with strict IT/OT segmentation, integrate with historians such as PI System and AVEVA, and write to CMMS platforms like Maximo and SAP PM. Models are validated against safety cases, with human-in-the-loop checkpoints for any setpoint suggestion. For ADNOC ecosystem clients, we work to group digital, cyber, and operating standards from day one rather than retrofitting at the end. Sovereign data residency is the default for sensitive operational data, and we are comfortable deploying on UAE-based infrastructure with no data leaving the country.'
    },
    {
      heading: 'Outcomes UAE energy clients have shipped',
      body: 'Recent engagements include a vibration and process telemetry predictive maintenance system across critical rotating equipment for a UAE downstream operator that reduced unplanned outages, a load forecasting and dispatch advisory model for a utility integrating large-scale solar that improved short-term forecast accuracy, and a flare and emissions monitoring computer vision system that gave operators a continuous record rather than periodic sampling. In each programme, Brocode delivered the edge architecture, the historian and CMMS integration, the safety case sign-off, and the operator training, so the AI was trusted on shift rather than parked in a digital roadmap.'
    }
  ],
  highlights: [
    { title: 'Edge and sovereign deployment', description: 'Inside plant networks, on UAE infrastructure, with no data exfiltration.', icon: 'cloud' },
    { title: 'ADNOC-ecosystem aware', description: 'Aligned to group digital, cyber, and operating standards.', icon: 'shield' },
    { title: 'Reliability and process optimisation', description: 'Predictive maintenance and yield models with safety case discipline.', icon: 'cogs' },
    { title: 'Grid and load forecasting', description: 'Short- and medium-term forecasting for mixed generation portfolios.', icon: 'chart' },
    { title: 'Emissions and sustainability', description: 'Flare, leak, and emissions intelligence aligned to Net Zero 2050 reporting.', icon: 'eye' },
    { title: 'Historian and CMMS integrated', description: 'PI System, AVEVA, Maximo, SAP PM, with IT/OT segmentation respected.', icon: 'link' }
  ],
  whyBrocode:
    'We have delivered industrial AI inside operating UAE energy assets, working beside reliability engineers, control-system integrators, and operations leadership. Our engineers understand turnarounds, safety cases, and the discipline expected by ADNOC-tier operators. We deploy on the edge inside plant networks and treat IT/OT segmentation, cyber, and sovereign data residency as non-negotiable defaults.',
  ourApproach:
    'We start with a plant-floor or control-room discovery, mapping data sources from historians, SCADA, and corporate systems with reliability, operations, and digital leads. Build proceeds in two-week increments with engineers on-site at key milestones. Hardening covers safety case sign-off, cyber review against group standards, edge deployment hardening, and operator training. Post go-live, Brocode engineers stay alongside operations and reliability under a defined run-phase, monitoring drift on process data and transferring operational ownership while remaining accountable for performance.',
  stats: [
    { value: 6, label: 'UAE energy and utility deployments' },
    { value: 30, suffix: '%', label: 'Average reduction in unplanned outages' },
    { value: 15, suffix: '%', label: 'Average uplift in forecast accuracy' },
    { value: 100, suffix: '%', label: 'Operational data inside UAE borders' }
  ],
  primaryCta: { label: 'Talk to our energy team', href: '/contact' },
  secondaryCta: { label: 'Review our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Forecasting for assets, loads, and emissions.' },
    { label: 'Computer Vision', href: '/services/computer-vision', description: 'Flare, PPE, and remote site monitoring.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Edge model operations on plant networks.' },
    { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Historian, SCADA, and corporate data bridges.' },
    { label: 'Manufacturing', href: '/industries/manufacturing', description: 'Related industrial AI work on heavy assets.' }
  ],
  capabilities: [
    'Predictive maintenance on rotating and static equipment',
    'Process and yield optimisation within safety envelopes',
    'Load and generation forecasting for utilities',
    'Leak, flare, and emissions monitoring',
    'Worker safety and remote site computer vision',
    'Sovereign edge deployment with IT/OT segmentation'
  ],
  outcomes: [
    'Lower unplanned outages on critical rotating assets',
    'Improved yield within validated safety envelopes',
    'Better short-term forecast accuracy for dispatch',
    'Continuous emissions and flare visibility',
    'Trained operations and reliability teams owning the system'
  ]
};
