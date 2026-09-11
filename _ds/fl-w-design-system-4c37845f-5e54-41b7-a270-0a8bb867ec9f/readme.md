# FL:W+ Design System

FL:W+ is a performance athleisure brand for every body in motion. The product promise is **mobility, flexibility and support** — the three things apparel either gives you or takes away. Garments are engineered around real range of motion rather than an idealised standard, so the wearer moves without negotiation and looks strong doing it. The brand sits where technical credibility meets elevated design: studio, street, and everything between.

Community lives under two hashtags used as real brand furniture, not decoration: **#MVMNT** (the run/train collective) and **#RVLTN**. Sign-off line, verbatim from the guidelines: `JOIN THE #MVMNT. BE THE #RVLTN`.

## Sources given to me

| Source | Path in project | What it gave |
| --- | --- | --- |
| FL:W+ Brand Guidelines, Edition 01 — 2026 (10pp PDF) | `assets/source/FLW-brand-guidelines-ed01.pdf` | Section structure, full colour system with hexes and contrast ratios, the three typefaces, art-direction rules, image-generation prompts, applications (hangtag, IG grid, campaign graphic, desktop product page) |
| Generated hero image, 4:5 | `assets/imagery/hero-split-lunge-4x5.jpg` | Section 07 HERO reference — single athlete, split lunge, hard side key, bone wall |
| Generated fabric macro, 1:1 | `assets/imagery/fabric-macro-flatlock-1x1.jpg` | Section 07 SECONDARY — four-way stretch knit, flatlock seam under tension |
| Generated group frame, 16:9 | `assets/imagery/group-frame-dawn-16x9.jpg` | Section 07 SECONDARY — collective effort, no hierarchy, dawn concrete park |

**Important limitation of the PDF.** The guidelines document is a *layout skeleton*: its headings, colour values, typeface names, art-direction copy and image prompts are real text, but the running body copy in sections 01–04 (positioning statement, mission line, register, the four pillars, the DO/DON'T tone pairs, "words we never use", clear-space and misuse diagrams, ratio rules, typography specimens) is greeked — drawn as placeholder bars with no extractable text. Anything in this design system attributed to those sections is derived from the company description and from the parts of the document that *are* legible, and is flagged below. It should be reviewed before use.

**There is no logo file.** The PDF's logo system (primary wordmark, reversed, icon mark, stacked lockup, sub-line endorsement lockup) is described but the artwork is not extractable, and no logo asset was supplied. Per policy I have not drawn or reconstructed a mark. Everywhere a mark belongs, this system sets the wordmark **FL:W+** in Archivo, tight-tracked, uppercase — with the documented constraints applied: minimum width 22 mm print / 96 px screen; reversed only on Onyx, Clay or photography.

---

## Content fundamentals

**Register.** Technical, declarative, unembellished. The brand states what a garment does and lets the claim stand. It never coaches, never congratulates, never sells transformation. Closest neighbours in tone: a spec sheet written by someone with taste.

**Person.** Second person for instruction and invitation (`JOIN THE #MVMNT`), no person at all for product and spec (`GUSSET · 4-WAY · 26"`). First person is not used — the brand does not narrate itself.

**Casing.** Three registers, used consistently:
- `UPPERCASE, WIDE-TRACKED` — navigation, labels, section markers, campaign lines, calls to action: `TOPS`, `LEGGINGS`, `OUTERWEAR`, `ACCESSORIES`, `#MVMNT`, `ADD TO BAG`, `FABRIC & FIT`, `SATURDAY 07:00 · VICTORIA PARK`.
- `Sentence case` — descriptors and explanatory copy: `Primary ink, reversed grounds`, `Minimum width 22mm print / 96px screen`.
- `lowercase` — image-generation prompts only, written as camera direction: `a single athlete in matte charcoal technical leggings…`.

**Punctuation.** The middot `·` is the brand's separator, in mono, for spec runs: `SKU FLW-RL-026 · NYLON 74 / ELASTANE 26 · MADE IN PORTUGAL · FLWPLUS.COM`. Forward slashes separate parallel spec fields: `SIZE / FABRIC / CARE / SKU`, `LEGGINGS / RANGE`. Em dashes appear as section connectors in labels: `07 — ART DIRECTION`. Exclamation marks do not appear.

**Numbers and units.** Concrete and unrounded: `22mm`, `96px`, `55 × 100MM`, `4-WAY`, `26"`, `NYLON 74 / ELASTANE 26`, `07:00`. Ratios are written `5.2:1`. Never approximate a number to look tidy.

**Emoji.** Never. Hashtags carry the community energy instead.

**Vocabulary that is on-brand:** range of motion, four-way stretch, flatlock, gusset, load, mobility, flexibility, support, in motion, collective. **Avoid** wellness-industry language, superlatives, transformation promises, and any framing that implies a standard body. (The guidelines' explicit "words we never use" list is greeked in the PDF — *please supply it and I will encode it here.*)

**Example copy set** (written to the above rules, for prototyping):
- Product title: `RANGE LEGGING / HIGH-RISE`
- Product one-liner: `Four-way knit, unbroken gusset, 26" inseam. Built for the deepest part of the movement.`
- Spec label: `SIZE / FABRIC / CARE / SKU`
- CTA: `ADD TO BAG` · secondary: `FABRIC & FIT`
- Community: `SATURDAY 07:00 · VICTORIA PARK` / `JOIN THE #MVMNT`

---

## Visual foundations

**Palette.** A warm-neutral core plus exactly one live accent. Neutrals: Onyx `#131311` (primary ink and reversed grounds), Graphite `#4A4A45` (body copy, secondary UI), Clay `#B9AEA0` (tonal blocks, packaging, lookbook), Chalk `#E4DFD6` (rules, dividers, quiet fills), Bone `#F6F3ED` (default ground). The accent range is Brass `#86622B`, Oxblood `#6E1A1F`, Pine `#17453A`, Cobalt `#2F5FD0`, Rust `#B5502F`, Amber `#E0A126`, Mist `#A8C6D8` — **one live at a time; current season is Cobalt.** Swap a season by reassigning `--accent` / `--accent-on` in `tokens/colors.css`; every component reads the alias. Type colour on accent is fixed per swatch (Bone on Brass/Oxblood/Pine/Cobalt/Rust, Onyx on Amber/Mist) and each pairing carries a documented contrast ratio.

**Type.** Archivo is the primary voice — grotesque, tightly tracked at display sizes, wide-tracked in uppercase labels. Newsreader is the secondary editorial voice, used for pull quotes and long-form lookbook copy, never for UI. IBM Plex Mono is utility only, scoped to spec data: size, fabric, care, SKU. Display type is set tight (`line-height: .98`, `letter-spacing: -.02em`); labels are set at `.75rem` uppercase with `.18em`–`.32em` tracking. Body copy runs 1.55 line-height on a ~62-character measure.

**Layout.** A 12-column grid, 24 px gap, 1440 px maximum measure, 24 px page gutter rising to 56 px at desktop. Composition is asymmetric and left-weighted, with generous negative space held on one side for type — the IG prompt asks for it explicitly. Section markers (`05 — COLOUR`) sit small, uppercase and tracked at the top-left of a block. Full-bleed imagery is the default for hero and campaign; everything else sits on the Bone ground.

**Backgrounds and texture.** Flat colour grounds only — Bone by default, Onyx or Clay for tonal blocks, the live accent for community and campaign moments. No gradients as decoration, no patterns, no illustration. The only sanctioned gradient is a bottom-up protection scrim over photography (`--protection-gradient`) so wide-tracked type stays legible; no capsules or pills behind type over images.

**Imagery.** Warm neutral grade, matte film contrast, crushed blacks, true skin texture, no retouching. Hard directional key with deep unfilled falloff; 85 mm f/2 for hero, 100 mm macro f/4 for fabric, 50 mm f/2.8 for group frames. Always mid-movement, never posed stillness, never smiling at camera. Three repeating frame types: hero (full body, mid-movement), fabric macro (stretch under load), group frame (collective effort, no hierarchy). Campaign work is duotone-ready monochrome or clean knockout silhouettes composited over the accent ground. Never: pastel wellness palette, clinical settings, soft-focus glow, visible third-party logos, spectators at frame edge.

**Corners, borders, rules.** Near-square geometry drawn from garment labelling: `--radius-card: 4px`, `--radius-hair: 2px`, square `0` for full-bleed blocks, pills reserved for the accent tag/chip only. Structure is expressed with 1 px Chalk hairlines and 2 px Onyx rules, not with boxes. Cards are a hairline and a tonal fill — not a shadow.

**Shadow.** Almost absent. `--shadow-lift` is a barely-there 2/8 px pair for a hovering control; `--shadow-panel` is for modals and drawers only. Nothing else casts.

**Transparency and blur.** Used only for the sticky header over scrolling imagery (Bone at 88% with `--blur-glass`) and for scrims. Never on cards, never as a "glass" aesthetic.

**Motion.** Short and mechanical: 120 ms for control feedback, 200 ms for state change, 360 ms for panels, 600 ms for image/section reveals, all on `cubic-bezier(.2,0,.2,1)`. Reveals are opacity plus a small upward translate (12–16 px). No bounce, no spring, no parallax, no looping ambient animation.

**States.** Hover on solid buttons darkens the fill ~8% and holds the label colour; hover on ghost/outline fills with `--chalk`; hover on links moves to a 1 px Onyx underline (never a colour change). Press shrinks nothing and darkens further (~14%) — the system prefers colour response to scale response. Focus is a 2 px Onyx outline offset 2 px (Bone outline on dark grounds). Disabled drops to 38% opacity with no cursor change beyond `not-allowed`.

**Fixed elements.** Header is sticky and shrinks its own padding on scroll; the product page keeps `ADD TO BAG` docked to the viewport bottom on mobile. Nothing else pins.

---

## Iconography

The sources contain **no icon assets** — no icon font, no sprite, no SVGs, and no iconography section in the guidelines. Nothing was available to copy in.

- **Substitution, flagged:** UI glyphs come from **Lucide** (CDN), chosen for its 1.5 px-equivalent stroke, square terminals and 24 px grid, which sit closest to the brand's technical-label geometry. Loaded per surface from `https://unpkg.com/lucide-static@latest/icons/<name>.svg` or the Lucide web font; stroke width is set to `1.5`, colour inherits `currentColor`, size steps are 16 / 20 / 24 px. **If FL:W+ has its own glyph set, send it and I will replace Lucide wholesale.**
- Icons are functional only — navigation, bag, account, size guide, close, chevrons. Never decorative, never inside a coloured circle, never paired with a label unless the label alone would be ambiguous.
- Unicode is used deliberately as typographic furniture rather than as icons: the middot `·` in spec runs, `×` in dimension strings (`55 × 100MM`), `/` between parallel fields, `—` in section markers, `"` for inseam.
- **Emoji are never used.**
- The hashtag `#` set in Archivo is the closest thing the brand has to a decorative mark, and it is type, not an icon.

---

## What is in this project

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css` (Archivo / Newsreader / IBM Plex Mono via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`.
- `assets/imagery/` — the three art-direction reference photographs, named by their guideline frame type.
- `assets/source/` — the original brand guidelines PDF.
- `scraps/` — extracted text from the PDF, kept for traceability.

---

## Index

**Root**
- `readme.md` — this guide.
- `SKILL.md` — Agent Skills front matter for use outside this project.
- `styles.css` — single entry point; `@import` lines only.
- `thumbnail.html` — homepage tile.

**Tokens** — `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/elevation.css`, `tokens/motion.css`.

**Foundation cards** — `guidelines/`: neutral core, accent range, live-accent alias, semantic aliases (Colors); display, headings & body, editorial, utility, labels & tracking (Type); spacing scale, corners & rules, elevation, motion (Spacing); wordmark, art-direction frames, type over photography (Brand).

**Components** — every component is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, exported on `window.FLWDesignSystem_4c3784`.

| Group | Components |
| --- | --- |
| `components/core/` | **Button**, **IconButton**, **Icon**, **Tag**, **SpecList**, **Wordmark** |
| `components/forms/` | **Input**, **Select**, **Checkbox**, **Radio**, **Switch**, **SizePicker** |
| `components/surfaces/` | **Card**, **ProductCard**, **Tabs**, **Dialog**, **Drawer** |
| `components/feedback/` | **Toast**, **Tooltip** |

**Intentional additions** (no source counterpart, added because the guidelines' own applications require them):
- **Icon** — wrapper for the substituted Lucide glyph set; there is no FL:W+ icon set to wrap.
- **Wordmark** — type-set stand-in because no logo artwork was supplied.
- **SpecList** — carries the documented mono spec register (`SIZE / FABRIC / CARE / SKU`, hangtag spec cards).
- **SizePicker** — the product page needs size selection, and the brand's position requires sold-out sizes to stay visible rather than disappear.
- **ProductCard**, **Drawer** — the storefront listing and bag surfaces implied by the section 09 desktop product page and its header bag affordance.

**UI kits**
- `ui_kits/storefront/` — flwplus.com at 1440px: listing, product page, community, sticky header, bag drawer, footer. Entry: `index.html`.
- `ui_kits/applications/` — hangtag (55 × 100mm), Instagram nine-tile grid, #MVMNT campaign graphic. Static HTML.

**Assets** — `assets/imagery/` (three art-direction reference frames), `assets/source/` (original guidelines PDF). No logo file; see the note at the top of this readme.

**Not built:** no slide template was supplied, so no sample slides exist. Checkout, account and search views are omitted because the guidelines do not define them.
