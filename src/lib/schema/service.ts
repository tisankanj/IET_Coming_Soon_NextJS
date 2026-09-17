import { serviceRoute } from "@/config/routes";
import { SITE_URL } from "@/config/site";
import type { ServicePage } from "@/content/types";
import { BUSINESS_SCHEMA_ID } from "@/lib/schema/local-business";

export function buildServiceSchema(serviceName: string, page: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: serviceName,
    description: page.intro,
    provider: { "@id": BUSINESS_SCHEMA_ID },
    areaServed: { "@type": "City", name: "Jaffna" },
    url: `${SITE_URL}${serviceRoute(page.slug)}`,
  };
}
