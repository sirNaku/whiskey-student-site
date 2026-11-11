import liveTastings from '../data/tastings.json';
import liveVideos from '../data/videos.json';
import sampleTastings from '../data/tastings.sample.json';
import sampleVideos from '../data/videos.sample.json';

export type Flavor = {
  sweet: number; fruit: number; floral: number; spice: number;
  oak: number; grain: number; smoke: number; richness: number;
};

export type Verdict = 'Buy' | 'Bar Pour' | 'Pass';

export type Tasting = {
  number: number;
  slug: string;
  name: string;
  distillery: string;
  category: string;
  region?: string;
  proof?: number | null;
  age?: string;
  price?: number | null;
  mashBill?: string;
  date: string;
  color: number; // 0–10 on the whiskey color scale
  nose?: string;
  palate?: string;
  finish?: string;
  notes?: string;
  flavor?: Partial<Flavor>;
  verdict: Verdict;
  videoUrl?: string;
};

export type Video = {
  title: string;
  url: string;
  platform: string;
  date: string;
  pillar?: string;
  series?: string;
};

// `npm run dev:sample` / `build:sample` swaps in preview data.
// Live builds only ever use tastings.json / videos.json, which HQ publishes.
export const usingSample = process.env.SAMPLE_DATA === '1';

export function getTastings(): Tasting[] {
  const src = (usingSample ? sampleTastings : liveTastings) as { tastings: Tasting[] };
  return [...src.tastings].sort((a, b) => b.number - a.number);
}

export function getVideos(): Video[] {
  const src = (usingSample ? sampleVideos : liveVideos) as { videos: Video[] };
  return [...src.videos].sort((a, b) => b.date.localeCompare(a.date));
}

// Whiskey color scale, pale straw (0) to treacle (10).
export const COLOR_SCALE = [
  { hex: '#F3E3A6', name: 'Pale straw' },
  { hex: '#EFD48A', name: 'Straw' },
  { hex: '#E9C46C', name: 'Pale gold' },
  { hex: '#E2B04F', name: 'Gold' },
  { hex: '#D99B3A', name: 'Old gold' },
  { hex: '#C9822B', name: 'Amber' },
  { hex: '#B56A22', name: 'Deep amber' },
  { hex: '#9C551C', name: 'Copper' },
  { hex: '#7F4217', name: 'Russet' },
  { hex: '#633213', name: 'Mahogany' },
  { hex: '#46230E', name: 'Treacle' },
];

export function colorOf(n: number) {
  const i = Math.max(0, Math.min(10, Math.round(n ?? 5)));
  return COLOR_SCALE[i];
}

export const FLAVOR_AXES: (keyof Flavor)[] = ['sweet', 'fruit', 'floral', 'spice', 'oak', 'grain', 'smoke', 'richness'];

export const CATEGORIES = ['Bourbon', 'Rye', 'Tennessee', 'Scotch', 'Irish', 'Japanese', 'American Single Malt', 'Other'];

export function formatDate(iso: string) {
  const d = new Date(iso + (iso.length === 10 ? 'T12:00:00' : ''));
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Prefix internal links with the deploy base path (needed on GitHub Pages project sites).
export function url(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
}
