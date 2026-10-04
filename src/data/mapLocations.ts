export type MapLocationType = "attraction" | "plantation" | "grove";

/** A curated farm point positioned relative to the source map image. */
export type MapLocation = {
  id: string;
  name: string;
  type: MapLocationType;
  imagePosition: {
    /** Horizontal fraction of the source image, from 0 (left) to 1 (right). */
    x: number;
    /** Vertical fraction of the source image, from 0 (top) to 1 (bottom). */
    y: number;
  };
};

/** Add only verified, intentionally selected map locations here. */
export const mapLocations: MapLocation[] = [
  {
    id: "labyrinth",
    name: "Labyrinth",
    type: "attraction",
    imagePosition: { x: 0.445, y: 0.523 },
  },
  {
    id: "bamboo-grove",
    name: "Bamboo Grove",
    type: "grove",
    imagePosition: { x: 0.490, y: 0.609 },
  },
  {
    id: "pineapple-plantation",
    name: "Pineapple Plantation",
    type: "plantation",
    imagePosition: { x: 0.507, y: 0.700 },
  },
  {
    id: "cocoa",
    name: "Cocoa Plantation",
    type: "plantation",
    imagePosition: { x: 0.480, y: 0.746 },
  },
  {
    id: "arecanut",
    name: "Arecanut Plantation",
    type: "plantation",
    imagePosition: { x: 0.575, y: 0.765 },
  },
];
