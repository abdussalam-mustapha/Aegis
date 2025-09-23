import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CorePrinciples from './components/CorePrinciples';
import AdvancedBenefits from './components/AdvancedBenefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <CorePrinciples />
      <AdvancedBenefits />
      <Footer />
    </div>
  );
}

export default App;
