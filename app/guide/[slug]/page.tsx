import { notFound } from "next/navigation";
import { guides, guideBySlug } from "@/data/guides";
import { services, type ServiceSlug } from "@/data/services";
import { regions } from "@/data/regions";
import ClosureSupport from "@/components/ClosureSupport";

const baseUrl = "https://busanall.vercel.app";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/guide/${slug}` }
  };
}

export default async function GuideDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const validServices = guide.relatedServices
    .map((serviceSlug) => ({ serviceSlug, item: services[serviceSlug as ServiceSlug] }))
    .filter((entry) => Boolean(entry.item));

  const relatedRegions = Object.entries(regions)
    .filter(([, region]) => region.services.some((serviceSlug) => guide.relatedServices.includes(serviceSlug as never)))
    .slice(0, 6);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "철거가이드", item: `${baseUrl}/guide` },
        { "@type": "ListItem", position: 3, name: guide.title, item: `${baseUrl}/guide/${slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      mainEntityOfPage: `${baseUrl}/guide/${slug}`,
      author: { "@type": "Organization", name: "올바른철거", url: baseUrl },
      publisher: { "@type": "Organization", name: "올바른철거", url: baseUrl },
      about: guide.keywords
    }
  ];

  return (
    <main className="page-shell">
      {structuredData.map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}

      <nav className="breadcrumb" aria-label="breadcrumb"><a href="/">홈</a><span>›</span><a href="/guide">철거가이드</a><span>›</span><strong>{guide.category}</strong></nav>

      <header className="list-hero">
        <div className="eyebrow-chip">● {guide.category}</div>
        <h1>{guide.title}</h1>
        <p>{guide.description}</p>
        <div className="cta-row"><a className="btn btn-primary" href="/estimate">무료 현장견적</a><a className="btn btn-glass" href="/support">폐업지원금 확인</a></div>
      </header>

      <section className="split">
        <article className="info-card"><span className="section-kicker">HOW TO USE</span><h2>이 글에서 확인할 내용</h2><p>철거·폐업 과정에서 먼저 결정해야 할 항목을 순서대로 확인할 수 있도록 핵심 기준을 나눠 정리했습니다.</p></article>
        <article className="info-card"><span className="section-kicker">FIELD NOTE</span><h2>현장마다 조건은 다릅니다</h2><p>계약조건, 설비, 마감재와 반출환경에 따라 실제 공사 범위와 비용은 달라질 수 있으므로 최종 판단 전 현장 확인이 필요합니다.</p></article>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">KEY GUIDE</span><h2>핵심 내용</h2></div><p>긴 글보다 먼저 판단 기준을 빠르게 확인할 수 있도록 4개 항목으로 정리했습니다.</p></div>
        <div className="feature-grid">{guide.sections.map((section, i) => <article className="feature-card" key={section.title}><div className="feature-no">0{i+1}</div><h2>{section.title}</h2><p>{section.body}</p></article>)}</div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">VISUAL GUIDE</span><h2>가이드 이미지 영역</h2></div><p>현장사진, 체크리스트, 절차 도식 등 글 이해를 돕는 이미지를 추가할 자리입니다.</p></div>
        <div className="image-grid">{[1,2,3,4].map((n) => <figure className="image-slot" key={n}><div className="placeholder"><strong>가이드 이미지 {n}</strong><span>/public/images/guides/{guide.slug}/{String(n).padStart(2,"0")}.webp</span></div></figure>)}</div>
      </section>

      <ClosureSupport serviceName={guide.category} />

      {validServices.length > 0 && <section className="section">
        <div className="section-heading"><div><span className="section-kicker">RELATED SERVICE</span><h2>가이드와 연결되는 업종별 철거</h2></div><p>일반적인 체크사항을 실제 업종의 설비·원상복구 조건과 연결해서 확인하세요.</p></div>
        <div className="service-grid">{validServices.map(({ serviceSlug, item }) => <a className="service-card" href={`/service/${serviceSlug}`} key={serviceSlug}><div className="service-card-top"><span className="service-card-icon">{item.name.slice(0, 1)}</span><span className="service-card-arrow">↗</span></div><strong>{item.name}</strong><span>{item.summary}</span></a>)}</div>
      </section>}

      <section className="section soft-section">
        <div className="section-heading"><div><span className="section-kicker">LOCAL GUIDE</span><h2>부산 지역별 현장 조건도 함께 확인하세요</h2></div><p>같은 업종이라도 층수, 골목 진입, 주차, 엘리베이터와 관리규정에 따라 작업 방식이 달라질 수 있습니다.</p></div>
        {relatedRegions.length > 0 && <div className="service-grid">{relatedRegions.map(([regionSlug, region]) => <a className="service-card" href={`/busan/${regionSlug}`} key={regionSlug}><div className="service-card-top"><span className="service-card-icon">{region.name.slice(0, 1)}</span><span className="service-card-arrow">↗</span></div><strong>{region.name} 철거</strong><span>{region.neighborhoods.slice(0, 3).join(" · ")} 등 지역별 반출·건물 조건 확인</span></a>)}</div>}
        <div className="cta-row"><a className="btn btn-glass" href="/busan">부산 16개 구·군 전체 보기</a><a className="btn btn-glass" href="/service">전체 철거서비스 보기</a><a className="btn btn-glass" href="/guide">전체 가이드 보기</a></div>
      </section>

      <section className="final-cta"><div><span className="section-kicker">FIELD CHECK</span><h2>내 현장에 적용되는 범위는<br/>현장에서 확인하세요</h2><p>임대차 조건과 설비, 폐기물 반출조건을 함께 확인해야 실제 철거범위와 견적을 구체화할 수 있습니다.</p></div><a className="btn btn-light" href="/estimate">무료 현장견적</a></section>
    </main>
  );
}
