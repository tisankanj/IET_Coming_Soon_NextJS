import Link from "next/link";
import { ArrowRightIcon, CheckIcon, MapPinIcon } from "lucide-react";

import { SiteImage } from "@/components/media/site-image";
import { ContactMethods } from "@/components/shared/contact-methods";
import { CtaBand } from "@/components/shared/cta-band";
import { JaffnaMap } from "@/components/shared/jaffna-map";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";
import { buildLocalBusinessSchema } from "@/lib/schema/local-business";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "IET Service Point Inuvil | Branch 01, Jaffna",
  description:
    "IET Service Point Branch 01 on Kanthaswamy Kovil Road, Inuvil West, Jaffna. Three-wheeler service and repair, TVS genuine parts, directions and online booking.",
  path: ROUTES.inuvilBranch,
});

const BRANCH_FACTS = [
  "Active branch, first year completed",
  "Three-wheeler service and repair",
  BUSINESS.authorization,
  BUSINESS.partsAuthorization,
];

export default function InuvilBranchPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <PageHero
        breadcrumbs={[
          { name: "Branches", path: ROUTES.branches },
          { name: "Inuvil", path: ROUTES.inuvilBranch },
        ]}
        title="IET Service Point, Inuvil Branch"
        intro="Our first branch, on Kanthaswamy Kovil Road in Inuvil West, Jaffna. It has completed its first year of operations."
        image="workshopExterior"
      >
        <Button asChild size="lg">
          <a
            href={CONTACT_LINKS.directions}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_directions"
            data-track-location="inuvil_hero"
          >
            <MapPinIcon aria-hidden="true" />
            Get directions
          </a>
        </Button>
        <Button asChild size="lg" variant="inverse">
          <Link href={ROUTES.bookService}>Book a service</Link>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <h2 className="text-headline font-bold">At this branch.</h2>
            <ul className="mt-8 space-y-4">
              {BRANCH_FACTS.map((fact) => (
                <li key={fact} className="flex gap-3 border-t pt-4 text-lead text-subtle-foreground">
                  <CheckIcon className="mt-1 size-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
            <Link
              href={ROUTES.services}
              className="group/link mt-8 inline-flex items-center gap-2 font-semibold text-link"
            >
              All services
              <ArrowRightIcon
                className="size-4 transition-transform group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="relative aspect-[3/2] overflow-hidden frame-asym sm:col-span-2">
              <SiteImage image="serviceBay" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel">
              <SiteImage image="technicianAtWork" sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel">
              <SiteImage image="tvsDealerBoard" sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft section-y">
        <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="reveal text-headline font-bold">Visit or contact the branch.</h2>
            <p className="mt-6 text-muted-foreground">
              Please call before you visit to confirm opening hours.
            </p>
            <div className="mt-8">
              <ContactMethods location="inuvil_contact" />
            </div>
          </div>
          <div className="rounded-panel border bg-card p-4 sm:p-8">
            <JaffnaMap />
          </div>
        </div>
      </section>

      <CtaBand location="inuvil_cta" />
    </>
  );
}
