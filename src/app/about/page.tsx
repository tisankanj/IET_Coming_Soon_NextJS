import { Leadership } from "@/components/home/leadership";
import { CtaBand } from "@/components/shared/cta-band";
import { GrowthPhases } from "@/components/shared/growth-phases";
import { KeepHyphenWords } from "@/components/shared/keep-hyphen-words";
import { PageHero } from "@/components/shared/page-hero";
import { ROUTES } from "@/config/routes";
import { BUSINESS } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About IET Service Point | Three-Wheeler Service in Inuvil, Jaffna",
  description:
    "IET Service Point is a locally operated automotive service business in Inuvil West, Jaffna. TVS Authorized Three-Wheeler Dealer led by Managing Director J. Sujinthan.",
  path: ROUTES.about,
});

// "At a glance" entity facts (docs/04-geo-aeo-ai-search.md), kept visible so search and AI systems
// read the same facts people do.
const AT_A_GLANCE = [
  { label: "Business", value: BUSINESS.name },
  { label: "Location", value: "Inuvil West, Jaffna, Sri Lanka" },
  { label: "Authorization", value: BUSINESS.authorization },
  { label: "Parts", value: BUSINESS.partsAuthorization },
  { label: "Managing Director", value: "J. Sujinthan" },
  { label: "Mentor & Advisor", value: "S. Jeyakumar (M.E)" },
  { label: "Branch 01", value: "Inuvil, first year completed" },
  { label: "Branch 02", value: "Coming soon" },
  { label: "Phone", value: BUSINESS.phoneDisplay },
  { label: "Email", value: BUSINESS.email },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "About", path: ROUTES.about }]}
        title="About IET Service Point"
        intro="IET Service Point is a locally operated automotive service business based in Inuvil West, Jaffna."
        image="team"
      />

      <section className="section-y">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-7">
            <h2 className="text-headline font-bold">
              Dependable service, clear communication and genuine parts.
            </h2>
            <p className="mt-6 text-lead text-subtle-foreground">
              The business was created to give vehicle owners dependable service, clear communication and
              better access to genuine parts. IET currently operates as a {BUSINESS.authorization} and{" "}
              {BUSINESS.partsAuthorization}.
            </p>
            <p className="mt-4 text-lead text-subtle-foreground">
              Led by Managing Director J. Sujinthan, with mentorship and guidance from S. Jeyakumar (M.E), IET
              is building toward a modern, technology-enabled service network for Northern Sri Lanka.
            </p>
            <p className="mt-4 text-lead text-subtle-foreground">
              Our first branch has completed one year of operations. The next stage includes
              service-capability upgrades, digital booking and a second branch.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-panel border bg-surface-soft p-6 sm:p-8">
              <h2 className="font-display text-title font-semibold">At a glance</h2>
              <dl className="mt-6 divide-y">
                {AT_A_GLANCE.map((fact) => (
                  <div key={fact.label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-3 text-sm">
                    <dt className="font-semibold text-muted-foreground">{fact.label}</dt>
                    <dd className="font-semibold break-words">
                      <KeepHyphenWords text={fact.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-midnight-950 section-y text-white">
        <div className="container-wide grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="reveal border-t-2 border-brand-orange pt-8">
            <h2 className="font-display text-title font-semibold">Vision</h2>
            <p className="mt-4 text-lead text-mist">
              To build a trusted, technology-enabled automotive service network known for quality,
              transparency and customer care across Northern Sri Lanka.
            </p>
          </div>
          <div className="reveal border-t-2 border-brand-blue pt-8">
            <h2 className="font-display text-title font-semibold">Mission</h2>
            <p className="mt-4 text-lead text-mist">
              To provide reliable servicing, genuine parts, practical technical support and a better customer
              experience while continuously improving workshop capability.
            </p>
          </div>
        </div>
      </section>

      <Leadership />

      <section id="growth" className="section-y">
        <div className="container-wide">
          <h2 className="reveal max-w-3xl text-headline font-bold">
            One branch established. The next phase is loading.
          </h2>
          <div className="mt-12 lg:mt-16">
            <GrowthPhases />
          </div>
        </div>
      </section>

      <CtaBand location="about_cta" />
    </>
  );
}
