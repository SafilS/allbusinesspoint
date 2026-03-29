import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full pt-20 bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-32 relative text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block">Engagement</span>
          <h1 className="font-heading text-5xl md:text-6xl font-normal mb-8">
            Connect With Us.
          </h1>
          <p className="text-xl text-gray-400 font-light">
            We operate 24x6, ready to address your most critical business needs.
          </p>
        </motion.div>
      </section>

      <section className="py-32 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="font-heading text-3xl font-normal text-primary mb-6">Global Headquarters</h2>
                <div className="w-12 h-px bg-accent mb-8" />
                <p className="text-textLight text-lg font-light leading-relaxed mb-8">
                  Positioned in Coimbatore, our analysts and partners are prepared to assist you with management, advisory, and technical requirements.
                </p>
              </div>

              <div className="space-y-10">
                <div className="border-l border-borderLight pl-6">
                  <h4 className="font-bold text-xs tracking-widest uppercase text-primary mb-2">Location</h4>
                  <p className="text-textLight font-light">Krishnaswamy Nagar, Near North CBE<br />Coimbatore, Tamil Nadu, India</p>
                </div>
                <div className="border-l border-borderLight pl-6">
                  <h4 className="font-bold text-xs tracking-widest uppercase text-primary mb-2">Direct Line</h4>
                  <p className="text-textLight font-light">+91 (Consultancy Phone)</p>
                </div>
                <div className="border-l border-borderLight pl-6">
                  <h4 className="font-bold text-xs tracking-widest uppercase text-primary mb-2">Electronic Mail</h4>
                  <p className="text-textLight font-light">contact@anybusinesspoint.com</p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-12 h-64 border border-borderLight overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Krishnaswamy%20Nagar,%20Coimbatore+(Any%20Business%20Point)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Any Business Point Location"
                >
                </iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-bgOffWhite p-12 border-subtle">
              <h3 className="font-heading text-2xl font-normal text-primary mb-10">Submit an Inquiry</h3>
              
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500 min-h-[400px]">
                  <div className="w-16 h-16 bg-primary text-white rounded-none flex items-center justify-center mb-8">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="font-heading text-2xl text-primary mb-4">Inquiry Received.</h4>
                  <p className="text-textLight font-light">Our partnership group will review your submission and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light" placeholder="John Doe" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Phone *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light" placeholder="john@enterprise.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-textDark">Message Details *</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-4 bg-white border border-borderLight focus:border-primary transition-colors outline-none text-sm font-light resize-none" placeholder="Provide context about your business challenge..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-semibold tracking-widest uppercase text-sm py-5 transition-colors mt-4">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
