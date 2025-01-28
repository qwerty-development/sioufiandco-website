'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  School,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  User,
  Users,
  Shield
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }:any) => (
  <div className="bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/20 rounded-lg p-6 flex flex-col items-center transition-all duration-300">
    <div className="text-yellow-500 mb-4">
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

const CoverageSection = ({ title, items }:any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 md:p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary dark:text-text-light">
          {title}
        </h3>
        <div className="text-yellow-500 transition-transform duration-300">
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
              <BadgeCheck className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const SchoolsPage = () => {
  const features = [
    { icon: <User className="w-8 h-8" />, title: "Student Physical Coverage", description: "Comprehensive physical coverage for students, ensuring their well-being." },
    { icon: <Users className="w-8 h-8" />, title: "Individual Life Insurance", description: "Life insurance policies tailored for individuals associated with the school." },
    { icon: <Shield className="w-8 h-8" />, title: "School Liability", description: "Coverage for the school's liability towards students, providing a safety net." },
  ];
  
  const physicalCoverage = [
    "Accidental Death",
    "Permanent total or partial disability due to an accident",
    "Medical expenses resulting from an accident",
  ];

  const schoolLiabilityCoverage = [
      "Third party bodily injury",
      "Third party property damage",
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
              <School className="w-12 h-12 text-yellow-500" />
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-light">
                Schools
              </h1>
            </motion.div>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-muted max-w-3xl mx-auto">
              Comprehensive insurance solutions designed to protect schools, students, and staff. From physical coverage to liability protection, we ensure a safe and secure educational environment.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Sections */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <CoverageSection 
              title="Physical Coverage for Students"
              items={physicalCoverage}
            />
            <CoverageSection 
              title="School Liability Coverage"
              items={schoolLiabilityCoverage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolsPage;