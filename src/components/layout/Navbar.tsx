export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEF9F6]/80 backdrop-blur-md border-b border-[#FFDBA3]/30">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#home" className="font-serif text-xl font-bold tracking-tight text-[#573D00] hover:text-[#FFC054] transition-colors">
          Mentega<span className="text-[#FFC054]">.</span>
        </a>
        <div className="flex items-center gap-6 font-sans text-sm font-semibold text-[#573D00]">
          <a href="#home" className="transition-colors hover:text-[#FFC054]">
            Home
          </a>
          <a href="#about" className="transition-colors hover:text-[#FFC054]">
            About
          </a>
          <a href="#experience" className="transition-colors hover:text-[#FFC054]">
            Experience
          </a>
          <a href="#project" className="transition-colors hover:text-[#FFC054]">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-[#FFC054]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

