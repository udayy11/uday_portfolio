import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheck } from 'react-icons/fi';
import { SiGmail, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast';

/**
 * Contact Section Component
 * Contact form and social media links
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'Uday Verma',
    email: 'udayverma112006@gmail.com',
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

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 4,
        position: 'bottom-center',
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        duration: 4,
        position: 'bottom-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

const contactMethods = [
  {
    icon: <SiGmail className="w-6 h-6" />,
    title: 'Email',
    value: 'udayverma112006@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=udayverma112006@gmail.com',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    title: 'LinkedIn',
    value: 'Uday Verma',
    href: 'https://linkedin.com/in/uday-verma-b70ab621a',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <SiGithub className="w-6 h-6" />,
    title: 'GitHub',
    value: 'udayy11',
    href: 'https://github.com/udayy11/udayy11',
    color: 'from-gray-700 to-gray-800',
  },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Let's collaborate and create something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 space-y-4"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="group"
              >
                <div className="p-4 glass-dark rounded-lg hover:glass transition-all duration-300">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.color} p-2 text-white mb-2 group-hover:scale-110 transition-transform`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-emerald-300 transition-colors truncate">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="md:col-span-2 space-y-4 glass-dark rounded-2xl p-8"
          >
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder-gray-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder-gray-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="5"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 rounded-lg font-bold hover:shadow-glow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-5 h-5 border-2 border-transparent border-t-slate-900 rounded-full"
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FiCheck className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {/* Footer Note */}
            <p className="text-xs text-gray-400 text-center">
              I'll get back to you as soon as possible. Looking forward to connecting!
            </p>
          </motion.form>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center p-8 glass-dark rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want to work together?</h3>
          <p className="text-gray-400 mb-6">
            I'm always open to exciting opportunities and collaborations. Whether you have a project in mind or just
            want to chat about technology, feel free to reach out!
          </p>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=udayverma112006@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/30 transition-colors"
          >
            <FiMail className="w-5 h-5" />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
