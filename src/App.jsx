import HeroSection from './sections/HeroSection';
import PlansSection from './sections/PlansSection';
import FooterCta from './sections/FooterCta';

const App = () => {
  return (
    <div className="app-shell">
      <HeroSection />
      <PlansSection />
      <FooterCta />
    </div>
  );
};

export default App;
