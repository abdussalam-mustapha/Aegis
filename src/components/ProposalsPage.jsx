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
  Layers
} from 'lucide-react';

const ProposalsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('proposals');

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
    // Handle reject logic
    console.log('Proposal rejected');
  };

  const handleSendBackToAgents = () => {
    // Handle send back to agents logic
    console.log('Sent back to agents');
  };

  const handleApproveAndExecute = () => {
    // Handle approve and execute logic
    console.log('Proposal approved and executed');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 border-r border-slate-700">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-bold text-lg">AegisTreasuryAI</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
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

        {/* Disconnect Button */}
        <div className="absolute bottom-4 left-4 right-4">
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
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Proposals</h1>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search proposals..."
                  className="bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              
              {/* Notifications */}
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Bell size={20} />
              </button>
              
              {/* Profile */}
              <button className="p-2 bg-slate-700 rounded-lg text-gray-400 hover:text-white transition-colors">
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="max-w-4xl w-full">
            {/* Page Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Review Treasury Proposal</h2>
            </div>

            {/* Proposal Card */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              {/* Proposal Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Quarterly Capital Allocation v2.0</h3>
                <h4 className="text-lg font-semibold text-gray-300">AI Allocation Suggestion</h4>
              </div>

              {/* Allocation Items */}
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
                            className="bg-slate-500 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
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
        </div>
      </div>
    </div>
  );
};

export default ProposalsPage;