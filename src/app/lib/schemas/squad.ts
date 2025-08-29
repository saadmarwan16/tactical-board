import { z } from "zod";

export const SquadResponseSchema = z.object({
  get: z.string(),
  parameters: z.object({ team: z.string() }),
  errors: z.array(z.unknown()),
  results: z.number(),
  paging: z.object({ current: z.number(), total: z.number() }),
  response: z.array(
    z.object({
      team: z.object({ id: z.number(), name: z.string(), logo: z.string() }),
      players: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          age: z.number().nullable(),
          number: z.number().nullable(),
          position: z.string().nullable(),
          photo: z.string(),
        }),
      ),
    }),
  ),
});

export interface TSquad {
  players: {
    id: number;
    name: string;
    age: string;
    number: string;
    position: string;
    photo: string;
  }[];
}

export type TSquadResponse = z.infer<typeof SquadResponseSchema>;
