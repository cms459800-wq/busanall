import { services } from "@/data/services";
import { regions } from "@/data/regions";
import { guides } from "@/data/guides";

export function validateContentReferences() {
  const serviceSlugs = new Set(Object.keys(services));
  const errors: string[] = [];

  for (const [regionSlug, region] of Object.entries(regions)) {
    for (const serviceSlug of region.services as readonly string[]) {
      if (!serviceSlugs.has(serviceSlug)) {
        errors.push(`regions.${regionSlug}.services -> invalid service slug: ${serviceSlug}`);
      }
    }
  }

  for (const guide of guides) {
    for (const serviceSlug of guide.relatedServices) {
      if (!serviceSlugs.has(serviceSlug)) {
        errors.push(`guides.${guide.slug}.relatedServices -> invalid service slug: ${serviceSlug}`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Invalid internal content references:\n${errors.join("\n")}`);
  }
}
