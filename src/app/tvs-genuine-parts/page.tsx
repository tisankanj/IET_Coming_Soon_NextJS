import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { SiteImage } from "@/components/media/site-image";
import { FaqList } from "@/components/shared/faq-list";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { CONTACT_LINKS, TVS_GENUINE_PARTS_URL } from "@/config/site";
import { FAQS } from "@/content/en/faq";
import { PartsEnquiryForm } from "@/features/enquiries/components/parts-enquiry-form";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "TVS Genuine Parts Jaffna | Three-Wheeler Parts | IET",
  description:
    "Authorized TVS Genuine Parts Seller in Inuvil, Jaffna. Genuine parts for supported TVS three-wheelers. Send your model or a part photo and we confirm availability.",
  path: ROUTES.genuineParts,
});

const REASONS = [
  { title: "Correct fit", body: "Replacement parts made for your model fit as intended." },
  { title: "Durability", body: "The right part lasts as the manufacturer expects it to." },
  { title: "Performance", body: "Correct parts help your three-wheeler run the way it was designed to." },
];

const WHAT_TO_SEND = [
  "Your vehicle model",
  "The model year, if relevant",
  "A photo of the old part (send it on WhatsApp)",
  "The part number, if you have it",
  "The quantity you need",
];

const PARTS_FAQ_QUESTIONS = ["Do you sell TVS genuine parts?", "Can I send a part photo before visiting?"];

export default function GenuinePartsPage() {
  const faqs = FAQS.filter((item) => PARTS_FAQ_QUESTIONS.includes(item.question));

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "TVS Genuine Parts", path: ROUTES.genuineParts }]}
        title="TVS Genuine Three-Wheeler Parts in Jaffna"
        intro="Correct replacement parts support reliable fit, durability and vehicle performance. IET Service Point provides TVS genuine parts for supported three-wheeler models."
        image="tvsGenuineParts"
      >
        <Button asChild size="lg">
          <Link href="#enquiry">Ask about a part</Link>
        </Button>
        <Button asChild size="lg" variant="inverse">
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_whatsapp"
            data-track-location="parts_hero"
          >
            <WhatsAppIcon />
            WhatsApp us
          </a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-wide">
          <h2 className="reveal max-w-2xl text-headline font-bold">Why genuine parts matter.</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {REASONS.map((reason, index) => (
              <li key={reason.title} className="reveal">
                <span className="font-display text-5xl font-bold text-brand-orange tabular-nums">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-title font-semibold">{reason.title}</h3>
                <p className="mt-2 text-subtle-foreground">{reason.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="identify" className="bg-surface-soft section-y">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <h2 className="text-headline font-bold">How to identify genuine TVS parts.</h2>
            <p className="mt-6 text-lead text-subtle-foreground">
              TVS genuine parts packaging carries security features, such as security labels and QR codes,
              that you can check before you buy.
            </p>
            <p className="mt-4 text-subtle-foreground">
              Follow the verification steps that TVS Motor publishes on its official Sri Lanka website. If you
              are not sure about a part, bring it to our workshop or send us a photo.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <a href={TVS_GENUINE_PARTS_URL} target="_blank" rel="noopener noreferrer">
                TVS genuine parts guidance
                <ExternalLinkIcon aria-hidden="true" />
                <span className="sr-only">(opens the TVS Motor website in a new tab)</span>
              </a>
            </Button>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden frame-asym">
            <SiteImage image="tvsGenuinePartsLabel" sizes="(min-width: 1024px) 28rem, 100vw" />
          </div>
        </div>
      </section>

      <section id="enquiry" className="section-y">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div>
            <h2 className="text-headline font-bold">Ask about a part.</h2>
            <p className="mt-6 max-w-2xl text-lead text-subtle-foreground">
              Fill in the details and send them to us on WhatsApp. We confirm availability before you travel.
            </p>
            <div className="mt-10">
              <PartsEnquiryForm />
            </div>
          </div>
          <aside className="h-fit rounded-panel bg-midnight-950 p-6 text-white lg:sticky lg:top-28">
            <p className="font-display text-lg font-semibold">What to send</p>
            <ul className="mt-5 space-y-3">
              {WHAT_TO_SEND.map((item) => (
                <li key={item} className="flex gap-3 text-mist">
                  <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-brand-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <FaqList items={faqs} title="Parts questions" />
    </>
  );
}
