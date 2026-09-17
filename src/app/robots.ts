import type { MetadataRoute } from "next";

import { SITE_URL } from "@/config/site";

// Search and AI search crawlers are allowed (docs/04-geo-aeo-ai-search.md).
// Also check the Cloudflare bot settings so these crawlers are not challenged at the edge.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
