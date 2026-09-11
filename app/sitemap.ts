import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { regions } from "@/data/regions";
import { guides } from "@/data/allGuides";
import { validateContentReferences } from "@/data/validateReferences";

export default function sitemap(): MetadataRoute.Sitemap {
  validateContentReferences();

  const base = "https://www.parcelout.kr";
  const staticRoutes = ["", "/service", "/busan", "/guide", "/support", "/estimate", "/company", "/privacy"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: path === "/privacy" || path === "/company" ? "monthly" as const : "weekly" as const,
      priority: path === "" ? 1 : path === "/company" || path === "/privacy" ? 0.55 : 0.8
    })),
    ...Object.keys(services).map((slug) => ({ url: `${base}/service/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...Object.keys(regions).map((slug) => ({ url: `${base}/busan/${slug}`, changeFrequency: "monthly" as const, priority: 0.85 })),
    ...guides.map((guide) => ({ url: `${base}/guide/${guide.slug}`, changeFrequency: "monthly" as const, priority: 0.75 }))
  ];
}
