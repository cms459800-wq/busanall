import GrowthGuide from "@/components/GrowthGuide";
import { guideBySlug } from "@/data/allGuides";
const slug="building-management-demolition-notice"; const guide=guideBySlug(slug)!;
export const metadata={title:"철거 전 관리실 공사신고 | 작업시간·승강기·보양 확인",description:"상가와 건물 철거 전에 관리실에 확인할 공사 가능 시간, 승강기 사용, 공용부 보양, 차량 진입과 폐기물 반출 조건을 정리합니다.",keywords:guide.keywords,robots:{index:true,follow:true},alternates:{canonical:`/guide/${slug}`},openGraph:{title:"관리실 확인 없이 철거 일정을 잡기 전에 볼 체크사항",description:"건물별 공사 규정은 다를 수 있습니다. 작업시간, 엘리베이터, 보양, 상차 위치 등 일정 전에 확인할 항목을 안내합니다.",url:`/guide/${slug}`,type:"article" as const,locale:"ko_KR"},twitter:{card:"summary" as const,title:"철거 전 관리실 신고 체크리스트",description:"작업시간·승강기·공용부 보양·차량 진입 조건을 공사 일정 전에 확인하세요."}};
export default function Page(){return <GrowthGuide slug={slug}/>;}
