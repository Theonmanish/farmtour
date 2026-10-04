import type { MapLocation } from "@/data/mapLocations";

interface MapMarkerProps {
  location: MapLocation;
  selected: boolean;
  screenX: number;
  screenY: number;
  onSelect: (location: MapLocation) => void;
}

export function MapMarker({
  location,
  selected,
  screenX,
  screenY,
  onSelect,
}: MapMarkerProps) {
  return (
    <button
      aria-label={`Open ${location.name}`}
      aria-pressed={selected}
      className={`pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5 whitespace-nowrap border-0 bg-transparent p-0 text-[14px] font-medium leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#E5C18E] ${selected ? "text-[#E5C18E]" : "text-[#F2EEE5]"}`}
      onClick={() => onSelect(location)}
      onPointerDown={(event) => event.stopPropagation()}
      style={{
        left: `${screenX}px`,
        top: `${screenY}px`,
      }}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.8 4.2C12.7 4.3 7.9 5.8 5.4 8.7c-2.2 2.5-1.9 6.1.5 7.4 2.4 1.3 5.3-.1 6.3-3.1 1.3-2.1 2.8-4.8 7.6-8.8Z"
          fill="currentColor"
          fillOpacity=".94"
        />
        <path
          d="M4.2 20c2.2-4.3 5.2-6.9 9-8.8"
          stroke="#253126"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-[10px] font-medium leading-none tracking-[0.01em]">
        {location.name}
      </span>
    </button>
  );
}
