import { NextResponse } from "next/server";

function esc(value:string){return value.replace(/[&<>"']/g,(m)=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&apos;"}[m]||m));}
function hash(value:string){let h=2166136261;for(let i=0;i<value.length;i++){h^=value.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}

const palettes=[
  {a:"#ffc44f",b:"#f39200",icon:"#171a20",halo:"#fff7df",pill:"#fff2cf",pillText:"#5d4215",line:"#db7b00"},
  {a:"#ffd05a",b:"#ee8b00",icon:"#20242b",halo:"#fff3d2",pill:"#fff0c2",pillText:"#65430d",line:"#cc7200"},
  {a:"#ffbb45",b:"#f59f0b",icon:"#15202b",halo:"#fff1cf",pill:"#ffefc0",pillText:"#594216",line:"#d77b05"},
  {a:"#ffc85c",b:"#ef9000",icon:"#263238",halo:"#fff5dd",pill:"#fff1c9",pillText:"#604616",line:"#d17a00"},
  {a:"#ffbd52",b:"#f08a14",icon:"#1f2937",halo:"#fff0d6",pill:"#ffedc3",pillText:"#634113",line:"#cf710c"},
  {a:"#ffd36a",b:"#f29b08",icon:"#18212b",halo:"#fff6df",pill:"#fff3cc",pillText:"#5c4619",line:"#d67d00"}
];

const serviceAccent:Record<string,string>={
  "상가철거":"#172033","사무실철거":"#28445f","식당철거":"#7a3f12","카페철거":"#6b4a22","원상복구":"#27465f","인테리어철거":"#5f3b63","부분철거":"#3f4856","공장철거":"#374151","창고철거":"#334155","학원철거":"#4f46e5","병원철거":"#17705f","치과철거":"#0f766e","약국철거":"#15803d","미용실철거":"#9d416f","주택철거":"#365c45","아파트철거":"#3949ab","숙박시설철거":"#6d4c7d","주점철거":"#7c3f2a","소매점철거":"#2f4f5f"
};

function iconFor(service:string){
  if(service.includes("사무실"))return `<path d="M95 88h72v92H95zM112 108h14M112 130h14M112 152h14M143 118h30v62"/>`;
  if(service.includes("원상복구"))return `<path d="M168 126a54 54 0 1 1-16-38M152 88h-38v-38"/>`;
  if(service.includes("인테리어")||service.includes("부분"))return `<path d="M94 164h72M110 164V92h34v72M142 112h28v52M155 96v32"/>`;
  if(service.includes("공장")||service.includes("창고"))return `<path d="M84 174V106l42 22v-28l42 22v52zM100 150h14M128 150h14M156 150h14"/>`;
  if(service.includes("식당")||service.includes("카페")||service.includes("주점"))return `<path d="M98 82v58M84 82v30a14 14 0 0 0 28 0V82M98 140v40M154 82v98M154 82c22 8 28 30 28 50h-28"/>`;
  if(service.includes("병원")||service.includes("치과")||service.includes("약국"))return `<path d="M112 78h32v30h30v32h-30v32h-32v-32H82v-32h30z"/>`;
  if(service.includes("학원"))return `<path d="M88 88h58a24 24 0 0 1 24 24v66a24 24 0 0 0-24-22H88zM170 88h-24a24 24 0 0 0-24 24v66"/>`;
  if(service.includes("미용"))return `<circle cx="112" cy="116" r="28"/><circle cx="156" cy="150" r="28"/><path d="M132 134l52-52M134 132l-34 52"/>`;
  if(service.includes("주택")||service.includes("아파트")||service.includes("숙박"))return `<path d="M82 126l48-44 48 44v54H82zM110 180v-38h40v38"/>`;
  return `<path d="M86 112h84v68H86zM80 112l12-34h72l12 34M106 180v-34h28v34M96 78h64"/>`;
}

export async function GET(_:Request,{params}:{params:Promise<{region:string;service:string}>}){
  const {region,service}=await params;
  const rawRegion=decodeURIComponent(region);
  const rawService=decodeURIComponent(service);
  const r=esc(rawRegion);
  const s=esc(rawService);
  const seed=hash(`${rawRegion}|${rawService}`);
  const palette=palettes[seed%palettes.length];
  const iconColor=serviceAccent[rawService]??palette.icon;
  const tilt=((seed%9)-4)*0.45;
  const haloX=118+(seed%29);
  const haloY=125+((seed>>3)%19);
  const glowOpacity=(0.14+((seed%5)*0.018)).toFixed(3);
  const topLineOpacity=(0.12+((seed%4)*0.025)).toFixed(3);
  const pillWidth=138+((seed%3)*8);
  const pillX=(360-pillWidth)/2;
  const title=`${r} ${s}`;
  const description=`${r} 지역의 ${s} 서비스 안내 이미지`;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="430" viewBox="0 0 360 430" role="img" aria-labelledby="seoTitle seoDesc">
  <title id="seoTitle">${title}</title>
  <desc id="seoDesc">${description}</desc>
  <metadata>${title} | 올바른철거 | 부산 철거·원상복구</metadata>
  <defs>
    <linearGradient id="g" x1="${seed%2?0:1}" y1="0" x2="${seed%2?1:0}" y2="1"><stop stop-color="${palette.a}"/><stop offset="1" stop-color="${palette.b}"/></linearGradient>
    <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".23"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="360" height="430" rx="28" fill="#fff"/>
  <rect width="360" height="326" rx="28" fill="url(#g)"/>
  <rect y="300" width="360" height="26" fill="url(#g)"/>
  <rect x="18" y="18" width="324" height="4" rx="2" fill="#fff" opacity="${topLineOpacity}"/>
  <circle cx="${haloX}" cy="${haloY}" r="73" fill="${palette.halo}" opacity="${glowOpacity}"/>
  <ellipse cx="278" cy="58" rx="92" ry="60" fill="url(#shine)" opacity=".55"/>
  <g transform="rotate(${tilt} 130 132)" fill="none" stroke="${iconColor}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">${iconFor(rawService)}</g>
  <text x="180" y="238" text-anchor="middle" font-family="Pretendard, Apple SD Gothic Neo, Noto Sans KR, Arial, sans-serif" font-size="40" font-weight="800" fill="#11151d">${s}</text>
  <rect x="${pillX}" y="260" width="${pillWidth}" height="36" rx="18" fill="${palette.pill}" opacity=".9"/>
  <text x="180" y="284" text-anchor="middle" font-family="Pretendard, Apple SD Gothic Neo, Noto Sans KR, Arial, sans-serif" font-size="15" font-weight="700" fill="${palette.pillText}">철거 안내</text>
  <rect x="32" y="325" width="296" height="1" fill="${palette.line}" opacity=".18"/>
  <text x="180" y="365" text-anchor="middle" font-family="Pretendard, Apple SD Gothic Neo, Noto Sans KR, Arial, sans-serif" font-size="24" font-weight="700" fill="#202536">${r}</text>
  <text x="180" y="400" text-anchor="middle" font-family="Pretendard, Apple SD Gothic Neo, Noto Sans KR, Arial, sans-serif" font-size="24" font-weight="700" fill="${iconColor}">${s}</text>
</svg>`;
  return new NextResponse(svg,{headers:{"Content-Type":"image/svg+xml; charset=utf-8","Content-Language":"ko","Cache-Control":"public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400","X-Robots-Tag":"index, follow","Cross-Origin-Resource-Policy":"cross-origin"}});
}
