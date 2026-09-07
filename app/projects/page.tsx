export const metadata = {
  title: "부산 철거 시공사례",
  description: "부산 철거 시공사례를 지역, 업종, 작업범위와 실제 전·중·후 사진 기준으로 기록하는 페이지입니다.",
  alternates: { canonical: "/projects" }
};

export default function Page() {
  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">● PROJECTS</div>
        <h1>부산 철거<br/><span className="gradient-text">시공사례</span></h1>
        <p>실제 작업 현장이 확보되는 대로 지역, 업종, 작업범위와 전·중·후 사진을 함께 기록합니다. 임의의 사례나 수치는 사용하지 않습니다.</p>
      </header>

      <section className="split">
        <article className="info-card"><span className="section-kicker">WHAT WE RECORD</span><h2>사례마다 기록할 정보</h2><ul><li>부산 구·군 및 현장 위치 범위</li><li>업종과 면적</li><li>철거·보존·원상복구 범위</li><li>층수, 엘리베이터와 반출조건</li><li>작업 전·중·후 사진</li></ul></article>
        <article className="info-card"><span className="section-kicker">WHY IT MATTERS</span><h2>사진만 나열하지 않습니다</h2><p>어떤 조건 때문에 작업방식과 비용이 달라졌는지 함께 설명해 비슷한 현장을 준비하는 사람이 참고할 수 있는 사례로 구성합니다.</p></article>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">COMING WITH REAL DATA</span><h2>실제 시공사례 준비 중</h2></div><p>실제 현장 정보가 생길 때마다 고유 URL로 추가해 서비스·지역·가이드 페이지와 연결합니다.</p></div>
        <div className="image-grid">{[1,2,3,4].map((n) => <figure className="image-slot" key={n}><div className="placeholder"><strong>실제 현장 사례 {n}</strong><span>사진과 작업정보 확보 후 공개</span></div></figure>)}</div>
      </section>

      <section className="final-cta"><div><span className="section-kicker">FIELD ESTIMATE</span><h2>사례보다 내 현장 조건이 더 중요합니다</h2><p>업종, 면적, 철거범위와 사진을 정리하면 비슷한 사례가 없어도 상담 기준을 잡을 수 있습니다.</p></div><a className="btn btn-light" href="/estimate">무료 현장견적</a></section>
    </main>
  );
}
