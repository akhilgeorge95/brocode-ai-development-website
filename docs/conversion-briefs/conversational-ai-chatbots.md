# Conversion Brief — Conversational AI & Chatbots (Contact-Centre Deflection)

---

## 1. Page Slug & URL
`/services/conversational-ai-chatbots`

## 2. Primary Audience Persona
Director of Customer Experience or Head of Contact Centre at a UAE/KSA bank (Emirates NBD, ADIB, FAB, ADCB, SNB, Al Rajhi), telco (e&, du, stc, Mobily), retailer (LuLu, Carrefour-MAF, Apparel Group), or government entity (RTA, MoHRE, GDRFA, Absher). Owns a contact-centre P&L with 200–2,500 agents across UAE, KSA, Egypt and the Philippines. Reports to a Chief Customer Officer or COO. The board has handed them a written mandate: deflect **30 % of total contact volume** to digital self-service within the current fiscal year, while raising CSAT, not lowering it. They are personally accountable for the FY-end deflection number and have a quarterly steering committee.

## 3. Visitor Intent at Arrival
The visitor just searched for a conversational-AI vendor that can build a deflection-grade assistant in Arabic, Khaleeji, English and Urdu, handle native voice over Genesys or NICE CXone, and integrate with their core banking / telco BSS / e-commerce stack — without forcing them onto a single CCaaS lock-in. They are mid-**evaluation** stage. They have a Cognigy quote, a Yellow.ai proposal, possibly a Kore.ai trial, and an internal Dialogflow CX or Amazon Lex pilot. They are now looking for a regional specialist with proven Khaleeji handling and a track record of moving the deflection KPI rather than the "we'll set up flows for you" pitch.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"arabic chatbot contact centre uae"`
- **Ad group:** `Conversational AI – Contact Centre Deflection – UAE`

## 5. Secondary Keyword Cluster
1. khaleeji dialect chatbot bank
2. voicebot arabic ivr replacement
3. contact centre deflection AI gcc
4. whatsapp business platform automation uae
5. genesys cloud chatbot integration
6. nice cxone conversational ai
7. telco self service chatbot ksa
8. government bilingual chatbot uae

## 6. Geographic Targeting
- **Primary:** UAE — Dubai (RTA, Emirates NBD, du, MAF), Abu Dhabi (ADIB, FAB, e&, federal entities), Sharjah (Sharjah Islamic Bank, Bee'ah).
- **Secondary:** KSA (Riyadh — Al Rajhi, SNB, stc, Absher; Jeddah — retail and banking), Qatar (QNB, Ooredoo), Kuwait (NBK, Zain), Oman (Bank Muscat, Omantel).
- **Tertiary:** Egypt (CIB, Vodafone Egypt, Telecom Egypt), Pakistan (HBL, UBL, Jazz), Levant (Arab Bank).

## 7. The One Painful Problem
Their existing IVR routes 78 % of callers to a live agent within 40 seconds because the IVR cannot understand Khaleeji speech well enough to self-serve a balance enquiry, a bill-shock complaint, or a missed-delivery query — and the contact-centre cost-per-contact has risen 18 % year-on-year while the board's deflection KPI has gone the wrong way.

## 8. The Stakes
- The CCO has publicly committed to a 30 % deflection number to the board. Missing it eliminates a year-end bonus pool for the whole CX leadership team.
- The contact-centre BPO contract is up for renewal; failure to deflect locks in a higher per-seat rate for another three years.
- Two competitors have publicised their own AI-deflection results in the press; analyst notes are now asking whether this entity is behind.
- The CSAT score has been pressured for two consecutive quarters; any deflection programme that drops CSAT further triggers an executive escalation.

## 9. The Promise (H1 Direction)
A bilingual Arabic-English (and Khaleeji-native) assistant that deflects 30 %+ of contact-centre volume in 90 days — on WhatsApp, in-app, on voice — wired into Genesys / NICE CXone and your core banking or BSS, with a CSAT guarantee built into the SoW.

## 10. The Unique Mechanism
- **Understanding layer:** A Khaleeji-fine-tuned NLU stack — Brocode's own intent classifier on a fine-tuned AraBERT-v2 base + a Whisper-Large-v3 turbo ASR fine-tuned on 1,800 hours of Gulf-dialect call recordings (cleared for use), with an XLM-RoBERTa Khaleeji slot-filler.
- **Generation layer:** A controlled-generation pattern using a fine-tuned Llama 3.3 70B for paraphrase and explanation, with deterministic flow execution for transactional intents — never free-form generation on a money-moving step.
- **Channel coverage:** WhatsApp Business Platform (official BSP partner), Apple Business Chat, RCS via Google's Business Messages, in-app SDKs (iOS / Android / Flutter / React Native), web widget, voice via Genesys Cloud Audiohook and NICE CXone Voice Integration, SMS via Twilio and Unifonic.
- **Backend integration:** Pre-built connectors for Temenos T24, Finacle, ICS BANKS, Oracle FLEXCUBE, SAP S/4HANA, Salesforce Service Cloud, ServiceNow CSM, Magento, Shopify, Ericsson and Huawei BSS, and the UAE PASS / Nafath identity rails.
- **Voice-first stack:** Whisper-Large-v3 turbo + a Brocode Khaleeji acoustic adapter for ASR; ElevenLabs Multilingual v2 and Azure Neural Voice Hala for TTS; barge-in and endpointing tuned for Gulf calling patterns and the slower MENA telco call-setup delay.
- **Containment-grade evals:** A weekly "containment + CSAT" report wired into Looker, with intent-level deflection, escalation reasons and a verbatim sample.
- **The "Deflection SLA":** Brocode contractually commits to a deflection floor (configurable per channel) with a fee-back if the floor is missed for two consecutive months at production volume.

## 11. Top 3 Objections
- **O1:** "Cognigy and Yellow.ai already say they support Arabic. What does 'Khaleeji-native' actually mean in production?"
- **O2:** "Our contact centre runs on Genesys Cloud and NICE CXone in parallel. Any bot must integrate with both — not just one — and not break our existing routing."
- **O3:** "We've been promised deflection before. The numbers always look good in pilot and collapse at production volume. What's different?"

## 12. Proof Strategy
- A "Khaleeji ASR + NLU Containment Benchmark" lead magnet (see field 13) testing six platforms on the same 4,200-utterance Gulf-dialect set.
- Anonymised UAE retail-bank reference: 41 % chat-channel deflection within 5 months, CSAT +3.1 points, AHT on escalated cases down 22 %.
- Anonymised KSA telco reference: voicebot containment on top 12 self-service intents at 58 %, Khaleeji ASR WER 9.4 % vs Azure Speech 19.1 % on a held-out test set.
- Anonymised UAE federal entity reference: bilingual citizen-service assistant on WhatsApp + UAE PASS, 1.8 M monthly conversations, 92 % first-contact resolution on documented intents.
- Partner badges: Meta WhatsApp Business Solution Provider, Genesys AppFoundry partner, NICE Developer Partner, Cognigy alternative reference, Twilio gold partner, Unifonic partner, Microsoft Solutions Partner (AI).
- Public Khaleeji ASR demo on the page (live mic, opt-in).

## 13. The Lead Magnet
**"Khaleeji Voice & Chat Containment Benchmark — 6 Platforms, 4,200 Utterances, 12 Banking and Telco Intents"** — 30-page PDF + a downloadable test-utterance pack + a Looker-embedded interactive dashboard. Headline figures: Brocode's Khaleeji stack hits **WER 9.4 %** vs the next-best 17.8 %, and **intent-accuracy 94.2 %** vs the next-best 81.6 %, on Gulf-dialect banking queries.

## 14. Primary CTA Wording
**"Run your top 20 intents through our Khaleeji ASR — get a benchmark report in 7 days"** — secondary CTA: **"Book a 45-minute deflection-strategy review"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I run [contact-centre / CX] at [organisation]. The board has set us a 30% deflection target this year. Could we schedule a 30-minute call to discuss a Khaleeji voice and chat assistant?

## 16. Quote Form Fields
1. **Channels in scope** (multi-select: WhatsApp / voice IVR / in-app / web / Apple Business Chat / RCS / SMS)
2. **Languages required** (multi-select: MSA / Khaleeji / Egyptian / Levantine / English / Urdu / Tagalog / Hindi / French)
3. **Contact-centre platform** (single select: Genesys Cloud / Genesys PureConnect / NICE CXone / Avaya / Cisco / Five9 / Amazon Connect / homegrown / mixed)
4. **Core system to integrate** (multi-select: Temenos T24 / Finacle / FLEXCUBE / ICS BANKS / SAP / Salesforce / ServiceNow / Magento / Shopify / Ericsson BSS / Huawei BSS / custom)
5. **Current monthly contact volume** (single select: <50K / 50K–250K / 250K–1M / >1M)
6. **Board-set deflection target and deadline** (free text)

## 17. Hero Media Direction
A vertical split-screen. **Left:** a real WhatsApp conversation rendered at high fidelity — a Khaleeji speaker types "وين قسط السيارة الجديد؟" ("where's the new car-loan instalment?"); the assistant replies with a clean, structured response, an "Instalment paid on 12 May — AED 2,840" card, and three quick-reply chips. **Right:** a live audio waveform of a Gulf-dialect voice call routed through the assistant's voicebot — a small transcript ticks up in real time with confidence pills, and a green "containment achieved" indicator lights up at the bottom. Behind both panes, a faint Looker-style dashboard with a single number — `37.4 % deflection this week` — tracks at the top of the frame. Colour grade: WhatsApp greens and a calm Brocode navy. No "headset stock photo", no neural-network swirl.

## 18. Section-by-Section Outline
1. **Hero** — split WhatsApp + voice with a live deflection counter.
2. **The 30 % deflection problem** — why current chatbots fail in Gulf-dialect contact centres, with three production-failure patterns.
3. **The Brocode Khaleeji stack** — ASR + NLU + controlled generation + flow execution; layered diagram.
4. **Channel coverage** — WhatsApp / voice / in-app / web with channel-specific containment patterns.
5. **Backend integration** — pre-built connector grid (Temenos, Finacle, FLEXCUBE, SAP, Salesforce, BSS, UAE PASS, Nafath).
6. **Voice deep-dive** — Genesys Audiohook + NICE CXone integration, Whisper Khaleeji adapter, latency profile.
7. **The Deflection SLA** — what is contractually guaranteed and the fee-back mechanism.
8. **Case studies** — UAE retail bank, KSA telco, UAE federal entity.
9. **Benchmark vs Cognigy / Yellow.ai / Kore.ai / Dialogflow / Lex** — table linking to the lead magnet.
10. **CSAT & containment dashboard preview** — the weekly report stakeholders will actually see.
11. **CTA + form** — top-20-intents benchmark request.
12. **FAQ** — escalation, agent-handoff, voice biometrics, compliance, Khaleeji coverage.

## 19. Internal Linking Strategy
1. `/services/llm-fine-tuning` — for clients who want their own dialect-tuned base. Linked from the understanding-layer section.
2. `/services/ai-agents-agentic-workflows` — the natural extension from "answer" to "act" (raise a service ticket, reschedule a delivery, freeze a card). Linked from the channel-coverage section.
3. `/services/speech-recognition-voice-ai` — for voice-only buyers landing on the page. Linked from the voice deep-dive section.
4. `/industries/banking-financial-services` — primary industry hub. Linked from case studies.
5. `/industries/government-public-sector` — secondary hub for federal citizen-service deployments. Linked from case studies.

## 20. Differentiation Angle vs Competitors
- **vs Cognigy / Yellow.ai / Kore.ai** — emphasise Khaleeji-native acoustic and NLU performance with documented WER deltas (lead magnet), the WhatsApp BSP relationship for sub-second message delivery in MENA, and a region-resident deployment in UAE/KSA hyperscaler regions rather than EU-region tenants.
- **vs Servion / Avaya AI / NICE Enlighten add-ons** — emphasise channel breadth (those are voice-led add-ons inside one CCaaS estate) and the multi-CCaaS support for Genesys + NICE in parallel.
- **vs in-house Dialogflow CX or Amazon Lex** — emphasise the Khaleeji ASR delta over Azure and AWS native speech, the pre-built core-banking connectors, and the Deflection SLA — none of which the DIY path provides without 12–18 months of build.
- **vs offshore body-shop "we'll build flows" vendors** — emphasise the engineering depth on ASR and dialect, named regional references, and the absence of seat-based human-flow-builder dependency.

---

## Production notes
- All deflection / WER / containment numbers (41 %, 9.4 %, 94.2 %) require lead-engineer sign-off before publish.
- The Khaleeji ASR demo on the page requires explicit user consent and a no-retention policy badge.
- Hero WhatsApp render must be reviewed by an Arabic UX writer — no fake or garbled text.
