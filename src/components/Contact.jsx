import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { SiGmail, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast';

/**
 * Contact Section
 * Form + contact methods, single CTA intent
 */
const Contact = () => {
  const ease = [0.16, 1, 0.3, 1];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent. I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <SiGmail className="w-5 h-5" />,
      title: 'Email',
      value: 'udayverma112006@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=udayverma112006@gmail.com',
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      title: 'LinkedIn',
      value: 'Uday Verma',
      href: 'https://linkedin.com/in/uday-verma-b70ab621a',
    },
    {
      icon: <SiGithub className="w-5 h-5" />,
      title: 'GitHub',
      value: 'udayy11',
      href: 'https://github.com/udayy11/udayy11',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-5 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="text-zinc-400 text-base mb-16 max-w-lg"
        >
          Have a project in mind or want to chat about technology? Reach out and I'll get back to you.
        </motion.p>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="space-y-4"
          >
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800/60 border border-white/[0.04] flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors flex-shrink-0">
                  {method.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-200">{method.title}</p>
                  <p className="text-xs text-zinc-500 truncate">{method.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-zinc-900/60 border border-white/[0.06] text-zinc-100 rounded-lg focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder-zinc-600 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-zinc-900/60 border border-white/[0.06] text-zinc-100 rounded-lg focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder-zinc-600 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What's on your mind?"
                rows="5"
                className="w-full px-4 py-3 bg-zinc-900/60 border border-white/[0.06] text-zinc-100 rounded-lg focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder-zinc-600 text-sm resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-zinc-950 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-transparent border-t-zinc-950 rounded-full"
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
