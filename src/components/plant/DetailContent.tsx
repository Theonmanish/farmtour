import React from "react";
import { Plant } from "@/data/plants";

interface DetailContentProps {
  plant: Plant;
}

export function DetailContent({ plant }: DetailContentProps) {
  return (
    <div className="space-y-6 text-[#EAE4D8] font-sans-ui">
      {/* Scientific Name */}
      <div>
        <span className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#B99868] mb-1">
          Taxonomic Classification
        </span>
        <h3 className="font-serif-botanical italic text-xl sm:text-2xl text-[#EAE4D8] font-normal leading-tight">
          {plant.scientific_name}
        </h3>
      </div>

      {/* Other Common Names (if present) */}
      {plant.other_common_names && plant.other_common_names.length > 0 && (
        <div className="border-t border-[#282C28] pt-4">
          <span className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#A8A89C] mb-2">
            Vernacular & Alternative Names
          </span>
          <div className="flex flex-wrap gap-2">
            {plant.other_common_names.map((name, idx) => (
              <span
                key={idx}
                className="bg-[#111311] border border-[#282C28] text-[#EAE4D8] text-xs px-2.5 py-1 rounded tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Meta Grid: Family & Origin (if present) */}
      {(plant.family || plant.origin) && (
        <div className="border-t border-[#282C28] pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {plant.family && (
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#A8A89C] mb-1">
                Botanical Family
              </span>
              <p className="text-sm sm:text-base text-[#EAE4D8] font-medium">
                {plant.family}
              </p>
            </div>
          )}

          {plant.origin && (
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#A8A89C] mb-1">
                Origin
              </span>
              <p className="text-sm sm:text-base text-[#EAE4D8] font-medium">
                {plant.origin}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Uses & Significance (if present) */}
      {plant.uses_significance && (
        <div className="border-t border-[#282C28] pt-4">
          <span className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#B99868] mb-1">
            Uses & Traditional Significance
          </span>
          <p className="text-sm sm:text-base text-[#EAE4D8] leading-relaxed">
            {plant.uses_significance}
          </p>
        </div>
      )}

      {/* Description */}
      <div className="border-t border-[#282C28] pt-4">
        <span className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#A8A89C] mb-2">
          Description
        </span>
        <div className="text-sm sm:text-base text-[#EAE4D8]/90 leading-relaxed space-y-4 whitespace-pre-line font-normal">
          {plant.description}
        </div>
      </div>
    </div>
  );
}
