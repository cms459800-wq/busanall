import { guideBySlug } from "@/data/allGuides";
import { guideDetailsGrowth } from "@/data/guideDetailsGrowth";
import { services, type ServiceSlug } from "@/data/services";

const baseUrl = "https://busanall.vercel.app";
const inquiryUrl = "https://maxpool.olbarun.kr/";

export default function GrowthGuide({ slug }: { slug: string }) {
  const guide = guideBySlug(slug);
  const detail = guideDetailsGrowth[slug];
  if (!guide || !detail) return null;
  const relatedServices = guide.relatedServices.map((serviceSlug) => ({ serviceSlug, item: services[serviceSlug as ServiceSlug] })).filter((entry) => Boolean(entry.item));
  const articleSchema = { "@context":"https://schema.org", "@type":"Article", headline:guide.title, description:guide.description, mainEntityOfPage:`${baseUrl}/guide/${slug}`, author:{"@type":"Organization",name:"올바른철거",url:baseUrl}, publisher:{"@type":"Organization",name:"올바른철거",url:baseUrl}, about:guide.keywords };
  const breadcrumbSchema = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"홈",item:baseUrl},{"@type":"ListItem",position:2,name:"철거가이드",item:`${baseUrl}/guide`},{"@type":"ListItem",position:3,name:guide.title,item:`${baseUrl}/guide/${slug}`}] };

  return <main className="page-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
    <nav className="breadcrumb" aria-label="breadcrumb"><a href="/">홈</a><span>›</span><a href="/guide">철거가이드</a><span>›</span><strong>{guide.category}</strong></nav>
    <header className="list-hero"><div className="eyebrow-chip">● {guide.category}</div><h1>{guide.title}</h1><p>{guide.description}</p><div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지</a></div></header>

    <section className="section"><div className="section-heading"><div><span className="section-kicker">KEY GUIDE</span><h2>먼저 확인할 핵심 기준</h2></div><p>실제 철거를 결정하기 전에 순서대로 확인하면 좋은 내용을 정리했습니다.</p></div><div className="feature-grid">{guide.sections.map((section,index)=><article className="feature-card" key={section.title}><div className="feature-no">0{index+1}</div><h2>{section.title}</h2><p>{section.body}</p></article>)}</div></section>

    <section className="section soft-section"><div className="section-heading"><div><span className="section-kicker">FIELD CHECKLIST</span><h2>현장에서 확인할 체크리스트</h2></div><p>사진과 함께 정리해두면 견적과 원상복구 범위를 설명하기 쉬워집니다.</p></div><div className="detail-list-grid">{detail.checklist.map((text,index)=><article className="detail-list-card" key={text}><b>{String(index+1).padStart(2,"0")}</b><span>{text}</span></article>)}</div></section>

    <section className="section"><div className="section-heading"><div><span className="section-kicker">COMMON MISTAKES</span><h2>자주 놓치는 부분</h2></div><p>공사 후 범위를 다시 협의하거나 재작업하는 상황을 줄이기 위해 미리 확인하세요.</p></div><div className="scenario-grid">{detail.mistakes.map((item)=><article className="scenario-card" key={item.title}><span>주의사항</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section className="section"><div className="section-heading"><div><span className="section-kicker">WORK FLOW</span><h2>준비 순서</h2></div><p>현장마다 세부 조건은 다르지만 확인 순서를 잡는 기준으로 사용할 수 있습니다.</p></div><div className="process-grid">{detail.timeline.map((step)=><article className="process-step" key={step.title}><b>{step.label}</b><strong>{step.title}</strong><p>{step.text}</p></article>)}</div></section>

    <section className="section split"><article className="info-card"><span className="section-kicker">ASK BEFORE QUOTE</span><h2>견적 전에 물어볼 질문</h2><ul>{detail.questions.map((question)=><li key={question}>{question}</li>)}</ul></article><article className="info-card"><span className="section-kicker">PHOTO TIP</span><h2>현장사진 준비 방법</h2><p>점포 전체, 천장·벽·바닥, 주요 설비, 출입구, 계단·승강기와 차량 상차 위치를 순서대로 촬영하세요.</p><p>철거하지 않고 남길 시설도 별도로 촬영하면 존치 범위를 전달하기 쉽습니다.</p></article></section>

    {relatedServices.length>0&&<section className="section soft-section"><div className="section-heading"><div><span className="section-kicker">RELATED SERVICE</span><h2>함께 확인할 철거서비스</h2></div><p>가이드의 공통 기준을 실제 업종별 설비와 원상복구 조건에 연결해 확인하세요.</p></div><div className="service-grid">{relatedServices.map(({serviceSlug,item})=><a className="service-card" href={`/service/${serviceSlug}`} key={serviceSlug}><div className="service-card-top"><span className="service-card-icon">{item.name.slice(0,1)}</span><span className="service-card-arrow">↗</span></div><strong>{item.name}</strong><span>{item.summary}</span></a>)}</div></section>}

    <section className="final-cta"><div><span className="section-kicker">FIELD CHECK</span><h2>기준을 확인했다면<br/>내 현장 조건을 정리하세요</h2><p>위치, 업종·면적, 층수·승강기, 철거범위, 희망일정과 현장사진을 준비하면 상담 시 범위를 더 구체적으로 확인할 수 있습니다.</p></div><div className="cta-row"><a className="btn btn-light" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/guide">전체 가이드 보기</a></div></section>
  </main>;
}
