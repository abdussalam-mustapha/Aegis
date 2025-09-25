import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const OnboardingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to connect wallet page
    navigate('/connect-wallet');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateY: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotateZ: -90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.1,
      rotateZ: 2,
      boxShadow: "0 20px 60px rgba(6, 182, 212, 0.4)",
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.9,
      rotateZ: -1,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Back button */}
      <motion.button 
        onClick={handleBackToHome}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        initial={{ opacity: 0, x: -50, rotateY: -90 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8, 
          delay: 0.3 
        }}
        whileHover={{ 
          x: -8, 
          scale: 1.05,
          transition: { duration: 0.2 } 
        }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </motion.button>

      {/* Enhanced Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/onboardingImg.png" 
          alt="AI Network Visualization" 
          className="w-full h-full object-cover opacity-80"
          initial={{ scale: 1.3, opacity: 0, rotateZ: 5 }}
          animate={{ scale: 1, opacity: 0.8, rotateZ: 0 }}
          transition={{ 
            duration: 2,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        />
        {/* Enhanced Dark overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        ></motion.div>
        
        {/* Additional animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 0.8, 1.3, 1],
              opacity: [0.2, 0.6, 0.1, 0.5, 0.2],
              x: [0, 40, -30, 20, 0],
              y: [0, -25, 15, -10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              scale: [1, 0.6, 1.4, 0.9, 1],
              opacity: [0.3, 0.7, 0.1, 0.6, 0.3],
              x: [0, -35, 25, -15, 0],
              y: [0, 20, -30, 15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
      >
        {/* Enhanced Main Title */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={titleVariants}
        >
          <motion.span
            initial={{ opacity: 0, y: 30, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.8, 
              delay: 0.8 
            }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(255,255,255,0.5)",
              transition: { duration: 0.3 }
            }}
          >
            Aegis Treasury
          </motion.span>
          <br />
          <motion.span 
            className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30, rotateX: -90, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 10,
              duration: 1, 
              delay: 1.2 
            }}
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 30px rgba(6, 182, 212, 0.6)",
              transition: { duration: 0.3 }
            }}
          >
            AI
          </motion.span>
        </motion.h1>
        
        {/* Enhanced Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            color: "#ffffff",
            transition: { duration: 0.3 }
          }}
        >
          Privacy-first AI co-pilot for DAO treasuries.
        </motion.p>
        
        {/* Enhanced CTA Button */}
        <motion.button 
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 relative overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span
            className="relative z-10"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            Get Started
          </motion.span>
          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0"
            whileHover={{
              opacity: 0.3,
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          />
        </motion.button>
      </motion.div>
      
      {/* Enhanced bottom attribution */}
      <motion.div 
        className="absolute bottom-4 left-4 text-xs text-gray-500 flex items-center gap-2"
        initial={{ opacity: 0, y: 30, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8, 
          delay: 1.5 
        }}
        whileHover={{
          scale: 1.1,
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        <span>Made with</span>
        <div className="flex items-center gap-1">
          <motion.span 
            className="text-purple-400"
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{
              scale: 1.8,
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            💜
          </motion.span>
          <motion.span 
            className="text-cyan-400 font-medium"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 10px rgba(6, 182, 212, 0.6)",
              transition: { duration: 0.3 }
            }}
          >
            Visily
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OnboardingPage;