"use client";

import { usePathname } from "next/navigation";

const regionNames: Record<string,string> = {haeundae:"해운대구",busanjin:"부산진구",dongnae:"동래구",suyeong:"수영구",nam:"남구",geumjeong:"금정구",yeonje:"연제구",saha:"사하구",sasang:"사상구",gangseo:"강서구",buk:"북구",seo:"서구",jung:"중구",dong:"동구",yeongdo:"영도구",gijang:"기장군"};
const serviceNames: Record<string,string> = {"commercial-store":"상가철거",restaurant:"식당철거",cafe:"카페철거",office:"사무실철거",interior:"인테리어철거",partial:"부분철거",factory:"공장철거",warehouse:"창고철거",academy:"학원철거",hospital:"병원철거","beauty-salon":"미용실철거",house:"주택철거",apartment:"아파트철거",lodging:"숙박시설철거",pub:"주점철거","retail-store":"소매점철거"};
const regionServices: Record<string,string[]> = {
  haeundae:["commercial-store","office","restaurant","cafe","interior"], busanjin:["commercial-store","office","restaurant","cafe","interior"], dongnae:["commercial-store","academy","hospital","office","interior"], suyeong:["commercial-store","restaurant","cafe","pub","interior"], nam:["commercial-store","office","restaurant","house","interior"], geumjeong:["commercial-store","restaurant","cafe","factory","interior"], yeonje:["commercial-store","office","academy","hospital","interior"], saha:["commercial-store","restaurant","pub","factory","academy"], sasang:["factory","warehouse","commercial-store","office","interior"], gangseo:["factory","warehouse","commercial-store","restaurant","interior"], buk:["commercial-store","restaurant","academy","beauty-salon","interior"], seo:["commercial-store","hospital","restaurant","house","interior"], jung:["commercial-store","retail-store","restaurant","cafe","interior"], dong:["commercial-store","lodging","restaurant","office","interior"], yeongdo:["commercial-store","house","warehouse","restaurant","interior"], gijang:["commercial-store","factory","warehouse","house","restaurant"]
};
const serviceRegions=["busanjin","haeundae","dongnae","suyeong","saha"];
const homeServices=["commercial-store","office","restaurant","interior","partial"];

type Card={region:string;service:string;href:string};
function imageUrl(region:string,service:string){return `/seo-card/${encodeURIComponent(region)}/${encodeURIComponent(service)}`;}

export default function SeoImageRail(){
  const pathname=usePathname();
  let cards:Card[]=[]; let heading="부산광역시 철거 서비스 한눈에 보기"; let intro="현장 유형별 철거·원상복구 정보를 이미지와 함께 확인하세요.";
  if(pathname==="/") cards=homeServices.map(service=>({region:"부산광역시",service:serviceNames[service]??service,href:`/service/${service}`}));
  else if(pathname.startsWith("/busan/")){
    const slug=pathname.split("/")[2]; const region=regionNames[slug]; if(!region)return null;
    heading=`${region} 철거 서비스 한눈에 보기`; intro=`${region}에서 자주 확인하는 철거 유형을 서비스별로 비교해 보세요.`;
    cards=(regionServices[slug]??homeServices).map(service=>({region,service:serviceNames[service]??service,href:`/service/${service}`}));
  } else if(pathname.startsWith("/service/")){
    const slug=pathname.split("/")[2]; const service=serviceNames[slug]; if(!service)return null;
    heading=`부산 지역별 ${service} 한눈에 보기`; intro=`${service}를 부산 주요 지역의 현장 조건과 함께 확인하세요.`;
    cards=serviceRegions.map(regionSlug=>({region:regionNames[regionSlug],service,href:`/busan/${regionSlug}`}));
  } else return null;
  return <section className="seo-image-section" aria-labelledby="seo-image-heading"><div className="seo-image-wrap"><div className="seo-image-head"><div><span>IMAGE SERVICE LINKS</span><h2 id="seo-image-heading">{heading}</h2></div><p>{intro}</p></div><div className="seo-image-rail">{cards.map(card=><a className="seo-image-card" href={card.href} key={`${card.region}-${card.service}`}><img src={imageUrl(card.region,card.service)} alt={`${card.region} ${card.service} 안내`} width="360" height="430" loading="lazy"/><strong>{card.region} {card.service}</strong></a>)}</div></div><style jsx>{`
.seo-image-section{padding:26px 20px 8px;background:#fff}.seo-image-wrap{max-width:1220px;margin:0 auto}.seo-image-head{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:16px}.seo-image-head span{font-size:11px;font-weight:850;letter-spacing:.12em;color:#a9570a}.seo-image-head h2{margin:5px 0 0;font-size:clamp(20px,2.2vw,28px);letter-spacing:-.035em;color:#161b26}.seo-image-head p{max-width:520px;margin:0;color:#667085;font-size:14px}.seo-image-rail{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}.seo-image-card{display:block;overflow:hidden;border:1px solid #e9ecf2;border-radius:18px;background:#fff;text-decoration:none;color:#202536;box-shadow:0 6px 18px rgba(17,24,39,.045);transition:.2s ease}.seo-image-card:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(17,24,39,.09)}.seo-image-card img{display:block;width:100%;height:auto;aspect-ratio:360/430;object-fit:cover;background:#fff5dc}.seo-image-card strong{display:block;padding:13px 12px 15px;font-size:14px;line-height:1.4;letter-spacing:-.025em}@media(max-width:760px){.seo-image-section{padding:20px 14px 4px}.seo-image-head{display:block}.seo-image-head p{margin-top:7px}.seo-image-rail{display:flex;overflow-x:auto;gap:10px;padding:2px 1px 10px;scroll-snap-type:x mandatory}.seo-image-card{min-width:164px;scroll-snap-align:start;border-radius:15px}.seo-image-card strong{font-size:13px;padding:11px}}
`}</style></section>;
}
