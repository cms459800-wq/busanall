import { notFound } from "next/navigation";
import { regions, type RegionSlug } from "@/data/regions";
import { services, type ServiceSlug } from "@/data/services";

const baseUrl = "https://busanall.vercel.app";

export function generateStaticParams() {
  return Object.keys(regions).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = regions[slug as RegionSlug];
  if (!region) return {};
  return {
    title: `${region.primary}·원상복구`,
    description: region.summary,
    alternates: { canonical: `/busan/${slug}` }
  };
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = regions[slug as RegionSlug];
  if (!region) notFound();

  const validServices = region.services
    .map((serviceSlug) => ({ serviceSlug, item: services[serviceSlug as ServiceSlug] }))
    .filter((entry) => Boolean(entry.item));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "부산지역", item: `${baseUrl}/busan` },
        { "@type": "ListItem", position: 3, name: region.name, item: `${baseUrl}/busan/${slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: region.primary,
      description: region.summary,
      serviceType: "철거·원상복구",
      areaServed: { "@type": "AdministrativeArea", name: `부산광역시 ${region.name}` },
      provider: { "@type": "Organization", name: "올바른철거", url: baseUrl },
      url: `${baseUrl}/busan/${slug}`
    }
  ];

  return (
    <main className="page-shell">
      {structuredData.map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}

      <nav className="breadcrumb" aria-label="breadcrumb"><a href="/">홈</a><span>›</span><a href="/busan">부산지역</a><span>›</span><strong>{region.name}</strong></nav>

      <header className="list-hero">
        <div className="eyebrow-chip">● 부산 지역별 철거</div>
        <h1>{region.primary}<br/><span className="gradient-text">현장 조건 가이드</span></h1>
        <p>{region.summary}</p>
        <div className="hero-points">{region.neighborhoods.map((n) => <span key={n}>{n}</span>)}</div>
        <div className="cta-row"><a className="btn btn-primary" href="/estimate">무료 현장견적</a><a className="btn btn-glass" href="/support">폐업지원금 확인</a></div>
      </header>

      <section className="split">
        <article className="info-card"><span className="section-kicker">ACCESS</span><h2>반출 동선과 차량 접근</h2><p>골목 폭, 주차 위치, 엘리베이터 사용 가능 여부와 폐기물 상차 위치에 따라 작업 방식과 인력이 달라질 수 있습니다.</p></article>
        <article className="info-card"><span className="section-kicker">BUILDING RULE</span><h2>건물 관리규정 확인</h2><p>작업 가능 시간, 공용부 보양, 엘리베이터 사용조건과 소음·분진 관리 기준을 공사 전에 확인하는 것이 좋습니다.</p></article>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">LOCAL POINTS</span><h2>{region.name} 철거에서 중요한 점</h2></div><p>지역명을 반복하기보다 실제 작업에 영향을 주는 현장 요소를 정리했습니다.</p></div>
        <div className="feature-grid">{region.points.map((point, i) => <article className="feature-card" key={point}><div className="feature-no">0{i+1}</div><p>{point}</p></article>)}</div>
      </section>

      <section className="section soft-section">
        <div className="section-heading">
          <div><span className="section-kicker">NEIGHBORHOOD CHECK</span><h2>{region.neighborhoods.slice(0, 3).join(" · ")} 등 현장별 확인사항</h2></div>
          <p>같은 {region.name} 안에서도 건물 연식, 도로 폭, 주차와 승강기 조건은 현장마다 다릅니다. 동네명만으로 비용을 정하기보다 실제 반출 조건을 함께 확인하세요.</p>
        </div>
        <div className="link-cloud" aria-label={`${region.name} 주요 동네`}>
          {region.neighborhoods.map((name) => <span className="info-chip" key={name}>{name} 현장</span>)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">RELATED SERVICES</span><h2>{region.name}에서 함께 확인할 업종별 철거</h2></div><p>지역 조건과 업종별 설비 조건을 함께 확인하면 철거 범위와 원상복구 항목을 더 구체적으로 정리할 수 있습니다.</p></div>
        <div className="service-grid">{validServices.map(({ serviceSlug, item }) => (
          <a className="service-card" href={`/service/${serviceSlug}`} key={serviceSlug}>
            <div className="service-card-top"><span className="service-card-icon">{item.name.slice(0,1)}</span><span className="service-card-arrow">↗</span></div>
            <strong>{region.name} {item.name}</strong>
            <span>{item.summary}</span>
          </a>
        ))}</div>
        <div className="cta-row"><a className="btn btn-glass" href="/service">전체 업종별 철거서비스 보기</a></div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">FIELD IMAGES</span><h2>{region.name} 현장 사진 영역</h2></div><p>실제 시공이 생기면 지역별 전·중·후 사진을 채워 현장성을 높입니다.</p></div>
        <div className="image-grid">{[1,2,3,4].map((n)=><figure className="image-slot" key={n}><div className="placeholder"><strong>지역 현장 이미지 {n}</strong><span>/public/images/regions/{slug}/{String(n).padStart(2,"0")}.webp</span></div><figcaption>{region.primary} 현장 이미지 {n}</figcaption></figure>)}</div>
      </section>

      <section className="support-box section">
        <span className="section-kicker">2026 CLOSURE SUPPORT</span>
        <h2>{region.name} 폐업철거라면 지원 대상 여부도 확인하세요</h2>
        <p>폐업 예정 소상공인은 점포철거비 지원 대상이 될 수 있습니다. 신청자격, 인정면적, 증빙서류와 최신 공고기간을 공사 전에 확인하세요.</p>
        <div className="cta-row"><a className="btn btn-primary" href="/support">폐업지원 안내</a><a className="btn btn-glass" href="/guide/closure-demolition-support-2026">신청 전 체크사항</a></div>
      </section>

      <section className="section"><div className="section-heading"><div><span className="section-kicker">GUIDE LINKS</span><h2>함께 보면 좋은 철거 가이드</h2></div></div><div className="cta-row"><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">견적서 체크리스트</a><a className="btn btn-glass" href="/guide/restoration-scope-checklist">원상복구 범위</a><a className="btn btn-glass" href="/guide/demolition-waste-guide">폐기물 반출</a><a className="btn btn-glass" href="/guide">전체 철거가이드</a></div></section>

      <section className="final-cta"><div><span className="section-kicker">LOCAL ESTIMATE</span><h2>{region.name} 철거,<br/>현장 조건부터 확인하세요</h2><p>업종, 평수, 층수, 반출동선과 원상복구 범위를 함께 정리하면 견적 비교가 쉬워집니다.</p></div><a className="btn btn-light" href="/estimate">무료 현장견적</a></section>
    </main>
  );
}
