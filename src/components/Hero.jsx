import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

/**
 * Hero Section Component
 * Landing section with CTA buttons and animated background
 */
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-500" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto z-10 text-center"
      >
        {/* Welcome Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-dark mb-6"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-emerald-400">Welcome to my portfolio</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white mb-2">Hi, I'm</span>
          <span className="gradient-text text-6xl sm:text-7xl lg:text-8xl">Uday Verma</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-4 font-mono"
        >
          Computer Science Engineering Undergraduate
        </motion.p>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-emerald-400 font-semibold mb-8"
        >
          Full-Stack Developer | AI/ML Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about building scalable web applications, exploring AI systems, and solving
          real-world problems through technology. Experienced in modern web development, machine
          learning, and creating innovative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 rounded-lg font-bold hover:shadow-glow-lg transition-all duration-200"
          >
            <span>View Projects</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-lg font-bold hover:bg-emerald-500/10 transition-all duration-200"
          >
            <span>Contact Me</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href="https://github.com/udayy11/udayy11"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="w-12 h-12 flex items-center justify-center rounded-lg glass-dark hover:bg-emerald-500/20 transition-colors"
          >
            <FiGithub className="w-6 h-6 text-gray-400 hover:text-emerald-400" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/uday-verma-b70ab621a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="w-12 h-12 flex items-center justify-center rounded-lg glass-dark hover:bg-emerald-500/20 transition-colors"
          >
            <FiLinkedin className="w-6 h-6 text-gray-400 hover:text-emerald-400" />
          </motion.a>

          <motion.a
            href="mailto:udayverma112006@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="w-12 h-12 flex items-center justify-center rounded-lg glass-dark hover:bg-emerald-500/20 transition-colors"
          >
            <FiMail className="w-6 h-6 text-gray-400 hover:text-emerald-400" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
