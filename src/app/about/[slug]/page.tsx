import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

import { CtaBand } from "@/components/shared/cta-band";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { PERSON_SLUGS, personRoute, ROUTES } from "@/config/routes";
import { getPerson, PEOPLE } from "@/content/en/people";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildMetadata } from "@/lib/seo/metadata";

type PersonPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PERSON_SLUGS.map((slug) => ({ slug }));
}

function findPerson(slug: string) {
  return PEOPLE.find((person) => person.slug === slug);
}

export async function generateMetadata({ params }: PersonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = findPerson(slug);
  if (!person) {
    return {};
  }
  return buildMetadata({
    title: person.metaTitle,
    description: person.metaDescription,
    path: personRoute(person.slug),
  });
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part.replace(".", "").charAt(0))
    .join("");
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { slug } = await params;
  const person = findPerson(slug);
  if (!person) {
    notFound();
  }

  const otherPerson = getPerson(person.slug === "j-sujinthan" ? "s-jeyakumar" : "j-sujinthan");

  return (
    <>
      <JsonLd data={buildPersonSchema(person)} />
      <PageHero
        breadcrumbs={[
          { name: "About", path: ROUTES.about },
          { name: person.displayName, path: personRoute(person.slug) },
        ]}
        title={person.h1}
        intro={person.summary}
        image={person.image}
        monogram={initials(person.name)}
      />

      <section data-track-view="view_founder_profile" className="section-y">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="reveal text-headline font-bold">Role at IET.</h2>
            {person.profile.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-lead text-subtle-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-panel border bg-surface-soft p-6 sm:p-8">
              <h2 className="font-display text-title font-semibold">{person.focusTitle}</h2>
              <ul className="mt-6 space-y-3">
                {person.focusAreas.map((area) => (
                  <li key={area} className="flex gap-3 border-t pt-3 text-subtle-foreground">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-brand-orange" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-wide">
          <h2 className="font-display text-title font-semibold">More about IET</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: "About IET Service Point", href: ROUTES.about },
              ...(otherPerson
                ? [{ label: otherPerson.displayName, href: personRoute(otherPerson.slug) }]
                : []),
              { label: "Partnerships", href: ROUTES.partners },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between gap-4 rounded-panel border bg-card p-5 font-semibold transition-colors hover:border-foreground/40"
                >
                  {link.label}
                  <ArrowRightIcon
                    className="size-4 text-brand-orange transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand location="profile_cta" />
    </>
  );
}
