import { services } from "@/data/services";

const inquiryUrl = "https://open.kakao.com/o/ssjJI0Pi";

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
    url: `https://www.lastwar.co.kr/service/${slug}`
  }))
};

const serviceIconType: Record<string, string> = {
  "commercial-store":"store",restaurant:"restaurant",cafe:"cafe","convenience-store":"shop",franchise:"link",karaoke:"mic","kids-cafe":"kids","pc-room":"monitor","beauty-salon":"scissors","beauty-shop":"sparkle",gym:"dumbbell",academy:"book","study-cafe":"desk",hospital:"medical",dental:"tooth",pharmacy:"pharmacy",office:"office","retail-store":"bag","unmanned-store":"scan",mart:"cart",lodging:"bed",bathhouse:"bath",laundry:"washer",warehouse:"warehouse",factory:"factory",house:"house",apartment:"building",interior:"hammer",partial:"cut",pub:"glass",bakery:"bread","pet-shop":"paw"
};

const serviceTone: Record<string,string> = {
  "commercial-store":"blue",restaurant:"orange",cafe:"brown","convenience-store":"green",franchise:"indigo",karaoke:"purple","kids-cafe":"pink","pc-room":"cyan","beauty-salon":"rose","beauty-shop":"violet",gym:"red",academy:"blue","study-cafe":"teal",hospital:"green",dental:"sky",pharmacy:"emerald",office:"slate","retail-store":"amber","unmanned-store":"cyan",mart:"orange",lodging:"indigo",bathhouse:"sky",laundry:"blue",warehouse:"slate",factory:"charcoal",house:"green",apartment:"indigo",interior:"amber",partial:"rose",pub:"purple",bakery:"brown","pet-shop":"pink"
};

function ServiceIcon({ slug }: { slug: string }) {
  const type = serviceIconType[slug] || "hammer";
  const common = { fill:"none", stroke:"currentColor", strokeWidth:1.8, strokeLinecap:"round" as const, strokeLinejoin:"round" as const };
  let drawing;
  switch(type){
    case "store": drawing=<><path d="M4 10h16v10H4z"/><path d="M3 10l2-5h14l2 5"/><path d="M8 20v-5h4v5"/><path d="M3 10c1.5 1.5 3 1.5 4.5 0 1.5 1.5 3 1.5 4.5 0 1.5 1.5 3 1.5 4.5 0 1.5 1.5 3 1.5 4.5 0"/></>; break;
    case "restaurant": drawing=<><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10"/><path d="M16 3v18M16 3c3 1 4 4 4 7h-4"/></>; break;
    case "cafe": drawing=<><path d="M5 8h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2M7 4c0 1 1 1 1 2M11 3c0 1 1 1 1 2"/></>; break;
    case "shop": drawing=<><path d="M4 9h16v11H4zM3 9l2-4h14l2 4"/><path d="M8 14h3v6M14 14h3v3h-3z"/></>; break;
    case "link": drawing=<><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/></>; break;
    case "mic": drawing=<><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"/></>; break;
    case "kids": drawing=<><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M4 20c.5-4 2.5-6 5-6s4.5 2 5 6M14 15c3 0 5 1.5 6 5"/></>; break;
    case "monitor": drawing=<><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M8 9h2M14 9h2M11 12h2"/></>; break;
    case "scissors": drawing=<><circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="M8.5 8.5L20 3M8.5 15.5L20 21M10 12l10-5"/></>; break;
    case "sparkle": drawing=<path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2zM18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8zM5 14l.7 1.8 1.8.7-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7z"/>; break;
    case "dumbbell": drawing=<path d="M7 9v6M4 10v4M17 9v6M20 10v4M7 12h10M2 11v2M22 11v2"/>; break;
    case "book": drawing=<><path d="M4 5h7a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4z"/><path d="M20 5h-3a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h3z"/></>; break;
    case "desk": drawing=<path d="M4 14h16M6 14v6M18 14v6M8 5h8v6H8zM12 11v3"/>; break;
    case "medical": drawing=<><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M9 5V3h6v2M12 9v7M8.5 12.5h7"/></>; break;
    case "tooth": drawing=<path d="M8 4c2 0 2.5 1 4 1s2-1 4-1c3 0 4 2.4 4 5 0 3-1.5 4.5-2 7.5-.5 3-1.2 4.5-2.5 4.5-1.5 0-1.4-4-3.5-4s-2 4-3.5 4C7.2 21 6.5 19.5 6 16.5 5.5 13.5 4 12 4 9c0-2.6 1-5 4-5z"/>; break;
    case "pharmacy": drawing=<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>; break;
    case "office": drawing=<><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></>; break;
    case "bag": drawing=<><path d="M5 8h14l-1 12H6z"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/></>; break;
    case "scan": drawing=<><path d="M5 8V5h3M16 5h3v3M19 16v3h-3M8 19H5v-3"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M10 12h4"/></>; break;
    case "cart": drawing=<><path d="M3 4h2l2 11h10l2-7H6"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></>; break;
    case "bed": drawing=<path d="M3 18V8M21 18v-6H8a5 5 0 0 0-5 5v1h18M6 10h5v2H6z"/>; break;
    case "bath": drawing=<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM6 12V7a3 3 0 0 1 6 0M4 20l-1 2M20 20l1 2"/>; break;
    case "washer": drawing=<><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 7h1M12 7h4"/></>; break;
    case "warehouse": drawing=<><path d="M3 9l9-5 9 5v11H3z"/><path d="M7 20v-7h10v7M7 16h10"/></>; break;
    case "factory": drawing=<><path d="M3 21V10l6 3V9l6 3V6l6 4v11z"/><path d="M7 17h2M12 17h2M17 17h2"/></>; break;
    case "house": drawing=<><path d="M3 11l9-8 9 8v10H3z"/><path d="M9 21v-6h6v6"/></>; break;
    case "building": drawing=<><path d="M5 21V4h10v17M15 9h4v12"/><path d="M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1"/></>; break;
    case "hammer": drawing=<><path d="M14 5l5 5M16 3l5 5-3 3-5-5zM13 10L5 18a2 2 0 0 0 3 3l8-8"/></>; break;
    case "cut": drawing=<><path d="M4 5h16v14H4z" strokeDasharray="3 3"/><path d="M8 12h8M12 8v8"/></>; break;
    case "glass": drawing=<path d="M6 4h12l-1 6a5 5 0 0 1-10 0zM12 15v6M8 21h8"/>; break;
    case "bread": drawing=<><path d="M5 10c-2-4 2-7 5-5 2-3 7-2 8 2 3 0 4 4 1 6v7H5z"/><path d="M9 9l2 2M14 8l2 2"/></>; break;
    case "paw": drawing=<><circle cx="12" cy="15" r="4"/><circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/></>; break;
    default: drawing=<path d="M4 20l8-8 4 4-8 8z"/>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{drawing}</svg>;
}

const featuredOrder=(["commercial-store","office","restaurant","cafe","beauty-salon","gym","academy","karaoke","pub","convenience-store","hospital","factory","apartment","house","franchise","pc-room","laundry","pet-shop","kids-cafe","lodging","warehouse","retail-store","interior","partial"] as const) satisfies readonly (keyof typeof services)[];
const featuredSet = new Set<string>(featuredOrder);
const orderedServices=[...featuredOrder.map(slug=>[slug,services[slug]] as const),...Object.entries(services).filter(([slug])=>!featuredSet.has(slug))];

const servicePageCss = `
.service-redesign{max-width:none!important;width:100%;padding:0 0 55px!important;background:#081b2b;color:#eef6ff;overflow:hidden}
.service-redesign .service-container{width:min(1150px,calc(100% - 36px));margin:auto}
.service-redesign .service-hero{min-height:435px;display:flex;align-items:center;border:0;border-radius:0;padding:70px max(22px,calc((100vw - 1150px)/2));background:linear-gradient(90deg,#06182bf5 0%,#06213be0 48%,#061b2a4d 100%),url('/images/work-status/서면 음식점 철거.webp') center/cover no-repeat;box-shadow:none}
.service-redesign .service-hero-inner{width:min(850px,100%)}
.service-redesign .service-breadcrumb{font-size:12px;color:#63b6ff;font-weight:800;margin-bottom:15px}
.service-redesign .service-hero h1{font-size:clamp(32px,4vw,54px);line-height:1.27;letter-spacing:-.045em;color:#fff;margin:12px 0 16px;font-weight:900}
.service-redesign .service-hero .service-highlight{color:#40b5ff;position:relative;display:inline;box-decoration-break:clone;-webkit-box-decoration-break:clone;background:linear-gradient(#f34450,#f34450) left bottom/0 4px no-repeat;animation:service-underline 1.1s .6s ease forwards}
@keyframes service-underline{to{background-size:100% 4px}}
.service-redesign .service-hero p{font-size:15px;color:#d3e2f2;max-width:680px;line-height:1.8}
.service-redesign .service-hero .cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
.service-redesign .service-hero .btn,.service-redesign .service-final-cta .btn{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:15px 24px;border-radius:11px;font-size:15px;font-weight:800;text-decoration:none}
.service-redesign .service-hero .btn-glass{background:#fff;color:#16314b;border-color:#fff}
.service-redesign .service-block{margin:58px auto}
.service-redesign .service-section-heading{text-align:center;margin-bottom:27px}
.service-redesign .service-kicker{display:block;color:#50aeff;font-size:11px;letter-spacing:.12em;font-weight:900;margin-bottom:9px}
.service-redesign .service-section-heading h2{color:#fff;font-size:clamp(27px,3vw,38px);letter-spacing:-.04em;margin:0 0 11px}
.service-redesign .service-section-heading h2 em{font-style:normal;color:#42b5ff}
.service-redesign .service-section-heading p{color:#b5c9df;font-size:14px;margin:0;line-height:1.7}
.service-redesign .service-featured-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:16px}
.service-redesign .service-featured-card{position:relative;display:flex;flex-direction:column;min-width:0;background:#102a41;border:1px solid #2a5680;border-radius:12px;overflow:hidden;text-decoration:none;color:#fff;transition:transform .25s,border-color .25s,box-shadow .25s}
.service-redesign .service-featured-card:hover{transform:translateY(-6px);border-color:#59b0ff;box-shadow:0 16px 32px #0004}
.service-redesign .service-featured-photo{position:relative;height:150px;overflow:hidden}
.service-redesign .service-featured-photo img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s}
.service-redesign .service-featured-card:hover img{transform:scale(1.07)}
.service-redesign .service-featured-icon{display:grid;place-items:center;position:absolute;top:127px;left:15px;width:53px;height:53px;border-radius:50%;background:linear-gradient(140deg,#2688ff,#0954d7);box-shadow:0 7px 15px #001f4d70}
.service-redesign .service-featured-icon svg{width:27px;height:27px}
.service-redesign .service-featured-body{padding:40px 15px 18px;flex:1;position:relative}
.service-redesign .service-featured-body strong{display:block;color:#fff;font-size:17px;margin-bottom:9px}
.service-redesign .service-featured-body p{color:#c0d1e2;font-size:12px;line-height:1.7;margin:0 0 8px}
.service-redesign .service-featured-arrow{position:absolute;right:13px;bottom:14px;color:#50aeff;font-size:20px}
.service-redesign .service-process-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:20px}
.service-redesign .service-process-card{position:relative;min-height:160px;padding:22px 12px 17px;text-align:center;border:1px solid #28649d;border-radius:12px;background:#0c263d}
.service-redesign .service-process-card:not(:last-child):after{content:"›";position:absolute;right:-16px;top:50%;transform:translateY(-50%);color:#39aaff;font-size:30px}
.service-redesign .service-process-num{position:absolute;top:0;left:0;background:#30aaf9;color:#062540;font-size:12px;font-weight:900;padding:6px 9px;border-radius:10px 0 10px 0}
.service-redesign .service-process-icon{display:grid;place-items:center;margin:0 auto 15px;width:56px;height:56px;border-radius:50%;background:#115fe0;color:white}
.service-redesign .service-process-icon svg{width:28px;height:28px}
.service-redesign .service-process-card strong{display:block;font-size:15px;color:white}
.service-redesign .service-process-card p{font-size:12px;line-height:1.65;color:#c1d2e4;margin:8px 0 0}
.service-redesign .service-benefit-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.service-redesign .service-benefit{display:flex;align-items:center;gap:14px;background:#0d2a45;border:1px solid #2b5a86;border-radius:12px;padding:22px 17px}
.service-redesign .service-benefit-symbol{display:grid;place-items:center;width:49px;height:49px;flex:0 0 49px;border-radius:50%;background:#125cda;color:#fff;font-size:24px;font-weight:900}
.service-redesign .service-benefit strong{display:block;color:#fff;font-size:15px;margin-bottom:6px}
.service-redesign .service-benefit p{font-size:12px;color:#c2d4e5;line-height:1.6;margin:0}
.service-redesign .service-directory{padding-top:25px;border-top:1px solid #204362}
.service-redesign .service-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:11px}
.service-redesign .service-directory-card{min-height:125px;padding:15px;background:#10283e;border:1px solid #2b4f70;border-radius:10px;box-shadow:none}
.service-redesign .service-directory-card strong{font-size:14px;color:#fff}
.service-redesign .service-directory-card>span:not(.service-number){font-size:11px;color:#bed0e2}
.service-redesign .service-directory-icon{width:38px;height:38px;background:#1453a2!important;color:#eaf6ff!important;border-color:#276eae;border-radius:10px}
.service-redesign .service-directory-icon svg{width:21px;height:21px}
.service-redesign .service-directory-card .service-card-top{margin-bottom:8px}
.service-redesign .service-directory-card .service-card-arrow{background:#102b46;color:#50acff;border-color:#2b5b83}
.service-redesign .service-number{top:25px;left:64px;color:#7aaedc}
.service-redesign .service-support{border:1px solid #315d85;background:linear-gradient(115deg,#102c47,#0a2137);padding:24px;border-radius:14px}
.service-redesign .service-support h2{color:#fff}
.service-redesign .service-support p{color:#bcd0e4}
.service-redesign .service-final-cta{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:230px;border:1px solid #3470a6;border-radius:14px;background:linear-gradient(90deg,#061e34a8 0%,#08223b 45%,#0a2844 100%),url('/images/work-status/부산진구 미용실 철거.webp') left center/cover no-repeat;padding:38px 42px}
.service-redesign .service-final-cta h2{color:#fff;font-size:clamp(25px,3vw,35px);margin:0 0 9px}
.service-redesign .service-final-cta h2 em{color:#43b5ff;font-style:normal}
.service-redesign .service-final-cta p{color:#d0e0ef;font-size:13px}
.service-redesign .service-final-cta .cta-row{display:flex;gap:10px;flex-wrap:wrap}
.service-redesign .service-final-cta .btn-glass{background:white;color:#102b45}
@media(max-width:1050px){.service-redesign .service-featured-grid{grid-template-columns:repeat(3,1fr)}.service-redesign .service-process-grid{grid-template-columns:repeat(3,1fr)}.service-redesign .service-process-card:after{display:none}.service-redesign .service-benefit-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:720px){.service-redesign .service-hero{min-height:0;padding:60px 18px}.service-redesign .service-hero h1{font-size:clamp(29px,8vw,40px)}.service-redesign .service-hero .btn{min-height:50px;padding:12px 15px;font-size:13px}.service-redesign .service-block{margin:40px auto}.service-redesign .service-featured-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.service-redesign .service-featured-photo{height:115px}.service-redesign .service-featured-icon{top:96px;width:42px;height:42px}.service-redesign .service-featured-icon svg{width:22px;height:22px}.service-redesign .service-featured-body{padding:32px 12px 13px}.service-redesign .service-featured-body strong{font-size:14px}.service-redesign .service-featured-body p{font-size:11px}.service-redesign .service-process-grid{grid-template-columns:1fr;gap:10px}.service-redesign .service-process-card{min-height:0;display:flex;align-items:center;text-align:left;gap:15px;padding:15px 18px}.service-redesign .service-process-icon{margin:0;flex:0 0 48px;width:48px;height:48px}.service-redesign .service-process-card p{margin:3px 0 0}.service-redesign .service-benefit-grid{grid-template-columns:1fr;gap:10px}.service-redesign .service-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.service-redesign .service-final-cta{padding:27px 19px;flex-direction:column;align-items:flex-start}.service-redesign .service-final-cta .btn{min-height:48px;font-size:13px}.service-redesign .service-support{padding:20px 16px}}

/* Fix directory icon clipping caused by shared .service-card span styles. */
.service-redesign .service-directory-card .service-card-top{display:flex!important;align-items:center!important;justify-content:space-between!important;width:100%!important;min-height:44px!important}
.service-redesign .service-directory-card .service-directory-icon{display:flex!important;align-items:center!important;justify-content:center!important;position:relative!important;overflow:visible!important;flex:0 0 44px!important;width:44px!important;height:44px!important;min-width:44px!important;min-height:44px!important;padding:0!important;border:1px solid #3578c7!important;border-radius:12px!important;background:#1555a3!important;color:#ffffff!important;line-height:1!important;box-sizing:border-box!important}
.service-redesign .service-directory-card .service-directory-icon svg{display:block!important;position:static!important;flex:none!important;width:25px!important;height:25px!important;min-width:25px!important;min-height:25px!important;max-width:25px!important;max-height:25px!important;overflow:visible!important;fill:none!important;stroke:#ffffff!important;stroke-width:1.8!important;opacity:1!important;transform:none!important}
.service-redesign .service-directory-card .service-directory-icon svg path,.service-redesign .service-directory-card .service-directory-icon svg rect,.service-redesign .service-directory-card .service-directory-icon svg circle{stroke:#ffffff!important;fill:none!important}
.service-redesign .service-directory-card .service-card-arrow{display:flex!important;align-items:center!important;justify-content:center!important;flex:0 0 30px!important;width:30px!important;height:30px!important}
@media(prefers-reduced-motion:reduce){.service-redesign .service-hero .service-highlight{animation:none;background-size:100% 4px}}
`;
const featuredServices=[
 {slug:"commercial-store",title:"상가 철거",description:"식당·카페·미용실 등 다양한 상가 철거",image:"/images/work-status/서면 음식점 철거.webp"},
 {slug:"office",title:"사무실 철거",description:"사무실·학원·업무공간 철거",image:"/images/work-status/해운대 학원 원상복구.webp"},
 {slug:"house",title:"주택 철거",description:"주택 내부 철거와 원상복구",image:"/images/work-status/부산진구 미용실 철거.webp"},
 {slug:"factory",title:"공장 철거",description:"공장·창고·대형시설 철거 상담",image:"/images/work-status/덕천동 돈까스집.webp"},
 {slug:"interior",title:"인테리어 철거",description:"내부 인테리어 및 부분 철거",image:"/images/work-status/동래구 횟집 원상복구.webp"}
];
const steps=[
 {title:"상담 및 문의",desc:"전화 또는 카카오톡으로 현장 상담",icon:"commercial-store"},
 {title:"현장 방문 견적",desc:"전문가의 정확한 현장 진단 및 견적",icon:"office"},
 {title:"계약 진행",desc:"작업 범위 및 일정 확정",icon:"academy"},
 {title:"철거 작업 진행",desc:"안전하고 꼼꼼한 철거 시공",icon:"factory"},
 {title:"원상복구 및 완료",desc:"마무리 정리 및 사후 안내",icon:"interior"}
];
export default function Page(){
 return <main className="page-shell service-redesign">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}}/>
  <style dangerouslySetInnerHTML={{__html:servicePageCss}}/>
  <header className="service-hero"><div className="service-hero-inner"><div className="service-breadcrumb">HOME &gt; 서비스 소개</div><span className="service-kicker">BUSAN DEMOLITION SERVICE</span><h1>부산 철거업체,<br/><span className="service-highlight">철거부터 원상복구 폐업지원금</span><br/>신청까지 원스톱 해드립니다.</h1><p>상가, 사무실, 주택, 공장 등 다양한 공간의 철거부터 원상복구까지 올바른 철거가 함께합니다. 폐업지원금은 대상 및 신청 요건 확인을 안내합니다.</p><div className="cta-row"><a className="btn btn-primary" href="tel:01066484886">☎ 전화문의: 010-6648-4886</a><a className="btn btn-glass" href={inquiryUrl}>● 사진 몇장으로 카톡문의: mx4885</a></div></div></header>
  <section className="service-container service-block"><div className="service-section-heading"><span className="service-kicker">OLBAREUN DEMOLITION SERVICE</span><h2>올바른 철거 <em>서비스 분야</em></h2><p>다양한 현장 경험을 바탕으로 공간별 철거와 원상복구 범위를 안내합니다.</p></div><div className="service-featured-grid">{featuredServices.map(item=><a href={`/service/${item.slug}`} className="service-featured-card" key={item.slug}><div className="service-featured-photo"><img src={item.image} alt={item.title+" 관련 철거 현장"} loading="lazy"/></div><span className="service-featured-icon"><ServiceIcon slug={item.slug}/></span><div className="service-featured-body"><strong>{item.title}</strong><p>{item.description}</p><span className="service-featured-arrow" aria-hidden="true">→</span></div></a>)}</div></section>
  <section className="service-container service-block"><div className="service-section-heading"><h2>한눈에 보는 <em>철거 진행 과정</em></h2><p>현장 상황에 맞춘 체계적인 절차로 안전하고 신속하게 진행합니다.</p></div><div className="service-process-grid">{steps.map((item,i)=><div className="service-process-card" key={item.title}><span className="service-process-num">{String(i+1).padStart(2,"0")}</span><span className="service-process-icon"><ServiceIcon slug={item.icon}/></span><div><strong>{item.title}</strong><p>{item.desc}</p></div></div>)}</div></section>
  <section className="service-container service-block"><div className="service-section-heading"><h2>올바른 철거가 <em>특별한 이유</em></h2></div><div className="service-benefit-grid">{[{symbol:"✓",title:"안전한 시공",text:"현장 조건에 맞는 안전한 철거 절차 안내"},{symbol:"◷",title:"신속한 진행",text:"일정과 현장 상황을 고려한 작업 진행"},{symbol:"▤",title:"폐업지원금 연계",text:"신청 전 지원 조건과 준비 사항 안내"},{symbol:"👍",title:"합리적인 비용",text:"철거 범위에 따른 투명한 견적 상담"}].map(x=><div className="service-benefit" key={x.title}><span className="service-benefit-symbol">{x.symbol}</span><div><strong>{x.title}</strong><p>{x.text}</p></div></div>)}</div></section>
  <section className="service-container service-block service-directory"><div className="service-section-heading"><span className="service-kicker">ALL SERVICES</span><h2>업종별 <em>철거 서비스 전체 보기</em></h2><p>기존 업종별 서비스 페이지도 그대로 이용할 수 있습니다.</p></div><div className="service-grid">{orderedServices.map(([slug,item],i)=>{const tone=serviceTone[slug]??"blue";return <a key={slug} className={`service-card service-directory-card tone-${tone}`} href={`/service/${slug}`}><span className="service-number">{String(i+1).padStart(2,"0")}</span><div className="service-card-top"><span className="service-directory-icon"><ServiceIcon slug={slug}/></span><span className="service-card-arrow" aria-hidden="true">→</span></div><strong>{item.primary}</strong><span>{item.summary}</span></a>})}</div></section>
  <section className="service-container service-block service-support"><span className="service-kicker">SERVICE SUPPORT</span><h2>폐업 예정이라면 철거 전에 지원 대상도 확인하세요</h2><p>점포철거비 지원은 임차관계, 폐업일, 면적, 인정비용과 증빙에 따라 달라집니다. 공사 전에 최신 조건과 신청 순서를 확인하세요.</p><div className="cta-row"><a className="btn btn-primary" href="/support">지원 대상·제외조건 확인</a><a className="btn btn-glass" href="/guide/demolition-estimate-checklist">견적 비교 체크리스트</a></div></section>
  <section className="service-container service-block service-final-cta"><div><span className="service-kicker">FREE FIELD ESTIMATE</span><h2>무료 <em>현장 견적</em> 신청하세요!</h2><p>사진 몇 장만으로도 철거 범위와 견적 상담을 시작할 수 있습니다.</p><div className="cta-row"><a className="btn btn-primary" href="tel:01066484886">☎ 전화문의: 010-6648-4886</a><a className="btn btn-glass" href={inquiryUrl}>● 카톡문의: mx4885</a></div></div></section>
 </main>;
}
