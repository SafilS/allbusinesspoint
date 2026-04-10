import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-400 pt-24 pb-12 border-t-[8px] border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <Briefcase size={24} className="text-accent stroke-[1.5]" />
              <span className="font-heading font-normal text-2xl text-white tracking-tight">
                Any Business Point
              </span>
            </Link>
            <p className="text-sm leading-relaxed font-light">
              Premium corporate consultancy solutions empowering businesses to grow and scale with high-end strategies, right here in Coimbatore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-normal text-white mb-8 tracking-widest uppercase text-xs">Firm</h3>
            <ul className="space-y-4">
              {['Home', 'Our Story', 'Capabilities', 'Contact', 'Engagement'].map((item, idx) => {
                const paths = ['/', '/about', '/services', '/contact', '/free-consultation'];
                return (
                  <li key={item}>
                    <Link to={paths[idx]} className="text-sm font-light hover:text-white transition-colors tracking-wide">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-normal text-white mb-8 tracking-widest uppercase text-xs">Capabilities</h3>
            <ul className="space-y-4">
              {['Management Consulting', 'Corporate Advisory', 'Quality Control', 'Logistics Strategy', 'Technical Services'].map((service) => (
                <li key={service} className="text-sm font-light hover:text-white transition-colors cursor-default tracking-wide">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading text-lg font-normal text-white mb-8 tracking-widest uppercase text-xs">Headquarters</h3>
            <ul className="space-y-4">
              <li className="text-sm font-light leading-relaxed">
                Krishnaswamy Nagar, Near North CBE,<br />
                Coimbatore, Tamil Nadu, India
              </li>
              <li className="text-sm font-light pt-4 border-t border-white/10">
                <span className="text-white block mb-1 tracking-widest uppercase text-[10px]">Contact</span>
                +91 9789378657<br />
                contact@anybusinesspoint.com
              </li>
              <li className="text-sm font-light pt-4 border-t border-white/10">
                <span className="text-white block mb-1 tracking-widest uppercase text-[10px]">Office Hours</span>
                Mon - Sat: Open 24 Hours<br />Sunday: Closed
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-wider uppercase">
            © {new Date().getFullYear()} Any Business Point Global Consultancy. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs tracking-wider uppercase">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
