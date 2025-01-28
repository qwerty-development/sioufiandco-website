'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
    
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-light dark:bg-primary-dark"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="relative w-48 h-48 md:w-64 md:h-64"
          >
            <Image
              src={theme === 'light' ? '/logo.png' : '/logo-invert.png'}
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1
              }}
              className="absolute inset-0 rounded-full border-2 border-brand-primary"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}