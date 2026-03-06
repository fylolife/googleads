const PlanCard = ({ name, price, subtitle, features }) => {
  return (
    <article className="plan-card">
      <h3>{name}</h3>
      <p className="plan-price">{price}</p>
      <p className="plan-subtitle">{subtitle}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button type="button">Start with {name}</button>
    </article>
  );
};

export default PlanCard;
