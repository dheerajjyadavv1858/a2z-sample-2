
import React, { useEffect, useRef, useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-64 bg-[#F9F8F6] px-8 md:px-24">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto opacity-0 translate-y-12 transition-all duration-[1.5s] ease-out"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Invitation Side */}
          <div className="space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold mb-4 block">Inquiry</span>
              <h2 className="text-4xl md:text-6xl font-extralight text-[#1A1A1A] leading-tight">
                Let’s discuss <br />
                <span className="italic font-light">your vision.</span>
              </h2>
            </div>
            
            <div className="pt-12 border-t border-[#1A2B3C]/10 max-w-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Direct Line</p>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-2xl font-light text-[#1A2B3C] hover:text-[#D4AF37] transition-colors duration-500">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative min-h-[400px]">
            {formState === 'success' ? (
              <div className="h-full flex flex-col justify-center animate-[fadeIn_1s_ease-out]">
                <p className="text-lg font-light text-[#1A2B3C]">Thank you for your interest.</p>
                <p className="text-sm text-gray-400 font-light mt-2 italic">We will respond within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-gray-400 transition-colors group-focus-within:text-[#1A2B3C]">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-[#1A2B3C]/10 py-6 text-lg font-light focus:outline-none focus:border-[#1A2B3C] transition-all duration-700 placeholder:text-gray-200"
                  />
                </div>

                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-gray-400 transition-colors group-focus-within:text-[#1A2B3C]">Contact Information</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Email or phone number"
                    className="w-full bg-transparent border-b border-[#1A2B3C]/10 py-6 text-lg font-light focus:outline-none focus:border-[#1A2B3C] transition-all duration-700 placeholder:text-gray-200"
                  />
                </div>

                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-gray-400 transition-colors group-focus-within:text-[#1A2B3C]">Message</label>
                  <textarea 
                    rows={1}
                    placeholder="Briefly describe your project"
                    className="w-full bg-transparent border-b border-[#1A2B3C]/10 py-6 text-lg font-light focus:outline-none focus:border-[#1A2B3C] transition-all duration-700 placeholder:text-gray-200 resize-none overflow-hidden"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="group flex items-center gap-6 pt-8"
                >
                  <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#1A2B3C]">
                    {formState === 'submitting' ? 'Sending...' : 'Start a Conversation'}
                  </span>
                  <div className="w-16 h-[1px] bg-[#D4AF37] group-hover:w-24 transition-all duration-700 ease-in-out"></div>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
