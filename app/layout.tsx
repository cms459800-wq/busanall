import "./globals.css";
import SeoImageRail from "@/components/SeoImageRail";

const baseUrl = "https://www.parcelout.kr";
const inquiryUrl = "https://maxpool.olbarun.kr/";
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const naverSiteVerification = process.env.NAVER_SITE_VERIFICATION?.trim();

export const metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "올바른철거",
  title: { default: "올바른철거 | 부산 철거·원상복구", template: "%s | 올바른철거" },
  description: "부산 16개 구·군의 철거·원상복구, 업종별 철거서비스, 폐업지원금과 현장 가이드를 제공하는 올바른철거입니다.",
  alternates: { canonical: "/" },
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(naverSiteVerification ? { other: { "naver-site-verification": naverSiteVerification } } : {})
  },
  openGraph: { type: "website", locale: "ko_KR", url: baseUrl, siteName: "올바른철거", title: "올바른철거 | 부산 철거·원상복구", description: "부산 16개 구·군의 철거·원상복구, 업종별 철거서비스, 폐업지원금과 현장 가이드를 제공합니다." },
  twitter: { card: "summary", title: "올바른철거 | 부산 철거·원상복구", description: "부산 철거·원상복구, 업종별 서비스와 지역별 현장 가이드를 확인하세요." }
};

const navItems = [["/service","철거서비스","service","blue"],["/busan","부산지역","location","cyan"],["/guide","철거가이드","guide","purple"],["/support","폐업지원금","support","green"],["/projects","시공사례","project","orange"]] as const;
const partnerSites=[
 {category:"전국 이사업체",name:"올바른 이사",href:"https://5km.kr/",tone:"blue"},
 {category:"포장이사전문업체",name:"온리드 이사",href:"https://onled.kr/",tone:"cyan"},
 {category:"입주청소견적",name:"올바른 청소",href:"https://xn--6w2bt1cb4gipf6vj.kr/",tone:"green"},
 {category:"태아 보험 비교분석",name:"올바른 보험",href:"https://www.adlines.co.kr/%ED%83%9C%EC%95%84%EB%B3%B4%ED%97%98",tone:"purple"},
 {category:"부산 철거 업체",name:"까치 하우스",href:"https://maxpool.olbarun.kr/",tone:"orange"}
] as const;

function NavIcon({ type }: { type: string }) {
 const p={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
 if(type==="service")return <svg {...p}><path d="M14 6l4-4 4 4-4 4M17 7L8 16M6 14l4 4-3 3-4-4z"/></svg>;
 if(type==="location")return <svg {...p}><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></svg>;
 if(type==="guide")return <svg {...p}><path d="M5 4h10l4 4v12H5zM15 4v5h4M8 12h8M8 16h6"/></svg>;
 if(type==="support")return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M5 21c.7-4 3.1-6 7-6 2.1 0 3.8.6 5 1.7M16 20l2 2 4-5"/></svg>;
 if(type==="project")return <svg {...p}><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6l1-2h6l1 2"/><circle cx="12" cy="13" r="3"/></svg>;
 if(type==="phone")return <svg {...p}><path d="M6 3h4l2 5-2.4 1.8a15 15 0 0 0 4.6 4.6L16 12l5 2v4c0 1.7-1.3 3-3 3C9.7 21 3 14.3 3 6c0-1.7 1.3-3 3-3z"/></svg>;
 if(type==="estimate")return <svg {...p}><path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h6M9 16h4"/><path d="M8 8h3"/></svg>;
 return <svg {...p}><circle cx="12" cy="12" r="9"/></svg>;
}

const organizationSchema={"@context":"https://schema.org","@type":"Organization",name:"올바른철거",legalName:"까치 하우스",url:baseUrl,logo:`${baseUrl}/images/brand/logo.png`,telephone:"010-6648-4886",email:"c0810@naver.com",identifier:{"@type":"PropertyValue",propertyID:"사업자등록번호",value:"458-21-02084"},address:{"@type":"PostalAddress",streetAddress:"까치고개로 47 (괴정동)",addressLocality:"사하구",addressRegion:"부산광역시",addressCountry:"KR"},contactPoint:{"@type":"ContactPoint",contactType:"customer service",telephone:"010-6648-4886",email:"c0810@naver.com",areaServed:"KR",availableLanguage:"Korean"},areaServed:{"@type":"AdministrativeArea",name:"부산광역시"},knowsAbout:["철거","원상복구","상가철거","폐업철거","점포철거"]};

const mobileActionCss=`
.mobile-action-bar{display:none}.site-header{min-height:74px}.brand{display:flex;align-items:center;height:62px;overflow:hidden}.brand-logo{display:block;width:auto;height:60px;max-width:210px;object-fit:contain;object-position:left center}.footer-brand{display:inline-flex;align-items:center;text-decoration:none}.footer-logo{display:block;width:auto;height:88px;max-width:290px;object-fit:contain;object-position:left center}.nav-icon{display:none;width:24px;height:24px;border-radius:8px;align-items:center;justify-content:center;flex:0 0 auto}.nav-icon svg{width:14px;height:14px}.nav-tone-blue{background:#eef4ff;color:#2458d8}.nav-tone-cyan{background:#ecf9fb;color:#087b8c}.nav-tone-purple{background:#f5f0ff;color:#7048c8}.nav-tone-green{background:#edf9f2;color:#18794e}.nav-tone-orange{background:#fff4e8;color:#a9570a}.header-cta{display:inline-flex!important;align-items:center;gap:7px}.header-cta .action-icon{width:24px;height:24px;border-radius:8px;display:grid;place-items:center;background:rgba(255,255,255,.16);color:#fff}.header-cta .action-icon svg{width:14px;height:14px}
.footer-quick-nav{max-width:1220px;margin:0 auto 28px;padding:22px 0;border-top:1px solid rgba(148,163,184,.18);border-bottom:1px solid rgba(148,163,184,.18)}.footer-quick-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.footer-quick-link{display:flex;align-items:center;justify-content:center;gap:10px;min-height:58px;padding:10px 12px;border:1px solid rgba(148,163,184,.16);border-radius:14px;background:rgba(255,255,255,.035);color:#dbe4f0;text-decoration:none;font-size:13px;font-weight:800;transition:.2s ease}.footer-quick-link:hover{transform:translateY(-2px);background:rgba(255,255,255,.07);border-color:rgba(148,163,184,.3)}.footer-quick-link .nav-icon{display:inline-flex;width:34px;height:34px;border-radius:11px}.footer-quick-link .nav-icon svg{width:18px;height:18px}
.footer-links a{display:flex;align-items:center;gap:8px}.footer-links .nav-icon{display:inline-flex}.partner-footer{max-width:1220px;margin:0 auto 30px;padding:25px 0 27px;border-bottom:1px solid rgba(148,163,184,.22)}.partner-footer-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:15px}.partner-footer-kicker{display:block;margin-bottom:5px;font-size:11px;font-weight:850;letter-spacing:.12em;color:#94a3b8}.partner-footer h2{margin:0;font-size:18px;letter-spacing:-.025em;color:#f8fafc}.partner-footer-head p{margin:0;font-size:12.5px;color:#94a3b8}.partner-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:9px}.partner-card{display:block;min-width:0;padding:13px 14px;border:1px solid rgba(148,163,184,.18);border-radius:12px;background:rgba(255,255,255,.035);text-decoration:none;transition:.2s ease}.partner-card:hover{transform:translateY(-2px);background:rgba(255,255,255,.07);border-color:rgba(148,163,184,.34)}.partner-category{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:5px;font-size:11px;color:#94a3b8}.partner-name{display:flex;align-items:center;gap:7px;font-size:13.5px;font-weight:800;color:#e2e8f0}.partner-dot{width:7px;height:7px;border-radius:50%;flex:0 0 auto}.partner-tone-blue .partner-dot{background:#60a5fa}.partner-tone-cyan .partner-dot{background:#22d3ee}.partner-tone-green .partner-dot{background:#4ade80}.partner-tone-purple .partner-dot{background:#c084fc}.partner-tone-orange .partner-dot{background:#fb923c}.partner-contact{display:flex;align-items:center;gap:8px;margin-top:14px;font-size:12.5px;color:#94a3b8}.partner-contact a{color:#cbd5e1;font-weight:750}.mobile-action-bar .action-icon{width:27px;height:27px;border-radius:9px;display:grid;place-items:center;margin-right:7px}.mobile-action-bar .action-icon svg{width:15px;height:15px}.mobile-action-call .action-icon{background:#f1f4f7;color:#475467}.mobile-action-estimate .action-icon{background:rgba(255,255,255,.16);color:#fff}
@media(max-width:900px){.partner-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.footer-quick-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:760px){body{padding-bottom:72px}.site-header{min-height:62px}.brand{height:50px}.brand-logo{height:48px;max-width:165px}.footer-logo{height:72px;max-width:235px}.mobile-nav-inner a{display:flex;align-items:center;gap:7px}.mobile-nav-inner .nav-icon{display:inline-flex}.partner-footer{padding:18px 0 22px;margin-bottom:23px}.partner-footer-head{display:block}.partner-footer-head p{margin-top:5px}.partner-grid{grid-template-columns:1fr 1fr}.partner-card{padding:11px 12px}.partner-name{font-size:12.5px}.footer-quick-nav{padding:17px 0;margin-bottom:22px}.footer-quick-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.footer-quick-link{justify-content:flex-start;min-height:64px;padding:12px;border-radius:13px;font-size:12.5px}.footer-quick-link .nav-icon{width:36px;height:36px}.footer-quick-link:nth-child(5){grid-column:1/-1}.mobile-action-bar{position:fixed;left:0;right:0;bottom:0;z-index:80;display:grid;grid-template-columns:.88fr 1.12fr;gap:8px;padding:9px 12px calc(9px + env(safe-area-inset-bottom));background:rgba(255,255,255,.97);border-top:1px solid #e5e9f1;box-shadow:0 -8px 24px rgba(17,24,39,.08);backdrop-filter:blur(14px)}.mobile-action-bar a{display:flex;align-items:center;justify-content:center;min-height:48px;border-radius:11px;text-decoration:none;font-size:13.5px;font-weight:800;letter-spacing:-.02em}.mobile-action-call{border:1px solid #dce2eb;background:#fff;color:#253047}.mobile-action-estimate{border:1px solid #315cff;background:#315cff;color:#fff;box-shadow:0 5px 12px rgba(49,92,255,.18)}.site-footer{padding-bottom:30px}}
@media(max-width:430px){.partner-grid{grid-template-columns:1fr}}
`;

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="ko"><body>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/>
  <style dangerouslySetInnerHTML={{__html:mobileActionCss}}/>
  <div className="site-topbar">부산 16개 구·군 · 업종별 철거 · 원상복구 · 상담 010-6648-4886</div>
  <header className="site-header"><a className="brand" href="/" aria-label="올바른철거 홈"><img className="brand-logo" src="/images/brand/logo.png" alt="올바른철거"/></a><nav aria-label="주요 메뉴">{navItems.map(([href,label])=><a href={href} key={href}>{label}</a>)}</nav><a className="header-cta" href={inquiryUrl}><span className="action-icon"><NavIcon type="estimate"/></span>무료견적</a></header>
  <nav className="mobile-nav" aria-label="모바일 주요 메뉴"><div className="mobile-nav-inner">{navItems.map(([href,label,type,tone])=><a href={href} key={href}><span className={`nav-icon nav-tone-${tone}`}><NavIcon type={type}/></span>{label}</a>)}</div></nav>
  {children}<SeoImageRail/>
  <footer className="site-footer">
   <section className="partner-footer" aria-labelledby="partner-sites-heading"><div className="partner-footer-head"><div><span className="partner-footer-kicker">PARTNER NETWORK</span><h2 id="partner-sites-heading">제휴 사이트</h2></div><p>생활·사업에 필요한 전문 서비스를 함께 확인하세요.</p></div><div className="partner-grid">{partnerSites.map(site=><a className={`partner-card partner-tone-${site.tone}`} href={site.href} key={site.href}><span className="partner-category">{site.category}</span><strong className="partner-name"><span className="partner-dot" aria-hidden="true"/>{site.name}</strong></a>)}</div><div className="partner-contact"><span>제휴 문의</span><a href="mailto:c0810@naver.com">c0810@naver.com</a></div></section>
   <nav className="footer-quick-nav" aria-label="푸터 주요 메뉴"><div className="footer-quick-grid">{navItems.map(([href,label,type,tone])=><a className="footer-quick-link" href={href} key={href}><span className={`nav-icon nav-tone-${tone}`}><NavIcon type={type}/></span><span>{label}</span></a>)}</div></nav>
   <div><a className="footer-brand" href="/" aria-label="올바른철거 홈"><img className="footer-logo" src="/images/brand/logo.png" alt="올바른철거"/></a><p>부산 철거 · 원상복구 · 폐업지원 안내</p><p>Tel. <a href="tel:01066484886">010-6648-4886</a> · Fax. 0508-956-6109 · <a href="mailto:c0810@naver.com">c0810@naver.com</a></p><p>부산광역시 사하구 까치고개로 47 (괴정동) · 상호: 까치 하우스 · 사업자등록번호: 458-21-02084</p><p>업무 제휴 문의 <a href="mailto:c0810@naver.com">c0810@naver.com</a></p><p><a href="/company">회사정보</a> · <a href="/privacy">개인정보처리 안내</a></p></div>
   <div className="footer-links"><a href="/estimate"><span className="nav-icon nav-tone-blue"><NavIcon type="estimate"/></span>견적 준비정보</a><a href={inquiryUrl}><span className="nav-icon nav-tone-orange"><NavIcon type="estimate"/></span>현장견적 문의</a><a href="/company">회사정보</a><a href="/privacy">개인정보처리 안내</a></div>
  </footer>
  <div className="mobile-action-bar" aria-label="빠른 상담"><a className="mobile-action-call" href="tel:01066484886" aria-label="010-6648-4886 전화상담"><span className="action-icon"><NavIcon type="phone"/></span>전화상담</a><a className="mobile-action-estimate" href={inquiryUrl}><span className="action-icon"><NavIcon type="estimate"/></span>무료견적 문의</a></div>
 </body></html>
}
