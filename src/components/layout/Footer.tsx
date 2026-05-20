export default function Footer() {
  return (
    <footer className="border-t border-accent/20 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-accent/60">
        <p>
          &copy; {new Date().getFullYear()} My Portofolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
