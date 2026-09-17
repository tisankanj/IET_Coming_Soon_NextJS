import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "cn";

import { SiteImage } from "@/components/media/site-image";
import { JsonLd } from "@/components/shared/json-ld";
import { KeepHyphenWords } from "@/components/shared/keep-hyphen-words";
import type { SiteImageKey } from "@/config/images";
import { ROUTES } from "@/config/routes";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/schema/breadcrumb";

type PageHeroProps = {
  // Trail after Home. The last item is the current page.
  breadcrumbs: BreadcrumbItem[];
  title: string;
  intro: string;
  image?: SiteImageKey;
  monogram?: string;
  children?: React.ReactNode;
};

// Dark opening band for every inner page. Also outputs the BreadcrumbList schema for the same trail.
export function PageHero({ breadcrumbs, title, intro, image, monogram, children }: PageHeroProps) {
  const trail: BreadcrumbItem[] = [{ name: "Home", path: ROUTES.home }, ...breadcrumbs];

  return (
    <section className="relative isolate overflow-hidden bg-midnight-950 text-white">
      <JsonLd data={buildBreadcrumbSchema(trail)} />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 tech-grid [mask-image:radial-gradient(ellipse_80%_80%_at_80%_20%,black,transparent)]"
      />

      <div
        className={cn(
          "container-wide grid items-center gap-10 pt-28 pb-16 sm:pt-32 lg:pb-24",
          image && "lg:grid-cols-[1.15fr_0.85fr] lg:gap-16",
        )}
      >
        <div className="max-w-3xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-mist">
              {trail.map((item, index) => {
                const isCurrent = index === trail.length - 1;
                return (
                  <li key={item.path} className="flex items-center gap-1.5">
                    {index > 0 && <ChevronRightIcon className="size-3.5 text-white/40" aria-hidden="true" />}
                    {isCurrent ? (
                      <span aria-current="page" className="text-white">
                        {item.name}
                      </span>
                    ) : (
                      <Link href={item.path} className="rounded-sm py-1 hover:text-white">
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <h1 className="mt-6 text-headline font-bold">
            <KeepHyphenWords text={title} />
          </h1>
          <p className="mt-6 max-w-2xl text-lead text-mist">{intro}</p>
          {children && <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
        </div>

        {image && (
          <div className="relative aspect-[4/3] w-full overflow-hidden frame-asym lg:ml-auto lg:aspect-[4/5] lg:max-w-md">
            <SiteImage image={image} sizes="(min-width: 1024px) 28rem, 100vw" preload monogram={monogram} />
          </div>
        )}
      </div>
    </section>
  );
}
