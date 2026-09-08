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

const serviceIconType: Record<string, string> = {
  "commercial-store": "store",
  restaurant: "restaurant",
  cafe: "cafe",
  "convenience-store": "shop",
  franchise: "link",
  karaoke: "mic",
  "kids-cafe": "kids",
  "pc-room": "monitor",
  "beauty-salon": "scissors",
  "beauty-shop": "sparkle",
  gym: "dumbbell",
  academy: "book",
  "study-cafe": "desk",
  hospital: "medical",
  dental: "tooth",
  pharmacy: "pharmacy",
  office: "office",
  "retail-store": "bag",
  "unmanned-store": "scan",
  mart: "cart",
  lodging: "bed",
  bathhouse: "bath",
  laundry: "washer",
  warehouse: "warehouse",
  factory: "factory",
  house: "house",
  apartment: "building",
  interior: "hammer",
  partial: "cut",
  pub: "glass",
  bakery: "bread",
  "pet-shop": "paw"
};

function ServiceIcon({ slug }: { slug: string }) {
  const type = serviceIconType[slug] || "hammer";
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  let drawing;
  switch (type) {
    case "store": drawing = <><path d="M4 10h16v10H4z"/><path d="M3 10l2-5h14l2 5"/><path d="M8 20v-5h4v5"/><path d="M3 10c1.5 1.5 3 1.5 4.5 0 1.5 1.5 3 1.5 4.5 0 1.5 1.5 3 1.5 4.5 0 1.5 1.5 3 1.5 4.5 0"/></>; break;
    case "restaurant": drawing = <><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10"/><path d="M16 3v18M16 3c3 1 4 4 4 7h-4"/></>; break;
    case "cafe": drawing = <><path d="M5 8h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2M7 4c0 1 1 1 1 2M11 3c0 1 1 1 1 2"/></>; break;
    case "shop": drawing = <><path d="M4 9h16v11H4zM3 9l2-4h14l2 4"/><path d="M8 14h3v6M14 14h3v3h-3z"/></>; break;
    case "link": drawing = <><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/></>; break;
    case "mic": drawing = <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"/></>; break;
    case "kids": drawing = <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M4 20c.5-4 2.5-6 5-6s4.5 2 5 6M14 15c3 0 5 1.5 6 5"/></>; break;
    case "monitor": drawing = <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M8 9h2M14 9h2M11 12h2"/></>; break;
    case "scissors": drawing = <><circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="M8.5 8.5L20 3M8.5 15.5L20 21M10 12l10-5"/></>; break;
    case "sparkle": drawing = <><path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2zM18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8zM5 14l.7 1.8 1.8.7-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7z"/></>; break;
    case "dumbbell": drawing = <><path d="M7 9v6M4 10v4M17 9v6M20 10v4M7 12h10M2 11v2M22 11v2"/></>; break;
    case "book": drawing = <><path d="M4 5h7a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4z"/><path d="M20 5h-3a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h3z"/></>; break;
    case "desk": drawing = <><path d="M4 14h16M6 14v6M18 14v6M8 5h8v6H8zM12 11v3"/></>; break;
    case "medical": drawing = <><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M9 5V3h6v2M12 9v7M8.5 12.5h7"/></>; break;
    case "tooth": drawing = <path d="M8 4c2 0 2.5 1 4 1s2-1 4-1c3 0 4 2.4 4 5 0 3-1.5 4.5-2 7.5-.5 3-1.2 4.5-2.5 4.5-1.5 0-1.4-4-3.5-4s-2 4-3.5 4C7.2 21 6.5 19.5 6 16.5 5.5 13.5 4 12 4 9c0-2.6 1-5 4-5z"/>; break;
    case "pharmacy": drawing = <><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></>; break;
    case "office": drawing = <><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></>; break;
    case "bag": drawing = <><path d="M5 8h14l-1 12H6z"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/></>; break;
    case "scan": drawing = <><path d="M5 8V5h3M16 5h3v3M19 16v3h-3M8 19H5v-3"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M10 12h4"/></>; break;
    case "cart": drawing = <><path d="M3 4h2l2 11h10l2-7H6"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></>; break;
    case "bed": drawing = <><path d="M3 18V8M21 18v-6H8a5 5 0 0 0-5 5v1h18M6 10h5v2H6z"/></>; break;
    case "bath": drawing = <><path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM6 12V7a3 3 0 0 1 6 0M4 20l-1 2M20 20l1 2"/></>; break;
    case "washer": drawing = <><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 7h1M12 7h4"/></>; break;
    case "warehouse": drawing = <><path d="M3 9l9-5 9 5v11H3z"/><path d="M7 20v-7h10v7M7 16h10"/></>; break;
    case "factory": drawing = <><path d="M3 21V10l6 3V9l6 3V6l6 4v11z"/><path d="M7 17h2M12 17h2M17 17h2"/></>; break;
    case "house": drawing = <><path d="M3 11l9-8 9 8v10H3z"/><path d="M9 21v-6h6v6"/></>; break;
    case "building": drawing = <><path d="M5 21V4h10v17M15 9h4v12"/><path d="M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1"/></>; break;
    case "hammer": drawing = <><path d="M14 5l5 5M16 3l5 5-3 3-5-5zM13 10L5 18a2 2 0 0 0 3 3l8-8"/></>; break;
    case "cut": drawing = <><path d="M4 5h16v14H4z" strokeDasharray="3 3"/><path d="M8 12h8M12 8v8"/></>; break;
    case "glass": drawing = <><path d="M6 4h12l-1 6a5 5 0 0 1-10 0zM12 15v6M8 21h8"/></>; break;
    case "bread": drawing = <><path d="M5 10c-2-4 2-7 5-5 2-3 7-2 8 2 3 0 4 4 1 6v7H5z"/><path d="M9 9l2 2M14 8l2 2"/></>; break;
    case "paw": drawing = <><circle cx="12" cy="15" r="4"/><circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/></>; break;
    default: drawing = <path d="M4 20l8-8 4 4-8 8z"/>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{drawing}</svg>;
}

const servicePageCss = `
.service-directory-card{overflow:hidden;min-height:188px;padding:22px;background:linear-gradient(180deg,#fff 0%,#fcfdff 100%)}
.service-directory-card .service-card-top{margin-bottom:18px}
.service-directory-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#eef2ff,#f5f7ff);color:#315cff;box-shadow:inset 0 0 0 1px rgba(49,92,255,.06);transition:transform .18s ease,background .18s ease,color .18s ease}
.service-directory-icon svg{width:25px;height:25px}
.service-directory-card:hover .service-directory-icon{transform:translateY(-2px) rotate(-2deg);background:#315cff;color:#fff}
.service-directory-card .service-card-arrow{display:grid;place-items:center;width:34px;height:34px;border:1px solid #e4e8ef;border-radius:50%;background:#fff;color:#7c879b;transition:transform .18s ease,border-color .18s ease,color .18s ease}
.service-directory-card:hover .service-card-arrow{transform:translate(2px,-2px);border-color:#cfd7f4;color:#315cff}
.service-directory-card strong{font-size:16px}
.service-directory-card>span{max-width:92%;font-size:13px;line-height:1.7}
@media(max-width:760px){.service-directory-card{min-height:auto;padding:18px}.service-directory-icon{width:44px;height:44px}.service-directory-icon svg{width:23px;height:23px}}
`;

export default function Page() {
  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style dangerouslySetInnerHTML={{ __html: servicePageCss }} />
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
          {Object.entries(services).map(([slug, item]) => (
            <a key={slug} className="service-card service-directory-card" href={`/service/${slug}`}>
              <div className="service-card-top">
                <span className="service-directory-icon"><ServiceIcon slug={slug} /></span>
                <span className="service-card-arrow" aria-hidden="true">↗</span>
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
