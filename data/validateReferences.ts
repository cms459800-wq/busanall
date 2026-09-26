import { services } from "@/data/services";
import { regions } from "@/data/regions";
import { regionDetails } from "@/data/regionDetails";
import { regionSeo } from "@/data/regionSeo";
import { indexableRegionSlugs, regionSlugsNeedingReview, unfinishedRegionSlugs } from "@/data/indexing";
import { guides } from "@/data/allGuides";
import { guideDetails } from "@/data/guideDetails";
import { guideDetailsExtra } from "@/data/guideDetailsExtra";
import { guideDetailsGrowth } from "@/data/guideDetailsGrowth";
import { guideSearchIntents } from "@/data/guideSearchIntent";
import { serviceIntents } from "@/data/serviceIntent";
import { serviceIntentExtra } from "@/data/serviceIntentExtra";

export function validateContentReferences() {
  const serviceSlugs = new Set(Object.keys(services));
  const guideSlugs = new Set<string>();
  const errors: string[] = [];

  // Keep the public sitemap, regional metadata and review queues in sync.
  const regionSlugs = new Set(Object.keys(regions));
  const reviewGroups = [
    ["indexable", indexableRegionSlugs],
    ["needsReview", regionSlugsNeedingReview],
    ["unfinished", unfinishedRegionSlugs]
  ] as const;
  const reviewOwners = new Map<string, string>();
  for (const [group, slugs] of reviewGroups) {
    for (const slug of slugs) {
      if (!regionSlugs.has(slug)) errors.push(`region review group ${group} -> unknown slug: ${slug}`);
      const previous = reviewOwners.get(slug);
      if (previous) errors.push(`region review group -> duplicate slug ${slug}: ${previous}, ${group}`);
      else reviewOwners.set(slug, group);
    }
  }
  for (const slug of regionSlugs) {
    const detail = regionDetails[slug as keyof typeof regionDetails];
    const seo = regionSeo[slug as keyof typeof regionSeo];
    if (!reviewOwners.has(slug)) errors.push(`region review group -> missing slug: ${slug}`);
    if (!detail) errors.push(`region detail -> missing: ${slug}`);
    else {
      if (!detail.focus.trim() || detail.fieldChecks.length < 3 || detail.scenarios.length < 2 || detail.photoChecklist.length < 3 || detail.faq.length < 2) errors.push(`region detail -> incomplete: ${slug}`);
      if (!detail.buildingRule?.trim() || !detail.neighborhoodNote?.trim()) errors.push(`region detail -> missing local building/neighborhood guidance: ${slug}`);
    }
    if (!seo || !seo.title.trim() || !seo.description.trim() || !seo.ogTitle.trim() || !seo.ogDescription.trim()) errors.push(`region SEO -> missing metadata: ${slug}`);
  }

  for (const [regionSlug, region] of Object.entries(regions)) {
    for (const serviceSlug of region.services as readonly string[]) {
      if (!serviceSlugs.has(serviceSlug)) errors.push(`regions.${regionSlug}.services -> invalid service slug: ${serviceSlug}`);
    }
  }

  for (const guide of guides) {
    if (guideSlugs.has(guide.slug)) errors.push(`guides -> duplicate guide slug: ${guide.slug}`);
    guideSlugs.add(guide.slug);
    for (const serviceSlug of guide.relatedServices) {
      if (!serviceSlugs.has(serviceSlug)) errors.push(`guides.${guide.slug}.relatedServices -> invalid service slug: ${serviceSlug}`);
    }
  }

  const detailMaps = [
    ["guideDetails", guideDetails],
    ["guideDetailsExtra", guideDetailsExtra],
    ["guideDetailsGrowth", guideDetailsGrowth]
  ] as const;
  const detailOwners = new Map<string, string>();

  for (const [mapName, detailMap] of detailMaps) {
    for (const guideSlug of Object.keys(detailMap)) {
      if (!guideSlugs.has(guideSlug)) errors.push(`${mapName} -> invalid guide key: ${guideSlug}`);
      const previousOwner = detailOwners.get(guideSlug);
      if (previousOwner) errors.push(`guide detail -> duplicate definition for ${guideSlug}: ${previousOwner}, ${mapName}`);
      else detailOwners.set(guideSlug, mapName);
    }
  }

  for (const guideSlug of guideSlugs) {
    if (!detailOwners.has(guideSlug)) errors.push(`guide detail -> missing detail content: ${guideSlug}`);
  }

  const primaryQueryOwners = new Map<string, string>();
  for (const [guideSlug, searchIntent] of Object.entries(guideSearchIntents)) {
    if (!guideSlugs.has(guideSlug)) errors.push(`guideSearchIntents -> invalid guide key: ${guideSlug}`);
    const normalizedPrimaryQuery = searchIntent.primaryQuery.trim().toLowerCase();
    const previousOwner = primaryQueryOwners.get(normalizedPrimaryQuery);
    if (previousOwner) errors.push(`guide search intent -> duplicate primary query "${searchIntent.primaryQuery}": ${previousOwner}, ${guideSlug}`);
    else primaryQueryOwners.set(normalizedPrimaryQuery, guideSlug);
    if (!searchIntent.goal.trim()) errors.push(`guideSearchIntents.${guideSlug} -> empty search goal`);
  }

  for (const guideSlug of guideSlugs) {
    if (!guideSearchIntents[guideSlug]) errors.push(`guide search intent -> missing definition: ${guideSlug}`);
  }

  const intentMaps = [["serviceIntents", serviceIntents], ["serviceIntentExtra", serviceIntentExtra]] as const;
  const intentOwners = new Map<string, string>();

  for (const [mapName, intentMap] of intentMaps) {
    for (const [serviceSlug, intent] of Object.entries(intentMap)) {
      if (!serviceSlugs.has(serviceSlug)) errors.push(`${mapName} -> invalid service key: ${serviceSlug}`);
      const previousOwner = intentOwners.get(serviceSlug);
      if (previousOwner) errors.push(`service intent -> duplicate definition for ${serviceSlug}: ${previousOwner}, ${mapName}`);
      else intentOwners.set(serviceSlug, mapName);
      if (!intent) continue;
      for (const comparison of intent.differsFrom) {
        if (!serviceSlugs.has(comparison.slug)) errors.push(`${mapName}.${serviceSlug}.differsFrom -> invalid service slug: ${comparison.slug}`);
        if (comparison.slug === serviceSlug) errors.push(`${mapName}.${serviceSlug}.differsFrom -> self reference: ${comparison.slug}`);
      }
    }
  }

  for (const serviceSlug of serviceSlugs) {
    if (!intentOwners.has(serviceSlug)) errors.push(`service intent -> missing search-intent definition: ${serviceSlug}`);
  }

  if (errors.length > 0) throw new Error(`Invalid internal content references:\n${errors.join("\n")}`);
}
