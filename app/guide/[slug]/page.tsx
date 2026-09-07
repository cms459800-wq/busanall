import { notFound } from "next/navigation";
import { guides, guideBySlug } from "@/data/guides";
import ClosureSupport from "@/components/ClosureSupport";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | 올바른철거`,
    description: guide.description,
    keywords: guide.keywords
  };
}

export default async function GuideDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  return (
    <main className="page-shell">
      <nav className="breadcrumb" aria-label="breadcrumb">
        <a href="/">홈</a><span>›</span><a href="/guide">철거가이드</a><span>›</span><strong>{guide.category}</strong>
      </nav>

      <header className="hero reveal" style={{minHeight:"500px"}}>
        <div className="hero-copy">
          <div className="eyebrow-chip"><span>●</span> {guide.category}</div>
          <h1 style={{fontSize:"clamp(2.35rem,5vw,4.7rem)"}}>{guide.title}</h1>
          <p className="hero-lead">{guide.description}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/estimate"><span className="btn-icon">↗</span>무료 현장견적</a>
            <a className="btn btn-glass" href="/support"><span className="btn-icon">₩</span>지원금 확인</a>
          </div>
        </div>
        <aside className="hero-panel">
          <div className="hero-card">
            <div className="hero-card-icon">✓</div>
            <strong>읽기 전 체크</strong>
            <p>현장마다 계약조건과 철거범위가 다릅니다. 이 글은 판단 기준을 제공하며 실제 공사범위는 현장 확인이 필요합니다.</p>
          </div>
        </aside>
      </header>

      <section className="section reveal">
        <div className="section-heading"><div><span className="section-kicker">VISUAL GUIDE</span><h2>내용 이해를 돕는 이미지</h2></div><p>현장사진·체크리스트·절차 도식 등 이 글만의 이미지를 2~4장 배치할 자리입니다.</p></div>
        <div className="image-grid">
          {[1,2,3,4].map((n) => <figure className="image-slot" key={n}><div className="placeholder"><div className="placeholder-icon">◫</div><strong>가이드 이미지 {n}</strong><span>/public/images/guides/{guide.slug}/{String(n).padStart(2,"0")}.webp</span></div></figure>)}
        </div>
      </section>

      <section className="section reveal">
        <div className="feature-grid">
          {guide.sections.map((section, i) => (
            <article className="feature-card" key={section.title} style={{minHeight:"260px"}}>
              <div className="feature-no">0{i+1}</div>
              <div className="feature-icon">{["⌁","◇","↗","✓"][i % 4]}</div>
              <h2 style={{fontSize:"1.25rem"}}>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ClosureSupport serviceName={guide.category} />

      <section className="section reveal">
        <div className="section-heading"><div><span className="section-kicker">RELATED SERVICE</span><h2>관련 철거 서비스</h2></div></div>
        <div className="cta-row">
          {guide.relatedServices.map((slug) => <a className="btn btn-glass" href={`/service/${slug}`} key={slug}>서비스 자세히 보기 <span>↗</span></a>)}
        </div>
      </section>

      <section className="final-cta reveal">
        <div><span className="section-kicker">FIELD CHECK</span><h2>내 현장에 적용되는 범위는<br/>현장에서 확인하세요</h2><p>임대차 조건과 설비, 폐기물 반출조건을 함께 확인해야 실제 철거범위와 견적을 구체화할 수 있습니다.</p></div>
        <a className="btn btn-light" href="/estimate"><span className="btn-icon">✦</span>무료 현장견적</a>
      </section>
    </main>
  );
}
