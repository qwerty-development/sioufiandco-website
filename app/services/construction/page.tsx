'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HardHat,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Hammer,
  Wrench,
  Shield
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }: any) => (
  <div className="bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 rounded-lg p-6 flex flex-col items-center transition-all duration-300">
    <div className="text-orange-500 mb-4">
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
    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 md:p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary dark:text-text-light">
          {title}
        </h3>
        <div className="text-orange-500 transition-transform duration-300">
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
              <BadgeCheck className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const ConstructionPage = () => {
  const coverageItems = [
    "The cost of unforeseen loss or damage to building works",
    "Machinery plant and equipment",
    "Public liability",
    "Tools",
    "Equipment erection"
  ];

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
              <HardHat className="w-12 h-12 text-orange-500" />
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-light">
                Construction
              </h1>
            </motion.div>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-muted max-w-3xl mx-auto">
              Contractors' all-risk insurance is a policy that covers all risks normally associated with a construction project.
              Issued commonly under the joint names of a contractor and a principal client it can protect against a range of unforeseen events.
            </p>
          </div>
        </div>
      </div>

      {/* Coverage Section */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoverageSection
            title="Overview"
            items={coverageItems}
          />
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;