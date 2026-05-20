export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="text-lg font-bold tracking-tight text-accent">
          My Portofolio
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-accent">
          <a href="#home" className="transition-opacity hover:opacity-70">
            Home
          </a>
          <a href="#about" className="transition-opacity hover:opacity-70">
            About me
          </a>
          <a href="#experience" className="transition-opacity hover:opacity-70">
            Experience
          </a>
          <a href="#project" className="transition-opacity hover:opacity-70">
            Project
          </a>
        </div>
      </div>
    </nav>
  );
}
