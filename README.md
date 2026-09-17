# IET Service Point Website

Main website for **IET Service Point**, TVS Authorized Three-Wheeler Dealer and Authorized TVS Genuine Parts Seller in Inuvil West, Jaffna. Built from the spec in `docs/`.

## Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 App Router, React 19, TypeScript 6 (strict) |
| Styling | Tailwind CSS v4, brand tokens in `src/app/globals.css` |
| Primitives | shadcn/ui on Radix (restyled): button, input, textarea, label, native select, sheet |
| Motion | Motion (`motion/react`, lazy features) plus CSS scroll-driven animations |
| 3D | three.js without a React wrapper, drawn in a Web Worker on an OffscreenCanvas |
| Validation | Zod 4 in Server Actions |
| Quality gate | Prettier, ESLint (`eslint-config-next`), `tsc`, husky + lint-staged |

All versions are pinned exactly in `package.json`. TypeScript stays on 6.0.x because `typescript-eslint` does not support TypeScript 7 yet.

## Commands

```bash
npm install
npm run dev          # http://localhost:3000
npm run check        # prettier --check, eslint, tsc, next build
npm run build
npm start
```

Git hooks: `pre-commit` runs lint-staged on staged files, `pre-push` runs `npm run check`.

## Where things live

```text
src/app/                 routes (21 pages), sitemap.ts, robots.ts, icons
src/components/home/     homepage sections
src/components/home/service-core-3d/   3D hero: worker, scene, parts
src/components/shared/   PageHero, CtaBand, FaqList, ServiceJourney, JaffnaMap, GrowthPhases, ...
src/components/layout/   header, mobile menu, footer, mobile action bar, analytics listener
src/components/ui/       shadcn primitives (restyled to the IET system)
src/features/enquiries/  booking, parts and partnership forms, Server Actions, Zod schemas
src/content/en/          all page copy (services, people, FAQ, partners, navigation, form options)
src/config/              business facts (site.ts), routes, image manifest (images.ts)
src/lib/                 SEO metadata, JSON-LD builders, analytics
docs/                    spec, SEO pack, IMAGE-BRIEF.md, WEBSITE-BUILD-PLAN.md
```

## Editing content

- **Business facts** (phone, email, address, WhatsApp, domain): `src/config/site.ts` only. Every page, link and schema reads from it.
- **Page copy**: `src/content/en/`. Tamil and Sinhala will be added as `src/content/ta/` and `src/content/si/` after native review.
- **Rules that must not break**: the TVS authorization is for **three-wheelers only**. Never add invented reviews, numbers, partners, prices, opening hours or a Branch 02 address.

## Adding images

1. Read `docs/IMAGE-BRIEF.md` for the file names, sizes and prompts.
2. Convert the file to `.webp` and place it in `public/images/art/` (AI art) or `public/images/photos/` (real photos).
3. In `src/config/images.ts`, set the real `width` and `height` and change `ready` to `true`.

Until `ready` is `true`, the slot shows a branded placeholder, so a missing file never breaks a page.

## 3D hero

The homepage Service Core starts as an SVG. On capable desktops it fades to a three.js scene once the page is idle. The scene runs in `src/components/home/service-core-3d/service-core.worker.ts`, so loading three.js and compiling shaders never block a click or a scroll.

- **Who gets 3D**: `canRender3d()` in `src/components/home/service-core-stage.tsx`. Phones, reduced motion, data saver and older browsers keep the SVG. The SVG also stays if the worker or WebGL fails.
- **Moving a part**: positions are in `create-service-core-scene.ts`. At 1024 px there is little room between the headline, the Branch chips and the screen edge. Check 1024, 1280 and 1440 px with the mouse at each corner of the gear.
- **Gear shape**: `src/components/brand/gear-geometry.ts` feeds both the SVG and the 3D gear, so they always match.
- Numbers and the reasons behind this setup: "3D Service Core" in `docs/WEBSITE-BUILD-PLAN.md`.

## Forms

Booking (4 steps), parts enquiry and partnership enquiry are validated in the browser for quick feedback and again on the server with Zod. A valid enquiry gets a reference number (for example `IET-B-260917-7K3Q`) and opens WhatsApp to `+94 75 253 0495` with the details filled in. Nothing is stored or emailed yet. The in-memory rate limit is best effort only; add a shared limiter before storing or emailing submissions.

## SEO

- Unique title, description, self canonical, Open Graph and Twitter tags on every page (`src/lib/seo/metadata.ts`). Share image: `public/og/iet-service-point.png`.
- JSON-LD from visible content only: AutoRepair + AutoPartsStore, Person, Service, BreadcrumbList.
- `trailingSlash: true`, `sitemap.xml`, and `robots.txt` allowing Googlebot, Bingbot and OAI-SearchBot.

## Analytics

Events from the spec are pushed to `window.dataLayer`. Links use `data-track="click_call"` and sections use `data-track-view="view_tvs_authority"`, handled by one listener. Add a GA4 or Tag Manager ID to start collecting them.

## Before launch

See "Open items for the client" in `docs/WEBSITE-BUILD-PLAN.md`. The most important: confirm the canonical host (`ietservice.lk` currently redirects to `www`), opening hours, the map pin, TVS logo permission, and real photos.
