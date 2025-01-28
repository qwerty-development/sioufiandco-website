'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Briefcase,
  Shield,
  DollarSign,
  Users,
  Heart
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }: any) => (
  <div className="bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg p-6 flex flex-col items-center transition-all duration-300">
    <div className="text-indigo-500 mb-4">
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
    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-6 md:p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary dark:text-text-light">
          {title}
        </h3>
        <div className="text-indigo-500 transition-transform duration-300">
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
              <BadgeCheck className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const BusinessPage = () => {
  const coverageItems = [
    "Property All Risk",
    "Political violence",
    "Money policy",
    "Burglary: Money Insurance covers 'Money' carried by the Insured or the authorized employees / messengers while in transit. Money means and includes cash, checks.",
    "Third party liability (Material damage and bodily injuries)",
    "Accidents related to staff | Workmen compensation",
    "Medical and life scheme"
  ];
  
  const moneyPolicyCoverage = [
      "Loss of money in transit, by the Insured or the Insured's authorized employee(s), occasioned by robbery, theft or hold up.",
      "Loss of money in safe, e, by burglary, or hold-up & fidelity guaranty"
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
              <Building2 className="w-12 h-12 text-indigo-500" />
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-light">
                Business
              </h1>
            </motion.div>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-muted max-w-3xl mx-auto">
              A policy designed to help preserve the dream you fought so hard to
              achieve or are currently in the process of achieving. The SME/Business
              combined insurance is the perfect dedicated umbrella plan to protect your
              business.
            </p>
          </div>
        </div>
      </div>

      {/* Coverage Section */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <CoverageSection
            title="Coverage"
            items={coverageItems}
          />
          <CoverageSection
            title="Money Policy"
            items={moneyPolicyCoverage}
          />

          {/* Disclaimer Section */}
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
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
  );
};

export default BusinessPage;