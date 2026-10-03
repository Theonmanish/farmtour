import React from "react";

export function CatalogueHeader() {
  return (
    <header className="border-b border-[#282C28] pb-8 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Title & Eyebrow */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#B99868] bg-[#161916] border border-[rgba(185,152,104,0.3)] px-2.5 py-1 rounded">
              PLANT COLLECTION
            </span>
          </div>
          <h1 className="font-serif-botanical text-3xl sm:text-4xl md:text-5xl text-[#EAE4D8] font-normal tracking-tight">
            Soans Farm Plant Catalogue
          </h1>
          
        </div>

        
        
      </div>
    </header>
  );
}
