import { MapPinIcon } from "lucide-react";

import { GEAR_PATH } from "@/components/brand/gear-ring";
import { ServiceCoreTilt } from "@/components/home/service-core-tilt";
import { SiteImage } from "@/components/media/site-image";
import { SITE_IMAGES } from "@/config/images";

const TICKS = Array.from({ length: 60 }, (_, index) => index);

// The "IET Service Core" hero object (design system doc section 6). Drawn in SVG until the 3D
// version ships. All readable text is HTML, never inside the SVG.
export function ServiceCore() {
  const hasRender = SITE_IMAGES.heroServiceCore.ready;

  return (
    <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[26rem] lg:max-w-[34rem]">
      <ServiceCoreTilt>
        <div className="relative aspect-square">
          {hasRender ? (
            <SiteImage image="heroServiceCore" sizes="(min-width: 1024px) 34rem, 80vw" preload />
          ) : (
            <svg
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
              className="absolute inset-0 size-full overflow-visible"
            >
              <defs>
                <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0267a4" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#0267a4" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="core-steel" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="55%" stopColor="#dce5eb" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              <circle cx="200" cy="200" r="200" fill="url(#core-glow)" />
              <g stroke="#ffffff" strokeOpacity="0.18">
                {TICKS.map((tick) => (
                  <line
                    key={tick}
                    x1="200"
                    y1={tick % 5 === 0 ? 4 : 10}
                    x2="200"
                    y2="18"
                    strokeWidth={tick % 5 === 0 ? 1.5 : 1}
                    transform={`rotate(${tick * 6} 200 200)`}
                  />
                ))}
              </g>
              <path
                d={GEAR_PATH}
                className="gear-turn"
                stroke="url(#core-steel)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <circle cx="200" cy="200" r="132" stroke="#ffffff" strokeOpacity="0.14" />
              <circle cx="200" cy="200" r="118" stroke="#0267a4" strokeWidth="10" />
              <circle cx="200" cy="200" r="104" stroke="#0998d3" strokeOpacity="0.7" strokeWidth="1.2" />
              <ellipse
                cx="200"
                cy="200"
                rx="198"
                ry="66"
                transform="rotate(-24 200 200)"
                stroke="#f36102"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="64 36"
              />
            </svg>
          )}

          <p className="absolute inset-0 grid place-content-center text-center">
            <span className="font-display text-[clamp(3.75rem,9vw,6.5rem)] leading-none font-bold tracking-tight text-white tabular-nums">
              01
            </span>
            <span className="mt-2 text-xs font-semibold tracking-[0.14em] text-mist uppercase sm:text-sm">
              First year completed
            </span>
          </p>
        </div>
      </ServiceCoreTilt>

      <ul className="mt-6 grid grid-cols-2 gap-3 lg:mt-0 lg:block">
        <li className="rounded-chip border border-white/15 bg-midnight-900/80 px-4 py-3 backdrop-blur-sm lg:absolute lg:top-[8%] lg:-left-[6%]">
          <span className="flex items-center gap-2 text-xs font-semibold text-brand-orange">
            <MapPinIcon className="size-3.5" aria-hidden="true" />
            Branch 01
          </span>
          <span className="mt-1 block text-sm font-semibold text-white">Inuvil West, Jaffna</span>
        </li>
        <li className="rounded-chip border border-dashed border-white/30 px-4 py-3 lg:absolute lg:right-[-4%] lg:bottom-[10%] lg:bg-midnight-950/70 lg:backdrop-blur-sm">
          <span className="text-xs font-semibold text-mist">Branch 02</span>
          <span className="mt-1 block text-sm font-semibold text-white">Coming soon</span>
        </li>
      </ul>
    </div>
  );
}
