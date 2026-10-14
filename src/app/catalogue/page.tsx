import type { Metadata } from "next";
import { CatalogueClient } from "@/components/catalogue/CatalogueClient";
import { MapsNavbar } from "@/components/maps/MapsNavbar";
import { PlantInteractionProvider } from "@/components/plant/PlantInteractionProvider";

export const metadata: Metadata = {
  title: "Plant Collection — Soans Farm",
  description: "Explore the documented plant collection of Soans Farm.",
};

export default function CataloguePage() {
  return (
    <PlantInteractionProvider>
      <div className="w-full bg-[#111311]">
        <MapsNavbar />
      </div>
      <CatalogueClient />
    </PlantInteractionProvider>
  );
}
