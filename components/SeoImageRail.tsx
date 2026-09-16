"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
import OriginalSeoImageRail from "./SeoImageRailOriginal";
import HomeEstimateForm from "./HomeEstimateForm";

const regionImageMap:Record<string,string[]>={
 "/busan/geumjeong":[
  "/images/busan/geumjeong/geumjeong-restaurant-demolition.webp",
  "/images/busan/geumjeong/geumjeong-cafe-demolition.webp",
  "/images/busan/geumjeong/geumjeong-factory-demolition.webp",
  "/images/busan/geumjeong/geumjeong-commercial-store-demolition.webp",
  "/images/busan/geumjeong/geumjeong-interior-demolition.webp"
 ],
 "/busan/yeonje":[
  "/images/busan/yeonje/yeonje-office-demolition(1).webp",
  "/images/busan/yeonje/yeonje-academy-demolition-02.webp",
  "/images/busan/yeonje/yeonje-hospital-demolition-03.webp",
  "/images/busan/yeonje/yeonje-commercial-store-demolition-04.webp",
  "/images/busan/yeonje/yeonje-interior-demolition-05.webp"
 ]
};

function RegionImageOverride(){
 const pathname=usePathname();
 useEffect(()=>{
  const images=regionImageMap[pathname];
  if(!images)return;
  const apply=()=>{
   const section=document.querySelector(".seo-image-section");
   if(!section)return;
   const cards=Array.from(section.querySelectorAll<HTMLElement>(".seo-image-card"));
   cards.slice(0,5).forEach((card,i)=>{
    const img=card.querySelector<HTMLImageElement>("img");
    if(!img||!images[i])return;
    img.src=images[i];
    img.srcset="";
    img.removeAttribute("srcset");
    img.style.width="100%";
    img.style.height="auto";
    img.style.aspectRatio="3 / 2";
    img.style.objectFit="cover";
    img.style.display="block";
   });
  };
  apply();
  const observer=new MutationObserver(apply);
  observer.observe(document.body,{childList:true,subtree:true});
  const timer=window.setTimeout(apply,500);
  return()=>{observer.disconnect();window.clearTimeout(timer)};
 },[pathname]);
 return null;
}

export default function SeoImageRail(){return <><OriginalSeoImageRail/><RegionImageOverride/><HomeEstimateForm/></>}
