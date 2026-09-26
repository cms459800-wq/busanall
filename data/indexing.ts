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
  "gangseo",
  "buk",
  "dong",
] as const;

const indexableRegionSet = new Set<string>(indexableRegionSlugs);

export function isIndexableRegion(slug: string) {
  return indexableRegionSet.has(slug);
}

// These pages have distinct local guidance and metadata, but still need a final
// visual/quality review before search-engine indexing. Do not mislabel reference
// images as actual regional projects.
export const regionSlugsNeedingReview = ["busanjin", "yeongdo", "gijang"] as const;

// Pages without the minimum local content and metadata.
export const unfinishedRegionSlugs = [] as const;
