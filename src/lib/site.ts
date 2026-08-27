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
