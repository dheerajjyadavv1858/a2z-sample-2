
import React, { useEffect, useRef } from 'react';

const Credentials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.metric-item');
            items.forEach((item, i) => {
              // Stagger the entire item entry
              setTimeout(() => {
                const number = item.querySelector('.metric-number');
                const label = item.querySelector('.metric-label');
                const line = item.querySelector('.metric-line');
                
                number?.classList.add('opacity-100', 'translate-y-0');
                number?.classList.remove('opacity-0', 'translate-y-[8px]');
                
                // Secondary stagger for label and line
                setTimeout(() => {
                  line?.classList.add('w-8');
                  line?.classList.remove('w-0');
                  label?.classList.add('opacity-100', 'translate-y-0');
                  label?.classList.remove('opacity-0', 'translate-y-[6px]');
                }, 150);
                
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    { value: '10+', label: 'Years of Experience' },
    { value: '100+', label: 'Projects Delivered' },
    { value: 'Lucknow', label: '& Nearby Regions' },
    { value: 'Hybrid', label: 'Residential & Commercial' }
  ];

  return (
    <section className="py-48 bg-white border-y border-[#1A2B3C]/5 px-8 md:px-24">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          {metrics.map((item, index) => (
            <div key={index} className="metric-item flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <span className="metric-number opacity-0 translate-y-[8px] transition-all duration-[1.2s] ease-out text-4xl md:text-6xl font-extralight text-[#1A2B3C] tracking-tighter">
                {item.value}
              </span>
              <div className="metric-line w-0 h-[1px] bg-[#D4AF37]/30 transition-all duration-[1s] ease-out"></div>
              <span className="metric-label opacity-0 translate-y-[6px] transition-all duration-[1.2s] ease-out text-[10px] uppercase tracking-[0.4em] text-[#6B7280] font-medium leading-relaxed">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
