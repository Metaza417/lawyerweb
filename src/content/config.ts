import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
