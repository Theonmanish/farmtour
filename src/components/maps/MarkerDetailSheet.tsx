"use client";

import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import type { MapLocation } from "@/data/mapLocations";
import { mapLocationDetails } from "@/data/mapLocationDetails";

interface MarkerDetailSheetProps {
  location: MapLocation | null;
  currentIndex: number;
  totalCount: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onClose: () => void;
  onNavigatePrevious: () => void;
  onNavigateNext: () => void;
}

const MIN_HEIGHT = 190;
const DEFAULT_HEIGHT = 360;

export function MarkerDetailSheet({
  location,
  currentIndex,
  totalCount,
  hasPrevious,
  hasNext,
  onClose,
  onNavigatePrevious,
  onNavigateNext,
}: MarkerDetailSheetProps) {
  const [sheetHeight, setSheetHeight] = useState(DEFAULT_HEIGHT);
  const [isDragging, setIsDragging] = useState(false);
  const [maxHeight, setMaxHeight] = useState(700);
  const dragStartY = useRef(0);
  const dragStartHeight = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMaxHeight = () => {
      const max = Math.min(window.innerHeight * 0.94, window.innerHeight - 16);
      setMaxHeight(max);
      setSheetHeight((height) => Math.min(height, max));
    };

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, []);

  useEffect(() => {
    if (!location) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [location, onClose]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [location?.id]);

  if (!location) return null;

  const details = mapLocationDetails[location.id];
  const isFullscreen = sheetHeight >= maxHeight - 8;
  const isCollapsed = sheetHeight <= MIN_HEIGHT + 8;

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    dragStartY.current = event.clientY;
    dragStartHeight.current = sheetHeight;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const nextHeight = dragStartHeight.current + dragStartY.current - event.clientY;
    setSheetHeight(Math.max(MIN_HEIGHT, Math.min(maxHeight, nextHeight)));
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    const stops = [MIN_HEIGHT, DEFAULT_HEIGHT, maxHeight];
    const nearestStop = stops.reduce((nearest, stop) =>
      Math.abs(stop - sheetHeight) < Math.abs(nearest - sheetHeight) ? stop : nearest
    );
    setSheetHeight(nearestStop);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      setSheetHeight((height) => Math.min(maxHeight, height + 60));
    } else if (event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault();
      setSheetHeight((height) => Math.max(MIN_HEIGHT, height - 60));
    } else if (event.key === "Home") {
      event.preventDefault();
      setSheetHeight(MIN_HEIGHT);
    } else if (event.key === "End") {
      event.preventDefault();
      setSheetHeight(maxHeight);
    }
  };

  const controlClass =
    "flex h-9 w-9 items-center justify-center border border-[#282C28] text-[#EAE4D8] transition-colors hover:border-[#B99868] hover:text-[#B99868] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B99868] disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <section
      aria-labelledby="map-location-name"
      aria-modal="false"
      className={`fixed inset-x-0 bottom-0 z-50 mx-auto flex w-full max-w-4xl flex-col rounded-t-2xl border border-b-0 border-[#282C28] bg-[#161916] text-[#EAE4D8] shadow-[0_-12px_48px_rgba(0,0,0,0.85)] ${isDragging ? "transition-none" : "transition-[height] duration-200 ease-out"}`}
      role="dialog"
      style={{ height: `${Math.min(sheetHeight, maxHeight)}px`, maxHeight: "calc(100dvh - 16px)" }}
    >
      <div className="shrink-0 select-none rounded-t-2xl border-b border-[#282C28] bg-[#161916] px-4 pb-3 pt-2.5 sm:px-6 sm:pb-4 sm:pt-3">
        <div
          aria-label="Resize attraction details"
          aria-valuemax={maxHeight}
          aria-valuemin={MIN_HEIGHT}
          aria-valuenow={Math.round(sheetHeight)}
          className="group flex w-full cursor-ns-resize flex-col items-center rounded py-1.5 outline-none focus-visible:ring-1 focus-visible:ring-[#B99868]"
          onKeyDown={handleKeyDown}
          onPointerCancel={() => setIsDragging(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          role="slider"
          tabIndex={0}
        >
          <span className={`h-1.5 w-14 rounded-full transition-colors ${isDragging ? "bg-[#B99868]" : "bg-[#4E453B] group-hover:bg-[#B99868]"}`} />
        </div>

        <div className="mb-2 mt-1 flex items-center justify-between gap-2">
          <span className="font-mono text-xs text-[#A8A89C]">
            {currentIndex} of {totalCount}
          </span>
          <div className="flex items-center gap-2">
            <button aria-label="Previous attraction" className={controlClass} disabled={!hasPrevious} onClick={onNavigatePrevious} type="button">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d="m15 18-6-6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </button>
            <button aria-label="Next attraction" className={controlClass} disabled={!hasNext} onClick={onNavigateNext} type="button">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </button>
            <span aria-hidden="true" className="mx-1 h-5 w-px bg-[#282C28]" />
            <button
              aria-label={isCollapsed ? "Expand attraction details" : "Collapse attraction details"}
              className={controlClass}
              onClick={() => setSheetHeight(isCollapsed ? DEFAULT_HEIGHT : MIN_HEIGHT)}
              title={isCollapsed ? "Expand" : "Collapse"}
              type="button"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d={isCollapsed ? "m6 14 6-6 6 6" : "m6 10 6 6 6-6"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </button>
            <button
              aria-label={isFullscreen ? "Exit fullscreen attraction details" : "Show fullscreen attraction details"}
              className={controlClass}
              onClick={() => setSheetHeight(isFullscreen ? DEFAULT_HEIGHT : maxHeight)}
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              type="button"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                {isFullscreen ? (
                  <path d="M8 3v5H3m13-5v5h5M8 21v-5H3m13 5v-5h5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                ) : (
                  <path d="M8 3H3v5m13-5h5v5M8 21H3v-5m13 5h5v-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                )}
              </svg>
            </button>
            <button aria-label="Close attraction details" className={controlClass} onClick={onClose} type="button">
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>

        <h2 className="break-words font-serif-botanical text-2xl font-normal leading-snug tracking-tight sm:text-3xl" id="map-location-name">
          {details.heading}
        </h2>
      </div>
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-sm leading-relaxed text-[#A8A89C] sm:p-6">
        <p>{details.description}</p>
      </div>
    </section>
  );
}
