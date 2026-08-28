import { defineCollection} from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entry = z.object({
  title: z.string(),
  summary: z.string(),
  order: z.number(),
  tags: z.array(z.string()).default([]),
});

const stripExtension = (extension: string) => (entry: string) => {
  const base = entry.replace(/\\/g, '/').split('/').pop() ?? entry;
  return base.replace(new RegExp(`\\.${extension}$`), '');
};

const markdownLoader = (folder: string) =>
  glob({
    pattern: `${folder}/*.md`,
    base: './src/content',
    // entry is "folder/01-name.md" → use "01-name" (strip folder prefix)
    generateId: ({ entry }) => stripExtension('md')(entry),
  });

const jsonLoader = (folder: string) =>
  glob({
    pattern: `${folder}/*.json`,
    base: './src/content',
    // entry is "folder/01-name.json" → use "01-name" (strip folder prefix)
    generateId: ({ entry }) => stripExtension('json')(entry),
  });

const lessons = defineCollection({
  type: 'content_layer',
  schema: entry.extend({
    practice: z.boolean().default(false),
    practiceFile: z.string().optional(),
  }),
  loader: markdownLoader('lessons'),
});

const problems = defineCollection({
  type: 'content_layer',
  schema: entry.extend({
    difficulty: z.enum(['입문', '초급', '중급', '고급']),
    description: z.string(),
    initialContent: z.string(),
    expected: z.string(),
    hint: z.string(),
  }),
  loader: jsonLoader('problems'),
});

export const collections = { lessons, problems };
