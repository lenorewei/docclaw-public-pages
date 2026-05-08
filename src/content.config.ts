import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const aiDigest = defineCollection({
  loader: glob({
    base: './src/content/ai-digest',
    pattern: '**/*.{md,mdx}',
  }),
  schema: sharedSchema,
});

const readwise = defineCollection({
  loader: glob({
    base: './src/content/readwise',
    pattern: '**/*.{md,mdx}',
  }),
  schema: sharedSchema,
});

const daily = defineCollection({
  loader: glob({
    base: './src/content/daily',
    pattern: '**/*.{md,mdx}',
  }),
  schema: sharedSchema,
});

export const collections = {
  'ai-digest': aiDigest,
  readwise,
  daily,
};
