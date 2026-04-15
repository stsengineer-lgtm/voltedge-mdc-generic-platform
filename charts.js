/* ═══════════════════════════════════════════════
   VoltEdge MDC — AI Decision-Support Platform
   styles.css
   ═══════════════════════════════════════════════ */

/* ── CSS VARIABLES ── */
:root {
  --navy:      #0f2a4a;
  --navy2:     #1a3d5c;
  --teal:      #00a878;
  --teal2:     #007a58;
  --amber:     #f0a500;
  --red:       #e74c3c;
  --bg:        #f0f4f9;
  --card:      #ffffff;
  --border:    #d8e3ee;
  --text:      #1a2e44;
  --muted:     #6b82a0;
  --sidebar-w: 240px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
}

/* ── LAYOUT ── */
#app        { display: flex; height: 100vh; overflow: hidden; }
#sidebar    { width: var(--sidebar-w); background: var(--navy); display: flex; flex-direction: column; flex-shrink: 0; }
#main       { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
#topbar     { background: var(--card); border-bottom: 1px solid var(--border); padding: 0 28px; height: 60px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
#content    { flex: 1; overflow-y: auto; padding: 28px; }

/* ── SIDEBAR ── */
.sb-logo          { padding: 20px 20px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.sb-logo-name     { color: #fff; font-size: 16px; font-weight: 700; letter-spacing: .5px; }
.sb-logo-sub      { color: rgba(255,255,255,0.45); font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 2px; }
.sb-section       { padding: 14px 12px 4px; color: rgba(255,255,255,0.3); font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; }
.sb-item          { display: flex; align-items: center; gap: 10px; padding: 9px 16px; cursor: pointer; border-radius: 6px; margin: 2px 8px; color: rgba(255,255,255,0.65); font-size: 13px; transition: all .15s; }
.sb-item:hover    { background: rgba(255,255,255,0.08); color: #fff; }
.sb-item.active   { background: var(--teal); color: #fff; }
.sb-icon          { font-size: 15px; width: 18px; text-align: center; }
.sb-badge         { margin-left: auto; background: var(--amber); color: #fff; border-radius: 10px; font-size: 10px; padding: 1px 7px; font-weight: 700; }
.sb-footer        { margin-top: auto; padding: 16px; border-top: 1px solid rgba(255,255,255,0.1); }
.sb-user          { display: flex; align-items: center; gap: 10px; }
.sb-avatar        { width: 32px; height: 32px; border-radius: 50%; background: var(--teal); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 13px; }
.sb-user-info     { color: rgba(255,255,255,0.8); font-size: 12px; }
.sb-user-role     { color: rgba(255,255,255,0.4); font-size: 11px; }

/* ── TOPBAR ── */
.tb-title         { font-size: 16px; font-weight: 600; color: var(--text); }
.tb-right         { display: flex; align-items: center; gap: 14px; }
.tb-badge         { background: #eaf7f3; color: var(--teal2); border: 1px solid #b2e5d5; border-radius: 20px; padding: 4px 12px; font-size: 11px; font-weight: 600; }
.tb-badge.warn    { background: #fff8e6; color: #b37800; border-color: #ffe099; }
.tb-icon-btn      { width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--border); background: var(--card); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 16px; position: relative; }
.tb-notif         { position: absolute; top: 4px; right: 4px; width: 8px; height: 8px; background: var(--red); border-radius: 50%; border: 2px solid #fff; }

/* ── VIEWS ── */
.view        { display: none; }
.view.active { display: block; }

/* ── CARDS ── */
.card       { background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 20px; }
.card-title { font-size: 13px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .8px; margin-bottom: 14px; }

/* ── KPI GRID ── */
.kpi-grid        { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
.kpi-card        { background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 18px 20px; }
.kpi-label       { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: .8px; }
.kpi-value       { font-size: 28px; font-weight: 700; color: var(--text); margin: 6px 0 4px; }
.kpi-delta       { font-size: 12px; }
.kpi-delta.up    { color: var(--teal); }
.kpi-delta.down  { color: var(--red); }
.kpi-delta.neutral { color: var(--muted); }
.kpi-icon        { float: right; font-size: 28px; opacity: .15; margin-top: -4px; }

/* ── GRID LAYOUTS ── */
.grid-2  { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.grid-3  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.grid-65 { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }
.grid-56 { display: grid; grid-template-columns: 1fr 2fr; gap: 20px; }
.mt16 { margin-top: 16px; }
.mt20 { margin-top: 20px; }
.mt24 { margin-top: 24px; }

/* ── PAGE HEADER ── */
.page-header { margin-bottom: 24px; }
.page-title  { font-size: 22px; font-weight: 700; color: var(--text); }
.page-sub    { font-size: 13px; color: var(--muted); margin-top: 4px; }

/* ── TAGS / CHIPS ── */
.tag         { display: inline-block; border-radius: 20px; padding: 3px 10px; font-size: 11px; font-weight: 600; }
.tag-green   { background: #eaf7f3; color: var(--teal2); }
.tag-amber   { background: #fff8e6; color: #b37800; }
.tag-red     { background: #fdecea; color: #c0392b; }
.tag-blue    { background: #e8f0fb; color: #2563ab; }
.tag-navy    { background: #e6edf5; color: var(--navy); }

/* ── BUTTONS ── */
.btn               { padding: 8px 16px; border-radius: 7px; font-size: 13px; font-weight: 600; cursor: pointer; border: none; transition: all .15s; }
.btn-primary       { background: var(--teal); color: #fff; }
.btn-primary:hover { background: var(--teal2); }
.btn-outline       { background: transparent; border: 1px solid var(--border); color: var(--text); }
.btn-outline:hover { background: var(--bg); }
.btn-amber         { background: var(--amber); color: #fff; }
.btn-amber:hover   { background: #d4920a; }
.btn-sm            { padding: 5px 12px; font-size: 12px; }
.btn-row           { display: flex; gap: 10px; margin-top: 16px; }

/* ── TABLE ── */
table     { width: 100%; border-collapse: collapse; }
thead th  { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: .8px; color: var(--muted); padding: 10px 12px; border-bottom: 2px solid var(--border); }
tbody td  { padding: 11px 12px; font-size: 13px; border-bottom: 1px solid var(--border); }
tbody tr:hover { background: #f8fafc; }
tbody tr:last-child td { border-bottom: none; }

/* ── PROGRESS BARS ── */
.progress        { height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; margin-top: 6px; }
.progress-fill   { height: 100%; border-radius: 4px; background: var(--teal); }
.progress-fill.amber { background: var(--amber); }
.progress-fill.red   { background: var(--red); }

/* ── ALERT BANNER ── */
.alert-banner       { border-radius: 8px; padding: 12px 16px; display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 13px; }
.alert-banner.warn  { background: #fff8e6; border: 1px solid #ffe099; color: #7a5500; }
.alert-banner.info  { background: #e8f0fb; border: 1px solid #b8d0f5; color: #1d4e8a; }
.alert-banner.good  { background: #eaf7f3; border: 1px solid #b2e5d5; color: #0d5c3f; }
.alert-icon         { font-size: 16px; flex-shrink: 0; margin-top: 1px; }

/* ── CHART WRAPPER ── */
.chart-wrap        { position: relative; }
.chart-wrap canvas { max-height: 220px; }

/* ── DECISION CARD ── */
.decision-card    { border: 1px solid var(--border); border-radius: 10px; padding: 18px 20px; background: var(--card); margin-bottom: 14px; }
.decision-header  { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.decision-title   { font-size: 14px; font-weight: 600; }
.decision-body    { font-size: 13px; color: var(--muted); margin-top: 8px; line-height: 1.6; }
.decision-meta    { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
.decision-actions { display: flex; gap: 8px; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--border); }

/* ── CONFIDENCE BAR ── */
.confidence-bar { display: flex; align-items: center; gap: 10px; margin-top: 10px; }
.conf-label     { font-size: 11px; color: var(--muted); width: 90px; flex-shrink: 0; }
.conf-track     { flex: 1; height: 6px; background: var(--border); border-radius: 3px; overflow: hidden; }
.conf-fill      { height: 100%; border-radius: 3px; }

/* ── SCENARIO ROWS ── */
.scenario-row               { border: 1px solid var(--border); border-radius: 8px; margin-bottom: 10px; overflow: hidden; }
.scenario-row-header        { display: flex; align-items: center; padding: 12px 16px; background: #f8fafc; cursor: pointer; gap: 12px; }
.scenario-row-header:hover  { background: #f0f4f9; }
.scenario-row-body          { padding: 16px; display: none; border-top: 1px solid var(--border); }
.scenario-row-body.open     { display: block; }
.scenario-name              { font-weight: 600; font-size: 13px; flex: 1; }
.scenario-metrics           { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.sm-box  { text-align: center; }
.sm-val  { font-size: 18px; font-weight: 700; }
.sm-lab  { font-size: 11px; color: var(--muted); margin-top: 2px; }

/* ── FIBER MAP ── */
.fiber-map   { background: #1a2e44; border-radius: 8px; padding: 20px; min-height: 200px; position: relative; display: flex; align-items: center; justify-content: center; }
.fiber-label { color: rgba(255,255,255,0.4); font-size: 13px; }
.map-node    { position: absolute; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #fff; cursor: pointer; }
.map-node.site { background: var(--teal); }
.map-node.hub  { background: var(--amber); }
.map-node.pop  { background: #6c8afd; }
.map-tooltip   { position: absolute; background: rgba(0,0,0,0.85); color: #fff; font-size: 11px; padding: 6px 10px; border-radius: 5px; white-space: nowrap; pointer-events: none; display: none; z-index: 10; }
svg.fiber-lines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }

/* ── DATA LAYER PILLS ── */
.layer-pill      { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border); background: #f8fafc; margin-bottom: 8px; }
.layer-dot       { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.layer-name      { font-size: 13px; font-weight: 600; flex: 1; }
.layer-status    { font-size: 11px; color: var(--muted); }
.layer-indicator { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.ind-green { background: var(--teal); }
.ind-amber { background: var(--amber); }
.ind-grey  { background: var(--muted); }

/* ── RAG NARRATIVE ── */
.rag-box     { background: #f0f4f9; border-left: 4px solid var(--teal); border-radius: 0 8px 8px 0; padding: 14px 16px; font-size: 13px; line-height: 1.7; color: var(--text); }
.rag-sources { margin-top: 10px; font-size: 11px; color: var(--muted); }
.rag-cite    { display: inline-block; background: #e8f0fb; color: #2563ab; border-radius: 3px; padding: 1px 6px; font-size: 10px; margin-right: 4px; }

/* ── HUMAN-IN-THE-LOOP BANNER ── */
.hitl-banner { background: linear-gradient(135deg, #1a3d5c, #0f2a4a); border-radius: 10px; padding: 18px 20px; color: #fff; display: flex; align-items: center; gap: 16px; }
.hitl-icon   { font-size: 28px; }
.hitl-text   { flex: 1; }
.hitl-title  { font-weight: 700; font-size: 14px; }
.hitl-sub    { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 3px; }
.hitl-btn    { background: var(--amber); color: #fff; border: none; padding: 9px 18px; border-radius: 7px; font-weight: 600; font-size: 13px; cursor: pointer; white-space: nowrap; }

/* ── TIMELINE ── */
.timeline        { position: relative; padding-left: 28px; }
.timeline::before { content: ''; position: absolute; left: 8px; top: 8px; bottom: 8px; width: 2px; background: var(--border); }
.tl-item         { position: relative; margin-bottom: 18px; }
.tl-dot          { position: absolute; left: -24px; top: 3px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--card); }
.tl-dot.green    { background: var(--teal); }
.tl-dot.amber    { background: var(--amber); }
.tl-dot.grey     { background: var(--muted); }
.tl-dot.blue     { background: #6c8afd; }
.tl-title        { font-size: 13px; font-weight: 600; }
.tl-body         { font-size: 12px; color: var(--muted); margin-top: 3px; line-height: 1.5; }
.tl-time         { font-size: 11px; color: var(--muted); margin-top: 3px; }

/* ── SLIDER ── */
.slider-row   { display: flex; align-items: center; gap: 12px; margin: 10px 0; }
.slider-label { font-size: 12px; width: 160px; flex-shrink: 0; }
input[type=range] { flex: 1; accent-color: var(--teal); }
.slider-val   { font-size: 12px; font-weight: 700; width: 60px; text-align: right; }

/* ── TOGGLE ── */
.toggle-row           { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
.toggle-row:last-child { border-bottom: none; }
.toggle               { position: relative; display: inline-block; width: 36px; height: 20px; }
.toggle input         { opacity: 0; width: 0; height: 0; }
.toggle-slider        { position: absolute; cursor: pointer; inset: 0; background: var(--border); border-radius: 20px; transition: .2s; }
.toggle-slider::before { content: ''; position: absolute; height: 14px; width: 14px; left: 3px; bottom: 3px; background: #fff; border-radius: 50%; transition: .2s; }
.toggle input:checked + .toggle-slider            { background: var(--teal); }
.toggle input:checked + .toggle-slider::before    { transform: translateX(16px); }

/* ── MISC UTILITIES ── */
.divider        { border: none; border-top: 1px solid var(--border); margin: 20px 0; }
.text-sm        { font-size: 12px; color: var(--muted); }
.text-bold      { font-weight: 700; }
.flex-row       { display: flex; align-items: center; gap: 10px; }
.ml-auto        { margin-left: auto; }
.w100           { width: 100%; }
.inline-icon    { vertical-align: middle; }
.section-title  { font-size: 15px; font-weight: 700; margin-bottom: 14px; }
.read-only-chip { background: #e6edf5; color: var(--navy); font-size: 10px; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
