"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Start fade out slightly before completion
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Complete preloader and restore scrolling
    const completeTimeout = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF6F1] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Animated Accent circle pulsing softly */}
        <div className="relative flex items-center justify-center w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-[#E8B94A]/20 animate-ping duration-1000"></div>
          <div className="absolute inset-2 rounded-full bg-[#E8B94A]/40 animate-pulse"></div>
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#573D00] text-[#FFF6F1] font-serif text-2xl font-bold shadow-md">
            M
          </div>
        </div>

        {/* Brand Text Staggered pulsing */}
        <h1 className="font-serif text-3xl tracking-[0.2em] text-[#573D00] font-bold uppercase select-none mt-4 animate-pulse">
          Mentega
        </h1>
        
        {/* Subtitle */}
        <p className="font-sans text-xs italic tracking-wider text-[#8B7355] mt-1 select-none opacity-80">
          Loading amazing experiences...
        </p>
      </div>
    </div>
  );
}
