"use client";

import { useState } from "react";
import type { MapLocation } from "@/data/mapLocations";

interface AttractionsListProps {
  locations: MapLocation[];
  onSelectLocation: (location: MapLocation) => void;
  selectedLocationId: string | null;
}

export function AttractionsList({
  locations,
  onSelectLocation,
  selectedLocationId,
}: AttractionsListProps) {
  const [expanded, setExpanded] = useState(false);
  const attractions = locations;

  return (
    <section
      aria-label="Farm attractions"
      className="absolute right-3 top-[calc(62px+env(safe-area-inset-top)+0.75rem)] z-20 w-[min(19rem,calc(100vw-1.5rem))] overflow-hidden border border-[#B99868]/30 bg-[#111311]/95 text-[#EAE4D8] shadow-lg backdrop-blur-sm sm:right-5"
      onPointerDown={(event) => event.stopPropagation()}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <h2 className="font-serif-botanical text-base">Explore the Farm</h2>
          <p className="mt-0.5 text-[11px] tracking-wide text-[#A8A89C]">
            {attractions.length} locations
          </p>
        </div>
        <button
          aria-controls="farm-attractions-list"
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse farm attractions" : "Expand farm attractions"}
          className="flex h-9 w-9 shrink-0 items-center justify-center text-[#B99868] transition-colors hover:text-[#EAE4D8] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B99868]"
          onClick={() => setExpanded((value) => !value)}
          type="button"
        >
          <svg
            aria-hidden="true"
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        </button>
      </div>
      {expanded && (
        <ul
          className="max-h-[min(52svh,25rem)] overflow-y-auto border-t border-[#282C28]"
          id="farm-attractions-list"
        >
          {attractions.map((location) => {
            const selected = selectedLocationId === location.id;
            return (
              <li key={location.id}>
                <button
                  aria-pressed={selected}
                  className={`flex min-h-12 w-full items-center gap-3 border-b border-[#282C28] px-4 py-3 text-left text-sm transition-colors last:border-b-0 hover:bg-[#202420] focus-visible:outline focus-visible:outline-1 focus-visible:outline-inset focus-visible:outline-[#B99868] ${selected ? "text-[#D2B486]" : "text-[#EAE4D8]"}`}
                  onClick={() => onSelectLocation(location)}
                  type="button"
                >
                  <span aria-hidden="true" className="text-[11px] text-[#B99868]">✦</span>
                  <span className="min-w-0 flex-1 truncate">{location.name}</span>
                  {selected && <span className="text-[10px] uppercase tracking-wider text-[#B99868]">Selected</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
