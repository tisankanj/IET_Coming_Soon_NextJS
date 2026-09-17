// The IET gear arc, drawn from the gear in the logo. Used as the main mechanical motif.

const CENTER = 200;

function polar(radius: number, angle: number) {
  const x = CENTER + radius * Math.cos(angle);
  const y = CENTER + radius * Math.sin(angle);
  return `${x.toFixed(2)} ${y.toFixed(2)}`;
}

function buildGearPath(teeth: number, rootRadius: number, tipRadius: number) {
  const step = (Math.PI * 2) / teeth;
  let path = `M ${polar(rootRadius, step * 0.25)}`;
  for (let tooth = 0; tooth < teeth; tooth++) {
    const base = tooth * step;
    path += ` L ${polar(tipRadius, base + step * 0.35)}`;
    path += ` A ${tipRadius} ${tipRadius} 0 0 1 ${polar(tipRadius, base + step * 0.65)}`;
    path += ` L ${polar(rootRadius, base + step * 0.75)}`;
    path += ` A ${rootRadius} ${rootRadius} 0 0 1 ${polar(rootRadius, base + step * 1.25)}`;
  }
  return `${path} Z`;
}

const GEAR_PATH = buildGearPath(12, 150, 170);

type GearRingProps = {
  className?: string;
  strokeWidth?: number;
};

export function GearRing({ className, strokeWidth = 2 }: GearRingProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={className}>
      <path d={GEAR_PATH} stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <circle
        cx={CENTER}
        cy={CENTER}
        r={132}
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        opacity={0.5}
      />
    </svg>
  );
}

export { GEAR_PATH };
