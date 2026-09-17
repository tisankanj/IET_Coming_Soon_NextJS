import { cn } from "cn";

import { SiteImage } from "@/components/media/site-image";

type Phase = {
  label: string;
  marker: string;
  outlined?: boolean;
  title: string;
  points: string[];
};

// Phases instead of a dated timeline: the docs do not confirm the order of the TVS authorization
// and the first-year milestone, so no chronology is implied.
const PHASES: Phase[] = [
  {
    label: "Established",
    marker: "01",
    title: "Branch 01, Inuvil West",
    points: [
      "First year of operations completed",
      "TVS Authorized Three-Wheeler Dealer",
      "Authorized TVS Genuine Parts Seller",
    ],
  },
  {
    label: "Now",
    marker: "",
    title: "Digital service",
    points: ["Book a service online", "Ask about genuine parts before you travel", "Partnership enquiries"],
  },
  {
    label: "Next",
    marker: "02",
    outlined: true,
    title: "Branch 02, coming soon",
    points: [
      "Location and opening details will be announced after confirmation",
      "Planned: stronger facilities and expanded technical capability",
    ],
  },
];

export function GrowthPhases() {
  return (
    <div>
      <div className="reveal relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-panel border">
        <SiteImage image="visionStation" sizes="(min-width: 1024px) 56rem, 100vw" />
      </div>

      <ol className="relative mt-12 grid gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-10">
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 2"
          preserveAspectRatio="none"
          className="absolute top-[5rem] left-0 hidden h-0.5 w-full lg:block"
        >
          <line
            x1="0"
            y1="1"
            x2="1000"
            y2="1"
            pathLength={1}
            className="draw-on-scroll stroke-brand-orange draw-path"
            strokeWidth="2"
          />
        </svg>

        {PHASES.map((phase) => (
          <li key={phase.label} className="reveal relative">
            <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              {phase.label}
            </p>
            <div className="mt-3 flex h-24 items-center">
              {phase.marker ? (
                <span
                  className={cn(
                    "relative z-10 bg-background pr-4 font-display text-[5.5rem] leading-none font-bold tracking-tight tabular-nums",
                    phase.outlined
                      ? "text-transparent [-webkit-text-stroke:1.5px_var(--color-brand-orange)]"
                      : "text-brand-orange",
                  )}
                >
                  {phase.marker}
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="relative z-10 size-5 rounded-full border-2 border-brand-orange bg-background"
                />
              )}
            </div>
            <h3 className="mt-4 font-display text-title font-semibold">{phase.title}</h3>
            <ul className="mt-4 space-y-2 text-subtle-foreground">
              {phase.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-brand-orange" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
