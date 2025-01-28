'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Home,
  Baby,
  Microscope,
  Activity,
  Bone,
  VenetianMask,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  BadgeCheck,
  Building2
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }:any) => (
  <div className="bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg p-6 flex flex-col items-center transition-all duration-300">
    <div className="text-rose-500 mb-4">
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
    <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-6 md:p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary dark:text-text-light">
          {title}
        </h3>
        <div className="text-rose-500 transition-transform duration-300">
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
              <BadgeCheck className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const HealthcarePage = () => {
  const features = [
    { icon: <CircleDollarSign className="w-8 h-8" />, title: "Unlimited Coverage", description: "Comprehensive financial coverage for your healthcare needs" },
    { icon: <Home className="w-8 h-8" />, title: "Home Care", description: "Extended benefits for home care services" },
    { icon: <Baby className="w-8 h-8" />, title: "Maternity Benefits", description: "Complete maternity coverage from first renewal" },
    { icon: <Microscope className="w-8 h-8" />, title: "Diagnostic Procedures", description: "All diagnostic endoscopic and surgical procedures" },
    { icon: <Activity className="w-8 h-8" />, title: "Emergency Coverage", description: "Full coverage for accidents and emergencies" },
    { icon: <Bone className="w-8 h-8" />, title: "Physiotherapy", description: "Treatment related to covered hospitalization" },
  ];

  const standardCoverage = [
    "Unlimited financial coverage",
    "Home care benefits",
    "Maternity benefits as of the first renewal including delivery, medically mandated abortion, miscarriage and epidural",
    "All diagnostic Endoscopic and surgical procedures",
    "Medical expenses resulting from emergency cases and accidents including work related accidents",
    "Physiotherapy treatment related to a covered hospitalization",
    "Prosthesis related to post traumatic accidents without financial limitation if due to an illness including coronary stents",
    "Radiotherapy treatment including linear accelerator and chemotherapy",
    "Morgue and burial expenses if the insured dies at the hospital",
  ];

  const foreignWorkerCoverage = [
    "Limited in network",
    "One built in laboratory test",
    "Option to increase the limitation to USD75,000",
    "Option to add Three ambulatory transactions",
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
              <Heart className="w-12 h-12 text-rose-500" />
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-light">
                Healthcare & Medical
              </h1>
            </motion.div>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-muted max-w-3xl mx-auto">
              Having health insurance is a significant decision if you can set yourself up with a plan that maintains 
              the healthiness of you and your family in the event of any accidents or illnesses.
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
              title="Standard Coverage" 
              items={standardCoverage} 
            />
            
            {/* COVID-19 Notice */}
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <VenetianMask className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-text-primary dark:text-text-light mb-2">
                    COVID-19 Coverage
                  </h3>
                  <p className="text-text-secondary dark:text-text-muted">
                    In reference to the decision of the Ministry of Trade & Economy number 80/LMD issued on 15 April 2020, 
                    all medical policies issued effective date 1 May 2020, will cover reasonable, usual and customary (UCR) 
                    medical costs and expenses which may be incurred consequent to the insured&apos;s becoming infected with an 
                    agent of an epidemic/pandamic disease, while this policy is in force.
                  </p>
                </div>
              </div>
            </div>

            {/* Foreign Worker Insurance */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Building2 className="w-8 h-8 text-rose-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-text-light">
                  Foreign Worker Insurance
                </h2>
              </div>
              
              <p className="text-text-secondary dark:text-text-muted">
                Ensure the success of your business operations by taking good care of your foreigner workers. 
                The Foreigner Insurance product is intended to provide foreigners working in Lebanon comprehensive 
                coverage for medical and surgical in-hospital treatments.
              </p>

              <CoverageSection 
                title="Foreign Worker Coverage" 
                items={foreignWorkerCoverage} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcarePage;