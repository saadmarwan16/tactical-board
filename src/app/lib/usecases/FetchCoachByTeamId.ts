import type { BaseUsecase } from "@/base/baseUsecase";
import {
  CoachResponseSchema,
  type TCoach,
  type TCoachResponse,
} from "../schemas/coach";
import { fetchWithZod } from "@/lib/createZodFetcher";

export class FetchCoachByTeamId implements BaseUsecase<number, TCoach> {
  async execute(id: number): Promise<TCoach> {
    const res = await fetchWithZod(
      CoachResponseSchema,
      `https://api-football-v1.p.rapidapi.com/v3/coachs?team=${id}`,
      {
        headers: {
          "x-rapidapi-key":
            "ec34d9069dmsh0a9a3ec61c4f322p121e36jsn53f89b10a240",
        },
      }
    );

    return this.transform(res);
  }

  private transform(res: TCoachResponse): TCoach {
    if (res.response.length === 0) throw new Error("No coach found");
    const response = res.response[0];

    return {
      name: response.name,
      role: "Head Coach",
      age: response.age ? response.age.toString() : "NaN",
      image: response.photo ?? "",
      nationality: response.nationality ?? "NaN",
    };
  }
}
