"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";
import { cn } from "cn";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/content/en/navigation";
import { isActivePath } from "@/lib/navigation";

export function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const links = [...PRIMARY_NAV, ...SECONDARY_NAV];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white lg:hidden" aria-label="Open menu">
          <MenuIcon className="size-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full border-white/10 bg-midnight-950 text-white sm:max-w-sm">
        <SheetHeader className="px-6 pt-6">
          <SheetTitle className="font-display text-lg text-white">Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation and contact options</SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="px-3">
          <ul>
            {links.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-control px-3 font-display text-xl font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white",
                      active && "text-white",
                    )}
                  >
                    {item.label}
                    {active && <span aria-hidden="true" className="h-0.5 w-6 bg-brand-orange" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <SheetFooter className="gap-3 px-6 pb-8">
          <Button asChild size="lg" className="w-full">
            <Link href={ROUTES.bookService} onClick={() => setOpen(false)}>
              Book a service
            </Link>
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="inverse" className="w-full">
              <a href={CONTACT_LINKS.call} data-track="click_call" data-track-location="mobile_menu">
                <PhoneIcon aria-hidden="true" />
                Call
              </a>
            </Button>
            <Button asChild variant="inverse" className="w-full">
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp"
                data-track-location="mobile_menu"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-center text-sm text-mist tabular-nums">{BUSINESS.phoneDisplay}</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
