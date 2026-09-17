import Link from "next/link";
import { ShieldCheckIcon } from "lucide-react";

import { TvsLogo } from "@/components/brand/tvs-logo";
import { SiteImage } from "@/components/media/site-image";
import { KeepHyphenWords } from "@/components/shared/keep-hyphen-words";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";

const textLinkClass =
  "font-semibold text-link underline decoration-current/30 underline-offset-[6px] hover:decoration-current";

export function TvsAuthority() {
  return (
    <section data-track-view="view_tvs_authority" className="bg-surface-soft section-y">
      <div className="container-wide">
        <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.14em] text-brand-blue uppercase dark:text-brand-cyan">
              Authorization
            </p>
            <h2 className="mt-4 text-headline font-bold">
              <KeepHyphenWords text={BUSINESS.authorization} />
            </h2>
            <p className="mt-6 text-lead text-subtle-foreground">
              IET Service Point is a {BUSINESS.authorization} and {BUSINESS.partsAuthorization} in Inuvil
              West, Jaffna. We make TVS three-wheeler support, genuine parts and reliable workshop service
              easier to reach in Northern Sri Lanka.
            </p>
          </div>
          <TvsLogo className="w-64 shrink-0 sm:w-80 lg:w-96" />
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="relative aspect-[4/3] overflow-hidden frame-asym sm:aspect-[16/9] lg:aspect-[21/9]">
            <SiteImage image="tvsDealerBoard" sizes="(min-width: 1440px) 90rem, 100vw" />
          </div>

          <div className="relative mx-4 -mt-10 rounded-panel border bg-card p-6 shadow-soft sm:mx-8 sm:p-8 lg:absolute lg:bottom-10 lg:left-10 lg:mx-0 lg:mt-0 lg:max-w-md">
            <div className="flex gap-4">
              <ShieldCheckIcon className="size-7 shrink-0 text-brand-orange" aria-hidden="true" />
              <div>
                <p className="font-display text-lg font-semibold">Authorization scope</p>
                <p className="mt-2 text-subtle-foreground">
                  Our TVS authorization is for three-wheelers. It does not cover TVS motorcycles.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button asChild variant="outline">
                <Link href={ROUTES.tvsDealer}>Authorization details</Link>
              </Button>
              <Link href={`${ROUTES.genuineParts}#enquiry`} className={textLinkClass}>
                Ask about a part
              </Link>
              <a
                href={CONTACT_LINKS.directions}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_directions"
                data-track-location="tvs_authority"
                className={textLinkClass}
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
