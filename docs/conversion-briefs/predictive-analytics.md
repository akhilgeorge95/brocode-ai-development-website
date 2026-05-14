# Conversion Brief — Predictive Analytics (Finance, Supply Chain, Risk)

---

## 1. Page Slug & URL
`/services/predictive-analytics`

## 2. Primary Audience Persona
**Primary:** Head of FP&A, Head of Treasury, Head of Credit Risk, or Head of Supply Chain at a UAE/KSA enterprise — a retailer (LuLu, MAF Hypermarkets, Al-Othaim), a consumer-goods distributor (IFFCO, Almarai, Saudia Dairy), a manufacturer (Emirates Steel, Ducab, SABIC downstream), a bank's credit function (FAB, ADCB, SNB, Riyad Bank), or a telco's customer base management team. 2,000–25,000 employees. They report to a CFO or COO. They have a specific KPI: demand-forecast MAPE below 12 %, working-capital days down 8, churn at risk down 25 %, or expected-credit-loss provision under control. They are accountable, not advisory.

## 3. Visitor Intent at Arrival
The visitor just searched for a predictive-analytics partner with concrete delivery in a specific domain — demand forecasting, credit risk, churn, working-capital — and a quantified ROI in a comparable regional enterprise. They are mid-**evaluation** stage. They typically have a SAS Forecast Server or SAP IBP estate they are unhappy with, a Big-4 advisory proposal that promises a "data-driven strategy" with mostly slides, and a quote from an offshore analytics shop they don't trust to deliver on the regulatory side. They want a builder, not an advisor — and a builder who'll ship in 90 days.

## 4. Primary Search Keyword + Ad Group
- **Keyword (phrase match):** `"predictive analytics company uae"`
- **Ad group:** `Predictive Analytics – Finance & Supply Chain – UAE/KSA`

## 5. Secondary Keyword Cluster
1. demand forecasting AI gcc
2. credit risk machine learning bank uae
3. churn prediction telco saudi arabia
4. working capital optimisation AI
5. expected credit loss ifrs 9 modelling
6. supply chain forecasting middle east
7. inventory optimisation AI ksa
8. sas alternative forecasting

## 6. Geographic Targeting
- **Primary:** UAE — Dubai (retail HQs, distributor HQs, telco HQs), Abu Dhabi (bank credit teams, manufacturing HQs).
- **Secondary:** KSA (Riyadh — bank credit, retail; Dammam — distributors; Jubail/Yanbu — manufacturing), Qatar (QNB, Doha Bank, Qatar Cool), Oman (Bank Muscat, Oman Oil downstream), Bahrain.
- **Tertiary:** Egypt (CIB, large FMCG distributors), Pakistan (HBL, large FMCG), Kuwait (NBK, large retailers).

## 7. The One Painful Problem
Their demand forecast hovers at **27 % MAPE** at SKU-store-week level, which forces a buffer-stock policy that ties up AED 90 M of working capital in slow-movers across 220 stores — and the CFO has written to the Head of Supply Chain demanding a measurable improvement before the next quarterly board meeting.

(For the credit-risk persona, swap to: "Their PD model on the SME book is calibrated to a pre-COVID portfolio mix and is now systematically under-provisioning IFRS 9 stage-2 exposures; internal audit has flagged it.")

## 8. The Stakes
- An additional quarter of forecast inaccuracy locks another AED 25 M into working capital and triggers a covenant headroom conversation with treasury.
- The CFO has personally promised the board a working-capital improvement; missing it costs the FP&A lead's executive credibility.
- For credit risk: under-provisioned ECL is a CBUAE / SAMA inspection issue that lands directly on the Head of Credit Risk and the CRO.
- For churn: a 1.1-point ARPU drop in the customer base has analysts asking the CEO uncomfortable questions on the next earnings call.

## 9. The Promise (H1 Direction)
Forecast accuracy your CFO can act on — SKU-store-week MAPE under 12 %, PD/LGD models recalibrated to your current portfolio, or churn-at-risk lists your retention team can work tomorrow — built on your data, in your tenant, in 12 weeks.

## 10. The Unique Mechanism
- **Forecasting stack:** A model-zoo approach evaluated on the customer's data — TimeGPT and Chronos as foundation forecasters, NeuralProphet and N-BEATSx for interpretable baselines, LightGBM with engineered calendar/promotion features for tabular workhorses, TFT (Temporal Fusion Transformer) for multivariate cases. The Brocode "forecast tournament" picks the winner per segment.
- **Credit risk:** XGBoost + monotonic constraints for PD; survival analysis with DeepSurv and cox-PH baselines for LGD time-to-default; SHAP explanations sealed into model cards aligned to SR-11/7, BCBS 239 and CBUAE/SAMA model-risk guidance.
- **Churn:** Two-stage propensity (LightGBM) + uplift modelling (CausalML, EconML) so the retention team works prospects where treatment actually moves the needle — not the high-probability churners who would leave anyway.
- **Working capital:** A LightGBM demand model feeding a stochastic inventory optimiser (Gurobi or HiGHS) with policy outputs by location, with service-level constraints exposed to the planner.
- **Feature & data platform:** Snowflake / Databricks / Microsoft Fabric in the customer's tenant; Feast feature store; dbt for transformations; MLflow for tracking; Evidently and WhyLabs for drift; Great Expectations for data tests.
- **Productionisation:** Real-time scoring on FastAPI + Triton Inference Server where needed; batch scoring via Airflow DAGs on the customer's data warehouse. Power BI / Looker dashboards for the FP&A or risk audience.
- **The "Forecast Tournament":** A free, fixed-scope 3-week tournament where Brocode runs the customer's last 24 months of data through 6 candidate models and presents a winner-takes-all MAPE comparison before any commercial commitment.

## 11. Top 3 Objections
- **O1:** "SAS has been our forecasting engine for 12 years. Why would we move to an open-source stack — and what's the migration cost?"
- **O2:** "We've had three vendors promise sub-15 % MAPE. None of them held up at SKU-store-week granularity in long-tail SKUs. What's different here?"
- **O3:** "For credit risk, our model is regulator-approved. Any replacement must survive a CBUAE / SAMA model-validation review and have full lineage."

## 12. Proof Strategy
- A "Forecast Tournament" lead magnet (see field 13) — a publicly-shareable report of model performance across 6 candidate models on a held-out retail dataset.
- Anonymised UAE retailer reference: SKU-store-week MAPE 27 % → 11.4 % across 320 stores and 18,000 SKUs; working-capital days -9.2; 11-month payback.
- Anonymised KSA bank reference: SME PD model re-calibration; Gini up from 0.41 to 0.62; ECL provision rebalanced and accepted by SAMA model validation team.
- Anonymised telco reference: 90-day churn-at-risk model with uplift segmentation; retention-campaign incremental save +38 % at the same campaign cost.
- Partner badges: Snowflake Select Partner, Databricks Partner, Microsoft Solutions Partner (Data & AI), AWS Advanced Tier, ISO 27001, SOC 2 Type II.
- A public "Model Card Library" page on the site that shows the standard documentation pack delivered with every model.

## 13. The Lead Magnet
**"The GCC Demand-Forecast Tournament — 6 Models, 18,000 SKUs, 320 Stores, 24 Months: Which Forecasting Stack Actually Beats SAS?"** — 36-page PDF + a downloadable model-card pack (PDFs + JSON) for each contender. Headline figure: the winning Brocode TimeGPT + LightGBM ensemble hits **SKU-store-week MAPE of 11.4 %** vs SAS Forecast Server at **22.8 %** on the shared dataset, with 4× faster batch scoring.

## 14. Primary CTA Wording
**"Run a free 3-week Forecast Tournament on your data"** — secondary CTA: **"Book a 45-minute review with our forecasting lead"**.

## 15. WhatsApp Pre-filled Message
> Hi Brocode — I'm in [supply chain / credit risk / FP&A / customer base] at [organisation]. We'd like to scope a forecast/risk/churn pilot on our own data. Could we book a 30-minute call this week?

## 16. Quote Form Fields
1. **Primary use case** (single select: demand forecasting / inventory optimisation / credit risk PD-LGD / IFRS 9 ECL / churn / pricing / cash-flow forecasting / other)
2. **Data warehouse / lakehouse** (single select: Snowflake / Databricks / Microsoft Fabric / BigQuery / Redshift / Oracle / SAP HANA / on-prem SQL Server / other)
3. **Existing forecasting / risk tool** (multi-select: SAS / SAP IBP / Oracle Demantra / Anaplan / o9 / Blue Yonder / homegrown Python / none)
4. **Granularity required** (free text — e.g., "SKU × store × week", "borrower × month", "subscriber × day")
5. **History available** (single select: <12 months / 12–24 months / 24–48 months / >48 months)
6. **Regulator / audit constraints** (multi-select: CBUAE / SAMA / DFSA / ADGM FSRA / SOX / internal audit only / none)

## 17. Hero Media Direction
A wide, slightly tilted overhead of an FP&A analyst's two-monitor desk. **Left monitor:** a clean Power BI dashboard with three KPI tiles — `MAPE 11.4 %`, `Working capital days 38 → 29`, `Forecast freshness <4h` — and a time-series chart where the historical line (grey) meets the forecast (a soft Brocode-navy band with confidence intervals). **Right monitor:** a Jupyter-style notebook with a code cell training a Temporal Fusion Transformer, the loss curve plotting in real time. A coffee cup, a paper notebook, an analyst's keyboard — nothing else. Camera does a slow descent. Colour grade: warm natural daylight, no neon. The shot reads "this is what a working forecasting team's desk looks like", not "AI marketing render".

## 18. Section-by-Section Outline
1. **Hero** — analyst's desk with a live MAPE / working-capital dashboard.
2. **What "predictive analytics that the CFO can act on" looks like** — three concrete examples (forecast, credit risk, churn) and what each means at the P&L line.
3. **The Forecast Tournament method** — 3-week, fixed-scope, 6-model comparison.
4. **The Brocode model stack** — clear table mapping problem → recommended model family.
5. **Data and feature platform** — Snowflake / Databricks / Fabric, Feast, dbt, MLflow — in the customer's tenant.
6. **Productionisation patterns** — real-time scoring vs batch, with examples.
7. **Model risk and explainability** — Model cards, SHAP, lineage; what a CBUAE / SAMA validation team sees.
8. **Case studies** — retail demand, SME credit risk, telco churn.
9. **Forecast Tournament offer** — full-width CTA with form.
10. **Comparison band** — vs SAS / vs Big-4 advisory / vs offshore analytics / vs in-house.
11. **FAQ** (FAQ schema) — accuracy, data requirements, regulator acceptance, model deprecation, integration.

## 19. Internal Linking Strategy
1. `/services/mlops-ai-infrastructure` — for the productionisation, drift and retraining story. Linked from section 6.
2. `/services/recommendation-systems` — for the retail audience that also asks about merchandising and personalisation. Linked from case studies.
3. `/services/responsible-ai-governance` — for the regulator-acceptance conversation on credit risk. Linked from section 7.
4. `/industries/retail-ecommerce` — primary industry hub for the demand-forecasting persona. Linked from case studies.
5. `/industries/banking-financial-services` — for the credit-risk persona. Linked from case studies.

## 20. Differentiation Angle vs Competitors
- **vs SAS Forecast Server / SAS Risk Management** — emphasise modern foundation models (TimeGPT, Chronos), open-source ownership, the per-SKU MAPE delta (22.8 % → 11.4 % in the tournament), and a 60 % run-cost reduction over a typical SAS estate.
- **vs Big-4 advisory (Deloitte, PwC, EY, KPMG)** — emphasise that this brief is a build engagement with shipped models, not an advisory report. The Big-4 audit-quality narrative is acknowledged; the delivery model is different.
- **vs o9, Blue Yonder, SAP IBP** — emphasise that we are model-and-data partners alongside any of these planning suites, not a competing suite. We make the existing planner produce a better number.
- **vs offshore analytics shops** — emphasise the named regional references, model cards aligned to UAE/KSA regulator expectations, and in-tenant deployment with no offshore data movement.

---

## Production notes
- All MAPE / Gini / save-rate numbers require lead-engineer sign-off before publish.
- Model card library page must be live and link-able before this brief publishes.
- The Forecast Tournament deliverable must have a redacted public sample available before the lead-magnet form goes live.
