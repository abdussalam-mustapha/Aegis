import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  User, 
  Home, 
  Bot, 
  BarChart3, 
  Shield, 
  FileText, 
  Settings,
  LogOut,
  CheckCircle,
  DollarSign,
  Bitcoin,
  Layers,
  X
} from 'lucide-react';

const ProposalsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('proposals');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'ai-agents', icon: Bot, label: 'AI Agents' },
    { id: 'simulations', icon: BarChart3, label: 'Simulations' },
    { id: 'compliance', icon: Shield, label: 'Compliance' },
    { id: 'proposals', icon: FileText, label: 'Proposals' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const allocationData = [
    {
      name: 'Checksum',
      percentage: 30,
      icon: CheckCircle,
      iconColor: 'text-green-400'
    },
    {
      name: 'USDC',
      percentage: 45,
      icon: DollarSign,
      iconColor: 'text-blue-400'
    },
    {
      name: 'Bitcoin',
      percentage: 15,
      icon: Bitcoin,
      iconColor: 'text-orange-400'
    },
    {
      name: 'Protocol Tokens',
      percentage: 10,
      icon: Layers,
      iconColor: 'text-purple-400'
    }
  ];

  const handleDisconnect = () => {
    navigate('/');
  };

  const handleSidebarClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'dashboard') {
      navigate('/dashboard');
    } else if (tabId === 'ai-agents') {
      navigate('/ai-agents');
    } else if (tabId === 'simulations') {
      navigate('/simulations');
    } else if (tabId === 'compliance') {
      navigate('/compliance');
    } else if (tabId === 'settings') {
      navigate('/settings');
    }
  };

  const handleReject = () => {
    console.log('Proposal rejected');
  };

  const handleSendBackToAgents = () => {
    console.log('Sent back to agents');
  };

  const handleApproveAndExecute = () => {
    const transactionPayload = {
      proposalId: 'Q4-v2.0',
      actions: [/* ... */],
      zkProof: '0x8fac1c68f5c3534a5c5d7a7a7d3a4b7c1b2e3f4d5a6b7c8d9e0f1a2b3c4d5e6f'
    };
    console.log('Approving and executing with payload:', transactionPayload);
    setShowSuccessModal(true);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-900 flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-bold text-lg">PrivacyHub</span>
            </div>
          </div>
          <nav className="p-4 flex-1">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleSidebarClick(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        activeTab === item.id
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-slate-700">
            <button
              onClick={handleDisconnect}
              className="w-full flex items-center space-x-3 px-4 py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors"
            >
              <LogOut size={20} />
              <span>Disconnect Wallet</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Proposals</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search proposals..."
                    className="bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Bell size={20} />
                </button>
                <button className="p-2 bg-slate-700 rounded-lg text-gray-400 hover:text-white transition-colors">
                  <User size={20} />
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Review Treasury Proposal</h2>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Quarterly Capital Allocation v2.0</h3>
                  <h4 className="text-lg font-semibold text-gray-300">AI Allocation Suggestion</h4>
                </div>
                <div className="space-y-6 mb-8">
                  {allocationData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Icon size={24} className={item.iconColor} />
                          <span className="text-white font-medium text-lg">{item.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-white font-bold text-xl">{item.percentage}%</span>
                          <div className="w-80 bg-slate-700 rounded-full h-3">
                            <div 
                              className="bg-cyan-500 h-3 rounded-full transition-all duration-300"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleReject}
                    className="bg-red-500/20 border border-red-500/30 text-red-400 px-6 py-3 rounded-lg font-semibold hover:bg-red-500/30 transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={handleSendBackToAgents}
                    className="bg-slate-700 border border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                  >
                    Send Back to Agents
                  </button>
                  <button
                    onClick={handleApproveAndExecute}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Approve & Execute
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-2xl border border-cyan-500/20 p-8 shadow-2xl max-w-md w-full text-center relative">
            <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={24} />
            </button>
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Execution Successful ✅</h2>
            <p className="text-gray-400 mb-6">The proposal has been approved and executed on-chain.</p>
            <div className="bg-slate-700/50 rounded-lg p-4 text-left">
              <p className="text-sm text-green-400 font-semibold flex items-center gap-2">
                <Shield size={16} />
                Compliance Verified by Midnight SDK
              </p>
            </div>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProposalsPage;