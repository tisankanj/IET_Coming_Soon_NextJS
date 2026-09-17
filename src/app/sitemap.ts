import type { MetadataRoute } from "next";

import { PERSON_SLUGS, personRoute, ROUTES, SERVICE_SLUGS, serviceRoute } from "@/config/routes";
import { SITE_URL } from "@/config/site";

// Canonical, indexable URLs only (docs/07-technical-nextjs-schema.md).
export default function sitemap(): MetadataRoute.Sitemap {
  const paths: string[] = [
    ROUTES.home,
    ROUTES.services,
    ...SERVICE_SLUGS.map((slug) => serviceRoute(slug)),
    ROUTES.tvsDealer,
    ROUTES.genuineParts,
    ROUTES.jaffna,
    ROUTES.branches,
    ROUTES.inuvilBranch,
    ROUTES.about,
    ...PERSON_SLUGS.map((slug) => personRoute(slug)),
    ROUTES.partners,
    ROUTES.contact,
    ROUTES.bookService,
    ROUTES.faq,
  ];

  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
