import { guides } from "@/data/allGuides";
import { getGuideSearchIntent } from "@/data/guideSearchIntent";

const inquiryUrl = "https://maxpool.olbarun.kr/";

export const metadata = {
  title: "부산 철거·폐업 가이드",
  description: "부산 철거비용, 원상복구, 폐업지원금과 업종별 폐업철거를 실제 의사결정에 도움이 되도록 정리한 올바른철거 가이드입니다.",
  keywords: ["부산 철거비용", "부산 폐업철거", "상가 원상복구", "부산 폐업지원금", "철거 견적"],
  alternates: { canonical: "/guide" },
  openGraph: { title: "부산 철거·폐업 가이드", description: "철거비용·원상복구·폐업지원·업종별 철거를 실제 준비 순서에 맞춰 확인하세요.", url: "/guide", type: "website" }
};

const guideSchema = {
  "@context": "https://schema.org", "@type": "ItemList", name: "부산 철거·폐업 가이드",
  itemListElement: guides.map((guide, i) => ({ "@type": "ListItem", position: i + 1, name: guide.title, url: `https://busanall.vercel.app/guide/${guide.slug}` }))
};

const featuredSlugs = ["closure-demolition-support-2026","busan-store-closure-demolition-guide","demolition-estimate-checklist","demolition-cost-per-pyeong-guide","landlord-restoration-dispute-checklist","building-management-demolition-notice"] as const;

const categoryDescriptions: Record<string, string> = {
  "폐업지원": "점포철거비 지원 대상과 신청·증빙 순서를 공사 전에 확인합니다.",
  "폐업준비": "상가 폐업 일정, 계약, 집기 회수, 철거와 인도까지 실제 폐업 준비 순서를 확인합니다.",
  "철거비용": "평당 숫자보다 철거범위, 폐기물, 반출조건과 추가비용 조건을 비교하는 방법을 확인합니다.",
  "원상복구": "계약서와 입점 당시 상태를 기준으로 임대인과 철거·존치·마감 범위를 정하는 방법을 확인합니다.",
  "업종별 가이드": "식당·카페·사무실·학원·병원·미용실 등 업종마다 다른 설비와 원상복구 포인트를 확인합니다.",
  "산업시설 가이드": "공장·창고처럼 장비, 전기, 배관, 바닥기초와 대형차량 동선이 중요한 현장을 다룹니다.",
  "주거 철거 가이드": "아파트 등 주거시설의 관리규정, 공용부 보양, 소음시간과 부분철거 범위를 확인합니다.",
  "철거 범위 가이드": "전체철거와 부분철거를 구분하고 남길 시설과 철거할 시설의 경계를 정하는 기준을 확인합니다.",
  "철거기초": "가스·전기·수도, 관리실 공사신고, 폐기물과 반출동선처럼 공통으로 필요한 철거 기본정보를 확인합니다."
};

const categoryTone: Record<string, string> = {
  "폐업지원":"green", "폐업준비":"orange", "철거비용":"blue", "원상복구":"purple", "업종별 가이드":"cyan", "산업시설 가이드":"slate", "주거 철거 가이드":"indigo", "철거 범위 가이드":"rose", "철거기초":"amber"
};

function GuideIcon({ category }: { category: string }) {
  const common = { width:25,height:25,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true };
  if(category==="폐업지원")return <svg {...common}><path d="M7 3h10v4H7z"/><path d="M5 7h14v14H5z"/><path d="M9 12h6M9 16h4"/></svg>;
  if(category==="폐업준비")return <svg {...common}><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/><path d="M3 6h2M3 10h2M3 14h2"/></svg>;
  if(category==="철거비용")return <svg {...common}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M7 7h10M8 11h2M14 11h2M8 15h2M14 15h2M8 19h8"/></svg>;
  if(category==="원상복구")return <svg {...common}><path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/><path d="M7 11l2 2 4-4"/></svg>;
  if(category==="업종별 가이드")return <svg {...common}><path d="M4 10h16l-1-5H5z"/><path d="M6 10v10h12V10"/><path d="M9 20v-6h6v6"/></svg>;
  if(category==="산업시설 가이드")return <svg {...common}><path d="M3 20V10l6 3V8l6 3V5h5v15z"/><path d="M7 17h2M12 17h2M17 14h1"/></svg>;
  if(category==="주거 철거 가이드")return <svg {...common}><path d="M3 21h18"/><path d="M5 21V7h6v14M13 21V3h6v18"/><path d="M7 10h2M7 14h2M15 7h2M15 11h2M15 15h2"/></svg>;
  if(category==="철거 범위 가이드")return <svg {...common}><path d="M4 5h16v14H4z"/><path d="M12 5v14"/><path d="M8 9l-2 2 2 2M16 9l2 2-2 2"/></svg>;
  return <svg {...common}><path d="M14 4l6 6-9 9H5v-6z"/><path d="M13 5l6 6"/><path d="M4 20h6"/></svg>;
}

export default function GuidePage(){
  const featured=featuredSlugs.map(slug=>guides.find(guide=>guide.slug===slug)).filter((guide):guide is NonNullable<typeof guide>=>Boolean(guide));
  const categories=Array.from(new Set(guides.map(guide=>guide.category))).map(category=>({category,items:guides.filter(guide=>guide.category===category)}));
  return <main className="page-shell">
    <style>{`
      .guide-card-icon,.guide-feature-icon{display:grid;place-items:center;border:1px solid var(--icon-border);background:var(--icon-bg);color:var(--icon-color);transition:transform .2s ease,box-shadow .2s ease,background .2s ease,color .2s ease}
      .guide-card-icon{width:50px;height:50px;border-radius:15px}.guide-feature-icon{width:44px;height:44px;border-radius:13px;margin-bottom:14px}.guide-feature-icon svg{width:23px;height:23px}
      .guide-tone-blue{--icon-bg:#eef4ff;--icon-border:#d8e5ff;--icon-color:#2458d8}.guide-tone-green{--icon-bg:#edf9f2;--icon-border:#d2efde;--icon-color:#18794e}.guide-tone-orange{--icon-bg:#fff5e8;--icon-border:#f8dfbd;--icon-color:#a9570a}.guide-tone-purple{--icon-bg:#f5f0ff;--icon-border:#e5d9ff;--icon-color:#7048c8}.guide-tone-cyan{--icon-bg:#ecf9fb;--icon-border:#d0edf1;--icon-color:#087b8c}.guide-tone-slate{--icon-bg:#f1f4f7;--icon-border:#dde3ea;--icon-color:#475467}.guide-tone-indigo{--icon-bg:#eef0ff;--icon-border:#daddff;--icon-color:#4c51bf}.guide-tone-rose{--icon-bg:#fff0f3;--icon-border:#f7d7df;--icon-color:#b4234d}.guide-tone-amber{--icon-bg:#fff8df;--icon-border:#f4e5a7;--icon-color:#946200}
      .service-card:hover .guide-card-icon,.home-link-card:hover .guide-feature-icon{transform:translateY(-2px) scale(1.04);box-shadow:0 8px 18px rgba(17,24,39,.10);background:var(--icon-color);color:#fff}
      .guide-topic-badge{display:inline-flex;width:max-content;max-width:100%;margin-top:8px;padding:5px 9px;border-radius:999px;background:var(--icon-bg);border:1px solid var(--icon-border);color:var(--icon-color);font-size:11px;font-weight:800;line-height:1.35}
    `}</style>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(guideSchema)}}/>
    <header className="list-hero"><div className="eyebrow-chip">DEMOLITION GUIDE</div><h1>철거 전에 알아두면 좋은<br/><span className="gradient-text">비용·원상복구·폐업 정보</span></h1><p>광고성 문구보다 실제 폐업과 철거 과정에서 먼저 확인해야 할 내용을 중심으로 정리합니다. 지원제도는 공사 전 최신 공식 공고를 함께 확인하세요.</p><div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지</a><a className="btn btn-glass" href="/support">2026 폐업지원 확인</a></div></header>
    <section className="section"><div className="section-heading"><div><span className="section-kicker">START HERE</span><h2>철거 준비 순서대로 먼저 볼 가이드</h2></div><p>폐업지원 확인부터 폐업 준비, 견적 비교, 비용 해석, 원상복구 합의와 관리실 신고까지 실제 의사결정 순서에 가까운 핵심 글을 먼저 배치했습니다.</p></div><div className="home-grid">{featured.map(guide=>{const searchIntent=getGuideSearchIntent(guide.slug);const tone=categoryTone[guide.category]??"blue";return <a className={`home-link-card guide-tone-${tone}`} href={`/guide/${guide.slug}`} key={guide.slug}><span className="arrow">↗</span><span className="guide-feature-icon"><GuideIcon category={guide.category}/></span><small>{searchIntent?.intent??guide.category}</small><h3>{guide.title}</h3><p>{guide.description}</p>{searchIntent&&<span className="guide-topic-badge">{searchIntent.primaryQuery}</span>}</a>})}</div></section>
    <section className="section soft-section"><div className="section-heading"><div><span className="section-kicker">FIND BY INTENT</span><h2>찾는 목적에 따라 가이드를 선택하세요</h2></div><p>지원제도, 폐업준비, 비용, 원상복구, 업종, 산업시설, 주거와 철거기초처럼 목적을 나눠 필요한 글로 바로 이동할 수 있도록 정리했습니다.</p></div><div className="cta-row">{categories.map(({category})=><a className="btn btn-glass" href={`#guide-${category}`} key={category}>{category}</a>)}</div></section>
    {categories.map(({category,items})=><section className="section" id={`guide-${category}`} key={category}><div className="section-heading"><div><span className="section-kicker">TOPIC GUIDE</span><h2>{category}</h2></div><p>{categoryDescriptions[category]??"철거와 원상복구 과정에서 해당 상황에 필요한 현장 체크사항을 확인하세요."}</p></div><div className="service-grid">{items.map(guide=>{const searchIntent=getGuideSearchIntent(guide.slug);const tone=categoryTone[guide.category]??"blue";return <a className={`service-card guide-tone-${tone}`} href={`/guide/${guide.slug}`} key={guide.slug}><div className="service-card-top"><span className="guide-card-icon"><GuideIcon category={guide.category}/></span><span className="service-card-arrow">↗</span></div><small className="section-kicker">{searchIntent?.intent??guide.category}</small><strong style={{marginTop:"8px"}}>{guide.title}</strong><span>{guide.description}</span>{searchIntent&&<span className="guide-topic-badge">{searchIntent.primaryQuery}</span>}</a>})}</div></section>)}
    <section className="final-cta"><div><span className="section-kicker">FIELD CHECK</span><h2>가이드로 범위를 확인한 뒤<br/>내 현장 조건을 비교해보세요.</h2><p>같은 업종이라도 설비, 마감, 층수, 반출조건과 임대차 원상복구 범위에 따라 실제 작업 내용은 달라질 수 있습니다.</p></div><a className="btn btn-light" href={inquiryUrl}>무료 현장견적 문의</a></section>
  </main>;
}
