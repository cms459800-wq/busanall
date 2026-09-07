export const metadata = {
  title: "2026 폐업지원금·점포철거비 지원",
  description: "2026 희망리턴패키지 원스톱폐업지원의 점포철거비 지원 내용을 정리합니다."
};

export default function Page() {
  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">● CLOSURE SUPPORT</div>
        <h1>2026 폐업지원금<br/><span className="gradient-text">점포철거비 지원</span></h1>
        <p>폐업 예정 소상공인이 철거 전에 확인해야 할 지원 기준과 신청 시 주의사항을 정리합니다.</p>
      </header>
      <section className="support-box">
        <h2>점포 철거·원상복구 비용 지원</h2>
        <div className="support-stats">
          <div><span>지원 기준</span><strong>전용면적 3.3㎡당 20만원 한도</strong></div>
          <div><span>최대 한도</span><strong>최대 600만원</strong></div>
        </div>
        <p>실제 지원 여부와 지급액은 신청자격, 인정면적, 증빙 가능한 비용, 폐업일 및 최신 공고 기준에 따라 달라질 수 있습니다. 예산 소진 시 조기 종료될 수 있습니다.</p>
        <h3>기본 확인사항</h3>
        <ul>
          <li>폐업(예정) 소상공인 중 공고 요건 충족 여부</li>
          <li>사업 운영기간 및 유상 임차 사업장 여부</li>
          <li>임대차계약서와 철거비 증빙 가능 여부</li>
          <li>지원 제외 업종 및 기타 제외요건 확인</li>
        </ul>
        <p>정책은 변경될 수 있으므로 계약 또는 철거공사 전에 공식 공고를 다시 확인하세요.</p>
        <a className="btn btn-primary" href="https://www.sbiz24.kr/" target="_blank" rel="noreferrer">↗ 소상공인24 최신 공고 확인</a>
      </section>
    </main>
  );
}
