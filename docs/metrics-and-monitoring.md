# Metrics & Monitoring — VoltEdge MDC

## Model Metrics

### Primary: Curtailment Forecast Error (MAE / MAPE by Horizon)

Measures how well the predictive layer forecasts curtailment occurrence and magnitude.

| Horizon | Current MAPE | Target |
|---|---|---|
| 10-minute interval | 2.1% | < 3% |
| Hour-ahead | 2.8% | < 4% |
| Day-ahead | 4.2% | < 6% |
| 3-day | 6.1% | < 8% |
| Week-ahead | 9.4% | < 12% |

**Business KPIs supported:**
- Revenue / value capture uplift
- - CapEx efficiency
  - - Risk reduction
    - - Customer trust and adoption
     
      - ## System Metrics
     
      - ### Primary: Time-to-Decision (TTD)
     
      - Tracks elapsed time from first data drop to a complete decision packet ready for investment committee.
     
      - **Baseline:** 6.6 days (pre-AI, manual analysis)
      - **Target:** < 3 days
      - **Current:** 2.1 days (68% reduction)
     
      - **Business KPIs supported:**
      - - Sales cycle and deployment speed
        - - Operating cost / analyst productivity
          - - Pipeline throughput
            - - Execution risk reduction
             
              - ## Integration Metrics
             
              - ### Primary: SCADA Data Ingestion Fidelity (%)
             
              - Composite score covering:
              - - Correct timestamp alignment
                - - Passed range/quality checks
                  - - Tag mapping accuracy
                   
                    - **Target:** >= 95% overall fidelity
                    - **Current:** 96.4%
                   
                    - ---

                    ## Evaluation Methods

                    ### 1. Offline Backtesting (Predictive Layer)
                    - Time-split validation on historical AESO/SCADA data
                    - - Seasonal and regime splits
                      - - Tracks MAE/MAPE and confidence band calibration
                       
                        - ### 2. Shadow-Mode A/B Testing (System Impact)
                        - - AI runs in parallel with current workflow
                          - - Compares TTD, rework rate, decision quality
                           
                            - ### 3. Human Evaluation (Decision-Readiness)
                            - - Structured rubric scoring by SMEs: grid, commercial, regulatory
                              - - Evaluated on: correctness, completeness, explainability, actionability
                               
                                - ### 4. AI-Assisted Evaluation (Generative / RAG Outputs)
                                - - LLM-assisted ranking and citation checks
                                  - - Every regulatory claim must have an approved RAG source
                                   
                                    - ### 5. Continuous Performance Monitoring
                                    - - Data freshness alerts
                                      - - Hallucination triggers (missing citations / low confidence scores)
                                        - - Post-decision outcome tracking
                                         
                                          - ---

                                          ## Monitoring Plan

                                          ### A. Data Drift
                                          **Detection:** Automated checks every ingestion, PSI/KS tests on curtailment, pool price, wind/solar
                                          **Tools:** Great Expectations + Monte Carlo / Bigeye
                                          **Owner:** Data/ML Engineer

                                          ### B. Model Drift
                                          **Detection:** Track forecast error by horizon, calibration, error hotspots by zone/season
                                          **Tools:** Evidently / WhyLabs / Arize / Fiddler
                                          **Owner:** ML Lead

                                          ### C. Concept Drift
                                          **Detection:** RAG source freshness, assumption drift alerts, SME override rate trending
                                          **Tools:** RAG observability (document versioning, citation coverage rate)
                                          **Owner:** Regulatory SME + Commercial SME

                                          ### D. Bias / Fairness
                                          **Detection:** Compare recommendation quality across zones, interconnection types, asset classes
                                          **Owner:** ML Lead + Power Systems SME

                                          ### E. System Failures
                                          **Detection:** API gateway + observability: Datadog / New Relic + OpenTelemetry
                                          Provider fallback on outage or cost spike

                                          ---

                                          ## Review Cadence

                                          ### First 90 Days (New Client / Jurisdiction)

                                          | Review | Frequency | Coverage |
                                          |---|---|---|
                                          | Model health review | Weekly | All sites |
                                          | Decision packet review | Per packet | 100% |
                                          | Regulatory narrative review | Per output | 100% |
                                          | Red-team test (hallucinations) | Monthly | Full harness |
                                          | Data ingestion spot check | Weekly | All feeds |

                                          ### Steady State (After Stabilization)

                                          | Review | Frequency | Coverage |
                                          |---|---|---|
                                          | Model health review | Biweekly | All sites |
                                          | Decision packet review | Per packet (sampled) | 25-50% (risk-based) |
                                          | Regulatory narrative review | Per packet | 100% for new jurisdiction |
                                          | Governance + drift review | Quarterly | Full platform |
                                          | Bias / fairness audit | Quarterly | All site archetypes |

                                          > **Note:** 100% decision packet review is always required for new jurisdictions, new market products, or new interconnection classes.
