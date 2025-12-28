
import React, { useEffect, useRef } from 'react';

const Founder: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-white px-8 md:px-24">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-[1.5s] ease-out"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-12 md:gap-20">
          
          {/* Medium-Large Grounded Portrait */}
          <div className="w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] overflow-hidden bg-[#F9F8F6] shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
              alt="Er. Aman Singh" 
              className="w-full h-full object-cover grayscale brightness-[1.02] contrast-[1.05]"
            />
          </div>

          {/* Refined Signature Content */}
          <div className="space-y-6 max-w-sm">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold block">Founder</span>
              <h4 className="text-2xl font-medium text-[#1A2B3C] tracking-tight">Er. Aman Singh</h4>
            </div>
            
            <div className="w-8 h-[1px] bg-[#1A2B3C]/20"></div>
            
            <p className="text-[15px] text-[#1A1A1A] font-light tracking-wide leading-relaxed italic">
              "Engineering is the silent foundation of architectural expression."
            </p>
            
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
              10+ Years of Engineering Integrity
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
