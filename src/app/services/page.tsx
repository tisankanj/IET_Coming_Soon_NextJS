import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";

import { SiteImage } from "@/components/media/site-image";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqList } from "@/components/shared/faq-list";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceJourney } from "@/components/shared/service-journey";
import { Button } from "@/components/ui/button";
import { ROUTES, serviceRoute } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";
import { FAQS } from "@/content/en/faq";
import { REPAIR_SERVICE, SERVICES } from "@/content/en/services";
import type { Service } from "@/content/types";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Three-Wheeler Services Jaffna | Service, Repair & Parts | IET",
  description:
    "Three-wheeler service, repairs, oil service, greasing, brakes, electrical and engine work at IET Service Point, Inuvil, Jaffna. TVS Authorized Three-Wheeler Dealer.",
  path: ROUTES.services,
});

const HUB_FAQ_QUESTIONS = [
  "Do you service commercial three-wheelers?",
  "How can I book a service?",
  "Do you serve customers outside Jaffna?",
];

function serviceHref(service: Service) {
  return service.page ? serviceRoute(service.page.slug) : `${ROUTES.bookService}?service=${service.id}`;
}

function serviceLinkLabel(service: Service) {
  return service.page ? "Service details" : "Book this service";
}

export default function ServicesPage() {
  const [completeService, ...otherServices] = SERVICES;
  const faqs = FAQS.filter((item) => HUB_FAQ_QUESTIONS.includes(item.question));

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Services", path: ROUTES.services }]}
        title="Three-Wheeler Services in Jaffna"
        intro="Routine service, repairs and maintenance for three-wheelers at our workshop in Inuvil West, with TVS genuine parts when you need them."
      >
        <Button asChild size="lg">
          <Link href={ROUTES.bookService}>Book a service</Link>
        </Button>
        <Button asChild size="lg" variant="inverse">
          <a
            href={CONTACT_LINKS.call}
            data-track="click_call"
            data-track-location="services_hero"
            className="tabular-nums"
          >
            <PhoneIcon aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-wide">
          <h2 className="sr-only">All services</h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[completeService, REPAIR_SERVICE].map((service, index) => (
              <li
                key={service.id}
                className="group relative flex flex-col overflow-hidden rounded-panel border bg-card lg:col-span-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* The first card's photo is this page's LCP element at every screen width. */}
                  <SiteImage
                    image={service.image}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    preload={index === 0}
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-title font-semibold">
                    <Link href={serviceHref(service)} className="after:absolute after:inset-0">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-subtle-foreground">{service.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-link">
                    {serviceLinkLabel(service)}
                    <ArrowRightIcon
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </li>
            ))}

            {otherServices.map((service) => (
              <li
                key={service.id}
                className="group relative flex flex-col overflow-hidden rounded-panel border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SiteImage
                    image={service.image}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">
                    <Link href={serviceHref(service)} className="after:absolute after:inset-0">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-subtle-foreground">{service.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-link">
                    {serviceLinkLabel(service)}
                    <ArrowRightIcon
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </li>
            ))}

            <li className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-panel border bg-midnight-950 p-6 text-white">
              <div>
                <h3 className="font-display text-title font-semibold">
                  Not sure what your three-wheeler needs?
                </h3>
                <p className="mt-2 max-w-xl text-mist">
                  Tell us what you notice. We inspect the vehicle and explain the work before anything starts.
                </p>
              </div>
              <Link
                href={`${ROUTES.bookService}?service=not-sure`}
                className="group/link inline-flex w-fit items-center gap-2 font-semibold text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white"
              >
                Book an inspection
                <ArrowRightIcon
                  className="size-4 transition-transform group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <ServiceJourney />
      <FaqList items={faqs} />
      <CtaBand location="services_cta" />
    </>
  );
}
