"use client";

import { Mail, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="contact-section flex flex-col justify-between border-t border-[#E8E2DE]">
      {/* Main Content Container */}
      <div className="mx-auto max-w-5xl w-full my-auto grid grid-cols-1 gap-12 md:grid-cols-2 items-center py-12">
        
        {/* Left Side: Profile Summary Card */}
        <ScrollReveal className="group relative rounded-2xl border border-[#E8E2DE] bg-[#FFF6F1] p-8 shadow-sm transition-all duration-400 hover:shadow-md hover:border-[#D4A843]/30">
          <div className="flex items-center gap-5">
            {/* Minimal Avatar Frame */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#573D00] text-[#FFF6F1] font-serif text-3xl font-bold shadow-inner">
              M
              {/* Active status ring */}
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#D4A843] border-2 border-[#FFF6F1] animate-pulse"></span>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#573D00]">
                Mentega
              </h3>
              <p className="font-sans text-sm italic text-[#8B7355]">
                Full-Stack Creative Developer
              </p>
            </div>
          </div>

          <div className="mt-6 font-serif text-base leading-relaxed text-[#573D00]/90 text-justify">
            <p>
              Saya selalu bersemangat untuk mendiskusikan peluang baru, proyek kolaboratif kreatif,
              atau sekadar bertukar ide digital yang revolusioner. Sini gue beresin proyek luar biasa lo.
            </p>
          </div>

          {/* Quick email link */}
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#573D00] group-hover:text-[#D4A843] transition-colors">
            <span>Kirim pesan sekarang</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </ScrollReveal>

        {/* Right Side: Let's Contact Me & Social Channels */}
        <div className="flex flex-col justify-center gap-8 pl-0 md:pl-8">
          <ScrollReveal>
            <h2 className="font-serif text-5xl font-bold text-[#573D00] tracking-tight leading-tight md:text-6xl">
              Let&apos;s
              <br />
              contact me<span className="text-[#D4A843]">.</span>
            </h2>
            <p className="font-serif text-lg italic text-[#8B7355] mt-4">
              Silakan hubungi saya melalui salah satu saluran di bawah ini. Saya akan membalas secepatnya!
            </p>
          </ScrollReveal>

          {/* Social Icons Grid with custom bouncy CSS classes */}
          <ScrollReveal delay={200} className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:mentega@example.com"
              className="contact-social-btn"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
            </a>
            
            <a
              href="https://instagram.com/mentega"
              className="contact-social-btn"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            
            <a
              href="https://github.com/mentegagorengz"
              className="contact-social-btn"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            
            <a
              href="https://linkedin.com"
              className="contact-social-btn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Clean elegant sub-footer inside contact */}
      <div className="w-full text-center py-6 border-t border-[#E8E2DE]/60 text-xs font-sans font-medium text-[#8B7355]">
        <p>© {currentYear} Portofolio Mentega. Crafted with ❤️ and Georgia font.</p>
      </div>
    </section>
  );
}

