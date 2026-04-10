# VoltEdge MDC — AI Decision-Support Platform

A single-page web application for AI-assisted planning of renewable energy micro data centre (MDC) sites in Alberta's power grid.

## Overview

VoltEdge MDC is an early-stage planning tool that helps investment, engineering, and commercial teams evaluate sites for co-located renewable energy + battery storage + compute (MDC) projects. The platform aggregates data from AESO grid feeds, SCADA exports, weather models, and regulatory document stores to produce AI-assisted decision packets — always with a human in the loop.

## Platform Modules

| Module | Description |
|---|---|
| **Dashboard** | Portfolio overview, live KPIs, data freshness, guardrail status |
| **Site Screening** | Multi-factor scoring across curtailment, grid, network, and regulatory dimensions |
| **Curtailment Intelligence** | Predictive AI forecasting at 10-minute resolution with confidence bands |
| **Load & Storage Sizing** | Agentic optimization loop for BESS + MDC configuration scenarios |
| **Grid Interaction Modeling** | Backup coverage simulation and scenario comparison |
| **Network & Fiber Feasibility** | Latency scoring, provider assessment, connectivity map |
| **Agentic Decision Support** | Human-in-the-loop recommendation review queue |
| **Scenario Analysis** | Portfolio IRR comparison across base/downside/upside cases |
| **Executive Narratives** | RAG-grounded site briefs and IC packages |
| **Performance & Business Impact** | Model metrics, KPI alignment, evaluation methods |
| **Deployment & Monitoring** | API architecture, governance gates, drift detection |
| **Data Sources** | Data ingestion layer configuration and security controls |

## Key Design Principles

- **Human-in-the-Loop**: No autonomous dispatch, no AI-initiated regulatory filings. Every recommendation requires explicit human approval before any downstream action.
- **Read-Only Data Integration**: The platform does not connect to live grid or SCADA control systems. It synthesizes outputs from existing tools.
- **RAG-Grounded Narratives**: All regulatory claims cite approved sources. Outputs without citations are blocked from export.
- **Confidence Transparency**: Every forecast includes confidence bands and data freshness indicators.
- **Client Data Isolation**: Proprietary data is architecturally segmented per client/project.

## Technology

- **Frontend**: Vanilla HTML/CSS/JavaScript — no build step required
- **Charts**: [Chart.js 4.4.1](https://www.chartjs.org/) (CDN)
- **Deployment**: Any static web host (GitHub Pages, Netlify, Vercel, S3)

## Getting Started

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-org/voltedge-mdc.git
cd voltedge-mdc

# Open directly in browser (no build step needed)
open index.html

# Or serve locally
python3 -m http.server 8080
# Then visit http://localhost:8080
```

### GitHub Pages Deployment

1. Push to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. Visit `https://your-username.github.io/voltedge-mdc/`

## Repository Structure

```
voltedge-mdc/
├── index.html              # Main application (self-contained)
├── README.md               # This file
├── docs/
│   ├── architecture.md     # Platform architecture reference
│   └── metrics-and-monitoring.md  # Metrics & monitoring specification
└── .github/
    └── workflows/
        └── deploy.yml      # Optional: GitHub Pages auto-deploy
```

## Architecture Reference

See [`docs/architecture.md`](docs/architecture.md) for:
- Intelligence layer design
- API contract design ("thin waist" pattern)
- RAG architecture
- Human-in-the-loop enforcement

## Metrics & Monitoring

See [`docs/metrics-and-monitoring.md`](docs/metrics-and-monitoring.md) for:
- Model metrics (curtailment forecast MAE/MAPE by horizon)
- System metrics (Time-to-Decision)
- Integration metrics (SCADA ingestion fidelity)
- Evaluation methods
- Review cadence schedules

## Disclaimer

All data displayed in this platform is for planning and decision-support purposes only. AI-generated scores, forecasts, and narratives require human review and do not constitute engineering, legal, financial, or investment advice. All regulatory interpretations must be verified against current AESO rules and applicable regulations.

---

*VoltEdge MDC · AI Platform v1.2 · Alberta Grid*
