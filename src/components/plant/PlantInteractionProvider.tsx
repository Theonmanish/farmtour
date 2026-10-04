"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Plant } from "@/data/plants";
import { getAdjacentPlantIds, getPlants } from "@/lib/plants";
import { PlantDetailSheet } from "@/components/catalogue/PlantDetailSheet";

interface PlantInteractionContextValue {
  selectedPlantId: string | null;
  openPlant: (plant: Plant) => void;
  closePlant: () => void;
}

const PlantInteractionContext = createContext<PlantInteractionContextValue | null>(null);

export function PlantInteractionProvider({ children }: { children: ReactNode }) {
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);
  const plants = useMemo(() => getPlants(), []);
  const plant = useMemo(
    () => plants.find((item) => item.id === selectedPlantId) ?? null,
    [plants, selectedPlantId],
  );
  const { prevId, nextId } = useMemo(
    () => selectedPlantId ? getAdjacentPlantIds(selectedPlantId) : { prevId: null, nextId: null },
    [selectedPlantId],
  );
  const currentIndex = useMemo(() => {
    if (!selectedPlantId) return 0;
    const index = plants.findIndex((item) => item.id === selectedPlantId);
    return index < 0 ? 0 : index + 1;
  }, [plants, selectedPlantId]);

  const openPlant = useCallback((selectedPlant: Plant) => {
    setSelectedPlantId(selectedPlant.id);
  }, []);
  const closePlant = useCallback(() => setSelectedPlantId(null), []);
  const navigatePrev = useCallback(() => {
    if (prevId) setSelectedPlantId(prevId);
  }, [prevId]);
  const navigateNext = useCallback(() => {
    if (nextId) setSelectedPlantId(nextId);
  }, [nextId]);

  const contextValue = useMemo(
    () => ({ selectedPlantId, openPlant, closePlant }),
    [closePlant, openPlant, selectedPlantId],
  );

  return (
    <PlantInteractionContext.Provider value={contextValue}>
      {children}
      <PlantDetailSheet
        plant={plant}
        onClose={closePlant}
        onNavigatePrev={navigatePrev}
        onNavigateNext={navigateNext}
        hasPrev={Boolean(prevId)}
        hasNext={Boolean(nextId)}
        currentIndex={currentIndex}
        totalCount={plants.length}
      />
    </PlantInteractionContext.Provider>
  );
}

export function usePlantInteraction() {
  const context = useContext(PlantInteractionContext);
  if (!context) {
    throw new Error("usePlantInteraction must be used within PlantInteractionProvider");
  }
  return context;
}
