import { Suspense } from "react";
import { PhoneIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";
import { BookingForm } from "@/features/enquiries/components/booking-form";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Book a Three-Wheeler Service | IET Service Point, Jaffna",
  description:
    "Book a three-wheeler service at IET Service Point, Inuvil, Jaffna. Share your vehicle and service details online and we confirm the booking with you on WhatsApp.",
  path: ROUTES.bookService,
});

const NEXT_STEPS = [
  "Fill in the four short steps.",
  "Tap Send on WhatsApp to share the details with us.",
  "We confirm the date and time with you.",
];

export default function BookServicePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Book a service", path: ROUTES.bookService }]}
        title="Book Your Vehicle Service"
        intro="Four short steps. We confirm the date and time with you on WhatsApp or by phone."
      />

      <section className="section-y">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div>
            <noscript>
              <p className="mb-6 rounded-panel border p-5 text-subtle-foreground">
                The booking form needs JavaScript. You can call {BUSINESS.phoneDisplay} or message us on
                WhatsApp instead.
              </p>
            </noscript>
            <Suspense
              fallback={<div className="min-h-[36rem] rounded-panel border bg-card" aria-hidden="true" />}
            >
              <BookingForm />
            </Suspense>
          </div>

          <aside className="flex h-fit flex-col gap-4 lg:sticky lg:top-28">
            <div className="rounded-panel bg-midnight-950 p-6 text-white">
              <p className="font-display text-lg font-semibold">What happens next</p>
              <ol className="mt-5 space-y-4">
                {NEXT_STEPS.map((stepText, index) => (
                  <li key={stepText} className="flex gap-4 text-mist">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-brand-orange/60 text-sm font-semibold text-brand-orange tabular-nums">
                      {index + 1}
                    </span>
                    {stepText}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-panel border bg-card p-6">
              <p className="font-display text-lg font-semibold">Prefer to talk?</p>
              <div className="mt-4 flex flex-col gap-3">
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={CONTACT_LINKS.call}
                    data-track="click_call"
                    data-track-location="booking_aside"
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
                    data-track-location="booking_aside"
                  >
                    <WhatsAppIcon />
                    WhatsApp us
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
