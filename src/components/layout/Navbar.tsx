export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="text-lg font-bold tracking-tight text-white">
          Mentega
        </a>
        <div className="flex items-center gap-6 text-sm text-neutral-400">
          <a href="#projects" className="transition-colors hover:text-white">
            Projects
          </a>
          <a href="#experience" className="transition-colors hover:text-white">
            Experience
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
