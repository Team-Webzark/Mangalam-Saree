import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Archive = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Responsive Parallax: Stronger on desktop, subtle on mobile
  const img1Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const archiveItems = [
    {
      title: "1947 Independence Collection",
      desc: "A tribute to India's freedom, featuring hand-woven motifs inspired by the national flag and indigenous flora.",
      tag: "Handloom Khadi Silk",
      year: "1947"
    },
    {
      title: "Royal Court Chronicles",
      desc: "Recreations of regalia worn by queens, featuring intricate zardozi work and real silver-dipped threads.",
      tag: "Zardozi Silk",
      year: "1920"
    },
    {
      title: "Temple Weaves of Tamil Nadu",
      desc: "Sacred geometries immortalized in silk, handcrafted by fifth-generation master weavers of Kanchipuram.",
      tag: "Kanchipuram Temple Silk",
      year: "1890"
    }
  ];

  return (
    <section ref={containerRef} id="archive" className="py-20 md:py-32 px-4 md:px-6 bg-[#FCF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative text-center mb-16 md:mb-28"
        >
          <span className="block font-lato text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.6em] uppercase text-[#D4AF37] mb-4">
            Legacy & Heritage
          </span>
          <h2 className="font-playfair text-4xl md:text-7xl text-[#1A1A1A] mb-6 md:mb-8 italic">
            From Our Vault
          </h2>
          <div className="w-16 md:w-20 h-[1px] bg-[#D4AF37] mx-auto mb-6 md:mb-8" />
          <p className="font-lato text-[#5A5A5A] max-w-xl mx-auto leading-relaxed italic text-base md:text-lg px-4">
            "Rare pieces that showcase the evolution of Indian textile artistry across centuries."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Interactive Parallax Images */}
          {/* We adjust height: 450px for mobile, 700px for desktop */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] order-2 lg:order-1 mt-10 lg:mt-0">
            
            {/* Background "Ghost" Text - Hidden on very small screens for clarity */}
            <span className="absolute -top-5 -left-5 md:-top-10 md:-left-10 text-[80px] md:text-[150px] font-playfair text-black/[0.03] select-none pointer-events-none uppercase font-bold">
              Heritage
            </span>

            {/* Top Left Image */}
            <motion.div 
              style={{ y: img1Y }}
              className="absolute top-0 left-0 w-[65%] h-[75%] z-20"
            >
              <div className="relative w-full h-full shadow-xl md:shadow-[20px_20px_60px_rgba(0,0,0,0.15)] rounded-t-full border-[8px] md:border-[12px] border-white overflow-hidden">
                <img
                  src="paithani.png"
                  alt="Archive 1"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div 
              style={{ y: img2Y }}
              className="absolute bottom-0 right-0 w-[60%] h-[70%] z-10"
            >
              <div className="relative w-full h-full shadow-lg md:shadow-[20px_20px_60px_rgba(0,0,0,0.1)] rounded-t-full border-[6px] md:border-[8px] border-white/50 overflow-hidden">
                <img
                  src="banarasi.png"
                  alt="Archive 2"
                  className="w-full h-full object-cover saturate-50 brightness-90"
                />
                <div className="absolute inset-0 bg-[#730202]/10" />
              </div>
            </motion.div>
            
            {/* Decorative Gold Frame accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-[#D4AF37]/20 rounded-t-full pointer-events-none hidden md:block" />
          </div>

          {/* Right: Content List */}
          <div className="lg:col-span-6 flex flex-col space-y-12 md:space-y-16 lg:pl-16 order-1 lg:order-2">
            {archiveItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative pl-8"
              >
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37] to-transparent" />
                
                {/* Content */}
                <div className="relative">
                  <span className="text-[9px] md:text-[10px] font-lato tracking-[0.3em] text-[#D4AF37] mb-2 block font-bold">
                    ESTD. {item.year}
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl text-[#1A1A1A] mb-3 md:mb-4 group-hover:text-[#730202] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-lato text-sm md:text-base text-[#5A5A5A] leading-relaxed mb-4 md:mb-6 max-w-md">
                    {item.desc}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="h-[1px] w-6 md:w-8 bg-[#D4AF37]" />
                    <span className="font-lato text-[10px] md:text-[11px] tracking-widest uppercase text-[#D4AF37] font-bold">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Archive;