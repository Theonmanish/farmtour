import { Metadata } from "next";
import { CatalogueClient } from "@/components/catalogue/CatalogueClient";

export const metadata: Metadata = {
  title: "Plant Collection — Soans Farm",
  description: "Explore the documented plant collection of Soans Farm.",
};

export default function CataloguePage() {
  return <CatalogueClient />;
}
