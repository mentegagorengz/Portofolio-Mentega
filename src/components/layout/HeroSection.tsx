interface HeroSectionProps {
  isActive?: boolean;
}

export default function HeroSection({ isActive = true }: HeroSectionProps) {
  return (
    <section id="home" className={`hero-section ${isActive ? "active" : ""}`}>
      {/* Decorative elements — your custom assets */}

      {/* Star - top left area */}
      <div className="hero-star hero-star--1">
        <img src="/Stars.svg" alt="" className="hero-star__icon hero-star__icon--lg" />
      </div>

      {/* Star - right area */}
      <div className="hero-star hero-star--2">
        <img src="/Stars.svg" alt="" className="hero-star__icon hero-star__icon--sm" />
      </div>

      {/* Cloud - far left */}
      <div className="hero-cloud hero-cloud--1">
        <img src="/Cloud_1.svg" alt="" className="hero-cloud__icon hero-cloud__icon--md" />
      </div>

      {/* Cloud - top center */}
      <div className="hero-cloud hero-cloud--2">
        <img src="/Cloud_2.svg" alt="" className="hero-cloud__icon hero-cloud__icon--sm" />
      </div>

      {/* Cloud - right middle */}
      <div className="hero-cloud hero-cloud--3">
        <img src="/Cloud_3.svg" alt="" className="hero-cloud__icon hero-cloud__icon--md" />
      </div>

      {/* Main content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line hero-title-line--1">
            <span>Mengubah Ide Biasa</span>
          </span>
          <span className="hero-title-line hero-title-line--2">
            <span>Menjadi Pengalaman</span>
          </span>
          <span className="hero-title-line hero-title-line--3">
            <span>
              Digital <span className="hero-title__highlight">Luar Biasa.</span>
            </span>
          </span>
        </h1>
        <p className="hero-subtitle">
          Capek kan liat Karya yang gitu-gitu aja? Sini gue beresin.
        </p>
      </div>
    </section>
  );
}

