const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="hero-orb hero-orb--blue" aria-hidden="true" />
      <div className="hero-orb hero-orb--orange" aria-hidden="true" />
      <p className="tag">Fylo Style • Dark Mode • Google Ads Focus</p>
      <h1 className="hero-title">Grow Your Business with High-Performance Landing Pages</h1>
      <p className="hero-copy">
        We design conversion-focused landing pages in a modern Fylo-inspired layout using a sky blue and orange color
        combination. Connect your page to Google Ads and start attracting real leads.
      </p>
      <div className="hero-actions">
        <button type="button">Connect Google Ads</button>
        <a href="#plans">View 3 Plans</a>
      </div>
    </header>
  );
};

export default HeroSection;
