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
  Copy,
  Moon
} from 'lucide-react';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('settings');
  const [strategistAggression, setStrategistAggression] = useState(70);
  const [complianceStrictness, setComplianceStrictness] = useState(90);
  const [riskTolerance, setRiskTolerance] = useState(50);
  const [darkMode, setDarkMode] = useState(true);

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'ai-agents', icon: Bot, label: 'AI Agents' },
    { id: 'simulations', icon: BarChart3, label: 'Simulations' },
    { id: 'compliance', icon: Shield, label: 'Compliance' },
    { id: 'proposals', icon: FileText, label: 'Proposals' },
    { id: 'settings', icon: Settings, label: 'Settings' }
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
    } else if (tabId === 'proposals') {
      navigate('/proposals');
    }
  };

  const handleDisconnectWallet = () => {
    navigate('/');
  };

  const handleLogOut = () => {
    navigate('/');
  };

  const copyWalletAddress = () => {
    navigator.clipboard.writeText('0xAEG...57b8');
    // Could add a toast notification here
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
            <span className="text-white font-bold text-lg">PrivacyHub</span>
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
            <h1 className="text-2xl font-bold text-white">Settings</h1>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search transactions or proposals"
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
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Page Title and Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Settings & Profile</h2>
              <p className="text-gray-400">Manage your DAO information and application preferences.</p>
            </div>

            {/* DAO Information */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">DAO Information</h3>
              <p className="text-gray-400 mb-6">Details about your decentralized autonomous organization.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">DAO Name</label>
                  <div className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3">
                    <span className="text-white">Quantum Syndicate DAO</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Wallet Address</label>
                  <div className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 flex items-center justify-between">
                    <span className="text-white">0xAEG...57b8</span>
                    <button
                      onClick={copyWalletAddress}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Agent Preferences */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">AI Agent Preferences</h3>
              <p className="text-gray-400 mb-6">Customize the behavior and risk profiles of your AI co-pilots.</p>
              
              <div className="space-y-6">
                {/* Strategist Aggressiveness */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-300">Strategist Aggressiveness</label>
                    <span className="text-white text-sm">Current: {strategistAggression}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={strategistAggression}
                    onChange={(e) => setStrategistAggression(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Compliance Strictness */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-300">Compliance Strictness</label>
                    <span className="text-white text-sm">Current: {complianceStrictness}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={complianceStrictness}
                    onChange={(e) => setComplianceStrictness(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Risk Analyst Risk Tolerance */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-300">Risk Analyst Risk Tolerance</label>
                    <span className="text-white text-sm">Current: {riskTolerance}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={riskTolerance}
                    onChange={(e) => setRiskTolerance(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>

            {/* Theme Settings */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">Theme Settings</h3>
              <p className="text-gray-400 mb-6">Configure the visual theme of the application.</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Moon size={20} className="text-gray-400" />
                  <span className="text-white font-medium">Dark Mode</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                </label>
              </div>
            </div>

            {/* Account Options */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">Account Options</h3>
              <p className="text-gray-400 mb-6">Manage your wallet connection and application session.</p>
              
              <div className="space-y-3">
                <button
                  onClick={handleDisconnectWallet}
                  className="w-full bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg font-medium hover:bg-red-500/30 transition-colors flex items-center justify-center space-x-2"
                >
                  <LogOut size={16} />
                  <span>Disconnect Wallet</span>
                </button>
                
                <button
                  onClick={handleLogOut}
                  className="w-full bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg font-medium hover:bg-red-500/30 transition-colors flex items-center justify-center space-x-2"
                >
                  <LogOut size={16} />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;