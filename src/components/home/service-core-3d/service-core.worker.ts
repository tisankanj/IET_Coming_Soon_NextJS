import {
  createServiceCoreScene,
  type ServiceCoreScene,
} from "@/components/home/service-core-3d/create-service-core-scene";

// The 3D scene runs in this worker, off the page's main thread. Parsing three.js, compiling shaders
// (up to half a second on a first visit) and drawing can then never delay a click or a scroll.

type StartCommand = {
  type: "start";
  canvas: OffscreenCanvas;
  width: number;
  height: number;
  pixelRatio: number;
  scrollProgress: number;
};

export type ServiceCoreCommand =
  | StartCommand
  | { type: "pointer"; x: number; y: number }
  | { type: "scroll"; progress: number }
  | { type: "visible"; visible: boolean }
  | { type: "resize"; width: number; height: number };

export type ServiceCoreEvent = { type: "ready" } | { type: "failed" };

let scene: ServiceCoreScene | null = null;

function report(event: ServiceCoreEvent) {
  self.postMessage(event);
}

function start({ canvas, width, height, pixelRatio, scrollProgress }: StartCommand) {
  try {
    scene = createServiceCoreScene(canvas, pixelRatio, () => report({ type: "ready" }));
  } catch {
    // No WebGL 2 in this browser's workers. The page keeps the SVG.
    report({ type: "failed" });
    return;
  }

  canvas.addEventListener("webglcontextlost", () => report({ type: "failed" }));
  scene.resize(width, height);
  scene.setScrollProgress(scrollProgress);
}

self.onmessage = (event: MessageEvent<ServiceCoreCommand>) => {
  const command = event.data;
  if (command.type === "start") {
    start(command);
    return;
  }
  if (!scene) {
    return;
  }

  switch (command.type) {
    case "pointer":
      scene.setPointer(command.x, command.y);
      break;
    case "scroll":
      scene.setScrollProgress(command.progress);
      break;
    case "visible":
      scene.setVisible(command.visible);
      break;
    case "resize":
      scene.resize(command.width, command.height);
      break;
  }
};
