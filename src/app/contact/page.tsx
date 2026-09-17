import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "lucide-react";

import { ContactMethods } from "@/components/shared/contact-methods";
import { JaffnaMap } from "@/components/shared/jaffna-map";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { ROUTES } from "@/config/routes";
import { BUSINESS } from "@/config/site";
import { buildLocalBusinessSchema } from "@/lib/schema/local-business";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact IET Service Point | Inuvil, Jaffna | +94 75 253 0495",
  description:
    "Contact IET Service Point on Kanthaswamy Kovil Road, Inuvil West, Jaffna. Call +94 75 253 0495, WhatsApp us or email hello@ietservice.lk. Directions and booking.",
  path: ROUTES.contact,
});

const QUICK_LINKS = [
  { label: "Book a service", href: ROUTES.bookService },
  { label: "Ask about a part", href: `${ROUTES.genuineParts}#enquiry` },
  { label: "Discuss a partnership", href: `${ROUTES.partners}#enquiry` },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <PageHero
        breadcrumbs={[{ name: "Contact", path: ROUTES.contact }]}
        title="Contact IET Service Point"
        intro="Call, message or visit our workshop in Inuvil West, Jaffna."
      />

      <section className="section-y">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ContactMethods location="contact_page" />
            <div className="mt-6 flex gap-4 rounded-panel border border-dashed p-6">
              <ClockIcon className="mt-0.5 size-5 shrink-0 text-brand-orange" aria-hidden="true" />
              <div>
                <h2 className="font-display text-lg font-semibold">Opening hours</h2>
                <p className="mt-1 text-subtle-foreground">
                  Please call {BUSINESS.phoneDisplay} before you visit to confirm opening hours.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-panel border bg-surface-soft p-4 sm:p-8">
            <JaffnaMap />
          </div>
        </div>
      </section>

      <section className="bg-surface-soft section-y">
        <div className="container-wide">
          <h2 className="reveal text-headline font-bold">What can we help with?</h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between gap-4 rounded-panel border bg-card p-6 font-display text-lg font-semibold transition-colors hover:border-foreground/40"
                >
                  {link.label}
                  <ArrowRightIcon
                    className="size-5 text-brand-orange transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
