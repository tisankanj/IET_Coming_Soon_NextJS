"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, ChevronDownIcon } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";

import { SiteImage } from "@/components/media/site-image";
import { ROUTES, serviceRoute } from "@/config/routes";
import type { Service } from "@/content/types";

// "Service Operating System" (frontend spec section 9). Native <details> keep every service's copy in the
// HTML for search engines and give a free keyboard-accessible accordion on mobile. On desktop the sticky
// visual follows whichever service is open.
export function ServiceOs({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  function handleToggle(index: number, event: React.SyntheticEvent<HTMLDetailsElement>) {
    if (event.currentTarget.open) {
      setActiveIndex(index);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden frame-asym bg-midnight-900">
            <AnimatePresence initial={false}>
              <m.div
                key={activeService.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SiteImage image={activeService.image} sizes="(min-width: 1024px) 34vw, 100vw" />
              </m.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-950/90 to-transparent p-6 pt-16">
              <p className="font-display text-xl font-semibold text-white" aria-live="polite">
                {activeService.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        {services.map((service, index) => (
          <details
            key={service.id}
            name="service-os"
            open={index === 0}
            onToggle={(event) => handleToggle(index, event)}
            className="group border-b first:border-t"
          >
            <summary className="flex cursor-pointer list-none items-center gap-5 py-6 [&::-webkit-details-marker]:hidden">
              <span className="w-8 shrink-0 font-display text-sm font-semibold text-muted-foreground tabular-nums group-open:text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-display text-title font-semibold">{service.name}</span>
                <span className="mt-1 block text-muted-foreground">{service.summary}</span>
              </span>
              <ChevronDownIcon
                className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <div className="pb-8 pl-13">
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-panel lg:hidden">
                <SiteImage image={service.image} sizes="100vw" />
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-subtle-foreground">
                    <CheckIcon
                      className="mt-0.5 size-5 shrink-0 text-brand-blue dark:text-brand-cyan"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={
                  service.page
                    ? serviceRoute(service.page.slug)
                    : `${ROUTES.bookService}?service=${service.id}`
                }
                className="group/link mt-6 inline-flex items-center gap-2 font-semibold text-link"
              >
                {service.page ? `${service.name} details` : `Book ${service.name.toLowerCase()}`}
                <ArrowRightIcon
                  className="size-4 transition-transform group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
