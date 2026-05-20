"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/layout/HeroSection";
import AboutSection from "@/components/layout/AboutSection";
import ExperienceSection from "@/components/layout/ExperienceSection";
import ProjectsSection from "@/components/layout/ProjectsSection";
import ContactSection from "@/components/layout/ContactSection";

export default function Home() {
  const [isHeroActive, setIsHeroActive] = useState(false);

  useEffect(() => {
    setIsHeroActive(true);
  }, []);

  return (
    <>
      {/* Direct Scrolling Layout */}
      <div>
        <HeroSection isActive={isHeroActive} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}


