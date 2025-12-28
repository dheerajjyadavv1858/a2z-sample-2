
import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      scrollRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const speed = 0.1; // Parallax speed
          const yPos = -(rect.top * speed);
          const img = ref.querySelector('img');
          if (img) {
            img.style.transform = `translateY(${yPos}px) scale(1.1)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="py-64 bg-white px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-64 flex flex-col items-start">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#1A2B3C] font-bold mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-extralight text-[#1A1A1A] leading-tight max-w-2xl">
            A decade of <span className="italic">spatial</span> narratives.
          </h2>
        </div>

        {/* Project List - Staggered Editorial Layout */}
        <div className="space-y-[45vh]">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-end gap-12 md:gap-24`}
              >
                {/* Image Container with Parallax */}
                <div 
                  ref={(el) => (scrollRefs.current[index] = el)}
                  className={`relative overflow-hidden w-full ${isEven ? 'md:w-3/5' : 'md:w-2/3'} aspect-[4/5] md:aspect-[16/10] bg-[#F9F8F6]`}
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale-[30%] brightness-[0.95] transition-transform duration-100 ease-out will-change-transform"
                    style={{ transform: 'scale(1.1)' }}
                  />
                </div>

                {/* Project Info */}
                <div className={`pb-12 ${isEven ? 'text-left' : 'text-left md:text-right'} w-full md:w-1/3`}>
                  <div className={`flex flex-col ${isEven ? 'items-start' : 'items-start md:items-end'}`}>
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extralight text-[#1A1A1A] mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-8">
                      {project.location}
                    </p>
                    
                    {/* Minimal CTA Line */}
                    <a href={`#project-${project.id}`} className="group flex items-center gap-4">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#1A1A1A]">View Project</span>
                      <div className="w-12 h-[1px] bg-[#1A1A1A]/20 group-hover:w-20 transition-all duration-700 ease-in-out"></div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Footer */}
        <div className="mt-64 text-center">
           <a href="#contact" className="text-[11px] uppercase tracking-[0.6em] text-[#1A2B3C] border-b border-[#1A2B3C]/10 pb-4 hover:border-[#1A2B3C] transition-all duration-700">
             Start a Conversation
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
