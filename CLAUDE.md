# IET Service Point Website: Team Rules

Read `README.md` for setup. The spec lives in `docs/` (start with `IET_Frontend_Development_Spec_for_Claude.md`, `IET_Website_Design_System_and_UIUX.md` and `WEBSITE-BUILD-PLAN.md`).

## Business facts

- One source: `src/config/site.ts`. Never hardcode the phone, email, address or domain anywhere else.
- The TVS authorization is for **three-wheelers only**. Never write or imply TVS motorcycle authorization.
- Never invent reviews, ratings, customer counts, years of experience, prices, service durations, opening hours, partners, equipment or a Branch 02 address.
- Motorcycle service pages stay unpublished until the client confirms the service in writing.

## Code conventions

- Copy lives in `src/content/en/`, not inside components.
- Routes come from `src/config/routes.ts`. Every internal URL ends with `/`.
- Server Components by default. Add `"use client"` only for state, effects or browser APIs, at the smallest component.
- Use the brand tokens in `src/app/globals.css`. Radius rule: controls `rounded-control` (12px), panels `rounded-panel` (16px), chips `rounded-chip` (8px), media `frame-asym`.
- Primary buttons use midnight text on IET orange. White text on `#F36102` fails WCAG AA.
- Small text on light surfaces must not use orange; use `text-foreground` or `text-link`.
- Collapsible content uses native `<details>` so it stays in the HTML for search engines.
- Forms dispatch Server Actions from `onSubmit` (a `<form action>` would clear fields after a server error). Keep `PHONE_INPUT_PATTERN` valid under the regex `v` flag.
- Images go through `SiteImage` and the manifest in `src/config/images.ts`.
- JSON-LD must only describe content that is visible on the page.
- No em dashes in site copy. No `console.log` in client code.

## Before you push

`npm run check` must pass (Prettier, ESLint, TypeScript, production build). The husky `pre-push` hook runs it.
