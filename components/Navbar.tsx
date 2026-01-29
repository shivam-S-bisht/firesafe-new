import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'About', value: Page.About },
    { label: 'Services', value: Page.Services },
    { label: 'Products', value: Page.Products },
    { label: 'Credentials', value: Page.Credentials },
    { label: 'Careers', value: Page.Careers },
    { label: 'Contacts', value: Page.Contacts },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 px-6 lg:px-12 ${
      scrolled ? 'top-4' : 'top-0'
    }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${
        scrolled ? 'glass modern-shadow rounded-[2rem] px-6 py-3' : 'bg-transparent py-8'
      }`}>
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => setCurrentPage(Page.Home)}
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 p-1 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <img src="/input_file_0.png" alt="FireSafe Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-[800] tracking-tighter text-slate-900 leading-none">FIRE<span className="text-brand-orange">SAFE</span></span>
              <span className="text-[9px] font-[800] text-slate-400 uppercase tracking-[0.25em] mt-1">Projects Pvt. Ltd.</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-[11px] font-black uppercase tracking-widest transition-all px-5 py-2.5 rounded-full ${
                  currentPage === item.value 
                    ? 'text-white bg-brand-orange shadow-lg shadow-orange-100' 
                    : 'text-slate-500 hover:text-brand-orange hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-600 shadow-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l18 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-6 right-6 mt-4 bg-white rounded-3xl modern-shadow border border-slate-100 p-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setCurrentPage(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                  currentPage === item.value ? 'text-brand-orange bg-orange-50' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;