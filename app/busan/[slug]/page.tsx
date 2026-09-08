import { notFound } from "next/navigation";
import { regions, type RegionSlug } from "@/data/regions";
import { services, type ServiceSlug } from "@/data/services";
import { guides } from "@/data/guides";
import { getRegionDetail } from "@/data/regionDetails";
import { getRegionSeo } from "@/data/regionSeo";

const baseUrl = "https://busanall.vercel.app";
const inquiryUrl = "https://maxpool.olbarun.kr/";

export function generateStaticParams() {
  return Object.keys(regions).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const regionSlug = slug as RegionSlug;
  const region = regions[regionSlug];
  if (!region) return {};
  const seo = getRegionSeo(regionSlug);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/busan/${slug}` },
    openGraph: { title: seo.title, description: seo.description, url: `/busan/${slug}`, type: "website" }
  };
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const regionSlug = slug as RegionSlug;
  const region = regions[regionSlug];
  if (!region) notFound();
  const detail = getRegionDetail(regionSlug);

  const validServices = region.services
    .map((serviceSlug) => ({ serviceSlug, item: services[serviceSlug as ServiceSlug] }))
    .filter((entry) => Boolean(entry.item));

  const relatedGuides = guides
    .map((guide) => ({
      guide,
      score: guide.relatedServices.filter((serviceSlug) => (region.services as readonly string[]).includes(serviceSlug)).length
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ guide }) => guide);

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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: detail.faq.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
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
        <div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지</a><a className="btn btn-glass" href="/support">폐업지원금 확인</a></div>
      </header>

      <section className="split">
        <article className="info-card"><span className="section-kicker">LOCAL FOCUS</span><h2>{region.name}에서 먼저 볼 기준</h2><p>{detail.focus}</p></article>
        <article className="info-card"><span className="section-kicker">BUILDING RULE</span><h2>건물 규정과 반출조건 확인</h2><p>작업 가능 시간, 공용부 보양, 승강기 사용조건, 차량 진입과 폐기물 상차 위치는 같은 지역 안에서도 현장마다 달라질 수 있습니다.</p></article>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">LOCAL POINTS</span><h2>{region.name} 철거에서 중요한 점</h2></div><p>지역명을 반복하기보다 실제 작업에 영향을 주는 현장 요소를 정리했습니다.</p></div>
        <div className="feature-grid">{region.points.map((point, i) => <article className="feature-card" key={point}><div className="feature-no">0{i+1}</div><p>{point}</p></article>)}</div>
      </section>

      <section className="section soft-section">
        <div className="section-heading"><div><span className="section-kicker">FIELD CHECKLIST</span><h2>{region.name} 현장에서 확인할 항목</h2></div><p>견적 전 사진과 현장 확인에서 이 항목을 먼저 보면 반출·보양·설비 조건을 구체적으로 정리하기 쉽습니다.</p></div>
        <div className="detail-list-grid">{detail.fieldChecks.map((text, i) => <article className="detail-list-card" key={text}><b>0{i+1}</b><span>{text}</span></article>)}</div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">LOCAL SCENARIOS</span><h2>{region.name}에서 이런 현장이라면?</h2></div><p>지역별 건물과 도로 조건이 철거 방식에 어떤 영향을 줄 수 있는지 상황별로 정리했습니다.</p></div>
        <div className="scenario-grid">{detail.scenarios.map((entry) => <article className="scenario-card" key={entry.title}><span>현장 변수</span><h3>{entry.title}</h3><p>{entry.text}</p></article>)}</div>
      </section>

      <section className="section soft-section">
        <div className="section-heading">
          <div><span className="section-kicker">NEIGHBORHOOD CHECK</span><h2>{region.neighborhoods.slice(0, 3).join(" · ")} 등 현장별 확인사항</h2></div>
          <p>같은 {region.name} 안에서도 건물 연식, 도로 폭, 주차와 승강기 조건은 현장마다 다릅니다. 동네명만으로 비용을 정하기보다 실제 반출 조건을 함께 확인하세요.</p>
        </div>
        <div className="link-cloud" aria-label={`${region.name} 주요 동네`}>{region.neighborhoods.map((name) => <span className="info-chip" key={name}>{name} 현장</span>)}</div>
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

      <section className="section split">
        <article className="info-card"><span className="section-kicker">PHOTO ESTIMATE</span><h2>{region.name} 견적 전에 찍어둘 사진</h2><ol>{detail.photoChecklist.map((text) => <li key={text}>{text}</li>)}</ol><p>실내 전체뿐 아니라 출입구에서 폐기물 상차 위치까지 이어지는 동선을 함께 찍어두면 1차 확인에 도움이 됩니다.</p></article>
        <article className="info-card"><span className="section-kicker">COMPARE ESTIMATES</span><h2>지역명보다 범위를 비교하세요</h2><p>같은 {region.name} 안에서도 층수, 설비, 마감재, 승강기, 골목과 상차 위치에 따라 작업량이 달라질 수 있습니다.</p><ul><li>철거·존치 항목이 같은지</li><li>폐기물 반출과 운반이 포함됐는지</li><li>공용부 보양이 포함됐는지</li><li>원상복구 마감 수준이 같은지</li></ul></article>
      </section>

      <section className="section soft-section">
        <div className="section-heading"><div><span className="section-kicker">READY FOR ESTIMATE</span><h2>{region.name} 현장이라면 이 6가지를 준비하세요</h2></div><p>위치, 업종·면적, 층수·엘리베이터, 철거범위, 희망일정과 현장사진을 정리하면 1차 상담에서 현장조건을 더 빠르게 확인할 수 있습니다.</p></div>
        <div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료견적 문의하기</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지 확인</a><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">견적 비교 체크리스트</a></div>
      </section>

      <section className="section faq"><div className="section-heading"><div><span className="section-kicker">LOCAL FAQ</span><h2>{region.name} 철거 자주 묻는 질문</h2></div><p>해당 지역 페이지에서 다룬 현장조건과 직접 연결되는 질문만 정리했습니다.</p></div>{detail.faq.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>

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

      {relatedGuides.length > 0 && <section className="section soft-section">
        <div className="section-heading"><div><span className="section-kicker">LOCAL GUIDE MATCH</span><h2>{region.name} 업종과 연결되는 철거 가이드</h2></div><p>{region.name}에서 자주 확인하는 업종과 겹치는 가이드를 우선 연결했습니다.</p></div>
        <div className="service-grid">{relatedGuides.map((guide) => <a className="service-card" href={`/guide/${guide.slug}`} key={guide.slug}><div className="service-card-top"><span className="service-card-icon">G</span><span className="service-card-arrow">↗</span></div><strong>{guide.title}</strong><span>{guide.description}</span></a>)}</div>
        <div className="cta-row"><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">견적서 체크리스트</a><a className="btn btn-glass" href="/guide/restoration-scope-checklist">원상복구 범위</a><a className="btn btn-glass" href="/guide">전체 철거가이드</a></div>
      </section>}

      <section className="final-cta"><div><span className="section-kicker">LOCAL ESTIMATE</span><h2>{region.name} 철거,<br/>현장 조건부터 확인하세요</h2><p>위치, 업종·면적, 층수·엘리베이터, 철거범위, 희망일정과 현장사진을 준비하면 상담에서 반출조건과 원상복구 범위를 더 빠르게 확인할 수 있습니다.</p></div><div className="cta-row"><a className="btn btn-light" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">준비정보 6가지</a></div></section>
    </main>
  );
}
