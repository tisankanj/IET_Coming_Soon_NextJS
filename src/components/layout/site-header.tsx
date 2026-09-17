"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "lucide-react";
import { cn } from "cn";

import { Logo } from "@/components/brand/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";
import { PRIMARY_NAV } from "@/content/en/navigation";
import { isActivePath } from "@/lib/navigation";

// Every page opens on a dark hero, so the header starts transparent and turns solid midnight
// once the page scrolls. An IntersectionObserver on a top sentinel avoids a scroll listener.
export function SiteHeader() {
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-12"
      />
      <header
        data-scrolled={scrolled}
        className="fixed inset-x-0 top-0 z-40 border-b border-transparent text-white transition-[background-color,border-color] duration-300 data-[scrolled=true]:border-white/10 data-[scrolled=true]:bg-midnight-950/92 data-[scrolled=true]:backdrop-blur-md"
      >
        <div className="container-wide flex h-18 items-center gap-4 lg:h-20">
          <Logo showTagline />

          <nav aria-label="Main" className="mx-auto hidden lg:block">
            <ul className="flex items-center">
              {PRIMARY_NAV.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block rounded-control px-3 py-3 text-sm font-semibold text-white/75 transition-colors hover:text-white xl:px-4",
                        "after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-orange after:transition-transform after:duration-300 xl:after:inset-x-4",
                        active && "text-white after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
            <a
              href={CONTACT_LINKS.call}
              data-track="click_call"
              data-track-location="header"
              className="flex size-11 items-center justify-center gap-2 rounded-control text-sm font-semibold text-white/85 tabular-nums transition-colors hover:text-white xl:w-auto xl:px-3"
            >
              <PhoneIcon className="size-[1.125rem]" aria-hidden="true" />
              <span className="sr-only xl:not-sr-only">{BUSINESS.phoneDisplay}</span>
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href={ROUTES.bookService}>Book a service</Link>
            </Button>
            <MobileNav pathname={pathname} />
          </div>
        </div>
      </header>
    </>
  );
}
