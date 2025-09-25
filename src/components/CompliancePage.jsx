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

  const [proofData, setProofData] = useState({
    status: 'Validated',
    proofHash: '0x8fac1c68f5c3534a5c5d7a7a7d3a4b7c1b2e3f4d5a6b7c8d9e0f1a2b3c4d5e6f',
    artifactUrl: 'https://ipfs.io/ipfs/QmExampleHash',
    rule: '≥40% stablecoins',
  });

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
    console.log('Generating compliance report...');
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
            <h1 className="text-2xl font-bold text-white">Compliance</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search compliance reports..."
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

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Compliance Report</h2>
            </div>

            {/* Midnight SDK Proof Validation */}
            <div className="bg-slate-800 rounded-xl border border-cyan-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Midnight SDK Proof Validation</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-green-400" />
                    <span className="text-lg font-semibold text-green-400">Proof Validated</span>
                  </div>
                  <p className="text-gray-400 text-sm">Last Verified: 2024-07-26, 14:30 UTC</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Rule Verified:</span>
                    <span className="text-white font-mono bg-slate-700 px-2 py-1 rounded">{proofData.rule} → Verified</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Proof Hash:</span>
                    <span className="text-white font-mono bg-slate-700 px-2 py-1 rounded truncate max-w-xs">
                      {proofData.proofHash}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Verification Status:</span>
                    <span className="text-green-400 font-semibold">{proofData.status}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <a 
                    href={proofData.artifactUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Artifact</span>
                    <ExternalLink size={16} />
                  </a>
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default CompliancePage;