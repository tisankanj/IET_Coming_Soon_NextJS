import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "cn";

import { ROUTES } from "@/config/routes";
import { PARTNER_CATEGORIES } from "@/content/en/partners";

type PartnerCategoryTilesProps = {
  showEnquiryTile?: boolean;
  className?: string;
};

// Sharp, cut-corner partner tiles (frontend spec section 15). The three-wheeler tile is highlighted
// because it is the category IET already works in.
export function PartnerCategoryTiles({ showEnquiryTile = false, className }: PartnerCategoryTilesProps) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2 xl:grid-cols-4", className)}>
      {PARTNER_CATEGORIES.map((category, index) => {
        const highlighted = index === 1;
        return (
          <li
            key={category.name}
            className={cn(
              "flex min-h-40 flex-col justify-between gap-6 p-5 cut-corner",
              highlighted ? "bg-midnight-950 text-white" : "bg-card",
            )}
          >
            <span aria-hidden="true" className="h-0.5 w-6 bg-brand-orange" />
            <div>
              <h3 className="font-display text-lg font-semibold">{category.name}</h3>
              <p className={cn("mt-2 text-sm", highlighted ? "text-mist" : "text-muted-foreground")}>
                {category.value}
              </p>
            </div>
          </li>
        );
      })}
      {showEnquiryTile && (
        <li>
          <Link
            href={`${ROUTES.partners}#enquiry`}
            className="group/tile flex h-full min-h-40 flex-col justify-between bg-primary p-5 text-primary-foreground transition-colors cut-corner hover:bg-brand-orange-strong"
          >
            <ArrowRightIcon
              className="size-5 transition-transform group-hover/tile:translate-x-1"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-semibold">Discuss a partnership</span>
          </Link>
        </li>
      )}
    </ul>
  );
}
