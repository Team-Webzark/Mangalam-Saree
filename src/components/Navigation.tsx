import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#heritage' },
    { name: 'Collections', href: '#collections' },
    { name: 'Archive', href: '#archive' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-[#FCF9F2]/90 backdrop-blur-md py-3 shadow-lg border-b border-[#D4AF37]/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with scaling effect */}
        <motion.div 
          animate={{ scale: scrolled ? 0.9 : 1 }}
          className="relative z-[110]"
        >
          <a href="#" className="font-samarkan text-2xl md:text-4xl tracking-tighter text-[#800000]">
            Mangalam
            <span className="block h-[1px] w-full bg-[#D4AF37] scale-x-50 origin-left" />
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group font-serif text-[11px] tracking-[0.4em] uppercase text-[#5A4033] overflow-hidden"
            >
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                {link.name}
              </span>
              <span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-[#800000] font-bold">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
          
          <button className="ml-4 px-6 py-2 border border-[#800000] text-[#800000] font-serif text-[10px] tracking-[0.2em] uppercase hover:bg-[#800000] hover:text-[#F5E6D3] transition-all duration-500">
            Enquire
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[110] p-2 text-[#800000]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay (The "Parda") */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FCF9F2] z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {/* Background Texture for Mobile Menu */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#D4AF37]/10 rounded-full animate-spin-slow" />

            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-3xl text-[#800000] italic group flex flex-col items-center"
              >
                {link.name}
                <span className="h-[1px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-col items-center gap-4 text-[#8B4513]/60 font-serif text-xs tracking-widest uppercase"
            >
              <div className="h-[40px] w-[1px] bg-[#D4AF37]/40" />
              <span>Bilsanda • Uttar Pradesh</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;