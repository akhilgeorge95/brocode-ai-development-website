import type { LongPage } from '../types';

export const manufacturing: LongPage = {
  slug: 'manufacturing',
  category: 'industry',
  title: 'Manufacturing',
  seoTitle: 'Industrial AI and Industry 4.0 for UAE Manufacturers',
  seoDescription:
    'Brocode Solutions builds industrial AI for UAE and GCC manufacturers — predictive maintenance, computer vision QA, and Industry 4.0 systems on the factory floor.',
  eyebrow: 'Industrial AI',
  headline: 'Industrial AI that lives on the factory floor, not in a slide deck.',
  sub: 'We build predictive maintenance, computer vision quality assurance, and Industry 4.0 platforms for UAE and GCC manufacturers — engineered to run inside the plant network, beside the PLCs and historians.',
  heroImage: '/images/industries/manufacturing.jpg',
  heroImageAlt: 'Operator inspecting a high-speed production line beside an industrial robot inside a modern UAE manufacturing plant.',
  heroIcon: 'cogs',
  intro:
    'Manufacturing in the UAE spans metals, petrochemicals downstream, food and beverage, building materials, and a growing base of advanced manufacturing tied to the Operation 300bn strategy and ICV programmes. Plants operate twenty-four hours a day, margins are tight, and a single unplanned stoppage can cost more in a shift than the AI project would in a year. Brocode Solutions builds industrial AI for UAE and GCC manufacturers from our Abu Dhabi headquarters, with engineers comfortable working beside control-system specialists in plants rather than only in head offices.',
  sections: [
    {
      heading: 'The pressure on UAE manufacturers is mounting',
      body: 'Regional manufacturers compete on conversion cost, on-time delivery, and quality at a time when energy prices, freight, and labour are all moving. National programmes such as Operation 300bn and the In-Country Value framework push manufacturers to expand capacity and raise productivity, while customers in automotive, aerospace, and construction tighten quality and traceability requirements. Plants commissioned years ago often run on a patchwork of PLCs, SCADA systems, MES, and ERP, with operational data trapped in silos. AI is the practical way to extract value from that data — improving yield, predicting failures, and tightening quality without ripping out the control stack.'
    },
    {
      heading: 'Where AI moves the needle on the shop floor',
      body: 'The highest-impact industrial AI in the UAE focuses on a handful of areas: predictive maintenance on rotating equipment, compressors, and conveyors using vibration, thermal, and process telemetry; computer vision quality assurance that inspects every unit at line speed rather than sampling; process optimisation that nudges setpoints to lift yield without breaching safety envelopes; energy optimisation that targets the larger consumers of utilities; and worker-safety vision that flags PPE violations or unsafe positioning around heavy plant. None of this requires ripping out the existing automation. It sits alongside it, reading historian and OT data and writing insights to dashboards and CMMS.'
    },
    {
      heading: 'Operating reality in regulated industrial environments',
      body: 'Industrial AI in the UAE has to respect plant safety, IT/OT segmentation, and the realities of brownfield estates. We deploy edge inference inside the plant network with strict separation from corporate IT, integrate with historians like PI System, AVEVA, and Ignition, and write back to maintenance systems such as Maximo, SAP PM, or eMaint. Every model is reconciled with the documented safety case for the asset, and any setpoint change that could shift product quality or process safety routes through operator approval rather than being applied automatically. Where the operator falls under ADNOC, EGA, or other major group standards, we work to those specifications rather than expecting them to bend to ours.'
    },
    {
      heading: 'Outcomes UAE manufacturing clients have shipped',
      body: 'Recent engagements include a vibration-based predictive maintenance system that cut unplanned downtime on a critical line for a UAE metals producer, a computer vision quality assurance model deployed on a food and beverage production line that replaced manual sampling with full inspection, and an energy optimisation layer for a cement plant that reduced specific energy consumption on the kiln. In each programme, Brocode delivered the edge deployment, the integration with historian and CMMS, the operator training, and the safety case sign-off — making the AI something maintenance and operations teams trusted on shift.'
    }
  ],
  highlights: [
    { title: 'Edge-deployable', description: 'Inference inside the plant network, no dependency on public cloud uptime.', icon: 'cpu' },
    { title: 'Predictive maintenance ready', description: 'Vibration, thermal, current, and process telemetry handled natively.', icon: 'bolt' },
    { title: 'Computer vision QA', description: 'Inline inspection at line speed, validated against operator gold standard.', icon: 'eye' },
    { title: 'OT-aware integration', description: 'Historians, MES, ERP, and CMMS without breaking IT/OT segmentation.', icon: 'link' },
    { title: 'Safety case discipline', description: 'Human-in-the-loop and documented validation for setpoint guidance.', icon: 'shield' },
    { title: 'Operator-first design', description: 'Built with shift supervisors and engineers, not only IT.', icon: 'workflow' }
  ],
  whyBrocode:
    'Our engineers have delivered industrial AI inside operating UAE plants, working beside control-system integrators and reliability engineers. We understand the rhythm of a turnaround, the discipline of a safety case, and the constraints of brownfield estates where ripping out automation is not on the table. We deploy on the edge inside plant networks and treat OT segmentation as non-negotiable.',
  ourApproach:
    'We begin with a plant-floor discovery — walking the line with reliability, operations, and IT, mapping data sources from historians and PLCs, and prioritising use cases with clear financial and safety upside. Build proceeds in two-week increments with engineers embedded on-site at key milestones. Hardening covers safety case review, edge deployment hardening, OT segmentation validation, and operator training. Post go-live, Brocode engineers stay alongside the plant team under a defined run-phase, monitoring drift on process data and transferring operational ownership to reliability and operations leads.',
  stats: [
    { value: 8, label: 'UAE and GCC industrial deployments' },
    { value: 25, suffix: '%', label: 'Average reduction in unplanned downtime' },
    { value: 4, suffix: 'x', label: 'QA inspection coverage uplift' },
    { value: 12, label: 'Weeks median plant pilot duration' }
  ],
  primaryCta: { label: 'Talk to our industrial team', href: '/contact' },
  secondaryCta: { label: 'See our methodology', href: '/technology/methodology' },
  related: [
    { label: 'Computer Vision', href: '/services/computer-vision', description: 'Inline inspection and worker safety.' },
    { label: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'Equipment health and process forecasting.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Edge model operations on the plant network.' },
    { label: 'Data Engineering for AI', href: '/services/data-engineering-for-ai', description: 'Bridge historians and corporate data.' },
    { label: 'Energy & Utilities', href: '/industries/energy-utilities', description: 'Related work on heavy industrial assets.' }
  ],
  capabilities: [
    'Predictive maintenance on rotating and static equipment',
    'Computer vision quality assurance at line speed',
    'Process and yield optimisation with safety envelopes',
    'Energy and utility consumption optimisation',
    'Worker safety vision and PPE compliance',
    'Edge inference and IT/OT segmented architecture'
  ],
  outcomes: [
    'Lower unplanned downtime on critical assets',
    'Higher inspection coverage with fewer escapes',
    'Improved yield within validated safety envelopes',
    'Reduced specific energy consumption on heavy assets',
    'Trained operations and reliability teams owning the system'
  ]
};
