'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Moon, Sun, MessageSquareMore } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' }, // Updated href to include hash
  { name: 'Team', href: '/team' },
  { name: 'News and Events ', href: '/newsandevents' },
  { name: 'Contact', href: '/contact' },
]

const Logo = ({ theme }: { theme: string }) => (
  <div className="relative w-[120px] h-[40px]"> {/* Fixed aspect ratio container */}
    <Image
      src={theme === 'light' ? '/logo.png' : '/logo-invert.png'}
      alt="Logo"
      fill
      priority
      className="object-contain"
      sizes="(max-width: 768px) 120px, 160px"
    />
  </div>
)

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Check if it's a hash link and we're on the home page
    if (href.includes('#') && pathname === '/') {
      const element = document.getElementById(href.split('#')[1])
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
        if (mobileMenuOpen) setMobileMenuOpen(false)
      }
    } else if (pathname === '/' && href === '/') {
      // If we're on home and clicking home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (mobileMenuOpen) setMobileMenuOpen(false)
    } else {
      // Navigate to new page if it's not a hash link or we're not on home page
      router.push(href)
      if (mobileMenuOpen) setMobileMenuOpen(false)
    }
  }

  const renderNavLink = (item: { name: string; href: string }) => (
    <Link
      key={item.name}
      href={item.href}
      onClick={(e) => handleNavClick(e, item.href)}
      className="text-lg font-semibold text-text-primary dark:text-text-light hover:text-gold-500 dark:hover:text-gold-500 transition-colors duration-300"
    >
      {item.name}
    </Link>
  )

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-sm" />
            
            <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-x-8 py-8 px-8 lg:px-12">
              <Link 
                href="/"
                onClick={(e) => handleNavClick(e, '/')} 
                className="-m-1.5 p-1.5"
              >
                <Logo theme={theme} />
              </Link>

              <div className="hidden lg:flex lg:gap-x-16">
                {navigation.map((item) => renderNavLink(item))}
              </div>

              <div className="flex items-center gap-x-6">
                {/* AI Assistant Icon */}
                <Link href="/services/customized">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(234, 179, 8, 0)',
                          '0 0 0 10px rgba(234, 179, 8, 0)'
                        ]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="absolute inset-0"
                    />
                    <MessageSquareMore className="size-6 text-text-primary dark:text-text-light hover:text-gold-500 dark:hover:text-gold-500 transition-colors duration-300" />
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                    </span>
                  </motion.div>
                </Link>

                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="p-2 text-text-primary dark:text-text-light hover:text-gold-500 dark:hover:text-gold-500 transition-colors duration-300"
                >
                  {theme === 'light' ? <Moon className="size-6" /> : <Sun className="size-6" />}
                </button>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden -m-2.5 rounded-md p-2.5 text-text-primary dark:text-text-light"
                >
                  <Bars3Icon className="size-7" />
                </button>
              </div>
            </nav>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
            />
          </div>

          {/* Mobile menu */}
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-light/95 dark:bg-primary-dark/95 backdrop-blur-sm px-6 py-8 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Link 
                  href="/"
                  onClick={(e) => handleNavClick(e, '/')}
                >
                  <Logo theme={theme} />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2.5 text-text-primary dark:text-text-light"
                >
                  <XMarkIcon className="size-7" />
                </button>
              </div>
              <nav className="mt-12 flow-root">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-4 py-3 text-lg font-semibold text-text-primary dark:text-text-light hover:text-gold-500 dark:hover:text-gold-500 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/services/customized"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-lg font-semibold text-text-primary dark:text-text-light hover:text-gold-500 dark:hover:text-gold-500 transition-colors duration-300"
                  >
                    <MessageSquareMore className="size-5" />
                    <span>AI Assistant</span>
                  </Link>
                </div>
              </nav>
            </Dialog.Panel>
          </Dialog>
        </motion.header>
      )}
    </AnimatePresence>
  )
}