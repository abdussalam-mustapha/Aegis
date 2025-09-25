import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateX: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        duration: 0.1
      }
    }
  };
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/hero-image.png" 
          alt="Aegis AI Treasury - Futuristic robots with digital portal" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Dark overlay to ensure text readability */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        ></motion.div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Glowing orbs that match the image's portal theme */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.8, 1.2, 1],
            opacity: [0.3, 0.7, 0.2, 0.6, 0.3],
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 10, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.7, 1.4, 0.9, 1],
            opacity: [0.2, 0.6, 0.1, 0.5, 0.2],
            x: [0, -40, 25, -15, 0],
            y: [0, 15, -25, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 0.6, 1.3, 1],
            opacity: [0.4, 0.8, 0.2, 0.7, 0.4],
            rotate: [0, 180, 360],
            x: [0, 20, -30, 15, 0],
            y: [0, -30, 20, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        ></motion.div>
        
        {/* Enhanced Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/6 w-3 h-3 bg-cyan-400 rounded-full"
            animate={{
              y: [-20, 30, -10, 20, -20],
              x: [0, 15, -10, 5, 0],
              opacity: [0.3, 1, 0.5, 0.8, 0.3],
              scale: [1, 1.5, 0.8, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              y: [-25, 40, -15, 25, -25],
              x: [0, -20, 12, -8, 0],
              opacity: [0.2, 0.9, 0.4, 0.7, 0.2],
              scale: [1, 2, 0.5, 1.3, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-blue-400 rounded-full"
            animate={{
              y: [-15, 35, -20, 15, -15],
              x: [0, 25, -18, 10, 0],
              opacity: [0.4, 1, 0.3, 0.8, 0.4],
              scale: [1, 1.8, 0.6, 1.4, 1]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          ></motion.div>
          
          {/* Additional dynamic particles */}
          <motion.div 
            className="absolute top-1/6 right-1/6 w-1 h-1 bg-yellow-400 rounded-full"
            animate={{
              y: [-30, 45, -20, 30, -30],
              x: [0, -25, 18, -12, 0],
              opacity: [0.5, 1, 0.2, 0.8, 0.5],
              scale: [1, 3, 0.3, 2, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-1/6 right-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full"
            animate={{
              y: [-20, 35, -25, 20, -20],
              x: [0, 30, -22, 15, 0],
              opacity: [0.3, 0.9, 0.1, 0.7, 0.3],
              scale: [1, 2.5, 0.4, 1.8, 1],
              rotate: [0, -360]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
          ></motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <motion.div 
        className="relative z-20 text-center w-full px-6"
        variants={containerVariants}
      >
        {/* Main Title */}
        <motion.div className="mb-12" variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={titleVariants}
          >
            <motion.span 
              className="text-white drop-shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Aegis
            </motion.span>{' '}
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Treasury AI
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed drop-shadow-lg mb-10"
            variants={itemVariants}
          >
            Revolutionizing digital finance with intelligent, secure, and scalable AI 
            solutions for tomorrow's economy.
          </motion.p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button 
            onClick={handleGetStarted}
            className="group relative bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ArrowRight size={20} className="relative z-10" />
            </motion.div>
          </motion.button>
          
          <motion.button 
            className="group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-black/20"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10">Learn More</span>
          </motion.button>
        </motion.div>
        
        {/* Floating Animation Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;