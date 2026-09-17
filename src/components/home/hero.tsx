import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";

import { ServiceCore } from "@/components/home/service-core";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 tech-grid [mask-image:radial-gradient(ellipse_75%_70%_at_70%_45%,black,transparent)]"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-20 -z-10 h-40 w-full text-brand-orange/40"
      >
        <path
          d="M0 170 C 360 170 520 60 860 70 S 1260 150 1440 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <div className="container-wide grid items-center gap-12 pt-28 pb-28 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-36 lg:pb-40">
        <div>
          {/* One H1: the SEO phrase from the SEO pack sits on top of the approved design headline. */}
          <h1>
            <span className="block rise-in text-xs font-semibold tracking-[0.16em] text-brand-cyan uppercase sm:text-sm">
              Trusted three-wheeler service in Jaffna
            </span>
            <span className="mt-5 block lift-in text-display font-bold lg:text-hero">
              <span className="whitespace-nowrap">Three-wheeler</span> care.
            </span>
            <span className="block lift-in bg-gradient-to-r from-brand-gold via-brand-orange to-brand-red bg-clip-text pb-1 text-display font-bold text-transparent lg:text-hero">
              Built on trust.
            </span>
          </h1>

          <p className="mt-6 max-w-xl rise-in text-lead text-mist [--rise-order:2]">
            TVS authorized three-wheeler support, genuine parts and dependable service from Inuvil, Jaffna.
          </p>

          <div className="mt-9 flex rise-in flex-col gap-3 [--rise-order:3] sm:flex-row">
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
                href={CONTACT_LINKS.call}
                data-track="click_call"
                data-track-location="hero"
                className="tabular-nums"
              >
                <PhoneIcon aria-hidden="true" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>

        <div className="rise-in [--rise-order:2]">
          <ServiceCore />
        </div>
      </div>
    </section>
  );
}
