'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Heart, 
  Shield, 
  School, 
  Home, 
  Car, 
  HardHat, 
  Building2, 
  HardDrive, 
  Ship, 
  Plane,
  Settings 
} from 'lucide-react'

const services = [
  {
    id: 'healthcare',
    title: 'HEALTHCARE & MEDICAL',
    icon: <Heart className="w-8 h-8" />,
    description: 'Individuals | Expats | Groups Lebanon & Abroad',
    color: 'bg-rose-500/10 hover:bg-rose-500/20',
    iconColor: 'text-rose-500'
  },
  {
    id: 'life',
    title: 'LIFE INSURANCE',
    icon: <Shield className="w-8 h-8" />,
    description: 'Life Term | Saving Plan | Mortgage Individual | Group',
    color: 'bg-blue-500/10 hover:bg-blue-500/20',
    iconColor: 'text-blue-500'
  },
  {
    id: 'schools',
    title: 'SCHOOLS',
    icon: <School className="w-8 h-8" />,
    description: 'Physical | Individuals Life Insurance | School Liability towards Students',
    color: 'bg-yellow-500/10 hover:bg-yellow-500/20',
    iconColor: 'text-yellow-500'
  },
  {
    id: 'residence',
    title: 'RESIDENCE',
    icon: <Home className="w-8 h-8" />,
    description: 'Home Insurance',
    color: 'bg-green-500/10 hover:bg-green-500/20',
    iconColor: 'text-green-500'
  },
  {
    id: 'motor',
    title: 'MOTOR',
    icon: <Car className="w-8 h-8" />,
    description: 'All risks | 3rd party liability (TPL) | Mandatory',
    color: 'bg-purple-500/10 hover:bg-purple-500/20',
    iconColor: 'text-purple-500'
  },
  {
    id: 'construction',
    title: 'CONSTRUCTION',
    icon: <HardHat className="w-8 h-8" />,
    description: 'Contractors All Risk | Erection All Risk | Workmen compensation',
    color: 'bg-orange-500/10 hover:bg-orange-500/20',
    iconColor: 'text-orange-500'
  },
  {
    id: 'sailing',
    title: 'SAILING & LEISURE BOATS',
    icon: <Ship className="w-8 h-8" />,
    description: '',
    color: 'bg-cyan-500/10 hover:bg-cyan-500/20',
    iconColor: 'text-cyan-500'
  },
  {
    id: 'business',
    title: 'BUSINESS',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Corporate & SME\'s',
    color: 'bg-indigo-500/10 hover:bg-indigo-500/20',
    iconColor: 'text-indigo-500'
  },
  {
    id: 'workmen',
    title: 'WORKMEN COMPENSATION',
    icon: <HardDrive className="w-8 h-8" />,
    description: '',
    color: 'bg-red-500/10 hover:bg-red-500/20',
    iconColor: 'text-red-500'
  },
  {
    id: 'shipping',
    title: 'SHIPPING & FREIGHT',
    icon: <Ship className="w-8 h-8" />,
    description: '',
    color: 'bg-teal-500/10 hover:bg-teal-500/20',
    iconColor: 'text-teal-500'
  },
  {
    id: 'travel',
    title: 'TRAVEL',
    icon: <Plane className="w-8 h-8" />,
    description: 'Outbound | Inbound',
    color: 'bg-sky-500/10 hover:bg-sky-500/20',
    iconColor: 'text-sky-500'
  },
  {
    id: 'customized',
    title: 'CUSTOMIZED',
    icon: <Settings className="w-8 h-8" />,
    description: '',
    color: 'bg-emerald-500/10 hover:bg-emerald-500/20',
    iconColor: 'text-emerald-500'
  }
]

export default function ServicesSection() {
    return (
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
<h2 className="font-title text-5xl md:text-6xl text-text-light mb-6 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent leading-relaxed pt-3 pb-1">
  Our Services
</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
            <p className="mt-6 text-text-muted text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
              Customization at its best. Since its inception, Sioufi & Co, relies on strong ties with major international 
              and local insurance companies offering a broad range of products either for individuals or businesses. 
              Each offer is studied according to the client's need and budget.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <div className={`h-full p-8 rounded-lg ${service.color} border border-gold-500/20 flex flex-col items-center text-center`}>
                    <div className={`${service.iconColor} mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-title text-text-primary dark:text-text-light mb-3">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-text-secondary dark:text-text-muted text-lg">
                        {service.description}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }