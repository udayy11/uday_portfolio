import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

/**
 * Footer
 * Minimal: brand + copyright + social icons
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub className="w-4 h-4" />, href: 'https://github.com/udayy11/udayy11', label: 'GitHub' },
    { icon: <FiLinkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/uday-verma-b70ab621a', label: 'LinkedIn' },
    { icon: <FiMail className="w-4 h-4" />, href: 'mailto:udayverma112006@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 px-5 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-zinc-500">
          {currentYear} Uday Verma
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={social.label}
              className="w-8 h-8 flex items-center justify-center rounded-md text-zinc-500 hover:text-emerald-400 hover:bg-zinc-800/40 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
