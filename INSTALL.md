# Be Design System — install, run, interact

## 0 · Zero-setup apps (double-click, no server, fully offline)
- **`Be App (offline).html`** — the Be app: Today's cited finding + act, Settle, Hive circle, You (consent switches, learning card, export, forget, explicit Sync). Choices persist on-device.
- **`Be Interactive Demo.html`** — the marketing site (Home / Story / Join).
Both are single files with fonts, React, and assets sealed in — they work with no network and ask nothing of the reader.

## 0.1 · Release readiness
**`GA Assessment.html`** audits the whole source for general availability — capabilities, what was fortified, trajectories, and the decisions still needed (license, contact line, hosting). `CHANGELOG.md` lists changes by version.

## 0.5 · Install on phones & desktops (PWA)
The `pwa/` folder installs like a real app on Android, iPhone, Windows, and macOS — see `pwa/README.md`. Host it over HTTPS (or localhost) and use the browser's Install / Add to Home Screen. Offline after first visit; `pwa/privacy.html` states the data practices in plain words.

## 1 · Install
1. Download the launch package (zip) and unzip it anywhere, e.g. `~/be-design-system`.
2. Keep the folder structure intact — `styles.css`, `_ds_bundle.js`, `tokens/`, `assets/`, `components/`, `ui_kits/`, `guidelines/` all resolve by relative path.

**As a Claude Code skill (optional):**
1. Copy the folder into your skills directory: `~/.claude/skills/be-design/`.
2. `SKILL.md` at the root makes it invocable; Claude reads `readme.md` and the files from there.
3. Invoke it in Claude Code when building anything Be-branded.

## 2 · Run
Pages load webfonts + React from CDNs and fetch sibling files, so serve over HTTP (don't double-click files):
```
cd be-design-system
python3 -m http.server 8000
```
Then open:
- `http://localhost:8000/ui_kits/website/index.html` — the interactive marketing site
- `http://localhost:8000/guidelines/<card>.html` — any specimen card (colors, type, voice, logo…)
- `http://localhost:8000/components/core/core.card.html` — component demos (also forms/, navigation/, feedback/)

Requirements: any modern browser; network access for fonts (Google Fonts) and React (unpkg). No build step — `_ds_bundle.js` is precompiled.

## 3 · Interact
In the marketing site: navigate Home / Story via the header; "What is Be?" opens the Dialog; "Join the hive" → the form — submit with a bad email to see the error state, a valid one to see the success Toast; the digest checkbox is opt-in by design.

## 4 · Build with it
- Link `styles.css` once — all 103 tokens (`--honey-500`, `--surface-card`, `--space-*`…) become available.
- Load `_ds_bundle.js`, then `const { Button, Card, Input } = window.BeDesignSystem_748b5f` inside a `<script type="text/babel">` block (React + Babel via the pinned CDN tags in any card — copy them).
- Each component's `*.prompt.md` shows usage; `readme.md` holds voice, foundations, consent principles, and research grounding.

## Troubleshooting
- Blank component page → you opened via `file://`; use the local server.
- Missing fonts → offline; fonts are CDN-hosted until licensed files are provided.
- `window.BeDesignSystem_748b5f` undefined → `_ds_bundle.js` missing from the folder or wrong relative path.
