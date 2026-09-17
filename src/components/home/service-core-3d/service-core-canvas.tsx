"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

import type {
  ServiceCoreCommand,
  ServiceCoreEvent,
} from "@/components/home/service-core-3d/service-core.worker";

export type ServiceCoreStatus = "static" | "loading" | "ready" | "failed";

type ServiceCoreCanvasProps = {
  pointerTargetRef: React.RefObject<HTMLDivElement | null>;
  onStatusChange: (status: ServiceCoreStatus) => void;
};

function sendCommand(worker: Worker | null, command: ServiceCoreCommand, transfer: Transferable[] = []) {
  worker?.postMessage(command, transfer);
}

// Loaded with next/dynamic only on capable desktops. The scene runs in a Web Worker: this component
// hands the worker a canvas and passes on the pointer, the page scroll, the size and visibility.
// If the worker fails, it reports "failed" and the SVG stays.
export default function ServiceCoreCanvas({ pointerTargetRef, onStatusChange }: ServiceCoreCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    sendCommand(workerRef.current, { type: "scroll", progress: latest / window.innerHeight });
  });

  useEffect(() => {
    const container = containerRef.current;
    const pointerTarget = pointerTargetRef.current;
    if (!container || !pointerTarget) {
      return;
    }

    // A new canvas on every mount, because control of a canvas can be handed over only once.
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 size-full";
    container.append(canvas);

    const worker = new Worker(new URL("./service-core.worker.ts", import.meta.url), { type: "module" });
    workerRef.current = worker;
    worker.onmessage = (event: MessageEvent<ServiceCoreEvent>) => onStatusChange(event.data.type);
    worker.onerror = () => onStatusChange("failed");

    const offscreenCanvas = canvas.transferControlToOffscreen();
    const bounds = canvas.getBoundingClientRect();
    sendCommand(
      worker,
      {
        type: "start",
        canvas: offscreenCanvas,
        width: bounds.width,
        height: bounds.height,
        pixelRatio: window.devicePixelRatio,
        scrollProgress: window.scrollY / window.innerHeight,
      },
      [offscreenCanvas],
    );

    const resizeObserver = new ResizeObserver(([entry]) => {
      sendCommand(worker, {
        type: "resize",
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    resizeObserver.observe(canvas);

    // The worker stops drawing as soon as the hero leaves the screen.
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      sendCommand(worker, { type: "visible", visible: entry.isIntersecting });
    });
    visibilityObserver.observe(canvas);

    const handlePointerMove = (event: PointerEvent) => {
      const stageBounds = pointerTarget.getBoundingClientRect();
      sendCommand(worker, {
        type: "pointer",
        x: (event.clientX - stageBounds.left) / stageBounds.width - 0.5,
        y: (event.clientY - stageBounds.top) / stageBounds.height - 0.5,
      });
    };

    const handlePointerLeave = () => {
      sendCommand(worker, { type: "pointer", x: 0, y: 0 });
    };

    pointerTarget.addEventListener("pointermove", handlePointerMove);
    pointerTarget.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      pointerTarget.removeEventListener("pointermove", handlePointerMove);
      pointerTarget.removeEventListener("pointerleave", handlePointerLeave);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      worker.terminate();
      workerRef.current = null;
      canvas.remove();
    };
  }, [pointerTargetRef, onStatusChange]);

  return <div ref={containerRef} aria-hidden="true" className="absolute inset-0" />;
}
