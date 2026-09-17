import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { SOCIAL_LINKS } from "@/config/site";

// One list for every place that links to the profiles: footer, contact page and about page.
export const SOCIAL_PROFILES = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: FacebookIcon },
];
