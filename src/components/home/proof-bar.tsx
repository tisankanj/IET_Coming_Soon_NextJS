import Link from "next/link";
import { CogIcon, MapPinIcon, PackageCheckIcon, ShieldCheckIcon } from "lucide-react";

import { KeepHyphenWords } from "@/components/shared/keep-hyphen-words";
import { ROUTES } from "@/config/routes";
import { BUSINESS, CONTACT_LINKS } from "@/config/site";

const linkClass =
  "mt-3 inline-flex text-sm font-semibold text-link underline decoration-current/30 underline-offset-[5px] hover:decoration-current";

export function ProofBar() {
  return (
    <section aria-label="Why customers choose IET Service Point" className="relative z-10 -mt-16">
      <div className="container-wide">
        <ul className="grid gap-px overflow-hidden rounded-panel border bg-border shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex gap-4 bg-card p-6">
            <ShieldCheckIcon className="size-6 shrink-0 text-brand-orange" aria-hidden="true" />
            <div>
              <p className="leading-snug font-semibold">
                <KeepHyphenWords text={BUSINESS.authorization} />
              </p>
              <Link href={ROUTES.tvsDealer} className={linkClass}>
                About our authorization
              </Link>
            </div>
          </li>
          <li className="flex gap-4 bg-card p-6">
            <PackageCheckIcon className="size-6 shrink-0 text-brand-orange" aria-hidden="true" />
            <div>
              <p className="leading-snug font-semibold">{BUSINESS.partsAuthorization}</p>
              <Link href={`${ROUTES.genuineParts}#enquiry`} className={linkClass}>
                Ask about a part
              </Link>
            </div>
          </li>
          <li className="flex gap-4 bg-card p-6">
            <MapPinIcon className="size-6 shrink-0 text-brand-orange" aria-hidden="true" />
            <div>
              <p className="leading-snug font-semibold">{BUSINESS.address.street}</p>
              <a
                href={CONTACT_LINKS.directions}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_directions"
                data-track-location="proof_bar"
                className={linkClass}
              >
                Get directions
              </a>
            </div>
          </li>
          <li className="flex gap-4 bg-card p-6">
            <CogIcon className="size-6 shrink-0 text-brand-orange" aria-hidden="true" />
            <div>
              <p className="leading-snug font-semibold">First branch: one year completed</p>
              <Link href={`${ROUTES.about}#growth`} className={linkClass}>
                Our growth plan
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
