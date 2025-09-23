import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-image.png" 
          alt="Aegis AI Treasury - Futuristic robots with digital portal" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Glowing orbs that match the image's portal theme */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-1200"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 text-center w-full px-6">
        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-2xl">Aegis</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Treasury AI
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed drop-shadow-lg mb-10">
            Revolutionizing digital finance with intelligent, secure, and scalable AI 
            solutions for tomorrow's economy.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group relative bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center gap-2">
            <span className="relative z-10">Get Started</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
          
          <button className="group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/50 backdrop-blur-sm bg-black/20">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        
        {/* Floating Animation Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;