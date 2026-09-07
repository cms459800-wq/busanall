import { notFound } from "next/navigation";
import { services, type ServiceSlug } from "@/data/services";

const support = {
  rate: "전용면적 3.3㎡당 20만원 한도",
  max: "최대 600만원",
  url: "https://www.sbiz24.kr/"
};

const baseUrl = "https://busanall.vercel.app";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = services[slug as ServiceSlug];
  if (!item) return {};
  return {
    title: `${item.primary}·원상복구`,
    description: item.summary,
    alternates: { canonical: `/service/${slug}` }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = services[slug as ServiceSlug];
  if (!item) notFound();

  const faqItems = [
    { q: "철거비는 무엇으로 달라지나요?", a: "면적뿐 아니라 설비, 마감재, 폐기물량, 반출조건, 작업시간과 원상복구 범위가 함께 영향을 줍니다." },
    { q: "사진만으로 견적이 가능한가요?", a: "간단한 범위는 사진으로 1차 확인할 수 있지만 설비·배관·반출조건이 복잡한 현장은 방문 확인이 더 정확합니다." },
    { q: "폐업지원금은 누구나 최대 한도를 받나요?", a: "아닙니다. 실제 지급액은 신청자격과 인정비용 등 최신 공고 기준에 따라 달라집니다." }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "철거서비스", item: `${baseUrl}/service` },
        { "@type": "ListItem", position: 3, name: item.name, item: `${baseUrl}/service/${slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: item.primary,
      description: item.summary,
      serviceType: item.primary,
      areaServed: { "@type": "AdministrativeArea", name: "부산광역시" },
      provider: { "@type": "Organization", name: "올바른철거", url: baseUrl },
      url: `${baseUrl}/service/${slug}`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    }
  ];

  return (
    <main className="page-shell">
      {structuredData.map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}

      <nav className="breadcrumb" aria-label="breadcrumb"><a href="/">홈</a><span>›</span><a href="/service">철거서비스</a><span>›</span><strong>{item.name}</strong></nav>

      <header className="list-hero">
        <div className="eyebrow-chip">● 부산 업종별 철거</div>
        <h1>{item.primary}<br/><span className="gradient-text">철거·원상복구 가이드</span></h1>
        <p>{item.summary}</p>
        <div className="cta-row"><a className="btn btn-primary" href="/estimate">무료 현장견적</a><a className="btn btn-glass" href="/support">폐업지원금 확인</a></div>
      </header>

      <section className="split">
        <article className="info-card">
          <span className="section-kicker">FIELD CHECK</span>
          <h2>현장에서 먼저 확인할 것</h2>
          <p>철거 범위, 설비 수량, 폐기물 반출 동선, 건물 관리규정과 임대차 원상복구 조건을 함께 확인해야 견적이 구체화됩니다.</p>
        </article>
        <article className="info-card">
          <span className="section-kicker">WHY IT VARIES</span>
          <h2>같은 평수여도 비용은 달라집니다</h2>
          <p>천장·벽체·바닥 재질, 주방·냉난방·전기 설비, 층수와 엘리베이터, 차량 접근성에 따라 작업량과 폐기물량이 달라질 수 있습니다.</p>
        </article>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">CORE POINTS</span><h2>{item.name} 핵심 체크사항</h2></div><p>업종별로 실제 현장에서 차이가 나는 항목을 먼저 확인하세요.</p></div>
        <div className="feature-grid">{item.unique.map((text, i) => <article className="feature-card" key={text}><div className="feature-no">0{i+1}</div><p>{text}</p></article>)}</div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">FIELD IMAGES</span><h2>현장 사진 영역</h2></div><p>실제 시공 사진이 확보되면 전·중·후 과정이 보이도록 교체합니다.</p></div>
        <div className="image-grid">{[1,2,3,4].map((n) => <figure className="image-slot" key={n}><div className="placeholder"><div><strong>현장 이미지 {n}</strong><span>/public/images/services/{slug}/0{n}.webp</span></div></div><figcaption>{item.primary} 현장 이미지 {n}</figcaption></figure>)}</div>
      </section>

      <section className="section split">
        <article className="info-card"><h2>견적에 영향을 주는 항목</h2><ul><li>전용면적과 실제 철거 범위</li><li>천장·벽체·바닥·설비 재질과 수량</li><li>엘리베이터·계단·골목 등 반출 조건</li><li>야간·주말 작업과 건물 관리규정</li><li>원상복구 마감 수준과 추가 설비 철거</li></ul></article>
        <article className="info-card"><h2>권장 진행 순서</h2><ol><li>임대차 원상복구 조건 확인</li><li>철거·보존 품목 구분</li><li>현장 및 반출 동선 확인</li><li>작업범위 기준 견적 비교</li><li>철거·분리배출·폐기물 반출</li><li>원상복구 범위와 현장 정리 확인</li></ol></article>
      </section>

      <section className="support-box section">
        <span className="section-kicker">2026 CLOSURE SUPPORT</span>
        <h2>폐업 예정이라면 공사 전에 지원제도도 확인하세요</h2>
        <p>희망리턴패키지 점포철거비 지원은 신청자격과 인정비용, 증빙 기준이 있습니다.</p>
        <div className="support-stats"><div><span>지원 기준</span><strong>{support.rate}</strong></div><div><span>최대 한도</span><strong>{support.max}</strong></div></div>
        <p>실제 지원 여부와 지급액은 신청자격, 인정면적, 증빙 가능한 비용, 폐업일 및 최신 공고 기준에 따라 달라질 수 있으며 예산 소진 시 조기 종료될 수 있습니다.</p>
        <div className="cta-row"><a className="btn btn-primary" href="/support">지원 안내 보기</a><a className="btn btn-glass" href={support.url} target="_blank" rel="noreferrer">소상공인24 확인</a></div>
      </section>

      <section className="section faq"><div className="section-heading"><div><span className="section-kicker">FAQ</span><h2>{item.primary} 자주 묻는 질문</h2></div></div>{faqItems.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>

      <section className="final-cta"><div><span className="section-kicker">NEXT STEP</span><h2>철거 범위가 애매하다면<br/>현장 조건부터 정리하세요</h2><p>지역·업종·평수·철거범위와 사진이 있으면 상담이 더 구체적입니다.</p></div><a className="btn btn-light" href="/estimate">무료 현장견적</a></section>
    </main>
  );
}
