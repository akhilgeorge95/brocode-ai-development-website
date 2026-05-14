# Conversion Brief — Cloud Infrastructure Partners

---

## 1. Page Slug & URL
`/technology/cloud-infrastructure-partners`

## 2. Primary Audience Persona
Head of Cloud Infrastructure, Director of Hosting & Platforms, or Principal Cloud Architect at a UAE federal entity, GCC tier-1 bank, telco, healthcare group, or energy major, 2,000–40,000 employees. Owns the regulator-facing data-residency commitment, holds the budget for landing zones across two or three clouds, and is the named accountable officer on the Central Bank / TDRA / NCA data-residency attestation. Has lived through a previous "lift-and-shift to AWS" project that failed on the sovereignty review and now insists every new AI workload comes with an explicit residency, key-management, and exit-clause story.

## 3. Visitor Intent at Arrival
The visitor just searched for a partner that can deploy AI workloads across hyperscaler UAE regions **and** the sovereign-cloud estate — they need to see, on one page, that we know AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud, Khazna, du Cloud, and Etisalat / e& enterprise data-centre offerings, with the regulator overlay for each. Stage: **mid-evaluation**. They are reading this in parallel with our stack page and our partnership page; they will not progress to a call until the residency story is watertight.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"sovereign cloud ai uae"`
- **Ad group:** `Infrastructure – Sovereign & Hybrid Cloud – UAE`

## 5. Secondary Keyword Cluster
1. g42 cloud ai workloads
2. azure uae north data residency
3. aws middle east uae region ml
4. oci abu dhabi sovereign
5. khazna data centre ai deployment
6. du cloud ai hosting
7. tdra compliant cloud uae
8. hybrid sovereign cloud architecture gcc

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (federal, ADNOC, Mubadala portfolio, ADGM), Dubai (DIFC, RTA, DEWA, Emirates Group)
- **Secondary:** KSA (NCA-aligned banks, Aramco Digital, NEOM, STC Cloud), Qatar (Ooredoo, Doha-based ministries), Oman (OQ, Oman Data Park)
- **Tertiary:** Bahrain (AWS Bahrain region overflow), Egypt — regional groups with UAE-hosted headquarters

## 7. The One Painful Problem
The visitor's last architecture review was rejected because the proposed AI workload sat in an AWS region without a documented Bring-Your-Own-Key path and the regulator demanded sovereign hosting — they now need a partner who can demonstrate, with a single architecture diagram, AI workloads spanning AWS UAE North, Azure UAE North, OCI Abu Dhabi, **and** G42 Cloud, with a regulator-evidence pack per region.

## 8. The Stakes
- The current quarter's AI workload backlog cannot ship without an approved landing-zone design — every week of delay is one less use case in production this fiscal year.
- The Head of Infrastructure has personally signed the residency attestation with the regulator; a residency breach is a personal-liability item, not just a corporate one.
- The CIO is benchmarking infrastructure leadership on time-to-landing-zone — typically 14 weeks against a target of 6.
- A wrong cloud choice today locks the AI estate to one provider's pricing curve for the next three years.

## 9. The Promise (H1 Direction)
AI workloads deployable across seven UAE cloud and data-centre estates — hyperscaler, sovereign, and on-premise — with a six-week landing zone and a regulator-evidence pack tailored to TDRA, the Central Bank, the FSRA, and the NCA.

## 10. The Unique Mechanism
- **Hyperscaler estate:** AWS UAE North (me-central-1) and AWS Bahrain (me-south-1) — Advanced Tier partner, full BYOK via KMS with external key store, SageMaker / Bedrock-fronted deployments.
- **Microsoft estate:** Azure UAE North and Azure UAE Central — joint Azure OpenAI Service deployments with customer-managed keys via Azure Key Vault HSM.
- **Oracle estate:** OCI Abu Dhabi and OCI Dubai regions — Oracle Dedicated Region @ Customer experience for entities that need OCI on their own floor.
- **Sovereign estate:** G42 Cloud (Inception-fronted) — joint reference architecture for Arabic LLM training on G42 GPU pods; Core42 Compute partnership for sovereign inference.
- **Carrier-grade UAE estate:** du Cloud (data centres in Dubai South and Samacom) and e& enterprise / Khazna data centres (Abu Dhabi, Dubai) — colocation, dedicated rack, and managed AI appliance options.
- **On-premise pattern:** Kubernetes-on-bare-metal AI appliances (NVIDIA DGX, OEM HGX H100 builds) shipped into the client's data hall with a Brocode-managed control plane.
- **Connectivity fabric:** Megaport / Equinix Fabric / G42 cross-connects for sub-2ms data-plane links between estates.
- **The "Six-Week Landing Zone"**: a Terraform-driven landing-zone blueprint per cloud (AWS, Azure, OCI, G42) with the regulator-evidence pack pre-mapped to TDRA, CBUAE, FSRA, ADGM, NCA controls.

## 11. Top 3 Objections
- **O1:** "We need true sovereignty — keys in our HSM, no foreign-operator access, no metadata egress. Can you actually deliver that on each of these clouds?"
- **O2:** "Are you a hyperscaler-only shop pretending to know G42, or a G42-only shop pretending to know AWS? Show me an architecture diagram that spans both."
- **O3:** "What is your real timeline to a production-ready landing zone? Every consultancy promises six weeks and delivers in five months."

## 12. Proof Strategy
- Side-by-side landing-zone Terraform manifests for AWS UAE North, Azure UAE North, OCI Abu Dhabi, and G42 Cloud — published in our public examples repo.
- Anonymised reference: UAE federal entity AI workload spanning Azure UAE North (inference) + G42 Cloud (training) + on-premise appliance (sensitive corpus) — single architecture diagram, single observability plane.
- Regulator-evidence pack samples — TDRA mapping, CBUAE Outsourcing Regulation mapping, ADGM Data Protection Regulations mapping, NCA ECC mapping.
- Cloud-provider partner badges with the regional partner-side contact role named.
- A "Cloud-to-Cloud latency map" — real measured latencies between UAE estates from our test rig.

## 13. The Lead Magnet
**"The 2026 UAE Sovereign & Hybrid Cloud Atlas for AI Workloads"** — 56-page PDF + a downloadable Terraform landing-zone starter pack + a CSV of measured cross-cloud latencies. Headline figure: **47 production AI landing zones** delivered across the seven UAE estates since 2022, with an average **42-day** time-to-first-workload.

## 14. Primary CTA Wording
**"Book a 60-minute landing-zone design session for your UAE cloud estate"** — secondary CTA: **"Download the 2026 UAE Sovereign & Hybrid Cloud Atlas"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I'm planning AI landing zones across [AWS UAE North / Azure UAE North / OCI Abu Dhabi / G42 Cloud / Khazna on-prem] for [organisation]. I'd like to book the 60-minute landing-zone design session this fortnight.

## 16. Quote Form Fields
1. **Target estates** (multi-select: AWS UAE North / AWS Bahrain / Azure UAE North / OCI Abu Dhabi / G42 Cloud / Khazna / du Cloud / on-prem appliance)
2. **Workload profile** (multi-select: LLM training / LLM inference / classical ML / data lake / vector search / agentic)
3. **Regulator overlay required** (multi-select: TDRA / CBUAE / FSRA-ADGM / DFSA-DIFC / NCA-KSA / DHA / SEHA / other)
4. **Key-management requirement** (single select: cloud-managed / customer-managed (BYOK) / external key store / HSM-backed)
5. **Existing landing zone in place?** (single select: greenfield / partial / mature — needs AI overlay)
6. **Target time-to-first-workload** (single select: <6 weeks / 6–12 weeks / 12–26 weeks / >26 weeks)

## 17. Hero Media Direction
A horizontal "estate map" hero. A simplified UAE outline rendered in midnight navy with seven nodes glowing in sequence — AWS UAE North, Azure UAE North, OCI Abu Dhabi, G42 Cloud, Khazna, du Cloud, e& / Etisalat data centres — each node accompanied by a small chip showing measured latency to a notional client data centre in Abu Dhabi. Connecting lines between nodes form a soft mesh in cyan over sand-gold. Single line underneath: "Seven estates. One control plane. One regulator-evidence pack." No globe imagery. No "cloud with a chip on it" stock.

## 18. Section-by-Section Outline
1. **Hero** — the seven-estate map with latency chips and the one-line statement.
2. **The UAE cloud reality in 2026** — a 160-word framing piece: why hyperscaler-only and G42-only are both wrong defaults.
3. **The seven estates** — one card per estate with: partnership tier, BYOK story, regulator alignment, where it shines, where it does not.
4. **Reference architecture: a hybrid workload across three estates** — fully drawn architecture with the audit-trail call-outs.
5. **The Six-Week Landing Zone** — week-by-week plan, deliverables per week, regulator-evidence pack as a stage gate.
6. **Regulator-evidence pack** — TDRA / CBUAE / FSRA / ADGM / NCA control-mapping samples.
7. **Cloud-to-cloud latency map** — the measured-latency visual with a downloadable CSV.
8. **Lead-magnet block** — full-width download for the UAE Sovereign & Hybrid Cloud Atlas.
9. **FAQ** (built for FAQ schema) — key management, exit clauses, cross-cloud observability, cost-control.
10. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/technology/stack` — the landing zone must match the stack. Link from section 4.
2. `/technology/ai-platform-partners` — the AWS / Azure / OCI / G42 partnership cards back the estate cards. Link from each estate card.
3. `/services/self-hosted-llm-infrastructure` — the on-prem appliance story routes here. Link from the on-prem card.
4. `/services/mlops-ai-infrastructure` — the cross-cloud control-plane story routes here. Link from section 4.
5. `/industries/government-public-sector` — the dominant industry for the residency conversation. Link in the related band.

## 20. Differentiation Angle vs Competitors
- **vs hyperscaler-only SI (AWS-only or Azure-only consultancies)** — they architect AI workloads inside one cloud and dodge the sovereignty question; we span hyperscaler **and** G42 Cloud **and** on-prem appliances on a single control plane.
- **vs G42-only integrator** — they sell the sovereign-cloud story but cannot help when the client also needs Azure OpenAI Service or AWS Bedrock for non-sovereign workloads; we run both.
- **vs legacy on-prem world (HPE / Dell / Lenovo integrators with AI overlays)** — they ship hardware then leave; we ship the appliance and run the MLOps control plane on it.
- **vs in-house build** — the Six-Week Landing Zone shortcuts a 9–18 month in-house landing-zone programme and ships with a pre-mapped regulator-evidence pack.

---

## Production notes
- Latency numbers on the hero and the latency map must be refreshed monthly from the test rig — stale latencies are misleading.
- The regulator-evidence pack samples must be reviewed by Brocode's compliance lead before any publication, and re-reviewed when any regulator publishes an update.
- The "47 production AI landing zones" figure must be reconciled with the engagement register quarterly.
