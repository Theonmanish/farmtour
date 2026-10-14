export type MapLocationType = "attraction" | "plantation" | "grove";

/** Curated attractions for the map and its detail sheet. */
export type MapLocation = {
  id: string;
  name: string;
  type: MapLocationType;
};

export const mapLocations: MapLocation[] = [
  {
    id: "pineapple-plantation",
    name: "Pineapple Plantation",
    type: "plantation",
  },
  { id: "bamboo-grove", name: "Bamboo Grove", type: "grove" },
  { id: "cocoa", name: "Cocoa Plantation", type: "plantation" },
  { id: "guava-orchard", name: "Guava Orchard", type: "grove" },
  { id: "jackfruit-grove", name: "Jackfruit Grove", type: "grove" },
  { id: "pomelo-grove", name: "Pomelo Grove", type: "grove" },
  { id: "mango-orchard", name: "Mango Orchard", type: "grove" },
  { id: "cashew-plantation", name: "Cashew Plantation", type: "plantation" },
  { id: "rambutan-grove", name: "Rambutan Grove", type: "grove" },
  { id: "mangosteen-grove", name: "Mangosteen Grove", type: "grove" },
  { id: "labyrinth", name: "Labyrinth", type: "attraction" },
  { id: "arecanut", name: "Arecanut Plantation", type: "plantation" },
];
