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
  TrendingUp,
  ExternalLink,
  CheckCircle,
  LogOut
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const DashboardPage = () => {
  const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
  const [complianceStatus, setComplianceStatus] = useState('Proof Generated'); // 'Proof Generated' or 'Pending Compliance'

  // Sample data for portfolio allocation
  const portfolioData = [
    { name: 'Ethereum', value: 40, color: '#2D3748' },
    { name: 'USDC Stablecoin', value: 30, color: '#00D9FF' },
    { name: 'DAI Stablecoin', value: 20, color: '#FF6B6B' },
    { name: 'Lido Staked ETH', value: 10, color: '#FFD93D' }
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'ai-agents', icon: Bot, label: 'AI Agents' },
    { id: 'simulations', icon: BarChart3, label: 'Simulations' },
    { id: 'compliance', icon: Shield, label: 'Compliance' },
    { id: 'proposals', icon: FileText, label: 'Proposals' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const handleDisconnect = () => {
    navigate('/connect-wallet');
  };

  const handleSidebarClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'ai-agents') {
      navigate('/ai-agents');
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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-2 shadow-lg">
          <p className="text-white text-sm">
            {`${payload[0].name}: ${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col min-h-screen">
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
            <h1 className="text-2xl font-bold text-white">Treasury Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search assets or transactions..."
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

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Total Treasury Balance */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Total Treasury Balance</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">$12,345,678.90</span>
                <div className="flex items-center mt-2 text-green-400">
                  <TrendingUp size={16} className="mr-1" />
                  <span className="text-sm">Value Change: +$123,456.78 (+1.25%) in last 24h</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Manage Funds
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  View Transactions
                </button>
              </div>
            </div>

            {/* Portfolio Allocation */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Portfolio Allocation</h2>
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {portfolioData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-white font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Latest AI Recommendation */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Latest AI Recommendation</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                    <TrendingUp size={16} className="text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm mb-2">
                      AI suggests rebalancing your portfolio for optimal risk-adjusted returns and yield farming opportunities.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400">Current Allocation</span>
                        <p className="text-white">40% ETH, 30% USDC</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Recommended Allocation</span>
                        <p className="text-cyan-400">35% ETH ↓, 40% USDC ↑</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm hover:bg-green-500/20 transition-colors">
                    Review Full Proposal
                  </button>
                  <button 
                    onClick={() => handleSidebarClick('compliance')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border ${complianceStatus === 'Proof Generated' 
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                    {complianceStatus === 'Proof Generated' ? <CheckCircle size={14} /> : <Shield size={14} />}
                    <span>{complianceStatus === 'Proof Generated' ? 'Proof Generated' : 'Pending Compliance'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Compliance Status */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Compliance Status</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={24} className="text-green-400" />
                  <div>
                    <h3 className="text-green-400 font-semibold">ZK-Proof Verified & Compliant</h3>
                    <p className="text-gray-400 text-sm">
                      All treasury transactions and asset holdings are verified via zero-knowledge proofs, ensuring full compliance with established DAO mandates without revealing sensitive details.
                    </p>
                  </div>
                </div>
                <button onClick={() => handleSidebarClick('compliance')} className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2">
                  <span>View Compliance Report</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;