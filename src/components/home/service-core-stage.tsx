"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { cn } from "cn";

import type { ServiceCoreStatus } from "@/components/home/service-core-3d/service-core-canvas";

// The 3D code is a separate download that only starts when the checks below pass. three.js itself
// loads inside a Web Worker, never on the page's main thread.
const ServiceCoreCanvas = dynamic(() => import("@/components/home/service-core-3d/service-core-canvas"), {
  ssr: false,
});

// Mouse tilt for the SVG version, capped at 3 degrees (design system doc section 6).
const MAX_TILT = 3;

type NavigatorWithHints = Navigator & {
  connection?: { saveData?: boolean };
  deviceMemory?: number;
};

// 3D is progressive enhancement (frontend spec section 17): desktop with a mouse, no reduced motion,
// no data saver, enough memory, and a browser that can hand a canvas to a worker. The worker checks
// WebGL 2 itself. Everyone else keeps the static SVG.
function canRender3d() {
  const browser = navigator as NavigatorWithHints;
  const desktopWithMouse = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = browser.connection?.saveData === true;
  const lowMemory = typeof browser.deviceMemory === "number" && browser.deviceMemory < 4;
  const offscreenCanvas =
    typeof OffscreenCanvas === "function" && "transferControlToOffscreen" in HTMLCanvasElement.prototype;
  return desktopWithMouse && !reducedMotion && !saveData && !lowMemory && offscreenCanvas;
}

type ServiceCoreStageProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

export function ServiceCoreStage({ fallback, children }: ServiceCoreStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<ServiceCoreStatus>("static");
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 20 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);

  // Wait until the browser is idle, so the 3D download never competes with the first paint.
  useEffect(() => {
    const whenIdle =
      window.requestIdleCallback ?? ((callback: () => void) => window.setTimeout(callback, 1500));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = whenIdle(() => {
      if (canRender3d()) {
        setStatus("loading");
      }
    });
    return () => cancelIdle(handle);
  }, []);

  const isStatic = status === "static" || status === "failed";

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isStatic || reduceMotion || event.pointerType !== "mouse" || !stageRef.current) {
      return;
    }
    const bounds = stageRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <m.div
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={isStatic ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className="relative aspect-square"
    >
      <div
        className={cn("absolute inset-0 transition-opacity duration-700", status === "ready" && "opacity-0")}
      >
        {fallback}
      </div>
      {(status === "loading" || status === "ready") && (
        <div
          className={cn(
            "pointer-events-none absolute -inset-[12%] transition-opacity duration-700",
            status === "ready" ? "opacity-100" : "opacity-0",
          )}
        >
          <ServiceCoreCanvas pointerTargetRef={stageRef} onStatusChange={setStatus} />
        </div>
      )}
      {children}
    </m.div>
  );
}
