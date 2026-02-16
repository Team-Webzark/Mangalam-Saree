import { motion } from 'framer-motion';

const collections = [
  { name: 'Virasat-e-Kashi', fabric: 'Handloom Banarasi Silk', image: '/banarasi.png', origin: 'Varanasi' },
  { name: 'Maharani Chanderi', fabric: 'Pure Chanderi Silk', image: '/Chanderi.jpg', origin: 'Madhya Pradesh' },
  { name: 'Kanjeevaram Raani', fabric: 'Temple Border Kanchipuram', image: '/kanjiwaram.png', origin: 'Tamil Nadu' },
  { name: 'Zari-e-Gulmohar', fabric: 'Tissue Silk with Zari', image: '/zari.png', origin: 'Heritage' },
  { name: 'Paithani Royale', fabric: 'Traditional Paithani', image: '/paithani.png', origin: 'Maharashtra' },
  { name: 'Bandhani Madhubani', fabric: 'Handcrafted Bandhani Silk', image: '/bandhani.png', origin: 'Gujarat' },
  { name: 'Tussar Treasure', fabric: 'Pure Tussar Silk', image: '/tussar.png', origin: 'Bhagalpur' },
  { name: 'Rani Pink Heritage', fabric: 'Organza with Gold Work', image: '/Ranipink.png', origin: 'Contemporary' },
];

const Portfolio = () => {
  return (
    <section id="collections" className="py-32 px-6 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Vedic Symbols */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-[#800000]/30" />
             <span className="font-poppins text-[10px] tracking-[0.5em] uppercase text-[#8B4513] font-bold">
               अविनाशी संग्रह
             </span>
             <div className="h-[1px] w-12 bg-[#800000]/30" />
          </div>
          <h2 className="font-serif text-5xl md:text-7xl italic text-[#800000] mb-6">
            Signature Sarees
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
        </motion.div>

        {/* Portfolio Grid as Temple Niches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* The Jharokha (Archway) Container */}
              <div className="relative mb-8 pt-4 px-4 pb-2 bg-[#FCF9F2] shadow-[10px_10px_30px_rgba(0,0,0,0.05)] border border-[#D4AF37]/10">
                <div 
                  className="relative overflow-hidden aspect-[3/4] shadow-inner"
                  style={{ borderRadius: '500px 500px 0 0' }} // Sacred Arch Shape
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover brightness-95 transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Antique Gold Dust Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Arch Border */}
                  <div 
                    className="absolute inset-2 border-[0.5px] border-[#D4AF37]/40 pointer-events-none"
                    style={{ borderRadius: '500px 500px 0 0' }}
                  />
                </div>
                
                {/* Origin Stamp (Ancient Style) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#800000] text-[#F5E6D3] px-3 py-1 text-[8px] tracking-widest uppercase font-serif">
                   {item.origin}
                </div>
              </div>

              {/* Typography with Sanskriti feel */}
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#2C2C2C] mb-2 group-hover:text-[#800000] transition-colors duration-300">
                  {item.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1 h-1 bg-[#D4AF37] rotate-45" />
                  <p className="font-serif italic text-sm text-[#8B4513]/80">
                    {item.fabric}
                  </p>
                  <div className="w-1 h-1 bg-[#D4AF37] rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aesthetic Sandstone Textures at edges */}
      <div className="absolute left-0 bottom-20 opacity-10 pointer-events-none hidden lg:block">
        <div className="w-[1px] h-96 bg-gradient-to-b from-transparent via-[#8B4513] to-transparent" />
      </div>
    </section>
  );
};

export default Portfolio;