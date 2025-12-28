
import React from 'react';
import Logo from './Logo';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2B3C] text-[#E5E5E5] pt-40 pb-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 mb-40">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <Logo inverse />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#6B7280] leading-loose max-w-[200px]">
              Refining the architectural landscape of Lucknow with precision since 2014.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col gap-6">
            <span className="text-[8px] uppercase tracking-[0.6em] text-[#6B7280] font-bold">Explore</span>
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-[11px] uppercase tracking-[0.2em] text-[#E5E5E5]/70 hover:text-white transition-colors duration-500">About</a>
              <a href="#services" className="text-[11px] uppercase tracking-[0.2em] text-[#E5E5E5]/70 hover:text-white transition-colors duration-500">Services</a>
              <a href="#projects" className="text-[11px] uppercase tracking-[0.2em] text-[#E5E5E5]/70 hover:text-white transition-colors duration-500">Projects</a>
              <a href="#contact" className="text-[11px] uppercase tracking-[0.2em] text-[#E5E5E5]/70 hover:text-white transition-colors duration-500">Contact</a>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-6">
            <span className="text-[8px] uppercase tracking-[0.6em] text-[#6B7280] font-bold">Services</span>
            <nav className="flex flex-col gap-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#E5E5E5]/70">Exterior Design</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#E5E5E5]/70">Interior Design</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#E5E5E5]/70">Construction</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#E5E5E5]/70">Estimation</span>
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col gap-6">
            <span className="text-[8px] uppercase tracking-[0.6em] text-[#6B7280] font-bold">Connect</span>
            <div className="space-y-4">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                className="text-xl font-extralight tracking-tight block hover:text-[#D4AF37] transition-colors duration-500"
              >
                {CONTACT_INFO.phone}
              </a>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#6B7280]">
                Lucknow, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] uppercase tracking-[0.4em] text-[#6B7280]">
            © 2024 A2Z Engineering Solutions
          </div>
          
          <div className="flex gap-12">
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-[#6B7280] hover:text-[#E5E5E5] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-[#6B7280] hover:text-[#E5E5E5] transition-colors">Terms of Use</a>
          </div>

          <div className="flex gap-8 lg:ml-auto">
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-[#6B7280] hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-[#6B7280] hover:text-white transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
