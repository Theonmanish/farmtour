"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import type { Plant } from "@/data/plants";
import { DetailContent } from "@/components/plant/DetailContent";

interface PlantDetailSheetProps {
  plant: Plant | null;
  onClose: () => void;
  onNavigatePrev: () => void;
  onNavigateNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  currentIndex: number;
  totalCount: number;
}

export function PlantDetailSheet({
  plant,
  onClose,
  onNavigatePrev,
  onNavigateNext,
  hasPrev,
  hasNext,
  currentIndex,
  totalCount,
}: PlantDetailSheetProps) {
  const MIN_HEIGHT = 190;

  const getMaxHeight = useCallback(() => {
    if (typeof window !== "undefined") {
      return Math.min(window.innerHeight * 0.94, window.innerHeight - 16);
    }
    return 700;
  }, []);

  const [sheetHeight, setSheetHeight] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return Math.min(window.innerHeight * 0.82, 640);
    }
    return 550;
  });

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartYRef = useRef<number>(0);
  const dragStartHeightRef = useRef<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Recalculate max height when window resizes
  useEffect(() => {
    const handleResize = () => {
      const maxH = getMaxHeight();
      setSheetHeight((prev) => Math.max(MIN_HEIGHT, Math.min(maxH, prev)));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getMaxHeight]);

  // Close sheet on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (plant) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [plant, onClose]);

  // Reset scroll position when plant changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [plant?.id]);

  if (!plant) return null;

  const maxH = getMaxHeight();

  // Drag interaction handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartYRef.current = e.clientY;
    dragStartHeightRef.current = sheetHeight;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaY = dragStartYRef.current - e.clientY;
    const newH = Math.max(
      MIN_HEIGHT,
      Math.min(maxH, dragStartHeightRef.current + deltaY)
    );
    setSheetHeight(newH);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Keyboard navigation on drag slider handle
  const handleKeyDownHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      setSheetHeight((prev) => Math.min(maxH, prev + 60));
    } else if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      setSheetHeight((prev) => Math.max(MIN_HEIGHT, prev - 60));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSheetHeight(MIN_HEIGHT);
    } else if (e.key === "End") {
      e.preventDefault();
      setSheetHeight(maxH);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="sheet-plant-name"
      className={`fixed left-0 right-0 bottom-0 z-50 mx-auto w-full max-w-4xl bg-[#161916] border border-[#282C28] border-b-0 rounded-t-2xl shadow-2xl flex flex-col opacity-100 ${
        isDragging ? "transition-none" : "transition-[height] duration-200 ease-out"
      }`}
      style={{
        height: `${sheetHeight}px`,
        maxHeight: "calc(100dvh - 16px)",
        boxShadow: "0 -12px 48px rgba(0, 0, 0, 0.85)",
      }}
    >
      {/* FIXED HEADER - DRAG HANDLE + METADATA + NAV + CLOSE BUTTON */}
      <div className="flex-shrink-0 border-b border-[#282C28] px-4 pt-2.5 pb-3 sm:px-6 sm:pt-3 sm:pb-4 bg-[#161916] rounded-t-2xl select-none">
        {/* TOP-CENTER DRAG HANDLE SLIDER */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Resize plant details"
          aria-valuemin={MIN_HEIGHT}
          aria-valuemax={maxH}
          aria-valuenow={Math.round(sheetHeight)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onKeyDown={handleKeyDownHandle}
          className="w-full flex flex-col items-center py-1.5 cursor-ns-resize touch-none group outline-none focus-visible:ring-1 focus-visible:ring-[#B99868] rounded"
        >
          <div
            className={`w-14 h-1.5 rounded-full transition-colors ${
              isDragging
                ? "bg-[#B99868]"
                : "bg-[#4E453B] group-hover:bg-[#B99868]"
            }`}
          />
        </div>

        {/* TOP CONTROL BAR */}
        <div className="flex items-center justify-between gap-2 mt-1 mb-2">
          {/* Plant Number & Navigation Count */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center text-[11px] font-semibold tracking-[0.18em] uppercase text-[#B99868] bg-[#0B0D0B] border border-[rgba(185,152,104,0.3)] px-2.5 py-1 rounded">
              PLANT {plant.plant_number}
            </span>
            <span className="text-xs text-[#A8A89C] font-mono">
              {currentIndex} of {totalCount}
            </span>
          </div>

          {/* Previous / Next Navigation & Close Button */}
          <div className="flex items-center gap-2">
            {/* Previous Plant */}
            <button
              type="button"
              onClick={onNavigatePrev}
              disabled={!hasPrev}
              aria-label="Previous plant"
              className="p-1.5 text-xs text-[#EAE4D8] bg-[#0B0D0B] border border-[#282C28] rounded hover:border-[#B99868] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Plant */}
            <button
              type="button"
              onClick={onNavigateNext}
              disabled={!hasNext}
              aria-label="Next plant"
              className="p-1.5 text-xs text-[#EAE4D8] bg-[#0B0D0B] border border-[#282C28] rounded hover:border-[#B99868] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="w-[1px] h-5 bg-[#282C28] mx-1" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close plant details"
              className="p-1.5 text-[#A8A89C] hover:text-[#EAE4D8] bg-[#0B0D0B] border border-[#282C28] rounded hover:border-[#B99868] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Plant Common Name & Scientific Name Header */}
        <div className="mt-1">
          <h2
            id="sheet-plant-name"
            className="font-serif-botanical text-2xl sm:text-3xl text-[#EAE4D8] font-normal tracking-tight leading-snug break-words"
          >
            {plant.common_name}
          </h2>
          <p className="font-serif-botanical italic text-sm sm:text-base text-[#A8A89C] mt-0.5">
            {plant.scientific_name}
          </p>
        </div>
      </div>

      {/* SCROLLABLE CONTENT AREA */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-botanical min-h-0 bg-[#161916]"
      >
        <DetailContent plant={plant} />
      </div>
    </div>
  );
}
