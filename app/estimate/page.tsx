export const metadata = {
  title: "무료 현장견적 요청",
  description: "부산 철거·원상복구 현장견적을 준비할 때 필요한 정보를 안내합니다."
};

const prepare = [
  { title:"현장 위치", text:"부산 지역과 건물명 또는 도로명, 층수를 알려주세요." },
  { title:"업종과 면적", text:"식당·카페·사무실 등 업종과 대략적인 전용면적을 알려주세요." },
  { title:"철거 범위", text:"천장·벽체·바닥·주방·간판·설비 중 철거해야 하는 항목을 정리해 주세요." },
  { title:"현장 사진", text:"전체 공간, 주요 설비, 출입구와 반출동선 사진이 있으면 1차 판단에 도움이 됩니다." }
];

export default function Page() {
  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">FREE FIELD ESTIMATE</div>
        <h1>현장견적 전에<br/><span className="gradient-text">이 정보부터 준비하세요</span></h1>
        <p>주소와 평수만으로는 실제 철거범위를 판단하기 어렵습니다. 업종, 설비, 반출조건과 원상복구 요구사항을 함께 정리하면 상담과 견적 비교가 훨씬 쉬워집니다.</p>
      </header>

      <section className="section">
        <div className="section-heading">
          <div><span className="section-kicker">ESTIMATE CHECK</span><h2>견적 상담 전 준비할 4가지</h2></div>
          <p>전화번호나 카카오톡 채널이 확정되기 전까지는 잘못된 연락처를 노출하지 않고, 상담에 필요한 정보부터 안내합니다.</p>
        </div>
        <div className="feature-grid">
          {prepare.map((item, i) => (
            <article className="feature-card" key={item.title}>
              <div className="feature-no">0{i + 1}</div>
              <div className="feature-icon">✓</div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split section">
        <article className="info-card">
          <h2>사진으로 먼저 확인하기 좋은 항목</h2>
          <ul>
            <li>매장 전체가 보이는 전경</li>
            <li>천장·벽체·바닥 마감 상태</li>
            <li>주방·덕트·냉난방·전기 등 주요 설비</li>
            <li>출입구·계단·엘리베이터와 차량 접근 위치</li>
          </ul>
        </article>
        <article className="info-card">
          <h2>현장 방문이 더 정확한 경우</h2>
          <ul>
            <li>노래방·병원·공장처럼 설비가 복잡한 현장</li>
            <li>원상복구 범위가 임대인과 아직 정리되지 않은 현장</li>
            <li>고층·골목·주차 제한 등 반출조건이 까다로운 현장</li>
            <li>부분철거로 남길 시설과 철거할 시설이 섞여 있는 현장</li>
          </ul>
        </article>
      </section>

      <section className="support-box home-section">
        <span className="section-kicker">BEFORE CONTACT</span>
        <h2>폐업 예정이라면 지원 대상 여부도<br/>공사 전에 함께 확인하세요.</h2>
        <p>점포철거비 지원을 검토하는 경우 신청자격, 인정비용, 증빙과 공사 순서를 최신 공식 공고 기준으로 먼저 확인하는 것이 좋습니다.</p>
        <div className="cta-row"><a className="btn btn-primary" href="/support">폐업지원 안내</a><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">견적 체크리스트</a></div>
      </section>
    </main>
  );
}
