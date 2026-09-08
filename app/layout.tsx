import "./globals.css";

const baseUrl = "https://busanall.vercel.app";
const inquiryUrl = "https://maxpool.olbarun.kr/";
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const naverSiteVerification = process.env.NAVER_SITE_VERIFICATION?.trim();

export const metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "올바른철거",
  title: { default: "올바른철거 | 부산 철거·원상복구", template: "%s | 올바른철거" },
  description: "부산 16개 구·군의 철거·원상복구, 업종별 철거서비스, 폐업지원금과 현장 가이드를 제공하는 올바른철거입니다.",
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(naverSiteVerification ? { other: { "naver-site-verification": naverSiteVerification } } : {})
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: baseUrl,
    siteName: "올바른철거",
    title: "올바른철거 | 부산 철거·원상복구",
    description: "부산 16개 구·군의 철거·원상복구, 업종별 철거서비스, 폐업지원금과 현장 가이드를 제공합니다."
  },
  twitter: {
    card: "summary",
    title: "올바른철거 | 부산 철거·원상복구",
    description: "부산 철거·원상복구, 업종별 서비스와 지역별 현장 가이드를 확인하세요."
  }
};

const navItems = [
  ["/service", "철거서비스"],
  ["/busan", "부산지역"],
  ["/guide", "철거가이드"],
  ["/support", "폐업지원금"],
  ["/projects", "시공사례"]
] as const;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "올바른철거",
  legalName: "까치 하우스",
  url: baseUrl,
  logo: `${baseUrl}/images/brand/logo.png`,
  telephone: "010-6648-4886",
  email: "c0810@naver.com",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "사업자등록번호",
    value: "458-21-02084"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "까치고개로 47 (괴정동)",
    addressLocality: "사하구",
    addressRegion: "부산광역시",
    addressCountry: "KR"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "010-6648-4886",
    email: "c0810@naver.com",
    areaServed: "KR",
    availableLanguage: "Korean"
  },
  areaServed: { "@type": "AdministrativeArea", name: "부산광역시" },
  knowsAbout: ["철거", "원상복구", "상가철거", "폐업철거", "점포철거"]
};

const mobileActionCss = `
.mobile-action-bar{display:none}
@media(max-width:760px){
  body{padding-bottom:72px}
  .mobile-action-bar{position:fixed;left:0;right:0;bottom:0;z-index:80;display:grid;grid-template-columns:.88fr 1.12fr;gap:8px;padding:9px 12px calc(9px + env(safe-area-inset-bottom));background:rgba(255,255,255,.97);border-top:1px solid #e5e9f1;box-shadow:0 -8px 24px rgba(17,24,39,.08);backdrop-filter:blur(14px)}
  .mobile-action-bar a{display:flex;align-items:center;justify-content:center;min-height:48px;border-radius:11px;text-decoration:none;font-size:13.5px;font-weight:800;letter-spacing:-.02em}
  .mobile-action-call{border:1px solid #dce2eb;background:#fff;color:#253047}
  .mobile-action-estimate{border:1px solid #315cff;background:#315cff;color:#fff;box-shadow:0 5px 12px rgba(49,92,255,.18)}
  .site-footer{padding-bottom:30px}
}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <style dangerouslySetInnerHTML={{ __html: mobileActionCss }} />
        <div className="site-topbar">부산 16개 구·군 · 업종별 철거 · 원상복구 · 상담 010-6648-4886</div>
        <header className="site-header">
          <a className="brand" href="/" aria-label="올바른철거 홈">
            <img className="brand-logo" src="/images/brand/logo.png" alt="올바른철거" />
          </a>
          <nav aria-label="주요 메뉴">
            {navItems.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <a className="header-cta" href={inquiryUrl}>무료견적</a>
        </header>
        <nav className="mobile-nav" aria-label="모바일 주요 메뉴">
          <div className="mobile-nav-inner">
            {navItems.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          </div>
        </nav>
        {children}
        <footer className="site-footer">
          <div>
            <a className="footer-brand" href="/" aria-label="올바른철거 홈"><img className="footer-logo" src="/images/brand/logo.png" alt="올바른철거" /></a>
            <p>부산 철거 · 원상복구 · 폐업지원 안내</p>
            <p>Tel. <a href="tel:01066484886">010-6648-4886</a> · Fax. 0508-956-6109 · <a href="mailto:c0810@naver.com">c0810@naver.com</a></p>
            <p>부산광역시 사하구 까치고개로 47 (괴정동) · 상호: 까치 하우스 · 사업자등록번호: 458-21-02084</p>
            <p>업무 제휴 문의 <a href="mailto:c0810@naver.com">c0810@naver.com</a></p>
          </div>
          <div className="footer-links">
            <a href="/service">철거서비스</a>
            <a href="/busan">부산지역</a>
            <a href="/guide">철거가이드</a>
            <a href="/support">폐업지원금</a>
            <a href="/projects">시공사례</a>
            <a href="/estimate">견적 준비정보</a>
            <a href={inquiryUrl}>현장견적 문의</a>
          </div>
        </footer>
        <div className="mobile-action-bar" aria-label="빠른 상담">
          <a className="mobile-action-call" href="tel:01066484886" aria-label="010-6648-4886 전화상담">전화상담</a>
          <a className="mobile-action-estimate" href={inquiryUrl}>무료견적 문의</a>
        </div>
      </body>
    </html>
  );
}
