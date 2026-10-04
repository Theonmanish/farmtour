import type { MapLocation } from "@/data/mapLocations";
import { MapMarker } from "./MapMarker";

interface MapMarkerLayerProps {
  locations: MapLocation[];
  selectedLocationId: string | null;
  imageWidth: number;
  imageHeight: number;
  transform: { scale: number; x: number; y: number };
  onSelectLocation: (location: MapLocation) => void;
}

export function MapMarkerLayer({
  locations,
  selectedLocationId,
  imageWidth,
  imageHeight,
  transform,
  onSelectLocation,
}: MapMarkerLayerProps) {
  return (
    <div aria-label="Map locations" className="pointer-events-none absolute inset-0 z-10">
      {locations.map((location) => (
        <MapMarker
          key={location.id}
          location={location}
          selected={location.id === selectedLocationId}
          screenX={location.imagePosition.x * imageWidth * transform.scale + transform.x}
          screenY={location.imagePosition.y * imageHeight * transform.scale + transform.y}
          onSelect={onSelectLocation}
        />
      ))}
    </div>
  );
}
