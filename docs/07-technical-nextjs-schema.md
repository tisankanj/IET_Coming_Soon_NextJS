# 07 — Technical SEO, Next.js and Structured Data

## Recommended stack

- Next.js App Router
- TypeScript
- server-rendered/static indexable pages
- image optimization (AVIF/WebP)
- Cloudflare CDN/DNS
- Google Search Console
- Bing Webmaster Tools
- GA4
- uptime/error monitoring

## Core rules

1. Important content must exist in rendered HTML.
2. Do not hide core service content behind client-only interactions.
3. Use stable descriptive URLs.
4. One canonical URL per page.
5. Mobile-first performance.
6. Strong titles/descriptions/Open Graph.
7. XML sitemap.
8. crawl-safe robots.txt.
9. schema must match visible content.
10. no staging/demo indexing.

## Metadata example

```ts
export const metadata = {
  title: "Three-Wheeler Service Jaffna | TVS Authorized Dealer | IET Service Point",
  description:
    "IET Service Point in Inuvil, Jaffna provides three-wheeler service, repairs and TVS genuine parts. TVS Authorized Three-Wheeler Dealer.",
  alternates: {
    canonical: "https://ietservice.lk/",
    languages: {
      "en-LK": "https://ietservice.lk/",
      "ta-LK": "https://ietservice.lk/ta/",
      "si-LK": "https://ietservice.lk/si/",
    },
  },
};
```

## Robots

Example:

```txt
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://ietservice.lk/sitemap.xml
```

Do not block CSS/JS needed to render pages.

## Sitemap

Include only canonical indexable URLs.

Exclude:
- admin
- search results
- preview
- duplicate filters
- thank-you pages
- incomplete/noindexed branch-2 page

One sitemap is enough initially.

## Canonical

Every normal page should self-canonical.

Language pages should be self-canonical, not canonicalized back to English.

## Hreflang

```html
<link rel="alternate" hreflang="en-LK" href="https://ietservice.lk/services/three-wheeler-service/" />
<link rel="alternate" hreflang="ta-LK" href="https://ietservice.lk/ta/services/three-wheeler-service/" />
<link rel="alternate" hreflang="si-LK" href="https://ietservice.lk/si/services/three-wheeler-service/" />
<link rel="alternate" hreflang="x-default" href="https://ietservice.lk/services/three-wheeler-service/" />
```

Each language set should be reciprocal.

## Core Web Vitals targets

- LCP < 2.5 s
- INP < 200 ms
- CLS < 0.1

Implementation:
- avoid autoplay video hero
- preload only critical font subset
- responsive images
- lazy load below fold
- minimize icon libraries
- minimize third-party scripts
- use server components by default

## Image SEO

Use:
- original workshop images
- descriptive filenames
- meaningful alt text
- explicit dimensions
- modern formats
- stable image URLs

Good filename:
`iet-service-point-three-wheeler-brake-service-jaffna.jpg`

## JavaScript

Google can render JavaScript, but simpler server-rendered HTML reduces failure points.

Avoid:
- service copy loaded only after click
- core content from client-only fetch
- canvas text
- image-only text sections

## Uptime / 502 priority

During research, a direct fetch of `https://ietservice.lk` returned a 502 Bad Gateway response. This could have been transient, but before launch verify:

- origin health
- DNS
- SSL
- Cloudflare proxy
- upstream app/server
- health checks
- page cache
- uptime monitoring

All core pages should reliably return HTTP 200.

## Redirect strategy

- force HTTPS
- choose one canonical host; non-www is reasonable if already used
- 301 other variants
- consistent trailing-slash policy
- avoid chains

## Cloudflare / bot protection

Do not challenge legitimate crawlers. Protect admin/API instead.

Test:
- Googlebot
- Bingbot
- OAI-SearchBot

## IndexNow

Implement for Bing-compatible engines after meaningful new/updated pages, if technically suitable.

---

# Structured data

## Homepage LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "AutoPartsStore"],
  "@id": "https://ietservice.lk/#business",
  "name": "IET Service Point",
  "url": "https://ietservice.lk/",
  "telephone": "+94752530495",
  "email": "hello@ietservice.lk",
  "description": "Three-wheeler service business and TVS Authorized Three-Wheeler Dealer in Inuvil, Jaffna, Sri Lanka.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kanthaswamy Kovil Road, Inuvil West",
    "addressLocality": "Jaffna",
    "addressRegion": "Northern Province",
    "addressCountry": "LK"
  },
  "areaServed": [
    { "@type": "City", "name": "Jaffna" },
    { "@type": "AdministrativeArea", "name": "Northern Province" }
  ],
  "founder": {
    "@id": "https://ietservice.lk/about/j-sujinthan/#person"
  }
}
```

Add `image`, `logo`, `geo`, `openingHoursSpecification` and verified `sameAs` only after confirming real values.

## J. Sujinthan Person

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ietservice.lk/about/j-sujinthan/#person",
  "name": "J. Sujinthan",
  "jobTitle": "Managing Director",
  "worksFor": { "@id": "https://ietservice.lk/#business" },
  "url": "https://ietservice.lk/about/j-sujinthan/"
}
```

## S. Jeyakumar Person

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ietservice.lk/about/s-jeyakumar/#person",
  "name": "S. Jeyakumar",
  "honorificSuffix": "M.E",
  "jobTitle": "Mentor & Advisor",
  "url": "https://ietservice.lk/about/s-jeyakumar/"
}
```

If `worksFor` is not operationally/legal accurate for the mentor, omit it.

## Service schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Three-Wheeler Service",
  "provider": { "@id": "https://ietservice.lk/#business" },
  "areaServed": { "@type": "City", "name": "Jaffna" },
  "url": "https://ietservice.lk/services/three-wheeler-service/"
}
```

## MotorcycleRepair — conditional

Use `MotorcycleRepair` only if IET really services motorcycles. Do not connect TVS three-wheeler authorization to motorcycle authorization.

## Breadcrumb

Use `BreadcrumbList` on all internal pages.

## Product

Use `Product`/`Offer` only for actual parts with truthful price/availability.

Do not create fake product stock.

## FAQ

Google removed FAQ rich-result display in 2026. FAQs remain useful visible content, but do not implement them expecting a Google FAQ rich snippet.

## Branch 2

Do not add LocalBusiness markup until the branch is confirmed, real and eligible.
