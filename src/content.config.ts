import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
    schema: z.object({
        title: z.string(),
        author: z.string().optional(),
    })
});

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string().optional(),
    })
});

export const collections = { pages, blog };
