"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
}

// Highly tailored premium mock data matching the user's multidisciplinary profile
const MOCK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: "Mentega Production",
    role: "Lead Creative Editor & Videographer",
    startDate: "2024",
    endDate: "Sekarang",
    location: "Manado, Indonesia",
    description: "Memimpin tim kreatif dalam pembuatan konten video sinematik, produksi fotografi komersial, dan penyusunan aset desain visual premium untuk brand terkemuka.",
  },
  {
    id: 2,
    company: "Freelance Digital Solutions",
    role: "Full-Stack Web Developer & UI Designer",
    startDate: "2022",
    endDate: "2024",
    location: "Remote",
    description: "Merancang dan membangun aplikasi web modern yang responsif menggunakan Next.js, React, Tailwind CSS, dan database SQL, berfokus pada desain UI/UX yang estetik serta transisi mikro-interaktif.",
  },
  {
    id: 3,
    company: "Creative Studio Inc.",
    role: "Visual Content Creator & Photographer",
    startDate: "2020",
    endDate: "2022",
    location: "Jakarta, Indonesia",
    description: "Melakukan kurasi seni fotografi potret dan landscape, mengelola proses editing pasca-produksi menggunakan Adobe Premiere & Lightroom, serta mendokumentasikan kegiatan komersial seni.",
  },
];

interface ExperienceSectionProps {
  dbExperiences?: ExperienceItem[];
}

export default function ExperienceSection({ dbExperiences }: ExperienceSectionProps) {
  const experiences = dbExperiences && dbExperiences.length > 0 ? dbExperiences : MOCK_EXPERIENCES;

  return (
    <section id="experience" className="experience-section">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#573D00] md:text-5xl">
            My Experience
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#FFC054] rounded-full"></div>
          <p className="font-serif text-lg italic text-[#573D00]/70 mt-4 max-w-xl mx-auto">
            Perjalanan karir saya yang memadukan pengembangan teknologi, desain visual, dan seni dokumentasi media.
          </p>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={exp.id}
              delay={index * 150}
              className="experience-item relative pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="experience-timeline-node flex items-center justify-center">
                <Briefcase className="w-3.5 h-3.5 text-[#FFC054] hover:text-[#FEF9F6] transition-colors" />
              </div>

              {/* Card Container */}
              <div className="group relative rounded-xl border border-[#FFDBA3]/30 bg-[#FEF9F6] p-6 shadow-sm transition-all duration-400 hover:shadow-md hover:border-[#FFC054]/50">
                
                {/* Glowing edge on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-xl bg-transparent transition-all group-hover:bg-[#FFC054]"></div>

                {/* Card Header info */}
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#573D00] group-hover:text-[#FFC054] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-sm font-semibold tracking-wide text-[#573D00]/70 uppercase mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Date & Location tags */}
                  <div className="flex flex-wrap items-center gap-3 text-[#573D00]/70 text-xs">
                    <span className="flex items-center gap-1 bg-[#FFDBA3]/10 px-2.5 py-1 rounded-full border border-[#FFDBA3]/30 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.startDate} - {exp.endDate || "Sekarang"}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 bg-[#FFDBA3]/10 px-2.5 py-1 rounded-full border border-[#FFDBA3]/30 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description content */}
                <div className="mt-4 font-serif text-base leading-relaxed text-[#573D00]/90 text-justify">
                  <p>{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
