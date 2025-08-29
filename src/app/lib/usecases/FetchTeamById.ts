import type { BaseUsecase } from "@/base/baseUsecase";
import { fetchWithZod } from "@/lib/createZodFetcher";
import {
  TeamResponseSchema,
  type TTeam,
  type TTeamResponse,
} from "../schemas/team";

export class FetchTeamById implements BaseUsecase<string, TTeam> {
  async execute(id: string): Promise<TTeam> {
    const res = await fetchWithZod(
      TeamResponseSchema,
      `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`,
      {
        headers: {
          "x-rapidapi-key":
            "ec34d9069dmsh0a9a3ec61c4f322p121e36jsn53f89b10a240",
        },
      },
    );

    return this.transform(res);
  }

  private transform(res: TTeamResponse): TTeam {
    if (res.response.length === 0) throw new Error("No team found");
    const response = res.response[0];

    return {
      team: {
        id: response.team.id,
        name: response.team.name,
        code: response.team.code ?? "NaN",
        founded: response.team.founded
          ? response.team.founded.toString()
          : "NaN",
        logo: response.team.logo ?? "",
      },
      venue: {
        name: response.venue.name ?? "NaN",
        location: response.venue.city ?? "NaN",
        capacity: response.venue.capacity
          ? response.venue.capacity.toString()
          : "NaN",
        surface: response.venue.surface ?? "Unknown",
      },
    };
  }
}
