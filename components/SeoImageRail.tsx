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
   const cards=Array.from(document.querySelectorAll<HTMLImageElement>(".seo-image-section .seo-image-card img"));
   cards.slice(0,5).forEach((img,i)=>{
    if(!geumjeongImages[i])return;
    img.src=geumjeongImages[i];
    img.width=1536;
    img.height=1024;
   });
  };
  apply();
  const timer=window.setTimeout(apply,100);
  return()=>window.clearTimeout(timer);
 },[pathname]);
 return null;
}

export default function SeoImageRail(){return <><OriginalSeoImageRail/><RegionImageOverride/><HomeEstimateForm/></>}
