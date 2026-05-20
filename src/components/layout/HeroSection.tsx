export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
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
          Mengubah Ide Biasa
          <br />
          Menjadi Pengalaman
          <br />
          Digital{" "}
          <span className="hero-title__highlight">Luar Biasa.</span>
        </h1>
        <p className="hero-subtitle">
          Capek kan liat Karya yang gitu-gitu aja? Sini gue beresin.
        </p>
      </div>
    </section>
  );
}
