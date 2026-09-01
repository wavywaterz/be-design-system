# Be — app kit (the primary product)

Be is an **app first**: online-capable, fully offline-capable. This kit is the interactive proposal: **Today** (one cited finding + the act it suggests; "Not today" is always honored; the Settle flow for when a charge arrives), **Hive** (your circle, no streaks or rankings — a labeled sample until a circle service exists), **You** (consent switches — everything defaults to off — plus the learning card, export, forget, offline status, and an honest "Catch up with my circle").

Files: `index.html` (shell: tabs, error boundary, toasts) · `app-store.js` (on-device store) · `app-data.js` (findings) · `Today.jsx` · `Settle.jsx` · `Hive.jsx` · `You.jsx`.

## Store (`app-store.js`)
`localStorage` key `be.app.v2`: `{v, tab, acts:{"YYYY-MM-DD": "yes"|"no"}, prefs:{bigText, digest, quiet, share}, log:[{id, c:"yes"|"no", d, k}]}`. Loading validates the shape and migrates `be.app.demo.v1` (switches and counts kept; day-keyed answers start fresh). The log is capped at 400 entries. `BE_STORE.day` gives the local day key, running day number, and today's finding (even rotation). `forget()` clears both keys; `exportText()` renders counts only.

## Learning with anonymity
Every "I'll try it" / "Not today" / Settle outcome appends a count entry on-device. You shows them as plain arithmetic ("tried 3 · rested 1"). Rules, unchanged: learning stays beside the person; only counts may ever leave, never content; sharing is opt-in and blended into aggregates large enough that no one stands out; forgetting is one plain ask, honored instantly.

## Phone fit
Below 480px wide the frame fills the viewport with safe-area padding; on short-but-wide windows it keeps its 390px column at full height; otherwise it previews as a 390×760 device card.
