import { notFound } from "next/navigation";
import { services, type ServiceSlug } from "@/data/services";

const support = {
  rate: "전용면적 3.3㎡당 20만원 한도",
  max: "최대 600만원",
  url: "https://www.sbiz24.kr/"
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = services[slug as ServiceSlug];
  if (!item) return {};
  return {
    title: `${item.primary}·원상복구`,
    description: item.summary
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = services[slug as ServiceSlug];
  if (!item) notFound();

  return (
    <main className="page-shell">
      <header className="hero">
        <div>
          <div className="eyebrow-chip">● 부산 업종별 철거 가이드</div>
          <h1>{item.primary}<br/><span className="gradient-text">원상복구까지 한 번에</span></h1>
          <p>{item.summary}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/estimate">✦ 무료 현장견적 요청</a>
            <a className="btn btn-glass" href="/support">₩ 폐업지원금 확인</a>
          </div>
        </div>
        <aside className="hero-panel">
          <div className="hero-card">
            <strong>{item.name}</strong>
            <p>철거 범위·폐기물·반출 동선·원상복구 조건을 한 번에 확인하세요.</p>
            <p>실제 현장 사진은 2~4장까지 넣을 수 있도록 자리를 확보했습니다.</p>
          </div>
        </aside>
      </header>

      <section className="section">
        <h2>현장 이미지</h2>
        <div className="image-grid">
          {[1,2,3,4].map((n) => (
            <figure className="image-slot" key={n}>
              <div className="placeholder"><div>◫<br/><strong>이미지 {n}</strong><span>/public/images/services/{slug}/0{n}.webp</span></div></div>
              <figcaption>{item.primary} 현장 이미지 {n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{item.name}에서 먼저 확인할 핵심</h2>
        <div className="feature-grid">
          {item.unique.map((text, i) => (
            <article className="feature-card" key={text}><strong>0{i+1}</strong><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section split">
        <article className="info-card">
          <h2>견적에 영향을 주는 항목</h2>
          <ul>
            <li>전용면적과 실제 철거 범위</li>
            <li>천장·벽체·바닥·설비의 재질과 수량</li>
            <li>엘리베이터·계단·골목 등 반출 조건</li>
            <li>야간·주말 작업 및 건물 관리규정</li>
            <li>원상복구 마감 수준과 추가 설비 철거 여부</li>
          </ul>
        </article>
        <article className="info-card">
          <h2>작업 진행 순서</h2>
          <ol>
            <li>현장 및 임대차 원상복구 조건 확인</li>
            <li>재사용·매각·폐기 품목 구분</li>
            <li>철거 범위와 반출 동선 기준 견적</li>
            <li>보양·전기·가스·급배수 안전조치</li>
            <li>철거·분리배출·폐기물 반출</li>
            <li>원상복구 범위 확인 및 현장 정리</li>
          </ol>
        </article>
      </section>

      <section className="support-box section">
        <div className="eyebrow-chip">2026 폐업지원 안내</div>
        <h2>{item.name} 전 점포철거비 지원도 확인하세요</h2>
        <p>폐업을 앞둔 소상공인이라면 희망리턴패키지 원스톱폐업지원의 점포철거비 지원 대상인지 먼저 확인하는 것이 좋습니다.</p>
        <div className="support-stats">
          <div><span>지원 기준</span><strong>{support.rate}</strong></div>
          <div><span>최대 한도</span><strong>{support.max}</strong></div>
        </div>
        <p>실제 지원 여부와 지급액은 신청자격, 인정면적, 증빙 가능한 철거·원상복구 비용, 폐업일 및 최신 공고 기준에 따라 달라질 수 있습니다. 예산 소진 시 조기 종료될 수 있으므로 공사 전 공식 공고를 확인하세요.</p>
        <a className="btn btn-primary" href={support.url} target="_blank" rel="noreferrer">↗ 소상공인24 최신 공고 확인</a>
      </section>

      <section className="section faq">
        <h2>{item.primary} 자주 묻는 질문</h2>
        <details><summary>철거비는 무엇으로 달라지나요?</summary><p>면적뿐 아니라 설비, 마감재, 폐기물량, 반출조건, 작업시간과 원상복구 범위가 함께 영향을 줍니다.</p></details>
        <details><summary>폐업지원금은 누구나 최대 한도를 받나요?</summary><p>아닙니다. 최대 한도와 실제 지급액은 다르며 신청자격과 인정비용 등 공고 기준에 따라 결정됩니다.</p></details>
        <details><summary>사진만으로 견적이 가능한가요?</summary><p>간단한 범위는 사진으로 1차 확인할 수 있지만 설비·배관·반출조건이 복잡한 현장은 방문 확인이 더 정확합니다.</p></details>
      </section>

      <section className="final-cta">
        <div><h2>철거 범위가 애매하다면 먼저 현장을 확인하세요</h2><p>철거해야 할 것과 남겨야 할 것을 구분한 뒤 견적을 받으면 불필요한 추가비용을 줄이는 데 도움이 됩니다.</p></div>
        <a className="btn btn-primary" href="/estimate">✦ 올바른철거 견적 문의</a>
      </section>
    </main>
  );
}
