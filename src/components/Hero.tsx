import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F5E6D3]">
      {/* 1. ANCIENT TEXTURE OVERLAY */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }}
      />

      {/* 2. THE SACRED ENTRANCE (Main Image with Arch) */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div 
          className="relative w-[90%] h-[85%] overflow-hidden shadow-2xl"
          style={{ 
            borderRadius: '500px 500px 0 0', // The Jharokha Arch
            border: '1px solid rgba(139, 69, 19, 0.2)' 
          }}
        >
          <img
            src="/bg2.png" // Ensure this is your cinematic Banarasi image
            alt="Ancient Heritage"
            className="w-full h-full object-cover brightness-75 sepia-[0.1]"
          />
          {/* Deep Sindoor Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* 3. VEDIC TYPOGRAPHY (Centered & Sacred) */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-4xl"
        >
          {/* Devanagari inspired subtitle */}
          <span className="block text-white tracking-[0.6em] text-[10px] md:text-xs uppercase mb-6 font-bold">
            <span className="font-poppins">अविनाशी |</span> <span className=' font-samarkan'>The Eternal Thread
          </span>
          </span>

          <h1 className="font-samarkan text-6xl md:text-[120px] text-white leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
            Mangalam
          </h1>

          {/* Shloka Style Tagline */}
          <p className="mt-8 font-serif italic text-xl md:text-3xl text-[#F5E6D3]/90 tracking-wide">
            "Sanskriti ka Sar, Parampara ka Shringar"
          </p>

          {/* Antique Brass Call to Action */}
          <div className="mt-12">
            <button className="group relative px-16 py-5 bg-transparent border border-[#D4AF37] overflow-hidden transition-all duration-700">
              <span className="relative z-10 text-[#D4AF37] group-hover:text-white tracking-[0.4em] text-xs font-bold uppercase">
                Explore Heritage
              </span>
              {/* Sliding Sindoor Color on Hover */}
              <div className="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* 4. TEMPLE PILLAR ACCENTS (Responsive) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      {/* Side "Stambha" (Pillar) hints */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-[1px] h-64 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-[1px] h-64 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;