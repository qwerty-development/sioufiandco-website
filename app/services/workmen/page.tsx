'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HardDrive,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Users,
  Shield,
  PlusCircle
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }: any) => (
  <div className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg p-6 flex flex-col items-center transition-all duration-300">
    <div className="text-red-500 mb-4">
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
    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 md:p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary dark:text-text-light">
          {title}
        </h3>
        <div className="text-red-500 transition-transform duration-300">
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
              <BadgeCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const WorkmenCompensationPage = () => {
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
              <HardDrive className="w-12 h-12 text-red-500" />
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-light">
                Workmen Compensation
              </h1>
            </motion.div>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-muted max-w-3xl mx-auto">
              Protect your Employees from unpredictable accidents that might happen even when
              safety measures are taken.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-text-secondary dark:text-text-muted text-lg">
            Workmen Compensation Insurance Plan will offer you Peace of Mind by covering the
            wage replacement and medical benefits to employees injured in the course of
            employment.
          </p>
          <p className="text-text-secondary dark:text-text-muted text-lg">
            Secure your Business today by covering your Legal Responsibilities towards Employees
            as mandatory requested by the Lebanese Labor Law Decree # 136.
          </p>

          {/* Additional Coverage Option */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <PlusCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-light">
                  Employers Liability Extension
                </h3>
                <p className="text-text-secondary dark:text-text-muted">
                  You can always add the Employers Liability extension.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
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

export default WorkmenCompensationPage;