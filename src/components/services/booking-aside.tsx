import Link from "next/link";
import { PhoneIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";

type BookingAsideProps = {
  title: string;
  body: string;
  bookingHref: string;
  location: string;
};

export function BookingAside({ title, body, bookingHref, location }: BookingAsideProps) {
  return (
    <aside className="rounded-panel border bg-card p-6 lg:sticky lg:top-28">
      <p className="font-display text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm text-subtle-foreground">{body}</p>
      <div className="mt-6 flex flex-col gap-3">
        <Button asChild className="w-full">
          <Link href={bookingHref}>Book a service</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a
            href={CONTACT_LINKS.call}
            data-track="click_call"
            data-track-location={location}
            className="tabular-nums"
          >
            <PhoneIcon aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_whatsapp"
            data-track-location={location}
          >
            <WhatsAppIcon />
            WhatsApp us
          </a>
        </Button>
      </div>
    </aside>
  );
}
