import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import TechnicalSpecs from './components/TechnicalSpecs/index';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp, MessageSquare } from 'lucide-react';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetStarted={() => setShowGetStarted(true)} />
      <Hero onGetStarted={() => setShowGetStarted(true)} />
      <Features />
      <Technology />
      <TechnicalSpecs />
      <About />
      <Contact />
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* Get Started Button */}
        <button
          onClick={() => setShowGetStarted(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Get Started"
        >
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="bg-white hover:bg-gray-100 text-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;