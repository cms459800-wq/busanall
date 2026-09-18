// Guide pages are opened to search engines only after an individual review
// confirms topic-specific core sections, field checklist, mistakes, workflow
// and quote questions, with no unfinished placeholder sections.
export const indexableGuideSlugs = [
  "restoration-scope-checklist",
  "demolition-estimate-checklist",
  "restaurant-closing-demolition",
  "cafe-closing-demolition",
  "office-demolition-checklist",
  "factory-demolition-estimate-guide",
  "demolition-waste-guide",
] as const;

const indexableGuideSet = new Set<string>(indexableGuideSlugs);

export function isIndexableGuide(slug: string) {
  return indexableGuideSet.has(slug);
}
