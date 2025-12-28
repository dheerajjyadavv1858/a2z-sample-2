
import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll('.service-row');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-64 bg-[#F9F8F6] px-8 md:px-24 overflow-hidden">
      {/* Dynamic Background Image Reveal */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {SERVICES.map((service, index) => (
          <div
            key={`bg-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center grayscale brightness-[0.3] ${
              hoveredIndex === index ? 'opacity-10' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${service.imageUrl})` }}
          />
        ))}
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        <div className="mb-48">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#1A2B3C] font-bold mb-6">Expertise</h2>
          <div className="w-12 h-[1px] bg-[#1A2B3C]/20"></div>
        </div>

        <div className="space-y-[25vh]">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="service-row group opacity-0 translate-y-12 transition-all duration-[1.5s] ease-out flex flex-col items-start cursor-default"
            >
              <div className="relative">
                <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-[10px] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 font-medium tracking-[0.5em]">
                  0{index + 1}
                </span>
                <h3 className="text-6xl md:text-9xl font-extralight text-[#1A1A1A] leading-none tracking-tighter group-hover:text-[#1A2B3C] group-hover:pl-4 transition-all duration-700 ease-in-out">
                  {service.title}
                  <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-4xl ml-4 font-light">.</span>
                </h3>
              </div>
              <div className="mt-8 overflow-hidden max-w-sm">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 font-medium group-hover:text-[#1A2B3C] transition-colors duration-500 transform translate-y-0 leading-loose">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
