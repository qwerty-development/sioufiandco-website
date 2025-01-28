'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Truck,
  Circle,
  Bike
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }: any) => (
  <div className="bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg p-6 flex flex-col items-center transition-all duration-300">
    <div className="text-purple-500 mb-4">
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
    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6 md:p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary dark:text-text-light">
          {title}
        </h3>
        <div className="text-purple-500 transition-transform duration-300">
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
              <BadgeCheck className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const MotorPage = () => {
  const motorTypes = [
    "Car",
    "Bus",
    "Truck",
    "Van",
    "Pick-up",
    "Motorcycle"
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
              <Car className="w-12 h-12 text-purple-500" />
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-light">
                Motor
              </h1>
            </motion.div>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-muted max-w-3xl mx-auto">
              One of the most vital benefits of car insurance is that it helps to keep you on the right side of the law. It is mandatory that all cars circulating on the Lebanese territory are to be insured for compulsory (bodily injury to third parties) car insurance in accordance with Lebanese law. Whether it is theft or damage, all risk coverage helps you pay the fees to repair your car with the possibility of an extension to include natural disasters and hail.
            </p>
          </div>
        </div>
      </div>

      {/* Motor Types Section */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary dark:text-text-light mb-8 text-center">List of Motors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {motorTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-text-secondary dark:text-text-muted">
                {type === "Car" && <Car className="w-6 h-6 text-purple-500" />}
                {type === "Bus" && <Car className="w-6 h-6 text-purple-500" />}
                {type === "Truck" && <Truck className="w-6 h-6 text-purple-500" />}
                {type === "Van" && <Truck className="w-6 h-6 text-purple-500" />}
                {type === "Pick-up" && <Truck className="w-6 h-6 text-purple-500" />}
                {type === "Motorcycle" && <Bike className="w-6 h-6 text-purple-500" />}
                
                <span className="text-lg">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="py-16 md:py-24 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
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

export default MotorPage;