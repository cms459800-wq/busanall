"use client";
import {useEffect} from "react";

/** Subtle scroll reveal and accent rules; respects reduced motion. */
export default function SiteMotion(){
 useEffect(()=>{
  if(typeof window==="undefined"||!window.IntersectionObserver)return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const selectors=[
   ".home-redesign .home-section-head",
   ".home-redesign .explore-visual-card",
   ".home-redesign .guide-visual-card",
   ".home-redesign .home-region-card",
   ".home-redesign .home-process-flow-unit",
   ".home-redesign .closure-support-card",
   ".home-redesign .closure-support-step",
   ".home-redesign .home-process-support",
   ".home-redesign .final-cta",
   ".home-redesign .home-trust-grid > a",
   ".site-footer .footer-quick-link",
   ".site-footer .footer-contact-card"
  ];
  const elements=Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
  const observer=new IntersectionObserver(entries=>{
   for(const entry of entries){
    if(!entry.isIntersecting)continue;
    const element=entry.target as HTMLElement;
    element.classList.add("motion-visible");
    observer.unobserve(element);
   }
  },{rootMargin:"0px 0px -35px 0px",threshold:0.08});
  for(const el of elements){
   // Never hide already-visible content during hydration or after scrolling.
   if(el.getBoundingClientRect().top<window.innerHeight*0.94){el.classList.add("motion-visible");continue}
   el.classList.add("motion-reveal");
   observer.observe(el);
  }
  return()=>observer.disconnect();
 },[]);
 return null;
}
