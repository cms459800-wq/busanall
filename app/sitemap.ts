import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { regions } from "@/data/regions";
import { guides } from "@/data/guides";
import { validateContentReferences } from "@/data/validateReferences";

export default function sitemap(): MetadataRoute.Sitemap {
  validateContentReferences();

  const base = "https://busanall.vercel.app";
  const staticRoutes = ["", "/service", "/busan", "/guide", "/support", "/projects", "/estimate"];
  return [
    ...staticRoutes.map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 })),
    ...Object.keys(services).map((slug) => ({ url: `${base}/service/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...Object.keys(regions).map((slug) => ({ url: `${base}/busan/${slug}`, changeFrequency: "monthly" as const, priority: 0.85 })),
    ...guides.map((guide) => ({ url: `${base}/guide/${guide.slug}`, changeFrequency: "monthly" as const, priority: 0.75 }))
  ];
}
