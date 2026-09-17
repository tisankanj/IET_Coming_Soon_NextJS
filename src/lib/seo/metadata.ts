import type { Metadata } from "next";

import { BUSINESS } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

// Every indexable page gets a unique title, description, self canonical, Open Graph and Twitter tags.
// The share image is a static file: a generated image route would redirect under trailingSlash.
const SHARE_IMAGE = {
  url: "/og/iet-service-point.png",
  width: 1200,
  height: 630,
  alt: "IET Service Point, TVS Authorized Three-Wheeler Dealer in Inuvil, Jaffna",
};

export function buildMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: BUSINESS.name,
      locale: "en_LK",
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
