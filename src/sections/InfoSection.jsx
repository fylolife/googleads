const infoCards = [
  {
    title: 'Tools We Use',
    description: 'React + Vite for fast UI, Google Ads tracking setup, and analytics-friendly CTA structure.'
  },
  {
    title: 'System Response',
    description: 'Optimized blocks respond quickly to user actions and keep your messaging clear across each funnel step.'
  },
  {
    title: 'Mobile Response',
    description: 'Mobile-first spacing, flexible grids, and compact menu controls keep the page smooth on small screens.'
  }
];

const InfoSection = () => {
  return (
    <section className="info-section" id="tools">
      <h2>How this landing system works</h2>
      <p>Built for performance, responsive behavior, and a creative animated feel.</p>
      <div className="info-grid">
        {infoCards.map((card) => (
          <article className="info-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
