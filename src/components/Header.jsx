import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import  AegesLogo from "../assets/aeges-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 relative">
              <img 
                src={AegesLogo} 
                alt="Aegis Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* <span className="text-xl font-bold text-white">Aegis</span> */}
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Solutions
            </a>
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a href="#company" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Company
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;