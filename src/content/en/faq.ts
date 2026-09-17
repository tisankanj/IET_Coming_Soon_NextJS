import { BUSINESS } from "@/config/site";
import type { FaqItem } from "@/content/types";

// Direct answers first (docs/04-geo-aeo-ai-search.md). The motorcycle question stays out until the service is confirmed.

export const FAQS: FaqItem[] = [
  {
    question: "Is IET Service Point a TVS authorized dealer?",
    answer:
      "Yes. IET Service Point is a TVS Authorized Three-Wheeler Dealer and an Authorized TVS Genuine Parts Seller, based in Inuvil West, Jaffna.",
  },
  {
    question: "Is the TVS authorization for motorcycles or three-wheelers?",
    answer:
      "Our current TVS authorization is for three-wheelers only. It is not a TVS motorcycle authorization.",
  },
  {
    question: "Do you sell TVS genuine parts?",
    answer:
      "Yes. IET Service Point in Inuvil, Jaffna supplies TVS genuine parts for supported three-wheeler models. Send your vehicle model or a photo of the part to confirm availability before you visit.",
  },
  {
    question: "Where is IET Service Point located?",
    answer: `Our workshop is on ${BUSINESS.address.street}, ${BUSINESS.address.locality}, in Sri Lanka's Northern Province.`,
  },
  {
    question: "How can I book a service?",
    answer: `Use the online booking form, call ${BUSINESS.phoneDisplay} or message us on WhatsApp. After you send a booking, we confirm the time with you on WhatsApp or by phone.`,
  },
  {
    question: "Can I send a part photo before visiting?",
    answer:
      "Yes. Send a photo of the old part, your vehicle model and the part number if you have it. We confirm availability before you travel.",
  },
  {
    question: "Do you repair electrical problems?",
    answer:
      "Yes. We check and repair battery, charging, starter, wiring, lighting, indicator, switch and fuse faults on three-wheelers.",
  },
  {
    question: "Do you do brake service?",
    answer:
      "Yes. We inspect brake response, noise and wear, adjust the brakes and advise when parts need replacing.",
  },
  {
    question: "Do you service commercial three-wheelers?",
    answer:
      "Yes. Many three-wheelers work every day carrying passengers or goods. Tell us how the vehicle is used so we can plan the right checks.",
  },
  {
    question: "Do you serve customers outside Jaffna?",
    answer:
      "Yes. Customers from other parts of the Northern Province visit our Inuvil workshop. Please call before you travel so we can confirm service or parts availability.",
  },
  {
    question: "Is a second branch opening?",
    answer:
      "Yes. A second branch is being prepared as part of our growth plan for Northern Sri Lanka. The location and opening details will be announced after they are confirmed.",
  },
];
