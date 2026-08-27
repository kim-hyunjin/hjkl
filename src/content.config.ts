import { defineCollection} from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entry = z.object({
  title: z.string(),
  summary: z.string(),
  order: z.number(),
  tags: z.array(z.string()).default([]),
});

const baseLoader = (folder: string) =>
  glob({
    pattern: `${folder}/*.md`,
    base: './src/content',
    generateId: ({ entry }) => {
      // entry is "folder/01-name.md" → use "01-name" (strip folder prefix)
      const base = entry.replace(/\\/g, '/').split('/').pop() ?? entry;
      return base.replace(/\.md$/, '');
    },
  });

const lessons = defineCollection({
  type: 'content_layer',
  schema: entry.extend({
    practice: z.boolean().default(false),
    practiceFile: z.string().optional(),
  }),
  loader: baseLoader('lessons'),
});

const problems = defineCollection({
  type: 'content_layer',
  schema: entry.extend({
    difficulty: z.enum(['입문', '초급', '중급', '고급']),
    practice: z.boolean().default(false),
    practiceFile: z.string().optional(),
    hint: z.string().optional(),
    answer: z.string().optional(),
  }),
  loader: baseLoader('problems'),
});

export const collections = { lessons, problems };
