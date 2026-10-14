import type { Plant } from "@/data/plants";

interface PlantListItemProps {
  plant: Plant;
  isSelected: boolean;
  onSelect: (plant: Plant) => void;
}

export function PlantListItem({
  plant,
  isSelected,
  onSelect,
}: PlantListItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(plant)}
      aria-label={`View details for ${plant.common_name} (Plant #${plant.plant_number})`}
      className={`w-full text-left p-4 sm:p-5 rounded-lg border transition-all duration-200 flex items-center justify-between gap-4 group ${
        isSelected
          ? "bg-[#161916] border-[#B99868] shadow-md ring-1 ring-[rgba(185,152,104,0.3)]"
          : "bg-[#161916]/80 hover:bg-[#161916] border-[#282C28] hover:border-[rgba(185,152,104,0.4)]"
      }`}
    >
      <div className="flex items-start sm:items-center gap-4 min-w-0">
        {/* Plant Number Badge */}
        <span className="flex-shrink-0 font-mono text-xs font-semibold tracking-wider text-[#B99868] bg-[#0B0D0B] border border-[#282C28] px-2.5 py-1 rounded group-hover:border-[rgba(185,152,104,0.4)] transition-colors">
          {plant.plant_number}
        </span>

        {/* Plant Names & Meta */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <h3 className="font-serif-botanical text-lg sm:text-xl text-[#EAE4D8] font-normal group-hover:text-[#B99868] transition-colors truncate">
              {plant.common_name}
            </h3>
            <p className="font-serif-botanical italic text-sm text-[#A8A89C] truncate">
              {plant.scientific_name}
            </p>
          </div>

          {/* Family Tag (if present) */}
          {plant.family && (
            <div className="mt-1">
              <span className="text-[11px] text-[#6B6D66] font-sans-ui tracking-wide">
                Family: <span className="text-[#A8A89C]">{plant.family}</span>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Arrow Indicator */}
      <div className="flex-shrink-0 text-[#6B6D66] group-hover:text-[#B99868] transition-colors pl-2">
        <svg
          className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
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
      </div>
    </button>
  );
}
