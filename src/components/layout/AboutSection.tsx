export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Text content */}
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra erat sed dui fringilla pharetra. Ut eget lorem feugiat,
            pretium nunc vel, tempus ante. Ut consequat elit vel metus ultrices
            ultricies. Proin at venenatis dui. Vivamus pretium purus eu velit
            mattis egestas. Nullam iaculis eleifend rhoncus. Ut commodo felis
            non nibh lobortis luctus.
          </p>
        </div>

        {/* Profile card */}
        <div className="about-card">
          <img
            src="/vader_profile.svg"
            alt="Profile"
            className="about-card__image"
          />
        </div>
      </div>
    </section>
  );
}
