# IET Service Point — Frontend Development Specification for Claude

**Target:** `ietservice.lk`  
**Recommended framework:** Current stable Next.js App Router + TypeScript  
**Design requirement:** Premium, unique, automotive, cinematic, fast, mobile-first, SEO-first, multilingual and conversion-focused.

This document is intended to be given directly to Claude/Codex/developers as the implementation contract.

---

# 1. Mission

Build a new frontend for IET Service Point that:

1. Looks like a premium automotive brand, not a garage template.
2. Uses the real IET identity and real workshop evidence.
3. Supports the SEO/GEO/AEO architecture already defined for the project.
4. Performs exceptionally on mobile networks in Sri Lanka.
5. Uses 3D and parallax as progressive enhancement.
6. Converts customers into calls, WhatsApp conversations, bookings and genuine-parts enquiries.
7. Converts automotive companies into dealership/partnership enquiries.
8. Supports English, Tamil and Sinhala.
9. Maintains accurate wording that IET is a **TVS Authorized Three-Wheeler Dealer**.
10. Does not imply TVS motorcycle authorization.

---

# 2. Non-negotiable Design Direction

Use the separate `IET_Website_Design_System_and_UIUX.md` as the visual source of truth.

Key identity:
- Midnight navy
- IET orange
- Service blue
- white
- restrained red/gold
- mechanical geometry
- gear arcs
- precision rings
- real workshop photography

The UI must mix:
- Apple-level visual restraint and presentation
- Uber-like direct functional hierarchy
- IET-specific automotive/mechanical identity

Do not copy Apple/Uber components or layouts.

---

# 3. Tech Stack

## Core

- Next.js App Router
- TypeScript strict mode
- React Server Components by default
- Tailwind CSS or CSS Modules with token variables
- `next/font`
- `next/image`
- ESLint
- Prettier
- semantic HTML

## Motion

Preferred:
- `motion` / Framer Motion for page/scroll motion
- CSS transforms for simple motion
- CSS `@media (prefers-reduced-motion)` support

Do **not** introduce a smooth-scroll hijacking library by default.

## 3D

Use only when performance budget allows:
- `three`
- `@react-three/fiber`
- `@react-three/drei`

3D must be:
- dynamically imported
- client-only
- lazy
- low-poly / compressed
- backed by a static poster image
- disabled/reduced on constrained devices

## Forms

- Server-side validation required
- client validation for UX
- spam protection
- rate limits
- analytics events
- accessible error summary

Use the project’s preferred validation conventions where applicable.

---

# 4. Repository Structure

```text
src/
  app/
    (marketing)/
      page.tsx
      about/
      services/
      parts/
      partners/
      branches/
      book-service/
      contact/
    ta/
    si/
    api/
  components/
    brand/
    layout/
    navigation/
    sections/
    services/
    parts/
    booking/
    partners/
    motion/
    three/
    ui/
  content/
    en/
    ta/
    si/
  lib/
    seo/
    schema/
    analytics/
    i18n/
    validation/
    constants/
  styles/
    tokens.css
    globals.css
  public/
    brand/
    images/
    three/
    icons/
```

Do not put every section in `page.tsx`.

---

# 5. Route Architecture

Implement routes from the SEO developer pack.

Minimum launch routes:

```text
/
 /services/
 /services/three-wheeler-service/
 /services/three-wheeler-repair/
 /services/oil-service/
 /services/greasing/
 /services/brake-service/
 /services/electrical-repair/
 /services/engine-diagnostics-repair/
 /tvs-authorized-three-wheeler-dealer/
 /tvs-genuine-parts/
 /service-areas/jaffna/
 /branches/
 /branches/inuvil/
 /about/
 /about/j-sujinthan/
 /about/s-jeyakumar/
 /reviews/
 /gallery/
 /book-service/
 /partners/
 /contact/
```

Conditional:
```text
/services/motorcycle-service/
/services/motorcycle-repair/
```

Only publish if the service is actually offered.

---

# 6. Global Components

## `<SiteHeader />`

Desktop:
- logo left
- nav center
- language / call / booking right

Mobile:
- logo
- call
- menu

Behavior:
- transparent over dark hero
- after 40–60px scroll, compact solid header
- no huge header
- no glass blur stronger than needed

## `<MobileActionBar />`

Sticky bottom:
- Call
- WhatsApp
- Book

Hide on large screens.

## `<SiteFooter />`

Dark midnight.

Columns:
- services
- TVS / genuine parts
- company
- partners
- contact
- languages

Include:
- canonical phone
- email
- Inuvil branch
- social profiles
- legal links

---

# 7. Homepage Component Tree

```tsx
<HomePage>
  <SiteHeader />
  <HeroServiceCore />
  <AuthorityStrip />
  <ServiceOperatingSystem />
  <TvsAuthoritySection />
  <GenuinePartsStage />
  <JaffnaPresence />
  <CustomerProof />
  <LeadershipSection />
  <GrowthVision />
  <PartnerGateway />
  <BookingCTA />
  <SiteFooter />
  <MobileActionBar />
</HomePage>
```

---

# 8. Hero Implementation

## Visual

Background:
- `#061521`
- subtle technical grid
- orange energy path
- no generic gradient blobs

Left:
- small location/authority eyebrow
- H1
- description
- primary/secondary CTA
- TVS authorization proof

Right:
- `<ServiceCore3D />`
- static fallback image

### H1 example

```text
THREE-WHEELER CARE.
BUILT ON TRUST.
```

Highlight the second line with orange energy material.

## 3D object

Use:
- gear ring
- blue internal ring
- small service/tool components
- controlled lighting
- no huge file size

Load strategy:

```tsx
const ServiceCore3D = dynamic(
  () => import("@/components/three/service-core"),
  { ssr: false, loading: () => <HeroPoster /> }
);
```

Use `IntersectionObserver` or equivalent so WebGL initializes only when appropriate.

---

# 9. Service Operating System Section

Do not implement a generic “6 cards” grid.

Desktop:
- left: sticky interactive service visual
- right: service list

When active service changes:
- visual changes
- index moves
- title/description updates
- page remains keyboard accessible

Services:
- Complete Service
- Oil
- Greasing
- Brake
- Electrical
- Engine
- Suspension/Steering
- Water Wash

On mobile:
- simple accordion/list
- no sticky heavy animation

---

# 10. TVS Authority Section

Purpose:
prove current business authorization clearly.

Visual:
- clean light surface
- IET logo
- TVS approved branding only from authorized assets
- real TVS board/workshop photo
- short direct copy

Required copy:
**TVS Authorized Three-Wheeler Dealer**

Never output:
- TVS Authorized Motorcycle Dealer
unless formally confirmed.

CTA:
- TVS support
- genuine parts
- directions

---

# 11. Genuine Parts Stage

Dark product-style section.

Use:
- real genuine-parts photos
- detail closeups
- QR/security verification article link
- part enquiry CTA

Animation:
- single scan line
- subtle part movement
- no fake hologram UI

---

# 12. Jaffna Presence Section

Create a custom stylized Northern/Jaffna map—not Google map artwork.

Show:
- IET Inuvil location
- Jaffna
- only real service areas

Parallax:
- route line reveals on scroll

CTA:
- Get Directions
- Jaffna service page

Then embed actual map only where useful below.

---

# 13. Leadership UI

## J. Sujinthan

Title:
**Managing Director**

Visual:
- real portrait
- dark technical background
- brief founder statement
- link to profile

## S. Jeyakumar (M.E)

Title:
**Mentor & Advisor**

Visual:
- real photo when available
- advisory/technical context
- link to profile

Do not invent biography facts.

---

# 14. Growth / Vision Section

Timeline:
- Start
- Year 1
- TVS authority
- Digital service
- Branch 2 — Coming Soon

Design:
- large orange `01`
- architectural / mechanical lines
- branch 2 as outline, not fake completed facility

Copy:
> One branch established. The next phase is loading.

Do not publish a fake branch address.

---

# 15. Partnership Gateway

This is important for manufacturer/supplier recognition.

Headline:
**Build Northern Sri Lanka with IET.**

Tiles:
- Vehicle Brands
- Three-Wheeler Brands
- Motorcycle Brands
- Oils & Lubricants
- Spare Parts
- Tools & Equipment
- Fleets

CTA:
**Discuss a Partnership**

Use sharp geometric layout; no generic startup pricing cards.

---

# 16. Motion Architecture

Create reusable motion primitives:

```text
FadeIn
SlideReveal
LineDraw
NumberReveal
ParallaxLayer
StickyScene
ReducedMotionBoundary
```

## Motion duration

- micro: 120–180ms
- UI state: 180–280ms
- section reveal: 450–700ms
- cinematic transition: max 900ms

Avoid 1.5–3 second slow animations.

## Easing

Use restrained custom cubic curves:
```css
cubic-bezier(.22, 1, .36, 1)
```

## Reduced-motion component

```tsx
function useReducedMotionSafe() {
  // Wrap framework hook and provide SSR-safe behavior.
}
```

When true:
- no parallax
- no WebGL camera animation
- no auto loops
- static transforms

---

# 17. 3D Performance Contract

3D is approved only if:

- initial page JS remains controlled
- static content renders before WebGL
- no layout shift
- no blocking hero
- mobile has a low-cost fallback
- user can complete tasks without 3D

Recommended:
- Draco / Meshopt compressed geometry
- WebP/AVIF textures
- 1K or lower texture where possible
- limit material count
- no unnecessary shadows
- cap DPR
- pause renderer when offscreen

Example:

```tsx
<Canvas dpr={[1, 1.5]} frameloop="demand">
```

Use `invalidate()` only on interaction where possible.

---

# 18. Image / Font Performance

Use `next/image`.

Requirements:
- width/height or `fill` with stable parent
- `sizes`
- preload only actual LCP image
- AVIF/WebP
- no 4–8 MB photos
- art-directed mobile crop where necessary

Use `next/font` to reduce layout shifts and avoid unnecessary external requests.

Suggested:
- Manrope
- Sora
- Noto Sans Tamil
- Noto Sans Sinhala

Load only required weights.

---

# 19. Core Web Vitals Budget

Targets:

- LCP `< 2.5s`
- INP `< 200ms`
- CLS `< 0.1`

Page budgets:

- HTML + critical CSS first
- initial JS ideally `< 180–220 KB` compressed for non-3D route
- 3D chunk loaded separately
- hero image `< 250 KB` where possible
- no autoplay background video on mobile

Performance is part of the premium experience.

---

# 20. Responsive Rules

## Mobile first

At 360–430px:
- hero copy first
- visual second
- 3D simplified/static
- sticky action bar
- cards become linear
- no tiny two-column content
- service selection becomes accordion
- text max 2–3 short paragraphs per section

## Tablet
Use asymmetry but preserve readability.

## Desktop
Use cinematic spacing and layered motion.

## Ultra-wide
Constrain core content; allow background/3D scene to extend.

---

# 21. SEO Implementation

Every indexable page needs:

- unique title
- unique meta description
- canonical
- OG
- Twitter metadata
- H1
- breadcrumbs
- visible content
- contextual internal links
- structured data where applicable

Create:

```text
src/lib/seo/metadata.ts
src/lib/schema/local-business.ts
src/lib/schema/person.ts
src/lib/schema/service.ts
src/lib/schema/breadcrumb.ts
```

Do not generate schema from hidden data that is not on the page.

---

# 22. Multilingual Frontend

Languages:
- English
- Tamil
- Sinhala

Route:
- English root
- `/ta/`
- `/si/`

Requirements:
- language switcher
- correct `lang`
- `hreflang`
- translated metadata
- translated form validation
- no forced redirect by location
- preserve current path when switching where translation exists

Tamil and Sinhala need typography testing for:
- line-height
- word wrapping
- buttons
- mobile navigation

---

# 23. Forms

## Booking

Do not create a giant form on the homepage.

Homepage:
- quick CTA

Booking page:
- progressive sections

### Step 1
Customer:
- name
- phone
- WhatsApp

### Step 2
Vehicle:
- type
- brand
- model
- registration optional

### Step 3
Need:
- service
- problem
- photo

### Step 4
Schedule:
- date
- time
- consent

Use clear progress indicator.

---

# 24. Analytics

Track:

```text
click_call
click_whatsapp
click_directions
book_service_start
book_service_step
book_service_submit
parts_enquiry_start
parts_enquiry_submit
partner_enquiry_submit
view_tvs_authority
view_founder_profile
language_switch
```

Do not fire duplicate events from re-render.

---

# 25. Security and Reliability

- CSP where practical
- secure headers
- server validation
- rate limiting
- CSRF protections as appropriate
- bot protection only on forms
- do not challenge search engine crawlers site-wide
- sanitize uploads
- size/type limit images
- do not expose internal IDs

---

# 26. QA Matrix

Test:

### Browsers
- Chrome
- Safari macOS
- Safari iOS
- Edge
- Firefox

### Devices
- 360px Android
- 390/430px iPhone
- tablet
- 1366 laptop
- 1440 desktop
- 4K

### Network
- Fast
- 4G
- slow 4G

### Accessibility
- keyboard
- VoiceOver
- reduced motion
- zoom 200%
- contrast
- form error state

### SEO
- JS disabled sanity check
- view source / rendered HTML
- schema
- canonical
- metadata
- sitemap
- robots
- crawler access

---

# 27. Definition of “Unique”

The website is **not complete** if it could be rebranded to any garage by changing the logo.

At least five elements must be unmistakably IET:

1. IET Service Core 3D
2. Gear / precision ring visual language
3. orange service energy line
4. real Inuvil/Jaffna evidence
5. TVS three-wheeler authorization presentation
6. one-year → branch-two growth story
7. founder/mentor profile language
8. genuine-parts scanner interaction

---

# 28. Claude Build Workflow

Claude should execute in this order.

## Phase 1 — Recon

1. Inspect current project.
2. Detect Next.js version/config.
3. Inspect current SEO implementation.
4. Inspect existing logo/images/assets.
5. Inspect fonts.
6. Inspect routes.
7. Inspect analytics.
8. Inspect current website for redirects/slugs that must be preserved.

Do not delete old slugs without redirect mapping.

## Phase 2 — Foundation

1. Implement tokens.
2. Implement typography.
3. Implement layout grid.
4. Header.
5. Footer.
6. buttons.
7. cards.
8. motion primitives.
9. schema helpers.
10. metadata helpers.

## Phase 3 — Homepage static

Build all sections without complex motion first.

Approval gate:
- visual hierarchy
- copy
- mobile
- SEO
- accessibility

## Phase 4 — Motion

Add:
- scroll reveals
- line draws
- sticky service scene
- subtle parallax

Do not add 3D yet.

## Phase 5 — 3D

Add only after Lighthouse baseline.

## Phase 6 — Service pages

Use consistent but non-identical templates.

## Phase 7 — multilingual

Translate core routes.

## Phase 8 — B2B / partnerships

Build partnership hub and forms.

## Phase 9 — optimization

- remove unused JS
- compress media
- optimize fonts
- test 4G
- CWV

## Phase 10 — release

- redirects
- sitemap
- Search Console
- Bing
- analytics
- monitoring

---

# 29. Claude “Do Not” List

Claude must not:

- redesign or alter the IET logo
- replace real brand colors with generic purple
- use random gradients
- invent customer counts
- invent years of experience
- invent partnerships
- invent branch addresses
- invent TVS motorcycle authorization
- add fake testimonials
- create dozens of thin SEO pages
- use lorem ipsum
- rely on stock photos for trust sections
- use SVG text for crawlable content
- put important copy inside Canvas/WebGL
- create giant client components unnecessarily
- enable heavy animation on mobile by default
- install libraries without justification

---

# 30. Final Claude Master Prompt

Copy this into Claude after placing the two IET docs in the project:

```text
You are redesigning and rebuilding ietservice.lk for IET Service Point.

Read these files completely before changing code:
1. IET_Website_Design_System_and_UIUX.md
2. IET_Frontend_Development_Spec_for_Claude.md
3. the existing IET SEO/GEO/AEO developer pack

Goal:
Build a premium, unique, high-performance Next.js website for IET Service Point in Inuvil, Jaffna. The design must not look generic, AI-generated, or template-based.

Visual direction:
Mix the restraint and product storytelling principles associated with premium Apple-style web experiences with the direct, functional hierarchy of Uber-like interfaces, but create an original IET visual identity using the real IET colors, gear geometry, precision rings, orange service-energy lines, real workshop content, restrained 3D and subtle parallax.

Critical business facts:
- IET Service Point
- TVS Authorized Three-Wheeler Dealer
- Authorized TVS Genuine Parts Seller
- Managing Director: J. Sujinthan
- Mentor & Advisor: S. Jeyakumar (M.E)
- Branch 1: Kanthaswamy Kovil Road, Inuvil West, Jaffna
- Branch 1 completed one year
- Branch 2 coming soon; do not invent an address
- Phone: +94 75 253 0495
- Email: hello@ietservice.lk
- Website: https://ietservice.lk

Important:
Do not imply TVS motorcycle authorization. Motorcycle/bike service pages can only be published if the business genuinely offers that service, and they must clearly be separate from the TVS three-wheeler authorization.

Implementation sequence:
1. Recon the existing repo, routes, assets, metadata and redirects.
2. Show me a short implementation plan.
3. Build design tokens + typography + global layout.
4. Build static/mobile-first homepage.
5. Run quality review.
6. Add restrained motion/parallax.
7. Add 3D only as progressive enhancement with static fallback.
8. Build service/parts/local/B2B pages.
9. Implement SEO/schema/hreflang.
10. Test accessibility and Core Web Vitals.
11. Preserve old indexed slugs via redirects.
12. Produce a final QA report.

Do not ask for approval at every small step. Make strong design decisions within the documented system, but flag anything that requires unverified business facts.
```

---

# 31. External Technical Principles Used

- Next.js font/image optimization guidance: https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
- Apple reduced-motion guidance: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/reduced-motion-evaluation-criteria
- Uber Base Web typography: https://v10.baseweb.design/components/typography/
- Uber/Base tokens: https://baseweb.design/components/tokens/

These are implementation references, not templates to copy.
