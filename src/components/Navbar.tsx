import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-white border-borderLight py-4' : 'bg-white/95 backdrop-blur-sm border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary text-accent p-2">
              <Briefcase size={22} className="stroke-[1.5]" />
            </div>
            <span className="font-heading font-normal text-2xl md:text-3xl text-primary tracking-tight">
              Any Business Point
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors ${
                    location.pathname === link.path ? 'text-accent font-semibold border-b border-accent pb-1' : 'text-textLight hover:text-primary font-medium'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </div>
            <Link
              to="/free-consultation"
              className="bg-primary hover:bg-secondary text-white px-8 py-3 text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-secondary transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-borderLight overflow-hidden"
          >
            <div className="flex flex-col px-6 pt-4 pb-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-lg tracking-wide ${
                    location.pathname === link.path
                      ? 'text-accent font-semibold'
                      : 'text-textLight hover:text-primary'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
              <div className="pt-6 border-t border-borderLight">
                <Link
                  to="/free-consultation"
                  className="block w-full text-center bg-primary text-white px-6 py-4 text-sm font-semibold tracking-wider uppercase"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
