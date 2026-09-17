import { CtaBand } from "@/components/shared/cta-band";
import { FaqList } from "@/components/shared/faq-list";
import { PageHero } from "@/components/shared/page-hero";
import { ROUTES } from "@/config/routes";
import { FAQS } from "@/content/en/faq";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "FAQ | TVS Three-Wheeler Service & Genuine Parts | IET Service Point",
  description:
    "Answers about IET Service Point: TVS three-wheeler authorization, genuine parts, our Inuvil, Jaffna location, booking, repairs and the second branch.",
  path: ROUTES.faq,
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "FAQ", path: ROUTES.faq }]}
        title="Frequently Asked Questions"
        intro="Quick answers about our authorization, genuine parts, services and booking."
      />
      <FaqList items={FAQS} title="All questions" />
      <CtaBand
        location="faq_cta"
        title="Still have a question?"
        body="Call or WhatsApp us and we will help."
      />
    </>
  );
}
