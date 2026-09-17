# IET Service Point: Main Website Build Plan

**Branch:** `dev/tisankan/main-website`
**Approved:** 17 September 2026
**Spec:** `IET_Frontend_Development_Spec_for_Claude.md` + `IET_Website_Design_System_and_UIUX.md` + the SEO pack (`00` to `10`). This plan records scope and decisions only; the spec documents stay the source of truth.

## Decisions (approved)

| Topic | Decision |
| --- | --- |
| Framework | Next.js 16 App Router + TypeScript (kept) |
| Styling | Tailwind CSS v4 with brand tokens in `src/app/globals.css` |
| Primitives | shadcn/ui on Radix, restyled to the IET system. Never shipped in default look. |
| Motion | Motion (`motion/react`) through `LazyMotion`, plus CSS scroll-driven animation for decorative reveals. Everything respects `prefers-reduced-motion`. |
| Scope of this branch | Foundation, full homepage, 20 core pages, forms, SEO. English only. |
| Forms | Server Action validates with Zod, then hands off to WhatsApp (`+94 75 253 0495`) with a reference number. No data is stored or emailed yet. |
| Images | AI art for mood and service detail, real photos for evidence. See `IMAGE-BRIEF.md`. Branded placeholders until files arrive. |

## Deviations from the spec, with reasons

| Spec says | Build does | Why |
| --- | --- | --- |
| Primary button: orange fill, white text | Orange fill `#F36102`, midnight text `#061521` | White on `#F36102` is 3.2:1 and fails WCAG AA. Midnight on orange is 5.7:1 and keeps the exact brand orange. |
| Homepage H1 "Trusted Three-Wheeler Service in Jaffna" (SEO doc) vs "Three-wheeler care. Built on trust." (design doc) | One H1: SEO phrase as the small top line, design line as the display text | Keeps the keyword in the H1 and the approved headline visually. |
| shadcn Accordion for FAQ and service lists | Native `<details>` | Radix Accordion removes closed content from the HTML. `<details>` keeps it crawlable and searchable with zero JS. |
| Timeline "Start, Year 1, TVS authority, Digital, Branch 2" | Three phases: Established, Now, Next | The docs do not say whether the TVS authorization came before or after year one. Phases avoid an unverified order. |
| LocalBusiness schema with `founder` | No `founder` property | No page states that J. Sujinthan is the founder. Schema must match visible content. |
| Language switcher, `/ta/`, `/si/` | Not in this branch | Tamil and Sinhala need native review first. Copy lives in `src/content/en/` so translations are content-only later. |
| Suspension & Steering, Water Wash pages | Listed on the homepage and `/services/`, link to booking | The docs give no page content for them. Avoids thin pages. |
| Motion primitives as React components (FadeIn, LineDraw, ParallaxLayer, ...) | CSS scroll-driven utilities in `globals.css` (`reveal`, `draw-on-scroll`, `gear-turn`, `scan-on-scroll`). Motion only for the hero tilt and the Service OS image crossfade. | Decorative motion costs no JavaScript and degrades to static content where unsupported. No parallax layers yet; the spec asks for parallax to stay subtle. |
| 3D with `@react-three/fiber` and `drei`, backed by a static poster image | Plain three.js, drawn in a Web Worker on an OffscreenCanvas. The SVG Service Core is the poster: it paints first, stays for phones, reduced motion and older browsers, and fades out once the 3D is ready. No AI poster image. | `@react-three/fiber` 9.5 and later need React below 19.3, and this project runs React 19.3. The worker keeps three.js and shader compilation off the main thread. On the main thread, the first visit blocked input for about 530 ms. 3D was added after the Lighthouse baseline, as the spec asks. |

## Architecture

```text
src/
  app/                    21 routes, sitemap.ts, robots.ts, icons, not-found
  components/
    ui/                   shadcn primitives (restyled)
    layout/               header, mobile menu, footer, mobile action bar, analytics listener
    brand/                logo, gear ring
    icons/                official WhatsApp mark (Simple Icons)
    media/                SiteImage (placeholder-aware image)
    motion/               MotionProvider (LazyMotion + reduced motion)
    shared/               PageHero, CtaBand, FaqList, ServiceJourney, JaffnaMap, GrowthPhases,
                          ContactMethods, PartnerCategoryTiles, KeepHyphenWords, JsonLd
    services/             service page sections, booking aside
    home/                 homepage sections
  features/enquiries/     Zod schemas, Server Actions, spam guard, form components
  content/en/             all page copy (typed)
  config/                 site facts, routes, image manifest
  lib/                    seo/metadata, schema builders, analytics, navigation
public/og/                static share image
```

## Routes in this branch

`/`, `/services/`, `/services/three-wheeler-service/`, `/services/three-wheeler-repair/`, `/services/oil-service/`, `/services/greasing/`, `/services/brake-service/`, `/services/electrical-repair/`, `/services/engine-diagnostics-repair/`, `/tvs-authorized-three-wheeler-dealer/`, `/tvs-genuine-parts/`, `/service-areas/jaffna/`, `/branches/`, `/branches/inuvil/`, `/about/`, `/about/j-sujinthan/`, `/about/s-jeyakumar/`, `/partners/`, `/contact/`, `/book-service/`, `/faq/`

`trailingSlash: true`. Every page: unique title and description, self canonical, Open Graph, breadcrumbs (except home), JSON-LD built from visible content.

## Tasks

1. **Foundation.** Pin versions, Tailwind v4, shadcn (Radix), Motion, Zod, ESLint + Prettier + husky `npm run check`, move to `src/`, tokens, fonts (Manrope, Sora), icons, `next.config` (trailing slash, image qualities, security headers).
   *Done when:* dev server renders a token test page; typecheck and lint pass.
2. **Layout shell.** Site header (transparent over dark hero, solid after scroll), mobile nav sheet, footer, mobile Call / WhatsApp / Book bar, skip link, analytics listener (`data-track`).
   *Done when:* keyboard and screen-reader pass at 390 / 768 / 1440.
3. **Content + config.** Site facts, routes, image manifest, all English copy.
   *Done when:* no invented facts; every unknown is omitted or flagged.
4. **Homepage.** Hero, proof bar, Service OS, TVS authority, genuine parts stage, Jaffna presence, leadership, growth, partners, booking band.
   *Done when:* renders without JS, anti-slop review passes, reduced motion is static.
5. **Inner pages.** Services hub + 7 service pages, TVS dealer, genuine parts, Jaffna, branches, Inuvil, About + 2 profiles, partners, contact, FAQ.
   *Done when:* each page meets the SEO checklist and links per the internal-linking rules in `02`.
6. **Forms.** Booking (4 steps), parts enquiry, partnership enquiry with WhatsApp handoff.
   *Done when:* server validation, inline errors, error summary, success state, and analytics events all work.
7. **SEO files.** `sitemap.ts`, `robots.ts` (OAI-SearchBot allowed), OG image, icons, 404 page.
8. **QA and release gate.** Playwright at 390 / 768 / 1440 (light and dark), keyboard, reduced motion, typecheck, lint, one production build.

## Status (17 September 2026)

All eight tasks are complete on `dev/tisankan/main-website`.

| Check | Result |
| --- | --- |
| Routes | 21 pages, all prerendered static (SSG). Unknown URLs return 404. |
| Gate | `prettier --check`, `eslint .`, `tsc --noEmit` and `next build` all pass |
| First-load JS (Brotli, as served by Vercel and Cloudflare) | Home 206 KB, services 191 KB, booking 199 KB. Inside the 180-220 KB budget. Gzip is about 30 KB higher. |
| SEO | Unique title, description, canonical, Open Graph and Twitter image on every page; JSON-LD validated by inspection; sitemap and robots served |
| Forms | Browser checks, server Zod checks (verified with browser checks removed), error summary with focus, success state, WhatsApp message, analytics events |
| Visual QA | 390, 768 and 1440 px; light and dark; mobile menu focus trap and Escape; no horizontal overflow |

### Issues found and fixed during QA

- **Phone `pattern` attribute was invalid.** Browsers compile `pattern` with the regex `v` flag, where `(` and `)` must be escaped inside a character class. The browser silently ignored the old pattern. One shared constant, `PHONE_INPUT_PATTERN`, now holds the corrected pattern.
- **React 19 form reset.** A `<form action>` clears uncontrolled fields after the action returns, so visitors would lose their input on a server validation error. Forms now dispatch the action from `onSubmit` inside `startTransition`.
- **Open Graph image redirect.** With `trailingSlash: true`, the generated `/opengraph-image` URL returned 308. The share image is now a static file, `public/og/iet-service-point.png`, set on every page.
- **Hero headline wrapped at the hyphen** ("Three- / wheeler"). Hyphenated words in headings are kept together (`KeepHyphenWords`), and the hero display size is capped so the headline stays on two lines.
- **Duplicate submit event** in React StrictMode. The success panel now tracks one event per reference.

## 3D Service Core (branch `dev/tisankan/hero-3d`)

The hero gear, rings, orange orbit, spark plug, spanner and bearing are built from simple geometry in code, so the scene downloads no models or textures. Files: `src/components/home/service-core-stage.tsx` (who gets 3D) and `src/components/home/service-core-3d/` (worker, scene, parts).

| Check | Result |
| --- | --- |
| Who gets 3D | 1024 px and wider, a mouse, no reduced motion, no data saver, at least 4 GB memory (when the browser reports it), OffscreenCanvas support, and WebGL 2 inside the worker. Everyone else keeps the SVG. |
| Download | three.js chunk: 114 KB Brotli, fetched by the worker only on eligible desktops. Home first-load JS stays 208 KB Brotli. Phones never fetch it. |
| Lighthouse desktop, 3 runs | 99, 100, 100 (98 before 3D). TBT 0 ms, CLS 0. The 3D loaded in every run. |
| Lighthouse mobile | 91, the same as before 3D |
| Main thread | No long tasks during load with 3D (Playwright, 5 loads, `longtask` observer). The scene is ready about 130 ms after the worker starts. |
| Motion | Mouse tilt up to 3 degrees. Scroll turns the gear, rings and orbit up to 12 degrees; the parts only tilt. Drawing stops when nothing moves or the hero is off screen. |
| Failure | If the worker cannot load or WebGL fails, the SVG stays (tested by blocking the three.js chunk) |

### Issues found and fixed during 3D QA

- **Parts cut off by the canvas edge.** The bearing and spanner sat past the canvas edge, and at 1024 px the bearing covered the lead paragraph and the orbit touched the headline. The parts now only tilt, at positions checked with a projection script to stay inside the canvas at full tilt and clear of both Branch chips and the headline. The orbit radius went from 4.3 to 3.75 so it stays inside at every scroll angle.
- **Invisible canvas blocked the headline.** At 1024 px the canvas covered the end of the headline, so clicks and text selection hit the canvas. The canvas no longer takes pointer events.
- **3D setup blocked the main thread.** About 107 ms with a warm shader cache and about 530 ms on a first visit (M3 Pro), enough to delay a click. The scene now runs in a Web Worker.
- **Gear outline far heavier than needed.** One curve setting served both the tiny tooth arcs and the hole, which gave the gear 58,752 vertices. The hole now has its own points: 12,672 vertices, and a smoother hole.

## Engineering follow-ups

- Mobile Lighthouse LCP is 3.5 s against the 2.5 s target, with and without 3D. The LCP element is the hero headline text, and the observed render delay was only 150 ms, so the gap looks like simulated throttling of the font and CSS chain. Check it on real phones and in field data before changing code.

## Open items for the client (not blocking)

- Opening hours, Google Maps pin, social profile links, privacy policy text
- WhatsApp number (currently the main phone)
- Whether IET services motorcycles (pages stay unpublished until confirmed)
- Official TVS logo file and written usage permission
- Canonical host: `ietservice.lk` currently 308-redirects to `www.ietservice.lk`, but the docs, schema and canonical tags use `ietservice.lk`. Make the apex the primary domain in Vercel, or tell us to switch `SITE_URL` to `www`.
- Whether J. Sujinthan should be described as founder
- Real reviews (the homepage review section stays hidden until they exist)
