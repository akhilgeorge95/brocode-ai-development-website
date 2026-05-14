# Conversion Brief — Data Engineering for AI

> Conversion brief for `/services/data-engineering-for-ai`. The buyer here has AI ambitions stuck in committee because the underlying data estate cannot support them. The page must speak to a senior data leader, not a CIO and not a data scientist.

---

## 1. Page Slug & URL
`/services/data-engineering-for-ai`

## 2. Primary Audience Persona
Head of Data Platform, Chief Data Officer, or Director of Data Engineering at a UAE/KSA enterprise — typically a tier-1 bank (FAB, ENBD, SNB, Al Rajhi), a national oil & gas operator (ADNOC, Aramco, KOC), a government holding (Mubadala, PIF portfolio company), or a large telco (e&, stc). Headcount 2,000–25,000. They own 30–120 engineers across data platform, integration, and BI. They report to a Group CIO or a Chief AI Officer who has been told by the board that "we will be an AI-first organisation by 2027." Their last three AI proofs-of-concept stalled at the data-readiness stage. They sit on the tender committee for any data infrastructure spend over AED 1 M.

## 3. Visitor Intent at Arrival
The visitor has just searched for a data engineering partner that understands AI/ML feature requirements — not a generic ETL shop and not a hyperscaler's professional-services arm. They are likely **mid-evaluation**: they have a 12–18 month AI roadmap on paper, they have probably already bought Databricks or Snowflake licences (or are about to), and the gap they're trying to close is the human capacity and the AI-aware patterns needed to turn raw operational data into ML-ready feature stores. They want to see whether Brocode can architect a lakehouse, fix their lineage problem, and stand up a feature store within a fiscal year.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"data engineering for AI" uae`
- **Ad group:** `Data Platform – AI-Ready Data Engineering – UAE/KSA`

## 5. Secondary Keyword Cluster
1. ai data pipeline consultancy dubai
2. feature store implementation gcc
3. lakehouse architecture saudi arabia
4. snowflake databricks ai consulting middle east
5. data mesh implementation uae bank
6. mlops feature engineering services
7. enterprise data lineage solution gcc
8. sap oracle data integration for machine learning

## 6. Geographic Targeting
- **Primary:** UAE — Abu Dhabi (ADNOC, FAB, IHC group, Mubadala companies), Dubai (ENBD, DEWA, e&, Emirates Group)
- **Secondary:** KSA (Riyadh — SNB, Al Rajhi, stc, Aramco Digital; Dhahran — Aramco; PIF portfolio), Qatar (QNB, Qatar Energy), Kuwait (NBK, KOC), Oman (Bank Muscat, PDO)
- **Tertiary:** Egypt (CIB, Telecom Egypt), Pakistan (HBL, MCB) — markets with similar SAP-heavy, mainframe-anchored estates

## 7. The One Painful Problem
Their AI roadmap is approved, the models are designed, the data scientists are hired — but every project stalls for 4–7 months because the underlying data sits in 14 disconnected systems (SAP S/4HANA, Oracle EBS, an IBM mainframe, three S3 buckets nobody documents, half a dozen Salesforce orgs, Excel exports), no two teams agree what "active customer" means, and the data lake the previous CDO built is now nicknamed "the data swamp" internally.

## 8. The Stakes
- The Chief AI Officer has personally committed to the board that two named AI use cases (credit-decisioning model, predictive maintenance, customer-360 personalisation — pick one) will be in production by year-end. Missing means a public walk-back in the annual report.
- The Databricks/Snowflake spend is already AED 6–18 M/year and the board is asking, in writing, "what business value have we extracted from this platform?"
- Three of the data team's most senior engineers are interviewing elsewhere because they spend 70 % of their time writing one-off pipelines instead of building anything strategic.
- Vision 2030 / We the UAE 2031 narratives at the parent-entity level make the AI-readiness gap visible to ministers and shareholders.

## 9. The Promise (H1 Direction)
A production-grade, AI-ready data foundation — lakehouse, feature store, lineage, contracts, quality gates — stood up on your existing Databricks or Snowflake estate in 90 days for the first use case, with measurable feature-availability SLAs and a documented path off the swamp.

## 10. The Unique Mechanism
- **The Brocode AI-Ready Data Stack:** **dbt Core + dbt Cloud** for transformation, **Apache Airflow 2.x** (or **Dagster** for asset-first teams) for orchestration, **Apache Iceberg on S3 / ADLS** as the open-table format, **Great Expectations** + **Soda Core** for data quality gates, **OpenLineage + Marquez** (or **DataHub** / **Unity Catalog**) for end-to-end lineage, **Feast** or **Tecton** for the feature store, **Debezium + Kafka** for change-data-capture from SAP/Oracle, and **Apache Spark** on Databricks or **Snowpark** on Snowflake for the heavy compute.
- **The 90-Day Foundation Sprint:** a fixed-scope engagement that delivers one production use case end-to-end — source extraction, contract-tested staging, certified marts, registered features, lineage, monitoring — so the rest of the roadmap has a working template.
- **The Data Contract pattern:** every upstream source signs a contract (schema, freshness, semantics, owner). Drift triggers a pipeline alert before it reaches the model.
- **SAP-Native Extraction:** Brocode has reusable Debezium + SAP ODP connectors and a proven pattern for safely extracting from SAP S/4HANA without breaching the SAP licence terms most clients are accidentally breaking.
- **Mainframe-aware:** for clients with IBM Z / iSeries cores, Brocode integrates **Precisely Connect** or **IBM IIDR** rather than pretending the mainframe doesn't exist.

## 11. Top 3 Objections
- **O1:** "We've already bought Databricks/Snowflake — and they have a professional services arm. Why pay you instead of them?"
- **O2:** "Every consultancy promises a lakehouse. How do I know your team has actually built one that survived a production audit at a UAE bank or oil & gas operator?"
- **O3:** "Our data is sovereign — it cannot leave the country, and parts of it can't even leave the on-prem core. Can you actually deliver this without a hyperscaler-only architecture?"

## 12. Proof Strategy
- Anonymised tier-1 GCC bank reference: 11 source systems unified, feature-engineering lead time reduced from 14 weeks to 9 days, AED 4.2 M annualised saving on duplicated ETL effort.
- Anonymised UAE energy major reference: SAP S/4HANA + plant historian (PI) + maintenance system unified into a lakehouse on Azure UAE North, supporting a predictive-maintenance model with a documented uplift on unplanned downtime.
- Brocode partner status with Databricks (Select tier) and Snowflake (Select Services Partner) — published badges.
- An open, downloadable **Data Maturity Diagnostic** the buyer can self-score (lead magnet — see field 13).
- ISO 27001, SOC 2 Type II, NESA / TDRA compliance accreditation, G42 Cloud partnership for sovereign deployment.
- Named delivery leads with LinkedIn-verifiable backgrounds at AWS, ex-McKinsey QuantumBlack, ex-Databricks Resident Solutions Architect — listed by name on the page.

## 13. The Lead Magnet
**"The AI-Ready Data Estate Diagnostic: a 47-point self-assessment for CDOs in the GCC"** — interactive web-based scorecard plus a 24-page PDF report generated for the visitor's answers. Covers source coverage, contract maturity, lineage completeness, feature-store readiness, governance, FinOps, and team capacity. Headline figure across the first 80 respondents: **the median GCC enterprise scores 41/100 — and the gap between a 41 and the 75 needed to ship production AI is 6–9 months of focused engineering, not 24.**

## 14. Primary CTA Wording
**"Book a 60-minute Data Estate Review with our Principal Data Architect"** — secondary mid-page CTA: **"Download the AI-Ready Data Diagnostic"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I lead data platform at [organisation] and we're trying to make our estate AI-ready. Our current stack includes [Snowflake / Databricks / on-prem]. Could we book a 60-minute architecture review with your principal data architect?

## 16. Quote Form Fields
1. **Current data platform** (multi-select: Databricks / Snowflake / Microsoft Fabric / on-prem Hadoop / Oracle Exadata / SAP BW / Teradata / none yet)
2. **Primary source systems to integrate** (multi-select: SAP S/4HANA / SAP ECC / Oracle EBS / IBM mainframe / Salesforce / homegrown core banking / SCADA-historian / other)
3. **AI use cases targeted in next 12 months** (multi-select: credit risk / fraud / customer 360 / predictive maintenance / demand forecasting / GenAI knowledge assistant / other)
4. **Approximate active data volume** (single select: <10 TB / 10–100 TB / 100 TB–1 PB / >1 PB)
5. **Deployment constraint** (single select: hyperscaler-any / UAE/KSA region only / sovereign cloud only / on-premise only / hybrid)
6. **Mandated first production milestone** (date picker)

## 17. Hero Media Direction
A wide, 21:9 isometric diagram rendered in calm navy and sand-gold. On the left, a cluster of source-system icons (SAP, Oracle, mainframe terminal, scattered S3 buckets, a screenshot of an Excel grid) sit at low opacity, slightly disordered. A subtle animation pulls data threads — thin gold lines — through a central transformation layer (a clean dbt + Airflow + Iceberg stack rendered as architectural blocks) into a polished, ordered feature-store panel on the right. The feature panel shows real-looking feature names: `customer_30d_avg_balance`, `branch_footfall_p90`, `equipment_vibration_rms`, each with a freshness SLA tick. Below the feature panel, a small counter ticks up: "Feature lead time: 14 weeks → 9 days." Calm, considered, no neural-network swirl, no glowing brain. Subtle Arabic numerals in the corner for SLA timestamps.

## 18. Section-by-Section Outline
1. **Hero** — the messy-sources to ordered-features animation with the lead-time counter.
2. **Why your AI roadmap is stuck at the data layer** — three-card diagnostic of the failure pattern (fragmentation, no contracts, no lineage) with one anonymised real example per card.
3. **The Brocode AI-Ready Data Stack** — annotated architecture diagram with hover-detail on each component (dbt, Airflow, Iceberg, Great Expectations, OpenLineage, Feast).
4. **The 90-day foundation sprint** — visual timeline of weeks 0–13 with named deliverables and a documented use case at the end.
5. **SAP, Oracle, and mainframe — the parts most consultancies skip** — short technical section on Brocode's reusable patterns for SAP ODP/Debezium extraction, Oracle GoldenGate alternatives, and mainframe CDC, with a download for the SAP-extraction pattern document.
6. **The Data Contract and feature-store pattern** — explainer with one bank and one industrial example.
7. **Case studies** — tier-1 GCC bank + UAE energy major, each with a single quantified outcome.
8. **The Diagnostic** — full-width CTA for the AI-Ready Data Diagnostic scorecard.
9. **Vs Databricks/Snowflake pro-services, Big-4, and offshore ETL** — honest comparison table.
10. **FAQ** — sovereignty, licence safety on SAP, retraining/handover, team integration, FinOps.
11. **Related capabilities** — five cross-links (see field 19).

## 19. Internal Linking Strategy
1. `/services/mlops-ai-infrastructure` — the natural downstream conversation; once the data is ready, MLOps is the next purchase. Link in section 6 and the related band.
2. `/services/ai-consulting-strategy` — for visitors who arrive earlier than they should and need the strategy frame first. Link from the diagnostic and the FAQ.
3. `/services/self-hosted-llm-infrastructure` — for clients building GenAI on their own data; data foundation is a prerequisite. Link from section 3.
4. `/industries/banking-financial-services` — the dominant industry for this page. Link from the tier-1 bank case study.
5. `/industries/energy-utilities` — the secondary industry. Link from the energy-major case study.

## 20. Differentiation Angle vs Competitors
- **vs Databricks Professional Services / Snowflake Professional Services** — Brocode is platform-pragmatic, not platform-loyal. Where Snowflake PS will architect everything into Snowpark and Databricks PS will architect everything into Delta + Unity, Brocode chooses Iceberg / Delta / Snowpark per use case, integrates the mainframe and SAP layers properly, and is not incentivised to maximise consumption. Brocode also stays after go-live; vendor pro-services typically rotate off in 12 weeks.
- **vs Big-4 data practices (Deloitte, PwC, EY, KPMG)** — Brocode fields named senior engineers, not partner-plus-pyramid. Day-rates are 40–60 % lower for genuinely senior staff, and delivery is in code, not slides. Brocode has shipped production AI in the GCC; most Big-4 GCC data practices have shipped dashboards.
- **vs offshore ETL shops (Indian SI majors, regional resellers)** — Brocode engineers know what a feature store is, what data contracts mean, and what an AI model actually needs from the data layer. Offshore ETL shops build pipelines that move data; Brocode builds pipelines that feed models.
- **vs in-house build** — Brocode shortens the foundation phase from 18–24 months to a single fiscal year, with documented patterns the in-house team owns at the end. The handover is a deliverable, not a hope.

---

## Production notes
- The 41/100 median score figure must be regenerated from the live diagnostic database before each quarter's publish.
- The named delivery leads on the page require fresh sign-off from each engineer's LinkedIn profile.
- SAP licence-safety claim: any wording must be reviewed by Brocode's commercial counsel — SAP's extraction-licence terms are a live legal area.
- Databricks/Snowflake partner-tier badges must reflect the current published tier at publish time.
