import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://busanall.vercel.app"),
  title: { default: "올바른철거 | 부산 철거·원상복구", template: "%s | 올바른철거" },
  description: "부산 16개 구·군의 철거·원상복구, 업종별 철거서비스, 폐업지원금과 현장 가이드를 제공하는 올바른철거입니다."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <a className="brand" href="/" aria-label="올바른철거 홈">
            <span className="brand-mark">✓</span>
            <span>올바른철거</span>
          </a>
          <nav aria-label="주요 메뉴">
            <a href="/service">철거서비스</a>
            <a href="/busan">부산지역</a>
            <a href="/guide">철거가이드</a>
            <a href="/support">폐업지원금</a>
            <a href="/projects">시공사례</a>
          </nav>
          <a className="header-cta" href="/estimate"><span>✦</span> 무료견적</a>
        </header>

        {children}

        <footer className="site-footer">
          <div>
            <strong>올바른철거</strong>
            <p>부산 철거 · 원상복구 · 폐업지원 안내</p>
            <div className="footer-note">현장과 계약조건에 따라 철거범위 및 비용은 달라질 수 있습니다.</div>
          </div>
          <div className="footer-links">
            <a href="/service">철거서비스</a>
            <a href="/busan">부산지역</a>
            <a href="/guide">철거가이드</a>
            <a href="/support">폐업지원금</a>
            <a href="/estimate">무료견적 →</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
