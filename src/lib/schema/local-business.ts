import { BUSINESS, SITE_URL, SOCIAL_LINKS } from "@/config/site";

export const BUSINESS_SCHEMA_ID = `${SITE_URL}/#business`;

// Matches docs/07-technical-nextjs-schema.md. `founder`, `geo` and opening hours stay out until the
// client confirms them, because schema must match visible content.
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "AutoPartsStore"],
    "@id": BUSINESS_SCHEMA_ID,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/logo-v2.png`,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
    description:
      "Three-wheeler service business and TVS Authorized Three-Wheeler Dealer in Inuvil, Jaffna, Sri Lanka.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.countryCode,
    },
    areaServed: [
      { "@type": "City", name: "Jaffna" },
      { "@type": "AdministrativeArea", name: "Northern Province" },
    ],
  };
}
