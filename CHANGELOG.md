# Changelog — Be

## 1.0.0-rc.1 — 2026-09-01 · GA fortification pass
App (`ui_kits/app/`)
- New `app-store.js`: versioned store `be.app.v2` with schema validation, migration from `be.app.demo.v1` (keeps switches and counts; day-keyed answers start fresh), capped log (400), safe writes, forget, export.
- Answers keyed by date, not by finding (previously every finding looked answered after one 8-day cycle). "Change my mind" retracts that day's count.
- Finding rotation by running day count (was day-of-month, which repeated within a month and reset monthly).
- Viewport meta added; the frame fills phone screens edge to edge with safe-area padding.
- Error boundary with a gentle recovery; plain fallback if a part fails to load; notice when storage is unavailable (private mode / full).
- You: "What Be is learning — beside you" card surfaced (counts per finding, charges met, days noted); "Take my counts with me" (text export); "Ask Be to forget everything" (one plain confirmation).
- Hive: labeled a sample circle; includes you only when sharing is on; states exactly what your circle can see.
- Sync is honest: with sharing off it says nothing left your hands.
- Settle records only the outcome (moved / still here) as a count.
- Toasts last 6 s and pause on hover/focus (were 3.2 s); tabpanel labelled by its tab.

Components
- Tabs: roving tabindex, Home/End, optional `tabId`/`panelId` per item, `lg` size documented.
- Dialog: focus moves into the dialog, is trapped (Tab wraps), returns to the opener on close; `aria-labelledby` on the title.

PWA (`pwa/`)
- Service worker v2: cache-first with background refresh, same-origin only, shell fallback for navigations only, `SKIP_WAITING` message.
- Manifest: `id`, `lang`, `dir`, `orientation`, `categories`, split icon purposes.
- New `privacy.html` (precached); `color-scheme`, `referrer`, description, favicon metas; noscript notice.

Website
- Viewport and color-scheme metas; dead "Field notes" link retired.

Docs
- New `GA Assessment.html`; readme, INSTALL, app and PWA READMEs updated; brand-learning card wording reconciled ("one plain ask").
- Sealed builds re-generated: `Be App (offline).html`, `Be Interactive Demo.html`, `pwa/app.html`.

## 0.9 — earlier threads
Design system, components, guidelines, UI kits, research grounding, guides, sealed builds.
