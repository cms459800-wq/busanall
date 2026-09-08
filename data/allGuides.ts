import { guides as coreGuides } from "@/data/guides";
import { growthGuides } from "@/data/guidesGrowth";

export const guides = [...coreGuides, ...growthGuides];

export function guideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
