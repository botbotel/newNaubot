import { defineCollection, z } from "astro:content";

const infos = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string()
    })
})

export const collections = { infos }