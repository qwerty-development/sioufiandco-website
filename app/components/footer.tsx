'use client'

import { Facebook, Instagram, Phone, MessageCircle, MapPin, Navigation } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-light dark:bg-primary-dark border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              <a 
                href="https://maps.app.goo.gl/uUWtaWC3iSKiiyud6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-gold-500 transition-colors"
              >
                <MapPin size={18} />
                <span>Visit Our Office</span>
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

          {/* Map Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-title text-gold-500 mb-4">Find Us</h3>
            <div className="w-full h-[200px] rounded-lg overflow-hidden shadow-lg mb-4">
              <h3>Soho Beirut، Corniche du fleuve،, Beirut</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9733519180547!2d35.5129092!3d33.893444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16d9ae0adb45%3A0xbb6dffef91e03f16!2sSioufi%20and%20Company!5e0!3m2!1sen!2slb!4v1707056065569!5m2!1sen!2slb"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <a 
              href="https://maps.app.goo.gl/uUWtaWC3iSKiiyud6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gold-500 rounded-lg hover:bg-gold-600 transition-colors duration-200"
            >
              <Navigation size={16} />
              Take me there
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold-500/20 text-center text-sm text-text-secondary dark:text-text-muted">
          Proudly built by QWERTY. © Copyrights 2019. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}