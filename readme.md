# Be Design System

**Be** — the bee as the essential organism of our ecosystem, and *to be* as harmonic unity, **leading with compassion & consent**. **Be is an app first — online-capable, fully offline-capable**: today's finding, your choices, and your notes live on-device; the network is reached only by explicit ask. **Be promotes wellness and togetherness by exposing people to biology-based research — reminding beings of their biology.** Findings about sunlight, sleep, breath, touch, and belonging, translated into small daily acts. Everything here should feel warm, unhurried, alive, and quietly precise — a sunlit meadow with footnotes, not a tech gradient.

## Sources
Built from scratch from the founder's brief in chat (no codebase, Figma, or brand files were provided): company name "Be"; purpose "promotion of wellness & togetherness through exposure to biology-based research, to remind beings of biology"; logo concept "2 pollinating bees above the logo B, together forming a circle." A local folder `openclawseed` (an agent-ethos seed: SOUL.md, AGENTS.md, IDENTITY.md) was later attached as a values source — its consent-and-honesty principles are folded into Content fundamentals where they align with Be. All assets, components, and copy here are original first-pass proposals for iteration.

## Content fundamentals
- **Sentence case everywhere** — headlines, buttons, labels. Never title case, never all-caps urgency (caps only for tiny 12px overline labels).
- **Short declaratives, present tense.** "Be here. The rest follows." Sentences land and stop.
- **"You" is warm and direct; "we" means the whole hive** (the community, not the company talking down).
- **One bee metaphor per screen, max.** The concept carries the brand; the copy shouldn't buzz. Prefer quiet nature verbs: plant, tend, settle, gather, take root.
- **Language of the body.** Be's words exude from within the organism, not the interface: presence, thought, touch, feeling, embraced, held, hugged, giggle, warmth, settle. Feelings are met, not managed; people are welcomed — hugged by the copy's warmth — never processed. All touch language is consensual by construction: touch is offered or asked for, never assumed ("one hug, asked for"; never "give a hug"). Joy is allowed — a giggle is biology too; shared laughter is bonding chemistry (Dunbar, 2022).
- **Common congruency.** One design whose meaning arrives whole through whichever channel a person has — seen, heard, touched, or thought — so sensory-enhanced and sensory-impaired, neuro-advantaged and neuro-disadvantaged meet in the same room on equal terms. Nothing is a downgraded "accessible version"; the plain, warm, predictable thing IS the design.
- **Soothing over systemic.** Everyday, warm words instead of product jargon: a "morning note", not a "digest"; "catch up with my circle", not "sync"; "let my circle see how I'm doing", not "share status". Words that welcome and accept: gently, honored, welcome in, alongside, rest is biology too.
- **Lead with compassion & consent.** Copy invites, never prescribes or shames: "try", "if you like", "when you're ready". Everything is explicit opt-in with an easy, guilt-free out ("Not yet" is always an honored answer). No streaks, FOMO, countdowns, pre-checked boxes, or dark patterns.
- **Learning with anonymity.** Be learns from interactions the way a hive does — many small honest reports, no names attached. Rules: learning starts and stays on-device (visible to the person as plain counts); what can leave is counts, never content (no words, notes, names, times); sharing is opt-in and blended into aggregates large enough that no one stands out (the design lineage here is federated learning + differential privacy, in layman's clothes); "ask Be to forget everything" is one plain ask, honored instantly; "take my counts with me" hands the person their own arithmetic as a text file. In-app: the "What Be is learning — beside you" card on You; store: `ui_kits/app/app-store.js`; card: `guidelines/brand-learning.html`.
- **Unity & harm reduction — the Charge protocol.** When a negative charge arrives (anger, grief, static), it is acknowledged, never shamed — and to acknowledge is to *comprehend* (name it; affect labeling quiets the alarm), *measure* (how much is it carrying), and *manage* (breath, distance, movement, sized to the charge). A charge met with awareness becomes signal, not harm; settled bodies settle rooms. Nothing is wasted — not even this. In-app: the Settle flow on Today; card: `guidelines/brand-charge.html`.
- **Consent principles** (adopted from the founder's openclawseed ethos, where they align):
  - *Default is no.* When consent isn't clear, don't. Unchecked boxes, quiet-hours honored, nothing auto-renews silently.
  - *Ask for the minimum.* The least data, attention, and permission the moment needs — never a blank check.
  - *Propose, don't act.* Be suggests; the person decides. Nothing irreversible without a plain, in-the-moment ask.
  - *Honesty over polish.* State limits beside strengths — "the evidence is early" is a good sentence. Never "guaranteed", "perfect", or a promise a study can't keep.
- **Science, plainly.** Every claim traces to research; cite in mono, in parentheses, journal + year — "(Nature, 2023)". Translate findings into acts, never jargon or medical advice. "May" and "tends to" over "will"; no biohacker optimization-speak.
- **No emoji. No exclamation points.** Calm optimism, never hype.
- Examples — hero: "Be here. The rest follows." · research tease: "Morning light moves your clock. (Current Biology, 2013)" · empty state: "Nothing here yet. Plant something." · error: "That didn't take. Try again." · success: "Saved. Carry on."

## Accessibility
Be is for every body — any sensory enhancement or impairment, any neurotype. The aim is common congruency (see Content fundamentals). Implemented across tokens, components, and the app:
- **Vision:** AA contrast; visible `--honey-600` focus ring on all interactive elements (`tokens/a11y.css`); states never rely on color alone (borders + ✓ + words); in-app "Larger text" switch; `prefers-contrast: more` deepens borders and muted text; OS/browser zoom works.
- **Hearing/speech:** nothing depends on sound; all feedback is visual text via live-region toasts (`role="status"`).
- **Screen readers:** semantic roles everywhere — `tablist`/`tab`/`tabpanel` (arrow-key navigation), `role="switch"`, labeled avatars, alt text, `lang="en"`.
- **Motor:** 44px+ hit targets on mobile; complete keyboard paths; no hover-only or gesture-only interactions.
- **Cognition & neurodivergence:** same three rooms in the same order, always; plain literal language; 2–3 choices per moment; no timers, nothing expires; one idea per card. Design lineage: W3C COGA "Making Content Usable for People with Cognitive and Learning Disabilities" (predictable, plain, few options, generous time).
- **Vestibular/attention:** `prefers-reduced-motion` collapses all animation; no flashing, autoplay, or countdowns (consent principles reinforce this).
See `guidelines/accessibility.html` for the specimen card.

## Research grounding
**Full layman's field guide with linked primary sources: `Logia Ledger.html`** — every "-logia" behind Be (ecology, ethology, chronobiology, neurobiology, physiology, epidemiology, plus permaculture and calm technology as design lineage), each with plain definition, the verified finding, honest caveats, and client-safe phrasing.
Seed studies the brand copy cites — real, peer-reviewed, ethos-aligned (plain findings → small acts, alone and together). The app's Today card now carries a "Why we trust it" line per finding, caveats included:
- Wright et al., "Entrainment of the human circadian clock to the natural light-dark cycle," **Current Biology**, 2013 — natural light syncs the internal clock to solar time.
- White et al., "Spending at least 120 minutes a week in nature is associated with good health and wellbeing," **Scientific Reports**, 2019 (doi:10.1038/s41598-019-44097-3).
- Holt-Lunstad et al., "Social relationships and mortality risk: a meta-analytic review," **PLoS Medicine**, 2010 — togetherness as biology.
- Lieberman et al., "Putting feelings into words: affect labeling disrupts amygdala activity," **Psychological Science**, 2007 — naming a feeling quiets the alarm.
- Balban et al., "Brief structured respiration practices enhance mood and reduce physiological arousal," **Cell Reports Medicine**, 2023 — exhale-weighted breathing settles the body (early evidence, ~100 participants — say so).
- FAO / Our World in Data — ~75% of food-crop *types* depend partly on pollinators; ~35% of production by volume. Use "types of crops" with the 75% figure; staples (wheat, rice, corn) are wind-pollinated.
- Communications Biology, 2024 — waggle-dance recruitment: colonies decide together from many small honest reports, no central decider (the Hive's model).
- Packheiser et al., "A systematic review and multivariate meta-analysis of the physical and mental health benefits of touch interventions," **Nature Human Behaviour**, 2024 — 137 studies, ~13,000 people: consensual touch eases pain, depression, and anxiety in adults.
- Murphy et al., "Receiving a hug is associated with the attenuation of negative mood that occurs on days with interpersonal conflict," **PLOS ONE**, 2018 — 404 adults, 14 days: a hug on a conflict day softens the mood dip into the next day (correlational — say so).
- Dunbar, "Laughter and its role in the evolution of human social bonding," **Phil. Trans. R. Soc. B**, 2022 — shared laughter upregulates the endorphin system and deepens felt bonding; a giggle is grooming for groups.
- W3C COGA, "Making Content Usable" — design lineage for the cognition rules, not an empirical claim.

## Visual foundations
- **Color:** warm paper (nectar `#FEFCF7…#EDDFBD`) surfaces, warm near-black ink (`#201B10`) text. Honey (`#E8A317`) is the single loud accent — CTAs, focus, highlights; meadow green (`#3E5A36`) is the grounded secondary for links and quiet actions. Status hues are earthy (moss `#4C7C46`, amber `#B97A10`, clay `#B4432D`, pond `#3D6B7A`) — muted, never neon. Max two background colors per view (page + one tint or inverse band).
- **Type:** Instrument Serif for display (26px+, tight 1.02–1.15 leading, italics for emphasis); Instrument Sans for UI/body (400 reading, 500 labels/buttons, 600 emphasis); Spline Sans Mono for tokens, data, timestamps. Scale 12/13/15/17/21/26/34/46/62/80.
- **Backgrounds:** flat warm paper; the faint honeycomb tile (`assets/pattern-comb.svg`, ≤7% ink) on large quiet surfaces (heroes, footers); ink-900 inverse bands for contrast moments. No gradients, no photography direction yet (when photos come: warm light, natural grain, no cool blue).
- **Corners:** soft and organic — pills (999) for all buttons/inputs' actions, 10px inputs, 20px cards, 28px dialogs. Nothing sharper than 6px.
- **Borders:** hairline `rgba(32,27,16,.12)`, strong `.26`; 1.5px for outline buttons and checkbox/radio strokes.
- **Shadows:** warm-tinted (never grey-blue), low and soft — `--shadow-1` rows/inputs, `-2` cards/popovers, `-3` dialogs only.
- **Motion:** gentle drift, zero bounce. Enter with `--ease-out` 200–320ms fade-up (12px); loops drift slowly (`be-float` ~3s). Things settle like a bee landing, not snapping.
- **Hover:** darken one step (honey-500→600) or tint fill (`--surface-tint`); links underline. **Press:** scale(.98) + one more step darker. **Focus:** 3px honey ring (`--focus-ring`).
- **Transparency/blur:** only the dialog overlay (`rgba(32,27,16,.44)` + 4px blur). No glassmorphism.
- **Cards:** `--surface-card` white, 20px radius, subtle border + shadow-2. Tinted variant uses nectar-100, no shadow. Inverse cards ink-900.
- **Layout:** 1120px container (720 narrow prose), generous `--space-10…13` between sections, 4px base grid.

## Iconography
- **Icon set: [Lucide](https://lucide.dev) via CDN** — 1.75px stroke, round caps/joins, `currentColor`, sized 16/20/24. Chosen (and flagged) as a substitution: no icon assets were provided. Components inline the few glyphs they need (chevron, check, x, status) as Lucide-derived paths so they work offline.
- The bee mark, orbit-dot circle, and comb pattern are the only illustrative elements. Unicode chars (· → ✓) may serve as micro-glyphs in mono text. No emoji, ever.
- Logo files: `assets/logo.svg` (color, light bg), `logo-mono.svg` (all-ink, for honey/tinted bg), `logo-inverse.svg` (nectar, for ink bg). Wordmark is set live in Instrument Serif ("Be"), not an outlined file — keep it selectable text in lockups.

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, spacing, effects, motion, base)
- `assets/` — logo.svg · logo-mono.svg · logo-inverse.svg · pattern-comb.svg
- `guidelines/` — specimen cards (colors ×4, type ×4, spacing, radius, shadows, motion, logo, pattern, voice)
- `components/core/` — Button · IconButton · Badge · Tag · Card
- `components/forms/` — Input · Select · Checkbox · Radio · Switch
- `components/navigation/` — Tabs
- `components/feedback/` — Dialog · Toast · Tooltip
- `ui_kits/app/` — the Be app, primary product (offline-first: Today · Hive · You; `app-store.js` is the versioned on-device store)
- `ui_kits/website/` — marketing site (interactive index.html + Home/Story/Join screens)
- `pwa/` — installable build (sealed app, service worker, manifest, icons, `privacy.html`)
- `GA Assessment.html` — release-readiness audit: capabilities, fortifications, trajectories, decisions
- `CHANGELOG.md` — what changed, by version
- `SKILL.md` — agent-facing usage guide

## Intentional additions
No source defined a component inventory, so the standard from-scratch set above was authored to the brand's needs (per brief). The Lucide icon link and Google-Fonts-hosted webfonts are substitutions pending real brand assets.

## Caveats
- Logo is an original first-pass of the founder's described concept — iterate with the founder.
- Webfonts load from Google Fonts CDN; no binaries are vendored. Supply licensed files to self-host.
- The website UI kit is a proposal (no existing product to recreate); its citations are real studies (see Research grounding) — verify wording against the papers before production use.
