import GrowthGuide from "@/components/GrowthGuide";
import { guideBySlug } from "@/data/allGuides";
const slug="demolition-cost-per-pyeong-guide"; const guide=guideBySlug(slug)!;
export const metadata={title:"철거 평당비용 보는 법 | 평수보다 중요한 견적 조건",description:"철거비를 평당 단가 하나로 판단하기 어려운 이유와 폐기물량, 설비, 층수, 반출 동선, 원상복구 범위가 견적에 미치는 영향을 설명합니다.",keywords:guide.keywords,robots:{index:true,follow:true},alternates:{canonical:`/guide/${slug}`},openGraph:{title:"철거 평당비용만 비교하면 놓치는 항목",description:"같은 면적이어도 철거비가 달라지는 현장 조건을 살펴보고 견적서를 비교할 때 확인해야 할 기준을 정리했습니다.",url:`/guide/${slug}`,type:"article" as const,locale:"ko_KR"},twitter:{card:"summary" as const,title:"철거비용, 평당 단가보다 먼저 볼 것",description:"폐기물·설비·반출조건·원상복구 범위가 철거 견적에 어떻게 반영되는지 확인하세요."}};
export default function Page(){return <GrowthGuide slug={slug}/>;}
