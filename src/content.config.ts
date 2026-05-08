import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const aiDigest = defineCollection({
  loader: glob({
    base: './src/content/ai-digest',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'ai-digest': aiDigest,
};
