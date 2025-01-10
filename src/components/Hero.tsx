import React from 'react';
import { ChevronRight, Wand2, Wind, Activity } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-[calc(100vh-5rem)] bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTEwIDEwaDQwdjQwSDEweiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-blue-300 text-sm">
              <Wand2 className="w-4 h-4 mr-2" />
              Revolutionizing Critical Care
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Agnus ICU
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
                Ventilator
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0">
              Pioneering the future of respiratory support with advanced technology 
              that adapts to every breath, ensuring optimal patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onGetStarted}
                className="group bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Get Started 
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('specs')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                Technical Specs
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12">
              <div className="border-l-2 border-blue-500/30 pl-4">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-blue-300">Accuracy Rate</div>
              </div>
              <div className="border-l-2 border-blue-500/30 pl-4">
                <div className="text-3xl font-bold text-white">&lt;5%</div>
                <div className="text-blue-300">Volume Variance</div>
              </div>
              <div className="border-l-2 border-blue-500/30 pl-4">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-300">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative mx-auto max-w-[500px]">
              <img
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80"
                alt="Advanced Ventilator System"
                className="rounded-2xl shadow-2xl shadow-blue-500/20 border-4 border-white/10 backdrop-blur-sm w-full"
              />
              
              {/* Feature Cards Container */}
              <div className="absolute inset-0 pointer-events-none sm:pointer-events-auto">
                {/* Smart Breathing Card */}
                <div className="hidden sm:block absolute left-0 top-[20%] transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">Smart Breathing</div>
                      <div className="text-blue-200 text-xs sm:text-sm">Adaptive Support</div>
                    </div>
                  </div>
                </div>

                {/* Real-time Analysis Card */}
                <div className="hidden sm:block absolute right-0 bottom-[30%] transform translate-x-1/2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">Real-time Analysis</div>
                      <div className="text-blue-200 text-xs sm:text-sm">Continuous Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Feature Cards */}
              <div className="sm:hidden mt-6 space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Wind className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Smart Breathing</div>
                      <div className="text-blue-200 text-xs">Adaptive Support</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Activity className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Real-time Analysis</div>
                      <div className="text-blue-200 text-xs">Continuous Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;