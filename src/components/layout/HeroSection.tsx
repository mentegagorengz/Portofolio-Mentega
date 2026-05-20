"use client";

import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  isActive?: boolean;
}

export default function HeroSection({ isActive = true }: HeroSectionProps) {
  const [isInView, setIsInView] = useState(true);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(currentSection);
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 80) {
        // Scroll down: instantly trigger exiting state
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setIsScrolledDown(true);
      } else if (currentScroll <= 10) {
        // Scroll back to top: trigger entrance with smart delay
        if (!timeoutRef.current) {
          timeoutRef.current = setTimeout(() => {
            setIsScrolledDown(false);
            timeoutRef.current = null;
          }, 350);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isExiting = isActive && (isScrolledDown || !isInView);
  const isActuallyActive = isActive && !isScrolledDown && isInView;

  let animationClass = "";
  if (isActuallyActive) {
    animationClass = "active";
  } else if (isExiting) {
    animationClass = "exiting";
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`hero-section ${animationClass}`}
    >
      {/* Decorative elements — your custom assets */}

      {/* Star - top left area */}
      <div className="hero-star hero-star--1">
        <img src="/Stars.svg" alt="" className="hero-star__icon hero-star__icon--lg" />
      </div>

      {/* Star - right area */}
      <div className="hero-star hero-star--2">
        <img src="/Stars.svg" alt="" className="hero-star__icon hero-star__icon--sm" />
      </div>

      {/* Cloud - far left */}
      <div className="hero-cloud hero-cloud--1">
        <img src="/Cloud_1.svg" alt="" className="hero-cloud__icon hero-cloud__icon--md" />
      </div>

      {/* Cloud - top center */}
      <div className="hero-cloud hero-cloud--2">
        <img src="/Cloud_2.svg" alt="" className="hero-cloud__icon hero-cloud__icon--sm" />
      </div>

      {/* Cloud - right middle */}
      <div className="hero-cloud hero-cloud--3">
        <img src="/Cloud_3.svg" alt="" className="hero-cloud__icon hero-cloud__icon--md" />
      </div>

      {/* Main content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line hero-title-line--1">
            <span>Mengubah Ide Biasa</span>
          </span>
          <span className="hero-title-line hero-title-line--2">
            <span>Menjadi Pengalaman</span>
          </span>
          <span className="hero-title-line hero-title-line--3">
            <span>
              Digital <span className="hero-title__highlight">Luar Biasa.</span>
            </span>
          </span>
        </h1>
        <p className="hero-subtitle">
          Capek kan liat Karya yang gitu-gitu aja? Sini gue beresin.
        </p>
      </div>
    </section>
  );
}


