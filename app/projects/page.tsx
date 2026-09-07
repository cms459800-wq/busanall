export const metadata = { title: "부산 철거 시공사례" };

export default function Page() {
  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">● PROJECTS</div>
        <h1>부산 철거<br/><span className="gradient-text">시공사례</span></h1>
        <p>실제 현장이 생길 때마다 지역·업종·철거범위가 명확히 드러나는 고유 시공사례 URL을 추가합니다.</p>
      </header>
      <section className="info-card">
        <h2>시공사례 등록 영역</h2>
        <p>전·중·후 사진, 현장 위치, 업종, 면적, 작업범위, 반출 조건, 원상복구 포인트와 비용에 영향을 준 요소를 함께 기록할 예정입니다.</p>
      </section>
    </main>
  );
}
