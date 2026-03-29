import React, { useState } from 'react';
import { Target, TrendingUp, Clock, ChevronRight } from 'lucide-react';

const LeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bgOffWhite flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white shadow-2xl flex flex-col lg:flex-row border border-borderLight">
        
        {/* Value Proposition */}
        <div className="bg-primary text-white lg:w-5/12 p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="relative z-10 space-y-12">
            <span className="border border-white/20 px-4 py-1 text-xs font-bold tracking-widest uppercase inline-block">Executive Briefing</span>
            <h1 className="font-heading text-4xl md:text-5xl font-normal leading-tight">Identify Untapped <br/>Potential.</h1>
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Secure a completely confidential, high-level discovery session with our senior directors to map out immediate growth avenues for your enterprise.
            </p>
            
            <div className="space-y-8 pt-6 border-t border-white/20">
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1"><TrendingUp size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Scale Strategy</h4>
                  <p className="text-gray-400 text-sm font-light">Identify core operational shifts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1"><Target size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Gap Analysis</h4>
                  <p className="text-gray-400 text-sm font-light">Pinpoint exact friction points.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1"><Clock size={24} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Rapid Deployment</h4>
                  <p className="text-gray-400 text-sm font-light">Formulate actionable next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="lg:w-7/12 p-12 lg:p-20 relative bg-white">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in duration-500 min-h-[500px]">
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="font-heading text-4xl font-normal text-primary">Request Submitted.</h2>
              <p className="text-textLight font-light text-lg max-w-sm mx-auto">
                A director from our strategy team will reach out directly to your office within one business day.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-12">
                <h2 className="font-heading text-3xl font-normal text-primary mb-4">Request Consultation</h2>
                <div className="w-12 h-px bg-accent mb-6" />
                <p className="text-textLight text-sm font-light">Please provide initial details regarding your required engagement.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-textDark">First Name *</label>
                    <input required type="text" className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Last Name *</label>
                    <input required type="text" className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Corporate Email *</label>
                    <input required type="email" className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light" placeholder="john@enterprise.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Direct Phone *</label>
                    <input required type="tel" className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light" placeholder="+91 (0) 98765 43210" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Organization</label>
                  <input type="text" className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light" placeholder="Acme Corporation" />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Primary Objective *</label>
                  <select required className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light text-textDark bg-none cursor-pointer appearance-none rounded-none">
                    <option value="" disabled selected>Select an area of focus...</option>
                    <option value="growth">Revenue & Market Expansion</option>
                    <option value="operations">Operational Restructuring</option>
                    <option value="quality">Quality & Compliance Audit</option>
                    <option value="advisory">Board Advisory & Governance</option>
                    <option value="other">Other Strategic Undertakings</option>
                  </select>
                </div>

                <button type="submit" className="w-full mt-12 bg-primary text-white text-sm font-semibold tracking-widest uppercase py-5 flex items-center justify-center gap-3 hover:bg-secondary transition-colors group">
                  Confirm Request <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs tracking-wide text-gray-400 mt-6">All information strictly bound by NDA parameters.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;
