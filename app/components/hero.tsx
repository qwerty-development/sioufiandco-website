'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import ValuesSection from './values';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-primary-light dark:bg-primary-dark">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Background"
          src="/hero.jpg"
          fill
          priority
          className="object-cover opacity-60 dark:opacity-50"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-primary-light/60 via-primary-light/40 to-primary-light dark:from-primary-dark/60 dark:via-primary-dark/40 dark:to-primary-dark" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-16">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-7xl font-bold font-title tracking-tight text-text-primary dark:text-text-light sm:text-9xl"
          >
            A legacy of trust
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-full"
          >
            <ValuesSection />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}