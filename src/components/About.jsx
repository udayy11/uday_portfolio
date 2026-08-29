import React from 'react';
import { motion } from 'framer-motion';

/**
 * About Section
 * Profile image + bio with stats row below
 */
const About = () => {
  const ease = [0.16, 1, 0.3, 1];

  const highlights = [
    'Full-Stack Development',
    'Machine Learning & AI',
    'Data Structures & Algorithms',
    'Large Language Models & Agentic AI',
    'Linux & Operating Systems',
    'Scalable Technology Solutions',
  ];

  const stats = [
    { number: '10+', label: 'Projects' },
    { number: '50+', label: 'DSA Problems' },
    { number: '2+', label: 'Years Experience' },
    { number: '5+', label: 'Hackathons' },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-5 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header: left-aligned, no eyebrow */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Image (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Uday Verma"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-zinc-400 text-base leading-relaxed max-w-[65ch]">
              I'm a Computer Science Engineering undergraduate with a passion for building innovative
              solutions using modern technology. My expertise spans across full-stack web development,
              artificial intelligence, and machine learning.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed max-w-[65ch]">
              I'm particularly interested in exploring AI agents, large language models, and
              how they can transform the way we solve problems. My technical foundation includes deep
              knowledge of data structures, algorithms, databases, and operating systems.
            </p>

            {/* Highlights as compact list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 pt-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <div className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 rounded-xl overflow-hidden border border-white/[0.06]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-900/50 p-6 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">{stat.number}</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
