import React from "react";
import { Plant } from "@/data/plants";
import { PlantListItem } from "./PlantListItem";

interface PlantListProps {
  plants: Plant[];
  selectedPlantId: string | null;
  onSelectPlant: (plant: Plant) => void;
  onResetSearch: () => void;
  isSearching: boolean;
}

export function PlantList({
  plants,
  selectedPlantId,
  onSelectPlant,
  onResetSearch,
  isSearching,
}: PlantListProps) {
  if (plants.length === 0) {
    return (
      <div className="bg-[#161916] border border-[#282C28] rounded-xl p-8 sm:p-12 text-center my-6 space-y-4">
        <div className="w-12 h-12 bg-[#0B0D0B] border border-[#282C28] rounded-full flex items-center justify-center mx-auto text-[#B99868]">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-serif-botanical text-xl text-[#EAE4D8] font-normal">
            No matching plants found
          </h3>
          <p className="font-sans-ui text-sm text-[#A8A89C] mt-1 max-w-md mx-auto leading-relaxed">
            We couldn&apos;t find any plant records matching your search terms.
            Try searching by plant number (e.g., 0001 or 42) or species name.
          </p>
        </div>
        {isSearching && (
          <button
            type="button"
            onClick={onResetSearch}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#0B0D0B] bg-[#B99868] hover:bg-[#C8A87A] px-4 py-2 rounded transition-colors"
          >
            Clear Search Filter
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3 my-6">
      {plants.map((plant) => (
        <PlantListItem
          key={plant.id}
          plant={plant}
          isSelected={selectedPlantId === plant.id}
          onSelect={onSelectPlant}
        />
      ))}
    </div>
  );
}
