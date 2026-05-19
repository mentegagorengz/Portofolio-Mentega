export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <section className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Portofolio{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Mentega
          </span>
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-neutral-400">
          Welcome to my portfolio. This site is powered by Next.js, Drizzle ORM,
          and MySQL.
        </p>
      </section>
    </div>
  );
}
