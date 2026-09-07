import { guides } from "@/data/guides";

export const metadata = {
  title: "부산 철거·폐업 가이드 | 올바른철거",
  description: "부산 철거비용, 원상복구, 폐업지원금과 업종별 폐업철거를 실제 의사결정에 도움이 되도록 정리한 올바른철거 가이드입니다."
};

export default function GuidePage() {
  const featured = guides.slice(0, 3);
  const rest = guides.slice(3);

  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">DEMOLITION GUIDE</div>
        <h1>철거 전에 알아두면 좋은<br/><span className="gradient-text">비용·원상복구·폐업 정보</span></h1>
        <p>광고성 문구보다 실제 폐업과 철거 과정에서 먼저 확인해야 할 내용을 중심으로 정리합니다. 지원제도는 공사 전 최신 공식 공고를 함께 확인하세요.</p>
      </header>

      <section className="section">
        <div className="section-heading">
          <div><span className="section-kicker">START HERE</span><h2>먼저 보면 좋은 핵심 가이드</h2></div>
          <p>견적 비교, 원상복구 범위, 폐업지원처럼 대부분의 현장에서 공통으로 먼저 확인하면 좋은 내용입니다.</p>
        </div>
        <div className="home-grid">
          {featured.map((guide) => (
            <a className="home-link-card" href={`/guide/${guide.slug}`} key={guide.slug}>
              <span className="arrow">↗</span>
              <small>{guide.category}</small>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="section-kicker">ALL GUIDES</span><h2>업종별·상황별 철거 가이드</h2></div>
          <p>식당, 카페, 사무실, 공장, 주택 등 현장 유형별로 체크해야 할 설비와 작업 범위를 확인하세요.</p>
        </div>
        <div className="service-grid">
          {rest.map((guide) => (
            <a className="service-card" href={`/guide/${guide.slug}`} key={guide.slug}>
              <div className="service-card-top"><span className="service-card-icon">✓</span><span className="service-card-arrow">↗</span></div>
              <small className="section-kicker">{guide.category}</small>
              <strong style={{marginTop:"8px"}}>{guide.title}</strong>
              <span>{guide.description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div><span className="section-kicker">FIELD CHECK</span><h2>가이드로 범위를 확인한 뒤<br/>내 현장 조건을 비교해보세요.</h2><p>같은 업종이라도 설비, 마감, 층수, 반출조건과 임대차 원상복구 범위에 따라 실제 작업 내용은 달라질 수 있습니다.</p></div>
        <a className="btn btn-light" href="/estimate">무료 현장견적</a>
      </section>
    </main>
  );
}
