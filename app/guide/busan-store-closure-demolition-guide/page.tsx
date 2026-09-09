import GrowthGuide from "@/components/GrowthGuide";
import { guideBySlug } from "@/data/allGuides";
const slug="busan-store-closure-demolition-guide"; const guide=guideBySlug(slug)!;
export const metadata={title:"부산 상가 폐업철거 준비 | 원상복구·견적 순서",description:"부산에서 상가 폐업을 준비할 때 임대차 원상복구 범위, 관리실 확인, 철거 견적과 현장사진 준비 순서를 단계별로 확인합니다.",keywords:guide.keywords,robots:{index:true,follow:true},alternates:{canonical:`/guide/${slug}`},openGraph:{title:"부산 상가 폐업, 철거 전에 무엇부터 확인할까?",description:"계약서 확인부터 원상복구 합의, 건물 규정, 견적 준비까지 부산 상가 폐업철거의 실제 준비 흐름을 정리했습니다.",url:`/guide/${slug}`,type:"article" as const,locale:"ko_KR"},twitter:{card:"summary" as const,title:"부산 상가 폐업철거 준비 순서",description:"원상복구 범위와 건물 규정, 견적 준비를 폐업철거 순서에 맞춰 확인하세요."}};
export default function Page(){return <GrowthGuide slug={slug}/>;}
