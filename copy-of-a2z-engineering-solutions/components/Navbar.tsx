
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 ${
      isScrolled ? 'bg-[#F9F8F6]/80 backdrop-blur-md py-4 border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>
        
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A]">
          <a href="#about" className="hover:text-[#1A2B3C] transition-colors">Experience</a>
          <a href="#services" className="hover:text-[#1A2B3C] transition-colors">Services</a>
          <a href="#projects" className="hover:text-[#1A2B3C] transition-colors">Works</a>
          <a href="#contact" className="hover:text-[#1A2B3C] transition-colors">Contact</a>
        </div>

        <button className="md:hidden text-[#1A1A1A]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
