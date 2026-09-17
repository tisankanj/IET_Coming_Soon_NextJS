import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { GearRing } from "@/components/brand/gear-ring";
import { SiteImage } from "@/components/media/site-image";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

const STEPS = [
  { title: "Send the details", body: "Your vehicle model, a photo of the old part or the part number." },
  { title: "We confirm availability", body: "We check the part before you travel." },
  { title: "Visit the workshop", body: "Collect your genuine part at our Inuvil workshop." },
];

// Product-stage section. One scan line passes over the parts as the section scrolls into view.
export function GenuinePartsStage() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight-950 section-y text-white">
      <div className="container-site text-center">
        <h2 className="reveal text-headline font-bold">TVS genuine parts in Jaffna.</h2>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lead text-mist">
          We supply TVS genuine parts for supported TVS three-wheelers. Tell us what you need and we confirm
          availability before you make the trip.
        </p>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-sm px-[var(--gutter)] sm:max-w-md">
        <GearRing
          className="absolute top-1/2 left-1/2 -z-10 w-[170%] max-w-none -translate-x-1/2 -translate-y-1/2 text-white/[0.06]"
          strokeWidth={1.5}
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-panel border border-white/10 shadow-deep">
          <SiteImage image="tvsGenuineParts" sizes="(min-width: 640px) 28rem, 90vw" />
          <div aria-hidden="true" className="scan-on-scroll absolute inset-0">
            <div className="h-px w-full bg-brand-orange shadow-[0_0_18px_4px_rgb(243_97_2/0.45)]" />
          </div>
        </div>
      </div>

      <ol className="container-site mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, index) => (
          <li key={step.title} className="reveal relative text-center md:px-4">
            {index < STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-5 left-[calc(50%+2.5rem)] hidden h-px w-[calc(100%-5rem)] bg-white/15 md:block"
              />
            )}
            <span className="mx-auto grid size-10 place-items-center rounded-full border border-brand-orange/60 font-display text-sm font-semibold text-brand-orange tabular-nums">
              {index + 1}
            </span>
            <p className="mt-4 font-display text-lg font-semibold">{step.title}</p>
            <p className="mt-2 text-mist">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="container-site mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Button asChild size="lg">
          <Link href={`${ROUTES.genuineParts}#enquiry`}>
            Ask about a part
            <ArrowRightIcon
              className="transition-transform group-hover/button:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Button>
        <Link
          href={`${ROUTES.genuineParts}#identify`}
          className="font-semibold text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white"
        >
          How to check genuine parts
        </Link>
      </div>
    </section>
  );
}
