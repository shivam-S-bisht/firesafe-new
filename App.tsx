import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { Page } from './types';
import { SERVICE_CATEGORIES, PROJECTS, PERSONNEL } from './constants';

const SectionBadge: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-brand-orange text-[10px] font-[900] uppercase tracking-[0.2em] mb-8">
    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
    <span>{children}</span>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 lg:pt-48 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-orange-50/50 -z-20 rounded-l-[5rem]"></div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-100/30 blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <SectionBadge>Engineering Absolute Safety</SectionBadge>
            <h1 className="text-6xl lg:text-9xl font-[900] text-slate-900 leading-[0.95] tracking-tighter mb-10">
              Securing <br />
              <span className="text-fire-gradient">Legacies.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 max-w-xl mb-12 font-medium leading-relaxed">
              FireSafe Projects delivers high-precision suppression systems and smart detection engineering for national power plants, industrial hubs, and commercial leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => setCurrentPage(Page.Services)} 
                className="px-12 py-5 bg-brand-orange text-white rounded-2xl font-black text-lg hover:brightness-110 transition-all shadow-2xl shadow-orange-200 hover:-translate-y-1 active:scale-95 brand-glow flex items-center justify-center space-x-3"
              >
                <span>View Services</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
              <button 
                onClick={() => setCurrentPage(Page.Products)} 
                className="px-12 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-lg hover:border-brand-orange hover:text-brand-orange transition-all hover:-translate-y-1 modern-shadow active:scale-95"
              >
                Product Catalog
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0 reveal" style={{animationDelay: '0.2s'}}>
            <div className="relative rounded-[4rem] overflow-hidden modern-shadow border-[12px] border-white z-10 bg-white">
              <img 
                src="/input_file_2.jpg" 
                alt="HVWS System in Substation" 
                className="w-full h-auto aspect-[4/5] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-black uppercase tracking-widest text-brand-orange mb-2">Major Project</p>
                <p className="text-2xl font-black leading-tight italic uppercase">High Velocity <br /> Water Spray</p>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-white glass p-8 rounded-[2.5rem] modern-shadow border border-white/50 animate-float z-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green text-white flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div>
                  <p className="font-black text-slate-900 leading-none text-xl tracking-tighter italic uppercase">ISO 9001:2015</p>
                  <p className="text-[10px] text-slate-400 font-black tracking-widest mt-1 uppercase">Certified Standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group reveal">
              <div className="absolute -inset-8 bg-slate-50 rounded-[4rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700"></div>
              <img 
                src="/input_file_3.png" 
                alt="Manifold Valves"
                className="relative rounded-[3rem] modern-shadow w-full h-auto object-cover aspect-square z-10"
              />
            </div>
            <div className="reveal" style={{animationDelay: '0.3s'}}>
              <SectionBadge>The FireSafe Edge</SectionBadge>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 italic tracking-tighter uppercase mb-10 leading-[0.9]">Mastering <br />Extreme <br /><span className="text-brand-orange">Environments.</span></h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                We don't just supply equipment; we architect resilience. Our specialized teams manage everything from the initial site survey to complex system integration and 24/7 maintenance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Detection', desc: 'Addressable & Analogue Systems', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'text-brand-green' },
                  { title: 'Suppression', desc: 'High Impact Water Spray', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z', color: 'text-brand-orange' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:modern-shadow group/card">
                    <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center ${item.color} mb-6 shadow-sm transition-colors`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/></svg>
                    </div>
                    <h4 className="font-black text-slate-900 mb-1 uppercase text-xs tracking-widest">{item.title}</h4>
                    <p className="text-sm font-bold text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-32 reveal">
          <SectionBadge>Company DNA</SectionBadge>
          <h2 className="text-6xl lg:text-8xl font-black text-slate-900 mb-10 italic uppercase tracking-tighter">Experts in <br />Protection.</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Founded on integrity and technical mastery, we have grown to become a national benchmark for fire safety in India's most critical sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-32">
          {[
            { title: 'Mission', color: 'bg-brand-orange', text: 'To deliver absolute life safety through uncompromising quality, design precision, and world-class maintenance support.', dark: true },
            { title: 'Vision', color: 'bg-brand-green', text: 'To remain the most trusted specialized contractor for mission-critical fire fighting and security infrastructure globally.', dark: true },
            { title: 'Integrity', color: 'bg-white', text: 'Every weld, every sensor, and every design iteration is guided by our commitment to engineering perfection.', dark: false },
          ].map((item, i) => (
            <div key={i} className={`p-14 rounded-[3.5rem] modern-shadow transition-all hover:-translate-y-3 flex flex-col reveal ${item.color} ${item.dark ? 'text-white' : 'text-slate-900 border border-slate-50'}`} style={{animationDelay: `${i * 0.1}s`}}>
              <h3 className={`text-4xl font-black mb-10 italic uppercase tracking-tighter ${!item.dark && 'text-brand-orange'}`}>{item.title}</h3>
              <p className={`text-lg font-medium leading-relaxed ${item.dark ? 'text-white/90' : 'text-slate-600'}`}>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden modern-shadow reveal">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h3 className="text-5xl font-black mb-10 italic uppercase tracking-tighter">The Leadership</h3>
              <div className="space-y-8">
                {PERSONNEL.slice(0, 3).map((person, i) => (
                  <div key={i} className="group border-b border-slate-800 pb-8 hover:border-brand-orange transition-colors">
                    <h4 className="text-2xl font-black group-hover:text-brand-orange transition-colors italic uppercase">{person.name}</h4>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500 mt-1 mb-3">{person.experience}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{person.specialization}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img src="/input_file_4.png" className="rounded-[3rem] opacity-70 grayscale hover:grayscale-0 transition-all duration-1000 w-full object-cover aspect-video" />
              <div className="absolute inset-0 rounded-[3rem] border border-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 max-w-4xl mx-auto reveal">
          <SectionBadge>Area of Activity</SectionBadge>
          <h2 className="text-6xl lg:text-9xl font-black text-slate-900 mb-10 italic uppercase tracking-tighter leading-[0.85]">Full-Scale <br />Systems.</h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">Comprehensive engineering for high-risk industrial environments.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-white p-14 rounded-[3.5rem] border border-slate-50 modern-shadow hover:-translate-y-3 transition-all duration-500 flex flex-col group relative overflow-hidden reveal" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="absolute top-0 right-0 p-10 text-slate-100 font-black text-8xl italic pointer-events-none group-hover:text-brand-orange/10 transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-12 uppercase tracking-tighter leading-tight italic max-w-[80%]">
                {cat.title}
              </h3>
              <ul className="space-y-5 flex-grow relative z-10">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-[13px] text-slate-500 font-black uppercase tracking-tight group-hover:text-slate-900 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCredentials = () => (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 reveal">
          <div className="max-w-2xl">
            <SectionBadge>National Impact</SectionBadge>
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 italic uppercase tracking-tighter leading-none">Proven <br />Success.</h2>
          </div>
          <p className="text-slate-500 font-medium text-lg lg:max-w-sm">A legacy of complex projects for national power authorities and major industrial leaders.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="bg-white p-12 rounded-[3rem] border border-slate-50 modern-shadow hover:bg-brand-green group transition-all duration-500 reveal" style={{animationDelay: `${i * 0.1}s`}}>
              <p className="text-[10px] font-black uppercase text-brand-orange tracking-widest mb-8 group-hover:text-white/70">{project.location}</p>
              <h3 className="text-2xl font-black text-slate-900 italic uppercase tracking-tighter leading-tight mb-12 group-hover:text-white transition-colors">{project.title}</h3>
              <div className="pt-10 border-t border-slate-100 group-hover:border-white/10">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 group-hover:text-white/50">Client Agency</p>
                <p className="font-bold text-slate-900 text-lg group-hover:text-white transition-colors">{project.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCareers = () => (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-slate-900 rounded-[5rem] p-16 lg:p-32 text-white relative overflow-hidden modern-shadow reveal">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-3xl relative z-10">
            <SectionBadge>The Family</SectionBadge>
            <h2 className="text-6xl lg:text-9xl font-black mb-12 italic uppercase tracking-tighter leading-none">Join the <br />Force.</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-16 font-medium">
              We offer a world of engineering opportunities, a collaborative family culture, and the chance to protect high-impact national infrastructure.
            </p>
            <a href="mailto:careers@firesafe.co.in" className="inline-flex items-center space-x-6 bg-brand-orange text-white px-12 py-6 rounded-2xl font-black text-xl hover:brightness-110 transition-all shadow-2xl shadow-orange-900/40 active:scale-95">
              <span>Send Your CV</span>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-[5rem] modern-shadow overflow-hidden grid lg:grid-cols-2 border border-slate-50 reveal">
          <div className="p-16 lg:p-24 bg-slate-900 text-white relative">
            <h2 className="text-6xl lg:text-8xl font-black mb-20 italic uppercase tracking-tighter leading-none">Contact.</h2>
            <div className="space-y-16">
              {[
                { label: 'Location', val: 'FF-11, 1st Floor, Avaj Tower, Vasundhara, Ghaziabad - 201012' },
                { label: 'Hotline', val: '+91 9958188070 / 8447753551' },
                { label: 'Email', val: 'sales@firesafe.co.in' }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <h4 className="text-[10px] font-black uppercase text-brand-orange tracking-[0.3em] mb-5">{item.label}</h4>
                  <p className="text-2xl font-bold text-slate-300 leading-relaxed group-hover:text-white transition-colors">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[600px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.025421461219!2d77.36342941502328!3d28.65895748240732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfabd4079998f%3A0xc7841beb690a3ce5!2sAvaj%20Tower!5e0!3m2!1sen!2sin!4v1589207470240!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" 
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {currentPage === Page.Home && renderHome()}
        {currentPage === Page.About && renderAbout()}
        {currentPage === Page.Services && renderServices()}
        {currentPage === Page.Credentials && renderCredentials()}
        {currentPage === Page.Careers && renderCareers()}
        {currentPage === Page.Contacts && renderContacts()}
        {currentPage === Page.Products && <div className="pt-32"><ProductGrid /></div>}
      </main>

      <Footer onNavigate={setCurrentPage} />
      
      <a href="tel:9958188070" className="fixed bottom-10 right-10 w-16 h-16 bg-brand-orange text-white rounded-[1.5rem] flex items-center justify-center shadow-2xl z-50 transition-all active:scale-90 animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
};

export default App;