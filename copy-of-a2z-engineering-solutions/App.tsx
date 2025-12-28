
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Credentials from './components/Credentials';
import Process from './components/Process';
import Founder from './components/Founder';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#1A2B3C] selection:text-white bg-[#F9F8F6]">
      <Navbar />
      
      <main>
        {/* The sequence follows a narrative of vision -> proof -> expertise -> process -> portfolio -> signature */}
        <Hero />
        
        <About />

        <Credentials />

        <Services />

        <Process />
        
        <Gallery />
        
        <Founder />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
