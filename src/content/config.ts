import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    status: z.enum(['active', 'shipped', 'paused', 'archived']),
    featured: z.boolean().default(false),
    type: z.string(),
    thesis: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const history = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    year: z.string(),
    tag: z.enum(['milestone', 'win', 'mistake', 'shift', 'origin']).default('milestone'),
    summary: z.string(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

const experiments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    number: z.string(),
    summary: z.string(),
    status: z.enum(['live', 'broken', 'idea']).default('idea'),
    url: z.string().url().optional(),
  }),
});

export const collections = { projects, history, writing, experiments };
