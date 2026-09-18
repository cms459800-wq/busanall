import type { MetadataRoute } from "next";
import { indexableRegionSlugs } from "@/data/indexing";
import { indexableServiceSlugs } from "@/data/serviceIndexing";
import { indexableGuideSlugs } from "@/data/guideIndexing";
import { validateContentReferences } from "@/data/validateReferences";

export default function sitemap(): MetadataRoute.Sitemap {
  validateContentReferences();

  const base = "https://www.parcelout.kr";
  // Only pages that have passed the current completion/indexing review belong here.
  // Service and guide detail pages are intentionally excluded while their visual
  // sections and remaining SEO consistency checks are still unfinished.
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
