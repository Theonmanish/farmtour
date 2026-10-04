import type { Metadata } from "next";
import { MapsClient } from "@/components/maps/MapsClient";

export const metadata: Metadata = {
  title: "Farm Map — Soans Farm",
  description: "Explore the Soans Farm visitor map.",
};

export default function MapsPage() {
  return <MapsClient />;
}
