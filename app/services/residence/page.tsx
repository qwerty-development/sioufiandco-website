'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  Shield,
  AlertCircle,
  Building,
  Users,
  Zap,
  HomeIcon
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }: any) => (
  <div className="bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 rounded-lg p-6 flex flex-col items-center transition-all duration-300">
    <div className="text-green-500 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-text-primary dark:text-text-light mb-2 text-center">
      {title}
    </h3>
    <p className="text-text-secondary dark:text-text-muted text-center text-sm">
      {description}
    </p>
  </div>
);

const CoverageSection = ({ title, items }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 md:p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary dark:text-text-light">
          {title}
        </h3>
        <div className="text-green-500 transition-transform duration-300">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="mt-4 space-y-3">
          {items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3 text-text-secondary dark:text-text-muted">
              <BadgeCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const ResidencePage = () => {
  const propertyCoverage = [
    "Insured property",
    "Construction",
    "Content"
  ];

  const liabilityCoverage = [
      "Co-Owners recourse and Tenants Liability",
      "Neighbors Recourse"
  ];

  const perilsCoverage = [
      "Natural disasters such as: Earthquake, Storm, Tempest and Flood",
      "Glass breakage",
      "Theft house content due to forcible entry",
      "Jewelry robbery in the Safe by double forcible entry",
      "Use rent",
      "Water damage and water damage to neighbors",
      "Etc..."
  ]

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark">
      {/* Hero Section */}
      <div className="relative bg-primary-light dark:bg-primary-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <Home className="w-12 h-12 text-green-500" />
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-light">
                Residence
              </h1>
            </motion.div>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-muted max-w-3xl mx-auto">
              Homeowners insurance is a property insurance that covers losses and
              damages to a residence, including furnishings and other
              assets. Homeowners insurance also provides liability coverage
              against accidents.
            </p>
          </div>
        </div>
      </div>

      {/* Coverage Sections */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <CoverageSection
              title="Property"
              items={propertyCoverage}
            />
            <p className='text-text-secondary dark:text-text-muted'>Protect the following from any accidental damage</p>
            <CoverageSection
              title="Liability"
              items={liabilityCoverage}
            />
             <CoverageSection
              title="Perils"
              items={perilsCoverage}
            />

            {/* Disclaimer */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-text-secondary dark:text-text-muted">
                    *as per policy conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidencePage;