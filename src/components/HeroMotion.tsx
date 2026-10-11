"use client";

import { useEffect, useRef } from "react";

/**
 * Looping product slideshow for the hero. Uses compressed video (about 250 KB)
 * instead of the 3.7 MB GIF, and stays on the still poster frame for visitors
 * who ask their device to reduce motion.
 */
export function HeroMotion() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true; // required for autoplay in most browsers
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (query.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        video.play().catch(() => {});
      }
    };

    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <div className="hero-motion">
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        width={800}
        height={800}
        poster="/hero-motion-poster.webp"
        aria-label="Joina Ventures branded t-shirts, mugs, banners and business cards"
      >
        <source src="/hero-motion.webm" type="video/webm" />
        <source src="/hero-motion.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
