const inquiryUrl = "https://open.kakao.com/o/ssjJI0Pi";

export const metadata = {
  title: "부산 철거 시공사례",
  description: "부산 철거 시공사례를 지역, 업종, 작업범위와 실제 전·중·후 사진 기준으로 기록하는 페이지입니다.",
  alternates: { canonical: "/projects" },
  robots: { index: false, follow: true }
};


const projectCases = [
  ["해운대구","해운대 학원 원상복구","/images/work-status/해운대 학원 원상복구.webp"],["부산진구","부산진구 미용실 철거","/images/work-status/부산진구 미용실 철거.webp"],["덕천동","덕천동 돈까스집 철거","/images/work-status/덕천동 돈까스집.webp"],["구포동","구포동 중국집 원상복구","/images/work-status/구포동 중국집 원상복구.webp"],["동래구","동래구 횟집 원상복구","/images/work-status/동래구 횟집 원상복구.webp"],["대신동","대신동 키즈카페 철거","/images/work-status/대신동 키즈카페.webp"],["부암3동","부암3동 세탁소 철거","/images/work-status/부암3동 세탁소.webp"],["당감동","당감동 뷰티샵 폐기물처리","/images/work-status/당감동 뷰티샵폐기물처리.webp"],["개금동","개금동 노래방 원상복구","/images/work-status/개금동 노래방 원상복구.webp"],["가야동","가야동 철물점 원상복구","/images/work-status/가야동 철물점 원상복구.webp"],["서면","서면 음식점 철거","/images/work-status/서면 음식점 철거.webp"]
] as const;

const recordItems = [
  { key:"location", tone:"blue", title:"지역", text:"부산 구·군 및 현장 위치 범위" },
  { key:"store", tone:"orange", title:"업종·면적", text:"업종과 면적" },
  { key:"scope", tone:"rose", title:"작업범위", text:"철거·보존·원상복구 범위" },
  { key:"access", tone:"purple", title:"반출조건", text:"층수, 엘리베이터와 반출조건" },
  { key:"camera", tone:"green", title:"현장사진", text:"작업 전·중·후 사진" }
] as const;

function ProjectIcon({type}:{type:string}) {
  const p={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
  if(type==="location") return <svg {...p}><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></svg>;
  if(type==="store") return <svg {...p}><path d="M4 10h16l-1-5H5z"/><path d="M6 10v10h12V10M9 20v-6h6v6"/></svg>;
  if(type==="scope") return <svg {...p}><path d="M4 5h16v14H4zM12 5v14"/><path d="M8 9l-2 2 2 2M16 9l2 2-2 2"/></svg>;
  if(type==="access") return <svg {...p}><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8l3-3 3 3M9 16l3 3 3-3M12 5v14"/></svg>;
  if(type==="camera") return <svg {...p}><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6l1-2h6l1 2"/><circle cx="12" cy="13" r="3"/></svg>;
  return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/></svg>;
}

export default function Page() {
  return (
    <main className="page-shell">
      <style>{`
        .project-tone-blue{--p-bg:#eef4ff;--p-border:#d8e5ff;--p-color:#2458d8}.project-tone-orange{--p-bg:#fff4e8;--p-border:#f7ddbd;--p-color:#a9570a}.project-tone-rose{--p-bg:#fff0f3;--p-border:#f5d6df;--p-color:#b4234d}.project-tone-purple{--p-bg:#f5f0ff;--p-border:#e4d8ff;--p-color:#7048c8}.project-tone-green{--p-bg:#edf9f2;--p-border:#d2efde;--p-color:#18794e}
        .project-info-layout{grid-template-columns:minmax(0,1.45fr) minmax(300px,.75fr);gap:18px;align-items:stretch}.project-record-panel,.project-why-panel{padding:26px;border-radius:20px}.project-record-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-top:18px}.project-record{min-width:0;padding:15px 13px;border:1px solid var(--p-border);background:var(--p-bg);border-radius:14px}.project-record-icon{width:40px;height:40px;border-radius:11px;display:grid;place-items:center;background:#fff;color:var(--p-color);border:1px solid var(--p-border);margin-bottom:12px}.project-record-icon svg{width:21px;height:21px}.project-record strong{display:block;color:#202536;margin-bottom:6px;font-size:14px;line-height:1.35;word-break:keep-all}.project-record span{display:block;font-size:12px;line-height:1.6;color:#667085;word-break:keep-all}.project-why-panel{display:flex;flex-direction:column;justify-content:center;background:linear-gradient(135deg,#f8fbff,#fff)}.project-why-panel h2{margin-bottom:12px}.project-why-panel p{max-width:420px;line-height:1.8}
        .project-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.project-case{overflow:hidden;margin:0;border:1px solid #e2e8f0;border-radius:18px;background:#fff;box-shadow:0 8px 24px rgba(15,35,65,.06)}.project-case-image{position:relative;aspect-ratio:4/3;overflow:hidden;background:#f3f6fa}.project-case-image img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s ease}.project-case:hover .project-case-image img{transform:scale(1.025)}.project-case-body{padding:17px 18px 19px}.project-case-region{display:block;margin-bottom:5px;color:#315cff;font-size:11px;font-weight:850;letter-spacing:.06em}.project-case-title{display:block;color:#172033;font-size:16px;line-height:1.4}.project-placeholder{position:relative;overflow:hidden}.project-placeholder-badge{position:absolute;left:14px;top:14px;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:rgba(255,255,255,.92);border:1px solid #e9ecf2;color:#315cff}.project-placeholder-badge svg{width:21px;height:21px}.project-placeholder:nth-child(2) .project-placeholder-badge{color:#a9570a}.project-placeholder:nth-child(3) .project-placeholder-badge{color:#18794e}.project-placeholder:nth-child(4) .project-placeholder-badge{color:#7048c8}
        @media(max-width:900px){.project-info-layout{grid-template-columns:1fr}.project-record-grid{grid-template-columns:repeat(5,minmax(0,1fr))}.project-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}.project-why-panel{min-height:180px}}@media(max-width:700px){.project-record-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.project-record:last-child{grid-column:1/-1}.project-record-panel,.project-why-panel{padding:20px}}@media(max-width:560px){.project-gallery{grid-template-columns:1fr}.project-record-grid{gap:9px}.project-record{padding:14px 12px}.project-record strong{font-size:13.5px}.project-record span{font-size:11.5px}}
      `}</style>
      <header className="list-hero">
        <div className="eyebrow-chip">● PROJECTS</div>
        <h1>부산 철거<br/><span className="gradient-text">시공사례</span></h1>
        <p>실제 작업 현장이 확보되는 대로 지역, 업종, 작업범위와 전·중·후 사진을 함께 기록합니다. 임의의 사례나 수치는 사용하지 않습니다.</p>
        <div className="cta-row"><a className="btn btn-primary" href={inquiryUrl}>무료 현장견적 문의</a><a className="btn btn-glass" href="/estimate">견적 준비정보 6가지</a></div>
      </header>

      <section className="split project-info-layout">
        <article className="info-card project-record-panel">
          <span className="section-kicker">WHAT WE RECORD</span><h2>사례마다 기록할 정보</h2>
          <div className="project-record-grid">
            {recordItems.map((item)=><div className={`project-record project-tone-${item.tone}`} key={item.title}><span className="project-record-icon"><ProjectIcon type={item.key}/></span><strong>{item.title}</strong><span>{item.text}</span></div>)}
          </div>
        </article>
        <article className="info-card project-why-panel"><span className="section-kicker">WHY IT MATTERS</span><h2>사진만 나열하지 않습니다</h2><p>어떤 조건 때문에 작업방식과 비용이 달라졌는지 함께 설명해 비슷한 현장을 준비하는 사람이 참고할 수 있는 사례로 구성합니다.</p></article>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="section-kicker">DEMOLITION PROJECTS</span><h2>부산지역 철거 작업 현황</h2></div><p>업로드된 실제 철거 현장 이미지를 지역과 작업명 기준으로 확인할 수 있습니다.</p></div>
        <div className="project-gallery">{projectCases.map(([region,title,image])=><figure className="project-case" key={image}><div className="project-case-image"><img src={image} alt={title} loading="lazy"/></div><figcaption className="project-case-body"><span className="project-case-region">{region}</span><strong className="project-case-title">{title}</strong></figcaption></figure>)}</div>
      </section>

      <section className="final-cta"><div><span className="section-kicker">FIELD ESTIMATE</span><h2>사례보다 내 현장 조건이 더 중요합니다</h2><p>업종, 면적, 철거범위와 사진을 정리하면 비슷한 사례가 없어도 상담 기준을 잡을 수 있습니다.</p></div><a className="btn btn-light" href={inquiryUrl}>무료 현장견적 문의</a></section>
    </main>
  );
}
