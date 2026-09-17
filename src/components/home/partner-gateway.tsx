import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { PartnerCategoryTiles } from "@/components/shared/partner-category-tiles";
import { ROUTES } from "@/config/routes";

export function PartnerGateway() {
  return (
    <section className="bg-surface-soft section-y">
      <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-4">
          <h2 className="text-headline font-bold">Build Northern Sri Lanka with IET.</h2>
          <p className="mt-6 text-lead text-subtle-foreground">
            We welcome discussions with vehicle brands, parts suppliers, oil companies, equipment providers
            and fleet operators looking for a Northern Province service and dealer partner.
          </p>
          <Link
            href={ROUTES.partners}
            className="group/link mt-6 inline-flex items-center gap-2 font-semibold text-link"
          >
            Why partner with IET
            <ArrowRightIcon
              className="size-4 transition-transform group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <PartnerCategoryTiles showEnquiryTile className="lg:col-span-8" />
      </div>
    </section>
  );
}
