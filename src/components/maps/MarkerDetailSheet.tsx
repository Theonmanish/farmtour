"use client";

import { useEffect, useState } from "react";
import type { MapLocation } from "@/data/mapLocations";
import { mapLocationDetails } from "@/data/mapLocationDetails";

interface MarkerDetailSheetProps {
  location: MapLocation | null;
  onClose: () => void;
}

const MIN_HEIGHT = 190;

export function MarkerDetailSheet({ location, onClose }: MarkerDetailSheetProps) {
  const [height, setHeight] = useState(360);
  const [dragStart, setDragStart] = useState<{ y: number; height: number } | null>(null);

  useEffect(() => {
    if (!location) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [location, onClose]);

  if (!location) return null;

  const details = mapLocationDetails[location.id];

  const maxHeight = typeof window === "undefined" ? 700 : Math.min(window.innerHeight * 0.92, window.innerHeight - 16);

  return (
    <section
      aria-labelledby="map-location-name"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-30 mx-auto flex w-full max-w-3xl flex-col border border-b-0 border-[#282C28] bg-[#161916] shadow-[0_-12px_48px_rgba(0,0,0,0.55)]"
      role="dialog"
      style={{ height: `${Math.min(height, maxHeight)}px`, maxHeight: "calc(100dvh - 16px)" }}
    >
      <div className="shrink-0 border-b border-[#282C28] px-4 pb-4 pt-2 sm:px-6">
        <div
          aria-label="Resize location details"
          aria-valuemax={maxHeight}
          aria-valuemin={MIN_HEIGHT}
          aria-valuenow={Math.round(height)}
          className="flex cursor-ns-resize touch-none justify-center py-2"
          onKeyDown={(event) => {
            if (event.key === "ArrowUp") setHeight((value) => Math.min(maxHeight, value + 48));
            if (event.key === "ArrowDown") setHeight((value) => Math.max(MIN_HEIGHT, value - 48));
          }}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            setDragStart({ y: event.clientY, height });
          }}
          onPointerMove={(event) => {
            if (dragStart) setHeight(Math.max(MIN_HEIGHT, Math.min(maxHeight, dragStart.height + dragStart.y - event.clientY)));
          }}
          onPointerUp={() => setDragStart(null)}
          role="slider"
          tabIndex={0}
        >
          <span className="h-1.5 w-12 rounded-full bg-[#4E453B]" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif-botanical text-2xl font-normal text-[#EAE4D8] sm:text-3xl" id="map-location-name">{details.heading}</h2>
          </div>
          <button aria-label="Close location details" className="border border-[#282C28] p-2 text-[#A8A89C] hover:border-[#B99868] hover:text-[#EAE4D8]" onClick={onClose} type="button">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-4 text-sm leading-relaxed text-[#A8A89C] sm:p-6">
        {details.description && <p>{details.description}</p>}
      </div>
    </section>
  );
}
