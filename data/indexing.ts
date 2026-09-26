// Regional pages that are currently ready for search-engine indexing.
// Keep pages out of this list until their regional images, service mapping,
// page content and SEO metadata have been reviewed.
export const indexableRegionSlugs = [
  "dongnae",
  "geumjeong",
  "yeonje",
  "sasang",
  "suyeong",
  "seo",
  "jung",
  "haeundae",
  "nam",
  "saha",
] as const;

const indexableRegionSet = new Set<string>(indexableRegionSlugs);

export function isIndexableRegion(slug: string) {
  return indexableRegionSet.has(slug);
}

// These pages already have regional image work, but still need correction
// before they should be exposed to search-engine indexing.
export const regionSlugsNeedingReview = ["gangseo", "buk", "dong"] as const;

// These pages do not yet meet the regional-image/content completion standard.
export const unfinishedRegionSlugs = ["busanjin", "yeongdo", "gijang"] as const;
