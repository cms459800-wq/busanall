type ClosureSupportProps = {
  serviceName?: string;
};

function SupportIcon({ type }: { type: "document" | "area" | "limit" | "notice" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  if (type === "document") {
    return <svg {...common}><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v5h4M9 12h6M9 16h6"/></svg>;
  }
  if (type === "area") {
    return <svg {...common}><path d="M4 20V8h7v12M13 20V4h7v16"/><path d="M7 11h1M7 14h1M16 8h1M16 11h1M16 14h1"/></svg>;
  }
  if (type === "limit") {
    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M8 9.5h8M8 14.5h8M10 7v10M14 7v10"/></svg>;
  }
  return <svg {...common}><path d="M12 3l9 17H3z"/><path d="M12 9v5M12 17h.01"/></svg>;
}

export default function ClosureSupport({ serviceName = "철거" }: ClosureSupportProps) {
  return (
    <section className="support-box section reveal closure-support">
      <style>{`
        .closure-support .support-heading{display:flex;align-items:flex-start;gap:14px;margin-bottom:8px}
        .closure-support .support-heading-icon{width:48px;height:48px;border-radius:15px;display:grid;place-items:center;background:#edf9f2;border:1px solid #d2efde;color:#18794e;flex:0 0 auto}
        .closure-support .support-heading-icon svg{width:25px;height:25px}
        .closure-support .support-stats>div{position:relative;padding-left:58px}
        .closure-support .support-stat-icon{position:absolute;left:16px;top:50%;transform:translateY(-50%);width:32px;height:32px;border-radius:10px;display:grid;place-items:center}
        .closure-support .support-stat-icon svg{width:18px;height:18px}
        .closure-support .support-stat-icon.area{background:#eef4ff;border:1px solid #d8e5ff;color:#2458d8}
        .closure-support .support-stat-icon.limit{background:#fff4e8;border:1px solid #f7ddbd;color:#a9570a}
        .closure-support .support-note{display:flex;gap:10px;align-items:flex-start;margin-top:18px;padding:13px 14px;border-radius:13px;background:#fff8df;border:1px solid #f2e3a8;color:#6f5608}
        .closure-support .support-note-icon{width:28px;height:28px;border-radius:9px;display:grid;place-items:center;background:#fff1b8;color:#8b6508;flex:0 0 auto;margin-top:1px}
        .closure-support .support-note-icon svg{width:17px;height:17px}
        .closure-support .support-note p{margin:0;color:inherit}
        @media(max-width:760px){.closure-support .support-heading-icon{width:43px;height:43px}.closure-support .support-heading-icon svg{width:22px;height:22px}}
      `}</style>
      <div className="eyebrow-chip"><span>●</span> 2026 폐업지원 안내</div>
      <div className="support-heading">
        <span className="support-heading-icon"><SupportIcon type="document" /></span>
        <div><h2>{serviceName} 전 점포철거비 지원 대상 여부를 확인하세요</h2></div>
      </div>
      <p>
        폐업을 준비하는 소상공인은 희망리턴패키지 원스톱폐업지원의 점포철거비 지원 대상이 될 수 있습니다.
        공사 전에 신청자격, 인정면적, 증빙 가능한 비용과 최신 공고기간을 먼저 확인하는 것이 좋습니다.
      </p>
      <div className="support-stats">
        <div>
          <span className="support-stat-icon area"><SupportIcon type="area" /></span>
          <span>지원 기준</span><strong>전용면적 3.3㎡당 20만원 한도</strong>
        </div>
        <div>
          <span className="support-stat-icon limit"><SupportIcon type="limit" /></span>
          <span>최대 한도</span><strong>최대 600만원</strong>
        </div>
      </div>
      <div className="support-note">
        <span className="support-note-icon"><SupportIcon type="notice" /></span>
        <p>
          실제 지원 여부와 지급액은 신청자격, 인정면적, 증빙 가능한 철거·원상복구 비용, 폐업일 및 최신 공고 기준에 따라 달라질 수 있습니다.
          예산 소진 시 조기 종료될 수 있으므로 계약 또는 공사 전에 공식 공고를 확인하세요.
        </p>
      </div>
      <div className="cta-row">
        <a className="btn btn-primary" href="/support">폐업지원 안내 보기</a>
        <a className="btn btn-glass" href="https://www.sbiz24.kr/" target="_blank" rel="noreferrer">소상공인24 최신 공고 ↗</a>
      </div>
    </section>
  );
}
