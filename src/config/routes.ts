// All internal URLs end with a slash to match next.config trailingSlash and the SEO pack.

export const ROUTES = {
  home: "/",
  services: "/services/",
  tvsDealer: "/tvs-authorized-three-wheeler-dealer/",
  genuineParts: "/tvs-genuine-parts/",
  jaffna: "/service-areas/jaffna/",
  branches: "/branches/",
  inuvilBranch: "/branches/inuvil/",
  about: "/about/",
  partners: "/partners/",
  contact: "/contact/",
  bookService: "/book-service/",
  faq: "/faq/",
} as const;

export const SERVICE_SLUGS = [
  "three-wheeler-service",
  "three-wheeler-repair",
  "oil-service",
  "greasing",
  "brake-service",
  "electrical-repair",
  "engine-diagnostics-repair",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const PERSON_SLUGS = ["j-sujinthan", "s-jeyakumar"] as const;

export type PersonSlug = (typeof PERSON_SLUGS)[number];

export function serviceRoute(slug: ServiceSlug) {
  return `/services/${slug}/`;
}

export function personRoute(slug: PersonSlug) {
  return `/about/${slug}/`;
}
