# IET Service Point — Premium Website Design System & UI/UX Direction

**Project:** `ietservice.lk`  
**Brand:** IET Service Point  
**Primary market:** Jaffna + Northern Province, Sri Lanka  
**Primary business position:** TVS Authorized Three-Wheeler Dealer + Authorized TVS Genuine Parts Seller  
**Document purpose:** Brand visual system, UI/UX rules, art direction, motion system and anti-generic design constraints for the new website.

---

## 1. Design North Star

The website must feel like a **premium automotive service brand**, not a local garage template and not an AI-generated landing page.

The intended visual character is:

- **Apple-like:** calm, disciplined whitespace, product-stage storytelling, premium materials, controlled depth, excellent typography.
- **Uber-like:** high contrast, direct hierarchy, fast task completion, strong conversion CTAs, confident geometry.
- **IET-specific:** mechanical geometry, gear/ring motifs, orange energy lines, deep blue service identity, real workshop evidence, TVS three-wheeler authority.

Do **not** copy Apple or Uber layouts, fonts, components or branded assets. Use their design principles only as reference points.

### Experience statement

> **Precision service, presented with premium confidence.**

The site should look like a growing service network that brands, customers and future partners can trust.

---

## 2. Brand Color System

The core brand colors below are derived from the supplied IET logo and then extended into a premium digital system.

### 2.1 Core logo-derived colors

| Token | Hex | Usage |
|---|---:|---|
| `iet-blue` | `#0267A4` | Primary service blue, links, data accents |
| `iet-cyan` | `#0998D3` | Highlights, active states, subtle glow |
| `iet-orange` | `#F36102` | Main brand energy, CTA, key emphasis |
| `iet-red` | `#EF2001` | High-intensity accent; use sparingly |
| `iet-gold` | `#FA980D` | Anniversary, milestone, premium accent |
| `iet-brown-outline` | `#4B1F05` | Logo artwork only; avoid as UI text |

### 2.2 Premium digital foundation colors

| Token | Hex | Purpose |
|---|---:|---|
| `midnight-950` | `#061521` | Premium dark hero/footer |
| `midnight-900` | `#081C2E` | Dark panels |
| `midnight-800` | `#0C2942` | Elevated dark surfaces |
| `ink-950` | `#0A111A` | Primary text |
| `ink-700` | `#334155` | Secondary text |
| `ink-500` | `#64748B` | Muted text |
| `surface-50` | `#F7F9FB` | Soft page section |
| `surface-100` | `#EEF3F7` | Dividers / cards |
| `white` | `#FFFFFF` | Main background |
| `border` | `#D9E2EA` | Neutral borders |

### 2.3 Recommended semantic tokens

```css
:root {
  --brand-blue: #0267A4;
  --brand-cyan: #0998D3;
  --brand-orange: #F36102;
  --brand-red: #EF2001;
  --brand-gold: #FA980D;

  --bg: #FFFFFF;
  --bg-soft: #F7F9FB;
  --bg-dark: #061521;
  --surface-dark: #081C2E;

  --text: #0A111A;
  --text-secondary: #334155;
  --text-muted: #64748B;
  --text-on-dark: #F8FAFC;

  --border: #D9E2EA;
  --focus: #0998D3;

  --cta: #F36102;
  --cta-hover: #DB5200;
}
```

### 2.4 Premium gradients

Use gradients as **materials**, not decoration.

**Orange energy**
```css
linear-gradient(135deg, #FA980D 0%, #F36102 55%, #EF2001 100%)
```

**Service blue**
```css
linear-gradient(135deg, #0267A4 0%, #0998D3 100%)
```

**Night service**
```css
linear-gradient(145deg, #061521 0%, #081C2E 55%, #0C2942 100%)
```

**Metal reflection**
```css
linear-gradient(110deg, #F8FAFC 0%, #DCE5EB 35%, #FFFFFF 55%, #C9D5DE 100%)
```

### 2.5 Color balance

Target visual distribution on normal pages:

- White / light neutral: **55–65%**
- Midnight/navy: **20–25%**
- IET orange: **8–12%**
- IET blue/cyan: **5–8%**
- Red/gold combined: **<3%**

This prevents the website from becoming visually noisy.

### 2.6 Color usage rules

**Orange**
- primary CTA
- key words
- active progress
- small energy lines
- important numbers

**Blue**
- authority
- service information
- links
- secondary CTA
- diagrams

**Red**
- do not use as a general CTA color
- only for TVS-related visual accents where brand-appropriate
- alerts only when semantic meaning is needed

**Gold**
- milestones
- first anniversary
- premium achievement
- not everyday service UI

---

## 3. Typography

The website should feel technical, premium and human.

### Recommended web-safe stack

**Primary UI / body:** `Manrope`  
**Display / numbers / mechanical labels:** `Sora`  
**Tamil:** `Noto Sans Tamil`  
**Sinhala:** `Noto Sans Sinhala`

Fallback:
```css
font-family: Manrope, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Typography strategy

- Use **large confident display text**, but fewer words.
- Avoid tiny uppercase text everywhere.
- Do not mix more than 2 Latin typefaces.
- Avoid script fonts except for occasional founder signature image.
- Use tabular numerals for phone numbers, metrics and price tables.

### Desktop scale

| Role | Size |
|---|---:|
| Hero display | `clamp(3.5rem, 7vw, 7.5rem)` |
| Section H2 | `clamp(2.3rem, 4vw, 4.5rem)` |
| H3 | `1.5–2rem` |
| Body large | `1.125–1.25rem` |
| Body | `1rem–1.125rem` |
| Label | `0.8125–0.875rem` |

### Hero typography example

**Line 1**  
`THREE-WHEELER CARE`

**Line 2 in orange**  
`BUILT ON TRUST.`

Subtext:
> TVS authorized three-wheeler support, genuine parts and dependable service from Inuvil, Jaffna.

---

## 4. Visual Language

### 4.1 Mechanical geometry

Build the identity around three recurring shapes:

1. **Gear arc** — derived from the IET logo
2. **Service line** — thin orange horizontal/diagonal line representing motion
3. **Precision ring** — circular ring used around parts, photography and metrics

Never use random blobs.

### 4.2 Corner language

Avoid every section/card having the same generic `24px` rounded corners.

Recommended:
- Buttons: `12–14px`
- Standard cards: `16px`
- Hero media: asymmetric `24px 24px 80px 24px`
- Technical cards: `8–12px`
- Partner panels: sharp / slightly cut corners
- Milestone panels: circular/ring treatment

### 4.3 Borders

Prefer:
- 1px neutral line
- 1px orange energy line
- inset line
- mechanical split lines

Avoid thick glassmorphism borders.

### 4.4 Shadows

Use physically believable elevation.

```css
--shadow-soft: 0 16px 50px rgba(6, 21, 33, 0.10);
--shadow-dark: 0 24px 80px rgba(2, 8, 20, 0.32);
--shadow-orange: 0 18px 60px rgba(243, 97, 2, 0.18);
```

Avoid glowing every element.

---

## 5. Photography and Media Direction

Real photography is a major competitive advantage.

### Required photography

- IET exterior
- TVS branded board
- clean service bays
- technicians in IET workwear
- three-wheelers being serviced
- genuine TVS parts packaging
- tool closeups
- oil/greasing/service work
- happy customer handovers
- J. Sujinthan
- S. Jeyakumar (M.E)
- first-anniversary evidence
- future equipment / branch expansion when real

### Photo grading

Target:
- slightly warm highlights
- controlled shadows
- realistic skin color
- subtle orange accent
- no over-HDR
- no fake cinematic teal/orange LUT on every photo

### Do not use

- generic stock mechanic
- fake luxury cars unrelated to IET
- AI-generated customers as evidence
- fake futuristic workshop presented as current facility
- motorcycles in TVS authorization sections unless accurate

---

## 6. 3D Art Direction

3D should communicate **service engineering**, not act as decoration.

### Primary 3D object — “IET Service Core”

A premium hero object built from:

- outer gear ring
- inner blue service ring
- floating mechanical parts
- orange energy path
- small TVS genuine-parts package / mechanical detail where permission allows
- subtle metallic material

Interaction:
- mouse tilt maximum `2–3°`
- scroll rotation maximum `8–12°`
- no constant full rotation
- no floating “crypto” objects

### Secondary 3D ideas

**Service Exploded View**  
Exploded mechanical assembly that separates slightly on scroll.

**Genuine Parts Scanner**  
Parts box / component moves through a scanning line, revealing “Genuine”.

**Jaffna Service Orbit**  
Map/location ring with Inuvil as the center and real service-area names.

**Vision / Branch Expansion**  
Two architectural blocks: “Branch 01 — Inuvil” active; “Branch 02 — Coming Soon” as a restrained outline.

---

## 7. Parallax and Motion

The experience can feel cinematic without hijacking scroll.

### Principles

- Browser-native scrolling only.
- No artificial scroll acceleration.
- No forced horizontal scroll for core content.
- Motion must support hierarchy.
- Mobile motion should be lighter than desktop.

### Parallax ranges

- background layer: `0.92x`
- middle layer: `0.97x`
- content: `1x`
- foreground decorative: `1.02x`

Keep parallax subtle.

### Scroll scenes

1. **Hero** — 3D service core shifts slightly as copy locks into view.
2. **Authority** — TVS authorization panel reveals from a precision frame.
3. **Services** — sticky service visual, content changes beside it.
4. **Genuine Parts** — scanner-line interaction.
5. **Local Jaffna** — route line draws to Inuvil.
6. **Vision** — first branch milestone transitions to second-branch outline.
7. **Partners** — supplier categories rotate through a restrained marquee.

### Reduced motion

Respect:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto !important;
  }
}
```

When reduced motion is enabled:
- remove depth/parallax
- stop autoplay loops
- replace 3D movement with static render
- use opacity/color transitions only

Apple specifically recommends reducing or removing depth simulation/parallax for users who prefer reduced motion.

---

## 8. Page Composition

### Homepage composition

#### Scene 01 — Hero
Dark midnight background.

Left:
- eyebrow: `IET SERVICE POINT · INUVIL, JAFFNA`
- H1
- 2 CTAs
- authority badges

Right:
- 3D IET Service Core
- real three-wheeler/service photography integrated into shape masks

Do not show a generic full-width hero image.

#### Scene 02 — Proof bar
Compact:
- TVS Authorized Three-Wheeler Dealer
- TVS Genuine Parts
- Inuvil, Jaffna
- 1 Year Milestone
- Book Service

#### Scene 03 — Service OS
Title:
**Everything your three-wheeler needs. One trusted service point.**

Use an asymmetric bento — not generic 3 identical cards.

Layout:
- 1 large “Complete Service” card
- 2 vertical technical cards
- 1 slim “Book Now” utility card
- 1 service-history / future digital card

#### Scene 04 — TVS authority
Premium light section with TVS red/blue retained, but IET remains dominant.

#### Scene 05 — Genuine parts
Dark section with product-stage lighting.

#### Scene 06 — Jaffna / Northern
Map-inspired local proof with real areas and directions.

#### Scene 07 — Customer proof
Real review quote, real customer photo if consented.

#### Scene 08 — People
Split profile:
- J. Sujinthan — Managing Director
- S. Jeyakumar (M.E) — Mentor & Advisor

#### Scene 09 — Growth
One-year milestone + Branch 02 coming soon.

#### Scene 10 — B2B
“Build Northern Sri Lanka with us.”
Manufacturer/supplier/dealer partnership CTA.

#### Scene 11 — Booking
Simple, strong and utilitarian.

---

## 9. Unique Interaction Ideas

### Service dial
A circular service selector inspired by mechanical gauges.

Options:
- General Service
- Oil
- Greasing
- Brake
- Electrical
- Engine
- Wash

When selection changes:
- central image changes
- service description changes
- CTA remains fixed

### “Symptom → Service” interaction
User chooses:
- hard start
- brake noise
- power loss
- electrical issue
- vibration
- routine service

The UI points to the relevant service page.

### Parts quick check
Small component:
> Looking for a TVS genuine part?

Inputs:
- model
- part/photo
- WhatsApp

### “Service Journey”
Five-stage horizontally connected technical line:
1. Check-in
2. Inspect
3. Confirm
4. Service
5. Handover

On mobile: vertical.

---

## 10. Header / Navigation

### Desktop

Left:
IET logo

Center:
- Services
- Genuine Parts
- TVS
- Branches
- About
- Partners

Right:
- language
- Call
- **Book Service** orange button

Header initially transparent/dark on hero, then becomes white or midnight solid after scroll.

### Mobile

- logo
- call icon
- menu
- sticky bottom: `Call | WhatsApp | Book`

Avoid mega-menu unless content grows substantially.

---

## 11. Buttons

### Primary
Orange fill:
- white text
- arrow appears on hover
- tiny `translateX(2px)` only

### Secondary
Transparent / dark border.

### Tertiary
Text link with service-line animation.

Never use pill buttons everywhere.

---

## 12. Cards

### Service card
Should feel like a diagnostic panel:
- index number
- service title
- 1-line description
- technical visual
- arrow
- subtle grid/ruler line

### Review card
No generic stars-only design.

Show:
- quote
- service used
- customer area
- source
- date

### Partner card
Sharp/cut-corner card:
- category
- partnership value
- CTA

---

## 13. Iconography

Use a consistent 1.75–2px stroke.

Preferred:
- custom key icons
- Lucide only as fallback

Custom icons to create:
- three-wheeler
- genuine part
- grease point
- oil drop
- brake disc
- electrical diagnostic
- branch
- service booking
- TVS authorized shield

Avoid random emoji in production UI.

---

## 14. Anti-“AI Slop” Rules

The developer must explicitly avoid:

- generic purple/blue gradient backgrounds
- random aurora blobs
- frosted glass on every section
- identical 3-card rows
- 12 different rounded-radius values
- fake numbers like “10K+ happy customers” without data
- floating shapes with no relation to automotive/service
- stock 3D cubes/spheres
- robot/AI imagery
- giant generic “Transform your experience” copy
- endless icon grids
- overusing badges/chips
- arbitrary “trusted by” logos
- fake awards
- fake partner logos
- fake customer photos
- parallax on every section
- animation merely because a library is installed

Every visual element must answer:
> Does this communicate service, trust, genuine parts, location, expertise or growth?

If no, remove it.

---

## 15. Accessibility

Target WCAG 2.2 AA.

Requirements:
- visible focus
- keyboard access
- sufficient contrast
- 44px minimum touch targets
- form labels
- semantic headings
- alt text
- captions for video
- no hover-only information
- reduced motion
- avoid flashing/strobing
- language attributes for English/Tamil/Sinhala

---

## 16. Premium Dark Mode

Do not simply invert colors.

Dark mode palette:
- background `#061521`
- elevated `#081C2E`
- text `#F8FAFC`
- muted `#B7C4CF`
- orange `#FF720D`
- blue `#0F8FD0`
- border `rgba(255,255,255,.12)`

Logo:
- use original logo on a controlled light badge or approved dark variant
- do not recolor the logo arbitrarily

---

## 17. Design Tokens

```ts
export const colors = {
  brand: {
    blue: "#0267A4",
    cyan: "#0998D3",
    orange: "#F36102",
    red: "#EF2001",
    gold: "#FA980D",
  },
  midnight: {
    950: "#061521",
    900: "#081C2E",
    800: "#0C2942",
  },
  ink: {
    950: "#0A111A",
    700: "#334155",
    500: "#64748B",
  },
  surface: {
    0: "#FFFFFF",
    50: "#F7F9FB",
    100: "#EEF3F7",
  },
};
```

Spacing:
```ts
4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160
```

Content width:
- normal `1200px`
- cinematic `1440px`
- text `720px`

---

## 18. Design Acceptance Criteria

A section is approved only if:

- it looks unmistakably IET
- it works without animation
- it uses real information
- mobile is not a shrunk desktop
- copy is short and specific
- CTA is clear
- contrast passes
- interaction is understandable
- performance cost is justified
- there is no generic template feel

---

## 19. Reference Principles

Useful external principles incorporated into this system:

- Apple accessibility guidance recommends alternatives for parallax/depth effects when reduced-motion preference is enabled.
- Uber Base Web demonstrates the value of clear typography hierarchy and consistent design tokens.
- Next.js recommends optimized images/fonts to reduce layout shift and improve performance.

These references are principles only; the IET interface must remain visually original.

### References
- Apple Reduced Motion guidance: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/reduced-motion-evaluation-criteria
- Uber Base Web typography: https://v10.baseweb.design/components/typography/
- Uber/Base design tokens: https://baseweb.design/components/tokens/
- Next.js font/image optimization: https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
