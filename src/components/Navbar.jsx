import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

/**
 * Navbar Component
 * Fixed navigation with scroll-aware background and responsive mobile menu
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-zinc-100 hover:text-emerald-400 transition-colors"
          >
            <span className="font-bold text-lg tracking-tight">UV</span>
            <span className="text-zinc-500 font-light hidden sm:inline">/ portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="/resume.pdf"
              download="Uday_Verma_Resume.pdf"
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-950 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors duration-200"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 pb-4 pt-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download="Uday_Verma_Resume.pdf"
                  className="mx-3 mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-950 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
                >
                  <FiDownload className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
