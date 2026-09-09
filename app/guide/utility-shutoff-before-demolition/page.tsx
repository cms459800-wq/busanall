import GrowthGuide from "@/components/GrowthGuide";
import { guideBySlug } from "@/data/allGuides";
const slug="utility-shutoff-before-demolition"; const guide=guideBySlug(slug)!;
export const metadata={title:"철거 전 전기·가스·수도 차단 | 설비 확인 순서",description:"철거 공사 전에 전기, 가스, 수도와 업종별 연결 설비를 확인하고 차단·철거 범위를 구분할 때 필요한 현장 체크 순서를 정리합니다.",keywords:guide.keywords,robots:{index:true,follow:true},alternates:{canonical:`/guide/${slug}`},openGraph:{title:"철거 시작 전에 전기·가스·수도부터 확인해야 하는 이유",description:"공사 중 설비 문제를 줄이기 위해 계량기와 연결 배관, 전기 회로 등 철거 전 확인해야 할 설비 차단 항목을 살펴봅니다.",url:`/guide/${slug}`,type:"article" as const,locale:"ko_KR"},twitter:{card:"summary" as const,title:"철거 전 설비 차단 체크",description:"전기·가스·수도와 연결 설비를 철거 전에 어떤 순서로 확인할지 정리했습니다."}};
export default function Page(){return <GrowthGuide slug={slug}/>;}
