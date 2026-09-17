import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ADDRESS_ONE_LINE, BUSINESS, CONTACT_LINKS, SOCIAL_LINKS } from "@/config/site";

const METHODS = [
  {
    label: "Call",
    value: BUSINESS.phoneDisplay,
    href: CONTACT_LINKS.call,
    icon: PhoneIcon,
    track: "click_call",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Message us",
    href: CONTACT_LINKS.whatsapp,
    icon: WhatsAppIcon,
    track: "click_whatsapp",
    external: true,
  },
  {
    label: "Email",
    value: BUSINESS.email,
    href: CONTACT_LINKS.email,
    icon: MailIcon,
    track: undefined,
    external: false,
  },
  {
    label: "Visit",
    value: ADDRESS_ONE_LINE,
    href: CONTACT_LINKS.directions,
    icon: MapPinIcon,
    track: "click_directions",
    external: true,
  },
  {
    label: "Instagram",
    value: "@ietservicepoint",
    href: SOCIAL_LINKS.instagram,
    icon: InstagramIcon,
    track: "click_social",
    external: true,
  },
  {
    label: "Facebook",
    value: BUSINESS.name,
    href: SOCIAL_LINKS.facebook,
    icon: FacebookIcon,
    track: "click_social",
    external: true,
  },
];

export function ContactMethods({ location }: { location: string }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {METHODS.map((method) => {
        const Icon = method.icon;
        return (
          <li key={method.label}>
            <a
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              data-track={method.track}
              data-track-location={method.track ? location : undefined}
              className="group flex h-full items-start gap-4 rounded-panel border bg-card p-6 transition-colors hover:border-foreground/40"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-control bg-brand-orange/10 text-brand-orange">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-muted-foreground">{method.label}</span>
                <span className="mt-1 block font-display text-lg font-semibold break-words tabular-nums">
                  {method.value}
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
