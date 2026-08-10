"use client";

import { useEffect, useState } from "react";

const PageLoader = () => {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const MIN_MS = 700;
    const MAX_MS = 6000;

    const finish = () => {
      const elapsed = Date.now() - start;
      setTimeout(() => {
        setHidden(true);
        setTimeout(() => setGone(true), 700);
      }, Math.max(0, MIN_MS - elapsed));
    };

    const check = setInterval(() => {
      const heroLoaded = document.querySelector(".lumina-hero .slider-wrapper.loaded");
      if (heroLoaded || Date.now() - start > MAX_MS) {
        clearInterval(check);
        finish();
      }
    }, 100);

    return () => clearInterval(check);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a09] transition-opacity duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-sm uppercase tracking-[0.4em] text-[#E1E0CC]/70">SG</span>
        <div className="h-px w-24 overflow-hidden bg-white/10">
          <div className="loader-bar h-full w-full bg-[#E1E0CC]/80" />
        </div>
      </div>
    </div>
  );
};

export { PageLoader };
