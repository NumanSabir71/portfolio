# Nouman Portfolio — Project Documentation

> **Purpose:** Single source of truth for this codebase. Read this before making changes so structure, content, design system, and interactive behavior stay consistent.

**Last documented:** 2026-07-14

---

## 1. Overview

Personal single-page portfolio for **Nouman**, a WordPress / WooCommerce / PHP developer based in Lahore, Pakistan.

| Item | Detail |
|------|--------|
| Stack | React 19 + Vite 8 |
| Routing | None — one scrollable page with hash anchors |
| Styling | Global CSS in `src/App.css` (primary). `src/index.css` is leftover Vite starter and is largely overridden |
| Icons | Font Awesome 6.7.2 (CDN in `index.html`) |
| Fonts | **Bricolage Grotesque** (headings), **Outfit** (body) — Google Fonts |
| Backend / CMS | None |
| Contact form | Client-side mock only (no email/API) |

**Brand name in UI:** `N.` (logo) / `Nouman` (hero name)

**Page title:** `Nouman — WordPress Developer`

---

## 2. How to run

```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # ESLint
```

Config files:

- `vite.config.js` — React plugin only (default Vite setup)
- `eslint.config.js` — flat ESLint: recommended + react-hooks + react-refresh
- `package.json` — name `my-portfolio`, `"type": "module"`

---

## 3. Folder structure

```
my-portfolio/
├── index.html                 # HTML shell, fonts, FA CDN, title
├── package.json
├── vite.config.js
├── eslint.config.js
├── PROJECT.md                 # This file
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx               # React root mount
    ├── App.jsx                # Page composition + initUI()
    ├── App.css                # ALL portfolio styles (~1350 lines)
    ├── index.css              # Vite default tokens (mostly unused / overridden)
    ├── assets/
    │   ├── react.svg          # unused starter asset
    │   └── vite.svg           # unused starter asset
    └── components/
        ├── index.js           # Imperative UI (typed text, menus, filters, slider, form)
        ├── Header.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Offer.jsx          # Services section (#services)
        ├── Portfolio.jsx      # Projects (#projects)
        ├── Journey.jsx        # Experience & Education (#timeline)
        ├── Stats.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx         # Includes back-to-top button (#btt)
```

---

## 4. Page architecture

`App.jsx` mounts sections in this fixed order:

1. `Header` — fixed navbar + mobile drawer
2. `Hero` — intro, typed roles, CTAs, profile visual
3. `About`
4. `Skills`
5. `Offer` (services)
6. `Portfolio` (projects + category filter)
7. `Journey` (experience / education tabs)
8. `Stats` (animated counters)
9. `Testimonials` (slider)
10. `Contact` (info + form)
11. `Footer` (+ `#btt` back-to-top)

On mount, `useEffect` calls `initUI()` from `components/index.js` and returns its cleanup.

```jsx
useEffect(() => {
  return initUI();
}, []);
```

There is **no React Router**, **no state management library**, and almost **no React state** — interactivity is DOM-driven.

---

## 5. Section IDs (anchor targets)

| Section | Component | `id` | Nav label |
|---------|-----------|------|-----------|
| Hero | Hero | `#hero` | (logo) |
| About | About | `#about` | About |
| Skills | Skills | `#skills` | Skills |
| Services | Offer | `#services` | Services |
| Projects | Portfolio | `#projects` | Projects |
| Journey | Journey | `#timeline` | Experience |
| Stats | Stats | `#stats` | (not in nav) |
| Testimonials | Testimonials | `#testimonials` | Testimonials |
| Contact | Contact | `#contact` | Contact / Hire Me |

When adding a section: give it an `id`, add nav links in `Header.jsx` (desktop + mobile), and optionally Footer.

---

## 6. Component reference

### Header.jsx
- Fixed `#navbar`. Gets class `stuck` after scroll > 55px (via `initUI`).
- Desktop links in `.nav-center`; Hire Me CTA; GitHub/LinkedIn placeholders (`href="#"`).
- Mobile: `#hamburgerBtn`, `#mobileOverlay`, `#mobileMenu`. Mobile links use class `.ml` so click closes the menu.
- **Note:** This is the only component consistently using `className` (React-correct). Most others still use HTML-style `class=`.

### Hero.jsx
- Decorative orbs (`.orb-1/2/3`).
- Availability pill: “Open to new opportunities”.
- Name display: “Hello, I'm” + **Nouman**.
- Typed role line: `#typedText` + `.typed-cursor` — roles driven by JS (see §7).
- CTAs: View My Work → `#projects`, Get In Touch → `#contact`.
- Mini stats: 5+ years, 50+ projects, 30+ clients, 99% satisfaction.
- Profile visual: letter `N` in ring + floating tech badges (WordPress, PHP, WooCommerce, Plugins) + “5+ Years” badge.
- Scroll cue at bottom.

### About.jsx
- Two-column: visual (emoji placeholder 👨‍💻 + “50+ Projects Delivered” float) + copy.
- Chips: Pakistan; English, Urdu; Open to Remote; BS Computer Science.
- CTAs: Download CV (`href="#"` placeholder), View Portfolio → `#projects`.

### Skills.jsx
- Six skill cards with proficiency bars (`.sk-fill` widths) and tags:
  1. WordPress Development — 95%
  2. PHP & MySQL — 90%
  3. WooCommerce — 88%
  4. Plugin Development — 85%
  5. Frontend (HTML/CSS/JS) — 92%
  6. Performance & SEO — 87%
- “Also proficient in” pill shelf (WordPress, PHP, JS, WooCommerce, Elementor, ACF, WPML, Sass, MySQL, GitHub, WP Rocket, Cloudflare).

### Offer.jsx (Services)
- Six service cards: Custom WP Dev, WooCommerce Stores, Custom Plugins, Speed & SEO, Security & Maintenance, Migration.

### Portfolio.jsx
- Filter buttons (`.fbtn`) with `data-filter`: `all` | `wordpress` | `woocommerce` | `plugin`.
- Six project cards (`.proj-card`) with `data-cat` matching filters.
  1. LuxeCart — Fashion E-Commerce (`woocommerce`)
  2. BuildCo — Construction Company (`wordpress`)
  3. BookEase — Appointment Plugin (`plugin`)
  4. DailyPulse — News Portal (`wordpress`)
  5. EduShop — Course Marketplace (`woocommerce`)
  6. ReportGen — WooCommerce Analytics (`plugin`)
- Overlay links are placeholders (`#`).

### Journey.jsx
- Tabs: `.tbtn` with `data-target="exp"` | `"edu"`; panels `#exp` / `#edu`.
- Experience: Senior WP Dev @ PixelForge (2022–Present) → WP Dev @ Digital Craft (2020–2022) → WC Dev @ ShopReady (2019–2020) → Junior @ WebWorks (2018–2019).
- Education: BS CS (UET, 2015–2019), Google UX Cert (2022), AWS Developer Associate (2021), Meta Front-End Cert (2020).

### Stats.jsx
- Four `.stat-n` counters with `data-target` + optional `data-suffix`:
  - 50+, 30+, 5+, 99%

### Testimonials.jsx
- Track `#sliderTrack` with 6 `.tcard` slides; dots `#sliderDots`; prev/next `#prevBtn` / `#nextBtn`.
- Clients: Sarah Kim, Marcus Rodriguez, Lisa Anderson, James Park, Tom Chen, Nina Williams.

### Contact.jsx
- Info: `hello@nouman.dev`, `+92 300 0000000`, Lahore, Pakistan.
- Social icons: GitHub, LinkedIn, X, Dribbble, Instagram (all `#`).
- Form `#contactForm`: first/last name, email, service select, message. Submit handled in JS (mock).

### Footer.jsx
- Brand blurb, nav, services, contact columns.
- Copyright 2026.
- `#btt` back-to-top button lives here (outside `<footer>` in the fragment).

---

## 7. Imperative UI (`src/components/index.js`)

`initUI()` wires all interactions after React paints the DOM. It returns a cleanup function that removes listeners / observers / timers.

| Feature | Mechanism | Key selectors / data |
|---------|-----------|----------------------|
| Typed roles | setTimeout loop | `#typedText`; roles: WordPress Developer, WooCommerce Expert, PHP Developer, Theme & Plugin Builder |
| Navbar stuck | scroll listener | `#navbar` → class `stuck` when `scrollY > 55` |
| Back to top | scroll + click | `#btt` → `show` when `scrollY > 450`; smooth scroll to top |
| Mobile menu | click | `#hamburgerBtn`, `#mobileMenu`, `#mobileOverlay`; `.ml` closes |
| Smooth hash scroll | click on `a[href^="#"]` | `scrollIntoView({ behavior: 'smooth' })` |
| Scroll reveal | IntersectionObserver | `.sr` → adds `.vis`; optional `.left` / `.right`; delays `.d1` `.d2` `.d3` |
| Skill bars | IntersectionObserver | `.sk-fill` → adds `.go` once |
| Counters | IntersectionObserver | `.stat-n[data-target]` animates to target + suffix |
| Journey tabs | click | `.tbtn[data-target]` toggles `.on` on buttons + `.tab-panel` |
| Project filter | click | `.fbtn[data-filter]` dims non-matching `.proj-card` by `data-cat` |
| Testimonials | auto + buttons | `#sliderTrack`, `#sliderDots`, `#prevBtn`, `#nextBtn`; slides/view: 3 (≥1024), 2 (≥640), 1; auto every 5s |
| Contact form | submit | Fake delay 1.4s, success UI 3s, then reset — **no network** |

### When changing interactive sections

1. Keep the required IDs/classes/`data-*` attributes expected by `initUI`, **or** update `initUI` in the same change.
2. If you add a new DOM element that needs listeners, register them in `initUI` and push a cleanup.
3. Do not assume React re-renders re-bind events — `initUI` runs once on mount.

---

## 8. Design system (`src/App.css`)

Primary look is **dark neon** (not the light tokens in `index.css`).

### CSS variables (`:root` in App.css)

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#06060F` | Page background |
| `--surface` | `#0C0C1E` | Cards / panels |
| `--surface2` | `#111128` | Elevated surfaces |
| `--border` | purple translucent | Accent borders |
| `--border-s` | white translucent | Subtle borders |
| `--purple` / `--purple-l` / `--purple-xl` | `#7C3AED` / `#9D6EF8` / `#C4B5FD` | Brand purple scale |
| `--cyan` | `#22D3EE` | Accent |
| `--pink` | `#F472B6` | Accent |
| `--gold` | `#FCD34D` | Accent |
| `--green` | `#34D399` | Success / accent |
| `--text` | `#F1F5F9` | Body text |
| `--muted` | `#8892A4` | Secondary text |
| `--grad` | purple → cyan | Primary buttons, logo |
| `--grad-warm` | purple → pink | Warm gradient |
| `--grad-text` | lavender → cyan | Highlighted title words (`.hi`) |
| `--r` / `--r-s` | 18px / 11px | Radii |
| `--ease` | `cubic-bezier(.4,0,.2,1)` | Motion |

### Typography
- Headings: `Bricolage Grotesque`
- Body / UI: `Outfit`
- Section eyebrow: `.label` (uppercase pill)
- Titles: `.section-title` with optional `.hi` for gradient word
- Description: `.section-desc`

### Shared UI
- Layout: `.container` (90%, max 1180px); `section` padding ~110px
- Buttons: `.btn` + `.btn-primary` | `.btn-ghost`
- Scroll reveal: `.sr` (+ `.left` / `.right` / `.vis`); staggered `.d1`–`.d3`
- Noise texture on `body::before`; thin purple scrollbar

### CSS section map (in App.css)
1. Design tokens  
2. Typography utilities  
3. Layout  
4. Buttons  
5. Navigation (incl. mobile)  
6. Footer / back-to-top  
7. Hero (+ profile visual)  
8. About, Services, Projects, Timeline, Stats, Testimonials, Contact (inline sections through the file)  
9. Skills (labeled `SKILLS`)  
10. Scroll reveal  
11. Entrance keyframes  
12. Responsive breakpoints: **1024**, **768**, **480**

### Responsive behavior
- **≤1024:** Hero stacks (visual above text); grids → 2 columns; footer → 2 cols  
- **≤768:** Hide desktop nav + Hire Me; show hamburger; single-column grids; contact stacks; stats 2×2  
- **≤480:** Hero badge positions / mini-stats wrap  

---

## 9. Content & personalization checklist

Things that are still placeholder or sample data (update when going live):

- [ ] Social URLs (`href="#"`) in Header, Contact, Footer  
- [ ] Download CV link (`About`)  
- [ ] Project live/demo and GitHub links  
- [ ] Phone number `+92 300 0000000`  
- [ ] Email `hello@nouman.dev` (confirm domain)  
- [ ] Contact form backend / EmailJS / Formspree / etc.  
- [ ] Real profile photo (Hero ring + About currently use letter/emoji)  
- [ ] Favicon / brand mark if desired  
- [ ] Experience/education/project copy if sample data should be replaced  

Positioning claim to preserve unless intentionally rebranded: **WordPress Developer / WooCommerce / custom themes & plugins / performance**.

---

## 10. Known technical notes

1. **`class` vs `className`:** Most section components use HTML `class=` / `for=` / `novalidate` attributes. React expects `className`, `htmlFor`, `noValidate`. Header is the correct pattern. Prefer `className` for all new/edited JSX.
2. **Invalid inline style strings:** Some Journey styles use `marginRight: '6px;'` (semicolon inside string). Prefer `marginRight: '6px'`.
3. **`index.css` vs `App.css`:** Dual `:root` definitions; App.css owns the portfolio look. Cleaning up `index.css` (or merging needed resets into App.css) would reduce confusion.
4. **StrictMode double mount:** `initUI` cleans up on unmount, so it should be safe, but effects that rely on one-shot observers re-run in StrictMode in development.
5. **No tests / no CI config** in the repo root beyond ESLint.
6. **Unused assets:** `src/assets/react.svg`, `src/assets/vite.svg`.
7. **Form:** UX-only success state; do not treat as production-ready without a real endpoint.

---

## 11. Conventions for future changes

### Adding a new section
1. Create `src/components/NewSection.jsx`.
2. Import and place it in `App.jsx` in the desired order.
3. Add `#id` matching nav anchors.
4. Use existing utilities: `.container`, `.label`, `.section-title`, `.section-desc`, `.sr`, `.btn`.
5. Style in `App.css` near related sections; reuse tokens — avoid new purple/cyan inventiveness unless redesigning.
6. Update Header (desktop + mobile) and Footer if it should be linked.
7. If it needs JS behavior, extend `initUI` with cleanup.

### Editing copy
- Keep copy inside the relevant component file (content is not centralized).
- Keep role list in sync between Hero initial `#typedText` text and the `roles` array in `initUI`.

### Changing the design
- Edit tokens at the top of `App.css` first; most colors derive from them.
- Preserve fonts unless intentionally changing brand voice.
- Maintain dark-theme lighting (surfaces, borders, gradients).

### Converting interactions to React
If migrating away from `initUI`, replace one feature at a time and remove the corresponding `initUI` block so listeners are not duplicated.

---

## 12. Dependency snapshot

**Runtime:** `react`, `react-dom` (^19.2)

**Dev:** `vite`, `@vitejs/plugin-react`, `eslint` + React ESLint plugins, `@types/react` / `@types/react-dom`

No UI libraries (no MUI, Tailwind, Framer Motion, etc.). Motion is CSS + vanilla JS observers/timers.

---

## 13. Quick mental model

```
index.html → fonts + FA + #root
main.jsx   → mount <App />
App.jsx    → layout sections + initUI()
components/*.jsx → static markup / content
components/index.js → all interactive behavior
App.css → exclusive visual system for the portfolio
```

Treat this as a **content-heavy marketing page** with a thin React shell and a thick CSS + DOM script layer — not as a typical React SPA.
