import { defineCollection, z } from "astro:content";

const policies = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
	}),
});

export const collections = {
	policies,
};
