import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { RelatedLinks } from '@/components/RelatedLinks';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BentoGrid, BentoCell } from '@/components/ui/Bento';
import { CompareTable, type CompareRow } from '@/components/ui/CompareTable';
import { FAQ, type FAQItem } from '@/components/ui/FAQ';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ProofBand } from '@/components/ui/ProofBand';
import { LeadMagnetGate } from '@/components/forms/LeadMagnetGate';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { PageFormConfig } from '@/components/forms/types';
import { buildWhatsAppLink } from '@/lib/site';

const SLUG = 'ai-model-optimization';
const WHATSAPP_MESSAGE =
  "Hi Brocode — I lead ML at [organisation]. We're trying to hit [latency / memory / cost] targets for a [vision / LLM / ASR / other] model on [target hardware]. Could we book a 45-minute technical review with your principal ML engineer?";

export const metadata: Metadata = {
  title: 'AI Model Optimisation — Quantisation, Distillation, Edge Inference',
  description:
    'Production-grade model optimisation: TensorRT, INT8 / INT4 quantisation, distillation, vLLM and edge serving. Median latency 4.2× faster, accuracy delta −0.4 percentage points on client data.',
  alternates: { canonical: 'https://www.brocode.ae/services/ai-model-optimization' },
  openGraph: {
    title: 'AI Model Optimisation — Brocode Solutions',
    description:
      'Quantisation, pruning, distillation, kernel-level acceleration. Real hardware lab: Jetson, Hailo, Snapdragon, L40S, Inferentia. Reproducible benchmark harness on GitHub.',
    url: 'https://www.brocode.ae/services/ai-model-optimization',
    images: ['/images/services/ai-model-optimization.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Model Optimisation — Brocode',
    description: 'Compress and accelerate your model on your target hardware. Median 4.2× latency reduction.'
  }
};

const formConfig: PageFormConfig = {
  pageSlug: SLUG,
  title: 'Book a 45-minute technical review with our Principal ML Engineer',
  subtitle:
    'A Brocode principal engineer with public PyTorch, vLLM or ONNX Runtime contribution history reviews your bottleneck and target hardware, and replies within one business day.',
  ctaLabel: 'Request the technical review',
  whatsappMessage: WHATSAPP_MESSAGE,
  fields: [
    {
      name: 'modelType',
      label: 'Model type',
      type: 'multiselect',
      required: true,
      options: ['Computer vision', 'LLM', 'ASR', 'TTS', 'Recommender', 'Tabular', 'Multimodal', 'Other']
    },
    {
      name: 'targetHardware',
      label: 'Target hardware',
      type: 'multiselect',
      required: true,
      options: [
        'NVIDIA Jetson',
        'NVIDIA datacentre GPU',
        'AWS Inferentia',
        'Qualcomm Snapdragon',
        'Apple Silicon',
        'Hailo',
        'Coral',
        'Intel CPU',
        'Browser / WASM',
        'Other'
      ]
    },
    {
      name: 'bottleneck',
      label: 'Current bottleneck',
      type: 'select',
      required: true,
      options: ['Latency', 'Model size', 'Memory', 'Accuracy after quantisation', 'Inference cost', 'Power']
    },
    {
      name: 'sla',
      label: 'Hard SLA you must hit',
      type: 'text',
      placeholder: 'e.g. p95 < 50 ms on Jetson Orin NX at 1080p'
    },
    {
      name: 'sensitivity',
      label: 'Data sensitivity',
      type: 'select',
      options: ['Shareable under NDA', 'On-site only', 'Air-gapped', 'Fully open']
    },
    { name: 'productionDate', label: 'Mandated production date', type: 'date' }
  ]
};

const compareRows: CompareRow[] = [
  {
    feature: 'Hardware-agnostic (Jetson, Snapdragon, Hailo, Apple, Intel, GPU, Inferentia)',
    brocode: true,
    competitors: ['Inferentia / Trainium', 'Azure VMs / GPUs', 'TPU / Vertex', 'Whatever the customer owns']
  },
  {
    feature: 'Ships optimised model as portable artefacts (ONNX, TensorRT plan, Core ML, LiteRT)',
    brocode: 'Customer owns and can rebuild',
    competitors: ['SageMaker-bound', 'Azure ML-bound', 'Vertex-bound', 'Code, not benchmark']
  },
  {
    feature: 'Reproducible benchmark harness on GitHub',
    brocode: true,
    competitors: [false, false, false, false],
    note: 'The result is verifiable forever, not a one-off claim.'
  },
  {
    feature: 'Kernel-level work (custom CUDA, Triton kernels, FlashAttention-3)',
    brocode: true,
    competitors: [false, false, false, 'Sometimes']
  },
  {
    feature: 'Air-gapped engagement option',
    brocode: 'Engineer flies on-site, no data egress',
    competitors: [false, false, false, 'Limited']
  },
  {
    feature: 'Named engineers with public PyTorch / vLLM / ONNX Runtime PRs',
    brocode: true,
    competitors: [false, false, false, false]
  },
  {
    feature: 'Latency-accuracy Pareto contract in SoW',
    brocode: 'Accuracy floor + p50/p95/p99 ceilings',
    competitors: ['Vague', 'Vague', 'Vague', '"It will be faster"']
  }
];

const toolchain: { tool: string; usage: string }[] = [
  { tool: 'NVIDIA TensorRT 10 + TensorRT-LLM', usage: 'Datacentre GPU and Jetson — peak throughput on NVIDIA silicon' },
  { tool: 'NVIDIA Triton Inference Server', usage: 'Multi-model serving with dynamic batching and ensemble pipelines' },
  { tool: 'vLLM + TGI', usage: 'LLM serving with paged attention, continuous batching, speculative decoding' },
  { tool: 'ONNX Runtime', usage: 'Cross-target portable inference — desktop, mobile, web execution providers' },
  { tool: 'PyTorch 2.x + torch.compile + TorchAO', usage: 'First-pass profiling, QAT, and the optimisation baseline' },
  { tool: 'OpenVINO', usage: 'Intel CPU and integrated graphics on edge industrial gear' },
  { tool: 'Qualcomm AIMET + SNPE', usage: 'Snapdragon mobile and automotive inference' },
  { tool: 'Apple Core ML + coremltools', usage: 'iOS on-device CV and audio with Neural Engine acceleration' },
  { tool: 'Google AI Edge / LiteRT + MediaPipe', usage: 'Android on-device pipelines and TFLite Micro' },
  { tool: 'Hailo SDK', usage: 'Hailo-8 and Hailo-15 NPUs in edge cameras and embedded boards' },
  { tool: 'AWS Neuron SDK', usage: 'Inferentia-2 and Trainium for high-volume cloud inference' }
];

const techniques: { name: string; body: string }[] = [
  {
    name: 'Post-training quantisation (PTQ)',
    body: 'INT8, INT4 and FP4 schemes. Weight-only and activation-aware. SmoothQuant and GPTQ for LLM weight calibration. Per-channel quantisation and outlier rescue for accuracy-sensitive layers. Usually the first thing we try; sometimes the only thing needed.'
  },
  {
    name: 'Quantisation-aware training (QAT)',
    body: 'When PTQ drops accuracy beyond the floor, we retrain with fake-quant ops in the graph. Recovers most of the gap at the cost of a training cycle on your data. We do this on-site or air-gapped when IP requires it.'
  },
  {
    name: 'Structured and unstructured pruning',
    body: 'Magnitude pruning, movement pruning, attention-head pruning. Structured pruning preserves the dense kernel path; unstructured needs sparse kernels to realise speedup. We choose per target hardware.'
  },
  {
    name: 'Knowledge distillation',
    body: 'Teacher–student pipelines on your training data. Particularly effective for narrow domain models where the student can be 10–20× smaller without measurable accuracy loss on the slices that matter.'
  },
  {
    name: 'Speculative decoding + KV-cache quantisation',
    body: 'For LLM serving: a small draft model proposes tokens, the larger model verifies. KV cache compressed to INT8 reclaims memory for longer context windows. FlashAttention-3 integration removes attention as the bottleneck.'
  },
  {
    name: 'Custom CUDA / Triton kernels',
    body: 'When the stack ships nothing fast enough. We have published kernel work for fused attention variants and quantised matmul; engagement engineers carry the contribution history publicly on GitHub.'
  }
];

const faqItems: FAQItem[] = [
  {
    question: 'My engineers will tank accuracy if they quantise to INT8. Will you?',
    answer:
      'We will measure first. Every engagement opens with a Pareto contract: accuracy floor, p50/p95/p99 latency ceilings, memory budget. We then run PTQ on your evaluation harness — your dataset, not COCO or MMLU — and report the actual accuracy delta. If PTQ misses the floor we move to QAT, distillation, or partial-quant strategies. Median accuracy delta across our published case studies is −0.4 percentage points on the client dataset.'
  },
  {
    question: 'Our model is proprietary and our training data has IP. How do you protect it?',
    answer:
      'Three engagement modes. Standard: NDA, customer-cloud notebooks, data stays in the customer account. On-site: lead engineer works on-prem with the customer team. Air-gapped: lead engineer flies on-site, all training and benchmarking on customer hardware, no data leaves the customer estate. We have shipped optimisation engagements at UAE defence integrators on the air-gapped model.'
  },
  {
    question: 'Why not just buy AWS SageMaker Neo or Azure ML model optimisation?',
    answer:
      'Hyperscaler optimisation services optimise for their hardware — Inferentia, Azure VMs, TPUs — and quietly fail on Jetson, Snapdragon, Hailo, or air-gapped on-prem. They are productised flows with limited tunability. We are hardware-agnostic and ship the optimised model as portable artefacts (ONNX, TensorRT plan, Core ML, LiteRT) the customer owns. We also engage on the engineering problem itself: PR-ready code, kernel work where needed, and the benchmark harness as a product.'
  },
  {
    question: 'Why pay you instead of letting our team try TensorRT for two sprints?',
    answer:
      'We bring engineers who have hit kernel-level depth (custom CUDA, FlashAttention integration, Triton kernels), who maintain the benchmark harness as a product, and who have published in this domain. The engagement transfers that knowledge: at handover your team holds the optimised model, the benchmark harness, and the runbook to repeat the cycle. If your team is genuinely already at this depth, we will tell you so on the technical review and pass on the engagement.'
  },
  {
    question: 'Who owns the optimised model?',
    answer:
      'You do, including the optimised weights, the TensorRT or Core ML plan, the benchmark harness, and any custom kernel code we wrote. We retain the right to publish generic methodology and to keep our public optimisation showcase up to date, but never anything customer-identifying.'
  },
  {
    question: 'What does the reproducible benchmark harness deliver?',
    answer:
      'A repo with the model artefact, the optimised artefact, the dataset slice (or a synthetic stand-in if your data is sensitive), a CI workflow that runs the benchmark on the target hardware, and a JSON report format. Your CI can re-run the benchmark on every model change. Three public examples live on our GitHub: a YOLOv8 model on Jetson Orin NX, a 7B-parameter LLM on a single L40S, and a mobile CV model on Snapdragon 8 Gen 3.'
  },
  {
    question: 'How do you handle ongoing maintenance after the engagement?',
    answer:
      'Retained engineering is available at a defined day-rate. Most clients move to a quarterly cadence: we re-run the benchmark harness on the latest model checkpoint, re-tune kernels for new hardware (a new Jetson generation, a new LLM serving framework version), and update the deliverable. The customer team owns the day-to-day; we own the deeper tuning cycles.'
  }
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Model Optimisation',
  name: 'AI Model Optimisation — Quantisation, Distillation, Edge Inference',
  provider: { '@type': 'Organization', name: 'Brocode Solutions', url: 'https://www.brocode.ae' },
  areaServed: ['Abu Dhabi', 'Dubai', 'Sharjah', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain', 'United Kingdom', 'Singapore'],
  description:
    'Production-grade model optimisation across Jetson, Snapdragon, Apple, Hailo, GPU and Inferentia. PTQ, QAT, distillation, pruning, speculative decoding, kernel-level work. Reproducible benchmark harness on GitHub.',
  url: 'https://www.brocode.ae/services/ai-model-optimization'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer }
  }))
};

export default function AIModelOptimizationPage() {
  return (
    <>
      <Script id="ld-service-opt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="ld-faq-opt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO — benchmark terminal + Jetson + Pareto */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/services/ai-model-optimization.jpg"
            alt="Engineer benchmarking AI model inference latency on a Jetson development board with a Pareto curve displayed"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/90 to-ink-900" />
        </div>
        <div className="container-site relative z-10 pt-22 pb-20 md:pt-28 md:pb-24">
          <Breadcrumbs
            variant="dark"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AI Model Optimisation' }
            ]}
          />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4 text-white/70">Inference engineering · edge · low-latency cloud</p>
              <h1 className="text-balance text-display-xl">
                Production-grade model optimisation. 4.2× faster on your target hardware.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/75">
                Quantisation, pruning, distillation, kernel-level acceleration — hitting your latency, memory and
                accuracy budget at the same time. The optimised model is handed back as code you own and can rebuild.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="#contact-form" variant="primary" size="lg" event="quote_open">
                  Book a 45-minute technical review
                </MagneticButton>
                <a
                  href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_hero"
                  data-page={SLUG}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1faa53]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d="M12.04 2.5C6.84 2.5 2.62 6.72 2.62 11.92c0 1.65.44 3.27 1.27 4.69L2.5 21.5l5.06-1.33c1.37.75 2.92 1.15 4.48 1.15 5.2 0 9.42-4.22 9.42-9.42S17.24 2.5 12.04 2.5Z" />
                  </svg>
                  Message principal ML engineer
                </a>
              </div>
            </div>

            {/* Benchmark terminal + Jetson + Pareto */}
            <div className="lg:col-span-6 space-y-3">
              {/* Terminal */}
              <div className="rounded-2xl border border-white/10 bg-black/60 p-5 font-mono text-xs text-emerald-300">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 text-white/40">brocode-bench@jetson-orin-nx</span>
                </div>
                <pre className="whitespace-pre text-[11px] leading-relaxed">
{`{
  "baseline_ms":     84.2,
  "optimised_ms":    18.9,
  "accuracy_baseline": 0.683,
  "accuracy_optimised": 0.677,
  "size_mb_before":  312,
  "size_mb_after":   41,
  "hardware":        "Jetson Orin NX 16GB",
  "stack":           "TensorRT 10 / INT8 PTQ"
}`}
                </pre>
              </div>

              {/* Pareto chart */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Latency–accuracy Pareto</p>
                  <p className="font-mono text-[10px] text-white/40">your data, your hardware</p>
                </div>
                <svg viewBox="0 0 240 110" className="mt-2 h-28 w-full" aria-hidden>
                  <defs>
                    <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#22c55e" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <line x1="20" y1="95" x2="230" y2="95" stroke="rgba(255,255,255,0.15)" />
                  <line x1="20" y1="10" x2="20" y2="95" stroke="rgba(255,255,255,0.15)" />
                  <path
                    d="M30 18 Q60 24 95 38 T180 78 T220 92"
                    stroke="url(#curveGrad)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="200" cy="30" r="4" fill="#f87171" />
                  <text x="208" y="28" fontSize="8" fill="rgba(255,255,255,0.7)">
                    baseline · 84 ms
                  </text>
                  <circle cx="60" cy="55" r="4" fill="#22c55e" />
                  <text x="64" y="50" fontSize="8" fill="rgba(255,255,255,0.85)">
                    optimised · 19 ms
                  </text>
                  <text x="22" y="105" fontSize="7" fill="rgba(255,255,255,0.4)">
                    latency →
                  </text>
                  <text x="6" y="20" fontSize="7" fill="rgba(255,255,255,0.4)">
                    accuracy
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — headline benchmarks */}
      <section className="bg-white py-12">
        <div className="container-site">
          <ProofBand
            items={[
              { value: '4.2×', label: 'Median latency reduction (11 cases)' },
              { value: '−0.4 pp', label: 'Median accuracy delta on client data' },
              { value: '78%', label: 'Median model size reduction' },
              { value: '11', label: 'Public benchmark cases on GitHub' }
            ]}
          />
        </div>
      </section>

      {/* THREE PROBLEMS */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Three optimisation problems we solve"
            title="Edge. Mobile. Low-latency cloud."
            description="The model works in Colab. It does not work on the Jetson, on the phone, or under a 50 ms SLA. Every internal attempt to just try TensorRT or just try INT8 has crashed, dropped accuracy by six points, or saved twelve percent when seventy was needed. We have shipped against all three failure modes."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Edge / embedded</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">Drones, robotics, plant-floor vision.</h3>
                <p className="mt-3 text-ink-700">
                  YOLOv8 on Jetson Orin NX. Latency 84 ms → 19 ms. mAP held within 0.6 points. Real silicon, not
                  simulator. The benchmark harness is on GitHub.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Mobile / on-device</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">Fintech super-apps, insurance claims apps.</h3>
                <p className="mt-3 text-ink-700">
                  Mobile CV model on Snapdragon 8 Gen 3. 312 MB → 41 MB. On-device latency 38 ms. Shipping in production
                  iOS and Android. Core ML and LiteRT artefacts handed back to the customer.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Low-latency cloud</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">Fraud scoring, ASR, LLM serving at scale.</h3>
                <p className="mt-3 text-ink-700">
                  7B-parameter LLM on a single L40S. TTFT 480 ms → 110 ms. Tokens-per-second 3.4×. Speculative decoding,
                  paged attention, KV-cache quantisation. vLLM + custom kernels.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TOOLCHAIN */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="The optimisation toolchain"
            title="Eleven tools. When we use each one."
            description="Pinned versions, production-tested. No vendor-loyalty bias — we use TensorRT when NVIDIA is the target, AIMET when Snapdragon is the target, and Core ML when iOS is the target. The right tool for the silicon."
          />
          <BentoGrid className="mt-12">
            {toolchain.map((t, i) => (
              <BentoCell key={t.tool} span="md" variant={i % 3 === 0 ? 'dark' : i % 3 === 1 ? 'light' : 'glass'}>
                <h3 className={`font-mono text-sm font-semibold ${i % 3 === 0 ? 'text-white' : 'text-ink-900'}`}>
                  {t.tool}
                </h3>
                <p className={`mt-3 text-sm ${i % 3 === 0 ? 'text-white/70' : 'text-ink-600'}`}>{t.usage}</p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Techniques in plain engineer-speak"
            title="No marketing. Written like an engineering README."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {techniques.map((t) => (
              <Reveal key={t.name}>
                <div className="rounded-2xl border border-ink-100 bg-white p-7">
                  <h3 className="font-mono text-sm font-semibold text-brand">{t.name}</h3>
                  <p className="mt-3 text-ink-700">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES — three objections answered */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Objections answered with evidence"
            title="Three things every ML lead asks. Three production references."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Engineers can do it themselves</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  Anonymised UAE defence integrator: 30 FPS hard deadline.
                </h3>
                <p className="mt-3 text-ink-700">
                  Real-time vision pipeline on Jetson AGX hitting 30 FPS at full resolution. Custom Triton kernels for
                  fused attention. The customer engineering team had spent eight weeks on TensorRT and was at 22 FPS;
                  the engagement closed at 31.4 FPS in four weeks.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Accuracy will tank</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">
                  Anonymised GCC super-app: on-device document OCR.
                </h3>
                <p className="mt-3 text-ink-700">
                  Model size under 25 MB shipping in production iOS and Android. Accuracy on the customer evaluation set
                  unchanged within 0.3 percentage points. PTQ with selective FP16 layers for the attention head; QAT
                  was not needed.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">Data has IP</p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">Air-gapped engagement option.</h3>
                <p className="mt-3 text-ink-700">
                  Lead engineer flies on-site. All training and benchmarking on the customer hardware. No data egress.
                  Used on three defence-integrator and one regulated-bank engagement in the last 18 months.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HARDWARE LAB */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The hardware lab"
                title="Real silicon. Not simulators."
                description="Benchmarks are run on the same boards your team will ship on. We are honest about what we do not yet have: ask us about a specific board and we will tell you whether it is in-house, on the procurement list, or on loan."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  'Jetson Orin Nano',
                  'Jetson Orin NX',
                  'Jetson AGX Orin',
                  'Hailo-8',
                  'Coral Edge TPU',
                  'Snapdragon X dev kit',
                  'NVIDIA A100',
                  'NVIDIA H100',
                  'NVIDIA L40S',
                  'AWS Inferentia-2',
                  'Apple M-series',
                  'Intel Meteor Lake CPU'
                ].map((h) => (
                  <li
                    key={h}
                    className="rounded-xl border border-ink-100 bg-white px-4 py-3 font-mono text-xs text-ink-900"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we compare"
            title="Hyperscaler optimisation services, in-house engineers, research labs."
            description="Hyperscaler services optimise for their hardware. In-house sprints reach a depth ceiling. Research labs publish but do not ship. We are hardware-agnostic, kernel-level capable, and contractually accountable for a published Pareto."
          />
          <div className="mt-10">
            <CompareTable
              competitors={['AWS SageMaker Neo', 'Azure ML optimisation', 'GCP Vertex', 'In-house TensorRT sprint']}
              rows={compareRows}
            />
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="bg-surface-muted py-20">
        <div className="container-site">
          <LeadMagnetGate
            pageSlug={SLUG}
            title="The Edge & Inference Optimisation Playbook"
            description="Thirty-eight pages. Eleven production case studies. The decision tree. The reproducible benchmark harness on GitHub for YOLOv8 / Jetson, Llama-3-8B / L40S, and a mobile CV model on Android and iOS. Median latency reduction 4.2×, median accuracy delta −0.4 percentage points."
            filePath="/downloads/model-optimisation-playbook.pdf"
            ctaLabel="Email me the playbook and benchmark"
            contents={[
              'Pareto frontier methodology — accuracy floor, latency ceiling, memory budget',
              'Quantisation: INT8 / INT4 / FP4, when to use which',
              'Distillation playbook with teacher–student pipelines',
              'Hardware targets: Jetson, Snapdragon, Apple, Intel, GPU, Inferentia',
              'Three GitHub reproducer repos with CI workflows',
              'When NOT to optimise — the cases we turn away'
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Frequently asked"
            title="What ML leads actually want to know."
          />
          <div className="mt-10 max-w-3xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="contact-form" className="bg-surface-muted py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Talk to the principal ML engineer</p>
              <h2 className="text-display-md text-ink-900">
                A 45-minute technical review. No sales people on the call.
              </h2>
              <p className="mt-4 text-ink-600">
                Bring the model, the target hardware, the bottleneck, and the SLA. We will tell you what is achievable
                with PTQ alone, what needs QAT or distillation, and what is genuinely impossible without a redesign. If
                your team is already at the level needed, we will say so on the call and pass on the engagement.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
                <QuoteForm config={formConfig} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            label: 'MLOps & AI Infrastructure',
            href: '/services/mlops-ai-infrastructure',
            description: 'The optimised model still needs serving, monitoring, retraining.'
          },
          {
            label: 'Computer Vision',
            href: '/services/computer-vision',
            description: 'Most edge / embedded optimisation work originates here.'
          },
          {
            label: 'Generative AI Development',
            href: '/services/generative-ai-development',
            description: 'LLM inference optimisation cross-feeds the GenAI page.'
          },
          {
            label: 'Self-Hosted LLM Infrastructure',
            href: '/services/self-hosted-llm-infrastructure',
            description: 'Clients who care about inference cost and data sensitivity also self-host.'
          },
          {
            label: 'Manufacturing',
            href: '/industries/manufacturing',
            description: 'The dominant industry for edge inference and defect detection.'
          }
        ]}
      />

      <StickyMobileBar
        whatsappMessage={WHATSAPP_MESSAGE}
        primaryLabel="Book technical review"
        primaryHref="#contact-form"
      />
    </>
  );
}
