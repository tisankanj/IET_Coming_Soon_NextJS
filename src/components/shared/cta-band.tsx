import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";

import { GearRing } from "@/components/brand/gear-ring";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";

type CtaBandProps = {
  title?: string;
  body?: string;
  bookingHref?: string;
  location: string;
};

export function CtaBand({
  title = "Ready when your three-wheeler is.",
  body = "Book online, call us or send a WhatsApp message. We confirm every booking with you directly.",
  bookingHref = ROUTES.bookService,
  location,
}: CtaBandProps) {
  return (
    <section className="section-y">
      <div className="container-wide">
        <div className="relative isolate overflow-hidden rounded-panel bg-midnight-950 px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
          <GearRing
            className="absolute -top-1/3 -right-24 -z-10 w-[28rem] text-white/[0.06] sm:w-[36rem]"
            strokeWidth={2}
          />
          <h2 className="reveal max-w-2xl text-headline font-bold">{title}</h2>
          <p className="mt-5 max-w-xl text-lead text-mist">{body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href={bookingHref}>
                Book a service
                <ArrowRightIcon
                  className="transition-transform group-hover/button:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild size="lg" variant="inverse">
              <a
                href={CONTACT_LINKS.call}
                data-track="click_call"
                data-track-location={location}
                className="tabular-nums"
              >
                <PhoneIcon aria-hidden="true" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="inverse">
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
        </div>
      </div>
    </section>
  );
}
