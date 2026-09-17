import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ADDRESS_ONE_LINE, BUSINESS, CONTACT_LINKS } from "@/config/site";
import { FOOTER_GROUPS, TAGLINE } from "@/content/en/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-midnight-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent"
      />
      <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1.1fr_2fr] lg:gap-16 lg:py-20">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 font-display text-lg font-semibold text-white">{TAGLINE}</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            {BUSINESS.authorization} and {BUSINESS.partsAuthorization} in Inuvil West, Jaffna.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a
                href={CONTACT_LINKS.call}
                data-track="click_call"
                data-track-location="footer"
                className="inline-flex items-center gap-3 text-white/85 tabular-nums hover:text-white"
              >
                <PhoneIcon className="size-4 text-brand-orange" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp"
                data-track-location="footer"
                className="inline-flex items-center gap-3 text-white/85 hover:text-white"
              >
                <WhatsAppIcon className="size-4 text-brand-orange" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={CONTACT_LINKS.email}
                className="inline-flex items-center gap-3 text-white/85 hover:text-white"
              >
                <MailIcon className="size-4 text-brand-orange" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_LINKS.directions}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_directions"
                data-track-location="footer"
                className="inline-flex items-start gap-3 text-white/85 hover:text-white"
              >
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-brand-orange" aria-hidden="true" />
                {ADDRESS_ONE_LINE}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-sm font-semibold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-1.5 text-sm text-mist transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Inuvil, Jaffna, Northern Province, Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
