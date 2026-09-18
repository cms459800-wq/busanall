import type { ServiceSlug } from "@/data/services";

// Service pages are opened to search engines only after an individual review
// confirms unique SEO metadata, service-specific field details, search intent,
// FAQ content and the absence of unfinished placeholder sections.
export const indexableServiceSlugs = [
  "restaurant",
  "cafe",
  "convenience-store",
  "pc-room",
  "beauty-salon",
  "gym",
  "academy",
  "hospital",
  "dental",
  "pharmacy",
  "office",
  "warehouse",
  "factory",
  "house",
  "apartment",
] as const satisfies readonly ServiceSlug[];

const indexableServiceSet = new Set<string>(indexableServiceSlugs);

export function isIndexableService(slug: string) {
  return indexableServiceSet.has(slug);
}
