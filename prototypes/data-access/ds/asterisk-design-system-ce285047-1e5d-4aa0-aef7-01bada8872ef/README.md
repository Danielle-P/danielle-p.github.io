# Asterisk Design System

The design system that powers **Knack** — a no-code application builder. Asterisk defines the visual language and component vocabulary for the Builder interface (where makers configure their apps) and, to a lesser extent, the Live App surfaces that end-users interact with.

> This design system focuses on the **Builder**: a data-heavy, function-dense environment. Live Apps use a separate, more theme-flexible system layered on top of Asterisk's foundations.

---

## Source materials

- **Figma:** *Asterisk - Components.fig* — 44 pages, 635 top-level frames. The file is the canonical source of truth for tokens, variants, and component geometry. Mounted as a virtual filesystem; browse via `/<page>/<frame>/index.jsx` pseudocode plus extracted SVG/PNG assets.
- **Repo:** `knackhq/pm-os` — private; GitHub App install pending. The Figma file alone provided enough to rebuild foundations and a working UI kit.
- Knack product context: a no-code app builder with builder-side record modeling, page layout, forms, views, tables, and runtime app rendering.

---

## Index

```
/
├── README.md                   ← you are here
├── SKILL.md                    ← agent-skill manifest (portable to Claude Code)
├── colors_and_type.css         ← CSS vars for colors, type, spacing, radii, shadows
├── assets/                     ← logos, icons, brand SVGs
├── preview/                    ← ~20 small HTML cards for the Design System tab
├── ui_kits/
│   └── builder/                ← interactive recreation of the Knack builder
└── fonts/                      ← (Inter + Space Mono are loaded from Google Fonts)
```

---

## Content fundamentals

**Voice.** Asterisk copy is *pragmatic, spare, and functional*. It reads like clear studio dialog: short labels, no marketing polish, zero jokiness inside the builder.

- **Sentence case everywhere.** Not Title Case. Examples seen in the file: "Add Element", "Button Text", "Button Types Overview", "Usage Guidelines". (Noun-phrase labels are the one exception: "Button Types Overview".)
- **Second-person for guidance, imperative for actions.** Buttons are verbs: *Add Element, + Filter, + Action, + Sorting*. Empty states explain in "you" form.
- **Descriptive, not decorative.** Property values are named after *what they do* not how they look — e.g. "Secondary Gradient · Usage: Important secondary actions that need emphasis".
- **No emoji in product UI.** None appear in the Figma file. Iconography does the emotional work.
- **Plus-prefixed adds.** "+ Filter", "+ Action", "+ Sorting" — a repeating add-affordance pattern.
- **Tokens are named semantically.** `.content-default`, `.error-emphasis`, `.radius-full`, `.spacing-sm` — not `gray-900` / `red-500`. Match this when naming new tokens.

**Tone ladder**

| Surface | Voice |
| --- | --- |
| Button labels | Imperative verb. 1–3 words. "Save changes", "Publish". |
| Help text | Plain-spoken, concrete. Avoid hedging. |
| Empty states | Explain *what this is for*, then *what to do first*. |
| Errors | Name the failure, propose a next step. No blame. |
| Success | Acknowledge and move on. Single line. |

---

## Visual foundations

**Palette.** Asterisk is a **warm-neutral, near-mono system** with a single hot-brand accent. Don't think "blue-gray + blue"; think "taupe + fuchsia".

- Neutrals carry a warm undertone (`#564D54`, `#7B7079`, `#A9A2A8`) — not cool slate.
- The brand is a **fuchsia → pink gradient** (`#86307B` → `#E61875`). This gradient is a signature motif; use it sparingly and only for *emphasis* actions (Secondary Gradient button, Gradient badge, brand moments).
- Semantic green/amber/red ramps are muted and low-chroma. Backgrounds are very light (`#E4F4E9`, `#FEF4D7`, `#FEE6E8`) with deep text (`#145229`, `#744816`, `#A72530`).
- Purple `#9747FF` only appears as admin/measurement annotations in Figma — treat it as the WIP-overlay color, not a UI color.

**Type.** **Inter** is the workhorse, loaded locally from brand font files as three optical-size cuts — **Inter 18pt** (UI, ≤16px — exposed as `var(--font-sans)`), **Inter 24pt** (subheads, 20–32px — `var(--font-subhead)`), **Inter 28pt** (display, 36px+ — `var(--font-display)`). All weights 100–900 ship locally. Interface type lives at **12 / 14 / 16** px. Medium 500 is the default weight for button text, input labels, and H2s. **Space Mono** handles formula tokens, coordinates, admin callouts, and code blocks (still loaded from Google Fonts — swap to local if offline is required).

**Radii.** A calm, limited set: `2 / 4 / 8 / 12 / 20` plus `9999` for pills. **8px is the default** for buttons, inputs, cards, and menu items. Modals round at 20px.

**Spacing.** Strict 4px grid: `2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64`. Property rows inside component docs use 16px column gaps; content sections use 40–64px vertical rhythm.

**Shadows.** Very soft, low-opacity, near-black. `0 1px 2px rgba(0,0,0,.05)` is the default resting card shadow; stacks into larger diffuse drops for menus and modals. Never colored shadows.

**Focus.** A **doubled-ring** signature: `inset 2px white` + `outer 2px near-black`. This pattern is consistent across every interactive. Destructive surfaces swap the outer ring for red.

**Hover / press.** Subtle. Secondary buttons shift to `#FBEFF9` (brand-50) on hover with a darker border. Minimal buttons adopt a neutral-100 fill on hover. No scale/translate animation on press — the system relies on color shift alone.

**Borders.** Hairline (`1px solid #D3CFD2`) at rest, stepped up to `#898088` on hover/focus. Dashed purple borders (`1px dashed #9747FF`) mark admin/WIP zones in documentation only.

**Layout.** Content regions sit on `#FAFAFA` sub-surfaces inside a white page. Admin-sized frames are huge (1450–2180px wide) because they're documentation canvases, not screens — real builder screens work at 1440.

**Backgrounds.** Flat color. No gradient backgrounds, no illustrations, no patterns, no grain. The one gradient in the system is the brand gradient, and it lives on the 28px top bar of the cover, on Gradient buttons, and on badges.

**Animation.** Minimal. The Figma file defines state snapshots (Default / Hover / Focus / Disabled) with **no motion prescriptions** — meaning: instant transitions, maybe 120–160ms ease-out on color, nothing fancy. No bounces, no scale pops.

**Dark mode.** Surfaces: `#100E10`. Text primary: `#E7E4E6`. Borders: `#3F3B3E`. Dark mode retains the fuchsia gradient for emphasis but swaps gradient-button text to `pink-400` (`#FF349A`) for accessibility — this is noted in the file.

**Imagery.** None in the builder UI. Avatars use initials-on-neutral. Photography, if it appears, is warm and lightly desaturated (see sandbox swatches); never cool, B&W, or heavily filtered.

---

## Iconography

The source file imports **Heroicons (via `react-icons`)** — there is a literal page called *"REACT-LIBRARY-https://react-icons.github.io/react-icons — Heroicons"*. Asterisk standardises on:

- **Heroicons 2** (MIT) — [heroicons.com](https://heroicons.com) — at sizes **12 / 16 / 24**.
- Solid variant for affordances/states (chevrons, check, x-mark, academic-cap, information-circle, letter-a-text).
- Outline variant for brand/emphasis moments (outline-diamond on gradient buttons).
- Custom glyphs: **Letter-A-Text** (text-field type) and **2-column-ellipsis-vertical** (table column handle) appear as Asterisk-specific additions.
- No emoji. No unicode as icons.
- Asterisk ships a 16-size "size=sm" and a 24-size "size=md" icon wrapper; gradient-button icons render white, neutral-button icons render `content-secondary`.

**In this project:** we link Heroicons from the `unpkg` CDN in UI kit components. Swap to a local copy if the builder needs to ship offline.

---

## What's in `preview/`

Small (≈700×120–400) cards registered to the Design System tab, grouped:

- **Colors** — primary palette, neutral scale, brand gradient, semantic ramps.
- **Type** — display, heading, body, label, mono specimens and scale.
- **Spacing** — 4px grid + a spacing-in-use example.
- **Components** — buttons, badges, inputs, menus, modals, switches.
- **Brand** — asterisk mark, wordmark, logo lockups.

---

## Caveats

- **Font substitution:** the Figma file references *Inter*, *Space Mono*, *Roboto Mono*, *Plus Jakarta Sans*, and *Nothing You Could Do*. Inter ships locally under `fonts/` in all three optical-size cuts (18pt / 24pt / 28pt) and all weights 100–900. Space Mono + Roboto Mono still load from Google Fonts (pixel-matching the primary specimens). Plus Jakarta Sans and Nothing You Could Do are rare enough that we haven't wired them in — **flag if you need them**.
- **Repo access:** `knackhq/pm-os` is private and the GitHub App has not been installed on the `knackhq` org. Everything here is derived from the Figma file alone — which is rich, but not authoritative about runtime behavior. **Install the App** if you want the UI kit cross-verified against source.
- **Live App system:** per the brief, the *runtime* apps use a more theme-flexible system on top of Asterisk. This design system covers the **builder** only.
