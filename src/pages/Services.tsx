import { motion } from 'framer-motion';
import { TrendingUp, Shield, CheckCircle, Package, Wrench, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const sections = [
    {
      title: "Management Consulting",
      icon: <TrendingUp size={32} className="text-primary stroke-[1.5]" />,
      desc: "Our core management consulting focuses on optimizing your operational efficiency, strategy formulation, and organizational design to achieve sustainable scaling.",
      benefits: ["Revenue Growth Strategy", "Process Optimization", "Change Management", "Market Expansion & Analytics"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Corporate Advisory",
      icon: <Shield size={32} className="text-primary stroke-[1.5]" />,
      desc: "Providing high-level, discrete counsel to executives and boards on strategic planning, crisis management, M&A, and corporate governance.",
      benefits: ["Risk Management", "Board Advisory", "Financial Restructuring", "Compliance Strategy"],
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Quality Control System",
      icon: <CheckCircle size={32} className="text-primary stroke-[1.5]" />,
      desc: "Engineering rigorous inspection protocols ensuring your products and services comply with the highest international industry standards.",
      benefits: ["ISO Standardization", "Defect Reduction", "Supplier Audits", "Quality Continuous Improvement"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Logistics Strategy",
      icon: <Package size={32} className="text-primary stroke-[1.5]" />,
      desc: "Comprehensive air cargo consolidation services streamlining your supply chain globally and mitigating operational bottlenecks.",
      benefits: ["Freight Consolidation", "Customs Clearance", "Supply Chain Analytics", "Cost Reduction Initiatives"],
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Technical Services",
      icon: <Wrench size={32} className="text-primary stroke-[1.5]" />,
      desc: "Specialized technical solutions encompassing everything from high-voltage cable termination to advanced electronic security repair.",
      benefits: ["Cable Termination", "Security System Maintenance", "Infrastructure Audits", "24/7 Technical Support"],
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Corporate Branding Visuals",
      icon: <Camera size={32} className="text-primary stroke-[1.5]" />,
      desc: "Premium professional photography and visual strategy for your corporate branding, executive team profiles, and investor events.",
      benefits: ["Executive Portraits", "Event Documentation", "Product Portfolios", "Brand Visual Identity"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="w-full pt-20 bg-white">
      {/* Page Header */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl border-l border-accent pl-8">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block">Capabilities</span>
            <h1 className="font-heading text-5xl md:text-6xl font-normal leading-tight mb-8">
              Strategic Solutions for <br />Complex Markets.
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Tailored services designed to optimize performance, manage risk, and accelerate growth across core business sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {sections.map((service, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-16 items-start">
              <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden w-full h-[400px]">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-accent/80" />
                </div>
              </div>

              <div className={`w-full lg:w-1/2 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="mb-10 p-4 border border-borderLight inline-block w-max">
                  {service.icon}
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-normal text-primary mb-8">{service.title}</h2>
                <div className="w-8 h-px bg-accent mb-8" />
                <p className="text-textLight text-lg font-light leading-relaxed mb-10">{service.desc}</p>

                <h4 className="font-bold text-xs tracking-widest uppercase text-primary mb-6">Key Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 border-b border-borderLight pb-3">
                      <div className="w-1.5 h-1.5 bg-accent" />
                      <span className="text-sm font-medium text-textDark tracking-wide">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bgOffWhite py-32 border-t border-borderLight">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-normal text-primary mb-10">Require a custom engagement?</h2>
          <Link to="/contact" className="inline-block px-12 py-5 bg-primary text-white text-sm font-semibold tracking-widest uppercase hover:bg-secondary transition-colors">
            Contact Our Directors
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
