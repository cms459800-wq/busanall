import "./globals.css";

export const metadata = {
  title: { default: "올바른철거", template: "%s | 올바른철거" },
  description: "부산 지역 철거·원상복구 전문 정보와 현장 견적 안내"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <a className="brand" href="/"><span className="brand-mark">✓</span><span>올바른철거</span></a>
          <nav>
            <a href="/service">철거서비스</a>
            <a href="/support">폐업지원금</a>
            <a href="/projects">시공사례</a>
          </nav>
          <a className="header-cta" href="/estimate">✦ 무료견적</a>
        </header>
        {children}
        <footer className="site-footer">
          <div><strong>올바른철거</strong><p>부산 철거 · 원상복구 · 폐업지원 안내</p></div>
          <a href="/estimate">현장견적 문의 →</a>
        </footer>
      </body>
    </html>
  );
}
