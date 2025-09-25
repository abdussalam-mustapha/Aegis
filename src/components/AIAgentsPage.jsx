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
  Send,
  ChevronDown
} from 'lucide-react';

const AIAgentsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ai-agents');
  const [selectedStrategy, setSelectedStrategy] = useState('Strategist');
  const [message, setMessage] = useState('');
  const [isProofGenerated, setIsProofGenerated] = useState(true); // Simulate proof generation

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'ai-agents', icon: Bot, label: 'AI Agents' },
    { id: 'simulations', icon: BarChart3, label: 'Simulations' },
    { id: 'compliance', icon: Shield, label: 'Compliance' },
    { id: 'proposals', icon: FileText, label: 'Proposals' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const strategies = ['Strategist', 'Risk Analyst', 'Compliance AI'];

  const allocationData = [
    { name: 'Ethereum', current: 35, proposed: 30, symbol: 'ETH' },
    { name: 'Bitcoin (BTC)', current: 25, proposed: 30, symbol: 'BTC' },
    { name: 'USDC (Stablecoin)', current: 30, proposed: 25, symbol: 'USDC' },
    { name: 'DAO Governance Tokens', current: 5, proposed: 10, symbol: 'DAO' },
    { name: 'Other Allocos', current: 5, proposed: 5, symbol: 'OTHER' }
  ];

  const conversations = [
    {
      agent: 'Strategist AI',
      time: '11:02 AM',
      message: 'Given the recent market indicators, I propose increasing ETH allocation to 35% for growth.',
      type: 'strategist'
    },
    {
      agent: 'Risk Analyst AI',
      time: '11:07 AM',
      message: 'A 35% ETH allocation significantly increases volatility exposure. My recommendation is to maintain 30% for current risk tolerance.',
      type: 'risk'
    },
    {
      agent: 'Compliance AI',
      time: '11:08 AM',
      message: 'The current governance rule specifies a maximum of 35% for any non-stable asset. Both proposals are compliant, but fall near the boundary. All risk meets compliance.',
      type: 'compliance'
    },
    {
      agent: 'Strategist AI',
      time: '11:12 AM',
      message: "I've adjusted the model. With a target of 32% ETH and 28% BTC, we can still achieve growth while reducing the liquidation risk noted by 1-3 points, as per Risk's feedback.",
      type: 'strategist'
    },
    {
      agent: 'Risk Analyst AI',
      time: '11:15 AM',
      message: 'This adjustment is more aligned. The projected impact on portfolio value during a -15% market event is now -20%, an improvement from +25%.',
      type: 'risk'
    },
    {
      agent: 'Compliance AI',
      time: '11:18 AM',
      message: 'Both options are compliant. The treasury allocation meets bond objectives via risk mitigation, adhering to our established treasury policy.',
      type: 'compliance'
    }
  ];

  const handleDisconnect = () => {
    navigate('/');
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'dashboard') {
      navigate('/dashboard');
    } else if (tabId === 'simulations') {
      navigate('/simulations');
    } else if (tabId === 'compliance') {
      navigate('/compliance');
    } else if (tabId === 'proposals') {
      navigate('/proposals');
    } else if (tabId === 'settings') {
      navigate('/settings');
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  const getAgentColor = (type) => {
    switch (type) {
      case 'strategist': return 'text-cyan-400';
      case 'risk': return 'text-orange-400';
      case 'compliance': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-bold text-lg">PrivacyHub</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleTabClick(item.id)}
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
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">AI Agents</h1>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search AI agent insights..."
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

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Allocation Proposal */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Strategy Tabs */}
            <div className="mb-6">
              <div className="flex space-x-1 bg-slate-800 rounded-lg p-1">
                {strategies.map((strategy) => (
                  <button
                    key={strategy}
                    onClick={() => setSelectedStrategy(strategy)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedStrategy === strategy
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {strategy}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Request New Proposal
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Schedule Meeting
              </button>
            </div>

            {/* Allocation Proposal */}
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">Allocation Proposal</h2>
              <p className="text-gray-400 mb-6">AI-powered optimal asset allocation based on market analysis.</p>

              <div className="space-y-4">
                {allocationData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-gray-400 text-sm">{item.symbol}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Current</span>
                        <span className="text-gray-300">{item.current}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-slate-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.current}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Proposed</span>
                        <span className="text-cyan-400">{item.proposed}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.proposed}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-gray-400 text-sm">
                  Last updated: 24h 36 min 30s UTC. Based on current market volatility and DAO preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - AI Conversation */}
          <div className="w-96 bg-slate-800 border-l border-slate-700 flex flex-col">
            {/* Conversation Header */}
            <div className="p-4 border-b border-slate-700">
              <h3 className="text-lg font-semibold text-white">AI Agents Conversation</h3>
              <p className="text-gray-400 text-sm">Simulated debate & insights on treasury strategy.</p>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversations.map((conv, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium text-sm ${getAgentColor(conv.type)}`}>
                      {conv.agent}
                    </span>
                    <span className="text-gray-500 text-xs">{conv.time}</span>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3">
                    <p className="text-gray-300 text-sm leading-relaxed">{conv.message}</p>
                  </div>
                </div>
              ))}

              {isProofGenerated && (
                <div className="text-center py-4 border-t border-slate-700 mt-4">
                  <p className="text-sm text-green-400 font-semibold">✓ Compliance proof generated by Midnight SDK</p>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your query or suggestion for the agents..."
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage;