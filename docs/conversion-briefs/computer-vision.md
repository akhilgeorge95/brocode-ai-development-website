# Conversion Brief — Computer Vision (Industrial QA, Loss Prevention, Facility Security)

---

## 1. Page Slug & URL
`/services/computer-vision`

## 2. Primary Audience Persona
**Primary:** Head of Manufacturing Operations or Plant Director at a UAE/KSA industrial plant — metals, packaging, pharma, food & beverage, or building-materials — 300–3,000 staff, two or three lines, sponsored by the COO. They have a documented scrap/rework rate above 2.4 % and a KPI to bring it under 1 % within the fiscal year. They have already trialled a Cognex VisionPro install on one line and found the rule-based vision unable to learn new defect classes without a vendor visit.
**Secondary persona 1:** Head of Loss Prevention at a regional retailer (Lulu, Carrefour-MAF, Apparel Group) tracking shrink across 80+ stores.
**Secondary persona 2:** Security Director at a UAE federal facility responsible for ANPR, perimeter intrusion, and crowd-flow analytics across multiple sites.

## 3. Visitor Intent at Arrival
The visitor just searched for an industrial computer-vision vendor that can detect defects their existing Cognex/Keyence rig misses — particularly subtle surface defects, mixed-SKU contamination, or assembly-orientation errors — and that can deploy on the line floor without sending images to the cloud. They are mid-**evaluation** stage. They likely have a Cognex In-Sight or Keyence CV-X quote, possibly an AWS Lookout for Vision proof, and want to know whether a specialist can outperform both on their specific defect set and integrate with their existing PLCs and MES.

## 4. Primary Search Keyword + Ad Group
- **Keyword (exact match):** `[industrial computer vision uae]`
- **Ad group:** `Computer Vision – Industrial QA – UAE/KSA`

## 5. Secondary Keyword Cluster
1. defect detection AI manufacturing GCC
2. visual inspection deep learning UAE
3. retail shrink prevention computer vision
4. ANPR system federal facility UAE
5. edge AI inspection appliance middle east
6. surface defect detection neural network
7. PLC integration computer vision
8. assembly verification AI Saudi Arabia

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (ICAD, KIZAD industrial zones, ADNOC supply-chain plants), Dubai (DIC, JAFZA, DIP); KSA — Jubail, Yanbu, Riyadh-2, Sudair.
- **Secondary:** Oman (Sohar, Duqm), Qatar (Mesaieed, Ras Laffan downstream), Bahrain (Bapco Refining downstream packaging), Kuwait (Shuwaikh industrial).
- **Tertiary:** Egypt (SCZONE), Jordan industrial estates — extensions for regional groups headquartered in the UAE.

## 7. The One Painful Problem
Their line produces 1.8 million units a month and the existing rule-based vision system passes ~7 % of defective units that customers later reject — driving a recurring credit-note line on the P&L and a recurring complaint from the commercial director that quality is "still a manual job pretending to be automated".

## 8. The Stakes
- Continued customer rejections from two anchor accounts have already triggered a clause review on a multi-year supply contract.
- The COO's bonus is tied to a 50 % year-on-year reduction in customer-returned units; failure escalates to the board.
- Engineering manpower assigned to re-tune the Cognex rules every time a new SKU is introduced is now blocking two scheduled line conversions.
- For retail loss-prevention: shrink is sitting at 1.6 % of revenue against a board target of 0.9 %, with quarterly audit committee scrutiny.

## 9. The Promise (H1 Direction)
Detect what your rule-based vision can't — including subtle surface defects and new SKU variants — on a 24 V edge appliance that talks to your PLC over PROFINET, deployed in 60 days with a documented detection-rate benchmark on **your** rejected-units library before contract signature.

## 10. The Unique Mechanism
- **Detection stack:** YOLOv9-c for primary defect classification, Segment Anything Model 2 (SAM2) for pixel-accurate defect contour, EfficientAD for unsupervised anomaly detection on rare defect classes, all distilled into a single TensorRT-optimised model.
- **Edge hardware appliance:** NVIDIA Jetson AGX Orin 64 GB or, for higher-throughput lines, an NVIDIA IGX Orin in a fan-less IP54 enclosure. PROFINET / EtherNet/IP / Modbus TCP interfaces to PLCs (Siemens S7, Allen-Bradley ControlLogix, Beckhoff TwinCAT).
- **MES/SCADA integration:** OPC UA bridge to AVEVA, Siemens MindSphere, or Honeywell Forge. Defect events written directly into the quality module of SAP S/4HANA QM or Oracle EBS Quality.
- **For retail loss-prevention:** Re-identification (Re-ID) model on AXIS / Hanwha IP cameras using a fine-tuned OSNet backbone; tied into Tyco Sensormatic EAS and Genetec Security Center event streams.
- **For facility security:** ANPR running on Hailo-8 accelerators in pole-mounted enclosures, integrated with MoI vehicle databases via TDRA-approved sovereign brokers.
- **The Pre-Contract Detection Benchmark:** Brocode runs a free 2,000-image detection benchmark on the prospect's own historical reject library and a control set of golden units before the SoW is signed.

## 11. Top 3 Objections
- **O1:** "Our line runs at 320 parts per minute — your model needs to make a decision in under 40 ms, can it actually do that on an edge box?"
- **O2:** "Every time we add a new SKU, the Cognex integrator wants three days and a change order. How does your system retrain, and who pays for it?"
- **O3:** "We've already paid for Cognex and Keyence sensors. You can't expect us to rip them out — how do you co-exist with the rig we own?"

## 12. Proof Strategy
- Pre-contract detection benchmark report on the prospect's own reject corpus (lead magnet, see field 13).
- Anonymised UAE packaging-plant reference: 12 defect classes, 99.1 % detection rate on the historical reject library, <22 ms inference latency at 320 ppm.
- Anonymised KSA pharma blister-pack reference: contamination detection rate raised from 91.2 % to 99.7 %, FDA-grade audit log.
- Anonymised regional retail reference: shrink reduction from 1.6 % to 0.74 % across 84 stores in 11 months.
- NVIDIA Inception Premier Tier partner, Hailo Authorised Integrator, AWS Advanced Tier, Genetec Technology Partner, ISO 27001, IEC 62443 awareness statement.
- Demonstration video of the edge appliance running on a dummy line at the Brocode Abu Dhabi office, available on request.

## 13. The Lead Magnet
**"The Industrial Vision Benchmark: Cognex VisionPro vs Keyence CV-X vs AWS Lookout for Vision vs a Custom YOLOv9 Stack — 14,000 Images from 6 Defect Categories"** — 28-page PDF + an interactive defect-class explorer. Headline figures: **+12.4 % defect-detection rate**, **3.1 × faster inference**, and **<60-day deployment** for the Brocode custom stack on subtle surface-defect classes that rule-based systems consistently miss.

## 14. Primary CTA Wording
**"Send us 2,000 of your reject images — we'll come back with a detection-rate benchmark"** — secondary CTA mid-page: **"Book a 45-minute line-side walkthrough with our vision lead"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — we run a [packaging/pharma/metals/F&B] line in [city] and our existing vision rig is missing defects. I'd like to send a sample image set for benchmarking. Are you free for a 30-minute call this week?

## 16. Quote Form Fields
1. **Line throughput** (single select: <60 ppm / 60–180 ppm / 180–400 ppm / >400 ppm)
2. **Defect types you need detected** (multi-select: surface scratch/dent / contamination / colour or print variation / assembly orientation / fill level / barcode/label mismatch / other)
3. **Existing vision hardware** (multi-select: Cognex In-Sight / Keyence CV-X / Datalogic / Basler + custom / none — greenfield)
4. **PLC / MES environment** (single select: Siemens S7 + SAP / Rockwell + Oracle / Beckhoff / mixed / unsure)
5. **Site constraints** (multi-select: no cloud allowed / customer-managed keys required / IP54+ enclosure / hazardous area / ATEX)
6. **Target go-live and number of lines** (free text)

## 17. Hero Media Direction
A locked, level shot of a conveyor running at speed, in a clean industrial light grade — desaturated blues with warm sodium highlights. A real piece of stamped sheet metal (or a pharma blister tray, swappable per industry segment) flies past. Overlaid in real-time: a green YOLOv9 bounding box snaps onto a 0.4 mm surface scratch with a confidence pill "98.2 %", and a thin red PROFINET event ticker fires "REJECT → PLC #4, slot 12" in the lower-third. The camera pushes in 15 % over two seconds. No glossy "AI robot" tropes — this looks like a maintenance engineer's CCTV grade, not a marketing render. A second toggle in the hero switches the scene to a retail store interior (Re-ID overlay) and a perimeter-fence ANPR scene for the secondary personas.

## 18. Section-by-Section Outline
1. **Hero** — live defect detection on a conveyor with PLC event ticker.
2. **Where rule-based vision breaks** — three real failure modes (subtle surface defect, novel SKU, lighting drift) with one before/after image per card.
3. **The Brocode detection stack** — architecture (camera → Jetson Orin → YOLOv9 + SAM2 + EfficientAD → PLC) with a layer-by-layer latency budget.
4. **Benchmark vs Cognex / Keyence / AWS Lookout** — defect-class detection-rate table linking to the lead magnet.
5. **Edge appliance specs** — IP rating, MTBF, power draw, certifications, network topology.
6. **Integration patterns** — PROFINET, EtherNet/IP, OPC UA to AVEVA/SAP QM/Oracle Quality with one-paragraph each.
7. **Retraining loop** — how new SKUs and new defect classes are added without a change order, with the "Inspector Loop" annotation tool screenshot.
8. **Case studies** — packaging plant, pharma blister-pack, retail shrink, federal ANPR — each with one quantified outcome.
9. **Pre-contract detection benchmark offer** — full-width visual CTA with the form.
10. **FAQ** (FAQ schema) — latency, retraining, hazardous-area, co-existence with Cognex.
11. **Related capabilities** — five internal links (see field 19).

## 19. Internal Linking Strategy
1. `/services/mlops-ai-infrastructure` — for retraining, drift monitoring, and model registry on the line. Linked from section 7.
2. `/services/ai-agents-agentic-workflows` — for the downstream "defect → root-cause → CAPA" agentic loop with the quality team. Linked from section 6.
3. `/industries/manufacturing` — primary industry hub, linked from the case-study section.
4. `/industries/retail-ecommerce` — for the loss-prevention persona, linked from the secondary case study.
5. `/services/predictive-analytics` — for the supervisor who will ask "can we also predict when a defect spike is about to happen?" Linked from FAQ.

## 20. Differentiation Angle vs Competitors
- **vs Cognex VisionPro / In-Sight** — emphasise that Cognex is rule-based and per-feature licensed. Highlight the +12.4 % detection delta on subtle surface defects (lead magnet), the open retraining loop without a change order, and full co-existence with existing Cognex sensors (we read their output and add a learned layer on top).
- **vs Keyence CV-X** — emphasise edge-deep-learning on Jetson rather than Keyence's closed firmware, and the ability to add new defect classes from operator-labelled images rather than a vendor visit.
- **vs AWS Lookout for Vision / Azure Custom Vision** — emphasise on-premise / edge deployment (Lookout for Vision is cloud-only), sub-40 ms latency at 320 ppm (cloud round-trip cannot meet line takt), and the absence of egress fees on continuous video streams.
- **vs in-house OpenCV + DIY YOLO build** — emphasise a 60-day deployment with the appliance, the Inspector Loop annotation toolchain, and the IEC 62443 / IP54 hardware that a DIY team would otherwise need to source and certify separately.

---

## Production notes
- All numbers (+12.4 %, 99.1 %, 0.74 % shrink) require sign-off from the vision lead before publish.
- Hero conveyor footage to be filmed on-site at a reference client (NDA-cleared) or staged at the Brocode lab. No stock conveyor footage.
- The dummy line demo in Abu Dhabi must be bookable via the page CTA.
