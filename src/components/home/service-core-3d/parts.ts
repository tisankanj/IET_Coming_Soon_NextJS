import {
  BoxGeometry,
  CatmullRomCurve3,
  CylinderGeometry,
  ExtrudeGeometry,
  Group,
  LatheGeometry,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Path,
  Shape,
  SphereGeometry,
  TorusGeometry,
  TubeGeometry,
  Vector2,
  Vector3,
} from "three";

import { GEAR_TEETH, gearToothAngles } from "@/components/brand/gear-geometry";

// Building blocks of the "IET Service Core" (design system doc section 6). Everything is made from
// simple geometry in code, so the scene downloads no models or textures.

export function createMaterials() {
  return {
    steel: new MeshStandardMaterial({ color: 0xc9d3db, metalness: 1, roughness: 0.3 }),
    darkSteel: new MeshStandardMaterial({ color: 0x7d8a95, metalness: 1, roughness: 0.42 }),
    serviceBlue: new MeshStandardMaterial({ color: 0x0267a4, metalness: 0.6, roughness: 0.28 }),
    ceramic: new MeshStandardMaterial({ color: 0xf2f4f5, metalness: 0, roughness: 0.35 }),
    cyanLine: new MeshBasicMaterial({ color: 0x0998d3 }),
    // Unlit and not tone mapped, so the orange energy line stays bright.
    energy: new MeshBasicMaterial({ color: 0xf36102, toneMapped: false }),
  };
}

export type CoreMaterials = ReturnType<typeof createMaterials>;

export function createGearRing(material: MeshStandardMaterial) {
  const tipRadius = 3.2;
  const rootRadius = 2.85;
  const holeRadius = 2.55;
  const holeSegments = 96;
  const teeth = gearToothAngles(GEAR_TEETH);

  const outline = new Shape();
  outline.moveTo(Math.cos(teeth[0].riseStart) * rootRadius, Math.sin(teeth[0].riseStart) * rootRadius);
  for (const tooth of teeth) {
    outline.lineTo(Math.cos(tooth.topStart) * tipRadius, Math.sin(tooth.topStart) * tipRadius);
    outline.absarc(0, 0, tipRadius, tooth.topStart, tooth.topEnd, false);
    outline.lineTo(Math.cos(tooth.fallEnd) * rootRadius, Math.sin(tooth.fallEnd) * rootRadius);
    outline.absarc(0, 0, rootRadius, tooth.fallEnd, tooth.nextRiseStart, false);
  }

  // The hole is built from its own points. As an arc it would share curveSegments with the tiny tooth
  // arcs, and a count smooth enough for the hole gave the gear almost 59,000 vertices instead of 12,700.
  const holePoints: Vector2[] = [];
  for (let index = 0; index < holeSegments; index++) {
    const angle = -(index / holeSegments) * Math.PI * 2;
    holePoints.push(new Vector2(Math.cos(angle) * holeRadius, Math.sin(angle) * holeRadius));
  }
  outline.holes.push(new Path().setFromPoints(holePoints));

  const geometry = new ExtrudeGeometry(outline, {
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.06,
    bevelSize: 0.05,
    bevelSegments: 3,
    curveSegments: 3,
  });
  geometry.center();
  return new Mesh(geometry, material);
}

export function createServiceRings(materials: CoreMaterials) {
  const rings = new Group();
  rings.add(new Mesh(new TorusGeometry(2.3, 0.14, 24, 128), materials.serviceBlue));
  rings.add(new Mesh(new TorusGeometry(2.02, 0.022, 12, 128), materials.cyanLine));
  return rings;
}

// A 260 degree arc tilted in 3D, so the orange line passes in front of and behind the gear.
// The radius keeps the whole line inside the canvas at every scroll angle.
export function createEnergyOrbit(material: MeshBasicMaterial) {
  const radius = 3.75;
  const arcStart = -0.35 * Math.PI;
  const arcLength = 1.45 * Math.PI;
  const points: Vector3[] = [];

  for (let index = 0; index <= 96; index++) {
    const angle = arcStart + (arcLength * index) / 96;
    points.push(new Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
  }

  const orbit = new Mesh(new TubeGeometry(new CatmullRomCurve3(points), 160, 0.03, 8, false), material);
  orbit.rotation.set(MathUtils.degToRad(72), MathUtils.degToRad(-14), MathUtils.degToRad(-24));
  return orbit;
}

export function createSparkPlug(materials: CoreMaterials) {
  const plug = new Group();

  const insulatorProfile = [
    [0, 0],
    [0.16, 0],
    [0.16, 0.08],
    [0.13, 0.12],
    [0.13, 0.62],
    [0.09, 0.7],
    [0.07, 0.9],
    [0, 0.9],
  ].map(([x, y]) => new Vector2(x, y));
  const insulator = new Mesh(new LatheGeometry(insulatorProfile, 24), materials.ceramic);
  insulator.position.y = 0.32;

  const hexNut = new Mesh(new CylinderGeometry(0.22, 0.22, 0.2, 6), materials.steel);
  hexNut.position.y = 0.22;

  const thread = new Mesh(new CylinderGeometry(0.13, 0.13, 0.36, 16), materials.darkSteel);
  thread.position.y = -0.06;

  const electrode = new Mesh(new BoxGeometry(0.04, 0.1, 0.04), materials.darkSteel);
  electrode.position.y = -0.29;

  const terminal = new Mesh(new CylinderGeometry(0.05, 0.05, 0.12, 12), materials.steel);
  terminal.position.y = 1.28;

  plug.add(insulator, hexNut, thread, electrode, terminal);
  return plug;
}

// Flat open-ended spanner: a handle with a rounded end and a round head with an open jaw.
export function createSpanner(material: MeshStandardMaterial) {
  const handleHalfWidth = 0.11;
  const headCenterX = 0.85;
  const headRadius = 0.34;
  const jawHalfWidth = 0.12;
  const handleEndX = -1.2;

  const handleJoinAngle = Math.PI - Math.asin(handleHalfWidth / headRadius);
  const jawAngle = Math.asin(jawHalfWidth / headRadius);
  const jawOuterX = headCenterX + Math.cos(jawAngle) * headRadius;

  const outline = new Shape();
  outline.moveTo(handleEndX, -handleHalfWidth);
  outline.lineTo(headCenterX + Math.cos(handleJoinAngle) * headRadius, -handleHalfWidth);
  outline.absarc(headCenterX, 0, headRadius, -handleJoinAngle, -jawAngle, false);
  outline.lineTo(headCenterX, -jawHalfWidth);
  outline.absarc(headCenterX, 0, jawHalfWidth, -Math.PI / 2, Math.PI / 2, true);
  outline.lineTo(jawOuterX, jawHalfWidth);
  outline.absarc(headCenterX, 0, headRadius, jawAngle, handleJoinAngle, false);
  outline.lineTo(handleEndX, handleHalfWidth);
  outline.absarc(handleEndX, 0, handleHalfWidth, Math.PI / 2, (Math.PI * 3) / 2, false);

  const geometry = new ExtrudeGeometry(outline, {
    depth: 0.08,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 2,
    curveSegments: 16,
  });
  geometry.center();
  return new Mesh(geometry, material);
}

export function createBearing(materials: CoreMaterials) {
  const bearing = new Group();
  bearing.add(new Mesh(new TorusGeometry(0.42, 0.075, 16, 48), materials.steel));
  bearing.add(new Mesh(new TorusGeometry(0.2, 0.06, 16, 48), materials.steel));

  const ballGeometry = new SphereGeometry(0.075, 16, 12);
  for (let index = 0; index < 8; index++) {
    const angle = (index / 8) * Math.PI * 2;
    const ball = new Mesh(ballGeometry, materials.darkSteel);
    ball.position.set(Math.cos(angle) * 0.31, Math.sin(angle) * 0.31, 0);
    bearing.add(ball);
  }
  return bearing;
}
