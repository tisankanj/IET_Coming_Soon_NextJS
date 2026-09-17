import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { BookingBand } from "@/components/home/booking-band";
import { GenuinePartsStage } from "@/components/home/genuine-parts-stage";
import { HomeHero } from "@/components/home/hero";
import { JaffnaPresence } from "@/components/home/jaffna-presence";
import { Leadership } from "@/components/home/leadership";
import { PartnerGateway } from "@/components/home/partner-gateway";
import { ProofBar } from "@/components/home/proof-bar";
import { ServiceOs } from "@/components/home/service-os";
import { TvsAuthority } from "@/components/home/tvs-authority";
import { GrowthPhases } from "@/components/shared/growth-phases";
import { JsonLd } from "@/components/shared/json-ld";
import { KeepHyphenWords } from "@/components/shared/keep-hyphen-words";
import { ROUTES } from "@/config/routes";
import { SERVICES } from "@/content/en/services";
import { buildLocalBusinessSchema } from "@/lib/schema/local-business";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Three-Wheeler Service Jaffna | TVS Authorized Dealer | IET Service Point",
  description:
    "IET Service Point in Inuvil, Jaffna provides trusted three-wheeler service, repairs and TVS genuine parts. TVS Authorized Three-Wheeler Dealer. Call +94 75 253 0495.",
  path: ROUTES.home,
});

// Customer reviews (design system scene 07) are left out until real, consented reviews exist.
export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <HomeHero />
      <ProofBar />

      <section className="section-y">
        <div className="container-wide">
          <div className="reveal max-w-3xl">
            <h2 className="text-headline font-bold">
              <KeepHyphenWords text="Everything your three-wheeler needs. One trusted service point." />
            </h2>
            <p className="mt-6 text-lead text-subtle-foreground">Open a service to see what it covers.</p>
          </div>
          <div className="mt-12 lg:mt-16">
            <ServiceOs services={SERVICES} />
          </div>
          <Link
            href={ROUTES.services}
            className="group/link mt-10 inline-flex items-center gap-2 font-semibold text-link"
          >
            All services, including repairs
            <ArrowRightIcon
              className="size-4 transition-transform group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <TvsAuthority />
      <GenuinePartsStage />
      <JaffnaPresence />
      <Leadership />

      <section className="section-y">
        <div className="container-wide">
          <h2 className="reveal max-w-3xl text-headline font-bold">
            One branch established. The next phase is loading.
          </h2>
          <div className="mt-12 lg:mt-16">
            <GrowthPhases />
          </div>
        </div>
      </section>

      <PartnerGateway />
      <BookingBand />
    </>
  );
}
