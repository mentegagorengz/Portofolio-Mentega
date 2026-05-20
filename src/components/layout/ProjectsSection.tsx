"use client";

import { useState } from "react";
import { ExternalLink, Film, Camera, Code, Palette, X, Play } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProjectItem {
  id: number;
  title: string;
  category: "apps" | "design" | "photography" | "editing";
  categoryLabel: string;
  description: string;
  techStack?: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  videoEmbedUrl?: string; // e.g. Instagram embed or YouTube embed link
}

const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Vespera - Minimal Task Web App",
    category: "apps",
    categoryLabel: "App Development",
    description: "Aplikasi manajemen tugas minimalis bertema glassmorphic, dioptimalkan untuk pengembang independen dengan alur kerja seret-dan-lepas.",
    techStack: "Next.js, TypeScript, Drizzle, MySQL",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
    liveUrl: "https://github.com/mentegagorengz",
    repoUrl: "https://github.com/mentegagorengz",
  },
  {
    id: 2,
    title: "Branding Kit - Studio Kopi Krem",
    category: "design",
    categoryLabel: "Graphic Design",
    description: "Konsep penjenamaan (branding) visual kedai kopi lokal bernuansa hangat, krem, dan minimalis. Termasuk desain logo, kartu menu, dan kemasan.",
    techStack: "Figma, Adobe Illustrator",
    imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Golden Hour - Architecture Photography",
    category: "photography",
    categoryLabel: "Photography",
    description: "Dokumentasi visual arsitektur sudut kota dengan pencahayaan alami matahari terbenam (golden hour) yang menangkap detail bayangan elegan.",
    imageUrl: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Cinematic Travel Reel - Bali Escape",
    category: "editing",
    categoryLabel: "Video Editing",
    description: "Highlight video sinematik pendek berdurasi 30 detik untuk Instagram Reels dengan ritme musik dinamis dan color grading hangat bernuansa senja.",
    techStack: "Adobe Premiere, DaVinci Resolve",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Fallback test embed link (or Instagram embed)
  },
  {
    id: 5,
    title: "Aura - Portrait Photography Series",
    category: "photography",
    categoryLabel: "Photography",
    description: "Kurasi seri potret wajah dengan pencahayaan minim (low-key lighting) untuk menampilkan ekspresi natural dan intensitas emosional subjek.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "Short Film - The Silent Runner",
    category: "editing",
    categoryLabel: "Video Editing",
    description: "Editing film pendek naratif bertema psikologis dengan pemotongan transisi cepat, efek suara ambient yang mencekam, dan visual muram.",
    techStack: "DaVinci Resolve, Adobe Audition",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

interface ProjectsSectionProps {
  dbProjects?: ProjectItem[];
}

export default function ProjectsSection({ dbProjects }: ProjectsSectionProps) {
  const projects = dbProjects && dbProjects.length > 0 ? dbProjects : MOCK_PROJECTS;
  const [activeCategory, setActiveCategory] = useState<"all" | "apps" | "design" | "photography" | "editing">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "apps": return <Code className="w-4 h-4" />;
      case "design": return <Palette className="w-4 h-4" />;
      case "photography": return <Camera className="w-4 h-4" />;
      case "editing": return <Film className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section id="project" className="projects-section">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#573D00] md:text-5xl">
            My Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#FFC054] rounded-full"></div>
          <p className="font-serif text-lg italic text-[#573D00]/70 mt-4 max-w-xl mx-auto">
            Koleksi karya lintas disiplin dari pembuatan aplikasi web, desain visual kreatif, dokumentasi fotografi, hingga penyuntingan video.
          </p>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {([
            { id: "all", label: "All Works" },
            { id: "apps", label: "Apps" },
            { id: "design", label: "Design" },
            { id: "photography", label: "Photography" },
            { id: "editing", label: "Video Editing" }
          ] as const).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#573D00] text-[#FEF9F6] shadow-md scale-102"
                  : "bg-[#FEF9F6] text-[#573D00] border border-[#FFDBA3]/30 hover:border-[#FFC054] hover:text-[#FFC054]"
              }`}
            >
              {getCategoryIcon(cat.id)}
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((proj, idx) => (
            <ScrollReveal
              key={proj.id}
              delay={idx * 100}
              className="project-card group cursor-pointer"
            >
              <div onClick={() => setSelectedProject(proj)} className="w-full h-full">
                {/* Background Image Container */}
                <div className="project-card__image-container">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="project-card__image"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-[#FEF9F6]/90 backdrop-blur-sm border border-[#FFDBA3]/30 px-3 py-1.5 text-xs font-bold text-[#573D00]">
                    {getCategoryIcon(proj.category)}
                    {proj.categoryLabel}
                  </span>

                  {/* Play badge for videos */}
                  {proj.category === "editing" && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#573D00]/80 text-[#FEF9F6] border border-[#FEF9F6]/30">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Glassmorphic Overlay */}
                <div className="project-card__overlay">
                  <div className="project-card__glass">
                    <h3 className="font-serif text-xl font-bold text-[#FEF9F6]">
                      {proj.title}
                    </h3>
                    <p className="font-sans text-xs text-[#FEF9F6]/80 mt-1 line-clamp-2">
                      {proj.description}
                    </p>
                    {proj.techStack && (
                      <span className="inline-block mt-3 text-[10px] uppercase font-bold tracking-wider text-[#FFC054] bg-[#FEF9F6]/10 px-2 py-1 rounded">
                        {proj.techStack}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal Embed */}
      {selectedProject && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#573D00]/80 backdrop-blur-sm p-4">
          <ScrollReveal threshold={0} className="relative w-full max-w-4xl rounded-2xl bg-[#FEF9F6] border border-[#FFDBA3]/30 overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-[#573D00]/80 text-[#FEF9F6] border border-[#FEF9F6]/30 transition-transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Media Area (Left/Top) */}
              <div className="md:col-span-7 bg-[#573D00] min-h-[300px] flex items-center justify-center relative">
                {selectedProject.videoEmbedUrl ? (
                  /* Video Embed Player */
                  <div className="w-full aspect-video">
                    <iframe
                      src={selectedProject.videoEmbedUrl}
                      title={selectedProject.title}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  /* Standard Image Display */
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                )}
              </div>

              {/* Text Area (Right/Bottom) */}
              <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC054]/25 border border-[#FFC054]/30 px-3 py-1 text-xs font-bold text-[#573D00] uppercase">
                    {getCategoryIcon(selectedProject.category)}
                    {selectedProject.categoryLabel}
                  </span>
                  
                  <h3 className="font-serif text-3xl font-bold text-[#573D00] mt-4 leading-tight">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="font-serif text-base leading-relaxed text-[#573D00]/90 mt-4 text-justify">
                    {selectedProject.description}
                  </p>

                  {selectedProject.techStack && (
                    <div className="mt-6">
                      <h4 className="font-sans text-xs uppercase font-bold tracking-wider text-[#573D00]/70">
                        Tools / Tech Stack
                      </h4>
                      <p className="font-sans text-sm font-semibold text-[#573D00] mt-1">
                        {selectedProject.techStack}
                      </p>
                    </div>
                  )}
                </div>

                {/* External links */}
                {(selectedProject.liveUrl || selectedProject.repoUrl) && (
                  <div className="flex flex-wrap gap-3 mt-8">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-[#573D00] text-[#FEF9F6] px-5 py-2.5 text-sm font-bold shadow-md hover:bg-[#FFC054] transition-colors"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {selectedProject.repoUrl && (
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-[#FFDBA3]/50 bg-[#FEF9F6] text-[#573D00] px-5 py-2.5 text-sm font-bold hover:border-[#FFC054] transition-colors"
                      >
                        Code Repo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}
    </section>
  );
}
