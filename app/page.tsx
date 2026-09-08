import { regions } from "@/data/regions";

export const metadata = {
  title: "부산 철거·원상복구",
  description: "부산 16개 구·군의 업종별 철거, 원상복구, 폐업지원금, 철거 견적과 현장 가이드를 한 곳에서 확인하세요.",
  alternates: { canonical: "/" }
};

const highlights = [
  { label:"SERVICE", title:"업종별 철거", text:"식당·카페·편의점·사무실·공장 등 업종별 철거 포인트를 확인하세요.", href:"/service" },
  { label:"LOCAL", title:"부산 16개 구·군", text:"해운대구부터 기장군까지 지역별 현장 조건과 접근성을 정리했습니다.", href:"/busan" },
  { label:"GUIDE", title:"철거·폐업 가이드", text:"견적서, 원상복구, 폐업지원금, 업종별 체크사항을 한 곳에서 확인하세요.", href:"/guide" }
];

const process = [
  { no:"01", title:"현장 조건 확인", text:"업종, 면적, 층수, 엘리베이터와 폐기물 반출 동선을 확인합니다." },
  { no:"02", title:"철거 범위 구분", text:"철거할 시설과 남길 시설, 임대인 원상복구 요구사항을 구분합니다." },
  { no:"03", title:"비용·지원 검토", text:"견적 항목과 추가비용 조건, 폐업지원 대상 여부를 함께 확인합니다." },
  { no:"04", title:"일정·작업 진행", text:"관리규정과 영업시간을 반영해 보양, 철거, 반출, 정리 순서로 진행합니다." }
];

const quickLinks = [
  { title:"무료 현장견적", text:"준비정보 6가지", href:"/estimate" },
  { title:"철거 견적 체크", text:"추가비용 전 확인", href:"/guide/demolition-estimate-checklist" },
  { title:"원상복구 범위", text:"계약서 기준 확인", href:"/guide/restoration-scope-checklist" },
  { title:"폐업지원 안내", text:"2026 지원 기준", href:"/support" }
];

const coreServices = [
  ["commercial-store", "상가철거"],
  ["restaurant", "식당철거"],
  ["cafe", "카페철거"],
  ["office", "사무실철거"],
  ["academy", "학원철거"],
  ["hospital", "병원철거"],
  ["factory", "공장철거"],
  ["interior", "내부철거"]
] as const;

const priorityGuides = [
  { slug:"demolition-estimate-checklist", category:"철거비용", title:"부산 철거 견적서 체크리스트", text:"평당 단가보다 폐기물·반출·보양·설비·원상복구 포함 범위를 먼저 비교하세요." },
  { slug:"restoration-scope-checklist", category:"원상복구", title:"상가 원상복구 범위 체크리스트", text:"임대차계약서, 입점 당시 상태, 임대인 요구사항을 기준으로 철거 범위를 정리합니다." },
  { slug:"closure-demolition-support-2026", category:"폐업지원", title:"2026 폐업철거 지원금 확인 순서", text:"지원자격, 신청시점, 증빙자료와 실제 철거 일정의 선후관계를 확인합니다." },
  { slug:"restaurant-closing-demolition", category:"업종별", title:"식당 폐업철거 준비 가이드", text:"주방설비, 가스, 급배수, 덕트와 그리스트랩까지 음식점 특유의 철거 범위를 확인합니다." },
  { slug:"cafe-closing-demolition", category:"업종별", title:"카페 폐업철거 준비 가이드", text:"커피장비, 바 카운터, 급배수, 전기증설과 외부 사인물의 원상복구 범위를 확인합니다." },
  { slug:"demolition-waste-guide", category:"철거기초", title:"철거 폐기물 분리·반출 가이드", text:"재사용품과 폐기물을 구분하고 승강기·계단·골목·차량 상차 동선을 미리 확인합니다." }
] as const;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "올바른철거",
  url: "https://busanall.vercel.app/",
  inLanguage: "ko-KR",
  description: "부산 철거·원상복구·폐업지원 정보와 현장 가이드를 제공하는 올바른철거"
};

export default function Home() {
  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <section className="home-hero">
        <div className="home-hero-main">
          <div className="eyebrow-chip">● BUSAN DEMOLITION GUIDE</div>
          <h1>부산철거,<br/><span className="gradient-text">견적보다 먼저 기준부터</span></h1>
          <p>올바른철거는 철거 전 꼭 확인해야 할 정보부터 제공합니다. 업종별 작업 범위, 원상복구, 폐업지원금, 부산 지역별 현장 조건을 한 곳에서 확인하세요.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/estimate">무료 현장견적</a>
            <a className="btn btn-glass" href="/service">업종별 서비스</a>
          </div>
          <div className="home-stat-row">
            <div className="home-stat"><strong>부산 16개 구·군</strong><span>지역별 현장 가이드</span></div>
            <div className="home-stat"><strong>업종별 철거</strong><span>설비·원상복구 포인트</span></div>
            <div className="home-stat"><strong>폐업지원 안내</strong><span>공사 전 확인 기준</span></div>
            <div className="home-stat"><strong>무료 현장견적</strong><span>현장 조건 기반 상담</span></div>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-card">
            <div className="hero-card-icon">✓</div>
            <small className="section-kicker">QUICK CHECK</small>
            <strong>철거 전에<br/>이 네 가지부터 확인하세요.</strong>
            <div className="quick-grid">
              {quickLinks.map((item) => (
                <a className="quick-card" href={item.href} key={item.title}>
                  <b>{item.title}</b>
                  <span>{item.text} →</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="home-section soft-section">
        <div className="home-section-head">
          <div><span className="section-kicker">EXPLORE</span><h2>필요한 정보부터<br/>빠르게 찾아보세요</h2></div>
          <p>서비스, 지역, 가이드를 서로 연결해 실제 철거를 준비할 때 필요한 내용을 쉽게 찾을 수 있도록 구성했습니다.</p>
        </div>
        <div className="home-grid">
          {highlights.map((item) => (
            <a className="home-link-card" href={item.href} key={item.title}>
              <span className="arrow">↗</span>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <div><span className="section-kicker">CORE SERVICES</span><h2>자주 찾는 철거 유형부터<br/>바로 확인하세요</h2></div>
          <p>업종에 따라 주방·덕트·파티션·전기·배관·간판 등 철거 범위가 달라집니다. 해당 업종의 체크사항을 먼저 확인하세요.</p>
        </div>
        <div className="service-grid" aria-label="주요 철거서비스 바로가기">
          {coreServices.map(([slug, label], i) => (
            <a className="service-card" href={`/service/${slug}`} key={slug}>
              <div className="service-card-top"><span className="service-card-icon">{String(i + 1).padStart(2, "0")}</span><span className="service-card-arrow">↗</span></div>
              <strong>{label}</strong>
              <span>업종별 철거 범위와 원상복구 체크사항 보기</span>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section soft-section">
        <div className="home-section-head">
          <div><span className="section-kicker">PRIORITY GUIDES</span><h2>철거 전 많이 확인하는<br/>핵심 가이드</h2></div>
          <p>견적 비교, 원상복구, 폐업지원과 업종별 폐점 준비처럼 실제 상담 전 먼저 확인하면 좋은 내용을 직접 연결했습니다.</p>
        </div>
        <div className="service-grid" aria-label="핵심 철거가이드 바로가기">
          {priorityGuides.map((guide) => (
            <a className="service-card" href={`/guide/${guide.slug}`} key={guide.slug}>
              <div className="service-card-top"><span className="section-kicker">{guide.category}</span><span className="service-card-arrow">↗</span></div>
              <strong>{guide.title}</strong>
              <span>{guide.text}</span>
            </a>
          ))}
        </div>
        <div className="cta-row"><a className="btn btn-glass" href="/guide">전체 철거가이드 보기</a></div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <div><span className="section-kicker">BUSAN 16 DISTRICTS</span><h2>부산 지역별 철거 정보</h2></div>
          <p>같은 업종이라도 건물 층수, 골목 진입, 엘리베이터, 관리규정과 폐기물 상차 위치에 따라 작업 방식이 달라질 수 있습니다.</p>
        </div>
        <div className="service-grid">
          {Object.entries(regions).map(([slug, region], i) => (
            <a className="service-card" href={`/busan/${slug}`} key={slug}>
              <div className="service-card-top"><span className="service-card-icon">{String(i + 1).padStart(2, "0")}</span><span className="service-card-arrow">↗</span></div>
              <strong>{region.name} 철거</strong>
              <span>{region.neighborhoods.slice(0, 3).join(" · ")}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <div><span className="section-kicker">PROCESS</span><h2>철거 전에는<br/>이 순서로 확인하세요</h2></div>
          <p>가격보다 범위와 현장조건을 먼저 정리하면 견적 비교가 쉬워지고 추가공사 가능성도 줄일 수 있습니다.</p>
        </div>
        <div className="process-grid">
          {process.map((item) => <article className="process-step" key={item.no}><b>{item.no}</b><strong>{item.title}</strong><p>{item.text}</p></article>)}
        </div>
        <div className="cta-row"><a className="btn btn-primary" href="/estimate">견적 준비정보 6가지 확인</a><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">견적 비교 체크리스트</a></div>
      </section>

      <section className="support-box home-section">
        <div className="eyebrow-chip"><span>●</span> 2026 폐업지원 안내</div>
        <h2>폐업 예정이라면<br/>철거 전에 지원제도부터 확인하세요</h2>
        <p>점포철거비 지원은 자격과 인정범위, 신청·증빙 조건이 있습니다. 최대 지원한도만 보고 공사를 진행하기보다 최신 공식 공고와 준비순서를 먼저 확인하는 것이 좋습니다.</p>
        <div className="support-stats">
          <div><span>지원 기준</span><strong>전용면적 3.3㎡당 20만원 한도</strong></div>
          <div><span>최대 한도</span><strong>최대 600만원</strong></div>
        </div>
        <div className="cta-row"><a className="btn btn-primary" href="/support">폐업지원 안내</a><a className="btn btn-glass" href="/guide/closure-demolition-support-2026">신청 전 체크리스트</a></div>
      </section>

      <section className="final-cta">
        <div><span className="section-kicker">FIELD CHECK</span><h2>내 현장은 얼마일까?<br/>범위부터 같이 확인하세요.</h2><p>업종·면적·층수·엘리베이터·철거범위·일정과 현장사진을 준비하면 실제 상담에서 확인해야 할 범위를 더 빠르게 정리할 수 있습니다.</p></div>
        <a className="btn btn-light" href="/estimate">무료 현장견적 요청</a>
      </section>
    </main>
  );
}
