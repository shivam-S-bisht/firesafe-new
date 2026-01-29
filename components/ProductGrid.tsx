import React, { useState } from 'react';
import { PRODUCTS } from '../constants.tsx';

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-brand-orange text-[10px] font-extrabold uppercase tracking-widest mb-6">
            <span>Hardware Catalog</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 italic tracking-tighter uppercase mb-6 leading-tight">Elite <br />Safety Tools</h2>
          <p className="text-slate-500 font-medium">ISI certified, industrial-grade equipment designed to survive the harshest environments.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 bg-white p-2 rounded-3xl border border-slate-100 modern-shadow">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-orange text-white shadow-lg shadow-orange-100' 
                  : 'text-slate-500 hover:text-brand-orange hover:bg-orange-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredProducts.map(product => (
          <div key={product.id} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col modern-shadow hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-[10px] font-black text-brand-orange uppercase tracking-[0.2em] shadow-sm">
                {product.category}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-black text-slate-900 mb-4 italic uppercase tracking-tighter leading-tight">{product.name}</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium leading-relaxed flex-grow">{product.description}</p>
              
              <div className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs text-slate-600 font-bold uppercase tracking-tighter">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-brand-orange transition-all active:scale-95 shadow-lg">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;