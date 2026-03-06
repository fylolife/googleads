import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import PlansSection from './sections/PlansSection';
import InfoSection from './sections/InfoSection';
import FooterCta from './sections/FooterCta';

const App = () => {
  return (
    <div className="app-shell">
      <NavBar />
      <HeroSection />
      <PlansSection />
      <InfoSection />
      <FooterCta />
    </div>
  );
};

export default App;
