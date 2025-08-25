import z from "zod/v4";

const envSchema = z
	.object({
		angoliaId: z.string(),
		angoliaKey: z.string(),
	})
	.readonly();

export const env = envSchema.parse({
	angoliaId: process.env.NEXT_PUBLIC_ANGOLIA_ID,
	angoliaKey: process.env.NEXT_PUBLIC_ANGOLIA_KEY,
});
