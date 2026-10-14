"use client";

import { useState } from "react";
import { PlantInteractionProvider } from "@/components/plant/PlantInteractionProvider";
import { mapLocations, type MapLocation } from "@/data/mapLocations";
import { AttractionsList } from "./AttractionsList";
import { MarkerDetailSheet } from "./MarkerDetailSheet";
import { MapsNavbar } from "./MapsNavbar";

const GOOGLE_MY_MAPS_EMBED_URL =
  "https://www.google.com/maps/d/embed?mid=1UHrDU6Jw0l1MvBKVZVdJlMgOuEGWPIQ&ehbc=2E312F";

function MapsExperience() {
  const [selectedLocation, setSelectedLocation] =
    useState<MapLocation | null>(null);
  const selectedLocationIndex = mapLocations.findIndex(
    (location) => location.id === selectedLocation?.id
  );

  return (
    <main className="relative isolate h-[100svh] min-h-[100svh] w-full overflow-hidden bg-[#0B0D0B] text-[#EAE4D8] font-sans-ui">
      <iframe
        allowFullScreen
        className="absolute inset-0 z-0 block h-full w-full border-0"
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        src={GOOGLE_MY_MAPS_EMBED_URL}
        title="Soans Farm Tour Guide Map"
      />

      <AttractionsList
        locations={mapLocations}
        onSelectLocation={setSelectedLocation}
        selectedLocationId={selectedLocation?.id ?? null}
      />

      <MarkerDetailSheet
        currentIndex={selectedLocationIndex + 1}
        hasNext={selectedLocationIndex >= 0 && selectedLocationIndex < mapLocations.length - 1}
        hasPrevious={selectedLocationIndex > 0}
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
        onNavigateNext={() => {
          const next = mapLocations[selectedLocationIndex + 1];
          if (next) setSelectedLocation(next);
        }}
        onNavigatePrevious={() => {
          const previous = mapLocations[selectedLocationIndex - 1];
          if (previous) setSelectedLocation(previous);
        }}
        totalCount={mapLocations.length}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
        <div className="pointer-events-auto w-full">
          <MapsNavbar />
        </div>
      </div>
    </main>
  );
}

export function MapsClient() {
  return (
    <PlantInteractionProvider>
      <MapsExperience />
    </PlantInteractionProvider>
  );
}
