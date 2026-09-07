import { regions } from "@/data/regions";

export const metadata = {
  title: "부산 16개 구·군 철거 지역안내",
  description: "해운대구·부산진구·동래구·수영구 등 부산 16개 구·군의 철거·원상복구 현장 특성과 업종별 정보를 확인하세요."
};

export default function BusanHub() {
  return (
    <main className="page-shell">
      <header className="list-hero reveal">
        <div className="eyebrow-chip"><span>●</span> BUSAN AREA GUIDE</div>
        <h1>부산 16개 구·군<br/><span className="gradient-text">철거 지역안내</span></h1>
        <p>지역 이름만 바꾸는 페이지가 아니라 상권·건물·반출동선·업종 특성을 반영해 실제 현장 판단에 도움이 되는 내용을 제공합니다.</p>
      </header>

      <section className="section reveal">
        <div className="section-heading">
          <div><span className="section-kicker">16 DISTRICTS</span><h2>지역별 철거 정보</h2></div>
          <p>각 지역 페이지에서 주요 동네, 현장 특성, 추천 서비스와 폐업지원 정보를 함께 확인할 수 있습니다.</p>
        </div>
        <div className="service-grid">
          {Object.entries(regions).map(([slug, region], i) => (
            <a className="service-card" href={`/busan/${slug}`} key={slug}>
              <div className="service-card-top"><span className="service-card-icon">{["⌂","◇","▦","↗"][i%4]}</span><span className="service-card-arrow">↗</span></div>
              <strong>{region.primary}</strong>
              <span>{region.summary}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <div><span className="section-kicker">LOCAL ESTIMATE</span><h2>지역별 현장 조건까지<br/>같이 확인하세요</h2><p>같은 평수라도 층수, 엘리베이터, 골목 진입, 폐기물 반출조건에 따라 작업방식이 달라질 수 있습니다.</p></div>
        <a className="btn btn-light" href="/estimate"><span className="btn-icon">✦</span>무료 현장견적</a>
      </section>
    </main>
  );
}
