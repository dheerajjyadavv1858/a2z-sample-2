
import React, { useEffect, useRef, useState } from 'react';

const steps = [
  { 
    id: '01', 
    title: 'Understand', 
    desc: 'Decoding the initial client vision.', 
    alignment: 'md:justify-start',
    offset: 'md:ml-[10%]',
    visual: 'understand'
  },
  { 
    id: '02', 
    title: 'Design', 
    desc: 'Translating concepts into precise forms.', 
    alignment: 'md:justify-end',
    offset: 'md:mr-[15%]',
    visual: 'design'
  },
  { 
    id: '03', 
    title: 'Build', 
    desc: 'Executing with absolute technical rigor.', 
    alignment: 'md:justify-start',
    offset: 'md:ml-[25%]',
    visual: 'build'
  },
  { 
    id: '04', 
    title: 'Deliver', 
    desc: 'Handing over the final space.', 
    alignment: 'md:justify-end',
    offset: 'md:mr-[5%]',
    visual: 'deliver'
  }
];

const AbstractVisual: React.FC<{ type: string; active: boolean }> = ({ type, active }) => {
  // Desktop classes: absolute, floating
  // Mobile classes: relative, full-width, fixed height
  const baseClasses = "transition-all duration-[2s] cubic-bezier(0.2, 0.8, 0.2, 1) z-0";
  const desktopOnly = "hidden md:block absolute pointer-events-none";
  const mobileOnly = "block md:hidden relative w-full h-[160px] rounded-2xl mb-12 overflow-hidden shadow-sm";
  
  const activeClasses = active ? "opacity-100 scale-100 translate-y-0" : "opacity-[0.05] scale-95 translate-y-8";
  const mobileActiveClasses = active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  const renderDesktop = () => {
    switch (type) {
      case 'understand':
        return <div className={`${baseClasses} ${desktopOnly} ${activeClasses} -left-24 top-0 w-64 h-64 bg-white/40 blur-[80px] rounded-full`} />;
      case 'design':
        return (
          <div className={`${baseClasses} ${desktopOnly} ${activeClasses} -right-12 top-12 w-48 h-80 border-[0.5px] border-[#1A2B3C]/10 bg-white/5 rotate-3`}>
            <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-[#1A2B3C]/5" />
          </div>
        );
      case 'build':
        return <div className={`${baseClasses} ${desktopOnly} ${activeClasses} -left-32 top-24 w-72 h-72 bg-[#1A2B3C]/[0.02] shadow-[40px_40px_80px_rgba(0,0,0,0.03)] -rotate-2 border border-white/20`} />;
      case 'deliver':
        return <div className={`${baseClasses} ${desktopOnly} ${activeClasses} -right-24 bottom-0 w-[400px] h-48 bg-gradient-to-tr from-white/10 to-[#D4AF37]/5 blur-sm`} />;
      default: return null;
    }
  };

  const renderMobile = () => {
    let gradient = "bg-gradient-to-br from-white/40 to-white/10";
    if (type === 'design') gradient = "bg-gradient-to-br from-[#1A2B3C]/5 to-transparent border border-[#1A2B3C]/5";
    if (type === 'build') gradient = "bg-[#1A2B3C]/[0.03] border border-white/50";
    if (type === 'deliver') gradient = "bg-gradient-to-tr from-[#D4AF37]/5 to-white/20";

    return (
      <div className={`${mobileOnly} ${gradient} ${baseClasses} ${mobileActiveClasses}`}>
        {type === 'design' && <div className="absolute inset-0 flex items-center justify-center opacity-10"><div className="w-full h-[0.5px] bg-[#1A2B3C]" /><div className="h-full w-[0.5px] bg-[#1A2B3C] absolute" /></div>}
      </div>
    );
  };

  return (
    <>
      {renderDesktop()}
      {renderMobile()}
    </>
  );
};

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hasAppeared, setHasAppeared] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = parseInt(entry.target.getAttribute('data-step-id') || '0');
        if (entry.isIntersecting) {
          setActiveStep(id);
          setHasAppeared(prev => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll('.process-step-v5');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-32 md:py-64 bg-[#F9F8F6] px-8 md:px-24 overflow-hidden">
      {/* Cinematic Background Depth - Subtle on desktop, invisible on mobile */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#1A2B3C]/[0.015] blur-[120px] transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${activeStep * -15}px)` }}
        ></div>
      </div>

      {/* Structural Anchor Line - Desktop Only */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-[#1A2B3C]/5 hidden md:block z-10"></div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-64">
          <span className="text-[10px] uppercase tracking-[0.8em] text-[#1A2B3C]/40 font-bold block mb-4">Our Approach</span>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30"></div>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col space-y-[25vh] md:space-y-[50vh]">
          {steps.map((step, index) => {
            const stepId = index + 1;
            // On mobile, we trigger once. On desktop, we dim inactive.
            const isActive = activeStep === stepId;
            const appeared = hasAppeared[stepId];

            return (
              <div 
                key={step.id} 
                className={`flex w-full flex-col md:flex-row ${step.alignment}`}
              >
                <div 
                  data-step-id={stepId}
                  className={`process-step-v5 relative flex flex-col items-start ${step.offset} w-full md:max-w-md transition-all duration-[1.2s] ease-in-out ${
                    // Desktop logic: active focus. Mobile logic: appear once.
                    'md:opacity-100'
                  } ${
                    appeared ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${
                    isActive ? 'md:opacity-100' : 'md:opacity-[0.1]'
                  }`}
                >
                  {/* Abstract Visual Anchor */}
                  <AbstractVisual type={step.visual} active={isActive || appeared} />

                  <div className="relative z-10 w-full">
                    <div className="flex items-center gap-6 mb-6 md:mb-8 overflow-hidden">
                      <div className={`transition-transform duration-[1.5s] ease-out ${appeared ? 'translate-y-0' : 'translate-y-full'}`}>
                        <span className="text-[10px] font-medium text-[#D4AF37] tracking-[0.5em]">
                          {step.id}
                        </span>
                      </div>
                      <div className={`h-[0.5px] bg-[#D4AF37]/20 transition-all duration-[1.5s] ${appeared ? 'w-12' : 'w-0'}`}></div>
                    </div>
                    
                    <div className="overflow-hidden mb-4 md:mb-6">
                      <h3 className={`text-5xl md:text-8xl font-extralight text-[#1A1A1A] tracking-tighter leading-none transition-all duration-[1.5s] cubic-bezier(0.2, 0.8, 0.2, 1) ${
                        appeared ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <div className="overflow-hidden">
                      <p className={`text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium transition-all duration-[1.5s] delay-300 ${
                        appeared ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Element */}
        <div className="mt-[20vh] md:mt-[50vh] flex justify-center pb-20">
          <div className={`w-[1px] bg-gradient-to-b from-[#1A2B3C]/10 to-transparent transition-all duration-[2s] ${activeStep === 4 ? 'h-32 md:h-64' : 'h-16 md:h-32'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Process;
