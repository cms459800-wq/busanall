export default function Home() {
  return (
    <main className="page-shell">
      <section className="home-hero">
        <div>
          <div className="eyebrow-chip">● BUSAN DEMOLITION</div>
          <h1>부산철거,<br/><span className="gradient-text">정보부터 올바르게</span></h1>
          <p>업종별 철거 포인트, 원상복구 체크, 폐업지원금과 실제 시공사례까지 한 곳에서 확인하세요.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/service">▦ 업종별 서비스 보기</a>
            <a className="btn btn-glass" href="/estimate">✦ 무료 현장견적</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card">
            <strong>올바른철거</strong>
            <p>부산 지역의 상가·식당·카페·편의점·노래방·키즈카페·사무실·공장·주택 등 업종별 철거 정보를 제공합니다.</p>
            <p>각 페이지는 업종 특성에 맞는 고유 정보와 이미지 슬롯, 폐업지원 안내를 포함합니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
