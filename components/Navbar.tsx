import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Vision', href: '#vision' },
    { label: 'Méthodologie', href: '#stream' },
    { label: 'Projets', href: '#roadmap' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nexusBlack/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-full bg-nexusLime group-hover:shadow-[0_0_15px_rgba(191,245,73,0.5)] transition-shadow duration-300 flex items-center justify-center">
            <div className="w-2 h-2 bg-nexusBlack rounded-full" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            NEXUS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
           <a 
            href="#audit"
            className="px-5 py-2.5 rounded-full bg-nexusLime text-nexusBlack text-sm font-semibold hover:bg-nexusLime/90 transition-colors shadow-[0_0_20px_rgba(191,245,73,0.2)]"
          >
            Démarrer l'Audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-nexusBlack border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-white/80 hover:text-nexusLime"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                  href="#audit"
                  className="text-lg font-medium text-nexusLime"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Démarrer l'Audit
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};