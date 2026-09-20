import type { MetadataRoute } from "next";
import { indexableRegionSlugs } from "@/data/indexing";
import { indexableServiceSlugs } from "@/data/serviceIndexing";
import { indexableGuideSlugs } from "@/data/guideIndexing";
import { validateContentReferences } from "@/data/validateReferences";

export default function sitemap(): MetadataRoute.Sitemap {
  validateContentReferences();

  const base = "https://www.lastwar.co.kr";
  // Only pages that have passed the current completion/indexing review belong here.
  // Reviewed service, guide and regional detail pages are included through their
  // centralized indexing lists; unfinished pages stay out of the sitemap.
  const staticRoutes = ["", "/service", "/busan", "/guide", "/support", "/estimate", "/company", "/privacy"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: path === "/privacy" || path === "/company" ? "monthly" as const : "weekly" as const,
      priority: path === "" ? 1 : path === "/company" || path === "/privacy" ? 0.55 : 0.8
    })),
    ...indexableServiceSlugs.map((slug) => ({
      url: `${base}/service/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...indexableGuideSlugs.map((slug) => ({
      url: `${base}/guide/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.78
    })),
    ...indexableRegionSlugs.map((slug) => ({
      url: `${base}/busan/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85
    }))
  ];
}
