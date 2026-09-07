export const metadata = { title: "무료 현장견적 요청" };

export default function Page() {
  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">● FREE ESTIMATE</div>
        <h1>무료 현장견적<br/><span className="gradient-text">빠르게 문의하세요</span></h1>
        <p>현장주소, 업종, 평수, 철거범위와 사진을 전달하면 보다 정확한 상담이 가능합니다.</p>
      </header>
      <section className="info-card">
        <h2>견적 폼 연결 영역</h2>
        <p>전화·카카오톡·폼 서비스 또는 자체 API를 연결할 수 있도록 준비된 영역입니다.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="tel:0000000000">☎ 전화 상담 연결 예정</a>
          <a className="btn btn-glass" href="#">▣ 카카오톡 연결 예정</a>
        </div>
      </section>
    </main>
  );
}
