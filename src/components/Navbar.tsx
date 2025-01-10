import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
}

interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-3xl font-light text-white hover:text-blue-400 transition-colors"
  >
    {children}
  </button>
);

const Navbar: React.FC<NavbarProps> = ({ onGetStarted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            {/* Menu Button - Left */}
            <div className="w-10">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white hover:text-blue-400 transition-colors p-2"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo - Centered */}
            <button
              onClick={() => scrollToSection('top')}
              className="group"
            >
              <img 
                src="/logo.png" 
                alt="Agnus Logo" 
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
            </button>

            {/* Placeholder for symmetry - Right */}
            <div className="w-10" />
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <img 
                src="/logo.png" 
                alt="Agnus Logo" 
                className="w-16 h-16 object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-400 transition-colors p-2"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 p-6">
              <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
              <NavLink onClick={() => scrollToSection('technology')}>Technology</NavLink>
              <NavLink onClick={() => scrollToSection('specs')}>Technical Specs</NavLink>
              <NavLink onClick={() => scrollToSection('about')}>About Us</NavLink>
              <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
              
              <button
                onClick={() => {
                  onGetStarted();
                  setIsOpen(false);
                }}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
