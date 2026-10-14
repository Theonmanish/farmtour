"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Plant } from "@/data/plants";
import { searchPlants } from "@/lib/plants";
import { usePlantInteraction } from "@/components/plant/PlantInteractionProvider";

function SearchResult({
  plant,
  onSelect,
}: {
  plant: Plant;
  onSelect: (plant: Plant) => void;
}) {
  return (
    <button
      className="flex w-full items-start gap-3 border-b border-[#282C28] px-3 py-3 text-left last:border-b-0 hover:bg-[#202420] focus-visible:bg-[#202420] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B99868]"
      onClick={() => onSelect(plant)}
      type="button"
    >
      <span className="mt-0.5 shrink-0 font-mono text-[11px] text-[#B99868]">
        {plant.plant_number}
      </span>
      <span className="min-w-0">
        <span className="block truncate font-serif-botanical text-base text-[#EAE4D8]">
          {plant.common_name}
        </span>
        <span className="block truncate font-serif-botanical text-sm italic text-[#A8A89C]">
          {plant.scientific_name}
        </span>
      </span>
    </button>
  );
}

export function MapsNavbar() {
  const pathname = usePathname();
  const { openPlant } = usePlantInteraction();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const matches = useMemo(
    () => (query.trim() ? searchPlants(query) : []),
    [query]
  );
  const onMaps =
    pathname === "/" ||
    pathname === "/maps" ||
    pathname.startsWith("/maps/");
  const onCatalogue =
    pathname === "/catalogue" ||
    pathname.startsWith("/catalogue/");

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
    searchButtonRef.current?.focus();
  };

  const selectPlant = (plant: Plant) => {
    openPlant(plant);
    closeSearch();
  };

  const linkClass = (active: boolean) =>
    `flex h-10 items-center border-b px-2 text-[9px] font-semibold uppercase tracking-[0.13em] transition-colors sm:px-3 sm:text-[10px] ${active
      ? "border-[#B99868] text-[#EAE4D8]"
      : "border-transparent text-[#A8A89C] hover:text-[#EAE4D8]"
    }`;

  return (
    <header className="relative z-40 w-full border-b border-[#282C28] bg-[#111311] pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-[52px] w-full items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-[67px] lg:max-w-[1280px] lg:justify-center lg:gap-20 lg:px-8">
        <Link
          aria-label="Soans Farm home"
          className="flex min-w-0 shrink-0 items-center gap-2"
          href="/maps"
        >
          <span className="whitespace-nowrap font-serif-botanical text-[16px] leading-none tracking-[0.035em] text-[#EAE4D8] sm:text-[18px]">
            SOANS FARM
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1 lg:gap-2">
          <div className="ml-2 flex shrink-0 items-center pl-5 sm:ml-4 sm:pl-6 lg:ml-0 lg:pl-200">
            <button
              ref={searchButtonRef}
              aria-expanded={searchOpen}
              aria-label={searchOpen ? "Close plant search" : "Search plants"}
              aria-controls={searchOpen ? "global-plant-search" : undefined}
              className="flex h-10 w-10 shrink-0 items-center justify-center text-[#A8A89C] transition-colors hover:text-[#EAE4D8] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B99868]"
              onClick={() =>
                searchOpen ? closeSearch() : setSearchOpen(true)
              }
              title="Search plants"
              type="button"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="m16 16 4.2 4.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav aria-label="Primary navigation" className="flex items-center">
            <Link
              aria-current={onMaps ? "page" : undefined}
              className={linkClass(onMaps)}
              href="/maps"
            >
              Map
            </Link>
            <Link
              aria-current={onCatalogue ? "page" : undefined}
              className={linkClass(onCatalogue)}
              href="/catalogue"
            >
              Catalogue
            </Link>
          </nav>
        </div>
      </div>

      {searchOpen && (
        <div
          className="absolute right-4 top-[calc(100%+0.5rem)] z-50 w-[min(24rem,calc(100vw-2rem))] border border-[rgba(185,152,104,0.28)] bg-[#111311]/95 shadow-xl backdrop-blur-md sm:right-6 lg:right-[max(calc((100vw-1280px)/2),2rem)]"
          id="global-plant-search"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeSearch();
          }}
        >
          <form
            className="flex h-12 items-center gap-3 border-b border-[#282C28] px-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (matches.length > 0) selectPlant(matches[0]);
            }}
            role="search"
          >
            <svg className="h-4 w-4 shrink-0 text-[#B99868]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.5" />
              <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              aria-label="Search plants by number or name"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#EAE4D8] outline-none placeholder:text-[#6B6D66]"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Plant number or name"
              type="search"
              value={query}
            />
            <button
              aria-label="Close search"
              className="p-1 text-[#A8A89C] hover:text-[#EAE4D8] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B99868]"
              onClick={closeSearch}
              type="button"
            >
              <span aria-hidden="true">×</span>
            </button>
          </form>

          {query.trim() && (
            <div className="max-h-[min(60svh,24rem)] overflow-y-auto">
              {matches.length > 0 ? (
                matches.map((plant) => (
                  <SearchResult key={plant.id} plant={plant} onSelect={selectPlant} />
                ))
              ) : (
                <p className="px-3 py-4 text-sm text-[#A8A89C]">No plant found</p>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
