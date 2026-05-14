# Conversion Brief — AI Model Optimisation (Compression, Quantisation, Edge & Low-Latency Inference)

> Conversion brief for `/services/ai-model-optimization`. The buyer here is technical, sceptical, and reading the page to decide whether Brocode actually understands what they do all day. Marketing language fails this audience instantly.

---

## 1. Page Slug & URL
`/services/ai-model-optimization`

## 2. Primary Audience Persona
ML/AI engineering lead, principal ML engineer, or head of applied AI at an organisation shipping models into constrained environments. Three sub-archetypes:
- **Edge/embedded** — robotics, drones, autonomous inspection (ADNOC, Saudi Aramco, EDGE Group, Strata Manufacturing, defence integrators), industrial vision on factory floors.
- **Mobile** — fintech apps, super-apps (Careem, Tabby, Tamara), insurance claims apps doing on-device document or damage analysis.
- **Low-latency cloud** — real-time bidding, fraud scoring at point-of-sale, voice/ASR pipelines under 50 ms SLA, GenAI inference at scale where token-cost or TTFT is the bottleneck.

They have 3–25 engineers under them. They report to a CTO, VP Engineering, or Chief AI Officer. They've already built or fine-tuned models that work in the lab but are too slow, too big, or too expensive in production. They are technically credible enough to read PyTorch source and unhappy enough about latency to spend money.

## 3. Visitor Intent at Arrival
The visitor has just searched for a specialist who can compress and accelerate their existing models — they are not shopping for "AI consulting." They want to know: can you take my 7B model and make it run on a Jetson Orin, can you quantise my YOLO model to INT8 without losing the recall, can you cut my LLM inference cost by 60 % on the same GPUs. **Decision stage.** They are evaluating Brocode against a hyperscaler optimisation service, against their own engineers trying TensorRT, and sometimes against a research lab.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"model optimisation"` and `"model quantisation services"`
- **Ad group:** `AI Engineering – Model Optimisation & Edge Inference – GCC`

## 5. Secondary Keyword Cluster
1. llm inference optimisation uae
2. tensorrt consultancy gcc
3. yolo quantisation int8 edge
4. on-device ai mobile inference
5. model distillation services middle east
6. jetson orin deployment consultancy
7. qualcomm aimet edge ai
8. vllm tgi inference cost reduction

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (EDGE Group, ADNOC robotics, G42 / Inception product teams, Presight), Dubai (Careem, Tabby, e& X, Property Finder, Dubai Police / RTA computer-vision programmes)
- **Secondary:** KSA (NEOM, Aramco Digital, SDAIA spin-outs, Tonomus, Tamara), Qatar (Iberdrola/Qatar Energy automation), Israel-adjacent edge buyers in GCC, Bahrain
- **Tertiary:** UK, Singapore — international ML-product teams seeking GCC delivery capacity; Egypt and Pakistan for cost-competitive engineering capacity routed through Brocode

## 7. The One Painful Problem
Their model works in Colab. It does not work on the Jetson, the phone, or under a 50 ms SLA — and every internal attempt to "just try TensorRT" or "just try int8" has either crashed, dropped accuracy by 6 points, or saved 12 % when they needed 70 %.

## 8. The Stakes
- A go-live date is committed — a drone fleet deploying at an Aramco facility, a fraud-scoring upgrade tied to a card-scheme deadline, a mobile-app release on the App Store. Missing the SLA means the feature ships disabled or doesn't ship at all.
- The cloud bill for GenAI inference is growing 15–25 % month-on-month and the CFO has asked for a path back to flat.
- The competitor's mobile app runs the same feature on-device, instantly, while theirs round-trips to a server. Reviewers notice.
- The engineering lead's own credibility is in the room — they promised "we'll optimise it" three sprints ago.

## 9. The Promise (H1 Direction)
Production-grade model optimisation — quantisation, pruning, distillation, kernel-level acceleration — that hits your latency, memory, and accuracy budget at the same time, on your target hardware, with the optimised model handed back as code you own and can rebuild.

## 10. The Unique Mechanism
- **The Brocode Optimisation Toolchain:** **PyTorch 2.x** with `torch.compile` and **TorchAO**, **ONNX Runtime** (including the mobile and web execution providers), **NVIDIA TensorRT 10 + TensorRT-LLM**, **NVIDIA Triton Inference Server**, **vLLM** and **TGI** (Text Generation Inference) for LLM serving, **OpenVINO** for Intel edge, **Qualcomm AIMET + SNPE** for Snapdragon and automotive, **Apple Core ML + coremltools** for iOS, **Google AI Edge / LiteRT (TensorFlow Lite)** + **MediaPipe** for Android, **Hailo SDK** for Hailo-8/15 NPUs, and **AWS Neuron SDK** for Inferentia/Trainium.
- **Optimisation techniques in-house:** post-training quantisation (PTQ) at INT8 / INT4 / FP8, quantisation-aware training (QAT), structured and unstructured pruning, knowledge distillation (teacher–student pipelines on the client's own training data), LoRA/QLoRA fine-tuning, speculative decoding, KV-cache quantisation, FlashAttention-3 integration, custom CUDA / Triton kernels where the stack ships nothing fast enough.
- **The Brocode Latency-Accuracy Pareto:** every engagement starts with an explicit Pareto contract — accuracy floor, p50/p95/p99 latency ceilings, memory ceiling, power budget if relevant. The deliverable is the model on the Pareto frontier, not a vague "it's faster."
- **The Reproducible Benchmark Harness:** every optimisation result ships with a benchmark harness the client can re-run on their CI, so the result is verifiable forever, not a one-off claim.
- **Hardware lab:** Brocode maintains in-house Jetson Orin Nano / NX / AGX, Hailo-8, Coral, Snapdragon X reference, A100, H100, L40S, and Inferentia-2 test rigs. Benchmarks are run on real silicon, not simulators.

## 11. Top 3 Objections
- **O1:** "We have engineers. Why can't they just run TensorRT themselves — what specifically will you do that we won't figure out in two sprints?"
- **O2:** "If you quantise to INT8 my accuracy will tank. Prove you can hold accuracy on **my** dataset, not on COCO or MMLU."
- **O3:** "Our model is proprietary and our training data has IP in it — we can't send it to a cloud notebook or a third-party platform."

## 12. Proof Strategy
- Public, downloadable **Optimisation Showcase**: three published before/after case studies with the benchmark harness on GitHub — a YOLOv8 model on Jetson Orin NX (latency cut from 84 ms to 19 ms, mAP held within 0.6 points), a 7B-parameter LLM served on a single L40S (TTFT from 480 ms to 110 ms, tokens/sec 3.4x), and a mobile-CV model on Snapdragon 8 Gen 3 (model size 312 MB → 41 MB, on-device latency 38 ms).
- Anonymised UAE defence-integrator reference: real-time vision pipeline on Jetson AGX hitting a 30 FPS hard deadline at full resolution.
- Anonymised GCC super-app reference: on-device document OCR shipping in the production iOS/Android app, model size under 25 MB.
- NVIDIA Inception Premier badge, NVIDIA Service Delivery Partner status, Qualcomm AI Hub partnership, AWS Advanced Tier with Inferentia specialism, Hugging Face Enterprise Hub partnership.
- Named engineers on the page with public PyTorch / vLLM / ONNX Runtime contribution histories (GitHub linked).
- Air-gapped engagement option (lead engineer flies on-site, all training and benchmarking on the client's own hardware, no data egress).

## 13. The Lead Magnet
**"The Edge & Inference Optimisation Playbook: 11 production case studies, the decision tree, and the benchmark harness."** — 38-page technical PDF + a public GitHub repository with the reproducible benchmark harness for YOLOv8/Jetson, Llama-3-8B/L40S, and a mobile CV model on Android/iOS. Headline figure: across the 11 case studies, the median latency reduction is **4.2x** and the median accuracy delta on the client's own dataset is **−0.4 percentage points**.

## 14. Primary CTA Wording
**"Book a 45-minute technical review with our Principal ML Engineer"** — secondary mid-page CTA: **"Download the Optimisation Playbook + Benchmark Harness"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I lead ML at [organisation]. We're trying to hit [latency / memory / cost] targets for a [vision / LLM / ASR / other] model on [target hardware]. Could we book a 45-minute technical review with your principal ML engineer?

## 16. Quote Form Fields
1. **Model type** (multi-select: computer vision / LLM / ASR / TTS / recommender / tabular / multimodal / other)
2. **Target hardware** (multi-select: NVIDIA Jetson / NVIDIA datacentre GPU / AWS Inferentia / Qualcomm Snapdragon / Apple Silicon / Hailo / Coral / Intel CPU / browser/WASM / other)
3. **Current bottleneck** (single select: latency / model size / memory / accuracy after quantisation / inference cost / power)
4. **Hard SLA you must hit** (free text — e.g., "p95 < 50 ms on Jetson Orin NX at 1080p")
5. **Data sensitivity** (single select: shareable under NDA / on-site only / air-gapped / fully open)
6. **Mandated production date** (date picker)

## 17. Hero Media Direction
A precise, technical hero. **Left:** a live-looking benchmark terminal panel — monospaced font, calm dark background, showing a real-looking JSON output: `{"baseline_ms": 84.2, "optimised_ms": 18.9, "accuracy_baseline": 0.683, "accuracy_optimised": 0.677, "size_mb_before": 312, "size_mb_after": 41}`. The numbers tick up subtly as if running a benchmark. **Right:** a small, photographed Jetson Orin NX board on a clean white surface, with a thin gold line drawing the data flow into it. Below, a Pareto chart — accuracy on Y, latency on X — with a dot for "baseline" at top-right and a dot for "optimised" near the elbow, connected by a curve. Calm navy + sand-gold + one accent of NVIDIA green. No glowing-brain imagery. No abstract neural mesh. Looks like a paper figure, not a marketing render.

## 18. Section-by-Section Outline
1. **Hero** — benchmark terminal + Jetson board + Pareto chart.
2. **The three optimisation problems we solve** — three-tile section: edge/embedded, mobile/on-device, low-latency cloud (inc. LLM serving). One real example metric on each tile.
3. **The optimisation toolchain** — a grid of the actual tools (TensorRT, ONNX Runtime, vLLM, TGI, AIMET, OpenVINO, Core ML, LiteRT, Hailo SDK, Neuron) with one paragraph of when Brocode uses each.
4. **Techniques in plain engineer-speak** — short, accurate sections on PTQ, QAT, pruning, distillation, speculative decoding, KV-cache quantisation, custom kernels. No marketing — written like an engineering README.
5. **The Latency-Accuracy Pareto contract** — explainer with a real Pareto curve from a recent engagement.
6. **Three public case studies with benchmark harnesses on GitHub** — the YOLOv8/Jetson, Llama-3-8B/L40S, and mobile-CV cases. Each links to its repo.
7. **Anonymised production references** — defence integrator + super-app, each with a single hard number.
8. **Hardware lab** — photographed bench with the rigs we maintain (Jetson family, Hailo, Snapdragon dev kits, L40S, Inferentia). Honesty about what we don't yet have.
9. **Engagement models** — fixed-scope optimisation sprint (4 weeks), retained engineering, air-gapped on-site engagement.
10. **FAQ** — accuracy guarantees, IP handling, who owns the optimised model, retraining, ongoing maintenance.
11. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/services/mlops-ai-infrastructure` — the natural follow-on; the optimised model still needs serving, monitoring, retraining. Link from section 4 and the related band.
2. `/services/computer-vision` — most edge/embedded optimisation work originates from a vision use case. Link from the edge tile.
3. `/services/generative-ai-development` — LLM inference optimisation cross-feeds the LLM service page. Link from the low-latency cloud tile.
4. `/services/self-hosted-llm-infrastructure` — clients who care about inference cost and data sensitivity also self-host. Link from the air-gapped engagement section.
5. `/industries/manufacturing` — the dominant industry for edge inference. Link from the defence-integrator case.

## 20. Differentiation Angle vs Competitors
- **vs hyperscaler optimisation services (AWS SageMaker Neo, Azure ML, GCP Vertex)** — those services optimise for **their** hardware (Inferentia, Azure VMs, TPUs) and quietly fail on Jetson, Snapdragon, Hailo, or air-gapped on-prem. Brocode is hardware-agnostic and ships the optimised model as portable artefacts the client owns. Brocode also engages on the engineering problem itself; hyperscaler services are productised flows with limited tunability.
- **vs your own engineers trying TensorRT in a sprint** — Brocode brings engineers who have published in this domain, who maintain the benchmark harness as a product, and who have hit the kernel-level depth (custom CUDA, FlashAttention integration, Triton kernels) that one in-house sprint cannot reach. The engagement transfers that knowledge by the end.
- **vs academic / research labs (MBZUAI, KAUST, KFUPM)** — research labs publish; they don't ship. Brocode delivers under a production SLA with a contract and a reproducible benchmark, not a paper.
- **vs Big-4 / SI generalists** — generalist consultancies don't have a hardware lab and don't have engineers with PyTorch/ONNX Runtime/vLLM contribution history. Brocode does.

---

## Production notes
- The headline median figures (4.2x latency, −0.4 pp accuracy) require sign-off from the principal ML engineer before publish; they must reflect the current Optimisation Showcase repo.
- GitHub benchmark repos must be kept green; broken CI on a public benchmark would discredit the page faster than any competitor.
- Hardware lab photo must be a real photograph of the actual rigs, not a stock render.
- Named engineer contributions: confirm each engineer's GitHub profile is up-to-date and the linked PRs are still public.
