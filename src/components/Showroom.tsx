import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const Showroom = () => {
  return (
    <section id="visit" className="relative py-16 md:py-32 px-4 md:px-6 bg-[#F5E6D3] overflow-hidden">
      {/* Ancient Background Motif - Scaled for mobile */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] md:w-[800px] md:h-[800px] border-[10px] md:border-[20px] border-[#800000] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#FCF9F2] shadow-xl md:shadow-[30px_30px_80px_rgba(0,0,0,0.1)] border border-[#D4AF37]/30"
        >
          {/* Ornamental Corners - Responsive sizing */}
          <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-[#800000]/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-[#800000]/20" />

          <div className="p-6 sm:p-10 md:p-20">
            {/* Header */}
            <div className="text-center mb-10 md:mb-16">
              <span className="block font-serif text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-[#8B4513] mb-3 md:mb-4 font-bold uppercase">
                <span className="font-poppins">  निमंत्रण | </span>
              The Invitation
              </span>
              <h2 className="font-serif text-3xl md:text-6xl text-[#800000] mb-4 md:mb-6 italic leading-tight">
                Experience Mangalam
              </h2>
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs md:text-base">✦</span>
                <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]" />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              
              {/* Left Column: Details */}
              <div className="flex flex-col justify-center space-y-8 md:space-y-10 order-2 lg:order-1">
                {/* Location */}
                <div className="flex gap-4 md:gap-5 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-white shadow-sm transition-colors duration-500 lg:group-hover:bg-[#800000]">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] lg:group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[#800000] tracking-widest uppercase text-[10px] md:text-xs font-bold mb-1 md:mb-2">The Landmark</h4>
                    <p className="font-serif text-sm md:text-base text-[#5A4033] leading-relaxed italic">
                      Bisalpur Road, Near Nagar Panchayat Office <br className="hidden sm:block" />
                      Bilsanda - 262202, Uttar Pradesh
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 md:gap-5 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-white shadow-sm transition-colors duration-500 lg:group-hover:bg-[#800000]">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] lg:group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[#800000] tracking-widest uppercase text-[10px] md:text-xs font-bold mb-1 md:mb-2">Auspicious Hours</h4>
                    <p className="font-serif text-sm md:text-base text-[#5A4033] leading-relaxed italic">
                      09:00 AM - 09:00 PM<br />
                      <span className="text-[#800000]/60 text-xs md:text-sm">Closed on Wednesdays</span>
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex gap-4 md:gap-5 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-white shadow-sm transition-colors duration-500 lg:group-hover:bg-[#800000]">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] lg:group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[#800000] tracking-widest uppercase text-[10px] md:text-xs font-bold mb-1 md:mb-2">Connect</h4>
                    <p className="text-sm md:text-base text-[#5A4033] leading-relaxed italic">
                      +91 9319077640 • +91 9193270271<br />
                      showroom@mangalam.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Box */}
              <div className="bg-[#800000] p-8 md:p-12 text-center relative overflow-hidden flex flex-col justify-center min-h-[300px] order-1 lg:order-2">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                
                <h3 className="relative z-10 font-serif text-2xl md:text-3xl text-[#F5E6D3] mb-4 md:mb-6 italic">
                  Awaited Presence
                </h3>
                <p className="relative z-10 font-serif text-[#F5E6D3]/70 text-xs md:text-sm leading-relaxed md:leading-[1.8] mb-8 md:mb-10 max-w-xs mx-auto">
                  Each guest is treated as a patron of the arts. We offer private consultations to help you find the saree that speaks to your soul.
                </p>
                
                <button className="relative z-10 w-full py-3 md:py-4 border border-[#D4AF37] text-[#D4AF37] font-serif tracking-[0.2em] md:tracking-[0.4em] text-[10px] uppercase transition-all duration-700 active:bg-[#D4AF37] active:text-white lg:hover:bg-[#D4AF37] lg:hover:text-white">
                  Request Private View
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showroom;