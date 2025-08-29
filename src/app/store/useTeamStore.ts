import { create } from "zustand";
import type { TCoach } from "../lib/schemas/coach";
import type { TSquad } from "../lib/schemas/squad";
import type { TTeam } from "../lib/schemas/team";
import { FetchCoachByTeamId } from "../lib/usecases/FetchCoachByTeamId";
import { FetchSquadById } from "../lib/usecases/FetchSquadById";
import { FetchTeamById } from "../lib/usecases/FetchTeamById";

interface TeamState {
  coach: TCoach | null;
  squad: TSquad["players"] | null;
  team: TTeam["team"] | null;
  venue: TTeam["venue"] | null;
  loading: boolean;
  error: string | null;
  fetchTeam: (id: string) => Promise<void>;
}

export const useTeamStore = create<TeamState>((set) => ({
  coach: null,
  squad: null,
  team: null,
  venue: null,
  loading: false,
  error: null,
  fetchTeam: async (id) => {
    try {
      set(() => ({
        loading: true,
        error: null,
      }));
      const coachPromise = new FetchCoachByTeamId().execute(id);
      const teamPromise = new FetchTeamById().execute(id);
      const squadPromise = new FetchSquadById().execute(id);
      const results = await Promise.all([
        coachPromise,
        teamPromise,
        squadPromise,
      ]);

      return set(() => ({
        coach: results[0],
        team: results[1].team,
        venue: results[1].venue,
        squad: results[2].players,
      }));
    } catch (e) {
      set(() => ({
        error: (e as Error).message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  },
}));
