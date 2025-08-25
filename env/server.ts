import z from "zod/v4";

const envSchema = z
	.object({
		angoliaId: z.string(),
		angoliaKey: z.string(),
	})
	.readonly();

export const env = envSchema.parse({
	angoliaId: process.env.ANGOLIA_ID,
	angoliaKey: process.env.ANGOLIA_KEY,
});
