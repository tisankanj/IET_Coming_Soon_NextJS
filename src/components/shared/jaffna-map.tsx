import { cn } from "cn";

// Custom stylized service map (frontend spec section 12), not Google map artwork.
// Positions are illustrative: Jaffna town lies south of Inuvil. Only confirmed places are labelled.
export function JaffnaMap({ className }: { className?: string }) {
  return (
    <figure className={cn("relative", className)}>
      <svg viewBox="0 0 800 560" fill="none" aria-hidden="true" className="h-auto w-full">
        <g stroke="currentColor" className="text-foreground/10">
          <circle cx="480" cy="210" r="330" strokeDasharray="4 10" />
          <circle cx="480" cy="210" r="230" />
          <circle cx="480" cy="210" r="140" />
          <circle cx="480" cy="210" r="64" />
          <line x1="480" y1="0" x2="480" y2="560" strokeDasharray="2 8" />
          <line x1="80" y1="210" x2="800" y2="210" strokeDasharray="2 8" />
        </g>

        <path
          d="M 420 470 C 440 400 430 330 455 280 S 478 232 480 212"
          pathLength={1}
          className="draw-on-scroll text-brand-orange draw-path"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle cx="420" cy="470" r="7" className="fill-brand-blue" />
        <circle cx="420" cy="470" r="16" className="stroke-brand-blue/40" strokeWidth="1.5" />

        <circle cx="480" cy="210" r="22" className="stroke-brand-orange/40" strokeWidth="1.5" />
        <circle cx="480" cy="210" r="9" className="fill-brand-orange" />

        <g className="fill-foreground font-display" fontSize="18" fontWeight="600">
          <text x="512" y="200">
            Inuvil West
          </text>
          <text x="512" y="222" fontSize="13" fontWeight="500" className="fill-muted-foreground">
            IET Service Point, Branch 01
          </text>
          <text x="444" y="476">
            Jaffna
          </text>
        </g>
        <text
          x="148"
          y="96"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2"
          className="fill-muted-foreground"
        >
          NORTHERN PROVINCE
        </text>
      </svg>
      <figcaption className="mt-3 text-xs text-muted-foreground">Illustrative map, not to scale.</figcaption>
    </figure>
  );
}
