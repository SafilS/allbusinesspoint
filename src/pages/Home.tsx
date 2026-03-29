import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, CheckCircle, Quote, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Hero Section ---
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Corporate architecture"
        className="w-full h-full object-cover object-center grayscale opacity-30"
      />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center items-start pt-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl border-l-[3px] border-accent pl-8 py-2">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white tracking-wide">
          Navigating Complexity. <br />
          <span className="text-accent font-normal italic">Driving Performance.</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mb-12 tracking-wide leading-relaxed">
          Premium corporate consultancy solutions tailored to scale your enterprise globally, rooted in Coimbatore.
        </p>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-col sm:flex-row items-center gap-6 pl-8">
        <Link to="/free-consultation" className="w-full sm:w-auto px-10 py-4 bg-accent text-primary font-bold text-sm tracking-widest uppercase transition-colors hover:bg-white flex items-center justify-center gap-3">
          Get Consultation <ArrowRight size={18} />
        </Link>
        <Link to="/services" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/40 text-white font-semibold text-sm tracking-widest uppercase transition-colors hover:bg-white/10 flex items-center justify-center">
          Our Services
        </Link>
      </motion.div>
    </div>
  </section>
);

// --- Trust Section ---
const TrustStats = () => (
  <section className="bg-primary/95 border-b border-white/10 relative z-20 mx-auto max-w-7xl -mt-16 sm:-mt-20">
    <div className="grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
      <div className="p-10 space-y-4">
        <h3 className="font-heading text-4xl md:text-5xl font-normal text-white">100<span className="text-accent">+</span></h3>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Clients Served</p>
      </div>
      <div className="p-10 space-y-4">
        <h3 className="font-heading text-4xl md:text-5xl font-normal text-white flex justify-center items-center gap-2">
          4.3 <span className="text-accent text-lg mb-4">*</span>
        </h3>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Average Rating</p>
      </div>
      <div className="p-10 space-y-4">
        <h3 className="font-heading text-4xl md:text-5xl font-normal text-white">24<span className="text-accent">x</span>6</h3>
        <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Continuous Support</p>
      </div>
    </div>
  </section>
);

// --- Services Grid ---
const ServicesGrid = () => {
  const services = [
    { title: "Management Consulting", icon: <TrendingUp className="text-primary" size={28} strokeWidth={1.5} />, desc: "Strategic operational improvements to drive organizational growth and efficiency." },
    { title: "Corporate Advisory", icon: <Shield className="text-primary" size={28} strokeWidth={1.5} />, desc: "High-level guidance on corporate governance, risk management, and structuring." },
    { title: "Quality Inspection", icon: <CheckCircle className="text-primary" size={28} strokeWidth={1.5} />, desc: "Rigorous quality checks ensuring products strictly meet regulatory standards." },
    { title: "Technical & Logistics", icon: <Award className="text-primary" size={28} strokeWidth={1.5} />, desc: "Specialized services spanning air cargo consolidation to cable termination." },
  ];

  return (
    <section className="py-32 bg-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-primary leading-tight">Delivering High-End <br/>Business Solutions.</h2>
          </div>
          <p className="text-textLight text-lg max-w-md font-light leading-relaxed border-l border-borderLight pl-6 hidden md:block">
            We partner with industry leaders to unlock their true potential through data-driven strategies and meticulous execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-borderLight">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 hover:bg-bgOffWhite transition-colors duration-500 group relative">
              <div className="mb-8 p-4 bg-bgOffWhite inline-block">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl font-normal text-primary mb-4 leading-tight">{service.title}</h3>
              <p className="text-textLight text-sm font-light leading-relaxed mb-8">{service.desc}</p>
              <Link to="/services" className="text-xs uppercase tracking-widest font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2 absolute bottom-10">
                Explore <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About & Why Choose Us ---
const AboutPreview = () => (
  <section className="py-32 bg-primary text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">About The Firm</span>
            <h2 className="font-heading text-4xl md:text-5xl font-normal leading-tight mb-8">A Legacy of Trust, Driven by Performance.</h2>
            <p className="text-gray-300 font-light leading-relaxed mb-6 text-lg">
              Any Business Point Global Consultancy Services is an elite consulting firm dedicated to navigating complex business challenges. Based in Coimbatore, we deliver transformative results for forward-thinking enterprises.
            </p>
            <p className="text-gray-300 font-light leading-relaxed text-lg">
              Our multidisciplinary framework combines rigorous industry knowledge with innovative execution, ensuring our clients maintain competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 pt-10 border-t border-white/20">
            {["Experienced Leadership", "Punctual Delivery", "Unwavering Reliability", "Client-Centric Approach"].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-accent" />
                <span className="text-sm font-medium tracking-wide uppercase text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-6">
            <Link to="/about" className="inline-block px-10 py-4 border border-accent text-accent font-semibold text-sm tracking-widest uppercase hover:bg-accent hover:text-primary transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 h-[600px] w-full bg-secondary">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" alt="Consultants" className="w-full h-full object-cover grayscale opacity-80" />
          <div className="absolute inset-0 border-[16px] border-primary/20 pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

// --- Testimonials ---
const Testimonials = () => {
  const reviews = [
    { name: "Leander Wilfred", text: "Very good customer service.", title: "Enterprise Client" },
    { name: "Swapna Sops", text: "One of the best services and good concern thank you Mr. Anbu sir.", title: "Corporate Partner" },
    { name: "Gayathri Ragu", text: "Got the job immediately and trusted organisation.", title: "Industry Leader" }
  ];

  return (
    <section className="py-32 bg-bgOffWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Endorsements</span>
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-primary">Trusted by Visionaries</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col bg-white p-12 border-subtle">
              <Quote className="text-accent/20 mb-8" size={32} />
              <p className="text-lg font-body font-light italic text-textDark mb-10 flex-grow leading-relaxed">"{review.text}"</p>
              <div className="border-t border-borderLight pt-6">
                <div className="font-semibold text-primary tracking-wide uppercase text-sm mb-1">{review.name}</div>
                <div className="text-xs text-textLight">{review.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA Banner ---
const CTABanner = () => (
  <section className="bg-accent py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />
    <div className="max-w-4xl mx-auto px-4 pt-4 text-center relative z-10 border-t border-primary/20">
      <h2 className="font-heading text-4xl md:text-5xl font-normal text-primary mb-8 mt-12">Ready to Elevate Your Strategy?</h2>
      <Link to="/free-consultation" className="inline-block px-12 py-5 bg-primary text-white font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-colors">
        Connect With Our Partners
      </Link>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <TrustStats />
      <ServicesGrid />
      <AboutPreview />
      <Testimonials />
      <CTABanner />
    </div>
  );
};

export default Home;
