import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const talk = defineCollection({
  loader: glob({ base: './src/content/talk', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    update: z.string().optional(),
    description: z.string().optional(),
  }),
});

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '**/*.md' }),
  schema: articleSchema,
});

const activities = defineCollection({
  loader: glob({ base: './src/content/activities', pattern: '**/*.md' }),
  schema: articleSchema,
});

const musings = defineCollection({
  loader: glob({ base: './src/content/musings', pattern: '**/*.md' }),
  schema: articleSchema,
});

export const collections = { blog, talk, courses, activities, musings };

