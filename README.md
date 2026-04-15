# VoltEdge MDC — AI Decision-Support Platform

A single-page web application for AI-assisted planning of renewable energy micro data centre (MDC) sites in Alberta's power grid.

## Project Structure

```
voltedge-mdc/
├── index.html                        # Main HTML — view templates & layout
├── css/
│   └── styles.css                    # All styles, CSS variables, component classes
├── js/
│   ├── nav.js                        # Navigation, view switching, UI interactions
│   ├── charts.js                     # All Chart.js chart definitions (lazy-init per view)
│   └── fibermap.js                   # SVG fiber connectivity map renderer
├── docs/
│   ├── architecture.md               # Platform architecture reference
│   └── metrics-and-monitoring.md     # Metrics & monitoring specification
└── .github/
    └── workflows/
        └── deploy.yml                # GitHub Pages auto-deploy
```

## Module Responsibilities

| File | Responsibility |
|---|---|
| `index.html` | Shell layout, sidebar, topbar, all view HTML templates. Scripts loaded at bottom in dependency order. |
| `css/styles.css` | All visual styles. Uses CSS custom properties (`--teal`, `--navy`, etc.) for consistent theming. |
| `js/nav.js` | `navigate(id)` — switches active view, updates topbar & sidebar. Also owns `toggleScenario()`, `approveDecision()`, and `updateSizingOutputs()`. |
| `js/charts.js` | All Chart.js instances. `initChartsFor(view)` is called by `navigate()` — charts are lazy-initialised only when their view is first shown. Each chart is registered in `chartInstances{}` and destroyed before re-creation to prevent canvas reuse errors. |
| `js/fibermap.js` | `buildFiberMap()` — renders the Southern Alberta fiber node/edge map as SVG lines + DOM node elements over a dark background container. Nodes and edges are defined as data arrays at the top of the file — easy to extend. |

## Technology

- **Frontend**: Vanilla HTML/CSS/JavaScript — no framework, no build step
- **Charts**: [Chart.js 4.4.1](https://www.chartjs.org/) (CDN)
- **Deployment**: Any static web host (GitHub Pages, Netlify, Vercel, S3)

## Getting Started

### Run Locally

```bash
# Clone
git clone https://github.com/your-org/voltedge-mdc.git
cd voltedge-mdc

# Option 1: Open directly
open index.html

# Option 2: Serve locally (recommended — avoids any CORS quirks)
python3 -m http.server 8080
# Visit http://localhost:8080
```

### Deploy to GitHub Pages

1. Push to a GitHub repository
2. **Settings → Pages → Deploy from branch → `main` / `root`**
3. Visit `https://your-username.github.io/voltedge-mdc/`

The included `.github/workflows/deploy.yml` can also auto-deploy on push if you switch Pages source to **GitHub Actions**.

## Extending the App

### Add a New View

1. Add an `<div class="view" id="view-myview">` block in `index.html`
2. Add a sidebar item: `<div class="sb-item" onclick="navigate('myview')">…</div>`
3. Add the title to `VIEW_TITLES` in `js/nav.js`
4. Add the view id to the `VIEWS` array in `js/nav.js`
5. If the view has charts, add a case in `initChartsFor()` in `js/charts.js`

### Add a New Chart

In `js/charts.js`, add an `initXxxCharts()` function and reference it from `initChartsFor()`. Follow the existing pattern:
```js
function initMyCharts() {
  destroyChart('my-canvas-id');
  chartInstances['my-canvas-id'] = new Chart(
    document.getElementById('my-canvas-id').getContext('2d'),
    { /* Chart.js config */ }
  );
}
```

### Update Fiber Map Nodes or Edges

Edit `FIBER_NODES` and `FIBER_EDGES` at the top of `js/fibermap.js`. Positions are percentages of the container dimensions (`x`, `y` from 0–100).

## Architecture Reference

See [`docs/architecture.md`](docs/architecture.md) for the full platform architecture, API contract design, RAG architecture, and human-in-the-loop enforcement model.

## Metrics & Monitoring

See [`docs/metrics-and-monitoring.md`](docs/metrics-and-monitoring.md) for model metrics, system metrics, evaluation methods, and review cadence schedules.

---

## Disclaimer

All data displayed in this platform is for planning and decision-support purposes only. AI-generated scores, forecasts, and narratives require human review and do not constitute engineering, legal, financial, or investment advice.

*VoltEdge MDC · AI Platform v1.2 · Alberta Grid*
