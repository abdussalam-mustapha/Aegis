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
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download,
  ExternalLink
} from 'lucide-react';

const CompliancePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('compliance');

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'ai-agents', icon: Bot, label: 'AI Agents' },
    { id: 'simulations', icon: BarChart3, label: 'Simulations' },
    { id: 'compliance', icon: Shield, label: 'Compliance' },
    { id: 'proposals', icon: FileText, label: 'Proposals' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const complianceRules = [
    {
      rule: 'Stablecoin Allocation < 40%',
      status: 'Pass',
      current: '42.5%',
      limit: '40%',
      icon: CheckCircle,
      statusColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      rule: 'No single asset > 25% portfolio',
      status: 'Fail',
      current: '30.1%',
      limit: '25%',
      icon: XCircle,
      statusColor: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      rule: 'Liquidity Pool Exposure < 15%',
      status: 'Pass',
      current: '12.8%',
      limit: '15%',
      icon: CheckCircle,
      statusColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      rule: 'Diversification Score > 7.0',
      status: 'Pass',
      current: '8.1',
      limit: '7.0',
      icon: CheckCircle,
      statusColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      rule: 'Bridge Protocol Usage < 5%',
      status: 'Pass',
      current: '3.2%',
      limit: '5%',
      icon: CheckCircle,
      statusColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      rule: 'Approved Protocol List Adherence',
      status: 'Pass',
      current: '100%',
      limit: '100%',
      icon: CheckCircle,
      statusColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    }
  ];

  const handleDisconnect = () => {
    navigate('/connect-wallet');
  };

  const handleSidebarClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'dashboard') {
      navigate('/dashboard');
    } else if (tabId === 'ai-agents') {
      navigate('/ai-agents');
    } else if (tabId === 'simulations') {
      navigate('/simulations');
    } else if (tabId === 'proposals') {
      navigate('/proposals');
    } else if (tabId === 'settings') {
      navigate('/settings');
    }
  };

  const generateReport = () => {
    // Generate report logic would go here
    console.log('Generating compliance report...');
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
            <h1 className="text-2xl font-bold text-white">Compliance</h1>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search compliance reports..."
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
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Page Title */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Compliance Report</h2>
            </div>

            {/* Compliance Status Banner */}
            <div className="bg-slate-800 rounded-xl border border-red-500/20 p-8 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                  <AlertTriangle size={32} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-2">DAO Treasury is Non-Compliant</h3>
                  <p className="text-gray-400">Last Verified: 2024-07-26, 14:30 UTC</p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Compliance Rules */}
              <div className="lg:col-span-2">
                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Compliance Rules</h3>
                  
                  <div className="space-y-4">
                    {complianceRules.map((rule, index) => {
                      const Icon = rule.icon;
                      return (
                        <div key={index} className={`flex items-center justify-between p-4 rounded-lg border ${rule.bgColor} ${rule.borderColor}`}>
                          <div className="flex items-center space-x-3">
                            <Icon size={20} className={rule.statusColor} />
                            <span className="text-white font-medium">{rule.rule}</span>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                rule.status === 'Pass' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-red-500/20 text-red-400'
                              }`}>
                                {rule.status}
                              </div>
                            </div>
                            
                            <div className="text-right min-w-[120px]">
                              <div className="text-white text-sm">
                                Current: <span className={rule.status === 'Pass' ? 'text-green-400' : 'text-red-400'}>{rule.current}</span>
                              </div>
                              <div className="text-gray-400 text-xs">
                                / {rule.limit}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Export Report */}
              <div className="lg:col-span-1">
                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Export Report</h3>
                  
                  <div className="space-y-4">
                    <button
                      onClick={generateReport}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Download size={16} />
                      <span>Generate & Export</span>
                    </button>
                    
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Available formats: PDF, IPFS Link.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm">
                  Generated with Midnight.js privacy tools, ensuring zero-knowledge proof verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;