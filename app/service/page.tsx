import { services } from "@/data/services";

export const metadata = {
  title: "부산 업종별 철거 서비스",
  description: "상가·식당·카페·편의점·노래방·키즈카페 등 부산 업종별 철거와 원상복구 정보를 확인하세요."
};

export default function Page() {
  return (
    <main className="page-shell">
      <header className="list-hero">
        <div className="eyebrow-chip">● SERVICE DIRECTORY</div>
        <h1>부산 업종별<br/><span className="gradient-text">철거 서비스</span></h1>
        <p>업종마다 설비와 원상복구 조건이 다르기 때문에 페이지마다 서로 다른 핵심 체크사항을 제공합니다.</p>
      </header>
      <div className="service-grid">
        {Object.entries(services).map(([slug, item], i) => (
          <a key={slug} className="service-card" href={`/service/${slug}`}>
            <div style={{fontSize:"1.4rem",marginBottom:"28px"}}>{["⌂","◇","▦","↗"][i%4]}</div>
            <strong>{item.primary}</strong>
            <span>{item.summary}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
