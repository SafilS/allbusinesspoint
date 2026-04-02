import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full pt-20 bg-bgOffWhite">
      {/* Page Header */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl border-l border-accent pl-8">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block">Our Story</span>
            <h1 className="font-heading text-5xl md:text-6xl font-normal leading-tight mb-8">
              Architecting Corporate Excellence.
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              A trusted legacy of strategic execution, driving transformative change for enterprises globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="font-heading text-4xl font-normal text-primary mb-10 leading-tight">Navigating Modern <br />Business Challenges</h2>
              <div className="w-12 h-px bg-accent mb-8" />
              <p className="text-textLight text-lg font-light leading-relaxed mb-6">
                Founded in Coimbatore, Any Business Point Global Consultancy Services has grown from a specialized advisory practice into a full-scale corporate consulting firm. We actively partner with organizations to navigate volatile markets, streamline operations, and realize unseen potential.
              </p>
              <p className="text-textLight text-lg font-light leading-relaxed">
                Guided by the vision of leadership like Mr. Anbu, our team of seasoned analysts and consultants is deeply committed to delivering actionable insights and robust methodologies that yield immediate, measurable growth for our clients.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Corporate meeting" className="w-full object-cover grayscale opacity-90 shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="border-t border-accent pt-10">
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block">01 // Mission</span>
              <h3 className="font-heading text-3xl font-normal mb-8">Empowering Strategic Growth</h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                To equip enterprises with rigorous strategic insights, unwavering quality controls, and top-tier advisory services, empowering them to achieve their highest competitive potential in a complex global market.
              </p>
            </div>
            <div className="border-t border-accent pt-10">
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block">02 // Vision</span>
              <h3 className="font-heading text-3xl font-normal mb-8">The Preferred Corporate Partner</h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                To be universally recognized as the most trusted global consultancy partner, distinguished by our unrelenting pursuit of excellence, unshakeable integrity, and deep transformative impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our Principles</span>
            <h2 className="font-heading text-4xl font-normal text-primary">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-l border-borderLight pl-8 py-2">
              <h4 className="font-bold tracking-widest uppercase text-sm text-primary mb-4">Integrity</h4>
              <p className="text-textLight font-light leading-relaxed">
                We maintain the highest ethical standards in every engagement. Trust is the foundation of our advisory roles.
              </p>
            </div>
            <div className="border-l border-borderLight pl-8 py-2">
              <h4 className="font-bold tracking-widest uppercase text-sm text-primary mb-4">Excellence</h4>
              <p className="text-textLight font-light leading-relaxed">
                We deliver premium, high-end solutions rooted in data and rigorous analysis to consistently exceed client expectations.
              </p>
            </div>
            <div className="border-l border-borderLight pl-8 py-2">
              <h4 className="font-bold tracking-widest uppercase text-sm text-primary mb-4">Reliability</h4>
              <p className="text-textLight font-light leading-relaxed">
                Our relentless dedication ensures we are available 24x6, offering consistent and dependable support to our esteemed partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
