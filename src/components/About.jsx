import React from 'react';
import { motion } from 'framer-motion';

/**
 * About Section Component
 * Professional summary with key areas of expertise
 */
const About = () => {
  const highlightItems = [
    '💻 Full-Stack Development',
    '🤖 Machine Learning & AI',
    '📊 Data Structures & Algorithms',
    '🔗 Large Language Models & Agentic AI',
    '🐧 Linux & Operating Systems',
    '🚀 Scalable Technology Solutions',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know more about my journey and expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass-dark p-1">
              {/* Placeholder for image */}
                <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a Computer Science Engineering undergraduate with a passion for building innovative
              solutions using modern technology. My expertise spans across full-stack web development,
              artificial intelligence, and machine learning.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I'm particularly interested in exploring AI agents, large language models (LLMs), and
              how they can transform the way we solve problems. My technical foundation includes deep
              knowledge of data structures, algorithms, databases, and operating systems.
            </p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mt-8"
            >
              {highlightItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 px-6 py-3 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/30 transition-colors duration-200"
            >
              Learn More About Me
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '50+', label: 'DSA Problems' },
            { number: '2+', label: 'Years Experience' },
            { number: '5+', label: 'Hackathons' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 glass-dark rounded-lg text-center group"
            >
              <h3 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
