import Link from "next/link";

import { GearRing } from "@/components/brand/gear-ring";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80dvh] items-center overflow-hidden bg-midnight-950 text-white">
      <GearRing
        className="absolute top-1/2 -right-40 -z-10 w-[40rem] -translate-y-1/2 text-white/[0.06]"
        strokeWidth={2}
      />
      <div className="container-wide pt-28 pb-20">
        <p className="font-display text-7xl font-bold text-brand-orange tabular-nums">404</p>
        <h1 className="mt-6 text-headline font-bold">This page could not be found.</h1>
        <p className="mt-6 max-w-xl text-lead text-mist">
          The link may be old or mistyped. These pages can help you get where you need to go.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={ROUTES.home}>Go to the homepage</Link>
          </Button>
          <Button asChild size="lg" variant="inverse">
            <Link href={ROUTES.services}>View services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
