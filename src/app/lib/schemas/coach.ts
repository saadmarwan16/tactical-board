import { z } from "zod";

export const CoachResponseSchema = z.object({
  get: z.string(),
  parameters: z.object({ team: z.string() }),
  errors: z.array(z.unknown()),
  results: z.number(),
  paging: z.object({ current: z.number(), total: z.number() }),
  response: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      firstname: z.string().nullable(),
      lastname: z.string().nullable(),
      age: z.number().nullable(),
      birth: z.object({
        date: z.string().nullable(),
        place: z.string().nullable(),
        country: z.string().nullable(),
      }),
      nationality: z.string().nullable(),
      height: z.string().nullable(),
      weight: z.string().nullable(),
      photo: z.string().nullable(),
    }),
  ),
});

export interface TCoach {
  name: string;
  role: string;
  age: string;
  nationality: string;
  image: string;
}

export type TCoachResponse = z.infer<typeof CoachResponseSchema>;
