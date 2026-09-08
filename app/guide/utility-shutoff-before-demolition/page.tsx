import GrowthGuide from "@/components/GrowthGuide";
import { guideBySlug } from "@/data/allGuides";
const slug="utility-shutoff-before-demolition"; const guide=guideBySlug(slug)!;
export const metadata={title:guide.title,description:guide.description,keywords:guide.keywords,alternates:{canonical:`/guide/${slug}`},openGraph:{title:guide.title,description:guide.description,url:`/guide/${slug}`,type:"article" as const}};
export default function Page(){return <GrowthGuide slug={slug}/>;}
