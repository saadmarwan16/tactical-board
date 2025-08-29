import { z } from "zod";

export const TeamsResponseSchema = z.object({
  parameters: z.object({ search: z.string() }),
  errors: z.array(z.unknown()),
  results: z.number(),
  paging: z.object({ current: z.number(), total: z.number() }),
  response: z.array(
    z.object({
      team: z.object({
        id: z.number(),
        name: z.string(),
        code: z.string().nullable(),
        country: z.string().nullable(),
        founded: z.number().nullable(),
        national: z.boolean().nullable(),
        logo: z.string(),
      }),
      venue: z.object({
        id: z.number().nullable(),
        name: z.string().nullable(),
        address: z.string().nullable(),
        city: z.string().nullable(),
        capacity: z.number().nullable(),
        surface: z.string().nullable(),
        image: z.string().nullable(),
      }),
    }),
  ),
});

export interface TTeams {
  id: number;
  name: string;
  logo: string;
  venue: string;
}

export type TTeamsResponse = z.infer<typeof TeamsResponseSchema>;
