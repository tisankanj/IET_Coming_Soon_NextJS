// One gear profile for the whole site, so the SVG gear ring and the 3D Service Core always match.

export const GEAR_TEETH = 12;

export type ToothAngles = {
  riseStart: number;
  topStart: number;
  topEnd: number;
  fallEnd: number;
  nextRiseStart: number;
};

// Angles (radians) for each tooth: rise from the root circle, flat top on the tip circle, fall back.
export function gearToothAngles(teeth: number) {
  const step = (Math.PI * 2) / teeth;
  const angles: ToothAngles[] = [];

  for (let tooth = 0; tooth < teeth; tooth++) {
    const base = tooth * step;
    angles.push({
      riseStart: base + step * 0.25,
      topStart: base + step * 0.35,
      topEnd: base + step * 0.65,
      fallEnd: base + step * 0.75,
      nextRiseStart: base + step * 1.25,
    });
  }
  return angles;
}
