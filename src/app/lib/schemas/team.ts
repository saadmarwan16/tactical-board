import { z } from "zod";

export const TeamResponseSchema = z.object({
  get: z.string(),
  parameters: z.object({ id: z.string() }),
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
        logo: z.string().nullable(),
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
    })
  ),
});

export interface TTeam {
  team: {
    id: number;
    name: string;
    code: string;
    founded: string;
    logo: string;
  };
  venue: {
    name: string;
    location: string;
    capacity: string;
    surface: string;
  };
}

export type TTeamResponse = z.infer<typeof TeamResponseSchema>;
