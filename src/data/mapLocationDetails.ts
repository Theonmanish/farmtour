import type { MapLocation } from "./mapLocations";

export type MapLocationDetails = {
  heading: string;
  description: string;
};

export const mapLocationDetails: Record<MapLocation["id"], MapLocationDetails> = {
  "pineapple-plantation": {
    heading: "Pineapple Plantation",
    description:
      "Pineapples grow close to the ground among long, spiny leaves. Take a moment to look across the plantation and notice how the plants fill the growing area.",
  },
  "bamboo-grove": {
    heading: "Bamboo Grove",
    description:
      "Bamboo grows in a leafy grove within the farm landscape. Pause among the tall stems and take in the quieter surroundings.",
  },
  cocoa: {
    heading: "Cocoa Plantation",
    description:
      "Cocoa trees produce pods that contain the beans used to make cocoa and chocolate. Look for the pods growing along the branches and trunk.",
  },
  "guava-orchard": {
    heading: "Guava Orchard",
    description:
      "Guava trees bear fragrant fruit with soft flesh and a distinctive flavour. This orchard brings together the trees and their fruit.",
  },
  "jackfruit-grove": {
    heading: "Jackfruit Grove",
    description:
      "Jackfruit trees are known for their very large fruits, which grow directly from the trunk and thicker branches.",
  },
  "pomelo-grove": {
    heading: "Pomelo Grove",
    description:
      "Pomelo is a large citrus fruit. Explore the grove and look for the trees that bear this distinctive fruit.",
  },
  "mango-orchard": {
    heading: "Mango Orchard",
    description:
      "Mango trees are valued for their sweet, fragrant fruit, which ripens seasonally. The orchard is a place to appreciate these familiar trees.",
  },
  "cashew-plantation": {
    heading: "Cashew Plantation",
    description:
      "Cashew trees produce cashew apples, with a single seed growing outside each fruit. That seed is the cashew nut.",
  },
  "rambutan-grove": {
    heading: "Rambutan Grove",
    description:
      "Rambutan is a tropical fruit with a soft, hairy-looking outer skin. The grove features the trees that bear this distinctive fruit.",
  },
  "mangosteen-grove": {
    heading: "Mangosteen Grove",
    description:
      "Mangosteen trees produce round fruit with a deep purple rind and pale, segmented flesh.",
  },
  labyrinth: {
    heading: "Labyrinth",
    description:
      "Follow the winding paths of the labyrinth at an unhurried pace. It offers a place for walking, reflection, and a moment of calm.",
  },
  arecanut: {
    heading: "Arecanut Plantation",
    description:
      "Arecanut palms form part of the farm's cultivated landscape. Look up to see their slender trunks and crowns of leaves.",
  },
};
