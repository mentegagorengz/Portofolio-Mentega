"use client";

import { Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="contact-section flex flex-col justify-between">
      {/* Main Centered Content Container */}
      <div className="mx-auto max-w-3xl w-full my-auto flex flex-col items-center text-center py-16 px-6">
        
        {/* Centered Circular Avatar Frame */}
        <ScrollReveal className="flex justify-center">
          <div className="relative flex items-center justify-center w-28 h-28 rounded-full overflow-hidden bg-gradient-to-b from-[#FFDBA3] to-[#FFC054] border-4 border-[#FEF9F6] shadow-[0_8px_30px_rgba(255,192,84,0.15)] mb-8 transition-transform duration-500 hover:scale-105 group">
            <img
              src="/vader_profile.svg"
              alt="Vader Profile"
              className="w-[85%] h-[85%] object-contain object-center mt-2 translate-y-1 transition-transform duration-500 group-hover:scale-110"
            />
            {/* Active status ring */}
            <span className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-[#FFC054] border-2 border-[#FEF9F6] animate-pulse"></span>
          </div>
        </ScrollReveal>

        {/* Centered Titles from Screenshot */}
        <ScrollReveal delay={100}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FEF9F6] leading-tight mb-8">
            Keen on collaborating?
            <br />
            Reach out, I&apos;m excited to connect🤗
          </h2>
        </ScrollReveal>

        {/* Centered Pill Hire Me Button */}
        <ScrollReveal delay={200} className="flex justify-center mb-10">
          <a
            href="mailto:mentega@example.com"
            className="contact-cta-btn"
          >
            <span>😁 Hire Me</span>
          </a>
        </ScrollReveal>

        {/* Centered Social Channels */}
        <ScrollReveal delay={300} className="flex flex-wrap items-center justify-center gap-4">
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

      {/* Clean elegant sub-footer inside contact */}
      <div className="w-full text-center py-6 border-t border-[#FEF9F6]/10 text-xs font-sans font-medium text-[#FEF9F6]/40 mt-12">
        <p>© {currentYear} Portofolio Mentega. Crafted with ❤️ and Georgia font.</p>
      </div>
    </section>
  );
}

