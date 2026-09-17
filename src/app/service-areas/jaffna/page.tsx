import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "lucide-react";

import { CtaBand } from "@/components/shared/cta-band";
import { FaqList } from "@/components/shared/faq-list";
import { JaffnaMap } from "@/components/shared/jaffna-map";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ROUTES, SERVICE_SLUGS, serviceRoute } from "@/config/routes";
import { ADDRESS_ONE_LINE, CONTACT_LINKS } from "@/config/site";
import { FAQS } from "@/content/en/faq";
import { getServiceNameBySlug } from "@/content/en/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Three-Wheeler Service Jaffna | Repair & TVS Genuine Parts | IET",
  description:
    "IET Service Point in Inuvil West supports Jaffna customers with three-wheeler servicing, maintenance, repairs and TVS genuine parts. Directions and online booking.",
  path: ROUTES.jaffna,
});

const AREA_FAQ_QUESTIONS = [
  "Where is IET Service Point located?",
  "Do you serve customers outside Jaffna?",
  "How can I book a service?",
];

export default function JaffnaPage() {
  const faqs = FAQS.filter((item) => AREA_FAQ_QUESTIONS.includes(item.question));

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Jaffna service area", path: ROUTES.jaffna }]}
        title="Three-Wheeler Service for Jaffna Customers"
        intro="IET Service Point is located in Inuvil West and supports customers from Jaffna and surrounding communities with three-wheeler servicing, maintenance, repair and TVS genuine parts."
        image="jaffnaPalmyraRoad"
      >
        <Button asChild size="lg">
          <a
            href={CONTACT_LINKS.directions}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_directions"
            data-track-location="jaffna_hero"
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
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="reveal">
            <h2 className="text-headline font-bold">Find the workshop.</h2>
            <p className="mt-6 flex items-start gap-3 text-lead text-subtle-foreground">
              <MapPinIcon className="mt-1.5 size-5 shrink-0 text-brand-orange" aria-hidden="true" />
              {ADDRESS_ONE_LINE}
            </p>
            <p className="mt-4 text-muted-foreground">
              Please call before you visit to confirm opening hours.
            </p>
          </div>
          <div className="rounded-panel border bg-surface-soft p-4 sm:p-8">
            <JaffnaMap />
          </div>
        </div>
      </section>

      <section className="bg-surface-soft section-y">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <h2 className="text-headline font-bold">Services for Jaffna customers.</h2>
            <p className="mt-6 text-lead text-subtle-foreground">
              Servicing, repairs and maintenance for three-wheelers, plus TVS genuine parts from an authorized
              seller.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={serviceRoute(slug)}
                  className="group flex items-center justify-between gap-4 rounded-panel border bg-card p-5 font-semibold transition-colors hover:border-foreground/40"
                >
                  {getServiceNameBySlug(slug)}
                  <ArrowRightIcon
                    className="size-4 text-brand-orange transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={ROUTES.genuineParts}
                className="group flex items-center justify-between gap-4 rounded-panel border bg-card p-5 font-semibold transition-colors hover:border-foreground/40"
              >
                TVS genuine parts
                <ArrowRightIcon
                  className="size-4 text-brand-orange transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="reveal container-text">
          <h2 className="text-headline font-bold">Customers from across the North.</h2>
          <p className="mt-6 text-lead text-subtle-foreground">
            Our workshop is based in Inuvil, Jaffna. Customers from other Northern areas are welcome. Please
            contact us before you travel so we can confirm service or parts availability.
          </p>
        </div>
      </section>

      <FaqList items={faqs} title="Location questions" />
      <CtaBand location="jaffna_cta" />
    </>
  );
}
