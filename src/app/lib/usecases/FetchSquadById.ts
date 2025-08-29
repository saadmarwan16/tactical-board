import type { BaseUsecase } from "@/base/baseUsecase";
import { fetchWithZod } from "@/lib/createZodFetcher";
import {
  SquadResponseSchema,
  type TSquad,
  type TSquadResponse,
} from "../schemas/squad";

export class FetchSquadById implements BaseUsecase<string, TSquad> {
  async execute(id: string): Promise<TSquad> {
    const res = await fetchWithZod(
      SquadResponseSchema,
      `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${id}`,
      {
        headers: {
          "x-rapidapi-key":
            "ec34d9069dmsh0a9a3ec61c4f322p121e36jsn53f89b10a240",
        },
      },
    );

    return this.transform(res);
  }

  private transform(res: TSquadResponse): TSquad {
    if (res.response.length === 0) throw new Error("No squad found");
    const response = res.response[0];

    return {
      players: response.players.map((player) => ({
        id: player.id,
        name: player.name,
        age: player.age ? player.age.toString() : "NaN",
        number: player.number ? player.number.toString() : "NaN",
        position: player.position ?? "Unknown",
        photo: player.photo,
      })),
    };
  }
}
