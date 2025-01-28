'use client'

import { Facebook, Instagram, Phone, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-light dark:bg-primary-dark border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="Sioufi & Co"
              width={200}
              height={80}
              className="dark:hidden"
            />
            <Image
              src="/logo-invert.png"
              alt="Sioufi & Co"
              width={200}
              height={80}
              className="hidden dark:block"
            />
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-title text-gold-500 mb-4">Contact Us</h3>
            <div className="space-y-3 text-text-secondary dark:text-text-muted">
              <a href="tel:+96181641000" className="flex items-center justify-center md:justify-start gap-2 hover:text-gold-500 transition-colors">
                <Phone size={18} />
                <span>+961 81 641 000</span>
              </a>
              <a href="https://wa.me/96181624400" className="flex items-center justify-center md:justify-start gap-2 hover:text-gold-500 transition-colors">
                <MessageCircle size={18} />
                <span>+961 81 624 400</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-title text-gold-500 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <a 
                href="https://www.facebook.com/SteMichelSioufi/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary dark:text-text-muted hover:text-gold-500 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com/sioufiandcolb" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary dark:text-text-muted hover:text-gold-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold-500/20 text-center text-sm text-text-secondary dark:text-text-muted">
          Proudly built by QWERTY. © Copyrights 2019. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}