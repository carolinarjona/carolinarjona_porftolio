import { useState } from 'react';
import { Terminal, Menu, X, ExternalLink, Globe } from 'lucide-react';

interface NavigationProps {
  currentView: 'home' | 'about' | 'projects';
  setCurrentView: (view: 'home' | 'about' | 'projects') => void;
}

export default function Navigation({ currentView, setCurrentView }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: '01. home', type: 'internal' },
    { id: 'about', label: '02. about me', type: 'internal' },
    { id: 'projects', label: '03. portfolio', type: 'internal' },
    { id: 'linkedin', label: '04. linkedin', type: 'external', url: 'https://www.linkedin.com/in/carolinarjona/' },
  ];

  const handleNavClick = (link: typeof links[0]) => {
    if (link.type === 'internal') {
      setCurrentView(link.id as 'home' | 'about' | 'projects');
      setIsMobileMenuOpen(false);
    } else if (link.type === 'external' && link.url) {
      window.open(link.url, '_blank');
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e]/90 backdrop-blur-md border-b border-white/5 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <Globe className="w-6 h-6 text-[#AABF94] group-hover:text-[#e8eaed] transition-colors duration-300" />
            <span className="font-[Ubuntu_Condensed] text-gray-400 group-hover:text-[#e8eaed] transition-colors font-bold text-[16px] font-normal">
              carolina arjona.
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`font-[Satoshi] text-sm tracking-wide transition-colors relative group py-2 flex items-center gap-2 cursor-pointer ${
                  currentView === link.id 
                    ? 'text-[#AABF94] font-bold' 
                    : 'text-gray-400 hover:text-[#e8eaed]'
                }`}
              >
                <span className="relative z-10 font-[Ubuntu_Condensed]">{link.label}</span>
                {link.type === 'external' && <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />}
                
                {currentView === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#AABF94]" />
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e8eaed] transition-all group-hover:w-full opacity-50" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden p-2 text-[#AABF94] hover:bg-white/5 rounded transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#1e1e1e] flex flex-col animate-in fade-in duration-200">
          <div className="p-6 flex justify-end">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#AABF94] hover:bg-white/5 rounded transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
            <div className="flex flex-col items-center gap-2 mb-8 opacity-50">
              <Terminal className="w-12 h-12 text-[#AABF94]" />
              <span className="font-mono text-sm tracking-[0.3em]">CAROL UNIVERSE</span>
            </div>
            
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`font-serif text-3xl transition-colors flex items-center gap-3 cursor-pointer ${
                  currentView === link.id 
                    ? 'text-[#AABF94] italic' 
                    : 'text-[#e8eaed] hover:text-[#AABF94]'
                }`}
              >
                {link.label}
                {link.type === 'external' && <ExternalLink className="w-5 h-5 opacity-50" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
