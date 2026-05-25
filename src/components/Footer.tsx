import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Shield, FileText, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 pt-20 pb-32 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600"></div>
                <Zap className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">EchoWatt</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering homes with intelligent energy management, live tracking, and profound carbon reduction insights.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-green-400 transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Energy Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Device Database
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Electricity Rates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  IoT Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} EchoWatt. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with 💚 for a sustainable future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
