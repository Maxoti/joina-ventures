"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero logo animation (3 seconds, about 58 KB).
 * - Normal devices: plays once automatically and rests on the final logo frame.
 *   The button then becomes "Replay".
 * - Devices set to "reduce motion": shows the still logo frame with a play
 *   button, so the visitor decides whether to start it.
 */
export function HeroMotion() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const userChose = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true; // required for autoplay in most browsers

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (userChose.current) return; // respect the visitor's own choice
      if (query.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        video.play().catch(() => {});
      }
    };

    apply();
    query.addEventListener("change", apply);
    return () => {
      query.removeEventListener("change", apply);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    userChose.current = true;
    if (video.ended) video.currentTime = 0; // replay from the start
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return (
    <div className="hero-motion">
      <video
        ref={ref}
        muted
        playsInline
        preload="auto"
        width={1280}
        height={720}
        poster="/joina-logo-intro-poster.webp"
        aria-label="Joina Ventures logo animation"
      >
        <source src="/joina-logo-intro.webm" type="video/webm" />
        <source src="/joina-logo-intro.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="motion-toggle"
        onClick={toggle}
        aria-label={playing ? "Pause animation" : "Play animation"}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <rect x="5" y="4" width="5" height="16" rx="1" />
            <rect x="14" y="4" width="5" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z" />
          </svg>
        )}
      </button>
    </div>
  );
}