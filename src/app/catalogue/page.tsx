import { Metadata } from "next";
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
      <div className="bg-[#111311] px-4 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto w-full">
          <MapsNavbar />
        </div>
      </div>
      <CatalogueClient />
    </PlantInteractionProvider>
  );
}
