"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const geumjeongImages = [
  "/images/busan/geumjeong/geumjeong-restaurant-demolition.webp",
  "/images/busan/geumjeong/geumjeong-cafe-demolition.webp",
  "/images/busan/geumjeong/geumjeong-factory-demolition.webp",
  "/images/busan/geumjeong/geumjeong-commercial-store-demolition.webp",
  "/images/busan/geumjeong/geumjeong-interior-demolition.webp",
];

export default function RegionUploadedImageOverride() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/busan/geumjeong") return;

    const apply = () => {
      const images = document.querySelectorAll<HTMLImageElement>(".seo-image-section .seo-image-card img");
      images.forEach((img, index) => {
        const src = geumjeongImages[index];
        if (!src) return;
        img.src = src;
        img.removeAttribute("srcset");
        img.width = 1536;
        img.height = 1024;
      });
    };

    apply();
    const timer = window.setTimeout(apply, 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
