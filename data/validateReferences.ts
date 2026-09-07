import { services } from "@/data/services";
import { regions } from "@/data/regions";
import { guides } from "@/data/guides";
import { serviceIntents } from "@/data/serviceIntent";
import { serviceIntentExtra } from "@/data/serviceIntentExtra";

export function validateContentReferences() {
  const serviceSlugs = new Set(Object.keys(services));
  const guideSlugs = new Set<string>();
  const errors: string[] = [];

  for (const [regionSlug, region] of Object.entries(regions)) {
    for (const serviceSlug of region.services as readonly string[]) {
      if (!serviceSlugs.has(serviceSlug)) {
        errors.push(`regions.${regionSlug}.services -> invalid service slug: ${serviceSlug}`);
      }
    }
  }

  for (const guide of guides) {
    if (guideSlugs.has(guide.slug)) {
      errors.push(`guides -> duplicate guide slug: ${guide.slug}`);
    }
    guideSlugs.add(guide.slug);

    for (const serviceSlug of guide.relatedServices) {
      if (!serviceSlugs.has(serviceSlug)) {
        errors.push(`guides.${guide.slug}.relatedServices -> invalid service slug: ${serviceSlug}`);
      }
    }
  }

  const intentMaps = [
    ["serviceIntents", serviceIntents],
    ["serviceIntentExtra", serviceIntentExtra]
  ] as const;
  const intentOwners = new Map<string, string>();

  for (const [mapName, intentMap] of intentMaps) {
    for (const [serviceSlug, intent] of Object.entries(intentMap)) {
      if (!serviceSlugs.has(serviceSlug)) {
        errors.push(`${mapName} -> invalid service key: ${serviceSlug}`);
      }

      const previousOwner = intentOwners.get(serviceSlug);
      if (previousOwner) {
        errors.push(`service intent -> duplicate definition for ${serviceSlug}: ${previousOwner}, ${mapName}`);
      } else {
        intentOwners.set(serviceSlug, mapName);
      }

      if (!intent) continue;
      for (const comparison of intent.differsFrom) {
        if (!serviceSlugs.has(comparison.slug)) {
          errors.push(`${mapName}.${serviceSlug}.differsFrom -> invalid service slug: ${comparison.slug}`);
        }
        if (comparison.slug === serviceSlug) {
          errors.push(`${mapName}.${serviceSlug}.differsFrom -> self reference: ${comparison.slug}`);
        }
      }
    }
  }

  for (const serviceSlug of serviceSlugs) {
    if (!intentOwners.has(serviceSlug)) {
      errors.push(`service intent -> missing search-intent definition: ${serviceSlug}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Invalid internal content references:\n${errors.join("\n")}`);
  }
}
