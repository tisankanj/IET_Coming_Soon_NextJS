import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { PartnerCategoryTiles } from "@/components/shared/partner-category-tiles";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";
import { WHY_PARTNER } from "@/content/en/partners";
import { PartnerEnquiryForm } from "@/features/enquiries/components/partner-enquiry-form";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Automotive Partnership & Dealership Opportunities Northern Sri Lanka | IET",
  description:
    "Partner with IET Service Point in Jaffna. Dealership, service, oil and lubricant, spare-parts, equipment and fleet partnership discussions for Northern Sri Lanka.",
  path: ROUTES.partners,
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Partners", path: ROUTES.partners }]}
        title="Partner with IET Service Point in Northern Sri Lanka"
        intro="IET Service Point is a growing automotive service business based in Inuvil, Jaffna. Our first branch has completed one year of operations and the business is preparing for its next phase of expansion."
      >
        <Button asChild size="lg">
          <Link href="#enquiry">Discuss a partnership</Link>
        </Button>
        <Button asChild size="lg" variant="inverse">
          <a href={CONTACT_LINKS.email}>
            <MailIcon aria-hidden="true" />
            {BUSINESS.email}
          </a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-wide">
          <div className="reveal max-w-3xl">
            <h2 className="text-headline font-bold">Who we welcome.</h2>
            <p className="mt-6 text-lead text-subtle-foreground">
              We welcome strategic discussions with automotive manufacturers, vehicle distributors, motorcycle
              and three-wheeler brands, oil and lubricant companies, genuine and aftermarket spare-parts
              suppliers, battery and tyre brands, workshop equipment providers and fleet operators seeking a
              stronger presence in Northern Sri Lanka.
            </p>
          </div>
          <PartnerCategoryTiles className="mt-12" />
        </div>
      </section>

      <section className="bg-midnight-950 section-y text-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <h2 className="reveal text-headline font-bold lg:col-span-4">Why partner with IET.</h2>
          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-8">
            {WHY_PARTNER.map((reason) => (
              <li
                key={reason}
                className="reveal flex gap-4 border-t border-white/15 pt-5 text-lead text-mist"
              >
                <span aria-hidden="true" className="mt-3 h-0.5 w-5 shrink-0 bg-brand-orange" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquiry" className="section-y">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div>
            <h2 className="text-headline font-bold">Discuss a partnership.</h2>
            <p className="mt-6 max-w-2xl text-lead text-subtle-foreground">
              Share a few details and send them to us on WhatsApp, or email us directly.
            </p>
            <div className="mt-10">
              <PartnerEnquiryForm />
            </div>
          </div>
          <aside className="h-fit rounded-panel border bg-surface-soft p-6 lg:sticky lg:top-28">
            <p className="font-display text-lg font-semibold">Contact directly</p>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={CONTACT_LINKS.email}
                  className="flex items-center gap-3 font-semibold break-all text-link"
                >
                  <MailIcon className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_LINKS.call}
                  data-track="click_call"
                  data-track-location="partners_aside"
                  className="flex items-center gap-3 font-semibold text-link tabular-nums"
                >
                  <PhoneIcon className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
