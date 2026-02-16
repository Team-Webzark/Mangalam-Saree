import { motion } from 'framer-motion';

const Heritage = () => {
  return (
    <section id="heritage" className="py-32 px-6 bg-[#FCF9F6]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-lato text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-6">
            OUR HERITAGE
          </div>

          <h2 className="font-playfair text-5xl md:text-6xl text-[#2C2C2C] mb-12">
            A Legacy Woven in Gold
          </h2>

          <div className="flex items-center justify-center my-16">
            <div className="h-[1px] w-32 bg-[#D4AF37]" />
            <div className="mx-6 w-3 h-3 rotate-45 border-2 border-[#D4AF37]" />
            <div className="h-[1px] w-32 bg-[#D4AF37]" />
          </div>

          <div className="space-y-6 text-[#5A5A5A] text-lg leading-relaxed">
            <p>
              <span className="font-samarkan text-[#800000]">Mangalam </span><span className=' font-lato'> represents the zenith of Indian textile artistry, where
              centuries-old weaving techniques merge with contemporary design
              sensibilities.</span>
            </p>

            <p>
              Each saree in our collection is a masterpiece, meticulously crafted
              by master weavers who have inherited their skills through
              generations. From the silk lanes of Varanasi to the handloom
              villages of Kanchipuram, we source only the finest fabrics.
            </p>

            <p className="font-playfair italic text-xl text-[#D4AF37]">
              "We don't just create sarees. We weave dreams, preserve heritage,
              and celebrate the eternal beauty of Indian craftsmanship."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Heritage;
