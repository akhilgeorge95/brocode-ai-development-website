# Conversion Brief — AI Integration Services (Embedding AI in Legacy Estates)

---

## 1. Page Slug & URL
`/services/ai-integration-services`

## 2. Primary Audience Persona
Head of Enterprise Architecture, Chief Enterprise Architect, Head of Integration, or IT Director (Applications) at a UAE or KSA enterprise — typically a bank, insurer, telco, energy major, large retailer, logistics / aviation operator, or a federal entity with a heavy legacy footprint. 2,000–30,000 employees. The estate is the give-away: **SAP ECC** (or a mid-stage S/4HANA migration), **Oracle EBS R12** or **Oracle Fusion**, an **AS/400 / IBM i** that nobody wants to touch, a **mainframe** running COBOL batch overnight, **Murex / Calypso / Temenos / Finacle** in banking, **SAP IS-U** in utilities, plus the inevitable layer of **MuleSoft / Boomi / WebMethods / Apigee** trying to hold it together. The mandate: embed AI (extraction, scoring, summarisation, copilots, intelligent routing) **inside** the existing transactional flows without ripping out the systems of record.

## 3. Visitor Intent at Arrival
The visitor has just searched for an AI integration partner who actually understands enterprise application landscapes — not a pure data-science shop, not a pure systems integrator. They are in **evaluation** stage. They have already pushed back on the SAP AI add-on quote and on the Oracle AI feature pack because both lock them to the vendor's roadmap and to the vendor's pricing. They have probably tried a proof-of-concept with a Big-4 partner that stalled at the production-integration boundary. They want to see real reference architectures showing how AI sits **alongside** SAP / Oracle / mainframe, not "inside" them, and they want to see how Brocode handles **idoc, BAPI, RFC, OData, DRM, MQ, JMS, SOAP, REST, EDI** as first-class integration surfaces.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"ai integration sap oracle"`
- **Ad group:** `AI Integration – Legacy Enterprise Estates – UAE & KSA`

## 5. Secondary Keyword Cluster
1. embed ai in sap ecc s4hana
2. oracle ebs ai integration uae
3. mainframe ai augmentation banking
4. ai middleware mulesoft boomi
5. as400 ai modernisation
6. enterprise architecture ai integration gcc
7. murex calypso ai overlay
8. ai event driven kafka integration

## 6. Geographic Targeting
- **Primary:** UAE — Dubai (Emirates Group, du, e&, Majid Al Futtaim, tier-1 banks on Finacle / Flexcube / Temenos), Abu Dhabi (ADNOC, Aldar, FAB, federal entities on SAP)
- **Secondary:** KSA (Aramco, SABIC, Mobily, STC, Al Rajhi, SNB), Qatar (QatarEnergy, QNB), Oman (Omantel, PDO), Kuwait, Bahrain
- **Tertiary:** Egypt, Pakistan, India — regional shared-service centres of GCC enterprises

## 7. The One Painful Problem
Every AI proof-of-concept the team has run has died at the same boundary: the model works on a Jupyter notebook, but **landing it inside the SAP / Oracle / mainframe transactional flow without breaking the system of record, the audit trail, the SOD controls, and the batch window** is a 9-month integration project that no AI vendor on the market has actually scoped or budgeted for.

## 8. The Stakes
- The business sponsors are losing patience. After two failed POC-to-production transitions, they will start procuring vendor-locked AI add-ons (SAP Joule, Oracle Fusion AI, Salesforce Einstein) directly — which permanently fragments the AI estate and concedes architectural authority to the application vendors.
- Every integration that goes wrong at month-end close, at year-end close, at regulatory cut-off, is a CIO-level escalation event. The architect's risk appetite for "let's just put an AI in front of SAP" is correctly low.
- A botched integration that corrupts the audit trail in a regulated entity (bank, insurer, federal) is a regulator-visible event. The downside is asymmetric.
- The S/4HANA migration is already absorbing the integration team's bandwidth for the next 24 months. Without a partner who can take the AI-integration workstream off the architecture team's plate, AI simply does not happen.

## 9. The Promise (H1 Direction)
AI capability embedded in your SAP, Oracle, mainframe, and core-banking flows without touching the system of record — production-grade integration, full lineage, SOD-compliant, deployed alongside (not on top of) the systems you already run.

## 10. The Unique Mechanism
- An **integration-pattern library** Brocode has hardened over 40+ enterprise engagements, catalogued by system of record: **SAP ECC / S/4HANA** (BAPI, RFC, IDoc, OData, SAP BTP, SAP Event Mesh, CDS views), **Oracle EBS / Fusion** (Concurrent Programs, OAF, OIC, Fusion REST), **IBM i / AS/400** (RPG calls via IBM i Access, Db2 for i, MQ), **mainframe z/OS** (CICS via z/OS Connect EE, MQ, batch handoff), **Temenos T24 / Finacle / Flexcube** (T24 IRIS, Finacle FI/EI), **Murex / Calypso** (datamart + event), **Salesforce** (Platform Events, REST).
- A deliberate **"alongside, not inside"** architecture: AI services run on the customer's MLOps platform (Kubernetes), exposed via **Kafka / Solace / IBM MQ / Azure Service Bus** events and a thin **REST / gRPC** API surface, and integrated into the SoR via the customer's existing iPaaS — **MuleSoft Anypoint, Boomi, webMethods, Apigee, SAP Integration Suite, Oracle Integration Cloud, Azure Integration Services**. The SoR is never directly called by a model; calls are mediated through the iPaaS with full lineage.
- A **SOD / control-preserving design**: every AI-mediated transaction follows a documented control pattern — human-in-the-loop for above-threshold, auto-post for under-threshold, with full audit reconstruction at the document / posting / journal level. Maps directly to **SOX, IFRS, CBUAE / SAMA model-risk, ICV / VAT** controls.
- A **zero-mod posture on the SoR**: no ABAP enhancements, no Oracle Form modifications, no mainframe code change. AI lives in the integration plane.
- An **event-first delivery method**: every integration is built event-driven where the SoR can emit events (SAP Event Mesh, Oracle Streams, Kafka Connect against Db2 / Oracle CDC via **Debezium / Qlik Replicate / IBM IIDR**), and reverts to scheduled extract only where the SoR cannot emit.
- A **named senior architect pod**: each engagement is led by a Brocode principal architect with documented SAP / Oracle / mainframe credentials (SAP Certified Application / Technology Associate, Oracle Cloud Infrastructure Architect, IBM Z Modernization specialist), plus an MLOps lead and an integration lead — CVs visible before contract.

## 11. Top 3 Objections
- **O1:** "Touching SAP / Oracle in production needs CAB approval, change windows, and SOD sign-off. Most AI vendors do not understand any of that. Show me your change-management posture."
- **O2:** "We have MuleSoft / Boomi / SAP Integration Suite already. Are you going to insist on a parallel integration plane, or do you respect what we already operate?"
- **O3:** "Our mainframe / AS/400 is the backbone of the bank / utility. The team that runs it is small, senior, and protective. How do you actually integrate without disrupting their batch window?"

## 12. Proof Strategy
- Anonymised UAE tier-1 bank reference: Arabic OCR + extraction model embedded into the Finacle posting flow via Kafka + MuleSoft, 3.4 million account-opening documents per year, zero ABAP / Finacle code change, full audit lineage, CBUAE-reviewed.
- Anonymised regional utility reference: predictive-maintenance model integrated into SAP IS-U work-order creation via SAP Event Mesh + BAPI orchestration, 27 % reduction in unplanned outages.
- Anonymised retail group reference: dynamic-pricing model integrated into SAP S/4HANA + Oracle Retail via Boomi, with full SOX-controlled posting trail.
- Anonymised insurer reference: claims-triage model integrated into a mainframe-based policy-admin system via z/OS Connect EE + MQ, no mainframe code change, 41 % faster first-decision.
- Architecture pattern library available as a downloadable (lead magnet).
- Partner / certification stack: **SAP Partner (Application Development), Oracle Partner, MuleSoft Certified, Boomi Partner, IBM Partner (Z & AS/400 modernisation), Microsoft Solutions Partner (Integration), Confluent Partner, ISO 27001, SOC 2 Type II, NVIDIA Inception**.
- A documented **"zero-mod policy"** on systems of record — published as a credibility marker.

## 13. The Lead Magnet
**"AI Integration Pattern Library: 12 Production Blueprints for SAP, Oracle, Mainframe, and Core Banking"** — a 56-page PDF + downloadable architecture diagrams (Lucidchart / draw.io / Visio) + sample MuleSoft / Boomi / SAP Integration Suite flow definitions. Headline figure: across 40+ enterprise integrations, **zero SoR code modifications**, **median time-to-production 11 weeks** for an AI-integrated transactional flow, and a documented **control-trace pattern** for SOX / IFRS / CBUAE / SAMA reviews.

## 14. Primary CTA Wording
**"Book a 60-minute integration architecture review with our principal enterprise architect"** — secondary mid-page CTA: **"Download the AI integration pattern library"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I lead enterprise architecture at [organisation]. We want to embed AI into our SAP / Oracle / core-banking / mainframe estate without touching the systems of record. Could we book an hour with your principal architect to walk through our landscape?

## 16. Quote Form Fields
1. **Primary systems of record in scope** (multi-select: SAP ECC / S/4HANA / Oracle EBS / Oracle Fusion / IBM i / AS400 / z/OS mainframe / Temenos T24 / Finacle / Flexcube / Murex / Calypso / Salesforce / other)
2. **Existing iPaaS / integration platform** (multi-select: MuleSoft Anypoint / Boomi / webMethods / Apigee / SAP Integration Suite / Oracle Integration Cloud / Azure Integration Services / Kafka / Solace / IBM MQ / none)
3. **AI use-case to integrate** (single select: document extraction / decisioning model / generative summarisation / agent copilot / event-driven routing / predictive maintenance / other)
4. **Change control posture** (single select: full CAB & SOD review required / lightweight CAB / dev-test-prod with quarterly window / continuous deployment)
5. **Target go-live window** (date picker)
6. **Status of any in-flight S/4HANA / Fusion / core-banking migration** (single select: not started / mid-flight / recently completed / not applicable)
7. **Regulator(s) in scope** (multi-select: CBUAE / SAMA / DFSA / FSRA / ADGM FSRA / SOX / IFRS 17 / VAT / ICV / none)

## 17. Hero Media Direction
A wide architectural blueprint hero, drawn in the visual language of an enterprise-architecture wall poster — clean lines, monospace labels, layered swim-lanes. **Top swim-lane:** systems of record (a small SAP box, an Oracle box, a mainframe stack, a Finacle box) — rendered in muted greys. **Middle swim-lane:** the integration plane — Kafka, MuleSoft, MQ — rendered in mid-blue with animated event arrows. **Bottom swim-lane:** the AI services — small boxes labelled "Extraction", "Decisioning", "Summarisation", "Routing" — rendered in NVIDIA-green. A single, prominent dashed line labelled **"Zero modifications to systems of record"** runs across the top swim-lane. The animation: a single transaction packet travels from SAP → Kafka → AI service → back to MuleSoft → back to SAP, with a tiny "audit lineage captured" badge ticking on at each hop. No abstract AI brain. No glassy 3D server racks.

## 18. Section-by-Section Outline
1. **Hero** — the three-swim-lane architecture diagram with the "zero modifications" badge and the audit-lineage animation.
2. **Why AI POCs die at the integration boundary** — four short blocks (change control, SOD, batch window, audit lineage) describing the four failure modes the visitor has personally lived through.
3. **The "alongside, not inside" architecture principle** — a single-page explainer with the canonical reference diagram and a one-line policy statement.
4. **Integration patterns by system of record** — tabs for SAP ECC / S/4HANA, Oracle EBS / Fusion, IBM i / AS400, z/OS mainframe, Temenos / Finacle / Flexcube, Murex / Calypso, Salesforce — each tab with the canonical pattern (BAPI, BAPI-via-OData, IDoc, Event Mesh, MQ, CDC) and a sample integration flow.
5. **iPaaS coexistence** — how Brocode integrates with MuleSoft / Boomi / webMethods / SAP IS / OIC / Azure IS / Kafka — explicit "we plug into yours, we do not replace it" message.
6. **The control-preserving design** — SOD, audit lineage, IFRS / SOX / CBUAE / SAMA mapping — with a sample control-trace exhibit.
7. **Delivery method** — discovery → reference architecture → build → CAB → cutover → hypercare — with named senior architect pod and time-to-production median.
8. **Case studies** — bank (Finacle), utility (SAP IS-U), retail (S/4HANA + Oracle Retail), insurer (mainframe) — each with the zero-mod posture explicit.
9. **The zero-mod policy** — Brocode's published commitment that no SoR code change is made unless the customer's architect explicitly requests it.
10. **FAQ** (FAQ schema) — batch-window safety, CAB process, audit reconstruction, change-of-iPaaS scenarios, S/4HANA migration coexistence.
11. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/services/mlops-ai-infrastructure` — the AI services in the bottom swim-lane all run on an MLOps platform; for customers who do not have one yet, this is the parent build. Linked from section 3 and the architecture caption.
2. `/services/document-intelligence` — the most common first AI integration is Arabic OCR into SAP / Finacle; linked from the bank case study.
3. `/services/intelligent-process-automation` — overlapping audience; some integration-led buyers also want a process-automation overlay. Linked from section 4 (tab on event-driven routing).
4. `/services/data-engineering-for-ai` — when CDC, Debezium, Kafka Connect are the right pattern, the data-engineering page is the deeper read. Linked from section 4.
5. `/industries/banking-financial-services` — dominant industry; linked from the case-study band.

## 20. Differentiation Angle vs Competitors
- **vs SAP Joule / SAP AI Foundation / SAP BTP AI services** — strong inside SAP, vendor-locked outside it; pricing follows SAP's metering; the AI estate fragments the moment a non-SAP model is needed (which is always). Brocode integrates AI **alongside** SAP using SAP-supported interfaces (BAPI, IDoc, OData, Event Mesh, BTP) without forcing the customer onto SAP's AI SKUs.
- **vs Oracle Fusion AI / Oracle Digital Assistant** — same pattern as SAP, plus Oracle's AI roadmap moves slowly relative to open-source. Brocode integrates open-source and best-of-breed models into Oracle's flow without binding the customer to Oracle's AI release cadence.
- **vs Salesforce Einstein / Einstein GPT** — credible inside Salesforce, but cross-system AI (Salesforce + SAP + mainframe in one transactional flow) is what enterprise architects actually need. Brocode owns the cross-system orchestration.
- **vs Big-4 SI work (Accenture, Deloitte, Cognizant, Infosys, TCS, Wipro on SAP / Oracle integration)** — credible on the integration plane, weak on the AI side; engagements typically run long, are junior-heavy, and the AI model itself is often subcontracted. Brocode owns both halves of the build with named senior people.
- **vs pure offshore integrators** — competitive on price, weak on AI depth, weak on regulator-mapped control design, weak on senior-architect bench. Brocode brings on-site senior architects and a regulator-defensible control posture.
- **vs in-house enterprise architecture team** — the in-house EA team usually has the SAP / Oracle / mainframe depth but lacks the MLOps and model-side engineering bandwidth; Brocode embeds and complements rather than replaces. Many of our best engagements are co-led by the customer's chief enterprise architect.

---

## Production notes
- All vendor names (SAP, Oracle, MuleSoft, Boomi, etc.) on the page must be used per their respective trademark guidelines; partner-badge visibility requires programme compliance.
- The downloadable pattern-library artefacts (Lucidchart / draw.io / Visio files) must be reviewed by Brocode security and stripped of any customer-identifying naming.
- The "zero modifications" policy is a marketing commitment that must be cleared with the principal architect — there are documented edge cases (some Murex Datamart integrations) where a minor SoR-side change has been required; the FAQ must address this honestly.
- The S/4HANA migration coexistence FAQ entry should be reviewed quarterly as the SAP roadmap evolves.
