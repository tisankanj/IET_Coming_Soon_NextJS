import {
  ACESFilmicToneMapping,
  DirectionalLight,
  Group,
  MathUtils,
  PerspectiveCamera,
  PMREMGenerator,
  PointLight,
  Scene,
  WebGLRenderer,
} from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

import {
  createBearing,
  createEnergyOrbit,
  createGearRing,
  createMaterials,
  createServiceRings,
  createSpanner,
  createSparkPlug,
} from "@/components/home/service-core-3d/parts";

// Motion limits from the design system doc (section 6): mouse tilt 2 to 3 degrees, scroll rotation
// 8 to 12 degrees, never a constant spin.
const MAX_TILT = MathUtils.degToRad(3);
const MAX_SCROLL_ROTATION = MathUtils.degToRad(12);
const EASING = 0.12;
const SETTLED = 0.0005;

export type ServiceCoreScene = {
  setPointer: (x: number, y: number) => void;
  setScrollProgress: (progress: number) => void;
  setVisible: (visible: boolean) => void;
  resize: (width: number, height: number) => void;
};

// Runs inside service-core.worker.ts. Ending the worker releases the WebGL context and every GPU
// resource, so the scene needs no dispose step.
export function createServiceCoreScene(
  canvas: OffscreenCanvas,
  pixelRatio: number,
  onFirstFrame: () => void,
): ServiceCoreScene {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(pixelRatio, 1.5));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new Scene();

  // Metal reflections come from a room environment generated in code, not a downloaded HDR file.
  const pmremGenerator = new PMREMGenerator(renderer);
  const roomEnvironment = new RoomEnvironment();
  scene.environment = pmremGenerator.fromScene(roomEnvironment, 0.04).texture;
  roomEnvironment.dispose();
  pmremGenerator.dispose();

  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, -0.8, 17);
  camera.lookAt(0, 0, 0);

  const orangeRim = new PointLight(0xf36102, 60, 30);
  orangeRim.position.set(-6, 5, 4);
  const blueFill = new PointLight(0x0998d3, 40, 30);
  blueFill.position.set(6, -4, 5);
  const keyLight = new DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(3, 6, 8);
  scene.add(orangeRim, blueFill, keyLight);

  const materials = createMaterials();
  const core = new Group();
  core.add(
    createGearRing(materials.steel),
    createServiceRings(materials),
    createEnergyOrbit(materials.energy),
  );

  // The parts tilt with the mouse but do not turn on scroll. At these positions they stay inside the
  // canvas at full tilt, clear of both Branch chips and clear of the headline on a 1024px screen.
  const floatingParts = new Group();

  const sparkPlug = createSparkPlug(materials);
  sparkPlug.position.set(2.6, 2.7, 1.4);
  sparkPlug.rotation.set(0.3, 0.4, -0.7);

  const spanner = createSpanner(materials.steel);
  spanner.position.set(-2.6, -3.3, 1.2);
  spanner.rotation.set(0.5, -0.3, 0.6);

  const bearing = createBearing(materials);
  bearing.position.set(3.1, -3.5, 1);
  bearing.rotation.set(0.6, 0.5, 0);

  floatingParts.add(sparkPlug, spanner, bearing);
  scene.add(core, floatingParts);

  const target = { tiltX: 0, tiltY: 0, spin: 0 };
  const current = { tiltX: 0, tiltY: 0, spin: 0 };
  let frameId = 0;
  let visible = true;
  let hasRendered = false;

  function renderFrame() {
    frameId = 0;
    current.tiltX += (target.tiltX - current.tiltX) * EASING;
    current.tiltY += (target.tiltY - current.tiltY) * EASING;
    current.spin += (target.spin - current.spin) * EASING;
    core.rotation.set(current.tiltX, current.tiltY, current.spin);
    floatingParts.rotation.set(current.tiltX, current.tiltY, 0);
    renderer.render(scene, camera);

    if (!hasRendered) {
      hasRendered = true;
      onFirstFrame();
    }

    const settled =
      Math.abs(target.tiltX - current.tiltX) < SETTLED &&
      Math.abs(target.tiltY - current.tiltY) < SETTLED &&
      Math.abs(target.spin - current.spin) < SETTLED;
    if (!settled) {
      requestFrame();
    }
  }

  // Draws only while something is moving, so an idle hero uses no GPU time.
  function requestFrame() {
    if (visible && frameId === 0) {
      frameId = requestAnimationFrame(renderFrame);
    }
  }

  function setPointer(x: number, y: number) {
    target.tiltY = x * 2 * MAX_TILT;
    target.tiltX = y * 2 * MAX_TILT;
    requestFrame();
  }

  function setScrollProgress(progress: number) {
    target.spin = -Math.min(Math.max(progress, 0), 1) * MAX_SCROLL_ROTATION;
    requestFrame();
  }

  function setVisible(isVisible: boolean) {
    visible = isVisible;
    if (visible) {
      requestFrame();
    } else if (frameId !== 0) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }
  }

  function resize(width: number, height: number) {
    if (width === 0 || height === 0) {
      return;
    }
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    requestFrame();
  }

  return { setPointer, setScrollProgress, setVisible, resize };
}
