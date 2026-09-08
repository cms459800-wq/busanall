import { regions } from "@/data/regions";

const inquiryUrl = "https://maxpool.olbarun.kr/";

export const metadata = {
  title: "부산 16개 구·군 철거 지역안내",
  description: "해운대구·부산진구·동래구·수영구 등 부산 16개 구·군의 철거·원상복구 현장 특성과 업종별 정보를 확인하세요.",
  keywords: ["부산 철거", "부산 철거업체", "부산 원상복구", "부산 상가철거", "부산 지역별 철거"],
  alternates: { canonical: "/busan" },
  openGraph: {
    title: "부산 16개 구·군 철거 지역안내",
    description: "부산 16개 구·군의 상권·건물·반출조건과 업종별 철거 정보를 지역별로 확인하세요.",
    url: "/busan",
    type: "website"
  }
};

const regionSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "부산 16개 구·군 철거 지역안내",
  itemListElement: Object.entries(regions).map(([slug, region], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: region.primary,
    url: `https://busanall.vercel.app/busan/${slug}`
  }))
};

export default function BusanHub() {
  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(regionSchema) }} />
      <header className="list-hero">
        <div className="eyebrow-chip">BUSAN AREA GUIDE</div>
        <h1>부산 16개 구·군<br/><span className="gradient-text">현장 조건까지 지역별로</span></h1>
        <p>지역 이름만 바꾸는 페이지가 아니라 상권, 건물 유형, 차량 접근성, 폐기물 반출과 주요 업종을 기준으로 현장 판단에 필요한 정보를 정리했습니다.</p>
        <div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지</a></div>
      </header>

      <section className="section">
        <div className="section-heading">
          <div><span className="section-kicker">16 DISTRICTS</span><h2>지역별 철거 정보</h2></div>
          <p>주요 동네와 현장 특성, 많이 확인하는 업종별 서비스, 폐업지원 안내까지 한 페이지에서 확인할 수 있습니다.</p>
        </div>
        <div className="service-grid">
          {Object.entries(regions).map(([slug, region], i) => (
            <a className="service-card" href={`/busan/${slug}`} key={slug}>
              <div className="service-card-top"><span className="service-card-icon">{String(i + 1).padStart(2, "0")}</span><span className="service-card-arrow">↗</span></div>
              <strong>{region.primary}</strong>
              <span>{region.neighborhoods.join(" · ")}</span>
              <span style={{marginTop:"8px"}}>{region.summary}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="support-box home-section">
        <span className="section-kicker">LOCAL CHECK</span>
        <h2>같은 업종이라도 지역과 건물 조건에 따라<br/>작업 방식은 달라질 수 있습니다.</h2>
        <p>고층 상가의 화물승강기 사용, 골목 차량 진입, 관리실 작업시간, 인접 점포 영업 여부처럼 실제 현장에서 비용과 일정에 영향을 주는 조건을 먼저 확인하는 것이 좋습니다.</p>
        <div className="cta-row"><a className="btn btn-primary" href="/guide/demolition-estimate-checklist">견적 체크리스트</a><a className="btn btn-glass" href="/service">업종별 서비스</a></div>
      </section>

      <section className="final-cta">
        <div><span className="section-kicker">LOCAL ESTIMATE</span><h2>부산 현장,<br/>지역 조건까지 같이 확인하세요.</h2><p>업종과 면적뿐 아니라 층수, 엘리베이터, 골목 진입, 폐기물 상차 위치와 원상복구 범위를 함께 확인합니다.</p></div>
        <a className="btn btn-light" href={inquiryUrl}>무료 현장견적 문의</a>
      </section>
    </main>
  );
}
