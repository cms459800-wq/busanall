import { guides } from "@/data/guides";

export const metadata = {
  title: "부산 철거·폐업 가이드 | 올바른철거",
  description: "부산 철거비용, 원상복구, 폐업지원금과 업종별 폐업철거를 실제 의사결정에 도움이 되도록 정리한 올바른철거 가이드입니다."
};

export default function GuidePage() {
  return (
    <main className="page-shell">
      <header className="list-hero reveal">
        <div className="eyebrow-chip"><span>●</span> DEMOLITION GUIDE</div>
        <h1>철거 전에 알아두면<br/><span className="gradient-text">비용과 시행착오를 줄이는 정보</span></h1>
        <p>광고성 문구보다 실제 폐업·철거 과정에서 먼저 확인해야 할 내용을 중심으로 정리합니다. 지원제도는 공사 전 최신 공식 공고를 함께 확인하세요.</p>
      </header>

      <section className="section">
        <div className="service-grid">
          {guides.map((guide) => (
            <a className="service-card reveal" href={`/guide/${guide.slug}`} key={guide.slug}>
              <div className="service-card-top">
                <span className="service-card-icon">◇</span>
                <span className="service-card-arrow">↗</span>
              </div>
              <small className="section-kicker">{guide.category}</small>
              <strong>{guide.title}</strong>
              <span>{guide.description}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
