import { z, defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({
    pattern: ["**/[^_]*.md", "**/[^_]*.mdx"],
    base: "./src/data/blog",
  }),
  schema: z.object({
    publishDate: z.date().default(new Date()),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    category: z.array(z.string()).optional(),
    tag: z.array(z.string()).optional(),
    author: reference("authors"),
  }),
});

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    site: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
};
