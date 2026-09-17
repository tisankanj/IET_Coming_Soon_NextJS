// Five-stage service journey (design system doc section 9), based on the service process in docs/02.
const STAGES = [
  { title: "Check-in", body: "Tell us what you notice and how the vehicle is used." },
  { title: "Inspect", body: "We inspect the vehicle and find the cause." },
  { title: "Confirm", body: "We explain the work needed and start only after you agree." },
  { title: "Service", body: "The service or repair is carried out." },
  { title: "Handover", body: "A final check, then practical maintenance advice." },
];

export function ServiceJourney() {
  return (
    <section className="bg-surface-soft section-y">
      <div className="container-wide">
        <h2 className="reveal max-w-2xl text-headline font-bold">How a service visit works.</h2>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-6 lg:mt-16">
          <span
            aria-hidden="true"
            className="absolute top-5 bottom-5 left-5 w-px bg-brand-orange/40 md:top-5 md:right-[10%] md:bottom-auto md:left-[10%] md:h-px md:w-auto"
          />
          {STAGES.map((stage, index) => (
            <li key={stage.title} className="reveal relative flex gap-5 md:flex-col md:gap-0">
              <span className="relative grid size-10 shrink-0 place-items-center rounded-full border border-brand-orange bg-surface-soft font-display text-sm font-semibold text-foreground tabular-nums">
                {index + 1}
              </span>
              <div className="md:mt-5">
                <h3 className="font-display text-lg font-semibold">{stage.title}</h3>
                <p className="mt-1.5 text-subtle-foreground">{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
