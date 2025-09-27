import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { ArrowLeft, Wallet } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useAutoNavigateDashboard from '../hooks/useAutoNavigateDashboard';

const ConnectWalletPage = () => {
  const navigate = useNavigate();
  const { isConnected, address } = useAccount();

  useAutoNavigateDashboard();

  useEffect(() => {
    if (isConnected && address) {
      console.log('Wallet connected. Initializing Midnight SDK session for address:', address);
      // In a real implementation, you would initialize the Midnight SDK here.
      // For example: initializeMidnight({ walletAddress: address });
    }
  }, [isConnected, address]);

  const handleBack = () => {
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Back button */}
      <button 
        onClick={handleBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Wallet size={32} className="text-cyan-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Connect Your Wallet
            </h1>
            <p className="text-gray-400 text-sm">
              Choose your preferred wallet to continue.
            </p>
          </div>
          {/* Real Wallet Connect Button */}
          <div className="flex flex-col items-center justify-center py-6">
            <ConnectButton showBalance={false} accountStatus="address" />
          </div>
          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-xs text-gray-500 text-center">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPage;