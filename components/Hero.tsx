
import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-red-600 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>Trusted Fire Safety Partners</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Protecting Lives <br />
              <span className="text-transparent bg-clip-text bg-fire-gradient">With Innovation.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              We provide end-to-end fire safety solutions, from smart detection systems to specialized suppression equipment. Secure your space with FireSafe Modern Pro.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate(Page.Products)}
                className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-200 transform hover:-translate-y-1"
              >
                Explore Products
              </button>
              <button 
                onClick={() => onNavigate(Page.Contacts)}
                className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-red-600 hover:text-red-600 transition-all transform hover:-translate-y-1"
              >
                Contact Us
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500 font-medium">Clients Secured</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-slate-900">15+</p>
                <p className="text-sm text-slate-500 font-medium">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-500 font-medium">Expert Support</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
              <img 
                src="/input_file_2.jpg" 
                alt="Fire Safety Professionals"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden sm:block transform -rotate-2">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-bold text-slate-900 leading-tight">ISI Certified Equipment</p>
              </div>
              <p className="text-sm text-slate-500">All our products exceed international safety standards for maximum reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
