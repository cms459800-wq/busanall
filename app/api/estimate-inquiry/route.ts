import {NextResponse} from "next/server";
import net from "node:net";

export const runtime="nodejs";
export const dynamic="force-dynamic";

const BUSAN_DISTRICTS=new Set(["강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구"]);
function clean(v:unknown,max=80){return String(v??"").replace(/[<>\r\n]/g," ").trim().slice(0,max)}
function phone(v:unknown){return String(v??"").replace(/[^0-9]/g,"").slice(0,11)}

function sendIcodeSms(message:string):Promise<{code:string;raw:string}>{
 const key=(process.env.ICODE_TOKEN||process.env.ICODE_TOKEN_KEY)?.trim();
 const tel=phone(process.env.ICODE_ADMIN_PHONE||process.env.ICODE_RECEIVER||"01066484886");
 const cb=phone(process.env.ICODE_SENDER_PHONE||process.env.ICODE_SENDER||"");

 if(!key||!tel||!cb)throw new Error("문자 발송 환경변수가 설정되지 않았습니다.");

 const payload={
  key,
  tel,
  cb,
  msg:message.slice(0,1900),
  title:"올바른철거 견적문의",
  date:"",
  charset:"utf-8"
 };

 const json=JSON.stringify(payload);
 const bytes=Buffer.byteLength(json,"utf8");
 if(bytes>9999)throw new Error("문자 데이터가 너무 깁니다.");
 const packet=`06${String(bytes).padStart(4,"0")}${json}`;

 return new Promise((resolve,reject)=>{
  const socket=net.createConnection({host:"211.172.232.124",port:9201});
  let response="";
  let settled=false;

  const finishError=(err:Error)=>{
   if(settled)return;
   settled=true;
   socket.destroy();
   reject(err);
  };

  socket.setTimeout(8000);
  socket.on("connect",()=>socket.write(packet,"utf8"));
  socket.on("data",chunk=>{
   response+=chunk.toString();
   if(response.length>=8){
    const code=response.slice(6,8);
    if(settled)return;
    settled=true;
    socket.end();
    resolve({code,raw:response});
   }
  });
  socket.on("timeout",()=>finishError(new Error("아이코드 서버 응답 시간이 초과되었습니다.")));
  socket.on("error",finishError);
  socket.on("end",()=>{
   if(!settled)finishError(new Error("아이코드 서버 응답을 확인하지 못했습니다."));
  });
 });
}

export async function POST(req:Request){
 try{
  const body=await req.json();
  if(clean(body.website))return NextResponse.json({ok:true});

  const name=clean(body.name,30);
  const region=clean(body.region,20);
  const business=clean(body.business,30);
  const tel=phone(body.phone);

  if(!name||!BUSAN_DISTRICTS.has(region)||tel.length<10||body.closureReady!=="yes"||body.privacy!=="yes"||body.thirdParty!=="yes"){
   return NextResponse.json({message:"필수 입력 및 동의 항목을 확인해 주세요."},{status:400});
  }

  const text=[
   "[올바른철거 견적문의]",
   `이름: ${name}`,
   `연락처: ${tel}`,
   `지역: 부산 ${region}`,
   `업종: ${business}`,
   `마케팅: ${body.marketing==="yes"?"동의":"미동의"}`
  ].join("\n");

  const result=await sendIcodeSms(text);

  if(result.code!=="00"&&result.code!=="17"){
   console.error("iCODE send failed:",result.code,result.raw);
   return NextResponse.json({message:"상담 접수 문자 전송에 실패했습니다. 잠시 후 다시 시도해 주세요."},{status:502});
  }

  return NextResponse.json({ok:true});
 }catch(error){
  console.error("estimate inquiry error",error);
  return NextResponse.json({message:"상담 접수 중 오류가 발생했습니다."},{status:500});
 }
}
