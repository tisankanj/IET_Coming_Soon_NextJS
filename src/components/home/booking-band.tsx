import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { SiteImage } from "@/components/media/site-image";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { CONTACT_LINKS } from "@/config/site";

export function BookingBand() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight-950 text-white">
      <div className="absolute inset-0 -z-10">
        <SiteImage image="bookingNightRoad" sizes="100vw" className="object-[90%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-950 via-midnight-950/85 to-midnight-950/20" />
      </div>

      <div className="container-wide py-24 lg:py-36">
        <div className="reveal max-w-xl">
          <h2 className="text-headline font-bold">Book your next service.</h2>
          <p className="mt-6 text-lead text-mist">
            Tell us about your three-wheeler and choose a time that suits you. We confirm your booking on
            WhatsApp.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={ROUTES.bookService}>
                Book a service
                <ArrowRightIcon
                  className="transition-transform group-hover/button:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild size="lg" variant="inverse">
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp"
                data-track-location="booking_band"
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
