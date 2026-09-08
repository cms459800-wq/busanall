import { guides } from "@/data/allGuides";
import { getGuideSearchIntent } from "@/data/guideSearchIntent";

const inquiryUrl = "https://maxpool.olbarun.kr/";

export const metadata = {
  title: "부산 철거·폐업 가이드",
  description: "부산 철거비용, 원상복구, 폐업지원금과 업종별 폐업철거를 실제 의사결정에 도움이 되도록 정리한 올바른철거 가이드입니다.",
  alternates: { canonical: "/guide" }
};

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "부산 철거·폐업 가이드",
  itemListElement: guides.map((guide, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: guide.title,
    url: `https://busanall.vercel.app/guide/${guide.slug}`
  }))
};

const featuredSlugs = [
  "closure-demolition-support-2026",
  "busan-store-closure-demolition-guide",
  "demolition-estimate-checklist",
  "demolition-cost-per-pyeong-guide",
  "landlord-restoration-dispute-checklist",
  "building-management-demolition-notice"
] as const;

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

export default function GuidePage() {
  const featured = featuredSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  const categories = Array.from(new Set(guides.map((guide) => guide.category))).map((category) => ({
    category,
    items: guides.filter((guide) => guide.category === category)
  }));

  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />
      <header className="list-hero">
        <div className="eyebrow-chip">DEMOLITION GUIDE</div>
        <h1>철거 전에 알아두면 좋은<br/><span className="gradient-text">비용·원상복구·폐업 정보</span></h1>
        <p>광고성 문구보다 실제 폐업과 철거 과정에서 먼저 확인해야 할 내용을 중심으로 정리합니다. 지원제도는 공사 전 최신 공식 공고를 함께 확인하세요.</p>
        <div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지</a><a className="btn btn-glass" href="/support">2026 폐업지원 확인</a></div>
      </header>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">START HERE</span><h2>철거 준비 순서대로 먼저 볼 가이드</h2></div><p>폐업지원 확인부터 폐업 준비, 견적 비교, 비용 해석, 원상복구 합의와 관리실 신고까지 실제 의사결정 순서에 가까운 핵심 글을 먼저 배치했습니다.</p></div>
        <div className="home-grid">{featured.map((guide) => {
          const searchIntent = getGuideSearchIntent(guide.slug);
          return <a className="home-link-card" href={`/guide/${guide.slug}`} key={guide.slug}><span className="arrow">↗</span><small>{searchIntent?.intent ?? guide.category}</small><h3>{guide.title}</h3><p>{guide.description}</p>{searchIntent&&<span className="section-kicker" style={{marginTop:"10px"}}>{searchIntent.primaryQuery}</span>}</a>;
        })}</div>
      </section>

      <section className="section soft-section">
        <div className="section-heading"><div><span className="section-kicker">FIND BY INTENT</span><h2>찾는 목적에 따라 가이드를 선택하세요</h2></div><p>지원제도, 폐업준비, 비용, 원상복구, 업종, 산업시설, 주거와 철거기초처럼 목적을 나눠 필요한 글로 바로 이동할 수 있도록 정리했습니다.</p></div>
        <div className="cta-row">{categories.map(({ category }) => <a className="btn btn-glass" href={`#guide-${category}`} key={category}>{category}</a>)}</div>
      </section>

      {categories.map(({ category, items }) => (
        <section className="section" id={`guide-${category}`} key={category}>
          <div className="section-heading"><div><span className="section-kicker">TOPIC GUIDE</span><h2>{category}</h2></div><p>{categoryDescriptions[category] ?? "철거와 원상복구 과정에서 해당 상황에 필요한 현장 체크사항을 확인하세요."}</p></div>
          <div className="service-grid">{items.map((guide) => {
            const searchIntent = getGuideSearchIntent(guide.slug);
            return <a className="service-card" href={`/guide/${guide.slug}`} key={guide.slug}><div className="service-card-top"><span className="service-card-icon">✓</span><span className="service-card-arrow">↗</span></div><small className="section-kicker">{searchIntent?.intent ?? guide.category}</small><strong style={{marginTop:"8px"}}>{guide.title}</strong><span>{guide.description}</span>{searchIntent&&<span className="section-kicker" style={{marginTop:"8px"}}>{searchIntent.primaryQuery}</span>}</a>;
          })}</div>
        </section>
      ))}

      <section className="final-cta"><div><span className="section-kicker">FIELD CHECK</span><h2>가이드로 범위를 확인한 뒤<br/>내 현장 조건을 비교해보세요.</h2><p>같은 업종이라도 설비, 마감, 층수, 반출조건과 임대차 원상복구 범위에 따라 실제 작업 내용은 달라질 수 있습니다.</p></div><a className="btn btn-light" href={inquiryUrl}>무료 현장견적 문의</a></section>
    </main>
  );
}
