"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const logos = [
  { name: "Arope", src: "/logo/arope.png" },
  { name: "Lia Assurex", src: "/logo/liaassurex.png" },
  { name: "AXA", src: "/logo/axa.png" },
  { name: "Bankers", src: "/logo/bankers.png" },
  { name: "Fidelity", src: "/logo/fidelity.png" },
  { name: "SNA", src: "/logo/sna.png" },
  { name: "Cumberland", src: "/logo/cumberland.png" },
];

export default function PartnerLogos() {
  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-title text-4xl sm:text-5xl md:text-6xl text-text-light mb-6 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent leading-relaxed pt-3 pb-1">
          Our Trusted Partners
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
        <p className="mt-4 text-text-muted text-xl sm:text-2xl font-light italic">
          Collaborating with the finest in the insurance industry
        </p>
      </motion.div>

      {/* Desktop and Medium Screens */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-secondary-light/5 dark:bg-white/90
                         rounded-xl p-4 md:p-6 lg:p-8 
                         hover:bg-secondary-light/10 dark:hover:bg-secondary-dark/10 
                         transition-all duration-300 
                         flex items-center justify-center group
                         aspect-square md:aspect-[4/3] lg:aspect-[3/2]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain filter group-hover:grayscale-0 transition-all duration-300 p-2"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative">
        <div
          className="overflow-x-auto scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 text-2xl pointer-events-none"
          >
            <FaArrowRight />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute right-0 top-0 h-full w-12 
                     bg-gradient-to-l from-primary-light/80 dark:from-primary-dark/80 
                     to-transparent pointer-events-none"
          />

          <div className="flex gap-4 px-4 min-w-max pb-4">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-secondary-light/5 dark:bg-white/90
                         rounded-xl p-4 flex items-center justify-center group
                         flex-shrink-0 w-60 h-40"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain filter group-hover:grayscale-0 transition-all duration-300 p-2"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
