import { Cpu, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="w-full px-6">
        {/* Section Title */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
            Advanced Benefits
          </h2>
        </motion.div>
        
        {/* Benefits Grid */}
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
              >
                {/* Background Card */}
                <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-500">
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div 
                      className="mb-4 flex justify-center"
                      whileHover={{ 
                        scale: 1.1, 
                        transition: { duration: 0.2 } 
                      }}
                    >
                      {benefit.icon}
                    </motion.div>
                    
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
              </motion.div>
            ))}
          </div>
            
          {/* Third Card - Coming Soon */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-6 text-center max-w-md"
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(34, 211, 238, 0.2)",
                transition: { duration: 0.2 } 
              }}
            >
              <div className="relative z-10">
                <motion.h3 
                  className="text-lg font-bold text-gray-400 mb-2"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  More innovations coming soon...
                </motion.h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedBenefits;