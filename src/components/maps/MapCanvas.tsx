"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import mapImage from "@/app/map.png";
import type { MapLocation } from "@/data/mapLocations";
import { MapControls } from "./MapControls";
import { MapMarkerLayer } from "./MapMarkerLayer";

interface MapCanvasProps {
  locations: MapLocation[];
  selectedLocationId: string | null;
  onSelectLocation: (location: MapLocation) => void;
}

interface Point {
  x: number;
  y: number;
}

interface Transform {
  scale: number;
  x: number;
  y: number;
}

const MAX_ZOOM_MULTIPLIER = 4;
const ZOOM_STEP = 1.25;

/** Interactive image canvas with a crisp marker overlay positioned in viewport space. */
export function MapCanvas({
  locations,
  selectedLocationId,
  onSelectLocation,
}: MapCanvasProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointersRef = useRef(new Map<number, Point>());
  const dragStartRef = useRef<{ pointerId: number; point: Point; x: number; y: number } | null>(null);
  const pinchStartRef = useRef<{ distance: number; scale: number; imageX: number; imageY: number } | null>(null);
  const initializedRef = useRef(false);
  const previousViewportRef = useRef({ width: 0, height: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [transform, setTransform] = useState<Transform>({ scale: 1, x: 0, y: 0 });
  const transformRef = useRef(transform);

  const baseScale = viewport.width && viewport.height
    ? Math.max(viewport.width / mapImage.width, viewport.height / mapImage.height)
    : 1;
  const minScale = baseScale;
  const maxScale = baseScale * MAX_ZOOM_MULTIPLIER;

  const commitTransform = useCallback((next: Transform) => {
    transformRef.current = next;
    setTransform(next);
  }, []);

  const clampTransform = useCallback((next: Transform): Transform => {
    if (!viewport.width || !viewport.height) return next;
    const minX = Math.min(0, viewport.width - mapImage.width * next.scale);
    const minY = Math.min(0, viewport.height - mapImage.height * next.scale);
    return {
      ...next,
      x: Math.max(minX, Math.min(0, next.x)),
      y: Math.max(minY, Math.min(0, next.y)),
    };
  }, [viewport.height, viewport.width]);

  const resetView = useCallback(() => {
    if (!viewport.width || !viewport.height) return;
    const scale = Math.max(viewport.width / mapImage.width, viewport.height / mapImage.height);
    commitTransform(clampTransform({
      scale,
      x: (viewport.width - mapImage.width * scale) / 2,
      y: (viewport.height - mapImage.height * scale) / 2,
    }));
  }, [clampTransform, commitTransform, viewport.height, viewport.width]);

  const zoomAt = useCallback((requestedScale: number, anchor: Point) => {
    const current = transformRef.current;
    const scale = Math.max(minScale, Math.min(maxScale, requestedScale));
    const imageX = (anchor.x - current.x) / current.scale;
    const imageY = (anchor.y - current.y) / current.scale;
    commitTransform(clampTransform({
      scale,
      x: anchor.x - imageX * scale,
      y: anchor.y - imageY * scale,
    }));
  }, [clampTransform, commitTransform, maxScale, minScale]);

  useEffect(() => {
    const viewportElement = viewportRef.current;
    if (!viewportElement) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (!width || !height) return;

      const previous = previousViewportRef.current;
      const nextViewport = { width, height };
      previousViewportRef.current = nextViewport;
      setViewport(nextViewport);

      const scale = Math.max(width / mapImage.width, height / mapImage.height);
      if (!initializedRef.current || !previous.width || !previous.height) {
        initializedRef.current = true;
        const centered = {
          scale,
          x: (width - mapImage.width * scale) / 2,
          y: (height - mapImage.height * scale) / 2,
        };
        transformRef.current = centered;
        setTransform(centered);
      } else {
        const current = transformRef.current;
        const resized = {
          ...current,
          x: current.x + (width - previous.width) / 2,
          y: current.y + (height - previous.height) / 2,
          scale: Math.max(scale, Math.min(scale * MAX_ZOOM_MULTIPLIER, current.scale)),
        };
        const minX = Math.min(0, width - mapImage.width * resized.scale);
        const minY = Math.min(0, height - mapImage.height * resized.scale);
        resized.x = Math.max(minX, Math.min(0, resized.x));
        resized.y = Math.max(minY, Math.min(0, resized.y));
        transformRef.current = resized;
        setTransform(resized);
      }
    });

    observer.observe(viewportElement);
    return () => observer.disconnect();
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const rect = event.currentTarget.getBoundingClientRect();
    const point = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    pointersRef.current.set(event.pointerId, point);

    if (pointersRef.current.size === 1) {
      const current = transformRef.current;
      dragStartRef.current = { pointerId: event.pointerId, point, x: current.x, y: current.y };
    } else if (pointersRef.current.size === 2) {
      const [first, second] = [...pointersRef.current.values()];
      const midpoint = { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
      const current = transformRef.current;
      pinchStartRef.current = {
        distance: Math.hypot(first.x - second.x, first.y - second.y),
        scale: current.scale,
        imageX: (midpoint.x - current.x) / current.scale,
        imageY: (midpoint.y - current.y) / current.scale,
      };
      dragStartRef.current = null;
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(event.pointerId)) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointersRef.current.set(event.pointerId, { x: event.clientX - rect.left, y: event.clientY - rect.top });

    if (pointersRef.current.size >= 2 && pinchStartRef.current) {
      const [first, second] = [...pointersRef.current.values()];
      const midpoint = { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
      const distance = Math.hypot(first.x - second.x, first.y - second.y);
      const pinch = pinchStartRef.current;
      const scale = Math.max(minScale, Math.min(maxScale, pinch.scale * (distance / Math.max(1, pinch.distance))));
      commitTransform(clampTransform({
        scale,
        x: midpoint.x - pinch.imageX * scale,
        y: midpoint.y - pinch.imageY * scale,
      }));
      return;
    }

    const drag = dragStartRef.current;
    const point = pointersRef.current.get(event.pointerId);
    if (drag && point && drag.pointerId === event.pointerId) {
      commitTransform(clampTransform({
        ...transformRef.current,
        x: drag.x + point.x - drag.point.x,
        y: drag.y + point.y - drag.point.y,
      }));
    }
  };

  const onPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(event.pointerId);
    pinchStartRef.current = null;
    if (pointersRef.current.size === 1) {
      const [pointerId, point] = [...pointersRef.current.entries()][0];
      const current = transformRef.current;
      dragStartRef.current = { pointerId, point, x: current.x, y: current.y };
    } else {
      dragStartRef.current = null;
    }
  };

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    zoomAt(
      transformRef.current.scale * (event.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP),
      { x: event.clientX - rect.left, y: event.clientY - rect.top },
    );
  };

  const zoomToCenter = (factor: number) => {
    zoomAt(transformRef.current.scale * factor, { x: viewport.width / 2, y: viewport.height / 2 });
  };

  return (
    <section aria-label="Farm map canvas" className="absolute inset-0 overflow-hidden bg-[#0B0D0B]">
      <div
        ref={viewportRef}
        aria-label="Satellite map. Drag to pan; use pinch or the wheel to zoom."
        className="absolute inset-0 touch-none select-none cursor-grab active:cursor-grabbing"
        onPointerCancel={onPointerEnd}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onWheel={onWheel}
        role="application"
      >
        <div
          className="absolute left-0 top-0 will-change-transform"
          style={{
            height: mapImage.height,
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
            transformOrigin: "top left",
            width: mapImage.width,
          }}
        >
          <Image
            alt=""
            className="pointer-events-none block h-full w-full select-none"
            draggable={false}
            height={mapImage.height}
            priority
            src={mapImage}
            width={mapImage.width}
          />
        </div>

        <MapMarkerLayer
          imageHeight={mapImage.height}
          imageWidth={mapImage.width}
          locations={locations}
          selectedLocationId={selectedLocationId}
          transform={transform}
          onSelectLocation={onSelectLocation}
        />
      </div>

      <MapControls
        canZoomIn={transform.scale < maxScale - 0.001}
        canZoomOut={transform.scale > minScale + 0.001}
        onReset={resetView}
        onZoomIn={() => zoomToCenter(ZOOM_STEP)}
        onZoomOut={() => zoomToCenter(1 / ZOOM_STEP)}
      />
    </section>
  );
}
