import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 lg:pt-32 pb-12 lg:pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20 lg:mb-32">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 lg:space-x-4 mb-8 lg:mb-10 cursor-pointer group" onClick={() => onNavigate(Page.Home)}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 p-1 transition-transform group-hover:scale-110">
                <img src="/input_file_0.png" alt="FireSafe Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-black tracking-tighter text-slate-900 leading-none uppercase italic">FIRE<span className="text-brand-orange">SAFE</span></span>
                <span className="text-[8px] lg:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Projects Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-slate-500 font-medium text-sm lg:text-base leading-relaxed max-w-xs mb-8 lg:mb-10">
              Leading the nation in industrial-grade fire suppression and smart life-safety engineering.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.3em] mb-6 lg:mb-10">Company</h4>
            <ul className="space-y-4 lg:space-y-5">
              {['Home', 'About', 'Services', 'Credentials', 'Careers'].map(item => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase() as Page)} 
                    className="text-xs font-black text-slate-500 hover:text-brand-orange transition-colors uppercase tracking-widest"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.3em] mb-6 lg:mb-10">Resources</h4>
            <ul className="space-y-4 lg:space-y-5">
              <li><button onClick={() => onNavigate(Page.Products)} className="text-xs font-black text-slate-500 hover:text-brand-orange transition-colors uppercase tracking-widest">Hardware Catalog</button></li>
              <li><button onClick={() => onNavigate(Page.Contacts)} className="text-xs font-black text-slate-500 hover:text-brand-orange transition-colors uppercase tracking-widest">Support Portal</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.3em] mb-6 lg:mb-10">Global Contact</h4>
            <ul className="space-y-5 lg:space-y-6">
              <li>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">HQ Phone</p>
                <p className="text-sm font-black text-slate-900">+91 9958188070</p>
              </li>
              <li>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Official Inquiry</p>
                <p className="text-sm font-black text-slate-900">sales@firesafe.co.in</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 lg:pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8 text-center md:text-left">
          <p className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            © 2024 FIRESAFE PROJECTS PVT. LTD. | ENGINEERING ABSOLUTE SAFETY
          </p>
          <div className="flex space-x-8 lg:space-x-12">
            <a href="#" className="text-[10px] font-black text-slate-400 hover:text-brand-orange transition-colors uppercase tracking-widest">Legal</a>
            <a href="#" className="text-[10px] font-black text-slate-400 hover:text-brand-orange transition-colors uppercase tracking-widest">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;