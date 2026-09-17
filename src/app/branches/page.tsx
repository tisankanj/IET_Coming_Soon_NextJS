import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "lucide-react";

import { SiteImage } from "@/components/media/site-image";
import { CtaBand } from "@/components/shared/cta-band";
import { GrowthPhases } from "@/components/shared/growth-phases";
import { KeepHyphenWords } from "@/components/shared/keep-hyphen-words";
import { PageHero } from "@/components/shared/page-hero";
import { ROUTES } from "@/config/routes";
import { ADDRESS_ONE_LINE, BUSINESS, CONTACT_LINKS } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "IET Service Point Branches | Inuvil, Jaffna",
  description:
    "IET Service Point Branch 01 in Inuvil West, Jaffna has completed its first year. A second branch is coming soon. Visit, call or book online.",
  path: ROUTES.branches,
});

export default function BranchesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Branches", path: ROUTES.branches }]}
        title="Our Branches"
        intro="Branch 01 in Inuvil West has completed its first year. The next branch is being prepared as part of our growth plan for Northern Sri Lanka."
      />

      <section className="section-y">
        <div className="container-wide grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <article className="overflow-hidden rounded-panel border bg-card">
            <div className="relative aspect-[16/9] overflow-hidden">
              <SiteImage image="workshopExterior" sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-display text-5xl font-bold text-brand-orange tabular-nums">01</p>
              <h2 className="mt-3 font-display text-title font-semibold">IET Service Point, Inuvil</h2>
              <p className="mt-3 flex items-start gap-3 text-subtle-foreground">
                <MapPinIcon className="mt-1 size-4 shrink-0 text-brand-orange" aria-hidden="true" />
                {ADDRESS_ONE_LINE}
              </p>
              <ul className="mt-6 grid gap-2 text-subtle-foreground sm:grid-cols-2">
                <li>Active branch</li>
                <li>First year completed</li>
                <li>Service and repair</li>
                <li>TVS genuine parts</li>
                <li className="sm:col-span-2">
                  <KeepHyphenWords text={BUSINESS.authorization} />
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href={ROUTES.inuvilBranch}
                  className="group/link inline-flex items-center gap-2 font-semibold text-link"
                >
                  Branch details
                  <ArrowRightIcon
                    className="size-4 transition-transform group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={CONTACT_LINKS.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_directions"
                  data-track-location="branches"
                  className="font-semibold text-link underline decoration-current/30 underline-offset-[6px] hover:decoration-current"
                >
                  Get directions
                </a>
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-panel border-2 border-dashed p-6 sm:p-8">
            <p className="font-display text-5xl font-bold text-transparent tabular-nums [-webkit-text-stroke:1.5px_var(--color-brand-orange)]">
              02
            </p>
            <div className="mt-10">
              <h2 className="font-display text-title font-semibold">Branch 02, coming soon</h2>
              <p className="mt-3 text-subtle-foreground">
                IET Service Point is preparing its next branch as part of our Northern Sri Lanka growth plan.
                Location and opening details will be announced after confirmation.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-surface-soft section-y">
        <div className="container-wide">
          <h2 className="reveal max-w-3xl text-headline font-bold">
            One branch established. The next phase is loading.
          </h2>
          <div className="mt-12 lg:mt-16">
            <GrowthPhases />
          </div>
        </div>
      </section>

      <CtaBand location="branches_cta" />
    </>
  );
}
