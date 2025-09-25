import Header from './Header';
import HeroSection from './HeroSection';
import CorePrinciples from './CorePrinciples';
import AdvancedBenefits from './AdvancedBenefits';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <CorePrinciples />
      <AdvancedBenefits />
      <Footer />
    </div>
  );
};

export default LandingPage;