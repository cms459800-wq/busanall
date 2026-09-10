import "./globals.css";
import SeoImageRail from "@/components/SeoImageRail";

const baseUrl="https://www.parcelout.kr";
const inquiryUrl="https://maxpool.olbarun.kr/";
const contactEmail="chlpjy@naver.com";
const googleSiteVerification=process.env.GOOGLE_SITE_VERIFICATION?.trim();
const naverSiteVerification=process.env.NAVER_SITE_VERIFICATION?.trim();

export const metadata={
 metadataBase:new URL(baseUrl),applicationName:"올바른철거",
 title:{default:"올바른철거 | 부산 철거·원상복구",template:"%s | 올바른철거"},
 description:"부산 16개 구·군의 철거·원상복구, 업종별 철거서비스, 폐업지원금과 현장 가이드를 제공하는 올바른철거입니다.",
 alternates:{canonical:"/"},
 verification:{...(googleSiteVerification?{google:googleSiteVerification}:{}),...(naverSiteVerification?{other:{"naver-site-verification":naverSiteVerification}}:{})},
 openGraph:{type:"website",locale:"ko_KR",url:baseUrl,siteName:"올바른철거",title:"올바른철거 | 부산 철거·원상복구",description:"부산 16개 구·군의 철거·원상복구, 업종별 철거서비스, 폐업지원금과 현장 가이드를 제공합니다."},
 twitter:{card:"summary",title:"올바른철거 | 부산 철거·원상복구",description:"부산 철거·원상복구, 업종별 서비스와 지역별 현장 가이드를 확인하세요."}
};

const navItems=[
 ["/service","철거서비스","service","blue"],
 ["/busan","부산지역","location","cyan"],
 ["/guide","철거가이드","guide","purple"],
 ["/support","폐업지원금","support","green"],
 ["/projects","시공사례","project","orange"]
] as const;

const partnerSites=[
 {category:"전국 이사업체",name:"올바른 이사",href:"https://5km.kr/",tone:"blue",icon:"truck",desc:"전국 이사견적, 믿을 수 있는 이사파트너"},
 {category:"포장이사전문업체",name:"온리드 이사",href:"https://onled.kr/",tone:"green",icon:"home",desc:"합리적인 이사, 간편한 비교견적"},
 {category:"입주청소견적",name:"올바른 청소",href:"https://xn--6w2bt1cb4gipf6vj.kr/",tone:"purple",icon:"clean",desc:"새로운 시작, 깨끗한 공간"},
 {category:"태아 보험 비교분석",name:"올바른 보험",href:"https://www.adlines.co.kr/%ED%83%9C%EC%95%84%EB%B3%B4%ED%97%98",tone:"rose",icon:"shield",desc:"가족을 위한 보험 비교 정보"},
 {category:"부산 철거 업체",name:"까치 하우스",href:"https://maxpool.olbarun.kr/",tone:"orange",icon:"helmet",desc:"부산 철거·원상복구 현장 상담"}
] as const;

function Icon({type}:{type:string}){
 const p={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
 if(type==="service")return <svg {...p}><path d="M14 6l4-4 4 4-4 4M17 7L8 16M6 14l4 4-3 3-4-4z"/></svg>;
 if(type==="location")return <svg {...p}><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></svg>;
 if(type==="guide")return <svg {...p}><path d="M5 4h10l4 4v12H5zM15 4v5h4M8 12h8M8 16h6"/></svg>;
 if(type==="support")return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M5 21c.7-4 3.1-6 7-6 2.1 0 3.8.6 5 1.7M16 20l2 2 4-5"/></svg>;
 if(type==="project")return <svg {...p}><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6l1-2h6l1 2"/><circle cx="12" cy="13" r="3"/></svg>;
 if(type==="phone")return <svg {...p}><path d="M6 3h4l2 5-2.4 1.8a15 15 0 0 0 4.6 4.6L16 12l5 2v4c0 1.7-1.3 3-3 3C9.7 21 3 14.3 3 6c0-1.7 1.3-3 3-3z"/></svg>;
 if(type==="estimate")return <svg {...p}><path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h6M9 16h4"/></svg>;
 if(type==="mail")return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>;
 if(type==="truck")return <svg {...p}><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
 if(type==="home")return <svg {...p}><path d="M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6"/></svg>;
 if(type==="clean")return <svg {...p}><path d="M15 3l6 6-10 10H5v-6zM13 5l6 6"/></svg>;
 if(type==="shield")return <svg {...p}><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM9 12l2 2 4-5"/></svg>;
 if(type==="helmet")return <svg {...p}><path d="M5 15v-2a7 7 0 0 1 14 0v2M3 15h18v3H3zM9 13V7M15 13V7"/></svg>;
 return <svg {...p}><circle cx="12" cy="12" r="9"/></svg>;
}

const organizationSchema={"@context":"https://schema.org","@type":"Organization",name:"올바른철거",legalName:"올바른",url:baseUrl,logo:`${baseUrl}/images/brand/logo.png`,telephone:"010-6648-4886",email:contactEmail,identifier:{"@type":"PropertyValue",propertyID:"사업자등록번호",value:"808-66-00808"},address:{"@type":"PostalAddress",streetAddress:"시랑로 132번길 17-4 504",addressLocality:"북구",addressRegion:"부산광역시",addressCountry:"KR"},contactPoint:{"@type":"ContactPoint",contactType:"customer service",telephone:"010-6648-4886",email:contactEmail,areaServed:"KR",availableLanguage:"Korean"},areaServed:{"@type":"AdministrativeArea",name:"부산광역시"},knowsAbout:["철거","원상복구","상가철거","폐업철거","점포철거"]};

const shellCss=`
.mobile-action-bar{display:none}.site-header{min-height:74px}.brand{display:flex;align-items:center;height:62px;overflow:hidden}.brand-logo{display:block;width:auto;height:60px;max-width:210px;object-fit:contain;object-position:left center}.header-cta{display:inline-flex!important;align-items:center;gap:7px}.header-cta .action-icon{width:24px;height:24px;border-radius:8px;display:grid;place-items:center;background:rgba(255,255,255,.16);color:#fff}.header-cta .action-icon svg{width:14px;height:14px}
.site-footer{display:block!important;width:100%!important;max-width:none!important;margin:0!important;padding:0!important;background:linear-gradient(180deg,#f8fbff 0%,#f3f8fd 100%)!important;color:#334155!important;border-top:1px solid #e3eaf2!important}.footer-shell{width:min(1180px,calc(100% - 40px));margin:0 auto;padding:48px 0 28px}.footer-partners{padding-bottom:34px;border-bottom:1px solid #dce6ef}.footer-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:20px}.footer-eyebrow{display:block;margin-bottom:4px;color:#7086a0;font-size:11px;font-weight:850;letter-spacing:.16em}.footer-section-head h2{margin:0;color:#132238;font-size:24px;line-height:1.25;letter-spacing:-.035em}.footer-section-head p{margin:0;color:#738399;font-size:13px}.footer-partner-mail{display:inline-flex;align-items:center;gap:8px;color:#4b6078;font-size:13px;white-space:nowrap}.footer-partner-mail svg{width:18px;height:18px;color:#315cff}.footer-partner-mail a{color:#1f5fe0;font-weight:800;text-decoration:none}.partner-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}.partner-card{min-width:0;padding:18px 16px;border:1px solid #dce6ef;border-radius:16px;background:#fff;text-decoration:none;box-shadow:0 4px 14px rgba(44,68,96,.035);transition:.2s ease}.partner-card:hover{transform:translateY(-2px);border-color:#c9d8e7;box-shadow:0 10px 24px rgba(44,68,96,.08)}.partner-card-top{display:flex;align-items:center;gap:10px;margin-bottom:14px}.partner-icon{display:grid;place-items:center;width:42px;height:42px;border-radius:14px;flex:0 0 auto}.partner-icon svg{width:22px;height:22px}.partner-category{display:block;color:#6f7f92;font-size:11.5px;line-height:1.35}.partner-name{display:block;margin-top:3px;color:#1e293b;font-size:16px;line-height:1.3;letter-spacing:-.025em}.partner-desc{display:block;color:#7c8b9f;font-size:11.5px;line-height:1.55}.partner-tone-blue .partner-icon{background:#eaf2ff;color:#2563eb}.partner-tone-green .partner-icon{background:#e8f8ef;color:#15945b}.partner-tone-purple .partner-icon{background:#f0eaff;color:#7447d4}.partner-tone-rose .partner-icon{background:#fff0f2;color:#d73352}.partner-tone-orange .partner-icon{background:#fff1df;color:#d97706}
.footer-quick-nav{padding:24px 0;border-bottom:1px solid #dce6ef}.footer-quick-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.footer-quick-link{display:flex;align-items:center;justify-content:center;gap:10px;min-height:54px;padding:10px 12px;border:0;border-radius:13px;background:transparent;color:#31445c;text-decoration:none;font-size:13.5px;font-weight:800}.footer-quick-link:hover{background:#fff}.nav-icon{display:inline-flex!important;width:36px;height:36px;border-radius:12px;align-items:center;justify-content:center;flex:0 0 auto}.nav-icon svg{width:18px;height:18px}.nav-tone-blue{background:#eaf2ff;color:#2563eb}.nav-tone-cyan{background:#e7f8fb;color:#0c8599}.nav-tone-purple{background:#f0eaff;color:#7447d4}.nav-tone-green{background:#e8f8ef;color:#15945b}.nav-tone-orange{background:#fff1df;color:#d97706}
.footer-company{display:grid;grid-template-columns:190px minmax(0,1fr);gap:32px;align-items:center;padding:34px 0 28px;border-bottom:1px solid #dce6ef}.footer-brand{display:flex!important;align-items:center;justify-content:center;text-decoration:none;border-right:1px solid #dce6ef;padding-right:30px}.footer-logo{display:block;width:150px!important;height:auto!important;max-height:110px!important;object-fit:contain}.footer-company-info{min-width:0}.footer-company-title{margin:0 0 13px;color:#1f334b;font-size:18px;font-weight:850;letter-spacing:-.03em}.footer-contact-row{display:flex;flex-wrap:wrap;gap:8px 20px;margin:7px 0;color:#53667d;font-size:13px}.footer-contact-row a{color:#315f9c;text-decoration:none}.footer-contact-row strong{color:#34495f}.footer-business-line{margin:8px 0 0;color:#5f7288;font-size:12.5px;line-height:1.75}.footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:22px}.footer-bottom-links{display:flex;flex-wrap:wrap;gap:8px 18px}.footer-bottom-links a{color:#65798f;text-decoration:none;font-size:12.5px}.footer-bottom-links a:hover{color:#315cff}.footer-copy{margin:0;color:#8a9aab;font-size:12px;white-space:nowrap}
@media(max-width:900px){.partner-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.partner-card:last-child{grid-column:1/-1}.footer-company{grid-template-columns:150px minmax(0,1fr)}.footer-brand{padding-right:20px}.footer-logo{width:125px!important}.footer-quick-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:760px){body{padding-bottom:72px}.site-header{min-height:62px}.brand{height:50px}.brand-logo{height:48px;max-width:165px}.footer-shell{width:min(100% - 28px,560px);padding:30px 0 22px}.footer-section-head{display:block;margin-bottom:16px}.footer-section-head h2{font-size:22px}.footer-section-head p{margin-top:6px;line-height:1.55}.footer-partner-mail{margin-top:12px}.partner-grid{grid-template-columns:1fr;gap:8px}.partner-card,.partner-card:last-child{grid-column:auto;display:flex;align-items:center;gap:12px;padding:12px 13px;border-radius:13px}.partner-card-top{display:flex;align-items:center;gap:10px;margin:0;min-width:0;flex:1}.partner-icon{width:38px;height:38px;border-radius:12px}.partner-icon svg{width:20px;height:20px}.partner-category{font-size:10.5px}.partner-name{font-size:14px}.partner-desc{display:none}.footer-quick-nav{padding:20px 0}.footer-quick-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.footer-quick-link{min-height:76px;flex-direction:column;gap:7px;padding:9px 5px;border:1px solid #dce6ef;background:#fff;font-size:11.5px;text-align:center}.footer-quick-link:nth-child(4),.footer-quick-link:nth-child(5){grid-column:auto}.footer-quick-link .nav-icon{width:36px;height:36px}.footer-company{display:block;padding:26px 0 22px}.footer-brand{justify-content:flex-start;border-right:0;padding:0 0 16px}.footer-logo{width:120px!important;max-height:80px!important}.footer-company-title{font-size:15px;margin-bottom:10px}.footer-contact-row{display:grid;grid-template-columns:1fr;gap:5px;margin:5px 0;font-size:12.5px}.footer-business-line{font-size:12px;line-height:1.7}.footer-bottom{display:block;padding-top:18px}.footer-bottom-links{justify-content:flex-start;gap:8px 14px}.footer-bottom-links a{font-size:11.5px}.footer-copy{margin-top:14px;white-space:normal;font-size:11px}.mobile-action-bar{position:fixed;left:0;right:0;bottom:0;z-index:80;display:grid;grid-template-columns:.88fr 1.12fr;gap:8px;padding:9px 12px calc(9px + env(safe-area-inset-bottom));background:rgba(255,255,255,.97);border-top:1px solid #e5e9f1;box-shadow:0 -8px 24px rgba(17,24,39,.08);backdrop-filter:blur(14px)}.mobile-action-bar a{display:flex;align-items:center;justify-content:center;min-height:48px;border-radius:11px;text-decoration:none;font-size:13.5px;font-weight:800}.mobile-action-bar .action-icon{width:27px;height:27px;border-radius:9px;display:grid;place-items:center;margin-right:7px}.mobile-action-bar .action-icon svg{width:15px;height:15px}.mobile-action-call{border:1px solid #dce2eb;background:#fff;color:#253047}.mobile-action-call .action-icon{background:#f1f4f7;color:#475467}.mobile-action-estimate{border:1px solid #315cff;background:#315cff;color:#fff}.mobile-action-estimate .action-icon{background:rgba(255,255,255,.16);color:#fff}}
@media(max-width:480px){.footer-quick-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.footer-quick-link:nth-child(5){grid-column:1/-1}.footer-partners{padding-bottom:26px}.footer-section-head h2{font-size:20px}}
`;

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="ko"><body>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/>
  <style dangerouslySetInnerHTML={{__html:shellCss}}/>
  <div className="site-topbar">부산 16개 구·군 · 업종별 철거 · 원상복구 · 상담 010-6648-4886</div>
  <header className="site-header"><a className="brand" href="/" aria-label="올바른철거 홈"><img className="brand-logo" src="/images/brand/logo.png" alt="올바른철거"/></a><nav aria-label="주요 메뉴">{navItems.map(([href,label])=><a href={href} key={href}>{label}</a>)}</nav><a className="header-cta" href={inquiryUrl}><span className="action-icon"><Icon type="estimate"/></span>무료견적</a></header>
  <nav className="mobile-nav" aria-label="모바일 주요 메뉴"><div className="mobile-nav-inner">{navItems.map(([href,label,type,tone])=><a href={href} key={href}><span className={`nav-icon nav-tone-${tone}`}><Icon type={type}/></span>{label}</a>)}</div></nav>
  {children}<SeoImageRail/>
  <footer className="site-footer"><div className="footer-shell">
   <section className="footer-partners" aria-labelledby="partner-sites-heading">
    <div className="footer-section-head"><div><span className="footer-eyebrow">PARTNER NETWORK</span><h2 id="partner-sites-heading">제휴 사이트</h2><p>생활·사업에 필요한 전문 서비스를 함께 확인하세요.</p></div><div className="footer-partner-mail"><Icon type="mail"/><span>제휴 문의</span><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div></div>
    <div className="partner-grid">{partnerSites.map(site=><a className={`partner-card partner-tone-${site.tone}`} href={site.href} key={site.href}><div className="partner-card-top"><span className="partner-icon"><Icon type={site.icon}/></span><span><span className="partner-category">{site.category}</span><strong className="partner-name">{site.name}</strong></span></div><span className="partner-desc">{site.desc}</span></a>)}</div>
   </section>
   <nav className="footer-quick-nav" aria-label="푸터 주요 메뉴"><div className="footer-quick-grid">{navItems.map(([href,label,type,tone])=><a className="footer-quick-link" href={href} key={href}><span className={`nav-icon nav-tone-${tone}`}><Icon type={type}/></span><span>{label}</span></a>)}</div></nav>
   <section className="footer-company" aria-label="사업자 정보"><a className="footer-brand" href="/" aria-label="올바른철거 홈"><img className="footer-logo" src="/images/brand/logo.png" alt="올바른철거"/></a><div className="footer-company-info"><p className="footer-company-title">부산 철거 · 원상복구 · 폐업지원 안내</p><div className="footer-contact-row"><span>Tel. <a href="tel:01066484886">010-6648-4886</a></span><span>Fax. 0508-956-6109</span><span><a href={`mailto:${contactEmail}`}>{contactEmail}</a></span></div><p className="footer-business-line">부산광역시 북구 시랑로 132번길 17-4 504</p><p className="footer-business-line"><strong>상호:</strong> 올바른 &nbsp;·&nbsp; <strong>업태:</strong> 건선업 &nbsp;·&nbsp; <strong>업종:</strong> 철거 &nbsp;·&nbsp; <strong>사업자등록번호:</strong> 808-66-00808</p><p className="footer-business-line"><strong>업무 제휴 문의</strong> &nbsp;<a href={`mailto:${contactEmail}`}>{contactEmail}</a></p></div></section>
   <div className="footer-bottom"><div className="footer-bottom-links"><a href="/estimate">견적 준비정보</a><a href={inquiryUrl}>현장견적 문의</a><a href="/company">회사정보</a><a href="/privacy">개인정보처리 안내</a></div><p className="footer-copy">© 2026 올바른. All rights reserved.</p></div>
  </div></footer>
  <div className="mobile-action-bar" aria-label="빠른 상담"><a className="mobile-action-call" href="tel:01066484886" aria-label="010-6648-4886 전화상담"><span className="action-icon"><Icon type="phone"/></span>전화상담</a><a className="mobile-action-estimate" href={inquiryUrl}><span className="action-icon"><Icon type="estimate"/></span>무료견적 문의</a></div>
 </body></html>;
}
