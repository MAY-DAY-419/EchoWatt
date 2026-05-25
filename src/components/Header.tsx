import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Zap, Moon, Sun, Home, Calculator, Info } from 'lucide-react';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/calculator', label: 'StartCalc', icon: <Calculator className="w-5 h-5" /> },
    { path: '/about', label: 'About Us', icon: <Info className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 pointer-events-none px-4 pb-4 md:px-0 md:pb-0">
      <header className="dock-glass pointer-events-auto rounded-3xl md:rounded-full px-6 py-4 flex items-center justify-between gap-6 md:gap-12 animate-slide-up-fade shadow-2xl relative">
        
        {/* Deep Glow Behind Dock */}
        <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full -z-10 dark:bg-emerald-500/20"></div>

        {/* Logo Icon Only on Mobile, Full on Desktop */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="relative w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center overflow-hidden shadow-lg shadow-emerald-500/40">
            <Zap className="w-5 h-5 text-white z-10 group-hover:animate-pulse" strokeWidth={2.5} />
          </div>
          <span className="hidden md:block text-xl font-extrabold tracking-tighter ml-1">
            Echo<span className="text-emerald-500">Watt</span>
          </span>
        </Link>

        {/* Navigation - Icon + Label */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-2xl md:rounded-full font-bold text-xs md:text-sm transition-all duration-300 overflow-hidden group ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gray-900 dark:bg-white rounded-2xl md:rounded-full -z-10 scale-100 transition-transform"></span>
                )}
                {!isActive && (
                  <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-2xl md:rounded-full opacity-0 group-hover:opacity-100 -z-10 transition-opacity"></span>
                )}
                
                <span className={isActive ? 'text-white dark:text-black' : ''}>{link.icon}</span>
                <span className={`hidden sm:block ${isActive ? 'text-white dark:text-black' : ''}`}>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <div className="flex-shrink-0 border-l border-gray-200 dark:border-gray-800 pl-4 md:pl-6">
          <button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors shadow-inner"
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <Sun className={`absolute inset-0 text-amber-500 transition-transform duration-500 ${isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              <Moon className={`absolute inset-0 text-indigo-500 transition-transform duration-500 ${isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
