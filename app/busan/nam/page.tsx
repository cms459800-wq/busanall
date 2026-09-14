import RegionPage, { generateMetadata as generateRegionMetadata } from "../[slug]/page";

const namImages = [
  { src: "/images/busan/nam/nam-store-demolition-corrected.webp", alt: "부산 남구 상가 철거" },
  { src: "/images/busan/nam/nam-office-demolition.webp", alt: "부산 남구 사무실 철거" },
  { src: "/images/busan/nam/nam-restaurant-demolition.webp", alt: "부산 남구 식당 철거" },
  { src: "/images/busan/nam/nam-cafe-demolition.webp", alt: "부산 남구 카페 철거" },
  { src: "/images/busan/nam/nam-interior-demolition.webp", alt: "부산 남구 인테리어 철거" },
];

export function generateMetadata() {
  return generateRegionMetadata({ params: Promise.resolve({ slug: "nam" }) });
}

export default async function NamPage() {
  const regionPage = await RegionPage({ params: Promise.resolve({ slug: "nam" }) });

  return (
    <>
      {regionPage}
      <section className="nam-image-section">
        <style>{`
          .nam-image-section{max-width:1180px;margin:0 auto 72px;padding:0 20px}
          .nam-image-heading{margin-bottom:24px}
          .nam-image-kicker{display:block;margin-bottom:8px;font-size:12px;font-weight:850;letter-spacing:.12em;color:#2458d8}
          .nam-image-heading h2{margin:0 0 8px;font-size:clamp(26px,4vw,38px);color:#172033}
          .nam-image-heading p{margin:0;color:#667085;line-height:1.7}
          .nam-image-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
          .nam-image-gallery figure{margin:0;overflow:hidden;border:1px solid #e4e9f2;border-radius:22px;background:#fff;box-shadow:0 12px 30px rgba(22,34,51,.08)}
          .nam-image-gallery figure:first-child{grid-column:1/-1}
          .nam-image-gallery img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}
          .nam-image-gallery figure:first-child img{aspect-ratio:21/9}
          .nam-image-gallery figcaption{padding:12px 14px;font-size:14px;font-weight:800;color:#243044}
          @media(max-width:720px){.nam-image-gallery{grid-template-columns:1fr}.nam-image-gallery figure:first-child{grid-column:auto}.nam-image-gallery figure:first-child img,.nam-image-gallery img{aspect-ratio:16/10}}
        `}</style>
        <div className="nam-image-heading">
          <span className="nam-image-kicker">NAM-GU DEMOLITION</span>
          <h2>남구 철거 서비스 이미지</h2>
          <p>남구 상가·사무실·식당·카페·인테리어 철거 유형을 이미지로 확인할 수 있습니다.</p>
        </div>
        <div className="nam-image-gallery">
          {namImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
