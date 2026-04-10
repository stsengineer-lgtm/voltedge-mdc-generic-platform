# Platform Architecture — VoltEdge MDC

## Intelligence Layer Design

The AI platform sits **above** raw data sources and **alongside** physical control systems — not inside them.

```
┌──────────────────────────────────────────────────────────────────────┐
│                    HUMAN DECISION-MAKERS                             │
│         (Investment Committee / Engineering / Commercial)            │
└─────────────────────────┬────────────────────────────────────────────┘
                          │ review / approve / escalate
┌─────────────────────────▼────────────────────────────────────────────┐
│              AGENTIC DECISION SUPPORT LAYER                          │
│   Orchestrates insights across all layers · Proposes options         │
│   Does NOT execute dispatch · Does NOT submit regulatory filings     │
├──────────────┬──────────────────────┬───────────────────────────────┤
│  PREDICTIVE  │  GRID INTERACTION &  │  NETWORK & FIBER              │
│  INTELLIGENCE│  BACKUP MODELING     │  FEASIBILITY                  │
│  Curtailment │  Scenario simulation │  Latency scoring              │
│  forecasting │  Backup coverage     │  Provider assessment          │
├──────────────┴──────────────────────┴───────────────────────────────┤
│              DATA INGESTION & NORMALIZATION LAYER                    │
│   Structured: AESO · SCADA · Weather · Asset params · Fiber         │
│   Unstructured (RAG): Tariffs · Engineering reports · Policy docs   │
└──────────────────────────────────────────────────────────────────────┘
                          │ read-only
┌─────────────────────────▼────────────────────────────────────────────┐
│    EXISTING TOOLS (not replaced — outputs consumed as inputs)        │
│    Grid SCADA · FEED/EPC tools · Interconnection studies             │
│    Battery vendor portals · Fiber provider maps                      │
└──────────────────────────────────────────────────────────────────────┘
```

## API Contract Design (Thin Waist)

Stable domain API endpoints — interface does not change when underlying model changes:

```
POST /forecast/curtailment
POST /simulate/grid-interaction
POST /optimize/load-sizing
POST /rag/regulatory-interpretation
POST /generate/executive-brief
```

Each model service is containerized. Blue/green deployments allow v1 and v2 to run in parallel with traffic switching on validation.

## RAG Architecture

The RAG component is split into independently swappable modules:

1. **Indexer / Embedding Service** — processes and chunks regulatory documents
2. 2. **Retriever** — semantic search over vector store (pgvector / Pinecone / Weaviate)
   3. 3. **Reranker** — relevance scoring of retrieved chunks
      4. 4. **Generator (LLM)** — synthesizes narrative from ranked context
        
         5. All outputs include source citations. Outputs without citations are blocked from export.
        
         6. ## Human-in-the-Loop Enforcement
        
         7. Every recommendation surface includes:
         8. - Confidence bands and data freshness indicators
            - - Assumptions panel (prices, CapEx curves, degradation, cost models)
              - - Constraint checklist (pass/fail + explanation)
                - - Citations (for all regulatory claims)
                  - - **Required** Approve / Request Changes / Escalate step before export
                   
                    - The orchestration layer enforces human approval gates at defined workflow checkpoints. No client-facing output is generated without a completed review step in the audit log.
