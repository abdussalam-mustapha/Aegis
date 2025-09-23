import { Cpu, BarChart3 } from 'lucide-react';

const AdvancedBenefits = () => {
  const benefits = [
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "Decentralised Autonomy (DAO)",
      description: "Harness the power of decentralized governance, enabling community-driven decision-making and transparent operations for your treasury."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: "Real-time Analytics",
      description: "Gain immediate, actionable insights into your treasury performance with powerful analytics dashboards and predictive modeling."
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="w-full px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
            Advanced Benefits
          </h2>
        </div>
        
        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Background Card */}
                <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105">
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
            
          {/* Third Card - Coming Soon */}
          <div className="flex justify-center">
            <div className="relative bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-6 text-center max-w-md">
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-400 mb-2">More innovations coming soon...</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedBenefits;