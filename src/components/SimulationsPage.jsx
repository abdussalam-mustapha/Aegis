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
  ChevronDown,
  Play,
  RotateCcw
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const SimulationsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('simulations');
  const [ethPriceChange, setEthPriceChange] = useState(0);
  const [btcPriceChange, setBtcPriceChange] = useState(0);
  const [stablecoinYield, setStablecoinYield] = useState(0);
  const [timeHorizon, setTimeHorizon] = useState('6 Months');

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'ai-agents', icon: Bot, label: 'AI Agents' },
    { id: 'simulations', icon: BarChart3, label: 'Simulations' },
    { id: 'compliance', icon: Shield, label: 'Compliance' },
    { id: 'proposals', icon: FileText, label: 'Proposals' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const timeHorizons = ['3 Months', '6 Months', '1 Year', '2 Years'];

  // Current portfolio data
  const currentPortfolioData = [
    { name: 'ETH', value: 30, color: '#2D3748' },
    { name: 'BTC', value: 50, color: '#00D9FF' },
    { name: 'Stablecoins', value: 10, color: '#FFD93D' },
    { name: 'DAO Tokens', value: 6, color: '#FF6B6B' },
    { name: 'Other', value: 4, color: '#9CA3AF' }
  ];

  // Simulated portfolio data (same structure for now)
  const simulatedPortfolioData = [
    { name: 'ETH', value: 30, color: '#2D3748' },
    { name: 'BTC', value: 50, color: '#00D9FF' },
    { name: 'Stablecoins', value: 10, color: '#FFD93D' },
    { name: 'DAO Tokens', value: 6, color: '#FF6B6B' },
    { name: 'Other', value: 4, color: '#9CA3AF' }
  ];

  const assetData = [
    {
      name: 'ETH',
      currentValue: '$1,500,000',
      simulatedValue: '$0',
      change: '+0.00%',
      currentAllocation: '30.0%',
      simulatedAllocation: '0.0%'
    },
    {
      name: 'BTC',
      currentValue: '$2,500,000',
      simulatedValue: '$0',
      change: '+0.00%',
      currentAllocation: '50.0%',
      simulatedAllocation: '0.0%'
    },
    {
      name: 'Stablecoins',
      currentValue: '$500,000',
      simulatedValue: '$0',
      change: '+0.00%',
      currentAllocation: '10.0%',
      simulatedAllocation: '0.0%'
    },
    {
      name: 'DAO Tokens',
      currentValue: '$300,000',
      simulatedValue: '$0',
      change: '+0.00%',
      currentAllocation: '6.0%',
      simulatedAllocation: '0.0%'
    },
    {
      name: 'Other',
      currentValue: '$200,000',
      simulatedValue: '$0',
      change: '+0.00%',
      currentAllocation: '4.0%',
      simulatedAllocation: '0.0%'
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
    } else if (tabId === 'compliance') {
      navigate('/compliance');
    } else if (tabId === 'proposals') {
      navigate('/proposals');
    } else if (tabId === 'settings') {
      navigate('/settings');
    }
  };

  const resetParameters = () => {
    setEthPriceChange(0);
    setBtcPriceChange(0);
    setStablecoinYield(0);
    setTimeHorizon('6 Months');
  };

  const runSimulation = () => {
    // Simulation logic would go here
    console.log('Running simulation with parameters:', {
      ethPriceChange,
      btcPriceChange,
      stablecoinYield,
      timeHorizon
    });
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
            <h1 className="text-2xl font-bold text-white">Simulation Sandbox</h1>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search simulation parameters..."
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
            {/* Left Panel - Scenario Variables */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800 rounded-xl p-6 h-full">
                <h2 className="text-lg font-semibold text-white mb-6">Scenario Variables</h2>
                
                <div className="space-y-6">
                  {/* ETH Price Change */}
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      ETH Price Change (%)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="-100"
                        max="100"
                        value={ethPriceChange}
                        onChange={(e) => setEthPriceChange(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>-100%</span>
                        <span>100%</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-white font-medium">{ethPriceChange}</span>
                      </div>
                    </div>
                  </div>

                  {/* BTC Price Change */}
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      BTC Price Change (%)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="-100"
                        max="100"
                        value={btcPriceChange}
                        onChange={(e) => setBtcPriceChange(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>-100%</span>
                        <span>100%</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-white font-medium">{btcPriceChange}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stablecoin Yield Rate */}
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Stablecoin Yield Rate (%)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="20"
                        value={stablecoinYield}
                        onChange={(e) => setStablecoinYield(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>20%</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-white font-medium">{stablecoinYield}</span>
                      </div>
                    </div>
                  </div>

                  {/* Time Horizon */}
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Time Horizon
                    </label>
                    <div className="relative">
                      <select
                        value={timeHorizon}
                        onChange={(e) => setTimeHorizon(e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 appearance-none"
                      >
                        {timeHorizons.map((horizon) => (
                          <option key={horizon} value={horizon}>
                            {horizon}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    <button
                      onClick={resetParameters}
                      className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <RotateCcw size={16} />
                      <span>Reset Parameters</span>
                    </button>
                    <button
                      onClick={runSimulation}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Play size={16} />
                      <span>Simulate</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Results */}
            <div className="lg:col-span-3 space-y-6">
              {/* Overall Simulation Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Expected Portfolio Value</h3>
                  <div className="text-2xl font-bold text-white">$0</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Expected Capital Loss</h3>
                  <div className="text-2xl font-bold text-red-400">-$5,000,000</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Percentage Change</h3>
                  <div className="text-2xl font-bold text-red-400">-100.00%</div>
                </div>
              </div>

              {/* Asset Value Comparison */}
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Asset Value Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-gray-400 text-sm">
                        <th className="text-left pb-3">Asset</th>
                        <th className="text-right pb-3">Current Value</th>
                        <th className="text-right pb-3">Simulated Value</th>
                        <th className="text-right pb-3">% Change</th>
                        <th className="text-right pb-3">Current Allocation (%)</th>
                        <th className="text-right pb-3">Simulated AI Rec.</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {assetData.map((asset, index) => (
                        <tr key={index} className="border-t border-slate-700">
                          <td className="py-3 text-white font-medium">{asset.name}</td>
                          <td className="py-3 text-right text-white">{asset.currentValue}</td>
                          <td className="py-3 text-right text-gray-400">{asset.simulatedValue}</td>
                          <td className="py-3 text-right text-green-400">{asset.change}</td>
                          <td className="py-3 text-right text-white">{asset.currentAllocation}</td>
                          <td className="py-3 text-right text-green-400">{asset.simulatedAllocation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Portfolio Allocation Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Current Portfolio Allocation</h3>
                  <div className="h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={currentPortfolioData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {currentPortfolioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentPortfolioData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-sm" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-gray-300 text-xs">{item.name}</span>
                        <span className="text-white text-xs font-medium">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Simulated AI Allocation</h3>
                  <div className="h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={simulatedPortfolioData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {simulatedPortfolioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {simulatedPortfolioData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-sm" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-gray-300 text-xs">{item.name}</span>
                        <span className="text-white text-xs font-medium">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Recommendation Insights */}
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">AI Recommendation Insights</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Based on the simulated market conditions, the Privacy Hub AI recommends a strategic rebalancing to optimize for projected 
                  growth and mitigate risk. Specifically, a higher allocation to Other is suggested given the positive outlook for the sector 
                  and the potential for increased yield over the selected time horizon. This rebalancing aims to align the treasury with 
                  market opportunities while ensuring compliance with established risk parameters. Visit the AI 
                  Agents screen for a deeper analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationsPage;