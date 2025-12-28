
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[750px] flex items-center bg-[#F9F8F6] px-8 md:px-24 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1A2B3C 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-16 relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden mb-6">
            <p className="text-[11px] uppercase tracking-[0.6em] text-[#1A2B3C]/60 font-semibold animate-[slideUp_1s_ease-out_forwards]">
              Lucknow • Est. 2014
            </p>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-extralight text-[#1A1A1A] leading-[1] tracking-tighter mb-10 animate-[slideUp_1.2s_ease-out_0.2s_forwards] opacity-0">
            Spaces, <br />
            <span className="italic font-light">defined</span> by light.
          </h1>
          
          <div className="max-w-md animate-[fadeIn_1.5s_ease-out_0.5s_forwards] opacity-0">
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light mb-12">
              A decade of architectural precision and engineering excellence, crafting environments that resonate with silent luxury.
            </p>
            
            <a 
              href="#projects" 
              className="group relative inline-flex items-center gap-6 py-5 px-10 border border-[#1A2B3C]/10 hover:border-[#1A2B3C] transition-all duration-700 bg-white/30 backdrop-blur-sm"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-[#1A1A1A]">View Portfolio</span>
              <div className="w-8 h-[0.5px] bg-[#1A1A1A] group-hover:w-12 transition-all duration-500"></div>
            </a>
          </div>
        </div>

        {/* Visual Element: Layered Composition */}
        <div className="hidden lg:block lg:col-span-5 relative h-[75vh] animate-[fadeIn_2s_ease-out_0.3s_forwards] opacity-0">
          {/* Main Image */}
          <div className="absolute inset-0 z-10 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Minimal Architectural Form" 
              className="w-full h-full object-cover grayscale brightness-[1.05] contrast-[0.9] hover:scale-105 transition-transform duration-[10s] ease-linear"
            />
          </div>
          
          {/* Offset Shadow Layer */}
          <div className="absolute top-12 -right-12 bottom-12 w-full border-[0.5px] border-[#1A2B3C]/10 z-0"></div>
          
          {/* Floating Detail Overlay */}
          <div className="absolute -bottom-12 -left-12 bg-white/90 backdrop-blur-md p-8 shadow-2xl z-20 border border-gray-100">
             <div className="flex flex-col gap-4">
               <span className="text-4xl font-extralight text-[#1A2B3C] tracking-tighter">10+</span>
               <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
               <span className="text-[9px] uppercase tracking-[0.4em] text-gray-500 leading-tight">Years of<br/>Execution</span>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-pulse">
        <span className="text-[8px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#1A2B3C] to-transparent"></div>
      </div>
      
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
