// Regional pages that are currently ready for search-engine indexing.
// Keep pages out of this list until their service mapping, distinct local
// content, image provenance (when images are used), and SEO metadata are reviewed.
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
  "gangseo",
  "buk",
  "dong",
  "busanjin",
  "yeongdo",
  "gijang",
] as const;

const indexableRegionSet = new Set<string>(indexableRegionSlugs);

export function isIndexableRegion(slug: string) {
  return indexableRegionSet.has(slug);
}

// These pages have distinct local guidance and metadata, but still need a final
// visual/quality review before search-engine indexing. Do not mislabel reference
// images as actual regional projects.
export const regionSlugsNeedingReview = [] as const;

// Pages without the minimum local content and metadata.
export const unfinishedRegionSlugs = [] as const;
