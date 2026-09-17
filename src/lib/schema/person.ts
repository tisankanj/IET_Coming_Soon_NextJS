import { personRoute } from "@/config/routes";
import { SITE_URL } from "@/config/site";
import type { Person } from "@/content/types";
import { BUSINESS_SCHEMA_ID } from "@/lib/schema/local-business";

export function buildPersonSchema(person: Person) {
  const url = `${SITE_URL}${personRoute(person.slug)}`;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: person.name,
    ...(person.honorificSuffix ? { honorificSuffix: person.honorificSuffix } : {}),
    jobTitle: person.role,
    // Both profiles state the role at IET on the page itself, so the link to the business is visible content.
    worksFor: { "@id": BUSINESS_SCHEMA_ID },
    url,
  };
}
