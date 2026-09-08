import { services } from "@/data/services";

const inquiryUrl = "https://maxpool.olbarun.kr/";

export const metadata = {
  title: "부산 업종별 철거 서비스",
  description: "상가·식당·카페·편의점·노래방·사무실·공장 등 부산 업종별 철거와 원상복구 정보를 확인하세요.",
  keywords: ["부산 철거", "부산 철거업체", "부산 상가철거", "부산 원상복구", "업종별 철거"],
  alternates: { canonical: "/service" },
  openGraph: {
    title: "부산 업종별 철거 서비스",
    description: "상가·식당·카페·사무실·공장 등 업종별 철거범위와 원상복구 기준을 확인하세요.",
    url: "/service",
    type: "website"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "부산 업종별 철거 서비스",
  itemListElement: Object.entries(services).map(([slug, item], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.primary,
    url: `https://busanall.vercel.app/service/${slug}`
  }))
};

export default function Page() {
  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <header className="list-hero">
        <div className="eyebrow-chip">SERVICE DIRECTORY</div>
        <h1>업종에 따라 달라지는<br/><span className="gradient-text">철거 범위와 원상복구</span></h1>
        <p>평수만으로 철거를 판단하기보다 업종별 설비, 마감, 폐기물, 반출 조건과 임대차 원상복구 범위를 함께 확인하세요.</p>
        <div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지</a></div>
      </header>

      <section className="section">
        <div className="section-heading">
          <div><span className="section-kicker">ALL SERVICES</span><h2>업종별 철거 서비스</h2></div>
          <p>각 페이지에서 철거 전 확인사항, 견적에 영향을 주는 항목, 작업 순서와 폐업지원 정보를 확인할 수 있습니다.</p>
        </div>
        <div className="service-grid">
          {Object.entries(services).map(([slug, item], i) => (
            <a key={slug} className="service-card" href={`/service/${slug}`}>
              <div className="service-card-top">
                <span className="service-card-icon">{String(i + 1).padStart(2, "0")}</span>
                <span className="service-card-arrow">↗</span>
              </div>
              <strong>{item.primary}</strong>
              <span>{item.summary}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div><span className="section-kicker">FIELD ESTIMATE</span><h2>어떤 항목을 철거해야 할지<br/>애매하다면 현장에서 확인하세요.</h2><p>업종과 면적, 층수, 설비, 반출동선, 원상복구 조건을 함께 확인하면 견적 범위를 더 구체적으로 정리할 수 있습니다.</p></div>
        <a className="btn btn-light" href={inquiryUrl}>무료 현장견적 문의</a>
      </section>
    </main>
  );
}
