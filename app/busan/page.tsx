import { regions } from "@/data/regions";

const inquiryUrl = "https://maxpool.olbarun.kr/";

export const metadata = {
  title: "부산 16개 구·군 철거 지역안내",
  description: "해운대구·부산진구·동래구·수영구 등 부산 16개 구·군의 철거·원상복구 현장 특성과 업종별 정보를 확인하세요.",
  keywords: ["부산 철거", "부산 철거업체", "부산 원상복구", "부산 상가철거", "부산 지역별 철거"],
  alternates: { canonical: "/busan" },
  openGraph: { title: "부산 16개 구·군 철거 지역안내", description: "부산 16개 구·군의 상권·건물·반출조건과 업종별 철거 정보를 지역별로 확인하세요.", url: "/busan", type: "website" }
};

const regionSchema = {
  "@context": "https://schema.org", "@type": "ItemList", name: "부산 16개 구·군 철거 지역안내",
  itemListElement: Object.entries(regions).map(([slug, region], i) => ({ "@type": "ListItem", position: i + 1, name: region.primary, url: `https://www.parcelout.kr/busan/${slug}` }))
};

const iconPaths: Record<string, React.ReactNode> = {
  "jung-gu": <><path d="M4 21V10l8-5 8 5v11"/><path d="M9 21v-7h6v7"/><path d="M3 21h18"/></>,
  "seo-gu": <><path d="M3 20h18"/><path d="M5 20V9h5v11M14 20V4h5v16"/><path d="M7 12h1M7 15h1M16 8h1M16 11h1M16 14h1"/></>,
  "dong-gu": <><path d="M3 18c3-3 5-3 8 0s5 3 10 0"/><path d="M4 14h16"/><path d="M6 14l2-6h8l2 6"/><path d="M12 8V4"/></>,
  "yeongdo-gu": <><path d="M3 18c3-2 5-2 8 0s5 2 10 0"/><path d="M5 14c2-5 4-7 7-7s5 2 7 7"/><path d="M5 14h14"/></>,
  "busanjin-gu": <><path d="M4 21V6h7v15M13 21V3h7v18"/><path d="M7 9h1M7 12h1M7 15h1M16 7h1M16 10h1M16 13h1M16 16h1"/></>,
  "dongnae-gu": <><path d="M4 20h16"/><path d="M6 20v-8h12v8"/><path d="M5 12l7-7 7 7"/><path d="M10 20v-4h4v4"/></>,
  "nam-gu": <><path d="M3 18c3-3 5-3 8 0s5 3 10 0"/><path d="M5 14V8M19 14V8"/><path d="M5 10c4-4 10-4 14 0"/></>,
  "buk-gu": <><path d="M3 20h18"/><path d="M5 20V9l5-3v14M10 20V5l5-2v17M15 20v-9l4-2v11"/></>,
  "haeundae-gu": <><path d="M3 18c3-2 5-2 8 0s5 2 10 0"/><circle cx="17" cy="6" r="3"/><path d="M4 13c3-3 6-4 9-3"/></>,
  "saha-gu": <><path d="M3 20h18"/><path d="M5 20V9h6v11M13 20v-6h6v6"/><path d="M7 12h2M15 17h2"/></>,
  "geumjeong-gu": <><path d="M3 20l6-10 3 5 3-9 6 14"/><path d="M8 20h8"/></>,
  "gangseo-gu": <><path d="M3 18c3-2 5-2 8 0s5 2 10 0"/><path d="M5 14h14l-2-5H7z"/><path d="M9 9V5h6v4"/></>,
  "yeonje-gu": <><path d="M4 20V7h6v13M14 20V4h6v16"/><path d="M3 20h18"/><path d="M6 10h2M6 13h2M16 7h2M16 10h2M16 13h2"/></>,
  "suyeong-gu": <><path d="M3 18c3-2 5-2 8 0s5 2 10 0"/><path d="M5 13h14"/><path d="M7 13V7M17 13V7"/><path d="M7 9c3-3 7-3 10 0"/></>,
  "sasang-gu": <><path d="M3 20h18"/><path d="M5 20v-9l5 3v-5l5 3V7h4v13"/><path d="M7 17h2M12 17h2M16 15h1"/></>,
  "gijang-gun": <><path d="M3 20l6-9 3 4 3-8 6 13"/><path d="M4 20h16"/><path d="M16 7l2-3 2 3"/></>
};

const regionTone: Record<string,string> = {
  "jung-gu":"orange","seo-gu":"teal","dong-gu":"cyan","yeongdo-gu":"blue","busanjin-gu":"purple","dongnae-gu":"amber","nam-gu":"indigo","buk-gu":"green","haeundae-gu":"sky","saha-gu":"slate","geumjeong-gu":"green","gangseo-gu":"teal","yeonje-gu":"violet","suyeong-gu":"cyan","sasang-gu":"orange","gijang-gun":"emerald"
};

function RegionIcon({ slug }: { slug: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{iconPaths[slug] ?? <><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></>}</svg>;
}

export default function BusanHub() {
  return <main className="page-shell">
    <style>{`
      .region-tone-blue{--r-bg:#eef4ff;--r-border:#d8e5ff;--r-color:#2458d8}.region-tone-sky{--r-bg:#edf8ff;--r-border:#d2ecfb;--r-color:#0875a5}.region-tone-cyan{--r-bg:#ecf9fb;--r-border:#cfedf1;--r-color:#087b8c}.region-tone-teal{--r-bg:#edf9f7;--r-border:#d0ece7;--r-color:#0f766e}.region-tone-green{--r-bg:#eff9f1;--r-border:#d5ecd9;--r-color:#287a3e}.region-tone-emerald{--r-bg:#ecf9f3;--r-border:#ceebdc;--r-color:#147a55}.region-tone-orange{--r-bg:#fff4e8;--r-border:#f7ddbd;--r-color:#a9570a}.region-tone-amber{--r-bg:#fff8df;--r-border:#f2e3a8;--r-color:#8b6508}.region-tone-purple{--r-bg:#f5f0ff;--r-border:#e4d8ff;--r-color:#7048c8}.region-tone-violet{--r-bg:#f4f1ff;--r-border:#e1dbff;--r-color:#6350b5}.region-tone-indigo{--r-bg:#eef0ff;--r-border:#daddff;--r-color:#4c51bf}.region-tone-slate{--r-bg:#f1f4f7;--r-border:#dde3ea;--r-color:#475467}
      .region-card-icon{width:50px;height:50px;border-radius:15px;display:grid;place-items:center;background:var(--r-bg);color:var(--r-color);border:1px solid var(--r-border);transition:transform .2s ease,background .2s ease,color .2s ease,box-shadow .2s ease}.region-card-icon svg{width:26px;height:26px}
      .service-card:hover .region-card-icon{transform:translateY(-2px) scale(1.04);background:var(--r-color);color:#fff;box-shadow:0 8px 18px rgba(17,24,39,.10)}
      .region-card-label{display:inline-flex;align-items:center;gap:6px;margin-top:12px;font-size:12px;font-weight:800;color:var(--r-color);background:var(--r-bg);border:1px solid var(--r-border);border-radius:999px;padding:5px 9px;width:max-content;max-width:100%}
      @media(max-width:760px){.region-card-icon{width:45px;height:45px}.region-card-icon svg{width:23px;height:23px}}
    `}</style>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(regionSchema) }} />
    <header className="list-hero"><div className="eyebrow-chip">BUSAN AREA GUIDE</div><h1>부산 16개 구·군<br/><span className="gradient-text">현장 조건까지 지역별로</span></h1><p>지역 이름만 바꾸는 페이지가 아니라 상권, 건물 유형, 차량 접근성, 폐기물 반출과 주요 업종을 기준으로 현장 판단에 필요한 정보를 정리했습니다.</p><div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지</a></div></header>
    <section className="section"><div className="section-heading"><div><span className="section-kicker">16 DISTRICTS</span><h2>지역별 철거 정보</h2></div><p>주요 동네와 현장 특성, 많이 확인하는 업종별 서비스, 폐업지원 안내까지 한 페이지에서 확인할 수 있습니다.</p></div><div className="service-grid">{Object.entries(regions).map(([slug, region]) => { const tone=regionTone[slug]??"blue"; return <a className={`service-card region-tone-${tone}`} href={`/busan/${slug}`} key={slug}><div className="service-card-top"><span className="region-card-icon"><RegionIcon slug={slug}/></span><span className="service-card-arrow">↗</span></div><strong>{region.primary}</strong><span>{region.neighborhoods.join(" · ")}</span><span className="region-card-label">지역 현장조건 확인</span><span style={{marginTop:"8px"}}>{region.summary}</span></a> })}</div></section>
    <section className="support-box home-section"><span className="section-kicker">LOCAL CHECK</span><h2>같은 업종이라도 지역과 건물 조건에 따라<br/>작업 방식은 달라질 수 있습니다.</h2><p>고층 상가의 화물승강기 사용, 골목 차량 진입, 관리실 작업시간, 인접 점포 영업 여부처럼 실제 현장에서 비용과 일정에 영향을 주는 조건을 먼저 확인하는 것이 좋습니다.</p><div className="cta-row"><a className="btn btn-primary" href="/guide/demolition-estimate-checklist">견적 체크리스트</a><a className="btn btn-glass" href="/service">업종별 서비스</a></div></section>
    <section className="final-cta"><div><span className="section-kicker">LOCAL ESTIMATE</span><h2>부산 현장,<br/>지역 조건까지 같이 확인하세요.</h2><p>업종과 면적뿐 아니라 층수, 엘리베이터, 골목 진입, 폐기물 상차 위치와 원상복구 범위를 함께 확인합니다.</p></div><a className="btn btn-light" href={inquiryUrl}>무료 현장견적 문의</a></section>
  </main>;
}