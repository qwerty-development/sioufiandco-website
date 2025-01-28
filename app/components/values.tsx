"use client";

import { motion } from "framer-motion";
import { Diamond, Heart, Trophy } from "lucide-react";
import Link from "next/link";

export default function ValuesSection() {
  const values = [
    {
      icon: <Diamond className="h-16 w-16" />,
      title: "Innovation",
      description: "Pioneering solutions for tomorrow",
    },
    {
      icon: <Heart className="h-16 w-16" />,
      title: "Loyalty",
      description: "Building lasting relationships",
    },
    {
      icon: <Trophy className="h-16 w-16" />,
      title: "Professionalism",
      description: "Excellence in every interaction",
    },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mb-20"
      >
        <p className="font-title text-4xl md:text-5xl text-text-primary dark:text-text-light">
          Excellence and commitment since 1954
        </p>
        <p className="text-text-secondary dark:text-text-muted mt-6 text-xl md:text-2xl">
          To distinctive client service
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/about"
            className="inline-block mt-8 px-6 py-3 text-lg font-semibold text-text-light bg-gold-600 hover:bg-brand-secondary rounded-md transition-colors duration-300"
          >
            Read More
          </Link>
        </motion.div>
      </motion.div>

      <div className="relative overflow-hidden md:overflow-visible pb-8">
        <div className="block md:hidden">
          <motion.div
            className="flex gap-6"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...values, ...values, ...values].map((value, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 w-[300px] flex-shrink-0"
              >
                <div className="text-brand-primary mb-6">{value.icon}</div>
                <h3 className="font-title text-2xl text-text-primary dark:text-text-light mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary dark:text-text-muted text-center text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-12 px-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              className="flex flex-col items-center p-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-brand-primary mb-8"
              >
                {value.icon}
              </motion.div>
              <h3 className="font-title text-3xl text-text-primary dark:text-text-light mb-4">
                {value.title}
              </h3>
              <p className="text-text-secondary dark:text-text-muted text-center text-xl">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
