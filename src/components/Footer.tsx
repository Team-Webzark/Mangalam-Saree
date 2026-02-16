import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#F5E6D3] text-[#5A4033] py-20 px-6 border-t border-[#D4AF37]/30">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="font-samarkan text-4xl text-[#800000] tracking-tighter">
              Mangalam
            </h3>
            <p className=" text-sm leading-[1.8] text-[#5A4033]/80">
              Preserving the sacred threads of Indian heritage. Curating the finest 
              handloom stories from the heart of Bilsanda to the world.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#800000]/20 flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-[#F5E6D3] transition-all duration-500 shadow-sm bg-white/50"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className=" text-[10px] tracking-[0.4em] uppercase text-[#800000] mb-8 font-bold">
              Navigation
            </h4>
            <ul className="space-y-4  text-sm">
              {['Heritage', 'Collections', 'Archive', 'Visit Showroom'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="hover:text-[#800000] transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-[#D4AF37] rotate-45 group-hover:scale-150 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className=" text-[10px] tracking-[0.4em] uppercase text-[#800000] mb-8 font-bold">
              The Bilsanda Showroom
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4  text-sm">
                <p className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Inquiries</span>
                  <span className="opacity-90">showroom@mangalam.in</span>
                </p>
                <p className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Connect</span>
                  <span className="opacity-90">+91 9319077640</span>
                </p>
              </div>
              <div className="space-y-4  text-sm italic opacity-80 border-l border-[#D4AF37]/30 pl-6">
                <p>
                  Bisalpur Road, <br />
                  Near Nagar Panchayat Office <br />
                  Bilsanda, Uttar Pradesh <br />
                  262202
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#800000]/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Sanskrit Sigil */}
            <div className="text-[#800000]/60  italic text-sm tracking-[0.2em] order-2 md:order-1">
             <span className="font-poppins">अविनाशी परंपरा |</span>  <span className=""></span> THE ETERNAL LEGACY
            </div>

            {/* Copyright & Credits */}
            <div className="flex flex-col items-center md:items-end gap-1 order-1 md:order-2">
              <p className=" text-[10px] tracking-widest text-[#5A4033]/60 uppercase">
                © 2026 MANGALAM.
              </p>
              <p className=" text-[9px] text-[#5A4033]/40 tracking-[0.2em]">
                CRAFTED BY{' '}
                <a 
                  href="https://webzark.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#800000] transition-colors underline decoration-[#D4AF37]/40 underline-offset-4"
                >
                  WEBZARK
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;