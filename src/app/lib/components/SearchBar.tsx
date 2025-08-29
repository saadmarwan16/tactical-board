"use client";

import Image from "next/image";
import type { FunctionComponent } from "react";
import { useSearchStore } from "@/app/store";
import { useDebounce } from "../hooks/useDebounce";
import type { TTeams } from "../schemas/teams";

const SearchBar: FunctionComponent = () => {
  const { query, results, updateQuery, dropdownOpen, updateDropdownOpen } =
    useSearchStore();
  const debouncedQuery = useDebounce(query, 1000);

  const handleSuggestionClick = (club: TTeams) => {
    updateQuery(club.name);
    updateDropdownOpen(false);
    // TODO: Implement club selection logic
  };

  return (
    <div className="relative z-10">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <input
          type="text"
          placeholder="Search for a club..."
          className="input input-bordered w-80 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:border-blue-400/50 focus:bg-white/20 transition-all duration-300"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          onFocus={() => updateDropdownOpen(true)}
          onBlur={() => setTimeout(() => updateDropdownOpen(false), 150)}
        />
      </div>

      {/* Search Suggestions Dropdown */}
      {dropdownOpen && debouncedQuery?.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          <div className="card bg-slate-800/95 backdrop-blur-xl shadow-2xl border border-white/10 max-h-64 overflow-y-auto">
            <div className="card-body p-2">
              {results.length > 0 ? (
                results.slice(0, 8).map((club) => (
                  <button
                    key={club.id}
                    type="button"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 text-left w-full"
                    onClick={() => handleSuggestionClick(club)}
                  >
                    <div className="avatar">
                      <div className="w-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <Image
                          src={club.logo}
                          alt={`${club.name} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<span class="text-xs font-bold text-white">${club.name.charAt(0)}</span>`;
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">
                        {club.name}
                      </div>
                      <div className="text-xs text-slate-400">{club.venue}</div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="text-center text-white/60 text-sm py-4">
                  No clubs found for "{debouncedQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
