"use client";
import {useEffect} from "react";

/** Subtle scroll reveal and accent rules; respects reduced motion. */
export default function SiteMotion(){
 useEffect(()=>{
  if(typeof window==="undefined"||!window.IntersectionObserver)return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const selectors=[
   ".home-redesign .home-compare-heading",
   ".home-redesign .home-compare-bad",
   ".home-redesign .home-compare-good",
   ".home-redesign .home-compare-actions",
   ".home-redesign .home-section-head",
   ".home-redesign .home-hero h1",
   ".home-redesign .home-hero-main > p",
   ".home-redesign .home-hero-main > .cta-row",
   ".home-redesign .home-trust-intro h2",
   ".home-redesign .home-trust-intro > p",
   ".home-redesign .home-section-head h2",
   ".home-redesign .home-section-head p",
   ".home-redesign .home-process-support h3",
   ".home-redesign .home-process-support p",
   ".home-redesign .closure-support-head h2",
   ".home-redesign .closure-support-lead",
   ".home-redesign .final-cta h2",
   ".home-redesign .final-cta p",
   ".home-redesign .explore-visual-card",
   ".home-redesign .guide-visual-card",
   ".home-redesign .home-region-card",
   ".home-redesign .home-process-flow-unit",
   ".home-redesign .closure-support-card",
   ".home-redesign .closure-support-step",
   ".home-redesign .home-process-support",
   ".home-redesign .final-cta",
   ".home-redesign .home-trust-grid > a",
   ".busan-redesign .busan-heading",
   ".busan-redesign .busan-region-card",
   ".busan-redesign .busan-check",
   ".busan-redesign .busan-support",
   ".busan-redesign .busan-final",
   ".service-redesign .service-section-heading",
   ".service-redesign .service-featured-card",
   ".service-redesign .service-process-card",
   ".service-redesign .service-benefit",
   ".service-redesign .service-directory-card",
   ".service-redesign .service-support",
   ".service-redesign .service-final-cta",
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
