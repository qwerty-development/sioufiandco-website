'use client'

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Diamond, Heart, Trophy, ChevronDown, ChevronUp } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Diamond className="h-16 w-16" />,
      title: "Innovation",
      summary: "Creating new ideas and pragmatic solutions for our clients.",
      description: "Committed to continuous development in creating new ideas and pragmatic solutions that anticipates the client's needs and solves business challenges. Sioufi & Co will help you understand the risk that you can encounter and craft the best solution for you, your family or your business."
    },
    {
      icon: <Heart className="h-16 w-16" />,
      title: "Loyalty",
      summary: "Building lasting relationships since our inception.",
      description: "At Sioufi & Co the client is at the heart of the process. Indeed, most of the clientele is there since the inception of the company. Loyalty is and will remain the cornerstone of the business."
    },
    {
      icon: <Trophy className="h-16 w-16" />,
      title: "Professionalism",
      summary: "65 years of excellence and commitment to service.",
      description: "65 years of experience, 65 years of excellence, and commitment to distinctive client service… We offer insightful, useful advice you can trust allowing us to deliver accurate, secure, and reliable insurance solutions, and services."
    }
  ];

  const ValueCard = ({ value, index }:any) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="flex flex-col items-center p-6 sm:p-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
        <div className="text-brand-primary mb-8">
          {value.icon}
        </div>
        <h3 className="font-title text-2xl sm:text-3xl mb-4 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent">
          {value.title}
        </h3>
        
        {/* Summary Text */}
        <p className="text-text-secondary dark:text-text-muted text-center text-base sm:text-lg mb-4">
          {value.summary}
        </p>
  
        {/* Expand/Collapse Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 p-2 text-text-secondary dark:text-text-muted hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300"
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Read Less' : 'Read More'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
  
        {/* Full Description */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-text-secondary dark:text-text-muted text-center text-base sm:text-lg pt-4 border-t border-white/10">
                {value.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark">
      {/* Hero Section */}
      <div className="relative bg-blue-300 dark:bg-blue-300">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-title text-4xl sm:text-6xl md:text-7xl mb-6 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent">
              Excellence and commitment to distinctive client service since 1954
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg font-bold sm:text-xl text-black dark:text-white">                Sioufi & Co is a leading insurance brokerage firm based in Lebanon. Founded in 1954, by Mr. Michel Sioufi, 
                a pioneer in the insurance market in Lebanon, his vision was to build a company that relies on strong 
                partnerships and strong commitments towards their clients.
              </p>
              <p className="text-lg sm:text-xl text-black dark:text-white">
                Imposing a set of values, through hard work, determination and conviction, his legacy remains intact 
                through his children, managers of Sioufi & Co today.
              </p>
            </motion.div>
            <div className="relative aspect-square md:aspect-auto md:h-[600px]">
              <Image 
                src="/founder.png"
                alt="Founder"
                fill
                className="rounded-lg shadow-xl object-contain md:object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-primary-light dark:bg-primary-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-title text-4xl sm:text-5xl md:text-6xl text-center mb-6 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-12">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Loyalty Promise Section */}
      <div className="bg-primary-light dark:bg-primary-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent">
              A loyalty promise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent mt-2 via-gold-500 to-transparent mx-auto mb-8" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-center mb-16">
            <p className="text-lg sm:text-xl text-text-secondary dark:text-text-muted">
              At Sioufi & Co, we honor our commitments and promises.
            </p>
            <p className="text-lg sm:text-xl text-text-secondary dark:text-text-muted">
              You know the true value of your insurance broker when an incident happens... 
              Treating your claim in the most efficient way is for us as managers and for all our team a priority.
            </p>
            <p className="text-lg sm:text-xl text-text-secondary dark:text-text-muted">
              Since 1954, Sioufi & Co has risen to challenges of the most complex kind of cases providing 
              the best solution serving every client with a consistent service, highly qualitative and valuable solutions.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-text-primary dark:text-text-light mt-8">
              Our loyalty is always to our partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6">
                <Image 
                  src="/nicolasSioufi.png"
                  alt="Nicolas Sioufi"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-title text-xl sm:text-2xl bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent">
                Nicolas Sioufi
              </h3>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6">
                <Image 
                  src="/lindaSioufi.png"
                  alt="Linda Sioufi"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-title text-xl sm:text-2xl bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent">
                Linda Sioufi
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;