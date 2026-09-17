import type { SiteImageKey } from "@/config/images";
import type { PersonSlug, ServiceSlug } from "@/config/routes";

export type NavItem = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Symptom = {
  title: string;
  body: string;
};

export type ServiceSection =
  | { type: "checklist"; title: string; items: string[] }
  | { type: "symptoms"; title: string; items: Symptom[] }
  | { type: "prose"; title: string; paragraphs: string[] }
  | { type: "callout"; tone: "info" | "safety"; title: string; body: string };

export type ServicePage = {
  slug: ServiceSlug;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faqs: FaqItem[];
  related: ServiceSlug[];
};

export type Service = {
  id: string;
  name: string;
  summary: string;
  includes: string[];
  image: SiteImageKey;
  // Only services with real page content get their own URL.
  page?: ServicePage;
};

export type Person = {
  slug: PersonSlug;
  name: string;
  displayName: string;
  honorificSuffix?: string;
  role: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  profile: string[];
  focusTitle: string;
  focusAreas: string[];
  image: SiteImageKey;
};

export type PartnerCategory = {
  name: string;
  value: string;
};
