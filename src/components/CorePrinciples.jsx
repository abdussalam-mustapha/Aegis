import { Shield, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
      className="py-16 bg-gradient-to-b from-slate-900 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="w-full px-6">
        {/* Section Title */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
            Core Principles
          </h2>
        </motion.div>
        
        {/* Principles Grid */}
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {principles.map((principle, index) => (
            <motion.div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
            >
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
                  {principle.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {principle.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CorePrinciples;