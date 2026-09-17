import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";

import { ROUTES } from "@/config/routes";
import { BUSINESS } from "@/config/site";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

// The supplied IET logo is used unchanged. The wordmark beside it keeps the name readable at small sizes.
export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <Link href={ROUTES.home} className={cn("flex shrink-0 items-center gap-2.5 rounded-control", className)}>
      <Image src="/brand/logo-v2.png" alt="" width={52} height={52} className="size-12 sm:size-[3.25rem]" />
      <span className="flex flex-col">
        <span className="font-display text-[1.0625rem] leading-none font-bold tracking-tight">
          {BUSINESS.name}
        </span>
        {showTagline && (
          <span className="mt-1.5 hidden text-xs leading-none text-mist xl:block">
            {BUSINESS.authorization}
          </span>
        )}
      </span>
    </Link>
  );
}
