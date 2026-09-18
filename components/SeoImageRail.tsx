"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
import OriginalSeoImageRail from "./SeoImageRailOriginal";
import HomeEstimateForm from "./HomeEstimateForm";

const regionImageMap:Record<string,string[]>={
 "/busan/haeundae":[
  "/images/busan/haeundae/haeundae-commercial-store-demolition.webp",
  "/images/busan/haeundae/haeundae-office-demolition.webp",
  "/images/busan/haeundae/haeundae-restaurant-demolition.webp",
  "/images/busan/haeundae/haeundae-cafe-demolition.webp",
  "/images/busan/haeundae/haeundae-interior-demolition.webp"
 ],
 "/busan/busanjin":[
  "/images/busan/busanjin/busanjin-commercial-store-demolition.webp",
  "/images/busan/busanjin/busanjin-office-demolition.webp",
  "/images/busan/busanjin/busanjin-restaurant-demolition.webp",
  "/images/busan/busanjin/busanjin-cafe-demolition.webp",
  "/images/busan/busanjin/busanjin-interior-demolition.webp"
 ],
 "/busan/yeongdo":[
  "/images/busan/yeongdo/yeongdo-house-demolition.webp",
  "/images/busan/yeongdo/yeongdo-warehouse-demolition.webp",
  "/images/busan/yeongdo/yeongdo-commercial-store-demolition.webp",
  "/images/busan/yeongdo/yeongdo-restaurant-demolition.webp",
  "/images/busan/yeongdo/yeongdo-interior-demolition.webp"
 ],
 "/busan/gijang":[
  "/images/busan/gijang/gijang-factory-demolition.webp",
  "/images/busan/gijang/gijang-warehouse-demolition.webp",
  "/images/busan/gijang/gijang-house-demolition.webp",
  "/images/busan/gijang/gijang-commercial-store-demolition.webp",
  "/images/busan/gijang/gijang-restaurant-demolition.webp"
 ],
 "/busan/nam":[
  "/images/busan/nam/nam-commercial-store-demolition.webp",
  "/images/busan/nam/nam-office-demolition.webp",
  "/images/busan/nam/nam-restaurant-demolition.webp",
  "/images/busan/nam/nam-house-demolition.webp",
  "/images/busan/nam/nam-interior-demolition.webp"
 ],
 "/busan/saha":[
  "/images/busan/saha/saha-restaurant-demolition.webp",
  "/images/busan/saha/saha-pub-demolition.webp",
  "/images/busan/saha/saha-factory-demolition.webp",
  "/images/busan/saha/saha-academy-demolition.webp",
  "/images/busan/saha/saha-commercial-store-demolition.webp"
 ],
 "/busan/gangseo":[
  "/images/busan/gangseo/gangseo-factory-demolition.webp",
  "/images/busan/gangseo/gangseo-warehouse-demolition.webp",
  "/images/busan/gangseo/gangseo-commercial-store-demolition.webp",
  "/images/busan/gangseo/gangseo-restaurant-demolition.webp",
  "/images/busan/gangseo/gangseo-interior-demolition.webp"
 ],
 "/busan/buk":[
  "/images/busan/buk/buk-commercial-store-demolition.webp",
  "/images/busan/buk/buk-restaurant-demolition.webp",
  "/images/busan/buk/buk-academy-demolition.webp",
  "/images/busan/buk/buk-beauty-salon-demolition.webp",
  "/images/busan/buk/buk-interior-demolition.webp"
 ],
 "/busan/dong":[
  "/images/busan/dong/dong-lodging-demolition.webp",
  "/images/busan/dong/dong-restaurant-demolition.webp",
  "/images/busan/dong/dong-commercial-store-demolition.webp",
  "/images/busan/dong/dong-office-demolition.webp",
  "/images/busan/dong/dong-interior-demolition.webp"
 ],
 "/busan/dongnae":[
  "/images/busan/dongnae/dongnae-commercial-store-demolition.webp",
  "/images/busan/dongnae/dongnae-academy-demolition.webp",
  "/images/busan/dongnae/dongnae-hospital-demolition.webp",
  "/images/busan/dongnae/dongnae-office-demolition.webp",
  "/images/busan/dongnae/dongnae-interior-demolition.webp"
 ],
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
 ],
 "/busan/sasang":[
  "/images/busan/sasang/sasang-factory-demolition-01.webp",
  "/images/busan/sasang/sasang-warehouse-demolition-02.webp",
  "/images/busan/sasang/sasang-commercial-store-demolition-03.webp",
  "/images/busan/sasang/sasang-office-demolition-04.webp",
  "/images/busan/sasang/sasang-interior-demolition-05.webp"
 ],
 "/busan/seo":[
  "/images/busan/seo/seo-hospital-demolition-01.webp",
  "/images/busan/seo/seo-commercial-store-demolition-02.webp",
  "/images/busan/seo/seo-restaurant-demolition-03.webp",
  "/images/busan/seo/seo-house-demolition-04.webp",
  "/images/busan/seo/seo-interior-demolition-05.webp"
 ],
 "/busan/jung":[
  "/images/busan/jung/jung-retail-store-demolition-01.webp",
  "/images/busan/jung/jung-restaurant-demolition-02.webp",
  "/images/busan/jung/jung-commercial-store-demolition-03.webp",
  "/images/busan/jung/jung-cafe-demolition-04.webp",
  "/images/busan/jung/jung-interior-demolition-05.webp"
 ],
 "/busan/suyeong":[
  "/images/busan/suyeong/suyeong-store-demolition.webp",
  "/images/busan/suyeong/suyeong-restaurant-demolition.webp",
  "/images/busan/suyeong/suyeong-cafe-demolition.webp",
  "/images/busan/suyeong/suyeong-pub-demolition.webp",
  "/images/busan/suyeong/suyeong-interior-demolition.webp"
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
    const src=images[i];
    const preload=new Image();
    preload.onload=()=>{img.src=src;img.srcset="";img.removeAttribute("srcset");img.style.width="100%";img.style.height="auto";img.style.aspectRatio="3 / 2";img.style.objectFit="cover";img.style.display="block"};
    preload.src=src;
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
