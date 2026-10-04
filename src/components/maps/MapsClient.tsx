"use client";

import { useState } from "react";
import { mapLocations, type MapLocation } from "@/data/mapLocations";
import { PlantInteractionProvider } from "@/components/plant/PlantInteractionProvider";
import { MapCanvas } from "./MapCanvas";
import { MapsNavbar } from "./MapsNavbar";
import { MarkerDetailSheet } from "./MarkerDetailSheet";

function MapsExperience() {
  const [selectedLocation, setSelectedLocation] =
    useState<MapLocation | null>(null);

  return (
    <main className="relative isolate h-[100svh] overflow-hidden bg-[#0B0D0B] text-[#EAE4D8] font-sans-ui">
      <MapCanvas
        locations={mapLocations}
        selectedLocationId={selectedLocation?.id ?? null}
        onSelectLocation={setSelectedLocation}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pt-[max(1.5rem,env(safe-area-inset-top))]">
        <div className="pointer-events-auto mx-auto w-full">
          <MapsNavbar />
        </div>
      </div>

      <MarkerDetailSheet
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
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
