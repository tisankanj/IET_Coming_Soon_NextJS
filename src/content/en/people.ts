import type { PersonSlug } from "@/config/routes";
import type { Person } from "@/content/types";

// Profiles use only the draft text in docs/06-leadership-branches-brand-story.md.
// Do not add institutions, history, awards or qualifications without written confirmation.

export const PEOPLE: Person[] = [
  {
    slug: "j-sujinthan",
    name: "J. Sujinthan",
    displayName: "J. Sujinthan",
    role: "Managing Director",
    summary:
      "Leads IET Service Point with a focus on customer trust, reliable service, genuine-parts access and long-term workshop development.",
    metaTitle: "J. Sujinthan | Managing Director, IET Service Point Jaffna",
    metaDescription:
      "J. Sujinthan is the Managing Director of IET Service Point in Inuvil, Jaffna, a TVS Authorized Three-Wheeler Dealer focused on reliable service and genuine parts.",
    h1: "J. Sujinthan, Managing Director of IET Service Point",
    profile: [
      "J. Sujinthan is the Managing Director of IET Service Point, a growing automotive service business based in Inuvil West, Jaffna.",
      "He leads the business with a focus on customer trust, reliable service, genuine-parts access and long-term workshop development. Under his leadership, IET Service Point completed its first year of operations and established its presence as a TVS Authorized Three-Wheeler Dealer and Authorized TVS Genuine Parts Seller.",
    ],
    focusTitle: "The next phase",
    focusAreas: [
      "Stronger service facilities",
      "Digital service booking",
      "Improved customer support",
      "Expanded technical capability",
      "Future branch growth across Northern Sri Lanka",
    ],
    image: "jSujinthanPortrait",
  },
  {
    slug: "s-jeyakumar",
    name: "S. Jeyakumar",
    displayName: "S. Jeyakumar (M.E)",
    honorificSuffix: "M.E",
    role: "Mentor & Advisor",
    summary:
      "Provides guidance that supports IET's technical development, service quality and long-term growth.",
    metaTitle: "S. Jeyakumar (M.E) | Mentor & Advisor | IET Service Point",
    metaDescription:
      "S. Jeyakumar (M.E) is Mentor & Advisor to IET Service Point in Inuvil, Jaffna, guiding technical development, service quality and long-term growth.",
    h1: "S. Jeyakumar (M.E), Mentor & Advisor",
    profile: [
      "S. Jeyakumar (M.E) serves as a mentor and advisor to IET Service Point, providing guidance that supports the business's technical development, service quality and long-term growth.",
    ],
    focusTitle: "Areas of guidance",
    focusAreas: ["Technical development", "Service quality", "Long-term growth"],
    image: "sJeyakumarPortrait",
  },
];

export function getPerson(slug: PersonSlug) {
  return PEOPLE.find((person) => person.slug === slug);
}
