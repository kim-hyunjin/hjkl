import type { CollectionEntry } from 'astro:content';

export type LessonEntry = CollectionEntry<'lessons'>;
export type ProblemEntry = CollectionEntry<'problems'>;

export interface NavItem {
  href: string;
  label: string;
}

const NAV: NavItem[] = [
  { href: '/', label: '홈' },
  { href: '/learn/', label: '학습하기' },
  { href: '/cheatsheet/', label: '치트시트' },
];

/** Base URL, e.g. "/hjkl/" (from astro config base). */
export const BASE = import.meta.env.BASE_URL ?? '/';

/** Converts an app-absolute path (starting with "/") into a base-aware link. */
export function link(path: string): string {
  if (path.startsWith('http') || path.startsWith('#')) return path;
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}

export const NAV_ITEMS: NavItem[] = NAV.map((item) => ({ ...item, href: link(item.href) }));

/**
 * Markdown 콘텐츠(`<Content />`)는 태그에 직접 class를 줄 수 없으므로
 * @tailwindcss/typography의 prose-* 엘리먼트 변형으로 스타일을 적용한다.
 */
export const PROSE_CLASS = [
  'prose leading-[1.7]',
  'prose-headings:text-foreground',
  'prose-h2:mt-[2.2rem] prose-h2:mb-4 prose-h2:border-b-2 prose-h2:border-border prose-h2:pb-[0.4rem] prose-h2:text-2xl prose-h2:font-bold prose-h2:first:mt-0',
  'prose-a:text-primary',
  'prose-code:font-mono prose-code:font-normal prose-code:rounded prose-code:border prose-code:border-border prose-code:bg-muted prose-code:px-[0.35em] prose-code:py-[0.1em] prose-code:text-[0.88em] prose-code:text-primary prose-code:before:content-none prose-code:after:content-none',
  'prose-pre:m-0 prose-pre:mb-[1.2em] prose-pre:rounded-lg prose-pre:border prose-pre:border-border prose-pre:bg-black prose-pre:p-4 prose-pre:text-[0.88rem] prose-pre:leading-[1.55] prose-pre:text-[#d1e7dd]',
  'prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/8 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-muted-foreground',
  'prose-li:marker:text-primary prose-li:marker:font-semibold',
  'prose-table:border-collapse prose-table:text-[0.92rem]',
  'prose-th:border prose-th:border-border prose-th:bg-muted',
  'prose-td:border prose-td:border-border',
].join(' ');
