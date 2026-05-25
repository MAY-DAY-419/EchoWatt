import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, TrendingDown, Lightbulb, ArrowRight, Leaf, Battery, Sun, Activity, Orbit } from 'lucide-react';
import SolarEstimator from '../components/calculator/SolarEstimator';

const HomePage: React.FC = () => {
  const [solarOpen, setSolarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-40 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side text heavy */}
            <div className="text-left animate-slide-up-fade">
              <div className="inline-flex items-center gap-2 dock-glass text-emerald-700 dark:text-emerald-400 px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Intelligence meets Energy
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tighter mb-8 leading-[1.1]">
                Echo<span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-cyan-500">Watt.</span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-400 dark:text-gray-500">Smarter Habitats</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl font-medium leading-relaxed animate-slide-up-fade delay-100">
                Redefine how you consume electricity. Real-time metrics, AI optimization, and profound footprint reduction in one simple hub.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-fade delay-200">
                <Link
                  to="/calculator"
                  className="group relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-5 rounded-2xl font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  Start Saving
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button
                  onClick={() => setSolarOpen(true)}
                  className="group dock-glass text-gray-900 dark:text-white px-8 py-5 rounded-2xl font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Sun className="w-5 h-5 text-amber-500 group-hover:rotate-90 transition-transform duration-500" />
                  Solar Estimator
                </button>
              </div>
            </div>

            {/* Right side abstract cards / visuals */}
            <div className="relative h-[500px] hidden lg:block animate-slide-up-fade delay-300">
              <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500 rounded-3xl rotate-12 opacity-20 blur-xl"></div>
              
              <div className="absolute top-20 right-20 w-72 dock-glass p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl animate-float">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                    <Zap className="text-blue-500 w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-gray-500">Live</span>
                </div>
                <div className="text-3xl font-black mb-1 text-gray-900 dark:text-white">-34%</div>
                <div className="text-gray-500 font-medium">Energy Reduced</div>
              </div>

              <div className="absolute bottom-20 left-10 w-80 bg-gray-900 dark:bg-gray-800 p-6 rounded-3xl text-white shadow-2xl border border-gray-800 dark:border-gray-700 animate-float animation-delay-2000">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Leaf className="text-emerald-400 w-6 h-6" />
                  </div>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full text-xs">Eco Impact</span>
                </div>
                <div className="text-3xl font-black mb-1">120 kg</div>
                <div className="text-gray-400 font-medium">CO₂ Emissions Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Box Grid Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Powerful Functionality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {/* Main Feature - Large Col Span */}
            <div className="md:col-span-2 md:row-span-2 bento-card bg-emerald-500 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              <Activity className="w-16 h-16 text-white mb-6" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Real-time Analytics</h3>
                <p className="text-emerald-100 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                  Monitor your exact energy consumption live with state-of-the-art IoT integration. Never guess your bill again.
                </p>
              </div>
            </div>

            {/* AI Callout */}
            <div className="md:col-span-2 bento-card dock-glass rounded-[2rem] p-8 flex flex-col justify-center border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI Optimization</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
                Machine learning algorithms analyze your usage and suggest deep savings.
              </p>
            </div>

            {/* Square 1 */}
            <div className="bento-card bg-gray-900 dark:bg-gray-800 rounded-[2rem] p-8 flex flex-col justify-between">
              <Lightbulb className="w-10 h-10 text-amber-400 mb-4" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Device Management</h3>
                <p className="text-gray-400 font-medium">Easily organize all home appliances to trace exact power draws.</p>
              </div>
            </div>

            {/* Square 2 */}
            <div className="bento-card dock-glass rounded-[2rem] p-8 flex flex-col justify-between border border-gray-200 dark:border-gray-800">
              <TrendingDown className="w-10 h-10 text-purple-500 mb-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cost Forecasting</h3>
                <p className="text-gray-500 font-medium">Detailed projections of bills before they arrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Bottom Heavy */}
      <section className="mt-20 pb-40 relative">
        <div className="container mx-auto px-6">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border border-gray-200 dark:border-gray-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-8 max-w-3xl">
                Ready to take control of your footprint?
              </h2>
              <Link
                to="/calculator"
                className="group inline-flex items-center gap-4 bg-emerald-500 text-white px-10 py-6 rounded-full font-bold text-2xl transition-all duration-300 hover:bg-emerald-600 hover:scale-105 shadow-2xl shadow-emerald-500/30"
              >
                Join EchoWatt
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Estimator Modal (Bottom Sheet approach for Mobile, Center Modal for Desktop) */}
      {solarOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setSolarOpen(false)} />
          <div className="relative w-full md:max-w-4xl bg-white dark:bg-gray-900 rounded-t-[2rem] md:rounded-[2rem] shadow-2xl p-6 md:p-10 z-10 border border-gray-200 dark:border-gray-800 animate-slide-up-sheet max-h-[90vh] overflow-y-auto">
            {/* Sheet Handle */}
            <div className="w-16 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-8 block md:hidden"></div>
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-2xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Solar Estimator</h3>
              </div>
              <button 
                onClick={() => setSolarOpen(false)} 
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 transition-colors shrink-0"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <SolarEstimator />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
