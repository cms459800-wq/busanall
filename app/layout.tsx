import "./globals.css";

const baseUrl = "https://busanall.vercel.app";

export const metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "올바른철거",
  title: { default: "올바른철거 | 부산 철거·원상복구", template: "%s | 올바른철거" },
  description: "부산 16개 구·군의 철거·원상복구, 업종별 철거서비스, 폐업지원금과 현장 가이드를 제공하는 올바른철거입니다.",
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
  url: baseUrl,
  areaServed: { "@type": "AdministrativeArea", name: "부산광역시" },
  knowsAbout: ["철거", "원상복구", "상가철거", "폐업철거", "점포철거"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <div className="site-topbar">부산 16개 구·군 · 업종별 철거 · 원상복구 · 폐업지원 안내</div>
        <header className="site-header">
          <a className="brand" href="/" aria-label="올바른철거 홈">
            <span className="brand-mark">✓</span>
            <span>올바른철거</span>
          </a>
          <nav aria-label="주요 메뉴">
            {navItems.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <a className="header-cta" href="/estimate">무료견적</a>
        </header>
        <nav className="mobile-nav" aria-label="모바일 주요 메뉴">
          <div className="mobile-nav-inner">
            {navItems.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          </div>
        </nav>
        {children}
        <footer className="site-footer">
          <div>
            <strong>올바른철거</strong>
            <p>부산 철거 · 원상복구 · 폐업지원 안내</p>
          </div>
          <div className="footer-links">
            <a href="/service">철거서비스</a>
            <a href="/busan">부산지역</a>
            <a href="/guide">철거가이드</a>
            <a href="/support">폐업지원금</a>
            <a href="/estimate">현장견적 문의</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
