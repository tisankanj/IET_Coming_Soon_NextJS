// The IET gear arc, drawn from the gear in the logo. Used as the main mechanical motif.

import { GEAR_TEETH, gearToothAngles } from "@/components/brand/gear-geometry";

const CENTER = 200;

function polar(radius: number, angle: number) {
  const x = CENTER + radius * Math.cos(angle);
  const y = CENTER + radius * Math.sin(angle);
  return `${x.toFixed(2)} ${y.toFixed(2)}`;
}

function buildGearPath(rootRadius: number, tipRadius: number) {
  const teeth = gearToothAngles(GEAR_TEETH);
  let path = `M ${polar(rootRadius, teeth[0].riseStart)}`;
  for (const tooth of teeth) {
    path += ` L ${polar(tipRadius, tooth.topStart)}`;
    path += ` A ${tipRadius} ${tipRadius} 0 0 1 ${polar(tipRadius, tooth.topEnd)}`;
    path += ` L ${polar(rootRadius, tooth.fallEnd)}`;
    path += ` A ${rootRadius} ${rootRadius} 0 0 1 ${polar(rootRadius, tooth.nextRiseStart)}`;
  }
  return `${path} Z`;
}

const GEAR_PATH = buildGearPath(150, 170);

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
