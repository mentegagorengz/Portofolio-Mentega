export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-neutral-500">
        <p>
          &copy; {new Date().getFullYear()} Portofolio Mentega. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
