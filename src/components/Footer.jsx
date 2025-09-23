import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Company: ['About', 'Careers', 'Press', 'News'],
    Support: ['Help Center', 'Documentation', 'API Reference', 'Community'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance']
  };

  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-white">Aegis</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Revolutionizing digital finance with intelligent, secure, and scalable AI solutions for tomorrow's economy.
            </p>
            <div className="flex space-x-3">
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
          </div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-white font-semibold text-sm">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-xs"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} Aegis Treasury AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Viewed with 💜 by V9aly
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;