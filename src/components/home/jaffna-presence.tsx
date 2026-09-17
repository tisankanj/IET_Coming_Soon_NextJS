import Link from "next/link";
import { MapPinIcon } from "lucide-react";

import { JaffnaMap } from "@/components/shared/jaffna-map";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";

export function JaffnaPresence() {
  return (
    <section className="section-y">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="reveal">
          <h2 className="text-headline font-bold">Serving Inuvil, Jaffna and Northern Sri Lanka.</h2>
          <p className="mt-6 text-lead text-subtle-foreground">
            Our workshop is on {BUSINESS.address.street}. Customers from Jaffna and across the North visit us
            for servicing, repairs and genuine parts.
          </p>
          <p className="mt-4 text-muted-foreground">
            Coming from further away? Call first so we can confirm service or parts availability.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild size="lg">
              <a
                href={CONTACT_LINKS.directions}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_directions"
                data-track-location="jaffna_presence"
              >
                <MapPinIcon aria-hidden="true" />
                Get directions
              </a>
            </Button>
            <Link
              href={ROUTES.jaffna}
              className="font-semibold text-link underline decoration-current/30 underline-offset-[6px] hover:decoration-current"
            >
              Jaffna service area
            </Link>
          </div>
        </div>

        <div className="rounded-panel border bg-surface-soft p-4 sm:p-8">
          <JaffnaMap />
        </div>
      </div>
    </section>
  );
}
