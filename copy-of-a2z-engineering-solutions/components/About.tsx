
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#F9F8F6] px-8 py-32 md:px-24 overflow-hidden gap-24">
      {/* Decorative Plumb Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.5px] h-32 bg-[#D4AF37]/30 hidden md:block"></div>
      
      <div 
        ref={containerRef}
        className="max-w-2xl w-full text-left transition-all duration-[2s] ease-out opacity-0 translate-y-12 lg:pr-12"
      >
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#1A2B3C]/50 font-bold block mb-4">The Philosophy</span>
          <div className="w-12 h-[1px] bg-[#D4AF37]/40"></div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-extralight text-[#1A1A1A] leading-[1.05] mb-16 tracking-tighter">
          Precision is <span className="italic">silent</span>. <br />
          Quality is felt.
        </h2>
        
        <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-gray-500 font-medium max-w-lg leading-loose mb-12">
          For over a decade, we have refined the art of engineering in Lucknow. We believe that true luxury lies in the unseen details and the enduring integrity of form.
        </p>

        <div className="flex gap-12 pt-8 border-t border-black/5">
          <div>
            <span className="text-2xl font-light text-[#1A2B3C] block mb-1 tracking-tighter">2014</span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">Founded</span>
          </div>
          <div>
            <span className="text-2xl font-light text-[#1A2B3C] block mb-1 tracking-tighter">Lucknow</span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">Headquarters</span>
          </div>
        </div>
      </div>

      {/* Narrative Visual */}
      <div 
        ref={imageRef}
        className="relative w-full lg:w-1/3 aspect-[4/5] bg-gray-100 opacity-0 translate-y-12 transition-all duration-[2.5s] ease-out delay-500 overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000" 
          alt="Architectural Detail" 
          className="w-full h-full object-cover grayscale brightness-110 contrast-90 hover:scale-105 transition-transform duration-[4s]"
        />
        <div className="absolute inset-0 border-[20px] border-[#F9F8F6]"></div>
      </div>
      
      {/* Background Subtle Shape */}
      <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] border border-[#1A2B3C]/5 rounded-full pointer-events-none"></div>
    </section>
  );
};

export default About;
