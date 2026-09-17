import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "cn";

import { SiteImage } from "@/components/media/site-image";
import { personRoute } from "@/config/routes";
import { PEOPLE } from "@/content/en/people";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part.replace(".", "").charAt(0))
    .join("");
}

export function Leadership() {
  return (
    <section className="bg-surface-soft section-y">
      <div className="container-wide">
        <h2 className="reveal max-w-2xl text-headline font-bold">The people behind IET.</h2>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          {PEOPLE.map((person, index) => (
            <article
              key={person.slug}
              className={cn(
                "reveal",
                index === 0 ? "lg:col-span-6 lg:col-start-2" : "lg:col-span-5 lg:mt-32",
              )}
            >
              <div
                className={cn(
                  "relative aspect-[4/5] w-full overflow-hidden frame-asym",
                  index === 0 ? "max-w-md" : "max-w-sm",
                )}
              >
                <SiteImage
                  image={person.image}
                  sizes={index === 0 ? "(min-width: 640px) 28rem, 100vw" : "(min-width: 640px) 24rem, 100vw"}
                  monogram={initials(person.name)}
                />
              </div>
              <h3 className="mt-6 font-display text-title font-semibold">{person.displayName}</h3>
              <p className="mt-2 flex items-center gap-3 font-semibold text-subtle-foreground">
                <span aria-hidden="true" className="h-0.5 w-6 bg-brand-orange" />
                {person.role}
              </p>
              <p className="mt-4 max-w-xl text-subtle-foreground">{person.summary}</p>
              <Link
                href={personRoute(person.slug)}
                className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-link"
              >
                Read profile
                <span className="sr-only">: {person.displayName}</span>
                <ArrowRightIcon
                  className="size-4 transition-transform group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
