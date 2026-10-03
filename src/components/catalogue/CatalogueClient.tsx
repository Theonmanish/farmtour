"use client";

import React, { useState, useMemo } from "react";
import { Plant } from "@/data/plants";
import { getPlants, searchPlants, getAdjacentPlantIds } from "@/lib/plants";
import { CatalogueHeader } from "./CatalogueHeader";
import { PlantSearchInput } from "./PlantSearchInput";
import { PlantList } from "./PlantList";
import { PlantDetailSheet } from "./PlantDetailSheet";

export function CatalogueClient() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);

  // All plants in catalogue order
  const allPlants = useMemo(() => getPlants(), []);

  // Filtered plants based on user search
  const filteredPlants = useMemo(() => {
    return searchPlants(searchQuery);
  }, [searchQuery]);

  // Selected plant object
  const selectedPlant = useMemo(() => {
    if (!selectedPlantId) return null;
    return allPlants.find((p) => p.id === selectedPlantId) || null;
  }, [allPlants, selectedPlantId]);

  // Navigation indices (based on full sorted catalogue)
  const { prevId, nextId } = useMemo(() => {
    if (!selectedPlantId) return { prevId: null, nextId: null };
    return getAdjacentPlantIds(selectedPlantId);
  }, [selectedPlantId]);

  const currentIndex = useMemo(() => {
    if (!selectedPlantId) return 0;
    const idx = allPlants.findIndex((p) => p.id === selectedPlantId);
    return idx !== -1 ? idx + 1 : 0;
  }, [allPlants, selectedPlantId]);

  // Handlers
  const handleSelectPlant = (plant: Plant) => {
    setSelectedPlantId(plant.id);
  };

  const handleCloseSheet = () => {
    setSelectedPlantId(null);
  };

  const handleNavigatePrev = () => {
    if (prevId) {
      setSelectedPlantId(prevId);
    }
  };

  const handleNavigateNext = () => {
    if (nextId) {
      setSelectedPlantId(nextId);
    }
  };

  return (
    <div className="min-h-screen bg-[#111311] text-[#EAE4D8] pb-24 font-sans-ui">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        {/* Catalogue Header */}
        <CatalogueHeader />

        {/* Search Field */}
        <section className="bg-[#161916] border border-[#282C28] p-4 sm:p-6 rounded-xl shadow-sm">
          <PlantSearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            resultCount={filteredPlants.length}
            totalCount={allPlants.length}
          />
        </section>

        {/* Plant List */}
        <section>
          <PlantList
            plants={filteredPlants}
            selectedPlantId={selectedPlantId}
            onSelectPlant={handleSelectPlant}
            onResetSearch={() => setSearchQuery("")}
            isSearching={searchQuery.trim().length > 0}
          />
        </section>
      </main>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 border-t border-[#282C28] text-center text-xs text-[#6B6D66]">
        <p>© Soans Farm Botanical Sanctuary — Moodbidri, Western Ghats.</p>
        <p className="mt-1">Documented Flora Archive MVP</p>
      </footer>

      {/* Plant Detail Bottom Sheet */}
      <PlantDetailSheet
        plant={selectedPlant}
        onClose={handleCloseSheet}
        onNavigatePrev={handleNavigatePrev}
        onNavigateNext={handleNavigateNext}
        hasPrev={Boolean(prevId)}
        hasNext={Boolean(nextId)}
        currentIndex={currentIndex}
        totalCount={allPlants.length}
      />
    </div>
  );
}
