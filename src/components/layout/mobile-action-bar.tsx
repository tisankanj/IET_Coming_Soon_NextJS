import Link from "next/link";
import { CalendarCheckIcon, PhoneIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ROUTES } from "@/config/routes";
import { CONTACT_LINKS } from "@/config/site";

const itemClass =
  "flex min-h-14 flex-col items-center justify-center gap-1 text-xs font-semibold transition-colors";

// Sticky Call / WhatsApp / Book bar for phones and tablets (frontend spec section 6).
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-midnight-950 pb-[env(safe-area-inset-bottom)] text-white lg:hidden"
    >
      <ul className="grid grid-cols-3">
        <li>
          <a
            href={CONTACT_LINKS.call}
            data-track="click_call"
            data-track-location="action_bar"
            className={`${itemClass} text-white/85 hover:text-white`}
          >
            <PhoneIcon className="size-5" aria-hidden="true" />
            Call
          </a>
        </li>
        <li>
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_whatsapp"
            data-track-location="action_bar"
            className={`${itemClass} text-white/85 hover:text-white`}
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </a>
        </li>
        <li>
          <Link
            href={ROUTES.bookService}
            className={`${itemClass} bg-primary text-primary-foreground hover:bg-brand-orange-strong`}
          >
            <CalendarCheckIcon className="size-5" aria-hidden="true" />
            Book
          </Link>
        </li>
      </ul>
    </nav>
  );
}
