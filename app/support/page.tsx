export const metadata = {
  title: "2026 폐업지원금·점포철거비 지원",
  description: "2026 희망리턴패키지 원스톱폐업지원의 점포철거비 지원 기준과 공사 전 확인사항을 정리합니다.",
  alternates: { canonical: "/support" }
};

const checks = [
  "폐업(예정) 소상공인 중 최신 공고 요건을 충족하는지",
  "사업 운영기간과 유상 임차 사업장 요건에 해당하는지",
  "임대차계약서와 철거·원상복구 비용 증빙이 가능한지",
  "지원 제외 업종·자가건물·기타 제외요건에 해당하지 않는지"
];

export default function Page() {
  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">2026 CLOSURE SUPPORT</div>
        <h1>폐업을 준비한다면<br/><span className="gradient-text">철거 전에 지원부터 확인</span></h1>
        <p>희망리턴패키지 점포철거비 지원은 신청자격과 인정범위, 증빙 조건이 있습니다. 최대 한도만 보기보다 공사 전에 최신 공고와 준비 순서를 먼저 확인하세요.</p>
      </header>

      <section className="support-box">
        <span className="section-kicker">SUPPORT SUMMARY</span>
        <h2>점포 철거·원상복구 비용 지원</h2>
        <div className="support-stats">
          <div><span>지원 기준</span><strong>전용면적 3.3㎡당 20만원 한도</strong></div>
          <div><span>최대 한도</span><strong>최대 600만원</strong></div>
        </div>
        <p>실제 지원 여부와 지급액은 신청자격, 인정면적, 증빙 가능한 철거·원상복구 비용, 폐업일 및 최신 공고 기준에 따라 달라질 수 있습니다. 예산 소진 시 조기 종료될 수 있습니다.</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="section-kicker">BEFORE DEMOLITION</span><h2>공사 전에 확인할 4가지</h2></div>
          <p>지원 대상 여부와 필요한 증빙을 공사 뒤에 확인하면 인정되지 않는 항목이 생길 수 있으므로 순서를 먼저 확인하는 것이 좋습니다.</p>
        </div>
        <div className="feature-grid">
          {checks.map((text, i) => (
            <article className="feature-card" key={text}>
              <div className="feature-no">0{i + 1}</div>
              <div className="feature-icon">✓</div>
              <h2>{["신청자격", "사업장 요건", "계약·증빙", "제외요건"][i]}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split section">
        <article className="info-card">
          <h2>권장 확인 순서</h2>
          <ol>
            <li>소상공인24 최신 공고 확인</li>
            <li>신청자격과 지원 제외요건 검토</li>
            <li>임대차계약서와 원상복구 범위 확인</li>
            <li>현장견적과 철거범위 정리</li>
            <li>신청·증빙 요건 확인 후 일정 확정</li>
          </ol>
        </article>
        <article className="info-card">
          <h2>지원금과 실제 철거비는 다릅니다</h2>
          <p>지원 한도는 실제 공사비를 의미하지 않습니다. 현장 비용은 업종, 설비, 폐기물량, 층수, 차량 접근성, 작업시간과 원상복구 범위에 따라 달라질 수 있습니다.</p>
          <div className="cta-row"><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">철거 견적 체크</a><a className="btn btn-glass" href="/guide/restoration-scope-checklist">원상복구 범위</a></div>
        </article>
      </section>

      <section className="final-cta">
        <div><span className="section-kicker">OFFICIAL NOTICE</span><h2>지원제도는 계약·철거 전에<br/>공식 공고를 다시 확인하세요.</h2><p>정책과 예산 상황에 따라 조건과 접수기간이 달라질 수 있습니다.</p></div>
        <a className="btn btn-light" href="https://www.sbiz24.kr/" target="_blank" rel="noreferrer">소상공인24 확인</a>
      </section>
    </main>
  );
}
