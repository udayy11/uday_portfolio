import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

/**
 * Footer Component
 * Simple, clean footer with social links and copyright
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      href: 'https://github.com/udayy11/udayy11',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/uday-verma-b70ab621a',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      href: 'mailto:udayverma112006@gmail.com',
      label: 'Email',
      color: 'hover:text-emerald-400',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 glass-dark border-t border-emerald-500/20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-30 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="font-bold text-slate-900 text-xl">{'<'}</span>
              </div>
              <span className="font-bold text-xl gradient-text">Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Full-Stack Developer | AI/ML Enthusiast | Building the future with code
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center space-y-4"
          >
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end space-y-4"
          >
            <h4 className="font-semibold text-white">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg glass-dark text-gray-400 transition-colors ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center space-y-4"
        >
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            Designed & Developed by <span className="font-semibold text-emerald-400">Uday Verma</span> © {currentYear}
          </p>

          {/* Additional Info */}
          <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity }}>
              <FiHeart className="w-4 h-4 text-emerald-400" />
            </motion.div>
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Tech Stack */}
          <p className="text-xs text-gray-500">
            Built with React • Tailwind CSS • Framer Motion • Hosted on Vercel
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
