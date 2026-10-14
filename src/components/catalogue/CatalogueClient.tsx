"use client";

import { useMemo } from "react";
import type { Plant } from "@/data/plants";
import { getPlants } from "@/lib/plants";
import { usePlantInteraction } from "@/components/plant/PlantInteractionProvider";
import { CatalogueHeader } from "./CatalogueHeader";
import { PlantList } from "./PlantList";

export function CatalogueClient() {
  const { selectedPlantId, openPlant } = usePlantInteraction();

  // All plants in catalogue order
  const allPlants = useMemo(() => getPlants(), []);

  const handleSelectPlant = (plant: Plant) => {
    openPlant(plant);
  };

  return (
    <div className="min-h-screen bg-[#111311] text-[#EAE4D8] pb-24 font-sans-ui">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        {/* Catalogue Header */}
        <CatalogueHeader />

        {/* Plant List */}
        <section>
          <PlantList
            plants={allPlants}
            selectedPlantId={selectedPlantId}
            onSelectPlant={handleSelectPlant}
          />
        </section>
      </main>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 border-t border-[#282C28] text-center text-xs text-[#6B6D66]">
        <p>© Soans Farm Botanical Sanctuary — Moodbidri, Western Ghats.</p>
        <p className="mt-1">Documented Flora Archive MVP</p>
      </footer>
    </div>
  );
}
