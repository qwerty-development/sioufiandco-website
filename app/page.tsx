'use client'

import { motion } from 'framer-motion'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import Partners from './components/partners'
import ServicesSection from './components/services'

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="bg-primary-light dark:bg-primary-dark"
    >
      <Navbar />
      <motion.main
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Partners />
        <div id="services">
        <ServicesSection/>
        </div>
          
        </motion.div>
      </motion.main>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 2rem;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--brand-primary);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--brand-secondary);
        }
      `}</style>
    </motion.div>
  )
}