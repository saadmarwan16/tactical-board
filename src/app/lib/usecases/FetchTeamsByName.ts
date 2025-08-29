import type { BaseUsecase } from "@/base/baseUsecase";
import { fetchWithZod } from "@/lib/createZodFetcher";
import {
  TeamsResponseSchema,
  type TTeamsResponse,
  type TTeams,
} from "../schemas/teams";

export class FetchTeamsByName implements BaseUsecase<string, TTeams[]> {
  async execute(query: string): Promise<TTeams[]> {
    const res = await fetchWithZod(
      TeamsResponseSchema,
      `https://api-football-v1.p.rapidapi.com/v3/teams?search=${query}`,
      {
        headers: {
          "x-rapidapi-key":
            "ec34d9069dmsh0a9a3ec61c4f322p121e36jsn53f89b10a240",
        },
      }
    );

    return this.transform(res);
  }

  private transform(res: TTeamsResponse) {
    if (res.response.length === 0) throw new Error("No teams found");

    return res.response.map(({ team, venue }) => ({
      id: team.id,
      name: team.name,
      logo: team.logo,
      venue: `Venue: ${venue.name ?? "NaN"}`,
    }));
  }
}
