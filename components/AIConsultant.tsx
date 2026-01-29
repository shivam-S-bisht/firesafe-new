
import React, { useState } from 'react';
import { getSafetyAdvice } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    buildingType: 'Commercial Office',
    squareFootage: '2000',
    industry: 'Technology'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await getSafetyAdvice(formData.buildingType, formData.squareFootage, formData.industry);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-slate-900 text-white rounded-3xl mx-4 lg:mx-8 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold mb-4">AI Safety Consultant</h2>
        <p className="text-slate-400 text-lg">
          Get an immediate preliminary fire risk assessment for your space powered by Gemini AI.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Building Type</label>
              <select 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all"
                value={formData.buildingType}
                onChange={(e) => setFormData({...formData, buildingType: e.target.value})}
              >
                <option>Commercial Office</option>
                <option>Residential Apartment</option>
                <option>Industrial Warehouse</option>
                <option>Educational Institution</option>
                <option>Healthcare/Hospital</option>
                <option>Restaurant/Kitchen</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Approx. Area (Sq Ft)</label>
              <input 
                type="number" 
                placeholder="e.g. 5000"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all"
                value={formData.squareFootage}
                onChange={(e) => setFormData({...formData, squareFootage: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Industry / Usage</label>
              <input 
                type="text" 
                placeholder="e.g. Chemical Storage, IT Hub"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Analyzing Hazards...</span>
                </>
              ) : (
                <span>Generate Safety Plan</span>
              )}
            </button>
          </form>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 min-h-[400px] flex flex-col">
          <div className="flex items-center space-x-2 text-red-500 mb-6">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
            </svg>
            <h3 className="font-bold uppercase tracking-wider">AI RECOMMENDATIONS</h3>
          </div>
          
          <div className="flex-grow prose prose-invert max-w-none text-slate-300">
            {advice ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="whitespace-pre-wrap leading-relaxed">{advice}</p>
                <div className="mt-8 p-4 bg-slate-700/50 rounded-lg text-sm text-slate-400">
                  Disclaimer: This AI-generated plan is for informational purposes only. Always consult with a certified fire safety auditor for official compliance.
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                <svg className="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>Fill out the form and click "Generate Safety Plan" to see your personalized fire safety recommendations.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
