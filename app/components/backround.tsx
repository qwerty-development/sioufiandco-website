'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface LineProps {
  id: number
  left: string
  width: string
  delay: number
  lightColor: string
  darkColor: string
}

export default function Background() {
  const [lines, setLines] = useState<LineProps[]>([])
  const [theme, setTheme] = useState('light')

  // Watch for theme changes
  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setTheme(isDark ? 'dark' : 'light')
    }

    // Initial theme check
    updateTheme()

    // Set up observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.nodeName === 'HTML' && mutation.attributeName === 'class') {
          updateTheme()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  // Generate lines
  useEffect(() => {
    setLines(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 0.5}px`,
        delay: Math.random() * 4,
        lightColor: Math.random() > 0.5 ? '#FFD700' : '#1B82B4',
        darkColor: Math.random() > 0.5 ? '#FFD700' : '#1B82B4'
      }))
    )
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lines.map(line => (
        <motion.div
          key={line.id}
          className="absolute h-screen transition-colors duration-300"
          style={{
            left: line.left,
            width: line.width,
            backgroundColor: theme === 'light' ? line.lightColor : line.darkColor,
            opacity: theme === 'light' ? 0.05 : 0.1
          }}
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 7,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}