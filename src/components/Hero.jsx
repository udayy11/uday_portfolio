import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

/**
 * Hero Section
 * Split layout: text left, profile image right
 */
const Hero = () => {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center pt-16 px-5 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Text content */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-sm font-mono text-emerald-400 mb-4"
          >
            Full-Stack Developer & AI/ML Enthusiast
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-100 mb-6"
          >
            Uday Verma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mb-10"
          >
            CS undergrad building scalable web apps and exploring AI systems.
            Turning ideas into production-ready solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-950 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
            >
              <span>View Projects</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3"
          >
            {[
              { href: 'https://github.com/udayy11/udayy11', icon: FiGithub, label: 'GitHub' },
              { href: 'https://linkedin.com/in/uday-verma-b70ab621a', icon: FiLinkedin, label: 'LinkedIn' },
              { href: 'mailto:udayverma112006@gmail.com', icon: FiMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-500 hover:text-emerald-400 hover:bg-zinc-800/60 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <img
              src="/profile.jpg"
              alt="Uday Verma"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Subtle ambient glow behind image */}
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
