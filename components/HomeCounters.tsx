"use client";
import {useEffect,useRef,useState} from "react";
const stats=[{target:1500,suffix:"+",label:"시공 경험"},{target:100,suffix:"%",label:"고객 만족도"},{target:24,suffix:"h",label:"빠른 상담 대응"},{target:17,suffix:"곳",label:"부산 전 지역"}];
export default function HomeCounters(){
 const root=useRef<HTMLDivElement>(null);
 const [values,setValues]=useState([0,0,0,0]);
 useEffect(()=>{
  const el=root.current;if(!el)return;
  let raf=0;let started=false;
  const observer=new IntersectionObserver(entries=>{
   if(!entries[0]?.isIntersecting||started)return;
   started=true;observer.disconnect();
   if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){setValues(stats.map(s=>s.target));return}
   const start=performance.now();const duration=1900;
   const frame=(now:number)=>{
    const t=Math.min((now-start)/duration,1);
    const eased=1-Math.pow(1-t,3);
    setValues(stats.map(s=>Math.round(s.target*eased)));
    if(t<1)raf=requestAnimationFrame(frame);
   };
   raf=requestAnimationFrame(frame);
  },{threshold:0.2});
  observer.observe(el);
  return()=>{observer.disconnect();cancelAnimationFrame(raf)};
 },[]);
 return <div ref={root} className="home-trust-counters" aria-label="업체 주요 수치">{stats.map((s,i)=><div className="home-trust-counter" key={s.label}><strong aria-label={s.target.toLocaleString("ko-KR")+s.suffix}>{values[i].toLocaleString("ko-KR")}{s.suffix}</strong><span>{s.label}</span></div>)}</div>;
}
