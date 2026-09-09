import GrowthGuide from "@/components/GrowthGuide";
import { guideBySlug } from "@/data/allGuides";
const slug="landlord-restoration-dispute-checklist"; const guide=guideBySlug(slug)!;
export const metadata={title:"임대인 원상복구 분쟁 체크리스트 | 철거 전 합의사항",description:"상가 철거 전에 임대인과 원상복구 범위를 확인할 때 계약서, 기존 시설, 존치 품목, 철거 범위와 사진 기록을 어떻게 정리할지 살펴봅니다.",keywords:guide.keywords,robots:{index:true,follow:true},alternates:{canonical:`/guide/${slug}`},openGraph:{title:"원상복구 분쟁을 줄이려면 철거 전에 남겨야 할 기록",description:"임대인과 철거 범위를 협의할 때 말로만 정하지 않고 계약·시설·사진·존치 범위를 확인하는 체크포인트를 안내합니다.",url:`/guide/${slug}`,type:"article" as const,locale:"ko_KR"},twitter:{card:"summary" as const,title:"상가 원상복구, 철거 전 합의 체크",description:"계약서와 기존 시설, 존치 범위, 현장사진을 기준으로 원상복구 협의사항을 정리하세요."}};
export default function Page(){return <GrowthGuide slug={slug}/>;}
