import { Shield, TrendingUp, Zap } from 'lucide-react';

const CorePrinciples = () => {
  const principles = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Privacy-First Design",
      description: "Aegis Treasury AI is built from the ground up with robust privacy protocols, ensuring your financial data remains secure and confidential at all times."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "Scalable AI Treasury",
      description: "Leverage AI-driven insights for dynamic treasury optimization, designed to scale effortlessly with your growing digital asset portfolio."
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Seamless Wallet Integration",
      description: "Connect all your digital wallets with ease, providing a unified and comprehensive view of your assets for simplified management."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-black">
      <div className="w-full px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
            Core Principles
          </h2>
        </div>
        
        {/* Principles Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {principle.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;