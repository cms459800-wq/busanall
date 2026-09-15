"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
import OriginalSeoImageRail from "./SeoImageRailOriginal";
import HomeEstimateForm from "./HomeEstimateForm";

const geumjeongImages=[
 "/images/busan/geumjeong/geumjeong-restaurant-demolition.webp",
 "/images/busan/geumjeong/geumjeong-cafe-demolition.webp",
 "/images/busan/geumjeong/geumjeong-factory-demolition.webp",
 "/images/busan/geumjeong/geumjeong-commercial-store-demolition.webp",
 "/images/busan/geumjeong/geumjeong-interior-demolition.webp"
];

function RegionImageOverride(){
 const pathname=usePathname();
 useEffect(()=>{
  if(pathname!=="/busan/geumjeong")return;
  const apply=()=>{
   const section=document.querySelector(".seo-image-section");
   if(!section)return;
   const cards=Array.from(section.querySelectorAll<HTMLElement>(".seo-image-card"));
   cards.slice(0,5).forEach((card,i)=>{
    const img=card.querySelector<HTMLImageElement>("img");
    if(!img||!geumjeongImages[i])return;
    img.src=geumjeongImages[i];
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
