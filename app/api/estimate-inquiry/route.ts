import {NextResponse} from "next/server";
import net from "node:net";

export const runtime="nodejs";

const BUSAN_DISTRICTS=new Set(["강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구"]);
function clean(v:unknown,max=80){return String(v??"").replace(/[<>\r\n]/g," ").trim().slice(0,max)}
function phone(v:unknown){return String(v??"").replace(/[^0-9]/g,"").slice(0,11)}

function sendIcodeTokenSms({token,sender,receiver,message}:{token:string;sender:string;receiver:string;message:string}){
 const host=(process.env.ICODE_SOCKET_HOST||"211.172.232.124").trim();
 const port=Number(process.env.ICODE_SOCKET_PORT||7295);
 const payload=JSON.stringify({key:token,tel:receiver,cb:sender,msg:message,title:"올바른철거 견적문의",date:""});
 const packet=`06${Buffer.byteLength(payload,"utf8").toString().padStart(4,"0")}${payload}`;
 return new Promise<string>((resolve,reject)=>{
  const socket=net.createConnection({host,port});let result="";let settled=false;
  const finish=(error?:Error)=>{if(settled)return;settled=true;socket.destroy();error?reject(error):resolve(result)};
  socket.setTimeout(5000);
  socket.on("connect",()=>socket.write(packet,"utf8"));
  socket.on("data",chunk=>{result+=chunk.toString("utf8");if(result.length>=8)finish()});
  socket.on("timeout",()=>finish(new Error("iCODE socket timeout")));
  socket.on("error",error=>finish(error));
  socket.on("end",()=>finish(result?undefined:new Error("iCODE empty response")));
 });
}

export async function POST(req:Request){
 try{
  const body=await req.json();
  if(clean(body.website))return NextResponse.json({ok:true});
  const name=clean(body.name,30),region=clean(body.region,20),business=clean(body.business,30),tel=phone(body.phone);
  if(!name||!BUSAN_DISTRICTS.has(region)||tel.length<10||body.closureReady!=="yes"||body.privacy!=="yes"||body.thirdParty!=="yes")return NextResponse.json({message:"필수 입력 및 동의 항목을 확인해 주세요."},{status:400});
  const token=process.env.ICODE_TOKEN_KEY?.trim();const sender=phone(process.env.ICODE_SENDER);const receiver=phone(process.env.ICODE_RECEIVER||"01066484886");
  if(!token||!sender||!receiver)return NextResponse.json({message:"문자 상담 연동 설정이 아직 완료되지 않았습니다."},{status:503});
  const text=`[올바른철거 견적문의]\n이름: ${name}\n연락처: ${tel}\n지역: 부산 ${region}\n업종: ${business}\n마케팅: ${body.marketing==="yes"?"동의":"미동의"}`;
  const response=await sendIcodeTokenSms({token,sender,receiver,message:text});
  if(!response.startsWith("0225 00")){console.error("iCODE send failed",response);return NextResponse.json({message:"상담 접수 문자 전송에 실패했습니다. 잠시 후 다시 시도해 주세요."},{status:502});}
  return NextResponse.json({ok:true});
 }catch(error){console.error("estimate inquiry error",error);return NextResponse.json({message:"상담 접수 중 오류가 발생했습니다."},{status:500})}
}
