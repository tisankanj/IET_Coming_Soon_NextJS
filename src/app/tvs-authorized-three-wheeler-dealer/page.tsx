import Link from "next/link";
import { ArrowRightIcon, BanIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon } from "lucide-react";

import { TvsLogo } from "@/components/brand/tvs-logo";
import { SiteImage } from "@/components/media/site-image";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqList } from "@/components/shared/faq-list";
import { KeepHyphenWords } from "@/components/shared/keep-hyphen-words";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { ADDRESS_ONE_LINE, BUSINESS, CONTACT_LINKS } from "@/config/site";
import { FAQS } from "@/content/en/faq";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "TVS Authorized Three-Wheeler Dealer Jaffna | IET Service Point",
  description:
    "IET Service Point in Inuvil West, Jaffna is a TVS Authorized Three-Wheeler Dealer and Authorized TVS Genuine Parts Seller. Service support, genuine parts and directions.",
  path: ROUTES.tvsDealer,
});

const SUPPORT = [
  {
    title: "Service support",
    body: "Routine service, repairs and maintenance for three-wheelers at our Inuvil workshop.",
    href: ROUTES.services,
    linkLabel: "Our services",
  },
  {
    title: "Genuine parts availability",
    body: "TVS genuine parts for supported three-wheeler models. We confirm stock before you travel.",
    href: ROUTES.genuineParts,
    linkLabel: "TVS genuine parts",
  },
  {
    title: "Customer assistance",
    body: "Call or WhatsApp us with questions about your TVS three-wheeler.",
    href: ROUTES.contact,
    linkLabel: "Contact us",
  },
];

const DEALER_FAQ_QUESTIONS = [
  "Is IET Service Point a TVS authorized dealer?",
  "Is the TVS authorization for motorcycles or three-wheelers?",
  "Do you sell TVS genuine parts?",
];

export default function TvsDealerPage() {
  const faqs = FAQS.filter((item) => DEALER_FAQ_QUESTIONS.includes(item.question));

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "TVS Authorized Dealer", path: ROUTES.tvsDealer }]}
        title="TVS Authorized Three-Wheeler Dealer in Jaffna"
        intro="IET Service Point is a TVS Authorized Three-Wheeler Dealer based in Inuvil West, Jaffna. We make TVS three-wheeler support, genuine parts and reliable workshop service easier to reach in Northern Sri Lanka."
        image="tvsDealerBoard"
      >
        <Button asChild size="lg">
          <Link href={`${ROUTES.genuineParts}#enquiry`}>Ask about a part</Link>
        </Button>
        <Button asChild size="lg" variant="inverse">
          <a
            href={CONTACT_LINKS.call}
            data-track="click_call"
            data-track-location="tvs_hero"
            className="tabular-nums"
          >
            <PhoneIcon aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <section data-track-view="view_tvs_authority" className="section-y">
        <div className="container-wide">
          <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h2 className="max-w-2xl text-headline font-bold">What our authorization covers.</h2>
            <TvsLogo className="w-64 shrink-0 sm:w-80 lg:w-96" />
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div className="reveal rounded-panel border bg-card p-6 sm:p-8">
              <ShieldCheckIcon className="size-8 text-brand-orange" aria-hidden="true" />
              <h3 className="mt-5 font-display text-title font-semibold">Covered</h3>
              <ul className="mt-5 space-y-3">
                <li className="border-t pt-3 font-semibold">
                  <KeepHyphenWords text={BUSINESS.authorization} />
                </li>
                <li className="border-t pt-3 font-semibold">{BUSINESS.partsAuthorization}</li>
              </ul>
              <p className="mt-5 text-subtle-foreground">Both authorizations apply to TVS three-wheelers.</p>
            </div>
            <div className="reveal rounded-panel border border-dashed p-6 sm:p-8">
              <BanIcon className="size-8 text-muted-foreground" aria-hidden="true" />
              <h3 className="mt-5 font-display text-title font-semibold">Not covered</h3>
              <p className="mt-5 border-t pt-3 font-semibold">TVS motorcycles</p>
              <p className="mt-5 text-subtle-foreground">
                Our TVS authorization is for three-wheelers only. It is not a TVS motorcycle authorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft section-y">
        <div className="container-wide">
          <h2 className="reveal max-w-2xl text-headline font-bold">
            How we support TVS three-wheeler owners.
          </h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {SUPPORT.map((item) => (
              <li key={item.title} className="reveal border-t-2 border-brand-orange pt-6">
                <h3 className="font-display text-title font-semibold">{item.title}</h3>
                <p className="mt-3 text-subtle-foreground">{item.body}</p>
                <Link
                  href={item.href}
                  className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-link"
                >
                  {item.linkLabel}
                  <ArrowRightIcon
                    className="size-4 transition-transform group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[16/10] overflow-hidden frame-asym">
            <SiteImage image="workshopExterior" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div className="reveal">
            <h2 className="text-headline font-bold">Visit our Inuvil branch.</h2>
            <p className="mt-6 flex items-start gap-3 text-lead text-subtle-foreground">
              <MapPinIcon className="mt-1.5 size-5 shrink-0 text-brand-orange" aria-hidden="true" />
              {ADDRESS_ONE_LINE}
            </p>
            <p className="mt-4 text-muted-foreground">
              Please call before you visit to confirm opening hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button asChild>
                <a
                  href={CONTACT_LINKS.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_directions"
                  data-track-location="tvs_branch"
                >
                  Get directions
                </a>
              </Button>
              <Link
                href={ROUTES.inuvilBranch}
                className="font-semibold text-link underline decoration-current/30 underline-offset-[6px] hover:decoration-current"
              >
                Inuvil branch details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqList items={faqs} title="Authorization questions" />
      <CtaBand location="tvs_cta" />
    </>
  );
}
