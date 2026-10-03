"use client";

import React from "react";

interface PlantSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
}

export function PlantSearchInput({
  value,
  onChange,
  resultCount,
  totalCount,
}: PlantSearchInputProps) {
  return (
    <div className="space-y-2">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-4 pointer-events-none text-[#6B6D66]">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by plant number (e.g. 42), name, or species..."
          aria-label="Search plant collection"
          className="w-full bg-[#0B0D0B] border border-[#282C28] h-12 rounded pl-12 pr-10 text-sm sm:text-base text-[#EAE4D8] placeholder-[#6B6D66] focus:border-[#B99868] focus:outline-none focus:ring-1 focus:ring-[rgba(185,152,104,0.3)] transition-colors"
        />

        {/* Clear Button */}
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search input"
            className="absolute right-3 p-1 text-[#6B6D66] hover:text-[#EAE4D8] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Results Count Metadata */}
      <div className="flex items-center justify-between text-xs text-[#A8A89C] px-1 font-sans-ui">
        <span>
          Showing <strong className="text-[#EAE4D8]">{resultCount}</strong> of{" "}
          <strong className="text-[#EAE4D8]">{totalCount}</strong> records
        </span>
        {value.trim() && (
          <span className="text-[#B99868] italic font-serif-botanical text-sm">
            Filtered by &quot;{value.trim()}&quot;
          </span>
        )}
      </div>
    </div>
  );
}
