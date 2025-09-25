import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CorePrinciples from './components/CorePrinciples';
import AdvancedBenefits from './components/AdvancedBenefits';
import Footer from './components/Footer';
import OnboardingPage from './components/OnboardingPage';
import ConnectWalletPage from './components/ConnectWalletPage';
import DashboardPage from './components/DashboardPage';
import AIAgentsPage from './components/AIAgentsPage';
import SimulationsPage from './components/SimulationsPage';
import CompliancePage from './components/CompliancePage';
import ProposalsPage from './components/ProposalsPage';
import SettingsPage from './components/SettingsPage';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClientProvider } from '@tanstack/react-query';
import { config, queryClient } from './wallet';
import { Toaster } from 'react-hot-toast';


function LandingPage() {
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

function App() {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/connect-wallet" element={<ConnectWalletPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/ai-agents" element={<AIAgentsPage />} />
              <Route path="/simulations" element={<SimulationsPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/proposals" element={<ProposalsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
      <Toaster position="top-right" />
    </WagmiConfig>
  );
}

export default App;
