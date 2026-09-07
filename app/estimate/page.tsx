export const metadata = {
  title: "무료 현장견적 요청",
  description: "부산 철거·원상복구 현장견적을 준비할 때 필요한 업종, 면적, 층수, 엘리베이터, 철거범위, 일정과 현장사진 정보를 안내합니다.",
  alternates: { canonical: "/estimate" }
};

const prepare = [
  { title:"현장 위치", text:"부산 어느 지역인지와 건물명 또는 도로명, 층수를 정리해 주세요." },
  { title:"업종과 면적", text:"식당·카페·사무실 등 현재 업종과 대략적인 전용면적을 알려주세요." },
  { title:"층수·엘리베이터", text:"작업층과 승강기 유무, 계단 폭, 차량이 가까이 접근할 수 있는지 확인해 주세요." },
  { title:"철거 범위", text:"천장·벽체·바닥·주방·간판·설비 중 철거할 항목과 남길 항목을 나눠 주세요." },
  { title:"희망 일정", text:"폐업일, 임대차 종료일 또는 공사를 마쳐야 하는 날짜가 있다면 함께 정리해 주세요." },
  { title:"현장 사진", text:"전체 공간, 주요 설비, 출입구와 반출동선 사진이 있으면 1차 범위를 파악하기 쉽습니다." }
];

const flow = [
  { label:"01", title:"범위 정리", text:"철거할 것과 남길 것을 먼저 구분합니다." },
  { label:"02", title:"현장조건 확인", text:"층수, 승강기, 차량 접근과 작업시간을 확인합니다." },
  { label:"03", title:"사진 준비", text:"전경과 주요 설비, 반출동선을 순서대로 촬영합니다." },
  { label:"04", title:"견적 비교", text:"총액보다 포함 범위와 추가 가능 항목을 함께 비교합니다." }
];

export default function Page() {
  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">FREE FIELD ESTIMATE</div>
        <h1>무료 현장견적,<br/><span className="gradient-text">6가지만 준비하면 빨라집니다</span></h1>
        <p>주소와 평수만으로는 실제 철거범위를 판단하기 어렵습니다. 업종, 층수와 반출조건, 철거·보존 항목, 일정과 사진까지 함께 정리하면 상담 단계에서 빠르게 범위를 좁힐 수 있습니다.</p>
        <div className="cta-row"><a className="btn btn-primary" href="#estimate-check">견적 준비사항 보기</a><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">견적 체크리스트</a></div>
      </header>

      <section className="section soft-section" id="estimate-check">
        <div className="section-heading">
          <div><span className="section-kicker">ESTIMATE CHECK</span><h2>견적 상담 전 준비할 6가지</h2></div>
          <p>정확한 숫자를 몰라도 괜찮습니다. 확인 가능한 내용부터 준비하면 현장 방문이 필요한지와 먼저 볼 항목을 빠르게 판단할 수 있습니다.</p>
        </div>
        <div className="feature-grid">
          {prepare.map((item, i) => (
            <article className="feature-card" key={item.title}>
              <div className="feature-no">{String(i + 1).padStart(2,"0")}</div>
              <div className="feature-icon">✓</div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">QUICK FLOW</span><h2>견적은 이 순서로 준비하세요</h2></div><p>현장정보를 한 번에 완벽하게 준비하기보다, 범위와 반출조건부터 순서대로 정리하는 편이 효율적입니다.</p></div>
        <div className="process-grid">{flow.map((step)=><article className="process-step" key={step.label}><b>{step.label}</b><strong>{step.title}</strong><p>{step.text}</p></article>)}</div>
      </section>

      <section className="split section">
        <article className="info-card">
          <span className="section-kicker">PHOTO CHECK</span>
          <h2>사진으로 먼저 확인하기 좋은 항목</h2>
          <ul>
            <li>매장 전체가 보이는 전경</li>
            <li>천장·벽체·바닥 마감 상태</li>
            <li>주방·덕트·냉난방·전기 등 주요 설비</li>
            <li>철거하지 않고 남길 시설과 집기</li>
            <li>출입구·계단·엘리베이터와 차량 접근 위치</li>
          </ul>
        </article>
        <article className="info-card">
          <span className="section-kicker">VISIT CHECK</span>
          <h2>현장 방문이 더 정확한 경우</h2>
          <ul>
            <li>노래방·병원·공장처럼 설비가 복잡한 현장</li>
            <li>원상복구 범위가 임대인과 아직 정리되지 않은 현장</li>
            <li>고층·골목·주차 제한 등 반출조건이 까다로운 현장</li>
            <li>부분철거로 남길 시설과 철거할 시설이 섞여 있는 현장</li>
            <li>덕트·배관·전기처럼 벽·천장 안쪽 범위를 확인해야 하는 현장</li>
          </ul>
        </article>
      </section>

      <section className="section soft-section">
        <div className="section-heading"><div><span className="section-kicker">SCOPE FIRST</span><h2>총액보다 먼저 비교할 항목</h2></div><p>견적 금액이 비슷해도 포함된 작업범위가 다르면 공사 후 추가비용이나 재작업 가능성이 달라질 수 있습니다.</p></div>
        <div className="detail-list-grid">
          {["천장·벽·바닥 철거범위","설비·덕트·배관 차단범위","폐기물 운반·처리 포함 여부","공용부·승강기 보양","간판·외부시설 철거 여부","원상복구 마감 수준","야간·주말 작업 조건","추가 작업 발생 기준"].map((text,i)=><article className="detail-list-card" key={text}><b>{String(i+1).padStart(2,"0")}</b><span>{text}</span></article>)}
        </div>
      </section>

      <section className="support-box home-section">
        <span className="section-kicker">BEFORE CONTACT</span>
        <h2>폐업 예정이라면 지원 대상 여부도<br/>공사 전에 함께 확인하세요.</h2>
        <p>점포철거비 지원을 검토하는 경우 신청자격, 인정비용, 증빙과 공사 순서를 최신 공식 공고 기준으로 먼저 확인하는 것이 좋습니다. 지원 여부와 실제 지급액은 자격과 인정비용 등 기준에 따라 달라질 수 있습니다.</p>
        <div className="cta-row"><a className="btn btn-primary" href="/support">2026 폐업지원 안내</a><a className="btn btn-glass" href="/guide/restoration-scope-checklist">원상복구 범위 확인</a></div>
      </section>

      <section className="final-cta"><div><span className="section-kicker">READY TO QUOTE</span><h2>현장정보를 정리했다면<br/>견적 준비는 거의 끝났습니다.</h2><p>업종·면적·층수·승강기·철거범위·일정과 사진을 한 번에 준비해 두면 실제 상담 연결 시 필요한 정보를 빠르게 전달할 수 있습니다.</p></div><a className="btn btn-light" href="/service">업종별 철거범위 확인</a></section>
    </main>
  );
}
