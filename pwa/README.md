# Be — installable app (PWA)

This folder is the installable build. Host it anywhere static over **HTTPS** (GitHub Pages, Netlify, Cloudflare Pages — drag-and-drop works) or test on `http://localhost`.

Install, per device:
- **Android (Chrome):** open the hosted URL → menu ⋮ → "Install app" (or the install banner). Runs standalone, offline, with the Be icon.
- **Windows / macOS (Chrome or Edge):** open the URL → install icon in the address bar → "Install Be".
- **iPhone / iPad (Safari):** open the URL → Share → "Add to Home Screen".

Offline: the service worker (`sw.js`) precaches everything on first visit; afterwards the app opens with no network. It serves from cache first and refreshes quietly in the background, so a new release shows on the next open. Data stays in the device's local storage.

Files: `index.html` (shell + SW registration) · `app.html` (the sealed app, self-contained) · `privacy.html` (data practices in plain words — link it from store listings) · `manifest.webmanifest` · `sw.js` · icons.

Releasing a new version: re-seal `app.html` from `ui_kits/app/index.html`, then bump the cache name in `sw.js` (`be-v3` → `be-v4`). Without the bump, installed copies keep the old file.

Note: for app-store distribution (true .apk/.dmg/.exe), wrap this same folder with Capacitor (Android/iOS) or Tauri (desktop) — a dev-tooling step outside this package.
