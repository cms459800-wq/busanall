import {NextResponse} from "next/server";

const BUSAN_DISTRICTS=new Set(["강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구"]);
function clean(v:unknown,max=80){return String(v??"").replace(/[<>\r\n]/g," ").trim().slice(0,max)}
function phone(v:unknown){return String(v??"").replace(/[^0-9]/g,"").slice(0,11)}

export async function POST(req:Request){
 try{
  const body=await req.json();
  if(clean(body.website))return NextResponse.json({ok:true});
  const name=clean(body.name,30),region=clean(body.region,20),business=clean(body.business,30),tel=phone(body.phone);
  if(!name||!BUSAN_DISTRICTS.has(region)||tel.length<10||body.closureReady!=="yes"||body.privacy!=="yes"||body.thirdParty!=="yes")return NextResponse.json({message:"필수 입력 및 동의 항목을 확인해 주세요."},{status:400});
  const apiUrl=process.env.ICODE_API_URL?.trim();const apiKey=process.env.ICODE_API_KEY?.trim();const userId=process.env.ICODE_USER_ID?.trim();const sender=phone(process.env.ICODE_SENDER);const receiver=phone(process.env.ICODE_RECEIVER||"01066484886");
  if(!apiUrl||!apiKey||!sender||!receiver)return NextResponse.json({message:"문자 상담 연동 설정이 아직 완료되지 않았습니다."},{status:503});
  const text=`[올바른철거 견적문의]\n이름: ${name}\n연락처: ${tel}\n지역: 부산 ${region}\n업종: ${business}\n마케팅: ${body.marketing==="yes"?"동의":"미동의"}`;
  const headers:Record<string,string>={"Content-Type":"application/json","api-key":apiKey};if(userId)headers["user-id"]=userId;
  const sms=await fetch(apiUrl,{method:"POST",headers,body:JSON.stringify({callerNo:sender,message:text,receiveNos:receiver,smsType:text.length>80?"LMS":"SMS",adYn:"N"}),cache:"no-store"});
  const responseText=await sms.text();
  if(!sms.ok){console.error("iCODE send failed",sms.status,responseText.slice(0,500));return NextResponse.json({message:"상담 접수 문자 전송에 실패했습니다. 잠시 후 다시 시도해 주세요."},{status:502})}
  return NextResponse.json({ok:true});
 }catch(error){console.error("estimate inquiry error",error);return NextResponse.json({message:"상담 접수 중 오류가 발생했습니다."},{status:500})}
}
