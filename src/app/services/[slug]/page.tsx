import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";

import { SiteImage } from "@/components/media/site-image";
import { BookingAside } from "@/components/services/booking-aside";
import { ServiceSections } from "@/components/services/service-sections";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqList } from "@/components/shared/faq-list";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceJourney } from "@/components/shared/service-journey";
import { Button } from "@/components/ui/button";
import { ROUTES, SERVICE_SLUGS, serviceRoute, type ServiceSlug } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";
import { getServicePage } from "@/content/en/services";
import { buildServiceSchema } from "@/lib/schema/service";
import { buildMetadata } from "@/lib/seo/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

function findService(slug: string) {
  const isKnownSlug = SERVICE_SLUGS.some((known) => known === slug);
  return isKnownSlug ? getServicePage(slug as ServiceSlug) : undefined;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const match = findService(slug);
  if (!match) {
    return {};
  }
  return buildMetadata({
    title: match.page.metaTitle,
    description: match.page.metaDescription,
    path: serviceRoute(match.page.slug),
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const match = findService(slug);
  if (!match) {
    notFound();
  }

  const { service, page } = match;
  const bookingHref = `${ROUTES.bookService}?service=${service.id}`;
  const relatedServices = page.related
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((related) => related !== undefined);

  return (
    <>
      <JsonLd data={buildServiceSchema(service.name, page)} />
      <PageHero
        breadcrumbs={[
          { name: "Services", path: ROUTES.services },
          { name: service.name, path: serviceRoute(page.slug) },
        ]}
        title={page.h1}
        intro={page.intro}
        image={service.image}
      >
        <Button asChild size="lg">
          <Link href={bookingHref}>Book a service</Link>
        </Button>
        <Button asChild size="lg" variant="inverse">
          <a
            href={CONTACT_LINKS.call}
            data-track="click_call"
            data-track-location="service_hero"
            className="tabular-nums"
          >
            <PhoneIcon aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <div className="section-y">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <ServiceSections sections={page.sections} />
          <div>
            <BookingAside
              title={`Book ${service.name.toLowerCase()}`}
              body="Choose a time online. We confirm the booking with you on WhatsApp or by phone."
              bookingHref={bookingHref}
              location="service_aside"
            />
          </div>
        </div>
      </div>

      <ServiceJourney />
      {page.faqs.length > 0 && <FaqList items={page.faqs} />}

      <section className="pb-4">
        <div className="container-wide">
          <h2 className="font-display text-title font-semibold">Related services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {relatedServices.map(({ service: related, page: relatedPage }) => (
              <li key={relatedPage.slug}>
                <Link
                  href={serviceRoute(relatedPage.slug)}
                  className="group flex items-center gap-4 rounded-panel border bg-card p-3 pr-5 font-semibold transition-colors hover:border-foreground/40"
                >
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-chip">
                    <SiteImage image={related.image} sizes="4rem" />
                  </span>
                  {related.name}
                  <ArrowRightIcon
                    className="ml-auto size-4 shrink-0 text-brand-orange transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand location="service_cta" bookingHref={bookingHref} />
    </>
  );
}
