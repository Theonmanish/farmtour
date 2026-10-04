import { plants, Plant } from "@/data/plants";

/**
 * Normalizes a potential plant number search term.
 * E.g., "42", "042", "0042" -> "0042"
 * If input is purely numeric and less than 4 digits, pads start with zeros.
 */
export function normalizeSearchTerm(query: string): string {
  const trimmed = query.trim();
  if (/^\d{1,4}$/.test(trimmed)) {
    return trimmed.padStart(4, "0");
  }
  return trimmed;
}

/**
 * Returns all plants sorted by plant number.
 */
export function getPlants(): Plant[] {
  return [...plants].sort((a, b) =>
    a.plant_number.localeCompare(b.plant_number, undefined, { numeric: true })
  );
}

/**
 * Returns the previous and next plant IDs relative to the specified plant ID
 * in catalogue order (sorted by plant_number).
 */
export function getAdjacentPlantIds(currentId: string): {
  prevId: string | null;
  nextId: string | null;
} {
  const sorted = getPlants();
  const index = sorted.findIndex((p) => p.id === currentId);

  if (index === -1) {
    return { prevId: null, nextId: null };
  }

  const prevId = index > 0 ? sorted[index - 1].id : null;
  const nextId = index < sorted.length - 1 ? sorted[index + 1].id : null;

  return { prevId, nextId };
}

/**
 * Filters plants based on search query.
 * Matches:
 * - Exact or normalized plant number
 * - Common name
 * - Scientific name
 * - Other common names
 */
export function searchPlants(query: string): Plant[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return getPlants();
  }

  const normalizedNumber = normalizeSearchTerm(trimmed);

  return getPlants().filter((plant) => {
    // 1. Plant number matching (exact or normalized)
    const plantNumLower = plant.plant_number.toLowerCase();
    if (
      plantNumLower === trimmed ||
      plantNumLower === normalizedNumber ||
      plantNumLower.includes(trimmed)
    ) {
      return true;
    }

    // 2. Common name matching
    if (plant.common_name.toLowerCase().includes(trimmed)) {
      return true;
    }

    // 3. Scientific name matching
    if (plant.scientific_name.toLowerCase().includes(trimmed)) {
      return true;
    }

    // 4. Other common names matching
    if (
      plant.other_common_names.some((name) =>
        name.toLowerCase().includes(trimmed)
      )
    ) {
      return true;
    }

    return false;
  });
}
