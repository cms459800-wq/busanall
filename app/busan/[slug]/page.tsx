import { notFound } from "next/navigation";
import { regions, type RegionSlug } from "@/data/regions";
import { services } from "@/data/services";

export function generateStaticParams() {
  return Object.keys(regions).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = regions[slug as RegionSlug];
  if (!region) return {};
  return {
    title: `${region.primary}·원상복구 | 올바른철거`,
    description: region.summary
  };
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = regions[slug as RegionSlug];
  if (!region) notFound();

  return (
    <main className="page-shell">
      <nav className="breadcrumb" aria-label="breadcrumb"><a href="/">홈</a><span>›</span><a href="/busan">부산지역</a><span>›</span><strong>{region.name}</strong></nav>

      <header className="hero reveal">
        <div className="hero-copy">
          <div className="eyebrow-chip"><span>●</span> 부산 지역별 철거 가이드</div>
          <h1>{region.primary}<br/><span className="gradient-text">현장 조건부터 확인</span></h1>
          <p className="hero-lead">{region.summary}</p>
          <div className="hero-points">
            {region.neighborhoods.map((n) => <span key={n}><span className="mini-icon">✓</span>{n}</span>)}
          </div>
          <div className="cta-row"><a className="btn btn-primary" href="/estimate"><span className="btn-icon">↗</span>무료 현장견적</a><a className="btn btn-glass" href="/support"><span className="btn-icon">₩</span>폐업지원금 확인</a></div>
        </div>
        <aside className="hero-panel"><div className="hero-card"><div className="hero-card-icon">⌂</div><strong>{region.name} 현장 체크</strong><p>건물 층수, 엘리베이터, 골목·주차, 폐기물 상차 위치와 원상복구 범위를 함께 확인합니다.</p></div></aside>
      </header>

      <section className="section reveal">
        <div className="section-heading"><div><span className="section-kicker">LOCAL POINTS</span><h2>{region.name} 철거에서 중요한 점</h2></div><p>지역명을 반복하는 대신 실제 작업에 영향을 주는 현장 요소를 중심으로 정리했습니다.</p></div>
        <div className="feature-grid">{region.points.map((point, i) => <article className="feature-card" key={point}><div className="feature-no">0{i+1}</div><div className="feature-icon">{["⌁","◇","↗"][i%3]}</div><p>{point}</p></article>)}</div>
      </section>

      <section className="section reveal">
        <div className="section-heading"><div><span className="section-kicker">FIELD IMAGES</span><h2>{region.name} 현장 이미지</h2></div><p>실제 작업이 생길 때 지역 전용 전·중·후 사진을 넣을 수 있도록 4개 슬롯을 확보했습니다.</p></div>
        <div className="image-grid">{[1,2,3,4].map((n)=><figure className="image-slot" key={n}><div className="placeholder"><div className="placeholder-icon">◫</div><strong>지역 현장 이미지 {n}</strong><span>/public/images/regions/{slug}/{String(n).padStart(2,"0")}.webp</span></div><figcaption>{region.primary} 현장 이미지 {n}</figcaption></figure>)}</div>
      </section>

      <section className="section reveal">
        <div className="section-heading"><div><span className="section-kicker">RELATED SERVICES</span><h2>{region.name}에서 많이 확인할 서비스</h2></div></div>
        <div className="service-grid">{region.services.map((serviceSlug) => { const item = services[serviceSlug]; return <a className="service-card" href={`/service/${serviceSlug}`} key={serviceSlug}><div className="service-card-top"><span className="service-card-icon">▦</span><span className="service-card-arrow">↗</span></div><strong>{item.primary}</strong><span>{item.summary}</span></a>; })}</div>
      </section>

      <section className="support-box section reveal">
        <div className="eyebrow-chip"><span>●</span> 2026 폐업지원 안내</div>
        <h2>{region.name} 폐업철거라면 지원 대상 여부도 확인하세요</h2>
        <p>폐업 예정 소상공인은 점포철거비 지원 대상이 될 수 있습니다. 최대 한도만 보고 공사를 결정하지 말고, 신청자격·인정면적·증빙서류·공고기간을 먼저 확인하세요.</p>
        <a className="btn btn-primary" href="/support"><span className="btn-icon">₩</span>폐업지원금 안내 보기</a>
      </section>

      <section className="section reveal">
        <div className="section-heading"><div><span className="section-kicker">INTERNAL LINKS</span><h2>함께 보면 좋은 철거 가이드</h2></div></div>
        <div className="cta-row"><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">철거 견적서 체크리스트 ↗</a><a className="btn btn-glass" href="/guide/restoration-scope-checklist">원상복구 범위 확인 ↗</a><a className="btn btn-glass" href="/guide/closure-demolition-support-2026">폐업철거 지원금 ↗</a></div>
      </section>

      <section className="final-cta reveal"><div><span className="section-kicker">FIELD ESTIMATE</span><h2>{region.name} 철거,<br/>현장 조건부터 확인하세요</h2><p>지역과 업종, 층수, 반출동선, 설비와 원상복구 범위를 함께 확인해 견적을 구체화합니다.</p></div><a className="btn btn-light" href="/estimate"><span className="btn-icon">✦</span>무료 현장견적</a></section>
    </main>
  );
}
