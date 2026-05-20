"use client";

import { useState } from "react";
import Preloader from "@/components/layout/Preloader";
import HeroSection from "@/components/layout/HeroSection";
import AboutSection from "@/components/layout/AboutSection";
import ExperienceSection from "@/components/layout/ExperienceSection";
import ProjectsSection from "@/components/layout/ProjectsSection";
import ContactSection from "@/components/layout/ContactSection";

export default function Home() {
  const [isHeroActive, setIsHeroActive] = useState(false);

  return (
    <>
      {/* 1. Preloader Screen */}
      <Preloader onComplete={() => setIsHeroActive(true)} />

      {/* 2. Parallax Page Framework */}
      <div className="parallax-container">
        
        {/* Sticky Hero Background */}
        <div className="parallax-hero-wrapper">
          <HeroSection isActive={isHeroActive} />
        </div>

        {/* Sliding Content Layer */}
        <div className="parallax-content-wrapper md:mt-[832px]">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}

