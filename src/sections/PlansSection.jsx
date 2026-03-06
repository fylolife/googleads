import PlanCard from '../components/PlanCard';
import { plans } from '../data/plans';

const PlansSection = () => {
  return (
    <section className="plans-section" id="plans">
      <h2>Choose the Perfect Website Plan</h2>
      <p>Three simple options crafted for conversion, growth, and ad performance.</p>
      <div className="plans-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
