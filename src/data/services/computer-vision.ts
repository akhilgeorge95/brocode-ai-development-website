import type { LongPage } from '../types';

export const computerVision: LongPage = {
  slug: 'computer-vision',
  category: 'service',
  title: 'Computer Vision',
  seoTitle: 'Computer Vision Solutions & Engineering in Dubai, Abu Dhabi & the UAE',
  seoDescription:
    'Brocode Solutions builds and deploys computer vision systems for security, manufacturing, healthcare, retail, and government clients across Abu Dhabi, Dubai, and the UAE.',
  eyebrow: 'Visual intelligence',
  headline: 'Computer vision systems that work on real cameras, real lighting, and real operations.',
  sub: 'From quality inspection on production lines to identity workflows in government services, we engineer vision pipelines that hold up outside the lab and inside your operating constraints.',
  heroImage: '/images/services/computer-vision.jpg',
  heroImageAlt: 'Industrial camera capturing a moving production line with overlaid bounding boxes and detection confidence scores in a control-room interface',
  heroIcon: 'eye',
  intro:
    'Computer vision succeeds or fails in the conditions you cannot control: glare on a windscreen, dust on a sensor, partial occlusion, multiple ethnicities and skin tones, Arabic and English signage in the same frame. Brocode Solutions designs vision systems for those conditions, drawing on engineers based in Abu Dhabi who have shipped models into UAE airports, factories, retail estates, and federal services. We treat data collection, edge deployment, and human review as first-class concerns alongside the model itself, because that is where most vision programmes succeed or quietly stall.',
  sections: [
    {
      heading: 'From pixels to decisions you can act on',
      body: 'We design vision systems around the decision they support, not the model alone. Detection, classification, segmentation, tracking, and pose estimation are tools in service of a workflow — flagging a defective component, verifying a presented ID, counting footfall, or detecting unsafe behaviour on a worksite. Our engineers profile the camera estate, lighting, motion, and class distribution before architecting the pipeline, then iterate on labelled samples drawn from your environment. The output is a system whose accuracy on your data, not a public benchmark, is the headline metric.'
    },
    {
      heading: 'Data, labelling, and edge cases handled with discipline',
      body: 'Vision projects often live or die on data quality. We operate labelling programmes with UAE-based reviewers, active learning loops that prioritise the hardest examples, and synthetic data generation where real samples are scarce or sensitive. For regulated environments we handle consent, retention, and anonymisation rigorously, including face blurring, plate masking, and minor-detection workflows where applicable. Edge cases — night-time imagery, abaya and kandura attire, mixed-language signage, occlusions — are catalogued, sampled, and evaluated explicitly rather than left to averages.'
    },
    {
      heading: 'Edge and cloud deployment, your choice',
      body: 'We deploy where the workload belongs. Real-time inspection on a manufacturing line typically runs on edge hardware close to the camera, with model versions, telemetry, and over-the-air updates managed centrally. Higher-latency analytics on archived footage can run in private cloud or sovereign infrastructure. Our engineers handle the optimisation work — quantisation, TensorRT or ONNX compilation, hardware-aware kernel selection — so that accuracy targets are met within the latency, power, and cost envelope of the target device. Fleet management and observability are wired in from the first deployment.'
    },
    {
      heading: 'Vision outcomes delivered in the region',
      body: 'Recent computer vision engagements include a surface-defect inspection system on an aluminium extrusion line that reduced manual QC headcount substantially, a footfall and queue-management analytics platform for a regional retail group across more than a hundred stores, and an identity-document verification pipeline supporting a federal digital service. In each case we shipped not just models but the labelling operations, edge fleet, monitoring stack, and the team enablement required to keep accuracy compounding rather than decaying over time.'
    }
  ],
  highlights: [
    { title: 'Production-ready vision pipelines', description: 'End-to-end systems covering capture, inference, review, and feedback loops.', icon: 'eye' },
    { title: 'Edge deployment expertise', description: 'Optimised inference on NVIDIA Jetson, Intel, ARM, and industrial PC hardware.', icon: 'cpu' },
    { title: 'Labelling operations in the UAE', description: 'In-region annotation teams with quality controls and consent-aware workflows.', icon: 'doc' },
    { title: 'Privacy by design', description: 'Face blurring, plate masking, retention controls, and consent capture built in.', icon: 'shield' },
    { title: 'Fleet observability', description: 'Per-camera accuracy, drift, and uptime visible from a single operations console.', icon: 'chart' },
    { title: 'Active learning loops', description: 'Hardest examples surfaced for review so the model improves with every deployment.', icon: 'workflow' }
  ],
  whyBrocode:
    'We have deployed vision systems into UAE factories, retail estates, transport hubs, and federal services, and we know what holds these programmes back: data quality, edge operations, and governance. Our Abu Dhabi engineering teams handle all three end to end, contracting under UAE law and working on-site when the deployment demands it. We bring the research depth to choose the right architecture and the field experience to ship it into operational environments.',
  ourApproach:
    'Programmes open with a site survey: cameras, lighting, network, and the operational workflow the vision system will support. We agree the target accuracy on your data and the latency and cost envelope before designing the pipeline. Delivery runs in two-week increments, with weekly steering reviews and continuous evaluation on held-out footage. Edge fleets are rolled out in waves, with canary cameras validating new model versions before full propagation. Once live, the system enters a defined run-phase with SLAs, active-learning operations, and progressive handover to your internal team.',
  stats: [
    { value: 40, suffix: '+', label: 'Vision systems deployed regionally' },
    { value: 1500, suffix: '+', label: 'Cameras under managed inference' },
    { value: 99.5, suffix: '%', label: 'Edge fleet availability' },
    { value: 10, label: 'Weeks median proof-of-value' }
  ],
  primaryCta: { label: 'Talk to a CV engineer', href: '/contact' },
  secondaryCta: { label: 'See our manufacturing work', href: '/industries/manufacturing' },
  related: [
    { label: 'Deep Learning Solutions', href: '/services/deep-learning-solutions', description: 'Custom neural networks for vision and beyond.' },
    { label: 'Manufacturing', href: '/industries/manufacturing', description: 'Inspection, safety, and yield improvement on the line.' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector', description: 'Identity, citizen services, and public-safety vision.' },
    { label: 'AI Model Optimization', href: '/services/ai-model-optimization', description: 'Fit vision models onto edge hardware affordably.' },
    { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Operate fleets of vision models as products.' }
  ],
  capabilities: [
    'Object detection, segmentation, and tracking',
    'OCR for Arabic, English, and mixed-script imagery',
    'Face, identity, and document verification workflows',
    'Defect detection and visual quality inspection',
    'Multi-camera analytics and re-identification',
    'Edge deployment, fleet management, and OTA updates'
  ],
  outcomes: [
    'Vision pipeline live within 12 weeks of kickoff',
    'Measured accuracy reported on your real footage',
    'Edge fleet under unified observability',
    'Privacy and retention controls passing audit',
    'In-region labelling team handed over to operations'
  ]
};
