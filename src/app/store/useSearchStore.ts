import { create } from "zustand";
import type { TTeams } from "../lib/schemas/teams";
import { FetchTeamsByName } from "../lib/usecases/FetchTeamsByName";

interface SearchState {
  query: string;
  results: TTeams[];
  dropdownOpen: boolean;
  updateQuery: (query: string) => void;
  onDebouncedQueryChange: (value: string) => void;
  updateDropdownOpen: (isOpen: boolean) => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  query: "",
  results: [],
  dropdownOpen: false,
  updateQuery: (newQuery) => {
    const updateDropdownOpen = get().updateDropdownOpen;
    updateDropdownOpen(newQuery.length > 0);
    return set(() => ({ query: newQuery }));
  },
  onDebouncedQueryChange: async (value: string) => {
    if (!value) return;

    const teams = await new FetchTeamsByName().execute(value);
    return set(() => ({ results: teams }));
  },
  updateDropdownOpen: (isOpen) => {
    const query = get().query;
    if (query.length > 0) return set(() => ({ dropdownOpen: isOpen }));
  },
}));
