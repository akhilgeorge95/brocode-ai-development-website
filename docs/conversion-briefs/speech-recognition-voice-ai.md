# Conversion Brief — Speech Recognition & Voice AI (Arabic + Khaleeji)

---

## 1. Page Slug & URL
`/services/speech-recognition-voice-ai`

## 2. Primary Audience Persona
Head of Contact Centre Operations, Head of Customer Service, or Director of Call-Centre Transformation at a UAE or KSA telco (du, Etisalat e&, stc, Mobily), a tier-1 bank (Emirates NBD, FAB, ADCB, ENBD, Al Rajhi, SNB), or a federal entity with a high-volume citizen-services hotline (TAMM, MoHRE, Absher). The team typically runs 800–4,000 Arabic-speaking agents across one or two large sites, handles 1.5–8 million calls per month, and operates under a CXO mandate to cut average handle time (AHT) and after-call work (ACW) on Arabic-language calls by double-digit percentages within the current fiscal year. They report into a CCO or COO and they own the QA / speech-analytics line item.

## 3. Visitor Intent at Arrival
The visitor has just searched for an Arabic speech-recognition vendor that actually understands Khaleeji dialect and the constant Arabic-English code-switching their agents and customers do live. They have probably already piloted Nuance, Google Speech-to-Text, or Microsoft Azure Speech and seen word-error-rate (WER) numbers north of 30 % on real call recordings — and they want a partner who can show real Khaleeji benchmarks and a deployment path that works inside their telco / banking voice estate (Genesys, Avaya, Cisco UCCE, NICE). They are mid-**evaluation**: a shortlist of 3–5 vendors is forming, and they want to know whether to put Brocode in front of the CXO sponsor.

## 4. Primary Search Keyword + Ad Group
- **Keyword (exact match):** `[arabic speech recognition contact centre]`
- **Ad group:** `Voice AI – Arabic Khaleeji ASR – Telco & Bank`

## 5. Secondary Keyword Cluster
1. khaleeji dialect speech to text
2. arabic call centre transcription uae
3. arabic english code switching asr
4. nuance arabic alternative gcc
5. contact centre speech analytics ksa
6. arabic voicebot ivr replacement
7. real-time arabic agent assist
8. arabic conversational AI banking

## 6. Geographic Targeting
- **Primary:** UAE — Dubai (du, e&, ENBD, ADCB voice estates), Abu Dhabi (TAMM, ADNOC contact centre, FAB)
- **Secondary:** KSA (stc, Mobily, Al Rajhi, SNB), Qatar (Ooredoo, QNB), Oman (Omantel), Kuwait (Zain, NBK), Bahrain (Batelco)
- **Tertiary:** Egypt, Jordan, Morocco — Arabic-heavy markets with related but distinct dialect families (we cover Khaleeji, Levantine, Egyptian, Maghrebi)

## 7. The One Painful Problem
Their current ASR engine misreads Khaleeji-dialect words and English brand/product names dropped mid-sentence so badly that the speech-analytics dashboard is mistrusted by the operations floor — meaning agents still triage and tag calls manually, AHT stays at 6 min 40 s, and the CXO promise to "go from sample QA to 100 % call coverage" has slipped twice.

## 8. The Stakes
- Missing the AHT target by another quarter triggers a CXO-level review and an RFP re-issue, with reputational cost to the head of operations who championed the existing stack.
- Every 10 seconds of avoidable AHT across a 2-million-call-per-month operation is a seven-figure annual cost line.
- Regulators (CBUAE, SAMA, TRA) are pushing for documented call-recording analytics for conduct and complaints — partial coverage is a compliance exposure, not just an efficiency miss.
- The Arabic-language NPS gap (Arabic callers consistently rate 8–12 points lower than English callers on the same journeys) is now visible on the CEO scorecard.

## 9. The Promise (H1 Direction)
Arabic speech recognition tuned to your callers' dialect and your agents' code-switching — sub-15 % WER on real Khaleeji call recordings, deployed inside your Genesys / Avaya / Cisco estate in under 120 days, with a documented WER benchmark on **your** call recordings before contract signature.

## 10. The Unique Mechanism
- A purpose-built Arabic ASR stack: **NVIDIA NeMo Conformer-Transducer** and **Whisper-large-v3** as base acoustic models, both fine-tuned on a proprietary 14,000-hour Khaleeji + MSA + Egyptian + Levantine corpus (mix of broadcast, agent-customer call recordings under DPA, and synthesised noise-augmented data).
- A code-switching head trained explicitly on Arabic-English mid-sentence transitions common in UAE / KSA banking and telco calls ("صراحة the OTP ما وصل").
- A small **Khaleeji dialect adapter** (LoRA-style) layered on top of the base model — so MSA, GCC, Levantine, and Egyptian variants share one base and swap adapter weights at runtime.
- A real-time streaming decoder running on **NVIDIA Triton** with **Riva-style** chunked attention, hitting <300 ms first-token latency for agent-assist use-cases.
- Native connectors to **Genesys Cloud CX, Genesys Engage, Avaya Aura, Cisco UCCE, NICE CXone, Verint** — both as a real-time AudioHook / SIPREC tap and as a batch post-call processor.
- TDRA-compliant on-premise deployment in a single 6U appliance, with optional GPU bursting to **G42 Cloud** or **stc Cloud** (in-country).
- The "Pre-Contract WER Benchmark": Brocode runs a free 200-call benchmark on the prospect's own recordings (under NDA + DPA) before the SoW is signed.

## 11. Top 3 Objections
- **O1:** "Show me real WER on Khaleeji call audio — not MSA broadcast benchmarks. My own engineers measured Whisper at 38 % WER on our recordings."
- **O2:** "We can't ship call recordings to a US cloud. The audio is residency-classified and the DPA / NDA chain for our customer base is unforgiving. Where exactly does the inference happen?"
- **O3:** "Our voice estate is Genesys Engage on-prem plus an Avaya legacy site. Real-time agent-assist needs sub-500 ms end-to-end. How do you actually tap the media without re-architecting our SBCs?"

## 12. Proof Strategy
- Pre-contract WER benchmark on the prospect's own call recordings (lead magnet, see field 13).
- Anonymised UAE telco reference: 4.2 million Arabic calls per month, WER reduced from 31 % to 11.8 %, AHT down 47 seconds, full Genesys Cloud CX AudioHook integration.
- Anonymised KSA tier-1 bank reference: real-time agent assist live on 1,800 seats, complaint-call AHT down 22 %, Arabic-language NPS up 9 points in 6 months.
- Anonymised federal-entity citizen-hotline reference: 100 % call-coverage QA replacing 4 %-sample QA, conduct-flagging recall up 3.4x.
- Side-by-side WER table vs Nuance Mix.asr (Arabic), Microsoft Azure Speech (ar-AE / ar-SA), Google Cloud Speech-to-Text (ar-XA), AWS Transcribe Arabic, OpenAI Whisper-large-v3 — measured on a shared 50-hour Khaleeji + Egyptian call set (lead magnet).
- ISO 27001, SOC 2 Type II, NVIDIA Inception partner, Genesys AppFoundry partner, G42 Cloud partnership badges.

## 13. The Lead Magnet
**"Khaleeji ASR Benchmark Report 2026: 6 Engines Tested on 50 Hours of UAE & KSA Contact-Centre Audio"** — 28-page PDF + an interactive WER explorer (filter by dialect, channel quality, code-switching rate, agent vs customer turn). Headline figure: **-19.4 percentage-point WER reduction** for the Brocode pipeline vs the best off-the-shelf Arabic engine on Khaleeji customer turns with English code-switching.

## 14. Primary CTA Wording
**"Request a free 200-call Khaleeji WER benchmark on your recordings"** — secondary mid-page CTA: **"Book a 30-minute call with our Arabic Speech lead"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I run contact-centre operations at [organisation] and I want to discuss Arabic / Khaleeji speech recognition for our agents. Our priority is [agent assist / 100 % QA coverage / IVR / voicebot]. Could we book 30 minutes with your speech lead?

## 16. Quote Form Fields
1. **Monthly Arabic-language call volume** (single select: <100K / 100K–500K / 500K–2M / >2M)
2. **Use-case priority** (multi-select: real-time agent assist / post-call analytics / 100 % QA coverage / voicebot / IVR replacement / compliance & conduct flagging)
3. **Dialect mix** (multi-select with sliders: MSA / Khaleeji / Egyptian / Levantine / Maghrebi / English code-switch)
4. **Current voice platform** (single select: Genesys Cloud CX / Genesys Engage / Avaya Aura / Cisco UCCE / NICE CXone / Amazon Connect / other)
5. **Target deployment** (single select: on-premise appliance / sovereign cloud (G42, stc) / hyperscaler in-country region / hybrid)
6. **Current ASR engine being replaced or augmented** (free text — Nuance / Azure / Google / Whisper in-house / none)

## 17. Hero Media Direction
A single-frame "agent desktop" view. **Left two-thirds:** a live transcript pane streaming a real-feeling Arabic-English code-switched customer turn, word-by-word, with the customer's Khaleeji words rendered in a slightly heavier weight than the English brand names. Above each English word a subtle blue underline; above each Khaleeji word a small dialect tag (KHJ). **Right third:** an agent-assist side panel surfacing a suggested next-best-action card in English ("Offer plan upgrade — eligible") and a sentiment ribbon ticking from amber to green. A thin latency badge in the top-right ticks "287 ms" in monospace. Calm midnight-blue + warm sand palette; absolutely no headset / soundwave clichés. The transcript text must be checked by a Khaleeji native speaker before publish.

## 18. Section-by-Section Outline
1. **Hero** — live Arabic-English code-switched transcript with agent-assist panel and the 287 ms latency badge.
2. **Why generic Arabic ASR breaks on Khaleeji calls** — three-card explainer (dialect lexicon, code-switching, telephony channel noise) with one real misrecognition example per card.
3. **The Brocode Arabic speech stack** — architecture diagram (audio tap → NeMo / Whisper base → Khaleeji adapter → Triton streaming → CCaaS connector) with a clickable layer-by-layer WER contribution.
4. **Benchmark vs Nuance / Microsoft / Google / AWS / Whisper** — WER comparison table with the lead-magnet CTA.
5. **Integration with your voice estate** — Genesys / Avaya / Cisco / NICE patterns, each with a one-paragraph reference architecture and a latency budget table.
6. **On-premise / sovereign deployment** — single-rack appliance diagram, TDRA / SAMA / CBUAE readiness checklist, DPA flow for call recordings.
7. **Use-case deep-dives** — agent assist, post-call analytics & 100 % QA, voicebot / IVR, conduct & complaints flagging — each as a tabbed panel with one quantified outcome.
8. **Case studies** — UAE telco, KSA bank, federal citizen hotline — each with AHT / NPS / coverage deltas.
9. **Pre-contract WER benchmark offer** — full-width visual CTA with the qualifying form.
10. **FAQ** (built for FAQ schema) — WER, dialects, latency, recording residency, retraining cadence, integration timelines.
11. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/services/natural-language-processing` — once ASR transcripts exist, the conversation moves to downstream Arabic NLP (intent, entities, conduct flags). Link from section 7 (post-call analytics tab).
2. `/services/conversational-ai-chatbots` — voicebot / IVR replacement is a natural adjacency; link from section 7 (voicebot tab).
3. `/services/mlops-ai-infrastructure` — to cover acoustic-model retraining and dialect-drift monitoring. Linked from the architecture caption in section 3.
4. `/services/self-hosted-llm-infrastructure` — for the sovereign-deployment audience that needs an LLM tier downstream of the transcript. Linked from section 6.
5. `/industries/banking-financial-services` — for the tier-1 bank agent-assist case-study; linked from the case-study band.

## 20. Differentiation Angle vs Competitors
- **vs Nuance Mix.asr / Microsoft Nuance** — Nuance's Arabic was trained largely on MSA broadcast corpora and a thin Levantine sample; its Khaleeji WER on real GCC call audio is consistently in the high-20s. Brocode's Khaleeji adapter and 14,000-hour proprietary corpus give a measurable WER delta on the prospect's own recordings, plus an on-premise appliance vs Nuance's cloud-only Mix.
- **vs Microsoft Azure Speech (ar-AE / ar-SA)** — Azure treats Arabic as a small set of locales with no dedicated dialect adapter; its code-switching breaks at the word boundary. Brocode's code-switching head is trained on UAE / KSA bilingual call turns, and Brocode ships customer-owned appliances vs Azure UAE North's Microsoft-managed keys and multi-tenant inference.
- **vs Google Cloud Speech-to-Text (ar-XA)** — Google is cloud-only with no in-country residency option, treats Arabic as one locale, and has no native CCaaS connector for Genesys Engage on-prem. Brocode ships in-country and integrates natively.
- **vs AWS Transcribe Arabic / Amazon Connect Voice ID** — competitive on MSA, weak on Khaleeji and on real-time agent-assist latency budgets; also cloud-only.
- **vs in-house wav2vec2 / Whisper fine-tune** — the prospect's own engineers can get to ~22 % WER in three months with Whisper-large-v3 fine-tuning, but cannot operationalise it: no Triton serving expertise, no Genesys AudioHook integration, no retraining cadence, no dialect adapter library. Brocode delivers in 120 days what a strong in-house team takes 18 months to ship — and keeps the model fresh.

---

## Production notes
- All WER numbers (11.8 %, -19.4 pp) require confirmation from the lead speech engineer before publish.
- The Khaleeji-Arabic transcript shown in the hero must be reviewed by a Khaleeji native speaker — no fake / garbled glyphs and no offensive sample dialogue.
- The benchmark report must be regenerated every 6 months to track Whisper / NeMo / Azure / Nuance version upgrades.
- The call-recording DPA template must be reviewed by Brocode legal before being attached to the lead-magnet email flow.
