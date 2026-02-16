import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const leadership = [
    {
      name: "Manu Shukla",
      role: "Managing Director",
      image: "/manushukla.jpeg", 
      bio: "Master curator with an eye for identifying the rarest weaves across the Indian sub-continent.",
      honorific: "Sangrahakarta" // The Collector
    },
    {
      name: "Srijan Shukla",
      role: "Chief Executive Officer",
      image: "/srijan.png",
      bio: "Modernizing the retail experience while keeping the sanctity of the handloom intact.",
      honorific: "Prabandhak" // The Manager
    },
    {
      name: "Sarthak Shukla",
      role: "Chief Operating Officer",
      image: "/sarthak.png",
      bio: "Overseeing the journey of a saree from the weaver’s hands to the Mangalam vault.",
      honorific: "Sutradhara" // The Coordinator
    }
  ];

  return (
    <div className="bg-[#F5E6D3] font-serif text-[#1A1A1A] overflow-hidden">
      
      {/* 1. THE VAULT HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#2C2C2C]">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5E6D3]" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-[#D4AF37] tracking-[0.8em] uppercase text-[10px] md:text-xs mb-6 block font-bold">
            The Art of Curation
          </span>
          <h1 className="text-white text-6xl md:text-9xl font-light leading-none mb-4">
            Mangalam
          </h1>
          <p className="text-[#800000] font-serif italic text-xl md:text-2xl tracking-widest">
            "Purveyors of India's Finest Textiles"
          </p>
        </motion.div>
      </section>

      {/* 2. THE RETAIL PHILOSOPHY: THE CURATOR'S EYE */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10 order-2 md:order-1">
            <div className="inline-block border-b border-[#D4AF37] pb-2">
                <span className="text-[#8B4513] tracking-[0.3em] text-xs uppercase font-bold">The Collector's Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl text-[#800000] leading-tight">
                Not Just a Store, <br /> <span className="italic">A Sanctuary.</span>
            </h2>
            <div className="space-y-6 text-lg text-[#5A4033] leading-[1.8] font-light">
              <p>
                Based in the heritage-rich town of **Bilsanda**, Mangalam is a curated retail house. We don't just sell sarees; we act as the custodians of taste, traveling to the deepest corners of India to source masterpieces.
              </p>
              <div className="bg-[#800000]/5 p-8 border-r-4 border-[#800000]">
                <p className="italic text-[#800000]">
                  "Our role is to find the one-in-a-thousand weave that is worthy of the Mangalam name. We are the bridge between the weaver's genius and your legacy."
                </p>
              </div>
              <p>
                Every piece in our Bilsanda showroom is hand-selected by the Shukla family, ensuring that the zari is authentic, the silk is pure, and the artistry is unparalleled.
              </p>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative order-1 md:order-2"
          >
            {/* Gallery Frame Style */}
            <div className="relative z-10 p-4 bg-white shadow-2xl">
              <img 
                src="/bg2.png" 
                alt="Mangalam Curator Gallery" 
                className="w-full object-cover aspect-[4/5] brightness-90 shadow-inner"
              />
              <div className="mt-4 text-center">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">Authentic Handloom Archive</p>
              </div>
            </div>
            {/* Absolute Decorative Motif */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#D4AF37]/20 rounded-full flex items-center justify-center opacity-30 animate-spin-slow">
                <span className="text-[#D4AF37] text-4xl">❈</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE SHUKLA FAMILY: THE CURATORS */}
      <section className="py-32 bg-[#2C2C2C] text-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[#D4AF37] tracking-[0.5em] uppercase text-[10px] mb-4 block">The Guiding Hands</span>
            <h2 className="text-5xl md:text-7xl italic font-light">The Curators</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {leadership.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center group"
              >
                <div className="relative mb-8 mx-auto w-64 h-80 overflow-hidden border border-[#D4AF37]/30">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 border-[15px] border-[#2C2C2C] pointer-events-none" />
                </div>
                <h4 className="text-2xl text-[#D4AF37] mb-1">{member.name}</h4>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mb-6">{member.role}</p>
                <p className="text-sm font-light text-[#F5E6D3]/60 italic leading-relaxed px-4">"{member.bio}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION: THE SHOWROOM EXPERIENCE */}
      <section className="py-40 text-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
        <div className="max-w-3xl mx-auto relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl text-[#800000] mb-8">Visit the Bilsanda Vault</h2>
          <p className="text-[#5A4033] text-lg leading-relaxed mb-12 italic">
            "Step into a space where every shelf holds a piece of India's soul. 
            Experience personal curation tailored to your occasion."
          </p>
          <button className="relative group px-12 py-5 bg-[#800000] text-white overflow-hidden transition-all duration-500">
            <span className="relative z-10 tracking-[0.5em] text-[10px] uppercase font-bold">Book a Consultation</span>
            <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;