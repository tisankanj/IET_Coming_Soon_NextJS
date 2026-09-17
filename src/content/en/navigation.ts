import { personRoute, ROUTES, serviceRoute } from "@/config/routes";
import type { NavItem } from "@/content/types";

// Primary navigation from the design system doc (section 10).
export const PRIMARY_NAV: NavItem[] = [
  { label: "Services", href: ROUTES.services },
  { label: "Genuine Parts", href: ROUTES.genuineParts },
  { label: "TVS Dealer", href: ROUTES.tvsDealer },
  { label: "Branches", href: ROUTES.branches },
  { label: "About", href: ROUTES.about },
  { label: "Partners", href: ROUTES.partners },
];

export const SECONDARY_NAV: NavItem[] = [
  { label: "FAQ", href: ROUTES.faq },
  { label: "Contact", href: ROUTES.contact },
];

export const FOOTER_GROUPS: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "Services",
    links: [
      { label: "Three-wheeler service", href: serviceRoute("three-wheeler-service") },
      { label: "Repairs", href: serviceRoute("three-wheeler-repair") },
      { label: "Oil service", href: serviceRoute("oil-service") },
      { label: "Brake service", href: serviceRoute("brake-service") },
      { label: "Electrical repair", href: serviceRoute("electrical-repair") },
      { label: "All services", href: ROUTES.services },
    ],
  },
  {
    title: "TVS & parts",
    links: [
      { label: "TVS Authorized Dealer", href: ROUTES.tvsDealer },
      { label: "TVS genuine parts", href: ROUTES.genuineParts },
      { label: "Jaffna service area", href: ROUTES.jaffna },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About IET", href: ROUTES.about },
      { label: "J. Sujinthan", href: personRoute("j-sujinthan") },
      { label: "S. Jeyakumar (M.E)", href: personRoute("s-jeyakumar") },
      { label: "Branches", href: ROUTES.branches },
      { label: "FAQ", href: ROUTES.faq },
    ],
  },
  {
    title: "Work with us",
    links: [
      { label: "Partnerships", href: ROUTES.partners },
      { label: "Book a service", href: ROUTES.bookService },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
];

export const TAGLINE = "Trusted Service. Genuine Parts. Better Journeys.";
