---
name: Obsidian Lumina
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
  surface-base: '#0A0A0F'
  surface-elevated: '#12121A'
  surface-overlay: '#181824'
  surface-border: '#272738'
  surface-border-subtle: '#1A1A28'
  text-primary: '#F8FAFC'
  text-muted: '#94A3B8'
  status-online: '#10B981'
typography:
  display:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-pill:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-precision, tactile, and engineering-centric atmosphere tailored for high-caliber software developers. It balances deep obsidian atmospheric voids with targeted luminescent data points, signaling technical rigor, architectural clarity, and bespoke digital craftsmanship. 

The aesthetic is rooted in dark-mode glassmorphism and modern technical minimalism. Rather than loud ornamentation, it communicates power through structural discipline, micro-borders with subtle light-leak gradations, restrained neon accents (electric violet and cyan), and an organic bento grid rhythm. The tone is confident, analytical, and forward-leaning—engineered to impress engineering leads, founders, and discerning design-technologists.

## Colors

The palette is engineered around luminous contrast against deep obsidian black. The base background (`#0A0A0F`) recedes entirely, allowing floating containers (`#12121A`) to define spatial logic. 

- **Primary (`#6366F1` Electric Violet / Indigo):** The operational core. Used for active navigation indicators, key focus highlights, primary interactions, and terminal prompt glyphs.
- **Secondary (`#06B6D4` Luminous Cyan):** Used sparingly for secondary callouts, metrics data, code keywords, and interactive link states.
- **Tertiary (`#10B981` Emerald Pulse):** Reserved exclusively for live telemetry, availability badges ("Open to Work"), and positive build/test indicators.
- **Neutrals:** Carefully weighted from slate-toned whites (`#F8FAFC`) to muted slate (`#94A3B8`) to eliminate stark white glare while maintaining contrast ratios exceeding WCAG AAA standards.

## Typography

The typographic system relies on **Geist** for crisp, geometric body and structural headings, complemented by **JetBrains Mono** for developer primitives, telemetry tags, metrics, and code references.

- **Headlines:** Use tight letter spacing (-0.02em to -0.04em) and confident weights (600 to 700) to replicate modern editorial developer logs and high-end software brand interfaces.
- **Body:** Engineered for dark-mode readability with generous line heights (`1.6` to `1.7`) using balanced weights to prevent optical bloom against dark backgrounds.
- **Labels & Micro-data:** JetBrains Mono provides systematic precision. Use uppercase tracking (`0.06em`) for category pills and metadata badges.

## Layout & Spacing

The structural layout is based on a flexible 12-column bento grid for desktop displays, adapting to 4 columns on mobile and 8 columns on tablet viewports. The maximum layout boundary is constrained to `1240px` to maintain optimal scanning width.

- **Bento Framework:** Components in the portfolio (featured projects, GitHub stats, tech stacks, experience timeline) arrange in modular tiles. Standard tiles span 4, 6, 8, or 12 columns with unified internal card padding (`space-lg` to `space-xl`).
- **Responsive Adaptations:**
  - **Desktop (1024px+):** Multi-column asymmetric bento layouts with generous outer margins (`margin-desktop`) and `1.5rem` gutters.
  - **Tablet (768px - 1023px):** Collapses to 2-column or 1-column balanced cards with `2rem` margins.
  - **Mobile (< 768px):** Strict 1-column stack; horizontal scrolls for technology tag clusters to conserve vertical real estate.

## Elevation & Depth

Visual depth is achieved through translucent glass layers, fine linear gradients, and luminescent backdrops rather than muddy drop shadows.

- **Glassmorphism Layers:**
  - Standard containers use `rgba(18, 18, 26, 0.7)` with `backdrop-filter: blur(12px)`.
  - Floating overlays (modals, active headers) use `rgba(24, 24, 36, 0.85)` with `backdrop-filter: blur(20px)`.
- **Ghost Outlines:** Containers carry a `1px` border defined by a subtle linear gradient: running from `rgba(255, 255, 255, 0.12)` at the top edge to `rgba(255, 255, 255, 0.03)` at the bottom edge, simulating top-lit edge refraction.
- **Ambient Glows:** High-priority cards (e.g., featured project, available status) emit an ultra-diffused radial halo (`rgba(99, 102, 241, 0.12)` blur radius `60px` to `80px`) situated behind the container, creating high-tech spatial separation without clutter.

## Shapes

The design system standardizes on crisp, controlled corners (`roundedness: 2`). Base bento boxes, major cards, and viewport modals adopt `1rem` (16px) radii (`rounded-lg`), while interactive inputs, internal badges, and action buttons use `0.5rem` (8px). 

Special exceptions apply to micro-status indicators and tool pill tags, which utilize fully circular profiles (`rounded-full`) to clearly distinguish informational metadata from structural cards.

## Components

### Buttons
- **Primary:** Violet fill (`#6366F1`) fading slightly to `#4F46E5`, crisp white text, `0.5rem` radius, subtle top inner-bevel shadow (`inset 0 1px 0 rgba(255, 255, 255, 0.2)`). On hover: scale to `1.02` with an ambient glow (`box-shadow: 0 0 20px rgba(99, 102, 241, 0.4)`).
- **Secondary / Glass:** Background `rgba(255, 255, 255, 0.03)`, `1px` border `rgba(255, 255, 255, 0.1)`, muted text. Hover shifts border color to `#06B6D4` with text transitioning to white.

### Status Indicators
- **Availability Beacon:** A dual-ring pulsating dot. Central solid green circle (`#10B981`, 8px) enclosed within an infinitely pinging/expanding radar ring (`rgba(16, 185, 129, 0.3)`), paired with a JetBrains Mono pill reading `AVAILABLE FOR ROLES`.

### Bento Cards & Project Tiles
- Translucent dark slate background with top-to-bottom edge refraction borders.
- Hover interactions feature dynamic cursor-following spotlight effects using a radial gradient mask (`rgba(255, 255, 255, 0.06)`).
- Interactive project links display an upward-diagonal monospace arrow (`↗`) that translates 2px top-right on hover.

### Tech Stack Chips
- Built with monospace typography (`label-pill`), uppercase tracking.
- Styled with `rgba(255, 255, 255, 0.04)` fill, `1px` subtle border, and `0.25rem` radius.
- Optional category tinting: Cyan border accent for frontend/tooling, Violet border accent for systems/backend.

### Inputs & Terminal Fields
- Dark recessed fill (`#0A0A0F`), `1px` border `#272738`.
- Focus state replaces the border with an active cyan glow (`#06B6D4`) and zero outline offset.
- Monospace prefix markers (`> ` or `$ `) default to muted violet.

### Interactive Code / Stat Blocks
- Monospace-driven numeric callouts with bold weight, labeled underneath in uppercase muted slate.
- Embedded snippet previews feature a fake terminal traffic-light header (subtle neutral dots) and line-number styling.