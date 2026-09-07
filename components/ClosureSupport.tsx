type ClosureSupportProps = {
  serviceName?: string;
};

export default function ClosureSupport({ serviceName = "철거" }: ClosureSupportProps) {
  return (
    <section className="support-box section reveal">
      <div className="eyebrow-chip"><span>●</span> 2026 폐업지원 안내</div>
      <h2>{serviceName} 전 점포철거비 지원 대상 여부를 확인하세요</h2>
      <p>
        폐업을 준비하는 소상공인은 희망리턴패키지 원스톱폐업지원의 점포철거비 지원 대상이 될 수 있습니다.
        공사 전에 신청자격, 인정면적, 증빙 가능한 비용과 최신 공고기간을 먼저 확인하는 것이 좋습니다.
      </p>
      <div className="support-stats">
        <div><span>지원 기준</span><strong>전용면적 3.3㎡당 20만원 한도</strong></div>
        <div><span>최대 한도</span><strong>최대 600만원</strong></div>
      </div>
      <p>
        실제 지원 여부와 지급액은 신청자격, 인정면적, 증빙 가능한 철거·원상복구 비용, 폐업일 및 최신 공고 기준에 따라 달라질 수 있습니다.
        예산 소진 시 조기 종료될 수 있으므로 계약 또는 공사 전에 공식 공고를 확인하세요.
      </p>
      <div className="cta-row">
        <a className="btn btn-primary" href="/support">폐업지원 안내 보기</a>
        <a className="btn btn-glass" href="https://www.sbiz24.kr/" target="_blank" rel="noreferrer">소상공인24 최신 공고 ↗</a>
      </div>
    </section>
  );
}
